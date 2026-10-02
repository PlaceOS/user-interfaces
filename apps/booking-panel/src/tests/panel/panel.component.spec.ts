import { signal } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';

import { PanelViewActionsComponent } from '../../app/new-panel/panel-view-actions.component';
import { PanelViewDetailsComponent } from '../../app/new-panel/panel-view-details.component';
import { PanelViewStatusComponent } from '../../app/new-panel/panel-view-status.component';
import { PanelViewTimelineComponent } from '../../app/new-panel/panel-view-timeline.component';
import { PanelViewComponent } from '../../app/new-panel/panel-view.component';
import { PanelStateService } from '../../app/panel-state.service';

describe('PanelViewComponent', () => {
    let spectator: SpectatorRouting<PanelViewComponent>;
    const settings = signal<Record<string, any>>({});
    const setting = vi.fn<(name: string) => any>((name) => settings()[name]);
    const clock = signal(Date.now());
    const offline_since = signal(0);
    let features: string[] = [];
    const status = signal('free');
    const app_settings: Record<string, string> = {};
    const createComponent = createRoutingFactory({
        component: PanelViewComponent,
        params: { system_id: 'a-system' },
        declarations: [
            mockComponent(PanelViewDetailsComponent),
            mockComponent(PanelViewStatusComponent),
            mockComponent(PanelViewTimelineComponent),
            mockComponent(PanelViewActionsComponent),
        ],
        componentProviders: [
            {
                provide: PanelStateService,
                useValue: {
                    space: signal(null),
                    setting,
                    clock,
                    offline_since,
                    hasFeature: (name: string) => features.includes(name),
                    appSetting: (key: string) => app_settings[key],
                    status,
                    system: '',
                },
            },
        ],
    });

    beforeEach(() => {
        settings.set({});
        clock.set(Date.now());
        offline_since.set(0);
        features = [];
        status.set('free');
        for (const key of Object.keys(app_settings)) delete app_settings[key];
        setting.mockClear();
        localStorage.setItem('PLACEOS.BOOKINGS.system', 'a-system');
        spectator = createComponent();
    });

    afterEach(() => localStorage.clear());

    it('should set system on route change', () => {
        const service = spectator.inject(PanelStateService, true);
        spectator.detectChanges();
        expect(service.system).toBe('a-system');
    });

    it.each(['left', 'right', 'bottom', 'floating-left', 'floating-bottom'])(
        'should render the timeline in the %s position',
        async (position) => {
            settings.set({ show_timeline: true, timeline_position: position });
            await spectator.fixture.whenStable();

            expect(`[timeline-${position}]`).toExist();
        },
    );

    it.each([
        ['left', 'p-4'],
        ['right', 'p-4'],
        ['bottom', 'px-6'],
        ['bottom', 'py-3'],
    ])(
        'should render the docked %s timeline without %s padding',
        async (position, padding_class) => {
            settings.set({ show_timeline: true, timeline_position: position });
            await spectator.fixture.whenStable();

            const timeline = spectator.query(`[timeline-${position}]`);
            expect(timeline).not.toHaveClass(padding_class);
        },
    );

    it.each(['left', 'right'])(
        'should render the docked %s timeline at the reduced width',
        async (position) => {
            settings.set({ show_timeline: true, timeline_position: position });
            await spectator.fixture.whenStable();

            const timeline = spectator.query(`[timeline-${position}]`);
            expect(timeline).toHaveClass('w-28');
            expect(timeline).not.toHaveClass('w-36');
        },
    );

    it.each(['left', 'right', 'bottom'])(
        'should render the docked %s timeline without rounded corners',
        async (position) => {
            settings.set({ show_timeline: true, timeline_position: position });
            await spectator.fixture.whenStable();

            expect(`[timeline-${position}]`).toHaveClass('docked');
        },
    );

    it.each(['bottom', 'floating-bottom'])(
        'should render the %s timeline horizontally',
        async (position) => {
            settings.set({ show_timeline: true, timeline_position: position });
            await spectator.fixture.whenStable();

            const timeline = spectator.debugElement.query(
                By.directive(PanelViewTimelineComponent),
            ).componentInstance as { horizontal: boolean };
            expect(timeline.horizontal).toBe(true);
        },
    );

    it('should show the version details by default', () => {
        spectator.detectChanges();
        expect(spectator.query('[version]').children.length).toBe(2);
    });

    it('should show hidden version details after a long press', () => {
        vi.useFakeTimers();
        features = ['hide_version'];
        spectator.detectChanges();
        expect(spectator.query('[version]').children.length).toBe(0);
        spectator.dispatchFakeEvent('[version]', 'pointerdown');
        vi.advanceTimersByTime(2000);
        spectator.detectChanges();
        expect(spectator.query('[version]').children.length).toBe(2);
        vi.useRealTimers();
    });

    it('should show the connection badge after 10 seconds offline', () => {
        features = ['connection_badge'];
        offline_since.set(clock() - 11 * 1000);
        spectator.detectChanges();
        expect('[connection-badge]').toExist();
    });

    it('should not show the connection badge when the feature is off', () => {
        offline_since.set(clock() - 11 * 1000);
        spectator.detectChanges();
        expect('[connection-badge]').not.toExist();
    });

    describe('night mode', () => {
        const night = new Date(2026, 6, 4, 22, 0).valueOf();
        const day = new Date(2026, 6, 4, 12, 0).valueOf();

        it('should dim the panel at night when enabled', () => {
            features = ['night_mode'];
            clock.set(night);
            spectator.detectChanges();
            expect('[night-overlay]').toExist();
        });

        it('should not dim during the day, when disabled or in a meeting', () => {
            clock.set(day);
            features = ['night_mode'];
            spectator.detectChanges();
            expect('[night-overlay]').not.toExist();

            clock.set(night);
            status.set('busy');
            spectator.detectChanges();
            expect('[night-overlay]').not.toExist();

            status.set('free');
            features = [];
            spectator.detectChanges();
            expect('[night-overlay]').not.toExist();
        });

        it('should use the configured night hours', () => {
            features = ['night_mode'];
            app_settings.night_start = '23:00';
            clock.set(night);
            spectator.detectChanges();
            expect('[night-overlay]').not.toExist();
        });

        it('should wake on tap without starting a booking', () => {
            features = ['night_mode'];
            clock.set(night);
            spectator.detectChanges();
            const action = vi.spyOn(spectator.component, 'action');
            spectator.click('[night-overlay]');
            clock.set(night + 5000);
            spectator.detectChanges();
            expect('[night-overlay]').not.toExist();
            expect(action).not.toHaveBeenCalled();
        });
    });

    it('should move the panel when burn-in protection is enabled', () => {
        features = ['burn_in_protection'];
        clock.set(2 * 60 * 1000);
        spectator.detectChanges();
        expect(spectator.element.style.getPropertyValue('--burn-in-x')).toBe(
            '2px',
        );
        expect(spectator.element.style.getPropertyValue('--burn-in-y')).toBe(
            '2px',
        );
    });
});
