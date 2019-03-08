import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { InterfaceComponent } from './main/interface/interface.component';
import { QuickyComponent } from './main/quicky/quicky.component';
import { AddQuickyComponent } from './main/add-quicky/add-quicky.component';
import { DatabaseService } from './services/database.service';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'vertical',
  observer: true,
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 3,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InterfaceComponent,
    QuickyComponent,
    AddQuickyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AmazingTimePickerModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    SwiperModule
  ],
  providers: [DatabaseService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }