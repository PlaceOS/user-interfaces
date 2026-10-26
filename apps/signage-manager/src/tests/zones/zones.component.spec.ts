import { NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatePipe } from '@placeos/components';
import { SignageService } from '../../app/signage.service';
import { ZonesSectionComponent } from '../../app/zones/zones.component';

describe('ZonesSectionComponent', () => {
    const selected_zone = signal<any>(null);
    const all_zones = signal<any[]>([]);
    const playlists = signal<any[]>([]);
    const displays = signal<any[]>([]);
    const templates_enabled = signal(true);
    const playlists_loading = signal(false);
    const related_loading = signal(false);
    const template_mappings_revision = signal(0);
    const list_template_mappings = vi.fn();
    const can_manage_zones = signal(false);
    const edit_zone = vi.fn();
    const remove_zone = vi.fn();
    const navigate = vi.fn();
    const service_stub = {
        selected_zone,
        all_zones,
        playlists,
        displays,
        templates_enabled,
        playlists_loading,
        displays_loading: related_loading,
        template_mappings_revision,
        listTemplateMappings: list_template_mappings,
        can_manage_zones,
        editZone: edit_zone,
        removeZone: remove_zone,
    };
    const router_stub = { navigate };

    async function make(
        render_template = false,
    ): Promise<
        [ZonesSectionComponent, ComponentFixture<ZonesSectionComponent>]
    > {
        await TestBed.configureTestingModule({
            imports: [ZonesSectionComponent],
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: Router, useValue: router_stub },
                { provide: ActivatedRoute, useValue: {} },
            ],
        })
            .overrideComponent(ZonesSectionComponent, {
                set: render_template
                    ? { imports: [TranslatePipe], schemas: [NO_ERRORS_SCHEMA] }
                    : { template: '' },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(ZonesSectionComponent);
        return [fixture.componentInstance, fixture];
    }

    beforeEach(() => {
        vi.clearAllMocks();
        selected_zone.set(null);
        all_zones.set([]);
        playlists.set([]);
        displays.set([]);
        templates_enabled.set(true);
        playlists_loading.set(false);
        related_loading.set(false);
        template_mappings_revision.set(0);
        list_template_mappings.mockResolvedValue([]);
        can_manage_zones.set(false);
        remove_zone.mockResolvedValue(false);
    });

    it('shows question marks in count badges while data loads', async () => {
        selected_zone.set({ id: 'target-1' });
        let finish_loading!: (value: []) => void;
        list_template_mappings.mockReturnValue(
            new Promise<[]>((resolve) => {
                finish_loading = resolve;
            }),
        );
        playlists_loading.set(true);
        related_loading.set(true);
        const [, fixture] = await make(true);
        const element: HTMLElement = fixture.nativeElement;
        const badge = (tab: string) =>
            element.querySelector(`#zone-${tab}-tab span`);

        await vi.waitFor(() => {
            for (const tab of ['templates', 'playlists', 'displays']) {
                expect(badge(tab)?.textContent?.trim()).toBe('?');
                expect(badge(tab)?.getAttribute('aria-busy')).toBe('true');
            }
        });

        finish_loading([]);
        playlists_loading.set(false);
        related_loading.set(false);
        await fixture.whenStable();
        for (const tab of ['templates', 'playlists', 'displays']) {
            expect(badge(tab)?.textContent?.trim()).toBe('0');
            expect(badge(tab)?.getAttribute('aria-busy')).toBe('false');
        }
    });

    it('counts template mappings and refreshes after assignment changes', async () => {
        selected_zone.set({ id: 'target-1' });
        list_template_mappings.mockResolvedValue([{ id: 'm1' }, { id: 'm2' }]);
        const [component, fixture] = await make(true);
        await fixture.whenStable();

        expect(list_template_mappings).toHaveBeenCalledWith({
            zone_id: 'target-1',
        });
        expect(component.template_count()).toBe(2);
        const element: HTMLElement = fixture.nativeElement;
        const tab = element.querySelector('#zone-templates-tab span');
        expect(tab?.textContent?.trim()).toBe('2');

        list_template_mappings.mockResolvedValue([{ id: 'm1' }]);
        template_mappings_revision.update((value) => value + 1);
        await fixture.whenStable();
        expect(component.template_count()).toBe(1);
        expect(tab?.textContent?.trim()).toBe('1');

        selected_zone.set({ id: 'target-2' });
        list_template_mappings.mockResolvedValue([]);
        await fixture.whenStable();
        expect(list_template_mappings).toHaveBeenLastCalledWith({
            zone_id: 'target-2',
        });
        expect(component.template_count()).toBe(0);
        expect(tab?.textContent?.trim()).toBe('0');
    });

    it('counts playlists on the zone and displays that reference it', async () => {
        playlists.set([{ id: 'p1' }, { id: 'p2' }]);
        displays.set([
            { id: 'd1', zones: ['z1'] },
            { id: 'd2', zones: ['z2'] },
        ]);
        selected_zone.set({ id: 'z1', playlists: ['p1', 'p2'] });
        const [component] = await make();

        expect(component.playlist_count()).toBe(2);
        expect(component.display_count()).toBe(1);
    });

    it('selects the routed zone once the zone list has loaded', async () => {
        all_zones.set([{ id: 'z1' }, { id: 'z2' }]);
        const [, fixture] = await make();
        fixture.componentRef.setInput('id', 'z2');
        fixture.detectChanges();
        TestBed.flushEffects();

        expect(selected_zone()?.id).toBe('z2');
    });

    it('clears the selection when navigating back to the list', async () => {
        all_zones.set([{ id: 'z1' }]);
        const [, fixture] = await make();
        fixture.componentRef.setInput('id', 'z1');
        fixture.detectChanges();
        TestBed.flushEffects();
        expect(selected_zone()?.id).toBe('z1');

        fixture.componentRef.setInput('id', '');
        TestBed.flushEffects();
        expect(selected_zone()).toBeNull();
    });

    it('syncs the active tab from the route query param', async () => {
        const [component, fixture] = await make();
        fixture.componentRef.setInput('tab', 'displays');
        fixture.detectChanges();
        TestBed.flushEffects();

        expect(component.view_tab()).toBe('displays');
    });

    it('opens the templates tab when template management is enabled', async () => {
        const [component, fixture] = await make();
        fixture.componentRef.setInput('tab', 'templates');
        fixture.detectChanges();
        TestBed.flushEffects();

        expect(component.view_tab()).toBe('templates');
    });

    it('navigates and updates the tab when switching views', async () => {
        const [component] = await make();
        component.setViewTab('displays');

        expect(component.view_tab()).toBe('displays');
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { tab: 'displays' },
                queryParamsHandling: 'merge',
            }),
        );
    });

    it('does not re-navigate when selecting the already active tab', async () => {
        const [component] = await make();
        component.setViewTab('playlists');
        expect(navigate).not.toHaveBeenCalled();
    });

    it('deselects the zone and returns to the zone list', async () => {
        selected_zone.set({ id: 'z1' });
        const [component] = await make();
        component.deselectZone();

        expect(selected_zone()).toBeNull();
        expect(navigate).toHaveBeenCalledWith(['/zones'], {});
    });

    it('allows managers to edit only signage-tagged zones', async () => {
        can_manage_zones.set(true);
        const [component] = await make();

        selected_zone.set({ id: 'parent', tags: [] });
        expect(component.can_manage_selected_zone()).toBe(false);

        const zone = { id: 'signage', tags: ['signage'] };
        selected_zone.set(zone);
        expect(component.can_manage_selected_zone()).toBe(true);

        component.editZone();
        expect(edit_zone).toHaveBeenCalledWith(zone);
    });

    it('returns to the list after deleting a signage zone', async () => {
        const zone = { id: 'signage', tags: ['signage'] };
        selected_zone.set(zone);
        remove_zone.mockResolvedValue(true);
        const [component] = await make();

        await component.removeZone();

        expect(remove_zone).toHaveBeenCalledWith(zone);
        expect(navigate).toHaveBeenCalledWith(['/zones'], {});
    });
});
