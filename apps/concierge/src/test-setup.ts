import 'jest-preset-angular/setup-jest';
import '@angular/localize/init';

import { defineGlobalsInjections } from "@ngneat/spectator";
import { MockModule } from "ng-mocks";
import { TranslateModule } from '@ngx-translate/core';

defineGlobalsInjections({
    imports: [MockModule(TranslateModule.forRoot())],
});
