import { Injector, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    BookingForm,
    BookingFormService,
    BookingFormValue,
    generateBookingForm,
} from '@placeos/bookings';
import {
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { SpacesService } from '@placeos/events';
import { DateFieldComponent } from '@placeos/form-fields';
import { addDays, endOfDay } from 'date-fns';
import { MockComponent, MockProvider } from 'ng-mocks';
import { DeskFlowSelectMapComponent } from '../../app/book/desk-flow-new/desk-flow-select-map.component';
import { DeskFlowSelectComponent } from '../../app/book/desk-flow-new/desk-flow-select.component';

describe('DeskFlowSelectComponent', () => {
    let spectator: Spectator<DeskFlowSelectComponent>;
    let form: BookingForm;
    let model: WritableSignal<BookingFormValue>;
    let active_building: WritableSignal<any>;
    let options: WritableSignal<Record<string, unknown>>;
    let resources: WritableSignal<any[]>;
    let available_resources: WritableSignal<any[]>;
    // The providers hold these mocks for the whole file
    const settings_get = vi.fn();
    const levels_for_building = vi.fn();

    const createComponent = createComponentFactory({
        component: DeskFlowSelectComponent,
        detectChanges: false,
        shallow: true,
        overrideComponents: [
            [
                DeskFlowSelectComponent,
                {
                    remove: { imports: [DeskFlowSelectMapComponent] },
                    add: {
                        imports: [MockComponent(DeskFlowSelectMapComponent)],
                    },
                },
            ],
        ],
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
                    options = signal({ type: 'desk' });
                    resources = signal([]);
                    available_resources = signal([]);
                    return {
                        form,
                        model,
                        options,
                        loading: signal(''),
                        resources,
                        available_resources,
                        load_failed: signal(false),
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
                levelsForBuilding: levels_for_building,
                levelsForRegion: vi.fn(() => []),
                building: { id: 'bld-1', timezone: '' },
            } as any),
            MockProvider(SettingsService, { get: settings_get } as any),
            MockProvider(SpacesService, {}),
        ],
    });

    beforeEach(() => {
        settings_get.mockReset().mockReturnValue(false);
        levels_for_building.mockReset().mockReturnValue([]);
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

    it('should hide the time and duration filters when desks.allow_time_changes is false', () => {
        const allow_time_changes = settingSignal('desks.allow_time_changes');
        const timeControls = () =>
            spectator.queryAll('time-field, duration-field').length;

        allow_time_changes.set(undefined);
        spectator.detectChanges();
        expect(timeControls()).toBe(4);

        allow_time_changes.set(false);
        spectator.detectChanges();
        expect(timeControls()).toBe(0);
        allow_time_changes.set(undefined);
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

    describe('desk selection', () => {
        const desk_1 = { id: 'desk-1', name: 'Desk 1' } as any;
        const desk_2 = { id: 'desk-2', name: 'Desk 2' } as any;

        it('should replace the selected desk and close the filters', () => {
            spectator.component.filters_open.set(true);

            spectator.component.toggleDesk(desk_1);
            spectator.component.toggleDesk(desk_2);

            expect(model().resources).toEqual([desk_2]);
            expect(model().asset_id).toBe('desk-2');
            expect(spectator.component.selected()).toEqual(['desk-2']);
            expect(spectator.component.filters_open()).toBe(false);
        });

        it('should add and remove desks when multiple desks are allowed', () => {
            vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
                (key: string) => key === 'app.desks.allow_multiple',
            );

            spectator.component.toggleDesk(desk_1);
            spectator.component.toggleDesk(desk_2);
            expect(model().resources).toEqual([desk_1, desk_2]);
            expect(model().asset_id).toBe('desk-1');

            spectator.component.toggleDesk(desk_1);
            expect(model().resources).toEqual([desk_2]);
            expect(model().asset_id).toBe('desk-2');
            expect(spectator.component.selected()).toEqual(['desk-2']);
        });

        it('should select the booked desk of an edited booking once it loads', () => {
            model.update((m) => ({
                ...m,
                id: 'booking-1',
                asset_id: 'desk-2',
            }));

            spectator.component.ngOnInit();
            expect(spectator.component.selected()).toEqual(['desk-2']);

            available_resources.set([desk_1, desk_2]);
            TestBed.flushEffects();

            expect(model().resources).toEqual([desk_2]);
            expect(spectator.component.selected()).toEqual(['desk-2']);
        });
    });

    describe('map view', () => {
        const level = (id: string, display_name: string, tags: string[] = []) =>
            ({ id, display_name, parent_id: 'bld-1', tags }) as any;

        beforeEach(() => {
            vi.mocked(
                spectator.inject(OrganisationService).levelsForBuilding,
            ).mockReturnValue([
                level('lvl-b', 'Level B'),
                level('lvl-a', 'Level A'),
                level('lvl-car', 'Car park', ['parking']),
                level('lvl-empty', 'Empty'),
            ]);
            resources.set([
                { id: 'd1', zone: { id: 'lvl-b' } },
                { id: 'd2', zone: { id: 'lvl-a' } },
                { id: 'd3', zone: { id: 'lvl-car' } },
                { id: 'd4', zone: { id: 'lvl-empty' }, bookable: false },
            ] as any);
        });

        it('should show the first level that has bookable desks', () => {
            spectator.component.setMapView();

            expect(spectator.component.view()).toBe('map');
            expect(
                spectator.inject(BookingFormService).setOptions,
            ).toHaveBeenCalledExactlyOnceWith({
                zones: ['lvl-a'],
                zone_id: 'lvl-a',
            });
        });

        it('should keep the level that the user selected in the list filters', () => {
            options.set({ type: 'desk', zones: ['lvl-b'] });

            spectator.component.setMapView();

            expect(
                spectator.inject(BookingFormService).setOptions,
            ).toHaveBeenCalledExactlyOnceWith({
                zones: ['lvl-b'],
                zone_id: 'lvl-b',
            });
        });
    });
});
