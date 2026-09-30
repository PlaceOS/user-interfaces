import { defineGlobalsInjections, Spectator } from '@ngneat/spectator';
import { installTestStorage } from 'libs/common/src/test-storage';
// Deep imports, not the @placeos/* barrels: importing a barrel here preloads
// every module it re-exports (e.g. shorten.fn) and binds their ts-client
// references before a spec file's `vi.mock('@placeos/ts-client')` can apply,
// which makes those calls hit real HTTP and hang depending on file order.
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { MockPipe } from 'ng-mocks';
import { TextDecoder, TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;
installTestStorage();

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

// Timers that a spec leaves running (for example Material's label resize
// timer or ts-client's re-authorise timer) can fire after the test
// environment is torn down, when `window` and `document` no longer exist.
// That fails the whole run with an unhandled error. Track the timers each
// file starts and clear any that are still pending when the file ends.
const pending_timers = new Set<ReturnType<typeof setTimeout>>();
const _setTimeout = globalThis.setTimeout;
const _setInterval = globalThis.setInterval;
const _clearTimeout = globalThis.clearTimeout;
const _clearInterval = globalThis.clearInterval;
globalThis.setTimeout = ((handler: (...args: any[]) => void, ms, ...args) => {
    const id = _setTimeout(
        (...run_args: any[]) => {
            pending_timers.delete(id);
            handler(...run_args);
        },
        ms,
        ...args,
    );
    pending_timers.add(id);
    return id;
}) as typeof setTimeout;
globalThis.setInterval = ((handler, ms, ...args) => {
    const id = _setInterval(handler, ms, ...args);
    pending_timers.add(id);
    return id;
}) as typeof setInterval;
globalThis.clearTimeout = ((id) => {
    pending_timers.delete(id);
    _clearTimeout(id);
}) as typeof clearTimeout;
globalThis.clearInterval = ((id) => {
    pending_timers.delete(id);
    _clearInterval(id);
}) as typeof clearInterval;
afterAll(() => {
    for (const id of pending_timers) _clearTimeout(id);
    pending_timers.clear();
});

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
