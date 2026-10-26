import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setNotifyOutlet } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { MockPipe } from 'ng-mocks';
import { of } from 'rxjs';

import {
    ControlStateService,
    RoomInput,
    RoomOutput,
} from '../../app/control-state.service';
import { DisplaySelectModalComponent } from '../../app/ui/display-select-modal.component';

describe('DisplaySelectModalComponent', () => {
    let spectator: Spectator<DisplaySelectModalComponent>;
    const close = vi.fn();
    const state = {
        available_inputs: signal<RoomInput[]>([]),
        output_list: signal<RoomOutput[]>([]),
        hide_present_all: signal(false),
        setRoute: vi.fn(),
        unroute: vi.fn(),
        routeToAll: vi.fn(),
    };
    const createComponent = createComponentFactory({
        component: DisplaySelectModalComponent,
        declarations: [
            mockComponent(IconComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
        providers: [
            { provide: ControlStateService, useValue: state },
            { provide: MAT_DIALOG_DATA, useValue: { input: 'laptop' } },
            { provide: MatDialogRef, useValue: { close } },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        state.available_inputs.set([
            { id: 'laptop', name: 'Laptop' } as RoomInput,
            { id: 'pc', name: 'PC' } as RoomInput,
        ]);
        state.output_list.set([
            { id: 'd1', name: 'Display 1', source: 'pc' } as RoomOutput,
            { id: 'd2', name: 'Display 2', source: 'laptop' } as RoomOutput,
        ]);
        state.hide_present_all.set(false);
        spectator = createComponent();
    });

    it('should give the title the ID that names the dialog', () => {
        expect('h2').toHaveAttribute('id', 'display-select-title');
    });

    it('should list each display with its source', () => {
        const rows = spectator.queryAll('button[display]');
        expect(rows).toHaveLength(2);
        expect(rows[0]).toContainText('Display 1');
        expect(rows[0]).toContainText('PC');
        expect(rows[0]).toHaveAttribute('aria-pressed', 'false');
        expect(rows[1]).toHaveAttribute('aria-pressed', 'true');
    });

    it('should only list displays that the input can route to', () => {
        state.available_inputs.set([
            { id: 'laptop', name: 'Laptop', outputs: ['d2'] } as RoomInput,
        ]);
        spectator.detectChanges();
        expect(spectator.component.outputs().map((_) => _.id)).toEqual(['d2']);
    });

    it('should route the input to the display, then close', async () => {
        state.setRoute.mockResolvedValue(null);
        await spectator.component.select(state.output_list()[0]);
        expect(state.setRoute).toHaveBeenCalledWith('laptop', 'd1');
        expect(close).toHaveBeenCalled();
    });

    it('should clear a display that already shows the input', async () => {
        state.unroute.mockResolvedValue(null);
        await spectator.component.select(state.output_list()[1]);
        expect(state.unroute).toHaveBeenCalledWith('d2');
        expect(state.setRoute).not.toHaveBeenCalled();
    });

    it('should present the input to all displays', async () => {
        state.routeToAll.mockResolvedValue(null);
        spectator.click('button[present-all]');
        await Promise.resolve();
        expect(state.routeToAll).toHaveBeenCalledWith('laptop');
    });

    it('should hide present to all when the system hides it', () => {
        state.hide_present_all.set(true);
        spectator.detectChanges();
        expect('button[present-all]').not.toExist();
    });

    it('should stay open when routing fails', async () => {
        const notify_open = vi.fn(() => ({
            onAction: () => of(),
            dismiss: vi.fn(),
        }));
        setNotifyOutlet(
            { open: notify_open } as unknown as Parameters<
                typeof setNotifyOutlet
            >[0],
            true,
        );
        state.setRoute.mockRejectedValue(new Error('offline'));
        await spectator.component.select(state.output_list()[0]);
        expect(close).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
        expect(notify_open).toHaveBeenCalled();
        setNotifyOutlet(null, true);
    });
});
