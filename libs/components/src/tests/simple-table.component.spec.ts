import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { IconComponent } from '../lib/icon.component';
import { SimpleTableComponent } from '../lib/simple-table.component';

describe('SimpleTableComponent', () => {
    let spectator: Spectator<SimpleTableComponent>;
    const createComponent = createComponentFactory({
        component: SimpleTableComponent,
        declarations: [MockComponent(IconComponent)],
    });

    const COLUMNS = [
        { key: 'name', name: 'Name' },
        { key: 'age', name: 'Age' },
    ];
    const DATA = [
        { id: '1', name: 'Alice', age: 30 },
        { id: '2', name: 'Bob', age: 25 },
        { id: '3', name: 'Carol', age: 35 },
    ];

    beforeEach(() => (spectator = createComponent()));

    it('should render headers and rows from the given data', () => {
        spectator.setInput({ columns: COLUMNS, data: DATA });
        expect('#column-name').toContainText('Name');
        expect('#column-age').toContainText('Age');
        const table = spectator.query('[role="table"]');
        expect(table).toContainText('Alice');
        expect(table).toContainText('Bob');
        expect(table).toContainText('30');
    });

    it('should hide columns flagged with show false', () => {
        spectator.setInput({
            columns: [COLUMNS[0], { ...COLUMNS[1], show: false }],
            data: DATA,
        });
        expect('#column-name').toExist();
        expect('#column-age').not.toExist();
        expect(spectator.query('[role="table"]')).not.toContainText('30');
    });

    it('should show the empty message when there is no data', () => {
        spectator.setInput({
            columns: COLUMNS,
            data: [],
            empty_message: 'Nothing here',
        });
        expect('[role="table"]').toContainText('Nothing here');
    });

    it('should filter rows using the filter string', () => {
        spectator.setInput({ columns: COLUMNS, data: DATA, filter: 'ali' });
        const table = spectator.query('[role="table"]');
        expect(table).toContainText('Alice');
        expect(table).not.toContainText('Bob');
        expect(spectator.component.data_view()).toHaveLength(1);
    });

    it('should cycle sorting between ascending, descending and none', () => {
        spectator.setInput({ columns: COLUMNS, data: DATA, sortable: true });
        spectator.click('#column-age');
        expect(spectator.component.sort()).toEqual({
            key: 'age',
            reverse: false,
        });
        expect(spectator.component.data_view().map((_) => _.name)).toEqual([
            'Bob',
            'Alice',
            'Carol',
        ]);
        spectator.click('#column-age');
        expect(spectator.component.sort()).toEqual({
            key: 'age',
            reverse: true,
        });
        expect(spectator.component.data_view().map((_) => _.name)).toEqual([
            'Carol',
            'Alice',
            'Bob',
        ]);
        spectator.click('#column-age');
        expect(spectator.component.sort()).toBeNull();
    });

    it('should announce the sort state and skip unsortable headers', () => {
        spectator.setInput({
            columns: [COLUMNS[0], { ...COLUMNS[1], sortable: false }],
            data: DATA,
            sortable: true,
        });
        expect('#column-name').toHaveAttribute('aria-sort', 'none');
        expect('#column-age').not.toHaveAttribute('aria-sort');
        expect('#column-age').toHaveAttribute('tabindex', '-1');
        spectator.click('#column-name');
        expect('#column-name').toHaveAttribute('aria-sort', 'ascending');
    });

    it('should show a loading state instead of the empty message', () => {
        spectator.setInput({
            columns: COLUMNS,
            data: [],
            empty_message: 'Nothing here',
            loading: true,
        });
        expect('[role="table"]').not.toContainText('Nothing here');
        expect('[aria-busy="true"]').toExist();
    });

    it('should paginate the data when a page size is set', () => {
        spectator.setInput({ columns: COLUMNS, data: DATA, page_size: 2 });
        expect(spectator.component.paginated_data()).toHaveLength(2);
        expect(spectator.component.total_pages()).toBe(2);
        expect(spectator.component.total_count()).toBe(3);
        const table = spectator.query('[role="table"]');
        expect(table).toContainText('Alice');
        expect(table).not.toContainText('Carol');
        // Move to the next page
        spectator.component.setPage(1);
        spectator.detectChanges();
        expect(spectator.component.paginated_data()).toHaveLength(1);
        expect(spectator.query('[role="table"]')).toContainText('Carol');
    });

    it('should keep the page on reload and reset it when the rows change', () => {
        spectator.setInput({ columns: COLUMNS, data: DATA, page_size: 2 });
        spectator.component.setPage(1);
        spectator.setInput({ data: DATA.map((_) => ({ ..._, age: 40 })) });
        spectator.detectChanges();
        expect(spectator.component.page()).toBe(1);

        spectator.setInput({ data: DATA.slice(1) });
        spectator.detectChanges();
        expect(spectator.component.page()).toBe(0);
    });

    it('should show an empty page range and disable paging with no rows', () => {
        spectator.setInput({ columns: COLUMNS, data: [], page_size: 2 });
        const footer = spectator.element.lastElementChild;
        expect(footer.textContent.replace(/\s+/g, ' ')).toContain('0 – 0 of 0');
        const buttons = [...footer.querySelectorAll('button')];
        expect(buttons).toHaveLength(4);
        expect(buttons.every((_) => _.disabled)).toBe(true);
    });

    it('should keep the row layout wide for horizontal scrolling', () => {
        spectator.setInput({ columns: COLUMNS, data: DATA, page_size: 2 });
        spectator.setInput({ min_width: '72rem' });
        const table = spectator.query<HTMLElement>('[role="table"]');
        expect(table.style.minWidth).toBe('72rem');
        expect(spectator.element.style.minWidth).toBe('72rem');
    });

    it('should select rows by key and select all rows', () => {
        spectator.setInput({ columns: COLUMNS, data: DATA, selectable: true });
        spectator.component.select('2', true);
        spectator.component.select('3', true);
        expect(spectator.component.selected()).toEqual(['2', '3']);
        spectator.component.select('2', false);
        expect(spectator.component.selected()).toEqual(['3']);
        spectator.component.selectAll(true);
        expect(spectator.component.selected()).toEqual(['3', '1', '2']);
        expect(spectator.component.all_selected()).toBe(true);
        spectator.component.selectAll(false);
        expect(spectator.component.selected()).toEqual([]);
    });

    it('should skip rows that cannot be selected when selecting all', () => {
        spectator.setInput({
            columns: COLUMNS,
            data: DATA,
            selectable: true,
            can_select: (row) => row.age < 35,
        });
        spectator.component.selectAll(true);
        expect(spectator.component.selected()).toEqual(['1', '2']);
        expect(spectator.component.all_selected()).toBe(true);
    });

    it('should keep the selection when the data refreshes', () => {
        spectator.setInput({ columns: COLUMNS, data: DATA, selectable: true });
        spectator.component.selectAll(true);
        spectator.setInput({ data: DATA.map((_) => ({ ..._ })) });
        expect(spectator.component.selected()).toEqual(['1', '2', '3']);
        spectator.setInput({ data: DATA.slice(1) });
        expect(spectator.component.selected()).toEqual(['2', '3']);
    });

    it('should show a load error with a retry action', () => {
        const spy = vi.spyOn(spectator.component.retry, 'emit');
        spectator.setInput({
            columns: COLUMNS,
            data: [],
            error: true,
            empty_message: 'Nothing here',
        });
        expect('[role="alert"]').toExist();
        expect('[role="table"]').not.toContainText('Nothing here');
        spectator.click('[role="alert"] button');
        expect(spy).toHaveBeenCalled();
    });

    it('should handle observable data sources', () => {
        const data = new BehaviorSubject(DATA.slice(0, 1));
        spectator.setInput({ columns: COLUMNS, data });
        expect(spectator.query('[role="table"]')).toContainText('Alice');
        expect(spectator.query('[role="table"]')).not.toContainText('Bob');
        data.next(DATA);
        spectator.detectChanges();
        expect(spectator.query('[role="table"]')).toContainText('Bob');
    });

    it('should emit the hovered row index on click', () => {
        const spy = vi.spyOn(spectator.component.rowClicked, 'emit');
        spectator.setInput({ columns: COLUMNS, data: DATA });
        spectator.component.active_row.set(1);
        spectator.click('[role="table"]');
        expect(spy).toHaveBeenCalledWith(1);
    });

    describe('virtual scrolling', () => {
        const rows = Array.from({ length: 2000 }, (_, index) => ({
            id: `row-${index}`,
            name: `Row ${index}`,
            age: index,
        }));

        function scrollTo(top: number) {
            spectator.element.scrollTop = top;
            spectator.dispatchFakeEvent(spectator.element, 'scroll');
        }

        beforeEach(() => {
            Object.defineProperty(spectator.element, 'clientHeight', {
                value: 640,
            });
            spectator.setInput({
                columns: [{ key: '_index', name: '#' }, ...COLUMNS],
                data: rows,
                virtual_scroll: true,
            });
        });

        afterEach(() => vi.unstubAllGlobals());

        it('should render a bounded window and reach the middle and last rows', () => {
            expect(spectator.queryAll('[table-row]').length).toBeLessThan(40);
            expect(spectator.component.data_view()).toHaveLength(2000);
            scrollTo(64000);
            expect('[data-row-index="1000"]').toContainText('Row 1000');
            expect('[data-row-index="1000"] [role="cell"]').toContainText(
                '1001',
            );
            expect('[data-row-index="0"]').not.toExist();
            expect(spectator.queryAll('[table-row]').length).toBeLessThan(40);
            scrollTo(128000 - 640);
            expect('[data-row-index="1999"]').toContainText('Row 1999');
        });

        it('should select across the full data and keep global row click indices', () => {
            const clicked = vi.spyOn(spectator.component.rowClicked, 'emit');
            spectator.setInput({ selectable: true });
            spectator.component.selectAll(true);
            expect(spectator.component.selected()).toHaveLength(2000);
            scrollTo(64000);
            const cell = spectator.query(
                '[data-row-index="1000"] [role="cell"]',
            );
            cell.dispatchEvent(new MouseEvent('mouseenter'));
            spectator.click(cell);
            expect(clicked).toHaveBeenCalledWith(1000);
        });

        it('should keep the scroll on refresh and reset it for search and sorting', () => {
            scrollTo(64000);
            spectator.setInput({ data: rows.map((row) => ({ ...row })) });
            expect(spectator.element.scrollTop).toBe(64000);
            spectator.setInput({ filter: 'Row 1999' });
            expect(spectator.element.scrollTop).toBe(0);
            expect(spectator.queryAll('[table-row]')).toHaveLength(1);
            expect('[table-row]').toContainText('Row 1999');
            spectator.setInput({ filter: '' });
            scrollTo(64000);
            spectator.component.setSort('age');
            spectator.detectChanges();
            expect(spectator.element.scrollTop).toBe(0);
            scrollTo(64000);
            spectator.component.setSort('age');
            spectator.detectChanges();
            expect(spectator.element.scrollTop).toBe(0);
            expect('[data-row-index="0"]').toContainText('Row 1999');
        });

        it.each([0, 990])(
            'should keep the visible row when row %i is removed above it',
            (removed_index) => {
                scrollTo(64017);
                spectator.setInput({
                    data: rows.filter((_, index) => index !== removed_index),
                });
                expect(spectator.element.scrollTop).toBe(63953);
                expect('[data-row-index="999"]').toContainText('Row 1000');
                expect(spectator.queryAll('[table-row]').length).toBeLessThan(
                    40,
                );
            },
        );

        it('should keep the visible row when a poll inserts a new row above it', () => {
            scrollTo(64017);
            spectator.setInput({
                data: [{ id: 'new', name: 'New visitor', age: -1 }, ...rows],
            });
            expect(spectator.element.scrollTop).toBe(64081);
            expect('[data-row-index="1001"]').toContainText('Row 1000');
        });

        it('should return to the top when the visible anchor row is removed', () => {
            scrollTo(64017);
            spectator.setInput({
                data: rows.filter((row) => row.id !== 'row-1000'),
            });
            expect(spectator.element.scrollTop).toBe(0);
            expect('[data-row-index="0"]').toContainText('Row 0');
        });

        it('should measure variable row heights, preserve the visible anchor, and disconnect observers', () => {
            let resize: () => void = () => undefined;
            const disconnect = vi.fn();
            vi.stubGlobal(
                'ResizeObserver',
                class {
                    constructor(callback: () => void) {
                        resize = callback;
                    }
                    observe() {}
                    disconnect = disconnect;
                },
            );
            Object.defineProperty(spectator.element, 'clientWidth', {
                value: 1200,
            });
            spectator.setInput({ data: [...rows] });
            // Start measurement through the render callback, as in the browser.
            spectator.setInput({ show_header: false });
            spectator.detectChanges();
            const first = spectator.query<HTMLElement>('[data-row-index="0"]');
            vi.spyOn(first, 'getBoundingClientRect').mockReturnValue({
                height: 160,
            } as DOMRect);
            resize();
            spectator.detectChanges();
            expect(spectator.component.row_offsets()[1]).toBe(160);
            scrollTo(640);
            const before = spectator.element.scrollTop;
            vi.spyOn(first, 'getBoundingClientRect').mockReturnValue({
                height: 240,
            } as DOMRect);
            resize();
            spectator.detectChanges();
            expect(spectator.element.scrollTop).toBe(before + 80);
            expect(spectator.component.row_offsets()[1]).toBe(240);
            spectator.setInput({ data: rows.slice(1) });
            expect(spectator.element.scrollTop).toBe(before + 80 - 240);
            spectator.fixture.destroy();
            expect(disconnect).toHaveBeenCalled();
            vi.unstubAllGlobals();
        });

        it('should stay at the end when the last rendered rows are taller than estimated', () => {
            let resize = () => undefined;
            vi.stubGlobal(
                'ResizeObserver',
                class {
                    constructor(callback: () => undefined) {
                        resize = callback;
                    }
                    observe() {}
                    disconnect() {}
                },
            );
            let scroll_height = 128000;
            let scroll_top = 0;
            Object.defineProperties(spectator.element, {
                clientWidth: { value: 1200 },
                scrollHeight: { get: () => scroll_height },
                scrollTop: {
                    get: () => scroll_top,
                    set: (value: number) => {
                        scroll_top = Math.min(value, scroll_height - 640);
                    },
                },
            });
            spectator.setInput({ show_header: false });
            scrollTo(scroll_height - 640);
            const last = spectator.query<HTMLElement>(
                '[data-row-index="1999"]',
            );
            vi.spyOn(last, 'getBoundingClientRect').mockReturnValue({
                height: 192,
            } as DOMRect);
            // Layout grows before ResizeObserver measures the new row.
            scroll_height += 128;
            resize();
            spectator.detectChanges();
            expect(spectator.element.scrollTop).toBe(scroll_height - 640);
            expect('[data-row-index="1999"]').toContainText('Row 1999');
        });
    });
});
