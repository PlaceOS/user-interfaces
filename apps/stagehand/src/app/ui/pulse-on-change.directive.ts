import { Directive, effect, ElementRef, inject, input } from '@angular/core';

/**
 * Pulses the host when `pulseOnChange` changes, so a live value that updates
 * draws the eye. The first value does not pulse. The animation is the
 * `stagehand-pulse` class in styles.css.
 */
@Directive({ selector: '[pulseOnChange]' })
export class PulseOnChangeDirective {
    public readonly pulseOnChange = input.required<unknown>();

    private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);

    constructor() {
        let first = true;
        effect(() => {
            this.pulseOnChange();
            if (first) {
                first = false;
                return;
            }
            const element = this._element.nativeElement;
            element.classList.remove('stagehand-pulse');
            // Reading the layout restarts the animation when the class is added again
            void element.offsetWidth;
            element.classList.add('stagehand-pulse');
        });
    }
}
