import { Component, OnInit, Input } from '@angular/core';

@Component({
  // This object is also sometimes referred to as meta-data
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {

  // Task is to mark fields as input properties/output properties
  // We use Input decorator to make a field as an input property
  @Input(
    //define an alias for this name
    "is-favorite"
  ) isFavorite: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.isFavorite = !this.isFavorite;
  }

}
