import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetRequestDetailsComponent } from '../../app/asset-manager/asset-request-details.component';

describe('AssetRequestDetailsComponent', () => {
    let spectator: Spectator<AssetRequestDetailsComponent>;
    let set_status: any;
    let set_tracking: any;

    const createComponent = createComponentFactory({
        component: AssetRequestDetailsComponent,
        detectChanges: false,
        providers: [
            MockProvider(AssetManagerStateService, {
                setStatus: (...args: any[]) => set_status(...args),
                setTracking: (...args: any[]) => set_tracking(...args),
            } as any),
            MockProvider(OrganisationService, {
                levelWithID: vi.fn(),
            } as any),
            MockProvider(SettingsService, { time_format: 'h:mm a' } as any),
        ],
    });

    beforeEach(() => {
        set_status = vi.fn(async () => ({}));
        set_tracking = vi.fn(async () => ({}));
        spectator = createComponent();
    });

    it('should expose the requested items from the extension data', () => {
        const items = [{ name: 'Chair', quantity: 2 }];
        spectator.component.request.set({
            extension_data: { request: { items } },
        });

        expect(spectator.component.items()).toBe(items);
    });

    it('should default to an empty item list when no request is set', () => {
        spectator.component.request.set(null);
        expect(spectator.component.items()).toEqual([]);
    });

    it('should update the request status locally after saving', async () => {
        const request: any = { id: 'r-1', status: 'tentative' };
        spectator.component.request.set(request);

        await spectator.component.setStatus('approved');

        expect(set_status).toHaveBeenCalledWith(request, 'approved');
        expect(spectator.component.request().status).toBe('approved');
        expect(spectator.component.loading()).toBe(false);
    });

    it('should update the request tracking locally after saving', async () => {
        const request: any = {
            id: 'r-1',
            status: 'approved',
            extension_data: {},
        };
        spectator.component.request.set(request);

        await spectator.component.setTracking('in_transit');

        expect(set_tracking).toHaveBeenCalledWith(request, 'in_transit');
        expect(spectator.component.request().extension_data.tracking).toBe(
            'in_transit',
        );
    });
});
