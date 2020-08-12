import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Player } from '../core/models/player.model';

@Injectable()
export class PlayerService {

  constructor(private httpClient: HttpClient) { }

  getPlayers(): Promise<Player[]> {
    return Promise.resolve([
        {
            id: 1,
            name: 'Clement Lenglet',
            position: 'Goalkeeper',
            team: 'Barcelona'
        },
        {
            id: 2,
            name: 'Gerard Pique',
            position: 'Defender',
            team: 'Shakhtar'
        },
        {
            id: 3,
            name: 'Nelson Semedo',
            position: 'Forward',
            team: 'Forward'
        },
    ])
  }
}
