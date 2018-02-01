import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
   
  <h2>Component with an unordered list</h2>
    <ul>
      <li myVisibility showMe=true upperDirective *ngFor="let name of names" >{{name}}</li>
    </ul>`,
  styles: ['']
})


export class AppComponent {
    private names;

    constructor(){
        this.names = ["Asaad", "Shi", "Assa", "Sarah"];

    }
}



