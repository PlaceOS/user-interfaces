import { signal } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setNotifyOutlet } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import * as ts_client from '@placeos/ts-client';
import { MockComponent, MockPipe } from 'ng-mocks';
import { NEVER, of, tap } from 'rxjs';

import { ControlStateService } from '../../app/control-state.service';
import { SelectMeetingModalComponent } from '../../app/ui/select-meeting-modal.component';

// `queryEvents` can't be mocked under the bundling builder, so stub the
// ts-client `get` that it calls.
vi.mock('@placeos/ts-client', { spy: true });

/** Raw API event with a meeting URL that the room supports */
const STANDUP = {
    id: 'e1',
    title: 'Standup',
    organiser: { name: 'Ada' },
    meeting_url: 'https://meet.room/abc',
};

/** Make the events API answer with the given raw events */
const respond = (events: Promise<unknown[]> | unknown[]) =>
    vi
        .mocked(ts_client.get)
        .mockImplementation((() =>
            Promise.resolve(events)) as unknown as typeof ts_client.get);

describe('SelectMeetingModalComponent', () => {
    let spectator: Spectator<SelectMeetingModalComponent>;
    let calendars: ReturnType<typeof signal<any[]>>;
    let calendar: ReturnType<typeof signal<unknown>>;
    let service: any;
    let dialog_ref: { close: unknown };
    let dialog_open: any;
    let notify_open: any;

    const createComponent = createComponentFactory({
        component: SelectMeetingModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
        imports: [MatProgressSpinnerModule],
        detectChanges: false,
    });

    /** Open the modal and wait for the events to load */
    const open = async () => {
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        spectator.detectChanges();
    };

    beforeEach(() => {
        respond([STANDUP]);
        calendars = signal<unknown[]>([
            { id: 'c1', name: 'Cal One' },
            { id: 'c2', summary: 'Cal Two' },
        ]);
        calendar = signal<unknown>(calendars()[0]);
        service = {
            calendars,
            calendar,
            meeting_url: signal('https://meet.room'),
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
                    useValue: {
                        open: (...args: any[]) => dialog_open(...args),
                    },
                },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        });
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
    });

    it('should not load events before the modal opens', () => {
        expect(ts_client.get).not.toHaveBeenCalled();
    });

    it("should list today's events for the room's meeting URL", async () => {
        respond([
            STANDUP,
            { id: 'e2', title: 'Other', meeting_url: 'https://other.site/abc' },
        ]);
        await open();
        expect(ts_client.get).toHaveBeenCalledWith(
            expect.stringContaining('calendars=c1'),
        );
        expect(spectator.queryAll('button[btn]')).toHaveLength(1);
        expect(spectator.query('button[btn]')).toContainText('Standup');
    });

    it('should show an empty state when there are no events', async () => {
        respond([]);
        await open();
        expect(spectator.query('button[btn]')).not.toExist();
    });

    it('should show a loading spinner while loading', () => {
        respond(new Promise(() => {}));
        spectator.detectChanges();
        expect('mat-spinner').toExist();
        expect(spectator.query('button[btn]')).not.toExist();
    });

    it('should delegate calendar selection to the service', () => {
        spectator.component.setCalendar(calendars()[1]);
        expect(service.setCalendar).toHaveBeenCalledWith(calendars()[1]);
    });

    /** Confirm modal ref that resolves as confirmed */
    const confirmedRef = () => ({
        componentInstance: {
            event: of({ reason: 'done' }),
            loading: signal(''),
        },
        afterClosed: () => NEVER,
        close: vi.fn(),
    });

    it('should join a meeting when the confirmation is completed', async () => {
        const confirm_ref = confirmedRef();
        dialog_open.mockReturnValue(confirm_ref);
        await open();
        const event = spectator.component.events()[0];
        await spectator.component.select(event);
        expect(dialog_open).toHaveBeenCalled();
        expect(service.setEvent).toHaveBeenCalledWith(event);
        expect(notify_open).toHaveBeenCalled();
        expect(confirm_ref.close).toHaveBeenCalled();
        expect(dialog_ref.close).toHaveBeenCalled();
    });

    it('should close the confirmation and keep the list open when joining fails', async () => {
        const confirm_ref = confirmedRef();
        dialog_open.mockReturnValue(confirm_ref);
        service.setEvent.mockRejectedValue(new Error('offline'));
        await open();
        await spectator.component.select(spectator.component.events()[0]);
        expect(notify_open).toHaveBeenCalled();
        expect(confirm_ref.close).toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });

    it('should not join a meeting when the confirmation is dismissed', async () => {
        // Like MatDialogRef, the component instance is cleared once closed
        const confirm_ref = {
            componentInstance: { event: NEVER, loading: signal('') },
            afterClosed: () =>
                of(undefined).pipe(
                    tap(() => (confirm_ref.componentInstance = null)),
                ),
            close: vi.fn(),
        };
        dialog_open.mockReturnValue(confirm_ref);
        await open();
        await spectator.component.select(spectator.component.events()[0]);
        expect(service.setEvent).not.toHaveBeenCalled();
        expect(notify_open).not.toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });
});
