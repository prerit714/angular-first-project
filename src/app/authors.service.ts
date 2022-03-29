import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  // Define a service method to use
  getAuthors(): string[] {
    return [
      "Prerit Dayal",
      "Eren Yeager",
      "Mikasa Ackerman",
      "Armin Arlert",
      "Kristen Jean",
      "Annie Leonhart",
      "Reiner Braun",
      "Bertholt Hoover"
    ];
  }
}
