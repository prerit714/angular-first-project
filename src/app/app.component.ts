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
  task = {
    title: "Leader of The Crows",
    assignee: {
      firstName: "John",
      // Since last name is null, this will not be rendered
      lastName: null
    },
    // assignee: null
  };
  canSave: boolean = false;
  courses: any;
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
  loadCourses(): void {
    // This method will initialize the courses
    this.courses = [
      // Will be memory intensive as angular will re-render the dom 
      // on every LoadCourses button click, to avoid that I will use
      // trackBy exported property
      // very similar to useMemo of react!
      // using trackBy will let angular to compare the objects received
      // using content instead of memory location (kinda memory intensive)
      // But is atleast a better optimization when compared to taking extra time
      {id: 1, name: "Physics"},
      {id: 2, name: "Chemistry"},
      {id: 3, name: "Biology"},
      {id: 4, name: "Mathematics"},
    ];
  }
  trackCourse(_index: number, course: any): void {
    // This function is what which is responsible for trackBy: trackCourse
    return course ? course.id: undefined;
    // If you are dealing with large list and you are experiencing performace
    // problems ONLY then use this trackBy: trackCourse. Since it is a performace
    // OVERHEAD
  }
}
