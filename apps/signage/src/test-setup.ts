globalThis.ngJest = {
    testEnvironmentOptions: {
        errorOnUnknownElements: true,
        errorOnUnknownProperties: true,
    },
};
import { defineGlobalsInjections } from '@ngneat/spectator';
import { TranslatePipe } from '@placeos/components';
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
import { MockPipe } from 'ng-mocks';

setupZoneTestEnv();

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
