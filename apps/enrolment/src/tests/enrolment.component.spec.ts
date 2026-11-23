import { formatDate } from '@angular/common';
import { signal } from '@angular/core';
import {
    ComponentFixtureAutoDetect,
    DeferBlockState,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { settingSignal, SettingsService } from '@placeos/common';
import { getUnixTime } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { type StubApi, startStubApi } from '@placeos/common/tests';
import { EnrolmentStateService } from '../app/enrolment-state.service';
import { EnrolmentComponent } from '../app/enrolment.component';

// A stub API answers the requests of the state service
vi.mock('@placeos/ts-client', { spy: true });

/** Token shaped the way `handleUserToken` expects: `u.e` guest, `u.r[0]` event */
function userToken() {
    const body = btoa(
        JSON.stringify({
            exp: getUnixTime(Date.now()) + 3600,
            u: { e: 'guest@example.com', r: ['event-1'] },
        }),
    )
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    return `header.${body}.signature`;
}

function param_map(params: Record<string, string>): unknown {
    return {
        has: (key: string) => Object.prototype.hasOwnProperty.call(params, key),
        get: (key: string) => (key in params ? params[key] : null),
        getAll: (key: string) => (key in params ? [params[key]] : []),
        get keys() {
            return Object.keys(params);
        },
    };
}

describe('EnrolmentComponent', () => {
    let spectator: Spectator<EnrolmentComponent>;
    let state: EnrolmentStateService;
    let api: StubApi;
    let params: BehaviorSubject<unknown>;
    let query_params: BehaviorSubject<unknown>;
    const theme = signal('light');

    const createComponent = createComponentFactory({
        component: EnrolmentComponent,
        providers: [
            MockProvider(SettingsService, {
                signal: vi.fn(() => signal(false)),
                theme_signal: theme,
            } as any),
            {
                provide: ActivatedRoute,
                useValue: {
                    get paramMap() {
                        return params;
                    },
                    get queryParamMap() {
                        return query_params;
                    },
                },
            },
            { provide: ComponentFixtureAutoDetect, useValue: false },
        ],
        detectChanges: false,
    });

    const text = () =>
        spectator.element.textContent?.replace(/\s+/g, ' ').trim() ?? '';

    beforeEach(() => {
        vi.useFakeTimers();
        theme.set('light');
        settingSignal('logo_dark').set({ src: 'assets/logo-dark.svg' });
        settingSignal('logo_light').set('assets/logo-light.svg');
        params = new BehaviorSubject(param_map({}));
        query_params = new BehaviorSubject(param_map({}));
        api = startStubApi();
        api.on('GET', '/api/staff/v1/guests/:id', () => ({}));
        api.on('GET', '/api/staff/v1/events/:id', () => ({}));
        spectator = createComponent();
        state = spectator.inject(EnrolmentStateService);
        spectator.detectChanges();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
        vi.unstubAllGlobals();
    });

    it('should show a loading message while details are being fetched', () => {
        expect(text()).toContain('Loading your details...');
        expect(spectator.query('mat-spinner')).toExist();
    });

    describe('view rendering', () => {
        beforeEach(() => state.setError(''));

        it('should render meeting details for the event view', () => {
            state.setView('event');
            spectator.detectChanges();

            expect(spectator.query('enrolment-event-details')).toExist();
        });

        it('should render the details form for the guest view', async () => {
            state.setView('guest');
            spectator.detectChanges();
            // The details form is a deferred block
            const [block] = await spectator.fixture.getDeferBlocks();
            await block.render(DeferBlockState.Complete);

            expect(spectator.query('enrolment-guest-confirm')).toExist();
        });

        it('should confirm the checkin for the complete view', () => {
            state.setView('complete');
            spectator.detectChanges();

            expect(text()).toContain('You are now checked in. See you soon');
        });

        it('should give the meeting time on the complete view once the meeting loads', async () => {
            const start = getUnixTime(Date.now()) + 3600;
            api.on('GET', '/api/staff/v1/guests/:id', () => ({
                id: 'guest@example.com',
                email: 'guest@example.com',
            }));
            api.on('GET', '/api/staff/v1/events/:id', () => ({
                id: 'event-1',
                event_start: start,
            }));
            state.setView('complete');
            query_params.next(param_map({ uid: userToken() }));
            for (let i = 0; i < 4; i++) {
                await vi.advanceTimersByTimeAsync(100);
                spectator.detectChanges();
            }

            const time = formatDate(start * 1000, 'shortTime', 'en-US').replace(
                /\s+/g,
                ' ',
            );
            expect(text()).toContain(`See you at ${time}`);
        });

        it.each(['error', 'not-a-view'])(
            'should render the error panel for the "%s" route view',
            (view) => {
                // Start elsewhere so only the route can select the error panel
                state.setView('event');
                params.next(param_map({ view }));
                spectator.detectChanges();

                expect(spectator.query('enrolment-error')).toExist();
                expect(
                    spectator.query('enrolment-event-details'),
                ).not.toExist();
            },
        );
    });

    describe('routing', () => {
        it('should take the active view from the route', () => {
            params.next(param_map({ view: 'guest' }));
            expect(state.view()).toBe('guest');
        });

        it('should leave the view alone when the route has no view', () => {
            state.setView('event');
            params.next(param_map({}));
            expect(state.view()).toBe('event');
        });

        it('should authenticate with the uid query parameter', () => {
            const token = userToken();
            query_params.next(param_map({ uid: token }));
            expect(api.fake.session.useToken).toHaveBeenCalledWith(
                token,
                expect.any(Number),
            );
        });

        it('should error when no uid arrives in time', () => {
            vi.advanceTimersByTime(5000);
            expect(state.error()).toBe('guest');
            expect(state.view()).toBe('error');
        });

        it('should not time out once a uid has been handled', () => {
            query_params.next(param_map({ uid: userToken() }));
            vi.advanceTimersByTime(5000);
            expect(state.error()).toBe('');
        });
    });

    describe('logo', () => {
        it('should use the dark logo for the light theme', () => {
            expect(spectator.query('img')?.getAttribute('src')).toBe(
                'assets/logo-dark.svg',
            );
        });

        it('should leave the logo empty when none is configured', () => {
            settingSignal('logo_dark').set(undefined);

            expect(spectator.component.logo()).toBe('');
        });

        it('should use the light logo for the dark theme', () => {
            theme.set('dark');
            spectator.detectChanges();

            expect(spectator.query('img')?.getAttribute('src')).toBe(
                'assets/logo-light.svg',
            );
        });
    });
});
