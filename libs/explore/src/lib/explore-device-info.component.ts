import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { differenceInMinutes, formatDistanceToNow } from 'date-fns';
import { Observable } from 'rxjs';

import { AsyncHandler, SettingsService } from '@placeos/common';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

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
            class="radius center border-blue-600 absolute rounded-full border-8 border-dashed bg-info bg-opacity-25"
            [style]="'height: ' + diameter + '%; width: ' + diameter + '%;'"
        ></div>
        <div
            shadow
            class="center absolute h-8 w-8 rounded-full bg-neutral"
        ></div>
        <div
            name="dot"
            #dot
            class="center absolute h-3 w-3 rounded-full border-2 border-white shadow"
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
            class="pointer-events-auto absolute inset-0"
        ></div>

        <ng-template #device_tooltip>
            <div
                name="device-info"
                class="pointer-events-none left-0 top-0 mx-2 w-64 rounded bg-base-100 p-4 shadow"
                (mouseleave)="close()"
            >
                <div class="arrow"></div>
                <div class="details">
                    @if (mac && !hide_fields.includes('mac')) {
                        <p class="break-words">
                            <label
                                >{{ 'EXPLORE.DEVICE_MAC' | translate }}:</label
                            >
                            {{ mac }}
                        </p>
                    }
                    <p>
                        <label
                            >{{ 'EXPLORE.DEVICE_ACCURACY' | translate }}:</label
                        >
                        {{ variance }}m
                    </p>
                    <p>
                        <label
                            >{{
                                'EXPLORE.DEVICE_LAST_SEEN' | translate
                            }}:</label
                        >
                        {{ last_seen }}
                    </p>
                    @if (
                        manufacturer && !hide_fields.includes('manufacturer')
                    ) {
                        <p type>
                            <label
                                >{{
                                    'EXPLORE.DEVICE_MANUFACTURER' | translate
                                }}:</label
                            >
                            {{ manufacturer }}
                        </p>
                    }
                    @if (os && !hide_fields.includes('os')) {
                        <p os>
                            <label
                                >{{ 'EXPLORE.DEVICE_OS' | translate }}:</label
                            >
                            {{ os }}
                        </p>
                    }
                    @if (ssid && !hide_fields.includes('ssid')) {
                        <p ssid>
                            <label
                                >{{ 'EXPLORE.DEVICE_SSID' | translate }}:</label
                            >
                            {{ ssid }}
                        </p>
                    }
                    @if (username && !hide_fields.includes('username')) {
                        <p username>
                            <label
                                >{{
                                    'EXPLORE.DEVICE_USERNAME' | translate
                                }}:</label
                            >
                            {{ user?.name || user?.username || username }}
                        </p>
                    }
                    @if (user && !hide_fields.includes('user')) {
                        <p user>
                            <label
                                >{{ 'EXPLORE.DEVICE_TYPE' | translate }}:</label
                            >
                            {{ user.type }}
                        </p>
                    }
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
    imports: [TranslatePipe, CustomTooltipComponent],
})
export class ExploreDeviceInfoComponent extends AsyncHandler implements OnInit {
    private _details = inject<DeviceInfoData>(MAP_FEATURE_DATA);
    private _settings = inject(SettingsService);
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);

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
                new Date(),
            ),
        );
    }

    public get distance_color() {
        return this.distance < 10
            ? '#43a047'
            : this.distance < 20
              ? '#ffb300'
              : '#e53935';
    }

    constructor() {
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
                this._details.zoom$.subscribe((_) => (this.zoom = _)),
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
            .catch(() => null);
        this.username =
            details && details.assigned_to ? details.assigned_to : '';
    }
}
