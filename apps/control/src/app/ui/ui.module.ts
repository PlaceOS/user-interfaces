import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

import { ComponentsModule } from '@placeos/components';

import { LightingTooltipComponent } from './lighting-tooltip.component';
import { PowerTooltipComponent } from './power-tooltip.component';
import { HelpTooltipComponent } from './help-tooltip.component';
import { RoomAccessoryTooltipComponent } from './room-accessory-tooltip.component';
import { CameraTooltipComponent } from './camera-tooltip.component';
import { MicrophoneTooltipComponent } from './microphone-tooltip.component';
import { SourceSelectComponent } from './source-select.component';
import { SourceSelectModalComponent } from './source-select-modal.component';
import { OutputDisplayComponent } from './output-display.component';
import { JoystickComponent } from './joystick.component';
import { DurationPipe } from './duration.pipe';
import { SelectMeetingModalComponent } from './select-meeting-modal.component';
import { VideoConferenceTooltipComponent } from './video-conf-tooltip.component';
import { DialpadComponent } from './dialpad.component';
import { HelpModalComponent } from './help-modal.component';
import { MarkdownPipe } from './markdown.pipe';
import { VideoCallDialViewComponent } from '../video-call/video-call-dial-view.component';
import { CameraControlsComponent } from './camera-controls.component';
import { PhoneDiallingTooltipComponent } from './phone-dialling-tooltip.component';
import { JoinRoomTooltipComponent } from './join-room-tooltip.component';
import { LightingSceneTooltipComponent } from './lighting-scene-tooltip.component';

const COMPONENTS: Type<any>[] = [
    LightingTooltipComponent,
    PowerTooltipComponent,
    HelpTooltipComponent,
    RoomAccessoryTooltipComponent,
    CameraTooltipComponent,
    MicrophoneTooltipComponent,
    SourceSelectComponent,
    SourceSelectModalComponent,
    OutputDisplayComponent,
    JoystickComponent,
    SelectMeetingModalComponent,
    VideoConferenceTooltipComponent,
    DialpadComponent,
    HelpModalComponent,
    VideoCallDialViewComponent,
    CameraControlsComponent,
    PhoneDiallingTooltipComponent,
    JoinRoomTooltipComponent,
    LightingSceneTooltipComponent,

    DurationPipe,
    MarkdownPipe,
];

const MAT_MODULES: any[] = [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatSliderModule,
    MatRippleModule,
];

const ANGULAR_MODULES: any[] = [FormsModule, ReactiveFormsModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        ComponentsModule,
        ...MAT_MODULES,
        ...ANGULAR_MODULES,
        RouterModule.forChild([]),
    ],
    exports: [
        ComponentsModule,
        ...COMPONENTS,
        ...MAT_MODULES,
        ...ANGULAR_MODULES,
    ],
})
export class UIModule {}
