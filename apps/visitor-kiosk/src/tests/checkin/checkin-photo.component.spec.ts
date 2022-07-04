import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { CheckinPhotoComponent } from '../../app/checkin/checkin-photo.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';
import { TakePhotoComponent } from '../../app/components/take-photo.component';

describe('CheckinPhotoComponent', () => {
    let spectator: SpectatorRouting<CheckinPhotoComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinPhotoComponent,
        providers: [
            {
                provide: CheckinStateService,
                useValue: { event: of({}), guest: of({}) },
            },
        ],
        declarations: [MockComponent(TakePhotoComponent), MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
