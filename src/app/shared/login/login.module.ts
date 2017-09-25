import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DialogModule } from '../dialog/dialog.module';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        DialogModule,
    ],
    exports: [
        LoginComponent,
    ],
    declarations: [
        LoginComponent,
    ],
})
export class LoginModule { }
