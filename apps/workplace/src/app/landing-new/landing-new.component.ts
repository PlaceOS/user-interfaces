import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AsyncHandler, settingSignal } from '@placeos/common';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { FullscreenEmbedComponent } from '../components/fullscreen-embed.component';
import { SidebarEmbedComponent } from '../components/sidebar-embed.component';
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
            <div class="bg-base-200 relative flex h-1/2 flex-1 overflow-auto">
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
                        class="bg-base-100 border-base-200 absolute top-1/2 left-2 h-14 w-14 -translate-y-1/2 border shadow-md"
                        (click)="viewVirtualConcierge()"
                    >
                        <img class="z-10 h-12" src="assets/icons/roybot.png" />
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
        'virtual_concierge.url',
        '',
    );
    public readonly virtual_concierge_display = settingSignal<
        'fullscreen' | 'sidebar'
    >('virtual_concierge.display', 'fullscreen');
    public readonly virtual_concierge_side = settingSignal<'left' | 'right'>(
        'virtual_concierge.side',
        'left',
    );

    public ngOnInit() {
        this.subscription('poll', this._state.pollUpcomingEvents());
    }

    public viewVirtualConcierge() {
        const url = this.virtual_concierge_url();
        const is_sidebar = this.virtual_concierge_display() === 'sidebar';
        const side = this.virtual_concierge_side();
        const position =
            side === 'right'
                ? { right: '0', top: '0' }
                : { left: '0', top: '0' };
        if (is_sidebar) {
            this._dialog.open(SidebarEmbedComponent, {
                data: { url, side },
                height: '100vh',
                width: '28rem',
                maxWidth: '100vw',
                position,
                panelClass: [
                    'sidebar-embed-dialog',
                    `sidebar-embed-dialog-${side}`,
                ],
            });
            return;
        }
        this._dialog.open(FullscreenEmbedComponent, {
            data: url,
        });
    }
}
