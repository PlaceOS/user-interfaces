import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { setNotifyOutlet } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { CheckinPhotoComponent } from '../../app/checkin/checkin-photo.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';
import { TakePhotoComponent } from '../../app/components/take-photo.component';

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

describe('CheckinPhotoComponent', () => {
    let spectator: SpectatorRouting<CheckinPhotoComponent>;
    let snackbar: ReturnType<typeof createSnackbarSpy>;
    const createComponent = createRoutingFactory({
        component: CheckinPhotoComponent,
        providers: [
            { provide: CheckinStateService, useValue: { setPhoto: vi.fn() } },
        ],
        overrideComponents: [
            [
                CheckinPhotoComponent,
                {
                    remove: { imports: [TakePhotoComponent] },
                    add: { imports: [MockComponent(TakePhotoComponent)] },
                },
            ],
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        snackbar = createSnackbarSpy();
        setNotifyOutlet(snackbar as never, true);
        spectator = createComponent();
    });

    afterEach(() => setNotifyOutlet(null, true));

    it('saves the captured photo and shows the results', () => {
        spectator.triggerEventHandler('a-take-photo', 'captured', 'data:jpg');

        expect(
            spectator.inject(CheckinStateService).setPhoto,
        ).toHaveBeenCalledWith('data:jpg');
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'results',
        ]);
    });

    it('stays on the page and shows an error when the photo fails', () => {
        spectator.triggerEventHandler('a-take-photo', 'captured', null);

        expect(snackbar.open).toHaveBeenCalledWith(
            'Error saving image, please try again',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(
            spectator.inject(CheckinStateService).setPhoto,
        ).not.toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
    });

    it('shows the results when the visitor skips the photo', () => {
        spectator.triggerEventHandler('a-take-photo', 'back', undefined);

        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'results',
        ]);
    });
});
