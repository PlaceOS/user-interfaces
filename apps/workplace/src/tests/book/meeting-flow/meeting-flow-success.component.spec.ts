import { signal } from '@angular/core';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
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
    const level_2 = new BuildingLevel({
        id: 'level-2',
        name: 'Level 2',
        display_name: 'Level 2',
    } as any);
    const create_settings = () => ({
        get: jest.fn((key: string) => {
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
                    last_success: signal({
                        all_day: false,
                        date: Date.now(),
                        date_end: Date.now() + 60 * 60 * 1000,
                        space: {
                            email: 'room@placeos.test',
                            id: 'room-1',
                            zones: ['level-1'],
                        },
                    }),
                },
            },
            MockProvider(OrganisationService, {
                levelWithID: jest.fn((zones = []) =>
                    zones.includes('level-2') ? level_2 : null,
                ),
            } as any),
        ],
        componentProviders: [
            MockProvider(SpacePipe, {
                transform: jest.fn(() =>
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
});
