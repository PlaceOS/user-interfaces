import { FormControl, FormGroup } from '@angular/forms';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MeetingFlowDetailsComponent } from 'apps/workplace/src/app/book/meeting-flow-new/meeting-flow-details.component';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

describe('MeetingFlowDetailsComponent', () => {
    let spectator: SpectatorRouting<MeetingFlowDetailsComponent>;
    let form: FormGroup;
    const createComponent = createRoutingFactory({
        component: MeetingFlowDetailsComponent,
        shallow: true,
        providers: [
            MockProvider(
                SettingsService as any,
                {
                    get: jest.fn(() => false),
                } as any,
            ),
            MockProvider(
                OrganisationService as any,
                {
                    building: { timezone: '' },
                } as any,
            ),
            {
                provide: EventFormService,
                useFactory: () => {
                    form = new FormGroup({
                        title: new FormControl('Weekly sync'),
                        date: new FormControl(Date.now()),
                        duration: new FormControl(60),
                        all_day: new FormControl(false),
                        recurrence: new FormControl(null),
                        update_master: new FormControl(false),
                        resources: new FormControl([]),
                    });
                    return {
                        form,
                        filters$: new BehaviorSubject({ capacity: -1 }),
                        setFilters: jest.fn(),
                    };
                },
            },
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should disable the start time when editing an in-progress meeting', () => {
        form.get('date')?.disable({ emitEvent: true });
        spectator.detectChanges();

        expect(spectator.component.start_time_disabled()).toBe(true);
        expect(form.get('duration')?.disabled).toBe(false);
    });

    it('should keep the start time enabled for editable meetings', () => {
        expect(spectator.component.start_time_disabled()).toBe(false);
    });
});
