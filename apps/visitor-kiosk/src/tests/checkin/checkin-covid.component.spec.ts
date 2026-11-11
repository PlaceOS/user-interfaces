import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';

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
        vi.clearAllMocks();
        snackbar = createSnackbarSpy();
        setNotifyOutlet(snackbar as any, true);
        spectator = createComponent();
    });

    afterEach(() => setNotifyOutlet(null, true));

    it('asks for an answer to each question', async () => {
        spectator.component.symptoms.set('false');

        await spectator.component.confirm();

        expect(snackbar.open).toHaveBeenCalledWith(
            'Please select yes or no for each question',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(
            spectator.inject(CheckinStateService).updateGuest,
        ).not.toHaveBeenCalled();
    });

    it('sends a visitor with a risk to see reception', async () => {
        const state = spectator.inject(CheckinStateService);
        spectator.component.contact.set('true');
        spectator.component.symptoms.set('false');

        await spectator.component.confirm();

        expect(state.updateGuest).toHaveBeenCalledWith({
            covid: true,
            symptoms: false,
        });
        expect(state.setError).toHaveBeenCalledWith(
            expect.stringContaining('self-isolate'),
        );
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'error',
        ]);
    });

    it('continues a visitor with no risk to the results', async () => {
        const state = spectator.inject(CheckinStateService);
        spectator.component.contact.set('false');
        spectator.component.symptoms.set('false');

        await spectator.component.confirm();

        expect(state.updateGuest).toHaveBeenCalledWith({
            covid: false,
            symptoms: false,
        });
        expect(state.setError).not.toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'results',
        ]);
    });
});
