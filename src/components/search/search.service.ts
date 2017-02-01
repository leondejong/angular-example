import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { ApiService } from '../api/api.service';
import { Item } from '../item/item';

@Injectable()
export class SearchService {
	private api: ApiService;

	constructor(api: ApiService) {
		this.api = api;
	}

	public search(term: string): Observable<Item[]> {
		return this.api.search(term).map(
			(response: Response) => response.json().data as Item[]
		);
	}
}
