import { LocaleService } from './locale.service';

let _service: LocaleService;

export function setTranslationService(service: LocaleService) {
    _service = service;
}

export function i18n(key: string, args: Record<string, any> = {}) {
    if (!_service) return key;
    return _service.get(key, args);
}
