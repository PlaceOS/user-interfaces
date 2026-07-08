import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplaySelectModalComponent } from '../../app/shared/display-select-modal.component';
import { SignageService } from '../../app/signage.service';

describe('DisplaySelectModalComponent', () => {
    const displays = signal<any[]>([]);
    const service = { displays };

    beforeEach(async () => {
        vi.clearAllMocks();
        displays.set([
            { id: 'd1', name: 'Lobby', display_name: 'Lobby Screen' },
            { id: 'd2', name: 'Cafe', description: 'Ground floor' },
            { id: 'd3', name: 'Boardroom' },
        ]);
        await TestBed.configureTestingModule({
            imports: [DisplaySelectModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: { zone_id: 'zone-1' } },
                { provide: SignageService, useValue: service },
            ],
        })
            .overrideComponent(DisplaySelectModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
    });

    it('returns every display when no search term is entered', () => {
        const fixture = TestBed.createComponent(DisplaySelectModalComponent);
        expect(fixture.componentInstance.filtered_displays().length).toBe(3);
    });

    it('matches the display_name ahead of the raw name', () => {
        const fixture = TestBed.createComponent(DisplaySelectModalComponent);
        const component = fixture.componentInstance;

        component.search.set('screen');

        expect(component.filtered_displays().map((_) => _.id)).toEqual(['d1']);
    });

    it('falls back to name when there is no display_name', () => {
        const fixture = TestBed.createComponent(DisplaySelectModalComponent);
        const component = fixture.componentInstance;

        component.search.set('board');

        expect(component.filtered_displays().map((_) => _.id)).toEqual(['d3']);
    });

    it('filters case-insensitively and reacts to updated display state', () => {
        const fixture = TestBed.createComponent(DisplaySelectModalComponent);
        const component = fixture.componentInstance;

        component.search.set('CAFE');
        expect(component.filtered_displays().map((_) => _.id)).toEqual(['d2']);

        displays.set([{ id: 'd9', name: 'Cafeteria' }]);
        expect(component.filtered_displays().map((_) => _.id)).toEqual(['d9']);
    });
});
