import { defineGlobalsInjections } from '@ngneat/spectator';
import { TextDecoder, TextEncoder } from 'util';

import { setNotifyOutlet } from './lib/notifications';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

setNotifyOutlet(null, true);

defineGlobalsInjections({});
