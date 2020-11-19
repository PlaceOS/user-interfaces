import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { MAP_FEATURE_DATA } from '@user-interfaces/components';
import { formatDistanceToNow } from 'date-fns';

export interface DeviceInfoData {
    mac: string;
    variance: number;
    last_seen: number;
    system: string;
    manufacturer?: string;
    os?: string;
    ssid?: string;
}

@Component({
    selector: 'explore-device-info',
    template: `
        <div
            name="radius"
            (mouseenter)="loadUser()"
            class="radius absolute center bg-blue-600 bg-opacity-25 border-4 border-dashed border-blue-600 rounded-full"
            [style]="'height: ' + diameter + '%; width: ' + diameter + '%;'"
        ></div>
        <div
            name="dot"
            class="h-2 w-2 absolute center rounded-full pointer-events-auto"
            [style.background-color]="bg_color"
        ></div>
        <div
            name="device-info"
            [class]="
                'absolute rounded bg-white p-4 top-0 left-0 shadow pointer-events-none ' +
                x_pos +
                ' ' +
                y_pos
            "
        >
            <div class="arrow"></div>
            <div class="details">
                <p><label>MAC:</label> {{ mac }}</p>
                <p><label>Variance:</label> {{ variance }}</p>
                <p><label>Last Seen:</label> {{ last_seen }}</p>
                <p *ngIf="manufacturer"><label>Manufacturer:</label> {{ manufacturer }}</p>
                <p *ngIf="os"><label>OS:</label> {{ os }}</p>
                <p *ngIf="ssid"><label>SSID:</label> {{ ssid }}</p>
                <p *ngIf="username"><label>Username:</label> {{ username }}</p>
            </div>
        </div>
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

            :host:hover > [name='device-info'],
            :host:hover > [name='radius'] {
                opacity: 1;
            }

            [name='radius'] {
                opacity: 0;
                transition: opacity 200ms;
                pointer-events: none;
            }

            [name='device-info'] {
                opacity: 0;
                transition: opacity 200ms;
                width: 16rem;
                z-index: 999;
                pointer-events: none;
            }
        `,
    ],
})
export class ExploreDeviceInfoComponent implements OnInit {
    /** Name of the user associated with the mac address */
    public username = '';
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
    public readonly bg_color = this.ssid === 'Blue' ? '#1976d2' : this.ssid === 'Green' ? '#689f38' : '#616161'
    /** Time of the last update */
    public get last_seen() {
        return formatDistanceToNow(new Date(this._details.last_seen * 1000), {
            addSuffix: true,
        });
    }

    public y_pos: 'top' | 'bottom';

    public x_pos: 'left' | 'right';

    @HostListener('mouseenter') public onEnter = () => this.loadUser();
    @HostListener('click') public onClick = () => this.loadUser();
    @HostListener('touchend') public onTouch = () => this.loadUser();

    constructor(
        @Inject(MAP_FEATURE_DATA) private _details: DeviceInfoData,
        private _element: ElementRef<HTMLElement>
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
            this.x_pos = position.x >= 0.5 ? 'right' : 'left';
        }, 200);
    }

    public async loadUser() {
        console.log('Loading user...', this.username);
        if (this.username) return;
        const mod = getModule(this._details.system, 'LocationServices');
        if (mod) {
            this.username = 'Loading...'
            const details = await mod.execute('check_ownership_of', [this.mac]).catch(_ => null);
            console.log('Details:', details);
            this.username = details && details.assigned_to ? details.assigned_to : '';
        }
    }

}
