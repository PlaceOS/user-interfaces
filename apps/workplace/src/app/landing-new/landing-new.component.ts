import { Component, computed, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncHandler, settingSignal } from '@placeos/common';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { VirtualConciergeButtonComponent } from '../components/virtual-concierge-button.component';
import { LandingStateService } from '../landing/landing-state.service';
import { LandingAvailableNowComponent } from './landing-available-now.component';
import { LandingColleaguesNewComponent } from './landing-colleagues-new.component';
import { LandingDeskWeekComponent } from './landing-desk-week.component';
import { LandingFavouritesNewComponent } from './landing-favourites-new.component';
import {
    availableNowTabs,
    hasQuickActions,
    landingFeatures,
} from './landing-features';
import { LandingQuickActionsComponent } from './landing-quick-actions.component';
import { LandingUpcomingBookingComponent } from './landing-upcoming-booking.component';

@Component({
    selector: 'landing-new',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden">
            @if (!hide_nav) {
                <topbar />
            }
            <div class="bg-base-200 relative flex h-1/2 flex-1 overflow-auto">
                <div
                    class="mx-auto grid w-[80rem] max-w-full grid-cols-1 gap-4 p-4 md:grid-cols-3"
                >
                    <landing-upcoming-booking class="md:col-span-3" />
                    <!-- <landing-virtual-concierge class="md:col-span-3" /> -->

                    @if (show_available_now()) {
                        <landing-available-now
                            [class.md:col-span-2]="show_quick_actions()"
                            [class.md:col-span-3]="!show_quick_actions()"
                        />
                    }
                    @if (show_quick_actions()) {
                        <landing-quick-actions
                            [class.md:col-span-1]="show_available_now()"
                            [class.md:col-span-3]="!show_available_now()"
                        />
                    }
                    @if (features().includes('desks')) {
                        <landing-desk-week class="md:col-span-3" />
                    }
                    <landing-favourites-new
                        [class.md:col-span-2]="!hide_colleagues()"
                        [class.md:col-span-3]="hide_colleagues()"
                    />
                    @if (!hide_colleagues()) {
                        <landing-colleagues-new class="md:col-span-1" />
                    }
                    <div class="min-h-2 w-full md:col-span-3"></div>
                </div>
                <virtual-concierge-button />
            </div>
            @if (!hide_nav) {
                <footer-menu />
            }
            <div></div>
        </div>
    `,
    styles: [``],
    imports: [
        RouterModule,
        TopbarComponent,
        FooterMenuComponent,
        VirtualConciergeButtonComponent,
        LandingUpcomingBookingComponent,
        // LandingVirtualConciergeComponent,
        LandingAvailableNowComponent,
        LandingQuickActionsComponent,
        LandingDeskWeekComponent,
        LandingFavouritesNewComponent,
        LandingColleaguesNewComponent,
    ],
})
export class LandingNewComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    private _state = inject(LandingStateService);

    /** Set from the `hide_nav` URL parameter when the app is embedded */
    public get hide_nav() {
        return localStorage.getItem('PlaceOS.hide_nav') === 'true';
    }
    public readonly features = landingFeatures();
    public readonly hide_colleagues = settingSignal<boolean>('hide_colleagues');
    public readonly hide_spaces = settingSignal<boolean>('hide_landing_spaces');
    public readonly hide_rooms = settingSignal<boolean>('hide_landing_rooms');
    public readonly show_quick_links =
        settingSignal<boolean>('show_quick_links');
    public readonly show_quick_book = settingSignal<boolean>('show_quick_book');

    public readonly show_available_now = computed(
        () =>
            availableNowTabs(
                this.features(),
                !!this.hide_spaces(),
                !!this.hide_rooms(),
            ).length > 0,
    );
    public readonly show_quick_actions = computed(() =>
        hasQuickActions(
            this.features(),
            this.show_quick_book() !== false,
            this.show_quick_links() !== false,
        ),
    );

    public ngOnInit() {
        this.subscription('poll', this._state.pollUpcomingEvents());
    }
}
