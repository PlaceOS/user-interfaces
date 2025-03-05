import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

import { defineGlobalsInjections } from '@ngneat/spectator';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { MockPipe } from 'ng-mocks';
import { TextDecoder, TextEncoder } from 'util';
import { TranslatePipe } from './lib/translate.pipe';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

setNotifyOutlet(null, true);

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
