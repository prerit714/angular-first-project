import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  ) isSelected: boolean = false;

  // Initialize this to an instance of EventEmitter
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.isSelected = !this.isSelected;
    // Now to raise the event with .emit()
    // also called as "publishing" an event
    // Now to pass data to the calling component
    // This will be available in the app component
    // this.change.emit(this.isSelected);
    this.change.emit({newValue: this.isSelected});
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
