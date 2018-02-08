import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/of';

import { ApiService } from '../../core/api/api.service';
import { Item } from '../../core/item/item';

@Injectable()
export class SearchService {
  protected api: ApiService;
  protected searchTerms: Subject<string>;

  protected debounceTime: number = 300;

  constructor(api: ApiService) {
    this.api = api;
    this.searchTerms = new Subject<string>();
  }

  public search(term: string): void {
    this.searchTerms.next(term);
  }

  public fetchList(): Observable<Array<Item>> {
    return this.searchTerms.pipe(
      debounceTime(this.debounceTime),
      distinctUntilChanged(),
      switchMap(term => this.fetchResponse(term)),
      catchError(error => this.handleFailure(error)),
    );
  }

  protected searchResponse(term: string): Observable<Array<Item>> {
    return this.api.search(term);
  }

  protected fetchResponse(term: string): Observable<Array<Item>> {
    if (term) {
      return this.searchResponse(term);
    } else {
      return Observable.of<Array<Item>>([]);
    }
  }

  protected handleFailure(error: Error): Promise<any> {
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
