import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './Home/homepage.component';
import { StudentsComponent } from './Students/students.component';
import { DbService } from './db.service';
import { myRoutes } from './app.routes';
import { ProfileComponent } from './Profiles/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [DbService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
