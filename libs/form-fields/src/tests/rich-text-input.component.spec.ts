import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { UploadsService } from '@placeos/common';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { RichTextInputComponent } from '../lib/rich-text-input.component';

const mockEditor = vi.hoisted(() => ({
    setHTML: vi.fn(),
    getHTML: vi.fn(() => '<p>content</p>'),
    destroy: vi.fn(),
    addEventListener: vi.fn(),
    hasFormat: vi.fn(() => false),
    bold: vi.fn(),
    removeBold: vi.fn(),
    italic: vi.fn(),
    removeItalic: vi.fn(),
    underline: vi.fn(),
    removeUnderline: vi.fn(),
    makeUnorderedList: vi.fn(),
    makeOrderedList: vi.fn(),
    removeList: vi.fn(),
    makeLink: vi.fn(),
    removeLink: vi.fn(),
    setFontFace: vi.fn(),
    setFontSize: vi.fn(),
    insertHTML: vi.fn(),
    modifyDocument: vi.fn((fn: () => void) => fn()),
}));

vi.mock('squire-rte', () => ({
    __esModule: true,
    default: vi.fn(function () {
        return mockEditor;
    }),
}));

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('RichTextInputComponent', () => {
    let spectator: Spectator<RichTextInputComponent>;
    const createComponent = createComponentFactory({
        component: RichTextInputComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            MockProvider(UploadsService, {
                uploadFileToCompletion: vi.fn(() => Promise.resolve('up 1')),
            }),
        ],
    });

    const initialiseEditor = async () => {
        spectator.detectChanges();
        await (spectator.component as any)._initialiseEditor();
    };

    beforeEach(() => {
        Object.values(mockEditor).forEach((fn) => fn.mockClear?.());
        mockEditor.hasFormat.mockReturnValue(false);
        mockEditor.getHTML.mockReturnValue('<p>content</p>');
        spectator = createComponent();
    });

    it('should write html into the editor once initialised', async () => {
        await initialiseEditor();
        spectator.component.writeValue('<p>external</p>');
        await wait(350);
        expect(mockEditor.setHTML).toHaveBeenCalledWith('<p>external</p>');
    });

    it('should enable bold formatting when not already applied', async () => {
        await initialiseEditor();
        mockEditor.hasFormat.mockReturnValue(false);
        spectator.component.toggleBold();
        expect(mockEditor.bold).toHaveBeenCalled();
        expect(mockEditor.removeBold).not.toHaveBeenCalled();
    });

    it('should remove bold formatting when already applied', async () => {
        await initialiseEditor();
        mockEditor.hasFormat.mockReturnValue(true);
        spectator.component.toggleBold();
        expect(mockEditor.removeBold).toHaveBeenCalled();
        expect(mockEditor.bold).not.toHaveBeenCalled();
    });

    it('should sync the editor html back to the form control on change', async () => {
        const on_change = vi.fn();
        await initialiseEditor();
        spectator.component.registerOnChange(on_change);
        mockEditor.getHTML.mockReturnValue('<p>typed</p>');
        spectator.component.makeOrderedList();
        expect(on_change).toHaveBeenCalledWith('<p>typed</p>');
    });

    it('should toggle italic formatting off when already active', async () => {
        await initialiseEditor();
        mockEditor.hasFormat.mockImplementation(
            ((fmt: string) => fmt === 'I') as any,
        );
        spectator.component.toggleItalic();
        expect(mockEditor.removeItalic).toHaveBeenCalled();
        expect(spectator.component.toolbar_state().italic).toBe(true);
    });

    it('should send an empty value when the editor only has an empty block', async () => {
        const on_change = vi.fn();
        await initialiseEditor();
        spectator.component.registerOnChange(on_change);
        mockEditor.getHTML.mockReturnValue('<div><br></div>');
        spectator.component.makeOrderedList();
        expect(on_change).toHaveBeenCalledWith('');
    });

    it('should not insert links with a blocked protocol', async () => {
        await initialiseEditor();
        vi.spyOn(window, 'prompt').mockReturnValue('javascript://%0aalert(1)');
        spectator.component.insertLink();
        expect(mockEditor.makeLink).not.toHaveBeenCalled();
    });

    it('should add https to links with no protocol', async () => {
        await initialiseEditor();
        vi.spyOn(window, 'prompt').mockReturnValue('example.com/page');
        spectator.component.insertLink();
        expect(mockEditor.makeLink).toHaveBeenCalledWith(
            'https://example.com/page',
        );
    });

    it('should remove a link from linked text without asking for a url', async () => {
        const on_change = vi.fn();
        await initialiseEditor();
        spectator.component.registerOnChange(on_change);
        mockEditor.hasFormat.mockReturnValue(true);
        const prompt = vi.spyOn(window, 'prompt').mockClear();
        spectator.component.insertLink();
        expect(mockEditor.removeLink).toHaveBeenCalled();
        expect(prompt).not.toHaveBeenCalled();
        expect(on_change).toHaveBeenCalledWith('<p>content</p>');
    });

    it('should change editor attributes through modifyDocument when disabled', async () => {
        await initialiseEditor();
        mockEditor.modifyDocument.mockClear();
        spectator.component.setDisabledState(true);
        const editor_el = spectator.query('.squire-editor');
        expect(mockEditor.modifyDocument).toHaveBeenCalled();
        expect(editor_el.getAttribute('contenteditable')).toBe('false');
    });

    it('should stop image clicks from reaching the editor while disabled', async () => {
        await initialiseEditor();
        const editor_el = spectator.query('.squire-editor');
        const image = document.createElement('img');
        editor_el.appendChild(image);
        const squire_click = vi.fn();
        editor_el.addEventListener('click', squire_click);
        spectator.component.setDisabledState(true);
        image.click();
        expect(squire_click).not.toHaveBeenCalled();
        spectator.component.setDisabledState(false);
        image.click();
        expect(squire_click).toHaveBeenCalledTimes(1);
    });

    it('should hide the toolbar in readonly mode', () => {
        spectator.setInput('readonly', true);
        spectator.detectChanges();
        expect(spectator.query('button[icon]')).toBeNull();
    });

    describe('embedded uploads', () => {
        const upload_url = `${location.origin}/api/engine/v2/uploads/up%201/url`;
        // Fake notification outlet so notifyError() is observable
        const notify_open = vi.fn(() => ({
            onAction: () => of(),
            dismiss: vi.fn(),
        }));

        beforeEach(() => {
            notify_open.mockClear();
            setNotifyOutlet({ open: notify_open } as any, true);
        });

        afterEach(() => setNotifyOutlet(null, true));

        /** Open the file picker of the editor and pick `file` */
        const pickFile = async (file: File, images_only: boolean) => {
            let picker: HTMLInputElement;
            const click = vi
                .spyOn(HTMLElement.prototype, 'click')
                .mockImplementation(function (this: HTMLInputElement) {
                    picker = this;
                });
            if (images_only) spectator.component.insertImage();
            else spectator.component.insertAttachment();
            click.mockRestore();
            Object.defineProperty(picker, 'files', { value: [file] });
            picker.dispatchEvent(new Event('change'));
            await wait(0);
            return picker;
        };

        it('should insert an uploaded image with its name escaped', async () => {
            const on_change = vi.fn();
            await initialiseEditor();
            spectator.component.registerOnChange(on_change);
            const file = new File([], 'x" onerror="alert(1).png', {
                type: 'image/png',
            });

            const picker = await pickFile(file, true);

            expect(picker.getAttribute('accept')).toBe('image/*');
            expect(mockEditor.insertHTML).toHaveBeenCalledWith(
                `<img src="${upload_url}" alt="x&quot; onerror=&quot;alert(1).png" />`,
            );
            expect(on_change).toHaveBeenCalledWith('<p>content</p>');
        });

        it('should insert an uploaded file that is not an image as a link', async () => {
            await initialiseEditor();
            const file = new File([], '<b>report</b>.pdf', {
                type: 'application/pdf',
            });

            const picker = await pickFile(file, false);

            expect(picker.hasAttribute('accept')).toBe(false);
            expect(mockEditor.insertHTML).toHaveBeenCalledWith(
                `<a href="${upload_url}" target="_blank" rel="noopener noreferrer">&lt;b&gt;report&lt;/b&gt;.pdf</a>`,
            );
        });

        it('should report a failed upload and insert nothing', async () => {
            await initialiseEditor();
            vi.mocked(
                spectator.inject(UploadsService).uploadFileToCompletion,
            ).mockRejectedValueOnce(new Error('Status 500'));

            await pickFile(new File([], 'a.png', { type: 'image/png' }), true);

            expect(mockEditor.insertHTML).not.toHaveBeenCalled();
            expect(notify_open).toHaveBeenCalledTimes(1);
        });
    });
});
