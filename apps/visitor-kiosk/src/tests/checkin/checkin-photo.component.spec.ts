import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { CheckinPhotoComponent } from '../../app/checkin/checkin-photo.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';
import { TakePhotoComponent } from '../../app/components/take-photo.component';

describe('CheckinPhotoComponent', () => {
    let spectator: Spectator<CheckinPhotoComponent>;
    const createComponent = createComponentFactory({
        component: CheckinPhotoComponent,
        providers: [
            {
                provide: CheckinStateService,
                useValue: { event: of({}), guest: of({}) },
            },
        ],
        declarations: [MockComponent(TakePhotoComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });
});
