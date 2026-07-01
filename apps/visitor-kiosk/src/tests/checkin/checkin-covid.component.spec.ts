import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { CheckinCovidComponent } from '../../app/checkin/checkin-covid.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
}));

import { FormsModule } from '@angular/forms';
import * as common_mod from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

describe('CheckinCovidComponent', () => {
    let spectator: SpectatorRouting<CheckinCovidComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinCovidComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: CheckinStateService,
                useValue: { updateGuest: jest.fn(), setError: jest.fn() },
            },
        ],
        imports: [MatRadioModule, FormsModule],
    });

    beforeEach(() => {
        (common_mod.notifyError as jest.Mock).mockClear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow confirming questions', () => {
        spectator.component.confirm();
        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'Please select yes or no for each question',
        );
        spectator.component.contact.set('true');
        spectator.component.symptoms.set('false');
        spectator.component.confirm();
        expect(
            spectator.inject(CheckinStateService).setError,
        ).toHaveBeenCalledTimes(1);
        spectator.component.contact.set('false');
        spectator.component.confirm();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'results',
        ]);
    });
});
