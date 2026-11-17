import {
    createDirectiveFactory,
    SpectatorDirective,
} from '@ngneat/spectator/vitest';

import { PulseOnChangeDirective } from '../../app/ui/pulse-on-change.directive';

describe('PulseOnChangeDirective', () => {
    let spectator: SpectatorDirective<
        PulseOnChangeDirective,
        { status: string }
    >;

    const createDirective = createDirectiveFactory(PulseOnChangeDirective);

    it('should pulse when the value changes, but not for the first value', () => {
        spectator = createDirective(
            `<span [pulseOnChange]="status">{{ status }}</span>`,
            { hostProps: { status: 'tentative' } },
        );
        expect(spectator.element).not.toHaveClass('motion-pulse');

        spectator.setHostInput({ status: 'approved' });
        expect(spectator.element).toHaveClass('motion-pulse');
    });
});
