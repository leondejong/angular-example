import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureModule} from '../feature/feature.module';
import { AuthGuard } from '../core/auth/auth.guard';

import { LoginComponent } from '../shared';
import { LayoutComponent, DashboardComponent, OverviewComponent, DetailComponent } from '../feature';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full',
}, {
  path: 'login',
  outlet: 'login',
  component: LoginComponent
}, {
  path: '',
  component: LayoutComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'overview',
    component: OverviewComponent
  }, {
    path: 'detail/:id',
    component: DetailComponent,
    canActivate: [AuthGuard]
  }]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FeatureModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutingModule { }
