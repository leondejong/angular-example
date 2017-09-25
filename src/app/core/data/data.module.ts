import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

@NgModule({
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(DataService, { delay: 500 }),
  ],
})
export class DataModule { }
