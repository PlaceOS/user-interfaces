// Unit test setup for apps that use `@placeos/components`.
// Load it after `test-setup-base.ts` in the `setupFiles` of the test target.
// Adds a mock translate pipe to every Spectator test.
import { defineGlobalsInjections } from '@ngneat/spectator';
// A deep import, not the `@placeos/components` barrel. See
// `test-setup-base.ts`.
import { MockPipe } from 'ng-mocks';
import { TranslatePipe } from '../libs/components/src/lib/translate.pipe';

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
