import {
    AfterViewInit,
    Component,
    ElementRef,
    forwardRef,
    inject,
    input,
    OnChanges,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AsyncHandler, UploadsService } from '@placeos/common';
import { apiKey, token } from '@placeos/ts-client';

import SunEditor from 'suneditor';
import { font, fontSize, formatBlock, link, list } from 'suneditor/src/plugins';

@Component({
    selector: 'rich-text-input',
    template: `
        <div #container class="absolute inset-0">
            <div #editor class="h-full"></div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
                min-height: 8rem;
                margin-bottom: 4rem;
                z-index: 10;
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
})
export class RichTextInputComponent
    extends AsyncHandler
    implements ControlValueAccessor, OnChanges, AfterViewInit
{
    private _uploads = inject(UploadsService);
    public readonly placeholder = input('');
    public readonly readonly = input(false);
    public readonly images_allowed = input(false);

    private readonly _container_el =
        viewChild<ElementRef<HTMLDivElement>>('container');
    private readonly _editor_el =
        viewChild<ElementRef<HTMLDivElement>>('editor');

    private _editor: ReturnType<typeof SunEditor.create>;
    private _onChange: (_: string) => void;
    private _onTouch: (_: string) => void;

    public readonly registerOnChange = (fn: (_: string) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: string) => void) =>
        (this._onTouch = fn);

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.images_allowed) {
            this.timeout('init', () => this._initialiseEditor());
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
        console.log('Value:', new_value);
        /* istanbul ignore else */
        if (this._onChange) this._onChange(new_value);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: string) {
        this.timeout('write', () => {
            if (this._editor) {
                this._setAuth();
                setTimeout(() => {
                    this._editor.setContents(value);
                }, 100);
            } else this.timeout('write', () => this.writeValue(value));
        });
    }

    private _initialiseEditor() {
        const _editor_el = this._editor_el()?.nativeElement;
        const _container_el = this._container_el()?.nativeElement;
        if (!_editor_el || !_container_el) {
            return this.timeout('init', () => this._initialiseEditor());
        }
        const buttons = [
            ['font'],
            ['fontSize'],
            ['formatBlock'],
            ['bold', 'underline', 'italic'],
            ['align', 'list'],
            ['link'],
        ];
        if (this.images_allowed()) {
            buttons.push(['embedImage', 'embedAttachment']);
        }
        if (this._editor) {
            this.unsub('changes');
            _editor_el.innerHTML = '';
            delete this._editor;
        }
        const embedImagePlugin = {
            name: 'embedImage',
            display: 'command',
            title: 'Insert Image',
            innerHTML:
                '<div class="h-full w-full flex justify-center items-center"><i class="material-symbols-outlined text-2xl">image</i></div>',
            add: (core: any, targetElement: any) => {
                // Plugin initialization if needed
            },
            action: () => this._embedImage(),
        };

        const embedAttachmentPlugin = {
            name: 'embedAttachment',
            display: 'command',
            title: 'Insert Attachment',
            innerHTML:
                '<div class="h-full w-full flex justify-center items-center"><i class="material-symbols-outlined text-2xl">attachment</i></div>',
            add: (core: any, targetElement: any) => {
                // Plugin initialization if needed
            },
            action: () => this._embedAttachment(),
        };
        const box =
            this._container_el()?.nativeElement.getBoundingClientRect() || {
                top: 0,
                left: 0,
                width: 0,
                height: 0,
            };
        this._editor = SunEditor.create(_editor_el, {
            placeholder: this.placeholder(),
            height: `${box.height}`,
            plugins: [
                font,
                fontSize,
                formatBlock,
                list,
                link,
                embedImagePlugin,
                embedAttachmentPlugin,
            ],
            buttonList: buttons,
        });
        this._editor.readOnly(this.readonly());
        this._editor.onChange = (c) => this.setValue(c);
    }

    private _embedImage() {
        if (!this._editor) return;
        // Create a File input element
        const file_input = document.createElement('input');
        file_input.setAttribute('type', 'file');
        file_input.setAttribute('accept', 'image/*');
        file_input.click();

        file_input.onchange = () => {
            const file = file_input.files[0];
            this._uploads.uploadFile(file, true).then((upload_id) => {
                if (!upload_id) return;
                const link = `/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
                this._setAuth();
                setTimeout(() => {
                    this._editor.insertHTML(
                        `<img src="${link}" alt="${file.name}" />`,
                    );
                }, 100);
            });
        };
    }

    private _embedAttachment() {
        if (!this._editor) return;
        // Create a File input element
        const file_input = document.createElement('input');
        file_input.setAttribute('type', 'file');
        file_input.click();

        file_input.onchange = () => {
            const file = file_input.files[0];
            this._uploads.uploadFile(file, true).then((upload_id) => {
                if (!upload_id) return;
                const link = `/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
                const is_image = file.type.startsWith('image/');
                this._setAuth();
                setTimeout(() => {
                    if (is_image) {
                        this._editor.insertHTML(
                            `<img src="${link}" alt="${file.name}" />`,
                        );
                    } else {
                        this._editor.insertHTML(
                            `<a href="${link}" target="_blank">${file.name}</a>`,
                        );
                    }
                }, 100);
            });
        };
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
