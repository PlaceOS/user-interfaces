import { defineGlobalsInjections, Spectator } from '@ngneat/spectator';
import {
    LocaleService,
    setNotifyOutlet,
    setTranslationService,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { MockPipe } from 'ng-mocks';
import { TextDecoder, TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

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
setTranslationService(new LocaleService());

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
