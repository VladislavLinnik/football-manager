import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isVisibleInfoSubsection = false;
  isVisibleStatisticsSubsection = false;

  constructor() { }

  ngOnInit() {
  }

}
