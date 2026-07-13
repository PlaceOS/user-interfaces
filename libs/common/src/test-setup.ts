import { defineGlobalsInjections } from '@ngneat/spectator';
import { TextDecoder, TextEncoder } from 'util';

import { setNotifyOutlet } from './lib/notifications';
import { installTestStorage } from './test-storage';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;
installTestStorage();

setNotifyOutlet(null, true);

defineGlobalsInjections({});
