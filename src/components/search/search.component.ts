import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { SearchService } from './search.service';
import { Item } from '../item/item';

@Component({
	moduleId: module.id,
	selector: 'ex-search',
	templateUrl: 'search.component.html',
	styleUrls: ['search.component.css'],
	providers: [SearchService]
})
export class SearchComponent implements OnInit {
	public list: Observable<Item[]>;

	private router: Router;
	private searchTerms = new Subject<string>();
	private searchService: SearchService;

	private debounceTime: number = 300;

	constructor(router: Router, searchService: SearchService) {
		this.router = router;
		this.searchService = searchService;
	}

	ngOnInit(): void {
		this.fetchList();
	}

	public search(term: string): void {
		this.searchTerms.next(term);
	}

	public navigateToDetail(item: Item): void {
		let link = ['/detail', item.id];
		this.router.navigate(link);
	}

	private fetchList(): void {
		this.list = this.searchTerms
			.debounceTime(this.debounceTime)
			.distinctUntilChanged()
			.switchMap(
				term => this.fetchResponse(term)
			).catch(
				error => this.handleFailure(error)
			);
	}

	private fetchResponse(term: string): any {
		if(term) {
			return this.searchService.search(term);
		} else {
			return Observable.of<Item[]>([]);
		}
	}

	private handleFailure(error: any): Observable<Item[]>{
		console.log(error);
		return Observable.of<Item[]>([]);
	}
}
