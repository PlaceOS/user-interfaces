import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { AssetGroup } from '@placeos/common';
import { PlaceAsset } from '@placeos/ts-client';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { MockDirective, MockProvider } from 'ng-mocks';

import { AssetListComponent } from '../lib/asset-select-modal/asset-list.component';
import { AssetStateService } from '../lib/asset-state.service';

describe('AssetListComponent', () => {
    let spectator: Spectator<AssetListComponent>;
    const loading = signal('');
    const filtered_assets = signal<AssetGroup[]>([]);
    const createComponent = createComponentFactory({
        component: AssetListComponent,
        declarations: [MockDirective(AuthenticatedImageDirective)],
        providers: [
            MockProvider(AssetStateService, {
                loading: loading,
                filtered_assets: filtered_assets,
            }),
        ],
    });

    beforeEach(() => {
        loading.set('');
        filtered_assets.set([]);
        spectator = createComponent();
    });

    it('should show the loading state while loading', () => {
        loading.set('[Assets]');
        spectator.detectChanges();

        expect('[loading]').toExist();
        expect('[asset]').not.toExist();
    });

    it('should show the empty state when there are no assets', () => {
        spectator.detectChanges();

        expect('[empty]').toExist();
        expect('[asset]').not.toExist();
    });

    it('should hide assets with no availability', () => {
        filtered_assets.set([
            { id: '1', name: 'Projector', assets: [{}] } as AssetGroup,
            { id: '2', name: 'Laptop', assets: [] } as AssetGroup,
        ]);
        spectator.detectChanges();

        expect(spectator.queryAll('[asset]')).toHaveLength(1);
    });

    it('should reduce availability by the requested quantity', () => {
        filtered_assets.set([
            { id: '1', name: 'Projector', assets: [{}, {}, {}] } as AssetGroup,
        ]);
        spectator.setInput('requested', { '1': 2 });
        spectator.detectChanges();
        TestBed.tick();

        expect(spectator.component.assets()[0].available).toBe(1);
    });

    it('should drop assets fully consumed by requests', () => {
        filtered_assets.set([
            { id: '1', name: 'Projector', assets: [{}, {}] } as AssetGroup,
        ]);
        spectator.setInput('requested', { '1': 2 });
        spectator.detectChanges();
        TestBed.tick();

        expect(spectator.component.assets()).toHaveLength(0);
    });

    it('should badge only the selected assets with their selected quantity', () => {
        filtered_assets.set([
            { id: '1', name: 'Projector', assets: [{}] } as AssetGroup,
            { id: '11', name: 'Laptop', assets: [{}, {}] } as AssetGroup,
        ]);
        spectator.setInput('selected', '11');
        spectator.setInput('selected_items', [
            { id: '11', quantity: 2 } as AssetGroup,
        ]);
        spectator.detectChanges();
        TestBed.tick();
        spectator.detectChanges();

        const [projector, laptop] = spectator.queryAll('[asset]');
        expect(projector.querySelector('span')).toBeNull();
        expect(laptop.querySelector('span')).toHaveText('2');
    });

    // The asset list field reads these assets to check the quantity
    it('should copy the loaded assets onto the selected items', () => {
        const units = [{ id: 'x1' }, { id: 'x2' }] as PlaceAsset[];
        filtered_assets.set([
            { id: '1', name: 'Projector', assets: units } as AssetGroup,
        ]);
        const selected = { id: '1', quantity: 1 } as AssetGroup;
        spectator.setInput('selected_items', [selected]);
        spectator.detectChanges();

        expect(selected.assets).toBe(units);
    });

    it('should emit onSelect when an asset is clicked', () => {
        const selected = vi.fn();
        filtered_assets.set([
            { id: '1', name: 'Projector', assets: [{}] } as AssetGroup,
        ]);
        spectator.detectChanges();
        spectator.output('onSelect').subscribe(selected);

        spectator.click('[select]');

        expect(selected).toHaveBeenCalledWith(
            expect.objectContaining({ id: '1' }),
        );
    });

    it('should emit toggleFav when the favourite button is clicked', () => {
        const on_toggle = vi.fn();
        filtered_assets.set([
            { id: '1', name: 'Projector', assets: [{}] } as AssetGroup,
        ]);
        spectator.detectChanges();
        spectator.output('toggleFav').subscribe(on_toggle);

        spectator.click('[fav]');

        expect(on_toggle).toHaveBeenCalledWith(
            expect.objectContaining({ id: '1' }),
        );
    });

    it('should mark favourite assets', () => {
        filtered_assets.set([
            { id: '1', name: 'Projector', assets: [{}] } as AssetGroup,
        ]);
        spectator.setInput('favorites', ['1']);
        spectator.detectChanges();

        expect(spectator.component.isFavourite('1')).toBe(true);
        expect(spectator.component.isFavourite('2')).toBe(false);
        expect('[fav].text-info').toExist();
    });
});
