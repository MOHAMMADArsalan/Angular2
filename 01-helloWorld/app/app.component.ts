import { Component } from "angular2/core";

@Component({
  selector : "helloworld",
  template : `<input type="text" [(ngModel)]="databinding"/><hr/>
              <h1 (mousemove)="databinding= Randomcolor()" 
              [ngStyle]="{'color': databinding}">
              Hello World {{databinding}}</h1> `
})

export class AppComponent {
  databinding: string;
  color: string;
  constructor() { }
  Randomcolor(){
      return '#'+Math.floor(Math.random()*16777215).toString(16)
      console.log( this.color )
  }
}
