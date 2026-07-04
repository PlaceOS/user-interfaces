import { signal } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { MockComponent, MockPipe } from 'ng-mocks';

import * as common_mod from '@placeos/common';
import * as component_mod from '@placeos/components';

import { ControlStateService } from '../../app/control-state.service';
import { SelectMeetingModalComponent } from '../../app/ui/select-meeting-modal.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifySuccess: jest.fn(),
}));
jest.mock('@placeos/components', () => ({
    ...jest.requireActual('@placeos/components'),
    openConfirmModal: jest.fn(),
}));

describe('SelectMeetingModalComponent', () => {
    let spectator: Spectator<SelectMeetingModalComponent>;
    let calendars: ReturnType<typeof signal<any[]>>;
    let events: ReturnType<typeof signal<any[]>>;
    let calendar: ReturnType<typeof signal<any>>;
    let service: any;
    let dialog_ref: { close: jest.Mock };

    const createComponent = createComponentFactory({
        component: SelectMeetingModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => {
        calendars = signal<any[]>([
            { id: 'c1', name: 'Cal One' },
            { id: 'c2', summary: 'Cal Two' },
        ]);
        events = signal<any[]>([
            { title: 'Standup', date: Date.now(), organiser: { name: 'Ada' } },
        ]);
        calendar = signal<any>(calendars()[0]);
        service = {
            calendars,
            events,
            calendar,
            setCalendar: jest.fn((c) => calendar.set(c)),
            setEvent: jest.fn(async () => undefined),
        };
        dialog_ref = { close: jest.fn() };
        (common_mod.notifySuccess as jest.Mock).mockClear();
        (component_mod.openConfirmModal as jest.Mock).mockReset();
        spectator = createComponent({
            providers: [
                { provide: ControlStateService, useValue: service },
                { provide: MatDialog, useValue: { open: jest.fn() } },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render a button for each event', () => {
        expect(spectator.queryAll('button[btn]')).toHaveLength(1);
        expect(spectator.query('button[btn]')).toContainText('Standup');
    });

    it('should show an empty state when there are no events', () => {
        events.set([]);
        spectator.detectChanges();
        expect(spectator.query('button[btn]')).not.toExist();
    });

    it('should show a loading spinner while loading', () => {
        spectator.component.loading.set(true);
        spectator.detectChanges();
        expect('mat-spinner').toExist();
        expect(spectator.query('button[btn]')).not.toExist();
    });

    it('should delegate calendar selection to the service', () => {
        spectator.component.setCalendar(calendars()[1]);
        expect(service.setCalendar).toHaveBeenCalledWith(calendars()[1]);
    });

    it('should join a meeting when the confirmation is completed', async () => {
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue({
            loading: jest.fn(),
            reason: 'done',
        });
        const event = events()[0];
        await spectator.component.select(event);
        expect(component_mod.openConfirmModal).toHaveBeenCalled();
        expect(service.setEvent).toHaveBeenCalledWith(event);
        expect(common_mod.notifySuccess).toHaveBeenCalled();
        expect(dialog_ref.close).toHaveBeenCalled();
    });

    it('should not join a meeting when the confirmation is dismissed', async () => {
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue({
            loading: jest.fn(),
            reason: 'close',
        });
        await spectator.component.select(events()[0]);
        expect(service.setEvent).not.toHaveBeenCalled();
        expect(common_mod.notifySuccess).not.toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });
});
