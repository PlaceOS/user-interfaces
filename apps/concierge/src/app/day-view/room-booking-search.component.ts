import {
    Component,
    ElementRef,
    EventEmitter,
    Output,
    ViewChild,
} from '@angular/core';
import { EventsStateService } from './events-state.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';

@Component({
    selector: 'room-booking-search',
    template: `
        <div class="relative">
            <button icon matRipple (click)="showSearch()">
                <app-icon>search</app-icon>
            </button>
            <input
                #input_el
                [class.opacity-0]="!show"
                [class.pointer-events-none]="!show"
                class="absolute top-1/2 -translate-y-1/2 w-[20rem] right-0 rounded-full pl-10 pr-4 py-3 border border-base-300 shadow bg-base-100"
                [ngModel]="search.getValue()"
                (ngModelChange)="search.next($event)"
                (blur)="hideSearch()"
                placeholder="Search day's events..."
            />
            <app-icon
                *ngIf="show"
                class="text-2xl absolute top-1/2 -translate-y-1/2 right-[17.5rem]"
            >
                search
            </app-icon>
            <div
                class="absolute top-full translate-y-2 w-[18rem] right-4 rounded border border-base-300 bg-base-100 max-h-[65vh] overflow-auto shadow"
                *ngIf="show"
            >
                <div class="sticky top-0 p-4 bg-base-100 rounded z-10">
                    <div class="opacity-60 text-xs">
                        {{ (filtered | async)?.length }} of
                        {{ (events | async)?.length }} Event(s)
                    </div>
                </div>
                <div
                    *ngIf="!(filtered | async).length"
                    class="opacity-30 p-4 flex items-center justify-center text-sm text-center"
                >
                    {{
                        (events | async).length
                            ? 'No matching events found.'
                            : 'No events for the currently selected date and zone'
                    }}
                </div>
                <div class="px-2 pb-2 -mt-2">
                    <button
                        matRipple
                        *ngFor="let event of filtered | async"
                        class="relative flex items-center p-2 hover:bg-base-200 rounded w-full text-left space-x-2 z-0"
                        (click)="selected.next(event)"
                    >
                        <div
                            class="h-10 w-1 rounded-full"
                            [style.background-color]="typeColor(event)"
                        ></div>
                        <div date class="leading-tight">
                            <div class="text-2xl mx-auto">
                                {{ event.date | date: 'dd' }}
                            </div>
                            <div
                                class="font-medium text-sm uppercase mx-auto -mt-1"
                            >
                                {{ event.date | date: 'MMM' }}
                            </div>
                        </div>
                        <div class="flex-1 w-1/2">
                            <div class="flex items-center space-x-2 w-full">
                                <div
                                    class="text-sm flex-1 truncate"
                                    [class.line-through]="
                                        event.state === 'done'
                                    "
                                >
                                    {{ event.title }}
                                </div>
                                <div class="opacity-60 text-xs">
                                    {{ event.date | date: time_format }}
                                    &ndash;
                                    {{ event.date_end | date: time_format }}
                                </div>
                            </div>
                            <div class="text-xs opacity-30 truncate">
                                {{ event.system?.display_name }}
                            </div>
                            <div class="text-xs opacity-30 truncate">
                                {{ (event.host | user)?.name || event.host }}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class RoomBookingSearchComponent extends AsyncHandler {
    @Output() public selected = new EventEmitter<CalendarEvent>();
    public show = false;
    public readonly search = new BehaviorSubject('');
    public readonly events = this._state.filtered;

    public readonly types: any[] = [
        { id: 'internal', name: 'Internal', color: '#D81B60' },
        { id: 'external', name: 'External', color: '#1E88E5' },
        { id: 'cancelled', name: 'Cancelled', color: '#eeeeee' },
    ];

    public readonly filtered = combineLatest([this.search, this.events]).pipe(
        map(([search, event_list]) => {
            search = search.toLowerCase();
            return event_list.filter((e) => {
                return (
                    !e.is_system_event &&
                    (e.title.toLowerCase().includes(search) ||
                        e.organiser?.name.toLowerCase().includes(search) ||
                        e.host.toLowerCase().includes(search) ||
                        e.system?.display_name.toLowerCase().includes(search) ||
                        e.system?.name.toLowerCase().includes(search) ||
                        e.resources[0]?.display_name
                            .toLowerCase()
                            ?.includes(search) ||
                        e.resources[0]?.name.toLowerCase()?.includes(search) ||
                        e.resources[0]?.email.toLowerCase()?.includes(search) ||
                        e.extension_data.host_entity
                            ?.toLowerCase()
                            ?.includes(search) ||
                        e.extension_data.visitor_entity
                            ?.toLowerCase()
                            ?.includes(search) ||
                        e.attendees.find(
                            (user) =>
                                user.name?.toLowerCase().includes(search) ||
                                user?.email?.toLowerCase().includes(search),
                        ))
                );
            });
        }),
    );

    @ViewChild('input_el', { static: true })
    private _input_element: ElementRef<HTMLInputElement>;

    public get time_format() {
        return this._settings.time_format;
    }

    public typeColor(event) {
        const type = this.types.find((_) => _.id === event.type);
        return type?.color || '#EEE';
    }

    constructor(
        private _state: EventsStateService,
        private _settings: SettingsService,
    ) {
        super();
    }

    public showSearch() {
        this.show = true;
        this._input_element.nativeElement.focus();
    }

    public hideSearch() {
        if (!this.show) return;
        this.timeout('hide', () => (this.show = false));
    }
}
