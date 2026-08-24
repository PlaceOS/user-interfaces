import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageTemplate } from '@placeos/ts-client';
import { SignageService } from '../../app/signage.service';
import { TemplateListComponent } from '../../app/templates/template-list.component';

describe('TemplateListComponent', () => {
    const load_more = vi.fn();
    const service_stub = {
        template_search_term: signal(''),
        templates: signal<SignageTemplate[]>([]),
        selected_template: signal<SignageTemplate | null>(null),
        templates_has_more: signal(false),
        loadMoreTemplates: load_more,
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [TemplateListComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        })
            .overrideComponent(TemplateListComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(TemplateListComponent).componentInstance;
    }

    beforeEach(() => vi.clearAllMocks());

    it('marks an unrequested draft as awaiting approval', async () => {
        const component = await make();

        expect(
            component.getStatus(
                new SignageTemplate({ id: 'template-1', approved: false }),
            ),
        ).toBe('awaiting_approval');
    });

    it('marks a requested draft as awaiting review', async () => {
        const component = await make();

        expect(
            component.getStatus(
                new SignageTemplate({
                    id: 'template-1',
                    approved: false,
                    approval_requested: true,
                }),
            ),
        ).toBe('awaiting_review');
    });

    it('returns no status for an approved template', async () => {
        const component = await make();

        expect(
            component.getStatus(
                new SignageTemplate({ id: 'template-1', approved: true }),
            ),
        ).toBeNull();
    });

    it('lists the groups a template is shared with', async () => {
        const component = await make();
        const template = new SignageTemplate({
            id: 'template-1',
            shared_with: [
                { id: 'group-1', name: 'Facilities' },
                { id: 'group-2', name: 'Marketing' },
            ],
        });

        expect(component.sharedGroupNames(template)).toBe(
            'Facilities, Marketing',
        );
    });

    it('requests the next page when scrolled', async () => {
        const component = await make();

        component.loadMore();

        expect(load_more).toHaveBeenCalledTimes(1);
    });
});
