import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import {
    SpectatorDirective,
    createDirectiveFactory,
} from '@ngneat/spectator/jest';

import { SanitizePipe } from '../lib/sanitise.pipe';
import { fakeAsync } from '@angular/core/testing';
import {
    CustomTooltipComponent,
    CustomTooltipData,
} from '../lib/custom-tooltip.component';

@Component({ selector: 'fake', template: 'Fake Component' })
export class FakeComponent {}
@Component({ selector: 'fake-data', template: '<span>{{ data }}<span>' })
export class FakeDataComponent {
    public readonly data = this._data.data;
    constructor(private _data: CustomTooltipData) {}
}

describe('CustomTooltipComponent', () => {
    let spectator: SpectatorDirective<CustomTooltipComponent>;
    const createDirective = createDirectiveFactory({
        directive: CustomTooltipComponent,
        declarations: [SanitizePipe],
        imports: [PortalModule, OverlayModule],
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
            }
        );
        jest.spyOn(spectator.directive, 'open');
        expect('[custom-tooltip]').not.toExist();
        spectator.click(spectator.query('div'));
        spectator.tick(200);
        expect(spectator.directive.type).toBe('component');
        expect(spectator.directive.open).toHaveBeenCalled();
        expect('[custom-tooltip]').toExist();
        expect('[custom-tooltip]').toContainText('Fake Component');
    }));

    it('should allow rendering templates', fakeAsync(() => {
        spectator = createDirective(`
            <div customTooltip [content]="content"></div>
            <ng-template #content>Test Template</ng-template>
        `);
        jest.spyOn(spectator.directive, 'open');
        expect('[custom-tooltip]').not.toExist();
        spectator.click(spectator.query('div'));
        spectator.tick(200);
        expect(spectator.directive.type).toBe('template');
        expect(spectator.directive.open).toHaveBeenCalled();
        expect('[custom-tooltip]').toExist();
        expect('[custom-tooltip]').toContainText('Test Template');
    }));

    it('should allow rendering HTML', fakeAsync(() => {
        spectator = createDirective(
            '<div customTooltip [content]="content"></div>',
            {
                hostProps: {
                    content: 'Test HTML',
                },
            }
        );
        jest.spyOn(spectator.directive, 'open');
        expect('[custom-tooltip]').not.toExist();
        spectator.click(spectator.query('div'));
        spectator.tick(200);
        expect(spectator.directive.type).toBe('html');
        expect(spectator.directive.open).toHaveBeenCalled();
        expect('[custom-tooltip]').toExist();
        expect('[custom-tooltip]').toContainText('Test HTML');
    }));

    it('should inject data into components', fakeAsync(() => {
        spectator = createDirective(
            `<div customTooltip [content]="content" [data]="data"></div>`,
            {
                hostProps: {
                    content: FakeDataComponent,
                    data: 'Fake Data Component',
                },
            }
        );
        spectator.click(spectator.query('div'));
        spectator.tick(200);
        expect('[custom-tooltip]').toContainText('Fake Data Component');
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
            }
        );
        spectator.click(spectator.query('div'));
        spectator.tick(200);
        expect('[custom-tooltip]').toContainText('Fake Template Component');
    }));
});
