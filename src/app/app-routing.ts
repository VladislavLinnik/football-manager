import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { StadiumsComponent } from './stadiums/stadiums.component';
import { CitiesComponent } from './cities/cities.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
    {
      path: 'statistics',
      component: StatisticsComponent,
      children: [
        {
          path: 'teams',
          component: TeamsComponent
        },
        {
          path: 'players',
          component: PlayersComponent
        },
        {
          path: 'stadiums',
          component: StadiumsComponent
        },
        {
          path: 'cities',
          component: CitiesComponent
        }
      ]
    },
    {
        path: 'info',
        loadChildren: './info/info.module#InfoModule'
    },
    {
      path: '**',
      redirectTo: "/statistics"
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
