import {
    AfterViewInit,
    Component,
    ElementRef,
    forwardRef,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AsyncHandler, uploadFile } from '@placeos/common';
import { link } from 'fs';
import Quill from 'quill';

@Component({
    selector: 'rich-text-input',
    template: `
        <div #container class="h-full">
            <div #editor class="h-full"></div>
        </div>
    `,
    styles: [``],
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
    @Input() public placeholder = '';
    @Input() public readonly = false;
    @Input() public images_allowed = false;

    @ViewChild('container') private _container_el: ElementRef<HTMLDivElement>;
    @ViewChild('editor') private _editor_el: ElementRef<HTMLDivElement>;

    private _editor: Quill;
    private _updateFn = () => this.setValue(this._editor.root.innerHTML);

    private _onChange: (
        _: string
    ) => void; /** Form control on change handler */
    private _onTouch: (
        _: string
    ) => void; /** Form control on touched handler */

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
        if (this._onChange) {
            this._onChange(new_value);
        }
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
        if (
            !this._editor_el?.nativeElement ||
            !this._container_el?.nativeElement
        ) {
            return this.timeout('init', () => this._initialiseEditor());
        }
        const toolbarOptions = [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline'], // toggled buttons
            ['blockquote', 'code-block'],

            [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            [{ align: [] }],

            ['clean'], // remove formatting button
        ];
        if (this.images_allowed) {
            toolbarOptions.push(['image', 'link']);
        }
        if (this._editor) {
            this.unsub('changes');
            this._editor_el.nativeElement.innerHTML = '';
            delete this._editor;
        }
        this._editor = new Quill(this._editor_el.nativeElement, {
            bounds: this._container_el.nativeElement,
            placeholder: this.placeholder,
            modules: {
                toolbar: {
                    container: toolbarOptions,
                    handlers: {
                        image: () => this._embedImage(),
                        link: () => this._embedAttachment(),
                    },
                },
            },
            readOnly: this.readonly,
            theme: 'snow',
        });
        this._editor.on('text-change', this._updateFn);
        this.subscription('changes', () =>
            this._editor.off('text-change', this._updateFn)
        );
    }

    private _embedImage() {
        if (!this._editor) return;
        const range = this._editor.getSelection();
        if (!range) return;
        const { index } = range;
        // Create a File input element
        var file_input = document.createElement('input');
        file_input.setAttribute('type', 'file');
        file_input.setAttribute('accept', 'image/*');
        file_input.click();

        file_input.onchange = () => {
            var file = file_input.files[0];
            uploadFile(file, true).subscribe(({ link, progress }) => {
                if (!link || progress !== 100) return;
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
        var file_input = document.createElement('input');
        file_input.setAttribute('type', 'file');
        file_input.click();

        file_input.onchange = () => {
            var file = file_input.files[0];
            uploadFile(file, true).subscribe(({ link, progress }) => {
                if (!link || progress !== 100) return;
                this._editor.insertText(range.index, file.name, 'link', link);
                this._editor.setSelection(range.index + file.name.length);
            });
        };
    }
}
