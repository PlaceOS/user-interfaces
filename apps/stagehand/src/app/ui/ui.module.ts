import { NgModule } from '@angular/core';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@placeos/components';
import { SharedExploreModule } from 'libs/explore/src/lib/explore.module';
import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';
import { SidebarComponent } from './sidebar.component';

const MATERIAL_MODULES = [
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
];

const PLACEOS_MODULES = [
    ComponentsModule,
    FormFieldsModule,
    SharedExploreModule,
];

const COMPONENTS = [SidebarComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        ...MATERIAL_MODULES,
        ...PLACEOS_MODULES,
        RouterModule,
    ],
    exports: [...MATERIAL_MODULES, ...PLACEOS_MODULES, ...COMPONENTS],
})
export class UiModule {}
