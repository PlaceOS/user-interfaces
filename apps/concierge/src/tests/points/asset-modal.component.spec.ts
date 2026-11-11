import { signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent, SettingsToggleComponent } from '@placeos/components';
import { SpacesService } from '@placeos/events';
import { CounterComponent, TimeFieldComponent } from '@placeos/form-fields';
import { MockProvider } from 'ng-mocks';

import { DesksStateService } from '../../app/desks/desks-state.service';
import { PointsAssetModalComponent } from '../../app/points/asset-modal.component';

describe('PointsAssetModalComponent', () => {
    let spectator: Spectator<PointsAssetModalComponent>;
    const createComponent = createComponentFactory({
        component: PointsAssetModalComponent,
        providers: [
            MockProvider(SpacesService, {
                list: signal([
                    { id: 'sp-1', name: 'Board Room' },
                    { id: 'sp-2', name: 'Huddle' },
                ]),
            } as unknown as Partial<SpacesService>),
            MockProvider(DesksStateService, {
                setFilters: vi.fn(),
                desks: signal([
                    { id: 'd-1', name: 'Desk 1' },
                    { id: 'd-2', name: 'Window Desk' },
                ]),
            } as unknown as Partial<DesksStateService>),
            { provide: MAT_DIALOG_DATA, useValue: {} },
        ],
        declarations: [
            mockComponent(CounterComponent),
            mockComponent(TimeFieldComponent),
            mockComponent(IconComponent),
            mockComponent(SettingsToggleComponent),
        ],
        detectChanges: false,
    });

    const create = (asset?: Record<string, unknown>) =>
        (spectator = createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: { asset } }],
        }));

    it('should keep a 0% discount cap when editing an asset', () => {
        create({ id: 'PA-1', name: 'Desk 1', discount_cap: 0 });
        expect(spectator.component.model().discount_cap).toBe(0);
    });

    it('should default the discount cap of a new asset to 50%', () => {
        create();
        expect(spectator.component.model().discount_cap).toBe(50);
    });

    it('should search spaces or desks by the chosen asset type', () => {
        create();
        const { model, asset_options } = spectator.component;
        expect(asset_options()).toEqual([]);

        model.update((m) => ({ ...m, type: 'space', name: 'board' }));
        expect(asset_options().map((_) => _.id)).toEqual(['sp-1']);

        model.update((m) => ({ ...m, type: 'desk', name: 'DESK' }));
        expect(asset_options().map((_) => _.id)).toEqual(['d-1', 'd-2']);
    });

    it('should render prices from cents', () => {
        create();
        expect(spectator.component.renderPrice(1050)).toBe('$10.50');
        expect(spectator.component.renderPrice()).toBe('$0.00');
    });

    it('should emit the form values on save', () => {
        create({ id: 'PA-1', name: 'Desk 1', type: 'desk', unit_price: 2000 });
        const emit = vi.spyOn(spectator.component.event, 'emit');

        spectator.component.save();

        expect(emit).toHaveBeenCalledWith({
            reason: 'done',
            metadata: expect.objectContaining({
                id: 'PA-1',
                name: 'Desk 1',
                type: 'desk',
                unit_price: 2000,
            }),
        });
    });
});
