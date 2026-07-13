import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';

import { SourceSelectModalComponent } from '../../app/ui/source-select-modal.component';
import { SourceSelectComponent } from '../../app/ui/source-select.component';

describe('SourceSelectModalComponent', () => {
    let spectator: Spectator<SourceSelectModalComponent>;
    const createComponent = createComponentFactory({
        component: SourceSelectModalComponent,
        declarations: [
            mockComponent(SourceSelectComponent),
            mockComponent(IconComponent),
        ],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: {
                    output: {},
                },
            },
            { provide: MatDialogRef, useValue: { close: vi.fn() } },
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
