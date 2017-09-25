import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DialogModule } from './dialog/dialog.module';
import { LoginModule } from './login/login.module';
import { SearchModule } from './search/search.module';

@NgModule({
  exports: [
    DialogModule,
    LoginModule,
    SearchModule,
  ],
})
export class SharedModule {
  constructor (@Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      throw new Error('SharedModule already loaded.');
    }
  }
}
