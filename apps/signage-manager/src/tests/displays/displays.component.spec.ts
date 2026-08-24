import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
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
        editDisplay: edit_display,
        removeDisplay: remove_display,
    };
    const router_stub = { navigate };

    async function make(): Promise<
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
                set: { template: '' },
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
        remove_display.mockResolvedValue(false);
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
