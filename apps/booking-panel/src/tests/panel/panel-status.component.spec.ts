import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { PanelViewStatusComponent } from '../../app/new-panel/panel-view-status.component';
import { PanelStateService } from '../../app/panel-state.service';

describe('PanelViewStatusComponent', () => {
    let spectator: Spectator<PanelViewStatusComponent>;
    const status = signal('free');
    const show_timeline = signal(false);
    const timeline_position = signal('floating-left');
    const setting = vi.fn<(name: string) => any>((name) => {
        if (name === 'show_timeline') return show_timeline();
        if (name === 'timeline_position') return timeline_position();
        return false;
    });
    const createComponent = createComponentFactory({
        component: PanelViewStatusComponent,
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    status,
                    current: signal(null),
                    next: signal(null),
                    bookings: signal([]),
                    settings: signal({}),
                    setting,
                },
            },
        ],
    });

    beforeEach(() => {
        status.set('free');
        show_timeline.set(false);
        timeline_position.set('floating-left');
        setting.mockClear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show pending status', () => {
        status.set('pending');
        spectator.detectChanges();
        expect('div.bg-warning').toExist();
    });

    it('should show free status', () => {
        status.set('free');
        spectator.detectChanges();
        expect('div.bg-success').toExist();
    });

    it('should show busy status', () => {
        status.set('busy');
        spectator.detectChanges();
        expect('div.bg-error').toExist();
    });

    it('should reserve space for the floating timeline', async () => {
        show_timeline.set(true);
        await spectator.fixture.whenStable();

        const action = spectator.query<HTMLElement>(
            'div.absolute.inset-x-0.top-0',
        );
        expect(action.style.paddingLeft).toBe('9rem');
    });

    it('should reserve space for the floating bottom timeline', async () => {
        show_timeline.set(true);
        timeline_position.set('floating-bottom');
        await spectator.fixture.whenStable();

        const layout = spectator.query<HTMLElement>('[status-layout]');
        expect(layout.style.paddingBottom).toBe('7rem');
    });
});
