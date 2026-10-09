import { defineGlobalsInjections, Spectator } from '@ngneat/spectator';
import {
    LocaleService,
    setNotifyOutlet,
    setTranslationService,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { installTestStorage } from 'libs/common/src/test-storage';
import { MockPipe } from 'ng-mocks';
import * as EN_AU from 'shared/assets/locale/en-AU.json';
import { TextDecoder, TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;
installTestStorage();

// jsdom's `matchMedia` returns a MediaQueryList without the deprecated
// `addListener`/`removeListener` methods that Angular CDK's BreakpointObserver
// still calls, so provide a complete stub to avoid uncaught errors.
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
    }),
});

// Under the zoneless unit-test builder, `fixture.detectChanges()` only
// refreshes views that were explicitly marked dirty. Plain host-property
// changes (`setHostInput`), overridden getters and reassigned signals do not
// mark the root view, so the main CD pass skips them while dev-mode
// `checkNoChanges` still catches the new value -> NG0100. Emulate zone.js's
// full dirty-check by marking the fixture root for check before every
// `detectChanges()`.
const _dom_spectator_proto: any = Object.getPrototypeOf(Spectator.prototype);
const _original_detect_changes = _dom_spectator_proto.detectChanges;
_dom_spectator_proto.detectChanges = function () {
    try {
        this.fixture?.componentRef?.changeDetectorRef?.markForCheck();
    } catch {
        // ignore - fixture may not expose a componentRef
    }
    return _original_detect_changes.apply(this, arguments);
};

setNotifyOutlet(null, true);
// Translations are fetched at runtime. Seed the cached default locale so
// specs render English text.
function flattenLocale(value: object, path = ''): Record<string, string> {
    const out: Record<string, string> = {};
    for (const [key, item] of Object.entries(value)) {
        const id = path ? `${path}.${key}` : key;
        if (item instanceof Object) Object.assign(out, flattenLocale(item, id));
        else out[id] = `${item}`;
    }
    return out;
}
localStorage.setItem(
    'APP.locale.en-AU',
    JSON.stringify({
        cached_at: Date.now(),
        locale: 'en-AU',
        mappings: flattenLocale(EN_AU),
    }),
);
setTranslationService(new LocaleService());

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
