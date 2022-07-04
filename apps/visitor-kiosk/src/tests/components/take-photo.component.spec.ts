import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { TakePhotoComponent } from '../../app/components/take-photo.component';

describe('TakePhotoComponent', () => {
    let spectator: Spectator<TakePhotoComponent>;
    const createComponent = createComponentFactory({
        component: TakePhotoComponent,
        imports: [MatProgressSpinnerModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
