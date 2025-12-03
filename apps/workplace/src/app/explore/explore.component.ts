import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DesksService } from '@placeos/bookings';
import { AsyncHandler, OrganisationService } from '@placeos/common';
import { IconComponent, LevelPipe, TranslatePipe } from '@placeos/components';
import { ExploreMapViewComponent, ExploreStateService } from '@placeos/explore';
import { differenceInMinutes } from 'date-fns';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { LandingStateService } from '../landing/landing-state.service';
import { EventPinComponent } from './event-pin.component';

@Component({
    selector: 'app-explore',
    template: `
        @if (!hide_nav) {
            <topbar />
        }
        <div class="flex h-1/2 flex-1 flex-col-reverse bg-base-200 sm:flex-row">
            <main
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                <explore-map-view></explore-map-view>
                @if (next_event()) {
                    <div
                        class="absolute right-2 top-2 flex items-center space-x-2 rounded-full border border-base-300 bg-base-100 p-1"
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
                        <div class="rounded bg-base-200 px-2 py-1 text-xs">
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
                            class="border border-base-200 bg-secondary text-secondary-content"
                            (click)="pinEvent()"
                        >
                            <icon>place</icon>
                        </button>
                    </div>
                }
            </main>
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

    private _upcoming = toSignal(this._landing.upcoming_events);
    private _time = signal(Date.now());

    public readonly next_event = computed(() => this._upcoming()[0]);
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

    public ngOnInit() {
        this._desks.error_on_host = false;
        this.interval('time', () => this._time.set(Date.now()));
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
