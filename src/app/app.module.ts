import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './handleuser/login/login.component';
import { RegisterComponent } from './handleuser/register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppbrowseComponent } from './appbrowse/appbrowse.component';
import { HomeComponent } from './appbrowse/home/home.component';
import { ProductsComponent } from './appbrowse/products/products.component';
import { DetailsComponent } from './appbrowse/details/details.component';
import { HandleuserComponent } from './handleuser/handleuser.component';
import { routing } from './app.routing';
import { ContactusComponent } from './appbrowse/contactus/contactus.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { MoreitemsComponent } from './appbrowse/moreitems/moreitems.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AppbrowseComponent,
    ProductsComponent,
    DetailsComponent,
    HandleuserComponent,
    ContactusComponent,
    MoreitemsComponent
  ],
  imports: [
    //RouterModule.forRoot(routes),
    routing,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
