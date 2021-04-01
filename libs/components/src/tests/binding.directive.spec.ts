import {
    createDirectiveFactory,
    SpectatorDirective,
} from '@ngneat/spectator/jest';
import { BindingDirective } from '../lib/binding.directive';

describe('BindingDirective', () => {
    let spectator: SpectatorDirective<BindingDirective>;
    const createDirective = createDirectiveFactory(BindingDirective);

    beforeEach(() => {
        spectator = createDirective(
            `<div binding>Testing Binding Directive</div>`
        );
    });

    it('should create an instance', () => {
        expect(spectator.directive).toBeTruthy();
    });
});
