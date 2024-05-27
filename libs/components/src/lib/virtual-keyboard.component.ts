import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import {
    Component,
    ElementRef,
    HostListener,
    Input,
    OnDestroy,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';

const DEFAULT_KEYS = [
    '0123456789'.split(''),
    'qwertyuiop'.split(''),
    'asdfghjkl'.split(''),
    'zxcvbnm'.split(''),
    ['{caps}', '{space}', '{backspace}'],
];

@Component({
    selector: 'input[keyboard],textarea[keyboard]',
    template: `
        <ng-content></ng-content>
        <ng-template cdk-portal>
            <div
                keyboard-view
                class="w-screen flex flex-col space-y-4 bg-base-200 p-2 border-t border-base-200"
            >
                <div
                    row
                    class="flex items-center justify-center space-x-2"
                    *ngFor="let row of keyset"
                >
                    <ng-container *ngFor="let key of row">
                        <div
                            [attr.key]="key"
                            tabindex="0"
                            class="rounded-xl p-2 border border-base-200 relative cursor-pointer bg-base-100"
                            [class.special]="key[0] === '{' && key.length > 1"
                            [class.space]="key === '{space}'"
                            (focus)="focusInput()"
                            (click)="handleKeyPress(key)"
                        >
                            {{
                                key === '{space}'
                                    ? 'Space'
                                    : key === '{caps}'
                                    ? 'Caps Lock'
                                    : key === '{backspace}'
                                    ? 'Backspace'
                                    : key
                            }}
                            <div
                                *ngIf="key === '{caps}'"
                                dot
                                class="absolute top-2 right-2 h-2 w-2 rounded-full bg-base-200"
                                [class.bg-success]="state === 'shift'"
                            ></div>
                        </div>
                    </ng-container>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            [key] {
                height: 3.5rem;
                width: 4rem;
                transition: box-shadow 200ms, top 200ms;
                box-shadow: 0 4px 0 0.04px rgba(0, 0, 0, 0.1);
            }

            [key].special {
                width: 10rem;
            }

            [key].space {
                flex: 1;
                min-width: 10rem;
                max-width: 25rem;
            }

            [key]:hover {
                top: 2px;
                box-shadow: 0 2px 0 0.04px rgba(0, 0, 0, 0.1);
            }

            [key]:active {
                top: 4px;
                box-shadow: 0 0 0 0.04px rgba(0, 0, 0, 0.1);
            }
        `,
    ],
})
export class VirtualKeyboardComponent
    extends AsyncHandler
    implements OnDestroy
{
    /** Whether virtual keyboard should activate */
    public static enabled: boolean;
    /** List of rows of keys to display on the keyboard */
    @Input() public keyset = DEFAULT_KEYS;
    /** Current state of the displayed keyset */
    public state: 'normal' | 'caps' | 'shift' = 'normal';
    /** References to the overlay containing the keyboard */
    private _overlay_ref: OverlayRef = null;
    /** Portal with the keyboard contents */
    @ViewChild(CdkPortal) private _portal: CdkPortal;

    @HostListener('focus') public onFocus = () => {
        if (!VirtualKeyboardComponent.enabled) return;
        this.open();
        this.clearTimeout('blur');
    };
    @HostListener('blur') public onBlur = () =>
        this.timeout('blur', () => this.close());

    constructor(
        private _element: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
        private _overlay: Overlay
    ) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.keyset) {
            if (!this.keyset) this.keyset = DEFAULT_KEYS;
        }
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
        this.close();
    }

    public focusInput() {
        this._element?.nativeElement?.blur();
        this._element?.nativeElement?.focus();
    }

    public open() {
        if (this._overlay_ref) return;
        if (!this._portal) return;
        this._overlay_ref = this._overlay.create({
            positionStrategy: this._overlay
                .position()
                .global()
                .bottom()
                .centerHorizontally(),
        });
        this._overlay_ref.attach(this._portal);
    }

    public close() {
        if (this._overlay_ref) {
            this._overlay_ref.dispose();
            this._overlay_ref = null;
        }
    }

    public handleKeyPress(key: string) {
        let cursor_pos = this._element.nativeElement.selectionStart;
        const str = this._element.nativeElement.value || '';
        switch (key.toLowerCase()) {
            case '{caps}':
            case '{shift}':
                this.state = 'shift';
                break;
            case '{backspace}':
                this._element.nativeElement.value = `${str.substr(
                    0,
                    cursor_pos - 1
                )}${str.substr(cursor_pos, str.length)}`;
                cursor_pos = Math.max(0, cursor_pos - 1);
                break;
            case '{space}':
                this._element.nativeElement.value = `${str.substr(
                    0,
                    cursor_pos
                )}${' '}${str.substr(cursor_pos, str.length)}`;
                cursor_pos += 1;
                break;
            default:
                if (this.state === 'shift') this.state = 'normal';
                this._element.nativeElement.value = `${str.substr(
                    0,
                    cursor_pos
                )}${key}${str.substr(cursor_pos, str.length)}`;
                cursor_pos += 1;
        }
        this._element.nativeElement.dispatchEvent(new InputEvent('input'));
        this.updateKeyState();
        this.timeout(
            'focus',
            () => {
                this.focusInput();
                this._element.nativeElement.selectionStart = cursor_pos;
                this._element.nativeElement.selectionEnd = cursor_pos;
            },
            50
        );
    }

    public updateKeyState() {
        this.keyset = this.keyset.map((_) =>
            _.map((k) =>
                k.length > 1
                    ? k
                    : k[
                          this.state !== 'normal'
                              ? 'toUpperCase'
                              : 'toLowerCase'
                      ]()
            )
        );
    }
}
