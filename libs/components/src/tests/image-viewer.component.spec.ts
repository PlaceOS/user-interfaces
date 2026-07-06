import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

vi.mock('@placeos/ts-client', { spy: true });

import { authority } from '@placeos/ts-client';

import { ImageViewerComponent } from '../lib/image-viewer.component';

const TEST_URL = 'https://images.example.com/photo.png';

describe('ImageViewerComponent', () => {
    let spectator: Spectator<ImageViewerComponent>;
    const createComponent = createComponentFactory({
        component: ImageViewerComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: TEST_URL },
            { provide: MatDialogRef, useValue: { close: vi.fn() } },
        ],
    });

    beforeEach(() => {
        vi.mocked(authority).mockReturnValue({ id: 'test' } as any);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should display the image passed as dialog data', () => {
        spectator.detectChanges();
        expect(spectator.component.url).toBe(TEST_URL);
        expect('img').toExist();
        expect(spectator.query<HTMLImageElement>('img').src).toBe(TEST_URL);
    });

    it('should close the dialog from the close button', () => {
        spectator.detectChanges();
        spectator.click('button[mat-dialog-close]');
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });
});
