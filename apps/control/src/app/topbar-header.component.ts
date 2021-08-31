import { Component } from '@angular/core';
import { BaseClass, SettingsService } from '@placeos/common';
import { isTrusted } from '@placeos/ts-client';
import { combineLatest } from 'rxjs';
import { ControlStateService } from './control-state.service';
import { BlindsTooltipComponent } from './ui/blinds-tooltip.component';
import { CameraTooltipComponent } from './ui/camera-tooltip.component';
import { HelpTooltipComponent } from './ui/help-tooltip.component';
import { LightingTooltipComponent } from './ui/lighting-tooltip.component';
import { MicrophoneTooltipComponent } from './ui/microphone-tooltip.component';
import { PowerTooltipComponent } from './ui/power-tooltip.component';

@Component({
    selector: 'topbar-header',
    template: `
        <div class="flex-1 px-4">
            <img logo class="h-10" [src]="logo?.src" alt="Logo" />
        </div>
        <div class="p-4 text-lg">{{ (system | async).name }}</div>
        <div
            class="flex-1 p-4 items-center justify-end space-x-2 hidden sm:flex"
        >
            <ng-container *ngFor="let item of action_list">
                <div customTooltip [content]="cmp[item.id]" *ngIf="item.show">
                    <button
                        [attr.type]="item.id"
                        mat-icon-button
                        (click)="item.action ? item.action() : ''"
                    >
                        <app-icon>{{ item.icon }}</app-icon>
                    </button>
                </div>
            </ng-container>
        </div>
        <button
            mat-icon-button
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
                border-bottom: 1px solid #ccc8;
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
export class TopbarHeaderComponent extends BaseClass {
    public readonly system = this._state.system;
    public readonly mic_list = this._state.mic_list;
    public readonly camera_list = this._state.camera_list;
    public readonly lights_list = this._state.lights;
    public readonly blinds_list = this._state.blinds;

    public readonly cmp = {
        lighting: LightingTooltipComponent,
        power: PowerTooltipComponent,
        help: HelpTooltipComponent,
        blinds: BlindsTooltipComponent,
        camera: CameraTooltipComponent,
        mics: MicrophoneTooltipComponent,
    };

    public action_list = [
        {
            id: 'meet',
            name: 'Join Meeting',
            icon: 'video_call',
            show: true,
            action: () => this.selectMeeting(),
        },
        {
            id: 'lights',
            name: 'Lighting',
            icon: 'brightness_high',
            show: true,
        },
        { id: 'blinds', name: 'Blinds', icon: 'unfold_more', show: true },
        { id: 'mics', name: 'Microphones', icon: 'mic', show: true },
        { id: 'camera', name: 'Cameras', icon: 'photo_camera', show: true },
        { id: 'help', name: 'Help', icon: 'help', show: true },
        { id: 'power', name: 'Power', icon: 'power_settings_new', show: true },
    ];

    public readonly selectMeeting = () => this._state.selectMeeting();
    public readonly powerOff = () => this._state.powerOff();

    public get logo() {
        return this._settings.get('app.logo_dark') || {};
    }

    public get is_trusted() {
        return isTrusted();
    }

    constructor(
        private _settings: SettingsService,
        private _state: ControlStateService
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
                this.blinds_list,
                this.system,
            ]).subscribe(([mics, cams, lights, blinds, system]) => {
                this.action_list[0].show =
                    !this.is_trusted && (system as any).meeting_url;
                this.action_list[1].show = lights?.length > 0;
                this.action_list[2].show = blinds?.length > 0;
                this.action_list[3].show = mics?.length > 0;
                this.action_list[4].show = cams?.length > 0;
                this.action_list = [...this.action_list];
            })
        );
    }
}
