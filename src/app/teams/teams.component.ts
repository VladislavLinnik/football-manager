import { Component, OnInit } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { Team } from '../core/models/team.model';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  isLoading = false;
  teams: GridDataResult;
  allTeams: Team[];
  state: State = {
    skip: 0,
    take: 100,
    sort: [],
    filter: {
      logic: 'and',
      filters: []
    }
  };

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  dataStateChanged(state: DataStateChangeEvent): void {
    this.state = state;
    this.teams = process(this.allTeams, this.state);
  }

  openAddTeamWindow(): void {
    alert('Not implemented yet');
  }

  editTeam(team: Team) {

  }

  private getTeams(): void {
    this.isLoading = true;
    this.teamService.getTeams().then((teams: Team[]) => {
      this.allTeams = teams;
      this.resetState();
      this.teams = process(this.allTeams, this.state);
    }).finally(() => this.isLoading = false);
  }

  private resetState() {
    this.state.sort = [];
    this.state.filter.filters = [];
    this.state.skip = 0;
  }
}
