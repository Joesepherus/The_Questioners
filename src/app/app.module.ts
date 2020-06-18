import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggedInModule } from './loggedIn.module'
import { LoginModule } from './login.module'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { GlobalsService } from './globals.service'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LoggedInModule,
    LoginModule,    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    GlobalsService 
  ],
  bootstrap: [AppComponent]  
})

export class AppModule { }
