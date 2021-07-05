import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { DeskFlowConfirmComponent } from 'apps/workplace/src/app/book/desk-flow/confirm.component';

describe('DeskFlowConfirmComponent', () => {
    let spectator: Spectator<DeskFlowConfirmComponent>;
    const createComponent = createComponentFactory({
        component: DeskFlowConfirmComponent,
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
