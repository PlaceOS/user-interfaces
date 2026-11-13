import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { PointsOverviewComponent } from '../../app/points/points-overview.component';

describe('PointsOverviewComponent', () => {
    let spectator: Spectator<PointsOverviewComponent>;
    const KEY = 'PLACEOS.point_details';

    const createComponent = createComponentFactory({
        component: PointsOverviewComponent,
        detectChanges: false,
        overrideComponents: [
            [PointsOverviewComponent, { set: { template: '', imports: [] } }],
        ],
    });

    beforeEach(() => localStorage.clear());

    it('should apply stored point values over the defaults', () => {
        localStorage.setItem(KEY, JSON.stringify({ desk_checkin: 7 }));
        spectator = createComponent();

        expect(spectator.component.points()).toEqual({
            value: 0.1,
            desk_checkin: 7,
            room_checkin: 2,
            booking_cancel: 3,
            wellness_card: 1,
        });
    });

    it('should store a changed point value for the next visit', () => {
        spectator = createComponent();
        spectator.component.updatePoints('room_checkin', 5);

        expect(JSON.parse(localStorage.getItem(KEY))).toMatchObject({
            room_checkin: 5,
            desk_checkin: 2,
        });
        expect(createComponent().component.points().room_checkin).toBe(5);
    });
});
