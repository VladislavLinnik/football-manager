import { Component, OnInit } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { PlayerService } from '../services/player.service';
import { Player } from '../core/models/player.model';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  isLoading = false;
  players: GridDataResult;
  allPlayers: Player[];
  state: State = {
    skip: 0,
    take: 100,
    sort: [],
    filter: {
      logic: 'and',
      filters: []
    }
  };

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  dataStateChanged(state: DataStateChangeEvent): void {
    this.state = state;
    this.players = process(this.allPlayers, this.state);
  }

  openAddPlayerWindow(): void {
    alert('Not implemented yet');
  }

  editPlayer(player: Player) {

  }

  private getPlayers(): void {
    this.isLoading = true;
    this.playerService.getPlayers().then((players: Player[]) => {
      this.allPlayers = players;
      this.resetState();
      this.players = process(this.allPlayers, this.state);
    }).finally(() => this.isLoading = false);
  }

  private resetState() {
    this.state.sort = [];
    this.state.filter.filters = [];
    this.state.skip = 0;
  }
}
