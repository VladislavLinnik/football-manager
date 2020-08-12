import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { HttpClientModule } from '@angular/common/http';
import { InputsModule } from '@progress/kendo-angular-inputs';
import {ReactiveFormsModule} from '@angular/forms';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';

import { ResultsComponent } from './results/results.component';
import { MatchesComponent } from '../matches/matches.component';
import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import {MatchService} from './services/match.service';

@NgModule({
  declarations: [
    InfoComponent,
    MatchesComponent,
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InfoRoutingModule,
    LayoutModule,
    GridModule,
    ButtonsModule,
    HttpClientModule,
    InputsModule,
    DropDownsModule
  ],
  providers: [
    MatchService
  ]
})
export class InfoModule { }
