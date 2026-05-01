import { FormControl, FormGroup } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { SpacesService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { DeskFlowSelectComponent } from '../../app/book/desk-flow-new/desk-flow-select.component';

describe('DeskFlowSelectComponent', () => {
    let spectator: Spectator<DeskFlowSelectComponent>;
    let form: FormGroup;
    let active_building: BehaviorSubject<any>;

    const createComponent = createComponentFactory({
        component: DeskFlowSelectComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {
                options: of({ type: 'desk' }),
                loading: of(''),
                resources: of([]),
                setOptions: jest.fn(),
                form: (() => {
                    form = new FormGroup({
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
                active_building: (() => {
                    active_building = new BehaviorSubject({ id: 'bld-1' });
                    return active_building.asObservable();
                })(),
                active_buildings: of([{ id: 'bld-1' }, { id: 'bld-2' }]),
                active_region: of(null),
                region_list: of([]),
                levelsForBuilding: jest.fn(() => []),
                levelsForRegion: jest.fn(() => []),
                building: { id: 'bld-1', timezone: '' },
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(() => false),
            }),
            MockProvider(SpacesService, {}),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should clear the selected desk when the building changes', () => {
        form.patchValue({
            resources: [{ id: 'desk-1', name: 'Desk 1' }],
            asset_id: 'desk-1',
        });
        spectator.component.ngOnInit();
        spectator.component.selected.set(['desk-1']);

        active_building.next({ id: 'bld-2' });

        expect(form.getRawValue().resources).toEqual([]);
        expect(form.getRawValue().asset_id).toBe('');
        expect(spectator.component.selected()).toEqual([]);
    });
});
