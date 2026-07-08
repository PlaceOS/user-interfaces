import { signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import { ItemListFieldComponent } from '@placeos/form-fields';
import { DesksManageComponent } from '../../app/desks/desks-manage.component';
import {
    DeskQrItem,
    DesksStateService,
} from '../../app/desks/desks-state.service';

vi.mock('@placeos/ts-client', { spy: true });

import { MatDialog } from '@angular/material/dialog';
import { IconComponent, SimpleTableComponent } from '@placeos/components';

describe('DesksManageComponent', () => {
    let spectator: Spectator<DesksManageComponent>;
    let print_desk: ReturnType<typeof signal<DeskQrItem | null>>;
    const createComponent = createComponentFactory({
        component: DesksManageComponent,
        providers: [
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(DesksStateService, {
                setFilters: vi.fn(),
                desks: signal([{ id: '1' }]),
                new_desks: signal([]),
                filters: signal({}),
                loading: signal(false),
                clearNewDesks: vi.fn(),
                editDesk: vi.fn(),
            } as any),
            MockProvider(OrganisationService, {
                active_levels: signal([]),
                initialised: signal(true),
                levelWithID: vi.fn(() => ({ id: 'lvl-1' })),
                buildings: [],
            } as unknown as Partial<OrganisationService>),
            MockProvider(MatDialog, { open: vi.fn() }),
        ],
        declarations: [
            MockComponent(ItemListFieldComponent),
            MockComponent(IconComponent),
            MockComponent(SimpleTableComponent),
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            MatCheckboxModule,
            MatMenuModule,
            MatProgressSpinnerModule,
        ],
    });

    beforeEach(() => {
        print_desk = signal<DeskQrItem | null>(null);
        spectator = createComponent();
        Object.defineProperty(spectator.component, 'link_path', {
            value: vi.fn(() => '/#/book/code?asset_id={asset_id}'),
        });
        Object.defineProperty(
            spectator.inject(DesksStateService),
            'print_desk',
            {
                value: print_desk,
            },
        );
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should print the selected desk QR code', () => {
        vi.spyOn(window, 'print').mockImplementation(() => {});
        const timeout = vi
            .spyOn(spectator.component as any, 'timeout')
            .mockImplementation((_name: string, fn: () => void) => fn());
        // generateQRCode (@placeos/common) can't be spied under the bundling
        // builder; assert on its real output shape (a data URL) instead.
        const desk = { id: 'desk-1', name: 'Desk 1' };

        spectator.component.print(desk);

        expect(print_desk()?.qr_link).toBe(
            `${window.location.origin}/workplace/#/book/code?asset_id=desk-1`,
        );
        expect(print_desk()?.qr_code).toMatch(/^data:image\/svg\+xml,/);
        expect(print_desk()?.name).toBe('Desk 1');

        expect(timeout).toHaveBeenCalledWith('print', expect.any(Function));
        expect(window.print).toHaveBeenCalled();

        window.dispatchEvent(new Event('afterprint'));

        expect(print_desk()).toBeNull();
    });
});
