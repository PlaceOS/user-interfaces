import { createPipeFactory, SpectatorPipe } from "@ngneat/spectator/jest";
import { FixedPipe } from "../lib/fixed.pipe";

describe('FixedPipe', () => {
    let spectator: SpectatorPipe<FixedPipe>;
    const createPipe = createPipeFactory(FixedPipe);

    it('should fix number to two decimal places by default', () => {
        spectator = createPipe(`{{ 0 | toFixed }}`);
        expect(spectator.element).toHaveText('0.00');
    })
    it('should allow user to set number of decimal places', () => {
        spectator = createPipe(`{{ 1 | toFixed:5 }}`);
        expect(spectator.element).toHaveText('1.00000');
    })
})
