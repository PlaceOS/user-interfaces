import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '@placeos/components';

import { ExploreZoomControlComponent } from '../lib/explore-zoom-control.component';
import { ExploreStateService } from '../lib/explore-state.service';

describe('ExploreZoomControlComponent', () => {
    let spectator: Spectator<ExploreZoomControlComponent>;
    const createComponent = createComponentFactory({
        component: ExploreZoomControlComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: ExploreStateService,
                useValue: {
                    setPositions: jest.fn(),
                    positions: { zoom: 1, center: { x: 0.5, y: 0.5 } },
                },
            },
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        (spectator.inject(ExploreStateService).setPositions as any).mockReset();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow zooming in', () => {
        const state = spectator.inject(ExploreStateService);
        expect(state.setPositions).not.toHaveBeenCalled();
        spectator.click('button[z-in]');
        expect(state.setPositions).toHaveBeenCalledWith(1.2, {
            x: 0.5,
            y: 0.5,
        });
    });

    it('should allow zooming out', () => {
        const state = spectator.inject(ExploreStateService);
        (state as any).positions = { zoom: 8, center: { x: 0.25, y: 0.25 } };
        expect(state.setPositions).not.toHaveBeenCalled();
        spectator.click('button[z-out]');
        expect(state.setPositions).toHaveBeenCalledWith(8 / 1.2, {
            x: 0.25,
            y: 0.25,
        });
    });

    it('should allow resetting zoom and position', () => {
        const state = spectator.inject(ExploreStateService);
        (state as any).positions = { zoom: 8, center: { x: 0, y: 0 } };
        expect(state.setPositions).not.toHaveBeenCalled();
        spectator.click('button[reset]');
        expect(state.setPositions).toHaveBeenCalledWith(1, { x: 0.5, y: 0.5 });
    });
});
