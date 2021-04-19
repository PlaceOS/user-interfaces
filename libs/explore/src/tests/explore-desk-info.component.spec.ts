import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MAP_FEATURE_DATA } from '@placeos/components';
import { set } from 'date-fns';

import { ExploreDeskInfoComponent } from '../lib/explore-desk-info.component';

describe('ExploreDeskInfoComponent', () => {
    let spectator: Spectator<ExploreDeskInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreDeskInfoComponent,
        providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show details', () => {
        expect('[map-id]').toContainText('');
        expect('[user]').not.toExist();
        expect('[start]').not.toExist();
        (spectator.component as any).map_id = 'Test Desk';
        (spectator.component as any).user = 'Jim';
        (spectator.component as any).start = set(new Date(), {
            hours: 12,
            minutes: 0,
        });
        (spectator.component as any).end = set(new Date(), {
            hours: 14,
            minutes: 0,
        });
        spectator.detectChanges();
        expect('[map-id]').toContainText('Test Desk');
        expect('[user]').toContainText('Jim');
        expect('[start]').toContainText('12:00 PM');
        expect('[start]').toContainText(' 2:00 PM');
    });
});
