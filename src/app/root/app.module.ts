import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';

import { CoreModule} from '../core/core.module';
import { SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
