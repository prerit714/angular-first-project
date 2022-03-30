import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [1, 2, 3, 4, 5]; // To show/hide part of a page, using a simple
  // array, in real world example this will be an array of course objects
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
}
