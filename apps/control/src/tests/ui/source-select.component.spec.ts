import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setNotifyOutlet } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { MockPipe } from 'ng-mocks';
import { of } from 'rxjs';

import {
    ControlStateService,
    RoomInput,
} from '../../app/control-state.service';
import { SourceSelectComponent } from '../../app/ui/source-select.component';

describe('SourceSelectComponent', () => {
    let spectator: Spectator<SourceSelectComponent>;
    const setRoute = vi.fn();
    const notify_open = vi.fn(() => ({
        onAction: () => of(),
        dismiss: vi.fn(),
    }));
    const input = { id: 'pc', name: 'PC', type: 'pc' } as RoomInput;
    const createComponent = createComponentFactory({
        component: SourceSelectComponent,
        declarations: [MockPipe(TranslatePipe, (v) => v)],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    output_list: signal([{ id: 'display', source: 'pc' }]),
                    available_inputs: signal([input]),
                    setRoute,
                },
            },
        ],
    });

    beforeEach(() => {
        setRoute.mockReset();
        notify_open.mockClear();
        setNotifyOutlet(
            { open: notify_open } as unknown as Parameters<
                typeof setNotifyOutlet
            >[0],
            true,
        );
        spectator = createComponent({ props: { output: 'display' } });
    });

    afterEach(() => setNotifyOutlet(null, true));

    it('should route the source and emit it', async () => {
        setRoute.mockResolvedValue(null);
        const emitted = vi.fn();
        spectator.output('source').subscribe(emitted);
        await spectator.component.selectSource(input);
        expect(setRoute).toHaveBeenCalledWith('pc', 'display');
        expect(spectator.component.loading()).toBe(false);
        expect(emitted).toHaveBeenCalledWith(input);
    });

    it('should clear loading and show an error when routing fails', async () => {
        setRoute.mockRejectedValue(new Error('offline'));
        const emitted = vi.fn();
        spectator.output('source').subscribe(emitted);
        await spectator.component.selectSource(input);
        expect(spectator.component.loading()).toBe(false);
        expect(notify_open).toHaveBeenCalled();
        expect(emitted).not.toHaveBeenCalled();
    });

    it('should highlight the routed source as selected', () => {
        expect(spectator.query('button[source]')).not.toHaveClass('inverse');
    });
});
