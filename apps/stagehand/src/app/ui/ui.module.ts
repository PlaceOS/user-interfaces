import { NgModule } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
    BindingDirective,
    BuildingPipe,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    IconComponent,
    LevelPipe,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateRangeFieldComponent } from '@placeos/form-fields';

import { SidebarComponent } from './sidebar.component';

const MATERIAL_MODULES = [
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
];

const COMPONENTS = [SidebarComponent];
const STANDALONE_COMPONENTS = [
    GlobalLoadingComponent,
    GlobalBannerComponent,
    TranslatePipe,
    IconComponent,
    SimpleTableComponent,
    DateRangeFieldComponent,
    BindingDirective,
    LevelPipe,
    BuildingPipe,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        ...MATERIAL_MODULES,
        ...STANDALONE_COMPONENTS,
        RouterModule,
    ],
    exports: [...MATERIAL_MODULES, ...COMPONENTS, ...STANDALONE_COMPONENTS],
})
export class UiModule {}
