import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService, User } from '@placeos/common';
import { UserPipe } from '@placeos/users';
import { setHours, startOfDay, subWeeks } from 'date-fns';
import { MockPipe, MockProvider } from 'ng-mocks';
import { Subject, Subscription } from 'rxjs';

import { EventsStateService } from '../../app/day-view/events-state.service';
import { RoomWeekBookingsTimelineComponent } from '../../app/day-view/room-week-timeline.component';

describe('RoomWeekBookingsTimelineComponent', () => {
    let spectator: SpectatorRouting<RoomWeekBookingsTimelineComponent>;
    const filtered = signal<any[]>([]);
    const zones = signal<string[]>([]);
    const date = signal<number>(startOfDay(Date.now()).valueOf());
    const settings_values: Record<string, any> = {};
    const user_pipe_transform = vi.fn(
        async (user_id: string, lookup_mode?: string) =>
            new User({
                email: user_id,
                name: lookup_mode === 'email-prefix' ? 'Katherine Savage' : '',
            }),
    );
    const MockUserPipe = MockPipe(UserPipe, user_pipe_transform);
    let dialog_open: any;

    const createComponent = createRoutingFactory({
        component: RoomWeekBookingsTimelineComponent,
        shallow: true,
        detectChanges: false,
        overrideComponents: [
            [
                RoomWeekBookingsTimelineComponent,
                {
                    remove: { imports: [UserPipe] },
                    add: { imports: [MockUserPipe] },
                },
            ],
        ],
        providers: [
            {
                provide: EventsStateService,
                useValue: {
                    filtered,
                    zones,
                    date,
                    options: signal({}),
                    newBooking: vi.fn(),
                    setDate: vi.fn(),
                    removeBooking: vi.fn(),
                    poll: vi.fn(() => new Subscription()),
                    replace: vi.fn(),
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
        vi.clearAllMocks();
        for (const key of Object.keys(settings_values))
            delete settings_values[key];
        filtered.set([]);
        zones.set([]);
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

    it('should generate a full week of day columns', () => {
        expect(spectator.component.days()).toHaveLength(7);
    });

    it('should group non-system events into the matching day', () => {
        const noon = setHours(startOfDay(Date.now()), 12).valueOf();
        filtered.set([
            {
                id: 'e1',
                date: noon,
                date_end: noon + 60 * 60 * 1000,
                duration: 60,
                title: 'Event',
                host: 'h@b.com',
                system: { zones: [] },
                is_system_event: false,
            },
        ]);
        const map = spectator.component.events();
        const total = Object.values(map).reduce(
            (count, list) => count + list.length,
            0,
        );
        expect(total).toBe(1);
        expect(spectator.component.event_max_count()).toBe(1);
    });

    it('should resolve an aliased host name by email prefix', async () => {
        const noon = setHours(startOfDay(Date.now()), 12).valueOf();
        filtered.set([
            {
                id: 'aliased-host',
                date: noon,
                date_end: noon + 60 * 60 * 1000,
                duration: 60,
                title: 'Event',
                host: 'katherine.savage@royhill.com.au',
                system: { zones: [] },
                is_system_event: false,
            },
        ]);

        spectator.detectChanges();

        expect(user_pipe_transform).toHaveBeenCalledWith(
            'katherine.savage@royhill.com.au',
            'email-prefix',
        );
        await spectator.fixture.whenStable();
        spectator.detectChanges();
        expect('[date-blocks]').toHaveText('Katherine Savage');
    });

    it('should exclude system events from the day map', () => {
        const noon = setHours(startOfDay(Date.now()), 12).valueOf();
        filtered.set([
            {
                id: 'sys',
                date: noon,
                date_end: noon + 60 * 60 * 1000,
                duration: 60,
                title: 'System',
                host: 'h@b.com',
                system: { zones: [] },
                is_system_event: true,
            },
        ]);
        const map = spectator.component.events();
        const total = Object.values(map).reduce(
            (count, list) => count + list.length,
            0,
        );
        expect(total).toBe(0);
    });

    it('should resolve colours by booking type with a fallback', () => {
        expect(spectator.component.typeColor('internal')).toBe('#D81B60');
        expect(spectator.component.typeColor('external')).toBe('#1E88E5');
        expect(spectator.component.typeColor('unknown')).toBe('#EEE');
    });

    it('should report whether the selected date is in the current week', () => {
        date.set(startOfDay(Date.now()).valueOf());
        expect(spectator.component.this_week()).toBe(true);
        date.set(subWeeks(Date.now(), 2).valueOf());
        expect(spectator.component.this_week()).toBe(false);
    });

    it('should not open a dialog for system events', () => {
        spectator.component.viewEvent({ is_system_event: true } as any, 'sp1');
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
