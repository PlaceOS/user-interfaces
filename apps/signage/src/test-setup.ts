// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
    testEnvironmentOptions: {
        errorOnUnknownElements: true,
        errorOnUnknownProperties: true,
    },
};
import { defineGlobalsInjections } from '@ngneat/spectator';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import 'jest-preset-angular/setup-jest';
import { MockPipe } from 'ng-mocks';

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
