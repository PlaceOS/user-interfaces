import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

import { defineGlobalsInjections } from '@ngneat/spectator';
import { TextDecoder, TextEncoder } from 'util';

import { setNotifyOutlet } from './lib/notifications';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

setNotifyOutlet(null, true);

defineGlobalsInjections({});
