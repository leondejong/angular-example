import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureModule} from '../feature/feature.module';
import { DashboardComponent, ListComponent, DetailComponent } from '../feature';

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
  imports: [
    RouterModule.forRoot(routes),
    FeatureModule
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
