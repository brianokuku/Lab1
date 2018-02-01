import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyDirective1Directive } from './directive1.directive';
import { UpperDirective } from './upper';
import { myVisibilityDirective } from './myVisibility';
import { MyColorDirective } from './myColor';

@NgModule({
  declarations: [
    AppComponent,
    MyDirective1Directive,
    UpperDirective,
    myVisibilityDirective,
    MyColorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
