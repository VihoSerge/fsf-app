import { Component, OnInit } from '@angular/core';
import { StandingService } from '../../services/standing.service';

@Component({
  selector: 'app-rangs',
  templateUrl: './standings.component.html'
})
export class StandingsComponent implements OnInit {
  standings: any[];

  constructor(private standingService: StandingService,) { }

  ngOnInit() {
    this.standingService.get().subscribe((standings : any[]) => {
      this.standings = standings;      
    });
  }

}
