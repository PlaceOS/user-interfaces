import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'an-action-field',
  templateUrl: './action-field.component.html',
  styleUrls: ['./action-field.component.scss']
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
