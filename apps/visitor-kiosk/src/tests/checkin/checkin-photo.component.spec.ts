import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';

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
                useValue: { event: signal({}), guest: signal({}) },
            },
        ],
        declarations: [
            mockComponent(TakePhotoComponent),
            mockComponent(IconComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
