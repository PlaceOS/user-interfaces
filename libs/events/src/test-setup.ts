import { defineGlobalsInjections } from '@ngneat/spectator';
import { MockPipe } from 'ng-mocks';
import { TextDecoder, TextEncoder } from 'util';

import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

setNotifyOutlet(null, true);

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
