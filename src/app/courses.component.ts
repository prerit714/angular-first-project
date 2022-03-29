import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  // The idea is to define custom html-elements
  selector: "courses", // courses will be the selector name
  // Using data-binding and interpolation syntax ({{}} syntax), whenever the value
  // of title changes, the component is re-rendered
  // Any valid JS expression is allowed between {{}}
  // We use directives to manipulate the DOM
  template: `
    <h2>{{ "Titiles are " + getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
})
export class CoursesComponent {
  // Leaving this class empty for now 
  // Define a field "title"
  title: string = "List of courses";
  courses: string[];
  constructor() {
    // using a service to initialize my courses field
    let service = new CoursesService();
    this.courses = service.getCourses();
  }
  getTitle(): string {
    return this.title;
  }
  // Generally we use an http-request to get data from the server
  // which is then output using template, using a method-created
  // The best practice is to use component for only handling the UI
  // logic, If you have to use an http-request to get some result
  // from a server/api, use angular services. A really good practice
  // that seperates UI logic and Business logic from each other.
}
