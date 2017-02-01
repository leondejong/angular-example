import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ListComponent } from '../../pages/list/list.component';
import { DetailComponent } from '../../pages/detail/detail.component';

const routes: Routes = [{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	}, {
		path: 'dashboard',
		component: DashboardComponent
	}, {
		path: 'list',
		component: ListComponent
	}, {
		path: 'detail/:id',
		component: DetailComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class RoutingModule { }

export const routedComponents = [DashboardComponent, ListComponent, DetailComponent];
