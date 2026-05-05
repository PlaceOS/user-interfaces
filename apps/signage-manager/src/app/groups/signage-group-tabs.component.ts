import { Component, inject } from '@angular/core';
import { SignageService } from '../signage.service';

@Component({
    selector: 'signage-group-tabs',
    template: `
        <nav
            class="bg-base-100 border-base-300 mx-2 mt-2 flex overflow-hidden rounded-lg border"
            aria-label="Group details tabs"
        >
            @for (tab of tabs; track tab.id) {
                <button
                    type="button"
                    role="tab"
                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                    [class.border-b-2]="active_tab() === tab.id"
                    [class.text-primary]="active_tab() === tab.id"
                    [class.opacity-60]="active_tab() !== tab.id"
                    (click)="active_tab.set(tab.id)"
                    [attr.aria-selected]="active_tab() === tab.id"
                    [attr.aria-controls]="'group-' + tab.id + '-panel'"
                    [id]="'group-' + tab.id + '-tab'"
                >
                    {{ tab.label }}
                </button>
            }
        </nav>
    `,
})
export class SignageGroupTabsComponent {
    private readonly _service = inject(SignageService);

    public readonly active_tab = this._service.managed_group_tab;
    public readonly tabs = [
        { id: 'users' as const, label: 'Users' },
        { id: 'zones' as const, label: 'Zones' },
    ];
}
