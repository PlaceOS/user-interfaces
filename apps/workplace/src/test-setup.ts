import 'jest-preset-angular/setup-jest';

import { defineGlobalsInjections } from '@ngneat/spectator';
import { MockModule } from 'ng-mocks';
import { TranslateModule } from '@ngx-translate/core';

import { TextEncoder, TextDecoder } from 'util';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

setNotifyOutlet(null, true);

defineGlobalsInjections({
    imports: [MockModule(TranslateModule.forRoot())],
});
