import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input("likes-count") likesCount: number = 0;
  @Input("is-active") isActive: boolean = true;
  constructor() { }
  onClick(): void {
    // logic for toggle and count change
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
