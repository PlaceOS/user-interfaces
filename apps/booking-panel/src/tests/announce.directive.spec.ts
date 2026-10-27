import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { LocaleService } from '@placeos/common';

import { AnnounceDirective } from '../app/announce.directive';

@Component({
    selector: 'announce-host',
    template: `<p announce>{{ text() }}</p>`,
    imports: [AnnounceDirective],
})
class AnnounceHostComponent {
    public readonly text = signal('APP.KEY');
}

describe('AnnounceDirective', () => {
    let spectator: Spectator<AnnounceHostComponent>;
    let loaded: Promise<void>;
    const announce = vi.fn();
    const createComponent = createComponentFactory({
        component: AnnounceHostComponent,
        providers: [
            { provide: LiveAnnouncer, useValue: { announce } },
            { provide: LocaleService, useValue: { loaded: () => loaded } },
        ],
    });

    beforeEach(() => announce.mockClear());

    it('should announce the translated text once the translations load', async () => {
        let finishLoading: () => void;
        loaded = new Promise<void>((resolve) => (finishLoading = resolve));
        spectator = createComponent();
        await spectator.fixture.whenStable();
        expect(announce).not.toHaveBeenCalled();

        spectator.component.text.set('Loading...');
        finishLoading();
        await spectator.fixture.whenStable();

        expect(announce).toHaveBeenCalledTimes(1);
        expect(announce).toHaveBeenCalledWith('Loading...', 'polite');
    });

    it('should announce at once when the translations have loaded', async () => {
        loaded = Promise.resolve();
        spectator = createComponent();
        spectator.component.text.set('Reconnecting…');
        await spectator.fixture.whenStable();

        expect(announce).toHaveBeenCalledWith('Reconnecting…', 'polite');
    });
});
