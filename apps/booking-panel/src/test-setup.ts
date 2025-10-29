import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

import { defineGlobalsInjections } from '@ngneat/spectator';
import { setNotifyOutlet } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { MockPipe } from 'ng-mocks';
import { TextDecoder, TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

setNotifyOutlet(null, true);

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
