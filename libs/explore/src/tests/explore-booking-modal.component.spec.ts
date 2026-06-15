import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { inject, Injector, signal } from '@angular/core';
import { MockProvider, MockService, ngMocks } from 'ng-mocks';
import { timer } from 'rxjs';

import { SettingsService } from '@placeos/common';
import { EventFormService, generateEventForm } from '@placeos/events';

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
                        newForm: jest.fn(),
                        postForm: jest.fn(async () => ({})),
                        loading: signal(''),
                    } as Partial<EventFormService>;
                },
            },
            MockProvider(SettingsService, {
                get: jest.fn(),
                app_name: 'workplace',
            }),
            MockProvider(MatDialogRef, { close: jest.fn() }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow changing the title and duration', () => {
        spectator.detectChanges();
        expect('input#title').toExist();
        expect('a-duration-field').toExist();
    });

    it('should display selected space', () => {
        spectator.detectChanges();
        expect('[name="space"]').toContainText('Test Space');
    });

    it('should allow booking space', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            host: 'host@place.tech',
            creator: 'creator@place.tech',
        }));
        spectator.typeInElement('Freedom Booking', 'input[name="title"]');
        const spy = jest.spyOn(spectator.component, 'save');
        spectator.click('footer button');
        expect(spy).toHaveBeenCalled();
        await timer(310).toPromise();
        await spectator.fixture.whenStable();
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });
});
