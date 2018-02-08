import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

@NgModule({
  imports: [
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService, { delay: 500 }),
  ],
})
export class DataModule { }
