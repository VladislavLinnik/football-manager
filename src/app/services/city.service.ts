import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { City } from '../core/models/city.model';

@Injectable()
export class CityService {

  constructor(private httpClient: HttpClient) { }

  getCities(): Promise<City[]> {
    return Promise.resolve([
        {
            id: 1,
            name: 'Barcelona'
        },
        {
            id: 2,
            name: 'Melbourne'
        },
        {
            id: 3,
            name: 'Kharkiv'
        },
        {
            id: 4,
            name: 'London'
        },
    ])
  }
}
