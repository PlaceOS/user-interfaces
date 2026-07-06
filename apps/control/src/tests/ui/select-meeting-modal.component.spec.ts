import { signal } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setNotifyOutlet } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { MockComponent, MockPipe } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import { ControlStateService } from '../../app/control-state.service';
import { SelectMeetingModalComponent } from '../../app/ui/select-meeting-modal.component';

describe('SelectMeetingModalComponent', () => {
    let spectator: Spectator<SelectMeetingModalComponent>;
    let calendars: ReturnType<typeof signal<any[]>>;
    let events: ReturnType<typeof signal<any[]>>;
    let calendar: ReturnType<typeof signal<any>>;
    let service: any;
    let dialog_ref: { close: any };
    let dialog_open: any;
    let notify_open: any;

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
            setCalendar: vi.fn((c) => calendar.set(c)),
            setEvent: vi.fn(async () => undefined),
        };
        dialog_ref = { close: vi.fn() };
        dialog_open = vi.fn();
        notify_open = vi.fn(() => ({
            onAction: () => of(),
            dismiss: vi.fn(),
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        spectator = createComponent({
            providers: [
                { provide: ControlStateService, useValue: service },
                {
                    provide: MatDialog,
                    useValue: { open: (...args: any[]) => dialog_open(...args) },
                },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        });
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
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
        dialog_open.mockReturnValue({
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: signal(''),
            },
            afterClosed: () => NEVER,
            close: vi.fn(),
        });
        const event = events()[0];
        await spectator.component.select(event);
        expect(dialog_open).toHaveBeenCalled();
        expect(service.setEvent).toHaveBeenCalledWith(event);
        expect(notify_open).toHaveBeenCalled();
        expect(dialog_ref.close).toHaveBeenCalled();
    });

    it('should not join a meeting when the confirmation is dismissed', async () => {
        dialog_open.mockReturnValue({
            componentInstance: {
                event: NEVER,
                loading: signal(''),
            },
            afterClosed: () => of({ reason: 'close' }),
            close: vi.fn(),
        });
        await spectator.component.select(events()[0]);
        expect(service.setEvent).not.toHaveBeenCalled();
        expect(notify_open).not.toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });
});
