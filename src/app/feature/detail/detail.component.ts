import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Item } from '../../core/item/item';
import { ItemService } from '../../core/item/item.service';

@Component({
  selector: 'ngx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() item: Item;
  @Output() close: EventEmitter<Item>;

  private route: ActivatedRoute;
  private itemService: ItemService;

  private error: Error;
  private navigated: boolean = false;

  constructor(route: ActivatedRoute, itemService: ItemService) {
    this.route = route;
    this.itemService = itemService;
    this.close = new EventEmitter<Item>();
  }

  ngOnInit(): void {
    this.fetchItem();
  }

  public save(): void {
    this.itemService
      .save(this.item)
      .then(item => {
        this.item = item;
        this.navigateBack(item);
      })
      .catch(error => this.error = error);
  }

  public navigateBack(item: Item = null): void {
    this.close.emit(item);
    if (this.navigated) {
      window.history.back();
    }
  }

  private fetchItem(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id: number = +params['id'];
        this.navigated = true;
        this.itemService
          .get(id)
          .then(item => this.item = item);
      } else {
        this.navigated = false;
        this.item = new Item();
      }
    });
  }
}
