import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const authRoutes: Routes = [
  {path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(authRoutes)
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
