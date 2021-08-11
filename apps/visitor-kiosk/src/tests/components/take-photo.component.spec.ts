import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { TakePhotoComponent } from '../../app/components/take-photo.component';

describe('TakePhotoComponent', () => {
    let spectator: Spectator<TakePhotoComponent>;
    const createComponent = createComponentFactory({
        component: TakePhotoComponent,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });
});
