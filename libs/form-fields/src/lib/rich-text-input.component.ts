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
import { AsyncHandler } from '@placeos/common';
import * as Quill from 'quill';

@Component({
    selector: 'rich-text-input',
    template: `
        <div #container>
            <div #editor></div>
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

    @ViewChild('container') private _container_el: ElementRef<HTMLDivElement>;
    @ViewChild('editor') private _editor_el: ElementRef<HTMLDivElement>;

    private _editor: any;
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

    public ngOnChanges(changes: SimpleChanges) {}

    public ngAfterViewInit() {
        this._initialiseEditor();
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
                const delta = this._editor.clipboard.convert(value);
                this._editor.setContents(delta, 'silent');
            } else {
                this.timeout('write', () => this.writeValue(value));
            }
        });
    }

    private _initialiseEditor() {
        this._editor = new Quill(this._editor_el.nativeElement, {
            bounds: this._container_el.nativeElement,
            placeholder: this.placeholder,
            modules: {
                toolbar: [
                    [{ size: ['small', false, 'large', 'huge'] }],
                    ['bold', 'italic', 'underline'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                ],
            },
            readOnly: this.readonly,
            theme: 'snow',
        });
        this._editor.on('text-change', this._updateFn);
        this.subscription('changes', () =>
            this._editor.off('text-change', this._updateFn)
        );
    }
}
