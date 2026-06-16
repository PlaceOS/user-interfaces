import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import {
    AsyncHandler,
    CalendarEvent,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { IconComponent } from '@placeos/components';
import {
    GroupEventDetailsModalComponent,
    showEvent,
    showEventMetadata,
    SpacePipe,
} from '@placeos/events';

@Component({
    selector: 'group-event-view',
    template: `
        <div
            class="bg-base-200 absolute inset-0 flex flex-col items-center p-4"
        >
            @if (!loading()) {
                @if (event()) {
                    <div
                        class="border-base-300 bg-base-100 overflow-hidden rounded-sm border"
                    >
                        <group-event-details-modal [event]="event()" />
                    </div>
                } @else {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center space-y-4 opacity-30"
                    >
                        <icon class="text-6xl"></icon>
                        <p>Event not found.</p>
                    </div>
                }
            } @else {
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32" />
                    <p>Loading event details...</p>
                </div>
            }
        </div>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatProgressSpinnerModule,
        IconComponent,
        GroupEventDetailsModalComponent,
    ],
})
export class EventViewComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _settings = inject(SettingsService);

    public readonly loading = signal(false);
    public readonly event = signal<CalendarEvent>(null);

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) this._loadEvent(params.get('id'));
            }),
        );
    }

    private async _loadEvent(id: string) {
        const calendar =
            this._settings.get<string>('app.group_events_calendar') || '';
        this.loading.set(true);
        const space_pipe = new SpacePipe();
        const booking = await showEvent(id, { calendar }).catch();
        if (!booking) return this.loading.set(false);
        const space = await space_pipe.transform(calendar);
        const metadata = await showEventMetadata(
            id,
            space?.id || booking.system?.id,
            {
                ical_uid: booking.ical_uid,
            },
        ).catch(() => ({}));
        this.event.set(
            new CalendarEvent({
                ...booking,
                extension_data: {
                    ...booking.extension_data,
                    ...metadata,
                },
            }),
        );
        this.loading.set(false);
    }
}
