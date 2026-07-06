import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

import { MisconfiguredComponent } from '../lib/misconfigured.component';

describe('MisconfiguredComponent', () => {
    let spectator: Spectator<MisconfiguredComponent>;
    const createComponent = createComponentFactory(MisconfiguredComponent);

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
