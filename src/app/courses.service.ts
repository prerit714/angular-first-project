export class CoursesService {
  getCourses(): string[] {
    // Below will be the logic to get data from an http endpoint using
    // promises or async-await along with fetch api
    // Using this way we can use this logic anywhere in the application
    // Thus de-coupling the tight-coupling al-together
    return [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Astronomy"
    ];
  }
}
