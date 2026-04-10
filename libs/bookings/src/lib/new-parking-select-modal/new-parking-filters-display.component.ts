import { CommonModule } from '@angular/common';
import {
    Component,
    DestroyRef,
    inject,
    input,
    OnInit,
    output,
    signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import {
    nextValueFrom,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { BookingFormService } from '../booking-form.service';

@Component({
    selector: `new-parking-space-filters-display`,
    template: `
        <section
            filters
            class="border-base-300 bg-base-100 sticky -top-1 z-20 -mx-1 mb-4! flex w-[calc(100%+0.5rem)] flex-wrap items-center rounded-sm border p-1 pr-10! sm:pr-1!"
        >
            @if (location()) {
                <div filter-item zone>
                    {{ location() }}
                </div>
            }
            <div filter-item date>
                {{ start | date: 'mediumDate' }}
            </div>
            <div filter-item time>
                {{ start | date: time_format }} &mdash;
                {{ end | date: time_format }}
            </div>
            @for (feat of options()?.features; track feat) {
                <div filter-item>
                    <p>{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        class="-mr-4"
                        (click)="removeFeature(feat)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </section>
    `,
    styles: [
        `
            [filter-item] {
                display: flex;
                align-items: center;
                padding: 0 1rem;
                height: 2rem;
                font-size: 0.875rem;
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 1.25rem;
                margin: 0.25rem;
            }

            [filter-item]:hover {
                background: rgba(0, 0, 0, 0.1);
            }

            [filter-item] > * + * {
                margin-left: 0.5rem;
            }
        `,
    ],
    imports: [CommonModule, IconComponent, MatRippleModule],
})
export class NewParkingFiltersDisplayComponent implements OnInit {
    private _event_form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _destroyRef = inject(DestroyRef);

    public readonly view = input<'map' | 'list'>('list');
    public readonly viewChange = output<'map' | 'list'>();
    public readonly options = toSignal(this._event_form.options, {
        initialValue: {} as any,
    });
    public readonly location = signal('');

    public get start() {
        return this._event_form.form.value.date;
    }

    public get end() {
        const { date, duration } = this._event_form.form.value;
        return date + duration * 60 * 1000;
    }

    public get time_format() {
        return this._settings.time_format_signal();
    }

    public ngOnInit() {
        this._event_form.options
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(({ zone_id }) => this._updateLocation([zone_id]));
    }

    public async removeFeature(feat: string) {
        const value = await nextValueFrom(this._event_form.options);
        this._event_form.setOptions({
            ...value,
            features: (value.features || []).filter((_) => _ !== feat),
        });
    }

    private _updateLocation(zone_ids: string[] = []) {
        const level = this._org.levelWithID(zone_ids);
        const item = level || this._org.building;
        this.location.set(item?.display_name || item?.name || '');
    }
}
