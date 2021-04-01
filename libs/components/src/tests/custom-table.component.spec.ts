import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { CdkTableModule } from '@angular/cdk/table';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '../lib/icon.component';
import { CustomTableComponent } from '../lib/custom-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';

describe('CustomTableComponent', () => {
    let spectator: Spectator<CustomTableComponent>;
    const createComponent = createComponentFactory({
        component: CustomTableComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [CdkTableModule, MatPaginatorModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
