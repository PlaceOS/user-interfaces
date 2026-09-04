import {
    afterRenderEffect,
    Component,
    ElementRef,
    inject,
    viewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageTemplate } from '@placeos/ts-client';
import { IntersectDirective } from '../shared/intersect.directive';
import { SignageService } from '../signage.service';

type TemplateStatus = 'awaiting_approval' | 'awaiting_review' | null;

@Component({
    selector: 'template-list',
    template: `
        <div
            class="bg-base-100 border-base-300 h-full min-w-64 overflow-auto border-r sm:max-w-80"
        >
            <div
                class="border-base-300 bg-base-100 sticky top-0 z-10 border-b p-2"
            >
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_TEMPLATES' | translate
                        "
                        [(ngModel)]="search"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SEARCH_TEMPLATES' | translate
                        "
                    />
                </mat-form-field>
            </div>
            @if (templates().length > 0) {
                @for (template of templates(); track template.id) {
                    <a
                        #template_item
                        matRipple
                        class="border-base-300 relative z-0 flex w-full cursor-pointer items-center gap-3 border-b px-2 py-2 text-left no-underline transition-colors"
                        [class.bg-primary]="selected()?.id === template.id"
                        [class.text-primary-content]="
                            selected()?.id === template.id
                        "
                        [class.hover:bg-base-200]="
                            selected()?.id !== template.id
                        "
                        [routerLink]="['/templates', template.id]"
                        queryParamsHandling="merge"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.OPEN_TEMPLATE'
                                | translate: { name: template.name }
                        "
                    >
                        <icon class="shrink-0 text-3xl opacity-60"
                            >dashboard_customize</icon
                        >
                        <div class="min-w-0 flex-1 pr-2">
                            <div class="truncate font-medium">
                                {{ template.name }}
                            </div>
                            <div
                                class="flex flex-wrap gap-1 text-[0.625rem] font-medium uppercase"
                            >
                                <span
                                    class="bg-base-200 text-base-content shrink-0 rounded px-1.5 py-0.5"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.TEMPLATE_LAYOUT_COUNT'
                                            | translate
                                                : {
                                                      count: template.layouts
                                                          .length,
                                                  }
                                    }}
                                </span>
                                @switch (getStatus(template)) {
                                    @case ('awaiting_review') {
                                        <span
                                            class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW'
                                                    | translate
                                            }}
                                        </span>
                                    }
                                    @case ('awaiting_approval') {
                                        <span
                                            class="bg-base-300 shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{
                                                'COMMON.APPROVAL_REQUIRED'
                                                    | translate
                                            }}
                                        </span>
                                    }
                                }
                            </div>
                            @if (template.description) {
                                <div
                                    class="mt-0.5 truncate text-xs"
                                    [class.opacity-70]="
                                        selected()?.id !== template.id
                                    "
                                    [class.opacity-90]="
                                        selected()?.id === template.id
                                    "
                                >
                                    {{ template.description }}
                                </div>
                            }
                            @if (template.shared_with.length) {
                                <div
                                    class="mt-0.5 flex min-w-0 items-center gap-1 text-xs"
                                    [class.opacity-70]="
                                        selected()?.id !== template.id
                                    "
                                    [class.opacity-90]="
                                        selected()?.id === template.id
                                    "
                                    [title]="sharedGroupNames(template)"
                                >
                                    <icon class="shrink-0 text-base"
                                        >groups</icon
                                    >
                                    <span class="shrink-0">
                                        {{
                                            'SIGNAGE_MANAGER.SHARED_WITH'
                                                | translate
                                        }}:
                                    </span>
                                    <span class="truncate">
                                        {{ sharedGroupNames(template) }}
                                    </span>
                                </div>
                            }
                        </div>
                    </a>
                }
                @if (has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="loadMore()"
                    ></div>
                } @else {
                    <div
                        class="text-base-content/50 bg-base-content/10 col-span-full my-2 p-2 text-center text-xs"
                    >
                        {{ 'COMMON.END_OF_LIST' | translate }}
                    </div>
                }
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">dashboard_customize</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_TEMPLATES' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
        `,
    ],
    imports: [
        FormsModule,
        RouterLink,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        TranslatePipe,
        IntersectDirective,
    ],
})
export class TemplateListComponent {
    private readonly _service = inject(SignageService);
    private readonly _template_items =
        viewChildren<ElementRef<HTMLAnchorElement>>('template_item');

    public readonly search = this._service.template_search_term;
    public readonly templates = this._service.templates;
    public readonly selected = this._service.selected_template;

    // Backend pagination: fetches the next page as the sentinel scrolls in.
    public readonly has_more = this._service.templates_has_more;

    constructor() {
        afterRenderEffect({
            earlyRead: () => {
                const selected_id = this.selected()?.id;
                if (!selected_id) return;
                const template_index = this.templates().findIndex(
                    ({ id }) => id === selected_id,
                );
                return this._template_items()[template_index]?.nativeElement;
            },
            write: (selected_item) => {
                selected_item()?.scrollIntoView?.({
                    behavior: 'instant',
                    block: 'nearest',
                    inline: 'nearest',
                });
            },
        });
    }

    public loadMore() {
        this._service.loadMoreTemplates();
    }

    public getStatus(template: SignageTemplate): TemplateStatus {
        if (template.approved) return null;
        return template.approval_requested
            ? 'awaiting_review'
            : 'awaiting_approval';
    }

    public sharedGroupNames(template: SignageTemplate) {
        return template.shared_with.map(({ name }) => name).join(', ');
    }
}
