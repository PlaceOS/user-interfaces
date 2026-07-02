import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MAP_FEATURE_DATA } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ParkingLocationPinComponent } from '../lib/parking-select-modal/parking-location-pin.component';

describe('ParkingLocationPinComponent', () => {
    let spectator: Spectator<ParkingLocationPinComponent>;
    let pin_data: any;

    const createComponent = createComponentFactory({
        component: ParkingLocationPinComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            { provide: MAP_FEATURE_DATA, useFactory: () => pin_data },
        ],
    });

    it('should create component', () => {
        pin_data = { selected: false };
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should render the unselected dot when not selected', () => {
        pin_data = { selected: false };
        spectator = createComponent();
        expect(spectator.component.selected()).toBe(false);
        expect(spectator.query('div.rounded-full')).toExist();
        expect(spectator.query('icon')).not.toExist();
    });

    it('should render the done icon when selected', () => {
        pin_data = { selected: true };
        spectator = createComponent();
        expect(spectator.component.selected()).toBe(true);
        expect(spectator.query('icon')).toExist();
        expect(spectator.query('div.rounded-full')).not.toExist();
    });

    it('should only treat strict true as selected', () => {
        pin_data = { selected: 'yes' };
        spectator = createComponent();
        expect(spectator.component.selected()).toBe(false);
    });
});
