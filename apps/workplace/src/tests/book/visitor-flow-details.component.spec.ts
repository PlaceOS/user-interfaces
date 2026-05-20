import { FormControl, FormGroup } from '@angular/forms';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { VisitorFlowDetailsComponent } from 'apps/workplace/src/app/book/visitor-flow-new/visitor-flow-details.component';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

describe('VisitorFlowDetailsComponent', () => {
    let spectator: SpectatorRouting<VisitorFlowDetailsComponent>;
    let options$: BehaviorSubject<any>;
    let form: FormGroup;
    let now = Date.now();
    const createComponent = createRoutingFactory({
        component: VisitorFlowDetailsComponent,
        shallow: true,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(),
            }),
            {
                provide: OrganisationService,
                useFactory: () => {
                    const building_list = [
                        { id: 'bld-1', name: 'Building One', timezone: '' },
                        { id: 'bld-2', name: 'Building Two', timezone: '' },
                    ];
                    return {
                        active_buildings: new BehaviorSubject(building_list),
                        buildings: building_list,
                        building: building_list[0],
                        find: jest.fn((id: string) =>
                            building_list.find((building) => building.id === id),
                        ),
                        setBuilding: jest.fn(),
                        levelWithID: jest.fn((ids: string[]) =>
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
                    options$ = new BehaviorSubject({
                        type: 'visitor',
                        group: false,
                    });
                    form = new FormGroup({
                        id: new FormControl(''),
                        asset_id: new FormControl(''),
                        asset_name: new FormControl(''),
                        company: new FormControl(''),
                        phone: new FormControl(''),
                        user: new FormControl(null),
                        user_email: new FormControl(''),
                        zones: new FormControl([]),
                        date: new FormControl(Date.now()),
                        duration: new FormControl(60),
                        title: new FormControl('Visit'),
                        all_day: new FormControl(false),
                        assets: new FormControl([]),
                    });
                    return {
                        form,
                        options: options$.asObservable(),
                        setOptions: jest.fn((options) =>
                            options$.next({ ...options$.value, ...options }),
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
        form.patchValue({
            id: 'visitor-booking-1',
            asset_id: 'visitor.one@example.com',
            asset_name: 'Visitor One',
        });

        spectator.component.ngOnInit();
        spectator.detectChanges();
        (service.setOptions as jest.Mock).mockClear();
        spectator.component.setActiveForm('group');

        expect(spectator.component.is_edit()).toBe(true);
        expect(spectator.component.active_form()).toBe('single');
        expect(service.setOptions).not.toHaveBeenCalled();
        expect(spectator.element).not.toHaveText('BOOKINGS.VISITOR_SINGLE');
        expect(spectator.element).not.toHaveText('BOOKINGS.VISITOR_MULTIPLE');
    });

    it('should disable date and time fields but keep duration editable when editing an in-progress booking', () => {
        form.patchValue({
            id: 'visitor-booking-2',
            date: now - 5 * 60 * 1000,
            duration: 60,
        });

        spectator.component.ngOnInit();
        spectator.detectChanges();

        expect(spectator.component.is_edit_in_progress()).toBe(true);
        expect(form.get('date')?.disabled).toBe(true);
        expect(form.get('duration')?.disabled).toBe(false);
    });

    it('should show time fields and clear all day when all day is not allowed', () => {
        form.patchValue({ all_day: true });

        spectator.component.ngOnInit();
        spectator.detectChanges();

        expect(spectator.component.is_all_day()).toBe(false);
        expect(form.getRawValue().all_day).toBe(false);
        expect(spectator.query('time-field')).toExist();
        expect(spectator.query('duration-field')).toExist();
    });

    it('should resolve the selected building from a level zone when editing', () => {
        form.patchValue({
            id: 'visitor-booking-3',
            zones: ['org-1', 'lvl-2'],
        });

        spectator.component.ngOnInit();
        spectator.detectChanges();

        expect(spectator.component.selected_building_id()).toBe('bld-2');
    });
});
