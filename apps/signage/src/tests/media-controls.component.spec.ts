import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import {
    MediaControlsComponent,
    MediaProgressBarComponent,
} from '../app/media-controls.component';
import * as media_helpers from '../app/media-helpers';

describe('MediaControlsComponent', () => {
    let spectator: Spectator<MediaControlsComponent>;

    const create_component = createComponentFactory({
        component: MediaControlsComponent,
        shallow: true,
    });

    beforeEach(() => {
        spectator = create_component();
    });

    it('should show a spinner over the play/pause control only while loading', () => {
        spectator.setInput('loading', true);
        spectator.detectChanges();
        expect(spectator.query('mat-spinner')).not.toBeNull();

        spectator.setInput('loading', false);
        spectator.detectChanges();
        expect(spectator.query('mat-spinner')).toBeNull();
    });

    // Controls in template order: previous, play/pause, next, mute, loop, shuffle
    it.each([
        ['PLAYING', 1, 'PAUSE'],
        ['PAUSED', 1, 'PLAY'],
        ['PLAYING', 0, 'PREVIOUS'],
        ['PLAYING', 2, 'NEXT'],
        ['PLAYING', 3, 'MUTE'],
        ['PLAYING', 4, 'LOOP'],
        ['PLAYING', 5, 'SHUFFLE'],
    ] as const)(
        'should emit the command of a control while %s (button %i: %s)',
        (state, button, command) => {
            const emit_spy = vi.spyOn(spectator.component.event, 'emit');
            spectator.setInput('state', state);
            spectator.detectChanges();

            (spectator.queryAll('button')[button] as HTMLButtonElement).click();

            expect(emit_spy).toHaveBeenCalledExactlyOnceWith(command);
        },
    );

    it('should show the green animating overlay while animating', () => {
        expect(spectator.query('.bg-success')).toBeFalsy();

        spectator.setInput('animating', true);
        spectator.detectChanges();

        expect(spectator.query('.bg-success')).toBeTruthy();
    });
});

describe('MediaControlsComponent (icons)', () => {
    let spectator: Spectator<MediaControlsComponent>;

    const create_component = createComponentFactory({
        component: MediaControlsComponent,
    });

    beforeEach(() => {
        // Keep the progress bar animation loop from scheduling real frames.
        vi.spyOn(window, 'requestAnimationFrame').mockReturnValue(0);
        spectator = create_component();
    });

    afterEach(() => vi.restoreAllMocks());

    const icon_text = (button_index: number) => {
        const buttons = spectator.queryAll('button') as HTMLButtonElement[];
        return buttons[button_index].querySelector('icon')?.textContent?.trim();
    };

    it('should show the pause icon while playing', () => {
        spectator.setInput('state', 'PLAYING');
        spectator.detectChanges();

        expect(icon_text(1)).toBe('pause');
    });

    it('should show the play icon while paused', () => {
        spectator.setInput('state', 'PAUSED');
        spectator.detectChanges();

        expect(icon_text(1)).toBe('play_arrow');
    });

    it('should toggle the volume icon when muted', () => {
        spectator.setInput('muted', false);
        spectator.detectChanges();
        expect(icon_text(3)).toBe('volume_up');

        spectator.setInput('muted', true);
        spectator.detectChanges();
        expect(icon_text(3)).toBe('volume_off');
    });

    it('should show the repeat_one icon when looping a single item', () => {
        spectator.setInput('loop', 'ONE');
        spectator.detectChanges();

        expect(icon_text(4)).toBe('repeat_one');
    });

    it('should dim the loop icon when looping is off', () => {
        spectator.setInput('loop', 'NONE');
        spectator.detectChanges();
        const loop_icon = (
            spectator.queryAll('button')[4] as HTMLButtonElement
        ).querySelector('icon');
        expect(loop_icon?.classList).toContain('opacity-30');

        spectator.setInput('loop', 'ALL');
        spectator.detectChanges();
        expect(loop_icon?.classList).not.toContain('opacity-30');
    });

    it('should dim the shuffle icon when shuffle is off', () => {
        spectator.setInput('shuffle', false);
        spectator.detectChanges();
        const shuffle_icon = (
            spectator.queryAll('button')[5] as HTMLButtonElement
        ).querySelector('icon');
        expect(shuffle_icon?.classList).toContain('opacity-30');

        spectator.setInput('shuffle', true);
        spectator.detectChanges();
        expect(shuffle_icon?.classList).not.toContain('opacity-30');
    });
});

describe('MediaProgressBarComponent', () => {
    let spectator: Spectator<MediaProgressBarComponent>;

    const create_component = createComponentFactory({
        component: MediaProgressBarComponent,
    });

    const bar_scale = () => {
        const bar = spectator.query('.bg-primary') as HTMLDivElement;
        return bar?.style.transform;
    };

    beforeEach(() => {
        // Return a stable frame id and never invoke the callback so the
        // update loop stays deterministic within each test.
        vi.spyOn(window, 'requestAnimationFrame').mockReturnValue(42);
    });

    afterEach(() => {
        media_helpers.setMockTime(0);
        vi.restoreAllMocks();
    });

    it('should render playback progress from the elapsed play time', () => {
        media_helpers.setMockTime(6000, 0);
        spectator = create_component({
            props: {
                state: 'PLAYING',
                playback_start: 1000,
                playback_duration: 10000,
            },
        });
        spectator.detectChanges();
        spectator.component['_updateProgress']();

        expect(bar_scale()).toBe('scaleX(0.5)');
    });

    it('should fall back to the progress input while paused', () => {
        spectator = create_component({
            props: {
                state: 'PAUSED',
                progress: 40,
                playback_start: 1000,
                playback_duration: 10000,
            },
        });
        spectator.detectChanges();
        spectator.component['_updateProgress']();

        expect(bar_scale()).toBe('scaleX(0.4)');
    });

    it('should fall back to the progress input while waiting', () => {
        media_helpers.setMockTime(9000, 0);
        spectator = create_component({
            props: {
                state: 'PLAYING',
                progress: 25,
                playback_start: 0,
                playback_duration: 10000,
                waiting: true,
            },
        });
        spectator.detectChanges();
        spectator.component['_updateProgress']();

        expect(bar_scale()).toBe('scaleX(0.25)');
    });

    it('should clamp computed progress above 100 to full', () => {
        media_helpers.setMockTime(50000, 0);
        spectator = create_component({
            props: {
                state: 'PLAYING',
                playback_start: 1000,
                playback_duration: 10000,
            },
        });
        spectator.detectChanges();
        spectator.component['_updateProgress']();

        expect(bar_scale()).toBe('scaleX(1)');
    });

    it('should clamp negative progress to empty', () => {
        media_helpers.setMockTime(500, 0);
        spectator = create_component({
            props: {
                state: 'PLAYING',
                playback_start: 5000,
                playback_duration: 10000,
            },
        });
        spectator.detectChanges();
        spectator.component['_updateProgress']();

        expect(bar_scale()).toBe('scaleX(0)');
    });

    it('should expose the progress input as aria-valuenow', () => {
        spectator = create_component({ props: { progress: 30 } });
        spectator.detectChanges();

        expect(
            spectator
                .query('[role="progressbar"]')
                ?.getAttribute('aria-valuenow'),
        ).toBe('30');
    });

    it('should not request animation frames while paused', () => {
        spectator = create_component({
            props: {
                state: 'PAUSED',
                progress: 40,
                playback_start: 1000,
                playback_duration: 10000,
            },
        });
        spectator.detectChanges();

        expect(spectator.component['_animation_frame']).toBe(0);
        expect(bar_scale()).toBe('scaleX(0.4)');
    });

    it('should cancel the pending animation frame on destroy', () => {
        const cancel_spy = vi.spyOn(window, 'cancelAnimationFrame');
        spectator = create_component({
            props: {
                state: 'PLAYING',
                playback_start: 1000,
                playback_duration: 10000,
            },
        });
        spectator.detectChanges();
        cancel_spy.mockClear();

        spectator.fixture.destroy();

        expect(cancel_spy).toHaveBeenCalledWith(42);
    });
});
