import { Component, ElementRef, inject } from '@angular/core';
import { TranslatePipe } from '@placeos/components';
import { SignageGroupAdminService } from './signage-group-admin.service';

type GroupTab = 'users' | 'zones';

@Component({
    selector: 'signage-group-tabs',
    imports: [TranslatePipe],
    template: `
        <div
            role="tablist"
            class="bg-base-100 border-base-300 mx-2 mt-2 flex overflow-hidden rounded-lg border"
            [attr.aria-label]="'SIGNAGE_MANAGER.GROUP_DETAILS_TABS' | translate"
            (keydown)="onKeydown($event)"
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
                    [attr.tabindex]="active_tab() === tab.id ? 0 : -1"
                    [id]="'group-' + tab.id + '-tab'"
                >
                    {{ tab.label | translate }}
                </button>
            }
        </div>
    `,
})
export class SignageGroupTabsComponent {
    private readonly _group_admin = inject(SignageGroupAdminService);
    private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);

    public readonly active_tab = this._group_admin.managed_group_tab;
    public readonly tabs: { id: GroupTab; label: string }[] = [
        { id: 'users', label: 'SIGNAGE_MANAGER.TAB_USERS' },
        { id: 'zones', label: 'SIGNAGE_MANAGER.TAB_ZONES' },
    ];

    /** Arrow keys, Home and End move between the tabs, as in a tab list */
    public onKeydown(event: KeyboardEvent) {
        const index = this.tabs.findIndex(({ id }) => id === this.active_tab());
        const last = this.tabs.length - 1;
        const targets: Record<string, number> = {
            ArrowLeft: index > 0 ? index - 1 : last,
            ArrowRight: index < last ? index + 1 : 0,
            Home: 0,
            End: last,
        };
        const next = targets[event.key];
        if (next === undefined) return;
        event.preventDefault();
        const tab = this.tabs[next].id;
        this.active_tab.set(tab);
        this._element.nativeElement
            .querySelector<HTMLElement>(`#group-${tab}-tab`)
            ?.focus();
    }
}
