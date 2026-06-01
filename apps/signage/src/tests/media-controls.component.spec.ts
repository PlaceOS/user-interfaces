import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { MediaControlsComponent } from '../app/media-controls.component';

describe('MediaControlsComponent', () => {
    let spectator: Spectator<MediaControlsComponent>;

    const create_component = createComponentFactory({
        component: MediaControlsComponent,
        shallow: true,
    });

    beforeEach(() => {
        spectator = create_component();
    });

    it('should show a spinner over the play/pause control while loading', () => {
        spectator.component.loading.set(true);
        spectator.detectChanges();

        expect(spectator.query('mat-spinner')).toBeTruthy();
    });

    it('should hide the spinner when playback is not loading', () => {
        spectator.component.loading.set(false);
        spectator.detectChanges();

        expect(spectator.query('mat-spinner')).toBeFalsy();
    });
});
