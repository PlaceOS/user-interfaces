import {
    Component,
    computed,
    effect,
    inject,
    input,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { SignageContextService } from '../signage-context.service';
import {
    SignageTemplateService,
    isSameSignageTemplate,
} from './signage-template.service';
import { TemplateHeaderComponent } from './template-header.component';
import { TemplateLayoutListComponent } from './template-layout-list.component';
import { tabKeyIndex } from './template-layout.util';
import { TemplateListComponent } from './template-list.component';
import { TemplatePreviewComponent } from './template-preview.component';

type TemplateViewTab = 'preview' | 'layouts' | 'details';

@Component({
    selector: 'templates-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col">
                <template-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <template-list
                        [class.mobile-hidden]="!!selected_template()"
                        class="mobile-full"
                    />
                    <div
                        class="flex min-h-0 w-px flex-1 flex-col"
                        [class.mobile-hidden]="!selected_template()"
                    >
                        @if (selected_template(); as template) {
                            <div
                                class="bg-base-100 border-base-300 mx-2 flex items-center gap-2 rounded-b-lg border p-2"
                            >
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    class="desktop-hidden"
                                    (click)="deselectTemplate()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.BACK_TO_TEMPLATES'
                                            | translate
                                    "
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <div class="flex w-1/2 flex-1 flex-col px-2">
                                    <h4 class="truncate text-lg font-medium">
                                        {{ template.name }}
                                    </h4>
                                    @if (template.description) {
                                        <div class="-mt-1 truncate text-xs">
                                            {{ template.description }}
                                        </div>
                                    }
                                </div>
                                <div></div>
                                @if (requires_approval()) {
                                    @if (can_approve()) {
                                        <button
                                            icon
                                            default
                                            type="button"
                                            matRipple
                                            [matTooltip]="
                                                'SIGNAGE_MANAGER.APPROVE_TEMPLATE_TOOLTIP'
                                                    | translate
                                            "
                                            (click)="approveTemplate()"
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.APPROVE_SELECTED_TEMPLATE'
                                                    | translate
                                            "
                                        >
                                            <icon class="text-warning"
                                                >order_approve</icon
                                            >
                                        </button>
                                    } @else {
                                        <button
                                            icon
                                            default
                                            type="button"
                                            matRipple
                                            [matTooltip]="
                                                'SIGNAGE_MANAGER.REQUEST_TEMPLATE_APPROVAL_TOOLTIP'
                                                    | translate
                                            "
                                            (click)="requestApproval()"
                                            [disabled]="
                                                approval_request_loading()
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.REQUEST_APPROVAL_SELECTED_TEMPLATE'
                                                    | translate
                                            "
                                        >
                                            @if (approval_request_loading()) {
                                                <mat-spinner diameter="20" />
                                            } @else {
                                                <icon class="text-warning"
                                                    >approval</icon
                                                >
                                            }
                                        </button>
                                    }
                                }
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.EDIT_TEMPLATE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="editTemplate()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.EDIT_SELECTED_TEMPLATE'
                                                | translate
                                        "
                                    >
                                        <icon>edit</icon>
                                    </button>
                                }
                                @if (can_create()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.DUPLICATE_TEMPLATE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="duplicateTemplate()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.DUPLICATE_SELECTED_TEMPLATE'
                                                | translate
                                        "
                                    >
                                        <icon>content_copy</icon>
                                    </button>
                                }
                                @if (can_share()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.SHARE_TEMPLATE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="shareTemplate()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.SHARE_SELECTED_TEMPLATE'
                                                | translate
                                        "
                                    >
                                        <icon>ios_share</icon>
                                    </button>
                                }
                                @if (can_delete()) {
                                    <button
                                        icon
                                        default
                                        error
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.DELETE_TEMPLATE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="removeTemplate()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.DELETE_SELECTED_TEMPLATE'
                                                | translate
                                        "
                                    >
                                        <icon>delete</icon>
                                    </button>
                                }
                            </div>
                            <div
                                class="bg-base-100 border-base-300 mx-2 my-2 flex rounded-lg border lg:hidden"
                                role="tablist"
                                [attr.aria-label]="'COMMON.DETAILS' | translate"
                            >
                                @for (tab of tabs; track tab.id) {
                                    <button
                                        type="button"
                                        role="tab"
                                        class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                        [class.border-primary]="
                                            view_tab() === tab.id
                                        "
                                        [class.border-b-2]="
                                            view_tab() === tab.id
                                        "
                                        [class.text-primary]="
                                            view_tab() === tab.id
                                        "
                                        [class.opacity-60]="
                                            view_tab() !== tab.id
                                        "
                                        (click)="setViewTab(tab.id)"
                                        (keydown)="handleTabKeydown($event)"
                                        [attr.aria-selected]="
                                            view_tab() === tab.id
                                        "
                                        [tabIndex]="
                                            view_tab() === tab.id ? 0 : -1
                                        "
                                        [attr.aria-controls]="
                                            'template-' + tab.id + '-panel'
                                        "
                                        [id]="'template-' + tab.id + '-tab'"
                                    >
                                        {{ tab.label | translate }}
                                    </button>
                                }
                            </div>
                            <div
                                class="flex min-h-0 flex-1 flex-row overflow-hidden"
                            >
                                <template-preview
                                    id="template-preview-panel"
                                    role="tabpanel"
                                    aria-labelledby="template-preview-tab"
                                    class="min-h-0 w-full flex-1 lg:w-px"
                                    [class.tablet-hidden]="
                                        view_tab() !== 'preview'
                                    "
                                />
                                <template-layout-list
                                    role="tabpanel"
                                    class="h-full shrink-0"
                                    [id]="'template-' + layout_tab() + '-panel'"
                                    [attr.aria-labelledby]="
                                        'template-' + layout_tab() + '-tab'
                                    "
                                    [class.tablet-hidden]="
                                        view_tab() === 'preview'
                                    "
                                    [class.tablet-full]="
                                        view_tab() !== 'preview'
                                    "
                                    [tab]="
                                        layout_tab() === 'details'
                                            ? 'details'
                                            : 'items'
                                    "
                                    (tabChange)="setLayoutTab($event)"
                                />
                            </div>
                        } @else {
                            <div
                                class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                            >
                                <icon class="text-6xl"
                                    >dashboard_customize</icon
                                >
                                <p>
                                    {{
                                        'SIGNAGE_MANAGER.SELECT_TEMPLATE_HINT'
                                            | translate
                                    }}
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <nav-footer />
        </div>
    `,
    host: { '(window:beforeunload)': 'onBeforeUnload($event)' },
    styles: [
        `
            .mobile-hidden {
                @media (max-width: 639px) {
                    display: none !important;
                }
            }

            .mobile-full {
                @media (max-width: 639px) {
                    flex: 1;
                }
            }

            .tablet-hidden {
                @media (max-width: 1023px) {
                    display: none !important;
                }
            }

            .tablet-full {
                @media (max-width: 1023px) {
                    flex: 1;
                    min-width: 0;
                }
            }
        `,
    ],
    imports: [
        NavSidebarComponent,
        NavFooterComponent,
        TemplateHeaderComponent,
        TemplateListComponent,
        TemplatePreviewComponent,
        TemplateLayoutListComponent,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class TemplatesSectionComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _template_service = inject(SignageTemplateService);
    private readonly _router = inject(Router);

    public readonly id = input('');
    /** Tabs shown below the lg breakpoint. Wider screens show all panels. */
    public readonly tabs: { id: TemplateViewTab; label: string }[] = [
        { id: 'preview', label: 'COMMON.PREVIEW' },
        { id: 'layouts', label: 'SIGNAGE_MANAGER.TEMPLATE_LAYOUT_ITEMS' },
        { id: 'details', label: 'COMMON.DETAILS' },
    ];
    public readonly view_tab = signal<TemplateViewTab>('preview');
    /**
     * Mobile tab of the layout list panel. It is never 'preview', so the
     * panel does not share its ID with the preview panel.
     */
    public readonly layout_tab = computed(() =>
        this.view_tab() === 'details' ? 'details' : 'layouts',
    );
    public readonly selected_template =
        this._template_service.selected_template;
    public readonly requires_approval =
        this._template_service.selected_template_requires_approval;
    public readonly can_approve = this._context.can_approve;
    public readonly can_update = this._context.can_update_templates;
    public readonly can_create = this._context.can_create_templates;
    public readonly can_delete = this._context.can_delete_templates;
    public readonly can_share = this._context.can_share;
    public readonly approval_request_loading =
        this._template_service.template_approval_request_loading;

    private readonly _templates = this._template_service.templates;

    private _route_resolved = false;
    // Route id fetched on its own because the loaded pages do not include it
    private _fetched_id = '';

    constructor() {
        // Sync selected template from route param
        effect(() => {
            const id = this.id();
            const list = this._templates();
            // Wait for the list, but a link still opens when it has no rows
            if (!list.length && !this._template_service.templates_ready()) {
                return;
            }
            if (id) {
                const match = list.find(
                    (template) =>
                        template.id === id || template.live_template_id === id,
                );
                const selected = this._template_service.selected_template();
                const same_template =
                    !!selected &&
                    !!match &&
                    isSameSignageTemplate(selected, match);
                // A list reload returns new objects for the same templates.
                // Keep the current object while layout edits are unsaved so
                // the draft survives, and keep the expanded row otherwise.
                if (
                    match &&
                    selected !== match &&
                    !(
                        same_template &&
                        this._template_service.template_layout_dirty()
                    )
                ) {
                    this._template_service.selected_template.set(match);
                    if (!same_template) {
                        this._template_service.selected_template_layout_index.set(
                            null,
                        );
                    }
                }
                // Route by the live ID. A draft ID fails template calls.
                const match_id = match?.live_template_id || match?.id;
                if (match_id && match_id !== id) {
                    this._replaceRoute(match_id);
                } else if (
                    !match &&
                    this._fetched_id !== id &&
                    !(
                        selected &&
                        (selected.id === id || selected.live_template_id === id)
                    )
                ) {
                    // The loaded pages do not hold it, e.g. a link to a
                    // template past the first page. Fetch it once. A search
                    // can also hide the selected template, which needs no
                    // fetch.
                    this._fetched_id = id;
                    void this._selectFetchedTemplate(id);
                }
                this._route_resolved = true;
            } else if (this._route_resolved) {
                this._template_service.selected_template.set(null);
                this._template_service.selected_template_layout_index.set(null);
            }
        });
    }

    public editTemplate() {
        const template = this.selected_template();
        if (template) this._template_service.editTemplate(template);
    }

    public async removeTemplate() {
        const template = this.selected_template();
        if (!template) return;
        if (await this._template_service.removeTemplate(template)) {
            // Leave the deleted template's route, or it would be selected again
            void this._router.navigate(['/templates'], {
                queryParamsHandling: 'merge',
            });
        }
    }

    public async duplicateTemplate() {
        const template = this.selected_template();
        if (!template) return;
        const copy = await this._template_service.duplicateTemplate(template);
        if (copy?.id) {
            void this._router.navigate(['/templates', copy.id], {
                queryParamsHandling: 'merge',
            });
        }
    }

    public shareTemplate() {
        const template = this.selected_template();
        if (template) this._template_service.shareTemplate(template);
    }

    public approveTemplate() {
        const template = this.selected_template();
        if (template) this._template_service.approveTemplate(template);
    }

    public requestApproval() {
        const template = this.selected_template();
        if (template) this._template_service.requestTemplateApproval(template);
    }

    public async deselectTemplate() {
        // Navigate first so the unsaved-changes guard can cancel the deselect
        const navigated = await this._router.navigate(['/templates'], {});
        if (!navigated) return;
        this._template_service.selected_template.set(null);
        this._template_service.selected_template_layout_index.set(null);
    }

    /** Asks the browser to warn before a reload or tab close drops unsaved layout edits */
    public onBeforeUnload(event: BeforeUnloadEvent) {
        if (this._template_service.template_layout_dirty())
            event.preventDefault();
    }

    public setViewTab(tab: TemplateViewTab) {
        this.view_tab.set(tab);
    }

    /** Mirror the layout list's inner tab into the mobile tabs. */
    public setLayoutTab(tab: 'items' | 'details') {
        this.view_tab.set(tab === 'details' ? 'details' : 'layouts');
    }

    public handleTabKeydown(event: KeyboardEvent) {
        const ids = this.tabs.map(({ id }) => id);
        const next = tabKeyIndex(
            event.key,
            ids.indexOf(this.view_tab()),
            ids.length,
        );
        if (next === null) return;
        event.preventDefault();
        this.view_tab.set(ids[next]);
        (event.currentTarget as HTMLElement | null)?.parentElement
            ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
            [next]?.focus();
    }

    /**
     * Fetch the template of the route and select it. The service lists it
     * unless a search is active, so it is selected here directly.
     */
    private async _selectFetchedTemplate(id: string) {
        const template = await this._template_service.loadTemplate(id);
        if (!template) {
            // Let a later list change try the link again
            if (this._fetched_id === id) this._fetched_id = '';
            return;
        }
        if (this.id() !== id) return;
        const selected = this._template_service.selected_template();
        if (!selected || !isSameSignageTemplate(selected, template)) {
            this._template_service.selected_template.set(template);
            this._template_service.selected_template_layout_index.set(null);
        }
        if (template.id !== id) this._replaceRoute(template.id);
    }

    private _replaceRoute(id: string) {
        void this._router.navigate(['/templates', id], {
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }
}
