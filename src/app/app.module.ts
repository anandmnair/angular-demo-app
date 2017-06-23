import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CpmComponent } from './cpm/cpm.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CpmComponent,
    HomeComponent,
    EventComponent,
    ErrorComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome' , component: WelcomeComponent },
      { path: 'login' , component: LoginComponent },
      { path: 'home' , component: HomeComponent },
      { path: 'cpm' , component: CpmComponent },
      { path: 'event' , component: EventComponent },
      { path: '' , redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**' , component: ErrorComponent }
    ], { useHash: true }),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
