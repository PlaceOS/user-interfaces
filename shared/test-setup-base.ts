// Unit test setup shared by the apps. Apps that use `@placeos/components`
// also load `test-setup.ts` after this file. Add both as `setupFiles` (not
// imports): the root package marks modules as free of side effects, so the
// bundler drops side-effect-only imports.
import { defineGlobalsInjections, Spectator } from '@ngneat/spectator';
import { setNotifyOutlet } from '@placeos/common';
import { TextDecoder, TextEncoder } from 'util';
import { installTestStorage } from '../libs/common/src/test-storage';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
installTestStorage();

// Spectator turns off TestBed teardown by default, so root services are never
// destroyed. Their timers then fire after the test environment has gone and
// fail the run with an unhandled error. Destroy the testing module after each
// test so `ngOnDestroy` runs.
defineGlobalsInjections({ teardown: { destroyAfterEach: true } });

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
