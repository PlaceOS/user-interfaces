import {
    createDirectiveFactory,
    SpectatorDirective,
} from '@ngneat/spectator/vitest';

import { PulseOnChangeDirective } from '../app/ui/pulse-on-change.directive';

describe('PulseOnChangeDirective', () => {
    let spectator: SpectatorDirective<
        PulseOnChangeDirective,
        { count: number }
    >;

    const createDirective = createDirectiveFactory(PulseOnChangeDirective);

    it('pulses when the value changes, but not for the first value', () => {
        spectator = createDirective(
            `<span [pulseOnChange]="count">{{ count }}</span>`,
            { hostProps: { count: 1 } },
        );
        expect(spectator.element).not.toHaveClass('stagehand-pulse');

        spectator.setHostInput({ count: 2 });
        expect(spectator.element).toHaveClass('stagehand-pulse');
    });
});
