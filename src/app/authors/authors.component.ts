import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  // By default if you create components using the ng command
  // it will make the component and add the suffix app- to the selector 
  // name in order to avoid any conflicts, if a third party component tries 
  // to interfere
  // selector: 'app-authors',
  selector: "authors",
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: string[] = [];
  constructor(
    // Define a dependency to inject by angular during run-time
    service: AuthorsService
  ) {
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

}
