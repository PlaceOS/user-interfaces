import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { AutoAssignedDeskModalComponent } from '../../app/book/desk-flow/auto-assigned-desk-modal.component';

describe('AutoAssignedDeskModalComponent', () => {
    let spectator: Spectator<AutoAssignedDeskModalComponent>;
    let form: FormGroup;

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
                setOptions: jest.fn(),
                postForm: jest.fn(() => Promise.resolve()),
                postFormForGroup: jest.fn(() => Promise.resolve()),
                options: of({ type: 'desk' }),
                resources: of([desk_resource]),
                available_resources: of([desk_resource]),
                form: (() => {
                    form = new FormGroup({
                        booking_type: new FormControl('desk'),
                        date: new FormControl(Date.now()),
                        duration: new FormControl(60),
                        all_day: new FormControl(false),
                        resources: new FormControl([]),
                        asset_id: new FormControl(''),
                    });
                    return form;
                })(),
            } as any),
            MockProvider(OrganisationService, {
                buildings: [{ id: 'building-1', name: 'Building 1' }],
                levels: [{ id: 'level-1', name: 'Level 1' }],
                levelWithID: jest.fn(() => ({ id: 'level-1' })),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn((key: string) =>
                    key === 'app.desks.default_duration' ? 60 : undefined,
                ),
            }),
            MockProvider(Router, {
                navigate: jest.fn(() => Promise.resolve(true)),
            }),
            MockProvider(MatDialogRef, {
                close: jest.fn(),
            }),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should auto-assign desks as all-day bookings', async () => {
        await spectator.component.ngOnInit();

        expect(form.getRawValue()).toEqual(
            expect.objectContaining({
                all_day: true,
                asset_id: 'desk-123',
                resources: [desk_resource],
            }),
        );
    });
});
