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
import { BehaviorSubject, of } from 'rxjs';
import {
    catchError,
    debounceTime,
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
            class="flex flex-col h-[calc(100vh-7rem)] sm:h-[65vh]"
            (window:resize)="updateWidth()"
        >
            <div
                class="w-full flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 p-2"
            >
                <a-date-field
                    [(ngModel)]="date"
                    class="max-h-[3.25rem] flex-1"
                ></a-date-field>
                <a-user-search-field
                    [(ngModel)]="user"
                    (ngModelChange)="addUser($event)"
                    class="max-h-[3.25rem] flex-1"
                ></a-user-search-field>
            </div>
            <div
                #container
                class="flex flex-1 h-1/2 w-full border-t border-gray-300 dark:border-neutral-500 relative overflow-auto divide-x divide-gray-300 dark:divide-neutral-500 max-w-[100vw] sm:max-w-[80vw]"
                (scroll)="updateScroll()"
            >
                <div
                    users
                    class="sticky left-0 min-h-full bg-white dark:bg-neutral-700 border-r border-gray-300 dark:border-neutral-500 z-30"
                >
                    <div
                        header
                        class="h-10 w-[6rem] border-b border-gray-300 dark:border-neutral-500"
                    ></div>
                    <div
                        host
                        class="flex flex-col items-center justify-center h-32 w-[6rem] relative border-b border-gray-300 dark:border-neutral-500 py-2"
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
                        <user-availability-list
                            class="absolute top-0 -bottom-px left-full pointer-events-none"
                            [user]="host"
                            [date]="date"
                            [offset]="offset"
                            [width]="width"
                        ></user-availability-list>
                    </div>
                    <div
                        person
                        class="flex flex-col items-center justify-center h-32 w-[6rem] relative border-b border-gray-300 dark:border-neutral-500 py-2"
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
                        <user-availability-list
                            class="absolute top-0 -bottom-px left-full pointer-events-none"
                            [user]="user"
                            [availability]="(availability | async)[user.email]"
                            [date]="date"
                            [offset]="offset"
                            [width]="width"
                        ></user-availability-list>
                    </div>
                </div>
                <div
                    [attr.hour]="i"
                    class="min-w-[5rem] bg-gray-50 dark:bg-neutral-600 min-h-full pointer-events-none"
                    [attr.disabled]="today && i < current_hour"
                    *ngFor="let h of hours; let i = index"
                >
                    <div
                        header
                        class="h-10 border-b border-gray-300 dark:border-neutral-500 p-2"
                    >
                        {{ i % 12 ? i % 12 : '12' }}{{ i >= 12 ? 'pm' : 'am' }}
                    </div>
                </div>
                <div
                    selection
                    class="absolute top-10 bottom-0 !border-x-2 !border-blue-500 bg-blue-500/30 z-20 cursor-grab active:cursor-grabbing"
                    [style.left]="selection_left + 'rem'"
                    [style.width]="selection_width + 'rem'"
                    (mousedown)="startMovePeriod($event)"
                    (touchstart)="startMovePeriod($event)"
                >
                    <div
                        handle
                        class="absolute top-1/2 -left-px -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-blue-500"
                    ></div>
                    <div
                        handle
                        class="absolute top-1/2 -right-px translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-blue-500 hover:h-4 hover:w-4 active:bg-primary"
                        (mousedown)="startMoveDuration($event)"
                        (touchstart)="startMoveDuration($event)"
                    ></div>
                    <div
                        class="bg-white dark:bg-neutral-600 border border-gray-300 dark:border-neutral-500 p-2 absolute top-2 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded"
                    >
                        {{ duration | duration }}
                    </div>
                    <div
                        *ngIf="move_time"
                        class="bg-white dark:bg-neutral-600 border border-gray-300 dark:border-neutral-500 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded"
                    >
                        {{ date | date: 'shortTime' }}
                    </div>
                </div>
            </div>
        </main>
        <footer
            class="flex items-center justify-between p-2 border-t border-gray-200 dark:border-neutral-500 w-full"
        >
            <button
                matRipple
                [mat-dialog-close]="true"
                class="clear text-primary"
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
            [disabled='true'] {
                background: rgba(0, 0, 0, 0.05) !important;
                pointer-events: none;
            }
            [disabled='true'] > * {
                color: rgba(0, 0, 0, 0.3);
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
    public offset = 0;
    public width = 0;

    public readonly host = this._data.host;
    public readonly hours = new Array(24).fill(0);

    public readonly availability = this.users.pipe(
        debounceTime(300),
        switchMap((users) => {
            return queryUserFreeBusy({
                calendars: users.map((_) => _.email).join(','),
                period_start: getUnixTime(startOfDay(this.date)),
                period_end: getUnixTime(endOfDay(this.date)),
            }).pipe(catchError(() => of([])));
        }),
        map((availability_list) => {
            const availability_map: Record<string, AvailabilityBlock[]> = {};
            for (const item of availability_list) {
                availability_map[item.id] = item.availability
                    .filter((_) => _.status === 'busy')
                    .map((block) => {
                        const date = fromUnixTime(block.starts_at);
                        const duration = differenceInMinutes(
                            fromUnixTime(block.starts_at),
                            fromUnixTime(block.ends_at)
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
        return (date.getHours() + date.getMinutes() / 60) * 5 + 6;
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
                this.updateWidth();
                this.updateScroll();
            },
            300
        );
    }

    public updateWidth() {
        const container_size =
            this._container_el.nativeElement.getBoundingClientRect().width;
        const user_list_size = this._container_el.nativeElement
            .querySelector('[users]')
            .getBoundingClientRect().width;
        this.width = Math.floor(container_size - user_list_size);
        this._move_size =
            this._container_el.nativeElement
                .querySelector('[hour]')
                .getBoundingClientRect().width * 24;
    }

    public updateScroll() {
        this.offset = this._container_el.nativeElement.scrollLeft;
    }

    public move_time = false;
    private _start_time = 0;
    private _move_last = 0;
    private _move_size = 0;

    public startMovePeriod(event: MouseEvent | TouchEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.updateWidth();
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
        this.updateWidth();
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
