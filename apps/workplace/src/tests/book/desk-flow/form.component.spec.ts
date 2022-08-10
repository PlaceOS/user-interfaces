import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { BookingFormService } from '@placeos/bookings';
import { MockComponent } from 'ng-mocks';

import { DeskFlowDetailedFormComponent } from 'apps/workplace/src/app/book/desk-flow/detailed-form.component';
import { DeskFlowFormComponent } from 'apps/workplace/src/app/book/desk-flow/form.component';
import { OrganisationService } from '@placeos/organisation';
import { of } from 'rxjs';
import { SettingsService } from '@placeos/common';

describe('DeskFlow', () => {
    let spectator: SpectatorRouting<DeskFlowFormComponent>;
    const createComponent = createRoutingFactory({
        component: DeskFlowFormComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: {
                    setOptions: jest.fn(),
                    clearForm: jest.fn(),
                    form: {
                        patchValue: jest.fn(),
                        get: jest.fn(),
                        markAllAsTouched: jest.fn(),
                        valid: true,
                    },
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    initialised: of(true),
                    active_levels: of([{ id: 'lvl-1' }]),
                    building: { id: 'bld-1' },
                    levelsForBuilding: jest.fn(() => []),
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } }
        ],
        declarations: [
            MockComponent(DeskFlowDetailedFormComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show detailed booking form', () => {
        expect('detailed-book-desks-form').toExist();
    });

    it('should allow clearing the form', () => {
        spectator.component.time = 1;
        spectator.click('button[clear]');
        const service = spectator.inject(BookingFormService);
        expect(service.clearForm).toHaveBeenCalledTimes(1);
        expect(spectator.component.time).toBe(0);
    });

    it('should allow finding a space', () => {
        spectator.click('button[find]');
        const service = spectator.inject(BookingFormService);
        expect(service.form.markAllAsTouched).toHaveBeenCalled();
        expect(spectator.router.navigate).toHaveBeenCalledWith([
            '/book',
            'desks',
            'map',
        ]);
    });

    it('should allow for edits', () => {
        const service = spectator.inject(BookingFormService);
        expect('[form] h2').toContainText('Detailed Desk Booking');
        (service.form.get as any).mockImplementation((_) => ({ value: true }));
        spectator.detectChanges();
        expect('[form] h2').toContainText('Edit Desk Booking');
    });
});
