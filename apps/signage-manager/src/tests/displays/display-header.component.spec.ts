import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DisplayHeaderComponent } from '../../app/displays/display-header.component';
import { SignageService } from '../../app/signage.service';

describe('DisplayHeaderComponent', () => {
    const filtered_displays = signal<any[]>([]);
    const can_create = signal(false);
    const add_display = vi.fn();
    const navigate = vi.fn();
    const service_stub = {
        filtered_displays,
        can_create,
        addDisplay: add_display,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: Router, useValue: { navigate } },
            ],
        });
        return TestBed.createComponent(DisplayHeaderComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        filtered_displays.set([]);
        can_create.set(false);
        add_display.mockResolvedValue(null);
    });

    it('reports the number of filtered displays', () => {
        const component = make();
        expect(component.total_count()).toBe(0);

        filtered_displays.set([{ id: 'a' }, { id: 'b' }, { id: 'c' }]);
        expect(component.total_count()).toBe(3);
    });

    it('creates displays only when the group allows it', () => {
        const component = make();
        expect(component.can_create()).toBe(false);

        can_create.set(true);
        expect(component.can_create()).toBe(true);
    });

    it('opens the created display', async () => {
        add_display.mockResolvedValue({ id: 'display-1' });
        const component = make();

        await component.addDisplay();

        expect(add_display).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith(['/displays', 'display-1']);
    });
});
