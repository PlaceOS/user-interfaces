import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { addDays, isSameDay, startOfDay } from 'date-fns';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { SchedulesSectionComponent } from '../../app/schedules/schedules.component';
import { SignageInventoryService } from '../../app/signage-inventory.service';

describe('SchedulesSectionComponent', () => {
    const playlists = signal<any[]>([]);
    const displays = signal<any[]>([]);
    const zones = signal<any[]>([]);
    const navigate = vi.fn();
    const inventory_key = signal({ group_id: 'g-1', change: 1 });
    const load_inventory = vi.fn();
    const flush = () => new Promise((resolve) => setTimeout(resolve));

    const inventory_stub = {
        inventory_key,
        loadSignageInventory: load_inventory,
    };
    const playlist_stub = {
        playlist_approval_status: signal<Record<string, boolean>>({}),
    };

    let fixture: ComponentFixture<SchedulesSectionComponent>;

    async function make() {
        await TestBed.configureTestingModule({
            imports: [SchedulesSectionComponent],
            providers: [
                { provide: SignageInventoryService, useValue: inventory_stub },
                { provide: SignagePlaylistService, useValue: playlist_stub },
                { provide: Router, useValue: { navigate } },
                { provide: ActivatedRoute, useValue: {} },
            ],
        })
            .overrideComponent(SchedulesSectionComponent, {
                set: { template: '' },
            })
            .compileComponents();
        fixture = TestBed.createComponent(SchedulesSectionComponent);
        await loaded();
        return fixture.componentInstance;
    }

    async function loaded() {
        TestBed.tick();
        await flush();
    }

    beforeEach(() => {
        vi.clearAllMocks();
        load_inventory.mockImplementation(async () => ({
            displays: displays(),
            zones: zones(),
            playlists: playlists(),
        }));
        playlists.set([]);
        displays.set([
            { id: 'd-1', name: 'Foyer', zones: [], updated_at: 1 },
            { id: 'd-2', name: 'Cafe', zones: [], updated_at: 2 },
        ]);
        zones.set([{ id: 'z-1', name: 'Ground', updated_at: 1 }]);
    });

    afterEach(() => fixture?.destroy());

    it('counts displays and zones from the service', async () => {
        const component = await make();
        expect(component.display_total()).toBe(2);
        expect(component.zone_total()).toBe(1);
    });

    it('builds one timeline row per display in the displays view', async () => {
        const component = await make();
        expect(component.rows().map((r) => r.id)).toEqual(['d-1', 'd-2']);
    });

    it('switches to zone rows when the view tab changes', async () => {
        const component = await make();
        component.setViewTab('zones');
        expect(component.view_tab()).toBe('zones');
        expect(component.rows().map((r) => r.id)).toEqual(['z-1']);
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({ queryParams: { tab: 'zones' } }),
        );
    });

    it('moves between tabs with the arrow keys', async () => {
        const component = await make();
        component.onTabKeydown(
            new KeyboardEvent('keydown', { key: 'ArrowRight' }),
        );
        expect(component.view_tab()).toBe('zones');
        component.onTabKeydown(
            new KeyboardEvent('keydown', { key: 'ArrowLeft' }),
        );
        expect(component.view_tab()).toBe('displays');
    });

    it('filters rows by the search term', async () => {
        const component = await make();
        component.search_term.set('foyer');
        expect(component.rows().map((r) => r.id)).toEqual(['d-1']);
    });

    it('chooses the placeholder based on the active view', async () => {
        const component = await make();
        expect(component.search_placeholder()).toBe(
            'SIGNAGE_MANAGER.SEARCH_DISPLAYS_ZONES_PLAYLISTS',
        );
        component.setViewTab('zones');
        expect(component.search_placeholder()).toBe(
            'SIGNAGE_MANAGER.SEARCH_ZONES_PLAYLISTS',
        );
    });

    it('finds a display by the name of each of its zones', async () => {
        playlists.set([{ id: 'p-1', name: 'News', enabled: true }]);
        displays.set([
            { id: 'd-1', name: 'Foyer', zones: ['z-1', 'z-2'] },
            { id: 'd-2', name: 'Cafe', zones: ['z-3'] },
        ]);
        // Both zones give the same playlist, so its source is "2 zones"
        zones.set([
            { id: 'z-1', name: 'Level 1', playlists: ['p-1'] },
            { id: 'z-2', name: 'Level 2', playlists: ['p-1'] },
            { id: 'z-3', name: 'Basement', playlists: [] },
        ]);
        const component = await make();

        component.search_term.set('level 1');
        expect(component.rows().map((r) => r.id)).toEqual(['d-1']);
        component.search_term.set('basement');
        expect(component.rows().map((r) => r.id)).toEqual(['d-2']);
    });

    it('follows the tab in the route', async () => {
        const component = await make();
        fixture.componentRef.setInput('tab', 'zones');
        expect(component.view_tab()).toBe('zones');
    });

    it('navigates the selected day forwards, backwards and to today', async () => {
        const component = await make();
        const start = component.selected_date();
        component.nextDay();
        expect(isSameDay(component.selected_date(), addDays(start, 1))).toBe(
            true,
        );
        component.previousDay();
        expect(isSameDay(component.selected_date(), start)).toBe(true);

        component.selected_date.set(addDays(start, 5));
        component.goToToday();
        expect(
            isSameDay(component.selected_date(), startOfDay(new Date())),
        ).toBe(true);
    });

    it('derives the current-time marker minutes and same-day visibility', async () => {
        const component = await make();
        component.current_time.set(new Date(2026, 5, 1, 10, 30));
        component.selected_date.set(startOfDay(new Date(2026, 5, 1)));
        expect(component.current_minutes()).toBe(630);
        expect(component.show_current_time()).toBe(true);

        component.selected_date.set(startOfDay(new Date(2026, 5, 2)));
        expect(component.show_current_time()).toBe(false);
    });

    it('shows displays and playlists beyond the first page', async () => {
        const count = 230;
        playlists.set(
            Array.from({ length: count }, (_, i) => ({
                id: `p-${i + 1}`,
                name: `Playlist ${i + 1}`,
                enabled: true,
                schedules: [{ play_cron: '0 9 * * *', play_period: 60 }],
            })),
        );
        displays.set(
            Array.from({ length: count }, (_, i) => ({
                id: `d-${i + 1}`,
                name: `Display ${i + 1}`,
                playlists: [`p-${i + 1}`],
                zones: [],
            })),
        );
        const component = await make();
        const last = component.rows().find(({ id }) => id === 'd-230');

        expect(component.display_total()).toBe(count);
        expect(last?.blocks.map(({ playlist }) => playlist.id)).toEqual([
            'p-230',
        ]);
    });

    it('loads again when the group changes', async () => {
        const component = await make();
        displays.set([{ id: 'd-9', name: 'Lift', zones: [] }]);
        inventory_key.set({ group_id: 'g-2', change: 1 });
        await loaded();

        expect(load_inventory).toHaveBeenCalledTimes(2);
        expect(component.rows().map((r) => r.id)).toEqual(['d-9']);
    });

    it('reports a failed load and loads again on retry', async () => {
        load_inventory.mockRejectedValueOnce(new Error('offline'));
        const component = await make();
        expect(component.inventory_error()).toBe(true);
        expect(component.rows()).toEqual([]);

        component.reload();
        await loaded();
        expect(component.inventory_error()).toBe(false);
        expect(component.rows().map((r) => r.id)).toEqual(['d-1', 'd-2']);
    });
});
