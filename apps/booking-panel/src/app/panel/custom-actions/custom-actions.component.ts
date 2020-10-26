import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getModule } from '@placeos/ts-client';
import { first } from 'rxjs/operators';

import { notifyError } from '@user-interfaces/common';
import {
    ConfirmModalComponent,
    CONFIRM_METADATA,
    ConfirmModalData,
} from '@user-interfaces/components';
import { EmbeddedControlModalComponent } from '../../overlays/embedded-control-modal/embedded-control-modal.component';
import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-custom-actions',
    templateUrl: './custom-actions.component.html',
    styleUrls: ['./custom-actions.component.scss'],
})
export class PanelCustomActionsComponent {
    /** Control URL of the active space */
    public control_url: string;
    /** Whether the user is able to open the control URL */
    public can_control: boolean;
    /** Whether space has catering */
    public catering: boolean;

    public get system_id() {
        return this._state.system;
    }

    constructor(private _dialog: MatDialog, private _state: PanelStateService) {}

    /**
     * Open confirmation modal for ending the meeting
     */
    public confirmWaiterCall() {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Call a waiter to your room?',
                    content: 'Call a waiter to your room to order catering',
                    icon: { class: 'material-icons', content: 'call' },
                },
            }
        );
        ref.componentInstance.event
            .pipe(first((_) => _.reason === 'done'))
            .subscribe(() => this.callWaiter());
    }

    /**
     * Execute call waiter logic on engine driver
     */
    public callWaiter() {
        if (this._state.system) {
            const module = getModule(this._state.system, 'Bookings');
            if (module) {
                module.execute('waiter_call', []).then(
                    (_) => {
                        // this.service.Analytics.event('Catering', 'waiter-call', (new Date).toISOString());
                    },
                    (e) => {
                        // this.service.Analytics.event('Catering', 'waiter-call-failed', (new Date).toISOString());
                        notifyError(`Error calling waiter. ${e}`);
                    }
                );
            }
        }
    }

    /**
     * Open modal to show embeded control URL
     */
    public openControl() {
        // this.service.Analytics.event('Control', 'open-view', (new Date).toISOString());
        this._dialog.open(EmbeddedControlModalComponent, {
            data: {
                control_url: this.control_url,
            },
        });
    }
}
