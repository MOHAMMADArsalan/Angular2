import {Component} from "angular2/core";
@Component({
  selector: "hello-world",
  template: `<input type="text" [(ngModel)]="todo"/><br/> <h1 [style.color]="'{{todo}}'">{{todo}}</h1>`
})

export class AppComponent {
 todo: string;
 }
