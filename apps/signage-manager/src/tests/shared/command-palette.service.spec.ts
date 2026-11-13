import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    query,
    querySignageMedia,
    querySignagePlaylists,
    querySignageTemplates,
    queryZones,
} from '@placeos/ts-client';
import { Subject } from 'rxjs';
import { CommandPaletteService } from '../../app/shared/command-palette.service';
import { SignageContextService } from '../../app/signage-context.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('CommandPaletteService', () => {
    const dialog = { open: vi.fn(), openDialogs: [] as unknown[] };
    const templates_enabled = signal(true);

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: MatDialog, useValue: dialog },
                {
                    provide: SignageContextService,
                    useValue: {
                        canQueryLists: () => true,
                        orgZoneQueryParams: (params: object) => params,
                        groupQueryParams: (params: object) => params,
                        templates_enabled,
                    },
                },
            ],
        });
        return TestBed.inject(CommandPaletteService);
    }

    /** Make the next opened dialog, and close it when `closed` emits */
    function nextRef() {
        const closed = new Subject<void>();
        const ref = { close: vi.fn(), afterClosed: () => closed };
        dialog.open.mockReturnValue(ref);
        return { ref, closed };
    }

    beforeEach(() => {
        vi.clearAllMocks();
        dialog.openDialogs = [];
        templates_enabled.set(true);
    });

    describe('toggle', () => {
        it('opens one palette while it loads, then closes it', async () => {
            const service = make();
            const { ref, closed } = nextRef();

            await Promise.all([service.toggle(), service.toggle()]);
            expect(dialog.open).toHaveBeenCalledOnce();

            await service.toggle();
            expect(ref.close).toHaveBeenCalledOnce();

            closed.next();
            nextRef();
            await service.toggle();
            expect(dialog.open).toHaveBeenCalledTimes(2);
        });

        it('does not open on top of another dialog', async () => {
            const service = make();
            dialog.openDialogs = [{}];

            await service.toggle();

            expect(dialog.open).not.toHaveBeenCalled();
        });
    });

    describe('searchAll', () => {
        beforeEach(() => {
            vi.mocked(query).mockResolvedValue({
                data: [{ id: 'display-1', name: 'Lobby' }],
            } as never);
            vi.mocked(querySignagePlaylists).mockRejectedValue(
                new Error('down'),
            );
            vi.mocked(querySignageTemplates).mockResolvedValue({
                data: [{ id: 'template-1' }],
            } as never);
            vi.mocked(queryZones).mockResolvedValue({
                data: [{ id: 'z1' }, { id: 'z2' }, { id: 'z3' }],
            } as never);
            vi.mocked(querySignageMedia).mockResolvedValue({
                data: [],
            } as never);
        });

        it('leaves only the type whose query fails empty and keeps the limit', async () => {
            const results = await make().searchAll('lobby', 2);

            expect(results.displays.map(({ id }) => id)).toEqual(['display-1']);
            expect(results.playlists).toEqual([]);
            expect(results.templates.map(({ id }) => id)).toEqual([
                'template-1',
            ]);
            expect(results.zones.map(({ id }) => id)).toEqual(['z1', 'z2']);
            expect(queryZones).toHaveBeenCalledWith(
                expect.objectContaining({ q: 'lobby', tags: 'signage' }),
            );
        });

        it('does not search templates when they are off', async () => {
            templates_enabled.set(false);

            const results = await make().searchAll('lobby');

            expect(querySignageTemplates).not.toHaveBeenCalled();
            expect(results.templates).toEqual([]);
        });
    });
});
