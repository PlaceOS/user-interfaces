import { OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { Component, inject } from '@angular/core';
import {
    SpectatorDirective,
    createDirectiveFactory,
} from '@ngneat/spectator/jest';

import { fakeAsync } from '@angular/core/testing';
import {
    CustomTooltipComponent,
    CustomTooltipData,
} from '../lib/custom-tooltip.component';
import { SanitizePipe } from '../lib/sanitise.pipe';

@Component({ selector: 'fake', template: 'Fake Component' })
export class FakeComponent {}
@Component({ selector: 'fake-data', template: '<span>{{ data }}<span>' })
export class FakeDataComponent {
    private _data = inject(CustomTooltipData);

    public readonly data = this._data.data;
}

describe('CustomTooltipComponent', () => {
    let spectator: SpectatorDirective<CustomTooltipComponent>;
    let overlay_container: OverlayContainer;
    const createDirective = createDirectiveFactory({
        directive: CustomTooltipComponent,
        declarations: [SanitizePipe],
        imports: [PortalModule, OverlayModule],
    });

    beforeEach(() => {
        // Mock getBoundingClientRect for all elements
        Element.prototype.getBoundingClientRect = jest.fn(() => ({
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

    it('should allow rendering components', fakeAsync(() => {
        spectator = createDirective(
            '<div customTooltip [content]="content"></div>',
            {
                hostProps: {
                    content: FakeComponent,
                },
            },
        );
        jest.spyOn(spectator.directive, 'open');
        spectator.click(spectator.query('div'));
        spectator.tick(200);
        expect(spectator.directive.type()).toBe('component');
        expect(spectator.directive.open).toHaveBeenCalled();
    }));

    it('should allow rendering templates', fakeAsync(() => {
        spectator = createDirective(`
            <div customTooltip [content]="content"></div>
            <ng-template #content>Test Template</ng-template>
        `);
        jest.spyOn(spectator.directive, 'open');
        spectator.click(spectator.query('div'));
        spectator.tick(200);
        expect(spectator.directive.type()).toBe('template');
        expect(spectator.directive.open).toHaveBeenCalled();
    }));

    it('should attach template content to the overlay', fakeAsync(() => {
        spectator = createDirective(`
            <div customTooltip [content]="content"></div>
            <ng-template #content>Rendered Template</ng-template>
        `);
        overlay_container = spectator.inject(OverlayContainer);

        spectator.click(spectator.query('div'));
        spectator.tick(200);

        expect(overlay_container.getContainerElement().textContent).toContain(
            'Rendered Template',
        );
    }));

    it('should allow rendering HTML', fakeAsync(() => {
        spectator = createDirective(
            '<div customTooltip [content]="content"></div>',
            {
                hostProps: {
                    content: 'Test HTML',
                },
            },
        );
        jest.spyOn(spectator.directive, 'open');
        spectator.click(spectator.query('div'));
        spectator.tick(200);
        expect(spectator.directive.type()).toBe('html');
        expect(spectator.directive.open).toHaveBeenCalled();
    }));

    it('should open hover tooltips on pointer hover', fakeAsync(() => {
        spectator = createDirective(
            '<div customTooltip [content]="content" [hover]="true"></div>',
            {
                hostProps: {
                    content: 'Test HTML',
                },
            },
        );
        jest.spyOn(spectator.directive, 'open');

        spectator.dispatchFakeEvent(spectator.query('div'), 'pointerenter');
        spectator.tick(200);

        expect(spectator.directive.open).toHaveBeenCalled();
    }));

    it('should not open hover tooltips from touch pointers', fakeAsync(() => {
        spectator = createDirective(
            '<div customTooltip [content]="content" [hover]="true"></div>',
            {
                hostProps: {
                    content: 'Test HTML',
                },
            },
        );
        jest.spyOn(spectator.directive, 'open');

        const touch_event = new Event('pointerenter');
        Object.defineProperty(touch_event, 'pointerType', { value: 'touch' });
        spectator.query('div').dispatchEvent(touch_event);
        spectator.dispatchMouseEvent(spectator.query('div'), 'click');
        spectator.dispatchFakeEvent(spectator.query('div'), 'touchend');
        spectator.tick(200);

        expect(spectator.directive.open).not.toHaveBeenCalled();
    }));

    it('should inject data into components', fakeAsync(() => {
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
    }));

    it('should inject data into templates', fakeAsync(() => {
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
    }));
});
