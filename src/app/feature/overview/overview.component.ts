import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../core/item/item';
import { AuthGuard } from '../../core/auth/auth.guard';
import { ItemService } from '../../core/item/item.service';

@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public list: Array<Item>;

  public addingItem: boolean = false;
  public error: Error;

  private router: Router;
  private authGuard: AuthGuard;
  private itemService: ItemService;

  constructor(router: Router, authGuard: AuthGuard, itemService: ItemService) {
    this.router = router;
    this.authGuard = authGuard;
    this.itemService = itemService;
  }

  ngOnInit(): void {
    this.get();
  }

  public get(): void {
    this.itemService
      .list()
      .then(list => this.list = list)
      .catch(error => this.error = error);
  }

  public addItem(): void {
    if (this.authGuard.checkAuth('/list')) {
      this.addingItem = true;
    }
  }

  public deleteItem(item: Item, event: Event): void {
    event.stopPropagation();
    if (this.authGuard.checkAuth('/list')) {
      this.itemService
        .delete(item)
        .then(result => {
          this.list = this.list.filter(i => i !== item);
        })
        .catch(error => this.error = error);
    }
  }

  public close(item: Item): void {
    this.addingItem = false;
    if (item) {
      this.get();
    }
  }

  public navigateToDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  public onSelect(item: Item): void {
    this.navigateToDetail(item.id);
  }
}
