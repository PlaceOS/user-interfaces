import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { TopbarHeaderComponent } from '../app/topbar-header.component';

describe('TopbarHeaderComponent', () => {
    let spectator: Spectator<TopbarHeaderComponent>;
    const createComponent = createComponentFactory(TopbarHeaderComponent);

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

});
