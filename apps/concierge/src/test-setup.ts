import 'jest-preset-angular/setup-jest';

import { TextEncoder, TextDecoder } from 'util';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { MockPipe } from 'ng-mocks';
import { defineGlobalsInjections } from '@ngneat/spectator';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

setNotifyOutlet(null, true);

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
