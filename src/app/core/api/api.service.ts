import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Item } from '../item/item';

@Injectable()
export class ApiService {
  public static readonly base: string = 'app';
  public static readonly list: string = `${ApiService.base}/list`;

  protected http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getList(): Promise<Array<Item>> {
    return this.http.get<Array<Item>>(ApiService.list).toPromise();
  }

  public postItem(item: Item): Promise<Item> {
    const url: string = `${ApiService.list}`;

    return this.http.post<Item>(url, item, {
      headers: this.headers(),
    }).toPromise();
  }

  public getItem(id: number): Promise<Item> {
    const url: string = `${ApiService.list}/${id}`;

    return this.http.get<Item>(url, {
      headers: this.headers(),
    }).toPromise();
  }

  public putItem(item: Item): Promise<Item> {
    const url: string = `${ApiService.list}/${item.id}`;

    return this.http.put<Item>(url, item, {
      headers: this.headers(),
    }).toPromise();
  }

  public deleteItem(item: Item): Promise<Item> {
    const url: string = `${ApiService.list}/${item.id}`;

    return this.http.delete<Item>(url, {
      headers: this.headers(),
    }).toPromise();
  }

  public search(term: string): Observable<Array<Item>> {
    const url: string = `${ApiService.list}?name=${term}`;

    return this.http.get<Array<Item>>(url);
  }

  protected headers(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return headers;
  }
}
