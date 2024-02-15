import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';

const routes: Routes = [
  /*{
    path: 'home',
    component: HomePagesComponent,
  },
*/
  {
    path: 'about',
    component: AboutPageComponent,
  },

  {
    path: 'contact',
    component: AboutPageComponent,
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then (modulo => modulo.CountriesModule)
  },
/*
  {
    path: '**',
    redirectTo: 'home',
  },
*/
  {
    path: '**',
    redirectTo: 'countries',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
