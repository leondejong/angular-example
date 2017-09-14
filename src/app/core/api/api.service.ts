import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Item } from '../item/item';

@Injectable()
export class ApiService {
  public static readonly base: string = 'app';
  public static readonly list: string = `${ApiService.base}/list`;

  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  public getList(): Promise<Response> {
    return this.http.get(ApiService.list).toPromise();
  }

  public postItem(item: Item): Promise<Response> {
    const url: string = `${ApiService.list}`;
    const json: string = JSON.stringify(item);

    return this.http.post(url, json, {
      headers: this.headers()
    }).toPromise();
  }

  public getItem(id: number): Promise<Response> {
    const url: string = `${ApiService.list}/${id}`;

    return this.http.get(url, {
      headers: this.headers()
    }).toPromise();
  }

  public putItem(item: Item): Promise<Response> {
    const url: string = `${ApiService.list}/${item.id}`;
    const json: string = JSON.stringify(item);

    return this.http.put(url, json, {
      headers: this.headers()
    }).toPromise();
  }

  public deleteItem(item: Item): Promise<Response> {
    const url: string = `${ApiService.list}/${item.id}`;

    return this.http.delete(url, {
      headers: this.headers()
    }).toPromise();
  }

  public search(term: string): Observable<Response> {
    const url: string = `${ApiService.list}?name=${term}`;

    return this.http.get(url);
  }

  private headers(): Headers {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return headers;
  }
}
