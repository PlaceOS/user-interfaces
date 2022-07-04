import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { BookComponent } from '../../app/book/book.component';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';

describe('BookComponent', () => {
    let spectator: SpectatorRouting<BookComponent>;
    const createComponent = createRoutingFactory({
        component: BookComponent,
        declarations: [
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
