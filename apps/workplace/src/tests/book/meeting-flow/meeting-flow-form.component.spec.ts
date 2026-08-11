import { inject, Injector, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/vitest';
import { AssetListFieldComponent, AssetStateService } from '@placeos/assets';
import {
    CateringListFieldComponent,
    CateringOrderStateService,
} from '@placeos/catering';
import { OrganisationService, SettingsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';
import { EventFormService, generateEventForm } from '@placeos/events';
import {
    RichTextInputComponent,
    SpaceListFieldComponent,
    UserListFieldComponent,
} from '@placeos/form-fields';
import { MeetingFlowFormComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-flow-form.component';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { MeetingFormDetailsComponent } from 'libs/events/src/lib/meeting-form-details.component';

describe('MeetingFlowFormComponent', () => {
    let spectator: Spectator<MeetingFlowFormComponent>;
    const createComponent = createRoutingFactory({
        component: MeetingFlowFormComponent,
        providers: [
            MockProvider(AssetStateService, { setOptions: vi.fn() }),
            {
                provide: EventFormService,
                useFactory: () => {
                    const { model, form } = generateEventForm(
                        {
                            host: 'test@test.com',
                            title: 'Yep',
                            creator: 'jim@j.com',
                            date: Date.now(),
                        } as any,
                        undefined,
                        inject(Injector),
                    );
                    return {
                        model,
                        form,
                        can_notify_new_attendees_only: signal(false),
                        notify_new_attendees_only: signal(false),
                        resetForm: vi.fn(),
                    } as Partial<EventFormService>;
                },
            },
            MockProvider(CateringOrderStateService, {
                available_menu: signal([{ id: '1' }]),
                charge_codes: signal([]),
            } as any),
            MockProvider(MatBottomSheet, {
                open: vi.fn(() => ({
                    instance: {},
                    afterDismissed: () => of('1'),
                })),
            } as any),
            MockProvider(OrganisationService, {
                initialised: signal(true),
                active_building: signal(null),
            }),
            MockProvider(SettingsService, { get: vi.fn(() => false) } as any),
            MockProvider(MatDialog, {
                open: vi.fn(() => ({
                    componentInstance: {},
                    afterClosed: () => of('1'),
                })),
            } as any),
        ],
        declarations: [
            mockComponent(MeetingFormDetailsComponent),
            mockComponent(UserListFieldComponent),
            mockComponent(SpaceListFieldComponent),
            mockComponent(CateringListFieldComponent),
            mockComponent(AssetListFieldComponent),
            mockComponent(IconComponent),
            mockComponent(RichTextInputComponent),
        ],
        imports: [ReactiveFormsModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show form details', () =>
        expect(spectator.query('meeting-form-details')).toExist());

    it('should show attendee list', () =>
        expect(spectator.query('a-user-list-field')).toExist());

    it('should show the notification option beside attendee edits', () => {
        expect(
            spectator.query('[name="notify-new-attendees-only"]'),
        ).not.toExist();
        (spectator.component.can_notify_new_attendees_only as any).set(true);
        spectator.detectChanges();
        expect(spectator.query('[name="notify-new-attendees-only"]')).toExist();
    });

    it('should show room list', () =>
        expect(spectator.query('space-list-field')).toExist());

    it('should show catering', () => {
        (spectator.inject(SettingsService).get as any).mockImplementation(
            () => true,
        );
        spectator.detectChanges();
        expect(spectator.query('catering-list-field')).toExist();
        (spectator.inject(SettingsService).get as any).mockReset();
    });

    it('should show asset list', () => {
        (spectator.inject(SettingsService).get as any).mockImplementation(
            () => true,
        );
        spectator.detectChanges();
        expect(spectator.query('asset-list-field')).toExist();
    });

    it('should show notes', () => {
        (spectator.inject(SettingsService).get as any).mockImplementation(
            () => false,
        );
        spectator.detectChanges();
        expect(spectator.query('rich-text-input')).toExist();
    });

    it('should allow resetting only notes', () => {
        Object.defineProperty(spectator.inject(EventFormService), 'event', {
            value: { body: 'Original notes' },
        });
        spectator.component.model.update((model) => ({
            ...model,
            title: 'Changed title',
            body: 'Changed notes',
        }));
        spectator.click('button[name="reset-notes-meeting"]');
        expect(spectator.component.model().body).toBe('Original notes');
        expect(spectator.component.model().title).toBe('Changed title');
    });

    it('should allow clearing of form', () => {
        expect(spectator.query('button[clear-form]')).toExist();
        spectator.click('button[clear-form]');
        expect(
            spectator.inject(EventFormService).resetForm,
        ).toHaveBeenCalledTimes(1);
    });

    it('should allow navigating to confirm page', async () => {
        expect(spectator.query('button[confirm]')).toExist();
        spectator.click('button[confirm]');
        // expect(spectator.inject(Router).navigate).toHaveBeenCalledTimes(1);
    });
});
