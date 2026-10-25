import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { CustomTooltipData, IconComponent } from '@placeos/components';

import { ActionModalComponent } from '../../app/ui/action-modal.component';

@Component({
    selector: 'test-popup',
    template: `<button close (click)="tooltip.close()">Close</button>`,
})
class TestPopupComponent {
    public readonly tooltip = inject(CustomTooltipData);
}

describe('ActionModalComponent', () => {
    let spectator: Spectator<ActionModalComponent>;
    const close = vi.fn();
    const createComponent = createComponentFactory({
        component: ActionModalComponent,
        declarations: [mockComponent(IconComponent)],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: { title: 'Lighting', component: TestPopupComponent },
            },
            { provide: MatDialogRef, useValue: { close } },
        ],
    });

    beforeEach(() => {
        close.mockClear();
        spectator = createComponent();
    });

    it('should show the popup component under the action name', () => {
        expect('h2').toHaveText('Lighting');
        expect('test-popup').toExist();
    });

    it('should let the popup close the dialog', () => {
        spectator.click('button[close]');
        expect(close).toHaveBeenCalled();
    });
});
