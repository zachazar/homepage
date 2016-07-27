import * as d3 from "d3/d3.min.js";
import './skillTree.scss';

export default class SkillTree{
  
  constructor(id, data, skills, width){
    this.data = data;
    this.skillData = skills;
    
    this.active = null;
    
    
    //SVG
    this.svg = d3.select(id);
    
    //A selection of all of the skill groups
    this.allSkills = null;

    //Settings for the app
    this.settings = {
      fontSize : 16,
      margin : {
        top: 10,
        bottom: 10,
        left: 10,
        right: 30
      },
      itemMargin: 10
    };
    
    //Adjust width/height with margin
    this.svgWidth = width;
    this.width = width - (this.settings.margin.left + this.settings.margin.right);

    this.svgHeight = Object.keys(this.skillData).length * (this.settings.fontSize + 
      this.settings.margin.bottom) + this.settings.margin.top + this.settings.margin.bottom;

    //Initialize and size svg
    this.initSVG();
    this.sizeSVG();
    
    //Initialize and render the data (with nothing active)
    this.initData();
    this.Render(null);
  }

  Render(active){
    this.active = active;

    //Sort the data based on the active key
    this.sortData(active);
    
    //Render the data in the correct places
    this.allSkills.selectAll(".skill__group")
      .transition()
      .duration(1000)
      .attr("transform",(d,i) => { 
        return `translate(0,${i*(this.settings.fontSize + this.settings.itemMargin)})`;});
    
    //Adjust rectangle widths and opacities to skill's value
    this.allSkills.selectAll(".skill__rect")
      .transition()
      .duration(1000)
      .attr("width", (d) => {
        if (active){
          let value = this.data[active].skills[d.id] ? this.data[active].skills[d.id].val : 0;
          return this.width * value / 10;
        }
        else {
          return 0;
        }
      })
      .attr("fill-opacity", (d) => {
        if (active){
          let value = this.data[active].skills[d.id] ? this.data[active].skills[d.id].val: 0;
          return value/10;
        }
        else {
          return 0;
        }
      });

    //If the skill is active, make it white over the rectangle
    this.allSkills.selectAll(".skill__text")
      .transition()
      .duration(1000)
      .style("fill",(d) => {
        if (active){
          return this.data[active].skills[d.id] ? "white" : "black";
        }
        else{
          return "black";
        }
       });
  }

  Resize(width){
    //Adjust width/height with margin
    this.svgWidth = width;
    this.width = width - (this.settings.margin.left + this.settings.margin.right);
    this.svg
      .attr("width",this.svgWidth);
    this.Render(this.active);
  }

  //helpers ------------------------------------------
  initSVG(){
    //Create the group to hold the skills and translate it with the margins
    this.allSkills = this.svg.append("g")
      .attr("transform",`translate(${this.settings.margin.left},${this.settings.margin.top})`);
  }

  sizeSVG(){
    this.svg
      .attr("width",this.svgWidth)
      .attr("height",this.svgHeight);
  }

  initData(){
    //Create a new skill group for each group
    this.skills = this.allSkills.selectAll(".skill__group")
      .data( d3.values(this.skillData), (d) => {return d.id;})
      .enter()
        .append('g')
        .attr("class","skill__group")
        .style("font-size",this.settings.fontSize)
        .attr("transform",(d,i) => { return `translate(0,${i*(this.settings.fontSize + this.settings.itemMargin)})`;})
        .on("mouseenter", (_,i,selection) => {
          //Grow the rectangle
          d3.select(selection[i]).select('.skill__rect')
            .transition()
            .duration(200)
              .attr("width",this.width)
              .attr("rx",0)
              .attr("ry",0);
        })
        .on("mouseleave", (_,i,selection) => {
          //Shrink the rectangle back to it's size proportional to the value
          d3.select(selection[i]).select('.skill__rect')
            .transition()
            .duration(200)
              .attr("width", (d) => {
                if (this.active){
                  let value = this.data[this.active].skills[d.id] ? this.data[this.active].skills[d.id].val : 0;
                  return this.width * value / 10;
                }
                else {
                  return 0;
                }
              })
              .attr("rx",10)
              .attr("ry",10);
        });
    
    //Create te rectangles
    this.skills.append('rect')
      .attr("class","skill__rect")
      .attr("x",0)
      .attr("y",-this.settings.fontSize/2)
      .attr("width",0)
      .attr("height",20)
      .attr("rx",10)
      .attr("ry",10);

    //Create the texts
    this.skills.append('text')
      .attr("class","skill__text")
      .attr("x",0)
      .attr("y", 0)
      .attr("dx","0.5em")
      .text((d) => {return d.name;})
      .attr("text-anchor","start")
      .attr("dominant-baseline","mathematical");
  }

  sortData(active){
    this.skills.sort( (a,b) => {
      if (active){
        
        //Active item has both skills
        if (this.data[active].skills[a.id] && this.data[active].skills[b.id]){
          
          //Sort on value, breaking tie alphabetically
          return this.data[active].skills[a.id].val === this.data[active].skills[b.id].val ?
            a.name <= b.name ? -1: 1 :
            this.data[active].skills[b.id].val - this.data[active].skills[a.id].val;
        }
        
        //The active item is missing one or both of the skills.
        else{
          
          //Return the non-missing skill, or sort alphabetically if neither exists
          return  this.data[active].skills[a.id] ? -1 : 
                  this.data[active].skills[b.id] ? 1 :
                  a.name <= b.name ? -1: 1; 
        }
      }
      //Nothing is active
      else{
        //Sort alphabetically
        return a.name <= b.name ? -1: 1;
      }
    });
  }
}