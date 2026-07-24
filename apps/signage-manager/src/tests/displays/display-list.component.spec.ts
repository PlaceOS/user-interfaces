import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DisplayListComponent } from '../../app/displays/display-list.component';
import { SignageService } from '../../app/signage.service';

describe('DisplayListComponent', () => {
    const display_search_term = signal('');
    const filtered_displays = signal<any[]>([]);
    const selected_display = signal<any>(null);
    const displays_has_more = signal(false);
    const load_more = vi.fn();
    const service_stub = {
        display_search_term,
        filtered_displays,
        selected_display,
        displays_has_more,
        loadMoreDisplays: load_more,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [{ provide: SignageService, useValue: service_stub }],
        });
        return TestBed.createComponent(DisplayListComponent).componentInstance;
    }

    beforeEach(() => {
        load_more.mockReset();
        display_search_term.set('');
        filtered_displays.set([]);
        selected_display.set(null);
        displays_has_more.set(false);
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

    it('requests the next page when the sentinel triggers a load', () => {
        const component = make();
        component.loadMore();
        expect(load_more).toHaveBeenCalledTimes(1);
    });
});
