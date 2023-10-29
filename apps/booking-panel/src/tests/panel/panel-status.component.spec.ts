import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BehaviorSubject } from 'rxjs';

import { PanelStateService } from '../../app/panel-state.service';
import { PanelStatusComponent } from '../../app/panel/panel-status.component';

describe('BookingPanelComponent', () => {
    let spectator: Spectator<PanelStatusComponent>;
    const createComponent = createComponentFactory({
        component: PanelStatusComponent,
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    settings: new BehaviorSubject({ status: 'not-bookable' }),
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show not bookable status', () => {
        const service = spectator.inject(PanelStateService);
        (service.settings as any).next({ status: 'not-bookable' });
        spectator.detectChanges();
        expect('[status]').toHaveClass('bg-base-200');
    });

    it('should show pending status', () => {
        const service = spectator.inject(PanelStateService);
        (service.settings as any).next({ status: 'pending' });
        spectator.detectChanges();
        expect('[status]').toHaveClass('bg-warning');
    });

    it('should show free status', () => {
        const service = spectator.inject(PanelStateService);
        (service.settings as any).next({ status: 'free' });
        spectator.detectChanges();
        expect('[status]').toHaveClass('bg-success');
    });

    it('should show busy status', () => {
        const service = spectator.inject(PanelStateService);
        (service.settings as any).next({ status: 'busy' });
        spectator.detectChanges();
        expect('[status]').toHaveClass('bg-error');
    });
});
