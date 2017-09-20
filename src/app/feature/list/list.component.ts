import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../core/item/item';
import { ItemService } from '../../core/item/item.service';

@Component({
  moduleId: module.id,
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public list: Array<Item>;

  public addingItem: boolean = false;
  public error: Error;

  private router: Router;
  private itemService: ItemService;

  constructor(router: Router, itemService: ItemService) {
    this.router = router;
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
    this.addingItem = true;
  }

  public deleteItem(item: Item, event: Event): void {
    event.stopPropagation();
    this.itemService
      .delete(item)
      .then(result => {
        this.list = this.list.filter(h => h !== item);
      })
      .catch(error => this.error = error);
  }

  public close(item: Item): void {
    this.addingItem = false;
    if (item) this.get();
  }

  public navigateToDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  public onSelect(item: Item): void {
    this.navigateToDetail(item.id);
  }
}
