import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SearchModule } from './search/search.module';

@NgModule({
  exports: [
    SearchModule
  ]
})
export class SharedModule {
  constructor (@Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      throw new Error('SharedModule already loaded.');
    }
  }
}
