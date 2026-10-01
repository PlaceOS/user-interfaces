import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { Calendar } from '@placeos/common';
import { CalendarService, SpacesService } from '@placeos/events';

vi.mock('@placeos/ts-client', { spy: true });

import { Router } from '@angular/router';
import * as client from '@placeos/ts-client';
import {
    CONTROL_STORE_KEY,
    ControlStateService,
} from '../app/control-state.service';

describe('ControlStateService', () => {
    let spectator: SpectatorService<ControlStateService>;
    /** Latest binding callback for each bound variable name */
    let bindings: Record<string, (value: unknown) => void>;
    /** Names of bindings that were released */
    let released: string[];
    const loadSpace = vi.fn();
    const calendar_list = signal<Calendar[]>([]);
    const loadCalendars = vi.fn(async () =>
        calendar_list.set([{ id: 'cal-1' } as Calendar]),
    );
    const createService = createServiceFactory({
        service: ControlStateService,
        providers: [
            { provide: MatDialog, useValue: { open: vi.fn() } },
            {
                provide: CalendarService,
                useValue: { calendar_list, loadCalendars },
            },
            {
                provide: SpacesService,
                useValue: { loadSpaces: vi.fn(), loadSpace },
            },
        ],
    });

    beforeEach(() => {
        loadSpace.mockReset().mockResolvedValue(null);
        localStorage.clear();
        bindings = {};
        released = [];
        vi.mocked(client.getModule).mockImplementation(
            () =>
                ({
                    variable: (name: string) => ({
                        bindThenSubscribe: (cb: (value: unknown) => void) => {
                            bindings[name] = cb;
                            return () => released.push(name);
                        },
                        bind: () => () => null,
                        listen: () =>
                            Object.assign(() => undefined, {
                                subscribe: () => () => null,
                            }),
                    }),
                    execute: vi.fn(async () => null),
                }) as unknown as ReturnType<typeof client.getModule>,
        );
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should update the master volume locally when it is set', () => {
        vi.useFakeTimers();
        spectator.service.setVolume(55);
        vi.advanceTimersByTime(200);
        expect(spectator.service.system().volume).toBe(55);
        vi.useRealTimers();
    });

    it('should release source bindings that are no longer listed', () => {
        spectator.service.setID('sys-1');
        TestBed.tick();
        bindings['inputs'](['a', 'b']);
        TestBed.tick();
        expect(bindings['input/a']).toBeDefined();
        bindings['inputs'](['b']);
        TestBed.tick();
        expect(released).toContain('input/a');
    });

    it('should return to bootstrap and forget the system when it does not exist', async () => {
        const router = spectator.inject(Router);
        const navigate = vi.spyOn(router, 'navigate').mockResolvedValue(true);
        localStorage.setItem(CONTROL_STORE_KEY, 'missing');
        loadSpace.mockRejectedValue({ status: 404 });
        spectator.service.setID('missing');
        await new Promise((r) => setTimeout(r));
        expect(navigate).toHaveBeenCalledWith(['/bootstrap']);
        expect(localStorage.getItem(CONTROL_STORE_KEY)).toBeNull();
    });

    it('should stay on the system when loading fails for another reason', async () => {
        const router = spectator.inject(Router);
        const navigate = vi.spyOn(router, 'navigate').mockResolvedValue(true);
        localStorage.setItem(CONTROL_STORE_KEY, 'sys-1');
        loadSpace.mockRejectedValue({ status: 500 });
        spectator.service.setID('sys-1');
        await new Promise((r) => setTimeout(r));
        expect(navigate).not.toHaveBeenCalled();
        expect(localStorage.getItem(CONTROL_STORE_KEY)).toBe('sys-1');
    });

    it('should load calendars and pick the first when selecting a meeting', async () => {
        calendar_list.set([]);
        await spectator.service.selectMeeting();
        expect(loadCalendars).toHaveBeenCalled();
        expect(spectator.service.calendar()?.id).toBe('cal-1');
    });
});
