import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { LandingStateService } from '../landing/landing-state.service';
import { ChatViewComponent } from './chat-view.component';
import { LandingAvailableNowComponent } from './landing-available-now.component';
import { LandingColleaguesNewComponent } from './landing-colleagues-new.component';
import { LandingFavouritesNewComponent } from './landing-favourites-new.component';
import { LandingQuickActionsComponent } from './landing-quick-actions.component';
import { LandingUpcomingBookingComponent } from './landing-upcoming-booking.component';

@Component({
    selector: 'landing-new',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden">
            @if (!hide_nav()) {
                <topbar class="z-10" [class.blur]="open_concierge()" />
            }
            <div
                class="relative flex h-1/2 flex-1 overflow-auto bg-base-200"
                [class.blur]="open_concierge()"
            >
                <div
                    class="mx-auto grid w-[80rem] max-w-full grid-cols-1 gap-4 p-4 md:grid-cols-3"
                >
                    <landing-upcoming-booking class="md:col-span-3" />
                    <a
                        matRipple
                        [routerLink]="['/your-bookings']"
                        class="flex min-h-8 items-center justify-center rounded-lg md:col-span-3"
                    >
                        <div class="underline">
                            {{
                                'APP.WORKPLACE.UPCOMING_VIEW_BOOKINGS'
                                    | translate
                            }}
                        </div>
                        <icon>arrow_forward</icon>
                    </a>
                    <landing-available-now class="md:col-span-2" />
                    <landing-quick-actions class="md:col-span-1" />
                    <landing-favourites-new class="md:col-span-2" />
                    <landing-colleagues-new class="md:col-span-1" />
                    <div class="min-h-2 w-full md:col-span-3"></div>
                </div>
                <button
                    icon
                    matRipple
                    class="absolute left-2 top-60 h-14 w-14 bg-secondary text-secondary-content shadow"
                    [matTooltip]="'APP.WORKPLACE.VIRTUAL_CONCIERGE' | translate"
                    matTooltipPosition="right"
                    (click)="openConciergeChat()"
                >
                    <img class="h-10" src="assets/icons/ben_icon.svg" />
                </button>
            </div>
            @if (!hide_nav()) {
                <footer-menu [(blur_backdrop)]="open_concierge" />
            }
            <div></div>
        </div>
    `,
    styles: [
        `
            .blur {
                filter: blur(10px);
            }
        `,
    ],
    imports: [
        MatRippleModule,
        MatTooltipModule,
        RouterModule,
        TopbarComponent,
        FooterMenuComponent,
        TranslatePipe,
        IconComponent,
        LandingUpcomingBookingComponent,
        LandingAvailableNowComponent,
        LandingQuickActionsComponent,
        LandingFavouritesNewComponent,
        LandingColleaguesNewComponent,
    ],
})
export class LandingNewComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    private _bottom_sheet = inject(MatBottomSheet);
    private _state = inject(LandingStateService);

    public readonly hide_nav = signal(false);
    public readonly open_concierge = signal(false);

    public ngOnInit() {
        this.subscription('poll', this._state.pollUpcomingEvents());
    }

    public openConciergeChat() {
        this.open_concierge.set(true);
        const ref = this._bottom_sheet.open(ChatViewComponent);
        ref.afterDismissed().subscribe(() => this.open_concierge.set(false));
    }
}
