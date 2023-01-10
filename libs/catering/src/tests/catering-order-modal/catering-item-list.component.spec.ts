import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { CateringItemListComponent } from '../../lib/catering-order-modal/catering-item-list.component';
import { CateringItemListItemComponent } from '../../lib/catering-order-modal/catering-item-list-item.component';
import { CateringOrderStateService } from '../../lib/catering-order-modal/catering-order-state.service';

describe('CateringItemListComponent', () => {
    let spectator: Spectator<CateringItemListComponent>;
    const createComponent = createRoutingFactory({
        component: CateringItemListComponent,
        providers: [
            MockProvider(CateringOrderStateService, {
                loading: new BehaviorSubject(''),
                filtered_menu: new BehaviorSubject([]),
                available_menu: new BehaviorSubject([]),
            }),
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(CateringItemListItemComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow list available assets', () => {
        expect('[empty]').toExist();
        (spectator.inject(CateringOrderStateService).filtered_menu as any).next(
            [{ id: '1' }] as any
        );
        spectator.detectChanges();
        expect('[empty]').not.toExist();
        expect('catering-item-list-item').toExist();
    });

    it('should allow selecting the asset', (done) => {
        (spectator.inject(CateringOrderStateService).filtered_menu as any).next(
            [{ id: '1' }] as any
        );
        spectator.detectChanges();
        spectator.component.onSelect.subscribe((a) => {
            expect(a.id).toBe('1');
            done();
        });
        spectator.dispatchFakeEvent('catering-item-list-item', 'select');
    });
});
