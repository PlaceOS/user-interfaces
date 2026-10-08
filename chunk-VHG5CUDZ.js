import {
  HydratedSignageTemplateMapping
} from "./chunk-M3RPYBOW.js";
import {
  ConfirmModalComponent,
  openConfirmModal
} from "./chunk-CANWIIRQ.js";
import {
  PAGE_SIZE,
  SignageContextService,
  dialogClosed,
  searchParam
} from "./chunk-IC6PDIJY.js";
import {
  PagedList,
  byName,
  decodeEntityNames
} from "./chunk-P5YDCKEY.js";
import {
  OrganisationService
} from "./chunk-DQYXLEKZ.js";
import {
  $,
  Al,
  Injectable,
  MatDialog,
  _l,
  bl,
  computed,
  debounced,
  dl,
  effect,
  fl,
  gl,
  i18n,
  inject,
  linkedSignal,
  ml,
  notifyError,
  notifySuccess,
  notifyWarn,
  pl,
  ql,
  setClassMetadata,
  signal,
  untracked,
  vl,
  xl,
  yr,
  ɵɵdefineInjectable
} from "./chunk-VC4MJRPT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/templates/template-layout.util.ts
var EDGE_BAR_HEIGHT_PC = 15;
var SIDEBAR_WIDTH_PC = 20;
var FLOATING_DEFAULT_X_PC = 0;
var FLOATING_DEFAULT_Y_PC = 0;
var LAYOUT_POSITIONS = [
  "top",
  "bottom",
  "left",
  "right",
  "floating"
];
var POSITION_ICONS = {
  top: "align_vertical_top",
  bottom: "align_vertical_bottom",
  left: "align_horizontal_left",
  right: "align_horizontal_right",
  floating: "picture_in_picture"
};
var POSITION_LABELS = {
  top: "SIGNAGE_MANAGER.TEMPLATE_POSITION_TOP",
  bottom: "SIGNAGE_MANAGER.TEMPLATE_POSITION_BOTTOM",
  left: "SIGNAGE_MANAGER.TEMPLATE_POSITION_LEFT",
  right: "SIGNAGE_MANAGER.TEMPLATE_POSITION_RIGHT",
  floating: "SIGNAGE_MANAGER.TEMPLATE_POSITION_FLOATING"
};
function layoutPositionIcon(position) {
  return POSITION_ICONS[position] || "crop_free";
}
function layoutPositionLabel(position) {
  return POSITION_LABELS[position] || position;
}
var clamp = (value, min, max) => Math.min(Math.max(value, min), Math.max(min, max));
function layoutRatioToPercentage(value) {
  return value === void 0 ? null : clamp(value, 0, 1) * 100;
}
function layoutPercentageToRatio(value) {
  return value === null || !Number.isFinite(value) ? void 0 : clamp(value / 100, 0, 1);
}
function layoutAxisPercentage(layout, axis) {
  const percentage = layoutRatioToPercentage(layout[axis]);
  if (percentage !== null)
    return Math.round(percentage * 100) / 100;
  if (layout.position === "floating") {
    return axis === "x_pos" ? FLOATING_DEFAULT_X_PC : FLOATING_DEFAULT_Y_PC;
  }
  return axis === "x_pos" ? SIDEBAR_WIDTH_PC : EDGE_BAR_HEIGHT_PC;
}
function layoutPositionAxes(layout) {
  const axes = [];
  if (["left", "right", "floating"].includes(layout.position)) {
    axes.push("x_pos");
  }
  if (["top", "bottom", "floating"].includes(layout.position)) {
    axes.push("y_pos");
  }
  return axes;
}
function tabKeyIndex(key, index, count) {
  if (key === "Home")
    return 0;
  if (key === "End")
    return count - 1;
  if (key === "ArrowLeft")
    return (index - 1 + count) % count;
  if (key === "ArrowRight")
    return (index + 1) % count;
  return null;
}
function applyLayoutPositionDefaults(layout) {
  switch (layout.position) {
    case "top":
    case "bottom":
      return __spreadProps(__spreadValues({}, layout), {
        y_pos: layout.y_pos ?? layoutPercentageToRatio(EDGE_BAR_HEIGHT_PC)
      });
    case "left":
    case "right":
      return __spreadProps(__spreadValues({}, layout), {
        x_pos: layout.x_pos ?? layoutPercentageToRatio(SIDEBAR_WIDTH_PC)
      });
    case "floating":
      return __spreadProps(__spreadValues({}, layout), {
        x_pos: layout.x_pos ?? layoutPercentageToRatio(FLOATING_DEFAULT_X_PC),
        y_pos: layout.y_pos ?? layoutPercentageToRatio(FLOATING_DEFAULT_Y_PC)
      });
  }
}
function layoutPositionValid(layout) {
  const { position, x_pos, y_pos } = applyLayoutPositionDefaults(layout);
  if (position === "floating") {
    return x_pos !== void 0 && y_pos !== void 0;
  }
  return [x_pos, y_pos].every((value) => value === void 0 || value > 0 && value < 1);
}
function computeTemplateLayoutRects(layouts) {
  const rem = { left: 0, top: 0, width: 100, height: 100 };
  return layouts.map((layout) => {
    switch (layout.position) {
      case "top": {
        const height = Math.min(layoutRatioToPercentage(layout.y_pos) ?? EDGE_BAR_HEIGHT_PC, rem.height);
        const rect = __spreadProps(__spreadValues({}, rem), { height });
        rem.top += height;
        rem.height -= height;
        return rect;
      }
      case "bottom": {
        const height = Math.min(layoutRatioToPercentage(layout.y_pos) ?? EDGE_BAR_HEIGHT_PC, rem.height);
        const rect = __spreadProps(__spreadValues({}, rem), {
          top: rem.top + rem.height - height,
          height
        });
        rem.height -= height;
        return rect;
      }
      case "left": {
        const width = Math.min(layoutRatioToPercentage(layout.x_pos) ?? SIDEBAR_WIDTH_PC, rem.width);
        const rect = __spreadProps(__spreadValues({}, rem), { width });
        rem.left += width;
        rem.width -= width;
        return rect;
      }
      case "right": {
        const width = Math.min(layoutRatioToPercentage(layout.x_pos) ?? SIDEBAR_WIDTH_PC, rem.width);
        const rect = __spreadProps(__spreadValues({}, rem), {
          left: rem.left + rem.width - width,
          width
        });
        rem.width -= width;
        return rect;
      }
      case "floating":
      default: {
        const left = clamp(layoutRatioToPercentage(layout.x_pos) ?? FLOATING_DEFAULT_X_PC, 0, 100);
        const top = clamp(layoutRatioToPercentage(layout.y_pos) ?? FLOATING_DEFAULT_Y_PC, 0, 100);
        return { left, top, width: 100 - left, height: 100 - top };
      }
    }
  });
}

// apps/signage-manager/src/app/templates/signage-template.service.ts
function isSameSignageTemplate(first, second) {
  return (first.live_template_id || first.id) === (second.live_template_id || second.id);
}
function liveSignageTemplate(template) {
  return template.live_template_id && template.live_template_id !== template.id ? new yr(__spreadProps(__spreadValues({}, template), { id: template.live_template_id })) : template;
}
var SignageTemplateService = class _SignageTemplateService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._context = inject(SignageContextService);
    this.template_search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "template_search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._template_search_debounced = debounced(this.template_search_term, 400);
    this._template_list = new PagedList({
      sort: byName
    });
    this._held_drafts = signal(
      {},
      ...ngDevMode ? [{ debugName: "_held_drafts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.templates = computed(
      () => {
        const held = this._held_drafts();
        return this._template_list.items().map((item) => held[item.id] ?? item);
      },
      ...ngDevMode ? [{ debugName: "templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.templates_loading = this._template_list.loading;
    this.templates_has_more = this._template_list.has_more;
    this.templates_error = this._template_list.error;
    this.templates_total = this._template_list.total;
    this._templates_retry = signal(
      0,
      ...ngDevMode ? [{ debugName: "_templates_retry" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._user_retries = signal(
      0,
      ...ngDevMode ? [{ debugName: "_user_retries" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.templates_retries = this._user_retries.asReadonly();
    this._templates_queried = signal(
      false,
      ...ngDevMode ? [{ debugName: "_templates_queried" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.templates_ready = computed(
      () => this._templates_queried() && !this._template_list.loading(),
      ...ngDevMode ? [{ debugName: "templates_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._template_query = null;
    this._reload_templates = effect(
      () => {
        const enabled = this._context.templates_enabled();
        const initialised = this._org.initialised();
        const can_query = this._context.can_query_group_data();
        const group_id = this._context.api_group_id_debounced.value();
        const search = this._template_search_debounced.value().trim();
        this._context.data_change();
        this._templates_retry();
        untracked(() => {
          const active = enabled && initialised && can_query;
          if (this._template_query?.group_id !== group_id) {
            this._held_drafts.set({});
          }
          const same_query = active && this._template_query?.group_id === group_id && this._template_query.search === search;
          const limit = same_query ? Math.max(PAGE_SIZE, this._template_list.loaded_rows) : PAGE_SIZE;
          this._template_query = active ? { group_id, search } : null;
          this._templates_queried.set(active);
          this._template_list.reset(active ? pl(this._context.groupQueryParams(__spreadValues({ limit }, searchParam(search)), group_id)) : null, { keep_items: same_query });
        });
      },
      ...ngDevMode ? [{ debugName: "_reload_templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template_mappings_revision = signal(
      0,
      ...ngDevMode ? [{ debugName: "template_mappings_revision" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template_mapping_opening = signal(
      false,
      ...ngDevMode ? [{ debugName: "template_mapping_opening" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_template = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_template_requires_approval = computed(
      () => {
        const template = this.selected_template();
        return !!template?.id && !template.approved;
      },
      ...ngDevMode ? [{ debugName: "selected_template_requires_approval" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template_approval_request_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "template_approval_request_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_template_layout_index = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_template_layout_index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template_layout_draft = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "template_layout_draft" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.selected_template,
      computation: (template, previous) => {
        const previous_template = previous?.source;
        const keep_draft = !!template && !!previous_template && isSameSignageTemplate(previous_template, template) && JSON.stringify(previous.value) !== JSON.stringify(previous_template.layouts ?? []);
        return keep_draft ? previous.value : structuredClone(template?.layouts ?? []);
      }
    }));
    this.template_layout_dirty = computed(
      () => JSON.stringify(this.template_layout_draft()) !== JSON.stringify(this.selected_template()?.layouts ?? []),
      ...ngDevMode ? [{ debugName: "template_layout_dirty" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  loadMoreTemplates() {
    this._template_list.loadMore();
  }
  /** Load the failed page again, or the whole list when the first page failed */
  reloadTemplates() {
    this._user_retries.update((count) => count + 1);
    if (!this._template_list.retry()) {
      this._templates_retry.update((count) => count + 1);
    }
  }
  /**
   * Fetch a template that is not in the loaded pages, e.g. for a link to
   * it. It joins the loaded templates only when no search filters them,
   * so search results hold only matches.
   * @returns The template under its live ID, or null when it cannot be loaded
   */
  async loadTemplate(template_id) {
    if (!template_id)
      return null;
    const group_id = this._context.api_group_id();
    try {
      const template = liveSignageTemplate(decodeEntityNames(await dl(template_id)));
      if (this._context.api_group_id() !== group_id)
        return null;
      this._holdDraft(template);
      if (!this._template_query?.search) {
        this._template_list.update((items) => [
          ...items.filter((item) => !isSameSignageTemplate(item, template)),
          template
        ].sort(byName));
      }
      return template;
    } catch {
      return null;
    }
  }
  async listApprovedTemplates() {
    if (!this._context.canQueryLists())
      return [];
    const result = await $({
      path: "signage/templates",
      query_params: this._context.groupQueryParams({
        approved: true,
        limit: 1e4
      }),
      fn: (data) => new yr(decodeEntityNames(data))
    });
    return result.data;
  }
  async listTemplateMappings(query_params) {
    if (!this._context.canQueryLists())
      return [];
    const result = await $({
      path: "signage/template_mappings",
      query_params: __spreadProps(__spreadValues({}, query_params), { limit: 1e4 }),
      fn: (data) => new HydratedSignageTemplateMapping(__spreadProps(__spreadValues({}, data), {
        template_details: decodeEntityNames(data.template_details)
      }))
    });
    return result.data;
  }
  async addTemplate() {
    if (!this._context.requirePermission(this._context.can_create_templates(), "SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES"))
      return;
    const { TemplateEditModalComponent } = await import("./template-edit-modal.component-QRI6KEZM.js");
    const ref = this._dialog.open(TemplateEditModalComponent, {
      data: {
        template: new yr({}),
        onAdd: (data) => this._addSignageTemplate(data)
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (result) {
      this._context.changed();
    }
  }
  async editTemplate(template) {
    if (!this._context.requirePermission(this._context.can_update_templates(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES"))
      return;
    const { TemplateEditModalComponent } = await import("./template-edit-modal.component-QRI6KEZM.js");
    const ref = this._dialog.open(TemplateEditModalComponent, {
      data: {
        template,
        group_id: this._context.api_group_id(),
        onEdit: (id, data) => _l(id, data)
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (result) {
      this.updateCachedTemplate(result);
      this._context.changed();
    }
  }
  async editTemplateMapping(target, mapping = null) {
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS"))
      return false;
    if (this.template_mapping_opening())
      return false;
    let templates = [];
    this.template_mapping_opening.set(true);
    try {
      if (!mapping)
        templates = await this.listApprovedTemplates();
    } catch {
      notifyError(i18n("COMMON.LOAD_ERROR"));
      return false;
    } finally {
      this.template_mapping_opening.set(false);
    }
    const { TemplateMappingModalComponent } = await import("./template-mapping-modal.component-7EHIAJ36.js");
    const ref = this._dialog.open(TemplateMappingModalComponent, {
      data: {
        mapping,
        templates,
        save: (template_id, schedule) => mapping ? xl(mapping.id, { schedule }) : Al(__spreadProps(__spreadValues({}, target), {
          template_id,
          schedule
        }))
      },
      panelClass: "mobile-fullscreen"
    });
    const changed = !!await dialogClosed(ref);
    if (changed)
      this.template_mappings_revision.update((value) => value + 1);
    return changed;
  }
  async removeTemplateMapping(mapping) {
    if (!mapping?.id || !this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS"))
      return false;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_CONTENT", { name: mapping.template_details.name }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    try {
      await ql(mapping.id);
      this.template_mappings_revision.update((value) => value + 1);
      result.close();
      notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVED"));
      return true;
    } catch {
      result.close();
      notifyError(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVE_ERROR"));
      return false;
    }
  }
  async approveTemplate(template) {
    if (!template?.id || this._templateLayoutUnsaved(template))
      return;
    if (!this._context.requirePermission(this._context.can_approve(), "SIGNAGE_MANAGER.SVC_NO_APPROVE_TEMPLATES"))
      return;
    const { TemplateApproveModalComponent } = await import("./template-approve-modal.component-ZYCJI3H5.js");
    this._dialog.open(TemplateApproveModalComponent, {
      data: { template },
      panelClass: "mobile-fullscreen"
    });
  }
  async requestTemplateApproval(template) {
    if (!template?.id || this.template_approval_request_loading())
      return;
    if (this._templateLayoutUnsaved(template))
      return;
    if (this._context.can_approve()) {
      await this.approveTemplate(template);
      return;
    }
    let approvers = [];
    let group = null;
    this.template_approval_request_loading.set(true);
    try {
      [group] = await this._context.groupsHolding(template.id, (group_id) => pl({ group_id, limit: 500 }));
      if (!group) {
        notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_TEMPLATE"));
        return;
      }
      approvers = await bl(group.group.id) || [];
    } catch {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_TEMPLATE_APPROVERS"));
    } finally {
      this.template_approval_request_loading.set(false);
    }
    if (!group)
      return;
    const { TemplateRequestApprovalModalComponent } = await import("./template-request-approval-modal.component-BS4CEQ43.js");
    const ref = this._dialog.open(TemplateRequestApprovalModalComponent, {
      data: { template, approvers },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (!result)
      return;
    try {
      await vl(template.id, group.group.id, result.message || "", result.approver_id || "");
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUEST_ERROR"));
      return;
    }
    this.setTemplateApprovalStatus(template.id, false, true);
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUESTED"));
  }
  /**
   * Delete a template after confirmation.
   * @returns Whether the template was deleted
   */
  async removeTemplate(template) {
    if (!template?.id)
      return false;
    if (!this._context.requirePermission(this._context.can_delete_templates(), "SIGNAGE_MANAGER.SVC_NO_DELETE_TEMPLATES"))
      return false;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_DELETE_NAMED", {
        name: template.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    try {
      await ml(template.id, this._context.groupQueryParams({}));
    } catch {
      result.close();
      notifyError(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVE_ERROR"));
      return false;
    }
    this._releaseDraft(template.id);
    this._template_list.update((items) => items.filter((item) => !isSameSignageTemplate(item, template)));
    this._template_list.adjustTotal(-1);
    if (this.selected_template()?.id === template.id) {
      this.selected_template.set(null);
      this.selected_template_layout_index.set(null);
    }
    this._context.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVED"));
    result.close();
    return true;
  }
  /**
   * Copy a template with its settings and saved layouts. The copy starts
   * unapproved and has no template mappings.
   * @returns The new template, or null when no copy was made
   */
  async duplicateTemplate(template) {
    if (!template?.id)
      return null;
    if (!this._context.requirePermission(this._context.can_create_templates(), "SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES"))
      return null;
    try {
      const copy = await this._addSignageTemplate({
        name: i18n("SIGNAGE_MANAGER.COPY_NAME", {
          name: template.name
        }),
        description: template.description || void 0,
        tags: template.tags,
        background_item_id: template.background_item_id || void 0,
        full_screen_takeover: template.full_screen_takeover,
        merge: template.merge,
        layouts: (template.layouts || []).map(applyLayoutPositionDefaults)
      });
      this._context.changed();
      notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_DUPLICATED"));
      return copy;
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_DUPLICATE_ERROR"));
      return null;
    }
  }
  async shareTemplate(template) {
    if (!template?.id)
      return;
    await this._context.shareItems("templates", [template.id]);
  }
  /** Persist the layout draft of the selected template */
  async saveTemplateLayouts() {
    const template = this.selected_template();
    if (!template?.id || !this.template_layout_dirty())
      return;
    if (!this._context.requirePermission(this._context.can_update_templates(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES"))
      return;
    try {
      const layouts = this.template_layout_draft().map(applyLayoutPositionDefaults);
      const response = await _l(template.id, {
        layouts
      });
      const result = decodeEntityNames(new yr(__spreadProps(__spreadValues({}, response), { layouts })));
      this.updateCachedTemplate(result);
      this.discardTemplateLayoutDraft();
      notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_LAYOUTS_SAVED"));
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_SAVE_ERROR"));
    }
  }
  discardTemplateLayoutDraft() {
    this.template_layout_draft.set(structuredClone(this.selected_template()?.layouts ?? []));
  }
  /**
   * Discard the pending draft of a template and restore its previous
   * version, after the user confirms. Used by the approval modals.
   * @returns Whether the draft was discarded
   */
  async undoTemplateChanges(template_id, previous_version) {
    if (!this._context.requirePermission(this._context.can_update_templates(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES"))
      return false;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.UNDO_CHANGES"),
      content: i18n("SIGNAGE_MANAGER.TEMPLATE_REVERT_CONFIRM", {
        name: previous_version.name
      }),
      confirm_text: i18n("SIGNAGE_MANAGER.UNDO_CHANGES"),
      icon: { content: "undo" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    result.loading(i18n("SIGNAGE_MANAGER.UNDOING_CHANGES"));
    const confirm_ref = this._dialog.openDialogs.at(-1);
    if (confirm_ref?.componentInstance instanceof ConfirmModalComponent) {
      confirm_ref.disableClose = true;
    }
    try {
      await gl(template_id);
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.TEMPLATE_REVERT_ERROR"));
      return false;
    } finally {
      result.close();
    }
    this.updateCachedTemplate(previous_version);
    notifySuccess(i18n("SIGNAGE_MANAGER.TEMPLATE_REVERTED"));
    this._context.changed();
    return true;
  }
  setTemplateApprovalStatus(template_id, approved, approval_requested = false) {
    const template = this.templates().find((item) => item.id === template_id) || this.selected_template();
    if (!template || template.id !== template_id)
      return;
    this.updateCachedTemplate(new yr(__spreadProps(__spreadValues({}, template), {
      approved,
      approval_requested
    })));
  }
  /** Replace the loaded copies of a template. Stores it under its live ID. */
  updateCachedTemplate(changed) {
    const template = liveSignageTemplate(changed);
    this._holdDraft(template);
    this._template_list.update((items) => items.map((item) => isSameSignageTemplate(item, template) ? template : item));
    const selected_template = this.selected_template();
    if (selected_template && isSameSignageTemplate(selected_template, template)) {
      this.selected_template.set(template);
    }
  }
  /**
   * Keep a draft over its live record in the list. An approved version
   * releases it. An unapproved record without a draft, such as a template
   * that was never approved, is held only when it replaces a held draft.
   * @param template A template under its live ID
   */
  _holdDraft(template) {
    if (template.approved) {
      this._releaseDraft(template.id);
      return;
    }
    if (!template.live_template_id && !this._held_drafts()[template.id]) {
      return;
    }
    this._held_drafts.update((held) => __spreadProps(__spreadValues({}, held), {
      [template.id]: template
    }));
  }
  _releaseDraft(template_id) {
    if (!this._held_drafts()[template_id])
      return;
    this._held_drafts.update((held) => {
      const next = __spreadValues({}, held);
      delete next[template_id];
      return next;
    });
  }
  /** Warn and return true when `template` has unsaved layout edits */
  _templateLayoutUnsaved(template) {
    const selected_template = this.selected_template();
    if (!selected_template || !isSameSignageTemplate(selected_template, template) || !this.template_layout_dirty())
      return false;
    notifyWarn(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_LAYOUTS_UNSAVED"));
    return true;
  }
  _addSignageTemplate(form_data) {
    return fl(form_data, this._context.groupQueryParams({}));
  }
  static {
    this.\u0275fac = function SignageTemplateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageTemplateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageTemplateService, factory: _SignageTemplateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageTemplateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  LAYOUT_POSITIONS,
  layoutPositionIcon,
  layoutPositionLabel,
  layoutPercentageToRatio,
  layoutAxisPercentage,
  layoutPositionAxes,
  tabKeyIndex,
  applyLayoutPositionDefaults,
  layoutPositionValid,
  computeTemplateLayoutRects,
  isSameSignageTemplate,
  SignageTemplateService
};
//# debugId=33b96734-778b-52de-b9fd-5729bf2c3d14
//# sourceMappingURL=chunk-VHG5CUDZ.js.map
