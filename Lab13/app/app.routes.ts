import {RouterModule, Routes} from '@angular/router';

import {HomepageComponent} from './Home/homepage.component';
import {StudentsComponent} from './Students/students.component';
import {ProfileComponent} from './Profiles/profile.component';
import { MyCanActivateGuard } from "./Profiles/mycanactivate.guard";
import { NotfoundComponent } from './notfound/notfound.component';

const MY_ROUTES: Routes = [

    {path: '', component: HomepageComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'students/profile/:id', component: ProfileComponent, canActivate:[MyCanActivateGuard]},
    {path: '**', redirectTo: '/' },
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);