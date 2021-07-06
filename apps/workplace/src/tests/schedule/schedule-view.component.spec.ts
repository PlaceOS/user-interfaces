import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent, UserAvatarComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { MockComponent } from 'ng-mocks';

import { CalendarEvent } from 'libs/events/src/lib/event.class';

import { ScheduleViewComponent } from '../../app/schedule/schedule-view.component';

jest.mock('@placeos/common');
jest.mock('@placeos/bookings');
jest.mock('@placeos/events');

import * as common_mod from '@placeos/common';
import * as booking_mod from '@placeos/bookings';
import * as events_mod from '@placeos/events';
import { of } from 'rxjs';

describe('ScheduleViewComponent', () => {
    let spectator: SpectatorRouting<ScheduleViewComponent>;
    const createComponent = createRoutingFactory({
        component: ScheduleViewComponent,
        providers: [
            { provide: MatDialog, useValue: { open: jest.fn() } },
            { provide: EventFormService, useValue: { newForm: jest.fn() } },
        ],
        imports: [FormsModule, MatProgressSpinnerModule],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(UserAvatarComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });

    it('should allow viewing locations of spaces', () => {
        spectator.detectChanges();
        spectator.component.event = new CalendarEvent({
            system: { id: '1', email: '1', resource: true } as any,
        });
        console.log(spectator.component.event);
        spectator.detectChanges();
        console.log(spectator.component.event);
        expect('button[locate]').toExist();
        spectator.click('button[locate]');
        expect(spectator.inject(MatDialog).open).toHaveBeenCalled();
    });

    it('should allow editing of events', () => {
        spectator.detectChanges();
        spectator.component.event = new CalendarEvent({
            system: { id: '1', email: '1' } as any,
        });
        spectator.detectChanges();
        expect('button[edit]').toExist();
        spectator.click('button[edit]');
        expect(spectator.inject(EventFormService).newForm).toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book',
            'spaces',
            'form',
        ]);
    });

    it('should allow deleting events and bookings', () => {
        spectator.component.event = new CalendarEvent({
            resources: [{ id: '1' } as any],
        });
        spectator.detectChanges();
        expect('button[remove]').toExist();
        (common_mod as any).openConfirmModal = jest.fn(() => ({
            reason: 'done',
            loading: jest.fn(),
        }));
        (events_mod as any).removeEvent = jest.fn(() => of({}));
        spectator.click('button[remove]');
        expect(common_mod.openConfirmModal).toHaveBeenCalledTimes(1);
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/schedule',
        ]);
    });
});
