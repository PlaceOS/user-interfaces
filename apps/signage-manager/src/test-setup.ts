import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
import { LocaleService, setTranslationService } from '@placeos/common';

setupZoneTestEnv({
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
});

setTranslationService(new LocaleService());
