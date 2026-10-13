import { Injector, signal } from '@angular/core';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { generateBookingForm, ParkingService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { ParkingRequestFormDetailsComponent } from '../../../app/book/parking-request-flow/parking-request-form-details.component';

vi.mock('@placeos/ts-client', { spy: true });

// Renders the real template. The main spec for this component uses an empty
// template, so it cannot find a field that is not bound to the form.
describe('ParkingRequestFormDetailsComponent special needs', () => {
    let spectator: Spectator<ParkingRequestFormDetailsComponent>;
    const createComponent = createComponentFactory({
        component: ParkingRequestFormDetailsComponent,
        detectChanges: false,
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: false },
            MockProvider(ParkingService, { spaces: signal([]) }),
            MockProvider(SettingsService, {
                get: vi.fn(),
                saveUserSetting: vi.fn(),
                time_format: 'h:mm a',
            }),
            MockProvider(OrganisationService, {
                initialised: signal(true),
                active_building: signal({ id: 'bld-1', timezone: 'UTC' }),
                active_buildings: signal([]),
                level_list: signal([]),
                building: { id: 'bld-1', timezone: 'UTC' },
            } as never),
        ],
    });

    it('should save the reason that the user types for a special needs request', () => {
        spectator = createComponent();
        const { model, form } = TestBed.runInInjectionContext(() =>
            generateBookingForm(undefined, spectator.inject(Injector)),
        );
        model.update((m) => ({
            ...m,
            booking_type: 'parking',
            request_type: 'special',
            notes: '',
        }));
        spectator.fixture.componentRef.setInput('form', form);
        spectator.fixture.componentRef.setInput('model_input', model);
        spectator.fixture.componentRef.setInput('show_special_needs', true);
        spectator.component.selected_request_type_id.set('special');
        spectator.detectChanges();

        const reason =
            spectator.query<HTMLTextAreaElement>('textarea[rows="6"]');
        spectator.typeInElement('Mobility aid', reason);

        expect(model().notes).toBe('Mobility aid');
    });
});
