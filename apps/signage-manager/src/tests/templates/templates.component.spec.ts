import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SignageContextService } from '../../app/signage-context.service';
import { SignageTemplateService } from '../../app/templates/signage-template.service';
import { TemplatesSectionComponent } from '../../app/templates/templates.component';

describe('TemplatesSectionComponent', () => {
    const navigate = vi.fn();
    const template_stub = {
        selected_template: signal<{
            id: string;
            live_template_id?: string;
        } | null>(null),
        selected_template_layout_index: signal<number | null>(null),
        template_layout_dirty: signal(false),
        templates: signal<{ id: string; live_template_id?: string }[]>([]),
        selected_template_requires_approval: signal(false),
        template_approval_request_loading: signal(false),
        editTemplate: vi.fn(),
        removeTemplate: vi.fn(),
        shareTemplate: vi.fn(),
        approveTemplate: vi.fn(),
        requestTemplateApproval: vi.fn(),
        loadTemplate: vi.fn(),
        templates_ready: signal(false),
    };
    const context_stub = {
        can_approve: signal(false),
        can_update_templates: signal(true),
        can_delete_templates: signal(true),
        can_share: signal(true),
    };

    async function makeFixture() {
        await TestBed.configureTestingModule({
            imports: [TemplatesSectionComponent],
            providers: [
                { provide: SignageContextService, useValue: context_stub },
                { provide: SignageTemplateService, useValue: template_stub },
                { provide: Router, useValue: { navigate } },
            ],
        })
            .overrideComponent(TemplatesSectionComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(TemplatesSectionComponent);
    }

    async function make() {
        return (await makeFixture()).componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        template_stub.selected_template.set(null);
        template_stub.selected_template_layout_index.set(null);
        template_stub.template_layout_dirty.set(false);
        template_stub.templates.set([]);
        template_stub.loadTemplate.mockResolvedValue(null);
        template_stub.templates_ready.set(false);
        TestBed.resetTestingModule();
    });

    it('shows the preview tab by default and switches to layouts', async () => {
        const component = await make();

        expect(component.view_tab()).toBe('preview');
        component.setViewTab('layouts');
        expect(component.view_tab()).toBe('layouts');
    });

    it('switches and focuses tabs with the arrow keys', async () => {
        const component = await make();
        const layouts_tab = { focus: vi.fn() };
        const details_tab = { focus: vi.fn() };
        const tablist = {
            querySelectorAll: () => [
                { focus: vi.fn() },
                layouts_tab,
                details_tab,
            ],
        };
        const event = {
            key: 'ArrowRight',
            preventDefault: vi.fn(),
            currentTarget: { parentElement: tablist },
        } as unknown as KeyboardEvent;

        component.handleTabKeydown(event);

        expect(component.view_tab()).toBe('layouts');
        expect(event.preventDefault).toHaveBeenCalled();
        expect(layouts_tab.focus).toHaveBeenCalled();

        component.handleTabKeydown(event);

        expect(component.view_tab()).toBe('details');
        expect(details_tab.focus).toHaveBeenCalled();
    });

    it('mirrors the layout list tab into the mobile tabs', async () => {
        const component = await make();

        component.setLayoutTab('details');
        expect(component.view_tab()).toBe('details');
        component.setLayoutTab('items');
        expect(component.view_tab()).toBe('layouts');
    });

    it('delegates approval actions for the selected template', async () => {
        const template = { id: 'template-1' };
        template_stub.selected_template.set(template);
        const component = await make();

        component.approveTemplate();
        component.requestApproval();

        expect(template_stub.approveTemplate).toHaveBeenCalledWith(template);
        expect(template_stub.requestTemplateApproval).toHaveBeenCalledWith(
            template,
        );
    });

    it('delegates sharing for the selected template', async () => {
        const template = { id: 'template-1' };
        template_stub.selected_template.set(template);
        const component = await make();

        component.shareTemplate();

        expect(template_stub.shareTemplate).toHaveBeenCalledWith(template);
    });

    it('keeps the live ID when the list holds a draft record', async () => {
        const fixture = await makeFixture();
        const draft = {
            id: 'template-draft',
            live_template_id: 'template-live',
        };
        template_stub.templates.set([draft]);
        fixture.componentRef.setInput('id', 'template-live');
        await fixture.whenStable();

        expect(template_stub.selected_template()).toBe(draft);
        expect(navigate).not.toHaveBeenCalled();
    });

    it('leaves the route of a template once it is deleted', async () => {
        const component = await make();
        template_stub.selected_template.set({ id: 'template-1' });
        template_stub.removeTemplate.mockResolvedValueOnce(false);

        await component.removeTemplate();
        expect(navigate).not.toHaveBeenCalled();

        template_stub.removeTemplate.mockResolvedValueOnce(true);
        await component.removeTemplate();
        expect(navigate).toHaveBeenCalledWith(['/templates'], {
            queryParamsHandling: 'merge',
        });
    });

    it('routes a draft ID link to the live ID', async () => {
        const fixture = await makeFixture();
        const draft = {
            id: 'template-draft',
            live_template_id: 'template-live',
        };
        template_stub.templates.set([draft]);
        fixture.componentRef.setInput('id', 'template-draft');
        await fixture.whenStable();

        expect(navigate).toHaveBeenCalledWith(['/templates', 'template-live'], {
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    });

    it('fetches a linked template instead of returning to the selected one', async () => {
        const fixture = await makeFixture();
        const selected = { id: 'template-1' };
        const linked = { id: 'template-300' };
        template_stub.loadTemplate.mockResolvedValue(linked);
        template_stub.selected_template.set(selected);
        template_stub.templates.set([selected]);
        fixture.componentRef.setInput('id', 'template-300');
        await fixture.whenStable();

        await vi.waitFor(() =>
            expect(template_stub.selected_template()).toBe(linked),
        );
        expect(template_stub.loadTemplate).toHaveBeenCalledWith('template-300');
        expect(navigate).not.toHaveBeenCalled();
    });

    it('opens a linked template when the loaded list has no rows', async () => {
        const fixture = await makeFixture();
        template_stub.templates_ready.set(true);
        fixture.componentRef.setInput('id', 'template-300');
        await fixture.whenStable();

        expect(template_stub.loadTemplate).toHaveBeenCalledWith('template-300');
    });

    it('waits for the first page before it fetches a linked template', async () => {
        const fixture = await makeFixture();
        fixture.componentRef.setInput('id', 'template-300');
        await fixture.whenStable();

        expect(template_stub.loadTemplate).not.toHaveBeenCalled();
    });

    it('tries a failed link again when the list changes', async () => {
        const fixture = await makeFixture();
        template_stub.templates.set([{ id: 'template-1' }]);
        fixture.componentRef.setInput('id', 'template-300');
        await fixture.whenStable();
        await vi.waitFor(() =>
            expect(template_stub.loadTemplate).toHaveBeenCalledTimes(1),
        );

        template_stub.templates.set([{ id: 'template-1' }, { id: 'other' }]);
        await fixture.whenStable();

        expect(template_stub.loadTemplate).toHaveBeenCalledTimes(2);
    });

    it('resets the layout selection when switching templates', async () => {
        const fixture = await makeFixture();
        const first = { id: 'template-1' };
        const second = { id: 'template-2' };
        template_stub.templates.set([first, second]);
        template_stub.selected_template.set(first);
        template_stub.selected_template_layout_index.set(1);
        fixture.componentRef.setInput('id', 'template-2');
        await fixture.whenStable();

        expect(template_stub.selected_template()).toBe(second);
        expect(template_stub.selected_template_layout_index()).toBeNull();
    });

    it('keeps the expanded row when a list reload refreshes the selection', async () => {
        const fixture = await makeFixture();
        const stale = { id: 'template-1' };
        const fresh = { id: 'template-1' };
        template_stub.templates.set([stale]);
        template_stub.selected_template.set(stale);
        template_stub.selected_template_layout_index.set(1);
        fixture.componentRef.setInput('id', 'template-1');
        await fixture.whenStable();

        template_stub.templates.set([fresh]);
        await fixture.whenStable();

        expect(template_stub.selected_template()).toBe(fresh);
        expect(template_stub.selected_template_layout_index()).toBe(1);
    });

    it('selects a fetched template that a search keeps out of the list', async () => {
        const fixture = await makeFixture();
        const fetched = { id: 'template-300' };
        template_stub.loadTemplate.mockResolvedValue(fetched);
        template_stub.templates.set([{ id: 'match-1' }]);
        fixture.componentRef.setInput('id', 'template-300');
        await fixture.whenStable();

        await vi.waitFor(() =>
            expect(template_stub.selected_template()).toBe(fetched),
        );
        expect(template_stub.templates()).toEqual([{ id: 'match-1' }]);
    });

    it('does not fetch the selected template when a search hides it', async () => {
        const fixture = await makeFixture();
        const selected = { id: 'template-req' };
        template_stub.selected_template.set(selected);
        template_stub.templates.set([{ id: 'bulk-19' }]);
        fixture.componentRef.setInput('id', 'template-req');
        await fixture.whenStable();

        expect(template_stub.loadTemplate).not.toHaveBeenCalled();
        expect(template_stub.selected_template()).toBe(selected);
    });

    it('fetches a linked template that is not in the loaded pages once', async () => {
        const fixture = await makeFixture();
        // Still loading when the list changes
        template_stub.loadTemplate.mockReturnValue(new Promise(() => {}));
        template_stub.templates.set([{ id: 'template-1' }]);
        fixture.componentRef.setInput('id', 'template-300');
        await fixture.whenStable();

        template_stub.templates.set([{ id: 'template-1' }, { id: 'other' }]);
        await fixture.whenStable();

        expect(template_stub.loadTemplate).toHaveBeenCalledExactlyOnceWith(
            'template-300',
        );
    });

    it('gives the layout list panel an ID apart from the preview panel', async () => {
        const component = await make();

        expect(component.view_tab()).toBe('preview');
        expect(component.layout_tab()).toBe('layouts');
        component.setViewTab('details');
        expect(component.layout_tab()).toBe('details');
    });

    it('keeps unsaved layout edits when a list reload returns the same template', async () => {
        const fixture = await makeFixture();
        const stale = { id: 'template-1' };
        const fresh = { id: 'template-1' };
        template_stub.templates.set([stale]);
        template_stub.selected_template.set(stale);
        template_stub.template_layout_dirty.set(true);
        fixture.componentRef.setInput('id', 'template-1');
        await fixture.whenStable();

        template_stub.templates.set([fresh]);
        await fixture.whenStable();

        expect(template_stub.selected_template()).toBe(stale);
    });
});
