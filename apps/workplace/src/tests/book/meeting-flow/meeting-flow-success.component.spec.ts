import { signal } from '@angular/core';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    BuildingLevel,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { EventFormService, SpacePipe } from '@placeos/events';
import { MeetingFlowSuccessComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-flow-success.component';
import { MockProvider } from 'ng-mocks';

describe('MeetingFlowSuccessComponent', () => {
    let spectator: Spectator<MeetingFlowSuccessComponent>;
    let hide_nearby_desks = false;
    const booking_date = new Date(2026, 7, 25, 9).valueOf();
    const base_event = () => ({
        all_day: false,
        date: booking_date,
        date_end: booking_date + 60 * 60 * 1000,
        recurrence: {},
        space: {
            email: 'room@placeos.test',
            id: 'room-1',
            zones: ['level-1'],
        },
    });
    const last_success = signal(base_event());
    const level_2 = new BuildingLevel({
        id: 'level-2',
        name: 'Level 2',
        display_name: 'Level 2',
    } as any);
    const create_settings = () => ({
        get: vi.fn((key: string) => {
            if (key === 'app.features') return ['desks'];
            if (key === 'app.events.hide_nearby_desks')
                return hide_nearby_desks;
            return undefined;
        }),
        time_format: 'h:mm a',
    });
    const createComponent = createRoutingFactory({
        component: MeetingFlowSuccessComponent,
        providers: [
            { provide: SettingsService, useFactory: create_settings },
            {
                provide: EventFormService,
                useValue: {
                    last_success,
                },
            },
            MockProvider(OrganisationService, {
                levelWithID: vi.fn((zones = []) =>
                    zones.includes('level-2') ? level_2 : null,
                ),
            } as any),
        ],
        componentProviders: [
            MockProvider(SpacePipe, {
                transform: vi.fn(() =>
                    Promise.resolve({
                        email: 'room@placeos.test',
                        id: 'room-1',
                        zones: ['level-2'],
                    }),
                ),
            } as any),
        ],
        declarations: [],
    });

    beforeEach(async () => {
        hide_nearby_desks = false;
        last_success.set(base_event());
        spectator = createComponent();
        await spectator.fixture.whenStable();
        spectator.component.loading.set(false);
        spectator.detectChanges();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show nearby desk action by default', () =>
        expect(spectator.query('button')).toExist());

    it('should hide nearby desk action when configured', () => {
        hide_nearby_desks = true;
        spectator.detectChanges();
        expect(spectator.query('button')).not.toExist();
    });

    it("should show the resolved space's level", () => {
        expect(spectator.component.level).toBe(level_2);
    });

    it('should show the recurring booking end date', async () => {
        last_success.set({
            ...base_event(),
            recurrence: {
                pattern: 'daily',
                interval: 1,
                days_of_week: [2],
                start: booking_date,
                end: new Date(2026, 8, 30, 23, 59, 59).valueOf(),
            },
        });
        await spectator.fixture.whenStable();

        expect(spectator.query('[recurrence]')).toHaveText(
            'Every 1 day until 30 Sep 2026',
        );
    });
});
