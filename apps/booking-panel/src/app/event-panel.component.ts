import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import {
    addHours,
    endOfHour,
    getUnixTime,
    startOfHour,
    startOfMinute,
} from 'date-fns';
import { first, map } from 'rxjs/operators';
import { PanelStateService } from './panel-state.service';

@Component({
    selector: 'event-panel',
    template: `
        <div class="absolute inset-0 flex flex-col items-center bg-white">
            <header class="w-full flex justify-between items-center p-8">
                <h1 class="text-3xl font-medium">{{ space_name | async }}</h1>
                <div class="portrait:hidden flex space-x-4 items-center">
                    <p class="text-2xl">
                        {{ time | date: 'shortTime' }}
                    </p>
                    <img [src]="logo?.src" class="h-10" />
                </div>
            </header>
            <main
                class="w-full flex-1 h-1/2 overflow-hidden p-8 flex portrait:flex-col justify-between space-x-8 portrait:space-y-4 portrait:space-x-0"
                [style.background-color]="background_color | safe"
                [style.color]="text_color | safe"
            >
                <img
                    *ngIf="background_image"
                    class="absolute min-w-full min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    [src]="background_image | safe: 'resource'"
                />
                <div class="overflow-hidden">
                    <ng-container *ngIf="current; else current_empty_state">
                        <h2 class="text-2xl font-medium">
                            {{ current?.title }}
                        </h2>
                        <p class="text-2xl mb-4 lowercase">
                            ending @
                            {{ current?.event_end * 1000 | date: 'h:mma' }}
                        </p>
                        <p class="text-base line-clamp-6 portrait:line-clamp-8">
                            {{ current?.body }}
                        </p>
                    </ng-container>
                    <ng-template #current_empty_state>
                        <p class="opacity-60 text-2xl font-medium">
                            No event currently in progress
                        </p>
                    </ng-template>
                </div>
                <div class="min-w-[40%]">
                    <h2 class="text-2xl font-medium uppercase">Next</h2>
                    <hr class="mb-8" />
                    <ng-container *ngIf="next; else next_empty_state">
                        <h2 class="text-2xl font-medium">{{ next?.title }}</h2>
                        <p class="text-2xl lowercase">
                            starting @
                            {{ next?.event_start * 1000 | date: 'h:mma' }}
                        </p>
                    </ng-container>
                    <ng-template #next_empty_state>
                        <p class="opacity-60 text-2xl font-medium">
                            No upcoming events
                        </p>
                    </ng-template>
                </div>
            </main>
            <footer
                class="w-full landscape:hidden bg-white px-8 py-3 flex justify-between items-center"
            >
                <img [src]="logo?.src" class="h-10" />
                <p class="text-2xl">
                    {{ time | date: 'shortTime' }}
                </p>
            </footer>
            <div hidden bindings>
                <i
                    binding
                    [sys]="system_id"
                    mod="Bookings"
                    bind="current"
                    (modelChange)="current = asCalendarEvent($event)"
                ></i>
                <i
                    binding
                    [sys]="system_id"
                    mod="Bookings"
                    bind="next"
                    (modelChange)="next = asCalendarEvent($event)"
                ></i>
            </div>
        </div>
    `,
    styles: [``],
})
export class EventPanelComponent extends AsyncHandler {
    public system_id = '';
    public room_name: string | null = '';
    public current: CalendarEvent | null = null;
    public next: CalendarEvent | null = null;
    public readonly space_name = this._state.space.pipe(
        map((_) => _?.display_name || _?.name || '')
    );

    public get time() {
        return startOfMinute(Date.now());
    }

    public get text_color() {
        return this._settings.get('app.text_color') || '#FFFFFF';
    }

    public get background_color() {
        return this._settings.get('app.background_color') || '#483285';
    }

    public get background_image() {
        return this._settings.get('app.background_image');
    }

    public get logo() {
        return (
            this._settings.get('app.logo_light') ||
            this._settings.get('app.logo')
        );
    }

    constructor(
        private _settings: SettingsService,
        private _route: ActivatedRoute,
        private _state: PanelStateService,
        private _org: OrganisationService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                this.system_id = params.get('system_id') || '';
                this._state.system = this.system_id;
            })
        );
        this.timeout(
            'size',
            () =>
                this._settings.overrideCssVariable('font-size', '4vmin', true),
            1000
        );
    }

    public asCalendarEvent(data: any) {
        return data ? new CalendarEvent(data) : null;
    }
}
