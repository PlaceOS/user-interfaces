import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { SignageService } from '../../app/signage.service';
import { TemplatePreviewComponent } from '../../app/templates/template-preview.component';

describe('TemplatePreviewComponent', () => {
    const selected_template = signal<{ id: string } | null>(null);
    const service_stub = {
        selected_template,
        selected_template_layout_index: signal<number | null>(null),
        template_layout_draft: signal([]),
        plugins: signal([]),
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [TemplatePreviewComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        })
            .overrideComponent(TemplatePreviewComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(TemplatePreviewComponent)
            .componentInstance;
    }

    beforeEach(() => {
        selected_template.set(null);
        TestBed.resetTestingModule();
    });

    it('builds a player link for the selected template', async () => {
        selected_template.set({ id: 'template 1' });
        const component = await make();

        expect(component.player_link()).toBe(
            '/signage/#/template/template%201?debug=true',
        );
    });

    it('returns an empty player link when no template is selected', async () => {
        const component = await make();

        expect(component.player_link()).toBe('');
    });
});
