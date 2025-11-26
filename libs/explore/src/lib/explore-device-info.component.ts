import {
    Component,
    ElementRef,
    afterNextRender,
    computed,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { getModule } from '@placeos/ts-client';
import { differenceInMinutes, formatDistanceToNow } from 'date-fns';
import { Observable } from 'rxjs';

import { SettingsService } from '@placeos/common';
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

const EMPTY: string[] = [];

@Component({
    selector: '[explore-device-info]',
    template: `
        <div
            name="radius"
            class="radius center border-blue-600 absolute rounded-full border-8 border-dashed border-info bg-info opacity-30"
            [style]="'height: ' + diameter() + '%; width: ' + diameter() + '%;'"
        ></div>
        <div
            shadow
            class="center absolute h-8 w-8 rounded-full bg-black opacity-30"
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
            [xPosition]="x_pos()"
            [yPosition]="y_pos()"
            [hover]="true"
            (mouseenter)="loadUser()"
            class="pointer-events-auto absolute inset-0"
        ></div>

        <ng-template #device_tooltip>
            <div
                name="device-info"
                class="pointer-events-none left-0 top-0 mx-2 w-64 rounded bg-base-100 p-4 shadow"
            >
                <div class="arrow"></div>
                <div class="details">
                    @if (mac && !hide_fields().includes('mac')) {
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
                        {{ last_seen() }}
                    </p>
                    @if (
                        manufacturer && !hide_fields().includes('manufacturer')
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
                    @if (os && !hide_fields().includes('os')) {
                        <p os>
                            <label
                                >{{ 'EXPLORE.DEVICE_OS' | translate }}:</label
                            >
                            {{ os }}
                        </p>
                    }
                    @if (ssid && !hide_fields().includes('ssid')) {
                        <p ssid>
                            <label
                                >{{ 'EXPLORE.DEVICE_SSID' | translate }}:</label
                            >
                            {{ ssid }}
                        </p>
                    }
                    @if (username() && !hide_fields().includes('username')) {
                        <p username>
                            <label
                                >{{
                                    'EXPLORE.DEVICE_USERNAME' | translate
                                }}:</label
                            >
                            {{ user?.name || user?.username || username() }}
                        </p>
                    }
                    @if (user && !hide_fields().includes('user')) {
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
export class ExploreDeviceInfoComponent {
    private _details = inject<DeviceInfoData>(MAP_FEATURE_DATA);
    private _settings = inject(SettingsService);
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);

    /** Name of the user associated with the mac address */
    public username = signal('');
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
    public readonly bg_color = this._details.bg_color || this._distance_color;

    public zoom = toSignal(this._details.zoom$, { initialValue: 1 });

    public hide_fields = computed(() => {
        return (
            this._settings.get<string[]>('app.explore.hide_device_fields') ||
            EMPTY
        );
    });

    /** Time of the last update */
    public last_seen = computed(() => {
        return formatDistanceToNow((this._details.last_seen || 0) * 1000, {
            addSuffix: true,
        });
    });

    public y_pos = signal<'top' | 'bottom'>('top');

    public x_pos = signal<'end' | 'start'>('start');

    /** Diameter of the radius circle */
    public diameter = computed(() => {
        return this._details.variance * 100 * this.zoom();
    });

    private get _distance() {
        return Math.abs(
            differenceInMinutes(
                (this._details.last_seen || 0) * 1000,
                new Date(),
            ),
        );
    }

    private get _distance_color() {
        return this._distance < 10
            ? '#43a047'
            : this._distance < 20
              ? '#ffb300'
              : '#e53935';
    }

    constructor() {
        afterNextRender(() => this._initPosition());
    }

    private _initPosition(tries: number = 0) {
        if (tries > 10) return;
        const parent = this._element.nativeElement.parentElement?.parentElement;
        if (!parent) {
            setTimeout(() => this._initPosition(++tries), 200);
            return;
        }
        const position = {
            y: parseInt(parent.style.top, 10) / 100,
            x: parseInt(parent.style.left, 10) / 100,
        };
        this.y_pos.set(position.y >= 0.5 ? 'bottom' : 'top');
        this.x_pos.set(position.x >= 0.5 ? 'end' : 'start');
    }

    public async loadUser() {
        if (this.username()) return;
        const mod = getModule(this._details.system, 'LocationServices');
        if (!mod) return;
        this.username.set('Loading...');
        const details = await mod
            .execute('check_ownership_of', [this.mac])
            .catch(() => null);
        this.username.set(
            details && details.assigned_to ? details.assigned_to : '',
        );
    }
}
