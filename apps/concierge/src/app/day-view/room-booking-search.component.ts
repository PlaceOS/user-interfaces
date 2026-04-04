import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    ElementRef,
    inject,
    OnInit,
    output,
    signal,
    viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
                [class.opacity-0]="!show()"
                [class.pointer-events-none]="!show()"
                class="border-base-300 bg-base-100 absolute top-1/2 right-0 w-[20rem] -translate-y-1/2 rounded-full border py-3 pr-4 pl-10 shadow-sm"
                [(ngModel)]="search"
                (blur)="hideSearch()"
                [placeholder]="'APP.CONCIERGE.ROOMS_SEARCH' | translate"
            />
            @if (show()) {
                <icon
                    class="absolute top-1/2 right-70 -translate-y-1/2 text-2xl"
                >
                    search
                </icon>
            }
            @if (show()) {
                <div
                    class="border-base-300 bg-base-100 absolute top-full right-4 max-h-[65vh] w-[18rem] translate-y-2 overflow-auto rounded-sm border shadow-sm"
                >
                    <div class="bg-base-100 sticky top-0 z-10 rounded-sm p-4">
                        <div class="text-xs opacity-60">
                            {{
                                'APP.CONCIERGE.ROOMS_SEARCH_COUNT'
                                    | translate
                                        : {
                                              count: filtered().length,
                                              total: events().length,
                                          }
                            }}
                        </div>
                    </div>
                    @if (!filtered().length) {
                        <div
                            class="flex items-center justify-center p-4 text-center text-sm opacity-30"
                        >
                            {{
                                (events().length
                                    ? 'APP.CONCIERGE.ROOMS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.ROOMS_EMPTY'
                                ) | translate
                            }}
                        </div>
                    }
                    <div class="-mt-2 px-2 pb-2">
                        @for (event of filtered(); track event) {
                            <button
                                matRipple
                                class="hover:bg-base-200 relative z-0 flex w-full items-center space-x-2 rounded-sm p-2 text-left"
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
                                            (event.host | user | async)?.name ||
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
    public readonly show = signal(false);
    public readonly search = signal('');
    public readonly events = toSignal(this._state.filtered, {
        initialValue: [],
    });

    public types: any[] = [
        { id: 'internal', name: 'Internal', color: '#D81B60' },
        { id: 'external', name: 'External', color: '#1E88E5' },
        { id: 'cancelled', name: 'Cancelled', color: '#eeeeee' },
    ];

    public readonly filtered = computed(() => {
        const search = this.search().toLowerCase();
        return this.events().filter((e) => {
            return (
                !e.is_system_event &&
                (e.title.toLowerCase().includes(search) ||
                    e.organiser?.name?.toLowerCase().includes(search) ||
                    e.host.toLowerCase().includes(search) ||
                    e.system?.display_name?.toLowerCase().includes(search) ||
                    e.system?.name?.toLowerCase().includes(search) ||
                    e.resources[0]?.display_name
                        ?.toLowerCase()
                        ?.includes(search) ||
                    e.resources[0]?.name?.toLowerCase()?.includes(search) ||
                    e.resources[0]?.email?.toLowerCase()?.includes(search))
            );
        });
    });

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
        this.show.set(true);
        this._input_element()?.nativeElement.focus();
    }

    public hideSearch() {
        if (!this.show()) return;
        this.timeout('hide', () => this.show.set(false));
    }
}
