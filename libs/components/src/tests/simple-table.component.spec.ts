import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
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

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

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

    it('should allow selecting rows and selecting all rows', () => {
        spectator.setInput({ columns: COLUMNS, data: DATA, selectable: true });
        spectator.component.select(1, true);
        expect(spectator.component.selected()).toEqual([1]);
        spectator.component.select(2, true);
        expect(spectator.component.selected()).toEqual([1, 2]);
        spectator.component.select(1, false);
        expect(spectator.component.selected()).toEqual([2]);
        spectator.component.selectAll(true);
        expect(spectator.component.selected()).toEqual([0, 1, 2]);
        spectator.component.selectAll(false);
        expect(spectator.component.selected()).toEqual([]);
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
        const spy = jest.spyOn(spectator.component.rowClicked, 'emit');
        spectator.setInput({ columns: COLUMNS, data: DATA });
        spectator.component.active_row.set(1);
        spectator.click('[role="table"]');
        expect(spy).toHaveBeenCalledWith(1);
    });
});
