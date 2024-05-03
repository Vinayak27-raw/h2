import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IvyCarouselModule} from 'angular-responsive-carousel-ng16';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './work/home/home.component';
import { AboutComponent } from './work/about/about.component';
import { ContactComponent } from './work/contact/contact.component';
import { LoginComponent } from './work/login/login.component';
import { SignupComponent } from './work/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './event/add-event/add-event.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { UpdateEventComponent } from './event/update-event/update-event.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketpageComponent } from './ticketpage/ticketpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    EventListComponent,
    UpdateEventComponent,
    AddEventComponent,
    TicketpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
