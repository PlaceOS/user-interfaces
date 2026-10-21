import { Injector, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { ActivatedRoute, Router } from '@angular/router';
import {
    BookingForm,
    BookingFormValue,
    BookingFormService,
    generateBookingForm,
} from '@placeos/bookings';
import {
    Booking,
    EMPTY_USER,
    OrganisationService,
    setCurrentUser,
    StaffUser,
    User,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import {
    listChildMetadata,
    querySystemsWithEmails,
    showSystem,
    authority,
} from '@placeos/ts-client';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { DeskFlowNewComponent } from '../../app/book/desk-flow-new/desk-flow.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('DeskFlowNewComponent', () => {
    let spectator: Spectator<DeskFlowNewComponent>;
    let model: WritableSignal<BookingFormValue>;
    let form: BookingForm;
    let query_params: Record<string, string>;
    let resource_list: any[];
    let active_building: WritableSignal<any>;
    let options: WritableSignal<any>;
    /** Booking that the form service holds for an edit */
    let edit_booking: Booking | null;
    let auto_allocation: boolean;
    const building_list = [{ id: 'building-1' }, { id: 'building-2' }];
    const desk_resource = {
        id: 'desk-123',
        name: 'Desk 123',
        features: [],
        zone: { id: 'level-1', parent_id: 'building-1' },
    };
    const group_members = [
        new User({ email: 'host@example.com' }),
        new User({ email: 'member@example.com' }),
    ];
    const group_siblings = [
        new Booking({ id: 'bkn-1', user_email: 'host@example.com' }),
        new Booking({ id: 'bkn-2', user_email: 'member@example.com' }),
    ];
    const waitFor = async (condition: () => boolean, timeout = 1000) => {
        const end = Date.now() + timeout;
        while (!condition() && Date.now() < end) {
            await new Promise((resolve) => setTimeout(resolve, 25));
        }
    };

    const createComponent = createComponentFactory({
        component: DeskFlowNewComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            {
                provide: BookingFormService,
                useFactory: () => {
                    const injector = TestBed.inject(Injector);
                    const refs = TestBed.runInInjectionContext(() =>
                        generateBookingForm(undefined, injector),
                    );
                    form = refs.form;
                    model = refs.model;
                    model.update((m) => ({
                        ...m,
                        booking_type: 'desk',
                        resources: [],
                        asset_id: '',
                    }));
                    options = signal({ type: 'desk' });
                    return {
                        form,
                        model,
                        view: signal('form'),
                        options,
                        loading: signal(false),
                        load_failed: signal(false),
                        resources: signal(resource_list),
                        available_resources: signal(resource_list),
                        get booking() {
                            return edit_booking;
                        },
                        get auto_allocation() {
                            return auto_allocation;
                        },
                        setView: vi.fn(),
                        setOptions: vi.fn((value: any) =>
                            options.update((o) => ({ ...o, ...value })),
                        ),
                        autoAllocateDesk: vi.fn(async () =>
                            model.update((m) => ({
                                ...m,
                                resources: [desk_resource],
                                asset_id: desk_resource.id,
                            })),
                        ),
                        loadGroupMembersForBooking: vi.fn(
                            async () => group_members,
                        ),
                        loadGroupSiblings: vi.fn(async () => group_siblings),
                        editFormForGroup: vi.fn(() => Promise.resolve()),
                        newForm: vi.fn(() => {
                            model.update((m) => ({
                                ...m,
                                booking_type: 'desk',
                                resources: [],
                                asset_id: '',
                            }));
                        }),
                        postForm: vi.fn(() => Promise.resolve()),
                        postFormForGroup: vi.fn(() => Promise.resolve()),
                        listResources: vi.fn(async () => resource_list),
                        listAvailableResources: vi.fn(
                            async () => resource_list,
                        ),
                    };
                },
            },
            MockProvider(Router, {
                navigate: vi.fn(() => Promise.resolve(true)),
            }),
            MockProvider(ActivatedRoute, {
                paramMap: of({
                    has: (key: string) => key === 'step',
                    get: (key: string) => (key === 'step' ? 'form' : null),
                }),
                queryParamMap: of({
                    has: (key: string) => key in query_params,
                    get: (key: string) => query_params[key] || null,
                }),
            } as any),
            {
                provide: OrganisationService,
                useFactory: () => {
                    active_building = signal({ id: 'building-1' });
                    const buildings = signal(building_list) as any;
                    buildings.find = building_list.find.bind(building_list);
                    buildings[Symbol.iterator] = function* () {
                        yield* building_list;
                    };
                    return {
                        initialised: signal(true),
                        waitUntilInitialised: vi.fn(async () => undefined),
                        active_building,
                        active_buildings: signal(building_list),
                        active_region: signal(null),
                        region_list: signal([]),
                        buildings,
                        levelWithID: vi.fn((zones = []) =>
                            zones.includes('level-1')
                                ? { id: 'level-1', map_id: 'level-map-1' }
                                : null,
                        ),
                        levelsForBuilding: vi.fn(() => [
                            {
                                id: 'level-1',
                                parent_id: 'building-1',
                                tags: [],
                            },
                            {
                                id: 'level-2',
                                parent_id: 'building-2',
                                tags: [],
                            },
                        ]),
                        levelsForRegion: vi.fn(() => []),
                        find: vi.fn((id: string) =>
                            ['building-1', 'building-2'].includes(id)
                                ? { id }
                                : null,
                        ),
                        get building() {
                            return active_building();
                        },
                        set building(value) {
                            active_building.set(value);
                        },
                    };
                },
            },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        resource_list = [desk_resource];
        vi.mocked(listChildMetadata).mockResolvedValue([] as any);
        vi.mocked(showSystem).mockReturnValue(
            of({
                id: 'room-1',
                email: 'room@example.com',
                map_id: 'room-map-1',
                zones: ['level-1'],
            }) as any,
        );
        vi.mocked(querySystemsWithEmails).mockReturnValue(
            of({ data: [] }) as any,
        );
        query_params = { asset_id: 'desk-123' };
        edit_booking = null;
        auto_allocation = false;
    });

    it('should hydrate the selected desk from the asset_id query param', async () => {
        spectator = createComponent();
        await spectator.component.ngOnInit();
        await new Promise((resolve) => setTimeout(resolve, 75));

        expect(
            spectator.inject(BookingFormService).setOptions,
        ).toHaveBeenCalledWith({ type: 'desk', zones: ['level-1'] });
        expect(spectator.inject(OrganisationService).find).toHaveBeenCalledWith(
            'building-1',
        );
        expect(spectator.inject(OrganisationService).active_building()).toEqual({
            id: 'building-1',
        });
        expect(model().resources).toEqual([desk_resource]);
        expect(model().asset_id).toBe('desk-123');
    });

    it('should initialise new desk bookings through the booking form service', async () => {
        spectator = createComponent();
        await spectator.component.ngOnInit();

        expect(
            spectator.inject(BookingFormService).newForm,
        ).toHaveBeenCalledWith('desk');
    });

    it('should wait for the selected desk to load from the resources stream', async () => {
        resource_list = [];
        spectator = createComponent();

        await spectator.component.ngOnInit();
        await Promise.resolve();
        expect(model().asset_id).toBe('');

        resource_list = [desk_resource];
        await new Promise((resolve) => setTimeout(resolve, 75));

        expect(model().asset_id).toBe('desk-123');
        expect(model().resources).toEqual([desk_resource]);
    });

    it('should update the active building when the query param desk is in another building', async () => {
        const other_building_desk = {
            id: 'desk-456',
            name: 'Desk 456',
            features: [],
        };
        resource_list = [];
        vi.mocked(listChildMetadata).mockImplementation(
            (building_id: string) =>
                Promise.resolve(
                    building_id === 'building-2'
                        ? [
                              {
                                  metadata: {
                                      desks: { details: [other_building_desk] },
                                  },
                                  zone: {
                                      id: 'level-2',
                                      parent_id: 'building-2',
                                  },
                              },
                          ]
                        : [],
                ) as any,
        );

        spectator = createComponent();
        query_params = { asset_id: 'desk-456' };

        await spectator.component.ngOnInit();
        await waitFor(() => model().asset_id === 'desk-456');

        expect(spectator.inject(OrganisationService).active_building()).toEqual({
            id: 'building-2',
        });
        expect(model().resources).toEqual([
            expect.objectContaining({
                id: 'desk-456',
                name: 'Desk 456',
                zone: { id: 'level-2', parent_id: 'building-2' },
            }),
        ]);
        expect(model().asset_id).toBe('desk-456');
    });

    it('should select a nearby desk by resource id when no map id is available', async () => {
        const desk_without_map_id = {
            id: 'desk-nearby',
            name: 'Nearby Desk',
            features: [],
            zone: { id: 'level-1', parent_id: 'building-1' },
        };
        vi.mocked(authority).mockReturnValue({} as any);
        const fetch_spy = vi
            .spyOn(globalThis, 'fetch')
            .mockResolvedValue({
                ok: true,
                text: () => Promise.resolve('<svg viewBox="0 0 100 100"></svg>'),
            } as any);
        resource_list = [desk_without_map_id];
        query_params = {};

        spectator = createComponent();
        (spectator.component as any)._space_pipe = {
            transform: vi.fn(() =>
                Promise.resolve({
                    id: 'room-1',
                    map_id: 'room-map-1',
                    zones: ['level-1'],
                }),
            ),
        };

        await (spectator.component as any)._initNearbyDeskBooking(
            'room-1',
            Date.now(),
        );

        expect(fetch_spy).toHaveBeenCalledWith('level-map-1', {});
        expect(model().resources).toEqual([desk_without_map_id]);
        expect(model().asset_id).toBe('desk-nearby');
    });

    it('should tell the user when the nearby space has no level map', async () => {
        const notify_open = vi.fn(() => ({ onAction: () => of() }));
        setNotifyOutlet({ open: notify_open } as any, true);
        query_params = {};
        spectator = createComponent();
        (spectator.component as any)._space_pipe = {
            transform: vi.fn(() =>
                Promise.resolve({ id: 'room-1', zones: ['unknown-level'] }),
            ),
        };

        await (spectator.component as any)._initNearbyDeskBooking(
            'room-1',
            Date.now(),
        );

        expect(notify_open).toHaveBeenCalled();
        expect(
            spectator.inject(BookingFormService).listAvailableResources,
        ).not.toHaveBeenCalled();
        setNotifyOutlet(null, true);
    });

    describe('confirmBooking', () => {
        let service: BookingFormService;
        const notify_open = vi.fn(() => ({ onAction: () => of() }));
        /** Fill the form with a valid desk selection */
        const selectDesk = () =>
            model.update((m) => ({
                ...m,
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                resources: [desk_resource],
                asset_id: desk_resource.id,
            }));

        beforeEach(() => {
            setCurrentUser(
                new StaffUser({ id: 'me', email: 'me@example.com' }),
            );
            query_params = {};
            setNotifyOutlet({ open: notify_open } as any, true);
            spectator = createComponent();
            service = spectator.inject(BookingFormService);
        });

        afterEach(() => setNotifyOutlet(null, true));

        it('should show the error message of a failed save', async () => {
            selectDesk();
            vi.mocked(service.postForm).mockRejectedValueOnce({
                message: 'Desk is booked by another person',
                status: 409,
            });

            await spectator.component.confirmBooking();

            expect(notify_open).toHaveBeenCalledWith(
                'Desk is booked by another person',
                expect.anything(),
                expect.anything(),
            );
        });

        it('should ignore a second confirm while the desk is allocated', async () => {
            auto_allocation = true;
            model.update((m) => ({
                ...m,
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
            }));
            let finishAllocation: () => void = () => undefined;
            vi.mocked(service.autoAllocateDesk).mockImplementationOnce(
                () =>
                    new Promise<void>((resolve) => {
                        finishAllocation = () => {
                            model.update((m) => ({
                                ...m,
                                resources: [desk_resource],
                                asset_id: desk_resource.id,
                            }));
                            resolve();
                        };
                    }) as any,
            );

            const first = spectator.component.confirmBooking();
            await spectator.component.confirmBooking();
            finishAllocation();
            await first;

            expect(service.autoAllocateDesk).toHaveBeenCalledTimes(1);
            expect(service.postForm).toHaveBeenCalledTimes(1);
            expect(spectator.component.loading()).toBe(false);
        });

        it('should save a single booking for the current user', async () => {
            selectDesk();

            await spectator.component.confirmBooking();

            expect(service.postForm).toHaveBeenCalled();
            expect(service.postFormForGroup).not.toHaveBeenCalled();
        });

        it('should not save when the desk is not selected', async () => {
            await spectator.component.confirmBooking();

            expect(service.postForm).not.toHaveBeenCalled();
        });

        it('should not save a booking for another person when no person is selected', async () => {
            selectDesk();
            spectator.component.active_form.set('other');
            model.update((m) => ({ ...m, user: EMPTY_USER }));

            await spectator.component.confirmBooking();

            expect(service.postForm).not.toHaveBeenCalled();

            model.update((m) => ({
                ...m,
                user: new User({ email: 'other@example.com' }),
            }));
            await spectator.component.confirmBooking();

            expect(service.postForm).toHaveBeenCalled();
        });

        it('should reset the booking type after a booking is saved', () => {
            const view = service.view as unknown as WritableSignal<string>;
            spectator.component.active_form.set('group');

            view.set('success');
            spectator.detectChanges();

            expect(spectator.component.active_form()).toBe('single');
            view.set('form');
        });

        it('should save a new group booking for the group', async () => {
            selectDesk();
            options.set({ type: 'desk', group: true, members: group_members });

            await spectator.component.confirmBooking();

            expect(service.postFormForGroup).toHaveBeenCalled();
            expect(service.postForm).not.toHaveBeenCalled();
        });

        it('should update each member when the user edits a group booking', async () => {
            edit_booking = new Booking({
                id: 'bkn-1',
                booking_type: 'desk',
                parent_id: 'bkn-parent',
            });
            model.update((m) => ({ ...m, id: 'bkn-1' }));
            selectDesk();

            spectator.component.ngOnInit();
            await waitFor(() => options().group === true);

            expect(options().members).toEqual(group_members);

            await spectator.component.confirmBooking();

            expect(service.loadGroupSiblings).toHaveBeenCalledWith(
                edit_booking,
            );
            expect(service.editFormForGroup).toHaveBeenCalledWith(
                group_siblings,
            );
            expect(service.postForm).not.toHaveBeenCalled();
            expect(service.postFormForGroup).not.toHaveBeenCalled();
        });

        it('should allocate the desk on confirm when auto allocation is on', async () => {
            auto_allocation = true;
            model.update((m) => ({
                ...m,
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
            }));

            await spectator.component.confirmBooking();

            expect(service.autoAllocateDesk).toHaveBeenCalled();
            expect(model().asset_id).toBe(desk_resource.id);
            expect(service.postForm).toHaveBeenCalled();
        });
    });
});
