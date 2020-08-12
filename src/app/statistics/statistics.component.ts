import { Component, OnInit } from '@angular/core';
import { tabRoutes } from '../core/constants/tabs';
import { SelectEvent } from '@progress/kendo-angular-layout';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

  }

  onTabSelect(e: SelectEvent): void {
    const route = tabRoutes.find(tab => e.title === tab.title).route;
    this.router.navigate([route], {relativeTo: this.activatedRoute});
  }
}
