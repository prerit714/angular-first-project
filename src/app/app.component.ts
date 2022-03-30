import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // courses = [1, 2, 3, 4, 5]; // To show/hide part of a page, using a simple
  // array, in real world example this will be an array of course objects
  courses = [
    {id: 1, name: "Physics"},
    {id: 2, name: "Chemistry"},
    {id: 3, name: "Biology"},
    {id: 4, name: "Mathematics"},
  ];
  tweet = {
    body: "Hello I am Prerit Dayal!",
    likesCount: 20,
    isLiked: true,
  };
  post = {
    title: "Hello World!",
    isFavorite: true
  };
  title = 'angular-first-project';
  // Could have also used an interface 
  onFavoriteChange(newArgs: FavoriteChangedEventArgs): void {
    console.log("onFavoriteChange() is called with: ", newArgs);
  }
  onAdd(): void {
    // For adding courses
    this.courses.push({
      id: Math.ceil(Math.random() * 1000),
      name: "Chadology"
    });
    // IMPORTANT
    // Angular has a change detection mechanism for Ajax-Request,
    // Button clicks and timers
    // The dom will be rendered again
  }
  onRemove(course: {id: number, name: string}): void {
    // For removing courses
    // You can blackboxify the logic here
    const indexOfCourseToDelete = this.courses.indexOf(course);
    this.courses.splice(indexOfCourseToDelete, 1);
    // THIS WORKS!!!
  }
}
