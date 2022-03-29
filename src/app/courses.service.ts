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

/*
 *
 * Since it is pretty tedious to make services manually, it is best to create  
 * services using an ng command, (pretty convinient!)
 *
 * e.g. Create a service that will get data from a http-endpoint 
 * $ ng g s email
 * This will generate two files, one is a spec file for writing unit-tests
 * and the other file is the actual service itself
 * WARNING: Service will be generated but not provided by default
 *
 *
 * */
