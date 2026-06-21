import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class HeaderBlock implements IBlock {
  constructor(private d: ResumeModel["header"]) {}

  
  render(): HTMLElement {
 
    const header = document.createElement("header");
    header.className = "section header";

    const h1 = document.createElement("h1");
    h1.textContent = this.d.fullName;
    header.appendChild(h1);

    const title = document.createElement("p");
    title.style.fontStyle = "italic";
    title.textContent = this.d.title;
    header.appendChild(title);

    const contacts = document.createElement("p");
    const contactParts = [];
    if (this.d.contacts.email) contactParts.push(this.d.contacts.email);
    if (this.d.contacts.phone) contactParts.push(this.d.contacts.phone);
    if (this.d.contacts.location) contactParts.push(this.d.contacts.location);
    contacts.textContent = contactParts.join(" ");
    header.appendChild(contacts);

    return header;
  }
}