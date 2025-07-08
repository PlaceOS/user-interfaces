import { Component, input, output } from '@angular/core';
import { ApplicationIcon, AsyncHandler } from '@placeos/common';

export interface PopoutAction extends ApplicationIcon {
    /** ID of the action */
    id: string;
}

@Component({
    selector: 'a-popout-menu',
    template: `
        @for (item of actions(); track item; let i = $index) {
            <button
                icon
                matRipple
                class="small center absolute text-base shadow"
                [style.top]="show ? -110 * i - 60 + '%' : ''"
                (click)="action.emit(item.id); show = false"
            >
                <icon [icon]="item"></icon>
            </button>
        }
        <button
            name="root"
            icon
            matRipple
            [class.show]="show"
            (click)="show = !show"
            (window:click)="show ? close() : ''"
        >
            <icon>{{ show ? 'add' : 'more_vert' }}</icon>
        </button>
    `,
    styles: [
        `
            :host {
                position: relative;
            }

            icon {
                transition: transform 200ms;
            }

            button {
                background-color: #fff;
                color: rgba(#000, 0.85);
                font-size: 1.25rem;
                height: 2.5em;
                width: 2.5em;
            }

            button.show icon {
                transform: rotate(45deg);
            }

            button.small {
                transition:
                    top 200ms,
                    left 200ms;
            }
        `,
    ],
    standalone: false,
})
export class PopoutMenuComponent extends AsyncHandler {
    /** List of available actions */
    public readonly actions = input<PopoutAction[]>([]);
    /** Emitter for user actions */
    public readonly action = output<string>();
    /** Whether actions should show */
    public show: boolean;

    public close() {
        this.timeout('close', () => (this.show = false));
    }
}
