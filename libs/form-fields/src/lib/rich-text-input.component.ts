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

import SunEditor from 'suneditor';

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

    private _editor: any;
    private _updateFn = (v) => this.setValue(v);
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
                const delta = this._editor.clipboard.convert({ html: value });
                this._editor.setContents(delta, 'silent');
            } else {
                this.timeout('write', () => this.writeValue(value));
            }
        });
    }

    private _initialiseEditor() {
        const _editor_el = this._editor_el()?.nativeElement;
        const _container_el = this._container_el()?.nativeElement;
        if (!_editor_el || !_container_el) {
            return this.timeout('init', () => this._initialiseEditor());
        }
        const toolbarOptions = [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline'], // toggled buttons

            [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
            [{ align: [] }],
            ['link'],
        ];
        if (this.images_allowed()) {
            toolbarOptions.push(['image']);
        }
        if (this._editor) {
            this.unsub('changes');
            _editor_el.innerHTML = '';
            delete this._editor;
        }
        this._editor = SunEditor.create(_editor_el, {
            placeholder: this.placeholder(),
            height: '100%',
            width: '100%',
        });
        this._editor.onChange(this._updateFn);
        this.subscription('changes', () =>
            this._editor.off('text-change', this._updateFn),
        );
    }

    private _embedImage() {
        if (!this._editor) return;
        const range = this._editor.getSelection();
        if (!range) return;
        const { index } = range;
        // Create a File input element
        const file_input = document.createElement('input');
        file_input.setAttribute('type', 'file');
        file_input.setAttribute('accept', 'image/*');
        file_input.click();

        file_input.onchange = () => {
            const file = file_input.files[0];
            this._uploads.uploadFile(file, true).then((link) => {
                if (!link) return;
                this._editor.insertEmbed(index, 'image', link);
            });
        };
    }

    private _embedAttachment() {
        if (!this._editor) return;
        const range = this._editor.getSelection();
        if (!range) return;
        const { index } = range;
        // Create a File input element
        const file_input = document.createElement('input');
        file_input.setAttribute('type', 'file');
        file_input.click();

        file_input.onchange = () => {
            const file = file_input.files[0];
            this._uploads.uploadFile(file, true).then((link) => {
                if (!link) return;
                const is_image = file.type.startsWith('image/');
                if (is_image) {
                    this._editor.insertEmbed(index, 'image', link);
                } else {
                    this._editor.insertText(
                        range.index,
                        file.name,
                        'link',
                        link,
                    );
                    this._editor.setSelection(range.index + file.name.length);
                }
            });
        };
    }
}
