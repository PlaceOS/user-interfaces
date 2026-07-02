import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SpaceLocationPinComponent } from '../../lib/space-select-modal/space-location-pin.component';

describe('SpaceLocationPinComponent', () => {
    let spectator: Spectator<SpaceLocationPinComponent>;
    const data = { selected: false, active: false };
    const createComponent = createComponentFactory({
        component: SpaceLocationPinComponent,
        providers: [{ provide: MAP_FEATURE_DATA, useValue: data }],
        declarations: [mockComponent(IconComponent)],
    });

    beforeEach(() => {
        data.selected = false;
        data.active = false;
    });

    it('should show an unselected pin by default', () => {
        spectator = createComponent();
        expect(spectator.component.selected()).toBe(false);
        expect(spectator.component.color()).toBe('#309251');
    });

    it('should highlight selected pins', () => {
        data.selected = true;
        spectator = createComponent();
        expect(spectator.component.selected()).toBe(true);
        expect(spectator.component.color()).toBe('#D32F2F');
    });

    it('should prioritise the active state colour', () => {
        data.selected = true;
        data.active = true;
        spectator = createComponent();
        expect(spectator.component.color()).toBe('#F4511E');
    });
});
