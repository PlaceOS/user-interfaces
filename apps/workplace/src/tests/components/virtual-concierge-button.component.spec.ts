import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MatDialog } from '@angular/material/dialog';
import { settingSignal } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { VirtualConciergeButtonComponent } from '../../app/components/virtual-concierge-button.component';
import { FullscreenEmbedComponent } from '../../app/components/fullscreen-embed.component';
import { SidebarEmbedComponent } from '../../app/components/sidebar-embed.component';

describe('VirtualConciergeButtonComponent', () => {
    let spectator: Spectator<VirtualConciergeButtonComponent>;
    let open: jest.Mock;

    const createComponent = createComponentFactory({
        component: VirtualConciergeButtonComponent,
        providers: [MockProvider(MatDialog)],
    });

    const setUrl = (value: string) =>
        settingSignal('virtual_concierge.url', '').set(value);
    const setLegacyUrl = (value: string) =>
        settingSignal('virtual_concierge_url', '').set(value);
    const setDisplay = (value: 'fullscreen' | 'sidebar') =>
        settingSignal('virtual_concierge.display', 'fullscreen').set(value);
    const setSide = (value: 'left' | 'right') =>
        settingSignal('virtual_concierge.side', 'left').set(value);

    beforeEach(() => {
        setUrl('');
        setLegacyUrl('');
        setDisplay('fullscreen');
        setSide('left');
        spectator = createComponent();
        open = jest.fn();
        (spectator.inject(MatDialog) as any).open = open;
    });

    it('hides the button when no virtual concierge url is configured', () => {
        spectator.detectChanges();
        expect(spectator.query('button')).not.toExist();
    });

    it('shows the button when a url is configured', () => {
        setUrl('https://concierge.example');
        spectator.detectChanges();
        expect(spectator.query('button')).toExist();
    });

    it('falls back to the legacy url setting', () => {
        setLegacyUrl('https://legacy.example');
        spectator.detectChanges();
        expect(spectator.component.virtual_concierge_url()).toBe(
            'https://legacy.example',
        );
        expect(spectator.query('button')).toExist();
    });

    it('opens a fullscreen embed dialog by default', () => {
        setUrl('https://concierge.example');
        spectator.detectChanges();
        spectator.click('button');
        expect(open).toHaveBeenCalledWith(FullscreenEmbedComponent, {
            data: 'https://concierge.example',
        });
    });

    it('opens a left-docked sidebar embed dialog when configured for sidebar display', () => {
        setUrl('https://concierge.example');
        setDisplay('sidebar');
        setSide('left');
        spectator.detectChanges();
        spectator.click('button');

        expect(open).toHaveBeenCalledWith(
            SidebarEmbedComponent,
            expect.objectContaining({
                data: { url: 'https://concierge.example', side: 'left' },
                width: '28rem',
                position: { left: '0', top: '0' },
                panelClass: [
                    'sidebar-embed-dialog',
                    'sidebar-embed-dialog-left',
                ],
            }),
        );
    });

    it('anchors the sidebar dialog to the right when docked right', () => {
        setUrl('https://concierge.example');
        setDisplay('sidebar');
        setSide('right');
        spectator.detectChanges();
        spectator.click('button');

        expect(open).toHaveBeenCalledWith(
            SidebarEmbedComponent,
            expect.objectContaining({
                data: { url: 'https://concierge.example', side: 'right' },
                position: { right: '0', top: '0' },
                panelClass: [
                    'sidebar-embed-dialog',
                    'sidebar-embed-dialog-right',
                ],
            }),
        );
    });
});
