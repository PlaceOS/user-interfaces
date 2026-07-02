import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent, MockPipe } from 'ng-mocks';

import { MapPinComponent } from '@placeos/components';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DeskDetailsComponent } from '../lib/desk-select-modal/desk-details.component';

describe('DeskDetailsComponent', () => {
    let spectator: Spectator<DeskDetailsComponent>;
    const createComponent = createComponentFactory({
        component: DeskDetailsComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(ImageCarouselComponent),
            MockComponent(InteractiveMapComponent),
            MockComponent(MapPinComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show empty state when no desk is set', () => {
        expect(spectator.query('[empty]')).toExist();
        expect(spectator.query('[details]')).not.toExist();
    });

    it('should render desk details when a desk is set', () => {
        spectator.setInput('desk', {
            id: 'desk-1',
            name: 'Desk One',
            zone: { name: 'Level 1' },
        } as any);
        spectator.detectChanges();
        expect(spectator.query('[empty]')).not.toExist();
        expect(spectator.query('[details]')).toExist();
        expect(spectator.query('[details]')).toContainText('Desk One');
    });

    it('should prefer display_name for the desk title', () => {
        spectator.setInput('desk', {
            id: 'desk-1',
            name: 'Desk One',
            display_name: 'Fancy Desk',
        } as any);
        spectator.detectChanges();
        expect(spectator.query('section[actions]')).toContainText('Fancy Desk');
    });

    it('should emit close when the back button is clicked', () => {
        let closed = false;
        spectator.component.close.subscribe(() => (closed = true));
        spectator.setInput('desk', { id: 'desk-1', name: 'Desk One' } as any);
        spectator.detectChanges();
        spectator.click('button[name="close-desk-details"]');
        expect(closed).toBe(true);
    });

    it('should emit toggleFav when the favourite button is clicked', () => {
        let toggled = false;
        spectator.component.toggleFav.subscribe(() => (toggled = true));
        spectator.setInput('desk', { id: 'desk-1', name: 'Desk One' } as any);
        spectator.detectChanges();
        spectator.click('button[name="toggle-desk-favourite-details"]');
        expect(toggled).toBe(true);
    });

    it('should render feature chips for the desk features', () => {
        spectator.setInput('desk', {
            id: 'desk-1',
            name: 'Desk One',
            features: ['sit-stand', 'monitor'],
        } as any);
        spectator.detectChanges();
        const feats = spectator.queryAll('[facilities] [for="feat"]');
        expect(feats.length).toBe(2);
        expect(feats[0]).toContainText('sit-stand');
    });

    it('should hide the map section when hide_map is set', () => {
        spectator.setInput('desk', { id: 'desk-1', name: 'Desk One' } as any);
        spectator.detectChanges();
        expect(spectator.query('section[map]')).toExist();
        spectator.setInput('hide_map', true);
        spectator.detectChanges();
        expect(spectator.query('section[map]')).not.toExist();
    });

    it('should compute the map focus features for the desk', () => {
        spectator.setInput('desk', {
            id: 'desk-1',
            map_id: 'map-1',
            zone: { map_id: 'level-map' },
        } as any);
        spectator.detectChanges();
        expect(spectator.component.map_url()).toBe('level-map');
        const features = spectator.component.features();
        expect(features.length).toBe(1);
        expect(features[0].location).toBe('map-1');
    });
});
