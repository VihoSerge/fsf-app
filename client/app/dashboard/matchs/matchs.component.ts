import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html'
})
export class MatchsComponent implements OnInit {
  matchs: Match[];

  constructor(private matchService: MatchService, private router: Router) { }

  ngOnInit() {
    this.matchService.get().subscribe((matchs : Match[]) => {
      this.matchs = matchs;
    });
  }

  onNew(): void {
    this.router.navigate(['dashboard/matchs/score']);
  }


}
