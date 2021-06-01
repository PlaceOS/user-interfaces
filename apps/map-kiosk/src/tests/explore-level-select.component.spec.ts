import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import { ExploreStateService } from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';

import { ExploreLevelSelectComponent } from '../app/explore-level-select.component';

describe('ExploreLevelSelectComponent', () => {
    let spectator: Spectator<ExploreLevelSelectComponent>;
    const createComponent = createComponentFactory({
        component: ExploreLevelSelectComponent,
        providers: [
            {
                provide: ExploreStateService,
                useValue: {
                    level: of({ id: 'lvl-2' }),
                    setLevel: jest.fn(),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    initialised: of(true),
                    active_levels: of([
                        { id: 'lvl-1', name: 'Level 1' },
                        { id: 'lvl-2', name: 'Level 2' },
                    ]),
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow changing levels', () => {
        expect('button.active').toExist();
        expect('button.active').toContainText('Level 2');
        expect('button').toExist();
        const state = spectator.inject(ExploreStateService);
        expect(state.setLevel).not.toHaveBeenCalled();
        spectator.click('button');
        expect(state.setLevel).toHaveBeenCalledWith('lvl-1');
    });
});
