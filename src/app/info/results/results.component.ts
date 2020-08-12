import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  searchResult: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initializeForm();
  }

  search(): void {
    this.searchResult.reset();
  }

  private initializeForm(): void {
    this.searchResult = new FormGroup({
      team1: new FormControl(''),
      team2: new FormControl(''),
      player: new FormControl('', Validators.required),
    });
  }
}
