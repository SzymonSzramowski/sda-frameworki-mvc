import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
