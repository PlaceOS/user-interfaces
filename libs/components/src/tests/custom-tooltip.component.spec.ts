import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { SpectatorHost, createHostFactory } from '@ngneat/spectator/jest';

import {
    CustomTooltipComponent,
    CustomTooltipData,
} from '../lib/custom-tooltip.component';
import { SanitizePipe } from '../lib/sanitise.pipe';
import { fakeAsync } from '@angular/core/testing';

@Component({ selector: 'fake', template: 'Fake Component' })
export class FakeComponent {}
@Component({ selector: 'fake-data', template: '<span>{{ data }}<span>' })
export class FakeDataComponent {
    public readonly data = this._data.data;
    constructor(private _data: CustomTooltipData) {}
}

describe('CustomTooltipComponent', () => {
    let spectator: SpectatorHost<CustomTooltipComponent>;
    const createHost = createHostFactory({
        component: CustomTooltipComponent,
        declarations: [SanitizePipe],
        imports: [PortalModule, OverlayModule],
    });

    it('should create component', () => {
        spectator = createHost('<div customTooltip></div>');
        expect(spectator.component).toBeTruthy();
    });

    it('should allow rendering components', fakeAsync(() => {
        spectator = createHost('<div customTooltip></div>', {
            props: {
                content: FakeComponent,
            },
        });
        jest.spyOn(spectator.component, 'open');
        expect('[custom-tooltip]').not.toExist();
        spectator.click(spectator.queryHost('div'));
        spectator.tick(200);
        expect(spectator.component.type).toBe('component');
        expect(spectator.component.open).toHaveBeenCalled();
        expect('[custom-tooltip]').toExist();
        expect('[custom-tooltip]').toContainText('Fake Component');
    }));

    it('should allow rendering templates', fakeAsync(() => {
        spectator = createHost(`
            <div customTooltip [content]="content"></div>
            <ng-template #content>Test Template</ng-template>
        `);
        jest.spyOn(spectator.component, 'open');
        expect('[custom-tooltip]').not.toExist();
        spectator.click(spectator.queryHost('div'));
        spectator.tick(200);
        expect(spectator.component.type).toBe('template');
        expect(spectator.component.open).toHaveBeenCalled();
        expect('[custom-tooltip]').toExist();
        expect('[custom-tooltip]').toContainText('Test Template');
    }));

    it('should allow rendering HTML', fakeAsync(() => {
        spectator = createHost('<div customTooltip></div>', {
            props: {
                content: 'Test HTML',
            },
        });
        jest.spyOn(spectator.component, 'open');
        expect('[custom-tooltip]').not.toExist();
        spectator.click(spectator.queryHost('div'));
        spectator.tick(200);
        expect(spectator.component.type).toBe('html');
        expect(spectator.component.open).toHaveBeenCalled();
        expect('[custom-tooltip]').toExist();
        expect('[custom-tooltip]').toContainText('Test HTML');
    }));

    it('should inject data into components', fakeAsync(() => {
        spectator = createHost(`<div customTooltip></div>`, {
            props: {
                content: FakeDataComponent,
                data: 'Fake Data Component',
            },
        });
        spectator.click(spectator.queryHost('div'));
        spectator.tick(200);
        expect('[custom-tooltip]').toContainText('Fake Data Component');
    }));

    it('should inject data into templates', fakeAsync(() => {
        spectator = createHost(
            `
            <div customTooltip [content]="content"></div>
            <ng-template #content let-text>{{text}}</ng-template>
            `,
            {
                props: {
                    data: { $implicit: 'Fake Template Component' },
                },
            }
        );
        spectator.click(spectator.queryHost('div'));
        spectator.tick(200);
        expect('[custom-tooltip]').toContainText('Fake Template Component');
    }));
});
