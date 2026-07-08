import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ZoneSelectModalComponent } from '../../app/shared/zone-select-modal.component';
import { SignageService } from '../../app/signage.service';

describe('ZoneSelectModalComponent', () => {
    const zones = signal<any[]>([]);
    const service = { zones };

    beforeEach(async () => {
        vi.clearAllMocks();
        zones.set([
            { id: 'z1', name: 'level-1', display_name: 'Level 1' },
            { id: 'z2', name: 'Level 2', description: 'Second floor' },
            { id: 'z3', name: 'Rooftop' },
        ]);
        await TestBed.configureTestingModule({
            imports: [ZoneSelectModalComponent],
            providers: [{ provide: SignageService, useValue: service }],
        })
            .overrideComponent(ZoneSelectModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
    });

    it('returns every zone when no search term is entered', () => {
        const fixture = TestBed.createComponent(ZoneSelectModalComponent);
        expect(fixture.componentInstance.filtered_zones().length).toBe(3);
    });

    it('matches the display_name ahead of the raw name', () => {
        const fixture = TestBed.createComponent(ZoneSelectModalComponent);
        const component = fixture.componentInstance;

        component.search.set('level 1');

        expect(component.filtered_zones().map((_) => _.id)).toEqual(['z1']);
    });

    it('falls back to name and filters case-insensitively', () => {
        const fixture = TestBed.createComponent(ZoneSelectModalComponent);
        const component = fixture.componentInstance;

        component.search.set('ROOF');

        expect(component.filtered_zones().map((_) => _.id)).toEqual(['z3']);
    });
});
