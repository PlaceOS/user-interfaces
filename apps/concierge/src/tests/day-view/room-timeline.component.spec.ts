import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { setHours, startOfDay, subDays } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { Subject, Subscription } from 'rxjs';

import { RoomBookingsTimelineComponent } from '../../app/day-view/room-timeline.component';
import { EventsStateService } from '../../app/day-view/events-state.service';

describe('RoomBookingsTimelineComponent', () => {
    let spectator: SpectatorRouting<RoomBookingsTimelineComponent>;
    const filtered = signal<any[]>([]);
    const spaces = signal<any[]>([]);
    const date = signal<number>(startOfDay(Date.now()).valueOf());
    const settings_values: Record<string, any> = {};
    let dialog_open: any;

    const createComponent = createRoutingFactory({
        component: RoomBookingsTimelineComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            {
                provide: EventsStateService,
                useValue: {
                    filtered,
                    spaces,
                    date,
                    options: signal({}),
                    newBooking: vi.fn(),
                    setDate: vi.fn(),
                    getDate: vi.fn(() => startOfDay(Date.now()).valueOf()),
                    startPolling: vi.fn(() => new Subscription()),
                    replace: vi.fn(),
                    remove: vi.fn(),
                    restore: vi.fn(),
                },
            },
            MockProvider(SettingsService, {
                get: vi.fn((key: string) => settings_values[key]),
                time_format: 'shortTime',
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
                building: { timezone: '' },
            } as any),
        ],
    });

    beforeEach(() => {
        for (const key of Object.keys(settings_values))
            delete settings_values[key];
        filtered.set([]);
        spaces.set([]);
        date.set(startOfDay(Date.now()).valueOf());
        dialog_open = vi.fn(() => ({
            componentInstance: {
                hide_edit: signal(false),
                action: new Subject(),
            },
            afterClosed: () => new Subject(),
        }));
        spectator = createComponent({
            providers: [MockProvider(MatDialog, { open: dialog_open } as any)],
        });
        spectator.detectChanges();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should group active events by space within the day range', () => {
        spaces.set([{ id: 'sp1', email: 'a@b.com' }]);
        const noon = setHours(startOfDay(Date.now()), 12).valueOf();
        filtered.set([
            {
                id: 'e1',
                date: noon,
                date_end: noon + 60 * 60 * 1000,
                duration: 60,
                resources: [{ id: 'sp1', email: 'a@b.com' }],
                title: 'Meeting',
                host: 'host@b.com',
                is_system_event: false,
            },
            {
                id: 'e2',
                date: noon,
                date_end: noon + 60 * 60 * 1000,
                duration: 60,
                resources: [{ id: 'other', email: 'x@y.com' }],
                title: 'Other',
                host: 'host@b.com',
                is_system_event: false,
            },
        ]);
        const map = spectator.component.events();
        expect(map['sp1'].map((e) => e.id)).toEqual(['e1']);
    });

    it('should exclude cancelled events from grouping', () => {
        spaces.set([{ id: 'sp1', email: 'a@b.com' }]);
        const noon = setHours(startOfDay(Date.now()), 12).valueOf();
        filtered.set([
            {
                id: 'cancelled',
                date: noon,
                date_end: noon + 60 * 60 * 1000,
                duration: 60,
                resources: [{ id: 'sp1' }],
                status: 'cancelled',
                title: 'Cancelled',
                host: 'h',
            },
        ]);
        expect(spectator.component.events()['sp1']).toEqual([]);
    });

    it('should default to a full day of hour blocks', () => {
        expect(spectator.component.hours()).toHaveLength(24);
    });

    it('should derive the block range from the configured window', () => {
        settings_values['app.events.block_start'] = 9;
        settings_values['app.events.block_end'] = 17;
        expect(spectator.component.block_start).toBe(9);
        expect(spectator.component.block_end).toBe(17);
        expect(spectator.component.block_range).toBe(8);
    });

    it('should convert times and durations to percentage offsets', () => {
        const noon = setHours(startOfDay(Date.now()), 12).valueOf();
        expect(spectator.component.timeToOffset(noon)).toBe(50);
        expect(spectator.component.endToOffset(60)).toBeCloseTo(4.17, 1);
        expect(spectator.component.endToOffset(1440)).toBe(100);
    });

    it('should format hours based on the 24 hour setting', () => {
        settings_values['app.use_24_hour_time'] = true;
        expect(spectator.component.formatHour(9)).toBe('09:00');
        settings_values['app.use_24_hour_time'] = false;
        expect(spectator.component.formatHour(9)).toBe('9 AM');
    });

    it('should reflect whether the selected date is today', () => {
        date.set(startOfDay(Date.now()).valueOf());
        expect(spectator.component.is_today()).toBe(true);
        date.set(subDays(Date.now(), 3).valueOf());
        expect(spectator.component.is_today()).toBe(false);
    });

    it('should not open a dialog for system events', () => {
        spectator.component.viewEvent(
            { is_system_event: true } as any,
            'sp1',
        );
        expect(dialog_open).not.toHaveBeenCalled();
    });

    it('should open the details dialog for standard events', () => {
        spectator.component.viewEvent(
            { is_system_event: false, id: 'e1' } as any,
            'sp1',
        );
        expect(dialog_open).toHaveBeenCalled();
    });
});
