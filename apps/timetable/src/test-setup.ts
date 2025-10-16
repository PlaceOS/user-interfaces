import { defineGlobalsInjections } from '@ngneat/spectator';
import { setNotifyOutlet } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
import { MockPipe } from 'ng-mocks';
import { TextDecoder, TextEncoder } from 'util';

setupZoneTestEnv();

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

setNotifyOutlet(null, true);

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
