import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { LevelModalComponent } from '../../app/level-manager/level-modal.component';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('LevelModalComponent', () => {
    let spectator: Spectator<LevelModalComponent>;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: LevelModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, null),
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(OrganisationService, {
                building_list: signal([
                    { id: 'bld-1', name: 'Alpha', display_name: 'Alpha' },
                ]) as any,
            }),
        ],
    });

    const buildLevel = (data: any) => () =>
        createComponent({
            providers: [MockProvider(MAT_DIALOG_DATA, data)],
        });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        (ts_client.authority as any).mockReturnValue({ description: 'ACME' });
        (ts_client.addZone as any).mockReset();
        (ts_client.updateZone as any).mockReset();
        (ts_client.addZone as any).mockResolvedValue({ id: 'lvl-new' });
        (ts_client.updateZone as any).mockResolvedValue({ id: 'lvl-1' });
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
        vi.restoreAllMocks();
    });

    it('should seed the model from the injected level including parking tag', () => {
        spectator = buildLevel({
            id: 'lvl-1',
            display_name: 'Level 1',
            parent_id: 'bld-1',
            map_id: '/map.svg',
            tags: ['level', 'parking'],
        })();
        const model = spectator.component.model();
        expect(model.id).toBe('lvl-1');
        expect(model.display_name).toBe('Level 1');
        expect(model.map_id).toBe('/map.svg');
        expect(model.parking).toBe(true);
    });

    it('should block saving and notify when required fields are missing', async () => {
        spectator = buildLevel(null)();

        await spectator.component.save();

        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(ts_client.addZone).not.toHaveBeenCalled();
    });

    it('should create a new level with parking tag and close on success', async () => {
        spectator = buildLevel(null)();
        spectator.component.model.set({
            id: '',
            display_name: 'Ground Floor',
            parent_id: 'bld-1',
            map_id: '/ground.svg',
            parking: true,
        });

        await spectator.component.save();

        expect(ts_client.addZone).toHaveBeenCalledWith(
            expect.objectContaining({
                tags: ['level', 'parking'],
                name: 'LEVEL ACME Ground Floor',
            }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith({
            id: 'lvl-new',
        });
        expect(spectator.component.loading()).toBe(false);
    });

    it('should update an existing level via updateZone without parking tag', async () => {
        spectator = buildLevel({
            id: 'lvl-1',
            display_name: 'Level 1',
            parent_id: 'bld-1',
            map_id: '/map.svg',
            tags: ['level'],
        })();

        await spectator.component.save();

        expect(ts_client.updateZone).toHaveBeenCalledWith(
            'lvl-1',
            expect.objectContaining({ tags: ['level'] }),
        );
        expect(ts_client.addZone).not.toHaveBeenCalled();
    });
});
