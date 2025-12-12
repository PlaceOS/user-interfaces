import { Component, computed, DestroyRef, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatMenuModule } from '@angular/material/menu';
import { i18n, OrganisationService, SettingsService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    CustomTooltipComponent,
    IconComponent,
} from '@placeos/components';
import { isTrusted } from '@placeos/ts-client';
import { debounceTime, map } from 'rxjs/operators';
import { ControlStateService } from './control-state.service';
import { CameraTooltipComponent } from './ui/camera-tooltip.component';
import { JoinRoomTooltipComponent } from './ui/join-room-tooltip.component';
import { LightingLevelsTooltipComponent } from './ui/lighting-levels-tooltip.component';
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
    LIGHT_LEVELS,
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
                [source]="logo()?.src || logo()"
            />
        </div>
        <div class="p-4 text-lg text-base-content">
            {{ system()?.name }}
        </div>
        <div
            class="hidden flex-1 items-center justify-end space-x-2 p-4 sm:flex"
        >
            @for (item of action_list(); track item.id) {
                @if (item.show) {
                    <div
                        customTooltip
                        [content]="cmp[item.id]"
                        [style.z-index]="
                            (item.id === 'join' || item.id === 'power') &&
                            !join_status()[0] &&
                            join_status()[1]
                                ? '99'
                                : ''
                        "
                    >
                        <button
                            icon
                            matRipple
                            class="bg-base-200 text-base-content"
                            [attr.type]="item.id"
                            [class.bg-success!]="item.enabled"
                            (click)="item.action ? item.action() : ''"
                        >
                            <icon>{{ item.icon }}</icon>
                        </button>
                    </div>
                }
            }
        </div>
        <button
            icon
            matRipple
            [matMenuTriggerFor]="menu"
            class="mr-2 text-base-content sm:hidden"
        >
            <icon>more_vert</icon>
        </button>
        <mat-menu #menu="matMenu">
            @for (item of action_list(); track item.id) {
                @if (item.show) {
                    <div
                        customTooltip
                        [content]="cmp[item.id]"
                        (click)="
                            $event.stopPropagation();
                            item.action ? item.action() : ''
                        "
                    >
                        <button [attr.type]="item.id" mat-menu-item>
                            <div class="flex items-center text-base">
                                <icon class="mr-2">{{ item.icon }}</icon>
                                <span>{{ item.name }}</span>
                            </div>
                        </button>
                    </div>
                }
            }
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
    imports: [
        MatMenuModule,
        CustomTooltipComponent,
        IconComponent,
        AuthenticatedImageDirective,
    ],
})
export class TopbarHeaderComponent implements OnInit {
    private _settings = inject(SettingsService);
    private _state = inject(ControlStateService);
    private _call = inject(VideoCallStateService);
    private _org = inject(OrganisationService);
    private _destroyRef = inject(DestroyRef);

    public readonly system = toSignal(this._state.system, {
        initialValue: {} as any,
    });
    public readonly join_status = toSignal(this._state.join_status, {
        initialValue: [false, false] as [boolean, boolean],
    });

    private readonly _mic_list = toSignal(this._state.mic_list, {
        initialValue: [],
    });
    private readonly _camera_list = toSignal(this._state.camera_list, {
        initialValue: [],
    });
    private readonly _lights_list = toSignal(this._state.lights, {
        initialValue: [],
    });
    private readonly _room_accessories = toSignal(
        this._state.room_accessories,
        {
            initialValue: [] as any[],
        },
    );
    private readonly _has_vc = toSignal(this._call.connected);
    private readonly _call_state = toSignal(this._call.call);
    private readonly _microphones = toSignal(this._state.microphones, {
        initialValue: [] as any[],
    });
    private readonly _join_modes = toSignal(this._state.join_modes, {
        initialValue: {} as Record<string, any>,
    });
    private readonly _joined = toSignal(this._state.joined);
    private readonly _speaker_track = toSignal(this._call.speaker_track);
    private readonly _lighting_scenes = toSignal(this._state.lighting_scenes);
    private readonly _help_items = toSignal(this._state.help_items, {
        initialValue: [] as any[],
    });
    private readonly _hide_join_button = toSignal(
        this._state.hide_join_button,
        {
            initialValue: false,
        },
    );
    private readonly _lighting_levels = toSignal(this._state.lighting_levels);

    public readonly cmp = {
        phone: PhoneDiallingTooltipComponent,
        video_conf: VideoConferenceTooltipComponent,
        lighting: LightingTooltipComponent,
        lighting_levels: LightingLevelsTooltipComponent,
        lighting_scenes: LightingSceneTooltipComponent,
        power: PowerTooltipComponent,
        blinds: RoomAccessoryTooltipComponent,
        camera: CameraTooltipComponent,
        mics: MicrophoneTooltipComponent,
        join: JoinRoomTooltipComponent,
    };

    private readonly _base_actions = [
        {
            id: 'phone',
            name: i18n('APP.CONTROL.ACTION_PHONE'),
            icon: 'call',
            show: true,
            enabled: false,
        },
        {
            id: 'video_conf',
            name: i18n('APP.CONTROL.ACTION_CONFERENCE'),
            icon: 'call',
            show: true,
            enabled: false,
        },
        {
            id: 'meet',
            name: i18n('APP.CONTROL.ACTION_JOIN_MEETING'),
            icon: 'video_call',
            show: true,
            enabled: false,
            action: () => this.selectMeeting(),
        },
        {
            id: 'lighting_scenes',
            name: i18n('APP.CONTROL.ACTION_LIGHT_SCENES'),
            icon: 'emoji_objects',
            show: true,
            enabled: false,
        },
        {
            id: 'lighting',
            name: i18n('APP.CONTROL.ACTION_LIGHTING'),
            icon: 'brightness_high',
            show: true,
            enabled: false,
        },
        {
            id: 'lighting_levels',
            name: i18n('APP.CONTROL.ACTION_LIGHTING_LEVELS'),
            icon: 'light',
            show: true,
            enabled: false,
        },
        {
            id: 'blinds',
            name: i18n('APP.CONTROL.ACTION_ACCESSORIES'),
            icon: 'unfold_more',
            show: true,
            enabled: false,
        },
        {
            id: 'mics',
            name: i18n('APP.CONTROL.ACTION_MICS'),
            icon: 'mic',
            show: true,
            enabled: false,
        },
        {
            id: 'camera',
            name: i18n('APP.CONTROL.ACTION_CAMERAS'),
            icon: 'photo_camera',
            show: true,
            enabled: false,
        },
        {
            id: 'help',
            name: i18n('APP.CONTROL.ACTION_HELP'),
            icon: 'help',
            show: true,
            enabled: false,
            action: () => this.viewHelp(),
        },
        {
            id: 'join',
            name: i18n('APP.CONTROL.ACTION_JOIN_ROOMS'),
            icon: 'link',
            show: true,
            enabled: false,
        },
        {
            id: 'power',
            name: i18n('APP.CONTROL.ACTION_POWER'),
            icon: 'power_settings_new',
            show: true,
            enabled: false,
        },
    ];

    public readonly action_list = computed(() => {
        const system = this.system();
        const mics = this._mic_list();
        const cams = this._camera_list();
        const lights = this._lights_list();
        const accessories = this._room_accessories();
        const has_vc = this._has_vc();
        const call = this._call_state();
        const microphones = this._microphones();
        const join_modes = this._join_modes();
        const joined = this._joined();
        const speaker_track = this._speaker_track();
        const l_scenes = this._lighting_scenes();
        const help_items = this._help_items();
        const hide_join_button = this._hide_join_button();
        const light_levels = this._lighting_levels();

        const actions = this._base_actions.map((action) => ({ ...action }));

        actions[TOOLTIP.PHONE].show = !!system?.dial_bindings;
        actions[TOOLTIP.PHONE].enabled = system?.offhook || system?.ringing;
        actions[TOOLTIP.VC].show = has_vc && false;
        actions[TOOLTIP.VC].enabled = !!call;
        actions[TOOLTIP.MEET].show =
            !this.is_trusted && system?.meeting_url && false;
        actions[TOOLTIP.LIGHTS].show = lights?.length > 0;
        actions[TOOLTIP.ACCESSORIES].show = accessories?.length > 0;
        actions[TOOLTIP.MICS].show =
            mics?.length > 0 || microphones?.length > 0;
        actions[TOOLTIP.JOIN].show =
            !hide_join_button && Object.keys(join_modes || {}).length > 1;
        actions[TOOLTIP.JOIN].enabled = (joined as any)?.room_ids?.length > 1;
        actions[TOOLTIP.CAMERA].show = cams?.length > 0 && !speaker_track;
        actions[TOOLTIP.HELP].show = help_items?.length > 0;
        actions[TOOLTIP.LIGHT_LEVELS].show = light_levels != null;
        actions[TOOLTIP.LIGHT_SCENES].show = l_scenes != null;

        return actions;
    });

    public readonly selectMeeting = () => this._state.selectMeeting();
    public readonly viewHelp = () => this._state.viewHelp();
    public readonly powerOff = () => this._state.powerOff();

    public readonly logo = toSignal(
        this._org.active_building.pipe(
            debounceTime(500),
            map(
                () =>
                    (this._settings.theme === 'dark'
                        ? this._settings.get('app.logo_dark')
                        : this._settings.get('app.logo_light')) || {},
            ),
        ),
    );

    public get is_trusted() {
        return isTrusted();
    }

    public ngOnInit() {
        // Empty - all logic is now in computed signals
    }
}
