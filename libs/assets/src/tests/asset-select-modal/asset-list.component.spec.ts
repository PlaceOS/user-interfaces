import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { AssetListComponent } from '../../lib/asset-select-modal/asset-list.component';
import { AssetStateService } from '../../lib/asset-state.service';
import { Asset } from '../../lib/asset.class';

describe('AssetListComponent', () => {
    let spectator: Spectator<AssetListComponent>;
    const createComponent = createRoutingFactory({
        component: AssetListComponent,
        providers: [
            {
                provide: AssetStateService,
                useValue: {
                    loading: new BehaviorSubject(''),
                    filtered_assets: new BehaviorSubject<Asset[]>([]),
                },
            },
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [MockModule(MatProgressSpinnerModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow list available assets', () => {
        expect('[empty]').toExist();
        (spectator.inject(AssetStateService).filtered_assets as any).next([
            { id: '1', assets: [{}] },
        ] as any);
        spectator.detectChanges();
        expect('[empty]').not.toExist();
        expect('[asset]').toExist();
    });

    it('should allow selecting the asset', (done) => {
        (spectator.inject(AssetStateService).filtered_assets as any).next([
            { id: '1', assets: [{}] },
        ] as any);
        spectator.detectChanges();
        spectator.component.onSelect.subscribe((a) => {
            expect(a.id).toBe('1');
            done();
        });
        spectator.click('[select]');
    });

    it('should allow toggling the favourite state of asset', (done) => {
        (spectator.inject(AssetStateService).filtered_assets as any).next([
            { id: '1', assets: [{}] },
        ] as any);
        spectator.detectChanges();
        spectator.component.toggleFav.subscribe((a) => {
            expect(a.id).toBe('1');
            done();
        });
        spectator.click('[fav]');
    });
});
