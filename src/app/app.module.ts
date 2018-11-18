import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ScreewizardComponent } from './screewizard/screewizard.component';
import { CertificatedetailsComponent } from './certificatedetails/certificatedetails.component';
import { DeliverydetailsComponent } from './deliverydetails/deliverydetails.component';
import { SummaryComponent } from './summary/summary.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    LogoutComponent,
    ScreewizardComponent,
    CertificatedetailsComponent,
    DeliverydetailsComponent,
    SummaryComponent,
    AcknowledgementComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
