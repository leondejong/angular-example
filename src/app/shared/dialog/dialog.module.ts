import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DialogComponent } from './dialog.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        DialogComponent,
    ],
    declarations: [
        DialogComponent,
    ],
})
export class DialogModule { }
