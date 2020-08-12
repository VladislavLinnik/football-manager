import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectEvent } from '@progress/kendo-angular-layout';

import { tabRoutes } from '../core/constants/tabs';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

  }

  onTabSelect(e: SelectEvent): void {
    const route = tabRoutes.find(tab => e.title === tab.title).route;
    this.router.navigate([route], {relativeTo: this.activatedRoute});
  }
}
