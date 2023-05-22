import { FormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent, ImageCarouselComponent } from '@placeos/components';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';
import { MockComponent } from 'ng-mocks';

import { AssetDetailsComponent } from '../../lib/asset-select-modal/asset-details.component';
import { Asset, AssetGroup } from '../../lib/asset.class';

describe('AssetDetailsComponent', () => {
    let spectator: Spectator<AssetDetailsComponent>;
    const createComponent = createComponentFactory({
        component: AssetDetailsComponent,
        providers: [],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(ImageCarouselComponent),
            MockComponent(CounterComponent),
        ],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show a counter for selected amount', () => {
        spectator.setInput({ item: new AssetGroup() });
        spectator.detectChanges();
        expect('a-counter').toExist();
    });

    it('should show empty state without an asset', () => {
        expect('[empty]').toExist();
        spectator.setInput({ item: new AssetGroup() });
        spectator.detectChanges();
        expect('[empty]').not.toExist();
    });

    it('should allow toggling favourite state', (done) => {
        spectator.setInput({ item: new AssetGroup() });
        spectator.detectChanges();
        spectator.component.toggleFav.subscribe(() => done());
        spectator.click('[fav]');
    });

    it('should allow toggling active state', (done) => {
        spectator.setInput({ item: new AssetGroup() });
        spectator.detectChanges();
        spectator.component.activeChange.subscribe((state) => {
            if (state) setTimeout(() => spectator.click('[select]'));
            else done();
        });
        spectator.click('[select]');
    });
});
