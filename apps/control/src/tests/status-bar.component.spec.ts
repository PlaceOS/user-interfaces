import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { ControlStatusBarComponent } from '../app/status-bar.component';

describe('ControlStatusBarComponent', () => {
    let spectator: Spectator<ControlStatusBarComponent>;
    const createComponent = createComponentFactory(ControlStatusBarComponent);

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

});
