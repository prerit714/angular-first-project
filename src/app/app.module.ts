import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import my custom courses component
import { CoursesComponent } from './courses.component';

// This is a way to convert a normal class to a ngModule
@NgModule({
  declarations: [
    AppComponent,
    // Add to declarations array after importing your custom component
    CoursesComponent, // If you forget this entry, you will get errors
    // You will get an error like "courses" is not a known element
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
