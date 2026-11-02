import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SectionHeaderComponent } from '../shared/section-header.component';
import { SignageContextService } from '../signage-context.service';
import { SignageDisplayService } from './signage-display.service';

@Component({
    selector: 'display-header',
    template: `
        <section-header
            heading="SIGNAGE_MANAGER.DISPLAYS_TITLE"
            [count]="total_count()"
            [can_add]="can_create()"
            add_label="SIGNAGE_MANAGER.CREATE_NEW_DISPLAY"
            add_tooltip="SIGNAGE_MANAGER.NEW_DISPLAY"
            (add)="addDisplay()"
        />
    `,
    imports: [SectionHeaderComponent],
})
export class DisplayHeaderComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _display_service = inject(SignageDisplayService);
    private readonly _router = inject(Router);

    /** Server total, as the list holds only the pages loaded so far */
    public readonly total_count = this._display_service.displays_total;
    public readonly can_create = this._context.can_create;

    public async addDisplay() {
        const display = await this._display_service.addDisplay();
        if (display?.id) await this._router.navigate(['/displays', display.id]);
    }
}
