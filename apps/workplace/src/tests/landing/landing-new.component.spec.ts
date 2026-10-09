import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { MockProvider } from 'ng-mocks';
import { Subscription } from 'rxjs';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { VirtualConciergeButtonComponent } from '../../app/components/virtual-concierge-button.component';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { LandingAvailableNowComponent } from '../../app/landing-new/landing-available-now.component';
import { LandingColleaguesNewComponent } from '../../app/landing-new/landing-colleagues-new.component';
import { LandingDeskWeekComponent } from '../../app/landing-new/landing-desk-week.component';
import { LandingFavouritesNewComponent } from '../../app/landing-new/landing-favourites-new.component';
import { LandingNewComponent } from '../../app/landing-new/landing-new.component';
import { LandingQuickActionsComponent } from '../../app/landing-new/landing-quick-actions.component';
import { LandingUpcomingBookingComponent } from '../../app/landing-new/landing-upcoming-booking.component';

describe('LandingNewComponent', () => {
    let spectator: Spectator<LandingNewComponent>;
    const poll_upcoming_events = vi.fn(() => new Subscription());
    const createComponent = createComponentFactory({
        component: LandingNewComponent,
        declarations: [
            mockComponent(TopbarComponent),
            mockComponent(FooterMenuComponent),
            mockComponent(VirtualConciergeButtonComponent),
            mockComponent(LandingUpcomingBookingComponent),
            mockComponent(LandingAvailableNowComponent),
            mockComponent(LandingQuickActionsComponent),
            mockComponent(LandingDeskWeekComponent),
            mockComponent(LandingFavouritesNewComponent),
            mockComponent(LandingColleaguesNewComponent),
        ],
        providers: [
            MockProvider(LandingStateService, {
                pollUpcomingEvents: poll_upcoming_events as any,
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should poll upcoming events on init', () => {
        spectator.detectChanges();
        expect(poll_upcoming_events).toHaveBeenCalledTimes(1);
    });

    it('should show the top and bottom navigation by default', () => {
        spectator.detectChanges();
        expect(spectator.query('topbar')).toBeTruthy();
        expect(spectator.query('footer-menu')).toBeTruthy();
    });

    it('should hide the navigation when hide_nav is set', () => {
        spectator.component.hide_nav.set(true);
        spectator.detectChanges();
        expect(spectator.query('topbar')).toBeFalsy();
        expect(spectator.query('footer-menu')).toBeFalsy();
    });

    it('should render the landing widgets and concierge button', () => {
        spectator.detectChanges();
        expect(spectator.query('landing-upcoming-booking')).toBeTruthy();
        expect(spectator.query('landing-available-now')).toBeTruthy();
        expect(spectator.query('landing-quick-actions')).toBeTruthy();
        expect(spectator.query('landing-desk-week')).toBeTruthy();
        expect(spectator.query('virtual-concierge-button')).toBeTruthy();
    });

    it('should stop polling when destroyed', () => {
        const unsub_spy = vi.fn();
        poll_upcoming_events.mockReturnValueOnce({
            unsubscribe: unsub_spy,
        } as any);
        spectator = createComponent();
        spectator.detectChanges();
        spectator.fixture.destroy();
        expect(unsub_spy).toHaveBeenCalled();
    });
});
