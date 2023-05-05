import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageClientsComponent } from './manage-clients/manage-clients.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ManageMeetingsComponent } from './manage-meetings/manage-meetings.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageClientsComponent,
    ManageMeetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
