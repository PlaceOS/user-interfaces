import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DisplayHeaderComponent } from '../../app/displays/display-header.component';
import { SignageService } from '../../app/signage.service';

describe('DisplayHeaderComponent', () => {
    const filtered_displays = signal<any[]>([]);
    const service_stub = { filtered_displays };

    function make() {
        TestBed.configureTestingModule({
            providers: [{ provide: SignageService, useValue: service_stub }],
        });
        return TestBed.createComponent(DisplayHeaderComponent).componentInstance;
    }

    beforeEach(() => {
        filtered_displays.set([]);
    });

    it('reports the number of filtered displays', () => {
        const component = make();
        expect(component.total_count()).toBe(0);

        filtered_displays.set([{ id: 'a' }, { id: 'b' }, { id: 'c' }]);
        expect(component.total_count()).toBe(3);
    });
});
