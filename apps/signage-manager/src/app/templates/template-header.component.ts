import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { GroupBreadcrumbsComponent } from '../shared/group-breadcrumbs.component';
import { SignageContextService } from '../signage-context.service';
import { SignageTemplateService } from './signage-template.service';

@Component({
    selector: 'template-header',
    template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.TEMPLATES_PAGE_TITLE' | translate }}
                </h3>
                <div class="flex flex-wrap items-center gap-2">
                    <div class="text-sm opacity-60">
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate: { count: total_count() }
                        }}
                    </div>
                    <group-breadcrumbs />
                </div>
            </div>
            <div class="w-px flex-1"></div>
            @if (can_create()) {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    class="text-xl"
                    (click)="addTemplate()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CREATE_NEW_TEMPLATE' | translate
                    "
                    [matTooltip]="'SIGNAGE_MANAGER.NEW_TEMPLATE' | translate"
                >
                    <icon>add</icon>
                </button>
            }
        </div>
    `,
    imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        GroupBreadcrumbsComponent,
        MatTooltipModule,
    ],
})
export class TemplateHeaderComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _template_service = inject(SignageTemplateService);

    public readonly total_count = computed(
        () => this._template_service.templates().length,
    );
    public readonly can_create = this._context.can_create_templates;

    public addTemplate() {
        this._template_service.addTemplate();
    }
}
