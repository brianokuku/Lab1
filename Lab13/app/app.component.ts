import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <nav>
        <ul class="list-group">
            <li><a [routerLink]="['']">Home</a></li>
            <li><a [routerLink]="['students']">Students</a></li>
        </ul>
    </nav>

    <router-outlet></router-outlet>
  </div>`,

})
export class AppComponent {
  title = 'app';
}
