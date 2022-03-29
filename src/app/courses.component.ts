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
    <h2>{{ "The title is: " + getTitle() }}</h2>
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
  constructor(
    // When I pass service: CoursesService as a constructor's dependency,
    // I want angular to inject an instance of service into this class
    // so that I don't tightly couple this class with a service, this will
    // help me a lot when I am faking a service to test the working of the  
    // application using some methods later on in the future, now I must let 
    // angular know to do this
    service: CoursesService
  ) {
    // using a service to initialize my courses field
    // const service = new CoursesService(); // get rid of this line, once
    // you have told angular to inject an instance of service (as a dependency)
    // PROBLEM:
    //  Because we are directly creating instance of a service class here 
    //  We have again made this component tightly coupled with the service
    //  This will cause issues when we are testing our application 
    //  To avoid this we must use something else...
    //  ie. Dependency Injection
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
