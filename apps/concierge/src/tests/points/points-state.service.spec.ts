import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { PointsStateService } from '../../app/points/points-state.service';

describe('PointsStateService', () => {
    let spectator: SpectatorService<PointsStateService>;
    const createService = createServiceFactory({
        service: PointsStateService,
        providers: [
            {
                provide: MatDialog,
                useValue: {
                    open: jest.fn(),
                },
            },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it.todo('should list assets');
    it.todo('should allow creating new assets');
    it.todo('should allow removing existing assets');
});
