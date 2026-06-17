import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { PanelViewStatusComponent } from '../../app/new-panel/panel-view-status.component';
import { PanelStateService } from '../../app/panel-state.service';

describe('PanelViewStatusComponent', () => {
    let spectator: Spectator<PanelViewStatusComponent>;
    const status = signal('free');
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
                    setting: jest.fn(),
                },
            },
        ],
    });

    beforeEach(() => {
        status.set('free');
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
});
