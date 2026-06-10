import { Overlay, OverlayRef } from '@angular/cdk/overlay';

import {
    Directive,
    ElementRef,
    OnDestroy,
    effect,
    inject,
    model,
    signal,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';

const DEFAULT_KEYS = [
    '0123456789'.split(''),
    'qwertyuiop_'.split(''),
    'asdfghjkl+'.split(''),
    'zxcvbnm@.-'.split(''),
    ['{caps}', '{space}', '{backspace}'],
];
const FADE_DURATION = 160;

@Directive({
    selector: 'input[keyboard],textarea[keyboard]',
    host: {
        '(pointerdown)': 'syncNativeKeyboardState()',
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()',
        '(window:resize)': 'reposition()',
    },
})
export class VirtualKeyboardComponent
    extends AsyncHandler
    implements OnDestroy
{
    private _element =
        inject<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(ElementRef);
    private _overlay = inject(Overlay);

    private static _enabled = false;
    private static _instances = new Set<VirtualKeyboardComponent>();

    /** Whether virtual keyboard should activate */
    public static get enabled() {
        return this._enabled;
    }

    public static set enabled(value: boolean) {
        this._enabled = value;
        for (const instance of this._instances) {
            instance.syncNativeKeyboardState();
        }
    }

    /** List of rows of keys to display on the keyboard */
    public readonly keyset = model(DEFAULT_KEYS);
    /** Current state of the displayed keyset */
    public readonly state = signal<'normal' | 'caps' | 'shift'>('normal');
    /** References to the overlay containing the keyboard */
    private _overlay_ref: OverlayRef = null;
    private _keyboard_el: HTMLElement = null;
    private _position: 'top' | 'bottom' = 'bottom';
    private _native_keyboard_prevented = false;
    private _original_readonly = false;
    private _original_inputmode: string | null = null;

    public onFocus() {
        this.syncNativeKeyboardState();
        if (!VirtualKeyboardComponent.enabled) return;
        this.open();
        this.clearTimeout('blur-sm');
    }

    public onBlur() {
        this.timeout('blur-sm', () => this.close());
    }

    constructor() {
        super();
        VirtualKeyboardComponent._instances.add(this);
        this.syncNativeKeyboardState();

        effect(() => {
            const keys = this.keyset();
            if (!keys) this.keyset.set(DEFAULT_KEYS);
        });
    }

    public ngOnDestroy() {
        VirtualKeyboardComponent._instances.delete(this);
        this.restoreNativeKeyboardState();
        super.ngOnDestroy();
        this.close(true);
    }

    public focusInput() {
        this._element?.nativeElement?.blur();
        this._element?.nativeElement?.focus();
    }

    public open() {
        this.clearTimeout('close-animation');
        if (this._overlay_ref) {
            this._overlay_ref.hostElement.style.pointerEvents = 'auto';
            if (this._keyboard_el) this._keyboard_el.style.opacity = '1';
            return;
        }
        this._position = this.preferredPosition();
        const position_strategy = this._overlay
            .position()
            .global()
            .centerHorizontally();
        if (this._position === 'top') {
            position_strategy.top('0');
        } else {
            position_strategy.bottom('0');
        }
        this._overlay_ref = this._overlay.create({
            width: '100vw',
            positionStrategy: position_strategy,
        });
        this._overlay_ref.hostElement.style.display = 'block';
        this._overlay_ref.hostElement.style.pointerEvents = 'auto';
        this.applyOverlayPosition();
        this.renderKeyboard();
    }

    public close(immediate = false) {
        if (!this._overlay_ref) return;
        this.clearTimeout('close-animation');
        if (immediate || !this._keyboard_el) {
            this._overlay_ref.dispose();
            this._overlay_ref = null;
            this._keyboard_el = null;
            return;
        }
        this._overlay_ref.hostElement.style.pointerEvents = 'none';
        this._keyboard_el.style.opacity = '0';
        this.timeout(
            'close-animation',
            () => {
                this._overlay_ref?.dispose();
                this._overlay_ref = null;
                this._keyboard_el = null;
            },
            FADE_DURATION,
        );
    }

    public handleKeyPress(key: string) {
        const input_el = this._element.nativeElement;
        const str = input_el.value || '';
        let cursor_pos = input_el.selectionStart ?? str.length;
        switch (key.toLowerCase()) {
            case '{caps}':
                this.state.set(this.state() === 'caps' ? 'normal' : 'caps');
                break;
            case '{shift}':
                this.state.set(this.state() === 'shift' ? 'normal' : 'shift');
                break;
            case '{backspace}':
                input_el.value = `${str.substr(
                    0,
                    cursor_pos - 1,
                )}${str.substr(cursor_pos, str.length)}`;
                cursor_pos = Math.max(0, cursor_pos - 1);
                break;
            case '{space}':
                input_el.value = `${str.substr(
                    0,
                    cursor_pos,
                )}${' '}${str.substr(cursor_pos, str.length)}`;
                cursor_pos += 1;
                break;
            default:
                if (this.state() === 'shift') this.state.set('normal');
                input_el.value = `${str.substr(
                    0,
                    cursor_pos,
                )}${key}${str.substr(cursor_pos, str.length)}`;
                cursor_pos += 1;
        }
        input_el.dispatchEvent(new InputEvent('input'));
        this.updateKeyState();
        this.timeout(
            'focus',
            () => {
                this.focusInput();
                try {
                    input_el.setSelectionRange(cursor_pos, cursor_pos);
                } catch {
                    // Some input types do not expose cursor selection APIs.
                }
            },
            50,
        );
    }

    public updateKeyState() {
        this.keyset.set(
            this.keyset().map((_) =>
                _.map((k) =>
                    k.length > 1
                        ? k
                        : k[
                              this.state() !== 'normal'
                                  ? 'toUpperCase'
                                  : 'toLowerCase'
                          ](),
                ),
            ),
        );
        if (this._overlay_ref) this.renderKeyboard();
    }

    public syncNativeKeyboardState() {
        if (VirtualKeyboardComponent.enabled) {
            this.preventNativeKeyboard();
        } else {
            this.restoreNativeKeyboardState();
        }
    }

    public reposition() {
        if (!this._overlay_ref) return;
        const position = this.preferredPosition();
        if (position === this._position) return;
        this.close(true);
        this.open();
    }

    private renderKeyboard() {
        if (!this._overlay_ref) return;
        const overlay_el = this._overlay_ref.overlayElement;
        const should_animate = !this._keyboard_el;
        this.applyOverlayPosition();
        overlay_el.replaceChildren();
        const keyboard_el = document.createElement('div');
        keyboard_el.setAttribute('keyboard-view', '');
        keyboard_el.className =
            'border-base-200 bg-base-200 flex w-screen flex-col gap-[16px] p-[8px]';
        keyboard_el.style.background = 'var(--base-200)';
        keyboard_el.style.borderBottom =
            this._position === 'top' ? '1px solid var(--base-200)' : '';
        keyboard_el.style.borderTop =
            this._position === 'bottom' ? '1px solid var(--base-200)' : '';
        keyboard_el.style.display = 'flex';
        keyboard_el.style.flexDirection = 'column';
        keyboard_el.style.gap = '16px';
        keyboard_el.style.opacity = should_animate ? '0' : '1';
        keyboard_el.style.padding = '8px';
        keyboard_el.style.transition = `opacity ${FADE_DURATION}ms ease`;
        keyboard_el.style.width = '100vw';
        for (const row of this.keyset()) {
            const row_el = document.createElement('div');
            row_el.setAttribute('row', '');
            row_el.className = 'flex items-center justify-center gap-[8px]';
            row_el.style.alignItems = 'center';
            row_el.style.display = 'flex';
            row_el.style.gap = '8px';
            row_el.style.justifyContent = 'center';
            for (const key of row) {
                row_el.appendChild(this.renderKey(key));
            }
            keyboard_el.appendChild(row_el);
        }
        overlay_el.appendChild(keyboard_el);
        this._keyboard_el = keyboard_el;
        if (should_animate) {
            requestAnimationFrame(() => {
                if (this._keyboard_el === keyboard_el) {
                    keyboard_el.style.opacity = '1';
                }
            });
        }
    }

    private renderKey(key: string) {
        const button_el = document.createElement('button');
        button_el.setAttribute('key', key);
        button_el.setAttribute('tabindex', '0');
        button_el.type = 'button';
        button_el.className =
            'border-base-200 bg-base-100 relative cursor-pointer rounded-xl border p-[8px]';
        button_el.style.height = '56px';
        button_el.style.width =
            key[0] === '{' && key.length > 1 ? '160px' : '64px';
        button_el.style.transition = 'box-shadow 200ms, top 200ms';
        button_el.style.boxShadow = '0 4px 0 0.04px rgba(0, 0, 0, 0.1)';
        if (key === '{space}') {
            button_el.style.flex = '1';
            button_el.style.minWidth = '160px';
            button_el.style.maxWidth = '400px';
        }
        button_el.textContent = this.keyLabel(key);
        button_el.addEventListener('mousedown', (event) =>
            event.preventDefault(),
        );
        button_el.addEventListener('focus', () => this.focusInput());
        button_el.addEventListener('click', () => this.handleKeyPress(key));
        if (key === '{caps}') {
            const dot_el = document.createElement('div');
            dot_el.setAttribute('dot', '');
            dot_el.className = `absolute top-[8px] right-[8px] h-[8px] w-[8px] rounded-full ${
                this.state() !== 'normal' ? 'bg-success' : 'bg-base-200'
            }`;
            button_el.appendChild(dot_el);
        }
        return button_el;
    }

    private keyLabel(key: string) {
        return key === '{space}'
            ? 'Space'
            : key === '{caps}'
              ? 'Caps Lock'
              : key === '{backspace}'
                ? 'Backspace'
                : key;
    }

    private preventNativeKeyboard() {
        const input_el = this._element.nativeElement;
        if (!this._native_keyboard_prevented) {
            this._original_readonly = input_el.readOnly;
            this._original_inputmode = input_el.getAttribute('inputmode');
            this._native_keyboard_prevented = true;
        }
        input_el.readOnly = true;
        input_el.setAttribute('readonly', '');
        input_el.setAttribute('inputmode', 'none');
    }

    private restoreNativeKeyboardState() {
        if (!this._native_keyboard_prevented) return;
        const input_el = this._element.nativeElement;
        input_el.readOnly = this._original_readonly;
        if (this._original_readonly) {
            input_el.setAttribute('readonly', '');
        } else {
            input_el.removeAttribute('readonly');
        }
        if (this._original_inputmode === null) {
            input_el.removeAttribute('inputmode');
        } else {
            input_el.setAttribute('inputmode', this._original_inputmode);
        }
        this._native_keyboard_prevented = false;
    }

    private applyOverlayPosition() {
        if (!this._overlay_ref) return;
        const overlay_el = this._overlay_ref.overlayElement;
        overlay_el.style.position = 'fixed';
        overlay_el.style.left = '0';
        overlay_el.style.right = '0';
        overlay_el.style.width = '100vw';
        overlay_el.style.top = this._position === 'top' ? '0' : '';
        overlay_el.style.bottom = this._position === 'bottom' ? '0' : '';
    }

    private preferredPosition() {
        const box = this._element.nativeElement.getBoundingClientRect();
        const space_above = box.top;
        const space_below = window.innerHeight - box.bottom;
        return space_below >= space_above ? 'bottom' : 'top';
    }
}
