import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IconComponent, SafePipe } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { FullscreenEmbedComponent } from '../../app/components/fullscreen-embed.component';

describe('FullscreenEmbedComponent', () => {
    let spectator: Spectator<FullscreenEmbedComponent>;

    const createComponent = createComponentFactory({
        component: FullscreenEmbedComponent,
        imports: [SafePipe],
        declarations: [MockComponent(IconComponent)],
        providers: [{ provide: MAT_DIALOG_DATA, useValue: '' }],
    });

    const create = (url: string) =>
        (spectator = createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: url }],
        }));

    it('exposes the injected url as the embed url', () => {
        create('https://embed.example/portal');
        expect(spectator.component.embed_url()).toBe(
            'https://embed.example/portal',
        );
    });

    it('renders an iframe pointing at the embedded url', () => {
        create('https://embed.example/portal');
        spectator.detectChanges();
        const iframe = spectator.query('iframe');
        expect(iframe).toExist();
        expect(iframe.getAttribute('src')).toBe(
            'https://embed.example/portal',
        );
    });

    it('renders a close button bound to the dialog', () => {
        create('https://embed.example/portal');
        spectator.detectChanges();
        expect(spectator.query('button[mat-dialog-close]')).toExist();
    });
});
