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
      <br>
    <div (click)="onDivClick($event)">
      <button class="btn btn-secondary" (click)="onClickableButton($event)">Clickable Button</button>
    </div>
    <input type="text" (keyup.enter)="onKeyUpTwo()"/>
      <br>
    <input type="text" (keyup)="onKeyUpOne($event)"/>
      <br>
    <input type="text" (keyup.enter)="onKeyUpGetInputData($event)"/>
      <br>
    <!-- Using a template variable to reference an input field -->
    <input type="text" #email (keyup.enter)="onKeyUpThree(email.value)" />
      <br>
    <!-- Let's use two-way binding to achieve the above -->
    <!-- Bind the input using property binding first -->
    <!-- Using banana in a box method [()] in old angular, in new angular use[]-->
    <input type="text" [(ngModel)]="emailTwo" (keyup.enter)="onKeyUpFour()" />
      <br>
    <h2> Now to output some course data </h2>
    <ul>
      <!-- Working with pipes -->
      <li>Title is: {{ course.title | uppercase| lowercase | titlecase}}</li>
      <li>Number of students are: {{ course.students | number }}</li>
      <li>Rating is: {{ course.rating | number:'1.2-2' }}</li>
      <li>Price is: {{ course.price | currency:"INR":true:"3.2-2" }}</li>
      <li>Release Date is: {{ course.releaseDate | date:"shortDate" }}</li>
    </ul>
    <h2> Below is the output of using a custom pipe</h2>
    <p>{{ text | summary }}</p>
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
  email: string = "foo@gmail.com";
  emailTwo: string = "bar@gmail.com";
  course: any;
  text: string = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perspiciatis 
    ex voluptas iure, cupiditate, modi atque eaque, placeat in commodi 
    natus laudantium eius? Corrupti quos dolorem asperiores praesentium 
    repudiandae quaerat.
  `;
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
    this.course = {
      title: "The complete Angular Course",
      rating: 4.9,
      students: 5959,
      price: 434.44,
      releaseDate: new Date(2016, 3, 1)
    };
  }
  onKeyUpFour(): void {
    if (this.emailTwo.length === 0) {
      console.log("Email length is 0");
    } else {
      console.log("You entered: ", this.emailTwo);
    }
  }
  onKeyUpGetInputData($event: any): void {
    console.log($event.target.value);
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
  // To see the $event object
  onClickableButton($event: MouseEvent): void {
    // handler of onClickableButton button
    console.log("onClickableButton() is called!", $event);
  }
  onDivClick($event: MouseEvent): void {
    // div click handler
    // An event bubbles up the dom tree to the parent element
    // to avoid event bubbling, just call this method below
    $event.stopPropagation(); // important if you want to avoid bubbling
    console.log("onDivClick() is called!", $event);
  }
  onKeyUpOne($event: KeyboardEvent): void {
    if ($event.key === "Enter") {
      console.log("Enter was pressed!", $event);
    }
  }
  onKeyUpTwo(): void {
    // There are two ways of handling key press events
    console.log("Enter was entered!");
  }
  onKeyUpThree(email: string): void {
    // This is the most preferred way to capture a value from an input field
    if (email.length === 0) {
      console.log("Hey! you entered an empty string!");
    } else {
      console.log("You entered: ", email);
    }
  }
  // Passing data is cool and all, but it would be better if I could just
  // use something like this.email to access the email value (as per OOPS)
}
