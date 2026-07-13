import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';

import { CheckinCovidComponent } from '../../app/checkin/checkin-covid.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

import { FormsModule } from '@angular/forms';
import { setNotifyOutlet } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

// Workspace modules cannot be intercepted by the native unit-test builder, so
// instead of mocking `notifyError` we spy on the snackbar outlet it routes to.
function createSnackbarSpy() {
    return {
        open: vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        })),
    };
}

describe('CheckinCovidComponent', () => {
    let spectator: SpectatorRouting<CheckinCovidComponent>;
    let snackbar: ReturnType<typeof createSnackbarSpy>;
    const createComponent = createRoutingFactory({
        component: CheckinCovidComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: CheckinStateService,
                useValue: { updateGuest: vi.fn(), setError: vi.fn() },
            },
        ],
        imports: [MatRadioModule, FormsModule],
    });

    beforeEach(() => {
        snackbar = createSnackbarSpy();
        setNotifyOutlet(snackbar as any, true);
        spectator = createComponent();
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow confirming questions', () => {
        spectator.component.confirm();
        expect(snackbar.open).toHaveBeenCalledWith(
            'Please select yes or no for each question',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
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
