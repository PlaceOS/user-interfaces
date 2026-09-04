import { Component, effect, inject, input, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { SignageService } from '../signage.service';
import { TemplateHeaderComponent } from './template-header.component';
import { TemplateLayoutListComponent } from './template-layout-list.component';
import { TemplateListComponent } from './template-list.component';
import { TemplatePreviewComponent } from './template-preview.component';

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
                                    class="sm:hidden"
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
                                <button
                                    #preview_tab
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'preview'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'preview'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'preview'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'preview'
                                    "
                                    (click)="setViewTab('preview')"
                                    (keydown)="
                                        handleTabKeydown(
                                            $event,
                                            preview_tab,
                                            layouts_tab
                                        )
                                    "
                                    [attr.aria-selected]="
                                        view_tab() === 'preview'
                                    "
                                    [tabIndex]="
                                        view_tab() === 'preview' ? 0 : -1
                                    "
                                    aria-controls="template-preview-panel"
                                    id="template-preview-tab"
                                >
                                    {{ 'COMMON.PREVIEW' | translate }}
                                </button>
                                <button
                                    #layouts_tab
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'layouts'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'layouts'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'layouts'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'layouts'
                                    "
                                    (click)="setViewTab('layouts')"
                                    (keydown)="
                                        handleTabKeydown(
                                            $event,
                                            preview_tab,
                                            layouts_tab
                                        )
                                    "
                                    [attr.aria-selected]="
                                        view_tab() === 'layouts'
                                    "
                                    [tabIndex]="
                                        view_tab() === 'layouts' ? 0 : -1
                                    "
                                    aria-controls="template-layouts-panel"
                                    id="template-layouts-tab"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.TEMPLATE_LAYOUT_ITEMS'
                                            | translate
                                    }}
                                </button>
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
                                        view_tab() === 'layouts'
                                    "
                                />
                                <template-layout-list
                                    id="template-layouts-panel"
                                    role="tabpanel"
                                    aria-labelledby="template-layouts-tab"
                                    class="h-full shrink-0"
                                    [class.tablet-hidden]="
                                        view_tab() === 'preview'
                                    "
                                    [class.tablet-full]="
                                        view_tab() === 'layouts'
                                    "
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
    private readonly _service = inject(SignageService);
    private readonly _router = inject(Router);

    public readonly id = input('');
    public readonly view_tab = signal<'preview' | 'layouts'>('preview');
    public readonly selected_template = this._service.selected_template;
    public readonly requires_approval =
        this._service.selected_template_requires_approval;
    public readonly can_approve = this._service.can_approve;
    public readonly can_update = this._service.can_update;
    public readonly can_delete = this._service.can_delete;
    public readonly can_share = this._service.can_share;
    public readonly approval_request_loading =
        this._service.template_approval_request_loading;

    private readonly _templates = this._service.templates;

    private _route_resolved = false;

    constructor() {
        // Sync selected template from route param
        effect(() => {
            const id = this.id();
            const list = this._templates();
            if (!list.length) return;
            if (id) {
                const match = list.find(
                    (template) =>
                        template.id === id || template.live_template_id === id,
                );
                if (match && this._service.selected_template() !== match) {
                    this._service.selected_template.set(match);
                    this._service.selected_template_layout_index.set(null);
                }
                if (match?.id && match.id !== id) {
                    void this._router.navigate(['/templates', match.id], {
                        queryParamsHandling: 'merge',
                        replaceUrl: true,
                    });
                } else if (!match) {
                    const selected_template = this._service.selected_template();
                    if (
                        selected_template?.id &&
                        list.some(
                            (template) => template.id === selected_template.id,
                        )
                    ) {
                        void this._router.navigate(
                            ['/templates', selected_template.id],
                            {
                                queryParamsHandling: 'merge',
                                replaceUrl: true,
                            },
                        );
                    }
                }
                this._route_resolved = true;
            } else if (this._route_resolved) {
                this._service.selected_template.set(null);
                this._service.selected_template_layout_index.set(null);
            }
        });
    }

    public editTemplate() {
        const template = this.selected_template();
        if (template) this._service.editTemplate(template);
    }

    public removeTemplate() {
        const template = this.selected_template();
        if (template) this._service.removeTemplate(template);
    }

    public shareTemplate() {
        const template = this.selected_template();
        if (template) this._service.shareTemplate(template);
    }

    public approveTemplate() {
        const template = this.selected_template();
        if (template) this._service.approveTemplate(template);
    }

    public requestApproval() {
        const template = this.selected_template();
        if (template) this._service.requestTemplateApproval(template);
    }

    public deselectTemplate() {
        this._service.selected_template.set(null);
        this._service.selected_template_layout_index.set(null);
        this._router.navigate(['/templates'], {});
    }

    public setViewTab(tab: 'preview' | 'layouts') {
        this.view_tab.set(tab);
    }

    public handleTabKeydown(
        event: KeyboardEvent,
        preview_tab: HTMLButtonElement,
        layouts_tab: HTMLButtonElement,
    ) {
        let tab: 'preview' | 'layouts' | null = null;
        if (event.key === 'Home') tab = 'preview';
        else if (event.key === 'End') tab = 'layouts';
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            tab = this.view_tab() === 'preview' ? 'layouts' : 'preview';
        }
        if (!tab) return;
        event.preventDefault();
        this.view_tab.set(tab);
        (tab === 'preview' ? preview_tab : layouts_tab).focus();
    }
}
