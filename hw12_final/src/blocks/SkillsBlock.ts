import { Skills } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SkillsBlock implements IBlock {
  constructor(private d: Skills) {}

 
  render(): HTMLElement {
    
    const sec = document.createElement("section");
    sec.className = "section skills";
    sec.innerHTML = "<h2>Skills</h2>";

    Object.entries(this.d).forEach(([category, items]) => {
      const listItem = document.createElement("li");
      const categoryText = document.createElement("strong");
      categoryText.textContent = `${category}: `;
      listItem.appendChild(categoryText);
      listItem.append((items as string[]).join(", "));
      
      if (!sec.querySelector("ul")) {
        const ul = document.createElement("ul");
        ul.className = "skills-list";
        sec.appendChild(ul);
      }
      sec.querySelector("ul")!.appendChild(listItem);
    });

    return sec;
  }
}