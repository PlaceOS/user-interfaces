import { Component } from '@angular/core';
import { CalendarEvent } from '@placeos/events';
import { isSameDay } from 'date-fns';
import { map } from 'rxjs/operators';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'app-schedule',
    template: `
        <topbar></topbar>
        <div class="flex flex-col sm:flex-row flex-1 h-1/2 bg-[#E5E5E5] relative">
            <schedule-sidebar class="hidden sm:block"></schedule-sidebar>
            <div class="w-full bg-white border-b border-gray-300 sm:hidden">
                <schedule-mobile-calendar
                    [ngModel]="date | async"
                    (ngModelChange)="setDate($event)"
                ></schedule-mobile-calendar>
            </div>
            <div class="flex-1 h-full p-4 overflow-auto space-y-2">
                <schedule-filters></schedule-filters>
                <h3 class="font-medium my-2">
                    {{ date | async | date: 'EEE dd LLL yyyy' }}
                    <span *ngIf="is_today | async">(Today)</span>
                </h3>
                <ng-container
                    *ngIf="(bookings | async)?.length; else empty_state"
                >
                    <ng-container *ngFor="let item of (loading | async) ? [] : bookings | async">
                        <event-card
                            *ngIf="isEvent(item); else booking_card"
                            [event]="item"
                        ></event-card>
                        <ng-template #booking_card>
                            <booking-card [booking]="item"></booking-card>
                        </ng-template>
                    </ng-container>
                </ng-container>
            </div>
            <mat-progress-bar
                *ngIf="loading | async"
                class="absolute inset-x-0 bottom-0"
                mode="indeterminate"
            ></mat-progress-bar>
        </div>
        <footer-menu></footer-menu>
        <ng-template #empty_state>
            <div
                class="w-full p-8 flex flex-col items-center justify-center space-y-4"
            >
                <img src="assets/img/no-events.svg" class="mr-4" />
                <p class="opacity-30">
                    No events and bookings for
                    {{ date | async | date: 'EEEE, dd LLL yyyy' }}
                </p>
            </div>
        </ng-template>
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
export class ScheduleComponent {
    public readonly bookings = this._state.filtered_bookings;
    public readonly date = this._state.date;
    public readonly loading = this._state.loading;
    public readonly is_today = this.date.pipe(
        map((_) => isSameDay(_, Date.now()))
    );
    public readonly setDate = (d) => this._state.setDate(d);

    public isEvent(item: any) {
        return item instanceof CalendarEvent;
    }

    constructor(private _state: ScheduleStateService) {}
}
