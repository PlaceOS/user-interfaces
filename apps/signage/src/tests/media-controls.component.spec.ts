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

    it('should emit PREVIOUS when the previous control is clicked', () => {
        const emit_spy = vi.spyOn(spectator.component.event, 'emit');
        const buttons = spectator.queryAll('button') as HTMLButtonElement[];

        buttons[0].click();

        expect(emit_spy).toHaveBeenCalledWith('PREVIOUS');
    });

    it('should emit NEXT when the next control is clicked', () => {
        const emit_spy = vi.spyOn(spectator.component.event, 'emit');
        const buttons = spectator.queryAll('button') as HTMLButtonElement[];

        buttons[2].click();

        expect(emit_spy).toHaveBeenCalledWith('NEXT');
    });

    it('should emit MUTE when the volume control is clicked', () => {
        const emit_spy = vi.spyOn(spectator.component.event, 'emit');
        const buttons = spectator.queryAll('button') as HTMLButtonElement[];

        buttons[3].click();

        expect(emit_spy).toHaveBeenCalledWith('MUTE');
    });

    it('should emit LOOP when the loop control is clicked', () => {
        const emit_spy = vi.spyOn(spectator.component.event, 'emit');
        const buttons = spectator.queryAll('button') as HTMLButtonElement[];

        buttons[4].click();

        expect(emit_spy).toHaveBeenCalledWith('LOOP');
    });

    it('should emit SHUFFLE when the shuffle control is clicked', () => {
        const emit_spy = vi.spyOn(spectator.component.event, 'emit');
        const buttons = spectator.queryAll('button') as HTMLButtonElement[];

        buttons[5].click();

        expect(emit_spy).toHaveBeenCalledWith('SHUFFLE');
    });

    it('should emit PAUSE from the play/pause control when a state is set', () => {
        const emit_spy = vi.spyOn(spectator.component.event, 'emit');
        spectator.component.state.set('PLAYING');
        spectator.detectChanges();
        const buttons = spectator.queryAll('button') as HTMLButtonElement[];

        buttons[1].click();

        expect(emit_spy).toHaveBeenCalledWith('PAUSE');
    });

    it('should show the green animating overlay while animating', () => {
        expect(spectator.query('.bg-success')).toBeFalsy();

        spectator.component.animating.set(true);
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
        vi.spyOn(window, 'requestAnimationFrame').mockReturnValue(0 as any);
        spectator = create_component();
    });

    afterEach(() => vi.restoreAllMocks());

    const icon_text = (button_index: number) => {
        const buttons = spectator.queryAll('button') as HTMLButtonElement[];
        return buttons[button_index].querySelector('icon')?.textContent?.trim();
    };

    it('should show the pause icon while playing', () => {
        spectator.component.state.set('PLAYING');
        spectator.detectChanges();

        expect(icon_text(1)).toBe('pause');
    });

    it('should show the play icon while paused', () => {
        spectator.component.state.set('PAUSED');
        spectator.detectChanges();

        expect(icon_text(1)).toBe('play_arrow');
    });

    it('should toggle the volume icon when muted', () => {
        spectator.component.muted.set(false);
        spectator.detectChanges();
        expect(icon_text(3)).toBe('volume_up');

        spectator.component.muted.set(true);
        spectator.detectChanges();
        expect(icon_text(3)).toBe('volume_off');
    });

    it('should show the repeat_one icon when looping a single item', () => {
        spectator.component.loop.set('ONE');
        spectator.detectChanges();

        expect(icon_text(4)).toBe('repeat_one');
    });

    it('should dim the loop icon when looping is off', () => {
        spectator.component.loop.set('NONE');
        spectator.detectChanges();
        const loop_icon = (
            spectator.queryAll('button')[4] as HTMLButtonElement
        ).querySelector('icon');
        expect(loop_icon?.classList).toContain('opacity-30');

        spectator.component.loop.set('ALL');
        spectator.detectChanges();
        expect(loop_icon?.classList).not.toContain('opacity-30');
    });

    it('should dim the shuffle icon when shuffle is off', () => {
        spectator.component.shuffle.set(false);
        spectator.detectChanges();
        const shuffle_icon = (
            spectator.queryAll('button')[5] as HTMLButtonElement
        ).querySelector('icon');
        expect(shuffle_icon?.classList).toContain('opacity-30');

        spectator.component.shuffle.set(true);
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
        vi.spyOn(window, 'requestAnimationFrame').mockReturnValue(42 as any);
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
            } as any,
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
            } as any,
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
            } as any,
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
            } as any,
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
            } as any,
        });
        spectator.detectChanges();
        spectator.component['_updateProgress']();

        expect(bar_scale()).toBe('scaleX(0)');
    });

    it('should expose the progress input as aria-valuenow', () => {
        spectator = create_component({ props: { progress: 30 } as any });
        spectator.detectChanges();

        expect(
            spectator
                .query('[role="progressbar"]')
                ?.getAttribute('aria-valuenow'),
        ).toBe('30');
    });

    it('should cancel the pending animation frame on destroy', () => {
        const cancel_spy = vi.spyOn(window, 'cancelAnimationFrame');
        spectator = create_component({ props: { progress: 10 } as any });
        spectator.detectChanges();
        spectator.component['_updateProgress']();

        spectator.fixture.destroy();

        expect(cancel_spy).toHaveBeenCalledWith(42);
    });
});
