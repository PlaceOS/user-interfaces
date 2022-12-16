import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ScheduleCalendarComponent } from '../../app/new-schedule/schedule-calendar.component';
import { ScheduleSidebarComponent } from '../../app/new-schedule/schedule-sidebar.component';
import { ScheduleStateService } from '../../app/new-schedule/schedule-state.service';

describe('ScheduleSidebarComponent', () => {
    let spectator: Spectator<ScheduleSidebarComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleSidebarComponent,
        declarations: [
            MockComponent(ScheduleCalendarComponent),
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
