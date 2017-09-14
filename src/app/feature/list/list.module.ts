import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailModule } from '../detail/detail.module';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    DetailModule
  ],
  exports: [
    ListComponent
  ],
  declarations: [
    ListComponent
  ]
})
export class ListModule { }
