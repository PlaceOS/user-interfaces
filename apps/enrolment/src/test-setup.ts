import { defineGlobalsInjections } from '@ngneat/spectator';
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { MockPipe } from 'ng-mocks';

setupZoneTestEnv();

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
