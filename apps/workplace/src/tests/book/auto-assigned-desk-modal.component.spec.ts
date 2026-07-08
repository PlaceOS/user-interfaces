import { signal, WritableSignal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

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
                listAvailableResources: vi.fn(
                    async () => [desk_resource],
                ) as any,
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
        spectator = createComponent();
    });

    it('should auto-assign desks as all-day bookings', async () => {
        await spectator.component.ngOnInit();

        expect(model()).toEqual(
            expect.objectContaining({
                all_day: true,
                asset_id: 'desk-123',
                resources: [desk_resource],
            }),
        );
    });
});
