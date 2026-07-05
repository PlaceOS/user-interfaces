import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { AuthenticatedImageDirective } from '@placeos/components';
import { MockDirective } from 'ng-mocks';

import { NotFoundComponent } from '../app/not-found.component';

describe('NotFoundComponent', () => {
    let spectator: Spectator<NotFoundComponent>;

    const create_component = createComponentFactory({
        component: NotFoundComponent,
        overrideComponents: [
            [
                NotFoundComponent,
                {
                    remove: { imports: [AuthenticatedImageDirective] },
                    add: { imports: [MockDirective(AuthenticatedImageDirective)] },
                },
            ],
        ],
    });

    beforeEach(() => {
        spectator = create_component();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show the survey-not-found heading and message', () => {
        expect(spectator.query('h1')).toHaveText('Survey not found');
        expect(spectator.query('p')).toHaveText(
            'Unable to find the requested survey',
        );
    });

    it('should render the not-found illustration', () => {
        const img = spectator.query('img');

        expect(img).toBeTruthy();
        expect(img.getAttribute('alt')).toBe('404 Not Found');
    });
});
