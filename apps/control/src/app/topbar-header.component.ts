import { Component, OnInit } from '@angular/core';
import { AsyncHandler, i18n, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { isTrusted } from '@placeos/ts-client';
import { combineLatest } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { ControlStateService } from './control-state.service';
import { CameraTooltipComponent } from './ui/camera-tooltip.component';
import { JoinRoomTooltipComponent } from './ui/join-room-tooltip.component';
import { LightingSceneTooltipComponent } from './ui/lighting-scene-tooltip.component';
import { LightingTooltipComponent } from './ui/lighting-tooltip.component';
import { MicrophoneTooltipComponent } from './ui/microphone-tooltip.component';
import { PhoneDiallingTooltipComponent } from './ui/phone-dialling-tooltip.component';
import { PowerTooltipComponent } from './ui/power-tooltip.component';
import { RoomAccessoryTooltipComponent } from './ui/room-accessory-tooltip.component';
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
            <img
                auth
                class="h-12"
                alt="Logo"
                [source]="(logo | async)?.src || (logo | async)"
            />
        </div>
        <div class="p-4 text-lg text-base-content">
            {{ (system | async).name }}
        </div>
        <div
            class="hidden flex-1 items-center justify-end space-x-2 p-4 sm:flex"
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
            class="mr-2 bg-none sm:hidden"
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
    standalone: false,
})
export class TopbarHeaderComponent extends AsyncHandler implements OnInit {
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

    public action_list = [];

    public readonly selectMeeting = () => this._state.selectMeeting();
    public readonly viewHelp = () => this._state.viewHelp();
    public readonly powerOff = () => this._state.powerOff();

    public readonly logo = this._org.active_building.pipe(
        debounceTime(500),
        map(
            () =>
                (this._settings.theme === 'dark'
                    ? this._settings.get('app.logo_dark')
                    : this._settings.get('app.logo_light')) || {},
        ),
    );

    public get is_trusted() {
        return isTrusted();
    }

    constructor(
        private _settings: SettingsService,
        private _state: ControlStateService,
        private _call: VideoCallStateService,
        private _org: OrganisationService,
    ) {
        super();
    }

    public ngOnInit() {
        this.action_list = [
            {
                id: 'phone',
                name: i18n('APP.CONTROL.ACTION_PHONE'),
                icon: 'call',
                show: true,
            },
            {
                id: 'video_conf',
                name: i18n('APP.CONTROL.ACTION_CONFERENCE'),
                icon: 'call',
                show: true,
            },
            {
                id: 'meet',
                name: i18n('APP.CONTROL.ACTION_JOIN_MEETING'),
                icon: 'video_call',
                show: true,
                action: () => this.selectMeeting(),
            },
            {
                id: 'lighting_scenes',
                name: i18n('APP.CONTROL.ACTION_LIGHT_SCENES'),
                icon: 'emoji_objects',
                show: true,
            },
            {
                id: 'lighting',
                name: i18n('APP.CONTROL.ACTION_LIGHTING'),
                icon: 'brightness_high',
                show: true,
            },
            {
                id: 'blinds',
                name: i18n('APP.CONTROL.ACTION_ACCESSORIES'),
                icon: 'unfold_more',
                show: true,
            },
            {
                id: 'mics',
                name: i18n('APP.CONTROL.ACTION_MICS'),
                icon: 'mic',
                show: true,
            },
            {
                id: 'camera',
                name: i18n('APP.CONTROL.ACTION_CAMERAS'),
                icon: 'photo_camera',
                show: true,
            },
            {
                id: 'help',
                name: i18n('APP.CONTROL.ACTION_HELP'),
                icon: 'help',
                show: true,
                action: () => this.viewHelp(),
            },
            {
                id: 'join',
                name: i18n('APP.CONTROL.ACTION_JOIN_ROOMS'),
                icon: 'link',
                show: true,
            },
            {
                id: 'power',
                name: i18n('APP.CONTROL.ACTION_POWER'),
                icon: 'power_settings_new',
                show: true,
            },
        ];
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
                },
            ),
        );
    }
}
