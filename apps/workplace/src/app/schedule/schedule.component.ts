import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'app-schedule',
    template: `
        <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
        <router-outlet></router-outlet>
        <a-footer-menu class="w-full"></a-footer-menu>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class ScheduleComponent extends BaseClass {
    /** Name of the page to render */
    public page: string;
    /** Whether to show menu */
    public show_menu = false;

    constructor(
        private _route: ActivatedRoute,
        private _state: ScheduleStateService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('email')) {
                    this._state.setOptions({ calendar: params.get('email') });
                }
            })
        );
    }
}
