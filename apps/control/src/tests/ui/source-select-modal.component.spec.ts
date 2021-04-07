import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { SourceSelectModalComponent } from '../../app/ui/source-select-modal.component';
import { SourceSelectComponent } from '../../app/ui/source-select.component';

describe('SourceSelectModalComponent', () => {
    let spectator: Spectator<SourceSelectModalComponent>;
    const createComponent = createComponentFactory({
        component: SourceSelectModalComponent,
        declarations: [
            MockComponent(SourceSelectComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: {
                    output: {},
                },
            },
            { provide: MatDialogRef, useValue: { close: jest.fn() } },
        ],

    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should close on source changes', () => {
        expect('source-select').toExist();
        spectator.dispatchFakeEvent('source-select', 'source');
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });

    it('should show close button', () => {
        expect('button[mat-dialog-close]').toExist();
    });
});
