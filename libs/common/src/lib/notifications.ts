import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

let _service: MatSnackBar;
let _disable_logging = false;

declare let jest: any;

export function setNotifyOutlet(
    snackbar: MatSnackBar,
    disable_logging = false
) {
    _service = snackbar;
    _disable_logging = disable_logging;
}

/**
 * Create notification popup
 * @param type CSS Class to add to the notification
 * @param message Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 * @param config Configuration details to pass to the snackbar
 */
export function notify(
    type: string,
    message: string,
    action: string = 'OK',
    on_action?: () => void,
    config: Partial<MatSnackBarConfig> = {}
): void {
    if (!_service) {
        return (
            !_disable_logging &&
            console.warn("Snackbar service hasn't been initialised")
        );
    }
    const snackbar_ref = _service.open(message, action, {
        panelClass: [type],
        duration: 5000,
        ...config,
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
 * @param config Configuration details to pass to the snackbar
 */
export function notifySuccess(
    msg: string,
    action?: string,
    on_action?: () => void,
    config: Partial<MatSnackBarConfig> = {}
): void {
    !_disable_logging && console.debug(msg);
    if (typeof msg !== 'string') msg = 'Success';
    notify('success', msg, action, on_action, config);
}

/**
 * Create error notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 * @param config Configuration details to pass to the snackbar
 */
export function notifyError(
    msg: string,
    action?: string,
    on_action?: () => void,
    config: Partial<MatSnackBarConfig> = {}
): void {
    !_disable_logging && console.debug(msg);
    if (typeof msg !== 'string')
        msg =
            (msg as any)?.error || (msg as any)?.message || 'An error occurred';
    notify('error', msg, action, on_action, config);
}

/**
 * Create warning notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 * @param config Configuration details to pass to the snackbar
 */
export function notifyWarn(
    msg: string,
    action?: string,
    on_action?: () => void,
    config: Partial<MatSnackBarConfig> = {}
): void {
    !_disable_logging && console.debug(msg);
    notify('warn', msg, action, on_action, config);
}

/**
 * Create info notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 * @param config Configuration details to pass to the snackbar
 */
export function notifyInfo(
    msg: string,
    action?: string,
    on_action?: () => void,
    config: Partial<MatSnackBarConfig> = {}
): void {
    !_disable_logging && console.debug(msg);
    notify('info', msg, action, on_action, config);
}
