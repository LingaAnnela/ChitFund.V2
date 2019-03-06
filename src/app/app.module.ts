import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { MaterialModule } from './material.module';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ClientsDetailsComponent } from './components/clients/clients-details/clients-details.component';
import { ChitfundsComponent } from './components/chitfunds/chitfunds.component';
import { CfdetailsComponent } from './components/chitfunds/cfdetails/cfdetails.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'client-details', component: ClientsDetailsComponent },
  { path: 'chitfunds', component: ChitfundsComponent },
  { path: 'cfdetails', component: CfdetailsComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent}
] ;


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsComponent,
    TopnavComponent,
    SidenavComponent,
    LoginComponent,
    SignupComponent,
    ClientsDetailsComponent,
    ChitfundsComponent,
    CfdetailsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
