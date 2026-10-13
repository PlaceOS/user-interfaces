import { Injector, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    BookingForm,
    BookingFormService,
    BookingFormValue,
    generateBookingForm,
} from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { SpacesService } from '@placeos/events';
import { DateFieldComponent } from '@placeos/form-fields';
import { addDays, endOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { DeskFlowSelectComponent } from '../../app/book/desk-flow-new/desk-flow-select.component';

describe('DeskFlowSelectComponent', () => {
    let spectator: Spectator<DeskFlowSelectComponent>;
    let form: BookingForm;
    let model: WritableSignal<BookingFormValue>;
    let active_building: WritableSignal<any>;

    const createComponent = createComponentFactory({
        component: DeskFlowSelectComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            {
                provide: BookingFormService,
                useFactory: () => {
                    const injector = TestBed.inject(Injector);
                    const refs = TestBed.runInInjectionContext(() =>
                        generateBookingForm(undefined, injector),
                    );
                    form = refs.form;
                    model = refs.model;
                    model.update((m) => ({
                        ...m,
                        date: Date.now(),
                        duration: 60,
                        all_day: false,
                        resources: [],
                        asset_id: '',
                    }));
                    return {
                        form,
                        model,
                        options: signal({ type: 'desk' }),
                        loading: signal(''),
                        resources: signal([]),
                        available_resources: signal([]),
                        setOptions: vi.fn(),
                    };
                },
            },
            MockProvider(OrganisationService, {
                active_building: (() => {
                    active_building = signal({ id: 'bld-1' });
                    return active_building;
                })(),
                active_buildings: signal([{ id: 'bld-1' }, { id: 'bld-2' }]),
                buildings: [{ id: 'bld-1' }, { id: 'bld-2' }],
                active_region: signal(null),
                region_list: signal([]),
                levelsForBuilding: vi.fn(() => []),
                levelsForRegion: vi.fn(() => []),
                building: { id: 'bld-1', timezone: '' },
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(() => false),
            } as any),
            MockProvider(SpacesService, {}),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should clear the selected desk when the building changes', () => {
        model.update((m) => ({
            ...m,
            resources: [{ id: 'desk-1', name: 'Desk 1' } as any],
            asset_id: 'desk-1',
        }));
        spectator.component.ngOnInit();
        TestBed.flushEffects();
        spectator.component.selected.set(['desk-1']);

        active_building.set({ id: 'bld-2' });
        TestBed.flushEffects();

        expect(model().resources).toEqual([]);
        // Clearing the desk empties resources; the resource→asset sync then
        // leaves `asset_id` falsy.
        expect(model().asset_id).toBeFalsy();
        expect(spectator.component.selected()).toEqual([]);
    });

    it('should keep a selected desk that belongs to the new building', async () => {
        model.update((m) => ({
            ...m,
            resources: [
                {
                    id: 'desk-2',
                    name: 'Desk 2',
                    zone: { id: 'level-2', parent_id: 'bld-2' },
                } as any,
            ],
            asset_id: 'desk-2',
        }));
        spectator.component.ngOnInit();
        await spectator.fixture.whenStable();

        active_building.set({ id: 'bld-2' });
        await spectator.fixture.whenStable();

        expect(model().resources).toEqual([
            expect.objectContaining({ id: 'desk-2' }),
        ]);
        expect(model().asset_id).toBe('desk-2');
        expect(spectator.component.selected()).toEqual(['desk-2']);
    });

    it('should limit date selection to the configured available period', () => {
        spectator.component.available_days.set(14);
        spectator.detectChanges();

        const end_date = spectator.component.end_date();
        const date_fields = spectator.queryAll(DateFieldComponent);

        expect(end_date).toBe(endOfDay(addDays(Date.now(), 14)).valueOf());
        expect(date_fields.length).toBe(2);
        expect(date_fields.every((field) => field.to_date() === end_date)).toBe(
            true,
        );
    });
});
