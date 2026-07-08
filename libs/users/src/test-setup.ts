import { installTestStorage } from 'libs/common/src/test-storage';
import { defineGlobalsInjections } from '@ngneat/spectator';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { MockPipe } from 'ng-mocks';
import { TextDecoder, TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;
installTestStorage();

setNotifyOutlet(null, true);

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
