import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { CodeFlowSuccessComponent } from '../../app/book/code-flow-success.component';

describe('CodeFlowSuccessComponent', () => {
    let spectator: SpectatorRouting<CodeFlowSuccessComponent>;
    const createComponent = createRoutingFactory({
        component: CodeFlowSuccessComponent,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should render a success message', () =>
        expect(spectator.query('h2')).toExist());

    it('should render a continue link back to home', () => {
        const link = spectator.query('a[btn]');
        expect(link).toExist();
        expect(link!.getAttribute('href')).toBe('/');
    });
});
