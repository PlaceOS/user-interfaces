import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { AssetGroup } from '@placeos/common';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';
import { MockComponent } from 'ng-mocks';

import { AssetDetailsComponent } from '../lib/asset-select-modal/asset-details.component';

describe('AssetDetailsComponent', () => {
    let spectator: Spectator<AssetDetailsComponent>;
    const createComponent = createComponentFactory({
        component: AssetDetailsComponent,
        declarations: [
            MockComponent(ImageCarouselComponent),
            MockComponent(CounterComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show the empty state when no item is selected', () => {
        expect('[empty]').toExist();
        expect('[image]').not.toExist();
    });

    it('should render the selected item name and description', () => {
        spectator.setInput('item', {
            id: '1',
            name: 'Projector',
            description: 'HD projector',
            assets: [{}, {}],
        } as AssetGroup);
        spectator.detectChanges();

        expect('[empty]').not.toExist();
        expect('[image]').toExist();
        expect(spectator.query('h2')).toHaveText('Projector');
        expect('[details]').toHaveDescendantWithText({
            selector: 'p',
            text: 'HD projector',
        });
    });

    it('should show a no-description message when the item has none', () => {
        spectator.setInput('item', {
            id: '1',
            name: 'Projector',
            description: '',
            assets: [{}],
        } as AssetGroup);
        spectator.detectChanges();

        expect('[details] .text-center').toExist();
    });

    it('should not show the no-description message when a description exists', () => {
        spectator.setInput('item', {
            id: '1',
            name: 'Projector',
            description: 'HD projector',
            assets: [{}],
        } as AssetGroup);
        spectator.detectChanges();

        expect('[details] .text-center').not.toExist();
    });

    it('should default the item quantity to 1', () => {
        const item = { id: '1', name: 'Projector', assets: [{}] } as AssetGroup;
        spectator.setInput('item', item);
        spectator.detectChanges();
        TestBed.tick();

        expect(item.quantity).toBe(1);
    });

    it('should emit close when the back button is clicked', () => {
        const on_close = vi.fn();
        spectator.output('close').subscribe(on_close);
        spectator.setInput('item', {
            id: '1',
            name: 'Projector',
            assets: [{}],
        } as AssetGroup);
        spectator.detectChanges();

        spectator.click('[close]');

        expect(on_close).toHaveBeenCalled();
    });

    it('should emit toggleFav when the favourite button is clicked', () => {
        const on_toggle = vi.fn();
        spectator.output('toggleFav').subscribe(on_toggle);
        spectator.setInput('item', {
            id: '1',
            name: 'Projector',
            assets: [{}],
        } as AssetGroup);
        spectator.detectChanges();

        spectator.click('[fav]');

        expect(on_toggle).toHaveBeenCalled();
    });
});
