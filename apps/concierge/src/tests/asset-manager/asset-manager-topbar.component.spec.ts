import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { Subject } from 'rxjs';

import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetManagerTopbarComponent } from '../../app/asset-manager/asset-manager-topbar.component';

describe('AssetManagerTopbarComponent', () => {
    let spectator: Spectator<AssetManagerTopbarComponent>;
    let org: any;
    let save_settings: any;

    const createComponent = createComponentFactory({
        component: AssetManagerTopbarComponent,
        detectChanges: false,
        providers: [
            MockProvider(AssetManagerStateService, {
                base_route: '/book/assets',
                options: signal({ view: 'grid', search: '' }),
                setOptions: vi.fn(),
                manageCategories: vi.fn(),
                editConfig: vi.fn(),
                availability: () => ['room-1'],
                saveSettings: (...args: any[]) => save_settings(...args),
            } as any),
            MockProvider(OrganisationService, {} as any),
            MockProvider(SettingsService, { get: vi.fn() } as any),
            MockProvider(MatDialog, { open: vi.fn() }),
        ],
    });

    beforeEach(() => {
        save_settings = vi.fn(async () => ({}));
        org = spectatorSetup();
    });

    function spectatorSetup() {
        spectator = createComponent();
        const org = spectator.inject(OrganisationService) as any;
        org.active_building = signal({ id: 'bld-1' });
        org.active_buildings = signal([]);
        org.buildings = [
            { id: 'bld-1', name: 'Building 1' },
            { id: 'bld-2', name: 'Building 2' },
        ];
        return org;
    }

    it('should switch the active building on selection', () => {
        spectator.component.setBuilding('bld-2');
        expect(org.building).toEqual({ id: 'bld-2', name: 'Building 2' });
    });

    it('should ignore unknown building selections', () => {
        org.building = { id: 'bld-1' };
        spectator.component.setBuilding('missing');
        expect(org.building).toEqual({ id: 'bld-1' });
    });

    it('should save room availability changes from the modal', async () => {
        const change = new Subject<string[]>();
        const loading = { set: vi.fn() };
        (spectator.inject(MatDialog).open as any).mockReturnValue({
            componentInstance: { change, loading },
        });

        spectator.component.setRoomAvailability();
        change.next(['room-2']);
        await new Promise((resolve) => setTimeout(resolve));

        expect(save_settings).toHaveBeenCalledWith({
            disabled_rooms: ['room-2'],
        });
        expect(loading.set).toHaveBeenCalledWith(false);
    });

    it('should delegate option changes to the state service', () => {
        spectator.component.setOptions({ view: 'list' });
        expect(
            spectator.inject(AssetManagerStateService).setOptions,
        ).toHaveBeenCalledWith({ view: 'list' });
    });
});
