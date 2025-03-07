// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
    testEnvironmentOptions: {
        errorOnUnknownElements: true,
        errorOnUnknownProperties: true,
    },
};
import { defineGlobalsInjections } from '@ngneat/spectator';
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { MockPipe } from 'ng-mocks';

setupZoneTestEnv();

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
