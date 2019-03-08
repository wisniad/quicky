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
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserCardComponent } from './main/user-card/user-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InterfaceComponent,
    QuickyComponent,
    AddQuickyComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AmazingTimePickerModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'quicky'),
    AngularFirestoreModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }