import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    inject,
    OnInit,
    output,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    AsyncHandler,
    CalendarEvent,
    i18n,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { UserPipe } from '@placeos/users';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventsStateService } from './events-state.service';

@Component({
    selector: 'room-booking-search',
    template: `
        <div class="relative">
            <button icon matRipple (click)="showSearch()">
                <icon>search</icon>
            </button>
            <input
                #input_el
                [class.opacity-0]="!show"
                [class.pointer-events-none]="!show"
                class="absolute right-0 top-1/2 w-[20rem] -translate-y-1/2 rounded-full border border-base-300 bg-base-100 py-3 pl-10 pr-4 shadow"
                [ngModel]="search.getValue()"
                (ngModelChange)="search.next($event)"
                (blur)="hideSearch()"
                [placeholder]="'APP.CONCIERGE.ROOMS_SEARCH' | translate"
            />
            @if (show) {
                <icon
                    class="absolute right-[17.5rem] top-1/2 -translate-y-1/2 text-2xl"
                >
                    search
                </icon>
            }
            @if (show) {
                <div
                    class="absolute right-4 top-full max-h-[65vh] w-[18rem] translate-y-2 overflow-auto rounded border border-base-300 bg-base-100 shadow"
                >
                    <div class="sticky top-0 z-10 rounded bg-base-100 p-4">
                        <div class="text-xs opacity-60">
                            {{
                                'APP.CONCIERGE.ROOMS_SEARCH_COUNT'
                                    | translate
                                        : {
                                              count: (filtered | async)?.length,
                                              total: (events | async)?.length,
                                          }
                            }}
                        </div>
                    </div>
                    @if (!(filtered | async).length) {
                        <div
                            class="flex items-center justify-center p-4 text-center text-sm opacity-30"
                        >
                            {{
                                ((events | async).length
                                    ? 'APP.CONCIERGE.ROOMS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.ROOMS_EMPTY'
                                ) | translate
                            }}
                        </div>
                    }
                    <div class="-mt-2 px-2 pb-2">
                        @for (event of filtered | async; track event) {
                            <button
                                matRipple
                                class="relative z-0 flex w-full items-center space-x-2 rounded p-2 text-left hover:bg-base-200"
                                (click)="selected.emit(event)"
                            >
                                <div
                                    class="h-10 w-1 rounded-full"
                                    [style.background-color]="typeColor(event)"
                                ></div>
                                <div date class="leading-tight">
                                    <div class="mx-auto text-2xl">
                                        {{ event.date | date: 'dd' }}
                                    </div>
                                    <div
                                        class="mx-auto -mt-1 text-sm font-medium uppercase"
                                    >
                                        {{ event.date | date: 'MMM' }}
                                    </div>
                                </div>
                                <div class="w-1/2 flex-1">
                                    <div
                                        class="flex w-full items-center space-x-2"
                                    >
                                        <div
                                            class="flex-1 truncate text-sm"
                                            [class.line-through]="
                                                event.state === 'done'
                                            "
                                        >
                                            {{ event.title }}
                                        </div>
                                        <div class="text-xs opacity-60">
                                            {{ event.date | date: time_format }}
                                            &ndash;
                                            {{
                                                event.date_end
                                                    | date: time_format
                                            }}
                                        </div>
                                    </div>
                                    <div class="truncate text-xs opacity-30">
                                        {{ event.system?.display_name }}
                                    </div>
                                    <div class="truncate text-xs opacity-30">
                                        {{
                                            (event.host | user)?.name ||
                                                event.host
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                    </div>
                </div>
            }
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        UserPipe,
        MatRippleModule,
        FormsModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class RoomBookingSearchComponent extends AsyncHandler implements OnInit {
    private _state = inject(EventsStateService);
    private _settings = inject(SettingsService);

    public readonly selected = output<CalendarEvent>();
    public show = false;
    public readonly search = new BehaviorSubject('');
    public readonly events = this._state.filtered;

    public types: any[] = [
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
                        e.resources[0]?.email.toLowerCase()?.includes(search))
                );
            });
        }),
    );

    private readonly _input_element =
        viewChild<ElementRef<HTMLInputElement>>('input_el');

    public get time_format() {
        return this._settings.time_format;
    }

    public typeColor(event) {
        const type = this.types.find((_) => _.id === event.type);
        return type?.color || '#EEE';
    }

    public ngOnInit() {
        this.types = [
            {
                id: 'internal',
                name: i18n('COMMON.TYPE_INTERNAL'),
                color: '#D81B60',
            },
            {
                id: 'external',
                name: i18n('COMMON.TYPE_EXTERNAL'),
                color: '#1E88E5',
            },
            {
                id: 'cancelled',
                name: i18n('COMMON.TYPE_CANCELLED'),
                color: '#eeeeee',
            },
        ];
    }

    public showSearch() {
        this.show = true;
        this._input_element().nativeElement.focus();
    }

    public hideSearch() {
        if (!this.show) return;
        this.timeout('hide', () => (this.show = false));
    }
}
