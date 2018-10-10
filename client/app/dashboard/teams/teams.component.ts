import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html'
})
export class TeamsComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    this.teamService.get().subscribe((teams : Team[]) => {
      this.teams = teams;
    });
  }

  onNew(): void {
    this.router.navigate(['dashboard/teams/edit']);
  }

}
