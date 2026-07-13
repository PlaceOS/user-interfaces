import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { Attachment } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UploadListFieldComponent } from '../lib/upload-list-field.component';

const attachment = (overrides: Partial<Attachment> = {}): Attachment => ({
    id: 'file-1',
    name: 'file.txt',
    progress: 100,
    size: 10,
    created_at: Date.now(),
    url: 'https://example.com/file.txt',
    ...overrides,
});

describe('UploadListFieldComponent', () => {
    let spectator: Spectator<UploadListFieldComponent>;
    const createComponent = createComponentFactory({
        component: UploadListFieldComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should assign ids to written values', () => {
        spectator.component.writeValue([
            { name: 'a.txt', progress: 100, url: 'a', size: 1 } as any,
        ]);
        const list = spectator.component.list();
        expect(list).toHaveLength(1);
        expect(list[0].id).toMatch(/^file-/);
        expect(list[0].name).toBe('a.txt');
    });

    it('should only keep completed files with a url when setting value', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.setValue([
            attachment({ id: 'done', progress: 100, url: 'x' }),
            attachment({ id: 'in-progress', progress: 40, url: 'y' }),
            attachment({ id: 'no-url', progress: 100, url: '' }),
        ]);
        expect(spectator.component.list().map((_) => _.id)).toEqual(['done']);
        expect(on_change).toHaveBeenCalledWith([
            expect.objectContaining({ id: 'done' }),
        ]);
    });

    it('should remove a file by id', () => {
        const on_change = vi.fn();
        spectator.component.setValue([
            attachment({ id: 'one', url: 'a' }),
            attachment({ id: 'two', url: 'b' }),
        ]);
        spectator.component.registerOnChange(on_change);
        spectator.component.removeFile(attachment({ id: 'one', url: 'a' }));
        expect(spectator.component.list().map((_) => _.id)).toEqual(['two']);
        expect(on_change).toHaveBeenCalled();
    });

    it('should render uploaded files', () => {
        spectator.component.setValue([attachment({ name: 'report.pdf' })]);
        spectator.detectChanges();
        expect(spectator.query('[item]')).toContainText('report.pdf');
    });

    it('should show an empty state with no files', () => {
        spectator.detectChanges();
        expect(spectator.element).toContainText('No uploaded files');
    });

    it('should ignore file events without any files', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.onFileEvent({ target: { files: [] } });
        expect(on_change).not.toHaveBeenCalled();
    });
});
