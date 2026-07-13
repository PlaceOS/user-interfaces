import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockComponent, MockPipe } from 'ng-mocks';

import { MapPinComponent } from '@placeos/components';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { ParkingDetailsComponent } from '../lib/parking-select-modal/parking-details.component';

describe('ParkingDetailsComponent', () => {
    let spectator: Spectator<ParkingDetailsComponent>;
    const org_mock = {
        levelWithID: vi.fn((ids: string[]) =>
            ids?.[0]
                ? {
                      id: ids[0],
                      display_name: 'Level One',
                      name: 'lvl-1',
                      map_id: 'map-lvl-1',
                  }
                : null,
        ),
        buildings: [
            {
                id: 'bld-1',
                display_name: 'Building One',
                name: 'bld-1',
                address: '1 Test Street',
            },
        ],
    };

    const createComponent = createComponentFactory({
        component: ParkingDetailsComponent,
        providers: [{ provide: OrganisationService, useValue: org_mock }],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(ImageCarouselComponent),
            MockComponent(InteractiveMapComponent),
            MockComponent(MapPinComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show empty message when no space is selected', () => {
        expect(spectator.query('[empty]')).toExist();
        expect(spectator.query('[details]')).not.toExist();
    });

    it('should show the space name when a space is selected', () => {
        spectator.setInput('space', {
            id: 'space-1',
            display_name: 'Bay 12',
            name: 'bay-12',
            zone: { id: 'lvl-1', parent_id: 'bld-1' },
        } as any);
        spectator.detectChanges();
        expect(spectator.query('[empty]')).not.toExist();
        expect(spectator.query('[actions] h2')).toContainText('Bay 12');
    });

    it('should emit close when the back button is clicked', () => {
        const close = vi.fn();
        spectator.component.close.subscribe(close);
        spectator.setInput('space', { id: 'space-1', name: 'Bay' } as any);
        spectator.detectChanges();
        spectator.click('button[close]');
        expect(close).toHaveBeenCalledTimes(1);
    });

    it('should emit toggleFav when the favourite button is clicked', () => {
        const toggle = vi.fn();
        spectator.component.toggleFav.subscribe(toggle);
        spectator.setInput('space', { id: 'space-1', name: 'Bay' } as any);
        spectator.detectChanges();
        spectator.click('button[fav]');
        expect(toggle).toHaveBeenCalledTimes(1);
    });

    it('should reflect the favourite state on the favourite icon', () => {
        spectator.setInput('space', { id: 'space-1', name: 'Bay' } as any);
        spectator.setInput('fav', false);
        spectator.detectChanges();
        expect(spectator.query('button[fav] icon')).toContainText(
            'favorite_border',
        );
        spectator.setInput('fav', true);
        spectator.detectChanges();
        expect(spectator.query('button[fav] icon')).toContainText('favorite');
    });

    it('should resolve the level and building from the organisation', () => {
        spectator.setInput('space', {
            id: 'space-1',
            name: 'Bay',
            zone: { id: 'lvl-1', parent_id: 'bld-1' },
        } as any);
        spectator.detectChanges();
        expect(spectator.component.level()?.display_name).toBe('Level One');
        expect(spectator.component.building()?.id).toBe('bld-1');
        expect(spectator.query('[details]')).toContainText('Level One');
        expect(spectator.query('[details]')).toContainText('1 Test Street');
    });

    it('should show the map when not hidden and hide it otherwise', () => {
        spectator.setInput('space', {
            id: 'space-1',
            name: 'Bay',
            map_id: 'map-space-1',
            zone: { id: 'lvl-1', parent_id: 'bld-1' },
        } as any);
        spectator.setInput('hide_map', false);
        spectator.detectChanges();
        expect(spectator.query('interactive-map')).toExist();
        expect(spectator.component.features().length).toBe(1);

        spectator.setInput('hide_map', true);
        spectator.detectChanges();
        expect(spectator.query('interactive-map')).not.toExist();
    });

    it('should not produce map features when the space has no map id', () => {
        spectator.setInput('space', { id: 'space-1', name: 'Bay' } as any);
        spectator.detectChanges();
        expect(spectator.component.features()).toEqual([]);
    });
});
