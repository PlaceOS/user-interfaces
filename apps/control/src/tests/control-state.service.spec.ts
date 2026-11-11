import { effect, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { Calendar } from '@placeos/common';
import { CalendarService, SpacesService } from '@placeos/events';
import { NEVER, of } from 'rxjs';

vi.mock('@placeos/ts-client', { spy: true });

import { Router } from '@angular/router';
import * as client from '@placeos/ts-client';
import {
    ControlStateService,
    RoomInput,
    RoomOutput,
} from '../app/control-state.service';
import { CONTROL_STORE_KEY } from '../app/control-store-key';

describe('ControlStateService', () => {
    let spectator: SpectatorService<ControlStateService>;
    /** Latest binding callback for each bound variable name */
    let bindings: Record<string, (value: unknown) => void>;
    /** Names of bindings that were released */
    let released: string[];
    /** Values read by `systemBinding` signals, by variable name */
    let status: Record<string, unknown>;
    const execute = vi.fn();
    const loadSpace = vi.fn();
    const calendar_list = signal<Calendar[]>([]);
    // Reads the list before awaiting, like CalendarService.loadCalendars
    const loadCalendars = vi.fn(async () => {
        if (calendar_list().length) return;
        await Promise.resolve();
        calendar_list.set([{ id: 'cal-1' } as Calendar]);
    });
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

    /** Connect to `sys-1` and send the given status for its sources */
    const connect = (
        outputs: Partial<RoomOutput>[] = [],
        inputs: Partial<RoomInput>[] = [],
    ) => {
        spectator.service.setID('sys-1');
        TestBed.tick();
        bindings['available_outputs'](outputs.map((_) => _.id));
        bindings['inputs'](inputs.map((_) => _.id));
        TestBed.tick();
        for (const { id, ...data } of outputs) bindings[`output/${id}`](data);
        for (const { id, ...data } of inputs) bindings[`input/${id}`](data);
    };

    beforeEach(() => {
        loadSpace.mockReset().mockResolvedValue(null);
        execute.mockReset().mockResolvedValue(null);
        vi.mocked(client.isFixedDevice).mockReturnValue(false);
        localStorage.clear();
        bindings = {};
        released = [];
        status = {};
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
                            Object.assign(() => status[name], {
                                subscribe: () => () => null,
                            }),
                    }),
                    execute,
                }) as unknown as ReturnType<typeof client.getModule>,
        );
        spectator = createService();
        vi.mocked(spectator.inject(MatDialog).open).mockReset();
    });

    afterEach(() => vi.useRealTimers());

    it('should ignore the volume status echo for a moment after setting it', () => {
        vi.useFakeTimers();
        connect([{ id: 'out-1', volume: 10 }]);
        spectator.service.setVolume(55.7);
        vi.advanceTimersByTime(100);
        expect(spectator.service.system().volume).toBe(55);
        expect(execute).toHaveBeenCalledWith('volume', [55, 'out-1']);
        // The driver echoes the old level before it applies the new one
        bindings['volume'](10);
        expect(spectator.service.system().volume).toBe(55);
        vi.advanceTimersByTime(500);
        bindings['volume'](60);
        expect(spectator.service.system().volume).toBe(60);
    });

    it('should mute the first output when no source is given', () => {
        connect([{ id: 'out-1', mute: false }, { id: 'out-2' }]);
        spectator.service.setMute(true);
        expect(execute).toHaveBeenCalledWith('mute', [true, 'out-1']);
        const out = spectator.service
            .output_list()
            .find((_) => _.id === 'out-1');
        expect(out.mute).toBe(true);
    });

    it('should not list hidden outputs', () => {
        connect([{ id: 'out-1' }, { id: 'out-2', hidden: true }]);
        expect(spectator.service.output_list().map((_) => _.id)).toEqual([
            'out-1',
        ]);
    });

    it('should hide outputs marked hide_on_join while rooms are joined', () => {
        status['join_modes'] = { combined: { room_ids: ['a', 'b'] } };
        status['joined'] = 'combined';
        connect([{ id: 'out-1' }, { id: 'out-2', hide_on_join: true }]);
        expect(spectator.service.output_list().map((_) => _.id)).toEqual([
            'out-1',
        ]);
    });

    it('should limit cameras to the available list when the system sends one', () => {
        const cams = [
            { id: 'cam-1', type: 'cam' },
            { id: 'cam-2', mod: 'Camera_2' },
            { id: 'mic-1', type: 'mic' },
        ];
        connect([], cams);
        const ids = () =>
            spectator.service.available_cameras().map((_) => _.id);
        expect(ids()).toEqual(['cam-1', 'cam-2']);

        status['available_cameras'] = ['cam-2'];
        spectator.service.setID('sys-2');
        TestBed.tick();
        bindings['inputs'](cams.map((_) => _.id));
        TestBed.tick();
        for (const { id, ...data } of cams) bindings[`input/${id}`](data);
        expect(ids()).toEqual(['cam-2']);
    });

    it('should route a chosen input to the active output, then clear it', async () => {
        connect([{ id: 'out-1', source: 'in-1' }]);
        spectator.service.setOutput('out-1');
        await spectator.service.setOutputSource('in-2');
        expect(execute).toHaveBeenCalledWith('route', ['in-2', 'out-1']);
        expect(spectator.service.active_output()).toBe('');
    });

    it('should not route an input that the active output already shows', async () => {
        connect([{ id: 'out-1', source: 'in-1' }]);
        spectator.service.setOutput('out-1');
        await spectator.service.setOutputSource('in-1');
        expect(execute).not.toHaveBeenCalledWith('route', expect.anything());
    });

    it('should only unroute outputs that show a source', async () => {
        connect([
            { id: 'out-1', source: 'in-1' },
            { id: 'out-2', source: '' },
        ]);
        await spectator.service.unrouteAll();
        expect(execute).toHaveBeenCalledTimes(1);
        expect(execute).toHaveBeenCalledWith('unroute', ['out-1']);
    });

    describe('changeRoom', () => {
        let navigate: ReturnType<typeof vi.fn>;
        const confirm = (done: boolean) =>
            vi.mocked(spectator.inject(MatDialog).open).mockReturnValue({
                componentInstance: {
                    event: done ? of({ reason: 'done' }) : NEVER,
                },
                afterClosed: () => (done ? NEVER : of(undefined)),
                close: vi.fn(),
            } as unknown as ReturnType<MatDialog['open']>);

        beforeEach(() => {
            const router = spectator.inject(Router);
            navigate = vi.spyOn(router, 'navigate').mockResolvedValue(true);
            localStorage.setItem(CONTROL_STORE_KEY, 'sys-1');
        });

        it('should forget the system and go to bootstrap when confirmed', async () => {
            confirm(true);
            await spectator.service.changeRoom();
            expect(localStorage.getItem(CONTROL_STORE_KEY)).toBeNull();
            expect(navigate).toHaveBeenCalledWith(['/bootstrap']);
        });

        it('should keep the system when the user dismisses the prompt', async () => {
            confirm(false);
            await spectator.service.changeRoom();
            expect(localStorage.getItem(CONTROL_STORE_KEY)).toBe('sys-1');
            expect(navigate).not.toHaveBeenCalled();
        });

        it('should not prompt on a fixed device', async () => {
            vi.mocked(client.isFixedDevice).mockReturnValue(true);
            await spectator.service.changeRoom();
            expect(spectator.inject(MatDialog).open).not.toHaveBeenCalled();
            expect(localStorage.getItem(CONTROL_STORE_KEY)).toBe('sys-1');
        });
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

    it('should keep source bindings when the same list is sent again', () => {
        spectator.service.setID('sys-1');
        TestBed.tick();
        bindings['inputs'](['a', 'b']);
        TestBed.tick();
        // The server sends a new array with the same aliases on reconnect
        bindings['inputs'](['a', 'b']);
        TestBed.tick();
        expect(released).not.toContain('input/a');
    });

    it('should rebind sources for a new system with the same list', () => {
        spectator.service.setID('sys-1');
        TestBed.tick();
        bindings['inputs'](['a']);
        TestBed.tick();
        spectator.service.setID('sys-2');
        TestBed.tick();
        bindings['inputs'](['a']);
        TestBed.tick();
        expect(released).toContain('input/a');
        expect(vi.mocked(client.getModule)).toHaveBeenCalledWith(
            'sys-2',
            'System',
        );
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

    it('should not open the meeting list again when calendars load', async () => {
        const dialog = spectator.inject(MatDialog);
        calendar_list.set([]);
        const ref = TestBed.runInInjectionContext(() =>
            effect(() => {
                spectator.service.selectMeeting();
            }),
        );
        TestBed.tick();
        await new Promise((r) => setTimeout(r));
        TestBed.tick();
        expect(dialog.open).toHaveBeenCalledTimes(1);
        ref.destroy();
    });
});
