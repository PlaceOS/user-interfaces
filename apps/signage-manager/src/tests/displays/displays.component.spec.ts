import { NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatePipe } from '@placeos/components';
import { DisplaysSectionComponent } from '../../app/displays/displays.component';
import { SignageService } from '../../app/signage.service';

describe('DisplaysSectionComponent', () => {
    const selected_display = signal<any>(null);
    const displays = signal<any[]>([]);
    const playlists = signal<any[]>([]);
    const zones = signal<any[]>([]);
    const all_zones = signal<any[]>([]);
    const can_update = signal(false);
    const can_delete_displays = signal(false);
    const templates_enabled = signal(true);
    const playlists_loading = signal(false);
    const related_loading = signal(false);
    const template_mappings_revision = signal(0);
    const list_template_mappings = vi.fn();
    const navigate = vi.fn();
    const edit_display = vi.fn();
    const remove_display = vi.fn();
    const service_stub = {
        selected_display,
        displays,
        playlists,
        zones,
        all_zones,
        can_update,
        can_delete_displays,
        templates_enabled,
        playlists_loading,
        all_zones_loading: related_loading,
        template_mappings_revision,
        listTemplateMappings: list_template_mappings,
        editDisplay: edit_display,
        removeDisplay: remove_display,
    };
    const router_stub = { navigate };

    async function make(
        render_template = false,
    ): Promise<
        [DisplaysSectionComponent, ComponentFixture<DisplaysSectionComponent>]
    > {
        await TestBed.configureTestingModule({
            imports: [DisplaysSectionComponent],
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: Router, useValue: router_stub },
                { provide: ActivatedRoute, useValue: {} },
            ],
        })
            .overrideComponent(DisplaysSectionComponent, {
                set: render_template
                    ? { imports: [TranslatePipe], schemas: [NO_ERRORS_SCHEMA] }
                    : { template: '' },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(DisplaysSectionComponent);
        return [fixture.componentInstance, fixture];
    }

    beforeEach(() => {
        vi.clearAllMocks();
        selected_display.set(null);
        displays.set([]);
        playlists.set([]);
        zones.set([]);
        all_zones.set([]);
        can_update.set(false);
        can_delete_displays.set(false);
        templates_enabled.set(true);
        playlists_loading.set(false);
        related_loading.set(false);
        template_mappings_revision.set(0);
        list_template_mappings.mockResolvedValue([]);
        remove_display.mockResolvedValue(false);
    });

    it('shows question marks in count badges while data loads', async () => {
        selected_display.set({ id: 'target-1' });
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
            element.querySelector(`#display-${tab}-tab span`);

        await vi.waitFor(() => {
            for (const tab of ['templates', 'playlists', 'zones']) {
                expect(badge(tab)?.textContent?.trim()).toBe('?');
                expect(badge(tab)?.getAttribute('aria-busy')).toBe('true');
            }
        });

        finish_loading([]);
        playlists_loading.set(false);
        related_loading.set(false);
        await fixture.whenStable();
        for (const tab of ['templates', 'playlists', 'zones']) {
            expect(badge(tab)?.textContent?.trim()).toBe('0');
            expect(badge(tab)?.getAttribute('aria-busy')).toBe('false');
        }
    });

    it('counts template mappings and refreshes after assignment changes', async () => {
        selected_display.set({ id: 'target-1' });
        list_template_mappings.mockResolvedValue([{ id: 'm1' }, { id: 'm2' }]);
        const [component, fixture] = await make(true);
        await fixture.whenStable();

        expect(list_template_mappings).toHaveBeenCalledWith({
            control_system_id: 'target-1',
        });
        expect(component.template_count()).toBe(2);
        const element: HTMLElement = fixture.nativeElement;
        const tab = element.querySelector('#display-templates-tab span');
        expect(tab?.textContent?.trim()).toBe('2');

        list_template_mappings.mockResolvedValue([{ id: 'm1' }]);
        template_mappings_revision.update((value) => value + 1);
        await fixture.whenStable();
        expect(component.template_count()).toBe(1);
        expect(tab?.textContent?.trim()).toBe('1');

        selected_display.set({ id: 'target-2' });
        list_template_mappings.mockResolvedValue([]);
        await fixture.whenStable();
        expect(list_template_mappings).toHaveBeenLastCalledWith({
            control_system_id: 'target-2',
        });
        expect(component.template_count()).toBe(0);
        expect(tab?.textContent?.trim()).toBe('0');
    });

    it('counts the playlists and zones attached to the selected display', async () => {
        playlists.set([{ id: 'p1' }, { id: 'p2' }]);
        zones.set([{ id: 'z1' }]);
        all_zones.set([{ id: 'z1' }, { id: 'z2' }, { id: 'z3' }]);
        selected_display.set({
            id: 'd1',
            playlists: ['p1'],
            zones: ['z2', 'z3'],
        });
        const [component] = await make();

        expect(component.playlist_count()).toBe(1);
        expect(component.zone_count()).toBe(2);
    });

    it('builds a signage panel link for the selected display', async () => {
        selected_display.set({ id: 'd 1' });
        const [component] = await make();

        expect(component.panel_link()).toBe(
            '/signage/#/signage/d%201?debug=true',
        );
    });

    it('returns an empty panel link when nothing is selected', async () => {
        const [component] = await make();
        expect(component.panel_link()).toBe('');
    });

    it('selects the routed display once the list has loaded', async () => {
        displays.set([{ id: 'd1' }, { id: 'd2' }]);
        const [, fixture] = await make();
        fixture.componentRef.setInput('id', 'd2');
        fixture.detectChanges();
        TestBed.flushEffects();

        expect(selected_display()?.id).toBe('d2');
    });

    it('clears the selection when navigating back to the list', async () => {
        displays.set([{ id: 'd1' }]);
        const [, fixture] = await make();
        fixture.componentRef.setInput('id', 'd1');
        fixture.detectChanges();
        TestBed.flushEffects();
        expect(selected_display()?.id).toBe('d1');

        fixture.componentRef.setInput('id', '');
        TestBed.flushEffects();
        expect(selected_display()).toBeNull();
    });

    it('syncs the active tab from the route query param', async () => {
        const [component, fixture] = await make();
        fixture.componentRef.setInput('tab', 'zones');
        fixture.detectChanges();
        TestBed.flushEffects();

        expect(component.view_tab()).toBe('zones');
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
        component.setViewTab('playlists');

        expect(component.view_tab()).toBe('playlists');
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { tab: 'playlists' },
                queryParamsHandling: 'merge',
            }),
        );
    });

    it('does not re-navigate when selecting the already active tab', async () => {
        const [component] = await make();
        component.setViewTab('schedule');
        expect(navigate).not.toHaveBeenCalled();
    });

    it('deselects the display and returns to the display list', async () => {
        selected_display.set({ id: 'd1' });
        const [component] = await make();
        component.deselectDisplay();

        expect(selected_display()).toBeNull();
        expect(navigate).toHaveBeenCalledWith(['/displays'], {});
    });

    it('edits the selected display', async () => {
        const display = { id: 'd1' };
        selected_display.set(display);
        const [component] = await make();

        component.editDisplay();

        expect(edit_display).toHaveBeenCalledWith(display);
    });

    it('returns to the list after deleting the selected display', async () => {
        const display = { id: 'd1' };
        selected_display.set(display);
        remove_display.mockResolvedValue(true);
        const [component] = await make();

        await component.removeDisplay();

        expect(remove_display).toHaveBeenCalledWith(display);
        expect(navigate).toHaveBeenCalledWith(['/displays'], {});
    });
});
