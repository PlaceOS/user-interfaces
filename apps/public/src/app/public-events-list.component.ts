import {
    Component,
    ElementRef,
    afterNextRender,
    computed,
    input,
    output,
    viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    eventDescriptionText,
    eventId,
    eventLocation,
    eventTime,
    eventTitle,
    focusIfLost,
} from './public-event.helpers';
import { PublicEvent } from './public-events.service';

@Component({
    selector: 'placeos-public-events-list',
    imports: [RouterLink],
    template: `
        <section
            class="border-base-300 bg-base-100/95 mx-auto w-full max-w-3xl space-y-4 rounded-xl border p-5 shadow-md backdrop-blur"
        >
            <div
                class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
                <h2
                    #heading
                    class="text-xl font-medium focus:outline-none"
                    tabindex="-1"
                >
                    Available public events
                </h2>
                <button
                    class="border-base-300 bg-base-100 hover:bg-base-200 rounded border px-4 py-2 text-sm font-medium shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
                    type="button"
                    [disabled]="!!loading()"
                    (click)="refresh.emit()"
                >
                    Refresh
                </button>
            </div>

            @if (loading()) {
                <div
                    aria-hidden="true"
                    class="bg-base-200 rounded-lg p-4 text-sm opacity-70"
                >
                    {{ loading() }}
                </div>
            } @else if (!events().length && !failed()) {
                <div
                    class="bg-base-200 flex min-h-40 flex-col items-center justify-center rounded-lg p-4 text-center text-sm opacity-70"
                >
                    No public events are available right now.
                </div>
            } @else {
                <div class="space-y-2">
                    @for (card of cards(); track card.id) {
                        <article
                            class="border-base-300 bg-base-200/80 hover:bg-base-100 flex flex-col gap-3 rounded-lg border p-4 shadow-sm transition sm:flex-row sm:items-start sm:justify-between"
                        >
                            <div class="space-y-1">
                                <h3 class="text-lg font-medium">
                                    {{ card.title }}
                                </h3>
                                <p class="text-sm font-medium">
                                    {{ card.time }}
                                </p>
                                @if (card.location) {
                                    <p class="text-sm opacity-70">
                                        {{ card.location }}
                                    </p>
                                }
                                @if (card.description) {
                                    <p class="line-clamp-2 text-sm opacity-70">
                                        {{ card.description }}
                                    </p>
                                }
                            </div>
                            <a
                                class="border-base-300 bg-base-100 hover:bg-base-200 self-start rounded border px-4 py-2 text-sm font-medium shadow-sm"
                                [routerLink]="['/events', system_id(), card.id]"
                            >
                                View details
                                <span class="sr-only">
                                    for {{ card.title }}
                                </span>
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
    /** True when the last load failed, so the empty message does not show */
    public readonly failed = input(false);
    public readonly refresh = output<void>();
    private readonly _heading =
        viewChild.required<ElementRef<HTMLElement>>('heading');

    constructor() {
        // The view changes without a page load, so the focused link is removed
        afterNextRender(() => focusIfLost(this._heading().nativeElement));
    }

    /**
     * Text of each event card. It is made once per events list, as the
     * description text and the times are slow to make.
     */
    public readonly cards = computed(() =>
        this.events().map((event) => ({
            id: eventId(event),
            title: eventTitle(event),
            time: eventTime(event),
            location: eventLocation(event),
            description: eventDescriptionText(event),
        })),
    );
}
