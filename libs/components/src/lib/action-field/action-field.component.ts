import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'an-action-field',
    template: `
        <div
            class="action-field"
            role="button"
            [attr.disabled]="disabled"
            form-field
            tabindex="0"
            (keydown.enter)="performAction()"
        >
            <div class="display" (click)="performAction()" [innerHTML]="placeholder | safe"></div>
            <div class="icon" (click)="performAction()">
                <app-icon
                    [icon]="{
                        type: 'icon',
                        class: 'material-icons',
                        content: show_tooltip ? 'arrow_drop_up' : 'arrow_drop_down'
                    }"
                ></app-icon>
            </div>
        </div>
    `,
    styleUrls: ['./action-field.component.scss'],
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
