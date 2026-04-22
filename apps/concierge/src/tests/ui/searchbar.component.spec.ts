import { signal } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { SearchbarComponent } from '../../app/ui/searchbar.component';

describe('SearchbarComponent', () => {
    let spectator: SpectatorHost<SearchbarComponent>;

    const createHost = createHostFactory({
        component: SearchbarComponent,
    });

    it('should reflect parent model resets', async () => {
        spectator = createHost(
            `
                <searchbar
                    [model]="search()"
                    (modelChange)="search.set($event)"
                ></searchbar>
            `,
            {
                hostProps: {
                    search: signal('Desk 1'),
                },
            },
        );

        await spectator.fixture.whenStable();
        expect((spectator.query('input') as HTMLInputElement).value).toBe(
            'Desk 1',
        );

        spectator.hostComponent.search.set('');
        spectator.detectChanges();
        await spectator.fixture.whenStable();

        expect((spectator.query('input') as HTMLInputElement).value).toBe('');
    });

    it('should keep local input state when no model is bound', async () => {
        spectator = createHost(`<searchbar></searchbar>`);

        spectator.typeInElement('Locker 2', spectator.query('input'));
        await spectator.fixture.whenStable();

        expect((spectator.query('input') as HTMLInputElement).value).toBe(
            'Locker 2',
        );
    });
});
