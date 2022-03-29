import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import my custom courses component
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

// This is a way to convert a normal class to a ngModule
@NgModule({
  declarations: [
    AppComponent,
    // Add to declarations array after importing your custom component
    CoursesComponent, // don't forget to declare a component, if you add one
    // without using the ng-generate command, as this will generate an error
    CourseComponent, // This line of code was added by "ng g c course" command
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // in providers I must list all the dependencies the component in this module
  // will depend upon
  providers: [
    // Since our courses component is dependent on service:CoursesService, I
    // will list CoursesService as a dependency
    // This is the second step after adding an instance in the constructor:CourseComponent
    CoursesService, // If you forgot this step, dependency injection will not work!
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
