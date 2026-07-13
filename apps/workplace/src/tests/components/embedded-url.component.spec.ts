import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { settingSignal } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { SafePipe } from '@placeos/components';

import { EmbeddedUrlComponent } from '../../app/components/embedded-url.component';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';

describe('EmbeddedUrlComponent', () => {
    let spectator: SpectatorRouting<EmbeddedUrlComponent>;
    const createComponent = createRoutingFactory({
        component: EmbeddedUrlComponent,
        imports: [SafePipe],
        declarations: [
            mockComponent(TopbarComponent),
            mockComponent(FooterMenuComponent),
        ],
        params: { id: 'abc' },
        detectChanges: false,
    });

    const setEmbeds = (items: any[]) =>
        settingSignal('menu_embeds', []).set(items);

    beforeEach(() => setEmbeds([]));

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('resolves the embed item matching the route id', () => {
        setEmbeds([
            { id: 'other', name: 'Other', url: 'https://other.example' },
            { id: 'abc', name: 'My Portal', url: 'https://portal.example' },
        ]);
        spectator = createComponent();
        expect(spectator.component.item()?.name).toBe('My Portal');
    });

    it('renders the iframe for the matching embed item', () => {
        setEmbeds([
            { id: 'abc', name: 'My Portal', url: 'https://portal.example' },
        ]);
        spectator = createComponent();
        spectator.detectChanges();
        const iframe = spectator.query('iframe');
        expect(iframe).toExist();
        expect(iframe.getAttribute('title')).toBe('My Portal');
        expect(spectator.query('h1')).not.toExist();
    });

    it('shows the unavailable fallback when no embed matches the route id', () => {
        setEmbeds([
            { id: 'zzz', name: 'Elsewhere', url: 'https://elsewhere.example' },
        ]);
        spectator = createComponent();
        spectator.detectChanges();
        expect(spectator.component.item()).toBeUndefined();
        expect(spectator.query('iframe')).not.toExist();
        expect(spectator.query('h1')).toContainText(
            'Embedded page unavailable',
        );
    });
});
