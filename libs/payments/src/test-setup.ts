import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { TextDecoder, TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

setNotifyOutlet(null, true);
