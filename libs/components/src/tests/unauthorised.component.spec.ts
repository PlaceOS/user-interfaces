import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { UnauthorisedComponent } from '../lib/unauthorised.component';

describe('UnauthorisedComponent', () => {
    let spectator: Spectator<UnauthorisedComponent>;
    const createComponent = createComponentFactory(UnauthorisedComponent);

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
