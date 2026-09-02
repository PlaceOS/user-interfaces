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
import {
    CateringItem,
    CateringOrder,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
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
                available_menu: signal([{ id: '1', hide_for_zones: [] }]),
                charge_codes: signal([]),
                availability: signal([]),
                setFilters: vi.fn(),
                setOptions: vi.fn(),
                orderAvailable: vi.fn(() => Promise.resolve(true)),
            } as any),
            MockProvider(MatBottomSheet, {
                open: vi.fn(() => ({
                    instance: {},
                    afterDismissed: () => of('1'),
                })),
            } as any),
            {
                provide: OrganisationService,
                useValue: {
                    initialised: signal(true),
                    active_building: signal(null),
                    levelWithID: vi.fn(() => ({ parent_id: 'building-1' })),
                    locationWithID: vi.fn(() => ({
                        building: { id: 'building-1' },
                    })),
                    waitUntilInitialised: vi.fn(() => Promise.resolve()),
                } as unknown as OrganisationService,
            },
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

    it('should remove catering when its assigned room is removed', () => {
        const first_room = new Space({
            id: 'room-1',
            zones: ['building-1'],
        });
        const second_room = new Space({
            id: 'room-2',
            zones: ['building-1'],
        });
        spectator.component.model.update((model) => ({
            ...model,
            resources: [first_room, second_room],
            catering: [
                new CateringOrder({
                    id: 'order-1',
                    system_id: 'room-2',
                    caterer: 'Cafe',
                    items: [
                        new CateringItem({
                            id: 'coffee',
                            caterer: 'Cafe',
                            quantity: 1,
                        }),
                    ],
                }),
            ],
        }));

        (
            spectator.component as unknown as {
                _checkCatering: (rooms: Space[]) => void;
            }
        )._checkCatering([first_room]);

        expect(spectator.component.model().catering).toEqual([]);
    });

    it('should reject legacy catering without a room assignment', async () => {
        spectator.component.model.update((model) => ({
            ...model,
            resources: [new Space({ id: 'room-1' })],
            catering: [
                new CateringOrder({
                    id: 'order-1',
                    caterer: 'Cafe',
                    items: [
                        new CateringItem({
                            id: 'coffee',
                            caterer: 'Cafe',
                            quantity: 1,
                        }),
                    ],
                }),
            ],
        }));
        expect(spectator.component.model().catering).toHaveLength(1);

        await expect(
            (
                spectator.component as unknown as {
                    _cateringOrdersAvailable: () => Promise<boolean>;
                }
            )._cateringOrdersAvailable(),
        ).resolves.toBe(false);
    });
});
