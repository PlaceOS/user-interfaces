import { fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { MAP_FEATURE_DATA } from '../lib/interactive-map.component';
import { MapPinComponent } from '../lib/map-pin.component';

describe('MapPinComponent', () => {
    let spectator: Spectator<MapPinComponent>;
    const createComponent = createComponentFactory({
        component: MapPinComponent,
        providers: [
            { provide: MAP_FEATURE_DATA, useValue: { message: 'Test' } },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show a pin SVG', fakeAsync(() => {
        spectator.component.ngOnInit();
        expect('[name="pin"]').not.toExist();
        spectator.tick(400);
        expect('[name="pin"]').toExist();
        spectator.tick(700);
    }));

    it('should show a message', fakeAsync(() => {
        spectator.component.ngOnInit();
        expect('[name="message"]').not.toExist();
        spectator.tick(1100);
        expect('[name="message"]').toExist();
        expect('[name="message"]').toContainText('Test');
    }));

    it('should allow for actions on pin', (done) => {
        (spectator.component as any).action = () => done();
        spectator.component.show = true;
        spectator.detectChanges();
        spectator.query('[name="pin"]').dispatchEvent(new Event('click'));
    });
});
