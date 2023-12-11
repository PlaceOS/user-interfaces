import { Component } from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { isTrusted } from '@placeos/ts-client';
import { combineLatest } from 'rxjs';
import { ControlStateService } from './control-state.service';
import { RoomAccessoryTooltipComponent } from './ui/room-accessory-tooltip.component';
import { CameraTooltipComponent } from './ui/camera-tooltip.component';
import { JoinRoomTooltipComponent } from './ui/join-room-tooltip.component';
import { LightingSceneTooltipComponent } from './ui/lighting-scene-tooltip.component';
import { LightingTooltipComponent } from './ui/lighting-tooltip.component';
import { MicrophoneTooltipComponent } from './ui/microphone-tooltip.component';
import { PhoneDiallingTooltipComponent } from './ui/phone-dialling-tooltip.component';
import { PowerTooltipComponent } from './ui/power-tooltip.component';
import { VideoConferenceTooltipComponent } from './ui/video-conf-tooltip.component';
import { VideoCallStateService } from './video-call/video-call-state.service';

enum TOOLTIP {
    PHONE,
    VC,
    MEET,
    LIGHT_SCENES,
    LIGHTS,
    ACCESSORIES,
    MICS,
    CAMERA,
    HELP,
    JOIN,
    POWER,
}

@Component({
    selector: 'topbar-header',
    template: `
        <div class="flex-1 px-4">
            <img logo class="h-10" [src]="logo?.src" alt="Logo" />
        </div>
        <div class="p-4 text-lg text-base-content">
            {{ (system | async).name }}
        </div>
        <div
            class="flex-1 p-4 items-center justify-end space-x-2 hidden sm:flex"
        >
            <ng-container *ngFor="let item of action_list">
                <div
                    customTooltip
                    [content]="cmp[item.id]"
                    *ngIf="item.show"
                    [style.z-index]="
                        (item.id === 'join' || item.id === 'power') &&
                        !(join_status | async)[0] &&
                        (join_status | async)[1]
                            ? '99'
                            : ''
                    "
                >
                    <button
                        icon
                        matRipple
                        class="bg-base-200 text-base-content"
                        [attr.type]="item.id"
                        [class.!bg-success]="item.enabled"
                        (click)="item.action ? item.action() : ''"
                    >
                        <app-icon>{{ item.icon }}</app-icon>
                    </button>
                </div>
            </ng-container>
        </div>
        <button
            icon
            matRipple
            [matMenuTriggerFor]="menu"
            class="sm:hidden mr-2 bg-none"
        >
            <app-icon>more_vert</app-icon>
        </button>
        <mat-menu #menu="matMenu">
            <ng-container *ngFor="let item of action_list">
                <div
                    customTooltip
                    [content]="cmp[item.id]"
                    *ngIf="item.show"
                    (click)="
                        $event.stopPropagation();
                        item.action ? item.action() : ''
                    "
                >
                    <button [attr.type]="item.id" mat-menu-item>
                        <div class="flex items-center text-base">
                            <app-icon class="mr-2">{{ item.icon }}</app-icon>
                            <span>{{ item.name }}</span>
                        </div>
                    </button>
                </div>
            </ng-container>
        </mat-menu>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
            }

            img {
                max-height: calc(100% - 1rem);
            }

            button {
                border-radius: 0.25rem;
                background-color: rgba(255, 255, 255, 0.15);
            }
        `,
    ],
})
export class TopbarHeaderComponent extends AsyncHandler {
    public readonly system = this._state.system;
    public readonly mic_list = this._state.mic_list;
    public readonly camera_list = this._state.camera_list;
    public readonly lights_list = this._state.lights;
    public readonly blinds_list = this._state.blinds;
    public readonly join_status = this._state.join_status;

    public readonly cmp = {
        phone: PhoneDiallingTooltipComponent,
        video_conf: VideoConferenceTooltipComponent,
        lighting: LightingTooltipComponent,
        lighting_scenes: LightingSceneTooltipComponent,
        power: PowerTooltipComponent,
        blinds: RoomAccessoryTooltipComponent,
        camera: CameraTooltipComponent,
        mics: MicrophoneTooltipComponent,
        join: JoinRoomTooltipComponent,
    };

    public action_list = [
        {
            id: 'phone',
            name: 'Phone',
            icon: 'call',
            show: true,
        },
        {
            id: 'video_conf',
            name: 'Video Conference',
            icon: 'call',
            show: true,
        },
        {
            id: 'meet',
            name: 'Join Meeting',
            icon: 'video_call',
            show: true,
            action: () => this.selectMeeting(),
        },
        {
            id: 'lighting_scenes',
            name: 'Lighting Scenes',
            icon: 'emoji_objects',
            show: true,
        },
        {
            id: 'lighting',
            name: 'Lighting',
            icon: 'brightness_high',
            show: true,
        },
        { id: 'blinds', name: 'Accessories', icon: 'unfold_more', show: true },
        { id: 'mics', name: 'Microphones', icon: 'mic', show: true },
        { id: 'camera', name: 'Cameras', icon: 'photo_camera', show: true },
        {
            id: 'help',
            name: 'Help',
            icon: 'help',
            show: true,
            action: () => this.viewHelp(),
        },
        { id: 'join', name: 'Join Rooms', icon: 'link', show: true },
        { id: 'power', name: 'Power', icon: 'power_settings_new', show: true },
    ];

    public readonly selectMeeting = () => this._state.selectMeeting();
    public readonly viewHelp = () => this._state.viewHelp();
    public readonly powerOff = () => this._state.powerOff();

    /** Application logo to display */
    public get logo() {
        return this._settings.get('theme') === 'dark'
            ? this._settings.get('app.logo_dark')
            : this._settings.get('app.logo_light');
    }

    public get is_trusted() {
        return isTrusted();
    }

    constructor(
        private _settings: SettingsService,
        private _state: ControlStateService,
        private _call: VideoCallStateService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'check',
            combineLatest([
                this.mic_list,
                this.camera_list,
                this.lights_list,
                this._state.room_accessories,
                this.system,
                this._call.connected,
                this._call.call,
                this._state.microphones,
                this._state.join_modes,
                this._state.joined,
                this._call.speaker_track,
                this._state.lighting_scenes,
                this._state.help_items,
                this._state.hide_join_button,
            ]).subscribe(
                ([
                    mics,
                    cams,
                    lights,
                    accessories,
                    system,
                    has_vc,
                    call,
                    microphones,
                    join_modes,
                    joined,
                    speaker_track,
                    l_scenes,
                    help_items,
                    hide_join_button,
                ]) => {
                    (this.action_list as any)[TOOLTIP.PHONE].show = !!(
                        system as any
                    ).dial_bindings;
                    (this.action_list as any)[TOOLTIP.PHONE].enabled =
                        (system as any).offhook || (system as any).ringing;
                    (this.action_list as any)[TOOLTIP.VC].show =
                        has_vc && false;
                    (this.action_list as any)[TOOLTIP.VC].enabled = !!call;
                    this.action_list[TOOLTIP.MEET].show =
                        !this.is_trusted &&
                        (system as any).meeting_url &&
                        false;
                    this.action_list[TOOLTIP.LIGHTS].show =
                        (lights as any)?.length > 0;
                    this.action_list[TOOLTIP.ACCESSORIES].show =
                        (accessories as any)?.length > 0;
                    this.action_list[TOOLTIP.MICS].show =
                        (mics as any)?.length > 0 ||
                        (microphones as any)?.length > 0;
                    this.action_list[TOOLTIP.JOIN].show =
                        !hide_join_button &&
                        Object.keys((join_modes as any) || {}).length > 1;
                    (this.action_list[TOOLTIP.JOIN] as any).enabled =
                        (joined as any)?.room_ids?.length > 1;
                    this.action_list[TOOLTIP.CAMERA].show =
                        (cams as any)?.length > 0 && !speaker_track;
                    this.action_list[TOOLTIP.HELP].show =
                        (help_items as any)?.length > 0;
                    this.action_list = [...this.action_list];
                    this.action_list[TOOLTIP.LIGHT_SCENES].show =
                        l_scenes != null;
                }
            )
        );
    }
}
