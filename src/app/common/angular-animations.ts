import { trigger, transition, style, animate, state } from '@angular/animations';

export const ANIMATION_SHOW_ENTER_LEAVE = trigger('show', [
    transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate(300, style({ opacity: 1, height: '*' }))
    ]),
    transition(':leave', [
        style({ opacity: 1, height: '*' }),
        animate(300, style({ opacity: 0, height: 0 }))
    ])
]);

export const ANIMATION_SHOW_CONTRACT_EXPAND = trigger('show', [
    state('show', style({ opacity: 1, height: '*' })),
    state('hide', style({ opacity: 0, height: 0, 'pointer-events': 'none' })),
    transition('show <=> hide', animate('200ms ease-in'))
]);
