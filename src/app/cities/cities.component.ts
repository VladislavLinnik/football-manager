import { Component, OnInit } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { City } from '../core/models/city.model';
import { CityService } from '../services/city.service';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  isLoading = false;
  cities: GridDataResult;
  allCities: City[];
  state: State = {
    skip: 0,
    take: 100,
    sort: [],
    filter: {
      logic: 'and',
      filters: []
    }
  };

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  dataStateChanged(state: DataStateChangeEvent): void {
    this.state = state;
    this.cities = process(this.allCities, this.state);
  }

  openAddCityWindow(): void {
    alert('Not implemented yet');
  }

  editCity(city: City) {

  }

  private getPlayers(): void {
    this.isLoading = true;
    this.cityService.getCities().then((cities: City[]) => {
      this.allCities = cities;
      this.resetState();
      this.cities = process(this.allCities, this.state);
    }).finally(() => this.isLoading = false);
  }

  private resetState() {
    this.state.sort = [];
    this.state.filter.filters = [];
    this.state.skip = 0;
  }
}
