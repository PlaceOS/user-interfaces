import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

import { ImageViewerComponent } from '../lib/image-viewer.component';
import {
    startTestPlaceClient,
    type TestPlaceClient,
} from './test-place-client';

const TEST_URL = 'https://images.example.com/photo.png';

describe('ImageViewerComponent', () => {
    let place: TestPlaceClient;
    beforeEach(() => {
        place = startTestPlaceClient();
    });
    let spectator: Spectator<ImageViewerComponent>;
    const createComponent = createComponentFactory({
        component: ImageViewerComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: TEST_URL },
            { provide: MatDialogRef, useValue: { close: vi.fn() } },
        ],
    });

    beforeEach(() => {
        place.setAuthority({ id: 'test' });
        spectator = createComponent();
    });

    it('should display the image passed as dialog data', () => {
        spectator.detectChanges();
        expect(spectator.query<HTMLImageElement>('img').src).toBe(TEST_URL);
    });
});
