import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';

import { ComponentsModule } from '@placeos/components';

import { VideoCallDialViewComponent } from '../video-call/video-call-dial-view.component';
import { CameraControlsComponent } from './camera-controls.component';
import { CameraTooltipComponent } from './camera-tooltip.component';
import { DialpadComponent } from './dialpad.component';
import { DurationPipe } from './duration.pipe';
import { HelpModalComponent } from './help-modal.component';
import { HelpTooltipComponent } from './help-tooltip.component';
import { JoinRoomTooltipComponent } from './join-room-tooltip.component';
import { JoystickComponent } from './joystick.component';
import { LightingSceneTooltipComponent } from './lighting-scene-tooltip.component';
import { LightingTooltipComponent } from './lighting-tooltip.component';
import { MarkdownPipe } from './markdown.pipe';
import { MicrophoneTooltipComponent } from './microphone-tooltip.component';
import { OutputDisplayComponent } from './output-display.component';
import { PhoneDiallingTooltipComponent } from './phone-dialling-tooltip.component';
import { PowerTooltipComponent } from './power-tooltip.component';
import { RoomAccessoryTooltipComponent } from './room-accessory-tooltip.component';
import { SelectMeetingModalComponent } from './select-meeting-modal.component';
import { SourceSelectModalComponent } from './source-select-modal.component';
import { SourceSelectComponent } from './source-select.component';
import { VideoConferenceTooltipComponent } from './video-conf-tooltip.component';
import { VoiceAssistantComponent } from './voice-assistant.component';

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
    VoiceAssistantComponent,

    DurationPipe,
    MarkdownPipe,
];

const MAT_MODULES: any[] = [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
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
