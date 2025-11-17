import {
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-4EYIX4KD.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-W6KV2Y4F.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  CounterComponent,
  DateRangeFieldComponent
} from "./chunk-G36UUYE3.js";
import {
  $a,
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BuildingPipe,
  Ca,
  CommonModule,
  Component,
  Da,
  DecimalPipe,
  DefaultValueAccessor,
  Fa,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  Injectable,
  Kt,
  LevelPipe,
  MAT_DIALOG_DATA,
  Ma,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  Na,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  NgStyle,
  OrganisationService,
  PercentPipe,
  Pipe,
  Ra,
  ReactiveFormsModule,
  RequiredValidator,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SettingsService,
  SettingsToggleComponent,
  SimpleTableComponent,
  SurveyOutletComponent,
  Ta,
  TranslatePipe,
  Ua,
  Validators,
  Zt,
  __spreadProps,
  __spreadValues,
  addStringKey,
  catchError,
  combineLatest,
  computed,
  endOfDay,
  filter,
  first,
  firstTruthyValueFrom,
  flatten,
  forkJoin,
  getUnixTime,
  inject,
  input,
  ja,
  lastValueFrom,
  map,
  model,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  qa,
  removeStringKey,
  setClassMetadata,
  shareReplay,
  signal,
  startOfDay,
  startWith,
  switchMap,
  tap,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction7,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-JMWE3Z3Z.js";

// apps/concierge/src/app/surveys/survey.service.ts
var LoadType;
(function(LoadType2) {
  LoadType2["ALL"] = "all";
  LoadType2["SURVEYS"] = "surveys";
  LoadType2["ANSWERS"] = "answers";
  LoadType2["QUESTIONS"] = "questions";
})(LoadType || (LoadType = {}));
var _SurveyService = class _SurveyService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.question_filters = signal({});
    this.loading = signal("");
    this.building = signal("");
    this.survey = signal(new Zt({}));
    this.survey_list = signal([]);
    this.answer_list = signal([]);
    this.question_list = signal([]);
    this.building_surveys = computed(() => {
      return this.survey_list().filter((survey) => survey.building_id === this.building());
    });
    this.building_answers = computed(() => {
      const surveys = this.building_surveys();
      return this.answer_list().filter((answer) => surveys.find((s) => s.id === answer.survey_id));
    });
    this.survey_questions = computed(() => {
      const survey = this.survey();
      if (!survey.id)
        return [];
      return this.question_list().filter((question) => survey.pages.find((page) => page.question_order.find((q_id) => q_id === question.id)));
    });
    this.filtered_questions = computed(() => {
      const questions = this.question_list();
      const filters = this.question_filters();
      return questions.filter((question) => (!filters.type || question.type === filters.type) && (!filters.search_text || question.title.toLowerCase().includes(filters.search_text.toLowerCase())));
    });
    firstTruthyValueFrom(this._org.initialised).then(() => {
      setTimeout(() => this._load(), 300);
    });
  }
  setBuilding(id) {
    this.building.set(id);
  }
  async setSurvey(id) {
    this.loading.set(`Loading survey "${id}"...`);
    const survey = await lastValueFrom(Na(id));
    this.survey.set(survey);
    this.building.set(survey.building_id);
    this.loading.set("");
  }
  async removeSurvey(survey, confirm = true) {
    if (confirm) {
      const result = await openConfirmModal({
        title: "Remove Survey",
        content: "Are you sure you want to remove this survey?",
        icon: { content: "warning" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading("Removing survey...");
      await lastValueFrom(Fa(`${survey.id}`));
      result.close();
    } else {
      await lastValueFrom(Fa(`${survey.id}`));
    }
    notifySuccess("Successfully removed survey.");
    this._load(LoadType.SURVEYS);
  }
  async removeQuestion(question, confirm = true) {
    if (confirm) {
      const result = await openConfirmModal({
        title: "Remove Survey Question",
        content: "Are you sure you want to remove this survey question?",
        icon: { content: "warning" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading("Removing survey question...");
      await lastValueFrom(Ua(`${question.id}`));
      result.close();
    } else {
      await lastValueFrom(Ua(`${question.id}`));
    }
    notifySuccess("Successfully removed survey question.");
    this._load(LoadType.QUESTIONS);
  }
  async _load(type = LoadType.ALL) {
    const buildings = this._org.buildings_signal();
    if (!buildings)
      return;
    this.loading.set("Loading survey data...");
    if (type === LoadType.ALL || type === LoadType.SURVEYS) {
      const surveys = await lastValueFrom(forkJoin(buildings.map((bld) => qa({ building_id: bld.id }))));
      const survey_list = surveys.flat();
      this.survey_list.set(survey_list);
    }
    if (type === LoadType.ALL || type === LoadType.ANSWERS) {
      const answers = await lastValueFrom(forkJoin(this.survey_list().map((survey) => $a({ survey_id: survey.id }))));
      this.answer_list.set(answers.flat());
    }
    if (type === LoadType.ALL || type === LoadType.QUESTIONS) {
      const questions = await lastValueFrom(Ta({ limit: 1e3 }));
      this.question_list.set(questions);
    }
    this.loading.set("");
  }
};
_SurveyService.\u0275fac = function SurveyService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SurveyService)();
};
_SurveyService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SurveyService, factory: _SurveyService.\u0275fac, providedIn: "root" });
var SurveyService = _SurveyService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/concierge/src/app/surveys/building-list.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0) => ["/surveys", "list", a0];
var _forTrack0 = ($index, $item) => $item.id;
function BuildingListComponent_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const building_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", building_r1.images[0]);
  }
}
function BuildingListComponent_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 9);
    \u0275\u0275text(1, "domain");
    \u0275\u0275elementEnd();
  }
}
function BuildingListComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "div", 7);
    \u0275\u0275conditionalCreate(2, BuildingListComponent_For_10_Conditional_2_Template, 1, 1, "img", 8);
    \u0275\u0275conditionalCreate(3, BuildingListComponent_For_10_Conditional_3_Template, 2, 0, "icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "h3", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 13)(15, "div", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 15);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 13)(21, "div", 14);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 15);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "icon", 16);
    \u0275\u0275text(27, " chevron_right ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const building_r1 = ctx.$implicit;
    const stats_r2 = (tmp_10_0 = \u0275\u0275nextContext().bld_stats()) == null ? null : tmp_10_0[building_r1.id];
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c1, building_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((building_r1.images == null ? null : building_r1.images.length) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(building_r1.images == null ? null : building_r1.images.length) ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", building_r1.display_name || building_r1.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (stats_r2 == null ? null : stats_r2.live) || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 10, "APP.CONCIERGE.SURVEY_BLD_LIVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (stats_r2 == null ? null : stats_r2.drafts) || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 12, "APP.CONCIERGE.SURVEY_BLD_DRAFTS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (stats_r2 == null ? null : stats_r2.answers) || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 14, "APP.CONCIERGE.SURVEY_BLD_ANSWERS"), " ");
  }
}
function BuildingListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.SURVEY_NO_BLD"), " ");
  }
}
var _BuildingListComponent = class _BuildingListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._survey = inject(SurveyService);
    this.buildings = this._org.buildings_signal;
    this.surveys = this._survey.survey_list;
    this.answers = this._survey.answer_list;
    this.bld_stats = computed(() => {
      const mapping = {};
      const answers_list = flatten(this.answers());
      for (let i = 0; i < this.buildings().length; i++) {
        const bld = this.buildings()[i];
        const survey_list = this.surveys().filter((_) => _.building_id === bld.id);
        mapping[bld.id] = {
          live: survey_list.filter((_) => `${_.trigger}`.toLowerCase() !== "none").length,
          drafts: survey_list.filter((_) => `${_.trigger}`.toLowerCase() === "none").length,
          answers: answers_list.filter((resp) => survey_list.find((_) => _.id === resp.survey_id)).length
        };
      }
      return mapping;
    });
  }
};
_BuildingListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuildingListComponent_BaseFactory;
  return function BuildingListComponent_Factory(__ngFactoryType__) {
    return (\u0275BuildingListComponent_BaseFactory || (\u0275BuildingListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BuildingListComponent)))(__ngFactoryType__ || _BuildingListComponent);
  };
})();
_BuildingListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingListComponent, selectors: [["building-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 11, consts: [[1, "flex", "h-full", "w-full", "flex-col"], [1, "flex", "items-center", "justify-between", "px-8", "pb-2", "pt-8"], [1, "text-2xl", "font-medium"], [1, "mb-8", "px-8"], [1, "h-1/2", "w-full", "flex-1", "space-y-4", "overflow-auto", "px-8", "pb-8"], ["matRipple", "", 1, "relative", "flex", "space-x-4", "overflow-hidden", "rounded-xl", "border", "border-base-300", "bg-base-100", "shadow", "hover:border-info", 3, "routerLink"], [1, "flex", "h-[calc(100%-2rem)]", "w-full", "flex-col", "items-center", "justify-center", "rounded-xl", "bg-base-200"], [1, "flex", "h-40", "w-32", "items-center", "justify-center", "bg-base-300"], ["auth", "", 1, "h-full", "w-full", "object-cover", "object-center", 3, "source"], [1, "text-6xl", "text-base-100"], [1, "flex-1", "py-4"], [1, "mb-4", "text-2xl", "font-medium"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "h-20", "w-24", "flex-col", "items-center", "justify-center", "space-y-2", "rounded-xl", "border", "border-base-200"], [1, "text-4xl"], [1, "text-xs", "font-medium"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-4xl"], [1, "opacity-30"]], template: function BuildingListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275repeaterCreate(9, BuildingListComponent_For_10_Template, 28, 18, "a", 5, _forTrack0);
    \u0275\u0275conditionalCreate(11, BuildingListComponent_Conditional_11_Template, 4, 3, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "APP.CONCIERGE.SURVEY_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(7, 5, "APP.CONCIERGE.SURVEY_BUILDING_COUNT", \u0275\u0275pureFunction1(9, _c0, (tmp_1_0 = ctx.buildings()) == null ? null : tmp_1_0.length), (tmp_1_0 = ctx.buildings()) == null ? null : tmp_1_0.length), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.buildings());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.buildings().length <= 0 ? 11 : -1);
  }
}, dependencies: [
  AuthenticatedImageDirective,
  CommonModule,
  TranslatePipe,
  RouterModule,
  RouterLink,
  IconComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=building-list.component.css.map */"] });
var BuildingListComponent = _BuildingListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildingListComponent, [{
    type: Component,
    args: [{ selector: "building-list", template: `
        <div class="flex h-full w-full flex-col">
            <header class="flex items-center justify-between px-8 pb-2 pt-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.SURVEY_HEADER' | translate }}
                </h2>
            </header>
            <div class="mb-8 px-8">
                {{
                    'APP.CONCIERGE.SURVEY_BUILDING_COUNT'
                        | translate
                            : { count: buildings()?.length }
                            : buildings()?.length
                }}
            </div>
            <div class="h-1/2 w-full flex-1 space-y-4 overflow-auto px-8 pb-8">
                @for (building of buildings(); track building.id) {
                    @let stats = bld_stats()?.[building.id];
                    <a
                        matRipple
                        class="relative flex space-x-4 overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow hover:border-info"
                        [routerLink]="['/surveys', 'list', building.id]"
                    >
                        <div
                            class="flex h-40 w-32 items-center justify-center bg-base-300"
                        >
                            @if (building.images?.length) {
                                <img
                                    auth
                                    class="h-full w-full object-cover object-center"
                                    [source]="building.images[0]"
                                />
                            }
                            @if (!building.images?.length) {
                                <icon class="text-6xl text-base-100"
                                    >domain</icon
                                >
                            }
                        </div>
                        <div class="flex-1 py-4">
                            <h3 class="mb-4 text-2xl font-medium">
                                {{ building.display_name || building.name }}
                            </h3>
                            <div class="flex items-center space-x-4">
                                <div
                                    class="flex h-20 w-24 flex-col items-center justify-center space-y-2 rounded-xl border border-base-200"
                                >
                                    <div class="text-4xl">
                                        {{ stats?.live || 0 }}
                                    </div>
                                    <div class="text-xs font-medium">
                                        {{
                                            'APP.CONCIERGE.SURVEY_BLD_LIVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                                <div
                                    class="flex h-20 w-24 flex-col items-center justify-center space-y-2 rounded-xl border border-base-200"
                                >
                                    <div class="text-4xl">
                                        {{ stats?.drafts || 0 }}
                                    </div>
                                    <div class="text-xs font-medium">
                                        {{
                                            'APP.CONCIERGE.SURVEY_BLD_DRAFTS'
                                                | translate
                                        }}
                                    </div>
                                </div>
                                <div
                                    class="flex h-20 w-24 flex-col items-center justify-center space-y-2 rounded-xl border border-base-200"
                                >
                                    <div class="text-4xl">
                                        {{ stats?.answers || 0 }}
                                    </div>
                                    <div class="text-xs font-medium">
                                        {{
                                            'APP.CONCIERGE.SURVEY_BLD_ANSWERS'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <icon
                            class="absolute right-2 top-1/2 -translate-y-1/2 text-4xl"
                        >
                            chevron_right
                        </icon>
                    </a>
                }
                @if (buildings().length <= 0) {
                    <div
                        class="flex h-[calc(100%-2rem)] w-full flex-col items-center justify-center rounded-xl bg-base-200"
                    >
                        <div class="opacity-30">
                            {{ 'APP.CONCIERGE.SURVEY_NO_BLD' | translate }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      AuthenticatedImageDirective,
      CommonModule,
      TranslatePipe,
      RouterModule,
      IconComponent
    ], styles: ["/* angular:styles/component:css;eafa7008104b1bace8030c703b24a8393ec49bc9a1df770cdee11f1d731327d8;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/surveys/building-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=building-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingListComponent, { className: "BuildingListComponent", filePath: "apps/concierge/src/app/surveys/building-list.component.ts", lineNumber: 138 });
})();

// apps/concierge/src/app/surveys/types.ts
var TriggerEnum;
(function(TriggerEnum2) {
  TriggerEnum2["None"] = "NONE";
  TriggerEnum2["Reserved"] = "RESERVED";
  TriggerEnum2["Checked_In"] = "CHECKEDIN";
  TriggerEnum2["Checked_Out"] = "CHECKEDOUT";
  TriggerEnum2["Rejected"] = "REJECTED";
  TriggerEnum2["Cancelled"] = "CANCELLED";
  TriggerEnum2["Visitor"] = "VISITOR";
})(TriggerEnum || (TriggerEnum = {}));
var QuestionType;
(function(QuestionType2) {
  QuestionType2["Single_Line_Text"] = "text";
  QuestionType2["Comment_Box"] = "comment";
  QuestionType2["Radio_Group"] = "radiogroup";
  QuestionType2["Drop_Down"] = "dropdown";
  QuestionType2["Check_Box"] = "checkbox";
  QuestionType2["Rating"] = "rating";
  QuestionType2["Empty"] = "0[EMPTY]";
})(QuestionType || (QuestionType = {}));
var TriggerOptions = getEnumOptions(TriggerEnum);
var QuestionTypeOptions = getEnumOptions(QuestionType);
var QuestionTypeMap = getEnumMap(QuestionType);
function getEnumOptions(targetEnum) {
  return Object.entries(targetEnum).filter((e) => isNaN(Number(e[0]))).map((e) => ({
    name: e[0].replace(/_/g, " "),
    id: e[1]
  }));
}
function getEnumMap(targetEnum) {
  const enum_map = {};
  Object.entries(targetEnum).filter((e) => isNaN(Number(e[0]))).forEach((e) => enum_map[e[1]] = e[0].replace(/_/g, " "));
  return enum_map;
}

// apps/concierge/src/app/surveys/question.component.ts
var _c02 = ["container_el"];
function QuestionComponent_Conditional_2_Conditional_4_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", item_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.name, " ");
  }
}
function QuestionComponent_Conditional_2_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, QuestionComponent_Conditional_2_Conditional_4_For_3_Conditional_0_Template, 2, 2, "mat-option", 10);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275conditional(item_r4.id[0] !== "0" ? 0 : -1);
  }
}
function QuestionComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 8)(1, "mat-select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function QuestionComponent_Conditional_2_Conditional_4_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.question().type, $event) || (ctx_r1.question().type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(2, QuestionComponent_Conditional_2_Conditional_4_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "settings-toggle", 6);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function QuestionComponent_Conditional_2_Conditional_4_Template_settings_toggle_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.question().required, $event) || (ctx_r1.question().required = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.question().type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.type_options);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.question().required);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(5, 3, "COMMON.REQUIRED"));
  }
}
function QuestionComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "settings-toggle", 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function QuestionComponent_Conditional_2_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.preview.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 7);
    \u0275\u0275conditionalCreate(4, QuestionComponent_Conditional_2_Conditional_4_Template, 6, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.preview())("name", \u0275\u0275pipeBind1(2, 3, "COMMON.PREVIEW"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.preview() ? 4 : -1);
  }
}
function QuestionComponent_Conditional_4_mat_error_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.SURVEY_QUESTION_ENTER_ERROR"), " ");
  }
}
function QuestionComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 4)(1, "input", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function QuestionComponent_Conditional_4_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.question().title, $event) || (ctx_r1.question().title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, QuestionComponent_Conditional_4_mat_error_3_Template, 3, 3, "mat-error", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 3, "APP.CONCIERGE.SURVEY_QUESTION_ENTER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.question().title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_4_0 = ctx_r1.question()) == null ? null : tmp_4_0.title));
  }
}
function QuestionComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate("Untitled Question");
  }
}
function QuestionComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, QuestionComponent_Conditional_5_Conditional_2_Template, 2, 1, "span", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.question().title);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.question().title ? 2 : -1);
  }
}
function QuestionComponent_Conditional_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-form-field", 17);
    \u0275\u0275element(2, "textarea", 18);
    \u0275\u0275elementStart(3, "mat-hint");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SURVEY_QUESTION_HINT_MULTILINE"));
  }
}
function QuestionComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuestionComponent_Conditional_6_div_0_Template, 6, 3, "div", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.preview());
  }
}
function QuestionComponent_Conditional_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-form-field", 17);
    \u0275\u0275element(2, "input", 19);
    \u0275\u0275elementStart(3, "mat-hint");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SURVEY_QUESTION_HINT_LINE"));
  }
}
function QuestionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuestionComponent_Conditional_7_div_0_Template, 6, 3, "div", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.preview());
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 26)(4, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function QuestionComponent_Conditional_8_Conditional_0_Conditional_1_div_1_Template_input_ngModelChange_4_listener($event) {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(item_r8.text, $event) || (item_r8.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function QuestionComponent_Conditional_8_Conditional_0_Conditional_1_div_1_Template_button_click_5_listener() {
      const i_r9 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteOption(i_r9));
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, " delete_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", i_r9 + 1, ". ");
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275interpolate1("item", i_r9));
    \u0275\u0275twoWayProperty("ngModel", item_r8.text);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, QuestionComponent_Conditional_8_Conditional_0_Conditional_1_div_1_Template, 8, 4, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 22);
    \u0275\u0275listener("click", function QuestionComponent_Conditional_8_Conditional_0_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addOption());
    });
    \u0275\u0275elementStart(3, "div", 23)(4, "icon");
    \u0275\u0275text(5, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Add option");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.question().choices);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_0_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275property("value", item_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r10.text);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 17)(1, "mat-select", 31);
    \u0275\u0275template(2, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_0_mat_option_2_Template, 2, 2, "mat-option", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.question().choices);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const choice_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(choice_r11.text);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_1_For_2_Template, 2, 1, "mat-checkbox", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.question().choices);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const choice_r12 = ctx.$implicit;
    \u0275\u0275property("value", choice_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(choice_r12.text);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "mat-radio-group")(2, "div", 29);
    \u0275\u0275repeaterCreate(3, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_2_For_4_Template, 2, 2, "mat-radio-button", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.question().choices);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_0_Template, 3, 1, "mat-form-field", 17)(1, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_1_Template, 3, 0, "div", 29)(2, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_2_Template, 5, 0, "div", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.is_dropdown ? 0 : ctx_r1.is_checkbox ? 1 : 2);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, QuestionComponent_Conditional_8_Conditional_0_Conditional_1_Template, 8, 1)(2, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.preview() ? 1 : 2);
  }
}
function QuestionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, QuestionComponent_Conditional_8_Conditional_0_Template, 3, 1, "div", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.question ? 0 : -1);
  }
}
function QuestionComponent_Conditional_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const idx_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", idx_r13, " ");
  }
}
function QuestionComponent_Conditional_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "a-counter", 37);
    \u0275\u0275twoWayListener("ngModelChange", function QuestionComponent_Conditional_9_div_4_Template_a_counter_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.question().max_rating, $event) || (ctx_r1.question().max_rating = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function QuestionComponent_Conditional_9_div_4_Template_a_counter_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rating_options = ctx_r1.generateArray($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("max", 10)("min", 3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.question().max_rating);
  }
}
function QuestionComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 33);
    \u0275\u0275repeaterCreate(2, QuestionComponent_Conditional_9_For_3_Template, 2, 1, "button", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, QuestionComponent_Conditional_9_div_4_Template, 2, 3, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.rating_options);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.preview());
  }
}
var _QuestionComponent = class _QuestionComponent {
  constructor() {
    this.is_card = input(true);
    this.preview = model(false);
    this.question = model(new Kt({ title: "", type: QuestionType.Single_Line_Text }));
    this.QuestionType = QuestionType;
    this.type_options = QuestionTypeOptions;
    this.rating_options = [1, 2, 3];
    this._container_el = viewChild("container_el");
  }
  get valid() {
    const q = this.question();
    if (!q?.title)
      return false;
    let is_valid = true;
    switch (q.type) {
      case QuestionType.Check_Box:
      case QuestionType.Radio_Group:
      case QuestionType.Drop_Down:
        const checkop = q.choices?.map((e) => !!e?.text?.length);
        is_valid = !!checkop?.length && checkop.reduce((acc, val) => acc && val);
        break;
      case QuestionType.Rating:
        is_valid = q.max_rating >= 3;
    }
    return is_valid;
  }
  get is_dropdown() {
    return this.question()?.type === QuestionType.Drop_Down;
  }
  get is_checkbox() {
    return this.question()?.type === QuestionType.Check_Box;
  }
  ngOnInit() {
    const q = this.question();
    if (!q?.choices)
      q.choices = [];
    if (!q.max_rating)
      q.max_rating = 3;
    this.rating_options = this.generateArray(q.max_rating);
  }
  ngAfterViewInit() {
    if (this.is_card()) {
      this._container_el().nativeElement.classList.add("border", "border-base-400", "bg-base-100", "shadow");
    }
  }
  addOption() {
    this.question.update((q) => {
      q.choices.push({ text: "" });
      return q;
    });
  }
  deleteOption(index) {
    this.question.update((q) => {
      q.choices.splice(index, 1);
      return q;
    });
  }
  generateArray(max) {
    return Array.from({ length: max }, (_, index) => index + 1);
  }
};
_QuestionComponent.\u0275fac = function QuestionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QuestionComponent)();
};
_QuestionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionComponent, selectors: [["placeos-question"]], viewQuery: function QuestionComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._container_el, _c02, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { is_card: [1, "is_card"], preview: [1, "preview"], question: [1, "question"] }, outputs: { preview: "previewChange", question: "questionChange" }, decls: 10, vars: 7, consts: [["container_el", ""], [1, "flex", "w-full", "flex-col", "items-center", "justify-between", "px-4", "py-2"], [1, "flex", "w-full", "flex-row", "items-center", "justify-end", "space-x-4", "pb-2"], [1, "my-2", "flex", "w-full", "flex-col", "rounded", "border-base-200"], ["appearance", "outline", 1, "no-subscript", "mb-2", "w-full"], [1, "flex", "w-full", "flex-col"], [3, "ngModelChange", "ngModel", "name"], [1, "flex-1"], ["appearance", "outline", 1, "no-subscript"], [3, "ngModelChange", "ngModel"], [3, "value"], ["matInput", "", "type", "text", 3, "ngModelChange", "placeholder", "ngModel"], ["class", "input-error", 4, "ngIf"], [1, "input-error"], [1, "mb-4", "w-full", "text-xl"], [1, "mb-4", "w-full", "text-xl", "opacity-30"], ["class", "flex w-full flex-col", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", "cols", "30", "rows", "5", "placeholder", "Enter option text"], ["matInput", "", "type", "text", "placeholder", "Enter option text"], [1, "mb-4", "flex", "w-full", "flex-col", "space-y-2", "pl-2"], ["class", "flex w-full flex-row items-center space-x-2", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "text-gray-800", "flex", "flex-row", "items-center"], [1, "flex", "w-full", "flex-row", "items-center", "space-x-2"], [1, "p-2", "font-mono"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", "type", "text", "placeholder", "Enter option text", 3, "ngModelChange", "ngModel", "name"], ["icon", "", "matRipple", "", 1, "h-12", "min-w-12", "rounded", "border", "border-error", "text-error", 3, "click"], [1, "grid", "grid-cols-1", "sm:grid-cols-2"], [1, "flex", "w-full", "flex-col", "pl-2"], ["placeholder", "Select an option"], [3, "value", 4, "ngFor", "ngForOf"], ["btn-grp", "", 1, "divide-x", "divide-secondary"], ["matRipple", "", 1, "h-12", "w-12", "border-y", "border-secondary", "first:rounded-l", "first:border-l", "last:rounded-r", "last:!border-r"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], [1, "mb-1", "w-40", 3, "ngModelChange", "max", "min", "ngModel"]], template: function QuestionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1, 0);
    \u0275\u0275conditionalCreate(2, QuestionComponent_Conditional_2_Template, 5, 5, "div", 2);
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275conditionalCreate(4, QuestionComponent_Conditional_4_Template, 4, 5, "mat-form-field", 4)(5, QuestionComponent_Conditional_5_Template, 3, 2);
    \u0275\u0275conditionalCreate(6, QuestionComponent_Conditional_6_Template, 1, 1, "div", 5)(7, QuestionComponent_Conditional_7_Template, 1, 1, "div", 5)(8, QuestionComponent_Conditional_8_Template, 1, 1)(9, QuestionComponent_Conditional_9_Template, 5, 1, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.is_card() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border", !ctx.is_card())("p-4", !ctx.is_card());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.preview() ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.question().type === ctx.QuestionType.Comment_Box ? 6 : ctx.question().type === ctx.QuestionType.Single_Line_Text ? 7 : ctx.question().type === ctx.QuestionType.Check_Box || ctx.question().type === ctx.QuestionType.Radio_Group || ctx.question().type === ctx.QuestionType.Drop_Down ? 8 : ctx.question().type === ctx.QuestionType.Rating ? 9 : -1);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  MatFormFieldModule,
  MatFormField,
  MatHint,
  MatError,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatInputModule,
  MatInput,
  MatRadioModule,
  MatRadioGroup,
  MatRadioButton,
  MatCheckboxModule,
  MatCheckbox,
  MatRippleModule,
  MatRipple,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  TranslatePipe,
  SettingsToggleComponent,
  IconComponent,
  CounterComponent
], encapsulation: 2 });
var QuestionComponent = _QuestionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionComponent, [{
    type: Component,
    args: [{ selector: "placeos-question", template: `
        <div
            #container_el
            class="flex w-full flex-col items-center justify-between px-4 py-2"
        >
            @if (!is_card()) {
                <div
                    class="flex w-full flex-row items-center justify-end space-x-4 pb-2"
                >
                    <settings-toggle
                        [ngModel]="preview()"
                        (ngModelChange)="preview.set($event)"
                        [name]="'COMMON.PREVIEW' | translate"
                    ></settings-toggle>
                    <div class="flex-1"></div>
                    @if (!preview()) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select [(ngModel)]="question().type">
                                @for (item of type_options; track item) {
                                    @if (item.id[0] !== '0') {
                                        <mat-option [value]="item.id">
                                            {{ item.name }}
                                        </mat-option>
                                    }
                                }
                            </mat-select>
                        </mat-form-field>

                        <settings-toggle
                            [(ngModel)]="question().required"
                            [name]="'COMMON.REQUIRED' | translate"
                        ></settings-toggle>
                    }
                </div>
            }

            <div
                class="my-2 flex w-full flex-col rounded border-base-200"
                [class.border]="!is_card()"
                [class.p-4]="!is_card()"
            >
                @if (!preview()) {
                    <mat-form-field
                        class="no-subscript mb-2 w-full"
                        appearance="outline"
                    >
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.SURVEY_QUESTION_ENTER'
                                    | translate
                            "
                            type="text"
                            [(ngModel)]="question().title"
                        />
                        <mat-error
                            class="input-error"
                            *ngIf="!question()?.title"
                        >
                            {{
                                'APP.CONCIERGE.SURVEY_QUESTION_ENTER_ERROR'
                                    | translate
                            }}
                        </mat-error>
                    </mat-form-field>
                } @else {
                    <span class="mb-4 w-full text-xl">{{
                        question().title
                    }}</span>
                    @if (!question().title) {
                        <span class="mb-4 w-full text-xl opacity-30">{{
                            'Untitled Question'
                        }}</span>
                    }
                }
                @if (question().type === QuestionType.Comment_Box) {
                    <div class="flex w-full flex-col" *ngIf="preview()">
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                cols="30"
                                rows="5"
                                placeholder="Enter option text"
                            ></textarea>
                            <mat-hint>{{
                                'APP.CONCIERGE.SURVEY_QUESTION_HINT_MULTILINE'
                                    | translate
                            }}</mat-hint>
                        </mat-form-field>
                    </div>
                } @else if (question().type === QuestionType.Single_Line_Text) {
                    <div class="flex w-full flex-col" *ngIf="preview()">
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                type="text"
                                placeholder="Enter option text"
                            />
                            <mat-hint>{{
                                'APP.CONCIERGE.SURVEY_QUESTION_HINT_LINE'
                                    | translate
                            }}</mat-hint>
                        </mat-form-field>
                    </div>
                } @else if (
                    question().type === QuestionType.Check_Box ||
                    question().type === QuestionType.Radio_Group ||
                    question().type === QuestionType.Drop_Down
                ) {
                    @if (question) {
                        <div class="flex w-full flex-col">
                            @if (!preview()) {
                                <div
                                    class="mb-4 flex w-full flex-col space-y-2 pl-2"
                                >
                                    <div
                                        *ngFor="
                                            let item of question().choices;
                                            let i = index
                                        "
                                        class="flex w-full flex-row items-center space-x-2"
                                    >
                                        <span class="p-2 font-mono"
                                            >{{ i + 1 }}.
                                        </span>
                                        <mat-form-field
                                            class="no-subscript w-full"
                                            appearance="outline"
                                        >
                                            <input
                                                matInput
                                                type="text"
                                                [(ngModel)]="item.text"
                                                placeholder="Enter option text"
                                                name="item{{ i }}"
                                            />
                                        </mat-form-field>
                                        <button
                                            icon
                                            matRipple
                                            class="h-12 min-w-12 rounded border border-error text-error"
                                            (click)="deleteOption(i)"
                                        >
                                            <icon> delete_outline</icon>
                                        </button>
                                    </div>
                                </div>
                                <button
                                    btn
                                    matRipple
                                    class="w-full"
                                    (click)="addOption()"
                                >
                                    <div
                                        class="text-gray-800 flex flex-row items-center"
                                    >
                                        <icon>add_circle</icon>
                                        <span>Add option</span>
                                    </div>
                                </button>
                            } @else {
                                @if (is_dropdown) {
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            placeholder="Select an option"
                                        >
                                            <mat-option
                                                *ngFor="
                                                    let item of question()
                                                        .choices
                                                "
                                                [value]="item.value"
                                                >{{ item.text }}</mat-option
                                            >
                                        </mat-select>
                                    </mat-form-field>
                                } @else if (is_checkbox) {
                                    <div
                                        class="grid grid-cols-1 sm:grid-cols-2"
                                    >
                                        @for (
                                            choice of question().choices;
                                            track choice
                                        ) {
                                            <mat-checkbox>{{
                                                choice.text
                                            }}</mat-checkbox>
                                        }
                                    </div>
                                } @else {
                                    <div class="flex w-full flex-col pl-2">
                                        <mat-radio-group>
                                            <div
                                                class="grid grid-cols-1 sm:grid-cols-2"
                                            >
                                                @for (
                                                    choice of question()
                                                        .choices;
                                                    track choice
                                                ) {
                                                    <mat-radio-button
                                                        [value]="choice"
                                                        >{{
                                                            choice.text
                                                        }}</mat-radio-button
                                                    >
                                                }
                                            </div>
                                        </mat-radio-group>
                                    </div>
                                }
                            }
                        </div>
                    }
                } @else if (question().type === QuestionType.Rating) {
                    <div class="flex w-full flex-col">
                        <div btn-grp class="divide-x divide-secondary">
                            @for (idx of rating_options; track idx) {
                                <button
                                    matRipple
                                    class="h-12 w-12 border-y border-secondary first:rounded-l first:border-l last:rounded-r last:!border-r"
                                >
                                    {{ idx }}
                                </button>
                            }
                        </div>
                        <div class="flex flex-col" *ngIf="!preview()">
                            <a-counter
                                [max]="10"
                                [min]="3"
                                [(ngModel)]="question().max_rating"
                                (ngModelChange)="
                                    rating_options = generateArray($event)
                                "
                                class="mb-1 w-40"
                            ></a-counter>
                        </div>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatRadioModule,
      MatCheckboxModule,
      MatRippleModule,
      FormsModule,
      TranslatePipe,
      SettingsToggleComponent,
      IconComponent,
      CounterComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionComponent, { className: "QuestionComponent", filePath: "apps/concierge/src/app/surveys/question.component.ts", lineNumber: 291 });
})();

// apps/concierge/src/app/surveys/question-modal.component.ts
var _c03 = ["question_el"];
var _QuestionModalComponent = class _QuestionModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.question_el = viewChild("question_el");
    this.is_edit = false;
    this.loading = false;
  }
  ngOnInit() {
    this.is_edit = !!(this._data?.id > 0);
    this.question = this._data || new Kt({ type: "text" });
    console.log("Data", this._data, this.question);
  }
  async save() {
    const question_el = this.question_el();
    if (!question_el.valid)
      return;
    this.loading = true;
    const call = this.is_edit ? Da(`${this.question.id}`, question_el.question()) : Ra(question_el.question());
    await lastValueFrom(call);
    this._dialog_ref.close(true);
    notifySuccess("Successfully updated question bank.");
  }
};
_QuestionModalComponent.\u0275fac = function QuestionModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QuestionModalComponent)();
};
_QuestionModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionModalComponent, selectors: [["question-modal"]], viewQuery: function QuestionModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.question_el, _c03, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 13, vars: 7, consts: [["question_el", ""], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "min-w-[40rem]", "overflow-x-hidden"], [3, "is_card", "question"], [1, "flex", "flex-row", "justify-end", "space-x-2", "px-4", "py-2"], ["btn", "", "matRipple", "", 3, "click", "disabled"]], template: function QuestionModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3)(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "main", 4);
    \u0275\u0275element(8, "placeos-question", 5, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "footer", 6)(11, "button", 7);
    \u0275\u0275listener("click", function QuestionModalComponent_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.save());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_el_r2 = \u0275\u0275reference(9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, ctx.is_edit ? "APP.CONCIERGE.SURVEY_QUESTION_EDIT" : "APP.CONCIERGE.SURVEY_QUESTION_NEW"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("is_card", false)("question", ctx.question);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !(question_el_r2 == null ? null : question_el_r2.valid));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.is_edit ? "Update" : "Add to bank", " ");
  }
}, dependencies: [
  CommonModule,
  QuestionComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatDialogModule,
  MatDialogClose
], encapsulation: 2 });
var QuestionModalComponent = _QuestionModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionModalComponent, [{
    type: Component,
    args: [{ selector: "question-modal", template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (is_edit
                        ? 'APP.CONCIERGE.SURVEY_QUESTION_EDIT'
                        : 'APP.CONCIERGE.SURVEY_QUESTION_NEW'
                    ) | translate
                }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-[40rem] overflow-x-hidden">
            <placeos-question
                #question_el
                [is_card]="false"
                [question]="question"
            ></placeos-question>
        </main>
        <footer class="flex flex-row justify-end space-x-2 px-4 py-2">
            <button
                btn
                matRipple
                [disabled]="!question_el?.valid"
                (click)="save()"
            >
                {{ is_edit ? 'Update' : 'Add to bank' }}
            </button>
        </footer>
    `, imports: [
      CommonModule,
      QuestionComponent,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      MatDialogModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionModalComponent, { className: "QuestionModalComponent", filePath: "apps/concierge/src/app/surveys/question-modal.component.ts", lineNumber: 65 });
})();

// apps/concierge/src/app/surveys/new-survey.service.ts
var _NewSurveyService = class _NewSurveyService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._survey_id = new BehaviorSubject("");
    this._bld_id = new BehaviorSubject("");
    this._change = new BehaviorSubject(0);
    this._loading = new BehaviorSubject(false);
    this._question_filters = new BehaviorSubject({});
    this.survey_list = signal([]);
    this.answer_list = signal([]);
    this.building_surveys = computed(() => {
      const bld_id = this._org.building_signal().id;
      return this.survey_list().filter((survey) => survey.building_id === bld_id);
    });
    this.building_answers = computed(() => {
      const surveys = this.building_surveys();
      return this.answer_list().filter((answer) => surveys.find((s) => s.id === answer.survey_id));
    });
    this.survey_list$ = combineLatest([
      this._org.building_list,
      this._change
    ]).pipe(tap(() => this._loading.next(true)), switchMap(([list]) => forkJoin(list.map((bld) => qa({ building_id: bld.id })))), map((data) => flatten(data)), tap((list) => this.survey_list.set(list)), shareReplay(1));
    this.answer_list$ = this.survey_list$.pipe(switchMap((surveys) => forkJoin(surveys.map((survey) => $a({ survey_id: survey.id })))), map((answers) => flatten(answers)), tap(() => this._loading.next(false)), tap((list) => this.answer_list.set(list)), shareReplay(1));
    this.building_surveys$ = combineLatest([
      this._bld_id,
      this.survey_list$
    ]).pipe(map(([bld_id, list]) => list.filter((s) => s.building_id === bld_id)));
    this.building_answers$ = combineLatest([
      this.building_surveys$,
      this.answer_list$
    ]).pipe(map(([surveys, list]) => list.filter((s) => surveys.find((survey) => survey.id === s.survey_id))));
    this.survey$ = this._survey_id.pipe(switchMap((id) => !id ? of(null) : Na(id)), shareReplay(1));
    this.questions$ = Ta({
      limit: 1e3
    }).pipe(
      // tap((l) => updateQuestionMap(l)),
      shareReplay(1)
    );
    this.survey_questions$ = combineLatest([
      this.survey$,
      this.questions$
    ]).pipe(map(([survey, questions]) => {
      if (!survey)
        return [];
      const q_list = [];
      for (const page of survey.pages) {
        for (const q_id of page.question_order) {
          q_list.push(questions.find((q) => q.id === q_id));
        }
      }
      return q_list;
    }), shareReplay(1));
    this.filtered_questions$ = combineLatest([
      this.questions$,
      this._question_filters
    ]).pipe(map(([questions, filters]) => questions.filter((q) => (!filters.type || q.type === filters.type) && (!filters.search_text || q.title.includes(filters.search_text)))));
    this.loading$ = this._loading.asObservable();
  }
  get building() {
    return this._org.buildings.find((bld) => bld.id === this._bld_id.getValue());
  }
  setSurvey(id) {
    this._survey_id.next(id);
  }
  setBuilding(id) {
    this._bld_id.next(id);
  }
  setQuestionFilters(filters) {
    this._question_filters.next(filters);
  }
  async removeSurvey(survey, confirm = true) {
    if (confirm) {
      const result = await openConfirmModal({
        title: "Remove Survey",
        content: "Are you sure you want to remove this survey?",
        icon: { content: "warning" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading("Removing survey...");
      await lastValueFrom(Fa(`${survey.id}`));
      result.close();
    } else {
      await lastValueFrom(Fa(`${survey.id}`));
    }
    notifySuccess("Successfully removed survey.");
    this._change.next(Date.now());
  }
  editQuestion(question = new Kt({ type: "text" })) {
    const ref = this._dialog.open(QuestionModalComponent, {
      data: question
    });
    ref.afterClosed().subscribe((result) => {
      if (result)
        this._change.next(Date.now());
    });
  }
  async removeQuestion(question, confirm = true) {
    if (confirm) {
      const result = await openConfirmModal({
        title: "Remove Survey Question",
        content: "Are you sure you want to remove this survey question?",
        icon: { content: "warning" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading("Removing survey question...");
      await lastValueFrom(Ua(`${question.id}`));
      result.close();
    } else {
      await lastValueFrom(Ua(`${question.id}`));
    }
    notifySuccess("Successfully removed survey question.");
    this._change.next(Date.now());
  }
};
_NewSurveyService.\u0275fac = function NewSurveyService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewSurveyService)();
};
_NewSurveyService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NewSurveyService, factory: _NewSurveyService.\u0275fac, providedIn: "root" });
var NewSurveyService = _NewSurveyService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSurveyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/surveys/question.pipe.ts
var QUESTION_MAP = {};
var _QuestionPipe = class _QuestionPipe extends AsyncHandler {
  transform(id) {
    if (!QUESTION_MAP[id]) {
      lastValueFrom(Ma(id)).then((question) => QUESTION_MAP[id] = question);
    }
    return QUESTION_MAP[id];
  }
};
_QuestionPipe.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275QuestionPipe_BaseFactory;
  return function QuestionPipe_Factory(__ngFactoryType__) {
    return (\u0275QuestionPipe_BaseFactory || (\u0275QuestionPipe_BaseFactory = \u0275\u0275getInheritedFactory(_QuestionPipe)))(__ngFactoryType__ || _QuestionPipe);
  };
})();
_QuestionPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "question", type: _QuestionPipe, pure: true });
var QuestionPipe = _QuestionPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionPipe, [{
    type: Pipe,
    args: [{
      name: "question"
    }]
  }], null, null);
})();

// apps/concierge/src/app/surveys/survey-builder.component.ts
var _c04 = (a0) => ["/surveys", "list", a0];
var _c12 = (a0) => [a0];
var _forTrack02 = ($index, $item) => $item.id;
function SurveyBuilderComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275listener("click", function SurveyBuilderComponent_mat_option_16_Template_mat_option_click_0_listener() {
      const b_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBuildingClick(b_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    \u0275\u0275property("value", b_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r2.display_name || b_r2.name);
  }
}
function SurveyBuilderComponent_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    \u0275\u0275property("value", b_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r4.display_name || b_r4.name);
  }
}
function SurveyBuilderComponent_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r5 = ctx.$implicit;
    \u0275\u0275property("value", op_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", op_r5.name, " ");
  }
}
function SurveyBuilderComponent_Conditional_44_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 28);
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const \u0275$index_91_r8 = ctx.$index;
    \u0275\u0275property("label", page_r7.title || "Page " + (\u0275$index_91_r8 + 1));
  }
}
function SurveyBuilderComponent_Conditional_44_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removePage());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Conditional_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 56);
  }
}
function SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Conditional_2_div_1_Template, 1, 0, "div", 49);
    \u0275\u0275elementStart(2, "div", 50)(3, "div", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 52)(6, "icon", 53);
    \u0275\u0275text(7, "drag_indicator");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 54);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Conditional_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_115_r11 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removePageQuestion(\u0275$index_115_r11));
    });
    \u0275\u0275elementStart(9, "icon", 53);
    \u0275\u0275text(10, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(11, "placeos-question", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_115_r11 = \u0275\u0275nextContext().$index;
    const quest_r12 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275$index_115_r11 + 1, " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("preview", true)("question", quest_r12);
  }
}
function SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "question");
    \u0275\u0275conditionalCreate(2, SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Conditional_2_Template, 12, 3, "div", 48);
  }
  if (rf & 2) {
    const q_id_r13 = ctx.$implicit;
    const quest_r14 = \u0275\u0275storeLet(\u0275\u0275pipeBind2(1, 1, q_id_r13, \u0275\u0275nextContext(3).questions().length));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(quest_r14 ? 2 : -1);
  }
}
function SurveyBuilderComponent_Conditional_44_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Template, 3, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const page_r15 = \u0275\u0275readContextLet(16);
    \u0275\u0275repeater(page_r15.question_order);
  }
}
function SurveyBuilderComponent_Conditional_44_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "icon", 57);
    \u0275\u0275text(2, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No questions added to this page yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " Drag and drop questions to from the right to start building your survey. ");
    \u0275\u0275elementEnd()();
  }
}
function SurveyBuilderComponent_Conditional_44_mat_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275property("value", item_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r16.name, " ");
  }
}
function SurveyBuilderComponent_Conditional_44_For_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 56);
  }
}
function SurveyBuilderComponent_Conditional_44_For_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, SurveyBuilderComponent_Conditional_44_For_43_div_1_Template, 1, 0, "div", 49);
    \u0275\u0275elementStart(2, "button", 58)(3, "icon");
    \u0275\u0275text(4, "drag_indicator");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 59)(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 60);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 61)(11, "icon");
    \u0275\u0275text(12, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-menu", null, 1)(15, "button", 62);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_For_43_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.duplicateQuestion(ctx_r2.q));
    });
    \u0275\u0275elementStart(16, "div", 25)(17, "icon", 53);
    \u0275\u0275text(18, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 62);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_For_43_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editQuestion(ctx_r2.q));
    });
    \u0275\u0275elementStart(23, "div", 25)(24, "icon", 53);
    \u0275\u0275text(25, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 62);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_For_43_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeQuestion(ctx_r2.q));
    });
    \u0275\u0275elementStart(30, "div", 25)(31, "icon", 63);
    \u0275\u0275text(32, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const question_r18 = ctx.$implicit;
    const actionsMenu_r19 = \u0275\u0275reference(14);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(question_r18.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.question_types[question_r18.type], " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionsMenu_r19);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 6, "COMMON.DUPLICATE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 8, "COMMON.EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 10, "COMMON.DELETE"), " ");
  }
}
function SurveyBuilderComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "mat-tab-group", 27);
    \u0275\u0275listener("selectedTabChange", function SurveyBuilderComponent_Conditional_44_Template_mat_tab_group_selectedTabChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange($event));
    });
    \u0275\u0275repeaterCreate(5, SurveyBuilderComponent_Conditional_44_For_6_Template, 1, 1, "mat-tab", 28, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 29);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPage());
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 25)(11, "mat-form-field", 30);
    \u0275\u0275element(12, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, SurveyBuilderComponent_Conditional_44_Conditional_13_Template, 3, 0, "button", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 33, 0);
    \u0275\u0275listener("cdkDropListDropped", function SurveyBuilderComponent_Conditional_44_Template_div_cdkDropListDropped_14_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.drop($event));
    });
    \u0275\u0275declareLet(16);
    \u0275\u0275conditionalCreate(17, SurveyBuilderComponent_Conditional_44_Conditional_17_Template, 2, 0)(18, SurveyBuilderComponent_Conditional_44_Conditional_18_Template, 7, 0, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 35)(20, "div", 36)(21, "div", 37)(22, "h3", 38);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 39);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editQuestion());
    });
    \u0275\u0275elementStart(26, "icon");
    \u0275\u0275text(27, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 40)(29, "mat-form-field", 8)(30, "icon", 41);
    \u0275\u0275text(31, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SurveyBuilderComponent_Conditional_44_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.search_text, $event) || (ctx_r2.search_text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SurveyBuilderComponent_Conditional_44_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearchChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-form-field", 8)(34, "mat-select", 43);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275listener("ngModelChange", function SurveyBuilderComponent_Conditional_44_Template_mat_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTypeChange($event));
    });
    \u0275\u0275elementStart(36, "mat-option", 44);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, SurveyBuilderComponent_Conditional_44_mat_option_39_Template, 2, 2, "mat-option", 13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 45);
    \u0275\u0275pipe(41, "async");
    \u0275\u0275repeaterCreate(42, SurveyBuilderComponent_Conditional_44_For_43_Template, 36, 12, "div", 46, _forTrack02);
    \u0275\u0275pipe(44, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const page_list_r20 = \u0275\u0275reference(15);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.active_page_form());
    \u0275\u0275advance(3);
    \u0275\u0275property("selectedIndex", ctx_r2.active_page());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.form.value.pages);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r2.form.value.pages.length > 1 ? 13 : -1);
    \u0275\u0275advance(3);
    const page_r21 = \u0275\u0275storeLet((tmp_6_0 = ctx_r2.active_page_form()) == null ? null : tmp_6_0.value);
    \u0275\u0275advance();
    \u0275\u0275conditional((page_r21 == null ? null : page_r21.question_order.length) > 0 ? 17 : 18);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 13, "APP.CONCIERGE.SURVEY_QUESTION_HEADER"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.search_text);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(35, 15, "APP.CONCIERGE.SURVEY_QUESTION_TYPES_ALL"))("ngModel", ctx_r2.selected_type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 17, "APP.CONCIERGE.SURVEY_QUESTION_TYPES_ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.question_options);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDropListData", \u0275\u0275pipeBind1(41, 19, ctx_r2.questions$))("cdkDropListConnectedTo", \u0275\u0275pureFunction1(23, _c12, page_list_r20));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(44, 21, ctx_r2.questions$));
  }
}
function SurveyBuilderComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "survey-outlet", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("survey", ctx_r2.form.value)("preview", true);
  }
}
function SurveyBuilderComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "mat-spinner", 65);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving survey details...");
    \u0275\u0275elementEnd()();
  }
}
var _SurveyBuilderComponent = class _SurveyBuilderComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._service = inject(NewSurveyService);
    this._route = inject(ActivatedRoute);
    this.view = signal("builder");
    this.active_page = signal(0);
    this.active_page_form = computed(() => this.page_forms[this.active_page()]);
    this.loading = signal(false);
    this.selected_type = signal("");
    this.search_text = signal("");
    this.questions = signal([]);
    this.buildings$ = this._org.building_list;
    this.levels$ = this._org.active_levels;
    this.questions$ = this._service.filtered_questions$;
    this.trigger_types = TriggerOptions;
    this.question_types = QuestionTypeMap;
    this.question_options = QuestionTypeOptions;
    this.form = new FormGroup({
      id: new FormControl(""),
      title: new FormControl("", [Validators.required]),
      description: new FormControl(""),
      trigger: new FormControl(""),
      building_id: new FormControl(""),
      zone_id: new FormControl(""),
      pages: new FormControl([
        { title: "", description: "", question_order: [] }
      ])
    });
    this.page_forms = [
      new FormGroup({
        title: new FormControl("", []),
        description: new FormControl(""),
        question_order: new FormControl([])
      })
    ];
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => {
      if (params.has("id")) {
        this._service.setSurvey(params.get("id"));
      }
    }));
    this.subscription("survey", this._service.survey$.subscribe((s) => {
      if (s) {
        this.form.patchValue(s);
        console.log("Survey loaded", s);
        while (s.pages.length > this.page_forms.length) {
          this.page_forms.push(new FormGroup({
            title: new FormControl("", []),
            description: new FormControl(""),
            question_order: new FormControl([])
          }));
        }
      }
    }));
    this.subscription("form_pages", this.form.valueChanges.subscribe(({ pages }) => {
      while (pages.length > this.page_forms.length) {
        this.page_forms.push(new FormGroup({
          title: new FormControl("", []),
          description: new FormControl(""),
          question_order: new FormControl([])
        }));
      }
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        this.page_forms[i].patchValue(page);
      }
    }));
    this.questions$.pipe(first((_) => _.length > 0)).subscribe((l) => this.timeout("questions", () => this.questions.set(l)));
  }
  onPageChange(event) {
    const index = event.index;
    this.active_page.set(index);
  }
  addPage() {
    const pages = this.form.value.pages;
    this.page_forms.push(new FormGroup({
      title: new FormControl("", []),
      description: new FormControl(""),
      question_order: new FormControl([])
    }));
    this.form.patchValue({
      pages: [
        ...pages,
        { title: "", description: "", question_order: [] }
      ]
    });
  }
  setBuilding(bld) {
    this._org.building = bld;
  }
  removeQuestion(q) {
    this._service.removeQuestion(q);
  }
  duplicateQuestion(q) {
    this._service.editQuestion(__spreadProps(__spreadValues({}, q), { id: void 0 }));
  }
  editQuestion(q) {
    this._service.editQuestion(q);
  }
  removePage() {
    const pages = this.form.value.pages;
    const page_form = this.page_forms[this.active_page()];
    pages.splice(this.active_page(), 1);
    if (this.active_page() >= pages.length) {
      page_form.patchValue({
        title: "",
        description: "",
        question_order: []
      });
      this.active_page.set(pages.length - 1);
    }
    this.form.patchValue({ pages });
  }
  removePageQuestion(idx) {
    const page_form = this.page_forms[this.active_page()];
    const order = page_form.get("question_order").value;
    order.splice(idx, 1);
    page_form.patchValue({ question_order: order });
  }
  async drop(event) {
    if (event.previousContainer === event.container) {
      const order = this.page_forms[this.active_page()].get("question_order").value;
      moveItemInArray(order, event.previousIndex, event.currentIndex);
      this.page_forms[this.active_page()].patchValue({
        question_order: order
      });
    } else {
      const questions = await nextValueFrom(this.questions$);
      const q_id = questions[event.previousIndex].id;
      const order = this.page_forms[this.active_page()].get("question_order").value;
      order.splice(event.currentIndex, 0, q_id);
      this.page_forms[this.active_page()].patchValue({
        question_order: order
      });
    }
  }
  onSearchChange(search_text) {
    this.search_text.set(search_text);
    this._service.setQuestionFilters({
      search_text,
      type: this.selected_type
    });
  }
  onTypeChange(type) {
    this.selected_type.set(type);
    this._service.setQuestionFilters({
      type,
      search_text: this.search_text()
    });
  }
  async saveSurvey() {
    this.form.markAllAsTouched();
    if (!this.form.valid)
      return;
    this.loading.set(true);
    const page_count = this.form.value.pages?.length || 0;
    const pages = [];
    for (let i = 0; i < page_count; i++) {
      const page_form = this.page_forms[i];
      pages.push(page_form.value);
    }
    this.form.patchValue({ pages });
    const survey = this.form.value;
    const call = this.form.value.id ? ja(survey) : Ca(`${survey.id}`, survey);
    await lastValueFrom(call).catch((error) => {
      notifyError("Failed to save survey details. Error: ", error);
      throw error;
    });
    notifySuccess("Successfully saved survey details.");
    this.loading.set(false);
  }
};
_SurveyBuilderComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SurveyBuilderComponent_BaseFactory;
  return function SurveyBuilderComponent_Factory(__ngFactoryType__) {
    return (\u0275SurveyBuilderComponent_BaseFactory || (\u0275SurveyBuilderComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SurveyBuilderComponent)))(__ngFactoryType__ || _SurveyBuilderComponent);
  };
})();
_SurveyBuilderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SurveyBuilderComponent, selectors: [["survey-builder"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 47, vars: 53, consts: [["page_list", "cdkDropList"], ["actionsMenu", "matMenu"], [1, "sticky", "top-0", "mb-2", "px-8"], ["header", "", 1, "flex", "items-center", "py-4"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "font", "flex", "flex-1", "flex-col", "text-2xl"], ["btn", "", "matRipple", "", 1, "w-32"], ["settings", "", 1, "mb-2", "flex", "space-x-2", 3, "formGroup"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["formControlName", "building_id", 3, "placeholder"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["formControlName", "zone_id", 3, "placeholder"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "trigger", 3, "placeholder"], ["details", "", 1, "mb-2", "flex", "space-x-2", 3, "formGroup"], ["matInput", "", "required", "", "formControlName", "title", 3, "placeholder"], ["matInput", "", "formControlName", "description", 3, "placeholder"], ["view-select", "", 1, "flex", "w-full", "items-center", "space-x-2", "rounded", "bg-base-200", "p-2"], ["matRipple", "", 1, "flex", "h-10", "flex-1", "items-center", "justify-center", "rounded", "hover:bg-base-300", 3, "click"], ["builder", "", 1, "flex", "h-px", "w-full", "flex-1", "space-x-2", "bg-base-200", "px-8", "py-2"], ["preview", "", 1, "h-px", "w-full", "flex-1"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "click", "value"], ["pages", "", 1, "sticky", "top-0", "h-full", "w-1/2", "flex-1", "space-y-2", "overflow-auto", 3, "formGroup"], [1, "flex", "items-center", "space-x-2"], [1, "relative", "h-[calc(3rem+2px)]", "flex-1", "overflow-hidden", "rounded", "border", "border-base-300", "bg-base-100"], [3, "selectedTabChange", "selectedIndex"], [3, "label"], ["icon", "", "matRipple", "", "matTooltip", "Add Page", 1, "h-12", "w-12", "rounded", "border", "border-base-300", "bg-base-100", 3, "click"], ["appearance", "outline", 1, "no-subscript", "w-1/2", "flex-1", "rounded", "bg-base-100"], ["matInput", "", "formControlName", "title", "placeholder", "Page Title"], ["icon", "", "matRipple", "", "matTooltip", "Remove Page", 1, "h-12", "w-12", "rounded", "border", "border-base-300", "bg-base-100", "text-error"], ["page-questions", "", "cdkDropList", "", 1, "space-y-2", 3, "cdkDropListDropped"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-12", "text-center", "opacity-30"], ["questions", "", 1, "h-full", "w-[20rem]", "space-y-2", "overflow-auto", "rounded", "border", "border-base-300", "bg-base-100", "pb-2", "shadow"], [1, "sticky", "top-0", "z-10", "bg-base-100"], [1, "flex", "items-center", "justify-between", "border-b", "border-base-200", "px-2", "py-1"], [1, "px-2", "font-medium"], ["icon", "", "matRipple", "", "matTooltip", "Add Question", 3, "click"], [1, "flex", "items-center", "justify-between", "space-x-2", "border-b", "border-base-200", "p-2"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "placeholder", "ngModel"], ["value", ""], ["cdkDropList", "", 1, "space-y-2", "px-2", 3, "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "relative", "flex", "w-full", "items-center", "rounded", "border", "border-base-200", "bg-base-200"], ["icon", "", "matRipple", "", "matTooltip", "Remove Page", 1, "h-12", "w-12", "rounded", "border", "border-base-300", "bg-base-100", "text-error", 3, "click"], ["cdkDrag", "", 1, "relative", "-ml-px", "flex"], ["class", "border-3 h-20 w-full rounded-lg border-dashed border-base-content bg-base-300 opacity-50", 4, "cdkDragPlaceholder"], [1, "relative", "left-px", "z-10", "flex", "flex-col", "items-center", "space-y-1"], [1, "relative", "left-px", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-l", "border-y", "border-l", "border-base-400", "bg-base-100", "p-2", "font-mono"], ["icon", "", "matRipple", "", "cdkDragHandle", "", "matTooltip", "Reorder Question", 1, "cursor-grab", "rounded-l", "rounded-r-none", "border-y", "border-l", "border-base-400", "bg-base-100"], [1, "text-xl"], ["icon", "", "matRipple", "", "matTooltip", "Remove Question", 1, "rounded-l", "rounded-r-none", "border-y", "border-l", "border-base-400", "bg-base-100", "text-error", 3, "click"], [1, "z-0", "flex-1", 3, "preview", "question"], [1, "border-3", "h-20", "w-full", "rounded-lg", "border-dashed", "border-base-content", "bg-base-300", "opacity-50"], [1, "text-8xl"], ["cdkDragHandle", "", "matRipple", "", "matTooltip", "Drag Question onto page", 1, "flex", "h-20", "h-full", "flex-col", "justify-center", "rounded", "bg-base-200", "p-1", "hover:cursor-move"], [1, "flex-1", "bg-base-100", "py-2", "pl-4", "pr-12"], [1, "text-sm", "opacity-40"], ["icon", "", "matRipple", "", 1, "absolute", "right-1", "top-1", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "text-xl", "text-error"], [3, "survey", "preview"], ["diameter", "48"]], template: function SurveyBuilderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "a", 4)(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7)(13, "mat-form-field", 8)(14, "mat-select", 9);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275template(16, SurveyBuilderComponent_mat_option_16_Template, 2, 2, "mat-option", 10);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 8)(19, "mat-select", 11);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "mat-option", 12);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, SurveyBuilderComponent_mat_option_24_Template, 2, 2, "mat-option", 13);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 8)(27, "mat-select", 14);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275template(29, SurveyBuilderComponent_mat_option_29_Template, 2, 2, "mat-option", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 15)(31, "mat-form-field", 8);
    \u0275\u0275element(32, "input", 16);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-form-field", 8);
    \u0275\u0275element(35, "input", 17);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 18)(38, "button", 19);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Template_button_click_38_listener() {
      return ctx.view.set("builder");
    });
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 19);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Template_button_click_41_listener() {
      return ctx.view.set("preview");
    });
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(44, SurveyBuilderComponent_Conditional_44_Template, 45, 25, "div", 20)(45, SurveyBuilderComponent_Conditional_45_Template, 2, 2, "div", 21);
    \u0275\u0275conditionalCreate(46, SurveyBuilderComponent_Conditional_46_Template, 4, 0, "div", 22);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(51, _c04, ctx.form.value.building_id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 27, ctx.form.value.id ? "APP.CONCIERGE.SURVEY_EDIT" : "APP.CONCIERGE.SURVEY_NEW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 29, "COMMON.SAVE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 31, "COMMON.BUILDING_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(17, 33, ctx.buildings$));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 35, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx.form.value.building_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 37, "COMMON.LEVEL_ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(25, 39, ctx.levels$));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(28, 41, "COMMON.NONE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.trigger_types);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 43, "FORM.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(36, 45, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-secondary", ctx.view() === "builder")("text-secondary-content", ctx.view() === "builder");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 47, "APP.CONCIERGE.SURVEY_BUILDER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-secondary", ctx.view() === "preview")("text-secondary-content", ctx.view() === "preview");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 49, "COMMON.PREVIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.view() === "builder" ? 44 : 45);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loading() ? 46 : -1);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  AsyncPipe,
  RouterModule,
  RouterLink,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  MatRippleModule,
  MatRipple,
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatTooltipModule,
  MatTooltip,
  IconComponent,
  TranslatePipe,
  SurveyOutletComponent,
  DragDropModule,
  CdkDropList,
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatTabsModule,
  MatTab,
  MatTabGroup,
  QuestionPipe,
  QuestionComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=survey-builder.component.css.map */"] });
var SurveyBuilderComponent = _SurveyBuilderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyBuilderComponent, [{
    type: Component,
    args: [{ selector: "survey-builder", template: `
        <div class="sticky top-0 mb-2 px-8">
            <div header class="flex items-center py-4">
                <a
                    icon
                    matRipple
                    [routerLink]="['/surveys', 'list', form.value.building_id]"
                >
                    <icon>arrow_back</icon>
                </a>
                <div class="font flex flex-1 flex-col text-2xl">
                    <h2>
                        {{
                            (form.value.id
                                ? 'APP.CONCIERGE.SURVEY_EDIT'
                                : 'APP.CONCIERGE.SURVEY_NEW'
                            ) | translate
                        }}
                    </h2>
                </div>
                <button btn matRipple class="w-32">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </div>
            <div settings class="mb-2 flex space-x-2" [formGroup]="form">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select
                        [placeholder]="'COMMON.BUILDING_SELECT' | translate"
                        formControlName="building_id"
                    >
                        <mat-option
                            *ngFor="let b of buildings$ | async"
                            [value]="b.id"
                            (click)="onBuildingClick(b)"
                            >{{ b.display_name || b.name }}</mat-option
                        >
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select
                        [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        formControlName="zone_id"
                    >
                        <mat-option [value]="form.value.building_id">
                            {{ 'COMMON.LEVEL_ALL' | translate }}
                        </mat-option>
                        <mat-option
                            *ngFor="let b of levels$ | async"
                            [value]="b.id"
                            >{{ b.display_name || b.name }}</mat-option
                        >
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select
                        [placeholder]="'COMMON.NONE' | translate"
                        formControlName="trigger"
                    >
                        <mat-option
                            *ngFor="let op of trigger_types"
                            [value]="op.id"
                        >
                            {{ op.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div details class="mb-2 flex space-x-2" [formGroup]="form">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <input
                        matInput
                        required
                        [placeholder]="'FORM.TITLE' | translate"
                        formControlName="title"
                    />
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        formControlName="description"
                    />
                </mat-form-field>
            </div>
            <div
                view-select
                class="flex w-full items-center space-x-2 rounded bg-base-200 p-2"
            >
                <button
                    matRipple
                    class="flex h-10 flex-1 items-center justify-center rounded hover:bg-base-300"
                    [class.bg-secondary]="view() === 'builder'"
                    [class.text-secondary-content]="view() === 'builder'"
                    (click)="view.set('builder')"
                >
                    {{ 'APP.CONCIERGE.SURVEY_BUILDER' | translate }}
                </button>
                <button
                    matRipple
                    class="flex h-10 flex-1 items-center justify-center rounded hover:bg-base-300"
                    [class.bg-secondary]="view() === 'preview'"
                    [class.text-secondary-content]="view() === 'preview'"
                    (click)="view.set('preview')"
                >
                    {{ 'COMMON.PREVIEW' | translate }}
                </button>
            </div>
        </div>
        @if (view() === 'builder') {
            <div
                builder
                class="flex h-px w-full flex-1 space-x-2 bg-base-200 px-8 py-2"
            >
                <div
                    pages
                    class="sticky top-0 h-full w-1/2 flex-1 space-y-2 overflow-auto"
                    [formGroup]="active_page_form()"
                >
                    <div class="flex items-center space-x-2">
                        <div
                            class="relative h-[calc(3rem+2px)] flex-1 overflow-hidden rounded border border-base-300 bg-base-100"
                        >
                            <mat-tab-group
                                [selectedIndex]="active_page()"
                                (selectedTabChange)="onPageChange($event)"
                            >
                                @for (
                                    page of form.value.pages;
                                    track idx;
                                    let idx = $index
                                ) {
                                    <mat-tab
                                        [label]="
                                            page.title || 'Page ' + (idx + 1)
                                        "
                                    ></mat-tab>
                                }
                            </mat-tab-group>
                        </div>

                        <button
                            icon
                            matRipple
                            class="h-12 w-12 rounded border border-base-300 bg-base-100"
                            matTooltip="Add Page"
                            (click)="addPage()"
                        >
                            <icon>add</icon>
                        </button>
                    </div>
                    <div class="flex items-center space-x-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-1/2 flex-1 rounded bg-base-100"
                        >
                            <input
                                matInput
                                formControlName="title"
                                placeholder="Page Title"
                            />
                        </mat-form-field>
                        @if (form.value.pages.length > 1) {
                            <button
                                icon
                                matRipple
                                class="h-12 w-12 rounded border border-base-300 bg-base-100 text-error"
                                matTooltip="Remove Page"
                                (click)="removePage()"
                            >
                                <icon>delete</icon>
                            </button>
                        }
                    </div>
                    <div
                        page-questions
                        cdkDropList
                        #page_list="cdkDropList"
                        (cdkDropListDropped)="drop($event)"
                        class="space-y-2"
                    >
                        @let page = active_page_form()?.value;
                        @if (page?.question_order.length > 0) {
                            @for (
                                q_id of page.question_order;
                                track q_id;
                                let idx = $index
                            ) {
                                @let quest =
                                    q_id | question: questions().length;
                                @if (quest) {
                                    <div cdkDrag class="relative -ml-px flex">
                                        <div
                                            class="border-3 h-20 w-full rounded-lg border-dashed border-base-content bg-base-300 opacity-50"
                                            *cdkDragPlaceholder
                                        ></div>
                                        <div
                                            class="relative left-px z-10 flex flex-col items-center space-y-1"
                                        >
                                            <div
                                                class="relative left-px flex h-10 w-10 items-center justify-center rounded-l border-y border-l border-base-400 bg-base-100 p-2 font-mono"
                                            >
                                                {{ idx + 1 }}
                                            </div>
                                            <button
                                                icon
                                                matRipple
                                                cdkDragHandle
                                                class="cursor-grab rounded-l rounded-r-none border-y border-l border-base-400 bg-base-100"
                                                matTooltip="Reorder Question"
                                            >
                                                <icon class="text-xl"
                                                    >drag_indicator</icon
                                                >
                                            </button>
                                            <button
                                                icon
                                                matRipple
                                                class="rounded-l rounded-r-none border-y border-l border-base-400 bg-base-100 text-error"
                                                matTooltip="Remove Question"
                                                (click)="
                                                    removePageQuestion(idx)
                                                "
                                            >
                                                <icon class="text-xl"
                                                    >delete</icon
                                                >
                                            </button>
                                        </div>
                                        <placeos-question
                                            class="z-0 flex-1"
                                            [preview]="true"
                                            [question]="quest"
                                        >
                                        </placeos-question>
                                    </div>
                                }
                            }
                        } @else {
                            <div
                                class="flex h-full w-full flex-col items-center justify-center space-y-4 p-12 text-center opacity-30"
                            >
                                <icon class="text-8xl">list</icon>
                                <p>No questions added to this page yet.</p>
                                <p>
                                    Drag and drop questions to from the right to
                                    start building your survey.
                                </p>
                            </div>
                        }
                    </div>
                </div>
                <div
                    questions
                    class="h-full w-[20rem] space-y-2 overflow-auto rounded border border-base-300 bg-base-100 pb-2 shadow"
                >
                    <div class="sticky top-0 z-10 bg-base-100">
                        <div
                            class="flex items-center justify-between border-b border-base-200 px-2 py-1"
                        >
                            <h3 class="px-2 font-medium">
                                {{
                                    'APP.CONCIERGE.SURVEY_QUESTION_HEADER'
                                        | translate
                                }}
                            </h3>
                            <button
                                icon
                                matRipple
                                matTooltip="Add Question"
                                (click)="editQuestion()"
                            >
                                <icon>add</icon>
                            </button>
                        </div>
                        <div
                            class="flex items-center justify-between space-x-2 border-b border-base-200 p-2"
                        >
                            <mat-form-field
                                class="no-subscript flex-1"
                                appearance="outline"
                            >
                                <icon
                                    class="relative -left-1 text-2xl"
                                    matPrefix
                                    >search</icon
                                >
                                <input
                                    matInput
                                    [(ngModel)]="search_text"
                                    (ngModelChange)="onSearchChange($event)"
                                    placeholder="Search..."
                                />
                            </mat-form-field>
                            <mat-form-field
                                class="no-subscript flex-1"
                                appearance="outline"
                            >
                                <mat-select
                                    [placeholder]="
                                        'APP.CONCIERGE.SURVEY_QUESTION_TYPES_ALL'
                                            | translate
                                    "
                                    [ngModel]="selected_type"
                                    (ngModelChange)="onTypeChange($event)"
                                >
                                    <mat-option value="">
                                        {{
                                            'APP.CONCIERGE.SURVEY_QUESTION_TYPES_ALL'
                                                | translate
                                        }}
                                    </mat-option>
                                    <mat-option
                                        *ngFor="let item of question_options"
                                        [value]="item.id"
                                    >
                                        {{ item.name }}
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>
                    <div
                        class="space-y-2 px-2"
                        cdkDropList
                        [cdkDropListData]="questions$ | async"
                        [cdkDropListConnectedTo]="[page_list]"
                    >
                        @for (
                            question of questions$ | async;
                            track question.id
                        ) {
                            <div
                                class="relative flex w-full items-center rounded border border-base-200 bg-base-200"
                                cdkDrag
                            >
                                <div
                                    class="border-3 h-20 w-full rounded-lg border-dashed border-base-content bg-base-300 opacity-50"
                                    *cdkDragPlaceholder
                                ></div>
                                <button
                                    cdkDragHandle
                                    class="flex h-20 h-full flex-col justify-center rounded bg-base-200 p-1 hover:cursor-move"
                                    matRipple
                                    matTooltip="Drag Question onto page"
                                >
                                    <icon>drag_indicator</icon>
                                </button>
                                <div class="flex-1 bg-base-100 py-2 pl-4 pr-12">
                                    <div>{{ question.title }}</div>
                                    <div class="text-sm opacity-40">
                                        {{ question_types[question.type] }}
                                    </div>
                                </div>
                                <button
                                    icon
                                    matRipple
                                    class="absolute right-1 top-1"
                                    [matMenuTriggerFor]="actionsMenu"
                                >
                                    <icon>more_vert</icon>
                                </button>
                                <mat-menu #actionsMenu="matMenu">
                                    <button
                                        mat-menu-item
                                        (click)="duplicateQuestion(q)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-xl"
                                                >content_copy</icon
                                            >
                                            <div>
                                                {{
                                                    'COMMON.DUPLICATE'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        mat-menu-item
                                        (click)="editQuestion(q)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-xl">edit</icon>
                                            <div>
                                                {{ 'COMMON.EDIT' | translate }}
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        mat-menu-item
                                        (click)="removeQuestion(q)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-xl text-error"
                                                >delete</icon
                                            >
                                            <div>
                                                {{
                                                    'COMMON.DELETE' | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                </mat-menu>
                            </div>
                        }
                    </div>
                </div>
            </div>
        } @else {
            <div preview class="h-px w-full flex-1">
                <survey-outlet
                    [survey]="form.value"
                    [preview]="true"
                ></survey-outlet>
            </div>
        }
        @if (loading()) {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="48"></mat-spinner>
                <p>Saving survey details...</p>
            </div>
        }
    `, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe,
      SurveyOutletComponent,
      DragDropModule,
      MatMenuModule,
      MatTabsModule,
      QuestionPipe,
      QuestionComponent
    ], styles: ["/* angular:styles/component:css;84d421d6fef93eef0f67860b99f41f2c65d8f21fd65b504097c9d7d840f02492;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/surveys/survey-builder.component.ts */\n:host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=survey-builder.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SurveyBuilderComponent, { className: "SurveyBuilderComponent", filePath: "apps/concierge/src/app/surveys/survey-builder.component.ts", lineNumber: 533 });
})();

// apps/concierge/src/app/surveys/survey-listings.component.ts
var _c05 = () => ["/surveys"];
var _c13 = () => ["/surveys", "builder"];
var _c2 = (a0) => ({ building_id: a0 });
var _c3 = (a0) => ({ key: "title", name: a0 });
var _c4 = (a0, a1) => ({ key: "zone_id", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "trigger", name: a0, content: a1 });
var _c6 = () => ({ key: "id", name: "Link", show: false });
var _c7 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c9 = (a0) => ["/surveys", "responses", a0];
var _c10 = (a0) => ["/surveys", "builder", a0];
var _c11 = (a0) => ["/surveys", "run", a0];
function SurveyListingsComponent_ng_template_24_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LEVEL_ALL"), " ");
  }
}
function SurveyListingsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275pipe(3, "level");
    \u0275\u0275conditionalCreate(4, SurveyListingsComponent_ng_template_24_Conditional_4_Template, 3, 3, "span", 17);
    \u0275\u0275pipe(5, "level");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_6_0 = \u0275\u0275pipeBind1(2, 2, data_r1)) == null ? null : tmp_6_0.display_name) || ((tmp_6_0 = \u0275\u0275pipeBind1(3, 4, data_r1)) == null ? null : tmp_6_0.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(5, 6, data_r1) ? 4 : -1);
  }
}
function SurveyListingsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2, " ");
  }
}
function SurveyListingsComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 3)(6, "a", 21)(7, "div", 22)(8, "icon", 13);
    \u0275\u0275text(9, "analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "a", 21)(14, "div", 22)(15, "icon", 13);
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "a", 23)(21, "div", 22)(22, "icon", 13);
    \u0275\u0275text(23, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 24);
    \u0275\u0275listener("click", function SurveyListingsComponent_ng_template_28_Template_button_click_27_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(row_r4));
    });
    \u0275\u0275elementStart(28, "div", 22)(29, "icon", 25);
    \u0275\u0275text(30, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const actionsMenu_r6 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionsMenu_r6);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c9, row_r4.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "APP.CONCIERGE.SURVEY_RESPONSES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c10, row_r4.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, "APP.CONCIERGE.SURVEY_EDIT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c11, row_r4.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 12, "APP.CONCIERGE.SURVEY_TEST"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 14, "APP.CONCIERGE.SURVEY_REMOVE"));
  }
}
var _SurveyListingsComponent = class _SurveyListingsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
    this._survey = inject(SurveyService);
    this.surveys = this._survey.building_surveys;
    this.building = this._survey.building;
  }
  ngOnInit() {
    this.subscription("route-param", this._route.paramMap.subscribe((params) => this._survey.setBuilding(params.get("id") || "")));
  }
  async remove(survey) {
    await this._survey.removeSurvey(survey);
  }
};
_SurveyListingsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SurveyListingsComponent_BaseFactory;
  return function SurveyListingsComponent_Factory(__ngFactoryType__) {
    return (\u0275SurveyListingsComponent_BaseFactory || (\u0275SurveyListingsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SurveyListingsComponent)))(__ngFactoryType__ || _SurveyListingsComponent);
  };
})();
_SurveyListingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SurveyListingsComponent, selectors: [["survey-listings"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 30, vars: 42, consts: [["level_template", ""], ["trigger_template", ""], ["action_template", ""], ["actionsMenu", "matMenu"], [1, "flex", "w-full", "items-center", "justify-between", "px-8", "py-4"], [1, "flex"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "mr-2", "flex"], [1, "flex", "flex-col"], [1, "text-2xl"], [1, "text-4xl"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "routerLink", "queryParams"], [1, "ml-4"], [1, "text-xl"], [1, "flex", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], ["empty_message", "No surveys found. Click on <i>Add survey</i> to create new surveys for this building.", 1, "block", "w-full", "min-w-[36rem]", "text-sm", 3, "data", "columns", "sortable"], [1, "p-4"], [1, "opacity-30"], [1, "p-4", "capitalize"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], [1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", "target", "_blank", "rel", "noopener noreferer", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], [1, "text-xl", "text-error"]], template: function SurveyListingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "a", 6)(3, "icon", 7);
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 10);
    \u0275\u0275declareLet(10);
    \u0275\u0275pipe(11, "building");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "a", 11)(14, "span", 12);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "icon", 13);
    \u0275\u0275text(18, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 14);
    \u0275\u0275element(20, "simple-table", 15);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, SurveyListingsComponent_ng_template_24_Template, 6, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(26, SurveyListingsComponent_ng_template_26_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(28, SurveyListingsComponent_ng_template_28_Template, 34, 22, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const level_template_r7 = \u0275\u0275reference(25);
    const trigger_template_r8 = \u0275\u0275reference(27);
    const action_template_r9 = \u0275\u0275reference(29);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c05));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "APP.CONCIERGE.SURVEY_LIST_HEADER"));
    const bld_r10 = \u0275\u0275pipeBind1(11, 11, ctx.building());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (bld_r10 == null ? null : bld_r10.display_name) || (bld_r10 == null ? null : bld_r10.name), " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c13))("queryParams", \u0275\u0275pureFunction1(23, _c2, ctx.building()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "APP.CONCIERGE.SURVEY_ADD"));
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx.surveys())("columns", \u0275\u0275pureFunction5(36, _c8, \u0275\u0275pureFunction1(25, _c3, \u0275\u0275pipeBind1(21, 15, "FORM.TITLE")), \u0275\u0275pureFunction2(27, _c4, \u0275\u0275pipeBind1(22, 17, "RESOURCE.LEVEL"), level_template_r7), \u0275\u0275pureFunction2(30, _c5, \u0275\u0275pipeBind1(23, 19, "COMMON.TRIGGER"), trigger_template_r8), \u0275\u0275pureFunction0(33, _c6), \u0275\u0275pureFunction1(34, _c7, action_template_r9)))("sortable", true);
  }
}, dependencies: [
  CommonModule,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  RouterModule,
  RouterLink,
  SimpleTableComponent,
  TranslatePipe,
  IconComponent,
  LevelPipe,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=survey-listings.component.css.map */"] });
var SurveyListingsComponent = _SurveyListingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyListingsComponent, [{
    type: Component,
    args: [{ selector: "survey-listings", template: `
        <div class="flex w-full items-center justify-between px-8 py-4">
            <div class="flex">
                <a icon matRipple [routerLink]="['/surveys']">
                    <icon class="mr-2 flex">arrow_back</icon>
                </a>
                <div class="flex flex-col">
                    <span class="text-2xl">{{
                        'APP.CONCIERGE.SURVEY_LIST_HEADER' | translate
                    }}</span>
                    <span class="text-4xl">
                        @let bld = building() | building;
                        {{ bld?.display_name || bld?.name }}
                    </span>
                </div>
            </div>
            <a
                btn
                matRipple
                class="space-x-2"
                [routerLink]="['/surveys', 'builder']"
                [queryParams]="{ building_id: building() }"
            >
                <span class="ml-4">{{
                    'APP.CONCIERGE.SURVEY_ADD' | translate
                }}</span>
                <icon class="text-xl">add</icon>
            </a>
        </div>
        <div class="flex h-1/2 w-full flex-1 overflow-auto px-8">
            <simple-table
                class="block w-full min-w-[36rem] text-sm"
                [data]="surveys()"
                [columns]="[
                    { key: 'title', name: 'FORM.TITLE' | translate },
                    {
                        key: 'zone_id',
                        name: 'RESOURCE.LEVEL' | translate,
                        content: level_template,
                    },
                    {
                        key: 'trigger',
                        name: 'COMMON.TRIGGER' | translate,
                        content: trigger_template,
                    },
                    { key: 'id', name: 'Link', show: false },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
                empty_message="No surveys found. Click on <i>Add survey</i> to create new surveys for this building."
            ></simple-table>
        </div>
        <ng-template #level_template let-data="data">
            <div class="p-4">
                {{ (data | level)?.display_name || (data | level)?.name }}
                @if (!(data | level)) {
                    <span class="opacity-30">
                        {{ 'COMMON.LEVEL_ALL' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #trigger_template let-data="data">
            <div class="p-4 capitalize">
                {{ data }}
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-1">
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded"
                    [matMenuTriggerFor]="actionsMenu"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #actionsMenu="matMenu">
                    <a
                        mat-menu-item
                        [routerLink]="['/surveys', 'responses', row.id]"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">analytics</icon>
                            <span>{{
                                'APP.CONCIERGE.SURVEY_RESPONSES' | translate
                            }}</span>
                        </div>
                    </a>
                    <a
                        mat-menu-item
                        [routerLink]="['/surveys', 'builder', row.id]"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <span>{{
                                'APP.CONCIERGE.SURVEY_EDIT' | translate
                            }}</span>
                        </div>
                    </a>
                    <a
                        mat-menu-item
                        [routerLink]="['/surveys', 'run', row.id]"
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">open_in_new</icon>
                            <span>{{
                                'APP.CONCIERGE.SURVEY_TEST' | translate
                            }}</span>
                        </div>
                    </a>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl text-error"> delete </icon>
                            <span>{{
                                'APP.CONCIERGE.SURVEY_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      MatMenuModule,
      RouterModule,
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      LevelPipe,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/surveys/survey-listings.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=survey-listings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SurveyListingsComponent, { className: "SurveyListingsComponent", filePath: "apps/concierge/src/app/surveys/survey-listings.component.ts", lineNumber: 172 });
})();

// apps/concierge/src/app/surveys/new-survey-widget.component.ts
var _c06 = (a0, a1, a2, a3) => ({ "bg-error": a0, "bg-warning": a1, "bg-info": a2, "bg-success": a3 });
var _c14 = (a0) => ({ width: a0 });
var _c22 = (a0, a1, a2, a3, a4) => ({ cx: a0, cy: a1, r: a2, stroke: "var(--base-200)", "stroke-width": a3, "stroke-dasharray": a4 });
var _c32 = (a0, a1, a2, a3, a4, a5, a6) => ({ cx: a0, cy: a1, r: a2, stroke: a3, "stroke-width": a4, "stroke-dasharray": a5, "stroke-dashoffset": a6 });
var _c42 = (a0, a1) => ({ width: a0, "background-color": a1 });
var _forTrack03 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.id || $index;
function NewSurveyWidgetComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const answer_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", answer_r1.answer_json, " ");
  }
}
function NewSurveyWidgetComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, NewSurveyWidgetComponent_Conditional_6_For_2_Template, 2, 1, "div", 5, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.answer_list());
  }
}
function NewSurveyWidgetComponent_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275element(5, "span", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "percent");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", item_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.name, " ");
    const percent_r4 = item_r3.percentage || 0;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(7, _c06, percent_r4 <= 25, percent_r4 > 25 && percent_r4 <= 50, percent_r4 > 50 && percent_r4 <= 75, percent_r4 > 75))("ngStyle", \u0275\u0275pureFunction1(12, _c14, percent_r4 + "%"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, item_r3.percentage / 100), " ");
  }
}
function NewSurveyWidgetComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NewSurveyWidgetComponent_Conditional_7_For_1_Template, 9, 14, "div", 6, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.selection_items());
  }
}
function NewSurveyWidgetComponent_Conditional_8_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275element(4, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "percent");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const \u0275$index_59_r6 = ctx.$index;
    const percent_r7 = item_r5.percentage || 0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275$index_59_r6 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(5, _c42, (percent_r7 || 0) + "%", percent_r7 <= 25 ? "var(--error)" : percent_r7 <= 50 ? "var(--warn)" : percent_r7 <= 75 ? "var(--info)" : "var(--success)"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, (percent_r7 || 0) / 100), " ");
  }
}
function NewSurveyWidgetComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 12)(2, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "circle", 15)(5, "circle", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275repeaterCreate(12, NewSurveyWidgetComponent_Conditional_8_For_13_Template, 8, 8, "div", 19, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const percent_r8 = ctx_r1.progress();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction5(7, _c22, ctx_r1.size / 2 + "px", ctx_r1.size / 2 + "px", (ctx_r1.size - ctx_r1.border_width) / 2 + "px", ctx_r1.border_width + "px", ctx_r1.circle() + "px"));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction7(13, _c32, ctx_r1.size / 2 + "px", ctx_r1.size / 2 + "px", (ctx_r1.size - ctx_r1.border_width) / 2 + "px", percent_r8 <= 0.25 ? "var(--error)" : percent_r8 <= 0.5 ? "var(--warn)" : percent_r8 <= 0.75 ? "var(--info)" : "var(--success)", ctx_r1.border_width + "px", ctx_r1.circle() + "px", ctx_r1.radius() + "px"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 4, ctx_r1.average_rating() || 0, "1.1"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.answer_list().length, " ratings");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.selection_items());
  }
}
var _NewSurveyWidgetComponent = class _NewSurveyWidgetComponent {
  constructor() {
    this.response = input();
    this.answer_list = computed(() => this.response().answers || []);
    this.selection_items = computed(() => {
      const choices = this.is_selection() ? this.response().question?.choices : new Array(this.response().question?.max_rating || 0).fill(0).map((_, i) => ({ text: i + 1 }));
      return choices?.map((choice) => ({
        id: choice.text,
        name: choice.text,
        percentage: this.answer_list().filter(({ answer_json }) => answer_json === choice.text || answer_json instanceof Array && answer_json.includes(choice.text)).length / this.answer_list().length * 100
      })) || [];
    });
    this.average_rating = computed(() => {
      const ratings = this.answer_list().map((answer) => +`${answer.answer_json}`);
      const sum = ratings.reduce((acc, val) => acc + val, 0);
      return Math.floor(sum / ratings.length * 10) / 10;
    });
    this.progress = computed(() => {
      return this.average_rating() / this.max_rate();
    });
    this.type = computed(() => this.response().question?.type || QuestionType.Empty);
    this.is_table = computed(() => this.type() === QuestionType.Comment_Box || this.type() === QuestionType.Single_Line_Text);
    this.is_selection = computed(() => this.type() === QuestionType.Drop_Down || this.type() === QuestionType.Radio_Group || this.type() === QuestionType.Check_Box);
    this.size = 7 * 16;
    this.border_width = 0.75 * 16;
    this.circle = computed(() => {
      return Math.round(2 * 3.14159 * (this.size - this.border_width) / 2);
    });
    this.radius = computed(() => {
      return Math.round(this.circle() * (1 - this.progress()));
    });
    this.max_rate = computed(() => this.response().question?.max_rating || 10);
  }
};
_NewSurveyWidgetComponent.\u0275fac = function NewSurveyWidgetComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewSurveyWidgetComponent)();
};
_NewSurveyWidgetComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewSurveyWidgetComponent, selectors: [["new-survey-widget"]], inputs: { response: [1, "response"] }, decls: 9, vars: 3, consts: [[1, "h-full", "space-y-2", "rounded", "border", "border-base-300", "bg-base-100", "p-4"], [1, "text-lg", "font-medium"], [1, "flex", "w-full", "justify-end"], [1, "space-y-2"], [1, "flex", "flex-row", "space-x-4", "p-4"], [1, "rounded", "bg-base-200", "p-2", "text-sm"], [1, "mx-4", "flex", "flex-1", "items-end", "pb-3", "pt-2"], [1, "w-px", "flex-1", "flex-col", "space-y-1"], [1, "flex-1", "truncate", 3, "matTooltip"], [1, "progress-bar", "h-1", "bg-base-200"], [1, "progress-bar-fill", "h-1", "justify-center", "rounded-lg", 3, "ngClass", "ngStyle"], [1, "w-16", "text-right", "text-2xl", "font-thin"], [1, "relative", "flex", "w-1/3", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "relative", "h-28", "w-28"], [1, "h-full", "w-full", "-rotate-90"], [3, "ngStyle"], [1, "progress-bar", 3, "ngStyle"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "text-4xl", "font-medium"], [1, "flex", "w-2/3", "flex-col-reverse"], [1, "flex", "w-full", "flex-row", "items-center", "space-x-4", "rounded-xl", "border", "border-base-100", "px-2", "hover:border-base-200"], [1, "w-5", "text-right"], ["progbar", "", 1, "h-2.5", "flex-1", "rounded-full", "bg-base-200"], [1, "h-2.5", "rounded-full", 3, "ngStyle"], [1, "flex", "w-6", "justify-end", "font-thin"]], template: function NewSurveyWidgetComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275conditionalCreate(6, NewSurveyWidgetComponent_Conditional_6_Template, 3, 0, "div", 3)(7, NewSurveyWidgetComponent_Conditional_7_Template, 2, 0)(8, NewSurveyWidgetComponent_Conditional_8_Template, 14, 21, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_0_0 = ctx.response().question) == null ? null : tmp_0_0.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.answer_list().length, " answers ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.is_table() ? 6 : ctx.is_selection() ? 7 : 8);
  }
}, dependencies: [CommonModule, NgClass, NgStyle, DecimalPipe, PercentPipe], styles: ["\n\nsvg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: transparent;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.5s ease-in-out;\n}\n/*# sourceMappingURL=new-survey-widget.component.css.map */"] });
var NewSurveyWidgetComponent = _NewSurveyWidgetComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSurveyWidgetComponent, [{
    type: Component,
    args: [{ selector: "new-survey-widget", template: `
        <div
            class="h-full space-y-2 rounded border border-base-300 bg-base-100 p-4"
        >
            <h3 class="text-lg font-medium">
                {{ response().question?.title }}
            </h3>
            <div class="flex w-full justify-end">
                {{ answer_list().length }} answers
            </div>
            <div>
                @if (is_table()) {
                    <div class="space-y-2">
                        @for (answer of answer_list(); track answer.id) {
                            <div class="rounded bg-base-200 p-2 text-sm">
                                {{ answer.answer_json }}
                            </div>
                        }
                    </div>
                } @else if (is_selection()) {
                    @for (item of selection_items(); track item.id) {
                        <div class="mx-4 flex flex-1 items-end pb-3 pt-2">
                            <div class="w-px flex-1 flex-col space-y-1">
                                <div
                                    class="flex-1 truncate"
                                    [matTooltip]="item.name"
                                >
                                    {{ item.name }}
                                </div>
                                <div class="progress-bar h-1 bg-base-200">
                                    @let percent = item.percentage || 0;
                                    <span
                                        class="progress-bar-fill h-1 justify-center rounded-lg"
                                        [ngClass]="{
                                            'bg-error': percent <= 25,
                                            'bg-warning':
                                                percent > 25 && percent <= 50,
                                            'bg-info':
                                                percent > 50 && percent <= 75,
                                            'bg-success': percent > 75,
                                        }"
                                        [ngStyle]="{ width: percent + '%' }"
                                    ></span>
                                </div>
                            </div>
                            <div class="w-16 text-right text-2xl font-thin">
                                {{ item.percentage / 100 | percent }}
                            </div>
                        </div>
                    }
                } @else {
                    <div class="flex flex-row space-x-4 p-4">
                        <div
                            class="relative flex w-1/3 flex-col items-center justify-center space-y-2"
                        >
                            <div class="relative h-28 w-28">
                                @let percent = progress();
                                <svg class="h-full w-full -rotate-90">
                                    <circle
                                        [ngStyle]="{
                                            cx: size / 2 + 'px',
                                            cy: size / 2 + 'px',
                                            r: (size - border_width) / 2 + 'px',
                                            stroke: 'var(--base-200)',
                                            'stroke-width': border_width + 'px',
                                            'stroke-dasharray': circle() + 'px',
                                        }"
                                    ></circle>
                                    <circle
                                        class="progress-bar"
                                        [ngStyle]="{
                                            cx: size / 2 + 'px',
                                            cy: size / 2 + 'px',
                                            r: (size - border_width) / 2 + 'px',
                                            stroke:
                                                percent <= 0.25
                                                    ? 'var(--error)'
                                                    : percent <= 0.5
                                                      ? 'var(--warn)'
                                                      : percent <= 0.75
                                                        ? 'var(--info)'
                                                        : 'var(--success)',
                                            'stroke-width': border_width + 'px',
                                            'stroke-dasharray': circle() + 'px',
                                            'stroke-dashoffset':
                                                radius() + 'px',
                                        }"
                                    ></circle>
                                </svg>
                                <div
                                    class="absolute inset-0 flex items-center justify-center text-4xl font-medium"
                                >
                                    {{ average_rating() || 0 | number: '1.1' }}
                                </div>
                            </div>
                            <div>{{ answer_list().length }} ratings</div>
                        </div>
                        <div class="flex w-2/3 flex-col-reverse">
                            @for (
                                item of selection_items();
                                track item.id || i;
                                let i = $index
                            ) {
                                <div
                                    class="flex w-full flex-row items-center space-x-4 rounded-xl border border-base-100 px-2 hover:border-base-200"
                                >
                                    @let percent = item.percentage || 0;
                                    <div class="w-5 text-right">
                                        {{ i + 1 }}
                                    </div>
                                    <div
                                        progbar
                                        class="h-2.5 flex-1 rounded-full bg-base-200"
                                    >
                                        <div
                                            class="h-2.5 rounded-full"
                                            [ngStyle]="{
                                                width: (percent || 0) + '%',
                                                'background-color':
                                                    percent <= 25
                                                        ? 'var(--error)'
                                                        : percent <= 50
                                                          ? 'var(--warn)'
                                                          : percent <= 75
                                                            ? 'var(--info)'
                                                            : 'var(--success)',
                                            }"
                                        ></div>
                                    </div>
                                    <div class="flex w-6 justify-end font-thin">
                                        {{ (percent || 0) / 100 | percent }}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    `, imports: [CommonModule], styles: ["/* angular:styles/component:css;965d5fc51260a806920905aacaca18fa5aacb5936de272c2e6d4d33f0826de44;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/surveys/new-survey-widget.component.ts */\nsvg circle {\n  fill: transparent;\n}\n.progress-bar {\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.5s ease-in-out;\n}\n/*# sourceMappingURL=new-survey-widget.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewSurveyWidgetComponent, { className: "NewSurveyWidgetComponent", filePath: "apps/concierge/src/app/surveys/new-survey-widget.component.ts", lineNumber: 162 });
})();

// apps/concierge/src/app/surveys/survey-responses.component.ts
var _c07 = (a0) => ["/surveys", "list", a0];
var _c15 = (a0, a1) => ({ id: a0, title: a1 });
function SurveyResponsesComponent_div_44_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const p_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, p_r3.title ? "APP.CONCIERGE.SURVEY_ANSWERS_PAGE_WITH_TITLE" : "APP.CONCIERGE.SURVEY_ANSWERS_PAGE", \u0275\u0275pureFunction2(4, _c15, i_r4 + 1, p_r3.title)), " ");
  }
}
function SurveyResponsesComponent_div_44_ng_container_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "new-survey-widget", 23);
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275property("response", r_r5);
  }
}
function SurveyResponsesComponent_div_44_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SurveyResponsesComponent_div_44_ng_container_1_div_1_Template, 3, 7, "div", 21);
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275repeaterCreate(3, SurveyResponsesComponent_div_44_ng_container_1_For_4_Template, 1, 1, "new-survey-widget", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const question_pages_r6 = \u0275\u0275readContextLet(42);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", question_pages_r6.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(p_r3.responses);
  }
}
function SurveyResponsesComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, SurveyResponsesComponent_div_44_ng_container_1_Template, 5, 1, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const question_pages_r6 = \u0275\u0275readContextLet(42);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", question_pages_r6);
  }
}
function SurveyResponsesComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.SURVEY_ANSWERS_EMPTY"));
  }
}
function SurveyResponsesComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275element(2, "mat-spinner", 29);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "APP.CONCIERGE.SURVEY_ANSWERS_LOADING"));
  }
}
var _SurveyResponsesComponent = class _SurveyResponsesComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._service = inject(NewSurveyService);
    this.options$ = new BehaviorSubject({});
    this.loading$ = new BehaviorSubject("");
    this.survey$ = this._service.survey$;
    this.questions$ = this._service.survey_questions$;
    this.answers$ = combineLatest([
      this.survey$,
      this.options$
    ]).pipe(filter(([_]) => !!_), switchMap(([{ id }, { start, end }]) => {
      this.loading$.next(addStringKey(this.loading$.getValue(), "ANSWERS"));
      const q = {
        survey_id: id
      };
      if (start || end) {
        q.created_after = getUnixTime(startOfDay(start || Date.now()));
        q.created_before = getUnixTime(endOfDay(end || Date.now()));
      }
      return $a(q).pipe(catchError(() => of([])));
    }), tap(() => this.loading$.next(removeStringKey(this.loading$.getValue(), "ANSWERS"))), shareReplay(1), startWith([]));
    this.paged_responses$ = combineLatest([
      this.survey$,
      this.questions$,
      this.answers$
    ]).pipe(map(([survey, questions, answers]) => {
      return [
        survey,
        questions.map((item) => ({
          question: item,
          answers: answers.filter((a) => a.question_id === item.id)
        }))
      ];
    }), map(([survey, q_list]) => {
      const mapping = {};
      q_list.forEach((e) => mapping[e.question.id] = e);
      const paged = [];
      survey?.pages.forEach((p) => {
        const t = { title: p.title, responses: [] };
        p.question_order.forEach((q) => t.responses.push(mapping[q]));
        paged.push(t);
      });
      return paged;
    }));
  }
  get week_start() {
    return this._settings.get("app.week_start");
  }
  ngOnInit() {
    this.subscription("params", this._route.paramMap.subscribe((params) => {
      this._service.setSurvey(params.get("id") || "");
    }));
  }
  setStartDate(date) {
    this.options$.next(__spreadProps(__spreadValues({}, this.options$.getValue()), { start: date }));
  }
  setEndDate(date) {
    this.options$.next(__spreadProps(__spreadValues({}, this.options$.getValue()), { end: date }));
  }
};
_SurveyResponsesComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SurveyResponsesComponent_BaseFactory;
  return function SurveyResponsesComponent_Factory(__ngFactoryType__) {
    return (\u0275SurveyResponsesComponent_BaseFactory || (\u0275SurveyResponsesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SurveyResponsesComponent)))(__ngFactoryType__ || _SurveyResponsesComponent);
  };
})();
_SurveyResponsesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SurveyResponsesComponent, selectors: [["survey-responses"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 49, vars: 44, consts: [["startDate", ""], ["endDate", ""], ["empty_template", ""], [1, "flex", "w-full", "items-center", "justify-between", "pb-4", "pl-4", "pr-8", "pt-8"], [1, "flex", "flex-row"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "flex"], [1, "space-y-2"], [1, "mt-1", "text-2xl"], [1, "text-lg"], [3, "week_start"], [3, "ngModelChange", "ngModel"], [1, "mb-4", "flex", "justify-end", "space-x-4", "px-8"], [1, "flex", "flex-1", "flex-col", "items-center", "rounded", "border", "border-base-300", "p-4"], [1, "text-4xl"], [1, "flex", "flex-1", "flex-col", "items-center", "space-y-2", "rounded", "border", "border-base-300", "p-4"], [1, "font-mono", "text-xl", "capitalize"], ["class", "h-1/2 flex-1 overflow-auto border-t border-base-300 bg-base-200", 4, "ngIf", "ngIfElse"], ["class", "absolute inset-0 z-10 flex bg-base-100 opacity-60", 4, "ngIf"], [1, "h-1/2", "flex-1", "overflow-auto", "border-t", "border-base-300", "bg-base-200"], [4, "ngFor", "ngForOf"], ["class", "flex w-full px-8 pt-2 text-xl font-medium", 4, "ngIf"], [1, "grid", "w-full", "grid-cols-2", "gap-4", "px-6", "py-2", "xl:grid-cols-3"], [3, "response"], [1, "flex", "w-full", "px-8", "pt-2", "text-xl", "font-medium"], [1, "flex", "min-h-[10rem]", "w-full", "flex-col", "items-center", "justify-center"], [1, "text-lg", "opacity-30"], [1, "absolute", "inset-0", "z-10", "flex", "bg-base-100", "opacity-60"], [1, "m-auto", "flex", "flex-col", "items-center", "space-y-4"], [3, "diameter"]], template: function SurveyResponsesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 3)(1, "div", 4)(2, "a", 5);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "icon", 6);
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "div", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "date-range-field", 10)(14, "input", 11, 0);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275listener("ngModelChange", function SurveyResponsesComponent_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event ? ctx.setStartDate($event) : "");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 11, 1);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275listener("ngModelChange", function SurveyResponsesComponent_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event ? ctx.setEndDate($event) : "");
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "h3");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 14);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 13)(29, "h3");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 14);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 15)(36, "h3");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 16);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275declareLet(42);
    \u0275\u0275pipe(43, "async");
    \u0275\u0275template(44, SurveyResponsesComponent_div_44_Template, 2, 1, "div", 17)(45, SurveyResponsesComponent_ng_template_45_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(47, SurveyResponsesComponent_div_47_Template, 6, 4, "div", 18);
    \u0275\u0275pipe(48, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_14_0;
    const empty_template_r7 = \u0275\u0275reference(46);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(42, _c07, (tmp_3_0 = \u0275\u0275pipeBind1(3, 15, ctx.survey$)) == null ? null : tmp_3_0.building_id));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 17, "APP.CONCIERGE.SURVEY_ANSWERS_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = \u0275\u0275pipeBind1(12, 19, ctx.survey$)) == null ? null : tmp_5_0.title) || "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("week_start", ctx.week_start);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(16, 21, ctx.options$).start);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(19, 23, ctx.options$).start);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 25, "APP.CONCIERGE.SURVEY_ANSWERS_QUESTIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_10_0 = \u0275\u0275pipeBind1(27, 27, ctx.questions$)) == null ? null : tmp_10_0.length) || 0, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 29, "APP.CONCIERGE.SURVEY_ANSWERS_ANSWERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_12_0 = \u0275\u0275pipeBind1(34, 31, ctx.answers$)) == null ? null : tmp_12_0.length) || 0, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 33, "APP.CONCIERGE.SURVEY_ANSWERS_TRIGGER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_14_0 = \u0275\u0275pipeBind1(41, 35, ctx.survey$)) == null ? null : tmp_14_0.trigger, " ");
    \u0275\u0275advance(2);
    const question_pages_r8 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(43, 37, ctx.paged_responses$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (question_pages_r8 == null ? null : question_pages_r8.length) > 0)("ngIfElse", empty_template_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(48, 40, ctx.loading$));
  }
}, dependencies: [
  MatProgressSpinnerModule,
  MatProgressSpinner,
  CommonModule,
  NgForOf,
  NgIf,
  AsyncPipe,
  TranslatePipe,
  NewSurveyWidgetComponent,
  DateRangeFieldComponent,
  RouterModule,
  RouterLink,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  IconComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n  overflow: auto;\n}\n/*# sourceMappingURL=survey-responses.component.css.map */"] });
var SurveyResponsesComponent = _SurveyResponsesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyResponsesComponent, [{
    type: Component,
    args: [{ selector: "survey-responses", template: `
        <header
            class="flex w-full items-center justify-between pb-4 pl-4 pr-8 pt-8"
        >
            <div class="flex flex-row">
                <a
                    icon
                    matRipple
                    [routerLink]="[
                        '/surveys',
                        'list',
                        (survey$ | async)?.building_id,
                    ]"
                >
                    <icon class="flex">arrow_back</icon>
                </a>
                <div class="space-y-2">
                    <div class="mt-1 text-2xl">
                        {{ 'APP.CONCIERGE.SURVEY_ANSWERS_HEADER' | translate }}
                    </div>
                    <div class="text-lg">
                        {{ (survey$ | async)?.title || '' }}
                    </div>
                </div>
            </div>
            <date-range-field [week_start]="week_start">
                <input
                    #startDate
                    [ngModel]="(options$ | async).start"
                    (ngModelChange)="$event ? setStartDate($event) : ''"
                />
                <input
                    #endDate
                    [ngModel]="(options$ | async).start"
                    (ngModelChange)="$event ? setEndDate($event) : ''"
                />
            </date-range-field>
        </header>
        <div class="mb-4 flex justify-end space-x-4 px-8">
            <div
                class="flex flex-1 flex-col items-center rounded border border-base-300 p-4"
            >
                <h3>
                    {{ 'APP.CONCIERGE.SURVEY_ANSWERS_QUESTIONS' | translate }}
                </h3>
                <p class="text-4xl">
                    {{ (questions$ | async)?.length || 0 }}
                </p>
            </div>
            <div
                class="flex flex-1 flex-col items-center rounded border border-base-300 p-4"
            >
                <h3>
                    {{ 'APP.CONCIERGE.SURVEY_ANSWERS_ANSWERS' | translate }}
                </h3>
                <p class="text-4xl">
                    {{ (answers$ | async)?.length || 0 }}
                </p>
            </div>
            <div
                class="flex flex-1 flex-col items-center space-y-2 rounded border border-base-300 p-4"
            >
                <h3>
                    {{ 'APP.CONCIERGE.SURVEY_ANSWERS_TRIGGER' | translate }}
                </h3>
                <p class="font-mono text-xl capitalize">
                    {{ (survey$ | async)?.trigger }}
                </p>
            </div>
        </div>
        @let question_pages = paged_responses$ | async;
        <div
            class="h-1/2 flex-1 overflow-auto border-t border-base-300 bg-base-200"
            *ngIf="question_pages?.length > 0; else empty_template"
        >
            <ng-container *ngFor="let p of question_pages; let i = index">
                <div
                    class="flex w-full px-8 pt-2 text-xl font-medium"
                    *ngIf="question_pages.length > 1"
                >
                    {{
                        (p.title
                            ? 'APP.CONCIERGE.SURVEY_ANSWERS_PAGE_WITH_TITLE'
                            : 'APP.CONCIERGE.SURVEY_ANSWERS_PAGE'
                        )
                            | translate
                                : {
                                      id: i + 1,
                                      title: p.title,
                                  }
                    }}
                </div>
                <div
                    class="grid w-full grid-cols-2 gap-4 px-6 py-2 xl:grid-cols-3"
                >
                    @for (r of p.responses; track r) {
                        <new-survey-widget [response]="r"></new-survey-widget>
                    }
                </div>
            </ng-container>
        </div>
        <ng-template #empty_template>
            <div
                class="flex min-h-[10rem] w-full flex-col items-center justify-center"
            >
                <span class="text-lg opacity-30">{{
                    'APP.CONCIERGE.SURVEY_ANSWERS_EMPTY' | translate
                }}</span>
            </div>
        </ng-template>
        <div
            *ngIf="loading$ | async"
            class="absolute inset-0 z-10 flex bg-base-100 opacity-60"
        >
            <div class="m-auto flex flex-col items-center space-y-4">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.SURVEY_ANSWERS_LOADING' | translate }}</p>
            </div>
        </div>
    `, imports: [
      MatProgressSpinnerModule,
      CommonModule,
      TranslatePipe,
      NewSurveyWidgetComponent,
      DateRangeFieldComponent,
      RouterModule,
      FormsModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;a7823b68ea814cbcad452001e1fc80ea976261569a8f1e8e8ed82d0c8a8e9434;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/surveys/survey-responses.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n  overflow: auto;\n}\n/*# sourceMappingURL=survey-responses.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SurveyResponsesComponent, { className: "SurveyResponsesComponent", filePath: "apps/concierge/src/app/surveys/survey-responses.component.ts", lineNumber: 175 });
})();

// apps/concierge/src/app/surveys/survey.component.ts
var _SurveyComponent = class _SurveyComponent {
};
_SurveyComponent.\u0275fac = function SurveyComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SurveyComponent)();
};
_SurveyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SurveyComponent, selectors: [["app-survey"]], decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function SurveyComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  RouterModule,
  RouterOutlet
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=survey.component.css.map */"] });
var SurveyComponent = _SurveyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyComponent, [{
    type: Component,
    args: [{ selector: "app-survey", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/surveys/survey.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=survey.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SurveyComponent, { className: "SurveyComponent", filePath: "apps/concierge/src/app/surveys/survey.component.ts", lineNumber: 34 });
})();

// apps/concierge/src/app/surveys/surveys.module.ts
var routes = [
  {
    path: "",
    component: SurveyComponent,
    children: [
      { path: "", component: BuildingListComponent },
      { path: "list/:id", component: SurveyListingsComponent },
      { path: "builder", component: SurveyBuilderComponent },
      { path: "builder/:id", component: SurveyBuilderComponent },
      { path: "responses/:id", component: SurveyResponsesComponent },
      { path: "**", pathMatch: "full", redirectTo: "" }
    ]
  },
  { path: "run/:id", component: SurveyOutletComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];
var _SurveysModule = class _SurveysModule {
};
_SurveysModule.\u0275fac = function SurveysModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SurveysModule)();
};
_SurveysModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SurveysModule });
_SurveysModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  SurveyComponent,
  SurveyOutletComponent,
  BuildingListComponent,
  SurveyListingsComponent,
  SurveyBuilderComponent,
  SurveyResponsesComponent,
  RouterModule.forChild(routes)
] });
var SurveysModule = _SurveysModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveysModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        SurveyComponent,
        SurveyOutletComponent,
        BuildingListComponent,
        SurveyListingsComponent,
        SurveyBuilderComponent,
        SurveyResponsesComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  SurveysModule
};
//# sourceMappingURL=surveys.module-JS6JU7DC.js.map
