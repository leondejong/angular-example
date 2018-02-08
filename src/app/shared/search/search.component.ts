import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SearchService } from './search.service';
import { Item } from '../../core/item/item';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  public list: Observable<{} | Array<Item>>;

  private router: Router;
  private searchService: SearchService;

  constructor(router: Router, searchService: SearchService) {
    this.router = router;
    this.searchService = searchService;
  }

  ngOnInit(): void {
    this.list = this.searchService.fetchList();
  }

  public search(term: string): void {
    this.searchService.search(term);
  }

  public navigateToDetail(item: Item): void {
    const link: Array<any> = ['/detail', item.id];
    this.router.navigate(link);
  }
}
