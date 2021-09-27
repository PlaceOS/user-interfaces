import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { startOfMinute } from 'date-fns';
import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'checkin-view',
    template: `
        <div class="bg-black relative text-white p-4 h-32">
            <div
                class="bg-cover bg-center absolute inset-0"
                [style.background-image]="'url(' + room_image + ')'"
            ></div>
            <div class="absolute inset-0 bg-black/60"></div>
            <div name class="absolute bottom-4 left-4 text-3xl font-medium z-10">
                {{
                    (system | async)?.display_name ||
                        (system | async)?.name ||
                        '&lt;Unknown Space&gt;'
                }}
            </div>
        </div>
        <h3 class="p-4 text-xl font-medium">Upcoming</h3>
        <div class="bg-white divide-y divide-gray-200">
            <div class="flex items-center p-2">
                <div class="w-2 h-full min-h-[3rem] rounded bg-success"></div>
                <div class="text-sm  flex-1 px-2">
                    <div class="font-medium uppercase">Now</div>
                    <div class=""></div>
                </div>
                <button mat-button class="w-24">Check-in</button>
            </div>
            <div class="flex items-center p-2">
                <div class="w-2 h-full min-h-[3rem] rounded bg-error"></div>
                <div class="text-sm flex-1 px-2">
                    <div class="font-medium uppercase">Next</div>
                    <div class=""></div>
                </div>
                <button mat-button class="w-24">Book</button>
            </div>
        </div>
        <h3 class="p-4 text-xl font-medium">Schedule</h3>
        <div class="bg-white overflow-auto">
            <checkin-timetable [events]="bookings | async"></checkin-timetable>
        </div>
        <h3 class="p-4 text-xl font-medium">Features</h3>
        <div class="bg-white overflow-auto flex-1 h-px divide-y divide-gray-200">
            <button matRipple class="flex items-center p-4 w-full">
                <div class="text-black/40 bg-black/20 rounded-full p-2 text-2xl">
                    <app-icon>lightbulb</app-icon>
                </div>
                <div class="flex-1 px-4 font-medium text-left">Lights & Blinds</div>
                <app-icon class="text-2xl opacity-40">chevron_right</app-icon>
            </button>
            <button matRipple class="flex items-center p-4 w-full">
                <div class="text-black/40 bg-black/20 rounded-full p-2 text-2xl">
                    <app-icon>add_to_queue</app-icon>
                </div>
                <div class="flex-1 px-4 font-medium text-left">TV</div>
                <app-icon class="text-2xl opacity-40">chevron_right</app-icon>
            </button>
            <button matRipple class="flex items-center p-4 w-full">
                <div class="text-black/40 bg-black/20 rounded-full p-2 text-2xl">
                    <app-icon>restaurant</app-icon>
                </div>
                <div class="flex-1 px-4 font-medium text-left">Catering</div>
                <app-icon class="text-2xl opacity-40">chevron_right</app-icon>
            </button>
            <button matRipple class="flex items-center p-4 w-full">
                <div class="text-black/40 bg-black/20 rounded-full p-2 text-2xl">
                    <app-icon>help</app-icon>
                </div>
                <div class="flex-1 px-4 font-medium text-left">Help</div>
                <app-icon class="text-2xl opacity-40">chevron_right</app-icon>
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                background-color: #f8f8fa;
                height: 100%;
                width: 100%;
                overflow: hidden;
            }
        `,
    ],
    providers: [PanelStateService],
})
export class CheckinViewComponent extends BaseClass {
    public readonly system = this._state.space;
    public readonly bookings = this._state.bookings;

    public get time() {
        return startOfMinute(Date.now());
    }

    public get room_image() {
        return this._state.setting('image');
    }

    constructor(
        private _state: PanelStateService,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public ngOnInit() {
        this._state.system = '';
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('system_id')) {
                    this._state.system = params.get('system_id');
                }
            })
        );
    }
}
