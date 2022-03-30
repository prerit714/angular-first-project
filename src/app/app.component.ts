import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
