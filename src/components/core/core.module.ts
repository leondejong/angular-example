import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from '../data/data.service';

import '../../extensions/rxjs';
import { AppComponent } from '../app/app.component';
import { RoutingModule, routedComponents } from '../routing/routing.module';
import { ApiService } from '../api/api.service';
import { ItemService } from '../item/item.service';
import { SearchComponent } from '../search/search.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RoutingModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(DataService, { delay: 500 })
	],
	declarations: [
		AppComponent,
		SearchComponent,
		routedComponents
	],
	providers: [
		ApiService,
		ItemService
	],
	bootstrap: [AppComponent]
})
export class CoreModule { }
