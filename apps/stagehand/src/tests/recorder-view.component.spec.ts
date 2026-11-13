import {
    createComponentFactory,
    Spectator,
} from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { RecorderGridViewComponent } from '../app/recorder-view.component';
import { StagehandPageComponent } from '../app/ui/stagehand-page.component';

vi.mock('@placeos/ts-client', { spy: true });

const flush = async () => {
    for (let i = 0; i < 8; i++) await Promise.resolve();
};

describe('RecorderGridViewComponent', () => {
    let spectator: Spectator<RecorderGridViewComponent>;

    const createComponent = createComponentFactory({
        component: RecorderGridViewComponent,
        shallow: true,
        detectChanges: false,
        declarations: [MockComponent(StagehandPageComponent)],
        providers: [
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' } as any,
                waitUntilInitialised: () => Promise.resolve(),
            }),
        ],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {
                domain: 'recorder.example.com',
                api_path: '/snapshot/{IP_ADDRESS}/{DEVICE_ID}',
                images: [
                    { name: 'Camera A', ip_address: '10.0.0.1', id: 'dev-a' },
                    { name: 'Camera B', ip_address: '10.0.0.2', id: 'dev-b' },
                ],
            },
        } as any);
    });

    afterEach(() => {
        spectator?.fixture.destroy();
        vi.clearAllTimers();
        vi.useRealTimers();
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

    it('should load no streams when the metadata has no recorder host', async () => {
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {
                domain: '',
                api_path: '/snapshot/{IP_ADDRESS}/{DEVICE_ID}',
                images: [{ name: 'Camera A', ip_address: '10.0.0.1', id: 'a' }],
            },
        } as any);
        spectator = createComponent();
        await spectator.component.ngOnInit();
        await flush();

        expect(spectator.component.images()).toEqual([]);
    });

    it('should cache-bust one image a second, in turn, wrapping to the first', async () => {
        spectator = createComponent();
        await spectator.component.ngOnInit();
        await flush();
        const urls = () =>
            (spectator.component.images() as any[]).map((i) => i.url);
        const raw = (spectator.component.images() as any[]).map(
            (i) => i.raw_url,
        );

        // the first image is refreshed at once
        const [first_a, first_b] = urls();
        expect(first_a).toMatch(new RegExp(`^${raw[0]}&t=\\d+$`));
        expect(first_b).toBe(raw[1]);

        vi.advanceTimersByTime(1000);
        const [second_a, second_b] = urls();
        expect(second_a).toBe(first_a);
        expect(second_b).toMatch(new RegExp(`^${raw[1]}&t=\\d+$`));

        // past the last image, back to the first
        vi.advanceTimersByTime(1000);
        const [third_a, third_b] = urls();
        expect(third_a).not.toBe(first_a);
        expect(third_a).toMatch(new RegExp(`^${raw[0]}&t=\\d+$`));
        expect(third_b).toBe(second_b);
    });

    // a new id would rebuild the image's element on each refresh
    it('should keep each image id across refreshes', async () => {
        spectator = createComponent();
        await spectator.component.ngOnInit();
        await flush();
        const ids = (spectator.component.images() as any[]).map((i) => i.id);
        vi.setSystemTime(Date.now() + 1000);
        spectator.component.refresh_image();
        spectator.component.refresh_image();
        expect(
            (spectator.component.images() as any[]).map((i) => i.id),
        ).toEqual(ids);
    });
});
