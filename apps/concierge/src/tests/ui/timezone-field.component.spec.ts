import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { TimezoneFieldComponent } from '../../app/ui/timezone-field.component';

/** Form that hosts the field under test. */
@Component({
    template: `
        <timezone-field field_id="test-timezone" [field]="form.timezone" />
    `,
    imports: [TimezoneFieldComponent],
})
class HostComponent {
    public readonly model = signal({ timezone: '' });
    public readonly form = form(this.model);
}

describe('TimezoneFieldComponent', () => {
    let spectator: Spectator<HostComponent>;
    let field: TimezoneFieldComponent;

    const createComponent = createComponentFactory({
        component: HostComponent,
        imports: [NoopAnimationsModule],
    });

    beforeEach(() => {
        spectator = createComponent();
        field = spectator.query(TimezoneFieldComponent)!;
    });

    it('should point the label at the input', () => {
        expect(spectator.query('label')).toHaveAttribute(
            'for',
            'test-timezone',
        );
        expect(spectator.query('input')).toHaveAttribute('id', 'test-timezone');
    });

    it('should filter timezones by the field value', () => {
        spectator.component.model.set({ timezone: 'SYDNEY' });
        const filtered = field.filtered_timezones();
        expect(filtered.length).toBeGreaterThan(0);
        expect(
            filtered.every((tz) => tz.toLowerCase().includes('sydney')),
        ).toBe(true);
    });
});
