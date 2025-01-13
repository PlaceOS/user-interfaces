import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();
import { defineGlobalsInjections } from '@ngneat/spectator';
import { MockPipe } from 'ng-mocks';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
