import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  // The idea is to define custom html-elements
  selector: "courses", // courses will be the selector name
  // Using data-binding and interpolation syntax ({{}} syntax), whenever the value
  // of title changes, the component is re-rendered
  // Any valid JS expression is allowed between {{}}
  // We use directives to manipulate the DOM
  // NOTE:
  // Interpolation works for rendering dynamic data and property binding
  // works well for rendering data that changes frequently
  // NOTE:
  //  While binding peoperties, remember to bind to a DOM property
  //  instead of html-elements-attributes
  template: `
    <h2>Now to show an image</h2>
    <!-- Below is an example of string interpolation -->
    <img src="{{ imageUrl }}"/>
    <h2>Now to show it again</h2>
    <!-- 
      Below is an example of property binding 
      More like, binding from component to the dom, a one way binding,
      that is any changes in the dom are not reflected back in the component
      this can be changed to a two-way binding which is preferred at other
      places like forms.
    -->
    <img [src]="imageUrl"/>
    <h2>The title is: {{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    <h2> A primary button </h2>
    <!-- Adding a bootstrap sytle to a button -->
    <!-- Applying a class based on some condition -->
    <button class="btn btn-primary" [class.active]="isActive">First Button</button>
      <br>
    <button class="btn btn-secondary" [style.backgroundColor]="!isActive?'blue':'purple'">Second Button</button>
  `,
})
export class CoursesComponent {
  /*
   * A note on property binding and interpolation
   * 1. Property binding:
   *      property of a dom element is binded to class's property
   * */
  // Leaving this class empty for now 
  // Define a field "title"
  title: string = "List of courses";
  imageUrl: string = "https://picsum.photos/500/";
  courses: string[] = [""];
  colSpan: number = 2;
  buttonWidth: string = "100%";
  isActive: boolean = true;
  constructor(
    // When I pass service: CoursesService as a constructor's dependency,
    // I want angular to inject an instance of service into this class
    // so that I don't tightly couple this class with a service, this will
    // help me a lot when I am faking a service to test the working of the  
    // application using some methods later on in the future, now I must let 
    // angular know to do this
    service: CoursesService
    // To summarize: I created a service:CoursesService and passed it as a 
    // dependency in the constructor:CoursesComponent which is what I told
    // angular to add as a provider in the app.module.ts!
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
