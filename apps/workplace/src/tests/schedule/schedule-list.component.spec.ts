import {
    CdkVirtualScrollViewport,
    ScrollingModule,
} from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { addDays } from 'date-fns';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { ScheduleListItemComponent } from '../../app/schedule/schedule-list-item.component';

import { ScheduleListComponent } from '../../app/schedule/schedule-list.component';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('ScheduleListComponent', () => {
    let spectator: Spectator<ScheduleListComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleListComponent,
        providers: [
            {
                provide: ScheduleStateService,
                useValue: {
                    startPolling: jest.fn(),
                    stopPolling: jest.fn(),
                    setOptions: jest.fn(),
                    events: new BehaviorSubject([]),
                    options: new BehaviorSubject({}),
                    loading: new BehaviorSubject(''),
                },
            },
        ],
        imports: [
            ScrollingModule,
            MatFormFieldModule,
            MatSelectModule,
            MatMenuModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatProgressSpinnerModule,
            FormsModule
        ],
        declarations: [
            MockComponent(ScheduleListItemComponent),
            MockComponent(IconComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should list items', () => {
        expect('[schedule-list-item]').toHaveLength(0);
        const service = spectator.inject(ScheduleStateService);
        (service.events as any).next([{ id: '1' }, { id: '2' }]);
        spectator.detectChanges();
        expect('[schedule-list-item]').toHaveLength(3); // 2 Events + Date
    });

    it('should allow scrolling to a date', async () => {
        spectator.detectChanges();
        const viewport = spectator.query(CdkVirtualScrollViewport);
        (viewport as any).scrollTo = jest.fn();
        await spectator.component.scrollTo(addDays(new Date(), 2));
        expect(viewport.scrollTo).toHaveBeenCalledTimes(1);
    });
});
