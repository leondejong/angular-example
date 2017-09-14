import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { ApiService } from '../api/api.service';
import { Item } from './item';

@Injectable()
export class ItemService {
  private api: ApiService;

  constructor(api: ApiService) {
    this.api = api;
  }

  public list(): Promise<Item[]> {
    return this.api.getList()
      .then(response => response.json().data as Item[])
      .catch(this.handleFailure);
  }

  public get(id: number): Promise<Item> {
    return this.api.getItem(id)
      .then(response => response.json().data as Item)
      .catch(this.handleFailure);
  }

  public save(item: Item): Promise<Item> {
    if (item.id) {
      return this.put(item);
    }
    return this.post(item);
  }

  public delete(item: Item): Promise<Item> {
    return this.api.deleteItem(item)
      .then(() => item)
      .catch(this.handleFailure);
  }

  private post(item: Item): Promise<Item> {
    return this.api.postItem(item)
      .then(res => res.json().data)
      .catch(this.handleFailure);
  }

  private put(item: Item): Promise<Item> {
    return this.api.putItem(item)
      .then(() => item)
      .catch(this.handleFailure);
  }

  private handleFailure(error: Error): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}
