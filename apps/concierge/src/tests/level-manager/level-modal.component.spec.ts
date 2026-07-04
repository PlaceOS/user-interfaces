import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { LevelModalComponent } from '../../app/level-manager/level-modal.component';

import * as common_mod from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
}));
jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    authority: jest.fn(() => ({ description: 'ACME' })),
    addZone: jest.fn(),
    updateZone: jest.fn(),
}));

describe('LevelModalComponent', () => {
    let spectator: Spectator<LevelModalComponent>;

    const createComponent = createComponentFactory({
        component: LevelModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, null),
            MockProvider(MatDialogRef, { close: jest.fn() }),
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
        (common_mod.notifyError as jest.Mock).mockClear();
        (ts_client.addZone as jest.Mock).mockReset();
        (ts_client.updateZone as jest.Mock).mockReset();
        (ts_client.addZone as jest.Mock).mockResolvedValue({ id: 'lvl-new' });
        (ts_client.updateZone as jest.Mock).mockResolvedValue({ id: 'lvl-1' });
    });

    afterEach(() => jest.restoreAllMocks());

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

        expect(common_mod.notifyError).toHaveBeenCalled();
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
