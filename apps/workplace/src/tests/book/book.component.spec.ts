import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { BookComponent } from '../../app/book/book.component';
import { NavMenuComponent } from '../../app/components/nav-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';

describe('BookComponent', () => {
    let spectator: SpectatorRouting<BookComponent>;
    const createComponent = createRoutingFactory({
        component: BookComponent,
        declarations: [
            MockComponent(TopbarComponent),
            MockComponent(NavMenuComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });
});
