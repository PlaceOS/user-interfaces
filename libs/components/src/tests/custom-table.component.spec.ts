import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { CdkTableModule } from '@angular/cdk/table';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '../lib/icon.component';
import { CustomTableComponent } from '../lib/custom-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { fakeAsync } from '@angular/core/testing';

describe('CustomTableComponent', () => {
    let spectator: Spectator<CustomTableComponent>;
    const createComponent = createComponentFactory({
        component: CustomTableComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [CdkTableModule, MatPaginatorModule, MatSortModule],
    });
    const columns = ['name', 'title', 'status'];

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render field headers', () => {
        expect('[cdk-header-cell]').not.toExist();
        spectator.setInput({ columns });
        spectator.detectChanges();
        expect('[cdk-header-cell]').toHaveLength(columns.length);
        for (const col of columns) {
            expect('[cdk-header-cell]').toContainText(col);
        }
    });

    it('should show empty state', () => {
        spectator.setInput({ columns });
        spectator.detectChanges();
        expect('p').toContainText('No data to display');
        spectator.setInput({ empty: 'No rows to show' });
        spectator.detectChanges();
        expect('p').toContainText('No rows to show');
        spectator.setInput({ dataSource: [{ name: 'Jim', title: 'Mr', status: 'Lost' }]});
        spectator.detectChanges();
        expect('p').not.toExist();
    });

    it('should show table rows', () => {
        spectator.setInput({ columns });
        spectator.detectChanges();
        expect('cdk-row').not.toExist();
        spectator.setInput({ dataSource: [{ name: 'Jim', title: 'Mr', status: 'Lost' }]});
        spectator.detectChanges();
        expect('cdk-row').toHaveLength(1);
        expect('cdk-row').toContainText(['Jim', 'Mr', 'Lost']);
    });

    it('should allow for sorting', () => {

    });

    it('should allow filtering', () => {
        spectator.setInput({
            columns,
            dataSource: [
                { name: 'Jim', title: 'Mr', status: 'Lost' },
                { name: 'Jill', title: 'Ms', status: 'Working' },
                { name: 'John', title: 'Mr', status: 'At Home' }
            ]
        });
        spectator.detectChanges();
        expect('cdk-row').toHaveLength(3);
        spectator.setInput({ filter: 'Mr' });
        spectator.detectChanges();
        expect('cdk-row').toHaveLength(2);
        spectator.setInput({ filter: 'Jill' });
        spectator.detectChanges();
        expect('cdk-row').toHaveLength(1);
        expect('cdk-row').toContainText(['Jill', 'Ms', 'Working']);
        spectator.setInput({ filter: 'At Home' });
        spectator.detectChanges();
        expect('cdk-row').toHaveLength(1);
        expect('cdk-row').toContainText(['John', 'Mr', 'At Home']);
    });

    it('should allow for pagination', () => {
        spectator.setInput({ pagination: false });
        spectator.detectChanges();
        expect('[footer][hidden]').toExist();
        spectator.setInput({
            pagination: true,
            columns,
            dataSource: [
                { name: 'Jim', title: 'Mr', status: 'Lost' },
                { name: 'Jill', title: 'Ms', status: 'Working' },
                { name: 'John', title: 'Mr', status: 'At Home' },
                { name: '4th', title: 'Mr', status: 'At Home' },
                { name: '5th', title: 'Mr', status: 'At Home' },
                { name: '6th', title: 'Mr', status: 'At Home' },
                { name: '7th', title: 'Mr', status: 'At Home' },
                { name: '8th', title: 'Mr', status: 'At Home' }
            ]
        });
        spectator.detectChanges();
        expect('[footer][hidden]').not.toExist();
        expect('cdk-row').toHaveLength(7);
        expect('cdk-row').not.toContainText('8th');
        // TODO: Add check for changing pagination page size
        // spectator.setInput({ page_size: 5 });
        // spectator.detectChanges();
        // expect('cdk-row').toHaveLength(5);
    });
});
