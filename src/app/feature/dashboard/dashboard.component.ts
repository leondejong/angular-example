import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../core/item/item';
import { ItemService } from '../../core/item/item.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public list: Array<Item> = [];

  private router: Router;
  private itemService: ItemService;

  constructor(router: Router, itemService: ItemService) {
    this.router = router;
    this.itemService = itemService;
  }

  ngOnInit(): void {
    this.fetchSelected();
  }

  public navigateToDetail(item: Item): void {
    const link: Array<any> = ['/detail', item.id];
    this.router.navigate(link);
  }

  private fetchSelected(): void {
    this.itemService
      .list()
      .then(list => this.list = list.slice(0, 6));
  }
}
