import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandleuserComponent } from './handleuser/handleuser.component';
import { LoginComponent } from './handleuser/login/login.component';
import { RegisterComponent } from './handleuser/register/register.component';
import { AppbrowseComponent } from './appbrowse/appbrowse.component';
import { HomeComponent } from './appbrowse/home/home.component';
import { ProductsComponent } from './appbrowse/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './appbrowse/contactus/contactus.component';
import { DetailsComponent } from './appbrowse/details/details.component';
import { MoreitemsComponent } from './appbrowse/moreitems/moreitems.component';



const routes: Routes = [
  {   
  path: 'handleuser', pathMatch: 'prefix',
    component: HandleuserComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
    ]
  },{   
    path: 'browse', pathMatch: 'prefix',
      component: AppbrowseComponent,
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'home' },
        { path: 'home', component: HomeComponent},
        { path: 'ornament', component: ProductsComponent},
        { path: 'details', component: DetailsComponent},
        { path: 'moreitems', component: MoreitemsComponent},
        { path: 'contactus', component: ContactusComponent},
      ]
    },  { 
    path: '', 
    redirectTo: 'browse',
    pathMatch: 'full'
 }
];


export const routing = RouterModule.forRoot(routes);