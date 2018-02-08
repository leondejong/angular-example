import { Injectable } from '@angular/core';

import { ApiService } from '../api/api.service';
import { Item } from './item';

@Injectable()
export class ItemService {
  protected apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  public list(): Promise<Array<Item>> {
    return this.apiService
      .getList()
      .then(response => response)
      .catch(this.handleFailure);
  }

  public get(id: number): Promise<Item> {
    return this.apiService
      .getItem(id)
      .then(response => response)
      .catch(this.handleFailure);
  }

  public save(item: Item): Promise<Item> {
    if (item.id) {
      return this.put(item);
    }
    return this.post(item);
  }

  public delete(item: Item): Promise<Item> {
    return this.apiService
      .deleteItem(item)
      .then(() => item)
      .catch(this.handleFailure);
  }

  protected post(item: Item): Promise<Item> {
    return this.apiService
      .postItem(item)
      .then(() => item)
      .catch(this.handleFailure);
  }

  protected put(item: Item): Promise<Item> {
    return this.apiService
      .putItem(item)
      .then(() => item)
      .catch(this.handleFailure);
  }

  protected handleFailure(error: Error): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}
