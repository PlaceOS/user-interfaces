import { provideRouter } from '@angular/router';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

import { UnauthorisedComponent } from '../lib/unauthorised.component';

describe('UnauthorisedComponent', () => {
    let spectator: Spectator<UnauthorisedComponent>;
    const createComponent = createComponentFactory({
        component: UnauthorisedComponent,
        providers: [provideRouter([])],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should link back to the root route to try again', () => {
        const link = spectator.query('a[btn]');
        expect(link).toContainText('Try Again');
        expect(link).toHaveAttribute('href', '/');
    });
});
