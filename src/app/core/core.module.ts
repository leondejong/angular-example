import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DataModule } from './data/data.module';
import { ApiModule } from './api/api.module';
import { ItemModule } from './item/item.module';

@NgModule({
  exports: [
    DataModule,
    ApiModule,
    ItemModule
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already loaded.');
    }
  }
}
