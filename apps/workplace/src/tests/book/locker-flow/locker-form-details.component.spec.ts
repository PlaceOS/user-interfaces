import { signal, SimpleChange } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { LockerFormDetailsComponent } from '../../../app/book/locker-flow/locker-form-details.component';

describe('LockerFormDetailsComponent', () => {
    let spectator: Spectator<LockerFormDetailsComponent>;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let settings: Record<string, any>;
    let building: Record<string, any>;

    const createComponent = createComponentFactory({
        component: LockerFormDetailsComponent,
        detectChanges: false,
        providers: [
            MockProvider(OrganisationService, {
                building_list: signal([]),
                active_levels: signal([]),
                waitUntilInitialised: jest.fn(() => Promise.resolve()),
            } as any),
        ],
    });

    beforeEach(() => {
        settings = {};
        building = { id: 'bld-1', timezone: 'Australia/Sydney' };
        model = signal<Record<string, any>>({
            id: '',
            date: Date.now(),
            duration: 60,
            all_day: false,
            resources: [],
        });
        spectator = createComponent({
            providers: [
                MockProvider(SettingsService, {
                    get: jest.fn((key: string) => settings[key]),
                } as any),
                MockProvider(BookingFormService, {
                    model,
                    options: signal({ type: 'locker', group: false }),
                    features: signal([]),
                    setOptions: jest.fn(),
                    setFeature: jest.fn(),
                } as any),
            ],
        });
        const org = spectator.inject(OrganisationService) as any;
        Object.defineProperty(org, 'building', {
            configurable: true,
            get: () => building,
            set: (b) => (building = b),
        });
    });

    it('should create', () => expect(spectator.component).toBeTruthy());

    it('should read the selected building through the organisation service', () => {
        expect(spectator.component.building).toBe(building);
        const next = { id: 'bld-2', timezone: 'UTC' };
        spectator.component.building = next as any;
        expect(building).toBe(next);
    });

    it('should fall back to the default max duration when unset', () => {
        expect(spectator.component.max_duration).toBe(8 * 60);
        settings['app.lockers.max_duration'] = 240;
        expect(spectator.component.max_duration).toBe(240);
    });

    it('should read date/start/end restriction toggles from settings', () => {
        settings['app.lockers.disabled_date_select'] = true;
        settings['app.lockers.disabled_start_time'] = true;
        settings['app.lockers.hide_end_time'] = true;
        expect(spectator.component.disable_date).toBe(true);
        expect(spectator.component.disable_start).toBe(true);
        expect(spectator.component.hide_end).toBe(true);
    });

    it('should default allow_time_changes to true unless explicitly disabled', () => {
        expect(spectator.component.allow_time_changes).toBe(true);
        settings['app.lockers.allow_time_changes'] = false;
        expect(spectator.component.allow_time_changes).toBe(false);
    });

    it('should default allow_all_day to true and disable it with time changes', () => {
        expect(spectator.component.allow_all_day).toBe(true);
        settings['app.lockers.allow_time_changes'] = false;
        expect(spectator.component.allow_all_day).toBe(false);
    });

    it('should use the building timezone only when configured', () => {
        expect(spectator.component.timezone).toBe('');
        settings['app.lockers.use_building_timezone'] = true;
        expect(spectator.component.timezone).toBe('Australia/Sydney');
    });

    it('should delegate setOptions and setFeature to the service', () => {
        spectator.component.setOptions({ group: true });
        expect(
            spectator.inject(BookingFormService).setOptions,
        ).toHaveBeenCalledWith({ group: true });
        spectator.component.setFeature('power', true);
        expect(
            spectator.inject(BookingFormService).setFeature,
        ).toHaveBeenCalledWith('power', true);
    });

    it('should force all_day on init when time changes are disallowed', async () => {
        settings['app.lockers.allow_time_changes'] = false;
        await spectator.component.ngOnInit();
        expect(model().all_day).toBe(true);
    });

    it('should keep all_day unchanged on init when time changes are allowed', async () => {
        model.update((m) => ({ ...m, all_day: false }));
        await spectator.component.ngOnInit();
        expect(model().all_day).toBe(false);
    });

    it('should compute custom durations when the form changes', () => {
        spectator.component.ngOnChanges({
            form: new SimpleChange(undefined, () => ({ resources: null }), true),
        });
        expect(Array.isArray(spectator.component.custom_durations())).toBe(true);
    });

    it('should map a selected locker into the booking model', () => {
        const locker = {
            id: 'locker-9',
            name: 'E-099',
            map_id: 'map-9',
            bank: { tags: ['lockers'] },
        };
        (spectator.component as any).setBookingAsset(locker);
        expect(model().asset_id).toBe('locker-9');
        expect(model().asset_name).toBe('E-099');
        expect(model().booking_type).toBe('locker');
        expect(model().zones).toEqual(['bld-1']);
        expect(model().tags).toEqual(['lockers']);
        expect(model().booking_asset).toBe(locker);
    });

    it('should clear the asset when no locker is selected', () => {
        model.update((m) => ({ ...m, asset_id: 'existing' }));
        (spectator.component as any).setBookingAsset(null);
        expect(model().asset_id).toBeUndefined();
    });
});
