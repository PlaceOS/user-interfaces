import { signal, WritableSignal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });

import { AutoAssignedDeskModalComponent } from '../../app/book/desk-flow/auto-assigned-desk-modal.component';

describe('AutoAssignedDeskModalComponent', () => {
    let spectator: Spectator<AutoAssignedDeskModalComponent>;
    let model: WritableSignal<any>;

    const desk_resource = {
        id: 'desk-123',
        name: 'Desk 123',
        map_id: 'desk-map-123',
        zone: { id: 'level-1', parent_id: 'building-1' },
        tags: [],
    };

    const createComponent = createComponentFactory({
        component: AutoAssignedDeskModalComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {
                setOptions: vi.fn(),
                postForm: vi.fn(() => Promise.resolve()) as any,
                postFormForGroup: vi.fn(() => Promise.resolve()) as any,
                listResources: vi.fn(async () => [desk_resource]) as any,
                listAvailableResources: vi.fn(async () => [
                    desk_resource,
                ]) as any,
                options: signal({ type: 'desk' }),
                resources: signal([desk_resource]),
                available_resources: signal([desk_resource]),
                model: (() => {
                    model = signal<any>({
                        booking_type: 'desk',
                        date: Date.now(),
                        duration: 60,
                        all_day: false,
                        resources: [],
                        asset_id: '',
                    });
                    return model;
                })(),
            } as any),
            MockProvider(OrganisationService, {
                buildings: [{ id: 'building-1', name: 'Building 1' }],
                levels: [{ id: 'level-1', name: 'Level 1' }],
                levelWithID: vi.fn(() => ({ id: 'level-1' })),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn((key: string) =>
                    key === 'app.desks.default_duration' ? 60 : undefined,
                ),
            } as any),
            MockProvider(Router, {
                navigate: vi.fn(() => Promise.resolve(true)),
            }),
            MockProvider(MatDialogRef, {
                close: vi.fn(),
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        // The providers hold one model for the whole file
        model.set({
            booking_type: 'desk',
            date: Date.now(),
            duration: 60,
            all_day: false,
            resources: [],
            asset_id: '',
        });
        spectator = createComponent();
    });

    it('should find desks near a colleague using the desk map id', async () => {
        const near = {
            id: 'asset-near',
            name: 'Near',
            map_id: 'desk-map-near',
            zone: { id: 'level-1', parent_id: 'building-1' },
            tags: [],
        };
        const centre = {
            id: 'asset-centre',
            name: 'Centre',
            map_id: 'desk-map-centre',
            zone: { id: 'level-1', parent_id: 'building-1' },
            tags: [],
        };
        const state = spectator.inject(BookingFormService) as any;
        state.listResources.mockResolvedValue([desk_resource, near, centre]);
        state.listAvailableResources.mockResolvedValue([near, centre]);
        vi.mocked(
            spectator.inject(OrganisationService).levelWithID,
        ).mockReturnValue({ id: 'level-1', map_id: 'level-1-map.svg' } as any);
        vi.mocked(ts_client.authority).mockReturnValue({} as any);
        vi.mocked(ts_client.token).mockReturnValue('');
        // the colleague's desk is in a corner, beside one desk and away from the centre
        vi.stubGlobal(
            'fetch',
            vi.fn(
                async () =>
                    new Response(
                        `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <rect id="desk-map-123" x="5" y="5" width="2" height="2" />
                            <rect id="desk-map-near" x="10" y="10" width="2" height="2" />
                            <rect id="desk-map-centre" x="49" y="49" width="2" height="2" />
                        </svg>`,
                    ),
            ),
        );
        // jsdom has no SVG geometry, read it from the rect attributes
        const svg_proto = (window as any).SVGElement.prototype;
        svg_proto.getBBox = function () {
            const value = (name: string) =>
                Number(this.getAttribute(name)) || 0;
            return {
                x: value('x'),
                y: value('y'),
                width: value('width'),
                height: value('height'),
            };
        };
        // colleague bookings reference the desk asset id
        spectator.setInput('nearby_desk_id', 'desk-123');

        try {
            await spectator.component.ngOnInit();
        } finally {
            delete svg_proto.getBBox;
            vi.unstubAllGlobals();
            // the providers are shared by every test in the file
            state.listResources.mockImplementation(async () => [desk_resource]);
            state.listAvailableResources.mockImplementation(async () => [
                desk_resource,
            ]);
            vi.mocked(
                spectator.inject(OrganisationService).levelWithID,
            ).mockImplementation(() => ({ id: 'level-1' }) as any);
        }

        expect(spectator.component.assigned_desk()).toEqual(near);
    });

    it('should search for a desk with an all-day booking', async () => {
        await spectator.component.ngOnInit();

        expect(model().all_day).toBe(true);
        expect(spectator.component.assigned_desk()).toEqual(desk_resource);
    });

    it('should keep the assigned desk out of the shared form until the user confirms', async () => {
        await spectator.component.ngOnInit();

        expect(model().asset_id).toBe('');
        expect(model().resources).toEqual([]);

        await spectator.component.confirm();

        expect(model().asset_id).toBe('desk-123');
        expect(model().resources).toEqual([desk_resource]);
        expect(
            spectator.inject(BookingFormService).postForm,
        ).toHaveBeenCalled();
    });

    it('should restore the shared form when the modal closes without a booking', async () => {
        const initial_form = model();
        await spectator.component.ngOnInit();

        spectator.fixture.destroy();

        expect(model()).toEqual(initial_form);
        expect(model().all_day).toBe(false);
    });

    it('should not restore the shared form after a booking', async () => {
        await spectator.component.ngOnInit();
        await spectator.component.confirm();
        const booked_form = model();

        spectator.fixture.destroy();

        expect(model()).toBe(booked_form);
    });

    describe('desk choice', () => {
        const desk = (id: string, level: string, fields = {}) => ({
            id,
            name: id,
            map_id: `map-${id}`,
            zone: { id: level, parent_id: 'building-1' },
            tags: [],
            ...fields,
        });
        const tagged = desk('tagged', 'level-1', { tags: ['eng'] });
        const homebase = desk('homebase', 'level-2', { homebase: 'eng' });
        const both = desk('both', 'level-3', {
            tags: ['eng'],
            homebase: 'eng',
        });
        const other = desk('other', 'level-1');

        async function assign(available: object[], groups: string[] = []) {
            setCurrentUser(new StaffUser({ id: 'me', groups }));
            vi.mocked(
                spectator.inject(BookingFormService).listAvailableResources,
            ).mockResolvedValueOnce(available as any);
            await spectator.component.ngOnInit();
            return spectator.component.assigned_desk();
        }

        it.each([
            ['tag and homebase', [tagged, homebase, both, other], both],
            ['homebase', [tagged, homebase, other], homebase],
            ['tag', [other, tagged], tagged],
        ])(
            'should prefer a desk that matches the user groups by %s',
            async (_, available, expected) => {
                expect(await assign(available, ['eng'])).toEqual(expected);
            },
        );

        it('should pick a desk on the level with the most free desks', async () => {
            const level_2 = desk('level-2-a', 'level-2');
            const available = [
                desk('level-1-a', 'level-1'),
                level_2,
                desk('level-2-b', 'level-2'),
            ];

            expect(await assign(available)).toEqual(level_2);
        });

        it('should close the modal when no desk is free', async () => {
            expect(await assign([])).toBeNull();

            expect(spectator.component.show()).toBe(false);
            expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith(
                false,
            );
        });
    });

    it('should keep the modal open when the booking fails', async () => {
        const state = spectator.inject(BookingFormService);
        vi.mocked(state.postForm).mockRejectedValueOnce('Desk is taken');
        await spectator.component.ngOnInit();

        await spectator.component.confirm();

        expect(spectator.component.loading()).toBe('');
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        expect(spectator.inject(MatDialogRef).close).not.toHaveBeenCalled();
    });
});
