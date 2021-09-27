import { fakeAsync } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { addMinutes } from 'date-fns';
import { BehaviorSubject } from 'rxjs';

import { PanelStateService } from '../../app/panel-state.service';
import { PanelTimelineComponent } from '../../app/panel/timeline.component';

const promiseTimeout = (delay: number = 300) =>
    new Promise<void>((rs) => setTimeout(() => rs(), delay));

describe('PanelTimelineComponent', () => {
    let spectator: Spectator<PanelTimelineComponent>;
    const createComponent = createComponentFactory({
        component: PanelTimelineComponent,
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    bookings: new BehaviorSubject([]),
                    newBooking: jest.fn(),
                },
            },
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show blocks', async () => {
        await promiseTimeout(200);
        spectator.detectChanges();
        expect('[block]').toHaveLength((12 * 60) / spectator.component.step);
    });

    it('should show hours', async () => {
        await promiseTimeout(200);
        spectator.detectChanges();
        expect('[block] p').toHaveLength(12);
    });

    it('should show blocks that are not free', async () => {
        expect('[block]').not.toHaveClass('bg-error');
        (spectator.inject(PanelStateService).bookings as any).next([
            { date: addMinutes(new Date(), 30).valueOf(), duration: 60 },
        ]);
        await promiseTimeout(200);
        spectator.detectChanges();
        expect('[block]').toHaveClass('bg-error');
    });

    it('should allow user to make bookings', async () => {
        const service = spectator.inject(PanelStateService);
        (service.bookings as any).next([
            { date: addMinutes(new Date(), 30).valueOf(), duration: 60 },
        ]);
        await promiseTimeout(200);
        spectator.detectChanges();
        spectator.click('[block].bg-error');
        expect(service.newBooking).not.toHaveBeenCalled();
        spectator.click('[block]');
        expect(service.newBooking).toHaveBeenCalled();
    });
});
