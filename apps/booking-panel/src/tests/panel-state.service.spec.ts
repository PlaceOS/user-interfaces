import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    CalendarEvent,
    DialogEvent,
    OrganisationService,
    SettingsService,
    Space,
    User,
} from '@placeos/common';
import { EventFormService, SpacePipe, SpacesService } from '@placeos/events';
import * as ts_client from '@placeos/ts-client';
import { Subject } from 'rxjs';

import { PanelStateService } from '../app/panel-state.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('PanelStateService booking submission', () => {
    let service: PanelStateService;
    let dialog_events: Subject<DialogEvent>;
    const room = new Space({ id: 'test-room', email: 'room@example.com' });
    const host = new User({ email: 'host@example.com' });
    const module = new ts_client.PlaceModuleBinding(
        new ts_client.PlaceSystemBinding(room.id),
        'Bookings_1',
    );
    const execute = vi.spyOn(module, 'execute');
    const close = vi.fn();
    const open = vi.fn();
    const event_form = {
        newForm: vi.fn(),
        model: signal<Partial<CalendarEvent>>({}),
        postForm: vi.fn(),
        clearForm: vi.fn(),
    };

    beforeEach(() => {
        vi.clearAllMocks();
        event_form.model.set({});
        event_form.postForm.mockResolvedValue(undefined);
        execute.mockResolvedValue(undefined);
        dialog_events = new Subject<DialogEvent>();
        open.mockReturnValue({
            componentInstance: { event: dialog_events },
            close,
        });
        vi.mocked(ts_client.getModule).mockReturnValue(module);
        vi.spyOn(SpacePipe.prototype, 'transform').mockResolvedValue(room);
        TestBed.configureTestingModule({
            providers: [
                PanelStateService,
                { provide: MatDialog, useValue: { closeAll: vi.fn(), open } },
                { provide: SpacesService, useValue: { loadSpace: vi.fn() } },
                { provide: EventFormService, useValue: event_form },
                { provide: SettingsService, useValue: { get: vi.fn() } },
                {
                    provide: OrganisationService,
                    useValue: {
                        initialised: signal(false),
                        waitUntilInitialised: () => Promise.resolve(),
                    },
                },
                { provide: Router, useValue: { events: new Subject() } },
            ],
        });
        service = TestBed.inject(PanelStateService);
        service.system = room.id;
    });

    afterEach(() => service.ngOnDestroy());

    async function submitBooking(
        date = Date.now(),
        future = false,
        force_api = false,
    ) {
        const pending = service.newBooking(date, false, future, force_api);
        await vi.waitFor(() => expect(open).toHaveBeenCalledOnce());
        dialog_events.next({
            reason: 'done',
            metadata: {
                date,
                duration: 30,
                title: 'Panel meeting',
                organiser: host,
            },
        });
        return pending;
    }

    it('books from the modal through the driver without starting staff API queries', async () => {
        await submitBooking();

        expect(execute).toHaveBeenCalledWith('book_now', [
            1800,
            'Panel meeting',
            host.email,
        ]);
        expect(event_form.newForm).not.toHaveBeenCalled();
        expect(event_form.clearForm).not.toHaveBeenCalled();
        expect(event_form.postForm).not.toHaveBeenCalled();
        expect(close).toHaveBeenCalledOnce();
    });

    it.each([
        { future: true, force_api: false, offset: 60 * 60 * 1000 },
        { future: false, force_api: true, offset: 0 },
    ])(
        'uses the event form for future=$future and force_api=$force_api',
        async ({ future, force_api, offset }) => {
            const date = Date.now() + offset;
            // newForm() leaves a default end time in the model
            event_form.model.set({ date_end: date - 60 * 60 * 1000 });
            await submitBooking(date, future, force_api);

            expect(event_form.newForm).toHaveBeenCalledOnce();
            expect(event_form.model()).toMatchObject({
                date,
                duration: 30,
                date_end: date + 30 * 60 * 1000,
                title: 'Panel meeting',
                host: host.email,
                resources: [room],
                system: room,
            });
            expect(event_form.postForm).toHaveBeenCalledWith(true);
            expect(event_form.clearForm).toHaveBeenCalledOnce();
            expect(execute).not.toHaveBeenCalled();
            expect(close).toHaveBeenCalledOnce();
        },
    );
});
