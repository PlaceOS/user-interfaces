import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

import { defineGlobalsInjections } from '@ngneat/spectator';
import { MockPipe } from 'ng-mocks';
import { TextDecoder, TextEncoder } from 'util';

import { TranslatePipe } from '@placeos/components';
import { setNotifyOutlet } from './lib/notifications';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

setNotifyOutlet(null, true);

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
