import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import my custom courses component
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
