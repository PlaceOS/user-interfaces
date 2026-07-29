import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplaySelectModalComponent } from '../../app/shared/display-select-modal.component';
import { SignageService } from '../../app/signage.service';

describe('DisplaySelectModalComponent', () => {
    const pageOf = (ids: string[], total = ids.length, next: any = null) => ({
        data: ids.map((id) => ({ id, name: id, signage: true })),
        total,
        next: next ? () => Promise.resolve(next) : null,
    });

    const queryDisplays = vi.fn();
    const service = { queryDisplays };

    const flush = () => new Promise((resolve) => setTimeout(resolve));

    beforeEach(async () => {
        vi.clearAllMocks();
        vi.useFakeTimers({ shouldAdvanceTime: true });
        queryDisplays.mockReturnValue(
            Promise.resolve(pageOf(['lobby', 'cafe'])),
        );
        await TestBed.configureTestingModule({
            imports: [DisplaySelectModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: { zone_id: 'zone-1' } },
                { provide: SignageService, useValue: service },
            ],
        })
            .overrideComponent(DisplaySelectModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
    });

    afterEach(() => vi.useRealTimers());

    const create = async () => {
        const fixture = TestBed.createComponent(DisplaySelectModalComponent);
        fixture.detectChanges();
        await flush();
        return fixture.componentInstance;
    };

    it('loads the first page of displays on open', async () => {
        const component = await create();

        expect(queryDisplays).toHaveBeenCalledWith('');
        expect(component.displays().map((_) => _.id)).toEqual([
            'cafe',
            'lobby',
        ]);
        expect(component.has_more()).toBe(false);
    });

    it('sends the search term to the backend and replaces the results', async () => {
        const component = await create();
        queryDisplays.mockReturnValue(Promise.resolve(pageOf(['lobby'], 1)));

        component.search.set('lobby');
        await vi.advanceTimersByTimeAsync(500);
        await flush();

        expect(queryDisplays).toHaveBeenLastCalledWith('lobby');
        expect(component.displays().map((_) => _.id)).toEqual(['lobby']);
    });

    it('pages the results as the list is scrolled', async () => {
        queryDisplays.mockReturnValue(
            Promise.resolve(pageOf(['lobby-1'], 2, pageOf(['lobby-2'], 2))),
        );
        const component = await create();
        expect(component.has_more()).toBe(true);

        component.loadMore();
        await flush();

        expect(component.displays().map((_) => _.id)).toEqual([
            'lobby-1',
            'lobby-2',
        ]);
        expect(component.has_more()).toBe(false);
    });

    it('ignores pages returned after the search moved on', async () => {
        const component = await create();
        let resolve_stale: (value: any) => void = () => {};
        queryDisplays.mockReturnValueOnce(
            new Promise((resolve) => (resolve_stale = resolve)),
        );

        component.search.set('stale');
        await vi.advanceTimersByTimeAsync(500);
        queryDisplays.mockReturnValue(Promise.resolve(pageOf(['fresh'], 1)));
        component.search.set('fresh');
        await vi.advanceTimersByTimeAsync(500);
        await flush();
        resolve_stale(pageOf(['stale'], 1));
        await flush();

        expect(component.displays().map((_) => _.id)).toEqual(['fresh']);
    });

    it('shows nothing when the user may not query displays', async () => {
        queryDisplays.mockReturnValue(null);
        const component = await create();

        expect(component.displays()).toEqual([]);
        expect(component.loading()).toBe(false);
    });
});
