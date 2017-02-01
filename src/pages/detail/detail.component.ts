import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Item } from '../../components/item/item';
import { ItemService } from '../../components/item/item.service';

@Component({
	moduleId: module.id,
	selector: 'ex-detail',
	templateUrl: 'detail.component.html',
	styleUrls: ['detail.component.css']
})
export class DetailComponent implements OnInit {
	@Input() item: Item;
	@Output() close: EventEmitter<Item> = new EventEmitter<Item>();

	private route: ActivatedRoute;
	private itemService: ItemService;

	private error: any;
	private navigated: boolean = false;

	constructor(route: ActivatedRoute, itemService: ItemService) {
		this.route = route;
		this.itemService = itemService;
	}

	ngOnInit(): void {
		this.fetchItem();
	}

	public save(): void {
		this.itemService
			.save(this.item)
			.then(item => {
				this.item = item;
				this.navigateBack(item);
			}).catch(error => this.error = error);
	}

	public navigateBack(item: Item = null): void {
		this.close.emit(item);
		if (this.navigated) {
			window.history.back();
		}
	}

	private fetchItem(): void {
		this.route.params.forEach((params: Params) => {
			if (params['id'] !== undefined) {
				let id: number = +params['id'];
				this.navigated = true;
				this.itemService.get(id)
					.then(item => this.item = item);
			} else {
				this.navigated = false;
				this.item = new Item();
			}
		});
	}
}
