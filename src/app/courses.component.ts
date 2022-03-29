import { Component } from "@angular/core";

@Component({
  // The idea is to define custom html-elements
  selector: "courses", // courses will be the selector name
  // Using data-binding and interpolation syntax ({{}} syntax), whenever the value
  // of title changes, the component is re-rendered
  // Any valid JS expression is allowed between {{}}
  template: `
    <h2>{{ "Titiles are: " + getTitle() }}</h2>
  `,
})
export class CoursesComponent {
  // Leaving this class empty for now 
  // Define a field "title"
  title: string = "List of courses";

  getTitle(): string {
    return this.title;
  }
}
