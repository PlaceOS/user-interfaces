import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { ScheduleDayViewComponent } from './schedule-day-view.component';
import { ScheduleFiltersComponent } from './schedule-filters.component';
import { ScheduleListViewComponent } from './schedule-list-view.component';
import { ScheduleSidebarComponent } from './schedule-sidebar.component';
import {
    ScheduleOptions,
    ScheduleStateService,
} from './schedule-state.service';
import { ScheduleTopbarComponent } from './schedule-topbar.component';
import { ScheduleWeekViewComponent } from './schedule-week-view.component';

@Component({
    selector: 'app-schedule',
    template: `
        @if (!hide_nav) {
            <topbar />
        }
        <schedule-topbar
            [(view)]="view"
            [date]="date | async"
            (dateChange)="setDate($event)"
        />
        <div
            class="relative flex h-1/2 flex-1 flex-col bg-base-200 sm:flex-row"
        >
            <schedule-sidebar
                class="relative z-50 hidden bg-base-100 sm:block"
                [bookings]="b_list | async"
            ></schedule-sidebar>
            <div class="flex h-full flex-1 flex-col overflow-auto">
                <schedule-filters
                    class="sticky top-0 z-20"
                    [bookings]="b_list | async"
                ></schedule-filters>
                @if (view() === 'day') {
                    <schedule-day-view
                        [date]="date | async"
                        [bookings]="bookings | async"
                        [loading]="loading | async"
                        class="relative z-10"
                    />
                } @else if (view() === 'week') {
                    <schedule-week-view
                        class="h-1/2 flex-1"
                        [date]="date | async"
                        [bookings]="bookings | async"
                        [loading]="loading | async"
                    />
                } @else {
                    <div class="p-4">
                        <schedule-list-view
                            [date]="date | async"
                            [bookings]="bookings | async"
                            [loading]="loading | async"
                            class="space-y-3"
                        />
                    </div>
                }
            </div>
            @if (loading | async) {
                <mat-progress-bar
                    class="absolute inset-x-0 bottom-0"
                    mode="indeterminate"
                ></mat-progress-bar>
            }
        </div>
        @if (!hide_nav) {
            <footer-menu />
        }
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
    imports: [
        CommonModule,
        FormsModule,
        MatRippleModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatSelectModule,
        FooterMenuComponent,
        ScheduleFiltersComponent,
        ScheduleSidebarComponent,
        TopbarComponent,
        ScheduleTopbarComponent,
        ScheduleListViewComponent,
        ScheduleWeekViewComponent,
        ScheduleDayViewComponent,
    ],
})
export class ScheduleComponent extends AsyncHandler implements OnInit {
    private _state = inject(ScheduleStateService);
    private _route = inject(ActivatedRoute);

    public readonly b_list = this._state.bookings;
    public readonly bookings = this._state.filtered_bookings;
    public readonly loading = this._state.loading;

    public readonly view = signal<'day' | 'week' | 'list'>('day');
    public readonly date = this._state.date;
    public readonly setDate = (d) => this._state.setDate(d);

    public readonly week_date = this._state.week_date;
    public readonly week_options = this._state.week_options;

    public get period() {
        return this._state.getOptions().period;
    }

    public get hide_nav() {
        return localStorage.getItem('PlaceOS.hide_nav') === 'true';
    }

    public ngOnInit() {
        this._state.triggerPoll();
        this.subscription('poll', this._state.startPolling());
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('view')) {
                    this.view.set(params.get('view') as any);
                    if (this.view() === 'week') {
                        this.setOptions({ period: 'week' });
                    } else this.setOptions({ period: 'day' });
                }
            }),
        );
    }

    public setOptions(options: ScheduleOptions) {
        this._state.setOptions(options);
    }
}
