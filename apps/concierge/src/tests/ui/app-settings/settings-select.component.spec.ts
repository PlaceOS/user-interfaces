import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { SettingsSelectComponent } from '../../../app/ui/app-settings/settings-select.component';

/** Form that hosts the select under test. */
@Component({
    template: `
        <settings-select
            field_id="test-period"
            label="Available Period"
            [field]="form.period"
            [options]="OPTIONS"
            null_option="No limit"
            hint="Days ahead users can book"
        />
    `,
    imports: [SettingsSelectComponent],
})
class HostComponent {
    public readonly model = signal({ period: 1 as number | null });
    public readonly form = form(this.model);
    public readonly OPTIONS = [
        { value: 1, label: '1 Day' },
        { value: 7, label: '1 Week' },
    ];
}

describe('SettingsSelectComponent', () => {
    let spectator: Spectator<HostComponent>;

    const createComponent = createComponentFactory({
        component: HostComponent,
        imports: [NoopAnimationsModule],
    });

    const openOptions = () => {
        spectator.click('.mat-mdc-select-trigger');
        return Array.from(document.querySelectorAll('mat-option'));
    };

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should name the select with its label', () => {
        const label = spectator.query('label');
        expect(label).toHaveAttribute('for', 'test-period');
        expect(label).toHaveAttribute('id', 'test-period-label');
        expect(label).toHaveText('Available Period');
        expect(
            spectator
                .query('mat-select')
                ?.getAttribute('aria-labelledby')
                ?.trim(),
        ).toBe('test-period-label');
        expect(spectator.query('mat-hint')).toHaveText(
            'Days ahead users can book',
        );
    });

    it('should list the null option first and write the chosen value', () => {
        const options = openOptions();
        expect(options.map((option) => option.textContent?.trim())).toEqual([
            'No limit',
            '1 Day',
            '1 Week',
        ]);

        (options[2] as HTMLElement).click();
        expect(spectator.component.model().period).toBe(7);

        (openOptions()[0] as HTMLElement).click();
        expect(spectator.component.model().period).toBeNull();
    });
});
