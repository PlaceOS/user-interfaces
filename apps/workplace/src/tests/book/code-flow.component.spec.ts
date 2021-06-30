import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { BookCodeFlowComponent } from '../../app/book/code-flow.component';

describe('BookCodeFlowComponent', () => {
    let spectator: Spectator<BookCodeFlowComponent>;
    const createComponent = createComponentFactory({
        component: BookCodeFlowComponent,
        providers: [{ provide: Router, useValue: { navigate: jest.fn() } }],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });
});
