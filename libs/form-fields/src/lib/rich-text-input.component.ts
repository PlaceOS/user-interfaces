import {
    AfterViewInit,
    Component,
    ElementRef,
    forwardRef,
    inject,
    input,
    NgZone,
    OnChanges,
    SecurityContext,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {
    AsyncHandler,
    notifyError,
    UploadCancelledError,
    UploadsService,
} from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { apiKey, token } from '@placeos/ts-client';

import type Squire from 'squire-rte';

@Component({
    selector: 'rich-text-input',
    template: `
        <div #container class="w-full">
            @if (!readonly()) {
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
                    >
                        <icon>link</icon>
                    </button>
                    @if (images_allowed()) {
                        <button
                            icon
                            type="button"
                            class="border-base-300 rounded border px-2 py-1 text-sm"
                            (click)="insertImage()"
                        >
                            <icon>image</icon>
                        </button>
                        <button
                            icon
                            type="button"
                            class="border-base-300 rounded border px-2 py-1 text-sm"
                            (click)="insertAttachment()"
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
                border-radius: 0.25rem;
                border: 1px solid var(--base-300);
                padding: 0.5rem;
                min-height: 8rem;
                width: 100%;
                outline: none;
            }

            :host ::ng-deep .squire-editor:empty::before {
                content: attr(data-placeholder);
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
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            /* istanbul ignore next */
            useExisting: forwardRef(() => RichTextInputComponent),
            multi: true,
        },
    ],
    imports: [IconComponent],
})
export class RichTextInputComponent
    extends AsyncHandler
    implements ControlValueAccessor, OnChanges, AfterViewInit
{
    private _uploads = inject(UploadsService);
    private _dom_sanitizer = inject(DomSanitizer);
    private _ng_zone = inject(NgZone);
    public readonly placeholder = input('');
    public readonly readonly = input(false);
    public readonly images_allowed = input(false);

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

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.placeholder) {
            this.timeout('init', () => this._initialiseEditor());
        }
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
        const link_url = prompt('Enter URL');
        if (!link_url) return;
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
                .uploadFile(file, true)
                .then((upload_id) => {
                    if (!upload_id) return;
                    const link = `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
                    this._setAuth();
                    setTimeout(() => {
                        this._insertUploadedFile(link, file, images_only);
                        this._syncValue();
                    }, 100);
                })
                .catch((error) => {
                    if (error instanceof UploadCancelledError) return;
                    notifyError(
                        `Failed to upload ${file.name}: ${error?.message || 'Unknown error'}`,
                    );
                });
        };
    }

    private readonly _syncValue = () => {
        if (!this._editor) return;
        this.setValue(this._editor.getHTML());
    };

    private readonly _handleTouched = () => {
        if (!this._editor) return;
        this._onTouch();
    };

    private readonly _refreshToolbarState = () => {
        if (!this._editor) return;
        this._ng_zone.run(() => {
            this.toolbar_state.set({
                bold: this._editor.hasFormat('B'),
                italic: this._editor.hasFormat('I'),
                underline: this._editor.hasFormat('U'),
                unordered_list: this._editor.hasFormat('UL'),
                ordered_list: this._editor.hasFormat('OL'),
                link: this._editor.hasFormat('A'),
            });
        });
    };

    private _setReadonlyState() {
        const _editor_el = this._editor_el()?.nativeElement;
        if (!_editor_el) return;
        _editor_el.setAttribute('contenteditable', `${!this.readonly()}`);
    }

    private _setPlaceholder() {
        const _editor_el = this._editor_el()?.nativeElement;
        if (!_editor_el) return;
        _editor_el.setAttribute('data-placeholder', this.placeholder() || '');
    }

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
        if (images_only || is_image) {
            this._editor.insertHTML(`<img src="${link}" alt="${file.name}" />`);
            return;
        }
        this._editor.insertHTML(
            `<a href="${link}" target="_blank">${file.name}</a>`,
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
