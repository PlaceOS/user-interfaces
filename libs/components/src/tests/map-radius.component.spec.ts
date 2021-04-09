import { fakeAsync } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { getUnixTime, subMinutes } from 'date-fns';

import { MAP_FEATURE_DATA } from '../lib/interactive-map.component';
import { MapRadiusComponent } from '../lib/map-radius.component';

describe('MapRadiusComponent', () => {
    let spectator: Spectator<MapRadiusComponent>;
    const createComponent = createComponentFactory({
        component: MapRadiusComponent,
        providers: [
            { provide: MAP_FEATURE_DATA, useValue: { message: 'Test' } },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show a radius circle', fakeAsync(() => {
        spectator.component.ngOnInit();
        expect('[name="radius"]').not.toExist();
        spectator.tick(400);
        expect('[name="radius"]').toExist();
        spectator.tick(700);
    }));

    it('should show a message', fakeAsync(() => {
        spectator.component.ngOnInit();
        expect('[name="message"]').not.toExist();
        spectator.tick(1100);
        expect('[name="message"]').toExist();
        expect('[name="message"]').toContainText('Test');
    }));

    it('should show a last seen if set', fakeAsync(() => {
        spectator.component.ngOnInit();
        spectator.tick(1100);
        (spectator.component as any).last_seen = getUnixTime(
            subMinutes(new Date(), 60)
        );
        expect('[name="message"] span').not.toExist();
        spectator.detectChanges();
        expect('[name="message"] span').toExist();
        expect('[name="message"] span').toContainText('1 hour ago');
    }));
});
