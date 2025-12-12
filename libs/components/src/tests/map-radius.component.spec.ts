import { fakeAsync } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { getUnixTime, subMinutes } from 'date-fns';
import { of } from 'rxjs';

import { MAP_FEATURE_DATA } from '@placeos/common';
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
                    zoom$: of(1),
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show a radius circle', fakeAsync(() => {
        spectator.component.show.set(false);
        spectator.detectChanges();
        expect('[radius]').not.toExist();
        spectator.component.show.set(true);
        spectator.detectChanges();
        expect('[radius]').toExist();
    }));

    it('should show a message', fakeAsync(() => {
        spectator.component.show.set(true);
        spectator.component.show_message.set(false);
        spectator.detectChanges();
        expect('[message]').not.toExist();
        spectator.component.show_message.set(true);
        spectator.detectChanges();
        expect('[message]').toExist();
        expect('[message]').toContainText('Test');
    }));

    it('should show a last seen if set', fakeAsync(() => {
        spectator.component.show.set(true);
        spectator.component.show_message.set(true);
        spectator.detectChanges();
        spectator.component.last_seen.set(
            getUnixTime(subMinutes(new Date(), 60)),
        );
        spectator.detectChanges();
        expect('[message] span').toExist();
        expect('[message] span').toContainText('1 hour ago');
    }));
});
