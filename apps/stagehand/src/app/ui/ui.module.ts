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

import { BindingDirective } from 'libs/components/src/lib/binding.directive';
import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { GlobalBannerComponent } from 'libs/components/src/lib/global-banner.component';
import { GlobalLoadingComponent } from 'libs/components/src/lib/global-loading.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { LevelPipe } from 'libs/components/src/lib/level.pipe';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateRangeFieldComponent } from 'libs/form-fields/src/lib/date-range-field.component';

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

const COMPONENTS = [];
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
    SidebarComponent,
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
