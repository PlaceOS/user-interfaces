import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

import { TextEncoder, TextDecoder } from 'util';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

setNotifyOutlet(null, true);
