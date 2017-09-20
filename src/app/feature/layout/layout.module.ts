import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { SearchModule } from '../../shared/search/search.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SearchModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [
    LayoutComponent
  ]
})
export class LayoutModule { }
