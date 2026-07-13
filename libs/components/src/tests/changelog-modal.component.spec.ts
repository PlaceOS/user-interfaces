import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

import { ChangelogModalComponent } from '../lib/changelog-modal.component';

describe('ChangelogModalComponent', () => {
    let spectator: Spectator<ChangelogModalComponent>;

    const createComponent = createComponentFactory({
        component: ChangelogModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: { changelog: '' } },
            { provide: MatDialogRef, useValue: { close: vi.fn() } },
        ],
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should render the changelog markdown as HTML', () => {
        spectator = createComponent({
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: { changelog: '# New Stuff\n\nSome *details*' },
                },
            ],
        });
        const markdown_el = spectator.query('.markdown');
        expect(markdown_el).toBeTruthy();
        expect(markdown_el.innerHTML).toContain('<h1>New Stuff</h1>');
        expect(markdown_el.innerHTML).toContain('<em>details</em>');
    });

    it('should show an empty state when there is no changelog', () => {
        spectator = createComponent();
        expect('.markdown').not.toExist();
        expect('.text').toContainText('No changelog');
    });
});
