import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { Space } from '@placeos/common';
import { EventFormService } from '@placeos/events';

import { FeaturesFilterService } from '../app/rooms/features-filter.service';

describe('FeaturesFilterService', () => {
    let spectator: SpectatorService<FeaturesFilterService>;
    const spaces = signal([
        new Space({ id: 'one', features: ['Projector', 'Whiteboard'] }),
        new Space({ id: 'two', features: ['Projector'] }),
        new Space({ id: 'three', features: ['Whiteboard'] }),
    ]);

    const createService = createServiceFactory({
        service: FeaturesFilterService,
        providers: [
            {
                provide: EventFormService,
                useValue: {
                    available_spaces: spaces,
                    favorite_spaces: ['two'],
                },
            },
        ],
    });

    beforeEach(() => {
        spectator = createService();
        spectator.service.clearFilter();
    });

    it('applies every selected room feature', () => {
        const features = spectator.service.features();
        features.find(({ id }) => id === 'Projector').value = true;
        features.find(({ id }) => id === 'Whiteboard').value = true;

        spectator.service.getSelectedFeatures();
        spectator.service.applyFilter();

        expect(
            spectator.service.filtered_spaces().map(({ id }) => id),
        ).toEqual(['one']);
    });

    it('shows only favourite rooms when requested', () => {
        spectator.service.show_favourites.set(true);
        spectator.service.applyFilter();

        expect(
            spectator.service.filtered_spaces().map(({ id }) => id),
        ).toEqual(['two']);
    });

    it('restores the full available list when filters are cleared', () => {
        spectator.service.show_favourites.set(true);
        spectator.service.applyFilter();
        spectator.service.clearFilter();

        expect(spectator.service.filtered_spaces()).toEqual(spaces());
    });
});
