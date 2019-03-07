import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { InterfaceComponent } from './main/interface/interface.component';
import { QuickyComponent } from './main/quicky/quicky.component';
import { AddQuickyComponent } from './main/add-quicky/add-quicky.component';
import { DatabaseService } from './services/database.service';

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
    AppRoutingModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
