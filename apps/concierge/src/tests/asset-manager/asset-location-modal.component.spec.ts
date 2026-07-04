import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { SpacePipe } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetLocationModalComponent } from '../../app/asset-manager/asset-location-modal.component';

describe('AssetLocationModalComponent', () => {
    let spectator: Spectator<AssetLocationModalComponent>;
    let set_tracking: jest.Mock;
    let level_with_id: jest.Mock;

    const createComponent = createComponentFactory({
        component: AssetLocationModalComponent,
        detectChanges: false,
        providers: [
            MockProvider(AssetManagerStateService, {
                active_product: signal({ id: 'g1', name: 'Chair' }),
                active_product_requests: signal([]),
                setTracking: (...args: any[]) => set_tracking(...args),
            } as any),
            MockProvider(OrganisationService, {
                levelWithID: (...args: any[]) => level_with_id(...args),
            } as any),
        ],
    });

    beforeEach(() => {
        set_tracking = jest.fn(async () => ({}));
        level_with_id = jest.fn();
        spectator = createComponent();
    });

    it('should clear the map feature when no space is selected', async () => {
        spectator.component.selected.set(null);
        await spectator.component.updateFeatures();

        expect(spectator.component.selected_feature()).toEqual([]);
    });

    it('should build a map pin feature for the selected space', async () => {
        jest.spyOn(SpacePipe.prototype, 'transform').mockResolvedValue({
            map_id: 'map-1',
            display_name: 'Room 1',
            name: 'Room 1',
        } as any);
        spectator.component.selected.set({
            extension_data: { location_id: 'space-1' },
        } as any);

        await spectator.component.updateFeatures();

        const features = spectator.component.selected_feature();
        expect(features).toHaveLength(1);
        expect(features[0]).toEqual(
            expect.objectContaining({ location: 'map-1', z_index: 99 }),
        );
    });

    it('should toggle row loading around tracking updates', async () => {
        const item = { id: 'r-1' } as any;

        const promise = spectator.component.setTracking(item, 'at_location');
        expect(spectator.component.loading()['r-1']).toBe(true);
        await promise;

        expect(set_tracking).toHaveBeenCalledWith(item, 'at_location');
        expect(spectator.component.loading()['r-1']).toBe(false);
    });

    it('should resolve levels through the organisation service', () => {
        level_with_id.mockReturnValue({ id: 'lvl-1' });
        expect(spectator.component.level('lvl-1')).toEqual({ id: 'lvl-1' });
        expect(level_with_id).toHaveBeenCalledWith('lvl-1');
    });
});
