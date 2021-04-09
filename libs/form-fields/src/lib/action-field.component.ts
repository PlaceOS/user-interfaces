import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'an-action-field',
    template: `
        <div
            class="flex items-center rounded p-2 border border-gray-300 hover:border-black"
            role="button"
            [attr.disabled]="disabled"
            form-field
            tabindex="0"
            (keydown.enter)="performAction()"
        >
            <div
                placeholder
                class="flex-1 w-0 truncate"
                (click)="performAction()"
                [innerHTML]="placeholder | safe"
            ></div>
            <app-icon class="text-xl" (click)="performAction()">
                arrow_drop_{{ show_tooltip ? 'up' : 'down' }}
            </app-icon>
        </div>
    `,
    styles: [
        `
            :host > div:hover {
                box-shadow: inset 0 0 0 1px #000;
            }
        `,
    ],
})
export class ActionFieldComponent {
    /** Name of the field */
    @Input() public name: string;
    /** Value to display on the field */
    @Input() public placeholder: string;
    /** Whether form field is disabled */
    @Input() public disabled: boolean;
    /** Emitter for user interaction events */
    @Output('onAction') public on_action = new EventEmitter();
    /** Whether to show tooltip */
    public show_tooltip = false;

    /**
     * Emit that the user has performed an action on the field
     */
    public performAction() {
        this.show_tooltip = !this.show_tooltip;
        this.on_action.emit();
    }
}
