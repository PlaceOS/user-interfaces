import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { ActionIconComponent, IconComponent } from '@placeos/components';
import { CalendarEvent } from '@placeos/events';
import { GuestUser } from '@placeos/users';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { VisitorDetailsComponent } from '../../app/visitors/visitor-details.component';
import { VisitorsStateService } from '../../app/visitors/visitors-state.service';

jest.mock('@placeos/ts-client');

import * as event_mod from '@placeos/events';
import * as ts_client from '@placeos/ts-client';

describe('VisitorDetailsComponent', () => {
    let spectator: Spectator<VisitorDetailsComponent>;
    const createComponent = createComponentFactory({
        component: VisitorDetailsComponent,
        providers: [
            {
                provide: VisitorsStateService,
                useValue: {
                    checkGuestOut: jest.fn(async () => ({})),
                    checkGuestIn: jest.fn(async () => ({})),
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
        ],
        declarations: [
            MockComponent(ActionIconComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatTooltipModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        (ts_client as any).get = jest.fn(() => ({}));
        expect('[details]').not.toExist();
        spectator.setInput({
            event: new CalendarEvent({ date: 1 }),
            visitor: new GuestUser(),
        });
        spectator.detectChanges();
        expect('[details]').toExist();
    });

    it('should allow toggling remote state', () => {
        (ts_client as any).get = jest.fn(() => of({}));
        (ts_client as any).patch = jest.fn(() => of({}));
        (ts_client as any).post = jest.fn(() => of({}));
        jest.spyOn(event_mod, 'saveEvent');
        spectator.setInput({
            event: new CalendarEvent(),
            visitor: new GuestUser(),
        });
        spectator.detectChanges();
        spectator.click('action-icon[remote]');
        expect(event_mod.saveEvent).toBeCalled();
    });

    it('should checking in visitor', () => {
        const service = spectator.inject(VisitorsStateService);
        spectator.setInput({
            event: new CalendarEvent(),
            visitor: new GuestUser(),
        });
        spectator.detectChanges();
        spectator.click('action-icon[checkin]');
        expect(service.checkGuestIn).toBeCalled();
    });

    it('should checking out visitor', () => {
        const service = spectator.inject(VisitorsStateService);
        spectator.setInput({
            event: new CalendarEvent(),
            visitor: new GuestUser({ checked_in: true }),
        });
        spectator.detectChanges();
        spectator.click('action-icon[checkout]');
        expect(service.checkGuestOut).toBeCalled();
    });
});
