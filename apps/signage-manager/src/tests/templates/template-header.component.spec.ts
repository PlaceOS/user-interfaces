import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageContextService } from '../../app/signage-context.service';
import { SignageTemplateService } from '../../app/templates/signage-template.service';
import { TemplateHeaderComponent } from '../../app/templates/template-header.component';

describe('TemplateHeaderComponent', () => {
    it('counts every template on the server, not only the loaded pages', async () => {
        await TestBed.configureTestingModule({
            imports: [TemplateHeaderComponent],
            providers: [
                {
                    provide: SignageContextService,
                    useValue: { can_create_templates: signal(false) },
                },
                {
                    provide: SignageTemplateService,
                    useValue: {
                        templates: signal([{ id: 'template-1' }]),
                        templates_total: signal(450),
                    },
                },
            ],
        })
            .overrideComponent(TemplateHeaderComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();

        const component = TestBed.createComponent(
            TemplateHeaderComponent,
        ).componentInstance;

        expect(component.total_count()).toBe(450);
    });
});
