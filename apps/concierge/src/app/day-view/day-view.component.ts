import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationLinkInternal, SettingsService } from '@placeos/common';

@Component({
    selector: '[app-dayview]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="relative flex flex-col flex-1 w-1/2 h-full">
                <room-bookings></room-bookings>
                <!-- <dayview-topbar></dayview-topbar>
                <dayview-timeline></dayview-timeline> -->
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: #fff;
            }
        `,
    ],
})
export class DayViewComponent implements OnInit {
    public get links(): ApplicationLinkInternal[] {
        return this._settings.get('app.general.menu') || [];
    }

    constructor(private _settings: SettingsService, private _router: Router) {}

    public ngOnInit() {
        if (!this.links.find((_) => _.route.includes('day-view'))) {
            this._router.navigate([`/${this.links[0].route}`]);
        }
    }
}
