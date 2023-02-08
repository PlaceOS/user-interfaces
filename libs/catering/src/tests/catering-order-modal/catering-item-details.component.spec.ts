import { FormsModule } from '@angular/forms';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { CateringItem } from '../../lib/catering-item.class';
import { CateringItemDetailsComponent } from '../../lib/catering-order-modal/catering-item-details.component';

describe('CateringItemDetailsComponent', () => {
    let spectator: Spectator<CateringItemDetailsComponent>;
    const createComponent = createRoutingFactory({
        component: CateringItemDetailsComponent,
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
        spectator.setInput({ item: new CateringItem({ id: '1' }) });
        spectator.detectChanges();
        expect('a-counter').toExist();
    });

    it('should show empty state without an asset', () => {
        expect('[empty]').toExist();
        spectator.setInput({ item: new CateringItem({ id: '1' }) });
        spectator.detectChanges();
        expect('[empty]').not.toExist();
    });

    it('should allow toggling favourite state', (done) => {
        spectator.setInput({ item: new CateringItem({ id: '1' }) });
        spectator.detectChanges();
        spectator.component.toggleFav.subscribe(() => done());
        spectator.click('[name="toggle-catering-item-favourite-details"]');
    });

    it('should allow toggling active state', (done) => {
        spectator.setInput({ item: new CateringItem({ id: '1' }) });
        spectator.detectChanges();
        spectator.component.activeChange.subscribe((state) => {
            if (state)
                setTimeout(() =>
                    spectator.click('[name="select-catering-item-details"]')
                );
            else done();
        });
        spectator.click('[name="select-catering-item-details"]');
    });
});
