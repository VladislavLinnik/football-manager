import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { PlayersComponent } from './players/players.component';
import { StadiumsComponent } from './stadiums/stadiums.component';
import { CitiesComponent } from './cities/cities.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamService } from './services/team.service';
import { PlayerService } from './services/player.service';
import { StadiumService } from './services/stadium.service';
import { CityService } from './services/city.service';
import { NavigationComponent } from './navigation/navigation.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayersComponent,
    StadiumsComponent,
    CitiesComponent,
    NavigationComponent,
    StatisticsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    InputsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    GridModule,
    ButtonsModule
  ],
  providers: [
    TeamService,
    PlayerService,
    StadiumService,
    CityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
