import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';

import { KeyboardShortcutsService } from '../../app/ui/keyboard-shortcuts.service';

describe('KeyboardShortcutsService', () => {
    let spectator: SpectatorService<KeyboardShortcutsService>;

    const createService = createServiceFactory(KeyboardShortcutsService);

    /** Add markup to the page and return the element with the given id */
    const addElement = (html: string, id: string) => {
        document.body.insertAdjacentHTML('beforeend', html);
        return document.getElementById(id) as HTMLElement;
    };

    const press = (
        key: string,
        init: KeyboardEventInit = {},
        target?: Element,
    ) => {
        const event = new KeyboardEvent('keydown', {
            key,
            bubbles: true,
            cancelable: true,
            ...init,
        });
        (target || document.body).dispatchEvent(event);
        return event;
    };

    beforeEach(() => {
        spectator = createService();
    });

    const handler = (event: KeyboardEvent) =>
        spectator.service.handleKeydown(event);

    beforeEach(() => document.addEventListener('keydown', handler));

    afterEach(() => {
        document.removeEventListener('keydown', handler);
        document.body.innerHTML = '';
    });

    it('should click the first enabled target for the key', () => {
        const disabled = addElement(
            '<button id="disabled" data-shortcut="new" disabled></button>',
            'disabled',
        );
        const enabled = addElement(
            '<button id="enabled" data-shortcut="new"></button>',
            'enabled',
        );
        const disabled_click = vi.fn();
        const enabled_click = vi.fn();
        disabled.addEventListener('click', disabled_click);
        enabled.addEventListener('click', enabled_click);

        const event = press('N');

        expect(enabled_click).toHaveBeenCalledTimes(1);
        expect(disabled_click).not.toHaveBeenCalled();
        expect(event.defaultPrevented).toBe(true);
    });

    it('should focus and select the search field', () => {
        const input = addElement(
            '<input id="search" data-shortcut="search" value="desk" />',
            'search',
        ) as HTMLInputElement;

        press('/');

        expect(document.activeElement).toBe(input);
        expect(input.selectionStart).toBe(0);
        expect(input.selectionEnd).toBe(4);
    });

    it('should click a search button that opens a search field', () => {
        const button = addElement(
            '<button id="search" data-shortcut="search"></button>',
            'search',
        );
        const click = vi.fn();
        button.addEventListener('click', click);

        press('/');

        expect(click).toHaveBeenCalledTimes(1);
    });

    it('should double click the date label to go to today', () => {
        const label = addElement(
            '<button id="today" data-shortcut="today"></button>',
            'today',
        );
        const dblclick = vi.fn();
        label.addEventListener('dblclick', dblclick);

        press('t');

        expect(dblclick).toHaveBeenCalledTimes(1);
    });

    it('should ignore keys while the user types in a field', () => {
        const input = addElement('<input id="field" />', 'field');
        const next = addElement(
            '<button id="next" data-shortcut="next"></button>',
            'next',
        );
        const click = vi.fn();
        next.addEventListener('click', click);

        const event = press('ArrowRight', {}, input);

        expect(click).not.toHaveBeenCalled();
        expect(event.defaultPrevented).toBe(false);
    });

    it('should ignore keys with a modifier', () => {
        const button = addElement(
            '<button id="refresh" data-shortcut="refresh"></button>',
            'refresh',
        );
        const click = vi.fn();
        button.addEventListener('click', click);

        press('r', { metaKey: true });
        press('r', { ctrlKey: true });

        expect(click).not.toHaveBeenCalled();
    });

    it('should ignore keys while an overlay is open', () => {
        const button = addElement(
            '<button id="new" data-shortcut="new"></button>',
            'new',
        );
        const click = vi.fn();
        button.addEventListener('click', click);

        const dialog = addElement(
            '<div id="dialog" class="mat-mdc-dialog-container"></div>',
            'dialog',
        );
        press('n');
        dialog.remove();
        addElement(
            '<div id="backdrop" class="cdk-overlay-backdrop"></div>',
            'backdrop',
        );
        press('n');

        expect(click).not.toHaveBeenCalled();
    });

    it('should open the shortcut list', async () => {
        const open_help = vi
            .spyOn(spectator.service, 'openHelp')
            .mockResolvedValue(undefined);

        press('?', { shiftKey: true });

        expect(open_help).toHaveBeenCalledTimes(1);
    });
});
