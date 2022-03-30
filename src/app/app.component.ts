import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Hello World!",
    isFavorite: true
  };
  title = 'angular-first-project';
  onFavoriteChange(newArgs: Object): void {
    console.log("onFavoriteChange() is called with: ", newArgs);
  }
}
