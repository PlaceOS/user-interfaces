import {
    Component,
    OnInit,
    computed,
    effect,
    inject,
    linkedSignal,
} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DesksService } from '@placeos/bookings';
import { AsyncHandler, MINUTES, OrganisationService } from '@placeos/common';
import { IconComponent, LevelPipe, TranslatePipe } from '@placeos/components';
import { ExploreMapViewComponent, ExploreStateService } from '@placeos/explore';
import { differenceInMinutes } from 'date-fns';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { VirtualConciergeButtonComponent } from '../components/virtual-concierge-button.component';
import { LandingStateService } from '../landing/landing-state.service';
import { EventPinComponent } from './event-pin.component';

/**
 * Milliseconds from `now` until `differenceInMinutes(target, now)` changes for
 * one of the future targets. Null when no target is in the future.
 */
export function msUntilMinuteChange(now: number, targets: number[]) {
    let delay: number | null = null;
    for (const target of targets) {
        if (!(target > now)) continue;
        // The truncated minute count drops 1 ms after the remainder passes
        const next = ((target - now) % MINUTES) + 1;
        delay = delay === null ? next : Math.min(delay, next);
    }
    return delay;
}

@Component({
    selector: 'app-explore',
    template: `
        @if (!hide_nav) {
            <topbar />
        }
        <div class="bg-base-200 flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <main
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                <explore-map-view></explore-map-view>
                @if (next_event()) {
                    <div
                        name="upcoming-booking-map-pill"
                        class="border-base-300 bg-base-100 absolute top-20 right-2 left-2 flex items-center space-x-2 rounded-full border p-1 sm:top-2 sm:left-auto"
                    >
                        <div class="max-w-[40vw] flex-1 px-4 leading-tight">
                            <div class="truncate">{{ next_event().title }}</div>
                            <div class="truncate text-xs opacity-60">
                                @let lvl =
                                    next_event().system?.zones ||
                                        next_event().zones | level;
                                {{ lvl?.display_name || lvl?.name }}
                            </div>
                        </div>
                        <div class="bg-base-200 rounded px-2 py-1 text-xs">
                            @if (begins_in()) {
                                {{
                                    'COMMON.BEGINS_IN'
                                        | translate
                                            : { minutes: begins_in() }
                                            : begins_in()
                                }}
                            } @else {
                                {{
                                    'COMMON.ENDS_IN'
                                        | translate
                                            : { minutes: ends_in() }
                                            : ends_in()
                                }}
                            }
                        </div>
                        <button
                            icon
                            matRipple
                            matTooltip="Pin my booking"
                            class="border-base-200 bg-secondary text-secondary-content border"
                            (click)="pinEvent()"
                        >
                            <icon>place</icon>
                        </button>
                    </div>
                }
            </main>
            <virtual-concierge-button />
        </div>

        @if (!hide_nav) {
            <footer-menu />
        }
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    imports: [
        TopbarComponent,
        FooterMenuComponent,
        VirtualConciergeButtonComponent,
        ExploreMapViewComponent,
        IconComponent,
        TranslatePipe,
        LevelPipe,
        MatTooltipModule,
    ],
})
export class ExploreComponent extends AsyncHandler implements OnInit {
    private _desks = inject(DesksService);
    private _landing = inject(LandingStateService);
    private _explore = inject(ExploreStateService);
    private _org = inject(OrganisationService);

    private _upcoming = this._landing.upcoming_events;

    public readonly next_event = computed(() => {
        const upcoming = this._upcoming()?.[0];
        if (!upcoming) return null;
        if (upcoming.type === 'desk' || upcoming.system) {
            return upcoming;
        }
        return null;
    });
    /** Time for the countdowns. Resets to now when the next event changes */
    private _time = linkedSignal({
        source: this.next_event,
        computation: () => Date.now(),
    });
    public readonly begins_in = computed(() => {
        const event = this.next_event();
        if (!event) return 0;
        return Math.max(0, differenceInMinutes(event.date, this._time()));
    });
    public readonly ends_in = computed(() => {
        const event = this.next_event();
        if (!event) return 0;
        return Math.max(0, differenceInMinutes(event.date_end, this._time()));
    });

    public get hide_nav() {
        return localStorage.getItem('PlaceOS.hide_nav') === 'true';
    }

    constructor() {
        super();
        // Update the time only when a whole-minute countdown changes
        effect(() => {
            const event = this.next_event();
            const delay = event
                ? msUntilMinuteChange(this._time(), [
                      event.date,
                      event.date_end,
                  ])
                : null;
            if (delay === null) return this.clearTimeout('time');
            this.timeout('time', () => this._time.set(Date.now()), delay);
        });
    }

    public ngOnInit() {
        this._desks.error_on_host = false;
    }

    public pinEvent() {
        const event = this.next_event();
        if (!event) return;
        const lvl = this._org.levelWithID(event.system?.zones || event.zones);
        const id = event.system?.map_id || event.extension_data.map_id;
        this._explore.setLevel(lvl.id);
        this.subscription('upcoming', () =>
            this._explore.setFeatures('_upcoming_', []),
        );
        this._explore.setFeatures('_upcoming_', [
            {
                location: id,
                content: EventPinComponent,
                data: { event },
            },
        ]);
    }
}
