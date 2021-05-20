import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'app-schedule',
    template: `
        <topbar></topbar>
        <div class="flex-1 flex sm:flex-row flex-col-reverse h-1/2">
            <nav-menu class="relative z-10"></nav-menu>
            <main
                class="relative z-0 flex flex-col flex-1 h-1/2 sm:h-auto overflow-hidden"
            >
                <router-outlet></router-outlet>
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
