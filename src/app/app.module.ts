import { PostService } from './services/posts-service';
import { LoginService } from './services/login-service';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';

import { CookieService } from 'ng2-cookies';
import { PostComponent } from './views/home/post/post.component';
import { MessageComponent } from './views/home/message/message.component';
import { Paginator2Component } from './components/paginator2/paginator2.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home/:page', component: HomeComponent, canActivate: [IsLoggedInGuard] },
  { path: 'home', component: HomeComponent, canActivate: [IsLoggedInGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    PostComponent,
    MessageComponent,
    Paginator2Component
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
  ],
  providers: [
    IsLoggedInGuard,
    LoginService,
    CookieService,
    PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
