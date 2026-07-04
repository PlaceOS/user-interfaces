import { signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { SignageComponent } from '../../app/signage/signage.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

describe('SignageComponent', () => {
    let spectator: Spectator<SignageComponent>;
    let state: any;
    let router: any;

    const createComponent = createComponentFactory({
        component: SignageComponent,
        detectChanges: false,
        providers: [
            MockProvider(SignageStateService, {
                loading: signal(false) as any,
                editPlaylist: jest.fn(async () => ({ id: 'pl-1' }) as any),
                editDisplay: jest.fn(async () => ({ id: 'disp-1' }) as any),
                previewFileFromInput: jest.fn(),
            }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of({ get: () => null }) as any,
            }),
        ],
    });

    function build(url: string) {
        router = {
            url,
            events: of({}),
            navigate: jest.fn(),
        };
        spectator = createComponent({
            providers: [MockProvider(Router, router)],
        });
        state = spectator.inject(SignageStateService) as any;
    }

    it('should resolve the active link from the current url', () => {
        build('/signage/displays');

        expect(spectator.component.active_link()).toBe('Displays');
    });

    it('should default to the first link when the url matches nothing', () => {
        build('/other');

        expect(spectator.component.active_link()).toBe('Media');
    });

    it('should create a playlist and navigate to media for the Media tab', async () => {
        build('/signage/media');

        await spectator.component.newItem('Media');

        expect(state.editPlaylist).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith(['/signage/media'], {
            queryParams: { playlist: 'pl-1' },
        });
    });

    it('should create a display and navigate to displays for the Displays tab', async () => {
        build('/signage/displays');

        await spectator.component.newItem('Displays');

        expect(state.editDisplay).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith(['/signage/displays'], {
            queryParams: { display: 'disp-1' },
        });
    });

    it('should not navigate when display creation is cancelled', async () => {
        build('/signage/displays');
        state.editDisplay.mockResolvedValueOnce(null);

        await spectator.component.newItem('Displays');

        expect(router.navigate).not.toHaveBeenCalled();
    });
});
