import { Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    eventDescription,
    eventLocation,
    eventTime,
    eventTitle,
} from './public-event.helpers';
import { PublicEvent } from './public-events.service';

@Component({
    selector: 'placeos-public-event-details',
    imports: [RouterLink],
    template: `
        <section
            class="border-base-300 bg-base-100/95 mx-auto w-full max-w-3xl space-y-4 rounded-xl border p-5 shadow-md backdrop-blur"
        >
            @if (show_back()) {
                <a
                    class="border-base-300 bg-base-100 hover:bg-base-200 inline-flex rounded border px-4 py-2 text-sm font-medium shadow-sm"
                    [routerLink]="['/events', system_id()]"
                >
                    Back to events
                </a>
            }
            @if (event(); as selected_event) {
                <div class="gap-2">
                    <div
                        class="bg-base-200 inline-flex rounded px-2 py-1 text-sm font-medium"
                    >
                        Event details
                    </div>
                    <h2 class="text-2xl font-medium">
                        {{ eventTitle(selected_event) }}
                    </h2>
                    <p class="text-sm font-medium">
                        {{ eventTime(selected_event) }}
                    </p>
                    @if (eventLocation(selected_event)) {
                        <p class="text-sm opacity-70">
                            {{ eventLocation(selected_event) }}
                        </p>
                    }
                </div>
                @if (eventDescription(selected_event)) {
                    <div
                        class="event-description text-sm leading-6 opacity-70"
                        [innerHTML]="description_html()"
                    ></div>
                }
                @if (registered()) {
                    <div
                        class="bg-success-light text-success rounded-lg p-4 text-sm font-medium"
                    >
                        Registration received for {{ guest_email() }}.
                    </div>
                } @else {
                    <button
                        class="bg-primary text-primary-content hover:bg-primary-focus disabled:bg-base-300 disabled:text-base-content min-h-12 w-full rounded px-4 py-2 font-medium disabled:cursor-not-allowed disabled:opacity-60"
                        type="button"
                        [disabled]="!!loading()"
                        (click)="register_event.emit(selected_event)"
                    >
                        Register for this event
                    </button>
                }
            } @else if (loading()) {
                <div class="bg-base-200 rounded-lg p-4 text-sm opacity-70">
                    {{ loading() }}
                </div>
            } @else {
                <div class="bg-base-200 rounded-lg p-4 text-sm opacity-70">
                    This event is not available.
                </div>
            }
        </section>
    `,
    styles: [
        `
            :host ::ng-deep .event-description p {
                margin: 0 0 0.75rem;
            }

            :host ::ng-deep .event-description p:last-child {
                margin-bottom: 0;
            }

            :host ::ng-deep .event-description ul,
            :host ::ng-deep .event-description ol {
                margin: 0.5rem 0 0.75rem 1.25rem;
            }

            :host ::ng-deep .event-description ul {
                list-style: disc;
            }

            :host ::ng-deep .event-description ol {
                list-style: decimal;
            }

            :host ::ng-deep .event-description a {
                color: var(--primary);
                text-decoration: underline;
            }
        `,
    ],
})
export class PublicEventDetailsComponent {
    public readonly event = input<PublicEvent | undefined>();
    public readonly loading = input('');
    public readonly registered = input(false);
    public readonly guest_email = input('');
    public readonly system_id = input('');
    public readonly show_back = input(true);
    public readonly register_event = output<PublicEvent>();

    public readonly eventTitle = eventTitle;
    public readonly eventDescription = eventDescription;
    public readonly eventLocation = eventLocation;
    public readonly eventTime = eventTime;
    public readonly description_html = computed(() => {
        const event = this.event();
        return event ? eventDescription(event) : '';
    });
}
