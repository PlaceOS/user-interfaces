import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MAP_FEATURE_DATA } from '@placeos/components';
import { Space } from '@placeos/spaces';

import { ExploreSpaceInfoComponent } from '../lib/explore-space-info.component';

describe('ExploreSpaceInfoComponent', () => {
    let spectator: Spectator<ExploreSpaceInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreSpaceInfoComponent,
        providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show space name', () => {
        expect('h4').not.toContainText('Space One');
        (spectator.component as any).space = new Space({
            name: 'Space One',
        });
        spectator.detectChanges();
        expect('h4').toContainText('Space One');
    });

    it('should show capacity', () => {
        expect('[capacity]').not.toContainText('Space One');
        (spectator.component as any).space = new Space({
            capacity: 37,
        });
        spectator.detectChanges();
        expect('[capacity]').toContainText('37');
    });

    it('should show status', () => {
        (spectator.component as any).space = new Space();
        spectator.detectChanges();
        expect('[status]').not.toContainText('bookable');
        (spectator.component as any).status = 'bookable';
        spectator.detectChanges();
        expect('[status]').toContainText('bookable');
        expect('[status]').toHaveClass('bookable');
    });

    it('should show availability', () => {
        expect('[available-until]').not.toExist();
        (spectator.component as any).space = new Space();
        spectator.detectChanges();
        expect('[available-until]').toExist();
        (spectator.component as any).status = 'not-bookable';
        spectator.detectChanges();
        expect('[available-until]').not.toExist();
    });

    it('should show space features', () => {
        expect('[features]').not.toExist();
        (spectator.component as any).space = new Space({
            features: ['VidConf', 'Microphone'],
        });
        spectator.detectChanges();
        expect('[features]').toExist();
        expect('[features]').toContainText(['VidConf', 'Microphone']);
    });
});
