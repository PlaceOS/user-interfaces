import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { MisconfiguredComponent } from '../lib/misconfigured.component';

describe('MisconfiguredComponent', () => {
    let spectator: Spectator<MisconfiguredComponent>;
    const createComponent = createComponentFactory(MisconfiguredComponent);

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
