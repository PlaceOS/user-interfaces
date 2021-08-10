import { Component } from '@angular/core';

import { Identity } from '@placeos/common';

@Component({
    selector: 'a-footer-legend',
    template: `
        <div class="relative bg-white shadow w-full">
            <div
                class="absolute top-0 left-1/2 transform -translate-y-full -translate-x-1/2 px-2 pt-2 overflow-hidden"
            >
                <button
                    matRipple
                    class="flex items-center justify-center bg-white shadow rounded-t w-32 h-8 border-none text-black"
                    (click)="show = !show"
                >
                    <app-icon>keyboard_arrow_up</app-icon>
                </button>
            </div>
            <div class="flex items-center px-2 py-1 text-xl">
                <div class="flex-1">Keys</div>
            </div>
            <div
                class="flex items-center justify-center p-2 border border-gray-100 space-x-2"
            >
                <div
                    class="colour px-4 py-2 rounded shadow flex-1 text-center"
                    *ngFor="let item of colours"
                    [class.dark]="item.dark"
                    [style.background-color]="item.colour"
                >
                    {{ item.name }}
                </div>
            </div>
            <div
                icon-legend
                class="flex justify-center flex-wrap h-0 w-full border border-gray-100 overflow-auto max-h-[25vh]"
                [class.show]="show"
            >
                <div
                    class="flex flex-col items-center justify-center h-[12.4vw] w-[12.4vw] text-[2vw] border border-gray-100 flex-grow"
                    *ngFor="let item of icon_list"
                >
                    <app-icon class="text-[3em]" [icon]="item.icon"></app-icon>
                    <div class="text-[0.625em] font-normal">
                        {{ item.name }}
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                z-index: 10;
                font-size: 1.25em;
            }

            .colour.dark {
                color: #fff;
            }

            [icon-legend] {
                transition: height 200ms;
            }

            [icon-legend].show {
                height: 37.5vw !important;
            }
        `,
    ],
})
export class FooterLegendComponent {
    /** Whether icon legend should be shown */
    public show: boolean;
    /** List of colour legend items */
    public readonly colours: readonly Identity[] = [
        { id: 'in-use', name: 'In Use', colour: '#C52A1A', dark: true },
        { id: 'available', name: 'Available', colour: '#22992E', dark: true },
        {
            id: 'not-bookable',
            name: 'Not Bookable',
            colour: '#7D7D7D',
            dark: true,
        },
        { id: 'collab', name: 'Collaborative', colour: '#FED769' },
        { id: 'focus', name: 'Focus', colour: '#F5A478' },
    ];
    /** List of icon legend items */
    public readonly icon_list: readonly Identity[] = [
        {
            id: '',
            name: 'Lifts Up/Down',
            icon: { type: 'img', src: 'assets/img/lift.svg' },
        },
        {
            id: '',
            name: 'Fire Extinguisher',
            icon: { type: 'img', src: 'assets/img/fireExt.svg' },
        },
        {
            id: '',
            name: 'First Aid & AED',
            icon: { type: 'img', src: 'assets/img/aid.svg' },
        },
        {
            id: '',
            name: 'Cafe/Service',
            icon: { type: 'img', src: 'assets/img/Cafe.svg' },
        },
        {
            id: '',
            name: 'Mail/Noticeboard',
            icon: { type: 'img', src: 'assets/img/mail.svg' },
        },
        {
            id: '',
            name: 'Restrooms M/F',
            icon: { type: 'img', src: 'assets/img/Restrooms.svg' },
        },
        {
            id: '',
            name: 'Map Kiosk',
            icon: { type: 'img', src: 'assets/img/kiosk.svg' },
        },
        {
            id: '',
            name: 'Screen',
            icon: { type: 'img', src: 'assets/img/Screen.svg' },
        },
        {
            id: '',
            name: 'Projector',
            icon: { type: 'img', src: 'assets/img/Projector.svg' },
        },
        {
            id: '',
            name: 'Showers',
            icon: { type: 'img', src: 'assets/img/shower.svg' },
        },
        {
            id: '',
            name: 'Chairs',
            icon: { type: 'img', src: 'assets/img/chair.svg' },
        },
        {
            id: '',
            name: 'Chairs',
            icon: { type: 'img', src: 'assets/img/chair2.svg' },
        },
        {
            id: '',
            name: 'Chairs/Couch',
            icon: { type: 'img', src: 'assets/img/couch.svg' },
        },
        {
            id: '',
            name: 'Chairs/Couch',
            icon: { type: 'img', src: 'assets/img/couch2.svg' },
        },
        {
            id: '',
            name: 'Tables',
            icon: { type: 'img', src: 'assets/img/Table1.svg' },
        },
        {
            id: '',
            name: 'Tables',
            icon: { type: 'img', src: 'assets/img/Table2.svg' },
        },
        {
            id: '',
            name: 'Tables',
            icon: { type: 'img', src: 'assets/img/Table3.svg' },
        },
        {
            id: '',
            name: 'Tables',
            icon: { type: 'img', src: 'assets/img/Table4.svg' },
        },
        {
            id: '',
            name: 'Tables',
            icon: { type: 'img', src: 'assets/img/Table5.svg' },
        },
        {
            id: '',
            name: 'Tables',
            icon: { type: 'img', src: 'assets/img/Table6.svg' },
        },
        {
            id: '',
            name: 'Tables',
            icon: { type: 'img', src: 'assets/img/Table7.svg' },
        },
        {
            id: '',
            name: 'Funzone Games',
            icon: { type: 'img', src: 'assets/img/Tennis.svg' },
        },
        {
            id: '',
            name: 'Concierge Pods',
            icon: { type: 'img', src: 'assets/img/Pod.svg' },
        },
        {
            id: '',
            name: 'Phone Booths',
            icon: { type: 'img', src: 'assets/img/booth.svg' },
        },
    ];
}
