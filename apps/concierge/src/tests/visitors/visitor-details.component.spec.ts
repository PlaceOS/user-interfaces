import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { ActionIconComponent, IconComponent } from '@placeos/components';
import { CalendarEvent } from '@placeos/events';
import { GuestUser } from '@placeos/users';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of, timer } from 'rxjs';

import { VisitorDetailsComponent } from '../../app/visitors/visitor-details.component';
import { VisitorsStateService } from '../../app/visitors/visitors-state.service';

jest.mock('@placeos/ts-client');

import * as event_mod from '@placeos/events';
import * as ts_client from '@placeos/ts-client';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { Space } from '@placeos/spaces';
import { fakeAsync } from '@angular/core/testing';

describe('VisitorDetailsComponent', () => {
    let spectator: Spectator<VisitorDetailsComponent>;
    const createComponent = createComponentFactory({
        component: VisitorDetailsComponent,
        providers: [
            MockProvider(VisitorsStateService, {
                checkGuestOut: jest.fn(async () => ({})),
                checkGuestIn: jest.fn(async () => ({})),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        componentProviders: [
            MockProvider(SpacePipe, {
                transform: jest.fn(async () => new Space()),
            }),
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

    it('should allow toggling remote state', async () => {
        (ts_client as any).get = jest.fn(() => of({}));
        (ts_client as any).patch = jest.fn(() => of({}));
        (ts_client as any).post = jest.fn(() => of({}));
        jest.spyOn(event_mod, 'updateEventMetadata');
        spectator.setInput({
            event: new CalendarEvent(),
            visitor: new GuestUser(),
        });
        spectator.detectChanges();
        spectator.click('action-icon[remote]');
        await timer(100).toPromise();
        expect(event_mod.updateEventMetadata).toBeCalled();
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
