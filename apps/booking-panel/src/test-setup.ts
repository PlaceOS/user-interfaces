import 'jest-preset-angular/setup-jest';
import '@angular/localize/init';
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import { defineGlobalsInjections } from '@ngneat/spectator';
import { MockModule } from 'ng-mocks';
import { TranslateModule } from '@ngx-translate/core';

defineGlobalsInjections({
    imports: [MockModule(TranslateModule.forRoot())],
});
