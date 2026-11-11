import { EventEmitter } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { DialogEvent } from '@placeos/common';
import { NEVER, of } from 'rxjs';

import { PointsAssetModalComponent } from '../../app/points/asset-modal.component';
import { PointAsset } from '../../app/points/points-assets.component';
import { PointsStateService } from '../../app/points/points-state.service';

const STORE_KEY = 'PLACEOS.point_assets';

describe('PointsStateService', () => {
    let spectator: SpectatorService<PointsStateService>;
    let dialog_open: ReturnType<typeof vi.fn>;
    const createService = createServiceFactory({
        service: PointsStateService,
        providers: [{ provide: MatDialog, useValue: { open: vi.fn() } }],
    });

    const asset = (id: string, name = id) =>
        ({ id, name, type: 'desk' }) as PointAsset;

    /** Fake asset modal ref; emit on `event` to answer it */
    const modalRef = () => {
        const event = new EventEmitter<DialogEvent>();
        const ref = {
            componentInstance: { event },
            afterClosed: () => NEVER,
            close: vi.fn(),
        };
        dialog_open.mockReturnValue(ref);
        return ref;
    };

    /** Fake confirm modal ref that `openConfirmModal` resolves with `reason` */
    const confirmRef = (reason: string) => {
        const ref = {
            componentInstance: {
                event: reason === 'done' ? of({ reason }) : NEVER,
                loading: { set: vi.fn() },
            },
            afterClosed: () => of({ reason }),
            close: vi.fn(),
        };
        dialog_open.mockReturnValue(ref);
        return ref;
    };

    beforeEach(() => {
        localStorage.clear();
        dialog_open = vi.fn();
    });

    const create = () => {
        spectator = createService({
            providers: [
                { provide: MatDialog, useValue: { open: dialog_open } },
            ],
        });
    };

    it('should load stored assets and save changes back to storage', async () => {
        localStorage.setItem(STORE_KEY, JSON.stringify([asset('PA-1')]));
        create();
        expect(spectator.service.assets()).toEqual([asset('PA-1')]);

        const ref = modalRef();
        const done = spectator.service.newAsset();
        ref.componentInstance.event.emit({
            reason: 'done',
            metadata: { name: 'Desk 2', type: 'desk' },
        });
        await done;
        TestBed.tick();

        const stored = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
        expect(stored).toHaveLength(2);
        expect(stored[1]).toEqual(
            expect.objectContaining({
                name: 'Desk 2',
                id: expect.stringMatching(/^PA-\d+$/),
            }),
        );
    });

    it('should replace the edited asset and keep its ID', async () => {
        localStorage.setItem(
            STORE_KEY,
            JSON.stringify([asset('PA-1', 'Old'), asset('PA-2')]),
        );
        create();
        const ref = modalRef();

        const done = spectator.service.newAsset(asset('PA-1', 'Old'));
        expect(dialog_open).toHaveBeenCalledWith(PointsAssetModalComponent, {
            data: { asset: asset('PA-1', 'Old') },
        });
        ref.componentInstance.event.emit({
            reason: 'done',
            metadata: { ...asset('PA-1'), name: 'New' },
        });
        await done;

        expect(spectator.service.assets().map((_) => [_.id, _.name])).toEqual([
            ['PA-2', 'PA-2'],
            ['PA-1', 'New'],
        ]);
        expect(ref.close).toHaveBeenCalled();
    });

    it('should not change the list when the asset modal closes without saving', async () => {
        create();
        const ref = {
            componentInstance: { event: new EventEmitter<DialogEvent>() },
            afterClosed: () => of(undefined),
            close: vi.fn(),
        };
        dialog_open.mockReturnValue(ref);

        await spectator.service.newAsset();

        expect(spectator.service.assets()).toEqual([]);
    });

    it('should remove an asset only after the user confirms', async () => {
        localStorage.setItem(
            STORE_KEY,
            JSON.stringify([asset('PA-1'), asset('PA-2')]),
        );
        create();

        confirmRef('cancel');
        await spectator.service.removeAsset(asset('PA-1'));
        expect(spectator.service.assets()).toHaveLength(2);

        confirmRef('done');
        await spectator.service.removeAsset(asset('PA-1'));
        expect(spectator.service.assets().map((_) => _.id)).toEqual(['PA-2']);
    });
});
