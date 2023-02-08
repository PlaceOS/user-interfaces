import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    IconComponent,
    ImageCarouselComponent,
    InteractiveMapComponent,
} from '@placeos/components';
import { Desk } from '@placeos/organisation';
import { MockComponent } from 'ng-mocks';
import { DeskDetailsComponent } from '../../lib/desk-select-modal/desk-details.component';

describe('DeskDetailsComponent', () => {
    let spectator: Spectator<DeskDetailsComponent>;
    const createComponent = createComponentFactory({
        component: DeskDetailsComponent,
        providers: [],
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
        spectator.setInput('desk', new Desk());
        spectator.detectChanges();
        expect('[empty]').not.toExist();
    });

    it('should allow favouriting a space', (done) => {
        spectator.setInput('desk', new Desk());
        spectator.detectChanges();
        spectator.component.toggleFav.subscribe(() => done());
        spectator.click('button[name="toggle-desk-favourite-details"]');
    });

    it('should show map', () => {
        expect('interactive-map').not.toExist();
        spectator.setInput('desk', new Desk());
        spectator.detectChanges();
        expect('interactive-map').toExist();
    });

    it('should show image carousel', () => {
        expect('image-carousel').not.toExist();
        spectator.setInput('desk', new Desk({ images: ['test.png'] }));
        spectator.detectChanges();
        expect('image-carousel').toExist();
    });

    it('should allow closing modal', (done) => {
        spectator.setInput('desk', new Desk());
        spectator.detectChanges();
        spectator.component.close.subscribe(() => done());
        spectator.click('button[name="close-desk-details"]');
    });
});
