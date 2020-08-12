import { Component, OnInit } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { Stadium } from '../core/models/stadium.model';
import { StadiumService } from '../services/stadium.service';

@Component({
  selector: 'stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.scss']
})
export class StadiumsComponent implements OnInit {
  isLoading = false;
  stadiums: GridDataResult;
  allStadiums: Stadium[];
  state: State = {
    skip: 0,
    take: 100,
    sort: [],
    filter: {
      logic: 'and',
      filters: []
    }
  };

  constructor(private stadiumService: StadiumService) { }

  ngOnInit(): void {
    this.getStadiums();
  }

  dataStateChanged(state: DataStateChangeEvent): void {
    this.state = state;
    this.stadiums = process(this.allStadiums, this.state);
  }

  openAddStadiumWindow(): void {
    alert('Not implemented yet');
  }

  editStadium(stadium: Stadium) {

  }

  private getStadiums(): void {
    this.isLoading = true;
    this.stadiumService.getStadiums().then((stadiums: Stadium[]) => {
      this.allStadiums = stadiums;
      this.resetState();
      this.stadiums = process(this.allStadiums, this.state);
    }).finally(() => this.isLoading = false);
  }

  private resetState() {
    this.state.sort = [];
    this.state.filter.filters = [];
    this.state.skip = 0;
  }
}
