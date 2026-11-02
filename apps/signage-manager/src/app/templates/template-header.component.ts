import { Component, inject } from '@angular/core';
import { SectionHeaderComponent } from '../shared/section-header.component';
import { SignageContextService } from '../signage-context.service';
import { SignageTemplateService } from './signage-template.service';

@Component({
    selector: 'template-header',
    template: `
        <section-header
            heading="SIGNAGE_MANAGER.TEMPLATES_PAGE_TITLE"
            [count]="total_count()"
            [can_add]="can_create()"
            add_label="SIGNAGE_MANAGER.CREATE_NEW_TEMPLATE"
            add_tooltip="SIGNAGE_MANAGER.NEW_TEMPLATE"
            (add)="addTemplate()"
        />
    `,
    imports: [SectionHeaderComponent],
})
export class TemplateHeaderComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _template_service = inject(SignageTemplateService);

    public readonly total_count = this._template_service.templates_total;
    public readonly can_create = this._context.can_create_templates;

    public addTemplate() {
        this._template_service.addTemplate();
    }
}
