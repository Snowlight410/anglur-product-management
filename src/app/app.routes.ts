import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
    },
    {
        path:"product/:id",
        component:ProductdetailsComponent,
    },
    {
        path:"about" ,
         component:AboutComponent,
    },
   
];
