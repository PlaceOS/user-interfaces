import { FormControl, FormGroup } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService, findNearbyFeature } from '@placeos/bookings';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { signal } from '@angular/core';
import {
    listChildMetadata,
    querySystemsWithEmails,
    showSystem,
} from '@placeos/ts-client';
import { DeskFlowNewComponent } from '../../app/book/desk-flow-new/desk-flow.component';

jest.mock('@placeos/ts-client', () => ({
    listChildMetadata: jest.fn(),
    querySystemsWithEmails: jest.fn(),
    showSystem: jest.fn(),
}));

jest.mock('@placeos/bookings', () => ({
    ...jest.requireActual('@placeos/bookings'),
    findNearbyFeature: jest.fn(),
}));

describe('DeskFlowNewComponent', () => {
    let spectator: Spectator<DeskFlowNewComponent>;
    let form: FormGroup;
    let query_params: Record<string, string>;
    const desk_resource = {
        id: 'desk-123',
        name: 'Desk 123',
        zone: { id: 'level-1', parent_id: 'building-1' },
    };
    const resources = new BehaviorSubject([desk_resource]);

    const createComponent = createComponentFactory({
        component: DeskFlowNewComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {
                setView: jest.fn(),
                setOptions: jest.fn(),
                newForm: jest.fn(),
                postForm: jest.fn(),
                postFormForGroup: jest.fn(),
                view: signal('form'),
                options: of({ type: 'desk' }),
                loading: of(false),
                resources: resources.asObservable(),
                available_resources: resources.asObservable(),
                form: (() => {
                    form = new FormGroup({
                        booking_type: new FormControl('desk'),
                        resources: new FormControl([]),
                        asset_id: new FormControl(''),
                    });
                    return form;
                })(),
            } as any),
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
            MockProvider(OrganisationService, {
                initialised: of(true),
                buildings: [
                    { id: 'building-1' },
                    { id: 'building-2' },
                ],
                levelWithID: jest.fn((zones = []) =>
                    zones.includes('level-1')
                        ? { id: 'level-1', map_id: 'level-map-1' }
                        : null,
                ),
                find: jest.fn((id: string) =>
                    ['building-1', 'building-2'].includes(id) ? { id } : null,
                ),
            } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.mocked(listChildMetadata).mockReturnValue(of([]) as any);
        jest.mocked(showSystem).mockReturnValue(
            of({
                id: 'room-1',
                email: 'room@example.com',
                map_id: 'room-map-1',
                zones: ['level-1'],
            }) as any,
        );
        jest.mocked(querySystemsWithEmails).mockReturnValue(
            of({ data: [] }) as any,
        );
        resources.next([desk_resource]);
        query_params = { asset_id: 'desk-123' };
        form?.patchValue({ booking_type: 'desk', resources: [], asset_id: '' });
    });

    it('should hydrate the selected desk from the asset_id query param', async () => {
        spectator = createComponent();
        await spectator.component.ngOnInit();
        await Promise.resolve();
        await Promise.resolve();

        expect(spectator.inject(BookingFormService).setOptions).toHaveBeenCalledWith(
            { type: 'desk', zones: ['level-1'] },
        );
        expect(spectator.inject(OrganisationService).find).toHaveBeenCalledWith(
            'building-1',
        );
        expect(spectator.inject(OrganisationService).building).toEqual({
            id: 'building-1',
        });
        expect(form.getRawValue()).toEqual({
            booking_type: 'desk',
            resources: [
                {
                    id: 'desk-123',
                    name: 'Desk 123',
                    zone: { id: 'level-1', parent_id: 'building-1' },
                },
            ],
            asset_id: 'desk-123',
        });
    });

    it('should initialise new desk bookings through the booking form service', async () => {
        spectator = createComponent();
        await spectator.component.ngOnInit();

        expect(spectator.inject(BookingFormService).newForm).toHaveBeenCalledWith(
            'desk',
        );
    });

    it('should wait for the selected desk to load from the resources stream', async () => {
        resources.next([]);
        spectator = createComponent();

        await spectator.component.ngOnInit();
        await Promise.resolve();
        expect(form.getRawValue().asset_id).toBe('');

        resources.next([desk_resource]);
        await Promise.resolve();
        await Promise.resolve();

        expect(form.getRawValue().asset_id).toBe('desk-123');
        expect(form.getRawValue().resources).toEqual([desk_resource]);
    });

    it('should update the active building when the query param desk is in another building', async () => {
        const other_building_desk = {
            id: 'desk-456',
            name: 'Desk 456',
        };
        resources.next([]);
        jest.mocked(listChildMetadata).mockImplementation(
            (building_id: string) =>
                of(
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

        spectator = createComponent({
            providers: [],
        });
        query_params = { asset_id: 'desk-456' };

        await spectator.component.ngOnInit();
        await new Promise((resolve) => setTimeout(resolve, 75));

        expect(spectator.inject(OrganisationService).building).toEqual({
            id: 'building-2',
        });
        expect(form.getRawValue()).toEqual({
            booking_type: 'desk',
            resources: [
                {
                    id: 'desk-456',
                    name: 'Desk 456',
                    zone: { id: 'level-2', parent_id: 'building-2' },
                },
            ],
            asset_id: 'desk-456',
        });
    });

    it('should select a nearby desk by resource id when no map id is available', async () => {
        const desk_without_map_id = {
            id: 'desk-nearby',
            name: 'Nearby Desk',
            zone: { id: 'level-1', parent_id: 'building-1' },
        };
        jest.mocked(findNearbyFeature).mockResolvedValue('desk-nearby');
        resources.next([desk_without_map_id]);
        query_params = {};

        spectator = createComponent();
        (spectator.component as any)._space_pipe = {
            transform: jest.fn(() =>
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

        expect(findNearbyFeature).toHaveBeenCalledWith(
            'level-map-1',
            'room-map-1',
            ['desk-nearby'],
        );
        expect(form.getRawValue()).toEqual({
            booking_type: 'desk',
            resources: [desk_without_map_id],
            asset_id: 'desk-nearby',
        });
    });
});
