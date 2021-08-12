import { Router } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { CheckinCovidComponent } from '../../app/checkin/checkin-covid.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

jest.mock('@placeos/common');

import * as common_mod from '@placeos/common';

describe('CheckinCovidComponent', () => {
    let spectator: SpectatorRouting<CheckinCovidComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinCovidComponent,
        providers: [
            {
                provide: CheckinStateService,
                useValue: { updateGuest: jest.fn(), setError: jest.fn() },
            },
        ],
        imports: [MatRadioModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });

    it('should allow confirming questions', () => {
        (common_mod.notifyError as any) = jest.fn();
        spectator.component.confirm();
        expect(common_mod.notifyError).toBeCalledWith(
            'Please select yes or no for each question'
        );
        spectator.component.contact = 'true';
        spectator.component.symptoms = 'false';
        spectator.component.confirm();
        expect(spectator.inject(CheckinStateService).setError).toBeCalledTimes(
            1
        );
        spectator.component.contact = 'false';
        spectator.component.confirm();
        expect(spectator.inject(Router).navigate).toBeCalledWith([
            '/checkin',
            'results',
        ]);
    });
});
