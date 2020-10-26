import { MatSnackBar } from '@angular/material/snack-bar';

import { ApplicationIcon } from './types';

let _service: MatSnackBar;

export function setNotifyOutlet(snackbar: MatSnackBar) {
    _service = snackbar;
}

/**
 * Create notification popup
 * @param type CSS Class to add to the notification
 * @param message Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 * @param icon Icon to render to the left of the notification message
 */
export function notify(
    type: string,
    message: string,
    action: string = 'OK',
    on_action?: () => void,
    icon: ApplicationIcon = {
        type: 'icon',
        class: 'material-icons',
        content: 'info',
    }
): void {
    if (!_service) {
        throw new Error("Snackbar service hasn't been initialised");
    }
    const snackbar_ref = _service.open(message, action, {
        panelClass: [type],
        duration: 5000,
    });
    if (action) {
        on_action = on_action || (() => snackbar_ref.dismiss());
        snackbar_ref.onAction().subscribe(() => on_action());
    }
}

/**
 * Create success notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 */
export function notifySuccess(msg: string, action?: string, on_action?: () => void): void {
    const icon: ApplicationIcon = {
        type: 'icon',
        class: 'material-icons',
        content: 'done',
    };
    console.debug(msg);
    notify('success', msg, action, on_action, icon);
}

/**
 * Create error notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 */
export function notifyError(msg: string, action?: string, on_action?: () => void): void {
    const icon: ApplicationIcon = {
        type: 'icon',
        class: 'material-icons',
        content: 'error',
    };
    console.error(msg);
    notify('error', msg, action, on_action, icon);
}

/**
 * Create warning notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 */
export function notifyWarn(msg: string, action?: string, on_action?: () => void): void {
    const icon: ApplicationIcon = {
        type: 'icon',
        class: 'material-icons',
        content: 'warning',
    };
    console.warn(msg);
    notify('warn', msg, action, on_action, icon);
}

/**
 * Create info notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 */
export function notifyInfo(msg: string, action?: string, on_action?: () => void): void {
    console.info(msg);
    notify('info', msg, action, on_action);
}
