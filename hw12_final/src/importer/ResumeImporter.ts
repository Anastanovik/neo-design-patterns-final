import { AbstractImporter } from "./AbstractImporter";
import { ResumeModel } from "../models/ResumeModel";
import { BlockFactory } from "../blocks/BlockFactory";

export class ResumeImporter extends AbstractImporter<ResumeModel> {
  
  protected validate(): void {
    const obj = this.raw as Record<string, unknown>;
    const required = ["header", "summary", "experience", "education", "skills"];
    
    for (const field of required) {
      if (!(field in obj)) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    if (!obj.header || typeof obj.header !== "object") {
      throw new Error("Invalid header structure");
    }
    if (!obj.summary || typeof obj.summary !== "object") {
      throw new Error("Invalid summary structure");
    }
    if (!Array.isArray(obj.experience)) {
      throw new Error("experience must be an array");
    }
    if (!Array.isArray(obj.education)) {
      throw new Error("education must be an array");
    }
    if (!obj.skills || typeof obj.skills !== "object") {
      throw new Error("Invalid skills structure");
    }
  }

  
  protected map(): ResumeModel {
    return this.raw as ResumeModel;
  }

  protected render(model: ResumeModel): void {
    const root = document.getElementById("resume-content")!;
    const factory = new BlockFactory();

    
    root.innerHTML = "";

    
    const blocks = [
      factory.createBlock("header", model),
      factory.createBlock("summary", model),
      factory.createBlock("experience", model),
      factory.createBlock("education", model),
      factory.createBlock("skills", model),
    ];

    blocks.forEach((block) => {
      root.appendChild(block.render());
    });
  }
}