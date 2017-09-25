import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { ApiService } from '../api/api.service';
import { Item } from './item';

@Injectable()
export class ItemService {
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  public list(): Promise<Item[]> {
    return this.apiService.getList()
      .then(response => response.json() as Item[])
      .catch(this.handleFailure);
  }

  public get(id: number): Promise<Item> {
    return this.apiService.getItem(id)
      .then(response => response.json() as Item)
      .catch(this.handleFailure);
  }

  public save(item: Item): Promise<Item> {
    if (item.id) return this.put(item);
    return this.post(item);
  }

  public delete(item: Item): Promise<Item> {
    return this.apiService.deleteItem(item)
      .then(() => item)
      .catch(this.handleFailure);
  }

  private post(item: Item): Promise<Item> {
    return this.apiService.postItem(item)
      .then(response => response.json())
      .catch(this.handleFailure);
  }

  private put(item: Item): Promise<Item> {
    return this.apiService.putItem(item)
      .then(() => item)
      .catch(this.handleFailure);
  }

  private handleFailure(error: Error): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}
