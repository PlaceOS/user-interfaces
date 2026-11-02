import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { SettingsCurrencySelectComponent } from '../../../app/ui/app-settings/settings-currency-select.component';

/** Form that hosts the select under test. */
@Component({
    template: `
        <settings-currency-select
            field_id="test-currency"
            [field]="form.currency"
        />
    `,
    imports: [SettingsCurrencySelectComponent],
})
class HostComponent {
    public readonly model = signal({ currency: 'USD' });
    public readonly form = form(this.model);
}

describe('SettingsCurrencySelectComponent', () => {
    let spectator: Spectator<HostComponent>;
    let select: SettingsCurrencySelectComponent;

    const createComponent = createComponentFactory({
        component: HostComponent,
        imports: [NoopAnimationsModule],
    });

    beforeEach(() => {
        spectator = createComponent();
        select = spectator.query(SettingsCurrencySelectComponent)!;
    });

    it('should name the select with its label', () => {
        expect(spectator.query('label')).toHaveAttribute(
            'id',
            'test-currency-label',
        );
        expect(
            spectator
                .query('mat-select')
                ?.getAttribute('aria-labelledby')
                ?.trim(),
        ).toBe('test-currency-label');
    });

    it('should filter currencies by the search text', () => {
        const all = select.filtered_options().length;
        select.filter.set(' eur ');
        const filtered = select.filtered_options();
        expect(filtered.length).toBeGreaterThan(0);
        expect(filtered.length).toBeLessThan(all);
        expect(filtered.map((option) => option.code)).toContain('EUR');
    });

    it('should clear the search only when the select closes', () => {
        select.filter.set('EUR');
        select.onOpenedChange(true);
        expect(select.filter()).toBe('EUR');
        select.onOpenedChange(false);
        expect(select.filter()).toBe('');
    });
});
