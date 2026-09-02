import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { SignageService } from '../../app/signage.service';
import { ZonesSectionComponent } from '../../app/zones/zones.component';

describe('ZonesSectionComponent', () => {
    const selected_zone = signal<any>(null);
    const all_zones = signal<any[]>([]);
    const playlists = signal<any[]>([]);
    const displays = signal<any[]>([]);
    const templates_enabled = signal(true);
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
        can_manage_zones,
        editZone: edit_zone,
        removeZone: remove_zone,
    };
    const router_stub = { navigate };

    async function make(): Promise<
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
                set: { template: '' },
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
        can_manage_zones.set(false);
        remove_zone.mockResolvedValue(false);
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
