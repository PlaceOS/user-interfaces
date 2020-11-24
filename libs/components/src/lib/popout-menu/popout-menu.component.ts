import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApplicationIcon, BaseClass } from '@user-interfaces/common';

export interface PopoutAction extends ApplicationIcon {
    /** ID of the action */
    id: string;
}

@Component({
    selector: 'a-popout-menu',
    template: `
        <button
            mat-icon-button
            class="small shadow"
            *ngFor="let item of actions; let i = index"
            [style.top]="show ? -110 * i - 60 + '%' : ''"
            (click)="action.emit(item.id); show = false"
        >
            <app-icon [icon]="item"></app-icon>
        </button>
        <button
            mat-icon-button
            [class.show]="show"
            (click)="show = !show"
            (window:click)="show ? close() : ''"
        >
            <app-icon
                [icon]="{
                    class: 'material-icons',
                    content: show ? 'add' : 'more_vert'
                }"
            ></app-icon>
        </button>
    `,
    styles: [
        `
            :host {
                position: relative;
            }

            app-icon {
                transition: transform 200ms;
            }

            button {
                background-color: #fff;
                color: rgba(#000, 0.85);
                font-size: 1.25rem;
                height: 2.5em;
                width: 2.5em;
            }

            button.show app-icon {
                transform: rotate(45deg);
            }

            button.small {
                position: absolute;
                font-size: 1rem;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: top 200ms, left 200ms;
            }
        `,
    ],
})
export class PopoutMenuComponent extends BaseClass {
    /** List of available actions */
    @Input() public actions: PopoutAction[] = [];
    /** Emitter for user actions */
    @Output() public action = new EventEmitter<string>();
    /** Whether actions should show */
    public show: boolean;

    public close() {
        this.timeout('close', () => {
            this.show = false;
        });
    }
}
