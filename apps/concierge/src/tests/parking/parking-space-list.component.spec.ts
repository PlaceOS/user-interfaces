import { Clipboard } from '@angular/cdk/clipboard';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SimpleTableComponent } from '@placeos/components';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ParkingSpaceListComponent } from '../../app/parking/parking-space-list.component';
import { ParkingStateService } from '../../app/parking/parking-state.service';

describe('ParkingSpaceListComponent', () => {
    let spectator: Spectator<ParkingSpaceListComponent>;

    const createComponent = createComponentFactory({
        component: ParkingSpaceListComponent,
        providers: [
            MockProvider(Clipboard, { copy: jest.fn(() => true) }),
            MockProvider(ParkingStateService, {
                spaces: of([
                    {
                        id: 'space-1',
                        identifier: 'Bay 1',
                        features: ['EV Charger', 'Covered'],
                    },
                ]),
                options: of({
                    date: Date.now(),
                    search: '',
                    zones: [],
                    period: 'day',
                    request_filter: 'all',
                }),
                loading: of([]),
                bookings: of([]),
                editSpace: jest.fn(),
                removeSpace: jest.fn(),
            } as any),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should include a features column', () => {
        const table = spectator.query(SimpleTableComponent);

        expect(table?.active_columns().map((column) => column.key)).toContain(
            'features',
        );
    });

    it('should show parking space features like desk features', () => {
        const feature = spectator.query('span.bg-info');

        expect(feature).toHaveText('EV Charger');
        expect(spectator.queryAll('span.bg-info')).toHaveLength(2);
    });
});
