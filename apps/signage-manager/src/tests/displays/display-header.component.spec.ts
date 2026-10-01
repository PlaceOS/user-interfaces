import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DisplayHeaderComponent } from '../../app/displays/display-header.component';
import { SignageService } from '../../app/signage.service';

describe('DisplayHeaderComponent', () => {
    const displays_total = signal(0);
    const can_create = signal(false);
    const add_display = vi.fn();
    const navigate = vi.fn();
    const service_stub = {
        displays_total,
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
        displays_total.set(0);
        can_create.set(false);
        add_display.mockResolvedValue(null);
    });

    // The list holds only the loaded pages, so the count comes from the server
    it('reports the server total of displays', () => {
        const component = make();
        expect(component.total_count()).toBe(0);

        displays_total.set(450);
        expect(component.total_count()).toBe(450);
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
