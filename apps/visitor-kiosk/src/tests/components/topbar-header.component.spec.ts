
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { TopbarHeaderComponent } from '../../app/components/topbar-header.component';

describe('TopbarHeaderComponent', () => {
    let spectator: SpectatorRouting<TopbarHeaderComponent>;
    const createComponent = createRoutingFactory({
        component: TopbarHeaderComponent,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });
});
