import 'jest-preset-angular/setup-jest';
import { TextEncoder, TextDecoder } from 'util';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

setNotifyOutlet(null, true);
