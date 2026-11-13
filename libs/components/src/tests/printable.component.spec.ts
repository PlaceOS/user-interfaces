import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/vitest';

import { PrintableComponent } from '../lib/printable.component';

@Component({ selector: 'test-host', template: '', standalone: false })
class HostComponent {}

describe('PrintableComponent', () => {
    let spectator: SpectatorHost<PrintableComponent, HostComponent>;
    const createHost = createHostFactory({
        component: PrintableComponent,
        host: HostComponent,
    });

    const printView = () =>
        TestBed.inject(OverlayContainer)
            .getContainerElement()
            .querySelectorAll('[printable-view]');

    beforeEach(() => {
        vi.useFakeTimers();
        spectator = createHost(
            `<ng-template #report><p report>Room report</p></ng-template>
            <div printable [content]="report"></div>`,
        );
    });

    afterEach(() => vi.useRealTimers());

    it('should copy the content into one print view on the page', () => {
        expect(spectator.query('[report]')).toHaveText('Room report');
        expect(printView()).toHaveLength(0);

        vi.advanceTimersByTime(50);
        // Opening again replaces the print view
        spectator.component.open();
        vi.advanceTimersByTime(50);
        spectator.detectChanges();

        expect(printView()).toHaveLength(1);
        expect(printView()[0]).toHaveText('Room report');
    });

    it('should remove the print view when destroyed', () => {
        vi.advanceTimersByTime(50);
        expect(printView()).toHaveLength(1);

        spectator.fixture.destroy();

        expect(printView()).toHaveLength(0);
    });
});
