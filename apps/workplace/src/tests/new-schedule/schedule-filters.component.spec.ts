import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ScheduleFiltersComponent } from '../../app/new-schedule/schedule-filters.component';
import { ScheduleStateService } from '../../app/new-schedule/schedule-state.service';

describe('ScheduleFiltersComponent', () => {
    let spectator: Spectator<ScheduleFiltersComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleFiltersComponent,
        providers: [
            MockProvider(ScheduleStateService, {
                filters: new BehaviorSubject({}) as any,
                toggleType: jest.fn(),
                setDate: jest.fn(),
            }),
            MockProvider(MatBottomSheet, { open: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
