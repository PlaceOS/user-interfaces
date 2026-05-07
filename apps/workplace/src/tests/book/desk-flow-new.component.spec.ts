import { FormControl, FormGroup } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { signal } from '@angular/core';
import { listChildMetadata } from '@placeos/ts-client';
import { DeskFlowNewComponent } from '../../app/book/desk-flow-new/desk-flow.component';

jest.mock('@placeos/ts-client', () => ({
    listChildMetadata: jest.fn(),
}));

describe('DeskFlowNewComponent', () => {
    let spectator: Spectator<DeskFlowNewComponent>;
    let form: FormGroup;
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
                postForm: jest.fn(),
                postFormForGroup: jest.fn(),
                view: signal('form'),
                options: of({ type: 'desk' }),
                loading: of(false),
                resources: resources.asObservable(),
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
                    has: (key: string) => key === 'asset_id',
                    get: (key: string) =>
                        key === 'asset_id' ? 'desk-123' : null,
                }),
            } as any),
            MockProvider(OrganisationService, {
                buildings: [
                    { id: 'building-1' },
                    { id: 'building-2' },
                ],
                find: jest.fn((id: string) =>
                    ['building-1', 'building-2'].includes(id) ? { id } : null,
                ),
            } as any),
        ],
    });

    beforeEach(() => {
        jest.mocked(listChildMetadata).mockReturnValue(of([]) as any);
        resources.next([desk_resource]);
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
            providers: [
                MockProvider(ActivatedRoute, {
                    paramMap: of({
                        has: (key: string) => key === 'step',
                        get: (key: string) => (key === 'step' ? 'form' : null),
                    }),
                    queryParamMap: of({
                        has: (key: string) => key === 'asset_id',
                        get: (key: string) =>
                            key === 'asset_id' ? 'desk-456' : null,
                    }),
                } as any),
            ],
        });

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
});
