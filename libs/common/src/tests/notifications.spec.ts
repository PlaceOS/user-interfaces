import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import type { Mock } from 'vitest';

import {
    notify,
    notifyError,
    notifyInfo,
    notifySuccess,
    notifyWarn,
    setNotifyOutlet,
} from '../lib/notifications';

describe('notifications', () => {
    let snackbar: MatSnackBar;
    let on_action: Subject<void>;
    let snackbar_ref: { onAction: Mock; dismiss: Mock };

    beforeEach(() => {
        on_action = new Subject();
        snackbar_ref = {
            onAction: vi.fn(() => on_action.asObservable()),
            dismiss: vi.fn(),
        };
        snackbar = { open: vi.fn(() => snackbar_ref) } as any;
        setNotifyOutlet(snackbar, true);
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should open a snackbar with the given type and message', () => {
        notify('success', 'Job done');
        expect(snackbar.open).toHaveBeenCalledWith(
            'Job done',
            'OK',
            expect.objectContaining({
                panelClass: ['success'],
                duration: 5000,
            }),
        );
    });

    it('should allow overriding snackbar config', () => {
        notify('info', 'Message', 'OK', undefined, { duration: 100 });
        expect(snackbar.open).toHaveBeenCalledWith(
            'Message',
            'OK',
            expect.objectContaining({ duration: 100 }),
        );
    });

    it('should call the action callback when the action is triggered', () => {
        const callback = vi.fn();
        notify('info', 'Message', 'Undo', callback);
        on_action.next();
        expect(callback).toHaveBeenCalled();
    });

    it('should dismiss the snackbar when no action callback given', () => {
        notify('info', 'Message');
        on_action.next();
        expect(snackbar_ref.dismiss).toHaveBeenCalled();
    });

    it('should do nothing when no outlet is set', () => {
        setNotifyOutlet(null as any, true);
        expect(() => notify('info', 'Message')).not.toThrow();
    });

    it('should map helper functions to notification types', () => {
        notifySuccess('Success');
        notifyError('Error');
        notifyWarn('Warn');
        notifyInfo('Info');
        const types = vi.mocked(snackbar.open).mock.calls.map(
            ([, , config]) => config.panelClass[0],
        );
        expect(types).toEqual(['success', 'error', 'warn', 'info']);
    });

    it('should extract error messages from non-string errors', () => {
        notifyError({ message: 'Broken' } as any);
        expect(snackbar.open).toHaveBeenCalledWith(
            'Broken',
            'OK',
            expect.anything(),
        );
        notifyError({} as any);
        expect(snackbar.open).toHaveBeenLastCalledWith(
            'An error occurred',
            'OK',
            expect.anything(),
        );
    });
});
