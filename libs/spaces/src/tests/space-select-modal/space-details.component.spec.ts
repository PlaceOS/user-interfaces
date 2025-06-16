import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { OrganisationService } from '@placeos/organisation';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { SpaceDetailsComponent } from '../../lib/space-select-modal/space-details.component';
import { Space } from '../../lib/space.class';

describe('SpaceDetailsComponent', () => {
    let spectator: Spectator<SpaceDetailsComponent>;
    const createComponent = createComponentFactory({
        component: SpaceDetailsComponent,
        providers: [
            {
                provide: OrganisationService,
                useValue: { buildings: [], levelWithID: jest.fn() },
            },
        ],
        declarations: [
            MockComponent(ImageCarouselComponent),
            MockComponent(IconComponent),
            MockComponent(InteractiveMapComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show empty state', () => {
        expect('[empty]').toExist();
        spectator.setInput('space', new Space());
        spectator.detectChanges();
        expect('[empty]').not.toExist();
    });

    it('should allow toggling the space', () => {
        spectator.setInput('space', new Space());
        spectator.detectChanges();
    });

    it('should allow favouriting a space', (done) => {
        spectator.setInput('space', new Space());
        spectator.detectChanges();
        spectator.component.toggleFav.subscribe(() => done());
        spectator.click('button[name="toggle-space-favourite-details"]');
    });

    it('should show map', () => {
        expect('interactive-map').not.toExist();
        spectator.setInput('space', new Space());
        spectator.detectChanges();
        expect('interactive-map').toExist();
    });
});
