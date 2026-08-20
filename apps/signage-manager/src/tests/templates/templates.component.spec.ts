import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SignageService } from '../../app/signage.service';
import { TemplatesSectionComponent } from '../../app/templates/templates.component';

describe('TemplatesSectionComponent', () => {
    const service_stub = {
        selected_template: signal<{ id: string } | null>(null),
        selected_template_layout_index: signal<number | null>(null),
        templates: signal<{ id: string }[]>([]),
        selected_template_requires_approval: signal(false),
        template_approval_request_loading: signal(false),
        can_approve: signal(false),
        can_update: signal(true),
        can_delete: signal(true),
        can_share: signal(true),
        editTemplate: vi.fn(),
        removeTemplate: vi.fn(),
        shareTemplate: vi.fn(),
        approveTemplate: vi.fn(),
        requestTemplateApproval: vi.fn(),
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [TemplatesSectionComponent],
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: Router, useValue: { navigate: vi.fn() } },
            ],
        })
            .overrideComponent(TemplatesSectionComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(TemplatesSectionComponent)
            .componentInstance;
    }

    it('shows the preview tab by default and switches to layouts', async () => {
        const component = await make();

        expect(component.view_tab()).toBe('preview');
        component.setViewTab('layouts');
        expect(component.view_tab()).toBe('layouts');
    });

    it('switches and focuses tabs with the arrow keys', async () => {
        const component = await make();
        const event = {
            key: 'ArrowRight',
            preventDefault: vi.fn(),
        } as unknown as KeyboardEvent;
        const preview_tab = { focus: vi.fn() } as unknown as HTMLButtonElement;
        const layouts_tab = { focus: vi.fn() } as unknown as HTMLButtonElement;

        component.handleTabKeydown(event, preview_tab, layouts_tab);

        expect(component.view_tab()).toBe('layouts');
        expect(event.preventDefault).toHaveBeenCalled();
        expect(layouts_tab.focus).toHaveBeenCalled();
    });

    it('delegates approval actions for the selected template', async () => {
        const template = { id: 'template-1' };
        service_stub.selected_template.set(template);
        const component = await make();

        component.approveTemplate();
        component.requestApproval();

        expect(service_stub.approveTemplate).toHaveBeenCalledWith(template);
        expect(service_stub.requestTemplateApproval).toHaveBeenCalledWith(
            template,
        );
    });

    it('delegates sharing for the selected template', async () => {
        const template = { id: 'template-1' };
        service_stub.selected_template.set(template);
        const component = await make();

        component.shareTemplate();

        expect(service_stub.shareTemplate).toHaveBeenCalledWith(template);
    });
});
