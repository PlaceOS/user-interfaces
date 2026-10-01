import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { CalendarService, SpacesService } from '@placeos/events';
import { of } from 'rxjs';

vi.mock('@placeos/ts-client', { spy: true });

import * as client from '@placeos/ts-client';
import { ControlStateService } from '../app/control-state.service';

describe('ControlStateService', () => {
    let spectator: SpectatorService<ControlStateService>;
    /** Latest binding callback for each bound variable name */
    let bindings: Record<string, (value: unknown) => void>;
    /** Names of bindings that were released */
    let released: string[];
    const createService = createServiceFactory({
        service: ControlStateService,
        providers: [
            { provide: MatDialog, useValue: { open: vi.fn() } },
            { provide: CalendarService, useValue: { calendars: of([]) } },
            {
                provide: SpacesService,
                useValue: { loadSpaces: vi.fn(), loadSpace: vi.fn() },
            },
        ],
    });

    beforeEach(() => {
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
});
