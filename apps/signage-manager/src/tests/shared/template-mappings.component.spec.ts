import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TemplateMappingsComponent } from '../../app/shared/template-mappings.component';
import { HydratedSignageTemplateMapping } from '../../app/signage-template-mapping';
import { SignageService } from '../../app/signage.service';

describe('TemplateMappingsComponent', () => {
    const mapping = new HydratedSignageTemplateMapping({
        id: 'mapping-1',
        template_id: 'template-1',
        control_system_id: 'display-1',
        schedule: {
            play_cron: '0 9 * * 1-5',
            play_period: 30,
            play_takeover: false,
        },
        template_details: {
            name: 'Welcome',
            background_media: {
                media_uri: '/api/engine/v2/uploads/background/url',
            },
            layouts: [
                {
                    position: 'top',
                    plugin_id: 'clock',
                    plugin_params: {},
                },
            ],
        },
    });
    const list_mappings = vi.fn();
    const edit_mapping = vi.fn();
    const remove_mapping = vi.fn();
    const service_stub = {
        can_update: signal(true),
        listTemplateMappings: list_mappings,
        editTemplateMapping: edit_mapping,
        removeTemplateMapping: remove_mapping,
    };

    async function setup(
        target_type: 'display' | 'zone',
        target_id: string,
        render_template = false,
    ) {
        let test_module = TestBed.configureTestingModule({
            imports: [TemplateMappingsComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        });
        if (!render_template) {
            test_module = test_module.overrideComponent(
                TemplateMappingsComponent,
                {
                    set: { template: '', imports: [] },
                },
            );
        }
        await test_module.compileComponents();
        const fixture = TestBed.createComponent(TemplateMappingsComponent);
        fixture.componentRef.setInput('target_type', target_type);
        fixture.componentRef.setInput('target_id', target_id);
        await fixture.whenStable();
        return { fixture, component: fixture.componentInstance };
    }

    beforeEach(() => {
        vi.clearAllMocks();
        TestBed.resetTestingModule();
        list_mappings.mockResolvedValue([mapping]);
        edit_mapping.mockResolvedValue(true);
        remove_mapping.mockResolvedValue(true);
    });

    it('loads mappings for a display and builds preview layout items', async () => {
        const { component } = await setup('display', 'display-1');

        expect(list_mappings).toHaveBeenCalledWith({
            control_system_id: 'display-1',
        });
        expect(component.mapping_cards()[0].mapping).toBe(mapping);
        expect(component.mapping_cards()[0].layout_items[0]).toEqual(
            expect.objectContaining({ plugin_id: 'clock' }),
        );
        expect(component.backgroundUrl(mapping)).toBe(
            '/api/engine/v2/uploads/background/url',
        );
    });

    it('renders the hydrated template preview and mapping actions', async () => {
        const { fixture } = await setup('display', 'display-1', true);
        await fixture.whenStable();

        expect(fixture.nativeElement.querySelector('article')).toBeTruthy();
        expect(
            fixture.nativeElement.querySelector('[role="img"]'),
        ).toBeTruthy();
        expect(fixture.nativeElement.textContent).toContain('Welcome');
        expect(fixture.nativeElement.textContent).toContain('Weekdays at');
        expect(fixture.nativeElement.textContent).toContain('for 30 minutes');
        expect(fixture.nativeElement.querySelectorAll('button').length).toBe(3);
    });

    it('opens a new zone mapping and reloads after save', async () => {
        const { component } = await setup('zone', 'zone-1');
        const calls_before_edit = list_mappings.mock.calls.length;

        await component.editMapping();
        await vi.waitFor(() => {
            expect(list_mappings.mock.calls.length).toBeGreaterThan(
                calls_before_edit,
            );
        });

        expect(edit_mapping).toHaveBeenCalledWith({ zone_id: 'zone-1' }, null);
    });

    it('removes a mapping and reloads after confirmation', async () => {
        const { component } = await setup('display', 'display-1');
        const calls_before_remove = list_mappings.mock.calls.length;

        await component.removeMapping(mapping);
        await vi.waitFor(() => {
            expect(list_mappings.mock.calls.length).toBeGreaterThan(
                calls_before_remove,
            );
        });

        expect(remove_mapping).toHaveBeenCalledWith(mapping);
    });
});
