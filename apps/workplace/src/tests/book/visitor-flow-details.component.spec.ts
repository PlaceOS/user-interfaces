import { Injector, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import {
    BookingForm,
    BookingFormValue,
    BookingFormService,
    generateBookingForm,
} from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { VisitorFlowDetailsComponent } from 'apps/workplace/src/app/book/visitor-flow-new/visitor-flow-details.component';
import { MockProvider } from 'ng-mocks';

describe('VisitorFlowDetailsComponent', () => {
    let spectator: SpectatorRouting<VisitorFlowDetailsComponent>;
    let options: WritableSignal<any>;
    let form: BookingForm;
    let model: WritableSignal<BookingFormValue>;
    let now = Date.now();
    const createComponent = createRoutingFactory({
        component: VisitorFlowDetailsComponent,
        shallow: true,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(),
            }),
            {
                provide: OrganisationService,
                useFactory: () => {
                    const building_list = [
                        { id: 'bld-1', name: 'Building One', timezone: '' },
                        { id: 'bld-2', name: 'Building Two', timezone: '' },
                    ];
                    return {
                        active_buildings: signal(building_list),
                        buildings: building_list,
                        building: building_list[0],
                        find: vi.fn((id: string) =>
                            building_list.find((building) => building.id === id),
                        ),
                        setBuilding: vi.fn(),
                        levelWithID: vi.fn((ids: string[]) =>
                            ids?.includes('lvl-2')
                                ? {
                                      id: 'lvl-2',
                                      parent_id: 'bld-2',
                                      name: 'Level Two',
                                  }
                                : null,
                        ),
                    } as any;
                },
            },
            {
                provide: BookingFormService,
                useFactory: () => {
                    options = signal<any>({
                        type: 'visitor',
                        group: false,
                    });
                    // Build a real signal-forms booking form so the component
                    // can read `form.date`/`form.all_day` and `model()`.
                    const injector = TestBed.inject(Injector);
                    const refs = TestBed.runInInjectionContext(() =>
                        generateBookingForm(undefined, injector),
                    );
                    form = refs.form;
                    model = refs.model;
                    model.update((m) => ({
                        ...m,
                        id: '',
                        asset_id: '',
                        asset_name: '',
                        company: '',
                        phone: '',
                        user: null,
                        user_email: '',
                        zones: [],
                        date: Date.now(),
                        duration: 60,
                        title: 'Visit',
                        all_day: false,
                        assets: [],
                    }));
                    return {
                        form,
                        model,
                        options,
                        setOptions: vi.fn((opts) =>
                            options.set({ ...options(), ...opts }),
                        ),
                    };
                },
            },
        ],
    });

    beforeEach(() => {
        now = Date.now();
        spectator = createComponent();
    });

    it('should hide visitor type switching when editing an existing booking', () => {
        const service = spectator.inject(BookingFormService);
        model.update((m) => ({
            ...m,
            id: 'visitor-booking-1',
            asset_id: 'visitor.one@example.com',
            asset_name: 'Visitor One',
        }));

        spectator.component.ngOnInit();
        spectator.detectChanges();
        (service.setOptions as any).mockClear();
        spectator.component.setActiveForm('group');

        expect(spectator.component.is_edit()).toBe(true);
        expect(spectator.component.active_form()).toBe('single');
        expect(service.setOptions).not.toHaveBeenCalled();
        expect(spectator.element).not.toHaveText('BOOKINGS.VISITOR_SINGLE');
        expect(spectator.element).not.toHaveText('BOOKINGS.VISITOR_MULTIPLE');
    });

    it('should disable date and time fields but keep duration editable when editing an in-progress booking', () => {
        model.update((m) => ({
            ...m,
            id: 'visitor-booking-2',
            date: now - 5 * 60 * 1000,
            duration: 60,
        }));

        spectator.component.ngOnInit();
        spectator.detectChanges();

        expect(spectator.component.is_edit_in_progress()).toBe(true);
        expect(form.date().disabled()).toBe(true);
        expect(form.duration().disabled()).toBe(false);
    });

    it('should show time fields and clear all day when all day is not allowed', () => {
        model.update((m) => ({ ...m, all_day: true }));

        spectator.component.ngOnInit();
        spectator.detectChanges();

        expect(spectator.component.is_all_day()).toBe(false);
        expect(model().all_day).toBe(false);
        expect(spectator.query('a-time-field')).toExist();
        expect(spectator.query('a-duration-field')).toExist();
    });

    it('should make the selected building active so saves use its zones', () => {
        const org = spectator.inject(OrganisationService);
        model.update((m) => ({
            ...m,
            id: 'visitor-booking-4',
            zones: ['org-1', 'bld-1'],
        }));
        spectator.component.ngOnInit();

        spectator.component.setBuilding('bld-2');

        expect(org.building.id).toBe('bld-2');
        expect(model().zones).toEqual(['bld-2']);
        expect(spectator.component.selected_building_id()).toBe('bld-2');
    });

    it('should make the edited booking building active on load', () => {
        const org = spectator.inject(OrganisationService);
        model.update((m) => ({
            ...m,
            id: 'visitor-booking-5',
            zones: ['org-1', 'bld-2'],
        }));

        spectator.component.ngOnInit();

        expect(org.building.id).toBe('bld-2');
    });

    it('should resolve the selected building from a level zone when editing', () => {
        model.update((m) => ({
            ...m,
            id: 'visitor-booking-3',
            zones: ['org-1', 'lvl-2'],
        }));

        spectator.component.ngOnInit();
        spectator.detectChanges();

        expect(spectator.component.selected_building_id()).toBe('bld-2');
    });
});
