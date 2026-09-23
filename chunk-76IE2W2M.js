import {
  MatInput,
  MatInputModule
} from "./chunk-XXOZKDFH.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-ENMVWGR2.js";
import {
  TranslatePipe
} from "./chunk-4DBHNJWE.js";
import {
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JL3PENQK.js";

// apps/signage-manager/src/app/shared/group-select-modal.component.ts
var _forTrack0 = ($index, $item) => $item.group.id;
var _forTrack1 = ($index, $item) => $item.id;
function GroupSelectModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 4);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 10);
    \u0275\u0275text(3, "public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.ACTIVE_GROUP_HIERARCHY"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "SIGNAGE_MANAGER.ALL_GROUPS"));
  }
}
function GroupSelectModalComponent_Conditional_9_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "icon", 15);
    \u0275\u0275text(3, " chevron_right ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("mat-dialog-close", group_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r1.name, " ");
  }
}
function GroupSelectModalComponent_Conditional_9_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r1.name, " ");
  }
}
function GroupSelectModalComponent_Conditional_9_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GroupSelectModalComponent_Conditional_9_For_5_Conditional_0_Template, 4, 2)(1, GroupSelectModalComponent_Conditional_9_For_5_Conditional_1_Template, 2, 1, "span", 13);
  }
  if (rf & 2) {
    const \u0275$index_32_r2 = ctx.$index;
    const \u0275$count_32_r3 = ctx.$count;
    \u0275\u0275conditional(!(\u0275$index_32_r2 === \u0275$count_32_r3 - 1) ? 0 : 1);
  }
}
function GroupSelectModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 12);
    \u0275\u0275text(3, " account_tree ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, GroupSelectModalComponent_Conditional_9_For_5_Template, 2, 1, null, null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.ACTIVE_GROUP_HIERARCHY"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.selected_hierarchy());
  }
}
function GroupSelectModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 16)(1, "icon", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-secondary", !ctx_r3.data.selected_group_id)("text-secondary-content", !ctx_r3.data.selected_group_id);
    \u0275\u0275property("mat-dialog-close", "");
    \u0275\u0275attribute("aria-current", !ctx_r3.data.selected_group_id ? "true" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", !ctx_r3.data.selected_group_id ? "check_circle" : "public", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "SIGNAGE_MANAGER.ALL_GROUPS"), " ");
  }
}
function GroupSelectModalComponent_For_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.group.description, " ");
  }
}
function GroupSelectModalComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 16)(1, "icon", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, GroupSelectModalComponent_For_16_Conditional_6_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-secondary", ctx_r3.data.selected_group_id === item_r5.group.id)("text-secondary-content", ctx_r3.data.selected_group_id === item_r5.group.id);
    \u0275\u0275property("mat-dialog-close", item_r5.group.id);
    \u0275\u0275attribute("aria-current", ctx_r3.data.selected_group_id === item_r5.group.id ? "true" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.data.selected_group_id === item_r5.group.id ? "check_circle" : "group", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.group.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.group.description ? 6 : -1);
  }
}
function GroupSelectModalComponent_ForEmpty_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 21);
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_GROUPS_AVAILABLE"), " ");
  }
}
var GroupSelectModalComponent = class _GroupSelectModalComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_groups = computed(
      () => {
        const term = this.search().toLowerCase().trim();
        if (!term)
          return this.data.groups;
        return this.data.groups.filter((item) => `${item.group.name} ${item.group.description || ""}`.toLowerCase().includes(term));
      },
      ...ngDevMode ? [{ debugName: "filtered_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_hierarchy = computed(
      () => {
        const selected_group_id = this.data.selected_group_id;
        if (!selected_group_id)
          return [];
        const groups = new Map(this.data.groups.map((item) => [item.group.id, item.group]));
        const hierarchy = [];
        const seen = /* @__PURE__ */ new Set();
        let group = groups.get(selected_group_id);
        while (group?.id && !seen.has(group.id)) {
          hierarchy.unshift(group);
          seen.add(group.id);
          group = group.parent_id ? groups.get(group.parent_id) : void 0;
        }
        return hierarchy;
      },
      ...ngDevMode ? [{ debugName: "selected_hierarchy" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function GroupSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupSelectModalComponent, selectors: [["group-select-modal"]], decls: 18, vars: 14, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "max-w-lg", "min-w-lg", "space-y-2", "overflow-auto", "px-4", "pt-2", "pb-4", "text-center", "max-md:h-auto", "max-md:max-w-none", "max-md:min-w-0", "max-md:flex-1"], [1, "border-base-300", "bg-base-200/60", "flex", "w-full", "items-center", "gap-2", "rounded-lg", "border", "px-3", "py-2", "text-left", "text-sm"], [1, "border-base-300", "bg-base-200/60", "flex", "w-full", "items-center", "gap-1", "overflow-x-auto", "rounded-lg", "border", "px-3", "py-2", "text-left", "text-sm"], ["appearance", "outline", 1, "no-subscript", "bg-base-100", "sticky", "top-0", "z-10", "w-full"], ["matInput", "", "cdkFocusInitial", "", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-16", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "bg-secondary", "text-secondary-content", "mat-dialog-close"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-lg", "p-16"], [1, "text-base-content/60", "text-xl"], [1, "font-medium"], [1, "text-base-content/60", "mr-1", "text-xl"], ["aria-current", "page", 1, "bg-primary/15", "text-primary", "shrink-0", "rounded", "px-2", "py-1", "font-medium"], ["type", "button", 1, "hover:bg-base-300", "shrink-0", "rounded", "px-2", "py-1", 3, "mat-dialog-close"], [1, "text-base-content/40", "text-lg"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-16", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "mat-dialog-close"], [1, "shrink-0", "text-2xl"], [1, "min-w-0", "flex-1"], [1, "truncate"], [1, "text-base-content/70", "truncate", "text-xs"], [1, "text-base-content/70", "text-8xl"], [1, "text-base-content/70"]], template: function GroupSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementStart(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 3);
        \u0275\u0275conditionalCreate(8, GroupSelectModalComponent_Conditional_8_Template, 7, 6, "nav", 4)(9, GroupSelectModalComponent_Conditional_9_Template, 6, 3, "nav", 5);
        \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "input", 7);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275listener("ngModelChange", function GroupSelectModalComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, GroupSelectModalComponent_Conditional_14_Template, 7, 10, "button", 8);
        \u0275\u0275repeaterCreate(15, GroupSelectModalComponent_For_16_Template, 7, 9, "button", 8, _forTrack0, false, GroupSelectModalComponent_ForEmpty_17_Template, 6, 3, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.data.title);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 8, "SIGNAGE_MANAGER.CLOSE_GROUP_SELECT"));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.data.selected_group_id && ctx.data.show_all_groups ? 8 : ctx.selected_hierarchy().length ? 9 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.search())("placeholder", \u0275\u0275pipeBind1(12, 10, "SIGNAGE_MANAGER.SEARCH_GROUPS"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 12, "SIGNAGE_MANAGER.SEARCH_GROUPS"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.data.show_all_groups && !ctx.search() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filtered_groups());
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupSelectModalComponent, [{
    type: Component,
    args: [{
      // Existing signage-manager components use feature selectors without the app prefix.
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "group-select-modal",
      template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">{{ data.title }}</h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.CLOSE_GROUP_SELECT' | translate
                "
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            @if (!data.selected_group_id && data.show_all_groups) {
                <nav
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ACTIVE_GROUP_HIERARCHY' | translate
                    "
                    class="border-base-300 bg-base-200/60 flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm"
                >
                    <icon class="text-base-content/60 text-xl">public</icon>
                    <span class="font-medium">{{
                        'SIGNAGE_MANAGER.ALL_GROUPS' | translate
                    }}</span>
                </nav>
            } @else if (selected_hierarchy().length) {
                <nav
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ACTIVE_GROUP_HIERARCHY' | translate
                    "
                    class="border-base-300 bg-base-200/60 flex w-full items-center gap-1 overflow-x-auto rounded-lg border px-3 py-2 text-left text-sm"
                >
                    <icon class="text-base-content/60 mr-1 text-xl">
                        account_tree
                    </icon>
                    @for (
                        group of selected_hierarchy();
                        track group.id;
                        let last = $last
                    ) {
                        @if (!last) {
                            <button
                                type="button"
                                class="hover:bg-base-300 shrink-0 rounded px-2 py-1"
                                [mat-dialog-close]="group.id"
                            >
                                {{ group.name }}
                            </button>
                            <icon class="text-base-content/40 text-lg">
                                chevron_right
                            </icon>
                        } @else {
                            <span
                                class="bg-primary/15 text-primary shrink-0 rounded px-2 py-1 font-medium"
                                aria-current="page"
                            >
                                {{ group.name }}
                            </span>
                        }
                    }
                </nav>
            }
            <mat-form-field
                appearance="outline"
                class="no-subscript bg-base-100 sticky top-0 z-10 w-full"
            >
                <input
                    matInput
                    cdkFocusInitial
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
                    [placeholder]="'SIGNAGE_MANAGER.SEARCH_GROUPS' | translate"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SEARCH_GROUPS' | translate
                    "
                />
            </mat-form-field>
            @if (data.show_all_groups && !search()) {
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                    [class.bg-secondary]="!data.selected_group_id"
                    [class.text-secondary-content]="!data.selected_group_id"
                    [mat-dialog-close]="''"
                    [attr.aria-current]="
                        !data.selected_group_id ? 'true' : null
                    "
                >
                    <icon class="shrink-0 text-2xl">
                        {{
                            !data.selected_group_id ? 'check_circle' : 'public'
                        }}
                    </icon>
                    <div class="min-w-0 flex-1">
                        <div class="truncate">
                            {{ 'SIGNAGE_MANAGER.ALL_GROUPS' | translate }}
                        </div>
                    </div>
                </button>
            }
            @for (item of filtered_groups(); track item.group.id) {
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                    [class.bg-secondary]="
                        data.selected_group_id === item.group.id
                    "
                    [class.text-secondary-content]="
                        data.selected_group_id === item.group.id
                    "
                    [mat-dialog-close]="item.group.id"
                    [attr.aria-current]="
                        data.selected_group_id === item.group.id ? 'true' : null
                    "
                >
                    <icon class="shrink-0 text-2xl">
                        {{
                            data.selected_group_id === item.group.id
                                ? 'check_circle'
                                : 'group'
                        }}
                    </icon>
                    <div class="min-w-0 flex-1">
                        <div class="truncate">{{ item.group.name }}</div>
                        @if (item.group.description) {
                            <div class="text-base-content/70 truncate text-xs">
                                {{ item.group.description }}
                            </div>
                        }
                    </div>
                </button>
            } @empty {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl">group</icon>
                    <div class="text-base-content/70">
                        {{ 'SIGNAGE_MANAGER.NO_GROUPS_AVAILABLE' | translate }}
                    </div>
                </div>
            }
        </main>
    `,
      imports: [
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupSelectModalComponent, { className: "GroupSelectModalComponent", filePath: "apps/signage-manager/src/app/shared/group-select-modal.component.ts", lineNumber: 183 });
})();

export {
  GroupSelectModalComponent
};
//# debugId=5c6db7e3-f82d-5ac5-bd4f-0248f4e8f9c4
//# sourceMappingURL=chunk-76IE2W2M.js.map
