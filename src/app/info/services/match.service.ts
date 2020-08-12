import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Match} from '../models/match.model';

@Injectable()
export class MatchService {

  constructor(private httpClient: HttpClient) { }

  getMatches(): Promise<Match[]> {
    return Promise.resolve([
      {
        id: 1,
        team1: 'Barcelona',
        team2: 'Chelsea',
        date: new Date(),
        stadium: 'Camp Nou'
      },
      {
        id: 2,
        team1: 'Barcelona',
        team2: 'Chelsea',
        date: new Date(),
        stadium: 'Camp Nou'
      },
      {
        id: 3,
        team1: 'Barcelona',
        team2: 'Chelsea',
        date: new Date(),
        stadium: 'Camp Nou'
      },
      {
        id: 4,
        team1: 'Barcelona',
        team2: 'Chelsea',
        date: new Date(),
        stadium: 'Camp Nou'
      },
    ])
  }
}
