import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IconComponent, SafePipe } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { SidebarEmbedComponent } from '../../app/components/sidebar-embed.component';

describe('SidebarEmbedComponent', () => {
    let spectator: Spectator<SidebarEmbedComponent>;

    const createComponent = createComponentFactory({
        component: SidebarEmbedComponent,
        imports: [SafePipe],
        declarations: [MockComponent(IconComponent)],
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: { url: '', side: 'left' } },
        ],
    });

    const create = (data: { url: string; side: 'left' | 'right' }) =>
        (spectator = createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
        }));

    it('exposes the injected url as the embed url', () => {
        create({ url: 'https://embed.example/panel', side: 'right' });
        expect(spectator.component.embed_url()).toBe(
            'https://embed.example/panel',
        );
    });

    it('places the close button opposite the panel when docked right', () => {
        create({ url: 'https://embed.example/panel', side: 'right' });
        expect(spectator.component.close_button_side()).toBe('left');
        spectator.detectChanges();
        const close = spectator.query('.sidebar-embed__close');
        expect(close).toHaveClass('sidebar-embed__close--left');
        expect(close).not.toHaveClass('sidebar-embed__close--right');
    });

    it('places the close button opposite the panel when docked left', () => {
        create({ url: 'https://embed.example/panel', side: 'left' });
        expect(spectator.component.close_button_side()).toBe('right');
        spectator.detectChanges();
        const close = spectator.query('.sidebar-embed__close');
        expect(close).toHaveClass('sidebar-embed__close--right');
        expect(close).not.toHaveClass('sidebar-embed__close--left');
    });

    it('renders the iframe pointing at the embedded url', () => {
        create({ url: 'https://embed.example/panel', side: 'left' });
        spectator.detectChanges();
        const iframe = spectator.query('iframe');
        expect(iframe).toExist();
        expect(iframe.getAttribute('src')).toBe('https://embed.example/panel');
    });
});
