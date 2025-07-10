import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    Renderer2,
    inject,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { AsyncHandler } from '@placeos/common';
import {
    addMinutes,
    differenceInMinutes,
    endOfDay,
    fromUnixTime,
    getUnixTime,
    isSameDay,
    setHours,
    startOfDay,
} from 'date-fns';
import { queryUserFreeBusy } from 'libs/calendar/src/lib/calendar.fn';
import { DurationPipe } from 'libs/components/src/lib/duration.pipe';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    defaultIfEmpty,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { User } from '../user.class';
import {
    AvailabilityBlock,
    UserAvailabilityComponent,
} from './user-availability.component';

export interface FindAvailabilityData {
    host: User;
    users: User[];
    date: number;
    duration: number;
}

@Component({
    selector: 'find-availability-modal',
    template: `
        <div class="flex flex-col space-y-2 p-2">
            <header
                class="flex h-14 w-full items-center justify-between space-x-2 rounded border-none bg-base-200 p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'CALENDAR_EVENT.FIND_AVAILABILITY' | translate }}
                </h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="flex h-[calc(100vh-9rem)] flex-col overflow-hidden rounded border border-base-300 sm:h-[65vh]"
            >
                <div
                    class="flex w-full flex-col space-y-2 p-2 sm:flex-row sm:space-x-2 sm:space-y-0"
                >
                    <a-date-field
                        [(ngModel)]="date"
                        class="max-h-[3.25rem] flex-1"
                        (ngModelChange)="
                            on_change.next(on_change.getValue() + 1)
                        "
                    ></a-date-field>
                    <a-user-search-field
                        [(ngModel)]="user"
                        (ngModelChange)="addUser($event)"
                        class="max-h-[3.25rem] flex-1"
                    ></a-user-search-field>
                </div>
                <div
                    class="relative grid h-1/2 w-full max-w-[100vw] flex-1 divide-x divide-y divide-base-200 overflow-hidden border-t border-base-200 sm:max-w-[80vw]"
                >
                    <div
                        times
                        class="col-start-2 flex h-10 overflow-hidden border-l border-base-200"
                    >
                        @for (hr of hours; track hr; let hour = $index) {
                            <div
                                hour
                                class="relative h-10 min-w-[5rem] border-r border-base-200 p-2 text-sm"
                                [attr.disabled]="today && current_hour > hour"
                                [style.left]="-offset_x + 'px'"
                            >
                                <span>{{ hr | date: 'haa' }}</span>
                            </div>
                        }
                    </div>
                    <div users class="row-start-2 w-24 overflow-hidden">
                        <div
                            host
                            class="relative flex h-32 w-24 flex-col items-center justify-center border-b border-base-200 py-2"
                            [style.top]="-offset_y + 'px'"
                        >
                            <a-user-avatar
                                class="text-2xl"
                                [user]="host"
                            ></a-user-avatar>
                            <div
                                class="max-w-full overflow-hidden break-words px-2 text-center text-xs"
                            >
                                {{ host.name || host.email }}
                            </div>
                        </div>
                        @for (user of users | async; track user) {
                            <div
                                person
                                class="relative flex h-32 w-24 flex-col items-center justify-center border-b border-base-200 py-2"
                                [style.top]="-offset_y + 'px'"
                            >
                                <a-user-avatar
                                    class="text-2xl"
                                    [user]="user"
                                ></a-user-avatar>
                                <div
                                    class="max-w-full break-words px-2 text-center text-xs"
                                >
                                    {{ user.name || host.email }}
                                </div>
                                <button
                                    icon
                                    class="absolute -left-1 -top-1"
                                    (click)="removeUser(user)"
                                >
                                    <icon>close</icon>
                                </button>
                            </div>
                        }
                    </div>
                    <div blocks class="relative row-start-2 overflow-hidden">
                        <div
                            fixed
                            class="absolute inset-0 flex overflow-hidden"
                        >
                            @for (_ of hours; track _; let h = $index) {
                                <div
                                    divider
                                    class="relative h-full min-w-[5rem] border-l border-base-200"
                                    [style.left]="-(offset_x + 1) + 'px'"
                                    [attr.disabled]="today && current_hour > h"
                                ></div>
                            }
                            <div
                                selection
                                class="absolute inset-y-0 z-20 cursor-grab !border-x-2 !border-info active:cursor-grabbing"
                                [style.left]="
                                    'calc(' +
                                    selection_left +
                                    'rem - ' +
                                    offset_x +
                                    'px)'
                                "
                                [style.width]="selection_width + 'rem'"
                                (mousedown)="startMovePeriod($event)"
                                (touchstart)="startMovePeriod($event)"
                            >
                                <div
                                    class="absolute inset-0 bg-info opacity-30"
                                ></div>
                                <div
                                    handle
                                    class="absolute -left-px top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-info"
                                ></div>
                                <div
                                    handle
                                    class="absolute -right-px top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-info hover:h-4 hover:w-4 active:bg-secondary"
                                    (mousedown)="startMoveDuration($event)"
                                    (touchstart)="startMoveDuration($event)"
                                ></div>
                                <div
                                    class="absolute left-1/2 top-2 -translate-x-1/2 whitespace-nowrap rounded border border-base-200 bg-base-100 p-2 text-xs shadow"
                                >
                                    {{ duration | duration }}
                                </div>
                                @if (move_time) {
                                    <div
                                        class="absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap rounded border border-base-200 bg-base-100 p-2 text-xs shadow"
                                    >
                                        {{ date | date: 'shortTime' }}
                                    </div>
                                }
                            </div>
                        </div>
                        <div
                            scroll
                            #container
                            class="absolute inset-0 overflow-auto"
                            (scroll)="onScroll()"
                        >
                            <user-availability-list
                                class="pointer-events-none"
                                [user]="host"
                                [date]="date"
                                [availability]="
                                    (availability | async)
                                        ? (availability | async)[host.email]
                                        : []
                                "
                            ></user-availability-list>
                            @for (user of users | async; track user) {
                                <user-availability-list
                                    class="pointer-events-none"
                                    [user]="user"
                                    [date]="date"
                                    [availability]="
                                        (availability | async)
                                            ? (availability | async)[
                                                  user.email.toLowerCase()
                                              ]
                                            : []
                                    "
                                ></user-availability-list>
                            }
                        </div>
                    </div>
                </div>
            </main>
            <footer
                class="flex h-14 w-full items-center justify-between space-x-2 rounded border-none bg-base-200 p-2"
            >
                <button
                    btn
                    matRipple
                    [mat-dialog-close]="true"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="mr-1 underline">
                            {{ 'COMMON.BACK_TO_FORM' | translate }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `,
    styles: [
        `
            .grid {
                grid-template-columns: 6rem 1fr;
                grid-template-rows: 2.5rem minmax(0, 1fr);
            }
            [disabled='true'],
            [disabled='true'] [header] {
                background: var(--b3) !important;
                pointer-events: none;
            }
            [disabled='true'] > * {
                opacity: 0.3;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        TranslatePipe,
        UserAvailabilityComponent,
        UserAvatarComponent,
        UserSearchFieldComponent,
        DateFieldComponent,
        IconComponent,
        MatDialogModule,
        DurationPipe,
        FormsModule,
    ],
})
export class FindAvailabilityModalComponent
    extends AsyncHandler
    implements AfterViewInit
{
    private _data = inject<FindAvailabilityData>(MAT_DIALOG_DATA);
    private _renderer = inject(Renderer2);
    private _dialog_ref =
        inject<MatDialogRef<FindAvailabilityModalComponent>>(MatDialogRef);

    public readonly users = new BehaviorSubject([]);
    public search = '';
    public date = this._data.date || Date.now();
    public duration = this._data.duration || 60;
    public user?: User;
    public offset_y = 0;
    public offset_x = 0;

    public readonly host = this._data.host;
    public readonly hours = new Array(24)
        .fill(0)
        .map((_, idx) => setHours(startOfDay(Date.now()), idx).valueOf());
    public readonly on_change = new BehaviorSubject(0);

    public readonly availability = combineLatest([
        this.users,
        this.on_change,
    ]).pipe(
        debounceTime(300),
        switchMap(([users]) => {
            return queryUserFreeBusy({
                calendars: [
                    this.host.email,
                    ...users.map((_) => _.email.toLowerCase()),
                ].join(','),
                period_start: getUnixTime(startOfDay(this.date)),
                period_end: getUnixTime(endOfDay(this.date)),
            }).pipe(catchError(() => of([])));
        }),
        map((availability_list) => {
            const availability_map: Record<string, AvailabilityBlock[]> = {};
            for (const item of availability_list) {
                availability_map[item.id.toLowerCase()] = item.availability
                    .filter((_) => _.status === 'busy')
                    .map((block) => {
                        const date = fromUnixTime(block.starts_at);
                        const duration = differenceInMinutes(
                            fromUnixTime(block.ends_at),
                            fromUnixTime(block.starts_at),
                        );
                        return {
                            date,
                            duration,
                            start:
                                ((date.getHours() + date.getMinutes() / 60) /
                                    24) *
                                100,
                            size: (duration / 60 / 24) * 100,
                        };
                    });
            }
            return availability_map;
        }),
        defaultIfEmpty({}),
        shareReplay(1),
    );

    private readonly _container_el =
        viewChild.required<ElementRef<HTMLDivElement>>('container');

    public get today() {
        return isSameDay(this.date, Date.now());
    }

    public get current_hour() {
        return new Date().getHours();
    }

    public get selection_left() {
        const date = new Date(this.date);
        return (date.getHours() + date.getMinutes() / 60) * 5;
    }

    public get selection_width() {
        return (this.duration / 60) * 5;
    }

    constructor() {
        super();
        this.users.next([...this._data.users]);
    }

    public addUser(user: User) {
        this.users.next([
            ...this.users.getValue().filter((u) => u.email !== user.email),
            user,
        ]);
        this.user = null;
    }

    public removeUser(user: User) {
        this.users.next(
            this.users.getValue().filter((u) => u.email !== user.email),
        );
        this.user = null;
    }

    public closeAndUpdate() {
        this._dialog_ref.close(true);
    }

    public ngAfterViewInit() {
        const date = new Date(this.date);

        this.timeout(
            'init',
            () => {
                const el = this._container_el().nativeElement.querySelector(
                    `[hour="${date.getHours()}"]`,
                );
                if (el) {
                    const rect =
                        this._container_el().nativeElement.getBoundingClientRect();
                    const el_rect = el.getBoundingClientRect();
                    this._container_el().nativeElement.scrollTo(
                        el_rect.left - 128 - rect.left,
                        0,
                    );
                }
                this.onScroll();
            },
            300,
        );
    }

    public onScroll() {
        this.offset_x = this._container_el().nativeElement.scrollLeft;
        this.offset_y = this._container_el().nativeElement.scrollTop;
    }

    public move_time = false;
    private _start_time = 0;
    private _move_last = 0;
    private _move_size = 80 * 24;

    public startMovePeriod(event: MouseEvent | TouchEvent) {
        event.preventDefault();
        event.stopPropagation();
        this._move_last =
            event instanceof MouseEvent
                ? event.clientX
                : event.touches[0].clientX;
        this.move_time = true;
        this._start_time = this.date;
        event instanceof MouseEvent
            ? this.subscription(
                  'on_move',
                  this._renderer.listen('window', 'mousemove', (e) =>
                      this._onMovePeriod(e),
                  ),
              )
            : this.subscription(
                  'on_move',
                  this._renderer.listen('window', 'touchmove', (e) =>
                      this._onMovePeriod(e),
                  ),
              );
        event instanceof MouseEvent
            ? this.subscription(
                  'on_move_end',
                  this._renderer.listen('window', 'mouseup', () =>
                      this._onMoveEnd(),
                  ),
              )
            : this.subscription(
                  'on_move_end',
                  this._renderer.listen('window', 'touchend', () =>
                      this._onMoveEnd(),
                  ),
              );
    }

    public startMoveDuration(event: MouseEvent | TouchEvent) {
        event.preventDefault();
        event.stopPropagation();
        this._move_last =
            event instanceof MouseEvent
                ? event.clientX
                : event.touches[0].clientX;
        this._start_time = this.duration;
        event instanceof MouseEvent
            ? this.subscription(
                  'on_move',
                  this._renderer.listen('window', 'mousemove', (e) =>
                      this._onMoveDuration(e),
                  ),
              )
            : this.subscription(
                  'on_move',
                  this._renderer.listen('window', 'touchmove', (e) =>
                      this._onMoveDuration(e),
                  ),
              );
        event instanceof MouseEvent
            ? this.subscription(
                  'on_move_end',
                  this._renderer.listen('window', 'mouseup', () =>
                      this._onMoveEnd(),
                  ),
              )
            : this.subscription(
                  'on_move_end',
                  this._renderer.listen('window', 'touchend', () =>
                      this._onMoveEnd(),
                  ),
              );
    }

    private _onMovePeriod(event: MouseEvent | TouchEvent) {
        const change_px =
            this._move_last -
            (event instanceof MouseEvent
                ? event.clientX
                : event.touches[0].clientX);
        const dir = change_px > 0 ? -1 : 1;
        const change_min =
            dir *
            Math.floor(Math.abs((change_px / this._move_size) * 24 * 60) / 5) *
            5;
        if (change_min) {
            const old_date = this.date;
            this.date = addMinutes(this._start_time, change_min).valueOf();
            if (this.date < Date.now()) this.date = old_date;
        }
    }

    private _onMoveDuration(event: MouseEvent | TouchEvent) {
        const change_px =
            this._move_last -
            (event instanceof MouseEvent
                ? event.clientX
                : event.touches[0].clientX);
        const dir = change_px > 0 ? -1 : 1;
        const change_min =
            dir *
            Math.floor(Math.abs((change_px / this._move_size) * 24 * 60) / 5) *
            5;
        if (change_min) {
            this.duration = Math.max(30, this._start_time + change_min);
        }
    }

    private _onMoveEnd() {
        this.unsub('on_move');
        this.unsub('on_move_end');
        this._move_last = 0;
        this.move_time = false;
    }
}
