import { signal } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { EventFormService, SpacesService } from '@placeos/events';

import { RoomConfirmService } from '../app/rooms/room-confirm.service';

describe('RoomConfirmService', () => {
    let spectator: SpectatorService<RoomConfirmService>;
    const post_form = vi.fn();
    const navigate = vi.fn();

    const createService = createServiceFactory({
        service: RoomConfirmService,
        providers: [
            {
                provide: EventFormService,
                useValue: {
                    model: signal({ resources: [] }),
                    postForm: post_form,
                },
            },
            {
                provide: SpacesService,
                useValue: { filter: vi.fn(() => []) },
            },
            {
                provide: MatBottomSheet,
                useValue: { open: vi.fn() },
            },
            {
                provide: Router,
                useValue: { navigate },
            },
        ],
    });

    beforeEach(() => {
        post_form.mockReset();
        navigate.mockReset();
        navigate.mockResolvedValue(true);
        spectator = createService();
    });

    it('navigates to confirmation after the booking succeeds', async () => {
        post_form.mockResolvedValue({ id: 'event-1' });

        await expect(spectator.service.postForm()).resolves.toBe(true);
        expect(navigate).toHaveBeenCalledWith(['/confirm/success']);
    });

    it('stays on the confirmation screen when the booking fails', async () => {
        post_form.mockRejectedValue(new Error('Unavailable'));

        await expect(spectator.service.postForm()).resolves.toBe(false);
        expect(navigate).not.toHaveBeenCalled();
    });
});
