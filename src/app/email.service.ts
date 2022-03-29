import { Injectable } from '@angular/core';

@Injectable({
  // This service is needed if you have dependencies in your
  // constructor:EmailService 
  // e.g. constructor(logService: LogService) {}
  // When you do @Component({}), the component will inherit @Injectable
  // by default!
  // So rememeber, If you use a @Component({}), you are not required to 
  // add @Injectable({}) anywhere in that component (pretty cool :))
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
