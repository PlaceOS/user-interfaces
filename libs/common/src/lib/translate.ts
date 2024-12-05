import { TranslateService } from '@ngx-translate/core';

let _service: TranslateService;

export function setTranslationService(pipe: TranslateService) {
    _service = pipe;
}

export function i18n(key: string, args: Record<string, any> = {}) {
    if (!_service) return key;
    return _service.instant(key, args);
}
