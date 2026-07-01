import { effect, Injector, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueWhere } from '../lib/signal.utilities';

describe('signal utilities', () => {
    describe('firstValueWhere', () => {
        it('can be called from inside a reactive context', async () => {
            const source = signal(false);
            const injector = TestBed.inject(Injector);
            let resolved: Promise<boolean>;

            TestBed.runInInjectionContext(() => {
                effect(() => {
                    resolved = firstValueWhere(source, undefined, injector);
                });
            });

            TestBed.flushEffects();
            source.set(true);
            TestBed.flushEffects();

            await expect(resolved).resolves.toBe(true);
        });
    });
});
