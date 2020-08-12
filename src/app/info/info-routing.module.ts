import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoComponent } from './info.component';
import { ResultsComponent } from './results/results.component';
import { MatchesComponent } from '../matches/matches.component';

const routes: Routes = [
    {
      path: '',
      component: InfoComponent,
      children: [
          {
            path: 'matches',
            component: MatchesComponent,
          },
          {
            path: 'results',
            component: ResultsComponent
          }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InfoRoutingModule { }
