import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MockProvider } from 'ng-mocks';

import { ChangelogModalComponent } from '../lib/changelog-modal.component';
import { ChangelogService } from '../lib/changelog.service';

describe('ChangelogService', () => {
    const dialog = { open: vi.fn() };

    function createService() {
        TestBed.configureTestingModule({
            providers: [
                ChangelogService,
                MockProvider(MatDialog, dialog),
                {
                    provide: DOCUMENT,
                    useValue: {
                        baseURI: 'https://example.com/apps/workplace/',
                    } as Document,
                },
            ],
        });
        return TestBed.inject(ChangelogService);
    }

    beforeEach(() => {
        dialog.open.mockClear();
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('loads the changelog deployed with the application', async () => {
        const fetch_spy = vi
            .fn()
            .mockResolvedValue(new Response('# Application changelog'));
        vi.stubGlobal('fetch', fetch_spy);

        const service = createService();
        await vi.waitFor(() => expect(service.available()).toBe(true));

        expect(fetch_spy).toHaveBeenCalledWith(
            new URL('https://example.com/apps/workplace/CHANGELOG.md'),
        );
        service.view();
        expect(dialog.open).toHaveBeenCalledWith(ChangelogModalComponent, {
            data: { changelog: '# Application changelog' },
        });
    });

    it('stays unavailable when the deployed changelog does not exist', async () => {
        const fetch_spy = vi
            .fn()
            .mockResolvedValue(new Response('', { status: 404 }));
        vi.stubGlobal('fetch', fetch_spy);

        const service = createService();
        await vi.waitFor(() => expect(fetch_spy).toHaveBeenCalled());
        service.view();

        expect(service.available()).toBe(false);
        expect(dialog.open).not.toHaveBeenCalled();
    });
});
