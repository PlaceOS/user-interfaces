import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@placeos/components';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { SignageService } from '../signage.service';
import { SignageGroupContentComponent } from './signage-group-content.component';
import { SignageGroupDetailHeaderComponent } from './signage-group-detail-header.component';
import { SignageGroupHeaderComponent } from './signage-group-header.component';
import { SignageGroupListComponent } from './signage-group-list.component';
import { SignageGroupTabsComponent } from './signage-group-tabs.component';

@Component({
    selector: 'groups-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
                <signage-group-header />
                <main class="flex min-h-0 flex-1 flex-row overflow-hidden">
                    <signage-group-list />
                    <section
                        class="flex min-h-0 w-px flex-1 flex-col"
                        [class.mobile-hidden]="!selected_group()"
                    >
                        @if (selected_group()) {
                            <signage-group-detail-header />
                            <signage-group-tabs class="lg:hidden" />
                            <signage-group-content class="h-1/2 flex-1" />
                        } @else {
                            <div
                                class="flex h-full items-center justify-center p-8 text-center opacity-60"
                            >
                                {{
                                    'SIGNAGE_MANAGER.GROUPS_SELECT_PROMPT'
                                        | translate
                                }}
                            </div>
                        }
                    </section>
                </main>
            </div>
            <nav-footer />
        </div>
    `,
    styles: [
        `
            .mobile-hidden {
                @media (max-width: 639px) {
                    display: none !important;
                }
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        NavSidebarComponent,
        NavFooterComponent,
        SignageGroupHeaderComponent,
        SignageGroupListComponent,
        SignageGroupDetailHeaderComponent,
        SignageGroupTabsComponent,
        SignageGroupContentComponent,
        TranslatePipe,
    ],
})
export class GroupsSectionComponent {
    private readonly _service = inject(SignageService);

    public readonly selected_group = this._service.managed_group;
}
