import 'jest-preset-angular/setup-jest';
import '@angular/localize/init';
import { TextEncoder, TextDecoder } from 'util';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

setNotifyOutlet(null, true);

import { defineGlobalsInjections } from '@ngneat/spectator';
import { MockModule } from 'ng-mocks';
import { TranslateModule } from '@ngx-translate/core';

defineGlobalsInjections({
    imports: [MockModule(TranslateModule.forRoot())],
});
