import { signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockDirective, MockModule, MockProvider } from 'ng-mocks';

import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import {
    BookingAsset,
    BookingFormService,
} from '../lib/booking-form.service';
import { ParkingListComponent } from '../lib/parking-select-modal/parking-list.component';

const asset = (over: Partial<BookingAsset> = {}): BookingAsset =>
    ({
        id: 'space-1',
        name: 'Space One',
        bookable: true,
        features: [],
        ...over,
    }) as BookingAsset;

describe('ParkingListComponent', () => {
    let spectator: Spectator<ParkingListComponent>;
    const available = signal<BookingAsset[]>([]);
    const options = signal<any>({});
    const loading = signal('');

    const createComponent = createComponentFactory({
        component: ParkingListComponent,
        providers: [
            MockProvider(BookingFormService, {
                available_resources: available as any,
                options: options as any,
                loading: loading as any,
            }),
        ],
        declarations: [
            MockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        imports: [
            MockModule(MatProgressSpinnerModule),
            MockModule(MatRippleModule),
        ],
    });

    beforeEach(() => {
        available.set([]);
        options.set({});
        loading.set('');
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show the empty state when there are no results', () => {
        expect('[empty]').toExist();
        expect('li[space]').not.toExist();
    });

    it('should render an item per available resource', () => {
        available.set([asset({ id: 'a' }), asset({ id: 'b' })]);
        spectator.detectChanges();
        expect(spectator.queryAll('li[space]').length).toBe(2);
        expect('[empty]').not.toExist();
    });

    it('should show the loading state while loading', () => {
        loading.set('loading');
        spectator.detectChanges();
        expect('[loading]').toExist();
        expect('li[space]').not.toExist();
        expect('[empty]').not.toExist();
    });

    it('should emit the selected space when a result is clicked', () => {
        available.set([asset({ id: 'a' })]);
        spectator.detectChanges();
        let emitted: BookingAsset | undefined;
        spectator.component.onSelect.subscribe((v) => (emitted = v));
        spectator.click('button[select]');
        expect(emitted?.id).toBe('a');
    });

    it('should emit the space to favourite when the fav button is clicked', () => {
        available.set([asset({ id: 'a' })]);
        spectator.detectChanges();
        let emitted: BookingAsset | undefined;
        spectator.component.toggleFav.subscribe((v) => (emitted = v));
        spectator.click('button[fav]');
        expect(emitted?.id).toBe('a');
    });

    it('should only list favourites when the show_fav option is set', () => {
        available.set([asset({ id: 'a' }), asset({ id: 'b' })]);
        options.set({ show_fav: true });
        spectator.setInput('favorites', ['b']);
        spectator.detectChanges();
        expect(spectator.component.assets().map((_) => _.id)).toEqual(['b']);
    });

    it('should sort favourites to the top of the list', () => {
        available.set([asset({ id: 'a' }), asset({ id: 'b' })]);
        spectator.setInput('favorites', ['b']);
        spectator.detectChanges();
        expect(spectator.component.assets().map((_) => _.id)).toEqual([
            'b',
            'a',
        ]);
    });

    it('should report favourite state for a space', () => {
        spectator.setInput('favorites', ['x']);
        expect(spectator.component.isFavourite('x')).toBe(true);
        expect(spectator.component.isFavourite('y')).toBe(false);
    });
});
