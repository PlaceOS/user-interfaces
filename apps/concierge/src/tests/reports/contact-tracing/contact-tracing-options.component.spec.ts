import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { signal, WritableSignal } from '@angular/core';
import { MockComponent } from 'ng-mocks';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import {
    DateRangeFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { ContactTracingOptionsComponent } from 'apps/concierge/src/app/reports/contact-tracing/contact-tracing-options.component';
import { ContactTracingStateService } from 'apps/concierge/src/app/reports/contact-tracing/contact-tracing-state.service';

describe('ContactTracingOptionsComponent', () => {
    let spectator: Spectator<ContactTracingOptionsComponent>;
    let options: WritableSignal<any>;
    let set_options: jest.Mock;
    const createComponent = createComponentFactory({
        component: ContactTracingOptionsComponent,
        declarations: [
            MockComponent(DateRangeFieldComponent),
            MockComponent(UserSearchFieldComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            {
                provide: ContactTracingStateService,
                useFactory: () => ({
                    options,
                    setOptions: set_options,
                    generateReport: jest.fn(),
                }),
            },
            {
                provide: SettingsService,
                useValue: { get: () => 1 },
            },
        ],
        imports: [MatRippleModule, MatTooltipModule],
    });

    beforeEach(() => {
        options = signal({ start: 0, end: 0 });
        set_options = jest.fn();
        spectator = createComponent();
    });

    it('should not allow download until a user is selected', () => {
        expect(spectator.component.can_download()).toBe(false);
        const buttons = spectator.queryAll<HTMLButtonElement>('button[icon]');
        expect(buttons.every((btn) => btn.disabled)).toBe(true);
    });

    it('should enable download actions once a user is selected', () => {
        options.set({ start: 0, end: 0, user: { id: 'u1', name: 'User' } });
        spectator.detectChanges();
        expect(spectator.component.can_download()).toBe(true);
        const buttons = spectator.queryAll<HTMLButtonElement>('button[icon]');
        expect(buttons.every((btn) => btn.disabled)).toBe(false);
    });

    it('should emit download when the download button is clicked', () => {
        options.set({ start: 0, end: 0, user: { id: 'u1' } });
        spectator.detectChanges();
        const download = jest.fn();
        spectator.component.download.subscribe(download);
        spectator.click('button[icon]');
        expect(download).toHaveBeenCalled();
    });

    it('should delegate option updates to the state service', () => {
        spectator.component.setOptions({ user: { id: 'u2' } });
        expect(set_options).toHaveBeenCalledWith({ user: { id: 'u2' } });
    });

    it('should toggle printing state around window.print', () => {
        jest.useFakeTimers();
        const print_spy = jest
            .spyOn(window, 'print')
            .mockImplementation(() => undefined);
        const printing = jest.fn();
        spectator.component.printing.subscribe(printing);

        spectator.component.print();
        expect(printing).toHaveBeenNthCalledWith(1, true);
        expect(print_spy).not.toHaveBeenCalled();

        jest.advanceTimersByTime(300);
        expect(print_spy).toHaveBeenCalled();
        expect(printing).toHaveBeenNthCalledWith(2, false);
        jest.useRealTimers();
    });
});
