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
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
