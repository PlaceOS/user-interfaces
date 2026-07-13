import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { OrganisationService, SettingsService } from '@placeos/common';
import { EventPanelComponent } from '../app/event-panel.component';
import { PanelStateService } from '../app/panel-state.service';

describe('EventPanelComponent', () => {
    let spectator: SpectatorRouting<EventPanelComponent>;
    const current = signal<any>(null);
    const next = signal<any>(null);
    const space = signal<any>(null);
    const settings = signal<any>({});
    const state_setting = vi.fn();

    const createComponent = createRoutingFactory({
        component: EventPanelComponent,
        params: { system_id: 'sys-1' },
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    current,
                    next,
                    space,
                    settings,
                    setting: state_setting,
                    system: '',
                },
            },
            MockProvider(SettingsService, {
                get: vi.fn(() => undefined),
                overrideCssVariable: vi.fn(),
                theme: false,
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal(null),
                waitUntilInitialised: vi.fn().mockResolvedValue(true),
            } as any),
        ],
    });

    beforeEach(() => {
        current.set(null);
        next.set(null);
        space.set(null);
        settings.set({});
        state_setting.mockReset();
        state_setting.mockReturnValue(undefined);
        spectator = createComponent();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

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

    it('should show a placeholder when there is no current booking', () => {
        current.set(null);
        spectator.detectChanges();
        expect(spectator.query('h2.line-clamp-5')).toBeFalsy();
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

    it('should hide the QR check-in tag when the hide_qr flag is set', () => {
        spectator.detectChanges();
        spectator.component.hide_qr.set(true);
        spectator.detectChanges();
        expect(spectator.query('button[book-tag]')).toBeFalsy();
    });

    it('should toggle the QR display when the tag is clicked', () => {
        spectator.detectChanges();
        expect(spectator.component.show_qr()).toBe(false);
        spectator.component.toggleQRShow();
        expect(spectator.component.show_qr()).toBe(true);
        spectator.component.toggleQRShow();
        expect(spectator.component.show_qr()).toBe(false);
    });

    it('should generate a QR code from the settings on init', () => {
        spectator.detectChanges();
        expect(spectator.component.qr_code()).toContain('data:image/svg+xml');
    });

    it('should use the custom QR url when provided', () => {
        settings.set({ custom_qr_url: 'https://example.com/checkin' });
        spectator.detectChanges();
        expect(spectator.component.qr_code()).toContain('data:image/svg+xml');
    });

    it('should bind the active system from the route parameter on init', async () => {
        spectator.detectChanges();
        await spectator.component.ngOnInit();
        expect(spectator.component.system_id()).toBe('sys-1');
        const state = spectator.inject(PanelStateService, true);
        expect(state.system).toBe('sys-1');
    });

    it('should honour the hide_qr_code query parameter on init', async () => {
        spectator.setRouteQueryParam('hide_qr_code', 'true');
        await spectator.component.ngOnInit();
        spectator.detectChanges();
        expect(spectator.component.hide_qr()).toBe(true);
    });
});
