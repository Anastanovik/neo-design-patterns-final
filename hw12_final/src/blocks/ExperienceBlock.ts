import { Experience, Project } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";
import { ProjectBlock } from "./ProjectBlock";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ExperienceBlock implements IBlock {
  constructor(private d: Experience[]) {}

  
  render(): HTMLElement {
    
    const container = document.createElement("section");
    container.className = "section experience";
    container.innerHTML = "<h2>Experience</h2>";

    
    this.d.forEach((exp) => {
      const expItem = document.createElement("div");
      expItem.className = "experience-item";
      expItem.innerHTML = `<strong>${exp.position}</strong> at <em>${exp.company}</em> (${exp.start} – ${exp.end})`;
      container.appendChild(expItem);

      
      exp.projects.forEach((project) => {
        let block: IBlock = new ProjectBlock(project);
        
        
        if (project.isRecent) {
          block = new HighlightDecorator(block);
        }
        
        container.appendChild(block.render());
      });
    });

    return container;
  }
}