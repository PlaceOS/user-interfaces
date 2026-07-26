import { signal } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { getUnixTime } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import { EnrolmentStateService } from '../app/enrolment-state.service';
import { EnrolmentComponent } from '../app/enrolment.component';

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

function param_map(params: Record<string, string>): any {
    return {
        has: (key: string) =>
            Object.prototype.hasOwnProperty.call(params, key),
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
    let params: BehaviorSubject<any>;
    let query_params: BehaviorSubject<any>;
    let settings_map: Record<string, any>;
    let theme: string;

    const createComponent = createComponentFactory({
        component: EnrolmentComponent,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn((key: string) => settings_map[key]),
                signal: vi.fn(() => signal(false)),
                get theme() {
                    return theme;
                },
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
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
        theme = 'light';
        settings_map = {
            'app.logo_dark': { src: 'assets/logo-dark.svg' },
            'app.logo_light': { src: 'assets/logo-light.svg' },
        };
        params = new BehaviorSubject(param_map({}));
        query_params = new BehaviorSubject(param_map({}));
        (ts_client.get as any).mockReset();
        (ts_client.get as any).mockResolvedValue({});
        (ts_client.setToken as any).mockReset();
        spectator = createComponent();
        state = spectator.inject(EnrolmentStateService);
        spectator.detectChanges();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
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

        it('should render the details form for the guest view', () => {
            state.setView('guest');
            spectator.detectChanges();

            expect(spectator.query('enrolment-guest-confirm')).toExist();
        });

        it('should confirm the checkin for the complete view', () => {
            state.setView('complete');
            spectator.detectChanges();

            expect(text()).toContain('You are now checked in');
        });

        it('should render the error panel for any other view', () => {
            state.setView('error');
            spectator.detectChanges();

            expect(spectator.query('enrolment-error')).toExist();
        });
    });

    describe('routing', () => {
        it('should take the active view from the route', () => {
            params.next(param_map({ view: 'guest' }));
            expect(state.view()).toBe('guest');
        });

        it('should leave the view alone when the route has no view', () => {
            const view = state.view();
            params.next(param_map({}));
            expect(state.view()).toBe(view);
        });

        it('should authenticate with the uid query parameter', () => {
            const token = userToken();
            query_params.next(param_map({ uid: token }));
            expect(ts_client.setToken).toHaveBeenCalledWith(token);
        });

        it('should error when no uid arrives in time', () => {
            vi.advanceTimersByTime(5000);
            expect(state.error()).toBe('guest');
            expect(state.view()).toBe('error');
        });

        it('should not time out once a uid has been handled', () => {
            query_params.next(param_map({ uid: userToken() }));
            vi.advanceTimersByTime(5000);
            expect(state.error()).not.toBe('guest');
        });
    });

    describe('logo', () => {
        it('should use the dark logo for the light theme', () => {
            expect(spectator.query('img')?.getAttribute('src')).toBe(
                'assets/logo-dark.svg',
            );
        });

        it('should use the light logo for the dark theme', () => {
            theme = 'dark';
            spectator = createComponent();
            spectator.detectChanges();

            expect(spectator.query('img')?.getAttribute('src')).toBe(
                'assets/logo-light.svg',
            );
        });
    });
});
