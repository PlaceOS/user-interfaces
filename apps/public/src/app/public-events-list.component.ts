import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    eventDescription,
    eventDescriptionText,
    eventId,
    eventLocation,
    eventTime,
    eventTitle,
} from './public-event.helpers';
import { PublicEvent } from './public-events.service';

@Component({
    selector: 'placeos-public-events-list',
    imports: [RouterLink],
    template: `
        <section
            class="border-base-300 bg-base-100/95 w-full space-y-4 rounded-xl border p-5 shadow-md backdrop-blur"
        >
            <div
                class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
                <h2 class="text-xl font-medium">Available public events</h2>
                <button
                    class="border-base-300 bg-base-100 hover:bg-base-200 rounded border px-4 py-2 text-sm font-medium shadow-sm"
                    type="button"
                    (click)="refresh.emit()"
                >
                    Refresh
                </button>
            </div>

            @if (loading()) {
                <div class="bg-base-200 rounded-lg p-4 text-sm opacity-70">
                    {{ loading() }}
                </div>
            } @else if (!events().length) {
                <div
                    class="bg-base-200 flex min-h-40 flex-col items-center justify-center rounded-lg p-4 text-center text-sm opacity-70"
                >
                    No public events are available right now.
                </div>
            } @else {
                <div class="space-y-2">
                    @for (event of events(); track eventId(event)) {
                        <article
                            class="border-base-300 bg-base-200/80 hover:bg-base-100 flex flex-col gap-3 rounded-lg border p-4 shadow-sm transition sm:flex-row sm:items-start sm:justify-between"
                        >
                            <div class="space-y-1">
                                <h3 class="text-lg font-medium">
                                    {{ eventTitle(event) }}
                                </h3>
                                <p class="text-sm font-medium">
                                    {{ eventTime(event) }}
                                </p>
                                @if (eventLocation(event)) {
                                    <p class="text-sm opacity-70">
                                        {{ eventLocation(event) }}
                                    </p>
                                }
                                @if (eventDescription(event)) {
                                    <p class="line-clamp-2 text-sm opacity-70">
                                        {{ eventDescriptionText(event) }}
                                    </p>
                                }
                            </div>
                            <a
                                class="border-base-300 bg-base-100 hover:bg-base-200 self-start rounded border px-4 py-2 text-sm font-medium shadow-sm"
                                [routerLink]="[
                                    '/events',
                                    system_id(),
                                    eventId(event),
                                ]"
                            >
                                View details
                            </a>
                        </article>
                    }
                </div>
            }
        </section>
    `,
})
export class PublicEventsListComponent {
    public readonly events = input<PublicEvent[]>([]);
    public readonly loading = input('');
    public readonly system_id = input('');
    public readonly refresh = output<void>();

    public readonly eventId = eventId;
    public readonly eventTitle = eventTitle;
    public readonly eventDescription = eventDescription;
    public readonly eventDescriptionText = eventDescriptionText;
    public readonly eventLocation = eventLocation;
    public readonly eventTime = eventTime;
}
