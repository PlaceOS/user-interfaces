import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

import { ComponentsModule } from '@user-interfaces/components';
import { LightingTooltipComponent } from './lighting-tooltip.component';
import { PowerTooltipComponent } from './power-tooltip.component';
import { HelpTooltipComponent } from './help-tooltip.component';
import { BlindsTooltipComponent } from './blinds-tooltip.component';
import { CameraTooltipComponent } from './camera-tooltip.component';
import { MicrophoneTooltipComponent } from './microphone-tooltip.component';

const COMPONENTS: Type<any>[] = [
    LightingTooltipComponent,
    PowerTooltipComponent,
    HelpTooltipComponent,
    BlindsTooltipComponent,
    CameraTooltipComponent,
    MicrophoneTooltipComponent
];

const MAT_MODULES: any[] = [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatSliderModule
];

const ANGULAR_MODULES: any[] = [FormsModule, ReactiveFormsModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        ComponentsModule,
        ...MAT_MODULES,
        ...ANGULAR_MODULES,
    ],
    exports: [
        ComponentsModule,
        ...COMPONENTS,
        ...MAT_MODULES,
        ...ANGULAR_MODULES,
    ],
})
export class UIModule {}
