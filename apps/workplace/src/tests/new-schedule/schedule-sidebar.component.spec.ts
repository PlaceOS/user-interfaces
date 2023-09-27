import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ScheduleSidebarComponent } from '../../app/new-schedule/schedule-sidebar.component';
import { ScheduleStateService } from '../../app/new-schedule/schedule-state.service';
import { DateCalendarComponent } from 'libs/form-fields/src/lib/date-calendar.component';

describe('ScheduleSidebarComponent', () => {
    let spectator: Spectator<ScheduleSidebarComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleSidebarComponent,
        declarations: [
            MockComponent(DateCalendarComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            MockProvider(ScheduleStateService, {
                filters: new BehaviorSubject({}),
                date: new BehaviorSubject(0),
                toggleType: jest.fn(),
                setDate: jest.fn(),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [MatCheckboxModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
