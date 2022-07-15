import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { NewDeskFlowSuccessComponent } from 'apps/workplace/src/app/book/new-desk-flow/new-desk-flow-success.component';

describe('NewDeskFlowSuccessComponent', () => {
    let spectator: Spectator<NewDeskFlowSuccessComponent>;
    const createComponent = createRoutingFactory({
        component: NewDeskFlowSuccessComponent,
        providers: [{ provide: MatDialog, useValue: { open: jest.fn() } }],
        declarations: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
