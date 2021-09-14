import { fakeAsync } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { getUnixTime, subMinutes } from 'date-fns';
import { of } from 'rxjs';

import { MAP_FEATURE_DATA } from '../lib/interactive-map.component';
import { MapRadiusComponent } from '../lib/map-radius.component';

describe('MapRadiusComponent', () => {
    let spectator: Spectator<MapRadiusComponent>;
    const createComponent = createComponentFactory({
        component: MapRadiusComponent,
        providers: [
            { 
                provide: MAP_FEATURE_DATA, 
                useValue: { 
                    message: 'Test', 
                    zoom: of(1) 
                } 
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show a radius circle', fakeAsync(() => {
        spectator.component.ngOnInit();
        expect('[radius]').not.toExist();
        spectator.tick(400);
        expect('[radius]').toExist();

        spectator.tick(700);
    }));

    it('should show a message', fakeAsync(() => {
        spectator.component.ngOnInit();
        expect('[message]').not.toExist();
        spectator.tick(1100);
        expect('[message]').toExist();
        expect('[message]').toContainText('Test');
    }));

    it('should show a last seen if set', fakeAsync(() => {
        spectator.component.ngOnInit();
        spectator.tick(1100);
        (spectator.component as any).last_seen = getUnixTime(
            subMinutes(new Date(), 60)
        );
        expect('[message] span').not.toExist();
        spectator.detectChanges();
        expect('[message] span').toExist();
        expect('[message] span').toContainText('1 hour ago');
    }));
});
