import { of } from 'rxjs';

import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { checkFile, matchesAccept } from '../lib/file-checks';

const file = (name: string, type: string, size = 10) =>
    new File([new Uint8Array(size)], name, { type });

describe('file checks', () => {
    const notify_open = vi.fn(() => ({
        onAction: () => of(),
        dismiss: vi.fn(),
    }));

    beforeEach(() => {
        notify_open.mockClear();
        setNotifyOutlet({ open: notify_open } as any, true);
    });

    afterEach(() => setNotifyOutlet(null, true));

    it('should match accept rules by extension, type group and exact type', () => {
        expect(matchesAccept(file('a.PDF', ''), '.pdf')).toBe(true);
        expect(matchesAccept(file('a.png', 'image/png'), 'image/*')).toBe(true);
        expect(matchesAccept(file('a.csv', 'text/csv'), 'text/csv')).toBe(true);
        expect(matchesAccept(file('a.pdf', 'application/pdf'), 'image/*')).toBe(
            false,
        );
        expect(matchesAccept(file('a.pdf', 'application/pdf'), '')).toBe(true);
    });

    it('should reject a file of the wrong type or over the size limit', () => {
        const png = file('a.png', 'image/png', 2048);
        expect(checkFile(png, { accept: 'image/*', max_size: 4096 })).toBe(
            true,
        );
        expect(checkFile(png, { accept: '.pdf' })).toBe(false);
        expect(checkFile(png, { max_size: 1024 })).toBe(false);
        expect(notify_open).toHaveBeenCalledTimes(2);
    });
});
