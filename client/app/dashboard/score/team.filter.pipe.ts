import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../../models/team';
@Pipe({
    name: 'filter'
})
export class TeamFilterPipe implements PipeTransform {
    transform(teams: Team[], team: string): Team[] {
        if(!teams) return [];
        if(!team) return teams;

        return teams.filter( it => {
            return it._id != team;
        });
    }
}