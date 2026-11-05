import { InteractivityChecker } from '@angular/cdk/a11y';
import { OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { Component, inject } from '@angular/core';
import {
    SpectatorDirective,
    createDirectiveFactory,
} from '@ngneat/spectator/vitest';

import {
    CustomTooltipComponent,
    CustomTooltipData,
} from '../lib/custom-tooltip.component';

// The tooltip opens on a 50ms timer; allow it to fire with a short real wait.
const settle = () => new Promise((resolve) => setTimeout(resolve, 100));

@Component({
    selector: 'fake',
    template: 'Fake Component',
})
export class FakeComponent {}
@Component({
    selector: 'fake-data',
    template: '<span>{{ data }}<span>',
})
export class FakeDataComponent {
    private _data = inject(CustomTooltipData);

    public readonly data = this._data.data;
}

describe('CustomTooltipComponent', () => {
    let spectator: SpectatorDirective<CustomTooltipComponent>;
    let overlay_container: OverlayContainer;
    const createDirective = createDirectiveFactory({
        directive: CustomTooltipComponent,
        imports: [PortalModule, OverlayModule],
    });

    beforeEach(() => {
        // Mock getBoundingClientRect for all elements
        Element.prototype.getBoundingClientRect = vi.fn(() => ({
            width: 100,
            height: 100,
            top: 0,
            left: 0,
            bottom: 100,
            right: 100,
            x: 0,
            y: 0,
            toJSON: () => {},
        }));

        // Mock window dimensions for CDK overlay
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1024,
        });
        Object.defineProperty(window, 'innerHeight', {
            writable: true,
            configurable: true,
            value: 768,
        });

        // Mock document.documentElement dimensions
        Object.defineProperty(document.documentElement, 'clientWidth', {
            writable: true,
            configurable: true,
            value: 1024,
        });
        Object.defineProperty(document.documentElement, 'clientHeight', {
            writable: true,
            configurable: true,
            value: 768,
        });
    });

    it('should create component', () => {
        spectator = createDirective('<div customTooltip></div>');
        expect(spectator.directive).toBeTruthy();
    });

    it('should allow rendering components', async () => {
        spectator = createDirective(
            '<div customTooltip [content]="content"></div>',
            {
                hostProps: {
                    content: FakeComponent,
                },
            },
        );
        vi.spyOn(spectator.directive, 'open');
        spectator.click(spectator.query('div'));
        await settle();
        expect(spectator.directive.type()).toBe('component');
        expect(spectator.directive.open).toHaveBeenCalled();
    });

    it('should allow rendering templates', async () => {
        spectator = createDirective(`
            <div customTooltip [content]="content"></div>
            <ng-template #content>Test Template</ng-template>
        `);
        vi.spyOn(spectator.directive, 'open');
        spectator.click(spectator.query('div'));
        await settle();
        expect(spectator.directive.type()).toBe('template');
        expect(spectator.directive.open).toHaveBeenCalled();
    });

    it('should attach template content to the overlay', async () => {
        spectator = createDirective(`
            <div customTooltip [content]="content"></div>
            <ng-template #content>Rendered Template</ng-template>
        `);
        overlay_container = spectator.inject(OverlayContainer);

        spectator.click(spectator.query('div'));
        await settle();

        expect(overlay_container.getContainerElement().textContent).toContain(
            'Rendered Template',
        );
    });

    it('should move focus into a click tooltip and back on close', async () => {
        // jsdom has no layout, so the focus trap sees nothing visible
        const visible = vi
            .spyOn(InteractivityChecker.prototype, 'isVisible')
            .mockReturnValue(true);
        spectator = createDirective(`
            <button customTooltip [content]="content">Open</button>
            <ng-template #content><button inside>Inside</button></ng-template>
        `);
        overlay_container = spectator.inject(OverlayContainer);
        const host = spectator.query<HTMLButtonElement>('button');
        expect(host.getAttribute('aria-haspopup')).toBe('dialog');
        host.focus();
        spectator.click(host);
        await settle();
        // The trap focuses after the next render
        spectator.detectChanges();
        await settle();

        const inside = overlay_container
            .getContainerElement()
            .querySelector<HTMLElement>('[inside]');
        expect(document.activeElement).toBe(inside);
        expect(host.getAttribute('aria-expanded')).toBe('true');

        spectator.directive.close();
        expect(document.activeElement).toBe(host);
        expect(host.getAttribute('aria-expanded')).toBe('false');
        visible.mockRestore();
    });

    it('should focus a click tooltip that has only text', async () => {
        spectator = createDirective(`
            <button customTooltip [content]="content">Open</button>
            <ng-template #content>Only text</ng-template>
        `);
        overlay_container = spectator.inject(OverlayContainer);
        spectator.click('button');
        await settle();
        spectator.detectChanges();
        await settle();
        const pane = overlay_container
            .getContainerElement()
            .querySelector<HTMLElement>('.cdk-overlay-pane');
        expect(document.activeElement).toBe(pane);
        expect(pane.getAttribute('role')).toBe('dialog');
        spectator.directive.close();
    });

    it('should close when Escape is pressed', async () => {
        spectator = createDirective(`
            <div customTooltip [content]="content"></div>
            <ng-template #content>Escape Template</ng-template>
        `);
        overlay_container = spectator.inject(OverlayContainer);
        spectator.click(spectator.query('div'));
        await settle();
        expect(overlay_container.getContainerElement().textContent).toContain(
            'Escape Template',
        );

        document.body.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
        );
        await settle();

        expect(
            overlay_container.getContainerElement().textContent,
        ).not.toContain('Escape Template');
    });

    it('should allow rendering HTML', async () => {
        spectator = createDirective(
            '<div customTooltip [content]="content"></div>',
            {
                hostProps: {
                    content: 'Test HTML',
                },
            },
        );
        vi.spyOn(spectator.directive, 'open');
        spectator.click(spectator.query('div'));
        await settle();
        expect(spectator.directive.type()).toBe('html');
        expect(spectator.directive.open).toHaveBeenCalled();
    });

    it('should open hover tooltips on pointer hover', async () => {
        spectator = createDirective(
            '<div customTooltip [content]="content" [hover]="true"></div>',
            {
                hostProps: {
                    content: 'Test HTML',
                },
            },
        );
        vi.spyOn(spectator.directive, 'open');

        spectator
            .query('div')
            .dispatchEvent(new Event('pointerenter', { bubbles: true }));
        await settle();

        expect(spectator.directive.open).toHaveBeenCalled();
    });

    it('should open hover tooltips when the host gets keyboard focus', async () => {
        spectator = createDirective(
            '<button customTooltip [content]="content" [hover]="true"></button>',
            { hostProps: { content: 'Test HTML' } },
        );
        vi.spyOn(spectator.directive, 'open');
        vi.spyOn(spectator.directive, 'close');
        spectator.query<HTMLButtonElement>('button').focus();
        await settle();
        expect(spectator.directive.open).toHaveBeenCalled();
        spectator.query<HTMLButtonElement>('button').blur();
        expect(spectator.directive.close).toHaveBeenCalled();
    });

    it('should not open hover tooltips when a tap focuses the host', async () => {
        spectator = createDirective(
            '<button customTooltip [content]="content" [hover]="true"></button>',
            { hostProps: { content: 'Test HTML' } },
        );
        vi.spyOn(spectator.directive, 'open');
        const button = spectator.query<HTMLButtonElement>('button');
        // Pointer focus does not match :focus-visible on a button
        vi.spyOn(button, 'matches').mockReturnValue(false);
        button.focus();
        await settle();
        expect(spectator.directive.open).not.toHaveBeenCalled();
    });

    it('should not open hover tooltips from touch pointers', async () => {
        spectator = createDirective(
            '<div customTooltip [content]="content" [hover]="true"></div>',
            {
                hostProps: {
                    content: 'Test HTML',
                },
            },
        );
        vi.spyOn(spectator.directive, 'open');

        const touch_event = new Event('pointerenter', { bubbles: true });
        Object.defineProperty(touch_event, 'pointerType', { value: 'touch' });
        spectator.query('div').dispatchEvent(touch_event);
        spectator
            .query('div')
            .dispatchEvent(new MouseEvent('click', { bubbles: true }));
        spectator
            .query('div')
            .dispatchEvent(new Event('touchend', { bubbles: true }));
        await settle();

        expect(spectator.directive.open).not.toHaveBeenCalled();
    });

    it('should inject data into components', () => {
        spectator = createDirective(
            `<div customTooltip [content]="content" [data]="data"></div>`,
            {
                hostProps: {
                    content: FakeDataComponent,
                    data: 'Fake Data Component',
                },
            },
        );
        expect(spectator.directive.injector.get(CustomTooltipData).data).toBe(
            'Fake Data Component',
        );
    });

    it('should inject data into templates', () => {
        spectator = createDirective(
            `
            <div customTooltip [content]="content" [data]="data"></div>
            <ng-template #content let-text>{{text}}</ng-template>
            `,
            {
                hostProps: {
                    data: { $implicit: 'Fake Template Component' },
                },
            },
        );
        expect(
            spectator.directive.injector.get(CustomTooltipData).data,
        ).toEqual({ $implicit: 'Fake Template Component' });
    });
});
