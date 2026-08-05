import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';

import { LocaleService } from '../lib/locale.service';

describe('LocaleService', () => {
    let spectator: SpectatorService<LocaleService>;
    const createService = createServiceFactory(LocaleService);

    const flush = () => new Promise((resolve) => setTimeout(resolve));

    function storeLocale(
        locale: string,
        mappings: Record<string, string>,
        cached_at = Date.now(),
    ) {
        localStorage.setItem(
            `APP.locale.${locale}`,
            JSON.stringify({ cached_at, locale, mappings }),
        );
    }

    beforeEach(() => {
        localStorage.clear();
        (global as any).fetch = vi.fn(async () => ({ ok: false }));
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        spectator = createService();
    });

    afterEach(() => {
        delete (global as any).fetch;
        vi.restoreAllMocks();
    });

    it('should default to en-AU', () => {
        expect(spectator.service.locale).toBe('en-AU');
        expect(spectator.service.getLocaleShort()).toBe('en');
        expect(spectator.service.default_locale).toBe('en-AU');
    });

    it('should return the key when there is no mapping', () => {
        expect(spectator.service.get('SOME.MISSING_KEY')).toBe(
            'SOME.MISSING_KEY',
        );
    });

    it('should persist the set locale', () => {
        spectator.service.setLocale('fr-FR');
        expect(spectator.service.locale).toBe('fr-FR');
        expect(spectator.service.getLocaleShort()).toBe('fr');
        expect(localStorage.getItem('APP.locale')).toBe('fr-FR');
    });

    it('should notify of locale changes', () => {
        const before = spectator.service.changes();
        spectator.service.setLocale('fr-FR');
        expect(spectator.service.changes()).toBeGreaterThan(before);
    });

    it('should use cached locale mappings from localStorage', async () => {
        storeLocale('fr-FR', { 'COMMON.HELLO': 'Bonjour' });
        spectator.service.setLocale('fr-FR');
        expect(spectator.service.get('COMMON.HELLO')).toBe('Bonjour');
    });

    it('should discard cached mappings older than the maximum age', async () => {
        const week_ago = Date.now() - 8 * 24 * 60 * 60 * 1000;
        storeLocale('fr-FR', { 'COMMON.HELLO': 'Bonjour' }, week_ago);
        spectator.service.setLocale('fr-FR');
        await flush();
        expect(spectator.service.get('COMMON.HELLO')).toBe('COMMON.HELLO');
        expect(localStorage.getItem('APP.locale.fr-FR')).toBe(null);
    });

    it('should replace cached mappings with the latest once loaded', async () => {
        storeLocale('fr-FR', { 'COMMON.HELLO': 'Bonjour' });
        (global as any).fetch = vi.fn(async () => ({
            ok: true,
            json: async () => ({ COMMON: { HELLO: 'Salut' } }),
        }));

        spectator.service.setLocale('fr-FR');
        // Cached value is displayed straight away...
        expect(spectator.service.get('COMMON.HELLO')).toBe('Bonjour');
        await flush();

        // ...and replaced with the latest, which is cached for the next load.
        expect(global.fetch).toHaveBeenCalledWith('assets/locale/fr-FR.json');
        expect(spectator.service.get('COMMON.HELLO')).toBe('Salut');
        expect(
            JSON.parse(localStorage.getItem('APP.locale.fr-FR')).mappings,
        ).toEqual({ 'COMMON.HELLO': 'Salut' });
    });

    it('should keep cached mappings when the latest fail to load', async () => {
        storeLocale('fr-FR', { 'COMMON.HELLO': 'Bonjour' });
        spectator.service.setLocale('fr-FR');
        await flush();
        expect(global.fetch).toHaveBeenCalled();
        expect(spectator.service.get('COMMON.HELLO')).toBe('Bonjour');
    });

    it('should fetch locale mappings when not cached', async () => {
        (global as any).fetch = vi.fn(async () => ({
            ok: true,
            json: async () => ({ COMMON: { HELLO: 'Hola' } }),
        }));
        spectator.service.setLocale('es-ES');
        await flush();
        expect(global.fetch).toHaveBeenCalledWith(
            'assets/locale/es-ES.json',
        );
        expect(spectator.service.get('COMMON.HELLO')).toBe('Hola');
    });

    it('should interpolate arguments into translations', async () => {
        storeLocale('fr-FR', {
            'COMMON.GREET': 'Bonjour {{ name }}',
        });
        spectator.service.setLocale('fr-FR');
        await flush();
        expect(
            spectator.service.get('COMMON.GREET', { name: 'Alex' }),
        ).toBe('Bonjour Alex');
    });

    it('should handle plural mappings', async () => {
        storeLocale('fr-FR', {
            'COMMON.ITEM': 'un objet',
            'COMMON.ITEM_2': 'deux objets',
            'COMMON.ITEM_N': 'des objets',
        });
        spectator.service.setLocale('fr-FR');
        await flush();
        expect(spectator.service.get('COMMON.ITEM', {}, 2)).toBe(
            'deux objets',
        );
        expect(spectator.service.get('COMMON.ITEM', {}, 5)).toBe(
            'des objets',
        );
        expect(spectator.service.get('COMMON.ITEM')).toBe('un objet');
    });

    it('should fall back to the key when locale loading fails', async () => {
        spectator.service.setLocale('de-DE');
        await flush();
        expect(spectator.service.get('COMMON.HELLO')).toBe('COMMON.HELLO');
    });
});
