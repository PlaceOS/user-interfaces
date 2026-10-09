import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignageDisplayService } from '../../app/displays/signage-display.service';
import { DisplaySelectModalComponent } from '../../app/shared/display-select-modal.component';

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
                { provide: SignageDisplayService, useValue: service },
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

// The real template, so a failed search shows an error and not "no displays"
describe('DisplaySelectModalComponent errors', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const queryDisplays = vi.fn();

    beforeEach(async () => {
        vi.clearAllMocks();
        await TestBed.configureTestingModule({
            imports: [DisplaySelectModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: SignageDisplayService, useValue: { queryDisplays } },
            ],
        }).compileComponents();
    });

    it('shows a load error with a retry that queries again', async () => {
        queryDisplays
            .mockReturnValueOnce(Promise.reject(new Error('offline')))
            .mockReturnValueOnce(
                Promise.resolve({
                    data: [{ id: 'd1', name: 'Lobby' }],
                    total: 1,
                    next: null,
                }),
            );
        const fixture = TestBed.createComponent(DisplaySelectModalComponent);
        fixture.detectChanges();
        await flush();
        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement;
        const retry = element.querySelector<HTMLButtonElement>(
            'load-error button',
        );
        expect(retry).toBeTruthy();

        retry?.click();
        await flush();
        fixture.detectChanges();

        expect(queryDisplays).toHaveBeenCalledTimes(2);
        expect(element.querySelector('load-error')).toBeNull();
        expect(element.textContent).toContain('Lobby');
    });
});
