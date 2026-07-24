import { signal } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';

import { PanelViewDetailsComponent } from '../../app/new-panel/panel-view-details.component';
import { PanelViewStatusComponent } from '../../app/new-panel/panel-view-status.component';
import { PanelViewTimelineComponent } from '../../app/new-panel/panel-view-timeline.component';
import { PanelViewComponent } from '../../app/new-panel/panel-view.component';
import { PanelStateService } from '../../app/panel-state.service';

describe('PanelViewComponent', () => {
    let spectator: SpectatorRouting<PanelViewComponent>;
    const settings = signal<Record<string, any>>({});
    const setting = vi.fn<(name: string) => any>((name) => settings()[name]);
    const createComponent = createRoutingFactory({
        component: PanelViewComponent,
        params: { system_id: 'a-system' },
        declarations: [
            mockComponent(PanelViewDetailsComponent),
            mockComponent(PanelViewStatusComponent),
            mockComponent(PanelViewTimelineComponent),
        ],
        componentProviders: [
            {
                provide: PanelStateService,
                useValue: {
                    space: signal(null),
                    setting,
                    system: '',
                },
            },
        ],
    });

    beforeEach(() => {
        settings.set({});
        setting.mockClear();
        localStorage.setItem('PLACEOS.BOOKINGS.system', 'a-system');
        spectator = createComponent();
    });

    afterEach(() => localStorage.clear());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

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
});
