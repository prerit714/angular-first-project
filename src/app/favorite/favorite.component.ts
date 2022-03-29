import { Component, OnInit } from '@angular/core';
// import { Input } from "@angular/core";

@Component({
  // This object is also sometimes referred to as meta-data
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // Second way to declare a property as input property is
  inputs: [
    // A better approach, but has a problem!
    "isFavorite"
  ],
})
export class FavoriteComponent implements OnInit {

  // Task is to mark fields as input properties/output properties
  // We use Input decorator to make a field as an input property
  // @Input() isFavorite: boolean = false;
  isFavorite: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.isFavorite = !this.isFavorite;
  }

}
