import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { EditTeamComponent } from './edit-team/edit-team.component';

const dashboardRoutes: Routes = [
  {path: 'dashboard/teams', component: TeamsComponent},
  {path: 'dashboard/teams/edit', component: EditTeamComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(dashboardRoutes),
  ],
  declarations: [TeamsComponent, EditTeamComponent]
})
export class DashboardModule { }
