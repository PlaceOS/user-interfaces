import { Component, computed, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageGroupPermissionLabelsComponent } from './signage-group-permission-labels.component';

/** One user or zone of a signage group, as `<signage-group-members>` shows it */
export interface SignageGroupMember<T> {
    readonly id: string;
    readonly name: string;
    /** Second line under the name, such as an email */
    readonly detail?: string;
    /** Shows the "Denied" label after the permissions */
    readonly deny?: boolean;
    readonly permissions: number;
    /** Row of the service, given back by the edit and remove events */
    readonly row: T;
}

const MEMBER_TEXT = {
    users: {
        icon: 'group',
        row_icon: 'person',
        count: 'SIGNAGE_MANAGER.USERS_COUNT',
        add_tooltip: 'SIGNAGE_MANAGER.ADD_USER_TOOLTIP',
        add_label: 'SIGNAGE_MANAGER.ADD_USER_ARIA',
        load_error: 'SIGNAGE_MANAGER.USERS_LOAD_ERROR',
        edit: 'SIGNAGE_MANAGER.EDIT_USER_PERMS',
        remove: 'SIGNAGE_MANAGER.REMOVE_USER',
        empty_icon: 'group_off',
        empty: 'SIGNAGE_MANAGER.NO_USERS_ASSIGNED',
    },
    zones: {
        icon: 'layers',
        row_icon: 'layers',
        count: 'SIGNAGE_MANAGER.ZONES_COUNT',
        add_tooltip: 'SIGNAGE_MANAGER.ADD_ZONE_TOOLTIP',
        add_label: 'SIGNAGE_MANAGER.ADD_ZONE_ARIA',
        load_error: 'SIGNAGE_MANAGER.ZONES_LOAD_ERROR',
        edit: 'SIGNAGE_MANAGER.EDIT_ZONE_PERMS',
        remove: 'SIGNAGE_MANAGER.REMOVE_ZONE',
        empty_icon: 'layers_clear',
        empty: 'SIGNAGE_MANAGER.NO_ZONES_ASSIGNED',
    },
} as const;

/**
 * Card that lists the users or the zones of a signage group, with their
 * permissions and add, edit and remove buttons. The parent opens the dialogs
 * and calls the service.
 */
@Component({
    selector: 'signage-group-members',
    template: `
        @let t = text();
        <div
            class="bg-base-100 border-base-300 flex h-full min-h-0 flex-col overflow-auto rounded-lg border"
        >
            <div
                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
            >
                <h5
                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                >
                    <icon class="text-lg">{{ t.icon }}</icon>
                    {{
                        t.count
                            | translate
                                : { count: members().length }
                                : members().length
                    }}
                </h5>
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="t.add_tooltip | translate"
                    [attr.aria-label]="t.add_label | translate"
                    [disabled]="loading() || failed()"
                    (click)="add.emit()"
                >
                    <icon>add</icon>
                </button>
            </div>
            <div class="gap-2 p-2">
                @if (failed() && members().length) {
                    <p
                        class="text-error mb-2 flex items-center gap-2 px-2 text-sm"
                        role="alert"
                    >
                        <icon class="text-lg">error</icon>
                        {{ t.load_error | translate }}
                    </p>
                }
                @if (members().length) {
                    @for (member of members(); track member.id) {
                        <div
                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border px-4 py-3"
                        >
                            <icon class="shrink-0 text-xl opacity-60">{{
                                t.row_icon
                            }}</icon>
                            <div class="min-w-0 flex-1">
                                <div class="truncate text-sm font-medium">
                                    {{ member.name }}
                                </div>
                                @if (member.detail) {
                                    <div
                                        class="text-base-content/70 truncate text-xs"
                                    >
                                        {{ member.detail }}
                                    </div>
                                }
                                <div
                                    class="text-base-content/70 mt-1 truncate text-xs"
                                >
                                    <signage-group-permission-labels
                                        [permissions]="member.permissions"
                                    />
                                    @if (member.deny) {
                                        <span class="text-error">
                                            {{
                                                'SIGNAGE_MANAGER.DENIED'
                                                    | translate
                                            }}</span
                                        >
                                    }
                                </div>
                            </div>
                            <button
                                icon
                                default
                                type="button"
                                matRipple
                                [matTooltip]="t.edit | translate"
                                [attr.aria-label]="t.edit | translate"
                                (click)="edit.emit(member.row)"
                            >
                                <icon>edit</icon>
                            </button>
                            <button
                                icon
                                default
                                error
                                type="button"
                                matRipple
                                [matTooltip]="t.remove | translate"
                                [attr.aria-label]="t.remove | translate"
                                (click)="remove.emit(member.row)"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    }
                } @else if (loading()) {
                    <div class="flex justify-center p-6">
                        <mat-spinner diameter="32" />
                    </div>
                } @else if (failed()) {
                    <div
                        class="text-error flex flex-col items-center justify-center space-y-2 p-6"
                    >
                        <icon class="text-4xl">error</icon>
                        <p class="text-sm">
                            {{ t.load_error | translate }}
                        </p>
                    </div>
                } @else {
                    <div
                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                    >
                        <icon class="text-4xl">{{ t.empty_icon }}</icon>
                        <p class="text-sm">
                            {{ t.empty | translate }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `,
    host: { class: 'flex min-h-0 flex-1 flex-col' },
    imports: [
        MatProgressSpinnerModule,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
        SignageGroupPermissionLabelsComponent,
    ],
})
export class SignageGroupMembersComponent<T> {
    /** Picks the icons and the text */
    public readonly kind = input.required<'users' | 'zones'>();
    public readonly members =
        input.required<readonly SignageGroupMember<T>[]>();
    public readonly loading = input(false);
    public readonly failed = input(false);

    public readonly add = output();
    public readonly edit = output<T>();
    public readonly remove = output<T>();

    public readonly text = computed(() => MEMBER_TEXT[this.kind()]);
}
