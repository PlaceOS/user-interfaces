import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { FiltersComponent } from '../../app/explore/filters.component';

describe('FiltersComponent', () => {
    let spectator: Spectator<FiltersComponent>;
    const createComponent = createComponentFactory({
        component: FiltersComponent,
        providers: [{ provide: MatDialogRef, useValue: { close: jest.fn() } }],
        imports: [MatCheckboxModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });
});
