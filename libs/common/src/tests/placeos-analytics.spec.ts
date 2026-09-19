import { Clipboard } from '@angular/cdk/clipboard';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    ActivatedRoute,
    NavigationEnd,
    NavigationStart,
    Router,
} from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { TraceService } from '@sentry/angular';
import { Subject } from 'rxjs';

import { GoogleAnalyticsService } from '../lib/google-analytics.service';
import { HotkeysService } from '../lib/hotkeys.service';
import { LocaleService } from '../lib/locale.service';
import { MapsPeopleService } from '../lib/mapspeople.service';
import { OrganisationService } from '../lib/org/organisation.service';
import { PlaceOS_Service } from '../lib/placeos.service';
import { SettingsService } from '../lib/settings.service';
import { StaffUser } from '../lib/types/user.class';
import { setCurrentUser } from '../lib/user-state';

describe('PlaceOS analytics startup', () => {
    let service: PlaceOS_Service;
    let events: Subject<NavigationStart | NavigationEnd>;
    let router: { events: typeof events; navigated: boolean; url: string };
    let settings: Record<string, unknown>;
    let analytics: {
        enabled: boolean;
        init: ReturnType<typeof vi.fn>;
        load: ReturnType<typeof vi.fn>;
        setUser: ReturnType<typeof vi.fn>;
        page: ReturnType<typeof vi.fn>;
    };

    beforeEach(() => {
        events = new Subject();
        router = { events, navigated: false, url: '/' };
        settings = { 'app.analytics.tracking_id': 'G-TEST123' };
        analytics = {
            enabled: true,
            init: vi.fn(),
            load: vi.fn(),
            setUser: vi.fn(),
            page: vi.fn(),
        };
        setCurrentUser(new StaffUser({ id: 'test-user' }));
        TestBed.configureTestingModule({
            providers: [
                PlaceOS_Service,
                { provide: GoogleAnalyticsService, useValue: analytics },
                { provide: Router, useValue: router },
                {
                    provide: SettingsService,
                    useValue: { get: (key: string) => settings[key] },
                },
                ...[
                    Clipboard,
                    MatSnackBar,
                    ActivatedRoute,
                    SwUpdate,
                    TraceService,
                    HotkeysService,
                    LocaleService,
                    MapsPeopleService,
                    OrganisationService,
                ].map((provide) => ({ provide, useValue: {} })),
            ],
        });
        service = TestBed.inject(PlaceOS_Service);
    });

    afterEach(() => {
        service.ngOnDestroy();
        events.complete();
    });

    it('does not initialise or track routes when disabled with a tracking ID', () => {
        settings['app.analytics.enabled'] = false;
        service['_initAnalytics']();
        events.next(new NavigationEnd(1, '/home', '/home'));

        expect(analytics.enabled).toBe(false);
        expect(analytics.init).not.toHaveBeenCalled();
        expect(analytics.load).not.toHaveBeenCalled();
        expect(analytics.setUser).not.toHaveBeenCalled();
        expect(analytics.page).not.toHaveBeenCalled();
    });

    it('waits for the first successful navigation and uses the redirected URL', () => {
        service['_initAnalytics']();
        events.next(new NavigationStart(1, '/'));
        expect(analytics.page).not.toHaveBeenCalled();

        events.next(new NavigationEnd(1, '/', '/landing'));
        expect(analytics.page).toHaveBeenCalledExactlyOnceWith('/landing');
    });

    it('tracks a completed initial navigation and subsequent route changes', () => {
        router.navigated = true;
        router.url = '/landing';
        service['_initAnalytics']();
        expect(analytics.page).toHaveBeenCalledExactlyOnceWith('/landing');

        events.next(new NavigationEnd(2, '/book', '/book/rooms'));
        expect(analytics.page.mock.calls).toEqual([
            ['/landing'],
            ['/book/rooms'],
        ]);
    });

    it('keeps the GTM initial page view in load', () => {
        settings['app.analytics.tracking_id'] = 'GTM-TEST123';
        router.navigated = true;
        service['_initAnalytics']();

        expect(analytics.load).toHaveBeenCalledExactlyOnceWith('GTM-TEST123');
        expect(analytics.page).not.toHaveBeenCalled();
    });
});
