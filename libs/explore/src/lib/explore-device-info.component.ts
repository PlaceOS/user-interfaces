import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import {
    Component,
    ElementRef,
    HostListener,
    Inject,
    OnInit,
    ViewChild,
} from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { MAP_FEATURE_DATA } from '@placeos/components';
import { differenceInMinutes, formatDistanceToNow } from 'date-fns';
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
}

@Component({
    selector: '[explore-device-info]',
    template: `
        <div
            name="radius"
            (mouseenter)="loadUser()"
            class="radius absolute center bg-blue-600 bg-opacity-25 border-4 border-dashed border-blue-600 rounded-full"
            [style]="'height: ' + diameter + '%; width: ' + diameter + '%;'"
        ></div>
        <div
            name="dot"
            #dot
            class="h-2 w-2 absolute center rounded-full pointer-events-auto"
            [style.background-color]="bg_color"
        ></div>

        <ng-template cdk-portal>
            <div
                name="device-info"
                class="rounded bg-white p-4 top-0 left-0 shadow pointer-events-none"
                (mouseleave)="close()"
            >
                <div class="arrow"></div>
                <div class="details">
                    <p><label>MAC:</label> {{ mac }}</p>
                    <p><label>Accuracy:</label> {{ variance }}m</p>
                    <p><label>Last Seen:</label> {{ last_seen }}</p>
                    <p *ngIf="manufacturer">
                        <label>Manufacturer:</label> {{ manufacturer }}
                    </p>
                    <p *ngIf="os"><label>OS:</label> {{ os }}</p>
                    <p *ngIf="ssid"><label>SSID:</label> {{ ssid }}</p>
                    <p *ngIf="username">
                        <label>Username:</label>
                        {{ user?.name || user?.username || username }}
                    </p>
                    <p *ngIf="user"><label>Type:</label> {{ user.type }}</p>
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
                box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
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

            [name='device-info'] {
                width: 16rem;
                pointer-events: none;
            }
        `,
    ],
})
export class ExploreDeviceInfoComponent implements OnInit {
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
    public readonly variance = this._details.variance.toFixed(2);
    /** Diameter of the radius circle */
    public readonly diameter = this._details.variance * 100;
    /** Background color for the dot */
    public readonly bg_color = this._details.bg_color || this.distance_color;

    public overlay_ref: OverlayRef = null;
    /** Time of the last update */
    public get last_seen() {
        return formatDistanceToNow(new Date(this._details.last_seen * 1000), {
            addSuffix: true,
        });
    }

    public y_pos: 'top' | 'bottom';

    public x_pos: 'end' | 'start';
    public get distance() {
        return Math.abs(
            differenceInMinutes(this._details.last_seen * 1000, new Date())
        );
    }

    public get distance_color() {
        return this.distance < 10
            ? '#43a047'
            : this.distance < 20
            ? '#ffb300'
            : '#e53935';
    }

    @HostListener('mouseenter') public onEnter = () => this.loadUser();
    @HostListener('mouseleave') public onLeave = () => this.close();
    @HostListener('click') public onClick = () => this.loadUser();
    @HostListener('touchend') public onTouch = () => this.loadUser();

    @ViewChild(CdkPortal) private _portal: CdkPortal;
    @ViewChild('dot') private _dot: ElementRef<HTMLDivElement>;

    constructor(
        @Inject(MAP_FEATURE_DATA) private _details: DeviceInfoData,
        private _element: ElementRef<HTMLElement>,
        private _overlay: Overlay
    ) {}

    public ngOnInit(tries: number = 0) {
        if (tries > 10) return;
        setTimeout(() => {
            const parent = this._element.nativeElement.parentElement
                ?.parentElement;
            if (!parent) return this.ngOnInit(++tries);
            const position = {
                y: parseInt(parent.style.top, 10) / 100,
                x: parseInt(parent.style.left, 10) / 100,
            };
            this.y_pos = position.y >= 0.5 ? 'bottom' : 'top';
            this.x_pos = position.x >= 0.5 ? 'end' : 'start';
        }, 200);
    }

    public async loadUser() {
        this.open();
        if (this.username) return;
        const mod = getModule(this._details.system, 'LocationServices');
        if (mod) {
            this.username = 'Loading...';
            const details = await mod
                .execute('check_ownership_of', [this.mac])
                .catch((_) => null);
            this.username =
                details && details.assigned_to ? details.assigned_to : '';
        }
    }

    public open() {
        if (this.overlay_ref) this.close();
        if (!this._portal) return;
        this.overlay_ref = this._overlay.create({
            positionStrategy: this._overlay
                .position()
                .flexibleConnectedTo(this._dot)
                .withPositions([
                    {
                        originX: this.x_pos === 'start' ? 'end' : 'start',
                        originY: this.y_pos === 'top' ? 'bottom' : 'top',
                        overlayX: this.x_pos || 'end',
                        overlayY: this.y_pos || 'bottom',
                    },
                ]),
        });
        this.overlay_ref.attach(this._portal);
    }

    public close() {
        if (this.overlay_ref) {
            this.overlay_ref.dispose();
            this.overlay_ref = null;
        }
    }
}
