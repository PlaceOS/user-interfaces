import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { DateCalendarComponent } from '@placeos/form-fields';
import { MockComponent, MockProvider } from 'ng-mocks';
import { ScheduleSidebarComponent } from '../../app/schedule/schedule-sidebar.component';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

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
                filters: signal({ shown_types: [] }),
                date: signal(0),
                end_date: signal(null),
                week_date: signal(0),
                week_options: signal([]),
                toggleType: jest.fn(),
                setDate: jest.fn(),
                setEndDate: jest.fn(),
                options: signal({ period: 'day' }),
                getOptions: jest.fn(() => ({ period: 'day' })),
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
