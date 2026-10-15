import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    setCurrentUser,
    settingSignal,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { MockProvider } from 'ng-mocks';
import { Subscription } from 'rxjs';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { VirtualConciergeButtonComponent } from '../../app/components/virtual-concierge-button.component';
import { LandingAvailableNowComponent } from '../../app/landing-new/landing-available-now.component';
import { LandingColleaguesNewComponent } from '../../app/landing-new/landing-colleagues-new.component';
import { LandingDeskWeekComponent } from '../../app/landing-new/landing-desk-week.component';
import { LandingFavouritesNewComponent } from '../../app/landing-new/landing-favourites-new.component';
import { LandingFocusTimerComponent } from '../../app/landing-new/landing-focus-timer.component';
import {
    LANDING_LAYOUT_KEY,
    LandingLayout,
} from '../../app/landing-new/landing-layout';
import { LandingNewComponent } from '../../app/landing-new/landing-new.component';
import { LandingQuickActionsComponent } from '../../app/landing-new/landing-quick-actions.component';
import { LandingUpcomingBookingComponent } from '../../app/landing-new/landing-upcoming-booking.component';
import { LandingWorldClockComponent } from '../../app/landing-new/landing-world-clock.component';
import { LandingStateService } from '../../app/landing/landing-state.service';

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
            mockComponent(LandingFocusTimerComponent),
            mockComponent(LandingWorldClockComponent),
        ],
        providers: [
            MockProvider(LandingStateService, {
                pollUpcomingEvents: poll_upcoming_events as any,
            }),
            MockProvider(SettingsService, { saveUserSetting: vi.fn() }),
        ],
    });

    /** Widgets on the page, in display order */
    const widgetIds = () =>
        spectator
            .queryAll('[data-widget]')
            .map((_) => _.getAttribute('data-widget'));

    const features = settingSignal<string[]>('features', []);
    const feature_groups = settingSignal<Record<string, string[]>>(
        'feature_groups',
        {},
    );
    const hide_colleagues = settingSignal<boolean>('hide_colleagues');
    const hide_spaces = settingSignal<boolean>('hide_landing_spaces');
    const hide_rooms = settingSignal<boolean>('hide_landing_rooms');
    const show_quick_links = settingSignal<boolean>('show_quick_links');
    const show_quick_book = settingSignal<boolean>('show_quick_book');
    const hide_customise = settingSignal<boolean>('hide_landing_customise');
    const hide_widgets = settingSignal<string[]>('hide_landing_widgets', []);
    const saved_layout = settingSignal<LandingLayout>(
        LANDING_LAYOUT_KEY,
        undefined,
        true,
    );

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.removeItem('PlaceOS.hide_nav');
        features.set(['desks', 'spaces', 'lockers', 'parking', 'explore']);
        feature_groups.set({});
        hide_colleagues.set(undefined);
        hide_spaces.set(undefined);
        hide_rooms.set(undefined);
        show_quick_links.set(undefined);
        show_quick_book.set(undefined);
        saved_layout.set(undefined);
        hide_customise.set(undefined);
        hide_widgets.set([]);
        setCurrentUser(new StaffUser({ id: 'me', groups: ['staff'] }));
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

    it('should hide the navigation when the app has stored hide_nav', () => {
        localStorage.setItem('PlaceOS.hide_nav', 'true');
        spectator.detectChanges();
        expect(spectator.query('topbar')).toBeFalsy();
        expect(spectator.query('footer-menu')).toBeFalsy();
        localStorage.removeItem('PlaceOS.hide_nav');
    });

    it('should render the landing widgets and concierge button', () => {
        spectator.detectChanges();
        expect(spectator.query('landing-upcoming-booking')).toBeTruthy();
        expect(spectator.query('landing-available-now')).toBeTruthy();
        expect(spectator.query('landing-desk-week')).toBeTruthy();
        expect(spectator.query('landing-favourites-new')).toBeTruthy();
        expect(spectator.query('landing-colleagues-new')).toBeTruthy();
        expect(spectator.query('virtual-concierge-button')).toBeTruthy();
    });

    it('should hide the desk widgets when the desks feature is off', () => {
        features.set(['spaces', 'explore']);
        show_quick_links.set(false);
        spectator.detectChanges();
        expect(spectator.query('landing-desk-week')).toBeFalsy();
        // One-click desk booking is the only quick action that is switched on
        expect(spectator.query('landing-quick-actions')).toBeFalsy();
        expect(spectator.query('landing-available-now')).toBeTruthy();
    });

    it('should hide a feature that is limited to other user groups', () => {
        feature_groups.set({ desks: ['desk-users'] });
        spectator.detectChanges();
        expect(spectator.query('landing-desk-week')).toBeFalsy();

        feature_groups.set({ desks: ['staff'] });
        spectator.detectChanges();
        expect(spectator.query('landing-desk-week')).toBeTruthy();
    });

    it('should hide Available Now when no tab is enabled', () => {
        hide_spaces.set(true);
        spectator.detectChanges();
        expect(spectator.query('landing-available-now')).toBeTruthy();

        hide_rooms.set(true);
        spectator.detectChanges();
        expect(spectator.query('landing-available-now')).toBeFalsy();
    });

    it('should show quick actions until both quick settings are false', () => {
        spectator.detectChanges();
        expect(spectator.query('landing-quick-actions')).toBeTruthy();

        show_quick_links.set(false);
        show_quick_book.set(false);
        spectator.detectChanges();
        expect(spectator.query('landing-quick-actions')).toBeFalsy();
    });

    it('should hide the colleagues widget when hide_colleagues is set', () => {
        hide_colleagues.set(true);
        spectator.detectChanges();
        expect(spectator.query('landing-colleagues-new')).toBeFalsy();
        expect(spectator.query('landing-favourites-new')).toBeTruthy();
    });

    it('should show the widgets in the order of the saved layout', () => {
        saved_layout.set({
            order: ['colleagues', 'available_now'],
            hidden: ['quick_actions', 'desk_week', 'favourites'],
        });
        spectator.detectChanges();
        expect(widgetIds()).toEqual(['colleagues', 'available_now']);
    });

    it('should not show a saved widget that the settings hide', () => {
        saved_layout.set({ order: ['colleagues', 'favourites'], hidden: [] });
        hide_colleagues.set(true);
        spectator.detectChanges();
        expect(spectator.query('landing-colleagues-new')).toBeFalsy();
    });

    it('should save the layout that the user arranged', () => {
        spectator.detectChanges();
        spectator.click('button[name="edit-home-layout"]');
        spectator.click(
            '[data-widget="quick_actions"] button[name="remove-home-widget"]',
        );
        spectator.click(
            '[data-widget="available_now"] button[name="move-home-widget-later"]',
        );
        spectator.click('button[name="save-home-layout"]');
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).toHaveBeenCalledWith(LANDING_LAYOUT_KEY, {
            order: ['desk_week', 'available_now', 'favourites', 'colleagues'],
            hidden: ['quick_actions'],
        });
        expect(spectator.query('button[name="edit-home-layout"]')).toBeTruthy();
    });

    it('should show an optional widget after the user adds it', () => {
        spectator.detectChanges();
        expect(spectator.query('landing-world-clock')).toBeFalsy();
        spectator.click('button[name="edit-home-layout"]');
        const add_buttons = spectator.queryAll<HTMLButtonElement>(
            'button[name="add-home-widget"]',
        );
        // The default widgets are on the page. The two optional widgets are not
        expect(add_buttons.filter((_) => !_.disabled).length).toBe(2);
        spectator.click(add_buttons[add_buttons.length - 1]);
        expect(spectator.query('landing-world-clock')).toBeTruthy();
        spectator.click('button[name="save-home-layout"]');
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).toHaveBeenCalledWith(LANDING_LAYOUT_KEY, {
            order: [
                'available_now',
                'quick_actions',
                'desk_week',
                'favourites',
                'colleagues',
                'world_clock',
            ],
            hidden: [],
        });
    });

    it('should discard the changes when the user cancels', () => {
        spectator.detectChanges();
        const before = widgetIds();
        spectator.click('button[name="edit-home-layout"]');
        spectator.click(
            '[data-widget="favourites"] button[name="remove-home-widget"]',
        );
        expect(widgetIds()).not.toContain('favourites');
        spectator.click('button[name="cancel-home-layout"]');
        expect(widgetIds()).toEqual(before);
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).not.toHaveBeenCalled();
    });

    it('should not offer a widget that hide_landing_widgets lists', () => {
        saved_layout.set({ order: ['world_clock', 'favourites'], hidden: [] });
        hide_widgets.set(['world_clock', 'desk_week']);
        spectator.detectChanges();
        expect(widgetIds()).toEqual([
            'favourites',
            'available_now',
            'quick_actions',
            'colleagues',
        ]);
        spectator.click('button[name="edit-home-layout"]');
        // Focus Timer is the only widget that is left to add
        expect(
            spectator.queryAll('button[name="add-home-widget"]').length,
        ).toBe(5);
    });

    it('should use the default layout when hide_landing_customise is set', () => {
        saved_layout.set({ order: ['colleagues'], hidden: ['favourites'] });
        hide_customise.set(true);
        spectator.detectChanges();
        expect(spectator.query('button[name="edit-home-layout"]')).toBeFalsy();
        expect(widgetIds()).toEqual([
            'available_now',
            'quick_actions',
            'desk_week',
            'favourites',
            'colleagues',
        ]);
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
