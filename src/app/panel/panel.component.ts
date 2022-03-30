import { Component, OnInit } from '@angular/core';

@Component({
  // Since it is a bootstrap panel, change the selector name
  selector: 'bootstrap-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
