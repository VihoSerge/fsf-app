import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeamsComponent } from './teams/teams.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { DashboardComponent } from './dashboard.component';

import { ComponentsModule } from '../../components/components.module';
import { MatchsComponent } from './matchs/matchs.component';
import { ScoreComponent } from './score/score.component';
import { StandingsComponent } from './standings/standings.component';

import { TeamFilterPipe } from './score/team.filter.pipe';

const dashboardRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'teams', component: TeamsComponent},
      {path: 'teams/edit', component: EditTeamComponent},
      
      {path: 'matchs', component: MatchsComponent},
      {path: 'matchs/score', component: ScoreComponent},
      {path: 'standings', component: StandingsComponent},
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forRoot(dashboardRoutes),
    ComponentsModule,
  ],
  declarations: [TeamsComponent, EditTeamComponent, DashboardComponent, MatchsComponent, ScoreComponent, StandingsComponent, TeamFilterPipe]
})
export class DashboardModule { }
