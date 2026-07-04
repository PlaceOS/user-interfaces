import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Booking, OrganisationService, SettingsService } from '@placeos/common';
import { SimpleTableComponent } from '@placeos/components';
import { startOfDay } from 'date-fns';
import { MockComponent, MockProvider } from 'ng-mocks';

import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetRequestListComponent } from '../../app/asset-manager/asset-request-list.component';
import { AssetRequestDetailsComponent } from '../../app/asset-manager/asset-request-details.component';
import { DateOptionsComponent } from '../../app/ui/date-options.component';

const filtered_requests = signal<any[]>([]);
const options_signal = signal<any>({ view: 'grid', search: '', date: 0 });

describe('AssetRequestListComponent', () => {
    let spectator: Spectator<AssetRequestListComponent>;
    let set_status: jest.Mock;
    let set_tracking: jest.Mock;
    let level_with_id: jest.Mock;

    const createComponent = createComponentFactory({
        component: AssetRequestListComponent,
        providers: [
            MockProvider(AssetManagerStateService, {
                filtered_requests,
                options: options_signal,
                setOptions: jest.fn(),
                startPolling: jest.fn(() => jest.fn()),
                setStatus: (...args: any[]) => set_status(...args),
                setTracking: (...args: any[]) => set_tracking(...args),
            } as any),
            MockProvider(OrganisationService, {
                levelWithID: (...args: any[]) => level_with_id(...args),
            } as any),
            MockProvider(SettingsService, { time_format: 'h:mm a' } as any),
        ],
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(DateOptionsComponent),
            MockComponent(AssetRequestDetailsComponent),
        ],
    });

    beforeEach(() => {
        filtered_requests.set([]);
        options_signal.set({ view: 'grid', search: '', date: 0 });
        set_status = jest.fn(async () => ({}));
        set_tracking = jest.fn(async () => ({}));
        level_with_id = jest.fn();
        spectator = createComponent();
    });

    it('should resolve the level details onto each request row', () => {
        level_with_id.mockReturnValue({
            id: 'lvl-1',
            display_name: 'Level 1',
            code: 'L01',
        });
        const request: any = { id: 'r-1', zones: ['lvl-1'] };

        const level = spectator.component.level(request);

        expect(level).toEqual(expect.objectContaining({ code: 'L01' }));
        expect(request.level).toBe('Level 1');
        expect(request.level_code).toBe('L01');
    });

    it('should use the start of day for all-day bookings', () => {
        const date = new Date('2026-06-15T14:00:00').valueOf();
        const all_day = { all_day: true, date } as Booking;
        const timed = { all_day: false, date } as Booking;

        expect(spectator.component.date(all_day)).toBe(
            startOfDay(date).valueOf(),
        );
        expect(spectator.component.date(timed)).toBe(date);
    });

    it('should toggle the row loading state around a status change', async () => {
        const item = { id: 'r-1' } as Booking;

        const promise = spectator.component.setStatus(item, 'approved');
        expect(spectator.component.loading()['r-1']).toBe(true);
        await promise;

        expect(set_status).toHaveBeenCalledWith(item, 'approved');
        expect(spectator.component.loading()['r-1']).toBe(false);
    });

    it('should delegate tracking updates to the state service', async () => {
        const item = { id: 'r-2' } as Booking;

        await spectator.component.setTracking(item, 'in_transit');

        expect(set_tracking).toHaveBeenCalledWith(item, 'in_transit');
        expect(spectator.component.loading()['r-2']).toBe(false);
    });

    it('should update the selected date through the state service', () => {
        spectator.component.setDate(12345);

        expect(
            spectator.inject(AssetManagerStateService).setOptions,
        ).toHaveBeenCalledWith({ date: 12345 });
    });
});
