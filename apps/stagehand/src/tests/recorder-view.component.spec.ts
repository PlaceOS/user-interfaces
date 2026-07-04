import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { RecorderGridViewComponent } from '../app/recorder-view.component';
import { SidebarComponent } from '../app/ui/sidebar.component';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(),
}));

const flush = async () => {
    for (let i = 0; i < 8; i++) await Promise.resolve();
};

describe('RecorderGridViewComponent', () => {
    let spectator: Spectator<RecorderGridViewComponent>;

    const createComponent = createComponentFactory({
        component: RecorderGridViewComponent,
        shallow: true,
        detectChanges: false,
        declarations: [MockComponent(SidebarComponent)],
        providers: [
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' } as any,
                waitUntilInitialised: () => Promise.resolve(),
            } as any),
        ],
    });

    beforeEach(() => {
        jest.useFakeTimers();
        (ts_client.showMetadata as jest.Mock).mockResolvedValue({
            details: {
                domain: 'recorder.example.com',
                api_path: '/snapshot/{IP_ADDRESS}/{DEVICE_ID}',
                images: [
                    { name: 'Camera A', ip_address: '10.0.0.1', id: 'dev-a' },
                    { name: 'Camera B', ip_address: '10.0.0.2', id: 'dev-b' },
                ],
            },
        });
    });

    afterEach(() => {
        spectator?.fixture.destroy();
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    it('should load recorder metadata and build stream image entries', async () => {
        spectator = createComponent();
        await spectator.component.ngOnInit();
        await flush();

        const images = spectator.component.images() as any[];
        expect(images).toHaveLength(2);
        expect(images[0].name).toBe('Camera A');
        expect(images[0].raw_url).toBe(
            'https://recorder.example.com/snapshot/10.0.0.1/dev-a',
        );
        expect(images[1].raw_url).toBe(
            'https://recorder.example.com/snapshot/10.0.0.2/dev-b',
        );
        expect(spectator.component.domain).toBe('recorder.example.com');
    });

    it('should cache-bust the next image url on each refresh cycle', async () => {
        spectator = createComponent();
        await spectator.component.ngOnInit();
        await flush();

        // `refresh()` already ran one `refresh_image` pass, advancing the index
        // to 1 and rewriting image 0's url with a `&t=` cache-buster.
        expect(spectator.component.refresh_index).toBe(1);
        const first = (spectator.component.images() as any[])[0];
        expect(first.url).toMatch(/&t=\d+$/);
        expect(first.url.startsWith(first.raw_url + '&t=')).toBe(true);

        // Second pass targets image index 1 and wraps the counter back around.
        spectator.component.refresh_image();
        const second = (spectator.component.images() as any[])[1];
        expect(spectator.component.refresh_index).toBe(2);
        expect(second.url).toMatch(/&t=\d+$/);
    });
});
