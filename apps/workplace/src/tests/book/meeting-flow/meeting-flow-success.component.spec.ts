import { signal } from '@angular/core';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MeetingFlowSuccessComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-flow-success.component';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

describe('MeetingFlowSuccessComponent', () => {
    let spectator: Spectator<MeetingFlowSuccessComponent>;
    let hide_nearby_desks = false;
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
                levelWithID: jest.fn(() => null),
                levelsForBuilding: jest.fn(() => []),
            } as any),
            MockProvider(BookingFormService, {
                newForm: jest.fn(),
                setOptions: jest.fn(),
                form: { patchValue: jest.fn() },
                available_resources: new BehaviorSubject([]),
            } as any),
        ],
        declarations: [],
    });

    beforeEach(() => {
        hide_nearby_desks = false;
        spectator = createComponent();
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
});
