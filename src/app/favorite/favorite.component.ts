import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  // This object is also sometimes referred to as meta-data
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  // There are three ways to apply styles
  // 1. styleUrls, styles: ['', '', ...], and <styles> in template
  styleUrls: ['./favorite.component.css'],
  // which so ever styleUrls or styles is on the last of this meta-data
  // angular will pick up that sytles, and previous rules
  // are over-ridden
  styles: [
    `
    .bi {
      color: blue;
    }
    `
  ],
  // Now to emulate shadow DOM, ViewEncapsulation is an enum object
  // .Emulated for browsers that don't have shadow dom, angular will then implement
  // it with a trick, second is .Native for browsers who support shadow dom
  encapsulation: ViewEncapsulation.Emulated,
  // Default is .Emulated (work will 99.9% of the cases)
  // Use inspect element to check the elements
})
export class FavoriteComponent {

  // Task is to mark fields as input properties/output properties
  // We use Input decorator to make a field as an input property
  @Input(
    //define an alias for this name
    "is-favorite"
  ) isSelected: boolean = false;

  // Initialize this to an instance of EventEmitter
  @Output(
    // Using aliases clients of this component will never break
    "change"
  ) click = new EventEmitter();

  constructor() { }

  onClick(): void {
    this.isSelected = !this.isSelected;
    // Now to raise the event with .emit()
    // also called as "publishing" an event
    // Now to pass data to the calling component
    // This will be available in the app component
    // this.change.emit(this.isSelected);
    this.click.emit({newValue: this.isSelected});
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
