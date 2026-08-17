import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageService } from '../../app/signage.service';
import { TemplateLayoutListComponent } from '../../app/templates/template-layout-list.component';

describe('TemplateLayoutListComponent', () => {
    const draft = signal<any[]>([]);
    const selected_index = signal<number | null>(null);
    const selected_template = signal<any>(null);
    const can_update = signal(true);
    const plugins = signal<any[]>([]);
    const save = vi.fn();
    const discard = vi.fn();

    const service_stub = {
        template_layout_draft: draft,
        selected_template_layout_index: selected_index,
        template_layout_dirty: signal(false),
        selected_template,
        can_update,
        plugins,
        saveTemplateLayouts: save,
        discardTemplateLayoutDraft: discard,
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [TemplateLayoutListComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        })
            .overrideComponent(TemplateLayoutListComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(TemplateLayoutListComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        draft.set([]);
        selected_index.set(null);
        selected_template.set(null);
        can_update.set(true);
        plugins.set([]);
    });

    it('appends and selects a new layout item', async () => {
        const component = await make();
        component.addLayout('bottom');
        expect(draft()).toEqual([{ position: 'bottom', plugin_params: {} }]);
        expect(selected_index()).toBe(0);
    });

    it('shifts the selection when an earlier item is removed', async () => {
        draft.set([
            { position: 'top', plugin_params: {} },
            { position: 'left', plugin_params: {} },
        ]);
        selected_index.set(1);
        const component = await make();
        component.removeLayout(new Event('click'), 0);
        expect(draft()).toEqual([{ position: 'left', plugin_params: {} }]);
        expect(selected_index()).toBe(0);
    });

    it('clears the selection when the selected item is removed', async () => {
        draft.set([{ position: 'top', plugin_params: {} }]);
        selected_index.set(0);
        const component = await make();
        component.removeLayout(new Event('click'), 0);
        expect(selected_index()).toBeNull();
    });

    it('keeps the selection on the moved item after a drop', async () => {
        draft.set([
            { position: 'top', plugin_params: {} },
            { position: 'left', plugin_params: {} },
            { position: 'bottom', plugin_params: {} },
        ]);
        selected_index.set(0);
        const component = await make();
        component.onDrop({ previousIndex: 0, currentIndex: 2 } as any);
        expect(draft().map((item) => item.position)).toEqual([
            'left',
            'bottom',
            'top',
        ]);
        expect(selected_index()).toBe(2);
    });

    it('ignores drops when the user cannot update', async () => {
        draft.set([
            { position: 'top', plugin_params: {} },
            { position: 'left', plugin_params: {} },
        ]);
        can_update.set(false);
        const component = await make();
        component.onDrop({ previousIndex: 0, currentIndex: 1 } as any);
        expect(draft()[0].position).toBe('top');
    });

    it('applies a plugin with its default params to a layout', async () => {
        plugins.set([{ id: 'plugin-1', name: 'Clock', defaults: { size: 2 } }]);
        draft.set([{ position: 'top', plugin_params: {} }]);
        selected_index.set(0);
        const component = await make();
        component.setPlugin(0, 'plugin-1');
        expect(draft()[0]).toEqual({
            position: 'top',
            plugin_id: 'plugin-1',
            plugin_params: { size: 2 },
        });
        expect(component.params_text()).toContain('"size": 2');
    });

    it('keeps existing params when switching plugin', async () => {
        plugins.set([{ id: 'plugin-1', name: 'Clock', defaults: { size: 2 } }]);
        draft.set([
            { position: 'top', plugin_id: 'other', plugin_params: { a: 1 } },
        ]);
        const component = await make();
        component.setPlugin(0, 'plugin-1');
        expect(draft()[0].plugin_params).toEqual({ a: 1 });
    });

    it('applies valid JSON params text to the selected layout', async () => {
        draft.set([{ position: 'top', plugin_params: {} }]);
        selected_index.set(0);
        const component = await make();
        component.setParamsText('{ "speed": 5 }');
        expect(component.params_error()).toBe(false);
        expect(draft()[0].plugin_params).toEqual({ speed: 5 });
    });

    it('flags invalid JSON without touching the draft', async () => {
        draft.set([{ position: 'top', plugin_params: { kept: true } }]);
        selected_index.set(0);
        const component = await make();
        component.setParamsText('{ not json');
        expect(component.params_error()).toBe(true);
        expect(draft()[0].plugin_params).toEqual({ kept: true });
    });

    it('saves and discards through the service', async () => {
        const component = await make();
        component.save();
        component.discard();
        expect(save).toHaveBeenCalledTimes(1);
        expect(discard).toHaveBeenCalledTimes(1);
    });
});
