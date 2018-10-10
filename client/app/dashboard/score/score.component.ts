import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from '../../services/team.service';
import { MatchService } from '../../services/match.service';
import { Team } from '../../models/team';
import { Match } from '../../models/match';

import { TeamFilterPipe } from './team.filter.pipe';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html'
})
export class ScoreComponent implements OnInit {
  teams: Team[];
  form: FormGroup;

  constructor(private teamService: TeamService, private matchService: MatchService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.teamService.get().subscribe((teams : Team[]) => {
      this.teams = teams;
    });

    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      team1: ['', Validators.required],
      team2: ['', Validators.required],
      score1: ['', Validators.required],
      score2: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if(this.form.valid) {
      this.matchService.post(this.form.value)
      .subscribe((match : Match)=> {
        this.form.reset({team1: '', team2: ''});
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['dashboard/matchs']);
  }

}
