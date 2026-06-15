import { signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import { ItemListFieldComponent } from '@placeos/form-fields';
import { DesksManageComponent } from '../../app/desks/desks-manage.component';
import {
    DeskQrItem,
    DesksStateService,
} from '../../app/desks/desks-state.service';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/common');

import { MatDialog } from '@angular/material/dialog';
import * as common_mod from '@placeos/common';
import { IconComponent, SimpleTableComponent } from '@placeos/components';

describe('DesksManageComponent', () => {
    let spectator: Spectator<DesksManageComponent>;
    let print_desk: ReturnType<typeof signal<DeskQrItem | null>>;
    const createComponent = createComponentFactory({
        component: DesksManageComponent,
        providers: [
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(DesksStateService, {
                setFilters: jest.fn(),
                desks: signal([{ id: '1' }]),
                new_desks: signal([]),
                filters: signal({}),
                loading: signal(false),
                clearNewDesks: jest.fn(),
                editDesk: jest.fn(),
            } as Partial<DesksStateService>),
            MockProvider(OrganisationService, {
                active_levels: signal([]),
                initialised: signal(true),
                levelWithID: jest.fn(() => ({ id: 'lvl-1' })),
                buildings: [],
            } as unknown as Partial<OrganisationService>),
            MockProvider(MatDialog, { open: jest.fn() }),
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
            value: jest.fn(() => '/#/book/code?asset_id={asset_id}'),
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
        jest.useRealTimers();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should print the selected desk QR code', () => {
        jest.spyOn(window, 'print').mockImplementation();
        const timeout = jest
            .spyOn(spectator.component as any, 'timeout')
            .mockImplementation((_name: string, fn: () => void) => fn());
        (common_mod.generateQRCode as jest.Mock).mockReturnValue(
            'data:image/png;base64,qr-code',
        );
        const desk = { id: 'desk-1', name: 'Desk 1' };

        spectator.component.print(desk);

        expect(print_desk()?.qr_link).toBe(
            'http://localhost/workplace/#/book/code?asset_id=desk-1',
        );
        expect(print_desk()?.qr_code).toBe('data:image/png;base64,qr-code');
        expect(print_desk()?.name).toBe('Desk 1');

        expect(timeout).toHaveBeenCalledWith('print', expect.any(Function));
        expect(window.print).toHaveBeenCalled();

        window.dispatchEvent(new Event('afterprint'));

        expect(print_desk()).toBeNull();
    });
});
