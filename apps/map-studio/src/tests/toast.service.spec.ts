import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ToastService } from '../app/editor/toast.service';

describe('ToastService', () => {
    let toasts: ToastService;

    beforeEach(() => {
        vi.useFakeTimers();
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        toasts = TestBed.inject(ToastService);
    });

    afterEach(() => vi.useRealTimers());

    it('restarts the timer of a repeated message instead of stacking it', () => {
        toasts.show('Saved', 'success');
        vi.advanceTimersByTime(2_000);
        toasts.show('Saved', 'success');
        expect(toasts.toasts()).toHaveLength(1);

        vi.advanceTimersByTime(2_000);
        expect(toasts.toasts()).toHaveLength(1);
        vi.advanceTimersByTime(1_000);
        expect(toasts.toasts()).toHaveLength(0);
    });

    it('keeps an error on screen longer than other toasts', () => {
        toasts.show('Saved', 'success');
        toasts.show('Saved', 'error');
        expect(toasts.toasts()).toHaveLength(2);

        vi.advanceTimersByTime(3_000);
        expect(toasts.toasts().map((toast) => toast.type)).toEqual(['error']);
        vi.advanceTimersByTime(5_000);
        expect(toasts.toasts()).toHaveLength(0);
    });

    it('removes a dismissed toast at once', () => {
        toasts.show('Saved');
        toasts.show('Moved');
        const [saved] = toasts.toasts();

        toasts.dismiss(saved.id);
        expect(toasts.toasts().map((toast) => toast.message)).toEqual([
            'Moved',
        ]);
    });
});
