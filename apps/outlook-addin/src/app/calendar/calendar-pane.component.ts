import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { DeskSearchComponent } from './desk-search.component';
import { formatEventPeriod, localTimezoneLabel } from './outlook-event';
import { OutlookEventService } from './outlook-event.service';
import { parkingModes, ParkingSearchComponent } from './parking-search.component';
import { RoomSearchComponent } from './room-search.component';

type PaneTab = 'rooms' | 'desks' | 'parking';

const TABS: { id: PaneTab; name: string }[] = [
    { id: 'rooms', name: 'Rooms' },
    { id: 'desks', name: 'Desks' },
    { id: 'parking', name: 'Parking' },
];

/**
 * Task pane opened from an Outlook calendar event. Shows the event details
 * from Outlook as read-only context and lets the user add a room, a desk or
 * parking. The Parking tab shows when the `app.features` setting turns on
 * parking or parking requests.
 */
@Component({
    selector: 'calendar-pane',
    template: `
        <div class="bg-base-100 absolute inset-0 flex flex-col overflow-hidden">
            <header class="border-base-200 flex flex-col gap-3 border-b p-3">
                <div
                    role="tablist"
                    aria-label="Resource type"
                    class="border-base-300 flex rounded-lg border p-1"
                >
                    @for (tab of tabs(); track tab.id) {
                        <button
                            role="tab"
                            matRipple
                            class="flex-1 rounded-md py-2 text-sm font-medium"
                            [class.bg-secondary]="active_tab() === tab.id"
                            [class.text-secondary-content]="
                                active_tab() === tab.id
                            "
                            [attr.aria-selected]="active_tab() === tab.id"
                            (click)="active_tab.set(tab.id)"
                        >
                            {{ tab.name }}
                        </button>
                    }
                </div>
                <section
                    class="bg-info-light flex items-start gap-2 rounded-lg p-3"
                    aria-label="Outlook event"
                >
                    <div class="min-w-0 flex-1">
                        @if (event(); as event) {
                            <h2 class="truncate font-medium">
                                {{ event.subject || 'Untitled event' }}
                            </h2>
                            <p class="text-sm">{{ period() }}</p>
                        } @else {
                            <p class="text-sm">Reading the Outlook event...</p>
                        }
                        <p class="text-xs opacity-60">
                            {{
                                is_outlook
                                    ? 'From this Outlook event'
                                    : 'Sample event. Open PlaceOS from an Outlook event to use its details.'
                            }}
                        </p>
                    </div>
                    <button
                        icon
                        matRipple
                        aria-label="Read the event details again"
                        [disabled]="loading()"
                        (click)="refresh()"
                    >
                        <icon [class.animate-spin]="loading()">refresh</icon>
                    </button>
                </section>
                @if (error()) {
                    <p role="alert" class="text-error text-sm">{{ error() }}</p>
                }
            </header>
            <main class="flex-1 overflow-auto" role="tabpanel">
                @if (event()) {
                    @switch (active_tab()) {
                        @case ('rooms') {
                            <room-search />
                        }
                        @case ('desks') {
                            <desk-search />
                        }
                        @case ('parking') {
                            <parking-search />
                        }
                    }
                }
            </main>
        </div>
    `,
    imports: [
        MatRippleModule,
        IconComponent,
        RoomSearchComponent,
        DeskSearchComponent,
        ParkingSearchComponent,
    ],
})
export class CalendarPaneComponent implements OnInit {
    private _outlook = inject(OutlookEventService);
    private _settings = inject(SettingsService);

    public readonly tabs = computed(() =>
        parkingModes(this._settings.get('app.features')).length
            ? TABS
            : TABS.filter((_) => _.id !== 'parking'),
    );
    public readonly active_tab = signal<PaneTab>('rooms');
    public readonly event = this._outlook.event;
    public readonly loading = this._outlook.loading;
    public readonly error = this._outlook.error;
    public readonly is_outlook = this._outlook.is_outlook;
    public readonly period = computed(() => {
        const event = this.event();
        return event
            ? `${formatEventPeriod(event)} · ${localTimezoneLabel()}`
            : '';
    });

    public ngOnInit() {
        this._outlook.init();
    }

    public refresh() {
        this._outlook.refresh();
    }
}
