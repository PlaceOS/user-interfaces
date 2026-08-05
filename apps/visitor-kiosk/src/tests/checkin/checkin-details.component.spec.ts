import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';
import { MockProvider } from 'ng-mocks';

import { settingSignal, SettingsService } from '@placeos/common';
import { CheckinDetailsComponent } from '../../app/checkin/checkin-details.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

describe('CheckinDetailsComponent', () => {
    let spectator: SpectatorRouting<CheckinDetailsComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinDetailsComponent,
        declarations: [mockComponent(IconComponent)],
        providers: [
            MockProvider(CheckinStateService, {
                updateGuest: vi.fn(),
                checkinGuest: vi.fn(async () => null),
                form: signal({
                    host: '',
                    name: '',
                    email: '',
                    phone: '',
                    organisation: '',
                    pass_number: '',
                }),
                event: signal({}),
            } as any),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            MatProgressSpinnerModule,
            FormsModule,
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        settingSignal('induction_enabled', false).set(false);
        settingSignal('induction_details').set(undefined);
        settingSignal('induction_after_details', false).set(false);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should disable browser autocomplete on every input', () => {
        const inputs = spectator.queryAll('input');

        expect(inputs.length).toBeGreaterThan(0);
        expect(
            inputs.every(
                (input) => input.getAttribute('autocomplete') === 'off',
            ),
        ).toBe(true);
    });

    it('should allow updating guest details', async () => {
        const service = spectator.inject(CheckinStateService);
        expect(service.updateGuest).not.toHaveBeenCalled();
        expect(service.checkinGuest).not.toHaveBeenCalled();
        spectator.click('button[next]');
        await new Promise((resolve) => setTimeout(resolve, 0));
        await spectator.fixture.whenStable();
        // expect(service.updateGuest).toHaveBeenCalledTimes(1);
        expect(service.checkinGuest).toHaveBeenCalledTimes(1);
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'scan',
        ]);
    });

    it('waits for induction acceptance before checking in', async () => {
        settingSignal('induction_enabled', false).set(true);
        settingSignal('induction_details').set('Terms and conditions');
        settingSignal('induction_after_details', false).set(true);
        const service = spectator.inject(CheckinStateService);

        await spectator.component.updateGuest();

        expect(service.updateGuest).toHaveBeenCalledTimes(1);
        expect(service.checkinGuest).not.toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'induction',
        ]);
    });
});
