import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DisplayListComponent } from '../../app/displays/display-list.component';
import { signageDisplay } from '../../app/displays/signage-display';
import { SignageService } from '../../app/signage.service';

describe('DisplayListComponent', () => {
    const display_search_term = signal('');
    const filtered_displays = signal<any[]>([]);
    const selected_display = signal<any>(null);
    const displays_has_more = signal(false);
    const displays_loading = signal(false);
    const load_more = vi.fn();
    const service_stub = {
        display_search_term,
        filtered_displays,
        selected_display,
        displays_has_more,
        displays_loading,
        loadMoreDisplays: load_more,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [{ provide: SignageService, useValue: service_stub }],
        });
        return TestBed.createComponent(DisplayListComponent).componentInstance;
    }

    afterEach(() => vi.useRealTimers());

    beforeEach(() => {
        load_more.mockReset();
        display_search_term.set('');
        filtered_displays.set([]);
        selected_display.set(null);
        displays_has_more.set(false);
        displays_loading.set(false);
    });

    it('exposes the service search term as a writable signal', () => {
        const component = make();
        component.search.set('lobby');
        expect(display_search_term()).toBe('lobby');
    });

    it('reflects the filtered display list and current selection', () => {
        const component = make();
        filtered_displays.set([{ id: 'd1' }, { id: 'd2' }]);
        selected_display.set({ id: 'd2' });
        expect(component.displays().map((d: any) => d.id)).toEqual([
            'd1',
            'd2',
        ]);
        expect(component.selected()?.id).toBe('d2');
    });

    it('reports a display offline when its player has not checked in recently', () => {
        const component = make();
        const now_s = Date.now() / 1000;
        expect(component.isOnline({ signage_last_seen: now_s - 60 })).toBe(
            true,
        );
        expect(component.isOnline({ signage_last_seen: now_s - 10 * 60 })).toBe(
            false,
        );
        expect(component.statusLabel({})).toBe(
            'SIGNAGE_MANAGER.DISPLAY_STATUS_NEVER_SEEN',
        );
        expect(
            component.statusLabel({ signage_last_seen: now_s - 10 * 60 }),
        ).toBe('SIGNAGE_MANAGER.DISPLAY_STATUS_OFFLINE');
    });

    // PlaceSystem sets a missing last check-in to now, so displays are built
    // from the raw API data to keep it
    it('shows a display from the API that never checked in as never seen', () => {
        const component = make();
        const display = signageDisplay({ id: 'd1', name: 'A &amp; B' });

        expect(display.name).toBe('A & B');
        expect(component.isOnline(display)).toBe(false);
        expect(component.statusLabel(display)).toBe(
            'SIGNAGE_MANAGER.DISPLAY_STATUS_NEVER_SEEN',
        );
        expect(
            signageDisplay({ signage_last_seen: 1234 }).signage_last_seen,
        ).toBe(1234);
    });

    it('shows the date of a last check-in before today', () => {
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(new Date(2026, 8, 30, 10, 0));
        const component = make();
        const at = (hours: number, day = 30) =>
            new Date(2026, 8, day, hours, 36).getTime() / 1000;

        expect(component.lastSeen({ signage_last_seen: at(21, 29) })).toBe(
            '9/29/26, 9:36\u202fPM',
        );
        expect(component.lastSeen({ signage_last_seen: at(7) })).toBe(
            '7:36\u202fAM',
        );
    });

    it('requests the next page when the sentinel triggers a load', () => {
        const component = make();
        component.loadMore();
        expect(load_more).toHaveBeenCalledTimes(1);
    });
});
