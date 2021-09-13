import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { generateGuestForm } from '@placeos/users';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { CheckinDetailsComponent } from '../../app/checkin/checkin-details.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

describe('CheckinDetailsComponent', () => {
    let spectator: SpectatorRouting<CheckinDetailsComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinDetailsComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: CheckinStateService,
                useValue: {
                    updateGuest: jest.fn(),
                    checkinGuest: jest.fn(),
                    form: of(generateGuestForm({} as any)),
                },
            },
        ],
        imports: [MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, FormsModule, ReactiveFormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });

    it('should allow updating guest details', () => {
        const service = spectator.inject(CheckinStateService);
        expect(service.updateGuest).not.toBeCalled();
        expect(service.checkinGuest).not.toBeCalled();
        spectator.click('button[next]');
        expect(service.updateGuest).toBeCalledTimes(1);
        expect(service.checkinGuest).toBeCalledTimes(1);
        expect(spectator.inject(Router).navigate).toBeCalledWith([
            '/checkin',
            'covid',
        ]);
    });
});
