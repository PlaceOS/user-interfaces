import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { settingSignal } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { AutoAssignedDeskModalComponent } from '../book/desk-flow/auto-assigned-desk-modal.component';
import { landingFeatures, QUICK_LINKS } from './landing-features';

@Component({
    selector: 'landing-quick-actions',
    template: `
        <div
            class="space-y-2 rounded-lg border border-base-300 bg-base-100 p-4"
        >
            <div class="mb-2 flex items-center justify-between">
                <h3 class="text-lg font-medium">
                    {{ 'APP.WORKPLACE.QUICK_ACTIONS_HEADER' | translate }}
                </h3>
            </div>
            @if (can_quick_book()) {
                <button
                    btn
                    matRipple
                    name="auto-assign-desk"
                    class="h-16 w-full"
                    (click)="autoAssignDesk()"
                >
                    <div class="space-y-1">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">bolt</icon>
                            <div class="pr-2 font-medium">
                                {{
                                    'APP.WORKPLACE.QUICK_ACTIONS_AUTO_DESK'
                                        | translate
                                }}
                            </div>
                        </div>
                        <div class="text-xs">
                            {{
                                'APP.WORKPLACE.QUICK_ACTIONS_AUTO_DESK_HINT'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            }
            @if (links().length) {
                <h4 class="font-medium">
                    {{ 'APP.WORKPLACE.QUICK_LINKS_HEADER' | translate }}
                </h4>
                @for (link of links(); track link.feature) {
                    <a
                        btn
                        matRipple
                        [routerLink]="link.route"
                        class="inverse w-full space-x-4 text-left"
                    >
                        <icon class="text-xl">{{ link.icon }}</icon>
                        <div class="flex-1">{{ link.name | translate }}</div>
                        <icon class="text-xl">chevron_right</icon>
                    </a>
                }
            }
        </div>
    `,
    imports: [MatRippleModule, RouterModule, IconComponent, TranslatePipe],
})
export class LandingQuickActionsComponent {
    private _dialog = inject(MatDialog);

    public readonly features = landingFeatures();
    /** Show the one-click desk booking. Set to `false` to hide it */
    public readonly show_quick_book = settingSignal<boolean>('show_quick_book');
    /** Show the booking links. Set to `false` to hide them */
    public readonly show_quick_links =
        settingSignal<boolean>('show_quick_links');

    public readonly can_quick_book = computed(
        () =>
            this.show_quick_book() !== false &&
            this.features().includes('desks'),
    );
    public readonly links = computed(() =>
        this.show_quick_links() !== false
            ? QUICK_LINKS.filter((link) =>
                  this.features().includes(link.feature),
              )
            : [],
    );

    public readonly autoAssignDesk = () => {
        // Open the auto-assigned desk modal
        const dialog_ref = this._dialog.open(AutoAssignedDeskModalComponent, {
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'auto-assigned-desk-modal',
        });
        dialog_ref.componentInstance.show_close.set(true);
    };
}
