import {
    Component,
    ElementRef,
    Inject,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncHandler } from '@placeos/common';
import {
    addMinutes,
    differenceInMinutes,
    endOfDay,
    fromUnixTime,
    getUnixTime,
    isSameDay,
    startOfDay,
} from 'date-fns';
import { queryUserFreeBusy } from 'libs/calendar/src/lib/calendar.fn';
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
import { AvailabilityBlock } from './user-availability.component';

export interface FindAvailabilityData {
    host: User;
    users: User[];
    date: number;
    duration: number;
}

@Component({
    selector: 'find-availability-modal',
    template: `
        <header class="relative flex items-center justify-center p-4">
            <h2 class="text-center">Find Availability</h2>
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute top-1/2 left-1 -translate-y-1/2"
            >
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="flex flex-col h-[calc(100vh-7rem)] sm:h-[65vh] overflow-hidden"
        >
            <div
                class="w-full flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 p-2"
            >
                <a-date-field
                    [(ngModel)]="date"
                    class="max-h-[3.25rem] flex-1"
                    (ngModelChange)="on_change.next(on_change.getValue() + 1)"
                ></a-date-field>
                <a-user-search-field
                    [(ngModel)]="user"
                    (ngModelChange)="addUser($event)"
                    class="max-h-[3.25rem] flex-1"
                ></a-user-search-field>
            </div>
            <div
                class="grid flex-1 h-1/2 w-full border-t border-base-200 relative overflow-hidden divide-x divide-y divide-base-200 max-w-[100vw] sm:max-w-[80vw]"
            >
                <div
                    times
                    class="col-start-2 h-10 flex overflow-hidden border-l border-base-200"
                >
                    <div
                        hour
                        *ngFor="let _ of hours; let hour = index"
                        class="relative border-r border-base-200 h-10 min-w-[5rem] p-2"
                        [attr.disabled]="today && current_hour > hour"
                        [style.left]="-offset_x + 'px'"
                    >
                        {{ hour % 12 === 0 ? '12' : hour % 12
                        }}{{ hour >= 12 ? 'pm' : 'am' }}
                    </div>
                </div>
                <div users class="row-start-2 w-24 overflow-hidden">
                    <div
                        host
                        class="flex flex-col items-center justify-center h-32 w-24 relative border-b border-base-200 py-2"
                        [style.top]="-offset_y + 'px'"
                    >
                        <a-user-avatar
                            class="text-2xl"
                            [user]="host"
                        ></a-user-avatar>
                        <div
                            class="text-xs break-words overflow-hidden max-w-full px-2 text-center"
                        >
                            {{ host.name || host.email }}
                        </div>
                    </div>
                    <div
                        person
                        class="flex flex-col items-center justify-center h-32 w-24 relative border-b border-base-200 py-2"
                        [style.top]="-offset_y + 'px'"
                        *ngFor="let user of users | async"
                    >
                        <a-user-avatar
                            class="text-2xl"
                            [user]="user"
                        ></a-user-avatar>
                        <div
                            class="text-xs break-words max-w-full px-2 text-center"
                        >
                            {{ user.name || host.email }}
                        </div>
                        <button
                            icon
                            class="absolute -top-1 -left-1"
                            (click)="removeUser(user)"
                        >
                            <app-icon>close</app-icon>
                        </button>
                    </div>
                </div>
                <div blocks class="relative row-start-2 overflow-hidden">
                    <div fixed class="absolute inset-0 flex overflow-hidden">
                        <div
                            divider
                            class="relative h-full min-w-[5rem] border-l border-base-200"
                            [style.left]="-(offset_x + 1) + 'px'"
                            [attr.disabled]="today && current_hour > h"
                            *ngFor="let _ of hours; let h = index"
                        ></div>
                        <div
                            selection
                            class="absolute inset-y-0 !border-x-2 !border-info z-20 cursor-grab active:cursor-grabbing"
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
                                class="absolute top-1/2 -left-px -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-info"
                            ></div>
                            <div
                                handle
                                class="absolute top-1/2 -right-px translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-info hover:h-4 hover:w-4 active:bg-secondary"
                                (mousedown)="startMoveDuration($event)"
                                (touchstart)="startMoveDuration($event)"
                            ></div>
                            <div
                                class="bg-base-100 border border-base-200 p-2 absolute top-2 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded"
                            >
                                {{ duration | duration }}
                            </div>
                            <div
                                *ngIf="move_time"
                                class="bg-base-100 border border-base-200 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded"
                            >
                                {{ date | date: 'shortTime' }}
                            </div>
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
                        <user-availability-list
                            class="pointer-events-none"
                            *ngFor="let user of users | async"
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
                    </div>
                </div>
            </div>
        </main>
        <footer
            class="flex items-center justify-between p-2 border-t border-base-200 w-full"
        >
            <button
                btn
                matRipple
                [mat-dialog-close]="true"
                class="clear text-secondary"
            >
                <div class="flex items-center">
                    <app-icon class="text-xl">arrow_back</app-icon>
                    <div class="mr-1 underline">Back to form</div>
                </div>
            </button>
        </footer>
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
})
export class FindAvailabilityModalComponent extends AsyncHandler {
    public readonly users = new BehaviorSubject([]);
    public search = '';
    public date = this._data.date || Date.now();
    public duration = this._data.duration || 60;
    public user?: User;
    public offset_y = 0;
    public offset_x = 0;

    public readonly host = this._data.host;
    public readonly hours = new Array(24).fill(0);
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
                            fromUnixTime(block.starts_at)
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
        shareReplay(1)
    );

    @ViewChild('container', { static: true })
    private _container_el!: ElementRef<HTMLDivElement>;

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

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: FindAvailabilityData,
        private _renderer: Renderer2,
        private _dialog_ref: MatDialogRef<FindAvailabilityModalComponent>
    ) {
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
            this.users.getValue().filter((u) => u.email !== user.email)
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
                const el = this._container_el.nativeElement.querySelector(
                    `[hour="${date.getHours()}"]`
                );
                if (el) {
                    const rect =
                        this._container_el.nativeElement.getBoundingClientRect();
                    const el_rect = el.getBoundingClientRect();
                    this._container_el.nativeElement.scrollTo(
                        el_rect.left - 128 - rect.left,
                        0
                    );
                }
                this.onScroll();
            },
            300
        );
    }

    public onScroll() {
        this.offset_x = this._container_el.nativeElement.scrollLeft;
        this.offset_y = this._container_el.nativeElement.scrollTop;
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
                      this._onMovePeriod(e)
                  )
              )
            : this.subscription(
                  'on_move',
                  this._renderer.listen('window', 'touchmove', (e) =>
                      this._onMovePeriod(e)
                  )
              );
        event instanceof MouseEvent
            ? this.subscription(
                  'on_move_end',
                  this._renderer.listen('window', 'mouseup', () =>
                      this._onMoveEnd()
                  )
              )
            : this.subscription(
                  'on_move_end',
                  this._renderer.listen('window', 'touchend', () =>
                      this._onMoveEnd()
                  )
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
                      this._onMoveDuration(e)
                  )
              )
            : this.subscription(
                  'on_move',
                  this._renderer.listen('window', 'touchmove', (e) =>
                      this._onMoveDuration(e)
                  )
              );
        event instanceof MouseEvent
            ? this.subscription(
                  'on_move_end',
                  this._renderer.listen('window', 'mouseup', () =>
                      this._onMoveEnd()
                  )
              )
            : this.subscription(
                  'on_move_end',
                  this._renderer.listen('window', 'touchend', () =>
                      this._onMoveEnd()
                  )
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
