import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator/vitest';
import { SafePipe } from '../lib/safe.pipe';

describe('SafePipe', () => {
    let spectator: SpectatorPipe<SafePipe>;
    const createPipe = createPipeFactory(SafePipe);

    it('should trust web, mail and data URLs', () => {
        spectator = createPipe(
            `<a [href]="'mailto:' + 'a@b.com' | safe: 'url'"></a>
            <img [src]="'data:image/png;base64,AAAA' | safe: 'resource'" />
            <iframe [src]="'https://example.com/page' | safe: 'resource'"></iframe>`,
        );
        expect(spectator.element.querySelector('a')).toHaveAttribute(
            'href',
            'mailto:a@b.com',
        );
        expect(spectator.element.querySelector('img')).toHaveAttribute(
            'src',
            'data:image/png;base64,AAAA',
        );
        expect(spectator.element.querySelector('iframe')).toHaveAttribute(
            'src',
            'https://example.com/page',
        );
    });

    it('should not trust URLs that run script', () => {
        spectator = createPipe(
            `<a [href]="url | safe: 'url'"></a>
            <iframe [src]="url | safe: 'resource'"></iframe>`,
            { hostProps: { url: ' javascript:alert(1)' } },
        );
        const attribute = (selector: string, name: string) =>
            spectator.element.querySelector(selector)?.getAttribute(name);
        expect(attribute('a', 'href')).toBe('');
        expect(attribute('iframe', 'src')).toBe('');
    });
});
