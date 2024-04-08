import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { differenceInMinutes, formatDistanceToNow } from 'date-fns';
import { Observable } from 'rxjs';

import { AsyncHandler, SettingsService } from '@placeos/common';
import { MAP_FEATURE_DATA } from 'libs/components/src/lib/interactive-map.component';

export interface DeviceInfoData {
    mac: string;
    variance: number;
    last_seen: number;
    system: string;
    manufacturer?: string;
    os?: string;
    ssid?: string;
    user?: any;
    bg_color?: string;
    zoom$?: Observable<number>;
}

const EMPTY = [];

@Component({
    selector: '[explore-device-info]',
    template: `
        <div
            name="radius"
            class="radius absolute center bg-info bg-opacity-25 border-8 border-dashed border-blue-600 rounded-full"
            [style]="'height: ' + diameter + '%; width: ' + diameter + '%;'"
        ></div>
        <div
            shadow
            class="absolute center bg-neutral h-8 w-8 rounded-full"
        ></div>
        <div
            name="dot"
            #dot
            class="h-3 w-3 absolute center rounded-full shadow border-2 border-white"
            [style.background-color]="bg_color"
        ></div>
        <div
            customTooltip
            [content]="device_tooltip"
            [backdrop]="false"
            [xPosition]="x_pos"
            [yPosition]="y_pos"
            [hover]="true"
            (mouseenter)="loadUser()"
            class="absolute inset-0 pointer-events-auto"
        ></div>

        <ng-template #device_tooltip>
            <div
                name="device-info"
                class="w-64 rounded bg-base-100 p-4 top-0 left-0 shadow pointer-events-none mx-2"
                (mouseleave)="close()"
            >
                <div class="arrow"></div>
                <div class="details">
                    <p
                        class="break-words"
                        *ngIf="mac && !hide_fields.includes('mac')"
                    >
                        <label i18n>MAC:</label> {{ mac }}
                    </p>
                    <p><label i18n>Accuracy:</label> {{ variance }}m</p>
                    <p><label i18n>Last Seen:</label> {{ last_seen }}</p>
                    <p
                        type
                        *ngIf="
                            manufacturer &&
                            !hide_fields.includes('manufacturer')
                        "
                    >
                        <label i18n>Manufacturer:</label> {{ manufacturer }}
                    </p>
                    <p os *ngIf="os && !hide_fields.includes('os')">
                        <label i18n>OS:</label> {{ os }}
                    </p>
                    <p ssid *ngIf="ssid && !hide_fields.includes('ssid')">
                        <label i18n>SSID:</label> {{ ssid }}
                    </p>
                    <p
                        username
                        *ngIf="username && !hide_fields.includes('username')"
                    >
                        <label i18n>Username:</label>
                        {{ user?.name || user?.username || username }}
                    </p>
                    <p user *ngIf="user && !hide_fields.includes('user')">
                        <label i18n>Type:</label> {{ user.type }}
                    </p>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                pointer-events: auto;
            }

            :host > [name='dot'] {
                background-color: #616161;
            }

            :host:hover > [name='radius'] {
                opacity: 1;
            }

            [name='radius'] {
                opacity: 0;
                transition: opacity 200ms;
                pointer-events: none;
            }
        `,
    ],
})
export class ExploreDeviceInfoComponent extends AsyncHandler implements OnInit {
    /** Name of the user associated with the mac address */
    public username = '';
    /** User details associated with device */
    public readonly user = this._details.user;
    /** Mac Address of the device */
    public readonly mac = this._details.mac;
    /** Mac Address of the device */
    public readonly manufacturer = this._details.manufacturer;
    /** Mac Address of the device */
    public readonly os = this._details.os;
    /** Mac Address of the device */
    public readonly ssid = this._details.ssid;
    /** Accuracy of the location data */
    public readonly variance = this._details.variance?.toFixed(2);
    /** Background color for the dot */
    public readonly bg_color = this._details.bg_color || this.distance_color;

    public zoom = 1;

    public get hide_fields() {
        return this._settings.get('app.explore.hide_device_fields') || EMPTY;
    }

    /** Time of the last update */
    public get last_seen() {
        return formatDistanceToNow((this._details.last_seen || 0) * 1000, {
            addSuffix: true,
        });
    }

    public y_pos: 'top' | 'bottom';

    public x_pos: 'end' | 'start';
    /** Diameter of the radius circle */
    public get diameter() {
        return this._details.variance * 100 * this.zoom;
    }

    public get distance() {
        return Math.abs(
            differenceInMinutes(
                (this._details.last_seen || 0) * 1000,
                new Date()
            )
        );
    }

    public get distance_color() {
        return this.distance < 10
            ? '#43a047'
            : this.distance < 20
            ? '#ffb300'
            : '#e53935';
    }

    constructor(
        @Inject(MAP_FEATURE_DATA) private _details: DeviceInfoData,
        private _settings: SettingsService,
        private _element: ElementRef<HTMLElement>
    ) {
        super();
    }

    public ngOnInit(tries: number = 0) {
        if (tries > 10) return;
        setTimeout(() => {
            const parent =
                this._element.nativeElement.parentElement?.parentElement;
            if (!parent) return this.ngOnInit(++tries);
            const position = {
                y: parseInt(parent.style.top, 10) / 100,
                x: parseInt(parent.style.left, 10) / 100,
            };
            this.y_pos = position.y >= 0.5 ? 'bottom' : 'top';
            this.x_pos = position.x >= 0.5 ? 'end' : 'start';
            this.subscription(
                'zoom',
                this._details.zoom$.subscribe((_) => (this.zoom = _))
            );
        }, 200);
    }

    public async loadUser() {
        if (this.username) return;
        const mod = getModule(this._details.system, 'LocationServices');
        if (!mod) return;
        this.username = 'Loading...';
        const details = await mod
            .execute('check_ownership_of', [this.mac])
            .catch((_) => null);
        this.username =
            details && details.assigned_to ? details.assigned_to : '';
    }
}
