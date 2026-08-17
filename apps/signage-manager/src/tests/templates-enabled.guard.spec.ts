import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, UrlTree } from '@angular/router';
import { OrganisationService, SettingsService } from '@placeos/common';
import { templatesEnabledGuard } from '../app/templates-enabled.guard';

describe('templatesEnabledGuard', () => {
    const get = vi.fn();
    const wait_until_initialised = vi.fn().mockResolvedValue(undefined);

    function runGuard() {
        return TestBed.runInInjectionContext(
            () =>
                templatesEnabledGuard({} as any, {} as any) as Promise<
                    boolean | UrlTree
                >,
        );
    }

    beforeEach(() => {
        get.mockReset();
        wait_until_initialised.mockResolvedValue(undefined);
        TestBed.configureTestingModule({
            providers: [
                provideRouter([]),
                {
                    provide: OrganisationService,
                    useValue: {
                        waitUntilInitialised: wait_until_initialised,
                    },
                },
                { provide: SettingsService, useValue: { get } },
            ],
        });
    });

    it('allows access when the templates flag is enabled', async () => {
        get.mockReturnValue(true);

        await expect(runGuard()).resolves.toBe(true);
        expect(get).toHaveBeenCalledWith('app.templates_enabled');
    });

    it('redirects to media when the templates flag is disabled', async () => {
        get.mockReturnValue(false);

        const router = TestBed.inject(Router);
        const result = await runGuard();

        expect(router.serializeUrl(result as UrlTree)).toBe('/media');
    });

    it('waits for the org (and its settings overrides) before checking', async () => {
        let resolve_init: () => void;
        wait_until_initialised.mockImplementationOnce(
            () =>
                new Promise<void>((resolve) => {
                    resolve_init = resolve;
                }),
        );
        get.mockReturnValue(true);

        const guard_result = runGuard();
        let resolved = false;
        guard_result.then(() => (resolved = true));

        await Promise.resolve();
        expect(resolved).toBe(false);
        expect(get).not.toHaveBeenCalled();

        resolve_init!();
        await expect(guard_result).resolves.toBe(true);
    });
});
