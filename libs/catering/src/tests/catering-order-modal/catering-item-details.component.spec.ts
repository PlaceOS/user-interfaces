import { createRoutingFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { CateringItem } from "../../lib/catering-item.class";
import { CateringItemDetailsComponent } from '../../lib/catering-order-modal/catering-item-details.component';

describe('CateringItemDetailsComponent', () => {
    let spectator: Spectator<CateringItemDetailsComponent>;
    const createComponent = createRoutingFactory({
        component: CateringItemDetailsComponent,
        providers: [],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

    it('should show a counter for selected amount', () => {
        spectator.setInput({ item: new CateringItem({ id: '1' }) });
        spectator.detectChanges();
        expect('a-counter').toExist();
    })

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
        spectator.click('[fav]')
    });

    it('should allow toggling active state', (done) => {
        spectator.setInput({ item: new CateringItem({ id: '1' }) });
        spectator.detectChanges();
        spectator.component.activeChange.subscribe((state) => {
            if (state) setTimeout(() => spectator.click('[select]'));
            else done();
        });
        spectator.click('[select]');
    });
});