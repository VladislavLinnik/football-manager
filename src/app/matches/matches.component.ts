import { Component, OnInit } from '@angular/core';
import {DataStateChangeEvent, GridDataResult} from '@progress/kendo-angular-grid';
import {process, State} from '@progress/kendo-data-query';

import {Player} from '../core/models/player.model';
import {Match} from '../info/models/match.model';
import {MatchService} from '../info/services/match.service';

@Component({
  selector: 'matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  isLoading = false;
  matches: GridDataResult;
  allMatches: Match[];
  state: State = {
    sort: [],
    filter: {
      logic: 'and',
      filters: []
    }
  };

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.getMatches();
  }

  dataStateChanged(state: DataStateChangeEvent): void {
    this.state = state;
    this.matches = process(this.allMatches, this.state);
  }

  openAddMatchWindow(): void {
    alert('Not implemented yet');
  }

  editMatch(match: Match) {

  }

  private getMatches(): void {
    this.isLoading = true;
    this.matchService.getMatches().then((matches: Match[]) => {
      this.allMatches = matches;
      this.resetState();
      this.matches = process(this.allMatches, this.state);
    }).finally(() => this.isLoading = false);
  }

  private resetState() {
    this.state.sort = [];
    this.state.filter.filters = [];
  }
}
