import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import $ from 'jquery/dist/jquery';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routing';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { CampoutsComponent } from './campouts/campouts.component';
import { ModalComponent } from './modal/modal.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomeComponent,
    JumbotronComponent,
    CardComponent,
    FooterComponent,
    CampoutsComponent,
    ModalComponent,
    DatepickerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})

export class AppModule { }
