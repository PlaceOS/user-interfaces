import { TestBed } from '@angular/core/testing';
import { ZoneSelectModalComponent } from '../../app/shared/zone-select-modal.component';
import { SignageService } from '../../app/signage.service';

describe('ZoneSelectModalComponent', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const querySignageZones = vi.fn();
    const service = { querySignageZones };

    beforeEach(async () => {
        vi.clearAllMocks();
        querySignageZones.mockReturnValue(
            Promise.resolve({
                data: [
                    { id: 'z2', name: 'Rooftop' },
                    { id: 'z1', name: 'level-1', display_name: 'Level 1' },
                ],
                total: 2,
                next: null,
            }),
        );
        await TestBed.configureTestingModule({
            imports: [ZoneSelectModalComponent],
            providers: [{ provide: SignageService, useValue: service }],
        })
            .overrideComponent(ZoneSelectModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
    });

    it('lists signage zones from the backend, ordered by the name shown', async () => {
        const fixture = TestBed.createComponent(ZoneSelectModalComponent);
        fixture.detectChanges();
        await flush();

        expect(querySignageZones).toHaveBeenCalledWith('');
        expect(
            fixture.componentInstance.list.items().map((_: any) => _.id),
        ).toEqual(['z1', 'z2']);
    });
});
