import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MockComponent, MockDirective, MockPipe } from 'ng-mocks';

import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingFormService } from '../lib/booking-form.service';
import { DeskListComponent } from '../lib/desk-select-modal/desk-list.component';

describe('DeskListComponent', () => {
    let spectator: Spectator<DeskListComponent>;
    const available_resources = signal<any[]>([]);
    const options = signal<any>({});
    const loading = signal<string>('');

    const createComponent = createComponentFactory({
        component: DeskListComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: { available_resources, options, loading },
            },
        ],
        declarations: [
            MockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
            MockPipe(TranslatePipe, (v) => v),
        ],
    });

    beforeEach(() => {
        available_resources.set([]);
        options.set({});
        loading.set('');
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show the empty state when there are no desks', () => {
        expect(spectator.query('[empty]')).toExist();
        expect(spectator.query('li[desk]')).not.toExist();
    });

    it('should render a list item per available desk', () => {
        available_resources.set([
            { id: 'd1', name: 'Desk One' },
            { id: 'd2', name: 'Desk Two' },
        ]);
        spectator.detectChanges();
        const items = spectator.queryAll('li[desk]');
        expect(items.length).toBe(2);
        expect(items[0]).toContainText('Desk One');
    });

    it('should show the loading state while loading', () => {
        loading.set('desks');
        available_resources.set([{ id: 'd1', name: 'Desk One' }]);
        spectator.detectChanges();
        expect(spectator.query('[loading]')).toExist();
        expect(spectator.query('li[desk]')).not.toExist();
    });

    it('should emit onSelect when a desk is clicked', () => {
        let selected: any = null;
        spectator.component.onSelect.subscribe((d) => (selected = d));
        available_resources.set([{ id: 'd1', name: 'Desk One' }]);
        spectator.detectChanges();
        spectator.click('button[name="select-desk"]');
        expect(selected).toEqual({ id: 'd1', name: 'Desk One' });
    });

    it('should emit toggleFav when the favourite button is clicked', () => {
        let toggled: any = null;
        spectator.component.toggleFav.subscribe((d) => (toggled = d));
        available_resources.set([{ id: 'd1', name: 'Desk One' }]);
        spectator.detectChanges();
        spectator.click('button[name="toggle-desk-favourite"]');
        expect(toggled).toEqual({ id: 'd1', name: 'Desk One' });
    });

    it('should only show favourites when show_fav option is set', () => {
        available_resources.set([
            { id: 'd1', name: 'Desk One' },
            { id: 'd2', name: 'Desk Two' },
        ]);
        spectator.setInput('favorites', ['d2']);
        options.set({ show_fav: true });
        spectator.detectChanges();
        const items = spectator.queryAll('li[desk]');
        expect(items.length).toBe(1);
        expect(items[0]).toContainText('Desk Two');
    });

    it('should sort favourites to the top of the list', () => {
        available_resources.set([
            { id: 'd1', name: 'Desk One' },
            { id: 'd2', name: 'Desk Two' },
        ]);
        spectator.setInput('favorites', ['d2']);
        spectator.detectChanges();
        expect(spectator.component.desks().map((d) => d.id)).toEqual([
            'd2',
            'd1',
        ]);
    });
});
