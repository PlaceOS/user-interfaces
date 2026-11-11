import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { OrganisationService, SettingsService } from '@placeos/common';
import { EventPanelComponent } from '../app/event-panel.component';
import { PanelStateService } from '../app/panel-state.service';

describe('EventPanelComponent', () => {
    let spectator: SpectatorRouting<EventPanelComponent>;
    const current = signal<unknown>(null);
    const next = signal<unknown>(null);
    const space = signal<unknown>(null);
    const settings = signal<unknown>({});
    const state_setting = vi.fn();
    const settings_get = vi.fn((_key: string): unknown => undefined);

    const createComponent = createRoutingFactory({
        component: EventPanelComponent,
        params: { system_id: 'sys-1' },
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    time_format: signal('h:mm a'),
                    current,
                    next,
                    space,
                    settings,
                    setting: state_setting,
                    system: '',
                },
            },
            MockProvider(SettingsService, {
                get: settings_get as SettingsService['get'],
                overrideCssVariable: vi.fn(),
            }),
            MockProvider(OrganisationService, {
                active_building: signal(null),
                waitUntilInitialised: vi.fn().mockResolvedValue(true),
            }),
        ],
    });

    beforeEach(() => {
        current.set(null);
        next.set(null);
        space.set(null);
        settings.set({});
        state_setting.mockReset();
        state_setting.mockReturnValue(undefined);
        settings_get.mockImplementation(() => undefined);
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

    it('should display the space name in the header', () => {
        space.set({ display_name: 'Meeting Room 1' });
        spectator.detectChanges();
        expect('header h1').toContainText('Meeting Room 1');
    });

    it('should fall back to the space name property when there is no display name', () => {
        space.set({ name: 'Fallback Room' });
        spectator.detectChanges();
        expect('header h1').toContainText('Fallback Room');
    });

    it('should display the current booking details', () => {
        current.set({
            title: 'Standup',
            event_end: 1_700_000_000,
            organiser: { name: 'Jane Doe' },
            body: 'agenda',
        });
        spectator.detectChanges();
        expect('h2.line-clamp-5').toContainText('Standup');
        expect(spectator.fixture.nativeElement.textContent).toContain(
            'Jane Doe',
        );
    });

    it('should hide meeting host details when configured', () => {
        state_setting.mockImplementation((key: string) =>
            key === 'hide_meeting_details' ? true : undefined,
        );
        current.set({
            title: 'Standup',
            event_end: 1_700_000_000,
            organiser: { name: 'Jane Doe' },
            body: 'agenda',
        });
        spectator.detectChanges();
        expect('h2.line-clamp-5').toContainText('Standup');
        expect(spectator.fixture.nativeElement.textContent).not.toContain(
            'Jane Doe',
        );
        expect(spectator.fixture.nativeElement.textContent).not.toContain(
            'agenda',
        );
    });

    it('should hide current and upcoming meeting titles when configured', () => {
        state_setting.mockImplementation((key: string) =>
            key === 'hide_meeting_title' ? true : undefined,
        );
        current.set({
            title: 'Private current meeting',
            event_end: 1_700_000_000,
        });
        next.set({
            title: 'Private upcoming meeting',
            event_start: 1_700_000_000,
        });
        spectator.detectChanges();
        expect(spectator.fixture.nativeElement.textContent).not.toContain(
            'Private current meeting',
        );
        expect(spectator.fixture.nativeElement.textContent).not.toContain(
            'Private upcoming meeting',
        );
    });

    it('should display the next booking title', () => {
        next.set({ title: 'Retro', event_start: 1_700_000_000 });
        spectator.detectChanges();
        expect('h2.line-clamp-4').toContainText('Retro');
    });

    it('should show the QR check-in tag when check-in is enabled', () => {
        state_setting.mockImplementation((key: string) =>
            key === 'show_qr_code' ? true : undefined,
        );
        spectator.detectChanges();
        expect(spectator.query('button[book-tag]')).toBeTruthy();
    });

    it('should hide the QR check-in tag when check-in is disabled', () => {
        state_setting.mockImplementation((key: string) =>
            key === 'show_qr_code' ? false : undefined,
        );
        spectator.detectChanges();
        expect(spectator.query('button[book-tag]')).toBeFalsy();
    });

    it('should hide the QR code again a minute after it opens', () => {
        vi.useFakeTimers();
        spectator.component.toggleQRShow();
        expect(spectator.component.show_qr()).toBe(true);
        vi.advanceTimersByTime(60 * 1000);
        expect(spectator.component.show_qr()).toBe(false);
    });

    it('should encode the custom QR url instead of the check-in page', () => {
        const default_code = spectator.component.qr_code();
        settings.set({ custom_qr_url: 'https://example.com/checkin' });
        const custom_code = spectator.component.qr_code();
        expect(custom_code).toContain('data:image/svg+xml');
        expect(custom_code).not.toBe(default_code);
    });

    it('should bind the active system from the route parameter on init', async () => {
        spectator.detectChanges();
        await spectator.component.ngOnInit();
        expect(spectator.component.system_id()).toBe('sys-1');
        const state = spectator.inject(PanelStateService, true);
        expect(state.system).toBe('sys-1');
    });

    it('should hide the QR check-in tag with the hide_qr_code query parameter', async () => {
        spectator.setRouteQueryParam('hide_qr_code', 'true');
        await spectator.component.ngOnInit();
        spectator.detectChanges();
        expect(spectator.query('button[book-tag]')).toBeFalsy();
    });

    it.each(['false', '0'])(
        'should keep the QR code when hide_qr_code is %s',
        async (value) => {
            spectator.setRouteQueryParam('hide_qr_code', value);
            await spectator.component.ngOnInit();
            expect(spectator.component.hide_qr()).toBe(false);
        },
    );
});
