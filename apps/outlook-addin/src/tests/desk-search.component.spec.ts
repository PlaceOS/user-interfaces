import { signal } from '@angular/core';
import {
    createComponentFactory,
    mockProvider,
    Spectator,
} from '@ngneat/spectator/vitest';
import {
    BookingAsset,
    BookingFlowOptions,
    BookingFormService,
    BookingFormValue,
} from '@placeos/bookings';
import { OrganisationService } from '@placeos/common';
import { PlaceZone } from '@placeos/ts-client';

import { DeskSearchComponent } from '../app/calendar/desk-search.component';
import { OutlookEventService } from '../app/calendar/outlook-event.service';
import { MemoryItemAdapter } from '../app/calendar/outlook-item.adapter';

const MIDNIGHT = new Date(2026, 9, 1).valueOf();
const HOUR = 60 * 60 * 1000;

const desk = (id: string, zone: Partial<PlaceZone>): BookingAsset => ({
    id,
    name: id,
    bookable: true,
    features: [],
    zone: new PlaceZone(zone),
});

describe('DeskSearchComponent', () => {
    let spectator: Spectator<DeskSearchComponent>;
    let adapter: MemoryItemAdapter;
    const model = signal<Partial<BookingFormValue>>({});
    const options = signal<Partial<BookingFlowOptions>>({});
    const available = signal<BookingAsset[]>([]);
    /** Booking settings. Not reactive, so set before the component reads them. */
    const settings: Record<string, unknown> = {
        all_day_period: { start: 8, end: 17.5 },
    };

    const createComponent = createComponentFactory({
        component: DeskSearchComponent,
        detectChanges: false,
        providers: [
            mockProvider(BookingFormService, {
                model,
                options,
                available_resources: available,
                features: signal([]),
                loading: signal(''),
                setting: (key: string) => settings[key],
                setOptions: vi.fn((changes: Partial<BookingFlowOptions>) =>
                    options.update((o) => ({ ...o, ...changes })),
                ),
            }),
            mockProvider(OrganisationService, {
                active_levels: signal([]),
            }),
        ],
    });

    beforeEach(async () => {
        vi.clearAllMocks();
        model.set({});
        options.set({});
        available.set([
            desk('desk-1', { id: 'lvl-1' }),
            desk('desk-2', { id: 'area-1', parent_id: 'lvl-1' }),
            desk('desk-3', { id: 'lvl-2' }),
        ]);
        adapter = new MemoryItemAdapter({
            subject: 'Working from London office',
            start: MIDNIGHT,
            end: MIDNIGHT + 24 * HOUR,
            all_day: true,
            is_recurring: false,
            room_emails: [],
        });
        spectator = createComponent();
        const outlook = spectator.inject(OutlookEventService);
        outlook.useAdapter(adapter);
        await outlook.refresh();
        spectator.detectChanges();
    });

    it('searches for desks for the whole day of an all-day event', async () => {
        const form = spectator.inject(BookingFormService);
        expect(model()).toMatchObject({
            date: MIDNIGHT,
            duration: 24 * 60,
            all_day: true,
        });
        expect(form.listAvailableResources).toHaveBeenCalled();

        adapter.update({
            start: MIDNIGHT + 9 * HOUR,
            end: MIDNIGHT + 10 * HOUR,
            all_day: false,
        });
        await spectator.inject(OutlookEventService).refresh();
        spectator.detectChanges();

        expect(model()).toMatchObject({
            date: MIDNIGHT + 9 * HOUR,
            duration: 60,
            all_day: false,
        });
    });

    it('shows the site all-day period only for an all-day event', async () => {
        expect(spectator.component.all_day_policy()).toBe('08:00 to 17:30');

        adapter.update({ all_day: false });
        await spectator.inject(OutlookEventService).refresh();
        expect(spectator.component.all_day_policy()).toBe('');
    });

    it('lists the desks on a floor and in the zones of that floor', () => {
        spectator.component.level_id.set('lvl-1');
        expect(spectator.component.desks().map((_) => _.id)).toEqual([
            'desk-1',
            'desk-2',
        ]);
    });

    it('lists only desks that have all the selected features', () => {
        available.set([
            {
                ...desk('desk-1', { id: 'lvl-1' }),
                features: ['Monitor', 'Dock'],
            },
            { ...desk('desk-2', { id: 'lvl-1' }), features: ['Monitor'] },
            { ...desk('desk-3', { id: 'lvl-1' }), features: ['Dock'] },
        ]);
        const ids = () => spectator.component.desks().map((_) => _.id);

        spectator.component.toggleFeature('Monitor');
        spectator.component.toggleFeature('Dock');
        expect(ids()).toEqual(['desk-1']);

        spectator.component.toggleFeature('Dock');
        expect(ids()).toEqual(['desk-1', 'desk-2']);
    });

    it('shows when a desk is available for the event', async () => {
        expect(spectator.component.period()).toBe('all day');

        adapter.update({
            start: MIDNIGHT + 9 * HOUR,
            end: MIDNIGHT + 10 * HOUR,
            all_day: false,
        });
        await spectator.inject(OutlookEventService).refresh();

        // Format the expected times in the locale of the test runtime.
        const time = new Intl.DateTimeFormat(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
        expect(spectator.component.period()).toBe(
            `${time.format(MIDNIGHT + 9 * HOUR)}–${time.format(MIDNIGHT + 10 * HOUR)}`,
        );
    });

    it('drops the map selection when the desk is no longer available', () => {
        spectator.component.selected_desk.set(available()[0]);
        expect(spectator.component.map_selection()?.id).toBe('desk-1');

        available.set(available().slice(1));
        expect(spectator.component.map_selection()).toBeNull();
    });

    it('keeps the list floor and the map floor the same', () => {
        options.update((o) => ({ ...o, zone_id: 'lvl-2' }));
        spectator.detectChanges();
        expect(spectator.component.level_id()).toBe('lvl-2');

        spectator.component.level_id.set('lvl-1');
        spectator.detectChanges();
        expect(options().zone_id).toBeUndefined();
    });
});
