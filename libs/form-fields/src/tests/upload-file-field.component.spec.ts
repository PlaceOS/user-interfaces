import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { Attachment } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UploadFileFieldComponent } from '../lib/upload-file-field.component';

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

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should write external values into the field', () => {
        const item = attachment();
        spectator.component.writeValue(item);
        spectator.detectChanges();
        expect(spectator.component.item()).toEqual(item);
        expect(spectator.query('[item]')).toContainText('file.txt');
    });

    it('should emit changes when the value is set', () => {
        const on_change = vi.fn();
        const item = attachment();
        spectator.component.registerOnChange(on_change);
        spectator.component.setValue(item);
        expect(spectator.component.item()).toEqual(item);
        expect(on_change).toHaveBeenCalledWith(item);
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
        expect(spectator.element).toContainText('Drop file or click to upload');
    });

    it('should ignore file events without any files', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.onFileEvent({ target: { files: [] } });
        expect(on_change).not.toHaveBeenCalled();
    });
});
