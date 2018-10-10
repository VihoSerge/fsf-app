import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { NotFoundComponent } from '../components/not-found/not-found.component';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TeamService } from './services/team.service';
import { MatchService } from './services/match.service';
import { StandingService } from './services/standing.service';



const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,


    AuthModule,
    DashboardModule,
    ComponentsModule,
  ],
  providers: [TeamService, MatchService, StandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
