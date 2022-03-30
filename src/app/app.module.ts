import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import my custom courses component
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';

// This is a way to convert a normal class to a ngModule
@NgModule({
  declarations: [
    AppComponent,
    // Add to declarations array after importing your custom component
    CoursesComponent, // don't forget to declare a component, if you add one
    // without using the ng-generate command, as this will generate an error
    CourseComponent, 
    AuthorsComponent, // This line of code was added by "ng g c course" command
    SummaryPipe, FavoriteComponent, PanelComponent, // Add the pipe component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // in providers I must list all the dependencies the component in this module
  // will depend upon
  providers: [
    // Since our courses component is dependent on service:CoursesService, I
    // will list CoursesService as a dependency
    // This is the second step after adding an instance in the constructor:CourseComponent
    CoursesService, // If you forgot this step, dependency injection will not work!
    // During run-time, Angular will create an instance of CoursesService
    // a singleton isntance, that will be shared by all the dependents
    // (pretty cool!)
    AuthorsService,
    // No matter if I create AuthorsService with the ng command, I still have
    // to add it in the providers array  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
