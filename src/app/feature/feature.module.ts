import { NgModule, Optional, SkipSelf } from '@angular/core';

import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OverviewModule } from './overview/overview.module';
import { DetailModule } from './detail/detail.module';

@NgModule({
  exports: [
    LayoutModule,
    DashboardModule,
    OverviewModule,
    DetailModule,
  ],
})
export class FeatureModule {
  constructor (@Optional() @SkipSelf() parentModule: FeatureModule) {
    if (parentModule) {
      throw new Error('FeatureModule already loaded.');
    }
  }
}
