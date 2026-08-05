import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplaySelectModalComponent } from '../../app/shared/display-select-modal.component';
import { SignageService } from '../../app/signage.service';

describe('DisplaySelectModalComponent', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const queryDisplays = vi.fn();
    const service = { queryDisplays };

    beforeEach(async () => {
        vi.clearAllMocks();
        queryDisplays.mockReturnValue(
            Promise.resolve({
                data: [
                    { id: 'd2', name: 'Cafe' },
                    { id: 'd1', name: 'lobby', display_name: 'Lobby Screen' },
                ],
                total: 2,
                next: null,
            }),
        );
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

    it('lists displays from the backend, ordered by the name shown', async () => {
        const fixture = TestBed.createComponent(DisplaySelectModalComponent);
        fixture.detectChanges();
        await flush();

        expect(queryDisplays).toHaveBeenCalledWith('');
        expect(
            fixture.componentInstance.list.items().map((_: any) => _.id),
        ).toEqual(['d2', 'd1']);
    });
});
