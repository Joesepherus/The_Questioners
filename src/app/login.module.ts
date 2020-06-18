import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginContainer } from './loginContainer.component'
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './services/auth-guard.service'
import { SharedModule } from './shared.module'
import { LoggedInGuard } from './services/loggedIn-guard.service'

const appRoutes: Routes = [
    {   path: '', component: LoginContainer, children: [
        {
            path: 'login',
            component: LoginComponent,
            data: { title: 'Login' },
            canActivate: [LoggedInGuard]
        },
        {
            path: 'register',
            component: RegisterComponent,
            data: { title: 'Register' },
            canActivate: [LoggedInGuard]
        },
        {
            path: '',
            redirectTo: '/login',
            pathMatch: 'full',
        }]
    }
];

@NgModule({
  declarations: [
    LoginContainer,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
//   exports: [LoginComponent,  RegisterComponent],
  providers: [LoggedInGuard],
})

export class LoginModule { }
