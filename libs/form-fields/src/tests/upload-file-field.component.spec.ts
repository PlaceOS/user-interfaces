import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';
import { Subject } from 'rxjs';

import { Attachment } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UploadFileFieldComponent } from '../lib/upload-file-field.component';

// Only the external cloud-uploads layer is stubbed
vi.mock('@placeos/cloud-uploads', { spy: true });

import * as cloud_uploads from '@placeos/cloud-uploads';

const attachment = (overrides: Partial<Attachment> = {}): Attachment => ({
    id: 'file-1',
    name: 'file.txt',
    progress: 100,
    size: 10,
    created_at: Date.now(),
    url: 'https://example.com/file.txt',
    ...overrides,
});

describe('UploadFileFieldComponent', () => {
    let spectator: Spectator<UploadFileFieldComponent>;
    const createComponent = createComponentFactory({
        component: UploadFileFieldComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should write external values into the field', () => {
        const item = attachment();
        spectator.component.writeValue(item);
        spectator.detectChanges();
        expect(spectator.component.item()).toEqual(item);
        expect(spectator.query('[item]')).toContainText('file.txt');
    });

    it('should clear the value when removed', () => {
        const on_change = vi.fn();
        spectator.component.writeValue(attachment());
        spectator.detectChanges();
        spectator.component.registerOnChange(on_change);
        spectator.click('button[icon]');
        expect(spectator.component.item()).toBeNull();
        expect(on_change).toHaveBeenCalledWith(null);
    });

    it('should render a placeholder when no file is present', () => {
        expect(spectator.query('[item]')).toBeNull();
        expect(spectator.query('[prompt]')).toExist();
    });

    it('should ignore file events without any files', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.onFileEvent({ target: { files: [] } });
        expect(on_change).not.toHaveBeenCalled();
    });

    it('should upload a picked file within the limits and clear the input', () => {
        vi.mocked(cloud_uploads.uploadFiles)
            .mockClear()
            .mockImplementation(
                () =>
                    [
                        { status: new Subject(), access_url: '' },
                    ] as unknown as ReturnType<
                        typeof cloud_uploads.uploadFiles
                    >,
            );
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.setInput({ accept: '.pdf', max_size: 100 });
        const pick = (file: File) => {
            const element = { value: 'C:\\fakepath\\file', files: [file] };
            spectator.component.onFileEvent({ target: element });
            return element.value;
        };

        expect(pick(new File([new Uint8Array(10)], 'a.png'))).toBe('');
        expect(pick(new File([new Uint8Array(200)], 'b.pdf'))).toBe('');
        expect(cloud_uploads.uploadFiles).not.toHaveBeenCalled();

        expect(pick(new File([new Uint8Array(10)], 'c.pdf'))).toBe('');
        expect(cloud_uploads.uploadFiles).toHaveBeenCalledTimes(1);
        expect(on_change).toHaveBeenLastCalledWith(
            expect.objectContaining({ name: 'c.pdf', progress: 0 }),
        );
    });
});
