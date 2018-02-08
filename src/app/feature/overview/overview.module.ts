import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailModule } from '../detail/detail.module';
import { OverviewComponent } from './overview.component';

@NgModule({
  imports: [
    CommonModule,
    DetailModule,
  ],
  exports: [
    OverviewComponent,
  ],
  declarations: [
    OverviewComponent,
  ],
})
export class OverviewModule { }
