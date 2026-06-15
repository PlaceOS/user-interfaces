import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
    signal,
} from '@angular/core';
import { IconComponent } from 'libs/components/src/lib/icon.component';

@Component({
    selector: 'an-action-field',
    template: `
        <button
            class="border-base-200 hover:border-base-200 flex w-full items-center rounded-sm border p-2"
            type="button"
            role="button"
            [attr.disabled]="disabled()"
            [attr.name]="name()"
            form-field
            tabindex="0"
            (keydown.enter)="performAction()"
        >
            <div
                placeholder
                class="w-0 flex-1 truncate"
                (click)="performAction()"
            >
                <ng-content></ng-content>
            </div>
            <icon class="text-xl" (click)="performAction()">
                arrow_drop_{{ show_tooltip() ? 'up' : 'down' }}
            </icon>
        </button>
    `,
    styles: [
        `
            :host > div:hover {
                box-shadow: inset 0 0 0 1px #000;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IconComponent],
})
export class ActionFieldComponent {
    /** Name of the field */
    public readonly name = input<string>(undefined);
    /** Whether form field is disabled */
    public readonly disabled = input<boolean>(undefined);
    /** Emitter for user interaction events */
    public readonly on_action = output({ alias: 'onAction' });
    /** Whether to show tooltip */
    public readonly show_tooltip = signal(false);

    /**
     * Emit that the user has performed an action on the field
     */
    public performAction() {
        this.show_tooltip.update((state) => !state);
        this.on_action.emit();
    }
}
