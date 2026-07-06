import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { UploadsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
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
                uploadFile: vi.fn(() => Promise.resolve('upload-1')),
            }),
        ],
    });

    const initialiseEditor = async () => {
        spectator.detectChanges();
        await (spectator.component as any)._initialiseEditor();
    };

    beforeEach(() => {
        Object.values(mockEditor).forEach((fn) =>
            (fn as any).mockClear?.(),
        );
        mockEditor.hasFormat.mockReturnValue(false);
        mockEditor.getHTML.mockReturnValue('<p>content</p>');
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should emit changes when the value is set', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.setValue('<p>hi</p>');
        expect(on_change).toHaveBeenCalledWith('<p>hi</p>');
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
        mockEditor.hasFormat.mockImplementation(((fmt: string) => fmt === "I") as any);
        spectator.component.toggleItalic();
        expect(mockEditor.removeItalic).toHaveBeenCalled();
        expect(spectator.component.toolbar_state().italic).toBe(true);
    });

    it('should hide the toolbar in readonly mode', () => {
        spectator.setInput('readonly', true);
        spectator.detectChanges();
        expect(spectator.query('button[icon]')).toBeNull();
    });
});
