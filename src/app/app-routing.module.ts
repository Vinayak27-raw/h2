import { ComponentFactory, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './work/home/home.component';
import { LoginComponent } from './work/login/login.component';
import { SignupComponent } from './work/signup/signup.component';
import { ContactComponent } from './work/contact/contact.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { UpdateEventComponent } from './event/update-event/update-event.component';
import { AboutComponent } from './work/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  
  {path: 'login', component: LoginComponent},

  {path: 'signup', component: SignupComponent},

  {path: 'contact', component: ContactComponent},

  {path: 'add', component: AddEventComponent},

  {path: 'event', component: EventListComponent},

  {path: 'update/:id', component: UpdateEventComponent},

  {path: 'about', component:AboutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabledBlocking'
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'    
})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }