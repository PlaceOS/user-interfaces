import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BehaviorSubject } from 'rxjs';

import { PanelStateService } from '../../app/panel-state.service';
import { PanelViewStatusComponent } from '../../app/new-panel/panel-view-status.component';

describe('PanelViewStatusComponent', () => {
    let spectator: Spectator<PanelViewStatusComponent>;
    const createComponent = createComponentFactory({
        component: PanelViewStatusComponent,
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    status: new BehaviorSubject('free'),
                    current: new BehaviorSubject(null),
                    next: new BehaviorSubject(null),
                    bookings: new BehaviorSubject([]),
                    settings: new BehaviorSubject({}),
                    setting: jest.fn(),
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show pending status', () => {
        const service = spectator.inject(PanelStateService);
        (service.status as any).next('pending');
        spectator.detectChanges();
        expect('div.bg-warning').toExist();
    });

    it('should show free status', () => {
        const service = spectator.inject(PanelStateService);
        (service.status as any).next('free');
        spectator.detectChanges();
        expect('div.bg-success').toExist();
    });

    it('should show busy status', () => {
        const service = spectator.inject(PanelStateService);
        (service.status as any).next('busy');
        spectator.detectChanges();
        expect('div.bg-error').toExist();
    });
});
