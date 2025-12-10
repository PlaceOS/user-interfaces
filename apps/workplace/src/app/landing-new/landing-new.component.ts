import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AsyncHandler, settingSignal } from '@placeos/common';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { FullscreenEmbedComponent } from '../components/fullscreen-embed.component';
import { TopbarComponent } from '../components/topbar.component';
import { LandingStateService } from '../landing/landing-state.service';
import { LandingAvailableNowComponent } from './landing-available-now.component';
import { LandingColleaguesNewComponent } from './landing-colleagues-new.component';
import { LandingDeskWeekComponent } from './landing-desk-week.component';
import { LandingFavouritesNewComponent } from './landing-favourites-new.component';
import { LandingQuickActionsComponent } from './landing-quick-actions.component';
import { LandingUpcomingBookingComponent } from './landing-upcoming-booking.component';

@Component({
    selector: 'landing-new',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden">
            @if (!hide_nav()) {
                <topbar class="z-10" />
            }
            <div class="relative flex h-1/2 flex-1 overflow-auto bg-base-200">
                <div
                    class="mx-auto grid w-[80rem] max-w-full grid-cols-1 gap-4 p-4 md:grid-cols-3"
                >
                    <landing-upcoming-booking class="md:col-span-3" />
                    <!-- <landing-virtual-concierge class="md:col-span-3" /> -->

                    <landing-available-now class="md:col-span-2" />
                    <landing-quick-actions class="md:col-span-1" />
                    <landing-desk-week class="md:col-span-3" />
                    <landing-favourites-new class="md:col-span-2" />
                    <landing-colleagues-new class="md:col-span-1" />
                    <div class="min-h-2 w-full md:col-span-3"></div>
                </div>
                @if (virtual_concierge_url()) {
                    <button
                        icon
                        matRipple
                        class="absolute left-2 top-1/2 h-16 w-16 -translate-y-1/2 bg-secondary"
                        (click)="viewVirtualConcierge()"
                    >
                        <img
                            class="z-10 h-12"
                            src="assets/icons/ben_icon.svg"
                        />
                    </button>
                }
            </div>
            @if (!hide_nav()) {
                <footer-menu />
            }
            <div></div>
        </div>
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        RouterModule,
        TopbarComponent,
        FooterMenuComponent,
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
    private _dialog = inject(MatDialog);

    public readonly hide_nav = signal(false);
    public readonly virtual_concierge_url = settingSignal(
        'virtual_concierge_url',
        '',
    );

    public ngOnInit() {
        this.subscription('poll', this._state.pollUpcomingEvents());
    }

    public viewVirtualConcierge() {
        this._dialog.open(FullscreenEmbedComponent, {
            data: this.virtual_concierge_url(),
        });
    }
}
