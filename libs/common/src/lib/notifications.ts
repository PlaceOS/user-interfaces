import { EnvironmentInjector, inject } from '@angular/core';
import type {
    MatSnackBar,
    MatSnackBarConfig,
} from '@angular/material/snack-bar';

/** Loads the snackbar the first time a notification is shown */
export type SnackbarLoader = () => Promise<MatSnackBar>;

let _service: MatSnackBar | null = null;
let _loader: SnackbarLoader | null = null;
let _loading: Promise<MatSnackBar> | null = null;
let _disable_logging = false;
let _filter: NotifyFilter | null = null;

/** Decides whether a notification is shown. Return false to suppress it. */
export type NotifyFilter = (type: string, message: string) => boolean;

declare let jest: any;

/**
 * Set where notifications are shown. Pass a snackbar, or a loader from
 * `lazySnackbar()` to load Material's snackbar on the first notification.
 */
export function setNotifyOutlet(
    outlet: MatSnackBar | SnackbarLoader | null,
    disable_logging = false,
) {
    _service = typeof outlet === 'function' ? null : outlet;
    _loader = typeof outlet === 'function' ? outlet : null;
    _loading = null;
    _disable_logging = disable_logging;
}

/**
 * Loader for `setNotifyOutlet` that imports Material's snackbar on first use,
 * keeping it out of the initial bundle. Call in an injection context.
 */
export function lazySnackbar(): SnackbarLoader {
    const injector = inject(EnvironmentInjector);
    return () =>
        import('@angular/material/snack-bar').then(({ MatSnackBar }) =>
            injector.get(MatSnackBar),
        );
}

/**
 * Restrict which notifications reach the screen. An unattended display has no
 * one to read a popup and nothing it can do about one, so it can hide them
 * unless someone is debugging it. Pass null to show everything again.
 */
export function setNotifyFilter(filter: NotifyFilter | null) {
    _filter = filter;
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
    action = 'OK',
    on_action?: () => void,
    config: Partial<MatSnackBarConfig> = {},
): void {
    if (!_service && !_loader) {
        return (
            !_disable_logging &&
            console.warn("Snackbar service hasn't been initialised")
        );
    }
    if (_filter && !_filter(type, message)) {
        !_disable_logging && console.debug(`Suppressed ${type}: ${message}`);
        return;
    }
    const open = (snackbar: MatSnackBar) => {
        const snackbar_ref = snackbar.open(message, action, {
            panelClass: [type],
            duration: 5000,
            ...config,
        });
        if (action) {
            on_action = on_action || (() => snackbar_ref.dismiss());
            snackbar_ref.onAction().subscribe(() => on_action());
        }
    };
    if (_service) return open(_service);
    const loading = (_loading ??= _loader());
    loading.then(
        (snackbar) => {
            // Ignore the result if the outlet changed while it loaded
            if (_loading !== loading) return;
            _service = snackbar;
            open(snackbar);
        },
        (error) => {
            if (_loading === loading) _loading = null;
            console.error('Failed to load the snackbar', error);
        },
    );
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
    config: Partial<MatSnackBarConfig> = {},
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
    config: Partial<MatSnackBarConfig> = {},
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
    config: Partial<MatSnackBarConfig> = {},
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
    config: Partial<MatSnackBarConfig> = {},
): void {
    !_disable_logging && console.debug(msg);
    notify('info', msg, action, on_action, config);
}
