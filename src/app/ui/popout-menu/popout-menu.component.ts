import { Component, Input, Output, EventEmitter } from '@angular/core';

import { BaseClass } from '../../common/base.class';
import { ApplicationIcon } from '../../common/types';

export interface PopoutAction extends ApplicationIcon {
    /** ID of the action */
    id: string;
}

@Component({
    selector: 'a-popout-menu',
    templateUrl: './popout-menu.component.html',
    styleUrls: ['./popout-menu.component.scss']
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
