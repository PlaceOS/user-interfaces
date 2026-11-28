import { ModuleCallFailed } from '@placeos/common';

import { errorText } from '../app/error-text';

describe('errorText', () => {
    it('should use the error message when there is one', () => {
        expect(errorText(new Error('busy'))).toBe('busy');
        expect(errorText({ message: 'not found' })).toBe('not found');
        expect(errorText('offline')).toBe('offline');
    });

    it('should use the driver message of a failed module call', () => {
        const error = new ModuleCallFailed(
            {
                kind: 'server',
                code: 'unexpected_failure',
                status: 500,
                message: 'camera was busy',
            },
            'sys-1 Camera_1.stop',
        );
        expect(errorText(error)).toBe('camera was busy');
        expect(
            errorText(new ModuleCallFailed({ kind: 'stopped' }, 'sys-1')),
        ).toBe('sys-1: stopped');
    });

    it('should fall back to the error code or status', () => {
        expect(errorText({ code: 3, msg: 'Codec busy' })).toBe('Codec busy');
        expect(errorText({ code: 500 })).toBe('500');
        expect(errorText({ status: 404 })).toBe('404');
        expect(errorText(undefined)).toBe('unknown');
    });
});
