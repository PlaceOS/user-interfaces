import { Directive, effect, ElementRef, inject, input } from '@angular/core';

/**
 * Pulses the host when `pulseOnChange` changes, so a value that changes
 * after an action or a live update draws the eye. The first value does not
 * pulse. The animation is the `motion-pulse` class in styles.css.
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
            element.classList.remove('motion-pulse');
            // Reading the layout restarts the animation when the class is added again
            void element.offsetWidth;
            element.classList.add('motion-pulse');
        });
    }
}
