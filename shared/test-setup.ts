// Unit test setup for apps that use `@placeos/components`.
// Load it after `test-setup-base.ts` in the `setupFiles` of the test target.
// Adds a mock translate pipe to every Spectator test.
import { defineGlobalsInjections } from '@ngneat/spectator';
import { TranslatePipe } from '@placeos/components';
import { MockPipe } from 'ng-mocks';

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
