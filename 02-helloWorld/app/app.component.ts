import {Component} from "angular2/core";

@Component({
  selector : "hello-world-02",
  template : "<h1>Hello {{ greet }} with example 02</h1>"
})
export class AppComponent {
  greet: string;

  constructor() {
    this.greet = "World";
  }
}
