import {
    AfterViewInit,
    Component,
    computed,
    ElementRef,
    inject,
    input,
    OnChanges,
    SecurityContext,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {
    AsyncHandler,
    notifyError,
    provideValueAccessor,
    UploadsService,
} from '@placeos/common';
import { apiKey, token } from '@placeos/ts-client';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { escapeHtml } from './escape-html';

import type Squire from 'squire-rte';

/** Link protocols that the editor accepts */
const LINK_PROTOCOLS = ['http:', 'https:', 'mailto:'];

/** Whether editor HTML has no text and no images. Squire keeps an empty block when cleared */
function isEmptyHtml(html: string) {
    const template = document.createElement('template');
    template.innerHTML = html || '';
    return (
        !template.content.textContent?.trim() &&
        !template.content.querySelector('img')
    );
}

/**
 * Return the URL as a link target with an allowed protocol, or `null`.
 * Text with no `://` (and no `mailto:`) gets `https://`, so `example.com` works.
 */
function toLinkUrl(value: string) {
    const text = value.trim();
    if (!text) return null;
    const with_protocol =
        text.includes('://') || /^mailto:/i.test(text)
            ? text
            : `https://${text}`;
    try {
        const url = new URL(with_protocol);
        return LINK_PROTOCOLS.includes(url.protocol) ? url.href : null;
    } catch {
        return null;
    }
}

@Component({
    selector: 'rich-text-input',
    template: `
        <div #container class="w-full" [class.is-empty]="is_empty()">
            @if (!is_readonly()) {
                <div
                    class="border-base-300 bg-base-100 flex flex-wrap items-center gap-1 rounded-t border p-2"
                >
                    <select
                        class="border-base-300 bg-base-100 rounded border p-2 text-sm"
                        (change)="setFontFace($event)"
                    >
                        <option value="default">Font</option>
                        <option value="Arial">Arial</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                    <select
                        class="border-base-300 bg-base-100 min-w-24 rounded border p-2 text-sm"
                        (change)="setFontSize($event)"
                    >
                        <option value="">Size</option>
                        <option value="12px">12</option>
                        <option value="14px">14</option>
                        <option value="16px">16</option>
                        <option value="18px">18</option>
                        <option value="24px">24</option>
                        <option value="32px">32</option>
                        <option value="48px">48</option>
                    </select>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().bold"
                        [class.text-info]="toolbar_state().bold"
                        (click)="toggleBold()"
                        [attr.aria-label]="'COMMON.BOLD' | translate"
                        [attr.aria-pressed]="!!toolbar_state().bold"
                    >
                        <icon>format_bold</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().italic"
                        [class.text-info]="toolbar_state().italic"
                        (click)="toggleItalic()"
                        [attr.aria-label]="'COMMON.ITALIC' | translate"
                        [attr.aria-pressed]="!!toolbar_state().italic"
                    >
                        <icon>format_italic</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().underline"
                        [class.text-info]="toolbar_state().underline"
                        (click)="toggleUnderline()"
                        [attr.aria-label]="'COMMON.UNDERLINE' | translate"
                        [attr.aria-pressed]="!!toolbar_state().underline"
                    >
                        <icon>format_underlined</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().unordered_list"
                        [class.text-info]="toolbar_state().unordered_list"
                        (click)="makeUnorderedList()"
                        [attr.aria-label]="'COMMON.BULLETED_LIST' | translate"
                        [attr.aria-pressed]="!!toolbar_state().unordered_list"
                    >
                        <icon>format_list_bulleted</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().ordered_list"
                        [class.text-info]="toolbar_state().ordered_list"
                        (click)="makeOrderedList()"
                        [attr.aria-label]="'COMMON.NUMBERED_LIST' | translate"
                        [attr.aria-pressed]="!!toolbar_state().ordered_list"
                    >
                        <icon>format_list_numbered</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().link"
                        [class.text-info]="toolbar_state().link"
                        (click)="insertLink()"
                        [attr.aria-label]="'COMMON.INSERT_LINK' | translate"
                        [attr.aria-pressed]="!!toolbar_state().link"
                    >
                        <icon>link</icon>
                    </button>
                    @if (images_allowed()) {
                        <button
                            icon
                            type="button"
                            class="border-base-300 rounded border px-2 py-1 text-sm"
                            (click)="insertImage()"
                            [attr.aria-label]="
                                'COMMON.INSERT_IMAGE' | translate
                            "
                        >
                            <icon>image</icon>
                        </button>
                        <button
                            icon
                            type="button"
                            class="border-base-300 rounded border px-2 py-1 text-sm"
                            (click)="insertAttachment()"
                            [attr.aria-label]="'COMMON.ATTACH_FILE' | translate"
                        >
                            <icon>attachment</icon>
                        </button>
                    }
                </div>
            }
            <div #editor class="squire-editor"></div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
            }

            :host ::ng-deep .squire-editor {
                position: relative;
                border-radius: 0.25rem;
                border: 1px solid var(--base-300);
                padding: 0.5rem;
                min-height: 8rem;
                width: 100%;
                outline: none;
            }

            :host ::ng-deep .is-empty > .squire-editor::before {
                content: attr(data-placeholder);
                position: absolute;
                top: 0.5rem;
                left: 0.5rem;
                pointer-events: none;
                color: var(--base-content);
                opacity: 0.5;
            }

            :host ::ng-deep .squire-editor ul {
                list-style-type: disc;
                margin: 0.5rem 0;
                padding-left: 1.5rem;
            }

            :host ::ng-deep .squire-editor ol {
                list-style-type: decimal;
                margin: 0.5rem 0;
                padding-left: 1.5rem;
            }

            :host ::ng-deep .squire-editor li {
                margin: 0.125rem 0;
            }
        `,
    ],
    providers: [provideValueAccessor(() => RichTextInputComponent)],
    imports: [IconComponent, TranslatePipe],
})
export class RichTextInputComponent
    extends AsyncHandler
    implements ControlValueAccessor, OnChanges, AfterViewInit
{
    private _uploads = inject(UploadsService);
    private _dom_sanitizer = inject(DomSanitizer);
    public readonly placeholder = input('');
    public readonly readonly = input(false);
    public readonly images_allowed = input(false);
    /** Whether the form control is disabled */
    public readonly disabled = signal(false);
    /**
     * Whether the editor has no content. Kept outside the editor element,
     * as Squire treats changes to its attributes as user input.
     */
    public readonly is_empty = signal(true);
    /** Whether the user cannot edit the content */
    public readonly is_readonly = computed(
        () => this.readonly() || this.disabled(),
    );

    private readonly _editor_el =
        viewChild<ElementRef<HTMLDivElement>>('editor');

    private _editor: Squire;
    private _onChange: (_: string) => void = () => undefined;
    private _onTouch: () => void = () => undefined;
    public readonly toolbar_state = signal({
        bold: false,
        italic: false,
        underline: false,
        unordered_list: false,
        ordered_list: false,
        link: false,
    });

    public readonly registerOnChange = (fn: (_: string) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: () => void) =>
        (this._onTouch = fn);

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
        this._setReadonlyState();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.placeholder) this._setPlaceholder();
        if (changes.readonly && this._editor) {
            this._setReadonlyState();
        }
    }

    public ngAfterViewInit() {
        this.timeout('init', () => this._initialiseEditor());
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: string): void {
        this._onChange(new_value);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: string) {
        this.timeout('write', () => {
            if (this._editor) {
                this._editor.setHTML(value || '');
                this._setPlaceholder();
                this._updateEmptyState();
            } else this.timeout('write', () => this.writeValue(value));
        });
    }

    public toggleBold() {
        this._toggleFormat(
            'B',
            () => this._editor.removeBold(),
            () => this._editor.bold(),
        );
    }

    public toggleItalic() {
        this._toggleFormat(
            'I',
            () => this._editor.removeItalic(),
            () => this._editor.italic(),
        );
    }

    public toggleUnderline() {
        this._toggleFormat(
            'U',
            () => this._editor.removeUnderline(),
            () => this._editor.underline(),
        );
    }

    public makeUnorderedList() {
        this._toggleFormat(
            'UL',
            () => this._editor.removeList(),
            () => this._editor.makeUnorderedList(),
        );
    }

    public makeOrderedList() {
        this._toggleFormat(
            'OL',
            () => this._editor.removeList(),
            () => this._editor.makeOrderedList(),
        );
    }

    public insertLink() {
        if (!this._editor) return;
        if (this._editor.hasFormat('A')) {
            this._editor.removeLink();
            this._syncValue();
            this._refreshToolbarState();
            return;
        }
        const input_url = prompt('Enter URL');
        if (!input_url) return;
        const link_url = toLinkUrl(input_url);
        if (!link_url) {
            notifyError('Links must use http, https or mailto');
            return;
        }
        this._editor.makeLink(link_url);
        this._syncValue();
        this._refreshToolbarState();
    }

    public setFontFace(event: Event) {
        if (!this._editor) return;
        const font_face = (event.target as HTMLSelectElement).value;
        if (!font_face) return;
        this._editor.setFontFace(
            font_face === 'default' ? 'inherit' : font_face,
        );
        this._syncValue();
    }

    public setFontSize(event: Event) {
        if (!this._editor) return;
        const font_size = (event.target as HTMLSelectElement).value;
        if (!font_size) return;
        this._editor.setFontSize(font_size);
        this._syncValue();
    }

    public insertImage() {
        this._embedFile(true);
    }

    public insertAttachment() {
        this._embedFile(false);
    }

    private async _initialiseEditor() {
        const _editor_el = this._editor_el()?.nativeElement;
        if (!_editor_el) {
            return this.timeout('init', () => this._initialiseEditor());
        }
        // Load the Squire editor lazily so the ~58KB library stays out of the
        // initial bundle until a rich-text field is actually rendered.
        const { default: Squire } = await import('squire-rte');
        if (this._editor) {
            this._editor.destroy();
        }
        _editor_el.innerHTML = '';
        // Capture phase, so this runs before Squire's click listener on the same element
        _editor_el.removeEventListener('click', this._blockImageClick, true);
        _editor_el.addEventListener('click', this._blockImageClick, true);
        this._editor = new Squire(_editor_el, {
            blockTag: 'div',
            sanitizeToDOMFragment: (html: string) => {
                const sanitized_html =
                    this._dom_sanitizer.sanitize(
                        SecurityContext.HTML,
                        html || '',
                    ) || '';
                const template = document.createElement('template');
                template.innerHTML = sanitized_html;
                return template.content.cloneNode(true) as DocumentFragment;
            },
        });
        this._editor.addEventListener('input', this._syncValue);
        this._editor.addEventListener('blur', this._handleTouched);
        this._editor.addEventListener('cursor', this._refreshToolbarState);
        this._editor.addEventListener('select', this._refreshToolbarState);
        this._editor.addEventListener('pathChange', this._refreshToolbarState);
        this._setReadonlyState();
        this._setPlaceholder();
        this._updateEmptyState();
        this._refreshToolbarState();
    }

    private _embedFile(images_only: boolean) {
        if (!this._editor) return;
        const file_input = document.createElement('input');
        file_input.setAttribute('type', 'file');
        if (images_only) file_input.setAttribute('accept', 'image/*');
        file_input.click();

        file_input.onchange = () => {
            const file = file_input.files?.[0];
            if (!file) return;
            this._uploads
                .uploadFileToCompletion(file, true)
                .then((upload_id) => {
                    if (!upload_id) return;
                    const link = `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
                    this._setAuth();
                    this._insertUploadedFile(link, file, images_only);
                    this._syncValue();
                })
                .catch((error) => {
                    notifyError(
                        `Failed to upload ${file.name}: ${error?.message || 'Unknown error'}`,
                    );
                });
        };
    }

    /** Send the editor content to the form. An empty editor sends `''`, so `required` works */
    private readonly _syncValue = () => {
        if (!this._editor) return;
        const html = this._editor.getHTML();
        this._updateEmptyState(html);
        this.setValue(isEmptyHtml(html) ? '' : html);
    };

    private readonly _handleTouched = () => {
        if (!this._editor) return;
        this._onTouch();
    };

    private readonly _refreshToolbarState = () => {
        if (!this._editor) return;
        this.toolbar_state.set({
            bold: this._editor.hasFormat('B'),
            italic: this._editor.hasFormat('I'),
            underline: this._editor.hasFormat('U'),
            unordered_list: this._editor.hasFormat('UL'),
            ordered_list: this._editor.hasFormat('OL'),
            link: this._editor.hasFormat('A'),
        });
    };

    private _setReadonlyState() {
        this._setRootAttribute('contenteditable', `${!this.is_readonly()}`);
    }

    /** Show the placeholder only while the editor has no content */
    private _updateEmptyState(html = this._editor?.getHTML() || '') {
        this.is_empty.set(isEmptyHtml(html));
    }

    private _setPlaceholder() {
        this._setRootAttribute('data-placeholder', this.placeholder() || '');
    }

    /**
     * Set an attribute on the editor element. Squire watches the attributes
     * of this element, so change them through `modifyDocument`, or Squire
     * sends an `input` event and the form gets a change the user did not make.
     */
    private _setRootAttribute(name: string, value: string) {
        const _editor_el = this._editor_el()?.nativeElement;
        if (!_editor_el) return;
        const update = () => _editor_el.setAttribute(name, value);
        if (this._editor) this._editor.modifyDocument(update);
        else update();
    }

    /** Stop Squire from selecting images, which lets them be resized or deleted, while read only */
    private readonly _blockImageClick = (event: Event) => {
        if (this.is_readonly() && (event.target as Node)?.nodeName === 'IMG') {
            event.stopPropagation();
        }
    };

    private _toggleFormat(
        format: string,
        disable_action: () => void,
        enable_action: () => void,
    ) {
        if (!this._editor) return;
        if (this._editor.hasFormat(format)) disable_action();
        else enable_action();
        this._syncValue();
        this._refreshToolbarState();
    }

    private _insertUploadedFile(
        link: string,
        file: File,
        images_only: boolean,
    ) {
        const is_image = file.type.startsWith('image/');
        const name = escapeHtml(file.name);
        const src = escapeHtml(link);
        if (images_only || is_image) {
            this._editor.insertHTML(`<img src="${src}" alt="${name}" />`);
            return;
        }
        this._editor.insertHTML(
            `<a href="${src}" target="_blank" rel="noopener noreferrer">${name}</a>`,
        );
    }

    private _setAuth() {
        const tkn = token();
        document.cookie = `${
            tkn === 'x-api-key'
                ? 'api-key=' + encodeURIComponent(apiKey())
                : 'bearer_token=' + encodeURIComponent(tkn)
        };max-age=30;path=/api/engine/v2/uploads;samesite=strict;${
            location.protocol === 'https:' ? 'secure;' : ''
        }`;
    }
}
