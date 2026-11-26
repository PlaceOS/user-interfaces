import { formatDate } from '@angular/common';
import { registerActiveLocale } from '../lib/locale-data';

describe('registerActiveLocale', () => {
    // Every app translation has Angular locale data, so dates can format
    it.each(['ar', 'es', 'fr', 'it', 'ja', 'pt', 'zh'])(
        'registers the date data for %s',
        async (locale) => {
            await registerActiveLocale(locale);
            expect(() => formatDate(0, 'short', locale)).not.toThrow();
        },
    );
});
