import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailComponent } from './detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DetailComponent
  ],
  declarations: [
    DetailComponent
  ]
})
export class DetailModule { }
