
// app.component.ts
import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="counter">
  <button (click)="decrement()">
    -
  </button>
  <!--<input type="text" [value]="count">-->
  {{count}}
  <button (click)="increment()">
    +
  </button>
</div>
  `
})
export class Counter {
    count: number = 0;

    increment() {
      this.count++;
    }
  
    decrement() {
      this.count--;
    }
}




/*
import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `<p><button (click)="emitMessage()">Click to Output increment!</button></p>
    <p>{{count}}</p>

    <div class="counter">
    <button ng-click="$ctrl.decrement()">
      Decrement
    </button>
    <input type="text" ng-model="$ctrl.count">
    <button ng-click="$ctrl.increment()">
      Increment
    </button>
  </div>
  `
})

export class Counter {
    private counterValue;

    constructor(){
        this.counterValue = "5";
    }

*/
    /*
  public data = {
      'firstname': 'Asaad', 
      'lastname': 'Saad'
  };

  @Output() messageEmitter = new EventEmitter();

  emitMessage() {
    this.messageEmitter.emit('Hello');
  }
 

  @Input()
  count: number = 3;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }

}

 */

/*
import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Component 4:</h1>
    <p>Two-way Data Binding:</p>
    <p>Message: {{message}}</p>
    <input value="{{message}}" [(ngModel)]="message" /><br>

    <!--<input [ngModel]="message" (ngModelChange)="message=$event"><br>
    <input [value]="message" (input)="message=$event.target.value">-->
  `
})
export class Counter {
    public message: string = 'Default Message';
}

*/

/*
import {Component} from 'angular2/core';
import { EventEmitter } from 'angular2/src/facade/async';
import { Output } from 'angular2/src/core/metadata';

@Component({
    selector: 'my-app',
    //template: '<h1>Hello My name is {{name}}</h1>'
    template: `<div class="space">
        <input class="space" value="-" type="button"/>
        <span class="space">{{counterValue}}</span>
        <input class="space" value="+" type="button"/>
    </div>
    <button (click)="emitMessage()">Click to Output!</button>`,
    styles: ['.space{padding:5px;}']
})

export class Counter {
    private counterValue;

    constructor(){
        this.counterValue = "5";
    }

    public data = {
        'firstname': 'Asaad', 
        'lastname': 'Saad'
    };

    @Output() messageEmitter = new EventEmitter();

    emitMessage() {
        this.messageEmitter.emit(this.data);
      }
}
*/

/*
import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Component 3:</h1>
    <p>Output "data Obj" to Parent: <button (click)="emitMessage()">Click to Output!</button></p>
    <p>{{counterValue}}</p>
  `
})


export class Comp3Component {
    private counterValue;

    constructor(){
        this.counterValue = "5";
    }

  public data = {
      'firstname': 'Asaad', 
      'lastname': 'Saad'
  };

  @Output() messageEmitter = new EventEmitter();

  emitMessage() {
    this.messageEmitter.emit(this.data);
  }

}

*/