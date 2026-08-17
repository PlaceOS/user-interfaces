import { Component, effect, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
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
                                class="flex min-h-0 flex-1 flex-col overflow-auto lg:flex-row lg:overflow-visible"
                            >
                                <template-preview
                                    class="min-h-72 w-full flex-1 lg:min-h-0 lg:w-px"
                                />
                                <template-layout-list
                                    class="shrink-0 lg:h-full"
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
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class TemplatesSectionComponent {
    private readonly _service = inject(SignageService);
    private readonly _router = inject(Router);

    public readonly id = input('');
    public readonly selected_template = this._service.selected_template;
    public readonly can_update = this._service.can_update;
    public readonly can_delete = this._service.can_delete;

    private readonly _templates = this._service.templates;

    private _route_resolved = false;

    constructor() {
        // Sync selected template from route param
        effect(() => {
            const id = this.id();
            const list = this._templates();
            if (!list.length) return;
            if (id) {
                const match = list.find((t) => t.id === id);
                if (match && this._service.selected_template() !== match) {
                    this._service.selected_template.set(match);
                    this._service.selected_template_layout_index.set(null);
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

    public deselectTemplate() {
        this._service.selected_template.set(null);
        this._service.selected_template_layout_index.set(null);
        this._router.navigate(['/templates'], {});
    }
}
