import 'jest-preset-angular/setup-jest';
import { defineGlobalsInjections } from '@ngneat/spectator';
import { MockPipe } from 'ng-mocks';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
