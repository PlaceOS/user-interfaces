import { fakeAsync, tick } from '@angular/core/testing';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingFormService } from '../lib/booking-form.service';
import { DeskDetailsComponent } from '../lib/desk-select-modal/desk-details.component';
import { DeskFiltersDisplayComponent } from '../lib/desk-select-modal/desk-filters-display.component';
import { DeskFiltersComponent } from '../lib/desk-select-modal/desk-filters.component';
import { DeskListComponent } from '../lib/desk-select-modal/desk-list.component';
import { DeskMapComponent } from '../lib/desk-select-modal/desk-map.component';
import { DeskSelectModalComponent } from '../lib/desk-select-modal/desk-select-modal.component';

describe('DeskSelectModalComponent', () => {
    let spectator: Spectator<DeskSelectModalComponent>;
    const dialog_ref = { close: jest.fn() };
    let data: any;
    let settings: any;

    const createComponent = createComponentFactory({
        component: DeskSelectModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => data },
            { provide: MatDialogRef, useValue: dialog_ref },
            {
                provide: BookingFormService,
                useValue: { setOptions: jest.fn() },
            },
            { provide: SettingsService, useFactory: () => settings },
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(DeskFiltersComponent),
            MockComponent(DeskListComponent),
            MockComponent(DeskMapComponent),
            MockComponent(DeskDetailsComponent),
            MockComponent(DeskFiltersDisplayComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
        imports: [
            MockModule(MatDialogModule),
            MockModule(MatTooltipModule),
            MockModule(MatRippleModule),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        data = {
            items: [{ id: 'd1', name: 'Desk One' }],
            options: {},
        };
        settings = createSettingsServiceMock();
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should seed the selection from the provided items array', () => {
        spectator = createComponent();
        expect(spectator.component.selected()).toEqual([
            { id: 'd1', name: 'Desk One' },
        ]);
        expect(spectator.component.isSelected('d1')).toBe(true);
    });

    it('should seed the selection when items is a function', () => {
        data = { items: () => [{ id: 'd9', name: 'Desk Nine' }], options: {} };
        spectator = createComponent();
        expect(spectator.component.selected()).toEqual([
            { id: 'd9', name: 'Desk Nine' },
        ]);
    });

    it('should push provided options into the booking form service', () => {
        data = { items: [], options: { type: 'desk' } };
        spectator = createComponent();
        expect(
            spectator.inject(BookingFormService).setOptions,
        ).toHaveBeenCalledWith({ type: 'desk' });
    });

    it('should switch between list and map views', () => {
        spectator = createComponent();
        expect(spectator.component.view()).toBe('list');
        expect(spectator.query('desk-list')).toExist();
        expect(spectator.query('desk-map')).not.toExist();
        // header toggle buttons: [0] list, [1] map, [2] close
        const header_buttons = spectator.queryAll('header button');
        spectator.click(header_buttons[1]);
        spectator.detectChanges();
        expect(spectator.component.view()).toBe('map');
        expect(spectator.query('desk-map')).toExist();
        expect(spectator.query('desk-list')).not.toExist();
    });

    it('should default to map view when the setting is enabled', () => {
        (settings.get as jest.Mock).mockImplementation(
            (key: string) => key === 'app.desks.default_select_as_map',
        );
        spectator = createComponent();
        expect(spectator.component.view()).toBe('map');
    });

    it('should not allow multiple selection without a group', () => {
        spectator = createComponent();
        expect(spectator.component.allow_multiple()).toBe(false);
        expect(spectator.query('button[name="desk-return"]')).not.toExist();
    });

    it('should allow multiple selection when a group is provided', () => {
        data = { items: [], options: { group: 'grp-1' } };
        spectator = createComponent();
        expect(spectator.component.allow_multiple()).toBe(true);
        expect(spectator.query('button[name="desk-return"]')).toExist();
    });

    it('should close the dialog after selecting a desk in single mode', fakeAsync(() => {
        spectator = createComponent();
        const desk = { id: 'd2', name: 'Desk Two' } as any;
        spectator.component.displayed.set(desk);
        spectator.component.setSelected(desk, true);
        expect(spectator.component.displayed()).toBeNull();
        expect(dialog_ref.close).not.toHaveBeenCalled();
        tick(60);
        expect(dialog_ref.close).toHaveBeenCalledWith([desk]);
    }));

    it('should not close the dialog when selecting in multi-select mode', fakeAsync(() => {
        data = { items: [], options: { group: 'grp-1' } };
        spectator = createComponent();
        const desk = { id: 'd2', name: 'Desk Two' } as any;
        spectator.component.setSelected(desk, true);
        tick(60);
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(spectator.component.isSelected('d2')).toBe(true);
    }));

    it('should toggle the displayed desk selection', () => {
        data = { items: [], options: { group: 'grp-1' } };
        spectator = createComponent();
        expect(spectator.component.allow_multiple()).toBe(true);
        const desk = { id: 'd3', name: 'Desk Three' } as any;
        spectator.component.displayed.set(desk);
        spectator.component.toggleDisplayedDesk();
        expect(spectator.component.isSelected('d3')).toBe(true);
        spectator.component.toggleDisplayedDesk();
        expect(spectator.component.isSelected('d3')).toBe(false);
    });

    it('should add and remove favourites and persist them', () => {
        spectator = createComponent();
        const desk = { id: 'd1', name: 'Desk One' } as any;
        expect(spectator.component.favorites()).toEqual([]);
        spectator.component.toggleFavourite(desk);
        expect(spectator.component.favorites()).toEqual(['d1']);
        expect(settings.saveUserSetting).toHaveBeenCalledWith(
            'favourite_desks',
            ['d1'],
        );
        spectator.component.toggleFavourite(desk);
        expect(spectator.component.favorites()).toEqual([]);
    });

    it('should compute the selected ids as a joined string', () => {
        spectator = createComponent();
        spectator.component.selected.set([
            { id: 'a' } as any,
            { id: 'b' } as any,
        ]);
        expect(spectator.component.selected_ids()).toBe('a,b');
    });
});
