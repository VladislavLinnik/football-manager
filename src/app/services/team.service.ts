import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Team } from '../core/models/team.model';

@Injectable()
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  getTeams(): Promise<Team[]> {
    return Promise.resolve([
        {
          id: 1,
          name: 'Team 1'
        },
        {
          id: 2,
          name: 'Team 2'
        },
        {
          id: 3,
          name: 'Team 3'
        },
        {
          id: 4,
          name: 'Team 4'
        },
        {
          id: 5,
          name: 'Team 5'
        },
        {
          id: 6,
          name: 'Team 6'
        },
        {
          id: 7,
          name: 'Team 7'
        }
    ])
  }
}
