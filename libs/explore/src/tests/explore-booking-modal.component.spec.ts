import { inject, Injector, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { MockProvider, ngMocks } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import { generateEventForm } from 'libs/events/src/lib/event-form';
import { EventFormService } from 'libs/events/src/lib/event-form.service';

import { ExploreBookingModalComponent } from '../lib/explore-booking-modal.component';

describe('ExploreBookingModalComponent', () => {
    let spectator: SpectatorRouting<ExploreBookingModalComponent>;
    const createComponent = createRoutingFactory({
        component: ExploreBookingModalComponent,
        ...ngMocks.guts(null),
        providers: [
            MockProvider(MAT_DIALOG_DATA, {
                space: { id: 'one', name: 'Test Space', email: '1' },
            }),
            {
                provide: EventFormService,
                useFactory: () => {
                    // `generateEventForm` calls `form()` which uses
                    // `inject()`, so it must run in an injection context.
                    const { model, form } = generateEventForm(
                        undefined,
                        undefined,
                        inject(Injector),
                    );
                    // Return a plain partial — wrapping in MockService mocks
                    // away the real signal-forms FieldTree, breaking
                    // `[formField]` bindings (`this.field(...) is not a function`).
                    return {
                        model,
                        form,
                        newForm: vi.fn(),
                        postForm: vi.fn(async () => ({})),
                        loading: signal(''),
                    } as unknown as Partial<EventFormService>;
                },
            },
            MockProvider(SettingsService, {
                get: vi.fn(),
                app_name: 'workplace',
            }),
            MockProvider(MatDialogRef, { close: vi.fn() }),
        ],
    });

    /** Create the modal and skip the 500ms minimum loading time */
    const open = (overrides?: Parameters<typeof createComponent>[0]) => {
        spectator = createComponent(overrides);
        (spectator.component as any)._min_loading.set(false);
        spectator.detectChanges();
        return spectator;
    };
    const settings = (app_name: string) =>
        MockProvider(SettingsService, { get: vi.fn(), app_name });

    beforeEach(() => vi.clearAllMocks());

    it('should display selected space', () => {
        open();
        expect('[name="space"]').toContainText('Test Space');
    });

    it('should show the success page after booking in the workplace app', async () => {
        open();
        spectator.typeInElement('Freedom Booking', 'input[name="title"]');
        spectator.click('footer button');
        await vi.waitFor(() =>
            expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled(),
        );
        expect(spectator.inject(EventFormService).postForm).toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book',
            'meeting',
            'success',
        ]);
    });

    it('should stay on the page after booking in other apps', async () => {
        open({ providers: [settings('Concierge')] });
        await spectator.component.save();
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });

    it('should keep the modal open when the booking fails', async () => {
        open();
        const form = spectator.inject(EventFormService);
        vi.mocked(form.postForm).mockRejectedValueOnce('Conflict');
        await expect(spectator.component.save()).rejects.toBe('Conflict');
        expect(spectator.inject(MatDialogRef).close).not.toHaveBeenCalled();
    });

    it('should close without a new form when no space is given', () => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        open({ providers: [MockProvider(MAT_DIALOG_DATA, {})] });
        expect(
            spectator.inject(EventFormService).newForm,
        ).not.toHaveBeenCalled();
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });
});
