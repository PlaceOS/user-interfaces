import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationLinkInternal, SettingsService } from '@placeos/common';

@Component({
    selector: '[app-dayview]',
    template: `
        <sidebar class="h-full"></sidebar>
        <main
            class="relative overflow-hidden flex flex-col flex-1 w-1/2 h-full bg-base-200"
        >
            <dayview-topbar></dayview-topbar>
            <dayview-timeline></dayview-timeline>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
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
