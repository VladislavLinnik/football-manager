import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Stadium } from '../core/models/stadium.model';

@Injectable()
export class StadiumService {

  constructor(private httpClient: HttpClient) { }

  getStadiums(): Promise<Stadium[]> {
    return Promise.resolve([
        {
            id: 1,
            name: 'Camp Nou',
            city: 'Barcelona'
        },
        {
            id: 2,
            name: 'Melbourne Rectangular Stadium',
            city: 'Chelsea'
        },
        {
            id: 3,
            name: 'Metalist',
            city: 'Melbourne Victory'
        },
        {
            id: 4,
            name: 'Wembley Stadium',
            city: 'Shakhtar'
        },
    ])
  }
}
