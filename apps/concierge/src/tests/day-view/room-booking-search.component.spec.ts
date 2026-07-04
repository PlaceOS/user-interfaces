import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { RoomBookingSearchComponent } from '../../app/day-view/room-booking-search.component';
import { EventsStateService } from '../../app/day-view/events-state.service';

describe('RoomBookingSearchComponent', () => {
    let spectator: SpectatorRouting<RoomBookingSearchComponent>;
    const filtered = signal<any[]>([]);

    const createComponent = createRoutingFactory({
        component: RoomBookingSearchComponent,
        shallow: true,
        providers: [
            {
                provide: EventsStateService,
                useValue: { filtered },
            },
            MockProvider(SettingsService, {
                time_format: 'shortTime',
            } as any),
        ],
    });

    beforeEach(() => {
        filtered.set([]);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should exclude system events from the results', () => {
        filtered.set([
            {
                title: 'Standup',
                host: 'a@b.com',
                resources: [],
                is_system_event: false,
            },
            {
                title: 'Cleaning',
                host: 'a@b.com',
                resources: [],
                is_system_event: true,
            },
        ]);
        expect(spectator.component.filtered().map((e) => e.title)).toEqual([
            'Standup',
        ]);
    });

    it('should filter results by the search term', () => {
        filtered.set([
            {
                title: 'Board Meeting',
                host: 'alice@b.com',
                resources: [],
                is_system_event: false,
            },
            {
                title: 'Lunch',
                host: 'bob@b.com',
                resources: [],
                is_system_event: false,
            },
        ]);
        spectator.component.search.set('board');
        expect(spectator.component.filtered().map((e) => e.title)).toEqual([
            'Board Meeting',
        ]);
        spectator.component.search.set('bob');
        expect(spectator.component.filtered().map((e) => e.title)).toEqual([
            'Lunch',
        ]);
    });

    it('should reveal the search field when triggered', () => {
        expect(spectator.component.show()).toBe(false);
        spectator.component.showSearch();
        expect(spectator.component.show()).toBe(true);
    });

    it('should hide the search field after a delay', () => {
        jest.useFakeTimers();
        spectator.component.show.set(true);
        spectator.component.hideSearch();
        expect(spectator.component.show()).toBe(true);
        jest.advanceTimersByTime(1000);
        expect(spectator.component.show()).toBe(false);
        jest.useRealTimers();
    });

    it('should resolve type colours with a fallback', () => {
        expect(spectator.component.typeColor({ type: 'internal' })).toBe(
            '#D81B60',
        );
        expect(spectator.component.typeColor({ type: 'nope' })).toBe('#EEE');
    });
});
