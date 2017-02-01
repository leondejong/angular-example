import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../components/item/item';
import { ItemService } from '../../components/item/item.service';

@Component({
	moduleId: module.id,
	selector: 'ex-list',
	templateUrl: 'list.component.html',
	styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {
	public list: Item[];
	public selectedItem: Item;

	public addingItem: boolean = false;
	public error: any;

	private router: Router;
	private itemService: ItemService;

	constructor(router: Router, itemService: ItemService) {
		this.router = router;
		this.itemService = itemService;
	}

	ngOnInit(): void {
		this.get();
	}

	public get(): void {
		this.itemService
			.list()
			.then(list => this.list = list)
			.catch(error => this.error = error);
	}

	public addItem(): void {
		this.addingItem = true;
		this.selectedItem = null;
	}

	public deleteItem(item: Item, event: any): void {
		event.stopPropagation();
		this.itemService
			.delete(item)
			.then(result => {
				this.list = this.list.filter(h => h !== item);
				if (this.selectedItem === item) {
					this.selectedItem = null;
				}
			}).catch(error => this.error = error);
	}

	public close(item: Item): void {
		this.addingItem = false;
		if (item) {
			this.get();
		}
	}

	public navigateToDetail(): void {
		this.router.navigate(['/detail', this.selectedItem.id]);
	}

	public onSelect(item: Item): void {
		this.selectedItem = item;
		this.addingItem = false;
	}
}
