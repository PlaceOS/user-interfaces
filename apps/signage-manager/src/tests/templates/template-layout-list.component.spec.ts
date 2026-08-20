import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageService } from '../../app/signage.service';
import { TemplateLayoutListComponent } from '../../app/templates/template-layout-list.component';
import { SIDEBAR_WIDTH_PC } from '../../app/templates/template-layout.util';

describe('TemplateLayoutListComponent', () => {
    const draft = signal<any[]>([]);
    const selected_index = signal<number | null>(null);
    const selected_template = signal<any>(null);
    const can_update = signal(true);
    const widgets = signal<any[]>([]);
    const save = vi.fn();
    const discard = vi.fn();

    const service_stub = {
        template_layout_draft: draft,
        selected_template_layout_index: selected_index,
        template_layout_dirty: signal(false),
        selected_template,
        can_update,
        widgets,
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
        widgets.set([]);
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

    it('applies plugin and schema defaults to a layout', async () => {
        widgets.set([
            {
                id: 'plugin-1',
                name: 'Clock',
                plugin_type: 'widget',
                defaults: { size: 2 },
                params: {
                    type: 'object',
                    properties: {
                        format: { type: 'string', default: '24h' },
                    },
                },
            },
        ]);
        draft.set([{ position: 'top', plugin_params: {} }]);
        selected_index.set(0);
        const component = await make();
        component.setPlugin(0, 'plugin-1');
        expect(draft()[0]).toEqual({
            position: 'top',
            plugin_id: 'plugin-1',
            plugin_params: { size: 2, format: '24h' },
        });
    });

    it('keeps existing params ahead of defaults when switching plugin', async () => {
        widgets.set([
            {
                id: 'plugin-1',
                name: 'Clock',
                plugin_type: 'widget',
                defaults: { size: 2 },
            },
        ]);
        draft.set([
            {
                position: 'top',
                plugin_id: 'other',
                plugin_params: { size: 4 },
            },
        ]);
        const component = await make();
        component.setPlugin(0, 'plugin-1');
        expect(draft()[0].plugin_params).toEqual({ size: 4 });
    });

    it('stores axis percentages as API ratios', async () => {
        draft.set([{ position: 'left', plugin_params: {} }]);
        const component = await make();

        component.setAxis(0, 'x_pos', 25);
        expect(draft()[0].x_pos).toBe(0.25);
        expect(component.axisPercentage(draft()[0], 'x_pos')).toBe(25);

        component.setAxis(0, 'x_pos', 150);
        expect(draft()[0].x_pos).toBe(1);

        component.setAxis(0, 'x_pos', null);
        expect(draft()[0].x_pos).toBeUndefined();
        expect(component.axisPercentage(draft()[0], 'x_pos')).toBe(
            SIDEBAR_WIDTH_PC,
        );
    });

    it('generates a schema from catalogue plugin params', async () => {
        widgets.set([
            {
                id: 'plugin-1',
                name: 'Clock',
                plugin_type: 'widget',
                params: {
                    format: {
                        type: 'string',
                        title: 'Format',
                        default: '24h',
                    },
                },
            },
        ]);
        draft.set([
            {
                position: 'top',
                plugin_id: 'plugin-1',
                plugin_params: {},
            },
        ]);
        selected_index.set(0);
        const component = await make();

        expect(component.selected_plugin_schema()).toEqual({
            type: 'object',
            properties: widgets()[0].params,
        });
    });

    it('only allows widget plugins in template layouts', async () => {
        widgets.set([
            { id: 'widget-1', name: 'Clock', plugin_type: 'widget' },
        ]);
        draft.set([{ position: 'top', plugin_params: {} }]);
        const component = await make();

        expect(component.widgets().map(({ id }) => id)).toEqual(['widget-1']);

        component.setPlugin(0, 'plugin-1');
        expect(draft()[0]).toEqual({ position: 'top', plugin_params: {} });

        component.setPlugin(0, 'widget-1');
        expect(draft()[0].plugin_id).toBe('widget-1');
    });

    it('applies generated field values to the selected layout', async () => {
        draft.set([{ position: 'top', plugin_params: {} }]);
        selected_index.set(0);
        const component = await make();
        component.setParams(0, { speed: 5 });
        expect(draft()[0].plugin_params).toEqual({ speed: 5 });
    });

    it('saves and discards through the service', async () => {
        const component = await make();
        component.save();
        component.discard();
        expect(save).toHaveBeenCalledTimes(1);
        expect(discard).toHaveBeenCalledTimes(1);
    });
});
