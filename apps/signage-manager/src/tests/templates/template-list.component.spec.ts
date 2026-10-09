import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SignageTemplate } from '@placeos/ts-client';
import { SignageTemplateService } from '../../app/templates/signage-template.service';
import { TemplateListComponent } from '../../app/templates/template-list.component';

describe('TemplateListComponent', () => {
    const load_more = vi.fn();
    const template_stub = {
        template_search_term: signal(''),
        templates: signal<SignageTemplate[]>([]),
        selected_template: signal<SignageTemplate | null>(null),
        templates_has_more: signal(false),
        templates_loading: signal(false),
        templates_error: signal(false),
        loadMoreTemplates: load_more,
        reloadTemplates: vi.fn(),
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [TemplateListComponent],
            providers: [
                { provide: SignageTemplateService, useValue: template_stub },
            ],
        })
            .overrideComponent(TemplateListComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(TemplateListComponent).componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        template_stub.templates.set([]);
        template_stub.templates_error.set(false);
    });

    it('shows a load error with a retry instead of the empty list', async () => {
        template_stub.templates_error.set(true);
        await TestBed.configureTestingModule({
            imports: [TemplateListComponent],
            providers: [
                provideRouter([]),
                { provide: SignageTemplateService, useValue: template_stub },
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(TemplateListComponent);
        fixture.detectChanges();
        const element: HTMLElement = fixture.nativeElement;

        expect(element.querySelector('load-error')).not.toBeNull();
        element.querySelector<HTMLButtonElement>('load-error button')?.click();
        expect(template_stub.reloadTemplates).toHaveBeenCalledOnce();
    });

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
