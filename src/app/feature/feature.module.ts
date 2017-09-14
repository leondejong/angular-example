import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DashboardModule } from './dashboard/dashboard.module';
import { ListModule } from './list/list.module';
import { DetailModule } from './detail/detail.module';

@NgModule({
  exports: [
    DashboardModule,
    ListModule,
    DetailModule
  ]
})
export class FeatureModule {
  constructor (@Optional() @SkipSelf() parentModule: FeatureModule) {
    if (parentModule) {
      throw new Error('FeatureModule already loaded.');
    }
  }
}
