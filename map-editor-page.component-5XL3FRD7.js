import {
  MapManagementService
} from "./chunk-XSDB4TWN.js";
import "./chunk-Q437IYQI.js";
import "./chunk-4G5AVUWZ.js";
import "./chunk-QXX3J6D7.js";
import "./chunk-LK4JSOGX.js";
import "./chunk-TR2TKPBH.js";
import {
  openConfirmModal
} from "./chunk-HJDMZLED.js";
import "./chunk-FGUB7PP5.js";
import "./chunk-NDWAKWUH.js";
import "./chunk-KGGMM3YC.js";
import {
  MatDialog
} from "./chunk-CAAMUB2D.js";
import "./chunk-4JTWNTOZ.js";
import "./chunk-4VWJLUSZ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLTSGFYE.js";
import "./chunk-JOYLFAJZ.js";
import "./chunk-XZDJ7TNQ.js";
import "./chunk-VSOOKHNH.js";
import "./chunk-KM2O7JF6.js";
import "./chunk-7IY5R5NT.js";
import {
  TranslatePipe
} from "./chunk-7SWYM6U4.js";
import "./chunk-PGXIF4A2.js";
import {
  OrganisationService
} from "./chunk-ZCE55SZV.js";
import "./chunk-OBKJFRWL.js";
import {
  IconComponent,
  _,
  i18n,
  notifyError,
  notifyInfo,
  notifySuccess,
  notifyWarn,
  u,
  v
} from "./chunk-XE3PPZGJ.js";
import "./chunk-QQKECY2M.js";
import "./chunk-F5BJYE7W.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FWV33PKU.js";
import "./chunk-BF2TDFXD.js";
import "./chunk-R7WRISTA.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-TFYF4ALL.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  Input,
  NgTemplateOutlet,
  Output,
  ViewChild,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-EOGESHX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/map-editor/src/lib/ai/panel-icons.ts
var PANEL_ICONS = {
  check: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
  undo: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8",
  close: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  send: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z",
  lock: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1z",
  error: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z",
  needs: "m19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9z",
  warning: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z",
  question: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"
};

// libs/map-editor/src/lib/ai/strings.ts
var DEFAULT_AI_STRINGS = {
  title: "Edit with AI",
  checking: "Checking what the AI can do here...",
  unavailable: "AI editing is not available: {reason}",
  model_note: "Edits by {model}, via {provider}",
  model_label: "Model",
  quota_note: "{count} edits left today",
  quota_domain_note: "{count} left this month for the organisation",
  quota_user_exhausted: "You have used today's allowance of AI edits.",
  quota_domain_exhausted: "This organisation has used this month's allowance of AI edits.",
  composer_label: "Describe the change",
  composer_placeholder: 'Describe the change, for example "recolour Meeting 1.01 light blue" or "add six desks along the north wall labelled 1.031 to 1.036"',
  reply_placeholder: "Answer the question, or change the request",
  send: "Send",
  cancel: "Cancel",
  cancelling: "Stopping...",
  new_request: "New request",
  retry: "Retry",
  selection_chip: "{count} selected",
  clear_selection: "Clear the selection",
  snapshot_attached: "Map picture attached",
  snapshot_failed: "The map picture could not be prepared or uploaded. Please retry.",
  chars: "{used} / {max}",
  too_long: "The request is too long.",
  sending: "Sending...",
  running: "Reading the map and working out the changes...",
  running_long: "Still working after {seconds} s",
  proposal_title: "{count} changes",
  questions_title: "The AI has a question",
  questions_hint: "Click the element on the map to select it, then answer below; the selection is sent with your reply.",
  keep: "Keep",
  undo: "Undo",
  reason_prompt: "What was wrong?",
  reasons: {
    wrong_elements: "Wrong elements",
    wrong_values: "Wrong values",
    too_much: "Too much",
    not_asked: "Not what I asked",
    other: "Other"
  },
  locked_note: "Cannot be applied",
  unticked_note: "Unticked; tick to apply it",
  needs: "needs change {n}",
  affects: "affects {count} elements",
  before: "Before",
  after: "After",
  show_group: "Show",
  hide_group: "Hide",
  group_label: "{count} {kind}",
  categories: {
    added: "Added",
    changed: "Changed",
    removed: "Removed",
    question: "Question",
    none: "No change"
  },
  kinds: {
    set_attr: "Change",
    set_style_rule: "Rule",
    set_text: "Text",
    transform: "Move",
    delete: "Delete",
    duplicate: "Duplicate",
    insert_shape: "Add",
    set_id: "Rename",
    reorder: "Reorder",
    group: "Group",
    ungroup: "Ungroup",
    replace_element: "Replace",
    replace_path: "Redraw",
    no_change: "No change",
    ask: "Question"
  },
  describe: {
    set_attr: "Change {name} of {who} to {value}",
    remove_attr: "Remove {name} from {who}",
    set_style_rule: "Rule {selector} {changes}, {affects}",
    style_declaration: "{name} {from} -> {to}",
    set_text: 'Change the text of {who} to "{text}"',
    move: "Move {who} by {x}, {y}",
    scale: "Scale {who} by {x}, {y}",
    rotate: "Rotate {who} by {degrees} degrees",
    transform_many: "Transform {who}",
    delete: "Delete {who}",
    delete_many: "Delete {who}",
    duplicate: "Duplicate {who} as {new_id}",
    duplicate_unnamed: "Duplicate {who}",
    duplicate_many: "Duplicate {who} {count} times as {pattern}",
    insert_shape: "Add {kind} {new_id} in {parent}",
    insert_shape_unnamed: "Add {kind} in {parent}",
    set_id: "Rename {who} to {new_id}",
    remove_id: "Remove the id of {who}",
    reorder_first: "Send {who} to the back",
    reorder_last: "Bring {who} to the front",
    reorder_before: "Move {who} behind {other}",
    reorder_after: "Move {who} in front of {other}",
    group: "Group {who} as {new_id}",
    group_unnamed: "Group {who}",
    ungroup: "Ungroup {who}",
    replace_element: "Replace {who} with new markup",
    replace_path: "Redraw the outline of {who}",
    no_change: "No change: {reason}",
    ask: "{question}",
    elements: "{count} elements",
    element: "{count} element",
    map_root: "the map"
  },
  outcomes: {
    previewing: "Previewed on the map",
    not_applied: "Not applied to the map",
    kept: "Kept",
    partial: "Kept {accepted} of {total}",
    undone: "Undone",
    failed: "Failed",
    cancelled: "Cancelled",
    empty: "No changes",
    questions: "Waiting for your answer"
  },
  states: {
    not_configured: "No AI provider is configured for this organisation.",
    model_cannot: "The configured AI model cannot edit maps.",
    quota: "The AI edit allowance has been used up.",
    busy: "The AI is busy right now. Try again in a moment.",
    generating: "Reading the map and working out the changes...",
    refused: "The AI provider refused this request. Rewording usually clears it.",
    timeout: "The AI took too long and the request was stopped.",
    vendor: "The AI provider returned an error.",
    invalid: "The AI's answer could not be turned into map changes.",
    partially_invalid: "{count} changes, {invalid} cannot be applied",
    empty: "No changes proposed. The AI said: {summary}",
    map_changed: "The map changed since this was proposed; changes whose elements are gone are unticked.",
    cancelled: "Cancelled.",
    applied: "Applied {count} changes to the map. Keep them, or undo.",
    nothing_accepted: "Nothing is ticked, so nothing has been applied.",
    blocked: "The changes cannot be applied together.",
    selection_refused: "That selection cannot be applied: {reason}. Your previous preview is unchanged.",
    forbidden: "You cannot change this map.",
    unknown: "Something went wrong."
  }
};
function format(template, values) {
  return template.replace(/\{([a-z_]+)\}/g, (match, key) => {
    const value = values[key];
    return value === void 0 || value === null ? match : String(value);
  });
}
function mergeRecord(base, override) {
  return override ? __spreadValues(__spreadValues({}, base), override) : base;
}
function resolveAiStrings(override) {
  if (!override)
    return DEFAULT_AI_STRINGS;
  const base = DEFAULT_AI_STRINGS;
  return __spreadProps(__spreadValues(__spreadValues({}, base), override), {
    reasons: mergeRecord(base.reasons, override.reasons),
    categories: mergeRecord(base.categories, override.categories),
    kinds: mergeRecord(base.kinds, override.kinds),
    describe: mergeRecord(base.describe, override.describe),
    outcomes: mergeRecord(base.outcomes, override.outcomes),
    states: mergeRecord(base.states, override.states)
  });
}

// libs/map-editor/src/lib/ai/preview.ts
var COUNTED = ["added", "changed", "removed"];
function previewSummary(proposal, strings) {
  const rows = proposal.rows.filter((row) => row.actionable);
  if (!rows.length)
    return null;
  const markers = rows.map((row) => ({
    n: row.index + 1,
    anchors: [...row.anchors],
    category: row.category,
    applied: row.checked && !row.locked
  }));
  const counts = COUNTED.map((category) => ({
    category,
    count: rows.filter((row) => row.category === category).length,
    label: ""
  })).filter((entry) => entry.count > 0).map((entry) => __spreadProps(__spreadValues({}, entry), {
    label: format(strings.group_label, {
      count: entry.count,
      kind: strings.categories[entry.category]
    })
  }));
  return {
    title: format(strings.proposal_title, { count: rows.length }),
    note: strings.outcomes.previewing,
    counts,
    markers
  };
}

// libs/map-editor/src/lib/ai/state.ts
function modelKey(choice) {
  return `${choice.provider_id}|${choice.model}`;
}
function modelOptions(capabilities) {
  if (!capabilities?.enabled)
    return [];
  return capabilities.providers.flatMap((provider) => {
    const models = provider.text_models?.length ? provider.text_models : [provider.text_model];
    return models.map((model2) => ({
      provider_id: provider.id,
      provider_name: provider.name,
      model: model2,
      key: modelKey({ provider_id: provider.id, model: model2 })
    }));
  });
}
function defaultChoice(capabilities) {
  if (!capabilities?.enabled)
    return null;
  const provider = capabilities.providers.find((candidate) => candidate.id === capabilities.default_provider_id) ?? capabilities.providers[0];
  return provider ? { provider_id: provider.id, model: provider.text_model } : null;
}
function offeredChoice(choice, capabilities) {
  if (!choice)
    return null;
  const key = modelKey(choice);
  return modelOptions(capabilities).some((option) => option.key === key) ? choice : null;
}
function effectiveChoice(state) {
  return state.choice ?? defaultChoice(state.capabilities);
}
function initialState() {
  return {
    phase: { kind: "idle" },
    capabilities: null,
    choice: null,
    turns: [],
    parent_job_id: null,
    draft: "",
    reasons: [],
    announcement: "",
    sequence: 0
  };
}
function canCompose(phase) {
  return phase.kind === "composing" || phase.kind === "reviewing" || phase.kind === "applied" || phase.kind === "error" || phase.kind === "cancelled";
}
function quotaBlock(capabilities, strings) {
  if (!capabilities?.enabled)
    return null;
  if (capabilities.quota.user_remaining_today === 0)
    return strings.quota_user_exhausted;
  if (capabilities.quota.domain_remaining_month === 0)
    return strings.quota_domain_exhausted;
  return null;
}
function proposalFor(phase) {
  if (phase.kind === "reviewing" || phase.kind === "applied")
    return phase.proposal;
  return null;
}
function outcomeFor(proposal) {
  switch (proposal.verdict) {
    case "blocked":
    case "nothing_accepted":
      return "not_applied";
    case "questions":
      return "questions";
    case "empty":
      return "empty";
    default:
      return "previewing";
  }
}
function withTurn(state, turn) {
  const sequence = state.sequence + 1;
  return __spreadProps(__spreadValues({}, state), {
    sequence,
    turns: [
      ...state.turns,
      __spreadProps(__spreadValues({}, turn), { id: `turn-${sequence}` })
    ]
  });
}
function setOutcome(state, job_id, outcome, proposal, reasons = []) {
  return __spreadProps(__spreadValues({}, state), {
    turns: state.turns.map((turn) => turn.kind === "proposal" && turn.job_id === job_id ? __spreadProps(__spreadValues({}, turn), { outcome, proposal, reasons }) : turn)
  });
}
function replaceProposal(state, proposal) {
  return __spreadProps(__spreadValues({}, state), {
    turns: state.turns.map((turn) => turn.kind === "proposal" && turn.job_id === proposal.job.id ? __spreadProps(__spreadValues({}, turn), { proposal, outcome: outcomeFor(proposal) }) : turn)
  });
}
function reduce(state, event, strings) {
  switch (event.type) {
    case "check":
      return __spreadProps(__spreadValues({}, state), {
        phase: { kind: "checking" },
        announcement: strings.checking
      });
    case "capabilities": {
      const capabilities = event.capabilities;
      if (!capabilities.enabled) {
        const reason = capabilities.reason || strings.states.not_configured;
        return __spreadProps(__spreadValues({}, state), {
          capabilities,
          phase: { kind: "unavailable", reason, hidden: false },
          announcement: format(strings.unavailable, { reason })
        });
      }
      return __spreadProps(__spreadValues({}, state), {
        capabilities,
        choice: offeredChoice(state.choice, capabilities),
        phase: canCompose(state.phase) ? state.phase : { kind: "composing" },
        announcement: ""
      });
    }
    case "capabilities_failed": {
      const hidden = event.status === 404;
      const reason = hidden ? strings.states.not_configured : event.message || strings.states.unknown;
      return __spreadProps(__spreadValues({}, state), {
        phase: { kind: "unavailable", reason, hidden },
        announcement: hidden ? "" : format(strings.unavailable, { reason })
      });
    }
    case "draft":
      return __spreadProps(__spreadValues({}, state), { draft: event.text });
    case "model_chosen":
      return __spreadProps(__spreadValues({}, state), { choice: event.choice });
    case "submit": {
      if (!canCompose(state.phase))
        return state;
      const next = withTurn(state, {
        kind: "person",
        instruction: event.instruction,
        selected: event.selected,
        snapshot: event.snapshot,
        at: event.at
      });
      return __spreadProps(__spreadValues({}, next), {
        draft: event.instruction,
        reasons: [],
        phase: { kind: "submitting" },
        announcement: strings.sending
      });
    }
    case "job_accepted":
      return __spreadProps(__spreadValues({}, state), {
        phase: {
          kind: "running",
          job: event.job,
          started_at: event.at,
          cancelling: false
        },
        announcement: strings.states.generating
      });
    case "job_updated":
      if (state.phase.kind !== "running")
        return state;
      return __spreadProps(__spreadValues({}, state), {
        phase: __spreadProps(__spreadValues({}, state.phase), { job: event.job })
      });
    case "submit_failed":
      return __spreadProps(__spreadValues({}, withTurn(state, {
        kind: "status",
        text: event.error.message,
        error: event.error,
        at: Date.now()
      })), {
        phase: { kind: "error", error: event.error },
        announcement: event.error.message
      });
    case "cancel_requested":
      if (state.phase.kind !== "running")
        return state;
      return __spreadProps(__spreadValues({}, state), {
        phase: __spreadProps(__spreadValues({}, state.phase), { cancelling: true }),
        announcement: strings.cancelling
      });
    case "job_cancelled":
      return __spreadProps(__spreadValues({}, withTurn(state, {
        kind: "status",
        text: strings.states.cancelled,
        error: null,
        at: event.at
      })), {
        phase: { kind: "cancelled", job: event.job },
        announcement: strings.states.cancelled
      });
    case "job_failed":
      return __spreadProps(__spreadValues({}, withTurn(state, {
        kind: "status",
        text: event.error.message,
        error: event.error,
        at: event.at
      })), {
        phase: { kind: "error", error: event.error },
        parent_job_id: event.job?.id ?? state.parent_job_id,
        announcement: event.error.message
      });
    case "validating": {
      const proposal = proposalFor(state.phase);
      if (!proposal)
        return state;
      return __spreadProps(__spreadValues({}, state), {
        phase: { kind: "reviewing", proposal, validating: true }
      });
    }
    case "proposal": {
      const proposal = event.proposal;
      const outcome = outcomeFor(proposal);
      const next = withTurn(state, {
        kind: "proposal",
        job_id: proposal.job.id,
        proposal,
        outcome,
        reasons: [],
        at: event.at
      });
      return __spreadProps(__spreadValues({}, next), {
        phase: { kind: "reviewing", proposal, validating: false },
        parent_job_id: proposal.job.id,
        announcement: proposalAnnouncement(proposal, strings)
      });
    }
    case "previewed": {
      const proposal = event.proposal;
      return __spreadProps(__spreadValues({}, setOutcome(state, proposal.job.id, "previewing", proposal)), {
        phase: { kind: "applied", proposal },
        announcement: format(strings.states.applied, {
          count: proposal.accepted.length
        })
      });
    }
    case "rows_changed": {
      const proposal = event.proposal;
      return __spreadProps(__spreadValues({}, replaceProposal(state, proposal)), {
        phase: { kind: "reviewing", proposal, validating: false },
        announcement: proposalAnnouncement(proposal, strings)
      });
    }
    case "kept": {
      const proposal = event.proposal;
      const total = proposal.rows.filter((row) => row.actionable).length;
      const outcome = proposal.accepted.length < total ? "partial" : "kept";
      return __spreadProps(__spreadValues({}, setOutcome(state, proposal.job.id, outcome, proposal)), {
        phase: { kind: "composing" },
        parent_job_id: proposal.job.id,
        reasons: [],
        announcement: outcome === "kept" ? strings.outcomes.kept : format(strings.outcomes.partial, {
          accepted: proposal.accepted.length,
          total
        })
      });
    }
    case "undone": {
      const proposal = event.proposal;
      return __spreadProps(__spreadValues({}, setOutcome(state, proposal.job.id, "undone", proposal, event.reasons)), {
        phase: { kind: "composing" },
        parent_job_id: proposal.job.id,
        reasons: [],
        announcement: strings.outcomes.undone
      });
    }
    case "refined": {
      const proposal = event.proposal;
      return setOutcome(state, proposal.job.id, "refined", proposal);
    }
    case "reason_toggled": {
      const reasons = state.reasons.includes(event.reason) ? state.reasons.filter((reason) => reason !== event.reason) : [...state.reasons, event.reason];
      return __spreadProps(__spreadValues({}, state), { reasons });
    }
    case "reset":
      return __spreadProps(__spreadValues({}, state), {
        phase: state.capabilities?.enabled ? { kind: "composing" } : state.phase,
        parent_job_id: null,
        draft: "",
        reasons: [],
        announcement: ""
      });
    case "announce":
      return __spreadProps(__spreadValues({}, state), { announcement: event.text });
    default:
      return state;
  }
}
function proposalAnnouncement(proposal, strings) {
  switch (proposal.verdict) {
    case "empty":
      return format(strings.states.empty, {
        summary: proposal.summary || "-"
      });
    case "questions":
      return proposal.questions[0] || strings.questions_title;
    case "blocked":
      return strings.states.blocked;
    case "nothing_accepted":
      return strings.states.nothing_accepted;
    default:
      return proposal.invalid_count ? format(strings.states.partially_invalid, {
        count: proposal.rows.filter((row) => row.actionable).length,
        invalid: proposal.invalid_count
      }) : format(strings.proposal_title, {
        count: proposal.accepted.length
      });
  }
}

// libs/map-editor/src/lib/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var ANCHOR_ATTR = "data-map-editor-anchor";
var EDITOR_ATTR_PREFIX = "data-map-editor-";
var ID_PATTERN = /^[A-Za-z][A-Za-z0-9_.-]*$/;
var DEFAULT_ID_PREFIX = "ai-";
var ATTR_ALLOW_LIST = /* @__PURE__ */ new Set([
  "fill",
  "stroke",
  "stroke-width",
  "stroke-dasharray",
  "fill-opacity",
  "stroke-opacity",
  "opacity",
  "class",
  "visibility",
  "rx",
  "ry",
  "font-size",
  "font-family",
  "font-weight",
  "text-anchor"
]);
var STYLE_PROPERTY_ALLOW_LIST = ATTR_ALLOW_LIST;
var DATA_ATTR = /^data-[a-z][a-z0-9_-]*$/i;
function isAllowedAttributeName(name) {
  if (ATTR_ALLOW_LIST.has(name))
    return true;
  return DATA_ATTR.test(name) && !name.toLowerCase().startsWith(EDITOR_ATTR_PREFIX);
}
var SHAPE_KINDS = [
  "rect",
  "circle",
  "ellipse",
  "line",
  "polygon",
  "polyline",
  "path",
  "text",
  "g"
];
var SHAPE_GEOMETRY_ATTRS = {
  rect: ["x", "y", "width", "height", "rx", "ry"],
  circle: ["cx", "cy", "r"],
  ellipse: ["cx", "cy", "rx", "ry"],
  line: ["x1", "y1", "x2", "y2"],
  polygon: ["points"],
  polyline: ["points"],
  path: ["d"],
  text: ["x", "y", "dx", "dy"],
  g: []
};
var TEXT_TAGS = /* @__PURE__ */ new Set(["text", "tspan"]);
var CONTAINER_TAGS = /* @__PURE__ */ new Set(["a", "g"]);
var LINE_TAGS = /* @__PURE__ */ new Set(["line"]);
var REFERENCE_TAGS = /* @__PURE__ */ new Set(["image", "use"]);
var NON_RENDERED_TAGS = /* @__PURE__ */ new Set([
  "clippath",
  "defs",
  "desc",
  "filter",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "pattern",
  "radialgradient",
  "script",
  "style",
  "symbol",
  "title"
]);
var DENIED_TAGS = /* @__PURE__ */ new Set([
  "script",
  "foreignobject",
  "handler",
  "iframe",
  "embed",
  "object",
  "animate",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "set",
  "discard",
  "mpath"
]);
var REPLACEMENT_DENIED_TAGS = /* @__PURE__ */ new Set([
  ...DENIED_TAGS,
  "style",
  "use"
]);
var REFERENCE_ATTRS = /* @__PURE__ */ new Set([
  "href",
  "xlink:href",
  "src"
]);
var MAX_OPS_PER_PROPOSAL = 80;
var MAX_REPLACEMENT_MARKUP_BYTES = 16 * 1024;
var MAX_TRANSFORM_TARGETS = 200;
var MAX_DUPLICATE_COUNT = 40;
var MAX_ELEMENT_GROWTH = 300;
var MAX_BYTE_GROWTH = 0.25;
var OFF_CANVAS_TOLERANCE = 0.02;
var HISTORY_DEPTH = 50;
var HISTORY_BYTE_BUDGET = 64 * 1024 * 1024;
var CONTENT_HASH_LENGTH = 8;

// libs/map-editor/src/lib/ai/annotations.ts
var ANNOTATION_COLOURS = [
  { name: "red", value: "#dc2626" },
  { name: "blue", value: "#2563eb" },
  { name: "green", value: "#15803d" },
  { name: "orange", value: "#c2410c" },
  { name: "purple", value: "#9333ea" }
];
function annotationColour(mark) {
  return ANNOTATION_COLOURS.find((colour) => colour.name === mark.colour)?.value || ANNOTATION_COLOURS[0].value;
}
function drawAnnotations(overlay, marks, units_per_px) {
  const owner = overlay.ownerDocument;
  const stroke = Math.max(0.1, units_per_px * 3);
  for (const mark of marks) {
    const colour = annotationColour(mark);
    const group2 = owner.createElementNS(SVG_NS, "g");
    group2.setAttribute("data-annotation", String(mark.n));
    const x = mark.x ?? mark.points?.[0]?.[0] ?? 0;
    const y = mark.y ?? mark.points?.[0]?.[1] ?? 0;
    let shape;
    if (mark.kind === "ellipse") {
      shape = owner.createElementNS(SVG_NS, "ellipse");
      shape.setAttribute("cx", String(x + (mark.width || 0) / 2));
      shape.setAttribute("cy", String(y + (mark.height || 0) / 2));
      shape.setAttribute("rx", String((mark.width || 0) / 2));
      shape.setAttribute("ry", String((mark.height || 0) / 2));
    } else if (mark.kind === "box") {
      shape = owner.createElementNS(SVG_NS, "rect");
      shape.setAttribute("x", String(x));
      shape.setAttribute("y", String(y));
      shape.setAttribute("width", String(mark.width || 0));
      shape.setAttribute("height", String(mark.height || 0));
    } else {
      shape = owner.createElementNS(SVG_NS, "path");
      let d = "";
      if (mark.kind === "arrow") {
        const end_x = mark.x2 ?? x;
        const end_y = mark.y2 ?? y;
        const angle = Math.atan2(end_y - y, end_x - x);
        const head = units_per_px * 12;
        const wing = (side) => `${end_x - head * Math.cos(angle + side * Math.PI / 6)} ${end_y - head * Math.sin(angle + side * Math.PI / 6)}`;
        d = `M${x} ${y}L${end_x} ${end_y}M${wing(-1)}L${end_x} ${end_y}L${wing(1)}`;
      } else {
        d = (mark.points || []).map(([px, py], index) => `${index ? "L" : "M"}${px} ${py}`).join("");
      }
      shape.setAttribute("d", d);
    }
    shape.setAttribute("style", `fill:none;stroke:${colour};stroke-width:${stroke};stroke-linecap:round;stroke-linejoin:round;pointer-events:none`);
    group2.appendChild(shape);
    if (!mark.n) {
      overlay.appendChild(group2);
      continue;
    }
    const badge = owner.createElementNS(SVG_NS, "text");
    badge.setAttribute("x", String(x));
    badge.setAttribute("y", String(y - units_per_px * 5));
    badge.setAttribute("style", `font:700 ${units_per_px * 13}px sans-serif;fill:${colour};stroke:#fff;stroke-width:${units_per_px * 3};paint-order:stroke;pointer-events:none`);
    badge.textContent = String(mark.n);
    group2.appendChild(badge);
    overlay.appendChild(group2);
  }
}
function insidePolygon(point, points) {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [xi, yi] = points[i];
    const [xj, yj] = points[j];
    if (yi > point[1] !== yj > point[1] && point[0] < (xj - xi) * (point[1] - yi) / (yj - yi) + xi)
      inside = !inside;
  }
  return inside;
}
function annotationCandidates(index, mark) {
  return index.entries.filter((entry) => {
    if (!entry.bbox || !entry.visible || entry.kind === "root" || entry.kind === "non-rendered" || entry.tag === "g" && entry.kind !== "bookable" && entry.kind !== "zone")
      return false;
    const [x, y, width, height] = entry.bbox;
    if (mark.kind === "arrow") {
      const px = mark.x2 ?? 0;
      const py = mark.y2 ?? 0;
      return px >= x && px <= x + width && py >= y && py <= y + height;
    }
    if (!entry.id && width * height > (mark.width || 0) * (mark.height || 0) * 4)
      return false;
    const centre = [x + width / 2, y + height / 2];
    if (mark.kind === "box")
      return centre[0] >= (mark.x || 0) && centre[0] <= (mark.x || 0) + (mark.width || 0) && centre[1] >= (mark.y || 0) && centre[1] <= (mark.y || 0) + (mark.height || 0);
    if (mark.kind === "ellipse") {
      const rx = (mark.width || 0) / 2;
      const ry = (mark.height || 0) / 2;
      return rx > 0 && ry > 0 && ((centre[0] - (mark.x || 0) - rx) / rx) ** 2 + ((centre[1] - (mark.y || 0) - ry) / ry) ** 2 <= 1;
    }
    return mark.kind === "path" && insidePolygon(centre, mark.points || []);
  }).sort((a, b) => {
    const named = Number(!!b.id) - Number(!!a.id);
    if (named)
      return named;
    const aa = a.bbox;
    const bb = b.bbox;
    return aa[2] * aa[3] - bb[2] * bb[3];
  }).slice(0, 32).map((entry) => entry.anchor);
}

// libs/map-editor/src/lib/ai/api.ts
var PLACEOS_TRANSPORT = {
  get: (url) => _(url),
  post: (url, body) => v(url, body)
};
var PATH = () => `${u()}/maps/ai`;
function toQuery(params) {
  const pairs = Object.entries(params).filter(([, value]) => value !== void 0 && value !== null).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  return pairs.length ? `?${pairs.join("&")}` : "";
}
function mapAICapabilities(transport = PLACEOS_TRANSPORT) {
  return transport.get(`${PATH()}/capabilities`);
}
function submitMapAIEdit(request2, transport = PLACEOS_TRANSPORT) {
  return transport.post(`${PATH()}/edit`, request2);
}
function showMapAIJob(id, query_params = {}, transport = PLACEOS_TRANSPORT) {
  return transport.get(`${PATH()}/jobs/${encodeURIComponent(id)}${toQuery(query_params)}`);
}
function cancelMapAIJob(id, transport = PLACEOS_TRANSPORT) {
  return transport.post(`${PATH()}/jobs/${encodeURIComponent(id)}/cancel`, {});
}
function resolveMapAIJob(id, request2, transport = PLACEOS_TRANSPORT) {
  return transport.post(`${PATH()}/jobs/${encodeURIComponent(id)}/resolve`, request2);
}
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
function errorStatus(error) {
  if (!isRecord(error))
    return void 0;
  const status = error["status"];
  if (typeof status === "number")
    return status;
  const nested = error["error"];
  if (!isRecord(nested))
    return void 0;
  const nested_status = nested["status"];
  return typeof nested_status === "number" ? nested_status : void 0;
}
function errorMessage(error) {
  if (!isRecord(error))
    return typeof error === "string" ? error : "";
  const response = error["response"];
  if (isRecord(response)) {
    const message2 = response["message"] ?? response["error"];
    if (typeof message2 === "string" && message2)
      return message2;
  }
  if (typeof response === "string" && response)
    return response;
  const message = error["message"];
  return typeof message === "string" ? message : "";
}
var FINAL_JOB_STATES = /* @__PURE__ */ new Set(["done", "failed", "cancelled"]);
function isFinalJob(job) {
  return !!job && FINAL_JOB_STATES.has(job.state);
}
var POLL_WAIT = 25;
var POLL_RETRIES = 10;
var MAX_JOB_WAIT_MS = 30 * 60 * 1e3;
var BACKOFF_BASE_MS = 1e3;
var BACKOFF_CAP_MS = 3e4;
function backoffDelay(failures) {
  return Math.min(BACKOFF_CAP_MS, BACKOFF_BASE_MS * 2 ** Math.max(0, failures - 1));
}
function isTransientError(error) {
  const status = errorStatus(error);
  return status === void 0 || status === 408 || status === 429 || status >= 500;
}
var WatchAbortedError = class extends Error {
  constructor() {
    super("the job watch was aborted");
    this.name = "WatchAbortedError";
  }
};
var WatchTimeoutError = class extends Error {
  constructor(job_id) {
    super(`job ${job_id} did not finish in time`);
    this.job_id = job_id;
    this.name = "WatchTimeoutError";
  }
};
var WatchGaveUpError = class extends Error {
  constructor(job_id, failures, last_error) {
    super(`gave up on job ${job_id} after ${failures} failed polls`);
    this.job_id = job_id;
    this.failures = failures;
    this.last_error = last_error;
    this.name = "WatchGaveUpError";
  }
};
function sleep(ms, signal2) {
  return new Promise((resolve) => {
    if (signal2?.aborted) {
      resolve();
      return;
    }
    const timer = setTimeout(done, ms);
    function done() {
      clearTimeout(timer);
      signal2?.removeEventListener("abort", done);
      resolve();
    }
    signal2?.addEventListener("abort", done, { once: true });
  });
}
async function watchJob(id, options = {}) {
  const transport = options.transport ?? PLACEOS_TRANSPORT;
  const wait = options.wait ?? POLL_WAIT;
  const max_failures = options.max_failures ?? POLL_RETRIES;
  const max_wait_ms = options.max_wait_ms ?? MAX_JOB_WAIT_MS;
  const pause = options.sleep ?? sleep;
  const now = options.now ?? Date.now;
  const deadline = now() + max_wait_ms;
  let since = options.since;
  let failures = 0;
  for (; ; ) {
    if (options.signal?.aborted)
      throw new WatchAbortedError();
    if (now() > deadline)
      throw new WatchTimeoutError(id);
    let job;
    try {
      job = await showMapAIJob(id, { wait, since }, transport);
    } catch (error) {
      if (options.signal?.aborted)
        throw new WatchAbortedError();
      if (!isTransientError(error))
        throw error;
      failures += 1;
      if (failures > max_failures)
        throw new WatchGaveUpError(id, failures, error);
      await pause(backoffDelay(failures), options.signal);
      continue;
    }
    if (options.signal?.aborted)
      throw new WatchAbortedError();
    failures = 0;
    options.on_update?.(job);
    if (isFinalJob(job))
      return job;
    since = job.version;
  }
}

// libs/map-editor/src/lib/matrix.ts
var IDENTITY = Object.freeze({
  a: 1,
  b: 0,
  c: 0,
  d: 1,
  e: 0,
  f: 0
});
var NUMBER = /[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g;
var TRANSFORM_FN = /(matrix|translate|scale|rotate|skewX|skewY)\s*\(([^)]*)\)/g;
function multiply(m, n) {
  return {
    a: m.a * n.a + m.c * n.b,
    b: m.b * n.a + m.d * n.b,
    c: m.a * n.c + m.c * n.d,
    d: m.b * n.c + m.d * n.d,
    e: m.a * n.e + m.c * n.f + m.e,
    f: m.b * n.e + m.d * n.f + m.f
  };
}
function invert(m) {
  const det = m.a * m.d - m.b * m.c;
  if (!det || !Number.isFinite(det))
    return null;
  return {
    a: m.d / det,
    b: -m.b / det,
    c: -m.c / det,
    d: m.a / det,
    e: (m.c * m.f - m.d * m.e) / det,
    f: (m.b * m.e - m.a * m.f) / det
  };
}
function applyToPoint(m, [x, y]) {
  return [m.a * x + m.c * y + m.e, m.b * x + m.d * y + m.f];
}
function isIdentity(m, epsilon = 1e-9) {
  return Math.abs(m.a - 1) < epsilon && Math.abs(m.b) < epsilon && Math.abs(m.c) < epsilon && Math.abs(m.d - 1) < epsilon && Math.abs(m.e) < epsilon && Math.abs(m.f) < epsilon;
}
function isTranslation(m, epsilon = 1e-9) {
  return Math.abs(m.a - 1) < epsilon && Math.abs(m.b) < epsilon && Math.abs(m.c) < epsilon && Math.abs(m.d - 1) < epsilon;
}
function translation(x, y) {
  return { a: 1, b: 0, c: 0, d: 1, e: x, f: y };
}
function scaling(x, y) {
  return { a: x, b: 0, c: 0, d: y, e: 0, f: 0 };
}
function rotation(degrees) {
  const radians = degrees * Math.PI / 180;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  return { a: cos, b: sin, c: -sin, d: cos, e: 0, f: 0 };
}
function numbersIn(value) {
  return (value.match(NUMBER) || []).map(Number);
}
function parseTransform(value) {
  let result = __spreadValues({}, IDENTITY);
  if (!value)
    return result;
  for (const match of value.matchAll(TRANSFORM_FN)) {
    const name = match[1];
    const args = numbersIn(match[2]);
    let m = null;
    switch (name) {
      case "matrix":
        if (args.length === 6) {
          m = {
            a: args[0],
            b: args[1],
            c: args[2],
            d: args[3],
            e: args[4],
            f: args[5]
          };
        }
        break;
      case "translate":
        if (args.length)
          m = translation(args[0], args[1] || 0);
        break;
      case "scale":
        if (args.length) {
          m = scaling(args[0], args.length > 1 ? args[1] : args[0]);
        }
        break;
      case "rotate":
        if (args.length === 3) {
          m = multiply(multiply(translation(args[1], args[2]), rotation(args[0])), translation(-args[1], -args[2]));
        } else if (args.length) {
          m = rotation(args[0]);
        }
        break;
      case "skewX":
        if (args.length) {
          m = {
            a: 1,
            b: 0,
            c: Math.tan(args[0] * Math.PI / 180),
            d: 1,
            e: 0,
            f: 0
          };
        }
        break;
      case "skewY":
        if (args.length) {
          m = {
            a: 1,
            b: Math.tan(args[0] * Math.PI / 180),
            c: 0,
            d: 1,
            e: 0,
            f: 0
          };
        }
        break;
    }
    if (m)
      result = multiply(result, m);
  }
  return result;
}
function round(value, places) {
  const factor = 10 ** places;
  const rounded = Math.round(value * factor) / factor;
  return Object.is(rounded, -0) ? 0 : rounded;
}
function formatTransform(m, places = 3) {
  if (isTranslation(m)) {
    return `translate(${round(m.e, places)} ${round(m.f, places)})`;
  }
  return `matrix(${[m.a, m.b, m.c, m.d, m.e, m.f].map((v2) => round(v2, places)).join(" ")})`;
}
function composeTransform(spec) {
  const [ox, oy] = spec.origin || [0, 0];
  let m = __spreadValues({}, IDENTITY);
  if (spec.scale)
    m = multiply(scaling(spec.scale[0], spec.scale[1]), m);
  if (spec.rotate)
    m = multiply(rotation(spec.rotate), m);
  if (spec.scale || spec.rotate) {
    m = multiply(multiply(translation(ox, oy), m), translation(-ox, -oy));
  }
  if (spec.translate) {
    m = multiply(translation(spec.translate[0], spec.translate[1]), m);
  }
  return m;
}
function changeOfBasis(root_space, ctm) {
  const inverse = invert(ctm);
  if (!inverse)
    return null;
  return multiply(multiply(inverse, root_space), ctm);
}

// libs/map-editor/src/lib/path-data.ts
var TOKEN = /[MmLlHhVvCcSsQqTtAaZz]|[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g;
var ARITY = {
  M: 2,
  L: 2,
  H: 1,
  V: 1,
  C: 6,
  S: 4,
  Q: 4,
  T: 2,
  A: 7,
  Z: 0
};
function checkPathData(d) {
  if (!d || !d.trim())
    return { ok: false, error: "empty path data", commands: 0 };
  const stripped = d.replace(TOKEN, "").replace(/[\s,]/g, "");
  if (stripped) {
    return {
      ok: false,
      error: `unexpected characters "${stripped.slice(0, 12)}"`,
      commands: 0
    };
  }
  const tokens = d.match(TOKEN) || [];
  let command = "";
  let pending = [];
  let commands = 0;
  let first = true;
  for (const token of tokens) {
    if (/^[A-Za-z]$/.test(token)) {
      if (pending.length) {
        return {
          ok: false,
          error: `command ${command} has a partial argument group`,
          commands
        };
      }
      if (first && token.toUpperCase() !== "M") {
        return { ok: false, error: "path must start with M", commands };
      }
      first = false;
      command = token;
      commands++;
      continue;
    }
    if (!command) {
      return {
        ok: false,
        error: "number before the first command",
        commands
      };
    }
    const arity = ARITY[command.toUpperCase()];
    if (arity === 0) {
      return { ok: false, error: "Z takes no arguments", commands };
    }
    pending.push(Number(token));
    if (pending.length === arity) {
      pending = [];
      commands++;
    }
  }
  if (pending.length) {
    return {
      ok: false,
      error: `command ${command} has a partial argument group`,
      commands
    };
  }
  return { ok: commands > 0, commands };
}
function pathPoints(d) {
  const points = [];
  if (!d)
    return points;
  const tokens = d.match(TOKEN) || [];
  let current = [0, 0];
  let start = [0, 0];
  let command = "";
  let index = 0;
  const take = (count) => {
    if (index + count > tokens.length)
      return null;
    const values = [];
    for (let i = 0; i < count; i++) {
      const token = tokens[index + i];
      if (/^[A-Za-z]$/.test(token))
        return null;
      values.push(Number(token));
    }
    index += count;
    return values;
  };
  while (index < tokens.length) {
    const token = tokens[index];
    if (/^[A-Za-z]$/.test(token)) {
      command = token;
      index++;
      if (command === "Z" || command === "z") {
        current = start;
        continue;
      }
    }
    if (!command) {
      index++;
      continue;
    }
    const relative = command === command.toLowerCase();
    const upper = command.toUpperCase();
    const abs = (x, y) => relative ? [current[0] + x, current[1] + y] : [x, y];
    let values;
    switch (upper) {
      case "M":
        values = take(2);
        if (!values)
          return points;
        current = abs(values[0], values[1]);
        start = current;
        points.push(current);
        command = relative ? "l" : "L";
        break;
      case "L":
        values = take(2);
        if (!values)
          return points;
        current = abs(values[0], values[1]);
        points.push(current);
        break;
      case "H":
        values = take(1);
        if (!values)
          return points;
        current = [
          relative ? current[0] + values[0] : values[0],
          current[1]
        ];
        points.push(current);
        break;
      case "V":
        values = take(1);
        if (!values)
          return points;
        current = [
          current[0],
          relative ? current[1] + values[0] : values[0]
        ];
        points.push(current);
        break;
      case "C":
      case "S":
      case "Q":
      case "T": {
        const count = ARITY[upper];
        values = take(count);
        if (!values)
          return points;
        let last = current;
        for (let i = 0; i < count; i += 2) {
          last = abs(values[i], values[i + 1]);
          points.push(last);
        }
        current = last;
        break;
      }
      case "A":
        values = take(7);
        if (!values)
          return points;
        current = abs(values[5], values[6]);
        points.push(current);
        break;
      default:
        index++;
    }
  }
  return points;
}
function pointsIn(value) {
  const numbers = numbersIn(value || "");
  const points = [];
  for (let i = 0; i + 1 < numbers.length; i += 2) {
    points.push([numbers[i], numbers[i + 1]]);
  }
  return points;
}

// libs/map-editor/src/lib/geometry.ts
function isGraphics(element) {
  return typeof element.getBBox === "function";
}
function toMatrix(m) {
  return { a: m.a, b: m.b, c: m.c, d: m.d, e: m.e, f: m.f };
}
var BrowserGeometryProvider = class {
  constructor(_root) {
    this._root = _root;
  }
  bboxOf(element) {
    if (!isGraphics(element))
      return null;
    let bbox;
    try {
      bbox = element.getBBox();
    } catch {
      return null;
    }
    const ctm = this.ctmOf(element);
    if (!ctm)
      return [bbox.x, bbox.y, bbox.width, bbox.height];
    const corners = [
      [bbox.x, bbox.y],
      [bbox.x + bbox.width, bbox.y],
      [bbox.x, bbox.y + bbox.height],
      [bbox.x + bbox.width, bbox.y + bbox.height]
    ].map((p) => applyToPoint(ctm, p));
    const xs = corners.map((p) => p[0]);
    const ys = corners.map((p) => p[1]);
    const min_x = Math.min(...xs);
    const min_y = Math.min(...ys);
    return [min_x, min_y, Math.max(...xs) - min_x, Math.max(...ys) - min_y];
  }
  ctmOf(element) {
    if (!isGraphics(element) || typeof element.getScreenCTM !== "function") {
      return null;
    }
    const root_ctm = this._root.getScreenCTM?.();
    const element_ctm = element.getScreenCTM();
    if (!root_ctm || !element_ctm)
      return null;
    return toMatrix(root_ctm.inverse().multiply(element_ctm));
  }
};
function numberAttr(element, name, fallback = 0) {
  const value = parseFloat(element.getAttribute(name) || "");
  return Number.isFinite(value) ? value : fallback;
}
function localPoints(element) {
  const tag = element.localName;
  switch (tag) {
    case "rect": {
      const x = numberAttr(element, "x");
      const y = numberAttr(element, "y");
      const w = numberAttr(element, "width");
      const h = numberAttr(element, "height");
      return [
        [x, y],
        [x + w, y],
        [x, y + h],
        [x + w, y + h]
      ];
    }
    case "circle": {
      const cx = numberAttr(element, "cx");
      const cy = numberAttr(element, "cy");
      const r = numberAttr(element, "r");
      return [
        [cx - r, cy - r],
        [cx + r, cy + r]
      ];
    }
    case "ellipse": {
      const cx = numberAttr(element, "cx");
      const cy = numberAttr(element, "cy");
      const rx = numberAttr(element, "rx");
      const ry = numberAttr(element, "ry");
      return [
        [cx - rx, cy - ry],
        [cx + rx, cy + ry]
      ];
    }
    case "line":
      return [
        [numberAttr(element, "x1"), numberAttr(element, "y1")],
        [numberAttr(element, "x2"), numberAttr(element, "y2")]
      ];
    case "polygon":
    case "polyline":
      return pointsIn(element.getAttribute("points"));
    case "path":
      return pathPoints(element.getAttribute("d"));
    case "text":
    case "tspan":
      return element.hasAttribute("x") || element.hasAttribute("y") ? [[numberAttr(element, "x"), numberAttr(element, "y")]] : [];
    case "use":
    case "image": {
      const x = numberAttr(element, "x");
      const y = numberAttr(element, "y");
      const w = numberAttr(element, "width");
      const h = numberAttr(element, "height");
      return w || h ? [
        [x, y],
        [x + w, y + h]
      ] : [[x, y]];
    }
    default:
      return [];
  }
}
var AttributeGeometryProvider = class {
  bboxOf(element) {
    const ctm = this.ctmOf(element);
    if (!ctm)
      return null;
    const box = this._box(element, ctm);
    return box ? [box[0], box[1], box[2] - box[0], box[3] - box[1]] : null;
  }
  ctmOf(element) {
    const chain = [];
    let current = element;
    while (current && current.localName !== "svg") {
      chain.unshift(current);
      current = current.parentElement;
    }
    if (!current)
      return null;
    let m = __spreadValues({}, IDENTITY);
    for (const el of chain) {
      m = multiply(m, parseTransform(el.getAttribute("transform")));
    }
    return m;
  }
  /** min x, min y, max x, max y */
  _box(element, ctm) {
    if (NON_RENDERED_TAGS.has(element.localName.toLowerCase()))
      return null;
    let box = null;
    const merge = (points) => {
      for (const [x, y] of points) {
        if (!box)
          box = [x, y, x, y];
        else {
          box[0] = Math.min(box[0], x);
          box[1] = Math.min(box[1], y);
          box[2] = Math.max(box[2], x);
          box[3] = Math.max(box[3], y);
        }
      }
    };
    merge(localPoints(element).map((p) => applyToPoint(ctm, p)));
    for (const child of Array.from(element.children)) {
      const child_ctm = multiply(ctm, parseTransform(child.getAttribute("transform")));
      const child_box = this._box(child, child_ctm);
      if (child_box) {
        merge([
          [child_box[0], child_box[1]],
          [child_box[2], child_box[3]]
        ]);
      }
    }
    return box;
  }
};

// libs/map-editor/src/lib/protected-ids.ts
var ProtectedIdSet = class _ProtectedIdSet {
  constructor(ids = [], complete = true, failed_sources = []) {
    this.complete = complete;
    this.failed_sources = failed_sources;
    this._ids = /* @__PURE__ */ new Map();
    for (const entry of ids) {
      if (!entry.id)
        continue;
      const existing = this._ids.get(entry.id);
      if (!existing)
        this._ids.set(entry.id, entry);
      else if (!existing.label && entry.label)
        this._ids.set(entry.id, entry);
    }
  }
  static empty() {
    return new _ProtectedIdSet();
  }
  get size() {
    return this._ids.size;
  }
  has(id) {
    return !!id && this._ids.has(id);
  }
  get(id) {
    return this._ids.get(id);
  }
  ids() {
    return [...this._ids.values()];
  }
  labelOf(id) {
    const entry = this._ids.get(id);
    return entry?.label || id;
  }
};
function mergeProtectedIds(outcomes) {
  const ids = [];
  const failed = [];
  for (const outcome of outcomes) {
    if (outcome.error !== void 0 || !outcome.ids)
      failed.push(outcome.source);
    else
      ids.push(...outcome.ids);
  }
  return new ProtectedIdSet(ids, failed.length === 0, failed);
}
async function collectProtectedIds(sources) {
  const names = Object.keys(sources);
  const settled = await Promise.allSettled(names.map((name) => sources[name]()));
  return mergeProtectedIds(settled.map((result, i) => result.status === "fulfilled" ? { source: names[i], ids: result.value } : {
    source: names[i],
    error: result.reason ?? new Error("failed")
  }));
}

// node_modules/dompurify/dist/purify.es.mjs
/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */
function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u2, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u2 = t.return(), Object(u2) !== u2)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function AsyncGenerator(e) {
  var t, n;
  function resume(t2, n2) {
    try {
      var r = e[t2](n2), o = r.value, u2 = o instanceof _OverloadYield;
      Promise.resolve(u2 ? o.v : o).then(function(n3) {
        if (u2) {
          var i = "return" === t2 && o.k ? t2 : "next";
          if (!o.k || n3.done) return resume(i, n3);
          n3 = e[i](n3).value;
        }
        settle(!!r.done, n3);
      }, function(e2) {
        resume("throw", e2);
      });
    } catch (e2) {
      settle(2, e2);
    }
  }
  function settle(e2, r) {
    2 === e2 ? t.reject(r) : t.resolve({
      value: r,
      done: e2
    }), (t = t.next) ? resume(t.key, t.arg) : n = null;
  }
  this._invoke = function(e2, r) {
    return new Promise(function(o, u2) {
      var i = {
        key: e2,
        arg: r,
        resolve: o,
        reject: u2,
        next: null
      };
      n ? n = n.next = i : (t = n = i, resume(e2, r));
    });
  }, "function" != typeof e.return && (this.return = void 0);
}
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
  return this;
}, AsyncGenerator.prototype.next = function(e) {
  return this._invoke("next", e);
}, AsyncGenerator.prototype.throw = function(e) {
  return this._invoke("throw", e);
}, AsyncGenerator.prototype.return = function(e) {
  return this._invoke("return", e);
};
var entries = Object.entries;
var setPrototypeOf = Object.setPrototypeOf;
var isFrozen = Object.isFrozen;
var getPrototypeOf = Object.getPrototypeOf;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze;
var seal = Object.seal;
var create = Object.create;
var _ref = typeof Reflect !== "undefined" && Reflect;
var apply = _ref.apply;
var construct = _ref.construct;
if (!freeze) freeze = function freeze2(x) {
  return x;
};
if (!seal) seal = function seal2(x) {
  return x;
};
if (!apply) apply = function apply2(func, thisArg) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
  return func.apply(thisArg, args);
};
if (!construct) construct = function construct2(Func) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
  return new Func(...args);
};
var arrayForEach = unapply(Array.prototype.forEach);
Array.prototype.indexOf;
var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
Array.prototype.slice;
var arraySplice = unapply(Array.prototype.splice);
var arrayIsArray = Array.isArray;
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var numberToString = unapply(Number.prototype.toString);
var booleanToString = unapply(Boolean.prototype.toString);
var bigintToString = typeof BigInt === "undefined" ? null : unapply(BigInt.prototype.toString);
var symbolToString = typeof Symbol === "undefined" ? null : unapply(Symbol.prototype.toString);
var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
var objectToString = unapply(Object.prototype.toString);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) thisArg.lastIndex = 0;
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
    return apply(func, thisArg, args);
  };
}
function unconstruct(Func) {
  return function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
    return construct(Func, args);
  };
}
function addToSet(set, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) setPrototypeOf(set, null);
  if (!arrayIsArray(array)) return set;
  let l = array.length;
  while (l--) {
    let element = array[l];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) array[l] = lcElement;
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
  return array;
}
function clone(object) {
  const newObject = create(null);
  for (const _ref2 of entries(object)) {
    var _ref3 = _slicedToArray(_ref2, 2);
    const property = _ref3[0];
    const value = _ref3[1];
    if (objectHasOwnProperty(object, property)) {
      if (arrayIsArray(value)) newObject[property] = cleanArray(value);
      else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
      else newObject[property] = value;
    }
  }
  return newObject;
}
function stringifyValue(value) {
  switch (typeof value) {
    case "string":
      return value;
    case "number":
      return numberToString(value);
    case "boolean":
      return booleanToString(value);
    case "bigint":
      return bigintToString ? bigintToString(value) : "0";
    case "symbol":
      return symbolToString ? symbolToString(value) : "Symbol()";
    case "undefined":
      return objectToString(value);
    case "function":
    case "object": {
      if (value === null) return objectToString(value);
      const valueAsRecord = value;
      const valueToString = lookupGetter(valueAsRecord, "toString");
      if (typeof valueToString === "function") {
        const stringified = valueToString(valueAsRecord);
        return typeof stringified === "string" ? stringified : objectToString(stringified);
      }
      return objectToString(value);
    }
    default:
      return objectToString(value);
  }
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) return unapply(desc.get);
      if (typeof desc.value === "function") return unapply(desc.value);
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
function isRegex(value) {
  try {
    regExpTest(value, "");
    return true;
  } catch (_unused) {
    return false;
  }
}
var html$1 = freeze([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]);
var svg$1 = freeze([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]);
var svgFilters = freeze([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]);
var svgDisallowed = freeze([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]);
var mathMl$1 = freeze([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]);
var mathMlDisallowed = freeze([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]);
var text = freeze(["#text"]);
var html = freeze([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]);
var svg = freeze([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]);
var mathMl = freeze([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]);
var xml = freeze([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]);
var MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g);
var ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g);
var TMPLIT_EXPR = seal(/\${[\w\W]*/g);
var DATA_ATTR2 = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var DOCTYPE_NAME = seal(/^html$/i);
var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ELEMENT_MARKUP_PROBE = seal(/<[/\w!]/g);
var COMMENT_MARKUP_PROBE = seal(/<[/\w]/g);
var FALLBACK_TAG_CLOSE = seal(/<\/no(script|embed|frames)/i);
var SELF_CLOSING_TAG = seal(/\/>/i);
var NODE_TYPE = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
};
var LITERAL_TEXT_ELEMENT_NAMES = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
];
var LITERAL_TEXT_ELEMENTS = freeze(addToSet({}, LITERAL_TEXT_ELEMENT_NAMES));
var LITERAL_TEXT_CLOSE = (function() {
  const map = {};
  arrayForEach(LITERAL_TEXT_ELEMENT_NAMES, (name) => {
    map[name] = seal(new RegExp("</" + name + "(?=[\\t\\n\\f\\r />])", "i"));
  });
  return freeze(map);
})();
var getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_2) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
var _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
var _resolveSetOption = function _resolveSetOption2(cfg, key, fallback, options) {
  return objectHasOwnProperty(cfg, key) && arrayIsArray(cfg[key]) ? addToSet(options.base ? clone(options.base) : {}, cfg[key], options.transform) : fallback;
};
var _resolveObjectOption = function _resolveObjectOption2(cfg, key, makeFallback) {
  const value = objectHasOwnProperty(cfg, key) ? cfg[key] : void 0;
  return value && typeof value === "object" ? clone(value) : makeFallback();
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.4.16";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let document2 = window2.document;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  window2.DocumentFragment;
  const HTMLTemplateElement = window2.HTMLTemplateElement, Node2 = window2.Node, Element = window2.Element, NodeFilter = window2.NodeFilter;
  window2.NamedNodeMap === void 0 && (window2.NamedNodeMap || window2.MozNamedAttrMap);
  window2.HTMLFormElement;
  const DOMParser2 = window2.DOMParser, trustedTypes = window2.trustedTypes;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove2 = lookupGetter(ElementPrototype, "remove");
  const removeAttributeNode = lookupGetter(ElementPrototype, "removeAttributeNode");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  const getShadowRoot = lookupGetter(ElementPrototype, "shadowRoot");
  const getAttributes = lookupGetter(ElementPrototype, "attributes");
  const getNodeType = Node2 && Node2.prototype ? lookupGetter(Node2.prototype, "nodeType") : null;
  const getNodeName = Node2 && Node2.prototype ? lookupGetter(Node2.prototype, "nodeName") : null;
  const getOwnerDocument = Node2 && Node2.prototype ? lookupGetter(Node2.prototype, "ownerDocument") : null;
  const _readNodeType = function _readNodeType2(node) {
    return getNodeType ? getNodeType(node) : node.nodeType;
  };
  const _readNodeName = function _readNodeName2(node) {
    return getNodeName ? getNodeName(node) : node.nodeName;
  };
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) document2 = template.content.ownerDocument;
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  let defaultTrustedTypesPolicy;
  let defaultTrustedTypesPolicyResolved = false;
  let IN_TRUSTED_TYPES_POLICY = 0;
  const _assertNotInTrustedTypesPolicy = function _assertNotInTrustedTypesPolicy2() {
    if (IN_TRUSTED_TYPES_POLICY > 0) throw typeErrorCreate('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  };
  const _createTrustedHTML = function _createTrustedHTML2(html2) {
    _assertNotInTrustedTypesPolicy();
    IN_TRUSTED_TYPES_POLICY++;
    try {
      return trustedTypesPolicy.createHTML(html2);
    } finally {
      IN_TRUSTED_TYPES_POLICY--;
    }
  };
  const _createTrustedScriptURL = function _createTrustedScriptURL2(scriptUrl) {
    _assertNotInTrustedTypesPolicy();
    IN_TRUSTED_TYPES_POLICY++;
    try {
      return trustedTypesPolicy.createScriptURL(scriptUrl);
    } finally {
      IN_TRUSTED_TYPES_POLICY--;
    }
  };
  const _getDefaultTrustedTypesPolicy = function _getDefaultTrustedTypesPolicy2() {
    if (!defaultTrustedTypesPolicyResolved) {
      defaultTrustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      defaultTrustedTypesPolicyResolved = true;
    }
    return defaultTrustedTypesPolicy;
  };
  const _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
  const importNode = originalDocument.importNode;
  let hooks = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR2, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE, CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
  let IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [
    ...html$1,
    ...svg$1,
    ...svgFilters,
    ...mathMl$1,
    ...text
  ]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [
    ...html,
    ...svg,
    ...mathMl,
    ...xml
  ]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
    tagCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    }
  }));
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let SET_CONFIG_ALLOWED_TAGS = null;
  let SET_CONFIG_ALLOWED_ATTR = null;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
    MATHML_NAMESPACE,
    SVG_NAMESPACE,
    HTML_NAMESPACE
  ], stringToString);
  const DEFAULT_MATHML_TEXT_INTEGRATION_POINTS = freeze([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
  const DEFAULT_HTML_INTEGRATION_POINTS = freeze(["annotation-xml"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) return;
    if (!cfg || typeof cfg !== "object") cfg = {};
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = _resolveSetOption(cfg, "ALLOWED_TAGS", DEFAULT_ALLOWED_TAGS, { transform: transformCaseFunc });
    ALLOWED_ATTR = _resolveSetOption(cfg, "ALLOWED_ATTR", DEFAULT_ALLOWED_ATTR, { transform: transformCaseFunc });
    ALLOWED_NAMESPACES = _resolveSetOption(cfg, "ALLOWED_NAMESPACES", DEFAULT_ALLOWED_NAMESPACES, { transform: stringToString });
    URI_SAFE_ATTRIBUTES = _resolveSetOption(cfg, "ADD_URI_SAFE_ATTR", DEFAULT_URI_SAFE_ATTRIBUTES, {
      transform: transformCaseFunc,
      base: DEFAULT_URI_SAFE_ATTRIBUTES
    });
    DATA_URI_TAGS = _resolveSetOption(cfg, "ADD_DATA_URI_TAGS", DEFAULT_DATA_URI_TAGS, {
      transform: transformCaseFunc,
      base: DEFAULT_DATA_URI_TAGS
    });
    FORBID_CONTENTS = _resolveSetOption(cfg, "FORBID_CONTENTS", DEFAULT_FORBID_CONTENTS, { transform: transformCaseFunc });
    FORBID_TAGS = _resolveSetOption(cfg, "FORBID_TAGS", clone({}), { transform: transformCaseFunc });
    FORBID_ATTR = _resolveSetOption(cfg, "FORBID_ATTR", clone({}), { transform: transformCaseFunc });
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES && typeof cfg.USE_PROFILES === "object" ? clone(cfg.USE_PROFILES) : cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = isRegex(cfg.ALLOWED_URI_REGEXP) ? cfg.ALLOWED_URI_REGEXP : IS_ALLOWED_URI;
    NAMESPACE = typeof cfg.NAMESPACE === "string" ? cfg.NAMESPACE : HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = _resolveObjectOption(cfg, "MATHML_TEXT_INTEGRATION_POINTS", () => addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS));
    HTML_INTEGRATION_POINTS = _resolveObjectOption(cfg, "HTML_INTEGRATION_POINTS", () => addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS));
    const customElementHandling = _resolveObjectOption(cfg, "CUSTOM_ELEMENT_HANDLING", () => create(null));
    CUSTOM_ELEMENT_HANDLING = create(null);
    if (objectHasOwnProperty(customElementHandling, "tagNameCheck") && isRegexOrFunction(customElementHandling.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = customElementHandling.tagNameCheck;
    if (objectHasOwnProperty(customElementHandling, "attributeNameCheck") && isRegexOrFunction(customElementHandling.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = customElementHandling.attributeNameCheck;
    if (objectHasOwnProperty(customElementHandling, "allowCustomizedBuiltInElements") && typeof customElementHandling.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = customElementHandling.allowCustomizedBuiltInElements;
    seal(CUSTOM_ELEMENT_HANDLING);
    if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
    if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = create(null);
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    EXTRA_ELEMENT_HANDLING.tagCheck = null;
    EXTRA_ELEMENT_HANDLING.attributeCheck = null;
    if (objectHasOwnProperty(cfg, "ADD_TAGS")) {
      if (typeof cfg.ADD_TAGS === "function") EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
      else if (arrayIsArray(cfg.ADD_TAGS)) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_ATTR")) {
      if (typeof cfg.ADD_ATTR === "function") EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
      else if (arrayIsArray(cfg.ADD_ATTR)) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_FORBID_CONTENTS") && arrayIsArray(cfg.ADD_FORBID_CONTENTS)) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
      addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
    if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
      "html",
      "head",
      "body"
    ]);
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const previousTrustedTypesPolicy = trustedTypesPolicy;
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      try {
        emptyHTML = _createTrustedHTML("");
      } catch (error) {
        trustedTypesPolicy = previousTrustedTypesPolicy;
        throw error;
      }
    } else if (cfg.TRUSTED_TYPES_POLICY === null) {
      trustedTypesPolicy = void 0;
      emptyHTML = "";
    } else {
      if (trustedTypesPolicy === void 0) trustedTypesPolicy = _getDefaultTrustedTypesPolicy();
      if (trustedTypesPolicy && typeof emptyHTML === "string") emptyHTML = _createTrustedHTML("");
    }
    if (freeze) freeze(cfg);
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [
    ...svg$1,
    ...svgFilters,
    ...svgDisallowed
  ]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkSvgNamespace = function _checkSvgNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
    if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
    return Boolean(ALL_SVG_TAGS[tagName]);
  };
  const _checkMathMlNamespace = function _checkMathMlNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
    if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
    return Boolean(ALL_MATHML_TAGS[tagName]);
  };
  const _checkHtmlNamespace = function _checkHtmlNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
    if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
    return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
  };
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) parent = {
      namespaceURI: NAMESPACE,
      tagName: "template"
    };
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) return false;
    if (element.namespaceURI === SVG_NAMESPACE) return _checkSvgNamespace(tagName, parent, parentTagName);
    if (element.namespaceURI === MATHML_NAMESPACE) return _checkMathMlNamespace(tagName, parent, parentTagName);
    if (element.namespaceURI === HTML_NAMESPACE) return _checkHtmlNamespace(tagName, parent, parentTagName);
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) return true;
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, { element: node });
    try {
      getParentNode(node).removeChild(node);
    } catch (_2) {
      remove2(node);
      if (!getParentNode(node)) throw typeErrorCreate("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  };
  const _stripAttributeNode = function _stripAttributeNode2(element, attribute, name) {
    try {
      removeAttributeNode(element, attribute);
    } catch (_2) {
      try {
        element.removeAttribute(name);
      } catch (_3) {
      }
    }
  };
  const _neutralizeRoot = function _neutralizeRoot2(root) {
    _neutralizeSubtree(root);
    const childNodes = getChildNodes(root);
    if (childNodes) {
      const snapshot = [];
      arrayForEach(childNodes, (child) => {
        arrayPush(snapshot, child);
      });
      arrayForEach(snapshot, (child) => {
        try {
          remove2(child);
        } catch (_2) {
        }
      });
    }
    const attributes = getAttributes(root);
    if (attributes) for (let i = attributes.length - 1; i >= 0; --i) {
      const attribute = attributes[i];
      const name = attribute && attribute.name;
      if (typeof name === "string") _stripAttributeNode(root, attribute, name);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element, attr) {
    if (!attr) try {
      attr = element.getAttributeNode(name);
    } catch (_2) {
      attr = null;
    }
    arrayPush(DOMPurify.removed, {
      attribute: attr || null,
      from: element
    });
    try {
      if (attr) removeAttributeNode(element, attr);
      else element.removeAttribute(name);
    } catch (_2) {
      try {
        element.removeAttribute(name);
      } catch (_3) {
      }
    }
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
        _forceRemove(element);
      } catch (_2) {
      }
      else try {
        element.setAttribute(name, "");
      } catch (_2) {
      }
    }
  };
  const _stripDisallowedAttributes = function _stripDisallowedAttributes2(element) {
    const attributes = getAttributes(element);
    if (!attributes) return;
    for (let i = attributes.length - 1; i >= 0; --i) {
      const attribute = attributes[i];
      const name = attribute && attribute.name;
      if (typeof name !== "string" || ALLOWED_ATTR[transformCaseFunc(name)]) continue;
      _stripAttributeNode(element, attribute, name);
    }
  };
  const _neutralizeSubtree = function _neutralizeSubtree2(root) {
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      if (_readNodeType(node) === NODE_TYPE.element) _stripDisallowedAttributes(node);
      const childNodes = getChildNodes(node);
      if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push(childNodes[i]);
    }
  };
  const _isPatchLinkageAttribute = function _isPatchLinkageAttribute2(lcName, lcTag) {
    if (!SAFE_FOR_XML) return false;
    if (lcName === "patchsrc") return true;
    return lcName === "for" && lcTag !== "label" && lcTag !== "output";
  };
  const _neutralizePatchLinkage = function _neutralizePatchLinkage2(root) {
    if (!SAFE_FOR_XML) return;
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      const nodeType = _readNodeType(node);
      if (nodeType === NODE_TYPE.processingInstruction || nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, node.data)) {
        try {
          remove2(node);
        } catch (_2) {
        }
        continue;
      }
      if (nodeType === NODE_TYPE.element) {
        const element = node;
        const lcTag = transformCaseFunc(_readNodeName(node));
        try {
          if (element.hasAttribute && element.hasAttribute("patchsrc")) element.removeAttribute("patchsrc");
          if (element.hasAttribute && element.hasAttribute("for") && _isPatchLinkageAttribute("for", lcTag)) element.removeAttribute("for");
        } catch (_2) {
        }
      }
      const childNodes = getChildNodes(node);
      if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push(childNodes[i]);
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
    else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    const dirtyPayload = trustedTypesPolicy ? _createTrustedHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) try {
      doc = new DOMParser2().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
    } catch (_2) {
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_2) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root) {
    const doc = getOwnerDocument ? getOwnerDocument(root) : root.ownerDocument;
    return createNodeIterator.call(doc || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
  };
  const _stripTemplateExpressions = function _stripTemplateExpressions2(value) {
    value = stringReplace(value, MUSTACHE_EXPR$1, " ");
    value = stringReplace(value, ERB_EXPR$1, " ");
    value = stringReplace(value, TMPLIT_EXPR$1, " ");
    return value;
  };
  const _scrubTemplateExpressions2 = function _scrubTemplateExpressions(node) {
    var _node$querySelectorAl;
    node.normalize();
    const doc = getOwnerDocument ? getOwnerDocument(node) : node.ownerDocument;
    const walker = createNodeIterator.call(doc || node, node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_CDATA_SECTION | NodeFilter.SHOW_PROCESSING_INSTRUCTION, null);
    let currentNode = walker.nextNode();
    while (currentNode) {
      currentNode.data = _stripTemplateExpressions(currentNode.data);
      currentNode = walker.nextNode();
    }
    const templates = (_node$querySelectorAl = node.querySelectorAll) === null || _node$querySelectorAl === void 0 ? void 0 : _node$querySelectorAl.call(node, "template");
    if (templates) arrayForEach(templates, (tmpl) => {
      if (_isDocumentFragment(tmpl.content)) _scrubTemplateExpressions2(tmpl.content);
    });
  };
  const _isClobbered = function _isClobbered2(element) {
    const realTagName = getNodeName ? getNodeName(element) : null;
    if (typeof realTagName !== "string") return false;
    if (transformCaseFunc(realTagName) !== "form") return false;
    return typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || element.attributes !== getAttributes(element) || typeof element.removeAttribute !== "function" || typeof element.removeAttributeNode !== "function" || typeof element.getAttributeNode !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function" || element.nodeType !== getNodeType(element) || element.childNodes !== getChildNodes(element);
  };
  const _isDocumentFragment = function _isDocumentFragment2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) return false;
    try {
      return getNodeType(value) === NODE_TYPE.documentFragment;
    } catch (_2) {
      return false;
    }
  };
  const _isNode = function _isNode2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) return false;
    try {
      return typeof getNodeType(value) === "number";
    } catch (_2) {
      return false;
    }
  };
  function _executeHooks(hooks2, currentNode, data) {
    if (hooks2.length === 0) return;
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _isUnsafeNode = function _isUnsafeNode2(currentNode, tagName) {
    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.innerHTML)) return true;
    if (SAFE_FOR_XML && currentNode.namespaceURI === HTML_NAMESPACE && LITERAL_TEXT_ELEMENTS[tagName] && (_isNode(currentNode.firstElementChild) || typeof currentNode.textContent === "string" && regExpTest(LITERAL_TEXT_CLOSE[tagName], currentNode.textContent))) return true;
    if (currentNode.nodeType === NODE_TYPE.processingInstruction) return true;
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, currentNode.data)) return true;
    return false;
  };
  const _matchesNameCheck = function _matchesNameCheck2(check, name) {
    if (check instanceof RegExp) return regExpTest(check, name);
    if (check instanceof Function) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
      return Boolean(check(name, ...args));
    }
    return false;
  };
  const _sanitizeDisallowedNode = function _sanitizeDisallowedNode2(currentNode, tagName, root) {
    if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
    if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
      const parentNode = getParentNode(currentNode);
      const childNodes = getChildNodes(currentNode);
      if (childNodes && parentNode) {
        const childCount = childNodes.length;
        for (let i = childCount - 1; i >= 0; --i) {
          const hoisted = currentNode === root ? cloneNode(childNodes[i], true) : childNodes[i];
          parentNode.insertBefore(hoisted, getNextSibling(currentNode));
        }
      }
    }
    _forceRemove(currentNode);
    return true;
  };
  const _forkSharedAllowlist = function _forkSharedAllowlist2(hookList, set, defaultSet, setConfigSet) {
    if (hookList.length === 0) return set;
    return set === defaultSet || set === setConfigSet ? clone(set) : set;
  };
  const _handleHookDetachedNode = function _handleHookDetachedNode2(currentNode, root) {
    if (currentNode === root || getParentNode(currentNode) !== null) return false;
    if (IN_PLACE) _neutralizeSubtree(currentNode);
    return true;
  };
  const _sanitizeElements = function _sanitizeElements2(currentNode, root) {
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (_handleHookDetachedNode(currentNode, root)) return true;
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(_readNodeName(currentNode));
    ALLOWED_TAGS = _forkSharedAllowlist(hooks.uponSanitizeElement, ALLOWED_TAGS, DEFAULT_ALLOWED_TAGS, SET_CONFIG_ALLOWED_TAGS);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (_handleHookDetachedNode(currentNode, root)) return true;
    if (_isUnsafeNode(currentNode, tagName)) {
      _forceRemove(currentNode);
      return true;
    }
    if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) {
      const removed = _sanitizeDisallowedNode(currentNode, tagName, root);
      if (removed === false) {
        _executeHooks(hooks.afterSanitizeElements, currentNode, null);
        if (_handleHookDetachedNode(currentNode, root)) return true;
      }
      return removed;
    }
    if (_readNodeType(currentNode) === NODE_TYPE.element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(FALLBACK_TAG_CLOSE, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      const content = _stripTemplateExpressions(currentNode.textContent);
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return _handleHookDetachedNode(currentNode, root);
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (FORBID_ATTR[lcName]) return false;
    if (_isPatchLinkageAttribute(lcName, lcTag)) return false;
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) return false;
    const nameIsPermitted = ALLOWED_ATTR[lcName] || EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag);
    if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$1, lcName)) return true;
    if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) return true;
    if (!nameIsPermitted) return _isBasicCustomElement(lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName, lcTag) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value);
    if (URI_SAFE_ATTRIBUTES[lcName]) return true;
    if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) return true;
    if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) return true;
    if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) return true;
    return !value;
  };
  const RESERVED_CUSTOM_ELEMENT_NAMES = addToSet({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]);
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return !RESERVED_CUSTOM_ELEMENT_NAMES[stringToLowerCase(tagName)] && regExpTest(CUSTOM_ELEMENT$1, tagName);
  };
  const _applyTrustedTypesToAttribute = function _applyTrustedTypesToAttribute2(lcTag, lcName, namespaceURI, value) {
    if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function" && !namespaceURI) switch (trustedTypes.getAttributeType(lcTag, lcName)) {
      case "TrustedHTML":
        return _createTrustedHTML(value);
      case "TrustedScriptURL":
        return _createTrustedScriptURL(value);
    }
    return value;
  };
  const _setAttributeValue = function _setAttributeValue2(currentNode, name, namespaceURI, value) {
    try {
      if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
      else currentNode.setAttribute(name, value);
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return false;
      }
      return true;
    } catch (_2) {
      _removeAttribute(name, currentNode);
      return false;
    }
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode, root) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    if (_handleHookDetachedNode(currentNode, root)) return;
    const attributes = currentNode.attributes;
    if (!attributes || _isClobbered(currentNode)) return;
    ALLOWED_ATTR = _forkSharedAllowlist(hooks.uponSanitizeAttribute, ALLOWED_ATTR, DEFAULT_ALLOWED_ATTR, SET_CONFIG_ALLOWED_ATTR);
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l = attributes.length;
    const lcTag = transformCaseFunc(currentNode.nodeName);
    while (l--) {
      const attr = attributes[l];
      const name = attr.name, namespaceURI = attr.namespaceURI, attrValue = attr.value;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value = name === "value" ? initValue : stringTrim(initValue);
      let recreatedNamedProp = false;
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name") && stringIndexOf(value, SANITIZE_NAMED_PROPS_PREFIX) !== 0) {
        _removeAttribute(name, currentNode, attr);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
        recreatedNamedProp = true;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (lcName === "attributename" && stringMatch(value, "href")) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (hookEvent.forceKeepAttr) continue;
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value)) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) value = _stripTemplateExpressions(value);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      value = _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value);
      if (value !== initValue) {
        if (_setAttributeValue(currentNode, name, namespaceURI, value) && recreatedNamedProp) arrayPop(DOMPurify.removed);
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
    _handleHookDetachedNode(currentNode, root);
  };
  const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode, fragment);
      _sanitizeAttributes(shadowNode, fragment);
      if (_isDocumentFragment(shadowNode.content)) _sanitizeShadowDOM2(shadowNode.content);
      if (_readNodeType(shadowNode) === NODE_TYPE.element) {
        const innerSr = getShadowRoot(shadowNode);
        if (_isDocumentFragment(innerSr)) {
          _sanitizeAttachedShadowRoots(innerSr);
          _sanitizeShadowDOM2(innerSr);
        }
      }
    }
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  const _sanitizeAttachedShadowRoots = function _sanitizeAttachedShadowRoots2(root) {
    const stack = [{
      node: root,
      shadow: null
    }];
    while (stack.length > 0) {
      const item = stack.pop();
      if (item.shadow) {
        _sanitizeShadowDOM2(item.shadow);
        continue;
      }
      const node = item.node;
      const isElement = _readNodeType(node) === NODE_TYPE.element;
      const childNodes = getChildNodes(node);
      if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push({
        node: childNodes[i],
        shadow: null
      });
      if (isElement) {
        const rootName = getNodeName ? getNodeName(node) : null;
        if (typeof rootName === "string" && transformCaseFunc(rootName) === "template") {
          const content = node.content;
          if (_isDocumentFragment(content)) stack.push({
            node: content,
            shadow: null
          });
        }
      }
      if (isElement) {
        const sr = getShadowRoot(node);
        if (_isDocumentFragment(sr)) stack.push({
          node: null,
          shadow: sr
        }, {
          node: sr,
          shadow: null
        });
      }
    }
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) dirty = "<!-->";
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      dirty = stringifyValue(dirty);
      if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
    }
    if (!DOMPurify.isSupported) return dirty;
    if (SET_CONFIG) {
      ALLOWED_TAGS = SET_CONFIG_ALLOWED_TAGS;
      ALLOWED_ATTR = SET_CONFIG_ALLOWED_ATTR;
    } else _parseConfig(cfg);
    if (hooks.uponSanitizeElement.length > 0 || hooks.uponSanitizeAttribute.length > 0) ALLOWED_TAGS = clone(ALLOWED_TAGS);
    if (hooks.uponSanitizeAttribute.length > 0) ALLOWED_ATTR = clone(ALLOWED_ATTR);
    DOMPurify.removed = [];
    const inPlace = IN_PLACE && typeof dirty !== "string" && _isNode(dirty);
    if (inPlace) {
      _neutralizePatchLinkage(dirty);
      const nn = _readNodeName(dirty);
      if (typeof nn === "string") {
        const tagName = transformCaseFunc(nn);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          _neutralizeRoot(dirty);
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
      if (_isClobbered(dirty)) {
        _neutralizeRoot(dirty);
        throw typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
      }
      try {
        _sanitizeAttachedShadowRoots(dirty);
      } catch (error) {
        _neutralizeRoot(dirty);
        throw error;
      }
    } else if (_isNode(dirty)) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
      else if (importedNode.nodeName === "HTML") body = importedNode;
      else body.appendChild(importedNode);
      _sanitizeAttachedShadowRoots(body);
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(dirty) : dirty;
      body = _initDocument(dirty);
      if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
    }
    if (body && FORCE_BODY) _forceRemove(body.firstChild);
    const walkRoot = inPlace ? dirty : body;
    try {
      const nodeIterator = _createNodeIterator(walkRoot);
      while (currentNode = nodeIterator.nextNode()) {
        _sanitizeElements(currentNode, walkRoot);
        _sanitizeAttributes(currentNode, walkRoot);
        if (_isDocumentFragment(currentNode.content)) _sanitizeShadowDOM2(currentNode.content);
      }
    } catch (error) {
      if (inPlace) {
        _neutralizeRoot(dirty);
        arrayForEach(DOMPurify.removed, (entry) => {
          if (entry.element) _neutralizeSubtree(entry.element);
        });
      }
      throw error;
    }
    if (inPlace) {
      let rootWasRemoved = false;
      arrayForEach(DOMPurify.removed, (entry) => {
        if (entry.element) {
          if (entry.element === dirty) rootWasRemoved = true;
          _neutralizeSubtree(entry.element);
        }
      });
      if (rootWasRemoved) throw typeErrorCreate("a node selected for removal could not be safely returned; refusing to sanitize in place");
      if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(dirty);
      return dirty;
    }
    if (RETURN_DOM) {
      if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(body);
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) returnNode.appendChild(body.firstChild);
      } else returnNode = body;
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    if (SAFE_FOR_TEMPLATES) serializedHTML = _stripTemplateExpressions(serializedHTML);
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
    SET_CONFIG_ALLOWED_TAGS = ALLOWED_TAGS;
    SET_CONFIG_ALLOWED_ATTR = ALLOWED_ATTR;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
    SET_CONFIG_ALLOWED_TAGS = null;
    SET_CONFIG_ALLOWED_ATTR = null;
    trustedTypesPolicy = defaultTrustedTypesPolicy;
    emptyHTML = "";
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) _parseConfig({});
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") return;
    if (!objectHasOwnProperty(hooks, entryPoint)) return;
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (!objectHasOwnProperty(hooks, entryPoint)) return;
    if (hookFunction !== void 0) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (!objectHasOwnProperty(hooks, entryPoint)) return;
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify_default = createDOMPurify();

// libs/map-editor/src/lib/sanitise.ts
var UNSAFE_CSS_VALUE = /expression\s*\(|behavior\s*:|javascript\s*:|url\s*\(\s*(?!['"]?#)/i;
var CSS_ESCAPE = /\\(?:([0-9a-fA-F]{1,6})[ \t\n\r\f]?|([^\n\r\f0-9a-fA-F]))/g;
var AT_STATEMENT = /@((?:\\[0-9a-fA-F]{1,6}[ \t\n\r\f]?|\\[^\n\r\f]|[\w-])+)[^;{}]*(?:;|(?=\})|$)/g;
var DECLARATION = /([\w-]+)\s*:\s*([^;{}]*)(;|(?=\}))/g;
function decodeCssEscapes(text2) {
  if (!text2.includes("\\"))
    return text2;
  return text2.replace(CSS_ESCAPE, (_2, hex, char) => {
    if (hex === void 0)
      return char ?? "";
    const code = parseInt(hex, 16);
    const invalid = code === 0 || code > 1114111 || code >= 55296 && code <= 57343;
    return invalid ? "\uFFFD" : String.fromCodePoint(code);
  });
}
function isUnsafeCssValue(value) {
  return UNSAFE_CSS_VALUE.test(value) || UNSAFE_CSS_VALUE.test(decodeCssEscapes(value));
}
function cleanStyleText(css) {
  const removed = [];
  let text2 = css.replace(AT_STATEMENT, (match, name) => {
    if (decodeCssEscapes(name).toLowerCase() !== "import")
      return match;
    removed.push(match.trim());
    return "";
  });
  if (isUnsafeCssValue(text2)) {
    text2 = text2.replace(DECLARATION, (match, name, value) => {
      if (!isUnsafeCssValue(value))
        return match;
      removed.push(`${name}:${value.trim()}`);
      return "";
    });
  }
  return { text: text2, removed };
}
function isAllowedReference(tag, value) {
  const trimmed = value.trim();
  if (trimmed.startsWith("#"))
    return true;
  return tag === "image" && /^data:image\/(?:png|jpe?g|gif|webp|svg\+xml);/i.test(trimmed);
}
function sanitiseTree(root) {
  const removed = [];
  const elements = [root, ...Array.from(root.querySelectorAll("*"))];
  for (const element of elements) {
    const tag = element.localName.toLowerCase();
    if (DENIED_TAGS.has(tag)) {
      removed.push({ kind: "element", tag, reason: "denied element" });
      element.remove();
      continue;
    }
    if (element.namespaceURI !== SVG_NS) {
      removed.push({
        kind: "element",
        tag: element.tagName,
        reason: "element outside the SVG namespace"
      });
      element.remove();
      continue;
    }
    for (const name of element.getAttributeNames()) {
      const lower = name.toLowerCase();
      const value = element.getAttribute(name) || "";
      if (lower.startsWith("on")) {
        removed.push({
          kind: "attribute",
          tag,
          name,
          reason: "event handler"
        });
        element.removeAttribute(name);
      } else if (lower.startsWith(EDITOR_ATTR_PREFIX)) {
        element.removeAttribute(name);
      } else if ((REFERENCE_ATTRS.has(lower) || lower.endsWith(":href")) && !isAllowedReference(tag, value)) {
        removed.push({
          kind: "attribute",
          tag,
          name,
          value: value.slice(0, 80),
          reason: "reference outside the document"
        });
        element.removeAttribute(name);
        if (element.hasAttributeNS(XLINK_NS, "href")) {
          element.removeAttributeNS(XLINK_NS, "href");
        }
      } else if (lower === "style" && isUnsafeCssValue(value)) {
        const cleaned = cleanStyleText(value);
        for (const declaration of cleaned.removed) {
          removed.push({
            kind: "declaration",
            tag,
            name,
            value: declaration,
            reason: "unsafe style value"
          });
        }
        if (cleaned.text.trim())
          element.setAttribute(name, cleaned.text);
        else
          element.removeAttribute(name);
      }
    }
    if (tag === "style") {
      const cleaned = cleanStyleText(element.textContent || "");
      if (cleaned.removed.length) {
        for (const declaration of cleaned.removed) {
          removed.push({
            kind: "declaration",
            tag,
            value: declaration,
            reason: "unsafe style text"
          });
        }
        element.textContent = cleaned.text;
      }
    }
  }
  return { removed };
}
var PURIFY_WRAPPER_TAGS = /* @__PURE__ */ new Set(["html", "head", "body"]);
var purifier = null;
function getPurifier() {
  if (purifier)
    return purifier;
  const host = globalThis.window;
  if (!host)
    return null;
  const instance = purify_default(host);
  if (!instance.isSupported)
    return null;
  purifier = instance;
  return purifier;
}
function purifyMarkup(markup) {
  const report = { removed: [] };
  const purify = getPurifier();
  if (!purify) {
    return { element: null, error: "sanitiser unavailable", report };
  }
  const wrapped = `<svg xmlns="${SVG_NS}" xmlns:xlink="${XLINK_NS}">${markup}</svg>`;
  const body = purify.sanitize(wrapped, {
    USE_PROFILES: { svg: true, svgFilters: true },
    RETURN_DOM: true
  });
  for (const entry of purify.removed) {
    if ("element" in entry && entry.element) {
      const tag = entry.element.localName || entry.element.nodeName;
      if (PURIFY_WRAPPER_TAGS.has(tag))
        continue;
      report.removed.push({
        kind: "element",
        tag,
        reason: "removed by DOMPurify"
      });
    } else if ("attribute" in entry && entry.attribute) {
      report.removed.push({
        kind: "attribute",
        tag: entry.from.localName || "",
        name: entry.attribute.name,
        reason: "removed by DOMPurify"
      });
    }
  }
  const wrapper = Array.from(body.childNodes).find((node) => node.nodeType === 1);
  if (!wrapper || wrapper.localName !== "svg") {
    return { element: null, error: "markup was removed entirely", report };
  }
  const serialised = new XMLSerializer().serializeToString(wrapper);
  const doc = new DOMParser().parseFromString(serialised, "image/svg+xml");
  if (doc.querySelector("parsererror") || doc.documentElement.localName !== "svg") {
    return { element: null, error: "markup is not well-formed", report };
  }
  for (const node of Array.from(doc.documentElement.childNodes)) {
    if (node.nodeType === 8 || node.nodeType === 3 && !(node.nodeValue || "").trim()) {
      node.remove();
    }
  }
  const children = Array.from(doc.documentElement.childNodes);
  if (children.length !== 1 || children[0].nodeType !== 1) {
    return {
      element: null,
      error: `markup must be exactly one element, found ${children.length}`,
      report
    };
  }
  const element = children[0];
  const stripped = sanitiseTree(element);
  report.removed.push(...stripped.removed);
  if (!element.parentNode) {
    return { element: null, error: "the root element is denied", report };
  }
  return { element, report };
}

// libs/map-editor/src/lib/signature.ts
function isEditorAttribute(name) {
  return name.startsWith(EDITOR_ATTR_PREFIX);
}
function ownText(element) {
  let text2 = "";
  for (const node of Array.from(element.childNodes)) {
    if (node.nodeType === 3 || node.nodeType === 4)
      text2 += node.nodeValue || "";
  }
  return text2.trim();
}
function canonicalSignature(element) {
  const attrs = element.getAttributeNames().filter((name) => !isEditorAttribute(name)).sort().map((name) => `${name}=${JSON.stringify(element.getAttribute(name))}`);
  return `${element.tagName}|${attrs.join("|")}|${JSON.stringify(ownText(element))}`;
}
function contentHash(text2) {
  let hash = 2166136261;
  for (let i = 0; i < text2.length; i++) {
    hash ^= text2.charCodeAt(i);
    hash = Math.imul(hash, 16777619) >>> 0;
  }
  return hash.toString(16).padStart(CONTENT_HASH_LENGTH, "0");
}
function elementHash(element) {
  return contentHash(canonicalSignature(element));
}

// libs/map-editor/src/lib/style-resolution.ts
var COMMENT = /\/\*[\s\S]*?\*\//g;
var RULE = /([^{}@]+)\{([^{}]*)\}/g;
var AT_STATEMENT2 = /@[^{};]*;/g;
var AT_BLOCK = /@[^{}]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g;
function parseStyleRules(root) {
  const rules = [];
  for (const style of Array.from(root.querySelectorAll("style"))) {
    rules.push(...parseStyleText(style.textContent || ""));
  }
  return rules;
}
function parseStyleText(css) {
  const rules = [];
  const text2 = css.replace(COMMENT, "").replace(AT_BLOCK, "").replace(AT_STATEMENT2, "");
  for (const match of text2.matchAll(RULE)) {
    const selectors = match[1].split(",").map((s) => s.trim()).filter((s) => !!s);
    const declarations = parseDeclarations(match[2]);
    if (selectors.length && Object.keys(declarations).length) {
      rules.push({ selectors, declarations });
    }
  }
  return rules;
}
function parseDeclarations(body) {
  const declarations = {};
  for (const part of body.split(";")) {
    const index = part.indexOf(":");
    if (index < 0)
      continue;
    const name = part.slice(0, index).trim();
    const value = cleanStyleValue(part.slice(index + 1));
    if (name && value)
      declarations[name] = value;
  }
  return declarations;
}
function formatDeclarations(declarations) {
  return Object.entries(declarations).map(([name, value]) => `${name}:${value}`).join(";");
}
function cleanStyleValue(value) {
  return value.replace("!important", "").trim();
}
function isValidSelector(root, selector) {
  try {
    root.querySelectorAll(selector);
    return true;
  } catch {
    return false;
  }
}
function selectorSpecificity(selector) {
  const id_count = selector.match(/#[\w-]+/g)?.length || 0;
  const class_count = selector.match(/(\.[\w-]+|\[[^\]]+\]|:[\w-]+)/g)?.length || 0;
  const tag_count = selector.replace(/#[\w-]+/g, " ").replace(/(\.[\w-]+|\[[^\]]+\]|:[\w-]+)/g, " ").split(/[\s>+~]+/).filter((s) => !!s.trim() && s.trim() !== "*").length || 0;
  return id_count * 100 + class_count * 10 + tag_count;
}
function inlineStyleValue(element, name) {
  const style = element.style;
  const value = style?.getPropertyValue(name);
  return value ? cleanStyleValue(value) : "";
}
function numberValue(value) {
  if (!value)
    return null;
  const number2 = parseFloat(value);
  return Number.isFinite(number2) ? number2 : null;
}
function isTransparentColour(value) {
  const colour = value.trim().toLowerCase();
  return !colour || colour === "none" || colour === "transparent" || colour === "rgba(0,0,0,0)" || colour === "rgba(0, 0, 0, 0)";
}
function hasReference(element) {
  return element.hasAttribute("href") || element.hasAttribute("xlink:href") || element.hasAttributeNS(XLINK_NS, "href");
}
function elementsMatching(root, selector) {
  try {
    const matches = Array.from(root.querySelectorAll(selector));
    if (root.matches(selector))
      matches.unshift(root);
    return matches;
  } catch {
    return [];
  }
}
var StyleResolver = class {
  constructor(root, rules) {
    this._rule_values = /* @__PURE__ */ new Map();
    this._own_cache = /* @__PURE__ */ new Map();
    this.rules = rules || parseStyleRules(root);
    for (const rule of this.rules) {
      for (const selector of rule.selectors) {
        const specificity = selectorSpecificity(selector);
        for (const element of elementsMatching(root, selector)) {
          let values = this._rule_values.get(element);
          if (!values) {
            values = /* @__PURE__ */ new Map();
            this._rule_values.set(element, values);
          }
          for (const [name, value] of Object.entries(rule.declarations)) {
            const current = values.get(name);
            if (!current || specificity >= current[1]) {
              values.set(name, [value, specificity]);
            }
          }
        }
      }
    }
  }
  /** Value from the `<style>` rules only. */
  cssValue(element, name) {
    return this._rule_values.get(element)?.get(name)?.[0] || "";
  }
  /** The element's own value: inline style, then rules, then the attribute. */
  own(element, name) {
    let cache = this._own_cache.get(element);
    if (!cache) {
      cache = /* @__PURE__ */ new Map();
      this._own_cache.set(element, cache);
    }
    const cached = cache.get(name);
    if (cached !== void 0)
      return cached;
    const value = inlineStyleValue(element, name) || this.cssValue(element, name) || cleanStyleValue(element.getAttribute(name) || "");
    cache.set(name, value);
    return value;
  }
  inherited(element, name, fallback) {
    let current = element;
    while (current) {
      const value = this.own(current, name);
      if (value)
        return value;
      current = current.parentElement;
    }
    return fallback;
  }
  isHiddenByOwnStyle(element) {
    return element.hasAttribute("hidden") || this.own(element, "display") === "none" || ["hidden", "collapse"].includes(this.own(element, "visibility")) || numberValue(this.own(element, "opacity")) === 0;
  }
  hasHiddenAncestor(element) {
    let current = element;
    while (current) {
      if (NON_RENDERED_TAGS.has(current.localName.toLowerCase()))
        return true;
      if (this.isHiddenByOwnStyle(current))
        return true;
      current = current.parentElement;
    }
    return false;
  }
  hasVisibleFill(element) {
    const fill = this.inherited(element, "fill", "black");
    const fill_opacity = numberValue(this.inherited(element, "fill-opacity", "1"));
    return !isTransparentColour(fill || "black") && fill_opacity !== 0;
  }
  hasVisibleStroke(element) {
    const stroke = this.inherited(element, "stroke", "");
    const stroke_opacity = numberValue(this.inherited(element, "stroke-opacity", "1"));
    const stroke_width = numberValue(this.inherited(element, "stroke-width", "1"));
    return !!stroke && !isTransparentColour(stroke) && stroke_opacity !== 0 && stroke_width !== 0;
  }
  /**
   * Whether the element paints anything: not inside a non-rendered or hidden
   * subtree, and with a visible fill or stroke (containers: any visible
   * child; text: non-empty; lines: stroke; references: a target).
   */
  isVisible(element) {
    if (this.hasHiddenAncestor(element))
      return false;
    const tag = element.localName.toLowerCase();
    if (NON_RENDERED_TAGS.has(tag))
      return false;
    if (tag === "svg")
      return true;
    if (CONTAINER_TAGS.has(tag)) {
      return Array.from(element.children).some((child) => this.isVisible(child));
    }
    if (TEXT_TAGS.has(tag)) {
      return !!(element.textContent || "").trim() && (this.hasVisibleFill(element) || this.hasVisibleStroke(element));
    }
    if (LINE_TAGS.has(tag))
      return this.hasVisibleStroke(element);
    if (REFERENCE_TAGS.has(tag))
      return hasReference(element);
    return this.hasVisibleFill(element) || this.hasVisibleStroke(element);
  }
  visibleColour(element, name) {
    return this.inherited(element, name, name === "fill" ? "black" : "");
  }
  /**
   * Descendants that set the property themselves, so a value set on the
   * element does not reach them.
   */
  overridingDescendants(element, name) {
    return Array.from(element.querySelectorAll("*")).filter((child) => !!this.own(child, name));
  }
};

// libs/map-editor/src/lib/map-document.ts
var MapDocumentError = class extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.name = "MapDocumentError";
  }
};
function canvasExpansionIssue(before, value) {
  const after = parseViewBox(value);
  if (!after)
    return "the canvas bounds must be four finite numbers with positive dimensions";
  if (after.x > before.x || after.y > before.y || after.x + after.width < before.x + before.width || after.y + after.height < before.y + before.height)
    return "the canvas may expand but cannot crop the existing map";
  if (after.width > before.width * 4 || after.height > before.height * 4 || after.width * after.height > before.width * before.height * 4)
    return "the canvas expansion exceeds four times the existing size";
  return null;
}
var DOCTYPE_OR_ENTITY = /<!\s*(?:DOCTYPE|ENTITY)\b/i;
var PROLOG = /^﻿?\s*(<\?xml[\s\S]*?\?>)/;
var UNITLESS_NUMBER = /^\+?(?:\d+\.?\d*|\.\d+)(?:px)?$/;
function parseViewBox(value) {
  if (!value)
    return null;
  const parts = value.trim().split(/[\s,]+/);
  if (parts.length !== 4)
    return null;
  const numbers = parts.map((part) => /^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?$/.test(part) ? Number(part) : NaN);
  if (numbers.some((n) => !Number.isFinite(n)))
    return null;
  if (numbers[2] <= 0 || numbers[3] <= 0)
    return null;
  return {
    x: numbers[0],
    y: numbers[1],
    width: numbers[2],
    height: numbers[3]
  };
}
function stripEditorAttributes(root) {
  for (const element of [root, ...Array.from(root.querySelectorAll("*"))]) {
    for (const name of element.getAttributeNames()) {
      if (isEditorAttribute(name))
        element.removeAttribute(name);
    }
  }
}
var MapDocument = class _MapDocument {
  constructor(root, _initial_view_box, view_box_synthesised, prolog, sanitise_report, anchor_counter, options) {
    this._initial_view_box = _initial_view_box;
    this.view_box_synthesised = view_box_synthesised;
    this.prolog = prolog;
    this.sanitise_report = sanitise_report;
    this._version = 0;
    this._by_anchor = null;
    this._anchor_version = -1;
    this._style_rules = null;
    this._style_version = -1;
    this.removed_positions = /* @__PURE__ */ new Map();
    this._root = root;
    this._anchor_counter = anchor_counter;
    this.geometry = options.geometry || new AttributeGeometryProvider();
    this.protected = options.protected || ProtectedIdSet.empty();
  }
  get view_box() {
    return parseViewBox(this._root.getAttribute("viewBox")) || this._initial_view_box;
  }
  /**
   * Parse strictly: no parser error, no DOCTYPE or entity declaration, an
   * `svg` root in the SVG namespace, a numeric viewBox (synthesised once
   * from numeric unitless width and height when missing).
   */
  static load(text2, options = {}) {
    if (typeof text2 !== "string" || !text2.trim()) {
      throw new MapDocumentError("empty", "The map is empty.");
    }
    if (DOCTYPE_OR_ENTITY.test(text2)) {
      throw new MapDocumentError("doctype", "The map declares a DOCTYPE or entities, which are not allowed.");
    }
    const prolog = text2.match(PROLOG)?.[1] || "";
    const xml2 = new DOMParser().parseFromString(text2, "image/svg+xml");
    const error_node = xml2.querySelector("parsererror");
    if (error_node || xml2.documentElement?.localName === "parsererror") {
      const detail = (error_node || xml2.documentElement)?.textContent || "";
      throw new MapDocumentError("parse_error", `The map is not well-formed XML. ${detail.trim().slice(0, 200)}`);
    }
    if (xml2.doctype) {
      throw new MapDocumentError("doctype", "The map declares a DOCTYPE.");
    }
    const root = xml2.documentElement;
    if (!root || root.localName !== "svg" || root.namespaceURI !== SVG_NS) {
      throw new MapDocumentError("not_svg", "The root element is not <svg> in the SVG namespace.");
    }
    let view_box = parseViewBox(root.getAttribute("viewBox"));
    let synthesised = false;
    if (!view_box) {
      if (root.hasAttribute("viewBox")) {
        throw new MapDocumentError("no_viewbox", `The viewBox "${root.getAttribute("viewBox")}" is not four numbers.`);
      }
      const width = root.getAttribute("width") || "";
      const height = root.getAttribute("height") || "";
      if (!UNITLESS_NUMBER.test(width) || !UNITLESS_NUMBER.test(height)) {
        throw new MapDocumentError("no_viewbox", "The map has no viewBox and no numeric width and height to derive one from.");
      }
      view_box = {
        x: 0,
        y: 0,
        width: parseFloat(width),
        height: parseFloat(height)
      };
      if (view_box.width <= 0 || view_box.height <= 0) {
        throw new MapDocumentError("no_viewbox", "The map has a zero-sized canvas.");
      }
      root.setAttribute("viewBox", `0 0 ${view_box.width} ${view_box.height}`);
      synthesised = true;
    }
    const report = options.sanitise === false ? { removed: [] } : sanitiseTree(root);
    stripEditorAttributes(root);
    let counter = 0;
    for (const element of [
      root,
      ...Array.from(root.querySelectorAll("*"))
    ]) {
      element.setAttribute(ANCHOR_ATTR, `e${++counter}`);
    }
    return new _MapDocument(root, view_box, synthesised, prolog, report, counter, options);
  }
  get root() {
    return this._root;
  }
  get version() {
    return this._version;
  }
  get had_prolog() {
    return !!this.prolog;
  }
  /** Call after any change to the tree so cached lookups rebuild. */
  markChanged() {
    this._version++;
  }
  /** Root and every descendant, in document order. */
  elements() {
    return [this._root, ...Array.from(this._root.querySelectorAll("*"))];
  }
  elementCount() {
    return 1 + this._root.querySelectorAll("*").length;
  }
  anchorOf(element) {
    return element.getAttribute(ANCHOR_ATTR) || "";
  }
  byAnchor(anchor) {
    if (this._anchor_version !== this._version || !this._by_anchor) {
      this._by_anchor = /* @__PURE__ */ new Map();
      for (const element of this.elements()) {
        const anchor_value = element.getAttribute(ANCHOR_ATTR);
        if (anchor_value)
          this._by_anchor.set(anchor_value, element);
      }
      this._anchor_version = this._version;
    }
    return this._by_anchor.get(anchor) || null;
  }
  /** First element with the id, in document order. */
  byId(id) {
    for (const element of this.elements()) {
      if (element.getAttribute("id") === id)
        return element;
    }
    return null;
  }
  /** Resolve a target; anchor and id must agree when both are given. */
  resolve(target) {
    if (!target || !target.a && !target.id) {
      return {
        ok: false,
        error: "target has neither an anchor nor an id"
      };
    }
    const by_anchor = target.a ? this.byAnchor(target.a) : null;
    if (target.a && !by_anchor)
      return { ok: false, error: `unknown anchor "${target.a}"` };
    const by_id = target.id ? this.byId(target.id) : null;
    if (target.id && !by_id)
      return { ok: false, error: `unknown id "${target.id}"` };
    if (by_anchor && by_id && by_anchor !== by_id) {
      return {
        ok: false,
        error: `anchor "${target.a}" and id "${target.id}" are different elements`
      };
    }
    return { ok: true, element: by_anchor || by_id };
  }
  nextAnchor() {
    return `e${++this._anchor_counter}`;
  }
  /** Give one element a fresh anchor, leaving its descendants alone. */
  assignAnchor(element) {
    const anchor = this.nextAnchor();
    element.setAttribute(ANCHOR_ATTR, anchor);
    this.markChanged();
    return anchor;
  }
  /** Give every element in the subtree a fresh anchor, replacing any it carries. */
  assignAnchors(subtree) {
    const anchors = [];
    for (const element of [
      subtree,
      ...Array.from(subtree.querySelectorAll("*"))
    ]) {
      const anchor = this.nextAnchor();
      element.setAttribute(ANCHOR_ATTR, anchor);
      anchors.push(anchor);
    }
    this.markChanged();
    return anchors;
  }
  hashOf(element) {
    return elementHash(element);
  }
  signatureOf(element) {
    return canonicalSignature(element);
  }
  /** Canonical own-signature of every element, keyed by anchor. */
  signatures() {
    const map = /* @__PURE__ */ new Map();
    for (const element of this.elements()) {
      map.set(this.anchorOf(element), canonicalSignature(element));
    }
    return map;
  }
  styleRules() {
    if (this._style_version !== this._version || !this._style_rules) {
      this._style_rules = parseStyleRules(this._root);
      this._style_version = this._version;
    }
    return this._style_rules;
  }
  /** The map without editor attributes, with the XML prolog if the source had one. */
  serialise() {
    const clone2 = this._root.cloneNode(true);
    stripEditorAttributes(clone2);
    const markup = new XMLSerializer().serializeToString(clone2);
    return this.prolog ? `${this.prolog}
${markup}` : markup;
  }
  byteSize() {
    return new TextEncoder().encode(this.serialise()).length;
  }
  /** Deep copy with the same anchors, options and anchor counter. */
  clone() {
    const owner = this._root.ownerDocument;
    const xml2 = owner.implementation.createDocument(null, null, null);
    const root = xml2.importNode(this._root, true);
    xml2.appendChild(root);
    return new _MapDocument(root, __spreadValues({}, this.view_box), this.view_box_synthesised, this.prolog, { removed: [...this.sanitise_report.removed] }, this._anchor_counter, { geometry: this.geometry, protected: this.protected });
  }
  /** Swap the live root for another (a history snapshot); anchors come with it. */
  replaceRoot(root) {
    if (root.localName !== "svg")
      throw new Error("replaceRoot needs an <svg> root");
    const parent = this._root.parentNode;
    if (parent)
      parent.replaceChild(root, this._root);
    this._root = root;
    this.removed_positions.clear();
    this.markChanged();
  }
  /**
   * Where an element deleted earlier stood, as a parent and the first
   * following sibling that is still in the document; null when the parent
   * is gone too or the anchor was never deleted.
   */
  positionOfRemoved(anchor) {
    const position = this.removed_positions.get(anchor);
    if (!position || !position.parent.isConnected)
      return null;
    let next = position.next;
    while (next && !next.isConnected) {
      const next_anchor = next.getAttribute(ANCHOR_ATTR);
      next = next_anchor ? this.removed_positions.get(next_anchor)?.next ?? null : null;
    }
    return { parent: position.parent, next };
  }
  /** Elements of a subtree, including its root, in document order. */
  static subtree(element) {
    return [element, ...Array.from(element.querySelectorAll("*"))];
  }
};

// libs/map-editor/src/lib/ai/snapshot.ts
var SNAPSHOT_LONG_SIDE = 2048;
var SNAPSHOT_OUTLINE_COLOUR = "#d946ef";
var SNAPSHOT_TAG_COLOUR = "#c2410c";
var DEFAULT_RENDER_TIMEOUT_MS = 15e3;
function snapshotSize(view_box, long_side = SNAPSHOT_LONG_SIDE) {
  const { width, height } = view_box;
  const landscape = width >= height;
  const long = Math.max(1, Math.round(long_side));
  const short = Math.max(1, Math.round(long * (landscape ? height : width) / (landscape ? width : height)));
  const image_px = landscape ? [long, short] : [short, long];
  const units_per_px = Math.round(width / image_px[0] * 1e4) / 1e4;
  return { image_px, units_per_px };
}
function snapshotMarkup(doc, options = {}) {
  const bounds = __spreadValues({}, doc.view_box);
  const points = (options.annotations || []).flatMap((mark) => {
    const result = [...mark.points || []];
    if (mark.x !== void 0 && mark.y !== void 0) {
      result.push([mark.x, mark.y]);
      result.push([
        mark.x + (mark.width || 0),
        mark.y + (mark.height || 0)
      ]);
    }
    if (mark.x2 !== void 0 && mark.y2 !== void 0)
      result.push([mark.x2, mark.y2]);
    return result;
  }).filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
  for (const [x, y] of points) {
    const right = Math.max(bounds.x + bounds.width, x);
    const bottom = Math.max(bounds.y + bounds.height, y);
    bounds.x = Math.min(bounds.x, x);
    bounds.y = Math.min(bounds.y, y);
    bounds.width = right - bounds.x;
    bounds.height = bottom - bounds.y;
  }
  if (bounds.x !== doc.view_box.x || bounds.y !== doc.view_box.y || bounds.width !== doc.view_box.width || bounds.height !== doc.view_box.height) {
    const margin = Math.max(bounds.width, bounds.height) * 0.015;
    bounds.x -= margin;
    bounds.y -= margin;
    bounds.width += margin * 2;
    bounds.height += margin * 2;
  }
  const size = snapshotSize(bounds, options.long_side);
  const clone2 = doc.root.cloneNode(true);
  const owner = clone2.ownerDocument;
  const colour = options.colour || SNAPSHOT_OUTLINE_COLOUR;
  const { width, height } = doc.view_box;
  const stroke_width = Math.max(0.5, Math.max(width, height) * 25e-4);
  const font_size = Math.max(8 * stroke_width, 6);
  const outlined = [];
  const overlay = owner.createElementNS(SVG_NS, "g");
  for (const anchor of options.selection || []) {
    const element = doc.byAnchor(anchor);
    if (!element)
      continue;
    const bbox = doc.geometry.bboxOf(element);
    if (!bbox)
      continue;
    const [x, y, w, h] = bbox;
    const rect = owner.createElementNS(SVG_NS, "rect");
    rect.setAttribute("x", String(x));
    rect.setAttribute("y", String(y));
    rect.setAttribute("width", String(w));
    rect.setAttribute("height", String(h));
    rect.setAttribute("fill", "none");
    rect.setAttribute("stroke", colour);
    rect.setAttribute("stroke-width", String(stroke_width));
    overlay.appendChild(rect);
    const text2 = owner.createElementNS(SVG_NS, "text");
    text2.setAttribute("x", String(x));
    text2.setAttribute("y", String(y - stroke_width * 2));
    text2.setAttribute("font-size", String(font_size));
    text2.setAttribute("font-family", "sans-serif");
    text2.setAttribute("fill", colour);
    text2.setAttribute("stroke", "#ffffff");
    text2.setAttribute("stroke-width", String(stroke_width));
    text2.setAttribute("paint-order", "stroke");
    text2.textContent = element.getAttribute("id") || anchor;
    overlay.appendChild(text2);
    outlined.push(anchor);
  }
  const tagged = new Set(outlined);
  const tag_size = Math.max(font_size * 0.6, 5);
  for (const anchor of options.tags || []) {
    if (tagged.has(anchor))
      continue;
    const element = doc.byAnchor(anchor);
    const id = element?.getAttribute("id");
    if (!element || !id)
      continue;
    const bbox = doc.geometry.bboxOf(element);
    if (!bbox)
      continue;
    const [x, y] = bbox;
    const text2 = owner.createElementNS(SVG_NS, "text");
    text2.setAttribute("x", String(x + stroke_width));
    text2.setAttribute("y", String(y + tag_size + stroke_width));
    text2.setAttribute("font-size", String(tag_size));
    text2.setAttribute("font-family", "sans-serif");
    text2.setAttribute("fill", SNAPSHOT_TAG_COLOUR);
    text2.setAttribute("stroke", "#ffffff");
    text2.setAttribute("stroke-width", String(stroke_width * 0.6));
    text2.setAttribute("paint-order", "stroke");
    text2.textContent = id;
    overlay.appendChild(text2);
    tagged.add(anchor);
  }
  drawAnnotations(overlay, options.annotations || [], size.units_per_px);
  if (overlay.childNodes.length)
    clone2.appendChild(overlay);
  clone2.setAttribute("viewBox", `${bounds.x} ${bounds.y} ${bounds.width} ${bounds.height}`);
  clone2.setAttribute("width", String(size.image_px[0]));
  clone2.setAttribute("height", String(size.image_px[1]));
  stripEditorAttributes(clone2);
  return __spreadProps(__spreadValues({}, size), {
    view_box: bounds,
    markup: new XMLSerializer().serializeToString(clone2),
    outlined
  });
}
function rasterise(markup, [width, height], options = {}) {
  const url = URL.createObjectURL(new Blob([markup], { type: "image/svg+xml" }));
  return new Promise((resolve, reject) => {
    const image = new Image();
    let settled = false;
    const finish = (error, blob) => {
      if (settled)
        return;
      settled = true;
      clearTimeout(timer);
      URL.revokeObjectURL(url);
      if (error || !blob)
        reject(error || new Error("no snapshot"));
      else
        resolve(blob);
    };
    const timer = setTimeout(() => finish(new Error("the map did not finish rendering in time")), options.timeout_ms ?? DEFAULT_RENDER_TIMEOUT_MS);
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        if (!context)
          throw new Error("no 2d canvas context");
        context.fillStyle = options.background || "#ffffff";
        context.fillRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);
        canvas.toBlob((blob) => finish(blob ? null : new Error("the snapshot could not be encoded"), blob || void 0), options.type || "image/png", options.quality);
      } catch (error) {
        finish(error instanceof Error ? error : new Error(String(error)));
      }
    };
    image.onerror = () => finish(new Error("the browser could not draw the map"));
    image.src = url;
  });
}
async function renderSnapshot(doc, options = {}) {
  const prepared = snapshotMarkup(doc, options);
  const blob = await rasterise(prepared.markup, prepared.image_px, options);
  return __spreadProps(__spreadValues({}, prepared), { blob });
}

// libs/map-editor/src/lib/ai/types.ts
var MAP_AI_CONTEXT_SCHEMA = "placeos.map-ai-context/1";
var MAP_AI_MARKUP_SCHEMA = "placeos.map-markup/1";

// libs/map-editor/src/lib/ai/context.ts
var DEFAULT_MAX_CONTEXT_BYTES = 512 * 1024;
var MAX_SUBTREE_BYTES = 8e3;
var encoder = new TextEncoder();
function bytesOf(value) {
  return encoder.encode(JSON.stringify(value)).length;
}
function viewBoxTuple(view_box) {
  return [view_box.x, view_box.y, view_box.width, view_box.height];
}
function isNamedEntry(entry) {
  return !!entry.id || !!entry.label || entry.protected;
}
function bboxArea(entry) {
  return entry.bbox ? entry.bbox[2] * entry.bbox[3] : 0;
}
function orderEntries(index) {
  const listed = index.entries.filter((entry) => entry.kind !== "root" && entry.kind !== "non-rendered");
  const named = listed.filter(isNamedEntry);
  const anonymous = listed.filter((entry) => !isNamedEntry(entry)).map((entry, order) => ({ entry, order, area: bboxArea(entry) })).sort((a, b) => b.area - a.area || a.order - b.order).map((item) => item.entry);
  return [...named, ...anonymous];
}
function containerEntries(index) {
  return index.entries.filter((entry) => (entry.kind === "bookable" || entry.kind === "zone") && !!entry.bbox && entry.bbox[2] > 0 && entry.bbox[3] > 0).sort((a, b) => bboxArea(a) - bboxArea(b));
}
var CONTAINMENT_TOLERANCE = 0.5;
function containerIndex(index) {
  const containers = containerEntries(index);
  const result = /* @__PURE__ */ new Map();
  for (const entry of index.entries) {
    if (!entry.bbox || entry.kind === "root" || entry.kind === "non-rendered")
      continue;
    const [x, y, w, h] = entry.bbox;
    for (const container of containers) {
      if (container === entry)
        continue;
      const [cx, cy, cw, ch] = container.bbox;
      if (cw * ch <= w * h)
        continue;
      if (x >= cx - CONTAINMENT_TOLERANCE && y >= cy - CONTAINMENT_TOLERANCE && x + w <= cx + cw + CONTAINMENT_TOLERANCE && y + h <= cy + ch + CONTAINMENT_TOLERANCE) {
        result.set(entry.anchor, container);
        break;
      }
    }
  }
  return result;
}
var GLYPH_MAX_HEIGHT_RATIO = 0.15;
var GLYPH_MAX_WIDTH_RATIO = 0.12;
var GLYPH_MIN_HEIGHT = 3;
var LABEL_MIN_GLYPHS = 3;
var ROW_GAP_RATIO = 1.5;
var ROW_OVERLAP_RATIO = 0.5;
var ROW_STACK_RATIO = 1.2;
var PUNCTUATION_EDGE_TOLERANCE = 1;
function isGlyphCandidate(entry, container) {
  if (!container?.bbox || !entry.bbox)
    return false;
  if (entry.id || entry.label || entry.protected)
    return false;
  if (entry.tag !== "path" && entry.tag !== "polygon")
    return false;
  if (entry.parent === container.anchor)
    return false;
  if (!entry.fill || entry.fill === "none")
    return false;
  const [, , w, h] = entry.bbox;
  const [, , cw, ch] = container.bbox;
  return h >= GLYPH_MIN_HEIGHT && h <= ch * GLYPH_MAX_HEIGHT_RATIO && w <= cw * GLYPH_MAX_WIDTH_RATIO;
}
function unionBox(boxes) {
  const x0 = Math.min(...boxes.map((b) => b[0]));
  const y0 = Math.min(...boxes.map((b) => b[1]));
  const x1 = Math.max(...boxes.map((b) => b[0] + b[2]));
  const y1 = Math.max(...boxes.map((b) => b[1] + b[3]));
  return [x0, y0, x1 - x0, y1 - y0];
}
function sameRow(last, next) {
  const overlap = Math.min(last[1] + last[3], next[1] + next[3]) - Math.max(last[1], next[1]);
  const tallest = Math.max(last[3], next[3]);
  const gap = next[0] - (last[0] + last[2]);
  return overlap >= Math.min(last[3], next[3]) * ROW_OVERLAP_RATIO && gap <= tallest * ROW_GAP_RATIO && gap >= -tallest * ROW_OVERLAP_RATIO;
}
function stacked(upper, lower) {
  const gap = lower[1] - (upper[1] + upper[3]);
  const horizontal = Math.min(upper[0] + upper[2], lower[0] + lower[2]) - Math.max(upper[0], lower[0]);
  return gap >= -Math.min(upper[3], lower[3]) * ROW_OVERLAP_RATIO && gap <= Math.max(upper[3], lower[3]) * ROW_STACK_RATIO && horizontal > 0;
}
function glyphRuns(members) {
  const sorted = [...members].sort((a, b) => a.bbox[0] - b.bbox[0]);
  const rows = [];
  for (const member of sorted) {
    const row = rows.find((candidate) => sameRow(candidate[candidate.length - 1].bbox, member.bbox));
    if (row)
      row.push(member);
    else
      rows.push([member]);
  }
  const labels = rows.filter((row) => row.length >= LABEL_MIN_GLYPHS).map((row) => ({
    rows: [row],
    bbox: unionBox(row.map((entry) => entry.bbox))
  })).sort((a, b) => a.bbox[1] - b.bbox[1]);
  const merged = [];
  for (const label of labels) {
    const above = merged.find((candidate) => stacked(candidate.bbox, label.bbox));
    if (above) {
      above.rows.push(...label.rows);
      above.bbox = unionBox([above.bbox, label.bbox]);
    } else
      merged.push(label);
  }
  return merged.map((label) => ({
    anchors: label.rows.flat().map((entry) => entry.anchor),
    bbox: label.bbox
  }));
}
var LOOSE_GLYPH_MIN_RATIO = 0.6;
var LOOSE_GLYPH_MAX_RATIO = 1.6;
var LOOSE_GLYPH_WIDTH_RATIO = 2;
function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
function isLooseGlyphCandidate(entry, glyph_height, siblings) {
  if (!entry.bbox || entry.id || entry.label || entry.protected)
    return false;
  if (entry.tag !== "path" && entry.tag !== "polygon")
    return false;
  if (!entry.fill || entry.fill === "none")
    return false;
  const [, , w, h] = entry.bbox;
  if (h < glyph_height * LOOSE_GLYPH_MIN_RATIO || h > glyph_height * LOOSE_GLYPH_MAX_RATIO || w > glyph_height * LOOSE_GLYPH_WIDTH_RATIO)
    return false;
  return !siblings.some((other) => other !== entry && other.parent === entry.parent && sameDrawing(entry.bbox, other.bbox));
}
function textWords(element) {
  const lines = Array.from(element.childNodes).map((node) => node.nodeType === Node.TEXT_NODE || node.localName === "tspan" ? (node.textContent || "").trim() : "");
  return lines.filter((line) => !!line).join("\n");
}
function labelClusters(index, containers, words = () => null) {
  const clusters = [];
  const groups = /* @__PURE__ */ new Map();
  for (const entry of index.entries) {
    const container = containers.get(entry.anchor);
    if (!isGlyphCandidate(entry, container) || !container)
      continue;
    const key = `${container.anchor}|${entry.parent}|${entry.fill}`;
    const group2 = groups.get(key) || { container, members: [] };
    group2.members.push(entry);
    groups.set(key, group2);
  }
  const glyph_heights = [];
  for (const { container, members } of groups.values()) {
    for (const run of glyphRuns(members)) {
      clusters.push({
        kind: "glyphs",
        in: container.id || container.anchor,
        anchors: run.anchors,
        bbox: run.bbox,
        fill: members[0].fill,
        text: null
      });
      for (const anchor of run.anchors) {
        const box = index.by_anchor.get(anchor)?.bbox;
        if (box)
          glyph_heights.push(box[3]);
      }
    }
  }
  if (glyph_heights.length) {
    const typical = median(glyph_heights);
    const clustered = new Set(clusters.flatMap((label) => label.anchors));
    const label_styles = new Set(index.entries.filter((entry) => clustered.has(entry.anchor)).map((entry) => `${entry.parent}|${entry.fill}`));
    const remaining = index.entries.filter((entry) => !clustered.has(entry.anchor) && (!containers.has(entry.anchor) || label_styles.has(`${entry.parent}|${entry.fill}`)) && entry.kind !== "root" && entry.kind !== "non-rendered" && entry.kind !== "bookable" && entry.kind !== "zone");
    const loose = /* @__PURE__ */ new Map();
    for (const entry of remaining) {
      if (!isLooseGlyphCandidate(entry, typical, index.entries))
        continue;
      const container = containers.get(entry.anchor);
      const key = `${container?.anchor || ""}|${entry.parent}|${entry.fill}`;
      const members = loose.get(key) || [];
      members.push(entry);
      loose.set(key, members);
    }
    for (const members of loose.values()) {
      for (const run of glyphRuns(members)) {
        const container = containers.get(run.anchors[0]);
        clusters.push({
          kind: "glyphs",
          in: container ? container.id || container.anchor : null,
          anchors: run.anchors,
          bbox: run.bbox,
          fill: members[0].fill,
          text: null
        });
      }
    }
  }
  const assigned_glyphs = new Set(clusters.flatMap((label) => label.anchors));
  for (const cluster of clusters) {
    const parent = index.by_anchor.get(cluster.anchors[0])?.parent;
    const [x, y, width, height] = cluster.bbox;
    for (const entry of index.entries) {
      if (assigned_glyphs.has(entry.anchor) || entry.id || entry.label || entry.protected || !entry.visible || !entry.bbox || entry.parent !== parent || entry.fill !== cluster.fill || entry.tag !== "path" && entry.tag !== "polygon")
        continue;
      const [px, py, pw, ph] = entry.bbox;
      if (pw <= 0 || ph <= 0 || pw >= GLYPH_MIN_HEIGHT || ph >= GLYPH_MIN_HEIGHT || px < x - PUNCTUATION_EDGE_TOLERANCE || py < y - PUNCTUATION_EDGE_TOLERANCE || px + pw > x + width + PUNCTUATION_EDGE_TOLERANCE || py + ph > y + height + PUNCTUATION_EDGE_TOLERANCE)
        continue;
      cluster.anchors.push(entry.anchor);
      assigned_glyphs.add(entry.anchor);
    }
  }
  for (const entry of index.entries) {
    if (entry.tag !== "text" || !entry.bbox)
      continue;
    const text2 = words(entry.anchor) ?? entry.text ?? entry.label;
    if (!text2)
      continue;
    const container = containers.get(entry.anchor);
    clusters.push({
      kind: "text",
      in: container ? container.id || container.anchor : null,
      anchors: [entry.anchor],
      bbox: entry.bbox,
      fill: entry.fill,
      text: text2
    });
  }
  return clusters;
}
var PIECE_MIN_OVERLAP = 0.4;
function boxOverlap(a, b) {
  const w = Math.min(a[0] + a[2], b[0] + b[2]) - Math.max(a[0], b[0]);
  const h = Math.min(a[1] + a[3], b[1] + b[3]) - Math.max(a[1], b[1]);
  if (w <= 0 || h <= 0)
    return 0;
  const smaller = Math.min(a[2] * a[3], b[2] * b[3]);
  return smaller > 0 ? w * h / smaller : 0;
}
function sameDrawing(a, b) {
  if (!a || !b || a[2] <= 0 || a[3] <= 0 || b[2] <= 0 || b[3] <= 0)
    return false;
  return boxOverlap(a, b) >= PIECE_MIN_OVERLAP;
}
function pieceIndex(index, glyphs) {
  const by_parent = /* @__PURE__ */ new Map();
  for (const entry of index.entries) {
    if (entry.id || entry.label || entry.protected || !entry.bbox || entry.kind === "root" || entry.kind === "non-rendered" || entry.kind === "bookable" || entry.kind === "zone" || entry.kind === "layer-group" || glyphs.has(entry.anchor))
      continue;
    const key = entry.parent || "";
    const list = by_parent.get(key) || [];
    list.push(entry);
    by_parent.set(key, list);
  }
  const group_of = /* @__PURE__ */ new Map();
  const members = /* @__PURE__ */ new Map();
  let next_group = 0;
  for (const siblings of by_parent.values()) {
    for (let i = 0; i < siblings.length; i++) {
      const a = siblings[i];
      for (let j = i + 1; j < siblings.length; j++) {
        const b = siblings[j];
        if (!sameDrawing(a.bbox, b.bbox))
          continue;
        const ga = group_of.get(a.anchor);
        const gb = group_of.get(b.anchor);
        if (ga === void 0 && gb === void 0) {
          const id = next_group++;
          group_of.set(a.anchor, id);
          group_of.set(b.anchor, id);
          members.set(id, [a.anchor, b.anchor]);
        } else if (ga !== void 0 && gb === void 0) {
          group_of.set(b.anchor, ga);
          members.get(ga)?.push(b.anchor);
        } else if (ga === void 0 && gb !== void 0) {
          group_of.set(a.anchor, gb);
          members.get(gb)?.push(a.anchor);
        } else if (ga !== void 0 && gb !== void 0 && ga !== gb) {
          const moved = members.get(gb) || [];
          for (const anchor of moved)
            group_of.set(anchor, ga);
          members.get(ga)?.push(...moved);
          members.delete(gb);
        }
      }
    }
  }
  const child_counts = /* @__PURE__ */ new Map();
  for (const entry of index.entries) {
    if (entry.parent)
      child_counts.set(entry.parent, (child_counts.get(entry.parent) || 0) + 1);
  }
  const drawingParent = (entry) => {
    let parent = entry.parent;
    while (parent && child_counts.get(parent) === 1) {
      const wrapper = index.by_anchor.get(parent);
      if (!wrapper || wrapper.tag !== "g" || wrapper.protected)
        break;
      parent = wrapper.parent;
    }
    return parent;
  };
  for (const entry of index.entries) {
    const box = entry.bbox;
    if (entry.tag !== "line" || entry.id || entry.protected || !entry.visible || !entry.stroke || entry.stroke === "none" || !box || group_of.has(entry.anchor) || glyphs.has(entry.anchor))
      continue;
    const candidates = /* @__PURE__ */ new Set();
    const parent = drawingParent(entry);
    for (const layer of index.entries) {
      const group3 = group_of.get(layer.anchor);
      const bounds = layer.bbox;
      if (group3 === void 0 || !bounds || drawingParent(layer) !== parent)
        continue;
      if (Math.max(box[2], box[3]) <= Math.min(bounds[2], bounds[3]) * 0.1 && box[0] >= bounds[0] && box[1] >= bounds[1] && box[0] + box[2] <= bounds[0] + bounds[2] && box[1] + box[3] <= bounds[1] + bounds[3])
        candidates.add(group3);
    }
    if (candidates.size !== 1)
      continue;
    const group2 = [...candidates][0];
    group_of.set(entry.anchor, group2);
    members.get(group2)?.push(entry.anchor);
  }
  const result = /* @__PURE__ */ new Map();
  let counter = 0;
  for (const entry of index.entries) {
    const group2 = group_of.get(entry.anchor);
    if (group2 === void 0 || result.has(entry.anchor))
      continue;
    counter += 1;
    for (const anchor of members.get(group2) || [])
      result.set(anchor, `p${counter}`);
  }
  return result;
}
var MENTION = /[A-Za-z0-9.]*\d[A-Za-z0-9.]*/g;
var ID_SEPARATOR = /[-_.\s]+/;
var MAX_MENTIONS = 12;
function mentionedTokens(instruction) {
  const tokens = (instruction.match(MENTION) || []).map((token) => token.replace(/^\.+|\.+$/g, "")).filter((token) => token.length >= 2 || /^\d+$/.test(token));
  return unique(tokens);
}
function idParts(value) {
  return value.toLowerCase().split(ID_SEPARATOR).filter((part) => !!part);
}
function idMentions(id, token) {
  const needle = idParts(token);
  const haystack = idParts(id);
  if (!needle.length || needle.length > haystack.length)
    return false;
  for (let start = 0; start + needle.length <= haystack.length; start++) {
    if (needle.every((part, offset) => haystack[start + offset] === part))
      return true;
  }
  return false;
}
function mentionedEntries(index, instruction) {
  if (!instruction)
    return [];
  const tokens = mentionedTokens(instruction);
  if (!tokens.length)
    return [];
  const found = index.entries.filter((entry) => !!entry.id && tokens.some((token) => idMentions(entry.id, token)));
  return found.slice(0, MAX_MENTIONS);
}
function contextEntry(entry, root_anchor, container, glyph = false, piece = null) {
  return {
    a: entry.anchor,
    id: entry.id,
    tag: entry.tag,
    cls: entry.classes.join(" ") || null,
    label: entry.label,
    bbox: entry.bbox ? [...entry.bbox] : null,
    p: entry.parent && entry.parent !== root_anchor ? entry.parent : null,
    z: entry.z,
    kind: glyph ? "glyph" : entry.kind,
    prot: entry.protected,
    h: entry.hash,
    fill: entry.fill,
    in: container ? container.id || container.anchor : null,
    piece
  };
}
function styleRuleStrings(rules) {
  return rules.map((rule) => `${rule.selectors.join(",")}{${formatDeclarations(rule.declarations)}}`);
}
function subtreeMarkup(element, max_bytes) {
  const clone2 = element.cloneNode(true);
  stripEditorAttributes(clone2);
  const markup = new XMLSerializer().serializeToString(clone2);
  if (encoder.encode(markup).length <= max_bytes)
    return markup;
  let cut = markup;
  while (cut.length && encoder.encode(cut).length > max_bytes - 3)
    cut = cut.slice(0, Math.floor(cut.length * 0.9));
  return `${cut}...`;
}
function unique(values) {
  return [...new Set(values.filter((value) => !!value))];
}
function buildContext(source, options = {}) {
  const index = source.index();
  const doc = source.doc;
  const max_bytes = options.max_bytes ?? DEFAULT_MAX_CONTEXT_BYTES;
  const max_subtree = options.max_subtree_bytes ?? MAX_SUBTREE_BYTES;
  const root_entry = index.entries.find((entry) => entry.kind === "root");
  const root_anchor = root_entry?.anchor || null;
  const selection = unique(options.selection || []);
  const mentioned = mentionedEntries(index, options.instruction).map((entry) => entry.anchor);
  const instruction = (options.instruction || "").toLocaleLowerCase().replace(/\s+/g, " ");
  const named_text = index.entries.filter((entry) => entry.tag === "text").filter((entry) => {
    const element = doc.byAnchor(entry.anchor);
    const label = element ? textWords(element)?.toLocaleLowerCase().replace(/\s+/g, " ").trim() : "";
    return !!label && label.length >= 3 && instruction.includes(label);
  }).slice(0, MAX_MENTIONS).map((entry) => entry.anchor);
  const box = doc.view_box;
  const outside = (options.annotations || []).some((mark) => {
    const points = [...mark.points || []];
    if (mark.x !== void 0 && mark.y !== void 0) {
      points.push([mark.x, mark.y]);
      points.push([
        mark.x + (mark.width || 0),
        mark.y + (mark.height || 0)
      ]);
    }
    if (mark.x2 !== void 0 && mark.y2 !== void 0)
      points.push([mark.x2, mark.y2]);
    return points.some(([x, y]) => x < box.x || y < box.y || x > box.x + box.width || y > box.y + box.height);
  });
  const include_root = !!root_entry && (outside || /\b(expand|extend|enlarge)\b/.test(instruction));
  const shortlist = unique([
    ...selection,
    ...options.shortlist || [],
    ...(options.annotations || []).flatMap((mark) => [
      ...mark.hits || [],
      ...mark.near || []
    ]),
    ...mentioned,
    ...named_text,
    ...include_root ? index.entries.filter((entry) => entry.tag === "g" && /outline|walls?/i.test(entry.id || "")).map((entry) => entry.anchor) : []
  ]);
  const size = options.snapshot || snapshotSize(doc.view_box, options.long_side);
  const ordered = include_root ? [root_entry, ...orderEntries(index)] : orderEntries(index);
  const containers = containerIndex(index);
  const labels = labelClusters(index, containers, (anchor) => {
    const element = doc.byAnchor(anchor);
    return element ? textWords(element) : null;
  });
  const glyphs = new Set(labels.flatMap((label) => label.kind === "glyphs" ? label.anchors : []));
  const pieces = pieceIndex(index, glyphs);
  const entries2 = ordered.map((entry) => contextEntry(entry, root_anchor, containers.get(entry.anchor), glyphs.has(entry.anchor), pieces.get(entry.anchor) ?? null));
  const named_count = ordered.filter(isNamedEntry).length + (include_root && !isNamedEntry(root_entry) ? 1 : 0);
  const subtrees = {};
  for (const anchor of shortlist) {
    const element = doc.byAnchor(anchor);
    if (element)
      subtrees[anchor] = subtreeMarkup(element, max_subtree);
  }
  const subtree_keys = Object.keys(subtrees);
  const context = {
    schema: MAP_AI_CONTEXT_SCHEMA,
    viewBox: viewBoxTuple(doc.view_box),
    image_px: [...size.image_px],
    units_per_px: size.units_per_px,
    protected_ids: ordered.filter((entry) => entry.protected && entry.id).map((entry) => entry.id),
    duplicate_ids: [...index.duplicate_ids],
    index: entries2,
    labels: labels.map((label) => ({
      kind: label.kind,
      in: label.in,
      anchors: [...label.anchors],
      bbox: [...label.bbox],
      fill: label.fill,
      text: label.text
    })),
    shortlist: subtree_keys,
    subtrees,
    style_rules: styleRuleStrings(doc.styleRules()),
    markup: {
      schema: MAP_AI_MARKUP_SCHEMA,
      viewBox: viewBoxTuple(size.view_box || doc.view_box),
      annotations: JSON.parse(JSON.stringify(options.annotations || [])),
      selected: selection
    },
    stats: __spreadValues({}, index.stats)
  };
  const dropped = { subtrees: 0, anonymous: 0, named: 0 };
  let bytes = bytesOf(context);
  while (bytes > max_bytes && context.shortlist.length) {
    const key = context.shortlist[context.shortlist.length - 1];
    bytes -= bytesOf(key) + bytesOf(context.subtrees[key]) + 4;
    context.shortlist = context.shortlist.slice(0, -1);
    delete context.subtrees[key];
    dropped.subtrees += 1;
  }
  if (dropped.subtrees)
    bytes = bytesOf(context);
  const drop_tail = (floor, counter) => {
    while (bytes > max_bytes && context.index.length > floor) {
      const entry = context.index[context.index.length - 1];
      bytes -= bytesOf(entry) + 1;
      context.index = context.index.slice(0, -1);
      dropped[counter] += 1;
    }
    if (dropped[counter])
      bytes = bytesOf(context);
  };
  drop_tail(named_count, "anonymous");
  drop_tail(named_count, "anonymous");
  drop_tail(include_root ? 1 : 0, "named");
  drop_tail(include_root ? 1 : 0, "named");
  return { context, bytes, dropped, fits: bytes <= max_bytes };
}

// libs/map-editor/src/lib/ids.ts
function idIssue(id) {
  if (!id)
    return "id is empty";
  if (/^[^A-Za-z]/.test(id))
    return `id "${id}" must start with a letter`;
  if (!ID_PATTERN.test(id)) {
    return `id "${id}" may only contain letters, digits, "_", "." and "-"`;
  }
  return null;
}
function idsIn(root) {
  const ids = /* @__PURE__ */ new Set();
  if (root.hasAttribute("id"))
    ids.add(root.getAttribute("id") || "");
  for (const element of Array.from(root.querySelectorAll("[id]"))) {
    ids.add(element.getAttribute("id") || "");
  }
  ids.delete("");
  return ids;
}
function duplicateIds(root) {
  const seen = /* @__PURE__ */ new Set();
  const duplicates = [];
  const elements = [root, ...Array.from(root.querySelectorAll("[id]"))];
  for (const element of elements) {
    const id = element.getAttribute("id");
    if (!id)
      continue;
    if (seen.has(id) && !duplicates.includes(id))
      duplicates.push(id);
    seen.add(id);
  }
  return duplicates;
}
function generateId(existing, prefix) {
  let n = 1;
  while (existing.has(`${prefix}${n}`))
    n++;
  return `${prefix}${n}`;
}
var PATTERN_SLOT = /\{n(?::(\d+))?\}/;
function expandIdPattern(pattern, n) {
  const match = pattern.match(PATTERN_SLOT);
  if (!match)
    return `${pattern}${n}`;
  const width = match[1] ? parseInt(match[1], 10) : 0;
  return pattern.replace(PATTERN_SLOT, `${n}`.padStart(width, "0"));
}
function highestInPattern(existing, pattern) {
  const match = pattern.match(PATTERN_SLOT);
  if (!match)
    return 0;
  const [prefix, suffix] = pattern.split(match[0]);
  let highest = 0;
  for (const id of existing) {
    if (!id.startsWith(prefix) || !id.endsWith(suffix))
      continue;
    const middle = id.slice(prefix.length, id.length - suffix.length);
    if (/^\d+$/.test(middle))
      highest = Math.max(highest, parseInt(middle, 10));
  }
  return highest;
}
function referenceValues(element) {
  const values = [];
  for (const name of element.getAttributeNames()) {
    const value = element.getAttribute(name) || "";
    if (REFERENCE_ATTRS.has(name) || value.includes("url(")) {
      values.push([name, value]);
    }
  }
  return values;
}
function referencesId(value, id) {
  if (value === `#${id}`)
    return true;
  return new RegExp(`url\\(\\s*['"]?#${escapeRegExp(id)}['"]?\\s*\\)`).test(value);
}
function escapeRegExp(text2) {
  return text2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function referencesTo(root, id) {
  const elements = [];
  for (const element of [root, ...Array.from(root.querySelectorAll("*"))]) {
    if (referenceValues(element).some(([, value]) => referencesId(value, id))) {
      elements.push(element);
    }
  }
  return elements;
}
function styleReferencesTo(root, id) {
  const pattern = new RegExp(`url\\(\\s*['"]?#${escapeRegExp(id)}['"]?\\s*\\)`, "g");
  let count = 0;
  for (const style of Array.from(root.querySelectorAll("style"))) {
    count += (style.textContent || "").match(pattern)?.length || 0;
  }
  return count;
}
function rewriteReferences(root, old_id, new_id) {
  const changed = [];
  const pattern = new RegExp(`(url\\(\\s*['"]?)#${escapeRegExp(old_id)}(['"]?\\s*\\))`, "g");
  for (const element of referencesTo(root, old_id)) {
    for (const [name, value] of referenceValues(element)) {
      let next = value;
      if (value === `#${old_id}`)
        next = `#${new_id}`;
      else
        next = value.replace(pattern, `$1#${new_id}$2`);
      if (next !== value)
        element.setAttribute(name, next);
    }
    changed.push(element);
  }
  return changed;
}

// libs/map-editor/src/lib/ops.ts
var OP_KINDS = [
  "set_attr",
  "set_style_rule",
  "set_text",
  "transform",
  "delete",
  "duplicate",
  "insert_shape",
  "set_id",
  "reorder",
  "group",
  "ungroup",
  "replace_element",
  "replace_path",
  "no_change",
  "ask"
];
var OP_BOOKKEEPING_FIELDS = /* @__PURE__ */ new Set([
  "id",
  "server_issue"
]);
function isOpKind(value) {
  return typeof value === "string" && OP_KINDS.includes(value);
}
function targetsOf(op) {
  switch (op.op) {
    case "set_attr":
    case "set_text":
    case "duplicate":
    case "set_id":
    case "reorder":
    case "ungroup":
    case "replace_element":
    case "replace_path":
      return [op.target];
    case "transform":
    case "delete":
      return [...op.target ? [op.target] : [], ...op.targets || []];
    case "group":
      return [...op.targets];
    default:
      return [];
  }
}
function describeTarget(target) {
  if (!target)
    return "(no target)";
  if (target.id && target.a)
    return `${target.id} (${target.a})`;
  return target.id || target.a || "(no target)";
}

// libs/map-editor/src/lib/value-syntax.ts
var NAMED_COLOURS = new Set("aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkgrey darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow grey honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen none transparent currentcolor inherit".split(" "));
var HEX_COLOUR = /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
var FUNCTION_COLOUR = /^(?:rgba?|hsla?)\(\s*[\d.%-]+\s*[,\s]\s*[\d.%-]+\s*[,\s]\s*[\d.%-]+\s*(?:[,/]\s*[\d.%]+\s*)?\)$/i;
var FRAGMENT_PAINT = /^url\(\s*['"]?#[A-Za-z][A-Za-z0-9_.-]*['"]?\s*\)(?:\s+(?:none|#[0-9a-f]{3,8}|[a-z]+))?$/i;
var NUMBER2 = /^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?$/;
var LENGTH = /^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?(?:px|pt|pc|mm|cm|in|em|rem|ex|%)?$/;
var CLASS_TOKEN = /^-?[A-Za-z_][A-Za-z0-9_-]*$/;
var UNSAFE_TEXT = /url\(|expression\(|behavior:|javascript:|<|>|[\r\n]/i;
function cssSupports(property, value) {
  const css = globalThis.CSS;
  if (!css || typeof css.supports !== "function")
    return null;
  try {
    return css.supports(property, value);
  } catch {
    return null;
  }
}
function isValidPaint(value) {
  const trimmed = value.trim();
  if (!trimmed)
    return false;
  if (FRAGMENT_PAINT.test(trimmed))
    return true;
  if (UNSAFE_TEXT.test(trimmed))
    return false;
  const supported = cssSupports("color", trimmed);
  if (supported !== null)
    return supported;
  return HEX_COLOUR.test(trimmed) || FUNCTION_COLOUR.test(trimmed) || NAMED_COLOURS.has(trimmed.toLowerCase());
}
function isValidNumber(value) {
  return NUMBER2.test(value.trim());
}
function isValidLength(value) {
  return LENGTH.test(value.trim());
}
function isValidOpacity(value) {
  const trimmed = value.trim();
  if (/^\d+(?:\.\d+)?%$/.test(trimmed))
    return parseFloat(trimmed) <= 100;
  if (!NUMBER2.test(trimmed))
    return false;
  const n = parseFloat(trimmed);
  return n >= 0 && n <= 1;
}
function isValidDashArray(value) {
  const trimmed = value.trim();
  if (trimmed === "none")
    return true;
  const parts = trimmed.split(/[\s,]+/).filter((p) => !!p);
  return parts.length > 0 && parts.every((p) => LENGTH.test(p));
}
function isValidClassList(value) {
  const tokens = value.trim().split(/\s+/).filter((t) => !!t);
  return tokens.every((t) => CLASS_TOKEN.test(t));
}
function isValidFontFamily(value) {
  return !!value.trim() && !UNSAFE_TEXT.test(value);
}
function attributeValueIssue(name, value) {
  switch (name) {
    case "fill":
    case "stroke":
      return isValidPaint(value) ? null : `"${value}" is not a colour`;
    case "stroke-width":
    case "rx":
    case "ry":
    case "font-size":
      return isValidLength(value) ? null : `"${value}" is not a length`;
    case "opacity":
    case "fill-opacity":
    case "stroke-opacity":
      return isValidOpacity(value) ? null : `"${value}" is not an opacity between 0 and 1`;
    case "stroke-dasharray":
      return isValidDashArray(value) ? null : `"${value}" is not a dash array`;
    case "class":
      return isValidClassList(value) ? null : `"${value}" is not a class list`;
    case "visibility":
      return ["visible", "hidden", "collapse"].includes(value.trim()) ? null : `"${value}" is not a visibility keyword`;
    case "font-family":
      return isValidFontFamily(value) ? null : `"${value}" is not a font family`;
    case "font-weight":
      return /^(?:normal|bold|bolder|lighter|[1-9]00)$/.test(value.trim()) ? null : `"${value}" is not a font weight`;
    case "text-anchor":
      return ["start", "middle", "end"].includes(value.trim()) ? null : `"${value}" is not a text anchor`;
    default:
      if (name.startsWith("data-")) {
        return /[<>]/.test(value) ? `"${name}" may not contain markup` : null;
      }
      return null;
  }
}
function geometryValueIssue(name, value) {
  switch (name) {
    case "points": {
      const numbers = value.trim().split(/[\s,]+/).filter((p) => !!p);
      return numbers.length >= 4 && numbers.length % 2 === 0 && numbers.every((n) => NUMBER2.test(n)) ? null : `"${value}" is not a points list`;
    }
    case "d":
      return null;
    default:
      return isValidNumber(value) ? null : `${name}="${value}" is not a number`;
  }
}

// libs/map-editor/src/lib/apply.ts
var PAINT_STYLE_ATTRS = /* @__PURE__ */ new Set([
  "fill",
  "stroke",
  "opacity",
  "fill-opacity",
  "stroke-opacity"
]);
var BOOKING_OVERLAY_ID = /^area-.+-status$/i;
var BOOKING_OVERLAY_FILL_OPACITY = "0.3";
function applyOps(doc, ops, options = {}) {
  const geometry = options.geometry || doc.geometry;
  const result = { applied: [], rejected: [], touched: [] };
  const touched = /* @__PURE__ */ new Set();
  ops.forEach((op, index) => {
    if (options.skip?.has(index))
      return;
    const outcome = applyOne(doc, op, geometry);
    if (outcome.ok === false) {
      result.rejected.push({ index, op, reason: outcome.reason });
      return;
    }
    doc.markChanged();
    const op_touched = [
      .../* @__PURE__ */ new Set([
        ...outcome.anchors,
        ...outcome.created || [],
        ...outcome.touched || []
      ])
    ];
    for (const anchor of op_touched)
      touched.add(anchor);
    result.applied.push(__spreadValues({
      index,
      op,
      anchors: outcome.anchors,
      created: outcome.created || [],
      touched: op_touched
    }, outcome.note ? { note: outcome.note } : {}));
  });
  result.touched = [...touched];
  return result;
}
function applyOne(doc, op, geometry) {
  switch (op.op) {
    case "set_attr":
      return setAttr(doc, op);
    case "set_style_rule":
      return setStyleRule(doc, op);
    case "set_text":
      return setText(doc, op);
    case "transform":
      return transform(doc, op, geometry);
    case "delete":
      return remove(doc, op);
    case "duplicate":
      return duplicate(doc, op, geometry);
    case "insert_shape":
      return insertShape(doc, op, geometry);
    case "set_id":
      return setId(doc, op);
    case "reorder":
      return reorder(doc, op);
    case "group":
      return group(doc, op);
    case "ungroup":
      return ungroup(doc, op);
    case "replace_element":
      return replaceElement(doc, op);
    case "replace_path":
      return replacePath(doc, op);
    case "no_change":
    case "ask":
      return { ok: true, anchors: [] };
    default:
      return {
        ok: false,
        reason: `unknown op "${op.op}"`
      };
  }
}
function resolveAll(doc, targets) {
  const elements = [];
  for (const target of targets) {
    const resolution = doc.resolve(target);
    if (resolution.ok === false)
      return { error: resolution.error };
    if (!elements.includes(resolution.element))
      elements.push(resolution.element);
  }
  return { elements };
}
function isRoot(doc, element) {
  return element === doc.root;
}
function prependTransform(element, matrix) {
  const existing = element.getAttribute("transform") || "";
  element.setAttribute("transform", `${formatTransform(matrix)} ${existing}`.trim());
}
function toParentSpace(element, root_space, geometry, doc) {
  const parent = element.parentElement;
  if (!parent || isRoot(doc, parent))
    return { matrix: root_space, converted: true };
  const parent_ctm = geometry.ctmOf(parent);
  if (!parent_ctm)
    return { matrix: root_space, converted: false };
  if (isIdentity(parent_ctm))
    return { matrix: root_space, converted: true };
  const converted = changeOfBasis(root_space, parent_ctm);
  return converted ? { matrix: converted, converted: true } : { matrix: root_space, converted: false };
}
function setAttr(doc, op) {
  const resolution = doc.resolve(op.target);
  if (resolution.ok === false)
    return { ok: false, reason: resolution.error };
  const element = resolution.element;
  const name = (op.name || "").trim();
  if (name === "viewBox") {
    if (!isRoot(doc, element))
      return {
        ok: false,
        reason: "canvas bounds can only be changed on the SVG root"
      };
    const reason = canvasExpansionIssue(doc.view_box, op.value);
    if (reason)
      return { ok: false, reason };
    element.setAttribute("viewBox", op.value || "");
    return { ok: true, anchors: [doc.anchorOf(element)] };
  }
  if (!isAllowedAttributeName(name)) {
    return { ok: false, reason: `attribute "${name}" is not editable` };
  }
  const style = element.style;
  if (op.value === null || op.value === void 0) {
    element.removeAttribute(name);
    if (PAINT_STYLE_ATTRS.has(name) && style) {
      style.removeProperty(name);
      if (!style.length)
        element.removeAttribute("style");
    }
  } else {
    const value = `${op.value}`;
    const issue2 = attributeValueIssue(name, value);
    if (issue2)
      return { ok: false, reason: issue2 };
    element.setAttribute(name, value);
    if (PAINT_STYLE_ATTRS.has(name) && style && (inlineStyleValue(element, name) || ruleDeclares(doc, element, name))) {
      style.setProperty(name, value);
    }
  }
  return { ok: true, anchors: [doc.anchorOf(element)] };
}
function ruleDeclares(doc, element, name) {
  for (const rule of doc.styleRules()) {
    if (!(name in rule.declarations))
      continue;
    for (const selector of rule.selectors) {
      try {
        if (element.matches(selector))
          return true;
      } catch {
      }
    }
  }
  return false;
}
function styleElementOf(doc) {
  return doc.root.querySelector("style");
}
function mergeDeclarations(body, declarations) {
  const merged = /* @__PURE__ */ new Map();
  for (const part of body.split(";")) {
    const index = part.indexOf(":");
    if (index < 0)
      continue;
    const name = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    if (name && value)
      merged.set(name, value);
  }
  for (const [name, value] of Object.entries(declarations)) {
    merged.set(name, value);
  }
  return [...merged].map(([name, value]) => `${name}:${value}`).join(";");
}
function upsertStyleRule(css, selector, declarations) {
  const pattern = new RegExp(`(^|[};])(\\s*)(${escapeRegExp(selector)})\\s*\\{([^{}]*)\\}`);
  const match = css.match(pattern);
  if (match && match.index !== void 0) {
    const block2 = `${match[1]}${match[2]}${selector}{${mergeDeclarations(match[4], declarations)}}`;
    return css.slice(0, match.index) + block2 + css.slice(match.index + match[0].length);
  }
  const block = `${selector}{${formatDeclarations(declarations)}}`;
  return css.trim() ? `${css.replace(/\s+$/, "")}
${block}` : block;
}
function setStyleRule(doc, op) {
  const selector = (op.selector || "").trim();
  if (!selector || selector === "*" || isUnsafeCssValue(selector) || selector.includes(",")) {
    return { ok: false, reason: `selector "${selector}" is not allowed` };
  }
  if (!isValidSelector(doc.root, selector)) {
    return { ok: false, reason: `selector "${selector}" does not parse` };
  }
  if (!Array.isArray(op.declarations) || !op.declarations.length) {
    return { ok: false, reason: "no declarations" };
  }
  const declarations = {};
  for (const { name, value } of op.declarations) {
    const property = typeof name === "string" ? name.trim() : "";
    if (!STYLE_PROPERTY_ALLOW_LIST.has(property)) {
      return {
        ok: false,
        reason: `property "${property}" is not editable`
      };
    }
    if (typeof value !== "string" || isUnsafeCssValue(value)) {
      return {
        ok: false,
        reason: `value for "${property}" is not allowed`
      };
    }
    const issue2 = attributeValueIssue(property, value);
    if (issue2)
      return { ok: false, reason: issue2 };
    declarations[property] = value.trim();
  }
  let style = styleElementOf(doc);
  const created = [];
  if (!style) {
    style = doc.root.ownerDocument.createElementNS(SVG_NS, "style");
    doc.root.insertBefore(style, doc.root.firstChild);
    created.push(...doc.assignAnchors(style));
  }
  style.textContent = upsertStyleRule(style.textContent || "", selector, declarations);
  return { ok: true, anchors: [doc.anchorOf(style)], created };
}
function setText(doc, op) {
  const resolution = doc.resolve(op.target);
  if (resolution.ok === false)
    return { ok: false, reason: resolution.error };
  const element = resolution.element;
  if (!TEXT_TAGS.has(element.localName)) {
    return {
      ok: false,
      reason: `set_text needs a text or tspan element, not <${element.localName}>`
    };
  }
  if (typeof op.text !== "string")
    return { ok: false, reason: "text must be a string" };
  const removed = MapDocument.subtree(element).slice(1).map((line) => doc.anchorOf(line));
  const spans = writeTextLines(element, op.text);
  const created = spans.flatMap((span) => doc.assignAnchors(span));
  return {
    ok: true,
    anchors: [doc.anchorOf(element)],
    created,
    touched: removed
  };
}
function isPoint(value) {
  return Array.isArray(value) && value.length === 2 && value.every((n) => typeof n === "number" && Number.isFinite(n));
}
function transform(doc, op, geometry) {
  const targets = targetsOf(op);
  if (!targets.length)
    return { ok: false, reason: "transform names no target" };
  if (targets.length > MAX_TRANSFORM_TARGETS) {
    return {
      ok: false,
      reason: `transform names more than ${MAX_TRANSFORM_TARGETS} targets`
    };
  }
  if (op.translate != null && !isPoint(op.translate)) {
    return { ok: false, reason: "translate must be [dx, dy]" };
  }
  if (op.scale != null && (!isPoint(op.scale) || !op.scale[0] || !op.scale[1])) {
    return {
      ok: false,
      reason: "scale must be [sx, sy] with non-zero factors"
    };
  }
  if (op.rotate != null && !Number.isFinite(op.rotate)) {
    return { ok: false, reason: "rotate must be a number of degrees" };
  }
  if (op.origin != null && !isPoint(op.origin)) {
    return { ok: false, reason: "origin must be [x, y]" };
  }
  if (!op.translate && !op.scale && !op.rotate) {
    return {
      ok: false,
      reason: "transform has no translate, scale or rotate"
    };
  }
  const resolved = resolveAll(doc, targets);
  if ("error" in resolved)
    return { ok: false, reason: resolved.error };
  if (resolved.elements.some((element) => isRoot(doc, element))) {
    return { ok: false, reason: "the root cannot be transformed" };
  }
  const root_space = composeTransform(op);
  const notes = [];
  for (const element of resolved.elements) {
    const { matrix, converted } = toParentSpace(element, root_space, geometry, doc);
    prependTransform(element, matrix);
    if (!converted)
      notes.push(doc.anchorOf(element));
  }
  return __spreadValues({
    ok: true,
    anchors: resolved.elements.map((element) => doc.anchorOf(element))
  }, notes.length ? {
    note: `applied in the element's own space, parent transform unknown: ${notes.join(", ")}`
  } : {});
}
function remove(doc, op) {
  const targets = targetsOf(op);
  if (!targets.length)
    return { ok: false, reason: "delete names no target" };
  const resolved = resolveAll(doc, targets);
  if ("error" in resolved)
    return { ok: false, reason: resolved.error };
  const style_count = doc.root.querySelectorAll("style").length;
  for (const element of resolved.elements) {
    if (isRoot(doc, element))
      return { ok: false, reason: "the root cannot be deleted" };
    if (element.localName === "defs")
      return { ok: false, reason: "<defs> cannot be deleted" };
    if (element.localName === "style" && style_count === 1) {
      return { ok: false, reason: "the only <style> cannot be deleted" };
    }
  }
  const removed = [];
  for (const element of resolved.elements) {
    const parent = element.parentElement;
    if (parent) {
      doc.removed_positions.set(doc.anchorOf(element), {
        parent,
        next: element.nextElementSibling
      });
    }
  }
  for (const element of resolved.elements) {
    for (const descendant of MapDocument.subtree(element)) {
      removed.push(doc.anchorOf(descendant));
    }
    element.remove();
  }
  return {
    ok: true,
    anchors: resolved.elements.map((element) => doc.anchorOf(element)),
    touched: removed
  };
}
function duplicate(doc, op, geometry) {
  const resolution = doc.resolve(op.target);
  if (resolution.ok === false)
    return { ok: false, reason: resolution.error };
  const source = resolution.element;
  if (isRoot(doc, source))
    return { ok: false, reason: "the root cannot be duplicated" };
  if (!source.parentElement)
    return { ok: false, reason: "the target has no parent" };
  const count = op.count ?? 1;
  if (!Number.isInteger(count) || count < 1 || count > MAX_DUPLICATE_COUNT) {
    return {
      ok: false,
      reason: `count must be 1 to ${MAX_DUPLICATE_COUNT}`
    };
  }
  if (!isPoint(op.translate))
    return { ok: false, reason: "translate must be [dx, dy]" };
  const existing = idsIn(doc.root);
  const source_id = source.getAttribute("id");
  const ids = [];
  let next_number = op.id_pattern ? highestInPattern(existing, op.id_pattern) + 1 : 0;
  for (let k = 0; k < count; k++) {
    let id = null;
    if (op.id_pattern) {
      id = expandIdPattern(op.id_pattern, next_number++);
      while (existing.has(id))
        id = expandIdPattern(op.id_pattern, next_number++);
    } else if (op.new_id) {
      id = k === 0 ? op.new_id : `${op.new_id}-${k + 1}`;
    } else if (source_id) {
      id = generateId(existing, DEFAULT_ID_PREFIX);
    }
    if (id !== null) {
      const issue2 = idIssue(id);
      if (issue2)
        return { ok: false, reason: issue2 };
      if (existing.has(id))
        return { ok: false, reason: `id "${id}" already exists` };
      existing.add(id);
    }
    ids.push(id);
  }
  const created = [];
  let previous = source;
  const [dx, dy] = op.translate;
  for (let k = 0; k < count; k++) {
    const clone2 = source.cloneNode(true);
    for (const descendant of Array.from(clone2.querySelectorAll("[id]"))) {
      descendant.removeAttribute("id");
    }
    stripEditorAttributes(clone2);
    const id = ids[k];
    if (id)
      clone2.setAttribute("id", id);
    else
      clone2.removeAttribute("id");
    if (dx || dy) {
      const { matrix } = toParentSpace(source, translation(dx * (k + 1), dy * (k + 1)), geometry, doc);
      prependTransform(clone2, matrix);
    }
    previous.after(clone2);
    previous = clone2;
    created.push(...doc.assignAnchors(clone2));
  }
  return { ok: true, anchors: [doc.anchorOf(source)], created };
}
function insertShape(doc, op, geometry) {
  let parent = doc.root;
  if (op.parent) {
    const resolution = doc.resolve(op.parent);
    if (resolution.ok === false)
      return { ok: false, reason: resolution.error };
    parent = resolution.element;
  }
  if (!isRoot(doc, parent) && parent.localName !== "g") {
    return {
      ok: false,
      reason: `parent must be the root or a <g>, not <${parent.localName}>`
    };
  }
  let after = null;
  let before = null;
  let placement_note;
  if (op.after) {
    const resolution = doc.resolve(op.after);
    const former = resolution.ok === false && op.after.a ? doc.positionOfRemoved(op.after.a) : null;
    if (former) {
      parent = former.parent;
      before = former.next;
      placement_note = `placed where ${op.after.a} was, which an earlier change deleted`;
    } else if (resolution.ok === false) {
      return { ok: false, reason: resolution.error };
    } else {
      after = resolution.element;
      if (after.parentElement !== parent) {
        return {
          ok: false,
          reason: "after must be a child of the parent"
        };
      }
    }
  }
  if (!SHAPE_KINDS.includes(op.kind)) {
    return { ok: false, reason: `kind "${op.kind}" cannot be inserted` };
  }
  const geometry_attrs = SHAPE_GEOMETRY_ATTRS[op.kind];
  const attrs = [];
  for (const pair of op.attrs || []) {
    const name = typeof pair?.name === "string" ? pair.name.trim() : "";
    const value = `${pair?.value ?? ""}`;
    if (geometry_attrs.includes(name)) {
      const issue3 = name === "d" ? checkPathData(value).error : geometryValueIssue(name, value);
      if (issue3)
        return { ok: false, reason: issue3 };
    } else if (isAllowedAttributeName(name)) {
      const issue3 = attributeValueIssue(name, value);
      if (issue3)
        return { ok: false, reason: issue3 };
    } else {
      return {
        ok: false,
        reason: `attribute "${name}" is not allowed on a ${op.kind}`
      };
    }
    attrs.push([name, value]);
  }
  if (op.kind === "path" && !attrs.some(([name]) => name === "d")) {
    return { ok: false, reason: "a path needs d" };
  }
  const existing = idsIn(doc.root);
  const id = op.new_id || generateId(existing, DEFAULT_ID_PREFIX);
  const issue2 = idIssue(id);
  if (issue2)
    return { ok: false, reason: issue2 };
  if (existing.has(id))
    return { ok: false, reason: `id "${id}" already exists` };
  const element = doc.root.ownerDocument.createElementNS(SVG_NS, op.kind);
  for (const [name, value] of attrs)
    element.setAttribute(name, value);
  element.setAttribute("id", id);
  for (const name of ["opacity", "fill-opacity", "stroke-opacity"]) {
    const value = element.getAttribute(name);
    if (value !== null)
      element.style.setProperty(name, value);
  }
  if (BOOKING_OVERLAY_ID.test(id) && ["rect", "path", "polygon"].includes(op.kind) && !element.hasAttribute("opacity") && !element.hasAttribute("fill-opacity")) {
    element.setAttribute("fill-opacity", BOOKING_OVERLAY_FILL_OPACITY);
    element.style.setProperty("fill-opacity", BOOKING_OVERLAY_FILL_OPACITY);
  }
  if (op.kind === "text" && typeof op.text === "string")
    writeTextLines(element, op.text);
  let note = placement_note;
  if (!isRoot(doc, parent)) {
    const parent_ctm = geometry.ctmOf(parent);
    if (!parent_ctm)
      note = "parent transform unknown; coordinates taken as parent space";
    else if (!isIdentity(parent_ctm)) {
      const inverse = invert(parent_ctm);
      if (inverse) {
        element.setAttribute("transform", formatTransform(inverse));
        note = "parent is transformed; the shape carries the inverse so its numbers stay in root units";
      }
    }
  }
  if (after)
    after.after(element);
  else if (before)
    parent.insertBefore(element, before);
  else
    parent.appendChild(element);
  const created = doc.assignAnchors(element);
  return __spreadValues({ ok: true, anchors: created, created }, note ? { note } : {});
}
var LINE_HEIGHT = "1.2em";
function textLines(text2) {
  const lines = text2.split(/\r?\n/);
  while (lines.length > 1 && !lines[lines.length - 1].trim())
    lines.pop();
  return lines;
}
function writeTextLines(element, text2) {
  const lines = textLines(text2);
  if (lines.length <= 1 || element.localName !== "text") {
    element.textContent = text2;
    return [];
  }
  element.textContent = "";
  const x = element.getAttribute("x");
  const owner = element.ownerDocument;
  const spans = [];
  lines.forEach((line, index) => {
    const span = owner.createElementNS(SVG_NS, "tspan");
    if (x !== null)
      span.setAttribute("x", x);
    if (index > 0)
      span.setAttribute("dy", LINE_HEIGHT);
    span.textContent = line;
    element.appendChild(span);
    spans.push(span);
  });
  return spans;
}
function setId(doc, op) {
  const resolution = doc.resolve(op.target);
  if (resolution.ok === false)
    return { ok: false, reason: resolution.error };
  const element = resolution.element;
  const old_id = element.getAttribute("id");
  const anchor = doc.anchorOf(element);
  if (op.new_id === null || op.new_id === void 0) {
    if (!old_id)
      return { ok: true, anchors: [anchor] };
    const dangling = referencesTo(doc.root, old_id).length;
    element.removeAttribute("id");
    return __spreadValues({
      ok: true,
      anchors: [anchor]
    }, dangling ? { note: `${dangling} reference(s) to #${old_id} now dangle` } : {});
  }
  const new_id = `${op.new_id}`;
  const issue2 = idIssue(new_id);
  if (issue2)
    return { ok: false, reason: issue2 };
  if (new_id === old_id)
    return { ok: true, anchors: [anchor] };
  const holder = doc.byId(new_id);
  if (holder && holder !== element)
    return { ok: false, reason: `id "${new_id}" already exists` };
  element.setAttribute("id", new_id);
  const touched = old_id ? rewriteReferences(doc.root, old_id, new_id).map((changed) => doc.anchorOf(changed)) : [];
  return { ok: true, anchors: [anchor], touched };
}
function reorder(doc, op) {
  const resolution = doc.resolve(op.target);
  if (resolution.ok === false)
    return { ok: false, reason: resolution.error };
  const element = resolution.element;
  if (isRoot(doc, element))
    return { ok: false, reason: "the root cannot be reordered" };
  const parent = element.parentElement;
  if (!parent)
    return { ok: false, reason: "the target has no parent" };
  const modes = [op.before, op.after, op.position].filter((v2) => v2 != null).length;
  if (modes !== 1)
    return {
      ok: false,
      reason: "reorder needs exactly one of before, after or position"
    };
  if (op.position) {
    if (op.position === "first")
      parent.insertBefore(element, parent.firstChild);
    else if (op.position === "last")
      parent.appendChild(element);
    else
      return {
        ok: false,
        reason: `position "${op.position}" is not first or last`
      };
    return { ok: true, anchors: [doc.anchorOf(element)] };
  }
  const sibling_target = op.before || op.after;
  const sibling = doc.resolve(sibling_target);
  if (sibling.ok === false)
    return { ok: false, reason: sibling.error };
  if (sibling.element === element)
    return { ok: false, reason: "cannot reorder relative to itself" };
  if (sibling.element.parentElement !== parent) {
    return { ok: false, reason: "reorder only moves among siblings" };
  }
  if (op.before)
    parent.insertBefore(element, sibling.element);
  else
    sibling.element.after(element);
  return {
    ok: true,
    anchors: [doc.anchorOf(element)],
    touched: [doc.anchorOf(sibling.element)]
  };
}
function documentOrder(elements) {
  return [...elements].sort((a, b) => a === b ? 0 : a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
}
function group(doc, op) {
  if (!Array.isArray(op.targets) || !op.targets.length) {
    return { ok: false, reason: "group names no targets" };
  }
  const resolved = resolveAll(doc, op.targets);
  if ("error" in resolved)
    return { ok: false, reason: resolved.error };
  const elements = documentOrder(resolved.elements);
  if (elements.some((element) => isRoot(doc, element))) {
    return { ok: false, reason: "the root cannot be grouped" };
  }
  const parent = elements[0].parentElement;
  if (!parent || elements.some((element) => element.parentElement !== parent)) {
    return { ok: false, reason: "group targets must share one parent" };
  }
  const existing = idsIn(doc.root);
  const id = op.new_id || generateId(existing, DEFAULT_ID_PREFIX);
  const issue2 = idIssue(id);
  if (issue2)
    return { ok: false, reason: issue2 };
  if (existing.has(id))
    return { ok: false, reason: `id "${id}" already exists` };
  const wrapper = doc.root.ownerDocument.createElementNS(SVG_NS, "g");
  wrapper.setAttribute("id", id);
  parent.insertBefore(wrapper, elements[0]);
  for (const element of elements)
    wrapper.appendChild(element);
  const created = [doc.assignAnchor(wrapper)];
  return {
    ok: true,
    anchors: elements.map((element) => doc.anchorOf(element)),
    created
  };
}
function ungroup(doc, op) {
  const resolution = doc.resolve(op.target);
  if (resolution.ok === false)
    return { ok: false, reason: resolution.error };
  const element = resolution.element;
  if (element.localName !== "g") {
    return {
      ok: false,
      reason: `ungroup needs a <g>, not <${element.localName}>`
    };
  }
  const parent = element.parentElement;
  if (!parent)
    return { ok: false, reason: "the group has no parent" };
  const group_transform = (element.getAttribute("transform") || "").trim();
  const children = Array.from(element.children);
  for (const child of children) {
    if (group_transform) {
      const own = child.getAttribute("transform") || "";
      child.setAttribute("transform", `${group_transform} ${own}`.trim());
    }
    parent.insertBefore(child, element);
  }
  element.remove();
  return {
    ok: true,
    anchors: [doc.anchorOf(element)],
    touched: children.map((child) => doc.anchorOf(child))
  };
}
function replaceElement(doc, op) {
  const resolution = doc.resolve(op.target);
  if (resolution.ok === false)
    return { ok: false, reason: resolution.error };
  const target = resolution.element;
  if (isRoot(doc, target))
    return { ok: false, reason: "the root cannot be replaced" };
  if (target.localName === "defs" || target.localName === "style") {
    return {
      ok: false,
      reason: `<${target.localName}> cannot be replaced`
    };
  }
  if (typeof op.markup !== "string" || !op.markup.trim()) {
    return { ok: false, reason: "markup is empty" };
  }
  if (new TextEncoder().encode(op.markup).length > MAX_REPLACEMENT_MARKUP_BYTES) {
    return {
      ok: false,
      reason: `markup is over ${MAX_REPLACEMENT_MARKUP_BYTES / 1024} KB`
    };
  }
  const purified = purifyMarkup(op.markup);
  if (!purified.element)
    return { ok: false, reason: purified.error || "markup rejected" };
  const replacement = doc.root.ownerDocument.importNode(purified.element, true);
  const old_id = target.getAttribute("id");
  const markup_id = replacement.getAttribute("id");
  const notes = [];
  const outgoing = new Set(idsIn(target));
  const existing = new Set([...idsIn(doc.root)].filter((id) => !outgoing.has(id)));
  if (old_id) {
    replacement.setAttribute("id", old_id);
    if (markup_id && markup_id !== old_id) {
      notes.push(`markup id "${markup_id}" ignored; the target keeps "${old_id}"`);
    }
  } else if (markup_id) {
    const issue2 = idIssue(markup_id);
    if (issue2)
      return { ok: false, reason: issue2 };
    if (existing.has(markup_id))
      return { ok: false, reason: `id "${markup_id}" already exists` };
  }
  for (const descendant of Array.from(replacement.querySelectorAll("[id]"))) {
    const id = descendant.getAttribute("id") || "";
    const issue2 = idIssue(id);
    if (issue2)
      return { ok: false, reason: issue2 };
    if (existing.has(id) || id === old_id) {
      return { ok: false, reason: `id "${id}" already exists` };
    }
    existing.add(id);
  }
  const anchor = doc.anchorOf(target);
  const created = doc.assignAnchors(replacement).slice(1);
  replacement.setAttribute(ANCHOR_ATTR, anchor);
  target.replaceWith(replacement);
  if (purified.report.removed.length) {
    notes.push(`sanitiser removed ${purified.report.removed.map((entry) => entry.name || entry.tag).join(", ")}`);
  }
  return __spreadValues({
    ok: true,
    anchors: [anchor],
    created
  }, notes.length ? { note: notes.join("; ") } : {});
}
function replacePath(doc, op) {
  const resolution = doc.resolve(op.target);
  if (resolution.ok === false)
    return { ok: false, reason: resolution.error };
  const element = resolution.element;
  if (element.localName !== "path") {
    return {
      ok: false,
      reason: `replace_path needs a <path>, not <${element.localName}>`
    };
  }
  const check = checkPathData(op.d);
  if (!check.ok)
    return { ok: false, reason: check.error || "path data is invalid" };
  element.setAttribute("d", op.d.trim());
  return { ok: true, anchors: [doc.anchorOf(element)] };
}

// libs/map-editor/src/lib/ops-schema.json
var ops_schema_default = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  title: "map_edit_proposal",
  description: "Operations the map editor applies to a level's SVG. Targets name elements from the index by anchor or id; coordinates are viewBox user units.",
  type: "object",
  properties: {
    schema_version: {
      type: "integer",
      enum: [1]
    },
    summary: {
      type: "string",
      description: "One sentence for the person."
    },
    ops: {
      type: "array",
      items: {
        anyOf: [
          {
            type: "object",
            description: "Set or remove one presentation attribute on one element.",
            properties: {
              op: {
                type: "string",
                enum: ["set_attr"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              target: {
                $ref: "#/$defs/target"
              },
              name: {
                type: "string",
                description: "fill, stroke, stroke-width, stroke-dasharray, fill-opacity, stroke-opacity, opacity, class, visibility, rx, ry, font-size, font-family, font-weight, text-anchor or data-*"
              },
              value: {
                type: ["string", "null"],
                description: "null removes the attribute"
              }
            },
            required: ["op", "why", "target", "name", "value"],
            additionalProperties: false
          },
          {
            type: "object",
            description: "Edit or add a rule in the map's <style>; declarations are merged into an existing rule with the same selector.",
            properties: {
              op: {
                type: "string",
                enum: ["set_style_rule"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              selector: {
                type: "string",
                description: "CSS selector of the rule in the map's <style>; never *"
              },
              declarations: {
                type: "array",
                items: {
                  $ref: "#/$defs/name_value"
                },
                description: "Properties from the set_attr allow-list"
              }
            },
            required: ["op", "why", "selector", "declarations"],
            additionalProperties: false
          },
          {
            type: "object",
            description: "Replace the text content of a text or tspan element.",
            properties: {
              op: {
                type: "string",
                enum: ["set_text"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              target: {
                $ref: "#/$defs/target"
              },
              text: {
                type: "string"
              }
            },
            required: ["op", "why", "target", "text"],
            additionalProperties: false
          },
          {
            type: "object",
            description: "Move, scale or rotate elements in viewBox user units by prepending to their transform; geometry attributes are never rewritten.",
            properties: {
              op: {
                type: "string",
                enum: ["transform"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              target: {
                anyOf: [
                  {
                    $ref: "#/$defs/target"
                  },
                  {
                    type: "null"
                  }
                ]
              },
              targets: {
                anyOf: [
                  {
                    type: "array",
                    items: {
                      $ref: "#/$defs/target"
                    }
                  },
                  {
                    type: "null"
                  }
                ]
              },
              translate: {
                anyOf: [
                  {
                    type: "array",
                    items: {
                      type: "number"
                    },
                    description: "[x, y] in viewBox user units"
                  },
                  {
                    type: "null"
                  }
                ]
              },
              scale: {
                anyOf: [
                  {
                    type: "array",
                    items: {
                      type: "number"
                    },
                    description: "[x, y] in viewBox user units"
                  },
                  {
                    type: "null"
                  }
                ]
              },
              rotate: {
                type: ["number", "null"],
                description: "degrees, clockwise"
              },
              origin: {
                anyOf: [
                  {
                    type: "array",
                    items: {
                      type: "number"
                    },
                    description: "[x, y] in viewBox user units"
                  },
                  {
                    type: "null"
                  }
                ],
                description: "centre of scale and rotate, in viewBox user units"
              }
            },
            required: [
              "op",
              "why",
              "target",
              "targets",
              "translate",
              "scale",
              "rotate",
              "origin"
            ],
            additionalProperties: false
          },
          {
            type: "object",
            description: "Remove elements and their descendants.",
            properties: {
              op: {
                type: "string",
                enum: ["delete"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              target: {
                anyOf: [
                  {
                    $ref: "#/$defs/target"
                  },
                  {
                    type: "null"
                  }
                ]
              },
              targets: {
                anyOf: [
                  {
                    type: "array",
                    items: {
                      $ref: "#/$defs/target"
                    }
                  },
                  {
                    type: "null"
                  }
                ]
              }
            },
            required: ["op", "why", "target", "targets"],
            additionalProperties: false
          },
          {
            type: "object",
            description: "Copy an element one or more times, each copy offset by translate from the previous.",
            properties: {
              op: {
                type: "string",
                enum: ["duplicate"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              target: {
                $ref: "#/$defs/target"
              },
              new_id: {
                type: ["string", "null"]
              },
              translate: {
                type: "array",
                items: {
                  type: "number"
                },
                description: "[x, y] in viewBox user units"
              },
              count: {
                type: ["integer", "null"],
                description: "copies, 1 to 40; default 1"
              },
              id_pattern: {
                type: ["string", "null"],
                description: "id pattern such as table-01.{n:03}, continuing after the highest existing number"
              }
            },
            required: [
              "op",
              "why",
              "target",
              "new_id",
              "translate",
              "count",
              "id_pattern"
            ],
            additionalProperties: false
          },
          {
            type: "object",
            description: "Create a new element in viewBox user units.",
            properties: {
              op: {
                type: "string",
                enum: ["insert_shape"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              parent: {
                anyOf: [
                  {
                    $ref: "#/$defs/target"
                  },
                  {
                    type: "null"
                  }
                ],
                description: "root when null; must be the root or a <g>"
              },
              after: {
                anyOf: [
                  {
                    $ref: "#/$defs/target"
                  },
                  {
                    type: "null"
                  }
                ],
                description: "sibling to insert after; appended to the parent when null"
              },
              kind: {
                type: "string",
                enum: [
                  "rect",
                  "circle",
                  "ellipse",
                  "line",
                  "polygon",
                  "polyline",
                  "path",
                  "text",
                  "g"
                ]
              },
              attrs: {
                type: "array",
                items: {
                  $ref: "#/$defs/name_value"
                },
                description: "geometry attributes of the kind plus the set_attr allow-list, in viewBox user units"
              },
              new_id: {
                type: ["string", "null"]
              },
              text: {
                type: ["string", "null"],
                description: "text content for kind text"
              }
            },
            required: [
              "op",
              "why",
              "parent",
              "after",
              "kind",
              "attrs",
              "new_id",
              "text"
            ],
            additionalProperties: false
          },
          {
            type: "object",
            description: `Rename an element's id, rewriting url(#old) and href="#old" references.`,
            properties: {
              op: {
                type: "string",
                enum: ["set_id"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              target: {
                $ref: "#/$defs/target"
              },
              new_id: {
                type: ["string", "null"],
                description: "null removes the id"
              }
            },
            required: ["op", "why", "target", "new_id"],
            additionalProperties: false
          },
          {
            type: "object",
            description: "Move an element among its siblings (paint order); exactly one of before, after or position.",
            properties: {
              op: {
                type: "string",
                enum: ["reorder"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              target: {
                $ref: "#/$defs/target"
              },
              before: {
                anyOf: [
                  {
                    $ref: "#/$defs/target"
                  },
                  {
                    type: "null"
                  }
                ]
              },
              after: {
                anyOf: [
                  {
                    $ref: "#/$defs/target"
                  },
                  {
                    type: "null"
                  }
                ]
              },
              position: {
                type: ["string", "null"],
                enum: ["first", "last", null]
              }
            },
            required: [
              "op",
              "why",
              "target",
              "before",
              "after",
              "position"
            ],
            additionalProperties: false
          },
          {
            type: "object",
            description: "Wrap sibling elements in a new <g>.",
            properties: {
              op: {
                type: "string",
                enum: ["group"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              targets: {
                type: "array",
                items: {
                  $ref: "#/$defs/target"
                }
              },
              new_id: {
                type: ["string", "null"]
              }
            },
            required: ["op", "why", "targets", "new_id"],
            additionalProperties: false
          },
          {
            type: "object",
            description: "Lift a <g>'s children into its parent, folding the group's transform into each child.",
            properties: {
              op: {
                type: "string",
                enum: ["ungroup"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              target: {
                $ref: "#/$defs/target"
              }
            },
            required: ["op", "why", "target"],
            additionalProperties: false
          },
          {
            type: "object",
            description: "Swap an element for new markup.",
            properties: {
              op: {
                type: "string",
                enum: ["replace_element"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              target: {
                $ref: "#/$defs/target"
              },
              markup: {
                type: "string",
                description: "one SVG element, under 16 KB; keeps the target's id"
              }
            },
            required: ["op", "why", "target", "markup"],
            additionalProperties: false
          },
          {
            type: "object",
            description: "Replace the path data of a <path>.",
            properties: {
              op: {
                type: "string",
                enum: ["replace_path"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              target: {
                $ref: "#/$defs/target"
              },
              d: {
                type: "string"
              }
            },
            required: ["op", "why", "target", "d"],
            additionalProperties: false
          },
          {
            type: "object",
            description: "Nothing needs to change.",
            properties: {
              op: {
                type: "string",
                enum: ["no_change"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              reason: {
                type: "string"
              }
            },
            required: ["op", "why", "reason"],
            additionalProperties: false
          },
          {
            type: "object",
            description: "The instruction is ambiguous or the target cannot be identified; ask the person.",
            properties: {
              op: {
                type: "string",
                enum: ["ask"]
              },
              why: {
                type: "string",
                description: "One sentence for the person reviewing the change."
              },
              question: {
                type: "string"
              }
            },
            required: ["op", "why", "question"],
            additionalProperties: false
          }
        ]
      }
    },
    questions: {
      type: "array",
      items: {
        type: "string"
      }
    }
  },
  required: ["schema_version", "summary", "ops", "questions"],
  additionalProperties: false,
  $defs: {
    target: {
      type: "object",
      description: "At least one of a (anchor) or id; when both are given they must be the same element. h is the element's content hash from the index.",
      properties: {
        a: {
          type: ["string", "null"]
        },
        id: {
          type: ["string", "null"]
        },
        h: {
          type: ["string", "null"]
        }
      },
      required: ["a", "id", "h"],
      additionalProperties: false
    },
    name_value: {
      type: "object",
      properties: {
        name: {
          type: "string"
        },
        value: {
          type: "string"
        }
      },
      required: ["name", "value"],
      additionalProperties: false
    }
  }
};

// libs/map-editor/src/lib/ops-schema.ts
var OPS_SCHEMA = ops_schema_default;

// libs/map-editor/src/lib/validate.ts
var ROOT_INVARIANT_ATTRS = [
  "viewBox",
  "width",
  "height",
  "preserveAspectRatio",
  "xmlns"
];
var PAINT_PROPERTIES = /* @__PURE__ */ new Set([
  "fill",
  "stroke",
  "stroke-width",
  "stroke-dasharray",
  "fill-opacity",
  "stroke-opacity",
  "opacity",
  "font-size",
  "font-family",
  "font-weight"
]);
var INLINE_STYLE_PROPERTIES = /* @__PURE__ */ new Set(["fill", "stroke"]);
function issue(level, code, message) {
  return { level, code, message };
}
function variantFor(kind) {
  return OPS_SCHEMA.properties.ops.items.anyOf.find((candidate) => candidate.properties.op.enum[0] === kind);
}
function allowsNull(schema) {
  if (Array.isArray(schema.type))
    return schema.type.includes("null");
  if (schema.type === "null")
    return true;
  return !!schema.anyOf?.some((option) => allowsNull(option));
}
function definitionFor(ref) {
  const definition = OPS_SCHEMA.$defs[ref.replace("#/$defs/", "")];
  return definition ? definition : null;
}
function objectMatches(value, schema) {
  if (typeof value !== "object" || value === null || Array.isArray(value))
    return false;
  const properties = schema.properties || {};
  const record = value;
  if (Object.keys(record).some((key) => !(key in properties)))
    return false;
  return Object.entries(properties).every(([key, property]) => {
    const member = record[key];
    if (member === void 0 || member === null)
      return allowsNull(property);
    return typeMatches(member, property);
  });
}
function typeMatches(value, schema) {
  if (schema.$ref) {
    const definition = definitionFor(schema.$ref);
    return definition ? objectMatches(value, definition) : typeof value === "object" && value !== null && !Array.isArray(value);
  }
  if (schema.anyOf)
    return schema.anyOf.some((option) => typeMatches(value, option));
  const types = Array.isArray(schema.type) ? schema.type : schema.type ? [schema.type] : [];
  if (schema.enum && !schema.enum.includes(value))
    return false;
  if (!types.length)
    return true;
  return types.some((type) => {
    switch (type) {
      case "string":
        return typeof value === "string";
      case "number":
        return typeof value === "number" && Number.isFinite(value);
      case "integer":
        return Number.isInteger(value);
      case "boolean":
        return typeof value === "boolean";
      case "array":
        return Array.isArray(value) && (!schema.items || value.every((item) => typeMatches(item, schema.items)));
      case "object":
        return schema.properties ? objectMatches(value, schema) : typeof value === "object" && value !== null && !Array.isArray(value);
      case "null":
        return value === null;
      default:
        return false;
    }
  });
}
function schemaIssues(op) {
  if (typeof op !== "object" || op === null || Array.isArray(op)) {
    return [issue("error", "schema", "op is not an object")];
  }
  const record = op;
  if (!isOpKind(record["op"])) {
    return [
      issue("error", "unknown_op", `"${String(record["op"])}" is not an operation`)
    ];
  }
  const variant = variantFor(record["op"]);
  if (!variant)
    return [
      issue("error", "unknown_op", `"${record["op"]}" has no schema`)
    ];
  const issues = [];
  if (record["id"] !== void 0 && typeof record["id"] !== "string") {
    issues.push(issue("error", "schema", `${record["op"]}.id has the wrong type`));
  }
  if (record["server_issue"] != null && typeof record["server_issue"] !== "string") {
    issues.push(issue("error", "schema", `${record["op"]}.server_issue has the wrong type`));
  }
  for (const name of Object.keys(record)) {
    if (OP_BOOKKEEPING_FIELDS.has(name))
      continue;
    if (!(name in variant.properties)) {
      issues.push(issue("error", "schema", `${record["op"]} has no field "${name}"`));
    }
  }
  for (const [name, schema] of Object.entries(variant.properties)) {
    if (name === "op")
      continue;
    const value = record[name];
    const property = schema;
    if (value === void 0 || value === null) {
      if (!allowsNull(property)) {
        issues.push(issue("error", "schema", `${record["op"]} needs "${name}"`));
      }
      continue;
    }
    if (!typeMatches(value, property)) {
      issues.push(issue("error", "schema", `${record["op"]}.${name} has the wrong type`));
    }
  }
  return issues;
}
function subtreeSize(element) {
  return 1 + element.querySelectorAll("*").length;
}
function protectedIdsIn(element, protected_ids) {
  return [...idsIn(element)].filter((id) => protected_ids.has(id));
}
function layersLeftBehind(doc, deleted, geometry) {
  const gone = new Set(deleted);
  const found = [];
  for (const element of deleted) {
    const box = geometry.bboxOf(element);
    if (!box || !element.parentElement)
      continue;
    for (const sibling of Array.from(element.parentElement.children)) {
      if (gone.has(sibling) || sibling.getAttribute("id"))
        continue;
      if (NON_RENDERED_TAGS.has(sibling.localName))
        continue;
      if (!sameDrawing(box, geometry.bboxOf(sibling)))
        continue;
      const anchor = doc.anchorOf(sibling);
      if (!found.includes(anchor))
        found.push(anchor);
      if (found.length >= 5)
        return found;
    }
  }
  return found;
}
function extraLines(text2) {
  const count = textLines(text2).length;
  return count > 1 ? count : 0;
}
function outsideViewBox(bbox, doc) {
  if (!bbox)
    return false;
  const { x, y, width, height } = doc.view_box;
  const tolerance_x = width * OFF_CANVAS_TOLERANCE;
  const tolerance_y = height * OFF_CANVAS_TOLERANCE;
  const [bx, by, bw, bh] = bbox;
  return bx < x - tolerance_x || by < y - tolerance_y || bx + bw > x + width + tolerance_x || by + bh > y + height + tolerance_y;
}
function hidesElement(name, value) {
  const trimmed = value.trim();
  if (name === "visibility")
    return trimmed !== "visible";
  if (name === "opacity" || name === "fill-opacity")
    return parseFloat(trimmed) === 0;
  return false;
}
function markupDenyListIssue(markup) {
  const wrapped = `<svg xmlns="${SVG_NS}" xmlns:xlink="${XLINK_NS}">${markup}</svg>`;
  const doc = new DOMParser().parseFromString(wrapped, "image/svg+xml");
  if (doc.querySelector("parsererror") || doc.documentElement.localName !== "svg") {
    return "markup is not well-formed XML";
  }
  for (const element of Array.from(doc.documentElement.querySelectorAll("*"))) {
    const tag = element.localName.toLowerCase();
    if (REPLACEMENT_DENIED_TAGS.has(tag))
      return `<${element.localName}> is not allowed`;
    if (element.namespaceURI !== SVG_NS)
      return `<${element.tagName}> is outside the SVG namespace`;
    for (const name of element.getAttributeNames()) {
      const lower = name.toLowerCase();
      const value = (element.getAttribute(name) || "").trim();
      if (lower.startsWith("on"))
        return `attribute ${name} is not allowed`;
      if (REFERENCE_ATTRS.has(lower) || lower.endsWith(":href")) {
        const data_image = tag === "image" && /^data:image\//i.test(value);
        if (!value.startsWith("#") && !data_image) {
          return `${name} must reference an id in the document`;
        }
      }
      if (lower === "style" && isUnsafeCssValue(value))
        return "style contains an unsafe value";
    }
  }
  return null;
}
var Validator = class {
  constructor(_doc, trial, _context) {
    this._doc = _doc;
    this.trial = trial;
    this._context = _context;
    this.steps = [];
    this._original_hashes = /* @__PURE__ */ new Map();
    this._resolver = null;
    this._resolver_version = -1;
    this._protected = _context.protected || _doc.protected;
    this._unlocked = new Set(_context.unlocked || []);
    this._accepted = _context.accepted || null;
    this._geometry = _context.geometry || _doc.geometry;
    this._trial_geometry = typeof document !== "undefined" && trial.root.getRootNode({ composed: true }) === document ? this._geometry : new AttributeGeometryProvider();
    for (const element of _doc.elements()) {
      this._original_hashes.set(_doc.anchorOf(element), _doc.hashOf(element));
    }
  }
  run(ops) {
    ops.forEach((op, index) => this._step(op, index));
  }
  _resolverFor(doc) {
    if (!this._resolver || this._resolver_version !== doc.version) {
      this._resolver = new StyleResolver(doc.root, doc.styleRules());
      this._resolver_version = doc.version;
    }
    return this._resolver;
  }
  _step(op, index) {
    const issues = schemaIssues(op);
    const step = {
      index,
      op,
      validation: {
        index,
        op,
        issues,
        actionable: op.op !== "no_change" && op.op !== "ask",
        checked_by_default: false,
        locked: false,
        applied: false
      },
      anchors: [],
      removed: [],
      changed: [],
      adds: false,
      expected_delta: 0,
      created: []
    };
    this.steps.push(step);
    const malformed = issues.length > 0;
    if (typeof op.server_issue === "string" && op.server_issue.trim()) {
      step.validation.issues.push(issue("warning", "server_issue", op.server_issue.trim()));
    }
    if (!malformed && step.validation.actionable)
      this._policy(step);
    const errors = step.validation.issues.filter((i) => i.level === "error");
    const warnings = step.validation.issues.filter((i) => i.level === "warning");
    step.validation.locked = step.validation.locked || errors.length > 0;
    step.validation.checked_by_default = step.validation.actionable && !step.validation.locked && !warnings.length;
    const accepted = this._accepted ? this._accepted.has(index) : true;
    if (!step.validation.actionable || step.validation.locked || !accepted)
      return;
    this._apply(step);
  }
  _resolveTargets(step, targets) {
    const elements = [];
    for (const target of targets) {
      const resolution = this.trial.resolve(target);
      if (resolution.ok === false) {
        step.validation.issues.push(issue("error", "unknown_target", resolution.error));
        return null;
      }
      const element = resolution.element;
      const anchor = this.trial.anchorOf(element);
      if (target.h) {
        const original = this._original_hashes.get(anchor);
        const current = this.trial.hashOf(element);
        if (target.h !== original && target.h !== current) {
          step.validation.issues.push(issue("error", "stale_hash", `${anchor} has changed since the index was built (hash ${target.h} is stale)`));
          return null;
        }
      }
      if (!elements.includes(element))
        elements.push(element);
    }
    step.anchors = elements.map((element) => this.trial.anchorOf(element));
    return elements;
  }
  _lockUnlessUnlocked(step, ids, code, message) {
    step.validation.issues.push(issue("warning", code, message));
    if (!ids.every((id) => this._unlocked.has(id)))
      step.validation.locked = true;
  }
  _policy(step) {
    const op = step.op;
    const push = (level, code, message) => step.validation.issues.push(issue(level, code, message));
    switch (op.op) {
      case "set_attr": {
        const name = (op.name || "").trim();
        if (name === "viewBox") {
          const elements2 = this._resolveTargets(step, [op.target]);
          if (!elements2)
            return;
          if (elements2[0] !== this.trial.root)
            push("error", "forbidden_attribute", "canvas bounds can only be changed on the SVG root");
          else {
            const reason = canvasExpansionIssue(this._doc.view_box, op.value);
            if (reason)
              push("error", "canvas_bounds", reason);
          }
          step.changed = [...step.anchors];
          return;
        }
        if (!isAllowedAttributeName(name)) {
          push("error", "forbidden_attribute", `attribute "${name}" cannot be set`);
          return;
        }
        if (op.value != null) {
          const value_issue = attributeValueIssue(name, `${op.value}`);
          if (value_issue) {
            push("error", "bad_value", value_issue);
            return;
          }
        }
        const elements = this._resolveTargets(step, [op.target]);
        if (!elements)
          return;
        const element = elements[0];
        step.changed = [...step.anchors];
        const id = element.getAttribute("id") || "";
        if (op.value != null && hidesElement(name, `${op.value}`)) {
          const hidden = protectedIdsIn(element, this._protected);
          if (hidden.length) {
            this._lockUnlessUnlocked(step, hidden, "protected_hidden", `hides ${hidden.map((h) => this._protected.labelOf(h)).join(", ")}, which bookings bind to`);
          }
        }
        if (PAINT_PROPERTIES.has(name) && op.value != null)
          this._effectiveStyle(step, element, name);
        if (id && this._protected.has(id) && name === "class") {
          push("info", "protected_class", `changes the class of bound element ${this._protected.labelOf(id)}`);
        }
        return;
      }
      case "set_style_rule": {
        const selector = (op.selector || "").trim();
        if (!selector || selector === "*" || selector.includes(",") || isUnsafeCssValue(selector)) {
          push("error", "bad_selector", `selector "${selector}" is not allowed`);
          return;
        }
        if (!isValidSelector(this.trial.root, selector)) {
          push("error", "bad_selector", `selector "${selector}" does not parse`);
          return;
        }
        for (const { name, value } of op.declarations || []) {
          const property = typeof name === "string" ? name.trim() : "";
          if (!STYLE_PROPERTY_ALLOW_LIST.has(property)) {
            push("error", "forbidden_property", `property "${property}" cannot be set`);
            return;
          }
          if (typeof value !== "string" || isUnsafeCssValue(value)) {
            push("error", "bad_value", `value for "${property}" is not allowed`);
            return;
          }
          const value_issue = attributeValueIssue(property, value);
          if (value_issue) {
            push("error", "bad_value", value_issue);
            return;
          }
        }
        const matched = elementsMatching(this.trial.root, selector);
        step.validation.affected = matched.length;
        push("info", "affects", `affects ${matched.length} element${matched.length === 1 ? "" : "s"}`);
        const hides = (op.declarations || []).some(({ name, value }) => hidesElement(name.trim(), value));
        if (hides) {
          const hidden = [
            ...new Set(matched.flatMap((element) => protectedIdsIn(element, this._protected)))
          ];
          if (hidden.length) {
            this._lockUnlessUnlocked(step, hidden, "protected_hidden", `hides ${hidden.length} bound element(s)`);
          }
        }
        const styles = Array.from(this.trial.root.querySelectorAll("style"));
        step.changed = styles.map((style) => this.trial.anchorOf(style));
        step.adds = styles.length === 0;
        step.expected_delta = styles.length === 0 ? 1 : 0;
        return;
      }
      case "set_text": {
        const elements = this._resolveTargets(step, [op.target]);
        if (!elements)
          return;
        if (!TEXT_TAGS.has(elements[0].localName)) {
          push("error", "not_text", `${step.anchors[0]} is a <${elements[0].localName}>, not text`);
          return;
        }
        step.changed = [...step.anchors];
        const lines = MapDocument.subtree(elements[0]).slice(1);
        step.expected_delta = elements[0].localName === "text" && typeof op.text === "string" ? extraLines(op.text) : 0;
        if (lines.length) {
          step.removed = lines.map((line) => this.trial.anchorOf(line));
          step.expected_delta -= lines.length;
          push("info", "replaces_lines", `replaces ${lines.length} <tspan> line${lines.length === 1 ? "" : "s"} with one run of text`);
        }
        push("info", "text_hidden_in_explore", "explore views hide text by default");
        return;
      }
      case "transform": {
        const targets = targetsOf(op);
        if (!targets.length) {
          push("error", "schema", "transform names no target");
          return;
        }
        const elements = this._resolveTargets(step, targets);
        if (!elements)
          return;
        if (elements.some((element) => element === this.trial.root)) {
          push("error", "root", "the root cannot be transformed");
          return;
        }
        step.changed = [...step.anchors];
        return;
      }
      case "delete": {
        const targets = targetsOf(op);
        if (!targets.length) {
          push("error", "schema", "delete names no target");
          return;
        }
        const elements = this._resolveTargets(step, targets);
        if (!elements)
          return;
        const bound = [];
        for (const element of elements) {
          if (element === this.trial.root) {
            push("error", "root", "the root cannot be deleted");
            return;
          }
          bound.push(...protectedIdsIn(element, this._protected));
          for (const descendant of MapDocument.subtree(element)) {
            step.removed.push(this.trial.anchorOf(descendant));
          }
          step.expected_delta -= subtreeSize(element);
        }
        step.changed = [...step.removed];
        if (bound.length) {
          this._lockUnlessUnlocked(step, bound, "protected_delete", `breaks the booking link for ${bound.map((id) => this._protected.labelOf(id)).join(", ")}`);
        }
        this._danglingWarning(step, elements);
        const left_behind = layersLeftBehind(this.trial, elements, this._trial_geometry);
        if (left_behind.length) {
          push("info", "layers_left", `leaves ${left_behind.join(", ")}, drawn on the same spot (a layer of the same object?)`);
        }
        return;
      }
      case "duplicate": {
        const elements = this._resolveTargets(step, [op.target]);
        if (!elements)
          return;
        if (op.new_id) {
          const id_issue = idIssue(op.new_id);
          if (id_issue) {
            push("error", "bad_id", id_issue);
            return;
          }
          if (this.trial.byId(op.new_id)) {
            push("error", "duplicate_id", `id "${op.new_id}" already exists`);
            return;
          }
          if (this._protected.has(op.new_id)) {
            push("warning", "takes_protected_id", `"${op.new_id}" is a bound id`);
          }
        }
        step.adds = true;
        step.expected_delta = (op.count ?? 1) * subtreeSize(elements[0]);
        return;
      }
      case "insert_shape": {
        if (!SHAPE_KINDS.includes(op.kind)) {
          push("error", "bad_kind", `kind "${op.kind}" cannot be inserted`);
          return;
        }
        const geometry_attrs = SHAPE_GEOMETRY_ATTRS[op.kind];
        for (const pair of op.attrs || []) {
          const name = typeof pair?.name === "string" ? pair.name.trim() : "";
          const value = `${pair?.value ?? ""}`;
          let value_issue;
          if (geometry_attrs.includes(name)) {
            value_issue = name === "d" ? checkPathData(value).error : geometryValueIssue(name, value);
          } else if (isAllowedAttributeName(name)) {
            value_issue = attributeValueIssue(name, value);
          } else {
            value_issue = `attribute "${name}" is not allowed on a ${op.kind}`;
          }
          if (value_issue) {
            push("error", "bad_value", value_issue);
            return;
          }
        }
        if (op.new_id) {
          const id_issue = idIssue(op.new_id);
          if (id_issue) {
            push("error", "bad_id", id_issue);
            return;
          }
          if (this.trial.byId(op.new_id)) {
            push("error", "duplicate_id", `id "${op.new_id}" already exists`);
            return;
          }
          if (this._protected.has(op.new_id)) {
            push("warning", "takes_protected_id", `"${op.new_id}" is a bound id`);
          }
        }
        if (op.parent) {
          const parents = this._resolveTargets(step, [op.parent]);
          if (!parents)
            return;
          if (parents[0] !== this.trial.root && parents[0].localName !== "g") {
            push("error", "bad_parent", `parent must be the root or a <g>`);
            return;
          }
        }
        if (op.after?.a && this.trial.positionOfRemoved(op.after.a)) {
          push("info", "after_deleted", `placed where ${op.after.a} was, which an earlier change deleted`);
        } else if (op.after && !this._resolveTargets(step, [op.after]))
          return;
        step.anchors = [];
        step.adds = true;
        step.expected_delta = op.kind === "text" && typeof op.text === "string" ? 1 + extraLines(op.text) : 1;
        return;
      }
      case "set_id": {
        const elements = this._resolveTargets(step, [op.target]);
        if (!elements)
          return;
        const element = elements[0];
        const old_id = element.getAttribute("id") || "";
        step.changed = [...step.anchors];
        if (op.new_id != null) {
          const id_issue = idIssue(op.new_id);
          if (id_issue) {
            push("error", "bad_id", id_issue);
            return;
          }
          const holder = this.trial.byId(op.new_id);
          if (holder && holder !== element) {
            push("error", "duplicate_id", `id "${op.new_id}" already exists`);
            return;
          }
          if (this._protected.has(op.new_id) && op.new_id !== old_id) {
            push("warning", "takes_protected_id", `"${op.new_id}" is bound to ${this._protected.labelOf(op.new_id)}`);
          }
        }
        if (old_id) {
          step.changed.push(...referencesTo(this.trial.root, old_id).map((ref) => this.trial.anchorOf(ref)));
          const in_styles = styleReferencesTo(this.trial.root, old_id);
          if (in_styles && op.new_id !== old_id) {
            push("info", "style_reference", `${in_styles} url(#${old_id}) reference${in_styles === 1 ? "" : "s"} in <style> rules ${in_styles === 1 ? "is" : "are"} not rewritten`);
          }
          if (this._protected.has(old_id) && op.new_id !== old_id) {
            this._lockUnlessUnlocked(step, [old_id], "protected_rename", `breaks the booking link for ${this._protected.labelOf(old_id)}`);
          }
        }
        if (element.localName === "g" && op.new_id)
          this._groupFillWarning(step, element, op.new_id);
        return;
      }
      case "reorder": {
        const elements = this._resolveTargets(step, [op.target]);
        if (!elements)
          return;
        const modes = [op.before, op.after, op.position].filter((v2) => v2 != null).length;
        if (modes !== 1) {
          push("error", "schema", "reorder needs exactly one of before, after or position");
          return;
        }
        const sibling_target = op.before || op.after;
        if (sibling_target) {
          const sibling = this.trial.resolve(sibling_target);
          if (sibling.ok === false) {
            push("error", "unknown_target", sibling.error);
            return;
          }
          if (sibling.element.parentElement !== elements[0].parentElement) {
            push("error", "not_sibling", "reorder only moves among siblings");
            return;
          }
        }
        return;
      }
      case "group": {
        const elements = this._resolveTargets(step, op.targets || []);
        if (!elements || !elements.length) {
          if (elements)
            push("error", "schema", "group names no targets");
          return;
        }
        const parent = elements[0].parentElement;
        if (!parent || elements.some((element) => element.parentElement !== parent)) {
          push("error", "not_sibling", "group targets must share one parent");
          return;
        }
        if (op.new_id) {
          const id_issue = idIssue(op.new_id);
          if (id_issue) {
            push("error", "bad_id", id_issue);
            return;
          }
          if (this.trial.byId(op.new_id)) {
            push("error", "duplicate_id", `id "${op.new_id}" already exists`);
            return;
          }
        }
        step.changed = [...step.anchors];
        step.adds = true;
        step.expected_delta = 1;
        return;
      }
      case "ungroup": {
        const elements = this._resolveTargets(step, [op.target]);
        if (!elements)
          return;
        const element = elements[0];
        if (element.localName !== "g") {
          push("error", "not_group", `${step.anchors[0]} is a <${element.localName}>, not a group`);
          return;
        }
        step.removed = [...step.anchors];
        step.changed = Array.from(element.children).map((child) => this.trial.anchorOf(child));
        step.expected_delta = -1;
        const id = element.getAttribute("id") || "";
        if (id && this._protected.has(id)) {
          this._lockUnlessUnlocked(step, [id], "protected_ungroup", `removes ${this._protected.labelOf(id)}, which bookings bind to`);
        }
        if (id) {
          const kept = idsIn(element);
          kept.delete(id);
          this._danglingWarning(step, [element], kept);
        }
        return;
      }
      case "replace_element": {
        if (typeof op.markup !== "string" || !op.markup.trim()) {
          push("error", "bad_markup", "markup is empty");
          return;
        }
        if (new TextEncoder().encode(op.markup).length > MAX_REPLACEMENT_MARKUP_BYTES) {
          push("error", "bad_markup", `markup is over ${MAX_REPLACEMENT_MARKUP_BYTES / 1024} KB`);
          return;
        }
        const denied = markupDenyListIssue(op.markup);
        if (denied) {
          push("error", "denied_markup", denied);
          return;
        }
        const elements = this._resolveTargets(step, [op.target]);
        if (!elements)
          return;
        const element = elements[0];
        if (element === this.trial.root) {
          push("error", "root", "the root cannot be replaced");
          return;
        }
        const purified = purifyMarkup(op.markup);
        if (!purified.element) {
          push("error", "bad_markup", purified.error || "markup rejected");
          return;
        }
        step.changed = [...step.anchors];
        step.removed = MapDocument.subtree(element).slice(1).map((descendant) => this.trial.anchorOf(descendant));
        step.adds = true;
        step.expected_delta = subtreeSize(purified.element) - subtreeSize(element);
        const bound = protectedIdsIn(element, this._protected).filter((id) => id !== element.getAttribute("id"));
        if (bound.length) {
          this._lockUnlessUnlocked(step, bound, "protected_delete", `removes ${bound.map((id) => this._protected.labelOf(id)).join(", ")}, which bookings bind to`);
        }
        const kept = idsIn(purified.element);
        const own_id = element.getAttribute("id");
        if (own_id)
          kept.add(own_id);
        this._danglingWarning(step, [element], kept);
        return;
      }
      case "replace_path": {
        const check = checkPathData(op.d);
        if (!check.ok) {
          push("error", "bad_path", check.error || "path data is invalid");
          return;
        }
        const elements = this._resolveTargets(step, [op.target]);
        if (!elements)
          return;
        if (elements[0].localName !== "path") {
          push("error", "not_path", `${step.anchors[0]} is a <${elements[0].localName}>, not a path`);
          return;
        }
        step.changed = [...step.anchors];
        return;
      }
      default:
        return;
    }
  }
  /** Warn when a paint property set on the element cannot show. */
  _effectiveStyle(step, element, name) {
    const resolver = this._resolverFor(this.trial);
    const leaves = Array.from(element.querySelectorAll("*")).filter((leaf) => leaf.children.length === 0);
    if (!leaves.length) {
      if (!INLINE_STYLE_PROPERTIES.has(name) && resolver.cssValue(element, name)) {
        step.validation.issues.push(issue("warning", "no_visible_effect", `a <style> rule already sets ${name} on ${step.anchors[0]}, so the attribute will not show`));
      }
      return;
    }
    const blocked = leaves.filter((leaf) => {
      let current = leaf;
      while (current && current !== element) {
        if (resolver.own(current, name))
          return true;
        current = current.parentElement;
      }
      return false;
    });
    if (blocked.length === leaves.length) {
      step.validation.issues.push(issue("warning", "no_visible_effect", `every child of ${step.anchors[0]} sets its own ${name}, so the change will not show`));
    } else if (blocked.length) {
      step.validation.issues.push(issue("info", "partial_effect", `${blocked.length} of ${leaves.length} children set their own ${name} and keep it`));
    }
  }
  /** Contract warning: an id on a <g> whose children paint themselves cannot show status colours. */
  _groupFillWarning(step, element, id) {
    const resolver = this._resolverFor(this.trial);
    const children = Array.from(element.children);
    if (!children.length || children.some((child) => !resolver.own(child, "fill")))
      return;
    const bound = this._protected.has(id);
    step.validation.issues.push(issue(bound ? "warning" : "info", "group_fill", `the children of this group set their own fill, so status colouring on ${bound ? this._protected.labelOf(id) : id} will not show`));
    if (bound)
      step.validation.checked_by_default = false;
  }
  /** Warn when ids inside removed elements are still referenced from outside them. */
  _danglingWarning(step, removed, kept = /* @__PURE__ */ new Set()) {
    const gone = new Set(removed.flatMap((element) => MapDocument.subtree(element)));
    const dangling = [];
    for (const element of removed) {
      for (const id of idsIn(element)) {
        if (kept.has(id))
          continue;
        const outside = referencesTo(this.trial.root, id).filter((ref) => !gone.has(ref));
        if (outside.length)
          dangling.push(`#${id}`);
      }
    }
    if (!dangling.length)
      return;
    step.validation.issues.push(issue("warning", "dangling_reference", `other elements reference ${dangling.join(", ")}, which this removes`));
  }
  _apply(step) {
    const apply3 = this._context.apply || applyOps;
    const result = apply3(this.trial, [step.op], {
      geometry: this._trial_geometry
    });
    if (result.rejected.length) {
      step.validation.issues.push(issue("error", "rejected", result.rejected[0].reason));
      step.validation.locked = true;
      step.validation.checked_by_default = false;
      return;
    }
    const applied = result.applied[0];
    step.validation.applied = true;
    step.created = applied.created;
    if (applied.note)
      step.validation.note = applied.note;
    this._afterApply(step, applied.anchors, applied.created);
  }
  _afterApply(step, anchors, created) {
    const op = step.op;
    if (op.op === "replace_element") {
      const element = this.trial.byAnchor(anchors[0]);
      const id = element?.getAttribute("id");
      if (element && id && element.localName === "g")
        this._groupFillWarning(step, element, id);
    }
    const moved = op.op === "transform" || op.op === "replace_path" || op.op === "replace_element" ? anchors : op.op === "duplicate" || op.op === "insert_shape" ? created : [];
    if (!moved.length)
      return;
    const off = [];
    const bound = [];
    for (const anchor of moved) {
      const element = this.trial.byAnchor(anchor);
      if (!element || element.parentElement?.localName === "defs")
        continue;
      if (outsideViewBox(this._trial_geometry.bboxOf(element), this.trial)) {
        off.push(anchor);
        bound.push(...protectedIdsIn(element, this._protected));
      }
    }
    if (!off.length)
      return;
    step.validation.issues.push(issue("warning", bound.length ? "protected_off_canvas" : "off_canvas", bound.length ? `moves ${bound.map((id) => this._protected.labelOf(id)).join(", ")} off the canvas` : `${off.join(", ")} ends up outside the viewBox`));
    step.validation.checked_by_default = false;
  }
};
function batchChecks(doc, trial, steps) {
  const issues = [];
  const applied = steps.filter((step) => step.validation.applied);
  for (const name of ROOT_INVARIANT_ATTRS) {
    if (name === "viewBox" && applied.some((step) => step.op.op === "set_attr" && step.op.name === "viewBox"))
      continue;
    if (doc.root.getAttribute(name) !== trial.root.getAttribute(name)) {
      issues.push(issue("error", "root_changed", `the root ${name} changed`));
    }
  }
  const before = doc.signatures();
  const after = trial.signatures();
  const style_rule_applied = applied.some((step) => step.op.op === "set_style_rule");
  for (const style of Array.from(doc.root.querySelectorAll("style"))) {
    const anchor = doc.anchorOf(style);
    if (!style_rule_applied && before.get(anchor) !== after.get(anchor)) {
      issues.push(issue("error", "style_changed", "the <style> changed without a set_style_rule op"));
      break;
    }
  }
  const original_styles = new Set(Array.from(doc.root.querySelectorAll("style")).map((style) => doc.anchorOf(style)));
  const added_styles = Array.from(trial.root.querySelectorAll("style")).filter((style) => !original_styles.has(trial.anchorOf(style))).length;
  const expected_styles = applied.filter((step) => step.op.op === "set_style_rule" && step.adds).length;
  if (added_styles !== expected_styles) {
    issues.push(issue("error", "style_changed", `${added_styles} <style> element${added_styles === 1 ? " was" : "s were"} added without a set_style_rule op`));
  }
  const element_delta = trial.elementCount() - doc.elementCount();
  const expected_delta = applied.reduce((sum, step) => sum + step.expected_delta, 0);
  if (element_delta !== expected_delta) {
    issues.push(issue("error", "element_delta", `the element count changed by ${element_delta} but the ops account for ${expected_delta}`));
  }
  const original_bytes = doc.byteSize();
  const byte_delta = trial.byteSize() - original_bytes;
  if (element_delta > MAX_ELEMENT_GROWTH) {
    issues.push(issue("error", "growth", `adds ${element_delta} elements; the cap is ${MAX_ELEMENT_GROWTH}`));
  }
  if (byte_delta > original_bytes * MAX_BYTE_GROWTH) {
    issues.push(issue("error", "growth", `grows the map by ${Math.round(byte_delta / original_bytes * 100)}%; the cap is ${MAX_BYTE_GROWTH * 100}%`));
  }
  const allowed_changed = /* @__PURE__ */ new Set();
  const allowed_removed = /* @__PURE__ */ new Set();
  let may_add = false;
  for (const step of applied) {
    for (const anchor of step.anchors)
      allowed_changed.add(anchor);
    for (const anchor of step.changed)
      allowed_changed.add(anchor);
    for (const anchor of step.removed) {
      allowed_removed.add(anchor);
      allowed_changed.add(anchor);
    }
    if (step.adds)
      may_add = true;
  }
  const unexpected = [];
  for (const [anchor, signature] of before) {
    const next = after.get(anchor);
    if (next === void 0) {
      if (!allowed_removed.has(anchor))
        unexpected.push(`${anchor} removed`);
    } else if (next !== signature && !allowed_changed.has(anchor)) {
      unexpected.push(`${anchor} changed`);
    }
  }
  if (!may_add) {
    for (const anchor of after.keys()) {
      if (!before.has(anchor))
        unexpected.push(`${anchor} added`);
    }
  }
  if (unexpected.length) {
    issues.push(issue("error", "collateral", `elements changed that no op names: ${unexpected.slice(0, 5).join(", ")}${unexpected.length > 5 ? ` and ${unexpected.length - 5} more` : ""}`));
  }
  return { issues, element_delta, byte_delta };
}
async function validateProposal(doc, ops, context = {}) {
  const max_ops = context.max_ops ?? MAX_OPS_PER_PROPOSAL;
  if (ops.length > max_ops) {
    return {
      ops: ops.map((op, index) => ({
        index,
        op,
        issues: [],
        actionable: false,
        checked_by_default: false,
        locked: true,
        applied: false
      })),
      issues: [
        issue("error", "too_many_ops", `${ops.length} ops; the limit is ${max_ops}`)
      ],
      blocking: true,
      element_delta: 0,
      byte_delta: 0,
      touched: [],
      trial: null
    };
  }
  const trial = doc.clone();
  const validator = new Validator(doc, trial, context);
  validator.run(ops);
  const applied = validator.steps.filter((step) => step.validation.applied);
  const batch = applied.length ? batchChecks(doc, trial, validator.steps) : { issues: [], element_delta: 0, byte_delta: 0 };
  if (applied.length && context.render_check && !batch.issues.some((i) => i.level === "error")) {
    const render = await context.render_check.check(trial.serialise());
    if (!render.ok) {
      batch.issues.push(issue("error", "render", `PlaceOS cannot draw the result: ${render.error || "render failed"}`));
    }
  }
  const touched = /* @__PURE__ */ new Set();
  for (const step of applied) {
    for (const anchor of [
      ...step.anchors,
      ...step.created,
      ...step.changed
    ])
      touched.add(anchor);
  }
  return {
    ops: validator.steps.map((step) => step.validation),
    issues: batch.issues,
    blocking: batch.issues.some((i) => i.level === "error"),
    element_delta: batch.element_delta,
    byte_delta: batch.byte_delta,
    touched: [...touched],
    trial: applied.length ? trial : null
  };
}

// libs/map-editor/src/lib/ai/describe.ts
function opCategory(op) {
  switch (op.op) {
    case "insert_shape":
    case "duplicate":
    case "group":
      return "added";
    case "delete":
      return "removed";
    case "ask":
      return "question";
    case "no_change":
      return "none";
    default:
      return "changed";
  }
}
var GLYPHS = {
  added: "+",
  changed: "~",
  removed: "\u2212",
  question: "?",
  none: "\xB7"
};
function opGlyph(category) {
  return GLYPHS[category];
}
function entryFor(target, index) {
  if (!target)
    return void 0;
  if (target.a) {
    const by_anchor = index.by_anchor.get(target.a);
    if (by_anchor)
      return by_anchor;
  }
  if (target.id) {
    return index.entries.find((entry) => entry.id === target.id);
  }
  return void 0;
}
function whoOf(target, context) {
  const entry = entryFor(target, context.index);
  const id = entry?.id ?? target?.id ?? null;
  const label = entry?.label ?? null;
  if (id && label && label !== id)
    return `${id} (${label})`;
  if (id)
    return id;
  if (label)
    return label;
  if (entry)
    return `${entry.tag} ${entry.anchor}`;
  return describeTarget(target);
}
function manyOf(targets, context) {
  if (targets.length === 1)
    return whoOf(targets[0], context);
  const template = targets.length === 1 ? context.strings.describe.element : context.strings.describe.elements;
  return format(template, { count: targets.length });
}
function number(value) {
  return Number.isInteger(value) ? String(value) : String(Math.round(value * 100) / 100);
}
function affectedCount(doc, selector) {
  try {
    return elementsMatching(doc.root, selector).length;
  } catch {
    return 0;
  }
}
function describeOp(op, context) {
  const { strings } = context;
  const t = strings.describe;
  switch (op.op) {
    case "set_attr": {
      const who = whoOf(op.target, context);
      return op.value === null || op.value === void 0 ? format(t.remove_attr, { name: op.name, who }) : format(t.set_attr, { name: op.name, who, value: op.value });
    }
    case "set_style_rule": {
      const current = context.doc.styleRules().find((rule) => rule.selectors.includes(op.selector));
      const changes = (op.declarations || []).map((declaration) => format(t.style_declaration, {
        name: declaration.name,
        from: current?.declarations[declaration.name] ?? "-",
        to: declaration.value
      })).join(", ");
      return format(t.set_style_rule, {
        selector: op.selector,
        changes,
        affects: format(strings.affects, {
          count: affectedCount(context.doc, op.selector)
        })
      });
    }
    case "set_text":
      return format(t.set_text, {
        who: whoOf(op.target, context),
        text: op.text
      });
    case "transform": {
      const who = manyOf(targetsOf(op), context);
      const moves = !!op.translate;
      const scales = !!op.scale;
      const rotates = typeof op.rotate === "number" && op.rotate !== 0;
      if (moves && !scales && !rotates && op.translate) {
        return format(t.move, {
          who,
          x: number(op.translate[0]),
          y: number(op.translate[1])
        });
      }
      if (scales && !moves && !rotates && op.scale) {
        return format(t.scale, {
          who,
          x: number(op.scale[0]),
          y: number(op.scale[1])
        });
      }
      if (rotates && !moves && !scales) {
        return format(t.rotate, {
          who,
          degrees: number(op.rotate)
        });
      }
      return format(t.transform_many, { who });
    }
    case "delete": {
      const targets = targetsOf(op);
      return format(targets.length === 1 ? t.delete : t.delete_many, {
        who: manyOf(targets, context)
      });
    }
    case "duplicate": {
      const who = whoOf(op.target, context);
      const count = op.count ?? 1;
      if (count > 1) {
        return format(t.duplicate_many, {
          who,
          count,
          pattern: op.id_pattern || op.new_id || "-"
        });
      }
      return op.new_id ? format(t.duplicate, { who, new_id: op.new_id }) : format(t.duplicate_unnamed, { who });
    }
    case "insert_shape": {
      const parent = op.parent ? whoOf(op.parent, context) : t.map_root;
      return op.new_id ? format(t.insert_shape, {
        kind: op.kind,
        new_id: op.new_id,
        parent
      }) : format(t.insert_shape_unnamed, { kind: op.kind, parent });
    }
    case "set_id": {
      const who = whoOf(op.target, context);
      return op.new_id ? format(t.set_id, { who, new_id: op.new_id }) : format(t.remove_id, { who });
    }
    case "reorder": {
      const who = whoOf(op.target, context);
      if (op.before)
        return format(t.reorder_before, {
          who,
          other: whoOf(op.before, context)
        });
      if (op.after)
        return format(t.reorder_after, {
          who,
          other: whoOf(op.after, context)
        });
      return format(op.position === "first" ? t.reorder_first : t.reorder_last, { who });
    }
    case "group": {
      const who = manyOf(op.targets || [], context);
      return op.new_id ? format(t.group, { who, new_id: op.new_id }) : format(t.group_unnamed, { who });
    }
    case "ungroup":
      return format(t.ungroup, { who: whoOf(op.target, context) });
    case "replace_element":
      return format(t.replace_element, {
        who: whoOf(op.target, context)
      });
    case "replace_path":
      return format(t.replace_path, { who: whoOf(op.target, context) });
    case "no_change":
      return format(t.no_change, { reason: op.reason });
    case "ask":
      return format(t.ask, { question: op.question });
    default:
      return describeTarget(null);
  }
}

// libs/map-editor/src/lib/ai/proposal.ts
var GROUP_THRESHOLD = 20;
var MAX_RULE_ANCHORS = 200;
function opId(index) {
  return `op-${index + 1}`;
}
function opsWithServerIssues(job) {
  return (job.ops || []).map((op, index) => {
    if (typeof op !== "object" || op === null || Array.isArray(op))
      return op;
    const id = opId(index);
    const reason = job.server_issues?.[id];
    return __spreadValues(__spreadProps(__spreadValues({}, op), {
      id
    }), reason ? { server_issue: reason } : {});
  });
}
function referencedTargets(op) {
  const targets = [...targetsOf(op)];
  if (op.op === "insert_shape") {
    if (op.parent)
      targets.push(op.parent);
    if (op.after)
      targets.push(op.after);
  } else if (op.op === "reorder") {
    if (op.before)
      targets.push(op.before);
    if (op.after)
      targets.push(op.after);
  }
  return targets;
}
function deriveDependencies(doc, ops) {
  const trial = doc.clone();
  const original_ids = idsIn(doc.root);
  const original_anchors = new Set(doc.elements().map((element) => doc.anchorOf(element)));
  const created_by_anchor = /* @__PURE__ */ new Map();
  const created_by_id = /* @__PURE__ */ new Map();
  const result = [];
  ops.forEach((op, index) => {
    const depends = /* @__PURE__ */ new Set();
    if (typeof op === "object" && op !== null) {
      for (const target of referencedTargets(op)) {
        if (!target)
          continue;
        if (target.a && !original_anchors.has(target.a)) {
          const creator = created_by_anchor.get(target.a);
          if (creator !== void 0 && creator < index)
            depends.add(creator);
        }
        if (target.id && !original_ids.has(target.id)) {
          const creator = created_by_id.get(target.id);
          if (creator !== void 0 && creator < index)
            depends.add(creator);
        }
      }
    }
    result.push([...depends].sort((a, b) => a - b));
    let applied;
    try {
      applied = applyOps(trial, [op], { geometry: trial.geometry });
    } catch {
      return;
    }
    for (const step of applied.applied) {
      for (const anchor of step.created) {
        created_by_anchor.set(anchor, index);
        const id = trial.byAnchor(anchor)?.getAttribute("id");
        if (id && !original_ids.has(id))
          created_by_id.set(id, index);
      }
      if (step.op.op === "set_id" && step.op.new_id && !original_ids.has(step.op.new_id)) {
        created_by_id.set(step.op.new_id, index);
      }
    }
  });
  const identity_changes = /* @__PURE__ */ new Map();
  ops.forEach((op, index) => {
    if (!op || typeof op !== "object")
      return;
    const keys = [];
    if (op.op === "set_id" && op.target) {
      const resolution = doc.resolve(op.target);
      const old_id = resolution.ok ? resolution.element.getAttribute("id") : op.target.id;
      const anchor = resolution.ok ? doc.anchorOf(resolution.element) : op.target.a;
      if (anchor)
        keys.push(`anchor:${anchor}`);
      if (old_id)
        keys.push(`id:${old_id}`);
    }
    if ("new_id" in op && op.new_id)
      keys.push(`id:${op.new_id}`);
    for (const key of new Set(keys)) {
      const related = identity_changes.get(key) || [];
      for (const other of related) {
        if (op.op !== "set_id" && ops[other].op !== "set_id")
          continue;
        if (!result[index].includes(other))
          result[index].push(other);
        if (!result[other].includes(index))
          result[other].push(index);
      }
      related.push(index);
      identity_changes.set(key, related);
    }
  });
  const expansion = ops.findIndex((op) => op.op === "set_attr" && op.name === "viewBox");
  if (expansion >= 0) {
    const related = ops.map((op, index) => op.op !== "ask" && op.op !== "no_change" ? index : -1).filter((index) => index >= 0);
    for (const index of related)
      for (const other of related)
        if (index !== other && !result[index].includes(other))
          result[index].push(other);
  }
  return result.map((needs) => needs.sort((a, b) => a - b));
}
function sameSet(a, b) {
  if (a.size !== b.size)
    return false;
  for (const value of a)
    if (!b.has(value))
      return false;
  return true;
}
function cascadeDependencies(accepted, dependencies) {
  const next = new Set(accepted);
  let changed = true;
  while (changed) {
    changed = false;
    for (const index of [...next]) {
      const needs = dependencies[index] || [];
      if (needs.some((dependency) => !next.has(dependency))) {
        next.delete(index);
        changed = true;
      }
    }
  }
  return next;
}
function resolvedAnchors(op, doc) {
  const anchors = /* @__PURE__ */ new Set();
  if (op.op === "set_style_rule") {
    try {
      for (const element of elementsMatching(doc.root, op.selector).slice(0, MAX_RULE_ANCHORS)) {
        const anchor = doc.anchorOf(element);
        if (anchor)
          anchors.add(anchor);
      }
    } catch {
      return [];
    }
    return [...anchors];
  }
  for (const target of referencedTargets(op)) {
    const resolution = doc.resolve(target);
    if (resolution.ok) {
      const anchor = doc.anchorOf(resolution.element);
      if (anchor)
        anchors.add(anchor);
    }
  }
  return [...anchors];
}
function verdictOf(rows, accepted, blocking, questions) {
  const actionable = rows.filter((row) => row.actionable).length;
  if (!actionable) {
    return questions.length || rows.some((row) => row.op.op === "ask") ? "questions" : "empty";
  }
  if (blocking)
    return "blocked";
  if (!accepted.size)
    return "nothing_accepted";
  return accepted.size < actionable ? "partial" : "ready";
}
function groupRows(rows, strings) {
  const groups = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const key = `${row.category}:${row.kind}`;
    let group2 = groups.get(key);
    if (!group2) {
      group2 = {
        key,
        label: "",
        category: row.category,
        kind: row.kind,
        indices: [],
        checked: "none",
        locked: true
      };
      groups.set(key, group2);
    }
    group2.indices.push(row.index);
  }
  return [...groups.values()].map((group2) => {
    const members = group2.indices.map((index) => rows[index]);
    const tickable = members.filter((row) => row.actionable && !row.locked);
    const ticked = tickable.filter((row) => row.checked).length;
    return __spreadProps(__spreadValues({}, group2), {
      label: format(strings.group_label, {
        count: group2.indices.length,
        kind: strings.kinds[group2.kind] ?? group2.kind
      }),
      locked: tickable.length === 0,
      checked: ticked === 0 ? "none" : ticked === tickable.length ? "all" : "some"
    });
  });
}
async function buildProposal(job, session, strings, options = {}) {
  const ops = opsWithServerIssues(job);
  const index = session.index();
  const describe_context = { doc: session.doc, index, strings };
  const dependencies = options.dependencies ?? deriveDependencies(session.doc, ops);
  const base = {
    protected: session.protected,
    unlocked: options.unlocked,
    render_check: session.render_check,
    geometry: session.geometry
  };
  const validate = (accepted2) => validateProposal(session.doc, ops, __spreadProps(__spreadValues({}, base), { accepted: accepted2 }));
  const complete_validation = await validate();
  let validation = complete_validation;
  const tickable = (i) => !!validation.ops[i] && validation.ops[i].actionable && !validation.ops[i].locked;
  let accepted;
  if (options.accepted) {
    accepted = new Set([...options.accepted].filter(tickable));
  } else {
    accepted = new Set(validation.ops.filter((op) => op.checked_by_default).map((op) => op.index));
  }
  accepted = cascadeDependencies(accepted, dependencies);
  const applied_in_trial = new Set(validation.ops.filter((op) => op.applied).map((op) => op.index));
  if (!sameSet(accepted, applied_in_trial))
    validation = await validate(accepted);
  const dependents = dependencies.map(() => []);
  dependencies.forEach((needs, i) => {
    for (const need of needs)
      dependents[need]?.push(i);
  });
  const rows = validation.ops.map((trial_result, i) => {
    const result = accepted.has(i) ? trial_result : complete_validation.ops[i];
    const op = ops[i];
    const category = opCategory(op);
    const kind = op.op;
    return __spreadProps(__spreadValues(__spreadValues({
      index: i,
      id: typeof op.id === "string" && op.id ? op.id : opId(i),
      op,
      kind,
      category,
      glyph: opGlyph(category),
      kind_word: strings.kinds[kind] ?? String(kind),
      text: describeOp(op, describe_context),
      anchors: resolvedAnchors(op, session.doc),
      issues: result.issues,
      actionable: result.actionable,
      locked: result.locked,
      checked: accepted.has(i),
      applied: !validation.blocking && trial_result.applied
    }, result.affected !== void 0 ? { affected: result.affected } : {}), result.note ? { note: result.note } : {}), {
      server_issue: typeof op.server_issue === "string" && op.server_issue ? op.server_issue : null,
      depends_on: dependencies[i] || [],
      dependents: dependents[i] || []
    });
  });
  const questions = [
    ...(job.questions || []).filter((q) => typeof q === "string" && q),
    ...ops.filter((op) => op.op === "ask").map((op) => op.op === "ask" ? op.question : "").filter((q) => !!q)
  ];
  const verdict = verdictOf(rows, accepted, validation.blocking, questions);
  return {
    job,
    ops,
    summary: job.summary || "",
    questions: [...new Set(questions)],
    rows,
    batch_issues: validation.issues,
    blocking: validation.blocking,
    element_delta: validation.element_delta,
    byte_delta: validation.byte_delta,
    before_markup: options.trial_markup === false ? null : session.doc.serialise(),
    trial_markup: options.trial_markup === false ? null : validation.trial?.serialise() || null,
    verdict,
    accepted: [...accepted].sort((a, b) => a - b),
    invalid_count: rows.filter((row) => row.actionable && row.locked).length,
    dependencies,
    groups: rows.length > GROUP_THRESHOLD ? groupRows(rows, strings) : null
  };
}
function acceptedSet(proposal) {
  return new Set(proposal.accepted);
}
function toggleRow(proposal, index, checked) {
  const next = acceptedSet(proposal);
  const row = proposal.rows[index];
  if (!row || !row.actionable || row.locked)
    return next;
  if (checked) {
    next.add(index);
    const stack = [...row.depends_on];
    while (stack.length) {
      const need = stack.pop();
      const needed = proposal.rows[need];
      if (!needed || needed.locked || !needed.actionable)
        continue;
      if (next.has(need))
        continue;
      next.add(need);
      stack.push(...needed.depends_on);
    }
  } else {
    next.delete(index);
    const stack = [...row.dependents];
    while (stack.length) {
      const dependent = stack.pop();
      if (!next.has(dependent))
        continue;
      next.delete(dependent);
      stack.push(...proposal.rows[dependent]?.dependents || []);
    }
  }
  return next;
}
function toggleGroup(proposal, group2, checked) {
  let current = proposal;
  let next = acceptedSet(proposal);
  for (const index of group2.indices) {
    next = toggleRow(current, index, checked);
    current = __spreadProps(__spreadValues({}, current), {
      accepted: [...next].sort((a, b) => a - b)
    });
  }
  return next;
}
function decisionFor(proposal) {
  const actionable = proposal.rows.filter((row) => row.actionable);
  const applied = actionable.filter((row) => row.checked && row.applied);
  if (!applied.length)
    return "rejected";
  return applied.length === actionable.length ? "applied" : "partial";
}
function resolvePayload(proposal, decision, reasons = [], saved_upload_id = null) {
  const actionable = proposal.rows.filter((row) => row.actionable);
  const accepted = decision === "rejected" ? [] : actionable.filter((row) => row.checked && row.applied).map((row) => row.id);
  const rejected = actionable.filter((row) => !accepted.includes(row.id)).map((row) => row.id);
  return __spreadProps(__spreadValues({
    decision,
    accepted_op_ids: accepted,
    rejected_op_ids: rejected
  }, reasons.length ? { reasons: [...reasons] } : {}), {
    saved_upload_id
  });
}

// libs/map-editor/src/lib/ai/thread.ts
var TAG_MIN_AREA_SHARE = 2e-3;
function snapshotTags(index, instruction) {
  const { width, height } = index.view_box;
  const floor = width * height * TAG_MIN_AREA_SHARE;
  const large = index.entries.filter((entry) => (entry.kind === "bookable" || entry.kind === "zone") && !!entry.id && !!entry.bbox && entry.bbox[2] * entry.bbox[3] >= floor);
  const named = mentionedEntries(index, instruction);
  return [...new Set([...large, ...named].map((entry) => entry.anchor))];
}
var MODEL_MEMORY_KEY = "placeos.map-editor.ai-model";
function localModelMemory(storage = () => globalThis.localStorage) {
  return {
    read: () => {
      try {
        const raw = storage()?.getItem(MODEL_MEMORY_KEY);
        if (!raw)
          return null;
        const parsed = JSON.parse(raw);
        return typeof parsed.provider_id === "string" && typeof parsed.model === "string" ? { provider_id: parsed.provider_id, model: parsed.model } : null;
      } catch {
        return null;
      }
    },
    write: (choice) => {
      try {
        const store = storage();
        if (!store)
          return;
        if (choice)
          store.setItem(MODEL_MEMORY_KEY, JSON.stringify(choice));
        else
          store.removeItem(MODEL_MEMORY_KEY);
      } catch {
        return;
      }
    }
  };
}
var BUSY_MESSAGE = /busy|running right now|try again/i;
function errorFromStatus(status, message, strings) {
  const states = strings.states;
  switch (status) {
    case 503:
      return BUSY_MESSAGE.test(message) ? { kind: "busy", message: states.busy, retryable: true } : {
        kind: "not_configured",
        message: message || states.not_configured,
        retryable: false
      };
    case 429:
      return {
        kind: "quota",
        message: message || states.quota,
        retryable: false
      };
    case 403:
      return {
        kind: "forbidden",
        message: states.forbidden,
        retryable: false
      };
    case 404:
    case 409:
    case 422:
      return {
        kind: "request",
        message: message || states.unknown,
        retryable: false
      };
    case 502:
      return {
        kind: "vendor",
        message: message || states.vendor,
        retryable: true
      };
    case 504:
      return {
        kind: "timeout",
        message: states.timeout,
        retryable: true
      };
    case void 0:
      return {
        kind: "network",
        message: message || states.unknown,
        retryable: true
      };
    default:
      return {
        kind: "unknown",
        message: message || states.unknown,
        retryable: status >= 500
      };
  }
}
function errorFromJob(job, strings) {
  const states = strings.states;
  switch (job.error_kind) {
    case "moderation":
      return {
        kind: "refused",
        message: states.refused,
        retryable: false,
        job
      };
    case "timeout":
      return {
        kind: "timeout",
        message: states.timeout,
        retryable: true,
        job
      };
    case "vendor":
      return {
        kind: "vendor",
        message: job.error_message || states.vendor,
        retryable: true,
        job
      };
    case "invalid_response":
      return {
        kind: "invalid",
        message: states.invalid,
        retryable: true,
        job
      };
    default:
      return {
        kind: "unknown",
        message: job.error_message || states.unknown,
        retryable: true,
        job
      };
  }
}
function randomKey() {
  const crypto_api = globalThis.crypto;
  if (crypto_api && typeof crypto_api.randomUUID === "function")
    return crypto_api.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
function proposalOf(state) {
  const phase = state.phase;
  return phase.kind === "reviewing" || phase.kind === "applied" ? phase.proposal : null;
}
var MapAiThread = class {
  constructor(_session, _zone_id, options = {}) {
    this._session = _session;
    this._zone_id = _zone_id;
    this.selection_error = signal(
      "",
      ...ngDevMode ? [{ debugName: "selection_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._abort = null;
    this._queue = Promise.resolve();
    this.strings = resolveAiStrings(options.strings);
    this._transport = options.transport ?? PLACEOS_TRANSPORT;
    this._upload = options.upload ?? null;
    this._now = options.now ?? Date.now;
    this._sleep = options.sleep;
    this._key = options.idempotency_key ?? randomKey;
    const long_side = options.long_side;
    this._snapshot = options.snapshot ?? ((session, selection, tags, annotations) => renderSnapshot(session.doc, {
      selection,
      tags,
      annotations,
      long_side
    }));
    this._memory = options.memory === void 0 ? localModelMemory() : options.memory;
    this._state = signal(
      __spreadProps(__spreadValues({}, initialState()), {
        choice: this._memory?.read() ?? null
      }),
      ...ngDevMode ? [{ debugName: "_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = this._state.asReadonly();
    this.choice = computed(
      () => effectiveChoice(this._state()),
      ...ngDevMode ? [{ debugName: "choice" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model_options = computed(
      () => modelOptions(this._state().capabilities),
      ...ngDevMode ? [{ debugName: "model_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.phase = computed(
      () => this._state().phase,
      ...ngDevMode ? [{ debugName: "phase" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.capabilities = computed(
      () => this._state().capabilities,
      ...ngDevMode ? [{ debugName: "capabilities" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.turns = computed(
      () => this._state().turns,
      ...ngDevMode ? [{ debugName: "turns" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.proposal = computed(
      () => proposalOf(this._state()),
      ...ngDevMode ? [{ debugName: "proposal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.announcement = computed(
      () => this._state().announcement,
      ...ngDevMode ? [{ debugName: "announcement" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.busy = computed(
      () => {
        const phase = this._state().phase;
        return phase.kind === "checking" || phase.kind === "submitting" || phase.kind === "running" || phase.kind === "reviewing" && phase.validating;
      },
      ...ngDevMode ? [{ debugName: "busy" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.quota_block = computed(
      () => quotaBlock(this._state().capabilities, this.strings),
      ...ngDevMode ? [{ debugName: "quota_block" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_send = computed(
      () => canCompose(this._state().phase) && !this.quota_block(),
      ...ngDevMode ? [{ debugName: "can_send" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get zone_id() {
    return this._zone_id;
  }
  dispatch(event) {
    this._state.update((state) => reduce(state, event, this.strings));
  }
  /** Reads the capabilities; a 404 or a network failure hides the panel. */
  async load() {
    this.dispatch({ type: "check" });
    try {
      const capabilities = await mapAICapabilities(this._transport);
      this.dispatch({ type: "capabilities", capabilities });
    } catch (error) {
      this.dispatch({
        type: "capabilities_failed",
        status: errorStatus(error),
        message: errorMessage(error)
      });
    }
  }
  /** Picks the model for the next requests, remembered for this browser. */
  chooseModel(choice) {
    this.dispatch({ type: "model_chosen", choice });
    this._memory?.write(choice);
  }
  setDraft(text2) {
    this.dispatch({ type: "draft", text: text2 });
  }
  toggleReason(reason) {
    this.dispatch({ type: "reason_toggled", reason });
  }
  hoverRow(row) {
    this._session.setHover(row?.anchors[0] ?? null);
  }
  selectRow(row) {
    if (row.anchors.length)
      this._session.select(row.anchors);
  }
  /**
   * Sends an instruction. A proposal still previewed on the map is left in
   * place and resolved as refined, so the next turn builds on it.
   */
  async submit(instruction) {
    const text2 = instruction.trim();
    if (!text2)
      return;
    const state = this._state();
    if (!canCompose(state.phase) || this.quota_block())
      return;
    const limit = state.capabilities?.limits.max_instruction_chars;
    if (limit && text2.length > limit) {
      this.dispatch({ type: "announce", text: this.strings.too_long });
      return;
    }
    if (state.phase.kind === "applied") {
      await this._resolveQuietly(state.phase.proposal, "refined");
      this.dispatch({ type: "refined", proposal: state.phase.proposal });
    }
    this.selection_error.set("");
    const selection = [...this._session.selection()];
    const annotations = structuredClone([
      ...this._session.annotations?.() || []
    ]).map((mark) => __spreadProps(__spreadValues({}, mark), {
      hits: annotationCandidates(this._session.index(), mark)
    }));
    const want_snapshot = !!this._upload;
    this.dispatch({
      type: "submit",
      instruction: text2,
      selected: selection.length,
      snapshot: want_snapshot,
      at: this._now()
    });
    let markup_upload_id = null;
    let size = null;
    if (want_snapshot && this._upload) {
      try {
        const snapshot = await this._snapshot(this._session, selection, snapshotTags(this._session.index(), text2), annotations);
        markup_upload_id = await this._upload(snapshot.blob, "map-snapshot.png");
        size = {
          image_px: snapshot.image_px,
          units_per_px: snapshot.units_per_px,
          view_box: snapshot.view_box
        };
      } catch {
        this.dispatch({
          type: "submit_failed",
          error: errorFromStatus(void 0, this.strings.snapshot_failed, this.strings)
        });
        return;
      }
    }
    const built = buildContext({ doc: this._session.doc, index: () => this._session.index() }, {
      selection,
      instruction: text2,
      annotations,
      max_bytes: state.capabilities?.limits.max_context_bytes,
      snapshot: size
    });
    const choice = state.choice;
    let job;
    try {
      job = await submitMapAIEdit(__spreadValues({
        zone_id: this._zone_id,
        instruction: text2,
        context: built.context,
        markup_upload_id,
        parent_job_id: state.parent_job_id,
        idempotency_key: this._key()
      }, choice ? {
        provider_id: choice.provider_id,
        model: choice.model
      } : {}), this._transport);
    } catch (error) {
      this.dispatch({
        type: "submit_failed",
        error: errorFromStatus(errorStatus(error), errorMessage(error), this.strings)
      });
      return;
    }
    this.dispatch({ type: "job_accepted", job, at: this._now() });
    void this._refreshQuota();
    if (isFinalJob(job)) {
      await this._finish(job);
      return;
    }
    const abort = new AbortController();
    this._abort = abort;
    let final;
    try {
      final = await watchJob(job.id, {
        transport: this._transport,
        signal: abort.signal,
        since: job.version,
        on_update: (update) => this.dispatch({ type: "job_updated", job: update }),
        sleep: this._sleep,
        now: this._now
      });
    } catch (error) {
      if (this._abort !== abort)
        return;
      this._abort = null;
      if (error instanceof WatchAbortedError)
        return;
      const failure = error instanceof WatchTimeoutError ? {
        kind: "timeout",
        message: this.strings.states.timeout,
        retryable: true,
        job
      } : errorFromStatus(errorStatus(error), errorMessage(error), this.strings);
      this.dispatch({
        type: "job_failed",
        job,
        error: failure,
        at: this._now()
      });
      return;
    }
    if (this._abort !== abort)
      return;
    this._abort = null;
    await this._finish(final);
  }
  /** Sends the last instruction again after a failure or a cancel. */
  retry() {
    const state = this._state();
    if (state.phase.kind !== "error" && state.phase.kind !== "cancelled")
      return Promise.resolve();
    return this.submit(state.draft);
  }
  /** Asks the server to stop the running job; the watch reports the outcome. */
  async cancel() {
    const phase = this._state().phase;
    if (phase.kind !== "running")
      return;
    this.dispatch({ type: "cancel_requested" });
    try {
      const job = await cancelMapAIJob(phase.job.id, this._transport);
      if (isFinalJob(job) && job.state === "cancelled") {
        this._abort?.abort();
        this._abort = null;
        this.dispatch({
          type: "job_cancelled",
          job,
          at: this._now()
        });
      }
    } catch {
    }
  }
  /** Ticks or unticks a row, then previews the new accepted set. */
  toggle(index, checked) {
    return this._enqueue(() => this._retick((proposal) => toggleRow(proposal, index, checked)));
  }
  toggleGroup(group2, checked) {
    return this._enqueue(() => this._retick((proposal) => toggleGroup(proposal, group2, checked)));
  }
  /** Keeps the previewed changes and records the decision. */
  keep() {
    return this._enqueue(async () => {
      const phase = this._state().phase;
      if (phase.kind !== "applied")
        return;
      const proposal = phase.proposal;
      await this._resolveQuietly(proposal, decisionFor(proposal));
      this.dispatch({ type: "kept", proposal });
    });
  }
  /** Takes the preview off the map and records the rejection with its reasons. */
  undo(reasons) {
    return this._enqueue(async () => {
      const state = this._state();
      const proposal = proposalOf(state);
      if (!proposal)
        return;
      if (state.phase.kind === "applied")
        this._session.undo();
      const chips = [...reasons ?? state.reasons];
      await this._resolveQuietly(proposal, "rejected", chips);
      this.dispatch({ type: "undone", proposal, reasons: chips });
    });
  }
  /** Starts a new thread; a previewed proposal stays on the map as abandoned. */
  reset() {
    this.selection_error.set("");
    this._abort?.abort();
    this._abort = null;
    const proposal = proposalOf(this._state());
    if (proposal && this._state().phase.kind === "applied") {
      void this._resolveQuietly(proposal, "abandoned");
    }
    this.dispatch({ type: "reset" });
  }
  dispose() {
    this._abort?.abort();
    this._abort = null;
    const proposal = proposalOf(this._state());
    if (proposal && this._state().phase.kind === "applied") {
      void this._resolveQuietly(proposal, "abandoned");
    }
  }
  _enqueue(task) {
    const run = this._queue.then(task, task);
    this._queue = run.catch(() => void 0);
    return run;
  }
  async _refreshQuota() {
    try {
      const capabilities = await mapAICapabilities(this._transport);
      this._state.update((state) => __spreadProps(__spreadValues({}, state), {
        capabilities: state.capabilities ? __spreadProps(__spreadValues({}, state.capabilities), { quota: capabilities.quota }) : null
      }));
    } catch {
      return;
    }
  }
  async _finish(job) {
    if (job.state === "cancelled") {
      this.dispatch({ type: "job_cancelled", job, at: this._now() });
      return;
    }
    if (job.state === "failed") {
      this.dispatch({
        type: "job_failed",
        job,
        error: errorFromJob(job, this.strings),
        at: this._now()
      });
      return;
    }
    let proposal;
    try {
      proposal = await buildProposal(job, this._session, this.strings);
    } catch {
      this.dispatch({
        type: "job_failed",
        job,
        error: {
          kind: "invalid",
          message: this.strings.states.invalid,
          retryable: true,
          job
        },
        at: this._now()
      });
      return;
    }
    this.dispatch({ type: "proposal", proposal, at: this._now() });
    this._preview(proposal);
  }
  _preview(proposal) {
    if (proposal.verdict !== "ready" && proposal.verdict !== "partial")
      return;
    const accepted = new Set(proposal.accepted);
    const skip = new Set(proposal.rows.filter((row) => !accepted.has(row.index)).map((row) => row.index));
    const result = this._session.apply(proposal.ops, `AI: ${proposal.summary || this.strings.title}`, { skip });
    const applied = new Set(result.applied.map((step) => step.index));
    const rows = proposal.rows.map((row) => __spreadProps(__spreadValues({}, row), {
      applied: applied.has(row.index)
    }));
    this.dispatch({ type: "previewed", proposal: __spreadProps(__spreadValues({}, proposal), { rows }) });
  }
  async _retick(next) {
    const state = this._state();
    const proposal = proposalOf(state);
    if (!proposal)
      return;
    this.selection_error.set("");
    const accepted = next(proposal);
    if (state.phase.kind === "applied")
      this._session.undo();
    this.dispatch({ type: "validating" });
    const rebuilt = await buildProposal(proposal.job, this._session, this.strings, { accepted, dependencies: proposal.dependencies });
    if (rebuilt.verdict === "blocked" && state.phase.kind === "applied") {
      const restored = await buildProposal(proposal.job, this._session, this.strings, {
        accepted: new Set(proposal.accepted),
        dependencies: proposal.dependencies
      });
      this.dispatch({ type: "rows_changed", proposal: restored });
      this._preview(restored);
      const reason = rebuilt.batch_issues.filter((issue2) => issue2.level === "error").map((issue2) => issue2.message).join("; ");
      const text2 = format(this.strings.states.selection_refused, {
        reason
      });
      this.selection_error.set(text2);
      this.dispatch({ type: "announce", text: text2 });
      return;
    }
    this.dispatch({ type: "rows_changed", proposal: rebuilt });
    this._preview(rebuilt);
  }
  async _resolveQuietly(proposal, decision, reasons = []) {
    try {
      await resolveMapAIJob(proposal.job.id, resolvePayload(proposal, decision, reasons), this._transport);
    } catch {
    }
  }
};

// libs/map-editor/src/lib/ai/ai-panel.component.ts
var _c0 = ["threadList"];
var _c1 = (a0) => ({ $implicit: a0, first: true });
var _c2 = (a0, a1) => ({ $implicit: a0, turn: a1 });
var _c3 = (a0) => ({ $implicit: a0, first: false });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.strings.checking);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1.strings.checking, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.unavailableText(), " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", option_r4.key)("selected", option_r4.key === ctx_r1.model_key());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", option_r4.model, " \xB7 ", option_r4.provider_name, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 9)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 16);
    \u0275\u0275listener("change", function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_3_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chooseModel($event));
    });
    \u0275\u0275repeaterCreate(4, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_3_For_5_Template, 2, 4, "option", 17, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1.strings.model_label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.model_key());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.model_options());
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.model_note());
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.quota_note(), " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_7_ng_container_0_Template, 1, 0, "ng-container", 18);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275nextContext();
    const composer_template_r5 = \u0275\u0275reference(2);
    \u0275\u0275property("ngTemplateOutlet", composer_template_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, t_r1));
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const turn_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.personMeta(turn_r6), " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 19)(1, "p", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_0_Conditional_3_Template, 2, 1, "p", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const turn_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", turn_r6.instruction, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.personMeta(turn_r6) ? 3 : -1);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_1_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1.strings.retry, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_1_Conditional_2_Template, 2, 1, "button", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const turn_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("failed", turn_r6.error);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", turn_r6.text, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(turn_r6.error?.retryable && ctx_r1.isLastTurn(turn_r6) ? 2 : -1);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const turn_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", turn_r6.proposal.summary, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const question_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", question_r8, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1.strings.questions_hint, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 39);
    \u0275\u0275element(1, "path");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r1.icons.error);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275conditionalCreate(1, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_10_Conditional_1_Template, 2, 1, ":svg:svg", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const turn_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(turn_r6.proposal.invalid_count || turn_r6.proposal.blocking ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1.selection_error(), " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const issue_r9 = ctx.$implicit;
    \u0275\u0275classProp("error", issue_r9.level === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", issue_r9.message, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure");
    \u0275\u0275element(1, "img", 41);
    \u0275\u0275elementStart(2, "figcaption", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", t_r1.strings.before);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1.strings.before, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure");
    \u0275\u0275element(1, "img", 41);
    \u0275\u0275elementStart(2, "figcaption", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", t_r1.strings.after);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1.strings.after, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275conditionalCreate(1, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_14_Conditional_1_Template, 4, 3, "figure");
    \u0275\u0275conditionalCreate(2, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_14_Conditional_2_Template, 4, 3, "figure");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_19_0;
    let tmp_20_0;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = ctx_r1.thumbnails().before) ? 1 : -1, tmp_19_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_20_0 = ctx_r1.thumbnails().after) ? 2 : -1, tmp_20_0);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 49);
    \u0275\u0275listener("change", function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Conditional_2_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const section_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.onGroup(section_r11.group, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r11 = \u0275\u0275nextContext().$implicit;
    const turn_r6 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", turn_r6.id + "-" + section_r11.key)("checked", section_r11.group.checked === "all")("indeterminate", section_r11.group.checked === "some")("disabled", section_r11.group.locked || !ctx_r1.isActive(turn_r6));
    \u0275\u0275attribute("aria-label", section_r11.label);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const section_r11 = \u0275\u0275nextContext().$implicit;
      const turn_r6 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleGroupOpen(turn_r6.id + ":" + section_r11.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r11 = \u0275\u0275nextContext().$implicit;
    const turn_r6 = \u0275\u0275nextContext(4).$implicit;
    const t_r1 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-expanded", ctx_r1.isGroupOpen(turn_r6.id + ":" + section_r11.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isGroupOpen(turn_r6.id + ":" + section_r11.key) ? t_r1.strings.hide_group : t_r1.strings.show_group, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Conditional_8_For_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Conditional_8_For_2_ng_container_0_Template, 1, 0, "ng-container", 18);
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const turn_r6 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275nextContext(4);
    const row_template_r14 = \u0275\u0275reference(4);
    \u0275\u0275property("ngTemplateOutlet", row_template_r14)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, row_r13, turn_r6));
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 48);
    \u0275\u0275repeaterCreate(1, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Conditional_8_For_2_Template, 1, 5, "ng-container", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r11.rows);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275conditionalCreate(2, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Conditional_2_Template, 1, 5, "input", 45);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Conditional_7_Template, 2, 2, "button", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Conditional_8_Template, 3, 0, "ul", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r11 = ctx.$implicit;
    const turn_r6 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("data-category", section_r11.key);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(section_r11.group ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r11.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r11.rows.length);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r11.rows.length >= 4 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isGroupOpen(turn_r6.id + ":" + section_r11.key) ? 8 : -1);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275repeaterCreate(1, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_For_2_Template, 9, 6, "div", 43, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sections_r15 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(sections_r15);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Conditional_0_Template, 3, 0, "div", 42);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length ? 0 : -1);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_16_For_4_Template_button_click_0_listener() {
      const chip_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const t_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(t_r1.toggleReason(chip_r17.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chip_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275classProp("on", ctx_r1.hasReason(chip_r17.key));
    \u0275\u0275attribute("aria-pressed", ctx_r1.hasReason(chip_r17.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chip_r17.label, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_16_For_4_Template, 2, 4, "button", 51, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.strings.reason_prompt);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.reason_chips());
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 27)(1, "header", 28)(2, "strong", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_6_Template, 2, 1, "p", 31);
    \u0275\u0275repeaterCreate(7, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_For_8_Template, 2, 1, "p", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(9, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_9_Template, 2, 1, "p", 33);
    \u0275\u0275conditionalCreate(10, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_10_Template, 3, 2, "p", 34);
    \u0275\u0275conditionalCreate(11, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_11_Template, 2, 1, "p", 35);
    \u0275\u0275repeaterCreate(12, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_For_13_Template, 2, 3, "p", 36, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(14, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_14_Template, 3, 2, "div", 37);
    \u0275\u0275conditionalCreate(15, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_15_Template, 1, 1);
    \u0275\u0275conditionalCreate(16, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Conditional_16_Template, 5, 1, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_25_0;
    let tmp_29_0;
    const turn_r6 = \u0275\u0275nextContext().$implicit;
    const t_r1 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("inactive", !ctx_r1.isActive(turn_r6));
    \u0275\u0275attribute("data-job", turn_r6.job_id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cardTitle(turn_r6.proposal));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.outcomeText(turn_r6), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(turn_r6.proposal.summary ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(turn_r6.proposal.questions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(turn_r6.proposal.questions.length ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_25_0 = ctx_r1.verdictText(turn_r6.proposal)) ? 10 : -1, tmp_25_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActive(turn_r6) && t_r1.selection_error() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(turn_r6.proposal.batch_issues);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isActive(turn_r6) && (ctx_r1.thumbnails().before || ctx_r1.thumbnails().after) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_29_0 = ctx_r1.sectionsOf(turn_r6.proposal)) ? 15 : -1, tmp_29_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActive(turn_r6) && ctx_r1.showsDecision() && ctx_r1.hasReasons() ? 16 : -1);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_0_Template, 4, 2, "li", 19)(1, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_1_Template, 3, 4, "li", 20)(2, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Case_2_Template, 17, 12, "li", 21);
  }
  if (rf & 2) {
    let tmp_17_0;
    const turn_r6 = ctx.$implicit;
    \u0275\u0275conditional((tmp_17_0 = turn_r6.kind) === "person" ? 0 : tmp_17_0 === "status" ? 1 : tmp_17_0 === "proposal" ? 2 : -1);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 14);
    \u0275\u0275element(1, "span", 53);
    \u0275\u0275elementStart(2, "span", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 55);
    \u0275\u0275listener("click", function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.running_text());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.cancelling());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cancelling() ? t_r1.strings.cancelling : t_r1.strings.cancel, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_13_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_13_Conditional_0_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.keep());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "path");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", ctx_r1.icons.check);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1.strings.keep, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275conditionalCreate(1, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_13_Conditional_0_Conditional_1_Template, 4, 2, "button", 57);
    \u0275\u0275elementStart(2, "button", 58);
    \u0275\u0275listener("click", function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_13_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.undo());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 59);
    \u0275\u0275element(4, "path");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.phase().kind === "applied" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("wide", ctx_r1.phase().kind !== "applied");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", ctx_r1.icons.undo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1.strings.undo, " ");
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_13_Conditional_0_Template, 6, 5, "div", 56);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.showsDecision() ? 0 : -1);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_14_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_14_ng_container_0_Template, 1, 0, "ng-container", 18);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275nextContext();
    const composer_template_r5 = \u0275\u0275reference(2);
    \u0275\u0275property("ngTemplateOutlet", composer_template_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, t_r1));
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 8)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_3_Template, 6, 2, "label", 9)(4, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_4_Template, 2, 1, "p", 10);
    \u0275\u0275conditionalCreate(5, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_5_Template, 2, 1, "p", 11);
    \u0275\u0275conditionalCreate(6, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_6_Template, 2, 1, "p", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_7_Template, 1, 4, "ng-container");
    \u0275\u0275elementStart(8, "ol", 13, 2);
    \u0275\u0275repeaterCreate(10, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_For_11_Template, 3, 1, null, null, _forTrack0);
    \u0275\u0275conditionalCreate(12, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_12_Template, 6, 3, "li", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_13_Template, 1, 1);
    \u0275\u0275conditionalCreate(14, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Conditional_14_Template, 1, 4, "ng-container");
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_16_0;
    const t_r1 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.strings.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.model_options().length > 1 ? 3 : ctx_r1.model_note() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.quota_note() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = t_r1.quota_block()) ? 6 : -1, tmp_10_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(!t_r1.turns().length && ctx_r1.phase().kind !== "running" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("empty", !t_r1.turns().length);
    \u0275\u0275attribute("aria-label", t_r1.strings.title);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(t_r1.turns());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.phase().kind === "running" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r1.activeTurn()) ? 13 : -1, tmp_16_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r1.turns().length || ctx_r1.phase().kind === "running" ? 14 : -1);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_1_Template, 2, 1, "p", 5)(2, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_2_Template, 2, 1, "p", 6)(3, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_3_Template, 2, 1, "p", 7)(4, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Case_4_Template, 15, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const t_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-busy", t_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.phase().kind) === "idle" ? 1 : tmp_6_0 === "checking" ? 2 : tmp_6_0 === "unavailable" ? 3 : 4);
  }
}
function MapEditorAiPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MapEditorAiPanelComponent_Conditional_0_Conditional_0_Template, 5, 2, "div", 3);
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.hidden() ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.announcement(), " ");
  }
}
function MapEditorAiPanelComponent_ng_template_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 69);
    \u0275\u0275listener("click", function MapEditorAiPanelComponent_ng_template_1_Conditional_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 59);
    \u0275\u0275element(4, "path");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r23 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectionText(), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r23.strings.clear_selection);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", ctx_r1.icons.close);
  }
}
function MapEditorAiPanelComponent_ng_template_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("error", ctx_r1.too_long());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.chars_note(), " ");
  }
}
function MapEditorAiPanelComponent_ng_template_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function MapEditorAiPanelComponent_ng_template_1_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newRequest());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r23.strings.new_request, " ");
  }
}
function MapEditorAiPanelComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 61);
    \u0275\u0275listener("submit", function MapEditorAiPanelComponent_ng_template_1_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.send($event));
    });
    \u0275\u0275elementStart(1, "label", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 63);
    \u0275\u0275listener("input", function MapEditorAiPanelComponent_ng_template_1_Template_textarea_input_3_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDraft($event));
    })("keydown", function MapEditorAiPanelComponent_ng_template_1_Template_textarea_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64);
    \u0275\u0275conditionalCreate(5, MapEditorAiPanelComponent_ng_template_1_Conditional_5_Template, 5, 3, "span", 65);
    \u0275\u0275conditionalCreate(6, MapEditorAiPanelComponent_ng_template_1_Conditional_6_Template, 2, 3, "span", 66);
    \u0275\u0275element(7, "span", 54);
    \u0275\u0275conditionalCreate(8, MapEditorAiPanelComponent_ng_template_1_Conditional_8_Template, 2, 1, "button", 67);
    \u0275\u0275elementStart(9, "button", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 59);
    \u0275\u0275element(11, "path");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r23 = ctx.$implicit;
    const first_r25 = ctx.first;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("first", first_r25);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r23.strings.composer_label, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("tall", first_r25);
    \u0275\u0275property("value", ctx_r1.draft())("placeholder", ctx_r1.placeholder())("disabled", !t_r23.can_send());
    \u0275\u0275attribute("aria-invalid", ctx_r1.too_long());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selection_count() > 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.chars_note() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(t_r23.turns().length ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.can_send());
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", ctx_r1.icons.send);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r23.strings.send, " ");
  }
}
function MapEditorAiPanelComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 84);
    \u0275\u0275listener("change", function MapEditorAiPanelComponent_ng_template_3_Conditional_1_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r28);
      const row_r27 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRow(row_r27, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r28 = \u0275\u0275nextContext();
    const row_r27 = ctx_r28.$implicit;
    const turn_r30 = ctx_r28.turn;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("id", turn_r30.id + "-" + row_r27.id)("checked", row_r27.checked)("disabled", row_r27.locked || !ctx_r1.isActive(turn_r30));
    \u0275\u0275attribute("aria-describedby", turn_r30.id + "-" + row_r27.id + "-notes");
  }
}
function MapEditorAiPanelComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 74);
  }
}
function MapEditorAiPanelComponent_ng_template_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "path");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", ctx_r1.icons.lock);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.words().locked_note, " ");
  }
}
function MapEditorAiPanelComponent_ng_template_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "path");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r27 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", ctx_r1.icons.needs);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.needsText(row_r27), " ");
  }
}
function MapEditorAiPanelComponent_ng_template_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r27.note);
  }
}
function MapEditorAiPanelComponent_ng_template_3_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const issue_r31 = ctx.$implicit;
    \u0275\u0275classProp("error", issue_r31.level === "error")("warning", issue_r31.level === "warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", issue_r31.message, " ");
  }
}
function MapEditorAiPanelComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 72);
    \u0275\u0275listener("mouseenter", function MapEditorAiPanelComponent_ng_template_3_Template_li_mouseenter_0_listener() {
      const row_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hoverRow(row_r27));
    })("mouseleave", function MapEditorAiPanelComponent_ng_template_3_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hoverRow(null));
    })("focusin", function MapEditorAiPanelComponent_ng_template_3_Template_li_focusin_0_listener() {
      const row_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hoverRow(row_r27));
    })("focusout", function MapEditorAiPanelComponent_ng_template_3_Template_li_focusout_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hoverRow(null));
    });
    \u0275\u0275conditionalCreate(1, MapEditorAiPanelComponent_ng_template_3_Conditional_1_Template, 1, 4, "input", 73)(2, MapEditorAiPanelComponent_ng_template_3_Conditional_2_Template, 1, 0, "span", 74);
    \u0275\u0275elementStart(3, "span", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 77)(8, "span", 78);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 79);
    \u0275\u0275listener("click", function MapEditorAiPanelComponent_ng_template_3_Template_button_click_10_listener() {
      const row_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectRow(row_r27));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 80);
    \u0275\u0275conditionalCreate(13, MapEditorAiPanelComponent_ng_template_3_Conditional_13_Template, 4, 2, "span", 81);
    \u0275\u0275conditionalCreate(14, MapEditorAiPanelComponent_ng_template_3_Conditional_14_Template, 4, 2, "span", 82);
    \u0275\u0275conditionalCreate(15, MapEditorAiPanelComponent_ng_template_3_Conditional_15_Template, 2, 1, "span", 15);
    \u0275\u0275repeaterCreate(16, MapEditorAiPanelComponent_ng_template_3_For_17_Template, 2, 5, "span", 83, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    const turn_r30 = ctx.turn;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hot", ctx_r1.isHot(row_r27));
    \u0275\u0275attribute("data-category", row_r27.category)("data-index", row_r27.index);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r27.actionable ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r27.index + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.categoryWord(row_r27));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r27.kind_word);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r27.text, " ");
    \u0275\u0275advance();
    \u0275\u0275property("id", turn_r30.id + "-" + row_r27.id + "-notes");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r27.actionable && row_r27.locked ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r27.depends_on.length ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r27.note ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r27.issues);
  }
}
var THUMBNAIL_MAX_BYTES = 15e5;
var LONG_RUNNING_S = 10;
function objectUrl(markup) {
  if (!markup || markup.length > THUMBNAIL_MAX_BYTES)
    return null;
  if (typeof URL === "undefined" || typeof URL.createObjectURL !== "function")
    return null;
  try {
    return URL.createObjectURL(new Blob([markup], { type: "image/svg+xml" }));
  } catch {
    return null;
  }
}
function revokeUrl(url) {
  if (url && typeof URL.revokeObjectURL === "function")
    URL.revokeObjectURL(url);
}
var IDLE = { kind: "idle" };
var SECTION_ORDER = [
  "added",
  "changed",
  "removed",
  "question",
  "none"
];
var MapEditorAiPanelComponent = class _MapEditorAiPanelComponent {
  constructor() {
    this.session = input.required(
      ...ngDevMode ? [{ debugName: "session" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone_id = input.required(
      ...ngDevMode ? [{ debugName: "zone_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.upload = input(
      null,
      ...ngDevMode ? [{ debugName: "upload" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.strings = input(
      null,
      ...ngDevMode ? [{ debugName: "strings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.transport = input(
      void 0,
      ...ngDevMode ? [{ debugName: "transport" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.thread = signal(
      null,
      ...ngDevMode ? [{ debugName: "thread" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.draft = signal(
      "",
      ...ngDevMode ? [{ debugName: "draft" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.closed_groups = signal(
      /* @__PURE__ */ new Set(),
      ...ngDevMode ? [{ debugName: "closed_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icons = PANEL_ICONS;
    this._thread_list = viewChild(
      "threadList",
      ...ngDevMode ? [{ debugName: "_thread_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.thumbnails = signal(
      {
        before: null,
        after: null
      },
      ...ngDevMode ? [{ debugName: "thumbnails" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.elapsed_s = signal(
      0,
      ...ngDevMode ? [{ debugName: "elapsed_s" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = computed(
      () => this.thread()?.state() ?? null,
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.words = computed(
      () => this.thread()?.strings ?? DEFAULT_AI_STRINGS,
      ...ngDevMode ? [{ debugName: "words" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.phase = computed(
      () => this.state()?.phase ?? IDLE,
      ...ngDevMode ? [{ debugName: "phase" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hidden = computed(
      () => {
        const phase = this.phase();
        return phase.kind === "unavailable" && phase.hidden;
      },
      ...ngDevMode ? [{ debugName: "hidden" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selection_count = computed(
      () => this.session().selection().length,
      ...ngDevMode ? [{ debugName: "selection_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.limits = computed(
      () => this.state()?.capabilities?.limits ?? null,
      ...ngDevMode ? [{ debugName: "limits" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model_note = computed(
      () => {
        const thread = this.thread();
        const capabilities = thread?.capabilities();
        const choice = thread?.choice();
        if (!thread || !capabilities?.enabled || !choice)
          return "";
        const provider = capabilities.providers.find((candidate) => candidate.id === choice.provider_id);
        return provider ? format(thread.strings.model_note, {
          model: choice.model,
          provider: provider.name
        }) : "";
      },
      ...ngDevMode ? [{ debugName: "model_note" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model_options = computed(
      () => this.thread()?.model_options() ?? [],
      ...ngDevMode ? [{ debugName: "model_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model_key = computed(
      () => {
        const choice = this.thread()?.choice();
        return choice ? modelKey(choice) : "";
      },
      ...ngDevMode ? [{ debugName: "model_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.quota_note = computed(
      () => {
        const thread = this.thread();
        const quota = thread?.capabilities()?.quota;
        if (!thread || !quota)
          return "";
        const notes = [];
        if (typeof quota.user_remaining_today === "number") {
          notes.push(format(thread.strings.quota_note, {
            count: quota.user_remaining_today
          }));
        }
        if (typeof quota.domain_remaining_month === "number") {
          notes.push(format(thread.strings.quota_domain_note, {
            count: quota.domain_remaining_month
          }));
        }
        return notes.join(" \xB7 ");
      },
      ...ngDevMode ? [{ debugName: "quota_note" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.chars_note = computed(
      () => {
        const thread = this.thread();
        const max = this.limits()?.max_instruction_chars;
        return thread && max ? format(thread.strings.chars, {
          used: this.draft().length,
          max
        }) : "";
      },
      ...ngDevMode ? [{ debugName: "chars_note" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.too_long = computed(
      () => {
        const max = this.limits()?.max_instruction_chars;
        return !!max && this.draft().length > max;
      },
      ...ngDevMode ? [{ debugName: "too_long" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_send = computed(
      () => {
        const thread = this.thread();
        return !!thread && thread.can_send() && this.draft().trim().length > 0 && !this.too_long();
      },
      ...ngDevMode ? [{ debugName: "can_send" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.placeholder = computed(
      () => {
        const thread = this.thread();
        if (!thread)
          return "";
        return thread.proposal()?.verdict === "questions" ? thread.strings.reply_placeholder : thread.strings.composer_placeholder;
      },
      ...ngDevMode ? [{ debugName: "placeholder" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cancelling = computed(
      () => {
        const phase = this.phase();
        return phase.kind === "running" && phase.cancelling;
      },
      ...ngDevMode ? [{ debugName: "cancelling" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.running_text = computed(
      () => {
        const thread = this.thread();
        if (!thread || this.phase().kind !== "running")
          return "";
        const seconds = this.elapsed_s();
        return seconds >= LONG_RUNNING_S ? format(thread.strings.running_long, { seconds }) : thread.strings.running;
      },
      ...ngDevMode ? [{ debugName: "running_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.reason_chips = computed(
      () => {
        const thread = this.thread();
        if (!thread)
          return [];
        return Object.entries(thread.strings.reasons).map(([key, label]) => ({
          key,
          label
        }));
      },
      ...ngDevMode ? [{ debugName: "reason_chips" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_job_id = computed(
      () => this.thread()?.proposal()?.job.id ?? null,
      ...ngDevMode ? [{ debugName: "active_job_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectionText = computed(
      () => {
        const thread = this.thread();
        return thread ? format(thread.strings.selection_chip, {
          count: this.selection_count()
        }) : "";
      },
      ...ngDevMode ? [{ debugName: "selectionText" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.unavailableText = computed(
      () => {
        const thread = this.thread();
        const phase = this.phase();
        if (!thread || phase.kind !== "unavailable")
          return "";
        return format(thread.strings.unavailable, { reason: phase.reason });
      },
      ...ngDevMode ? [{ debugName: "unavailableText" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.showsDecision = computed(
      () => {
        const phase = this.phase();
        if (phase.kind === "applied")
          return true;
        return phase.kind === "reviewing" && !phase.validating && phase.proposal.rows.some((row) => row.actionable);
      },
      ...ngDevMode ? [{ debugName: "showsDecision" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect((onCleanup) => {
      const proposal = this.thread()?.proposal() ?? null;
      const thumbnails = {
        before: objectUrl(proposal?.before_markup),
        after: proposal?.verdict === "blocked" ? null : objectUrl(proposal?.trial_markup)
      };
      untracked(() => this.thumbnails.set(thumbnails));
      onCleanup(() => {
        revokeUrl(thumbnails.before);
        revokeUrl(thumbnails.after);
      });
    });
    effect(() => {
      const session = this.session();
      const thread = this.thread();
      const proposal = thread?.proposal() ?? null;
      const previewed = this.phase().kind === "applied";
      const summary = thread && proposal && previewed ? previewSummary(proposal, thread.strings) : null;
      untracked(() => session.setPreview?.(summary));
    });
    effect(() => {
      const id = this.active_job_id();
      const list = this._thread_list()?.nativeElement;
      if (!id || !list)
        return;
      setTimeout(() => {
        const turn = list.querySelector(`[proposal-card][data-job="${id}"]`);
        if (turn)
          list.scrollTop = turn.offsetTop - list.offsetTop;
      });
    });
    effect((onCleanup) => {
      const phase = this.phase();
      if (phase.kind !== "running") {
        untracked(() => this.elapsed_s.set(0));
        return;
      }
      const started = phase.started_at;
      const tick = () => this.elapsed_s.set(Math.max(0, Math.floor((Date.now() - started) / 1e3)));
      untracked(tick);
      const timer = setInterval(tick, 1e3);
      onCleanup(() => clearInterval(timer));
    });
  }
  ngOnInit() {
    const thread = new MapAiThread(this.session(), this.zone_id(), {
      transport: this.transport(),
      upload: this.upload(),
      strings: this.strings()
    });
    this.thread.set(thread);
    void thread.load();
  }
  ngOnDestroy() {
    this.thread()?.dispose();
    this.session().setPreview?.(null);
  }
  onDraft(event) {
    const value = event.target.value;
    this.draft.set(value);
    this.thread()?.setDraft(value);
  }
  onKeydown(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      void this.send();
    }
  }
  async send(event) {
    event?.preventDefault();
    const thread = this.thread();
    if (!thread || !this.can_send())
      return;
    const text2 = this.draft();
    this.draft.set("");
    await thread.submit(text2);
  }
  retry() {
    void this.thread()?.retry();
  }
  cancel() {
    void this.thread()?.cancel();
  }
  keep() {
    void this.thread()?.keep();
  }
  undo() {
    void this.thread()?.undo();
  }
  newRequest() {
    this.thread()?.reset();
    this.draft.set("");
  }
  clearSelection() {
    this.session().select([]);
  }
  hasReason(key) {
    return this.state()?.reasons.includes(key) ?? false;
  }
  isActive(turn) {
    return turn.kind === "proposal" && turn.job_id === this.active_job_id();
  }
  isLastTurn(turn) {
    const turns = this.thread()?.turns() ?? [];
    return turns[turns.length - 1]?.id === turn.id;
  }
  onRow(row, event) {
    const checkbox = event.target;
    const checked = checkbox.checked;
    checkbox.checked = row.checked;
    void this.thread()?.toggle(row.index, checked);
  }
  onGroup(group2, event) {
    const checkbox = event.target;
    const checked = checkbox.checked;
    checkbox.checked = group2.checked === "all";
    checkbox.indeterminate = group2.checked === "some";
    void this.thread()?.toggleGroup(group2, checked);
  }
  isGroupOpen(key) {
    return !this.closed_groups().has(key);
  }
  toggleGroupOpen(key) {
    this.closed_groups.update((closed) => {
      const next = new Set(closed);
      if (next.has(key))
        next.delete(key);
      else
        next.add(key);
      return next;
    });
  }
  /** The proposal's rows by category, in the order added, changed, removed, question, none. */
  sectionsOf(proposal) {
    const thread = this.thread();
    if (!thread)
      return [];
    const sections = [];
    for (const category of SECTION_ORDER) {
      const rows = proposal.rows.filter((row) => row.category === category);
      if (!rows.length)
        continue;
      const tickable = rows.filter((row) => row.actionable && !row.locked);
      const ticked = tickable.filter((row) => row.checked).length;
      const group2 = tickable.length >= 3 ? {
        key: category,
        label: thread.strings.categories[category],
        category,
        kind: rows[0].kind,
        indices: rows.map((row) => row.index),
        checked: ticked === 0 ? "none" : ticked === tickable.length ? "all" : "some",
        locked: false
      } : null;
      sections.push({
        key: category,
        label: thread.strings.categories[category],
        rows,
        group: group2
      });
    }
    return sections;
  }
  activeTurn() {
    const id = this.active_job_id();
    if (!id)
      return null;
    return this.thread()?.turns().find((turn) => turn.kind === "proposal" && turn.job_id === id) ?? null;
  }
  hasReasons() {
    return this.reason_chips().length > 0;
  }
  /** The row's element is under the pointer, on the map or in the list. */
  isHot(row) {
    const hover = this.session().hover();
    return !!hover && row.anchors.includes(hover);
  }
  rowsOf(proposal, group2) {
    return group2.indices.map((index) => proposal.rows[index]).filter((row) => !!row);
  }
  hoverRow(row) {
    this.thread()?.hoverRow(row);
  }
  selectRow(row) {
    this.thread()?.selectRow(row);
  }
  categoryWord(row) {
    return this.thread()?.strings.categories[row.category] ?? row.category;
  }
  needsText(row) {
    const thread = this.thread();
    if (!thread)
      return "";
    return row.depends_on.map((index) => format(thread.strings.needs, { n: index + 1 })).join(", ");
  }
  cardTitle(proposal) {
    const thread = this.thread();
    if (!thread)
      return "";
    if (proposal.verdict === "questions")
      return thread.strings.questions_title;
    return format(thread.strings.proposal_title, {
      count: proposal.rows.filter((row) => row.actionable).length
    });
  }
  verdictText(proposal) {
    const thread = this.thread();
    if (!thread)
      return "";
    const states = thread.strings.states;
    switch (proposal.verdict) {
      case "empty":
        return format(states.empty, {
          summary: proposal.summary || "-"
        });
      case "blocked":
        return states.blocked;
      case "nothing_accepted":
        return states.nothing_accepted;
      case "questions":
        return "";
      default:
        return proposal.invalid_count ? format(states.partially_invalid, {
          count: proposal.rows.filter((row) => row.actionable).length,
          invalid: proposal.invalid_count
        }) : "";
    }
  }
  outcomeText(turn) {
    const thread = this.thread();
    if (!thread || turn.kind !== "proposal")
      return "";
    const outcomes = thread.strings.outcomes;
    switch (turn.outcome) {
      case "partial": {
        const total = turn.proposal.rows.filter((row) => row.actionable).length;
        return format(outcomes.partial, {
          accepted: turn.proposal.accepted.length,
          total
        });
      }
      case "refined":
      case "abandoned":
        return outcomes.kept;
      default:
        return outcomes[turn.outcome] ?? "";
    }
  }
  personMeta(turn) {
    const thread = this.thread();
    if (!thread || turn.kind !== "person")
      return "";
    const parts = [];
    if (turn.selected)
      parts.push(format(thread.strings.selection_chip, { count: turn.selected }));
    if (turn.snapshot)
      parts.push(thread.strings.snapshot_attached);
    return parts.join(" \xB7 ");
  }
  chooseModel(event) {
    const thread = this.thread();
    if (!thread)
      return;
    const key = event.target.value;
    const option = thread.model_options().find((candidate) => candidate.key === key);
    thread.chooseModel(option ? { provider_id: option.provider_id, model: option.model } : null);
  }
  static {
    this.\u0275fac = function MapEditorAiPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapEditorAiPanelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapEditorAiPanelComponent, selectors: [["map-editor-ai-panel"]], viewQuery: function MapEditorAiPanelComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._thread_list, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { session: [1, "session"], zone_id: [1, "zone_id"], upload: [1, "upload"], strings: [1, "strings"], transport: [1, "transport"] }, decls: 5, vars: 1, consts: [["composer_template", ""], ["row_template", ""], ["threadList", ""], [1, "panel"], ["role", "status", "aria-live", "polite", "aria-atomic", "true", "live", "", 1, "sr-only"], [1, "note"], ["role", "status", 1, "note"], ["role", "status", "unavailable", "", 1, "note"], ["capabilities", "", 1, "head"], ["model-choice", "", 1, "model"], ["model-note", ""], ["quota-note", "", 1, "muted"], ["role", "status", "quota-block", "", 1, "error"], ["thread", "", 1, "thread"], ["role", "status", "running", "", 1, "status", "running"], [1, "muted"], [3, "change", "value"], [3, "value", "selected"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["person-turn", "", 1, "person"], ["role", "status", "status-turn", "", 1, "status", 3, "failed"], ["proposal-card", "", 1, "proposal", 3, "inactive"], [1, "bubble"], [1, "meta", "muted"], ["role", "status", "status-turn", "", 1, "status"], ["type", "button", "retry", "", 1, "link"], ["type", "button", "retry", "", 1, "link", 3, "click"], ["proposal-card", "", 1, "proposal"], [1, "title-row"], ["card-title", ""], ["outcome", "", 1, "muted"], ["summary", "", 1, "summary"], ["question", "", 1, "question"], ["hint", "", 1, "small", "muted"], ["role", "status", "verdict", "", 1, "verdict"], ["role", "alert", "selection-error", "", 1, "small", "error"], ["batch-issue", "", 1, "small", 3, "error"], ["thumbnails", "", 1, "thumbs"], ["reasons", "", 1, "reasons", "small"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "error"], ["batch-issue", "", 1, "small"], [3, "src", "alt"], [1, "changes"], ["row-group", "", 1, "section"], [1, "section-head"], ["type", "checkbox", 3, "id", "checked", "indeterminate", "disabled"], [1, "muted", "count"], ["type", "button", 1, "link"], ["rows", "", 1, "rows"], ["type", "checkbox", 3, "change", "id", "checked", "indeterminate", "disabled"], ["type", "button", 1, "link", 3, "click"], ["type", "button", "reason", "", 1, "chip", 3, "on"], ["type", "button", "reason", "", 1, "chip", 3, "click"], ["aria-hidden", "true", 1, "spinner"], [1, "grow"], ["type", "button", "cancel", "", 1, "link", 3, "click", "disabled"], ["decision", "", 1, "decide"], ["type", "button", "keep", "", 1, "btn"], ["type", "button", "undo", "", 1, "btn", "inverse", 3, "click"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["type", "button", "keep", "", 1, "btn", 3, "click"], ["composer", "", 1, "composer", 3, "submit"], ["for", "map-editor-ai-draft"], ["id", "map-editor-ai-draft", 3, "input", "keydown", "value", "placeholder", "disabled"], ["chips", "", 1, "footer"], ["selection-chip", "", 1, "chip"], ["chars", "", 1, "small", "muted", 3, "error"], ["type", "button", "new-request", "", 1, "link"], ["type", "submit", "send", "", 1, "btn", 3, "disabled"], ["type", "button", 1, "clear", 3, "click"], ["chars", "", 1, "small", "muted"], ["type", "button", "new-request", "", 1, "link", 3, "click"], ["row", "", 1, "row", 3, "mouseenter", "mouseleave", "focusin", "focusout"], ["type", "checkbox", 3, "id", "checked", "disabled"], ["aria-hidden", "true", 1, "spacer"], ["aria-hidden", "true", 1, "num"], [1, "sr-only"], [1, "body"], [1, "kind", "muted"], ["type", "button", "row-text", "", 1, "row-text", 3, "click"], [1, "notes", 3, "id"], ["locked", "", 1, "error"], ["needs", "", 1, "muted"], ["issue", "", 3, "error", "warning"], ["type", "checkbox", 3, "change", "id", "checked", "disabled"], ["issue", ""]], template: function MapEditorAiPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MapEditorAiPanelComponent_Conditional_0_Template, 3, 2);
        \u0275\u0275template(1, MapEditorAiPanelComponent_ng_template_1_Template, 13, 15, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, MapEditorAiPanelComponent_ng_template_3_Template, 18, 13, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275conditional((tmp_2_0 = ctx.thread()) ? 0 : -1, tmp_2_0);
      }
    }, dependencies: [NgTemplateOutlet], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  color: var(--%NS%base-content, #111);\n  font-size: 0.875rem;\n}\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n  border: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  opacity: 0.72;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--%NS%error, #dc2626);\n  opacity: 1;\n}\n.warning[_ngcontent-%COMP%] {\n  color: var(--%NS%warn, #d97706);\n}\n.grow[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.note[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.75rem 1rem;\n  font-size: 0.75rem;\n  opacity: 0.72;\n}\n.head[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--%NS%base-200, #e5e7eb);\n}\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.5rem;\n}\n.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  margin-top: 0.125rem;\n}\n.model[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n}\n.model[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  height: 2rem;\n  padding: 0 0.5rem;\n  border: 1px solid var(--%NS%base-300, #d4d4d8);\n  border-radius: 0.375rem;\n  background: var(--%NS%base-100, #fff);\n  color: inherit;\n  font: inherit;\n  font-size: 0.875rem;\n}\n.thread[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 0.75rem;\n  min-height: 0;\n  margin: 0;\n  padding: 0.75rem 1rem;\n  overflow: auto;\n  list-style: none;\n}\n.thread.empty[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.person[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n.bubble[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.5rem;\n  background: var(--%NS%base-200, #f4f4f5);\n  line-height: 1.25rem;\n  white-space: pre-wrap;\n}\n.meta[_ngcontent-%COMP%] {\n  margin: 0.125rem 0 0;\n  font-size: 0.75rem;\n}\n.status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid var(--%NS%base-300, #d4d4d8);\n  border-radius: 0.5rem;\n}\n.status.failed[_ngcontent-%COMP%] {\n  border-color: var(--%NS%error, #dc2626);\n}\n.proposal.inactive[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 0.5rem;\n  padding: 0 0.125rem 0.375rem;\n}\n.title-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n}\n.title-row[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.summary[_ngcontent-%COMP%] {\n  margin: 0 0.125rem 0.5rem;\n  line-height: 1.25rem;\n}\n.question[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  background: var(--%NS%base-200, #f4f4f5);\n}\n.proposal[_ngcontent-%COMP%]   p.small[_ngcontent-%COMP%] {\n  margin: 0 0.125rem 0.5rem;\n}\n.verdict[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  margin: 0 0.125rem 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.verdict[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex: none;\n  fill: currentColor;\n}\n.thumbs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.5rem;\n  margin: 0 0 0.625rem;\n}\n.thumbs[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  margin: 0;\n}\n.thumbs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  border: 1px solid var(--%NS%base-300, #d4d4d8);\n  border-radius: 0.25rem;\n  background: var(--%NS%base-200, #f4f4f5);\n}\n.thumbs[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.changes[_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%base-300, #d4d4d8);\n  border-radius: 0.5rem;\n}\n.section[_ngcontent-%COMP%]    + .section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--%NS%base-200, #e5e7eb);\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  padding: 0.625rem 0.625rem 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n.section-head[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.section-head[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  flex: none;\n  width: 1rem;\n  height: 1rem;\n  margin: 0;\n  accent-color: var(--%NS%secondary, #1f2155);\n}\n.rows[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0 0.25rem;\n  list-style: none;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.625rem;\n  padding: 0.5rem 0.625rem;\n  border-radius: 0.375rem;\n  line-height: 1.25rem;\n}\n.row[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n.row[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: none;\n  width: 1rem;\n}\n.row.hot[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%primary, #2563eb) 10%, transparent);\n}\n.num[_ngcontent-%COMP%] {\n  flex: none;\n  min-width: 22px;\n  height: 22px;\n  margin-top: -2px;\n  padding: 0 4px;\n  border: 2px solid var(--%NS%info, #2563eb);\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  line-height: 18px;\n  text-align: center;\n}\n.row[data-category=added][_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  border-color: var(--%NS%success, #16a34a);\n}\n.row[data-category=removed][_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  border-color: var(--%NS%error, #dc2626);\n  border-style: dashed;\n}\n.row[data-category=question][_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  border-color: var(--%NS%warn, #d97706);\n}\n.row.hot[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  background: var(--%NS%primary, #2563eb);\n  border-color: var(--%NS%primary, #2563eb);\n  border-style: solid;\n  color: var(--%NS%primary-content, #fff);\n}\n.row[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.kind[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n  font-size: 0.75rem;\n}\n.row-text[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.row-text[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n}\n.notes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.25rem 0.5rem;\n  margin-top: 0.125rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.notes[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.notes[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.notes[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n  flex: none;\n  fill: currentColor;\n}\n.link[_ngcontent-%COMP%] {\n  padding: 0 0.25rem;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 0.75rem;\n  font-weight: 500;\n  opacity: 0.8;\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.link[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.reasons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.25rem;\n  margin: 0.5rem 0.125rem 0;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  height: 1.5rem;\n  padding: 0 0.5rem;\n  border: none;\n  border-radius: 999px;\n  background: var(--%NS%base-200, #f4f4f5);\n  color: inherit;\n  font: inherit;\n  font-size: 0.75rem;\n  font-weight: 500;\n  white-space: nowrap;\n  cursor: default;\n}\nbutton.chip[_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%base-300, #d4d4d8);\n  background: transparent;\n  cursor: pointer;\n}\nbutton.chip.on[_ngcontent-%COMP%] {\n  background: var(--%NS%base-200, #f4f4f5);\n}\n.chip[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-left: 0.125rem;\n  padding: 0;\n  border: none;\n  background: none;\n  color: inherit;\n  cursor: pointer;\n}\n.chip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  fill: currentColor;\n}\n.decide[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-top: 1px solid var(--%NS%base-200, #e5e7eb);\n}\n.decide[_ngcontent-%COMP%]   .wide[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  min-height: 3rem;\n  padding: 0 1rem;\n  border: 1px solid var(--%NS%secondary, #1f2155);\n  border-radius: 0.5rem;\n  background: var(--%NS%secondary, #1f2155);\n  color: var(--%NS%secondary-content, #fff);\n  font: inherit;\n  font-weight: 500;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.btn.inverse[_ngcontent-%COMP%] {\n  border-color: transparent;\n  background: color-mix(in srgb, var(--%NS%secondary, #1f2155) 15%, transparent);\n  color: var(--%NS%secondary, #1f2155);\n}\n.theme-dark[_nghost-%COMP%]   .btn.inverse[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .btn.inverse[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #fff 15%, transparent);\n  color: #fff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n.btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  fill: currentColor;\n}\n.composer[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem 1rem;\n  border-top: 1px solid var(--%NS%base-200, #e5e7eb);\n}\n.composer.first[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: none;\n}\n.composer[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.composer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 5.25rem;\n  padding: 0.625rem 0.75rem;\n  border: 1px solid var(--%NS%base-300, #d4d4d8);\n  border-radius: 0.5rem;\n  background: var(--%NS%base-100, #fff);\n  color: inherit;\n  font: inherit;\n  line-height: 1.4;\n  resize: none;\n}\n.composer[_ngcontent-%COMP%]   textarea.tall[_ngcontent-%COMP%] {\n  height: 9rem;\n}\n.composer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus-visible, \n.row-text[_ngcontent-%COMP%]:focus-visible, \n.link[_ngcontent-%COMP%]:focus-visible, \n.btn[_ngcontent-%COMP%]:focus-visible, \n.chip[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%]:focus-visible, \nbutton.chip[_ngcontent-%COMP%]:focus-visible, \ninput[type=checkbox][_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%primary, #2563eb);\n  outline-offset: 2px;\n}\n.composer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 9999px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  animation: _ngcontent-%COMP%_map-editor-ai-spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_map-editor-ai-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: no-preference) {\n  .row[_ngcontent-%COMP%], \n   .num[_ngcontent-%COMP%], \n   .btn[_ngcontent-%COMP%], \n   .link[_ngcontent-%COMP%], \n   button.chip[_ngcontent-%COMP%] {\n    transition:\n      background-color 120ms,\n      box-shadow 120ms,\n      outline-color 120ms;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .spinner[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=ai-panel.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapEditorAiPanelComponent, [{
    type: Component,
    args: [{ selector: "map-editor-ai-panel", changeDetection: ChangeDetectionStrategy.OnPush, template: `
        @if (thread(); as t) {
            @if (!hidden()) {
                <div
                    class="panel"
                    [attr.aria-busy]="t.busy()"
                >
                    @switch (phase().kind) {
                        @case ('idle') {
                            <p class="note">{{ t.strings.checking }}</p>
                        }
                        @case ('checking') {
                            <p class="note" role="status">
                                {{ t.strings.checking }}
                            </p>
                        }
                        @case ('unavailable') {
                            <p class="note" role="status" unavailable>
                                {{ unavailableText() }}
                            </p>
                        }
                        @default {
                            <header class="head" capabilities>
                                <h2>{{ t.strings.title }}</h2>
                                @if (model_options().length > 1) {
                                    <label class="model" model-choice>
                                        <span class="muted">
                                            {{ t.strings.model_label }}
                                        </span>
                                        <select
                                            [value]="model_key()"
                                            (change)="chooseModel($event)"
                                        >
                                            @for (
                                                option of model_options();
                                                track option.key
                                            ) {
                                                <option
                                                    [value]="option.key"
                                                    [selected]="
                                                        option.key ===
                                                        model_key()
                                                    "
                                                >
                                                    {{ option.model }} \xB7
                                                    {{ option.provider_name }}
                                                </option>
                                            }
                                        </select>
                                    </label>
                                } @else if (model_note()) {
                                    <p model-note>{{ model_note() }}</p>
                                }
                                @if (quota_note()) {
                                    <p class="muted" quota-note>
                                        {{ quota_note() }}
                                    </p>
                                }
                                @if (t.quota_block(); as block) {
                                    <p
                                        class="error"
                                        role="status"
                                        quota-block
                                    >
                                        {{ block }}
                                    </p>
                                }
                            </header>
                            @if (!t.turns().length && phase().kind !== 'running') {
                                <ng-container
                                    *ngTemplateOutlet="
                                        composer_template;
                                        context: { $implicit: t, first: true }
                                    "
                                />
                            }
                            <ol
                                #threadList
                                class="thread"
                                [class.empty]="!t.turns().length"
                                [attr.aria-label]="t.strings.title"
                                thread
                            >
                                @for (turn of t.turns(); track turn.id) {
                                    @switch (turn.kind) {
                                        @case ('person') {
                                            <li class="person" person-turn>
                                                <p class="bubble">
                                                    {{ turn.instruction }}
                                                </p>
                                                @if (personMeta(turn)) {
                                                    <p class="meta muted">
                                                        {{ personMeta(turn) }}
                                                    </p>
                                                }
                                            </li>
                                        }
                                        @case ('status') {
                                            <li
                                                class="status"
                                                [class.failed]="turn.error"
                                                role="status"
                                                status-turn
                                            >
                                                {{ turn.text }}
                                                @if (
                                                    turn.error?.retryable &&
                                                    isLastTurn(turn)
                                                ) {
                                                    <button
                                                        type="button"
                                                        class="link"
                                                        retry
                                                        (click)="retry()"
                                                    >
                                                        {{ t.strings.retry }}
                                                    </button>
                                                }
                                            </li>
                                        }
                                        @case ('proposal') {
                                            <li
                                                class="proposal"
                                                [class.inactive]="
                                                    !isActive(turn)
                                                "
                                                proposal-card
                                                [attr.data-job]="turn.job_id"
                                            >
                                                <header class="title-row">
                                                    <strong card-title>{{
                                                        cardTitle(turn.proposal)
                                                    }}</strong>
                                                    <span
                                                        class="muted"
                                                        outcome
                                                    >
                                                        {{ outcomeText(turn) }}
                                                    </span>
                                                </header>
                                                @if (turn.proposal.summary) {
                                                    <p
                                                        class="summary"
                                                        summary
                                                    >
                                                        {{
                                                            turn.proposal
                                                                .summary
                                                        }}
                                                    </p>
                                                }
                                                @for (
                                                    question of turn.proposal
                                                        .questions;
                                                    track question
                                                ) {
                                                    <p
                                                        class="question"
                                                        question
                                                    >
                                                        {{ question }}
                                                    </p>
                                                }
                                                @if (
                                                    turn.proposal.questions
                                                        .length
                                                ) {
                                                    <p
                                                        class="small muted"
                                                        hint
                                                    >
                                                        {{
                                                            t.strings
                                                                .questions_hint
                                                        }}
                                                    </p>
                                                }
                                                @if (
                                                    verdictText(turn.proposal);
                                                    as text
                                                ) {
                                                    <p
                                                        class="verdict"
                                                        role="status"
                                                        verdict
                                                    >
                                                        @if (
                                                            turn.proposal
                                                                .invalid_count ||
                                                            turn.proposal
                                                                .blocking
                                                        ) {
                                                            <svg
                                                                class="error"
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    [attr.d]="
                                                                        icons.error
                                                                    "
                                                                />
                                                            </svg>
                                                        }
                                                        {{ text }}
                                                    </p>
                                                }
                                                @if (
                                                    isActive(turn) &&
                                                    t.selection_error()
                                                ) {
                                                    <p
                                                        class="small error"
                                                        role="alert"
                                                        selection-error
                                                    >
                                                        {{
                                                            t.selection_error()
                                                        }}
                                                    </p>
                                                }
                                                @for (
                                                    issue of turn.proposal
                                                        .batch_issues;
                                                    track $index
                                                ) {
                                                    <p
                                                        class="small"
                                                        [class.error]="
                                                            issue.level ===
                                                            'error'
                                                        "
                                                        batch-issue
                                                    >
                                                        {{ issue.message }}
                                                    </p>
                                                }
                                                @if (
                                                    isActive(turn) &&
                                                    (thumbnails().before ||
                                                        thumbnails().after)
                                                ) {
                                                    <div
                                                        class="thumbs"
                                                        thumbnails
                                                    >
                                                        @if (
                                                            thumbnails().before;
                                                            as before
                                                        ) {
                                                            <figure>
                                                                <img
                                                                    [src]="
                                                                        before
                                                                    "
                                                                    [alt]="
                                                                        t
                                                                            .strings
                                                                            .before
                                                                    "
                                                                />
                                                                <figcaption
                                                                    class="muted"
                                                                >
                                                                    {{
                                                                        t
                                                                            .strings
                                                                            .before
                                                                    }}
                                                                </figcaption>
                                                            </figure>
                                                        }
                                                        @if (
                                                            thumbnails().after;
                                                            as after
                                                        ) {
                                                            <figure>
                                                                <img
                                                                    [src]="
                                                                        after
                                                                    "
                                                                    [alt]="
                                                                        t
                                                                            .strings
                                                                            .after
                                                                    "
                                                                />
                                                                <figcaption
                                                                    class="muted"
                                                                >
                                                                    {{
                                                                        t
                                                                            .strings
                                                                            .after
                                                                    }}
                                                                </figcaption>
                                                            </figure>
                                                        }
                                                    </div>
                                                }
                                                @if (
                                                    sectionsOf(turn.proposal);
                                                    as sections
                                                ) {
                                                    @if (sections.length) {
                                                        <div class="changes">
                                                            @for (
                                                                section of sections;
                                                                track section.key
                                                            ) {
                                                                <div
                                                                    class="section"
                                                                    row-group
                                                                    [attr.data-category]="
                                                                        section.key
                                                                    "
                                                                >
                                                                    <div
                                                                        class="section-head"
                                                                    >
                                                                        @if (
                                                                            section.group
                                                                        ) {
                                                                            <input
                                                                                type="checkbox"
                                                                                [id]="
                                                                                    turn.id +
                                                                                    '-' +
                                                                                    section.key
                                                                                "
                                                                                [checked]="
                                                                                    section
                                                                                        .group
                                                                                        .checked ===
                                                                                    'all'
                                                                                "
                                                                                [indeterminate]="
                                                                                    section
                                                                                        .group
                                                                                        .checked ===
                                                                                    'some'
                                                                                "
                                                                                [disabled]="
                                                                                    section
                                                                                        .group
                                                                                        .locked ||
                                                                                    !isActive(
                                                                                        turn
                                                                                    )
                                                                                "
                                                                                [attr.aria-label]="
                                                                                    section.label
                                                                                "
                                                                                (change)="
                                                                                    onGroup(
                                                                                        section.group,
                                                                                        $event
                                                                                    )
                                                                                "
                                                                            />
                                                                        }
                                                                        <span>{{
                                                                            section.label
                                                                        }}</span>
                                                                        <span
                                                                            class="muted count"
                                                                            >{{
                                                                                section
                                                                                    .rows
                                                                                    .length
                                                                            }}</span
                                                                        >
                                                                        @if (
                                                                            section
                                                                                .rows
                                                                                .length >=
                                                                            4
                                                                        ) {
                                                                            <button
                                                                                type="button"
                                                                                class="link"
                                                                                [attr.aria-expanded]="
                                                                                    isGroupOpen(
                                                                                        turn.id +
                                                                                            ':' +
                                                                                            section.key
                                                                                    )
                                                                                "
                                                                                (click)="
                                                                                    toggleGroupOpen(
                                                                                        turn.id +
                                                                                            ':' +
                                                                                            section.key
                                                                                    )
                                                                                "
                                                                            >
                                                                                {{
                                                                                    isGroupOpen(
                                                                                        turn.id +
                                                                                            ':' +
                                                                                            section.key
                                                                                    )
                                                                                        ? t
                                                                                              .strings
                                                                                              .hide_group
                                                                                        : t
                                                                                              .strings
                                                                                              .show_group
                                                                                }}
                                                                            </button>
                                                                        }
                                                                    </div>
                                                                    @if (
                                                                        isGroupOpen(
                                                                            turn.id +
                                                                                ':' +
                                                                                section.key
                                                                        )
                                                                    ) {
                                                                        <ul
                                                                            class="rows"
                                                                            rows
                                                                        >
                                                                            @for (
                                                                                row of section.rows;
                                                                                track row.id
                                                                            ) {
                                                                                <ng-container
                                                                                    *ngTemplateOutlet="
                                                                                        row_template;
                                                                                        context: {
                                                                                            $implicit:
                                                                                                row,
                                                                                            turn: turn,
                                                                                        }
                                                                                    "
                                                                                />
                                                                            }
                                                                        </ul>
                                                                    }
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                }
                                                @if (
                                                    isActive(turn) &&
                                                    showsDecision() &&
                                                    hasReasons()
                                                ) {
                                                    <div
                                                        class="reasons small"
                                                        reasons
                                                    >
                                                        <span class="muted">{{
                                                            t.strings
                                                                .reason_prompt
                                                        }}</span>
                                                        @for (
                                                            chip of reason_chips();
                                                            track chip.key
                                                        ) {
                                                            <button
                                                                type="button"
                                                                class="chip"
                                                                [class.on]="
                                                                    hasReason(
                                                                        chip.key
                                                                    )
                                                                "
                                                                [attr.aria-pressed]="
                                                                    hasReason(
                                                                        chip.key
                                                                    )
                                                                "
                                                                reason
                                                                (click)="
                                                                    t.toggleReason(
                                                                        chip.key
                                                                    )
                                                                "
                                                            >
                                                                {{ chip.label }}
                                                            </button>
                                                        }
                                                    </div>
                                                }
                                            </li>
                                        }
                                    }
                                }
                                @if (phase().kind === 'running') {
                                    <li
                                        class="status running"
                                        role="status"
                                        running
                                    >
                                        <span
                                            class="spinner"
                                            aria-hidden="true"
                                        ></span>
                                        <span class="grow">{{
                                            running_text()
                                        }}</span>
                                        <button
                                            type="button"
                                            class="link"
                                            cancel
                                            [disabled]="cancelling()"
                                            (click)="cancel()"
                                        >
                                            {{
                                                cancelling()
                                                    ? t.strings.cancelling
                                                    : t.strings.cancel
                                            }}
                                        </button>
                                    </li>
                                }
                            </ol>
                            @if (activeTurn(); as active) {
                                @if (showsDecision()) {
                                    <div class="decide" decision>
                                        @if (phase().kind === 'applied') {
                                            <button
                                                type="button"
                                                class="btn"
                                                keep
                                                (click)="keep()"
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        [attr.d]="icons.check"
                                                    />
                                                </svg>
                                                {{ t.strings.keep }}
                                            </button>
                                        }
                                        <button
                                            type="button"
                                            class="btn inverse"
                                            [class.wide]="
                                                phase().kind !== 'applied'
                                            "
                                            undo
                                            (click)="undo()"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path [attr.d]="icons.undo" />
                                            </svg>
                                            {{ t.strings.undo }}
                                        </button>
                                    </div>
                                }
                            }
                            @if (t.turns().length || phase().kind === 'running') {
                                <ng-container
                                    *ngTemplateOutlet="
                                        composer_template;
                                        context: { $implicit: t, first: false }
                                    "
                                />
                            }
                        }
                    }
                </div>
            }
            <div
                class="sr-only"
                role="status"
                aria-live="polite"
                aria-atomic="true"
                live
            >
                {{ t.announcement() }}
            </div>
        }

        <ng-template #composer_template let-t let-first="first">
            <form
                class="composer"
                [class.first]="first"
                composer
                (submit)="send($event)"
            >
                <label for="map-editor-ai-draft">
                    {{ t.strings.composer_label }}
                </label>
                <textarea
                    id="map-editor-ai-draft"
                    [class.tall]="first"
                    [value]="draft()"
                    [placeholder]="placeholder()"
                    [disabled]="!t.can_send()"
                    [attr.aria-invalid]="too_long()"
                    (input)="onDraft($event)"
                    (keydown)="onKeydown($event)"
                ></textarea>
                <div class="footer" chips>
                    @if (selection_count() > 0) {
                        <span class="chip" selection-chip>
                            {{ selectionText() }}
                            <button
                                type="button"
                                class="clear"
                                [attr.aria-label]="t.strings.clear_selection"
                                (click)="clearSelection()"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path [attr.d]="icons.close" />
                                </svg>
                            </button>
                        </span>
                    }
                    @if (chars_note()) {
                        <span
                            class="small muted"
                            [class.error]="too_long()"
                            chars
                        >
                            {{ chars_note() }}
                        </span>
                    }
                    <span class="grow"></span>
                    @if (t.turns().length) {
                        <button
                            type="button"
                            class="link"
                            new-request
                            (click)="newRequest()"
                        >
                            {{ t.strings.new_request }}
                        </button>
                    }
                    <button
                        type="submit"
                        class="btn"
                        send
                        [disabled]="!can_send()"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path [attr.d]="icons.send" />
                        </svg>
                        {{ t.strings.send }}
                    </button>
                </div>
            </form>
        </ng-template>

        <ng-template #row_template let-row let-turn="turn">
            <li
                class="row"
                row
                [class.hot]="isHot(row)"
                [attr.data-category]="row.category"
                [attr.data-index]="row.index"
                (mouseenter)="hoverRow(row)"
                (mouseleave)="hoverRow(null)"
                (focusin)="hoverRow(row)"
                (focusout)="hoverRow(null)"
            >
                @if (row.actionable) {
                    <input
                        type="checkbox"
                        [id]="turn.id + '-' + row.id"
                        [checked]="row.checked"
                        [disabled]="row.locked || !isActive(turn)"
                        [attr.aria-describedby]="
                            turn.id + '-' + row.id + '-notes'
                        "
                        (change)="onRow(row, $event)"
                    />
                } @else {
                    <span class="spacer" aria-hidden="true"></span>
                }
                <span class="num" aria-hidden="true">{{ row.index + 1 }}</span>
                <span class="sr-only">{{ categoryWord(row) }}</span>
                <span class="body">
                    <span class="kind muted">{{ row.kind_word }}</span>
                    <button
                        type="button"
                        class="row-text"
                        row-text
                        (click)="selectRow(row)"
                    >
                        {{ row.text }}
                    </button>
                    <span
                        class="notes"
                        [id]="turn.id + '-' + row.id + '-notes'"
                    >
                        @if (row.actionable && row.locked) {
                            <span class="error" locked>
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path [attr.d]="icons.lock" />
                                </svg>
                                {{ words().locked_note }}
                            </span>
                        }
                        @if (row.depends_on.length) {
                            <span class="muted" needs>
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path [attr.d]="icons.needs" />
                                </svg>
                                {{ needsText(row) }}
                            </span>
                        }
                        @if (row.note) {
                            <span class="muted">{{ row.note }}</span>
                        }
                        @for (issue of row.issues; track $index) {
                            <span
                                [class.error]="issue.level === 'error'"
                                [class.warning]="issue.level === 'warning'"
                                issue
                            >
                                {{ issue.message }}
                            </span>
                        }
                    </span>
                </span>
            </li>
        </ng-template>
    `, imports: [NgTemplateOutlet], styles: ["/* angular:styles/component:css;7423729f275f794c9c0f331944b341793b145e6fbf3c4e8ce2bf8c93e21205ed;/home/runner/work/user-interfaces/user-interfaces/libs/map-editor/src/lib/ai/ai-panel.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  color: var(--base-content, #111);\n  font-size: 0.875rem;\n}\n.panel {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n  border: 0;\n}\n.muted {\n  opacity: 0.72;\n}\n.small {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.error {\n  color: var(--error, #dc2626);\n  opacity: 1;\n}\n.warning {\n  color: var(--warn, #d97706);\n}\n.grow {\n  flex: 1;\n}\n.note {\n  margin: 0;\n  padding: 0.75rem 1rem;\n  font-size: 0.75rem;\n  opacity: 0.72;\n}\n.head {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--base-200, #e5e7eb);\n}\n.head h2 {\n  margin: 0 0 0.25rem;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.5rem;\n}\n.head p {\n  margin: 0;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.head p + p {\n  margin-top: 0.125rem;\n}\n.model {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n}\n.model select {\n  flex: 1;\n  min-width: 0;\n  height: 2rem;\n  padding: 0 0.5rem;\n  border: 1px solid var(--base-300, #d4d4d8);\n  border-radius: 0.375rem;\n  background: var(--base-100, #fff);\n  color: inherit;\n  font: inherit;\n  font-size: 0.875rem;\n}\n.thread {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 0.75rem;\n  min-height: 0;\n  margin: 0;\n  padding: 0.75rem 1rem;\n  overflow: auto;\n  list-style: none;\n}\n.thread.empty {\n  padding: 0;\n}\n.person {\n  margin-left: 2rem;\n}\n.bubble {\n  margin: 0;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.5rem;\n  background: var(--base-200, #f4f4f5);\n  line-height: 1.25rem;\n  white-space: pre-wrap;\n}\n.meta {\n  margin: 0.125rem 0 0;\n  font-size: 0.75rem;\n}\n.status {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid var(--base-300, #d4d4d8);\n  border-radius: 0.5rem;\n}\n.status.failed {\n  border-color: var(--error, #dc2626);\n}\n.proposal.inactive {\n  opacity: 0.6;\n}\n.title-row {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 0.5rem;\n  padding: 0 0.125rem 0.375rem;\n}\n.title-row strong {\n  font-size: 1rem;\n  font-weight: 500;\n}\n.title-row .muted {\n  font-size: 0.75rem;\n}\n.summary {\n  margin: 0 0.125rem 0.5rem;\n  line-height: 1.25rem;\n}\n.question {\n  margin: 0 0 0.5rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  background: var(--base-200, #f4f4f5);\n}\n.proposal p.small {\n  margin: 0 0.125rem 0.5rem;\n}\n.verdict {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  margin: 0 0.125rem 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.verdict svg {\n  width: 1rem;\n  height: 1rem;\n  flex: none;\n  fill: currentColor;\n}\n.thumbs {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.5rem;\n  margin: 0 0 0.625rem;\n}\n.thumbs figure {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  margin: 0;\n}\n.thumbs img {\n  flex: 1;\n  min-width: 0;\n  border: 1px solid var(--base-300, #d4d4d8);\n  border-radius: 0.25rem;\n  background: var(--base-200, #f4f4f5);\n}\n.thumbs figcaption {\n  font-size: 0.75rem;\n}\n.changes {\n  border: 1px solid var(--base-300, #d4d4d8);\n  border-radius: 0.5rem;\n}\n.section + .section {\n  border-top: 1px solid var(--base-200, #e5e7eb);\n}\n.section-head {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  padding: 0.625rem 0.625rem 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n.section-head .count {\n  font-weight: 400;\n}\n.section-head .link {\n  margin-left: auto;\n}\ninput[type=checkbox] {\n  flex: none;\n  width: 1rem;\n  height: 1rem;\n  margin: 0;\n  accent-color: var(--secondary, #1f2155);\n}\n.rows {\n  margin: 0;\n  padding: 0 0 0.25rem;\n  list-style: none;\n}\n.row {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.625rem;\n  padding: 0.5rem 0.625rem;\n  border-radius: 0.375rem;\n  line-height: 1.25rem;\n}\n.row input[type=checkbox] {\n  margin-top: 1px;\n}\n.row .spacer {\n  flex: none;\n  width: 1rem;\n}\n.row.hot {\n  background: color-mix(in srgb, var(--primary, #2563eb) 10%, transparent);\n}\n.num {\n  flex: none;\n  min-width: 22px;\n  height: 22px;\n  margin-top: -2px;\n  padding: 0 4px;\n  border: 2px solid var(--info, #2563eb);\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  line-height: 18px;\n  text-align: center;\n}\n.row[data-category=added] .num {\n  border-color: var(--success, #16a34a);\n}\n.row[data-category=removed] .num {\n  border-color: var(--error, #dc2626);\n  border-style: dashed;\n}\n.row[data-category=question] .num {\n  border-color: var(--warn, #d97706);\n}\n.row.hot .num {\n  background: var(--primary, #2563eb);\n  border-color: var(--primary, #2563eb);\n  border-style: solid;\n  color: var(--primary-content, #fff);\n}\n.row .body {\n  flex: 1;\n  min-width: 0;\n}\n.kind {\n  margin-right: 0.25rem;\n  font-size: 0.75rem;\n}\n.row-text {\n  padding: 0;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.row-text:hover {\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n}\n.notes {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.25rem 0.5rem;\n  margin-top: 0.125rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.notes:empty {\n  display: none;\n}\n.notes > span {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.notes svg {\n  width: 0.875rem;\n  height: 0.875rem;\n  flex: none;\n  fill: currentColor;\n}\n.link {\n  padding: 0 0.25rem;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 0.75rem;\n  font-weight: 500;\n  opacity: 0.8;\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.link:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.reasons {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.25rem;\n  margin: 0.5rem 0.125rem 0;\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  height: 1.5rem;\n  padding: 0 0.5rem;\n  border: none;\n  border-radius: 999px;\n  background: var(--base-200, #f4f4f5);\n  color: inherit;\n  font: inherit;\n  font-size: 0.75rem;\n  font-weight: 500;\n  white-space: nowrap;\n  cursor: default;\n}\nbutton.chip {\n  border: 1px solid var(--base-300, #d4d4d8);\n  background: transparent;\n  cursor: pointer;\n}\nbutton.chip.on {\n  background: var(--base-200, #f4f4f5);\n}\n.chip .clear {\n  display: inline-flex;\n  margin-left: 0.125rem;\n  padding: 0;\n  border: none;\n  background: none;\n  color: inherit;\n  cursor: pointer;\n}\n.chip svg {\n  width: 1rem;\n  height: 1rem;\n  fill: currentColor;\n}\n.decide {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-top: 1px solid var(--base-200, #e5e7eb);\n}\n.decide .wide {\n  grid-column: span 2;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  min-height: 3rem;\n  padding: 0 1rem;\n  border: 1px solid var(--secondary, #1f2155);\n  border-radius: 0.5rem;\n  background: var(--secondary, #1f2155);\n  color: var(--secondary-content, #fff);\n  font: inherit;\n  font-weight: 500;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.btn.inverse {\n  border-color: transparent;\n  background: color-mix(in srgb, var(--secondary, #1f2155) 15%, transparent);\n  color: var(--secondary, #1f2155);\n}\n:host-context(.theme-dark) .btn.inverse {\n  background: color-mix(in srgb, #fff 15%, transparent);\n  color: #fff;\n}\n.btn:disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n.btn svg {\n  width: 1.25rem;\n  height: 1.25rem;\n  fill: currentColor;\n}\n.composer {\n  padding: 0.75rem 1rem 1rem;\n  border-top: 1px solid var(--base-200, #e5e7eb);\n}\n.composer.first {\n  padding: 1rem;\n  border-top: none;\n}\n.composer label {\n  display: block;\n  margin-bottom: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.composer textarea {\n  box-sizing: border-box;\n  width: 100%;\n  height: 5.25rem;\n  padding: 0.625rem 0.75rem;\n  border: 1px solid var(--base-300, #d4d4d8);\n  border-radius: 0.5rem;\n  background: var(--base-100, #fff);\n  color: inherit;\n  font: inherit;\n  line-height: 1.4;\n  resize: none;\n}\n.composer textarea.tall {\n  height: 9rem;\n}\n.composer textarea:focus-visible,\n.row-text:focus-visible,\n.link:focus-visible,\n.btn:focus-visible,\n.chip .clear:focus-visible,\nbutton.chip:focus-visible,\ninput[type=checkbox]:focus-visible {\n  outline: 2px solid var(--primary, #2563eb);\n  outline-offset: 2px;\n}\n.composer textarea:disabled {\n  opacity: 0.6;\n}\n.footer {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.spinner {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 9999px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  animation: map-editor-ai-spin 0.8s linear infinite;\n}\n@keyframes map-editor-ai-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: no-preference) {\n  .row,\n  .num,\n  .btn,\n  .link,\n  button.chip {\n    transition:\n      background-color 120ms,\n      box-shadow 120ms,\n      outline-color 120ms;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .spinner {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=ai-panel.component.css.map */\n"] }]
  }], () => [], { session: [{ type: Input, args: [{ isSignal: true, alias: "session", required: true }] }], zone_id: [{ type: Input, args: [{ isSignal: true, alias: "zone_id", required: true }] }], upload: [{ type: Input, args: [{ isSignal: true, alias: "upload", required: false }] }], strings: [{ type: Input, args: [{ isSignal: true, alias: "strings", required: false }] }], transport: [{ type: Input, args: [{ isSignal: true, alias: "transport", required: false }] }], _thread_list: [{ type: ViewChild, args: ["threadList", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapEditorAiPanelComponent, { className: "MapEditorAiPanelComponent", filePath: "libs/map-editor/src/lib/ai/ai-panel.component.ts", lineNumber: 1411 });
})();

// libs/map-editor/src/lib/canvas/edits.ts
function round2(value, places = 2) {
  const factor = 10 ** places;
  const rounded = Math.round(value * factor) / factor;
  return rounded === 0 ? 0 : rounded;
}
function moveOps(anchors, dx, dy, why) {
  const x = round2(dx);
  const y = round2(dy);
  if (!x && !y)
    return [];
  return [...new Set(anchors)].map((anchor) => ({
    op: "transform",
    target: { a: anchor },
    translate: [x, y],
    why
  }));
}
function deleteOps(anchors, why) {
  return [...new Set(anchors)].map((anchor) => ({
    op: "delete",
    target: { a: anchor },
    why
  }));
}
function dragDelta(start, current, scale) {
  return [(current[0] - start[0]) / scale, (current[1] - start[1]) / scale];
}
function exceedsThreshold(start, current, threshold = 4) {
  return Math.hypot(current[0] - start[0], current[1] - start[1]) > threshold;
}
function boundIdLabels(source, anchors) {
  const labels = [];
  const seen = /* @__PURE__ */ new Set();
  for (const anchor of anchors) {
    const element = source.doc.byAnchor(anchor);
    if (!element)
      continue;
    for (const node of MapDocument.subtree(element)) {
      const id = node.getAttribute("id");
      if (!id || seen.has(id) || !source.protected.has(id))
        continue;
      seen.add(id);
      labels.push(source.protected.labelOf(id));
    }
  }
  return labels;
}

// libs/map-editor/src/lib/canvas/hit-test.ts
var ID_AREA_TOLERANCE = 3;
function pickTarget(candidates) {
  if (!candidates.length)
    return null;
  const sized = candidates.filter((c) => c.area !== null);
  const pool = sized.length ? sized : candidates;
  const by_size = [...pool].sort((a, b) => (a.area ?? 0) - (b.area ?? 0) || Number(!!b.id) - Number(!!a.id) || b.depth - a.depth);
  const smallest = by_size[0];
  const limit = (smallest.area ?? 0) * ID_AREA_TOLERANCE + 1;
  const named = by_size.find((c) => !!c.id && (c.area ?? 0) <= limit);
  return (named || smallest).anchor;
}
function isInsideNonRendered(element, root) {
  let current = element;
  while (current && current !== root) {
    if (NON_RENDERED_TAGS.has(current.localName.toLowerCase()))
      return true;
    current = current.parentElement;
  }
  return false;
}
function candidatesFor(hits, root, index, anchorOf) {
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const hit of hits) {
    if (hit === root || !root.contains(hit))
      continue;
    if (isInsideNonRendered(hit, root))
      continue;
    let current = hit;
    while (current && current !== root) {
      const anchor = anchorOf(current);
      const entry = anchor ? index.by_anchor.get(anchor) : void 0;
      if (entry && !seen.has(anchor)) {
        seen.add(anchor);
        out.push({
          anchor,
          id: entry.id,
          area: entry.bbox ? Math.max(0, entry.bbox[2]) * Math.max(0, entry.bbox[3]) : null,
          depth: entry.depth
        });
      }
      current = current.parentElement;
    }
  }
  return out;
}

// libs/map-editor/src/lib/canvas/icons.ts
var EDITOR_ICONS = {
  select: "M5 3v17l4-4 3 6 3-1-3-6h6z",
  rectangle: "M3 4h18v16H3zm2 2v12h14V6z",
  circle: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16",
  freehand: "M3 17c2-8 3-11 5-11 4 0-2 14 2 14 2 0 2-9 5-9 3 0 1 7 6 7v-2c-3 0-2-7-6-7-5 0-4 9-5 9-1 0 5-14-2-14-4 0-5 5-7 12z",
  arrow: "M4 3l13 13V9h3v12H8v-3h7L2 5z",
  undo_mark: "M12 5H7l3-3-2-2-7 7 7 7 2-2-3-3h5a6 6 0 0 1 0 12v3a9 9 0 0 0 0-18",
  clear_marks: "M6 6l12 12 2-2L8 4zm12-2L4 18l2 2L20 6z",
  zoom_in: "M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14m2.5-4h-2v2H9v-2H7V9h2V7h1v2h2z",
  zoom_out: "M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14M7 9h5v1H7z",
  zoom_fit: "M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2m2 10H3v4c0 1.1.9 2 2 2h4v-2H5zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2",
  undo: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8",
  redo: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7z",
  save: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M6 6h9v4H6z",
  open: "M19 19H5V5h7V3H5c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z",
  backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12z",
  ink_eraser: "m16.24 3.56 4.95 4.94c.78.79.78 2.05 0 2.84L12 20.53a4.01 4.01 0 0 1-5.66 0L2.81 17c-.78-.79-.78-2.05 0-2.84l10.6-10.6c.79-.78 2.05-.78 2.83 0M4.22 15.58l3.54 3.53c.78.79 2.04.79 2.83 0l3.53-3.53-4.95-4.95z",
  add: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z",
  remove: "M19 13H5v-2h14z",
  fit_screen: "M17 4h3c1.1 0 2 .9 2 2v2h-2V6h-3zM4 8V6h3V4H4c-1.1 0-2 .9-2 2v2zm16 8v2h-3v2h3c1.1 0 2-.9 2-2v-2zM7 18H4v-2H2v2c0 1.1.9 2 2 2h3zM18 8H6v8h12z",
  check: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
  close: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  send: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z",
  lock: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1z",
  error: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z",
  needs: "m19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9z",
  visible: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3",
  hidden: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z",
  warning: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z",
  sync_problem: "M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12m8 5h2v-2h-2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64zm-10 9h2V7h-2z"
};

// libs/map-editor/src/lib/canvas/ports.ts
var DEFAULT_MAP_EDITOR_STRINGS = {
  canvas_label: "Map canvas",
  tools_label: "Map tools",
  zoom_label: "Zoom",
  select_tool: "Select",
  circle_tool: "Circle",
  rectangle_tool: "Rectangle",
  freehand_tool: "Freehand",
  arrow_tool: "Arrow",
  annotation_colour: "Colour",
  undo_mark: "Undo last mark",
  clear_marks: "Clear marks",
  show_marks: "Show marks",
  annotation_hint: "Refer to a mark\u2019s colour or number in your prompt. Marks aren\u2019t saved on the map. Hold Space to pan; Esc to select.",
  marks_attached: "{count} marks attached (maximum 20)",
  red: "Red",
  blue: "Blue",
  green: "Green",
  orange: "Orange",
  purple: "Purple",
  zoom_in: "Zoom in",
  zoom_out: "Zoom out",
  zoom_fit: "Fit map",
  undo: "Undo",
  redo: "Redo",
  elements: "{count} elements",
  unsaved: "Unsaved changes",
  saved: "No changes",
  save: "Save",
  open_studio: "Open in Map Studio",
  move_label: "Move",
  nudge_label: "Nudge",
  delete_label: "Delete",
  recolour_label: "Recolour",
  rename_label: "Rename",
  text_label: "Change text",
  reset_label: "Reset element",
  delete_protected_title: "Delete a bound element?",
  delete_protected_message: "Bookings or records are linked to: {ids}. Deleting them breaks that link.",
  rename_protected_title: "Rename a bound element?",
  rename_protected_message: "Bookings or records are linked to the id {id}. Renaming it breaks that link.",
  confirm_delete: "Delete anyway",
  confirm_rename: "Rename anyway",
  no_selection: "Click an element on the map to edit it",
  multi_selected: "{count} elements selected",
  tag: "Element",
  id: "ID",
  fill: "Fill",
  stroke: "Stroke",
  text: "Text",
  text_hint: "Enter applies the text, Shift+Enter starts a new line",
  changed: "Changed",
  reset: "Reset",
  protected_badge: "Bound to a record",
  from_stylesheet: "Set by a stylesheet rule",
  from_inline_style: "Set by an inline style",
  inherited: "Inherited from a parent",
  default_value: "Default",
  apply_to_all: "Applies to every selected element",
  none: "none"
};
function resolveStrings(overrides = {}) {
  return __spreadValues(__spreadValues({}, DEFAULT_MAP_EDITOR_STRINGS), overrides);
}
function formatString(template, args) {
  return template.replace(/\{(\w+)\}/g, (match, name) => name in args ? `${args[name]}` : match);
}
var BrowserNotifier = class {
  async confirm(title, message) {
    const ask = globalThis.confirm;
    return typeof ask === "function" ? ask(`${title}

${message}`) : true;
  }
  notify(kind, message) {
    if (kind === "error")
      console.error(message);
    else
      console.info(message);
  }
};

// libs/map-editor/src/lib/canvas/view.ts
var MIN_SCALE = 0.05;
var MAX_SCALE = 40;
var WHEEL_ZOOM_IN = 1.03;
var WHEEL_ZOOM_OUT = 0.97;
var BUTTON_ZOOM = 1.25;
var FIT_PADDING = 24;
function clampScale(scale) {
  if (!Number.isFinite(scale) || scale <= 0)
    return 1;
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));
}
function fitView(view_box, viewport, padding = FIT_PADDING) {
  const inner_width = Math.max(1, viewport.width - padding * 2);
  const inner_height = Math.max(1, viewport.height - padding * 2);
  const scale = clampScale(Math.min(inner_width / view_box.width, inner_height / view_box.height));
  return {
    scale,
    tx: (viewport.width - view_box.width * scale) / 2,
    ty: (viewport.height - view_box.height * scale) / 2
  };
}
function zoomAt(view, factor, pointer) {
  const scale = clampScale(view.scale * factor);
  if (scale === view.scale)
    return view;
  const ratio = scale / view.scale;
  return {
    scale,
    tx: pointer[0] - (pointer[0] - view.tx) * ratio,
    ty: pointer[1] - (pointer[1] - view.ty) * ratio
  };
}
function panBy(view, dx, dy) {
  return __spreadProps(__spreadValues({}, view), { tx: view.tx + dx, ty: view.ty + dy });
}
function viewTransform(view) {
  return `translate(${view.tx}px, ${view.ty}px) scale(${view.scale})`;
}

// libs/map-editor/src/lib/canvas/map-canvas.component.ts
var _c02 = ["viewport"];
var HOVER_INTERVAL_MS = 40;
var PRIMARY = "var(--primary, #2563eb)";
var PREVIEW_COLOURS = {
  added: "var(--success, #16a34a)",
  changed: "var(--info, #2563eb)",
  removed: "var(--error, #dc2626)"
};
var removed_dash = (marker) => marker.category === "removed" ? "stroke-dasharray:4 3;" : "";
var NUDGE_UNITS = 1;
var NUDGE_UNITS_FAST = 10;
var SHADOW_STYLE = `
.map-wrapper { position: absolute; left: 0; top: 0; transform-origin: 0 0; }
.map-wrapper > svg { display: block; }
.map-wrapper > svg.map-editor-overlay { position: absolute; left: 0; top: 0; pointer-events: none; overflow: visible; }
.map-editor-overlay * { pointer-events: none !important; }
`;
var MapEditorCanvasComponent = class _MapEditorCanvasComponent {
  constructor() {
    this.session = input.required(
      ...ngDevMode ? [{ debugName: "session" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.strings = input(DEFAULT_MAP_EDITOR_STRINGS, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "strings" } : (
      /* istanbul ignore next */
      {}
    )), { transform: resolveStrings }));
    this.notifier = input(
      new BrowserNotifier(),
      ...ngDevMode ? [{ debugName: "notifier" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.annotation_tool = model(
      "select",
      ...ngDevMode ? [{ debugName: "annotation_tool" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.annotations_visible = model(
      true,
      ...ngDevMode ? [{ debugName: "annotations_visible" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.annotation_colour = input(
      "red",
      ...ngDevMode ? [{ debugName: "annotation_colour" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._mark = signal(
      null,
      ...ngDevMode ? [{ debugName: "_mark" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._mark_pointer = null;
    this.view = signal(
      { scale: 1, tx: 0, ty: 0 },
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zoom_percent = computed(
      () => Math.round(this.view().scale * 100),
      ...ngDevMode ? [{ debugName: "zoom_percent" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.panning = signal(
      false,
      ...ngDevMode ? [{ debugName: "panning" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space_held = signal(
      false,
      ...ngDevMode ? [{ debugName: "space_held" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dragging = computed(
      () => !!this._drag()?.moved,
      ...ngDevMode ? [{ debugName: "dragging" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._viewport = viewChild.required(
      "viewport",
      ...ngDevMode ? [{ debugName: "_viewport" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._destroy = inject(DestroyRef);
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._drag = signal(
      null,
      ...ngDevMode ? [{ debugName: "_drag" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._shadow = null;
    this._style = null;
    this._wrapper = null;
    this._overlay = null;
    this._mounted_root = null;
    this._mounted_session = null;
    this._mounted_view_box = "";
    this._fitted = false;
    this._pan = null;
    this._hover_at = 0;
    this._resize = null;
    effect(() => {
      if (!this._ready())
        return;
      const session = this.session();
      session.version();
      untracked(() => this._syncMount(session));
    });
    effect(() => {
      if (!this._ready())
        return;
      const session = this.session();
      session.version();
      session.selection();
      session.hover();
      const drag = this._drag();
      session.annotations();
      session.preview();
      this.annotations_visible();
      this._mark();
      this.view();
      untracked(() => this._drawOverlay(session, drag));
    });
    effect(() => {
      const view = this.view();
      if (this._wrapper)
        this._wrapper.style.transform = viewTransform(view);
    });
    this._destroy.onDestroy(() => {
      this._resize?.disconnect();
      this._resize = null;
    });
  }
  ngAfterViewInit() {
    const host = this._viewport().nativeElement;
    const shadow = host.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    this._style.textContent = SHADOW_STYLE;
    this._wrapper = document.createElement("div");
    this._wrapper.className = "map-wrapper";
    this._overlay = document.createElementNS(SVG_NS, "svg");
    this._overlay.setAttribute("class", "map-editor-overlay");
    this._overlay.setAttribute("aria-hidden", "true");
    this._wrapper.appendChild(this._overlay);
    shadow.append(this._style, this._wrapper);
    this._shadow = shadow;
    if (typeof ResizeObserver !== "undefined") {
      this._resize = new ResizeObserver(() => {
        if (!this._fitted)
          this.fit();
      });
      this._resize.observe(host);
    }
    this._ready.set(true);
  }
  zoomIn() {
    this.view.set(zoomAt(this.view(), BUTTON_ZOOM, this._centre()));
  }
  zoomOut() {
    this.view.set(zoomAt(this.view(), 1 / BUTTON_ZOOM, this._centre()));
  }
  /** Show the whole map centred in the viewport. */
  fit() {
    const rect = this._viewport().nativeElement.getBoundingClientRect();
    if (!rect.width || !rect.height)
      return;
    this._fitted = true;
    this.view.set(fitView(this.session().doc.view_box, {
      width: rect.width,
      height: rect.height
    }));
  }
  /** Delete the selection; a bound id needs the person's confirmation first. */
  async deleteSelection() {
    const session = this.session();
    const anchors = session.selection();
    if (!anchors.length)
      return false;
    const strings = this.strings();
    const bound = boundIdLabels(session, anchors);
    if (bound.length) {
      const ok = await this.notifier().confirm(strings.delete_protected_title, formatString(strings.delete_protected_message, {
        ids: bound.join(", ")
      }), strings.confirm_delete);
      if (!ok)
        return false;
    }
    const result = session.apply(deleteOps(anchors, strings.delete_label), strings.delete_label);
    return result.applied.length > 0;
  }
  onPointerDown(event) {
    const host = this._viewport().nativeElement;
    host.focus({ preventScroll: true });
    const point = [event.clientX, event.clientY];
    if (event.button === 1 || event.button === 0 && this.space_held()) {
      this._startPan(event, point, false);
      return;
    }
    if (event.button !== 0)
      return;
    const session = this.session();
    if (this.annotation_tool() !== "select") {
      if (session.annotations().length >= 20)
        return;
      this.annotations_visible.set(true);
      const [x, y] = this._mapPoint(event);
      const kind = this.annotation_tool();
      this._mark.set({
        n: 0,
        kind,
        colour: this.annotation_colour(),
        text: `${this.annotation_colour()} ${kind === "ellipse" ? "circle" : kind === "box" ? "rectangle" : kind === "path" ? "freehand mark" : "arrow"}`,
        x,
        y,
        x2: x,
        y2: y,
        width: 0,
        height: 0,
        points: [[x, y]]
      });
      this._mark_pointer = event.pointerId;
      session.select([]);
      session.setHover(null);
      this._capture(event);
      event.preventDefault();
      return;
    }
    const anchor = this._hitAt(event.clientX, event.clientY);
    if (!anchor) {
      this._startPan(event, point, !event.shiftKey);
      return;
    }
    if (event.shiftKey)
      session.toggleSelected(anchor);
    else if (!session.selection().includes(anchor))
      session.select([anchor]);
    const anchors = session.selection();
    if (!anchors.length)
      return;
    this._drag.set({
      anchors: [...anchors],
      start: point,
      current: point,
      moved: false
    });
    this._capture(event);
    event.preventDefault();
  }
  onPointerMove(event) {
    const point = [event.clientX, event.clientY];
    if (this._pan) {
      const pan = this._pan;
      pan.moved = pan.moved || exceedsThreshold(pan.start, point);
      this.view.set(panBy(pan.origin, point[0] - pan.start[0], point[1] - pan.start[1]));
      return;
    }
    if (this._mark()) {
      if (event.pointerId === this._mark_pointer)
        this._updateMark(event);
      return;
    }
    if (this.annotation_tool() !== "select")
      return;
    const drag = this._drag();
    if (drag) {
      this._drag.set(__spreadProps(__spreadValues({}, drag), {
        current: point,
        moved: drag.moved || exceedsThreshold(drag.start, point)
      }));
      return;
    }
    const now = performance.now();
    if (now - this._hover_at < HOVER_INTERVAL_MS)
      return;
    this._hover_at = now;
    this.session().setHover(this._hitAt(event.clientX, event.clientY));
  }
  onPointerUp(event) {
    if (this._mark()) {
      if (event.pointerId !== this._mark_pointer)
        return;
      this._updateMark(event);
      const mark = this._normalisedMark(this._mark());
      this._mark.set(null);
      this._mark_pointer = null;
      this._release(event);
      const points = mark.points || [];
      const extent = mark.kind === "ellipse" || mark.kind === "box" ? Math.min(mark.width || 0, mark.height || 0) : mark.kind === "arrow" ? Math.hypot((mark.x2 || 0) - (mark.x || 0), (mark.y2 || 0) - (mark.y || 0)) : points.length > 1 ? Math.max(...points.map(([x]) => x)) - Math.min(...points.map(([x]) => x)) + Math.max(...points.map(([, y]) => y)) - Math.min(...points.map(([, y]) => y)) : 0;
      if (extent * this.view().scale >= 5) {
        this.session().addAnnotation(__spreadProps(__spreadValues({}, mark), {
          hits: annotationCandidates(this.session().index(), mark)
        }));
      }
      return;
    }
    if (this._pan) {
      const pan = this._pan;
      this._pan = null;
      this.panning.set(false);
      this._release(event);
      if (!pan.moved && pan.clear_on_release)
        this.session().select([]);
      return;
    }
    const drag = this._drag();
    if (!drag)
      return;
    this._drag.set(null);
    this._release(event);
    if (!drag.moved)
      return;
    const strings = this.strings();
    const [dx, dy] = dragDelta(drag.start, drag.current, this.view().scale);
    const ops = moveOps(drag.anchors, dx, dy, strings.move_label);
    if (ops.length)
      this.session().apply(ops, strings.move_label);
  }
  onPointerCancel(event) {
    this._mark.set(null);
    this._mark_pointer = null;
    this._drag.set(null);
    this._pan = null;
    this.panning.set(false);
    this._release(event);
  }
  _normalisedMark(mark) {
    if (mark.kind === "ellipse" || mark.kind === "box")
      return __spreadProps(__spreadValues({}, mark), {
        x: Math.min(mark.x || 0, mark.x2 || 0),
        y: Math.min(mark.y || 0, mark.y2 || 0)
      });
    if (mark.kind !== "path" || !mark.points?.length)
      return mark;
    const points = mark.points;
    const xs = points.map(([x2]) => x2);
    const ys = points.map(([, y2]) => y2);
    const x = Math.min(...xs);
    const y = Math.min(...ys);
    const sampled = points.length > 40 ? Array.from({ length: 40 }, (_2, i) => points[Math.round(i * (points.length - 1) / 39)]) : points;
    return __spreadProps(__spreadValues({}, mark), {
      x,
      y,
      width: Math.max(...xs) - x,
      height: Math.max(...ys) - y,
      points: sampled
    });
  }
  _mapPoint(event) {
    const rect = this._viewport().nativeElement.getBoundingClientRect();
    const view = this.view();
    const box = this.session().doc.view_box;
    return [
      box.x + (event.clientX - rect.left - view.tx) / view.scale,
      box.y + (event.clientY - rect.top - view.ty) / view.scale
    ];
  }
  _updateMark(event) {
    const mark = this._mark();
    if (!mark)
      return;
    const [x, y] = this._mapPoint(event);
    if (mark.kind === "path") {
      const points = mark.points || [];
      const last = points[points.length - 1];
      if (last && Math.hypot(x - last[0], y - last[1]) * this.view().scale < 2)
        return;
      const sampled = points.length >= 200 ? points.filter((_2, i) => i % 2 === 0) : points;
      this._mark.set(__spreadProps(__spreadValues({}, mark), { points: [...sampled, [x, y]] }));
    } else
      this._mark.set(__spreadProps(__spreadValues({}, mark), {
        x2: x,
        y2: y,
        width: Math.abs(x - (mark.x || 0)),
        height: Math.abs(y - (mark.y || 0))
      }));
  }
  onPointerLeave() {
    if (!this._pan && !this._drag())
      this.session().setHover(null);
  }
  onWheel(event) {
    event.preventDefault();
    const rect = this._viewport().nativeElement.getBoundingClientRect();
    const factor = event.deltaY > 0 ? WHEEL_ZOOM_OUT : WHEEL_ZOOM_IN;
    this.view.set(zoomAt(this.view(), factor, [
      event.clientX - rect.left,
      event.clientY - rect.top
    ]));
  }
  onKeyDown(event) {
    const session = this.session();
    const strings = this.strings();
    const modifier = event.metaKey || event.ctrlKey;
    let handled = true;
    switch (event.key) {
      case "Delete":
      case "Backspace":
        void this.deleteSelection();
        break;
      case "Escape":
        this._mark.set(null);
        this._mark_pointer = null;
        this.annotation_tool.set("select");
        session.select([]);
        session.setHover(null);
        break;
      case "+":
      case "=":
        this.zoomIn();
        break;
      case "-":
      case "_":
        this.zoomOut();
        break;
      case "0":
        this.fit();
        break;
      case " ":
        if (!event.repeat)
          this.space_held.set(true);
        break;
      case "ArrowUp":
      case "ArrowDown":
      case "ArrowLeft":
      case "ArrowRight": {
        const step = event.shiftKey ? NUDGE_UNITS_FAST : NUDGE_UNITS;
        const dx = event.key === "ArrowLeft" ? -step : event.key === "ArrowRight" ? step : 0;
        const dy = event.key === "ArrowUp" ? -step : event.key === "ArrowDown" ? step : 0;
        const ops = moveOps(session.selection(), dx, dy, strings.nudge_label);
        if (ops.length)
          session.apply(ops, strings.nudge_label);
        else
          handled = false;
        break;
      }
      case "z":
      case "Z":
        if (!modifier)
          handled = false;
        else if (event.shiftKey)
          session.redo();
        else if (this.annotation_tool() !== "select" && session.annotations().length)
          session.undoAnnotation();
        else
          session.undo();
        break;
      case "y":
      case "Y":
        if (modifier)
          session.redo();
        else
          handled = false;
        break;
      default:
        handled = false;
    }
    if (handled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  onKeyUp(event) {
    if (event.key !== " ")
      return;
    this.space_held.set(false);
    if (this._pan && !this._drag()) {
      this._pan = null;
      this.panning.set(false);
    }
  }
  _startPan(event, point, clear_on_release) {
    this._pan = {
      start: point,
      origin: this.view(),
      moved: false,
      clear_on_release
    };
    this.panning.set(true);
    this._capture(event);
    event.preventDefault();
  }
  _capture(event) {
    try {
      this._viewport().nativeElement.setPointerCapture(event.pointerId);
    } catch {
    }
  }
  _release(event) {
    try {
      this._viewport().nativeElement.releasePointerCapture(event.pointerId);
    } catch {
    }
  }
  _centre() {
    const rect = this._viewport().nativeElement.getBoundingClientRect();
    return [rect.width / 2, rect.height / 2];
  }
  _hitAt(x, y) {
    const shadow = this._shadow;
    const session = this.session();
    if (!shadow || typeof shadow.elementsFromPoint !== "function")
      return null;
    const hits = shadow.elementsFromPoint(x, y);
    const candidates = candidatesFor(hits, session.doc.root, session.index(), (element) => session.doc.anchorOf(element));
    return pickTarget(candidates);
  }
  _syncMount(session) {
    const wrapper = this._wrapper;
    const overlay = this._overlay;
    const style = this._style;
    if (!wrapper || !overlay || !style)
      return;
    const root = session.doc.root;
    const box = session.doc.view_box;
    const box_key = `${box.x} ${box.y} ${box.width} ${box.height}`;
    if (this._mounted_session !== session || this._mounted_view_box !== box_key) {
      this._mounted_view_box = box_key;
      this._mounted_session = session;
      this._fitted = false;
      const { x, y, width, height } = session.doc.view_box;
      style.textContent = `${SHADOW_STYLE}
.map-wrapper, .map-wrapper > svg { width: ${width}px; height: ${height}px; }`;
      overlay.setAttribute("viewBox", `${x} ${y} ${width} ${height}`);
      overlay.setAttribute("width", `${width}`);
      overlay.setAttribute("height", `${height}`);
    }
    if (this._mounted_root !== root) {
      if (this._mounted_root && this._mounted_root.parentNode === wrapper && this._mounted_root !== root) {
        wrapper.removeChild(this._mounted_root);
      }
      if (root.parentNode !== wrapper)
        wrapper.insertBefore(root, overlay);
      this._mounted_root = root;
    }
    if (!this._fitted)
      this.fit();
  }
  _drawOverlay(session, drag) {
    const overlay = this._overlay;
    if (!overlay)
      return;
    while (overlay.firstChild)
      overlay.removeChild(overlay.firstChild);
    const pending = this._mark();
    drawAnnotations(overlay, [
      ...this.annotations_visible() ? session.annotations() : [],
      ...pending ? [this._normalisedMark(pending)] : []
    ], 1 / this.view().scale);
    const index = session.index();
    const selection = session.selection();
    const hover = session.hover();
    const preview = session.preview();
    const hot_marker = hover ? preview?.markers.find((marker) => marker.anchors.includes(hover)) : void 0;
    if (hover && !selection.includes(hover) && !hot_marker) {
      this._outline(overlay, index, hover, "hover", [0, 0]);
    }
    for (const anchor of selection) {
      this._outline(overlay, index, anchor, "selected", [0, 0]);
    }
    if (drag?.moved) {
      const delta = dragDelta(drag.start, drag.current, this.view().scale);
      for (const anchor of drag.anchors) {
        this._outline(overlay, index, anchor, "ghost", delta);
      }
    }
    if (preview)
      this._drawPreview(overlay, index, preview, hover);
  }
  /** Category outlines and numbered pins for the proposal previewed on the map. */
  _drawPreview(overlay, index, preview, hover) {
    const units_per_px = 1 / this.view().scale;
    for (const marker of preview.markers) {
      const box = this._unionBox(index, marker);
      if (!box)
        continue;
      const [x, y, width, height] = box;
      const hot = !!hover && marker.anchors.includes(hover);
      const colour = PREVIEW_COLOURS[marker.category] || PREVIEW_COLOURS.changed;
      const stroke = hot ? PRIMARY : colour;
      const group2 = document.createElementNS(SVG_NS, "g");
      group2.setAttribute("data-preview", String(marker.n));
      group2.setAttribute("data-category", marker.category);
      if (hot)
        group2.setAttribute("data-hot", "true");
      if (marker.applied || marker.category === "removed") {
        const removed = marker.category === "removed";
        const outline = document.createElementNS(SVG_NS, "rect");
        outline.setAttribute("x", `${x}`);
        outline.setAttribute("y", `${y}`);
        outline.setAttribute("width", `${Math.max(width, 0.5)}`);
        outline.setAttribute("height", `${Math.max(height, 0.5)}`);
        const radius2 = removed ? Math.min(width, height) / 2 : units_per_px * 3;
        outline.setAttribute("rx", `${radius2}`);
        outline.setAttribute("style", `fill:none;stroke:${hot ? PRIMARY : colour};stroke-width:${hot ? 3 : 2};vector-effect:non-scaling-stroke;${removed ? "stroke-dasharray:6 4;" : ""}pointer-events:none`);
        if (hot) {
          const halo = outline.cloneNode();
          halo.setAttribute("style", `fill:none;stroke:${PRIMARY};stroke-opacity:0.18;stroke-width:9;vector-effect:non-scaling-stroke;pointer-events:none`);
          group2.appendChild(halo);
        }
        group2.appendChild(outline);
      }
      const radius = units_per_px * 11;
      const pin = document.createElementNS(SVG_NS, "circle");
      pin.setAttribute("cx", `${x}`);
      pin.setAttribute("cy", `${y}`);
      pin.setAttribute("r", `${radius}`);
      pin.setAttribute("style", `fill:${hot ? PRIMARY : "var(--base-100, #fff)"};stroke:${stroke};stroke-width:2;vector-effect:non-scaling-stroke;${removed_dash(marker)}pointer-events:none`);
      const label = document.createElementNS(SVG_NS, "text");
      label.setAttribute("x", `${x}`);
      label.setAttribute("y", `${y}`);
      label.setAttribute("text-anchor", "middle");
      label.setAttribute("dominant-baseline", "central");
      label.setAttribute("style", `font:700 ${units_per_px * 12}px Roboto, sans-serif;fill:${hot ? "var(--primary-content, #fff)" : "var(--base-content, #111)"};pointer-events:none`);
      label.textContent = String(marker.n);
      group2.append(pin, label);
      overlay.appendChild(group2);
    }
  }
  /** The box around every element a marker touches; null when none is in the map. */
  _unionBox(index, marker) {
    let box = null;
    for (const anchor of marker.anchors) {
      const bbox = index.by_anchor.get(anchor)?.bbox;
      if (!bbox)
        continue;
      if (!box) {
        box = [...bbox];
        continue;
      }
      const x = Math.min(box[0], bbox[0]);
      const y = Math.min(box[1], bbox[1]);
      const x2 = Math.max(box[0] + box[2], bbox[0] + bbox[2]);
      const y2 = Math.max(box[1] + box[3], bbox[1] + bbox[3]);
      box = [x, y, x2 - x, y2 - y];
    }
    return box;
  }
  _outline(overlay, index, anchor, kind, offset) {
    const bbox = index.by_anchor.get(anchor)?.bbox;
    if (!bbox)
      return;
    const rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttribute("x", `${bbox[0] + offset[0]}`);
    rect.setAttribute("y", `${bbox[1] + offset[1]}`);
    rect.setAttribute("width", `${Math.max(bbox[2], 0.5)}`);
    rect.setAttribute("height", `${Math.max(bbox[3], 0.5)}`);
    rect.setAttribute("data-outline", kind);
    const colour = kind === "hover" ? "var(--warn, #ffb020)" : kind === "ghost" ? "var(--info, #2563eb)" : PRIMARY;
    rect.setAttribute("style", `fill:${kind === "ghost" ? "color-mix(in srgb, var(--info, #2563eb) 12%, transparent)" : "none"};stroke:${colour};stroke-width:2;vector-effect:non-scaling-stroke;${kind === "ghost" ? "stroke-dasharray:6 4;" : ""}pointer-events:none`);
    overlay.appendChild(rect);
  }
  static {
    this.\u0275fac = function MapEditorCanvasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapEditorCanvasComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapEditorCanvasComponent, selectors: [["map-editor-canvas"]], viewQuery: function MapEditorCanvasComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._viewport, _c02, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { session: [1, "session"], strings: [1, "strings"], notifier: [1, "notifier"], annotation_tool: [1, "annotation_tool"], annotations_visible: [1, "annotations_visible"], annotation_colour: [1, "annotation_colour"] }, outputs: { annotation_tool: "annotation_toolChange", annotations_visible: "annotations_visibleChange" }, decls: 2, vars: 7, consts: [["viewport", ""], ["tabindex", "0", "role", "application", 1, "viewport", 3, "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerleave", "wheel", "keydown", "keyup", "contextmenu"]], template: function MapEditorCanvasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 1, 0);
        \u0275\u0275domListener("pointerdown", function MapEditorCanvasComponent_Template_div_pointerdown_0_listener($event) {
          return ctx.onPointerDown($event);
        })("pointermove", function MapEditorCanvasComponent_Template_div_pointermove_0_listener($event) {
          return ctx.onPointerMove($event);
        })("pointerup", function MapEditorCanvasComponent_Template_div_pointerup_0_listener($event) {
          return ctx.onPointerUp($event);
        })("pointercancel", function MapEditorCanvasComponent_Template_div_pointercancel_0_listener($event) {
          return ctx.onPointerCancel($event);
        })("pointerleave", function MapEditorCanvasComponent_Template_div_pointerleave_0_listener() {
          return ctx.onPointerLeave();
        })("wheel", function MapEditorCanvasComponent_Template_div_wheel_0_listener($event) {
          return ctx.onWheel($event);
        })("keydown", function MapEditorCanvasComponent_Template_div_keydown_0_listener($event) {
          return ctx.onKeyDown($event);
        })("keyup", function MapEditorCanvasComponent_Template_div_keyup_0_listener($event) {
          return ctx.onKeyUp($event);
        })("contextmenu", function MapEditorCanvasComponent_Template_div_contextmenu_0_listener($event) {
          return $event.preventDefault();
        });
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("panning", ctx.panning())("drawing", ctx.annotation_tool() !== "select")("grab", ctx.space_held() && !ctx.panning());
        \u0275\u0275attribute("aria-label", ctx.strings().canvas_label);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  min-height: 0;\n  min-width: 0;\n}\n.viewport[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  outline: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  user-select: none;\n  background-color: var(--%NS%base-200, #e5e7eb);\n  background-image: radial-gradient(color-mix(in srgb, var(--%NS%base-300, #d4d4d8) 70%, transparent) 1px, transparent 1.2px);\n  background-size: 16px 16px;\n}\n.viewport[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: inset 0 0 0 2px var(--%NS%primary, #2563eb);\n}\n.viewport.drawing[_ngcontent-%COMP%] {\n  cursor: crosshair;\n}\n.viewport.grab[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n.viewport.panning[_ngcontent-%COMP%] {\n  cursor: grabbing;\n}\n/*# sourceMappingURL=map-canvas.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapEditorCanvasComponent, [{
    type: Component,
    args: [{ selector: "map-editor-canvas", changeDetection: ChangeDetectionStrategy.OnPush, template: `
        <div
            #viewport
            class="viewport"
            tabindex="0"
            role="application"
            [attr.aria-label]="strings().canvas_label"
            [class.panning]="panning()"
            [class.drawing]="annotation_tool() !== 'select'"
            [class.grab]="space_held() && !panning()"
            (pointerdown)="onPointerDown($event)"
            (pointermove)="onPointerMove($event)"
            (pointerup)="onPointerUp($event)"
            (pointercancel)="onPointerCancel($event)"
            (pointerleave)="onPointerLeave()"
            (wheel)="onWheel($event)"
            (keydown)="onKeyDown($event)"
            (keyup)="onKeyUp($event)"
            (contextmenu)="$event.preventDefault()"
        ></div>
    `, styles: ["/* angular:styles/component:css;30a26254affe17237fdeeba733d4980ed0684690b1ec35c04bf2961e60735311;/home/runner/work/user-interfaces/user-interfaces/libs/map-editor/src/lib/canvas/map-canvas.component.ts */\n:host {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  min-height: 0;\n  min-width: 0;\n}\n.viewport {\n  position: absolute;\n  inset: 0;\n  outline: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  user-select: none;\n  background-color: var(--base-200, #e5e7eb);\n  background-image: radial-gradient(color-mix(in srgb, var(--base-300, #d4d4d8) 70%, transparent) 1px, transparent 1.2px);\n  background-size: 16px 16px;\n}\n.viewport:focus-visible {\n  box-shadow: inset 0 0 0 2px var(--primary, #2563eb);\n}\n.viewport.drawing {\n  cursor: crosshair;\n}\n.viewport.grab {\n  cursor: grab;\n}\n.viewport.panning {\n  cursor: grabbing;\n}\n/*# sourceMappingURL=map-canvas.component.css.map */\n"] }]
  }], () => [], { session: [{ type: Input, args: [{ isSignal: true, alias: "session", required: true }] }], strings: [{ type: Input, args: [{ isSignal: true, alias: "strings", required: false }] }], notifier: [{ type: Input, args: [{ isSignal: true, alias: "notifier", required: false }] }], annotation_tool: [{ type: Input, args: [{ isSignal: true, alias: "annotation_tool", required: false }] }, { type: Output, args: ["annotation_toolChange"] }], annotations_visible: [{ type: Input, args: [{ isSignal: true, alias: "annotations_visible", required: false }] }, { type: Output, args: ["annotations_visibleChange"] }], annotation_colour: [{ type: Input, args: [{ isSignal: true, alias: "annotation_colour", required: false }] }], _viewport: [{ type: ViewChild, args: ["viewport", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapEditorCanvasComponent, { className: "MapEditorCanvasComponent", filePath: "libs/map-editor/src/lib/canvas/map-canvas.component.ts", lineNumber: 162 });
})();

// libs/map-editor/src/lib/map-index.ts
var BOOKABLE_ID = /^(?:desk|table|room|area|park|bay|locker|space|seat|meeting)[-_.]/i;
var ZONE_ID = /^zone/i;
var ZONES_GROUP = /^zones$/i;
function elementLabel(element) {
  for (const child of Array.from(element.children)) {
    if (child.localName === "title") {
      const title = (child.textContent || "").trim();
      if (title)
        return title;
    }
  }
  const named = element.getAttribute("data-name") || element.getAttribute("aria-label") || element.getAttribute("inkscape:label");
  if (named?.trim())
    return named.trim();
  if (TEXT_TAGS.has(element.localName)) {
    const text2 = (element.textContent || "").trim();
    if (text2)
      return text2;
  }
  const own = ownText(element);
  return own || null;
}
function isInsideNonRendered2(element) {
  let current = element;
  while (current) {
    if (NON_RENDERED_TAGS.has(current.localName.toLowerCase()))
      return true;
    current = current.parentElement;
  }
  return false;
}
function guessKind(element, is_protected, parent_kind) {
  const tag = element.localName;
  if (isInsideNonRendered2(element))
    return "non-rendered";
  const id = element.getAttribute("id") || "";
  if (is_protected)
    return "bookable";
  if (TEXT_TAGS.has(tag))
    return "text";
  if (ZONE_ID.test(id) || parent_kind === "zone" && tag !== "g")
    return "zone";
  if (tag === "g" && ZONES_GROUP.test(id))
    return "zone";
  if (BOOKABLE_ID.test(id))
    return "bookable";
  if (tag === "g" || tag === "a") {
    return id && (parent_kind === "root" || parent_kind === "layer-group") ? "layer-group" : "group";
  }
  return "art";
}
function buildIndex(doc, options = {}) {
  const geometry = options.geometry || doc.geometry;
  const protected_ids = options.protected || doc.protected;
  const with_bbox = options.bbox !== false;
  const resolver = new StyleResolver(doc.root, doc.styleRules());
  const entries2 = [];
  const by_anchor = /* @__PURE__ */ new Map();
  const by_element = /* @__PURE__ */ new Map();
  let z = 0;
  let id_count = 0;
  for (const element of doc.elements()) {
    const id = element.getAttribute("id");
    if (id)
      id_count++;
    const parent_element = element.parentElement;
    const parent_entry = parent_element ? by_element.get(parent_element) : void 0;
    const is_protected = protected_ids.has(id);
    const kind = element === doc.root ? "root" : guessKind(element, is_protected, parent_entry?.kind || null);
    const rendered = kind !== "non-rendered" && !NON_RENDERED_TAGS.has(element.localName.toLowerCase());
    const tag = element.localName;
    const entry = {
      anchor: doc.anchorOf(element),
      id: id || null,
      tag,
      classes: (element.getAttribute("class") || "").split(/\s+/).filter((c) => !!c),
      label: elementLabel(element),
      bbox: with_bbox && rendered ? geometry.bboxOf(element) : null,
      parent: parent_entry?.anchor || null,
      depth: parent_entry ? parent_entry.depth + 1 : 0,
      z: rendered ? z++ : null,
      visible: rendered && resolver.isVisible(element),
      fill: rendered ? resolver.visibleColour(element, "fill") || null : null,
      stroke: rendered ? resolver.visibleColour(element, "stroke") || null : null,
      protected: is_protected,
      kind,
      hash: doc.hashOf(element),
      text: TEXT_TAGS.has(tag) ? (element.textContent || "").trim() || null : null,
      children: {}
    };
    if (entry.bbox)
      entry.bbox = entry.bbox.map((n) => Math.round(n));
    if (parent_entry && !id && tag !== "g" && rendered) {
      parent_entry.children[tag] = (parent_entry.children[tag] || 0) + 1;
    }
    entries2.push(entry);
    by_anchor.set(entry.anchor, entry);
    by_element.set(element, entry);
  }
  return {
    view_box: __spreadValues({}, doc.view_box),
    entries: entries2,
    by_anchor,
    style_rules: doc.styleRules(),
    duplicate_ids: duplicateIds(doc.root),
    stats: {
      elements: entries2.length,
      ids: id_count,
      bytes: doc.byteSize()
    }
  };
}

// libs/map-editor/src/lib/canvas/properties.ts
var PAINT_NAMES = ["fill", "stroke"];
function paintValue(element, name, resolver) {
  const attribute = (element.getAttribute(name) || "").trim();
  const inline = inlineStyleValue(element, name);
  const rule = resolver.cssValue(element, name);
  const effective = resolver.visibleColour(element, name);
  let source = "default";
  if (inline && inline !== attribute)
    source = "inline";
  else if (inline)
    source = "attribute";
  else if (rule)
    source = "stylesheet";
  else if (attribute)
    source = "attribute";
  else if (effective && effective !== (name === "fill" ? "black" : ""))
    source = "inherited";
  return { own: attribute || inline, effective, source };
}
function describeSelection(source, anchors, resolver) {
  const elements = anchors.map((anchor) => ({ anchor, element: source.doc.byAnchor(anchor) })).filter((entry) => !!entry.element);
  if (!elements.length)
    return { kind: "none" };
  if (elements.length === 1) {
    const { anchor, element } = elements[0];
    const id = element.getAttribute("id") || "";
    const is_text = TEXT_TAGS.has(element.localName);
    return {
      kind: "single",
      anchor,
      tag: element.localName,
      id,
      label: elementLabel(element) || "",
      is_text,
      text: is_text ? textLinesOf(element) : "",
      fill: paintValue(element, "fill", resolver),
      stroke: paintValue(element, "stroke", resolver),
      changed: source.isChanged(anchor),
      protected: source.protected.has(id)
    };
  }
  const shared = (name) => {
    const values = new Set(elements.map(({ element }) => paintValue(element, name, resolver).own));
    return values.size === 1 ? [...values][0] : "";
  };
  return {
    kind: "multi",
    count: elements.length,
    anchors: elements.map(({ anchor }) => anchor),
    fill: shared("fill"),
    stroke: shared("stroke"),
    changed: elements.some(({ anchor }) => source.isChanged(anchor))
  };
}
function paintOps(anchors, name, value, why) {
  const trimmed = value.trim();
  return [...new Set(anchors)].map((anchor) => ({
    op: "set_attr",
    target: { a: anchor },
    name,
    value: trimmed || null,
    why
  }));
}
function textLinesOf(element) {
  const spans = Array.from(element.children).filter((child) => child.localName === "tspan");
  if (!spans.length)
    return element.textContent || "";
  return spans.map((span) => span.textContent || "").join("\n");
}
function normaliseTextInput(value) {
  return value.replace(/\\n/g, "\n").split("\n").map((line) => line.replace(/\s+$/, "")).join("\n");
}
function textOp(anchor, text2, why) {
  return { op: "set_text", target: { a: anchor }, text: text2, why };
}
function idOp(anchor, id, why) {
  return {
    op: "set_id",
    target: { a: anchor },
    new_id: id.trim() || null,
    why
  };
}
function resetOps(source, anchor, why) {
  const element = source.doc.byAnchor(anchor);
  const original = source.originalOf(anchor);
  if (!element || !original)
    return [];
  const ops = [];
  const original_id = original.getAttribute("id") || "";
  if ((element.getAttribute("id") || "") !== original_id) {
    ops.push(idOp(anchor, original_id, why));
  }
  for (const name of PAINT_NAMES) {
    const was = (original.getAttribute(name) || "").trim();
    const was_inline = inlineStyleValue(original, name);
    const now = (element.getAttribute(name) || "").trim();
    const now_inline = inlineStyleValue(element, name);
    if (was !== now || was_inline !== now_inline) {
      ops.push(...paintOps([anchor], name, was || was_inline, why));
    }
  }
  if (TEXT_TAGS.has(element.localName) && (element.textContent || "") !== (original.textContent || "")) {
    ops.push(textOp(anchor, original.textContent || "", why));
  }
  return ops;
}
function colourInputValue(value) {
  const colour = value.replace("!important", "").trim();
  if (/^#[0-9a-f]{6}$/i.test(colour))
    return colour.toLowerCase();
  if (/^#[0-9a-f]{3}$/i.test(colour)) {
    return `#${colour[1]}${colour[1]}${colour[2]}${colour[2]}${colour[3]}${colour[3]}`.toLowerCase();
  }
  return "#000000";
}

// libs/map-editor/src/lib/canvas/properties-strip.component.ts
function PropertiesStripComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function PropertiesStripComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.strings().protected_badge);
  }
}
function PropertiesStripComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 13);
    \u0275\u0275domListener("click", function PropertiesStripComponent_Conditional_1_Conditional_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r2 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reset(item_r2));
    });
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.strings().changed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.strings().reset, " ");
  }
}
function PropertiesStripComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "label", 11)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "textarea", 14);
    \u0275\u0275domListener("keydown.enter", function PropertiesStripComponent_Conditional_1_Conditional_27_Template_textarea_keydown_enter_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.enterText($event));
    })("change", function PropertiesStripComponent_Conditional_1_Conditional_27_Template_textarea_change_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const item_r2 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commitText(item_r2, $event));
    });
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.strings().text);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", item_r2.text)("title", ctx_r2.strings().text_hint);
  }
}
function PropertiesStripComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 4)(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, PropertiesStripComponent_Conditional_1_Conditional_6_Template, 2, 1, "span", 5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, PropertiesStripComponent_Conditional_1_Conditional_7_Template, 2, 1, "span", 6);
    \u0275\u0275conditionalCreate(8, PropertiesStripComponent_Conditional_1_Conditional_8_Template, 4, 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "label", 7)(10, "span", 3);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "input", 8);
    \u0275\u0275domListener("change", function PropertiesStripComponent_Conditional_1_Template_input_change_12_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commitId(item_r2, $event));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 7)(14, "span", 3);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "input", 9);
    \u0275\u0275domListener("change", function PropertiesStripComponent_Conditional_1_Template_input_change_16_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commitPaint([item_r2.anchor], "fill", $event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "input", 10);
    \u0275\u0275domListener("change", function PropertiesStripComponent_Conditional_1_Template_input_change_17_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commitPaint([item_r2.anchor], "fill", $event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "span", 5);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "div", 7)(21, "span", 3);
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "input", 9);
    \u0275\u0275domListener("change", function PropertiesStripComponent_Conditional_1_Template_input_change_23_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commitPaint([item_r2.anchor], "stroke", $event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "input", 10);
    \u0275\u0275domListener("change", function PropertiesStripComponent_Conditional_1_Template_input_change_24_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commitPaint([item_r2.anchor], "stroke", $event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "span", 5);
    \u0275\u0275text(26);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(27, PropertiesStripComponent_Conditional_1_Conditional_27_Template, 4, 3, "label", 11);
  }
  if (rf & 2) {
    const item_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.strings().tag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.tag);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.label ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.protected ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.changed ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.strings().id);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", item_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.strings().fill);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", ctx_r2.colourFor(item_r2.fill.effective))("title", item_r2.fill.effective || ctx_r2.strings().none);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", item_r2.fill.own)("placeholder", item_r2.fill.effective || ctx_r2.strings().none);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.sourceNote(item_r2.fill.source));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.strings().stroke);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", ctx_r2.colourFor(item_r2.stroke.effective))("title", item_r2.stroke.effective || ctx_r2.strings().none);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", item_r2.stroke.own)("placeholder", item_r2.stroke.effective || ctx_r2.strings().none);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.sourceNote(item_r2.stroke.source));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.is_text ? 27 : -1);
  }
}
function PropertiesStripComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.strings().changed);
  }
}
function PropertiesStripComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, PropertiesStripComponent_Conditional_2_Conditional_3_Template, 2, 1, "span", 12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 7)(5, "span", 3);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "input", 15);
    \u0275\u0275domListener("change", function PropertiesStripComponent_Conditional_2_Template_input_change_7_listener($event) {
      const group_r7 = \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commitPaint(group_r7.anchors, "fill", $event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "input", 16);
    \u0275\u0275domListener("change", function PropertiesStripComponent_Conditional_2_Template_input_change_8_listener($event) {
      const group_r7 = \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commitPaint(group_r7.anchors, "fill", $event));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 7)(10, "span", 3);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "input", 15);
    \u0275\u0275domListener("change", function PropertiesStripComponent_Conditional_2_Template_input_change_12_listener($event) {
      const group_r7 = \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commitPaint(group_r7.anchors, "stroke", $event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "input", 16);
    \u0275\u0275domListener("change", function PropertiesStripComponent_Conditional_2_Template_input_change_13_listener($event) {
      const group_r7 = \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commitPaint(group_r7.anchors, "stroke", $event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "span", 5);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const group_r7 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCount(ctx_r2.strings().multi_selected, group_r7.count));
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r7.changed ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.strings().fill);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", ctx_r2.colourFor(group_r7.fill));
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", group_r7.fill);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.strings().stroke);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", ctx_r2.colourFor(group_r7.stroke));
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", group_r7.stroke);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.strings().apply_to_all);
  }
}
function PropertiesStripComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.strings().no_selection);
  }
}
var PropertiesStripComponent = class _PropertiesStripComponent {
  constructor() {
    this.session = input.required(
      ...ngDevMode ? [{ debugName: "session" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.strings = input(DEFAULT_MAP_EDITOR_STRINGS, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "strings" } : (
      /* istanbul ignore next */
      {}
    )), { transform: resolveStrings }));
    this.notifier = input(
      new BrowserNotifier(),
      ...ngDevMode ? [{ debugName: "notifier" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._resolver = computed(
      () => {
        const session = this.session();
        session.version();
        return new StyleResolver(session.doc.root, session.doc.styleRules());
      },
      ...ngDevMode ? [{ debugName: "_resolver" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = computed(
      () => {
        const session = this.session();
        session.version();
        return describeSelection(session, session.selection(), this._resolver());
      },
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.single = computed(
      () => {
        const view = this.view();
        return view.kind === "single" ? view : null;
      },
      ...ngDevMode ? [{ debugName: "single" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.multi = computed(
      () => {
        const view = this.view();
        return view.kind === "multi" ? view : null;
      },
      ...ngDevMode ? [{ debugName: "multi" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  colourFor(value) {
    return colourInputValue(value);
  }
  formatCount(template, count) {
    return formatString(template, { count });
  }
  sourceNote(source) {
    const strings = this.strings();
    switch (source) {
      case "stylesheet":
        return strings.from_stylesheet;
      case "inline":
        return strings.from_inline_style;
      case "inherited":
        return strings.inherited;
      case "default":
        return strings.default_value;
      default:
        return "";
    }
  }
  commitPaint(anchors, name, event) {
    const value = event.target.value;
    const strings = this.strings();
    const label = anchors.length > 1 ? `${strings.recolour_label} (${anchors.length})` : strings.recolour_label;
    const result = this.session().apply(paintOps(anchors, name, value, strings.recolour_label), label);
    this._reportRejections(result.rejected.map((entry) => entry.reason));
  }
  async commitId(item, event) {
    const input_element = event.target;
    const value = input_element.value.trim();
    if (value === item.id)
      return;
    const strings = this.strings();
    if (item.protected) {
      const ok = await this.notifier().confirm(strings.rename_protected_title, formatString(strings.rename_protected_message, {
        id: item.id
      }), strings.confirm_rename);
      if (!ok) {
        input_element.value = item.id;
        return;
      }
    }
    const result = this.session().apply([idOp(item.anchor, value, strings.rename_label)], strings.rename_label);
    if (result.rejected.length)
      input_element.value = item.id;
    this._reportRejections(result.rejected.map((entry) => entry.reason));
  }
  /** Enter applies the text; Shift+Enter adds a line. */
  enterText(event) {
    const key = event;
    if (key.shiftKey)
      return;
    event.preventDefault();
    event.target.blur();
  }
  commitText(item, event) {
    const value = normaliseTextInput(event.target.value);
    if (value === item.text)
      return;
    const strings = this.strings();
    const result = this.session().apply([textOp(item.anchor, value, strings.text_label)], strings.text_label);
    this._reportRejections(result.rejected.map((entry) => entry.reason));
  }
  reset(item) {
    const strings = this.strings();
    const session = this.session();
    const ops = resetOps(session, item.anchor, strings.reset_label);
    if (!ops.length)
      return;
    const result = session.apply(ops, strings.reset_label);
    this._reportRejections(result.rejected.map((entry) => entry.reason));
  }
  _reportRejections(reasons) {
    for (const reason of reasons)
      this.notifier().notify("error", reason);
  }
  static {
    this.\u0275fac = function PropertiesStripComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertiesStripComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropertiesStripComponent, selectors: [["map-editor-properties"]], inputs: { session: [1, "session"], strings: [1, "strings"], notifier: [1, "notifier"] }, decls: 4, vars: 2, consts: [["role", "group", 1, "strip"], [1, "hint"], [1, "field", "element"], [1, "label"], [1, "value"], [1, "muted"], [1, "badge", "bound"], [1, "field"], ["type", "text", 1, "text", 3, "change", "value"], ["type", "color", 1, "swatch", 3, "change", "value", "title"], ["type", "text", 1, "text", "short", 3, "change", "value", "placeholder"], [1, "field", "grow"], [1, "badge", "changed"], ["type", "button", 1, "link", 3, "click"], ["rows", "2", 1, "text", "lines", 3, "keydown.enter", "change", "value", "title"], ["type", "color", 1, "swatch", 3, "change", "value"], ["type", "text", 1, "text", "short", 3, "change", "value"]], template: function PropertiesStripComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, PropertiesStripComponent_Conditional_1_Template, 28, 20)(2, PropertiesStripComponent_Conditional_2_Template, 16, 9)(3, PropertiesStripComponent_Conditional_3_Template, 2, 1, "span", 1);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275attribute("aria-label", ctx.strings().tag);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_1_0 = ctx.single()) ? 1 : (tmp_1_0 = ctx.multi()) ? 2 : 3, tmp_1_0);
      }
    }, styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem 1rem;\n  min-height: 3.75rem;\n  padding: 0.5rem 1rem;\n  font-size: 0.8125rem;\n  border-top: 1px solid var(--%NS%base-200, #e5e7eb);\n  background: var(--%NS%base-100, #fff);\n  color: var(--%NS%base-content, #111);\n}\n.field[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.field.grow[_ngcontent-%COMP%] {\n  flex: 1 1 12rem;\n}\n.field.grow[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.label[_ngcontent-%COMP%] {\n  opacity: 0.72;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.value[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.muted[_ngcontent-%COMP%] {\n  opacity: 0.72;\n  font-size: 0.75rem;\n}\n.hint[_ngcontent-%COMP%] {\n  opacity: 0.72;\n  font-size: 0.8125rem;\n}\ncode[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  height: 1.5rem;\n  padding: 0 0.5rem;\n  border-radius: 999px;\n  background: var(--%NS%base-200, #f4f4f5);\n  font-family:\n    "Roboto Mono",\n    ui-monospace,\n    monospace;\n  font-size: 0.75rem;\n}\n.text[_ngcontent-%COMP%] {\n  height: 2rem;\n  padding: 0 0.5rem;\n  border: 1px solid var(--%NS%base-300, #d4d4d8);\n  border-radius: 0.375rem;\n  background: var(--%NS%base-100, #fff);\n  color: inherit;\n  font-family:\n    "Roboto Mono",\n    ui-monospace,\n    monospace;\n  font-size: 0.8125rem;\n  min-width: 6rem;\n}\n.text.lines[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 2.6em;\n  font: inherit;\n  line-height: 1.25;\n}\n.text.short[_ngcontent-%COMP%] {\n  width: 6rem;\n  min-width: 0;\n}\n.text[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--%NS%primary, #2563eb);\n  outline-offset: -1px;\n}\n.swatch[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: 0;\n  border: 1px solid var(--%NS%base-300, #d4d4d8);\n  border-radius: 0.375rem;\n  background: transparent;\n  cursor: pointer;\n}\n.swatch[_ngcontent-%COMP%]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n.swatch[_ngcontent-%COMP%]::-webkit-color-swatch {\n  border: none;\n  border-radius: 0.3rem;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  height: 1.5rem;\n  padding: 0 0.5rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.badge.changed[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%warning, #f59e0b) 22%, var(--%NS%base-100, #fff));\n}\n.badge.bound[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%info, #0ea5e9) 16%, var(--%NS%base-100, #fff));\n}\n.link[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0 0.25rem;\n  color: var(--%NS%base-content, #111);\n  font: inherit;\n  font-size: 0.75rem;\n  font-weight: 500;\n  opacity: 0.8;\n  cursor: pointer;\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=properties-strip.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertiesStripComponent, [{
    type: Component,
    args: [{ selector: "map-editor-properties", changeDetection: ChangeDetectionStrategy.OnPush, template: `
        <div class="strip" role="group" [attr.aria-label]="strings().tag">
            @if (single(); as item) {
                <div class="field element">
                    <span class="label">{{ strings().tag }}</span>
                    <span class="value">
                        <code>{{ item.tag }}</code>
                        @if (item.label) {
                            <span class="muted">{{ item.label }}</span>
                        }
                    </span>
                    @if (item.protected) {
                        <span class="badge bound">{{
                            strings().protected_badge
                        }}</span>
                    }
                    @if (item.changed) {
                        <span class="badge changed">{{
                            strings().changed
                        }}</span>
                        <button
                            type="button"
                            class="link"
                            (click)="reset(item)"
                        >
                            {{ strings().reset }}
                        </button>
                    }
                </div>
                <label class="field">
                    <span class="label">{{ strings().id }}</span>
                    <input
                        type="text"
                        class="text"
                        [value]="item.id"
                        (change)="commitId(item, $event)"
                    />
                </label>
                <div class="field">
                    <span class="label">{{ strings().fill }}</span>
                    <input
                        type="color"
                        class="swatch"
                        [value]="colourFor(item.fill.effective)"
                        [title]="item.fill.effective || strings().none"
                        (change)="commitPaint([item.anchor], 'fill', $event)"
                    />
                    <input
                        type="text"
                        class="text short"
                        [value]="item.fill.own"
                        [placeholder]="item.fill.effective || strings().none"
                        (change)="commitPaint([item.anchor], 'fill', $event)"
                    />
                    <span class="muted">{{
                        sourceNote(item.fill.source)
                    }}</span>
                </div>
                <div class="field">
                    <span class="label">{{ strings().stroke }}</span>
                    <input
                        type="color"
                        class="swatch"
                        [value]="colourFor(item.stroke.effective)"
                        [title]="item.stroke.effective || strings().none"
                        (change)="commitPaint([item.anchor], 'stroke', $event)"
                    />
                    <input
                        type="text"
                        class="text short"
                        [value]="item.stroke.own"
                        [placeholder]="item.stroke.effective || strings().none"
                        (change)="commitPaint([item.anchor], 'stroke', $event)"
                    />
                    <span class="muted">{{
                        sourceNote(item.stroke.source)
                    }}</span>
                </div>
                @if (item.is_text) {
                    <label class="field grow">
                        <span class="label">{{ strings().text }}</span>
                        <textarea
                            class="text lines"
                            rows="2"
                            [value]="item.text"
                            [title]="strings().text_hint"
                            (keydown.enter)="enterText($event)"
                            (change)="commitText(item, $event)"
                        ></textarea>
                    </label>
                }
            } @else if (multi(); as group) {
                <div class="field element">
                    <span class="value">{{
                        formatCount(strings().multi_selected, group.count)
                    }}</span>
                    @if (group.changed) {
                        <span class="badge changed">{{
                            strings().changed
                        }}</span>
                    }
                </div>
                <div class="field">
                    <span class="label">{{ strings().fill }}</span>
                    <input
                        type="color"
                        class="swatch"
                        [value]="colourFor(group.fill)"
                        (change)="commitPaint(group.anchors, 'fill', $event)"
                    />
                    <input
                        type="text"
                        class="text short"
                        [value]="group.fill"
                        (change)="commitPaint(group.anchors, 'fill', $event)"
                    />
                </div>
                <div class="field">
                    <span class="label">{{ strings().stroke }}</span>
                    <input
                        type="color"
                        class="swatch"
                        [value]="colourFor(group.stroke)"
                        (change)="commitPaint(group.anchors, 'stroke', $event)"
                    />
                    <input
                        type="text"
                        class="text short"
                        [value]="group.stroke"
                        (change)="commitPaint(group.anchors, 'stroke', $event)"
                    />
                    <span class="muted">{{ strings().apply_to_all }}</span>
                </div>
            } @else {
                <span class="hint">{{ strings().no_selection }}</span>
            }
        </div>
    `, styles: ['/* angular:styles/component:css;0ec5934ecf9dbbd52f654e1c3a2fb48e7bd1c07861a24985f5db52eacd257ab0;/home/runner/work/user-interfaces/user-interfaces/libs/map-editor/src/lib/canvas/properties-strip.component.ts */\n:host {\n  display: block;\n}\n.strip {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem 1rem;\n  min-height: 3.75rem;\n  padding: 0.5rem 1rem;\n  font-size: 0.8125rem;\n  border-top: 1px solid var(--base-200, #e5e7eb);\n  background: var(--base-100, #fff);\n  color: var(--base-content, #111);\n}\n.field {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.field.grow {\n  flex: 1 1 12rem;\n}\n.field.grow .text {\n  flex: 1;\n}\n.label {\n  opacity: 0.72;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.value {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.muted {\n  opacity: 0.72;\n  font-size: 0.75rem;\n}\n.hint {\n  opacity: 0.72;\n  font-size: 0.8125rem;\n}\ncode {\n  display: inline-flex;\n  align-items: center;\n  height: 1.5rem;\n  padding: 0 0.5rem;\n  border-radius: 999px;\n  background: var(--base-200, #f4f4f5);\n  font-family:\n    "Roboto Mono",\n    ui-monospace,\n    monospace;\n  font-size: 0.75rem;\n}\n.text {\n  height: 2rem;\n  padding: 0 0.5rem;\n  border: 1px solid var(--base-300, #d4d4d8);\n  border-radius: 0.375rem;\n  background: var(--base-100, #fff);\n  color: inherit;\n  font-family:\n    "Roboto Mono",\n    ui-monospace,\n    monospace;\n  font-size: 0.8125rem;\n  min-width: 6rem;\n}\n.text.lines {\n  resize: vertical;\n  min-height: 2.6em;\n  font: inherit;\n  line-height: 1.25;\n}\n.text.short {\n  width: 6rem;\n  min-width: 0;\n}\n.text:focus {\n  outline: 2px solid var(--primary, #2563eb);\n  outline-offset: -1px;\n}\n.swatch {\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: 0;\n  border: 1px solid var(--base-300, #d4d4d8);\n  border-radius: 0.375rem;\n  background: transparent;\n  cursor: pointer;\n}\n.swatch::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n.swatch::-webkit-color-swatch {\n  border: none;\n  border-radius: 0.3rem;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  height: 1.5rem;\n  padding: 0 0.5rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.badge.changed {\n  background: color-mix(in srgb, var(--warning, #f59e0b) 22%, var(--base-100, #fff));\n}\n.badge.bound {\n  background: color-mix(in srgb, var(--info, #0ea5e9) 16%, var(--base-100, #fff));\n}\n.link {\n  border: none;\n  background: none;\n  padding: 0 0.25rem;\n  color: var(--base-content, #111);\n  font: inherit;\n  font-size: 0.75rem;\n  font-weight: 500;\n  opacity: 0.8;\n  cursor: pointer;\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=properties-strip.component.css.map */\n'] }]
  }], null, { session: [{ type: Input, args: [{ isSignal: true, alias: "session", required: true }] }], strings: [{ type: Input, args: [{ isSignal: true, alias: "strings", required: false }] }], notifier: [{ type: Input, args: [{ isSignal: true, alias: "notifier", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropertiesStripComponent, { className: "PropertiesStripComponent", filePath: "libs/map-editor/src/lib/canvas/properties-strip.component.ts", lineNumber: 331 });
})();

// libs/map-editor/src/lib/canvas/map-editor.component.ts
var _c03 = [[["", "panel", ""]]];
var _c12 = ["[panel]"];
var _forTrack02 = ($index, $item) => $item.kind;
var _forTrack12 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.category;
function MapEditorComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function MapEditorComponent_For_14_Template_button_click_0_listener() {
      const tool_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.annotation_tool.set(tool_r3.kind));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tool_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.annotation_tool() === tool_r3.kind);
    \u0275\u0275property("title", ctx_r3.strings()[tool_r3.label]);
    \u0275\u0275attribute("aria-pressed", ctx_r3.annotation_tool() === tool_r3.kind)("aria-label", ctx_r3.strings()[tool_r3.label]);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", ctx_r3.icons[tool_r3.icon]);
  }
}
function MapEditorComponent_Conditional_18_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r3.icons.check);
  }
}
function MapEditorComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function MapEditorComponent_Conditional_18_For_2_Template_button_click_0_listener() {
      const colour_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.pickColour(colour_r6.name));
    });
    \u0275\u0275element(1, "span", 27);
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, MapEditorComponent_Conditional_18_For_2_Conditional_4_Template, 2, 1, ":svg:svg", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const colour_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-checked", ctx_r3.annotation_colour() === colour_r6.name);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", colour_r6.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.strings()[colour_r6.name]);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.annotation_colour() === colour_r6.name ? 4 : -1);
  }
}
function MapEditorComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, MapEditorComponent_Conditional_18_For_2_Template, 5, 5, "button", 25, _forTrack12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r3.strings().annotation_colour);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.annotation_colours);
  }
}
function MapEditorComponent_Conditional_31_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275element(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tally_r7 = ctx.$implicit;
    \u0275\u0275attribute("data-category", tally_r7.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tally_r7.label, " ");
  }
}
function MapEditorComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, MapEditorComponent_Conditional_31_For_6_Template, 3, 2, "span", 31, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preview_r8 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(preview_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(preview_r8.note);
    \u0275\u0275advance();
    \u0275\u0275repeater(preview_r8.counts);
  }
}
function MapEditorComponent_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.marksCount());
  }
}
function MapEditorComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, MapEditorComponent_Conditional_32_Conditional_2_Template, 2, 1, "b");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.strings().annotation_hint, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.session().annotations().length ? 2 : -1);
  }
}
function MapEditorComponent_Conditional_49_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275element(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("dirty", ctx_r3.session().dirty());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.session().dirty() ? ctx_r3.strings().unsaved : ctx_r3.strings().saved, " ");
  }
}
function MapEditorComponent_Conditional_49_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function MapEditorComponent_Conditional_49_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.open_studio.emit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", ctx_r3.icons.open);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.strings().open_studio, " ");
  }
}
function MapEditorComponent_Conditional_49_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function MapEditorComponent_Conditional_49_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.save.emit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r3.session().dirty());
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", ctx_r3.icons.save);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.strings().save, " ");
  }
}
function MapEditorComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275conditionalCreate(1, MapEditorComponent_Conditional_49_Conditional_1_Template, 3, 3, "span", 33);
    \u0275\u0275conditionalCreate(2, MapEditorComponent_Conditional_49_Conditional_2_Template, 4, 2, "button", 34);
    \u0275\u0275conditionalCreate(3, MapEditorComponent_Conditional_49_Conditional_3_Template, 4, 3, "button", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.show_save() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.show_studio() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.show_save() ? 3 : -1);
  }
}
var MapEditorComponent = class _MapEditorComponent {
  constructor() {
    this.session = input.required(
      ...ngDevMode ? [{ debugName: "session" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.strings = input(DEFAULT_MAP_EDITOR_STRINGS, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "strings" } : (
      /* istanbul ignore next */
      {}
    )), { transform: resolveStrings }));
    this.notifier = input(
      new BrowserNotifier(),
      ...ngDevMode ? [{ debugName: "notifier" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_save = input(
      false,
      ...ngDevMode ? [{ debugName: "show_save" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_studio = input(
      false,
      ...ngDevMode ? [{ debugName: "show_studio" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.save = output();
    this.open_studio = output();
    this.icons = EDITOR_ICONS;
    this.annotation_tool = signal(
      "select",
      ...ngDevMode ? [{ debugName: "annotation_tool" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.annotations_visible = signal(
      true,
      ...ngDevMode ? [{ debugName: "annotations_visible" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.annotation_colour = signal(
      "red",
      ...ngDevMode ? [{ debugName: "annotation_colour" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.colour_menu = signal(
      false,
      ...ngDevMode ? [{ debugName: "colour_menu" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.annotation_colours = ANNOTATION_COLOURS;
    this.annotation_tools = [
      { kind: "select", label: "select_tool", icon: "select" },
      { kind: "ellipse", label: "circle_tool", icon: "circle" },
      { kind: "box", label: "rectangle_tool", icon: "rectangle" },
      { kind: "path", label: "freehand_tool", icon: "freehand" },
      { kind: "arrow", label: "arrow_tool", icon: "arrow" }
    ];
    this.selectedColour = computed(
      () => ANNOTATION_COLOURS.find((colour) => colour.name === this.annotation_colour())?.value,
      ...ngDevMode ? [{ debugName: "selectedColour" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.colourTitle = computed(
      () => {
        const strings = this.strings();
        const name = strings[this.annotation_colour()];
        return `${strings.annotation_colour}: ${name}`;
      },
      ...ngDevMode ? [{ debugName: "colourTitle" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.marksCount = computed(
      () => formatString(this.strings().marks_attached, {
        count: this.session().annotations().length
      }),
      ...ngDevMode ? [{ debugName: "marksCount" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._host = inject(ElementRef);
    this.elementCount = computed(
      () => {
        const session = this.session();
        session.version();
        return formatString(this.strings().elements, {
          count: session.index().stats.elements
        });
      },
      ...ngDevMode ? [{ debugName: "elementCount" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.undoTitle = computed(
      () => {
        const label = this.session().undo_label();
        const base = this.strings().undo;
        return label ? `${base}: ${label}` : base;
      },
      ...ngDevMode ? [{ debugName: "undoTitle" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.redoTitle = computed(
      () => {
        const label = this.session().redo_label();
        const base = this.strings().redo;
        return label ? `${base}: ${label}` : base;
      },
      ...ngDevMode ? [{ debugName: "redoTitle" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  pickColour(name) {
    this.annotation_colour.set(name);
    this.colour_menu.set(false);
  }
  /** Kept for hosts that still bind a `<select>` to the colour. */
  setAnnotationColour(event) {
    this.annotation_colour.set(event.target.value);
  }
  closeColourMenu(event) {
    if (!this.colour_menu())
      return;
    const menu = this._host.nativeElement.querySelector(".colour");
    if (menu && event.target instanceof Node && menu.contains(event.target))
      return;
    this.colour_menu.set(false);
  }
  closeColourMenuOnEscape() {
    if (this.colour_menu())
      this.colour_menu.set(false);
  }
  static {
    this.\u0275fac = function MapEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapEditorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapEditorComponent, selectors: [["map-editor"]], hostBindings: function MapEditorComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("pointerdown", function MapEditorComponent_pointerdown_HostBindingHandler($event) {
          return ctx.closeColourMenu($event);
        }, \u0275\u0275resolveDocument)("keydown.escape", function MapEditorComponent_keydown_escape_HostBindingHandler() {
          return ctx.closeColourMenuOnEscape();
        }, \u0275\u0275resolveDocument);
      }
    }, inputs: { session: [1, "session"], strings: [1, "strings"], notifier: [1, "notifier"], show_save: [1, "show_save"], show_studio: [1, "show_studio"] }, outputs: { save: "save", open_studio: "open_studio" }, ngContentSelectors: _c12, decls: 53, vars: 55, consts: [["canvas", ""], [1, "body"], [1, "main"], [1, "well"], [1, "canvas", 3, "annotation_toolChange", "annotations_visibleChange", "session", "strings", "notifier", "annotation_tool", "annotations_visible", "annotation_colour"], ["role", "toolbar", "aria-orientation", "vertical", 1, "float", "rail"], ["type", "button", 1, "tool", 3, "click", "disabled", "title"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["aria-hidden", "true", 1, "divider"], ["type", "button", 1, "tool", 3, "active", "title"], [1, "colour"], ["type", "button", "aria-haspopup", "menu", 1, "tool", 3, "click", "title"], ["aria-hidden", "true", 1, "dot"], ["role", "menu", 1, "menu"], [1, "sr"], ["role", "status", 1, "float", "summary"], ["aria-live", "polite", 1, "float", "hint"], ["role", "group", 1, "float", "zoom"], [1, "muted", "count"], ["aria-hidden", "true", 1, "vdivider"], ["type", "button", 1, "tool", 3, "click", "title"], ["aria-live", "polite", 1, "zoom-value"], [1, "float", "actions", "toolbar"], [3, "session", "strings", "notifier"], [1, "panel"], ["type", "button", "role", "menuitemradio"], ["type", "button", "role", "menuitemradio", 3, "click"], ["aria-hidden", "true", 1, "dot", "small"], [1, "name"], [1, "title"], [1, "muted", "note"], [1, "tally"], ["aria-hidden", "true", 1, "ring"], ["role", "status", "aria-live", "polite", 1, "status", 3, "dirty"], ["type", "button", 1, "action"], ["type", "button", 1, "action", "primary", 3, "disabled"], ["role", "status", "aria-live", "polite", 1, "status"], [1, "status-dot"], ["type", "button", 1, "action", 3, "click"], ["type", "button", 1, "action", "primary", 3, "click", "disabled"]], template: function MapEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c03);
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "map-editor-canvas", 4, 0);
        \u0275\u0275twoWayListener("annotation_toolChange", function MapEditorComponent_Template_map_editor_canvas_annotation_toolChange_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.annotation_tool, $event) || (ctx.annotation_tool = $event);
          return \u0275\u0275resetView($event);
        })("annotations_visibleChange", function MapEditorComponent_Template_map_editor_canvas_annotations_visibleChange_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.annotations_visible, $event) || (ctx.annotations_visible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
        \u0275\u0275listener("click", function MapEditorComponent_Template_button_click_6_listener() {
          return ctx.session().undo();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 7);
        \u0275\u0275element(8, "path");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "button", 6);
        \u0275\u0275listener("click", function MapEditorComponent_Template_button_click_9_listener() {
          return ctx.session().redo();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 7);
        \u0275\u0275element(11, "path");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(12, "span", 8);
        \u0275\u0275repeaterCreate(13, MapEditorComponent_For_14_Template, 3, 6, "button", 9, _forTrack02);
        \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
        \u0275\u0275listener("click", function MapEditorComponent_Template_button_click_16_listener() {
          return ctx.colour_menu.set(!ctx.colour_menu());
        });
        \u0275\u0275element(17, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(18, MapEditorComponent_Conditional_18_Template, 3, 1, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "span", 8);
        \u0275\u0275elementStart(20, "button", 6);
        \u0275\u0275listener("click", function MapEditorComponent_Template_button_click_20_listener() {
          return ctx.session().undoAnnotation();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 7);
        \u0275\u0275element(22, "path");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "button", 6);
        \u0275\u0275listener("click", function MapEditorComponent_Template_button_click_23_listener() {
          return ctx.session().clearAnnotations();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 7);
        \u0275\u0275element(25, "path");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "button", 6);
        \u0275\u0275listener("click", function MapEditorComponent_Template_button_click_26_listener() {
          return ctx.annotations_visible.set(!ctx.annotations_visible());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(27, "svg", 7);
        \u0275\u0275element(28, "path");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(29, "span", 14);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(31, MapEditorComponent_Conditional_31_Template, 7, 2, "div", 15);
        \u0275\u0275conditionalCreate(32, MapEditorComponent_Conditional_32_Template, 3, 2, "p", 16);
        \u0275\u0275elementStart(33, "div", 17)(34, "span", 18);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "span", 19);
        \u0275\u0275elementStart(37, "button", 20);
        \u0275\u0275listener("click", function MapEditorComponent_Template_button_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          const canvas_r9 = \u0275\u0275reference(4);
          return \u0275\u0275resetView(canvas_r9.zoomOut());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(38, "svg", 7);
        \u0275\u0275element(39, "path");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(40, "span", 21);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 20);
        \u0275\u0275listener("click", function MapEditorComponent_Template_button_click_42_listener() {
          \u0275\u0275restoreView(_r1);
          const canvas_r9 = \u0275\u0275reference(4);
          return \u0275\u0275resetView(canvas_r9.zoomIn());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(43, "svg", 7);
        \u0275\u0275element(44, "path");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(45, "span", 19);
        \u0275\u0275elementStart(46, "button", 20);
        \u0275\u0275listener("click", function MapEditorComponent_Template_button_click_46_listener() {
          \u0275\u0275restoreView(_r1);
          const canvas_r9 = \u0275\u0275reference(4);
          return \u0275\u0275resetView(canvas_r9.fit());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(47, "svg", 7);
        \u0275\u0275element(48, "path");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(49, MapEditorComponent_Conditional_49_Template, 4, 3, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(50, "map-editor-properties", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "aside", 24);
        \u0275\u0275projection(52);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_37_0;
        const canvas_r9 = \u0275\u0275reference(4);
        \u0275\u0275advance(3);
        \u0275\u0275property("session", ctx.session())("strings", ctx.strings())("notifier", ctx.notifier());
        \u0275\u0275twoWayProperty("annotation_tool", ctx.annotation_tool)("annotations_visible", ctx.annotations_visible);
        \u0275\u0275property("annotation_colour", ctx.annotation_colour());
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", ctx.strings().tools_label);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.session().can_undo())("title", ctx.undoTitle());
        \u0275\u0275attribute("aria-label", ctx.undoTitle());
        \u0275\u0275advance(2);
        \u0275\u0275attribute("d", ctx.icons.undo);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.session().can_redo())("title", ctx.redoTitle());
        \u0275\u0275attribute("aria-label", ctx.redoTitle());
        \u0275\u0275advance(2);
        \u0275\u0275attribute("d", ctx.icons.redo);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.annotation_tools);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", ctx.colourTitle());
        \u0275\u0275attribute("aria-expanded", ctx.colour_menu())("aria-label", ctx.colourTitle());
        \u0275\u0275advance();
        \u0275\u0275styleProp("background", ctx.selectedColour());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.colour_menu() ? 18 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.session().annotations().length)("title", ctx.strings().undo_mark);
        \u0275\u0275attribute("aria-label", ctx.strings().undo_mark);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("d", ctx.icons.backspace);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.session().annotations().length)("title", ctx.strings().clear_marks);
        \u0275\u0275attribute("aria-label", ctx.strings().clear_marks);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("d", ctx.icons.ink_eraser);
        \u0275\u0275advance();
        \u0275\u0275classProp("pressed", ctx.annotations_visible());
        \u0275\u0275property("disabled", !ctx.session().annotations().length)("title", ctx.strings().show_marks);
        \u0275\u0275attribute("aria-pressed", ctx.annotations_visible())("aria-label", ctx.strings().show_marks);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("d", ctx.annotations_visible() ? ctx.icons.visible : ctx.icons.hidden);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.strings().show_marks);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_37_0 = ctx.session().preview()) ? 31 : -1, tmp_37_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.annotation_tool() !== "select" || ctx.session().annotations().length ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", ctx.strings().zoom_label);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.elementCount());
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.strings().zoom_out);
        \u0275\u0275attribute("aria-label", ctx.strings().zoom_out);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("d", ctx.icons.remove);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", canvas_r9.zoom_percent(), "%");
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.strings().zoom_in);
        \u0275\u0275attribute("aria-label", ctx.strings().zoom_in);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("d", ctx.icons.add);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.strings().zoom_fit);
        \u0275\u0275attribute("aria-label", ctx.strings().zoom_fit);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("d", ctx.icons.fit_screen);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_save() || ctx.show_studio() ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("session", ctx.session())("strings", ctx.strings())("notifier", ctx.notifier());
      }
    }, dependencies: [MapEditorCanvasComponent, PropertiesStripComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  min-height: 0;\n  overflow: hidden;\n  background: var(--%NS%base-100, #fff);\n  color: var(--%NS%base-content, #1f2937);\n  font-size: 0.875rem;\n}\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n}\n.main[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n}\n.well[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-height: 0;\n}\n.canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 24rem;\n  min-height: 0;\n  border-left: 1px solid var(--%NS%base-200, #e5e7eb);\n  background: var(--%NS%base-100, #fff);\n}\n.panel[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.float[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  gap: 0.125rem;\n  padding: 0.25rem;\n  border: 1px solid var(--%NS%base-300, #d4d4d8);\n  border-radius: 0.75rem;\n  background: var(--%NS%base-100, #fff);\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n}\n.rail[_ngcontent-%COMP%] {\n  top: 1rem;\n  left: 1rem;\n  flex-direction: column;\n}\n.zoom[_ngcontent-%COMP%] {\n  right: 1rem;\n  bottom: 1rem;\n}\n.actions[_ngcontent-%COMP%] {\n  top: 1rem;\n  right: 1rem;\n  gap: 0.5rem;\n  padding: 0.25rem 0.25rem 0.25rem 0.75rem;\n}\n.summary[_ngcontent-%COMP%] {\n  top: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  gap: 0.875rem;\n  padding: 0.5rem 0.875rem;\n  white-space: nowrap;\n}\n.summary[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.tally[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.ring[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n  border-radius: 999px;\n  border: 2px solid var(--%NS%info, #2563eb);\n}\n.tally[data-category=added][_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%] {\n  border-color: var(--%NS%success, #16a34a);\n}\n.tally[data-category=removed][_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%] {\n  border-color: var(--%NS%error, #dc2626);\n  border-style: dashed;\n}\n.hint[_ngcontent-%COMP%] {\n  left: 1rem;\n  bottom: 1rem;\n  display: block;\n  max-width: 32rem;\n  margin: 0;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.hint[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-left: 0.375rem;\n  font-weight: 500;\n}\n.tool[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  padding: 0;\n  border: none;\n  border-radius: 0.5rem;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  cursor: pointer;\n}\n.tool[_ngcontent-%COMP%]:hover:not(:disabled), \n.tool.pressed[_ngcontent-%COMP%] {\n  background: var(--%NS%base-200, #f4f4f5);\n}\n.tool[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  pointer-events: none;\n}\n.tool.active[_ngcontent-%COMP%] {\n  background: var(--%NS%secondary, #1f2155);\n  color: var(--%NS%secondary-content, #fff);\n}\n.tool[_ngcontent-%COMP%]:focus-visible, \n.action[_ngcontent-%COMP%]:focus-visible, \n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%primary, #2563eb);\n  outline-offset: 2px;\n}\nsvg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  flex: none;\n  fill: currentColor;\n}\n.sr[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n  border: 0;\n}\n.divider[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1px;\n  margin: 0.25rem 0;\n  background: var(--%NS%base-300, #d4d4d8);\n}\n.vdivider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 1.5rem;\n  margin: 0 0.125rem;\n  background: var(--%NS%base-300, #d4d4d8);\n}\n.colour[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dot[_ngcontent-%COMP%] {\n  display: block;\n  width: 1.125rem;\n  height: 1.125rem;\n  border-radius: 999px;\n  border: 2px solid var(--%NS%base-100, #fff);\n  box-shadow: 0 0 0 1px var(--%NS%base-300, #d4d4d8);\n}\n.dot.small[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: calc(100% + 0.5rem);\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  min-width: 9rem;\n  padding: 0.25rem;\n  border: 1px solid var(--%NS%base-300, #d4d4d8);\n  border-radius: 0.75rem;\n  background: var(--%NS%base-100, #fff);\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n}\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  height: 2.25rem;\n  padding: 0 0.625rem;\n  border: none;\n  border-radius: 0.5rem;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%base-200, #f4f4f5);\n}\n.menu[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.menu[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.count[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n  font-size: 0.75rem;\n  white-space: nowrap;\n}\n.zoom-value[_ngcontent-%COMP%] {\n  min-width: 2.75rem;\n  text-align: center;\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n}\n.muted[_ngcontent-%COMP%] {\n  opacity: 0.72;\n}\n.status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  margin-right: 0.25rem;\n  white-space: nowrap;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 999px;\n  background: var(--%NS%success, #16a34a);\n}\n.status.dirty[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: var(--%NS%warn, #f59e0b);\n}\n.action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  min-height: 2.5rem;\n  padding: 0 0.875rem;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  font-weight: 500;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.action[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--%NS%base-200, #f4f4f5);\n}\n.action.primary[_ngcontent-%COMP%] {\n  border-color: var(--%NS%secondary, #1f2155);\n  background: var(--%NS%secondary, #1f2155);\n  color: var(--%NS%secondary-content, #fff);\n}\n.action.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(1.1);\n}\n.action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n@media (prefers-reduced-motion: no-preference) {\n  .tool[_ngcontent-%COMP%], \n   .action[_ngcontent-%COMP%], \n   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    transition:\n      background-color 120ms,\n      box-shadow 120ms,\n      outline-color 120ms;\n  }\n}\n@media (max-width: 767px) {\n  .body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .well[_ngcontent-%COMP%] {\n    min-height: 420px;\n  }\n  .panel[_ngcontent-%COMP%] {\n    width: auto;\n    border-left: none;\n    border-top: 1px solid var(--%NS%base-200, #e5e7eb);\n  }\n  .summary[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=map-editor.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapEditorComponent, [{
    type: Component,
    args: [{ selector: "map-editor", changeDetection: ChangeDetectionStrategy.OnPush, imports: [MapEditorCanvasComponent, PropertiesStripComponent], template: `
        <div class="body">
            <div class="main">
                <div class="well">
                    <map-editor-canvas
                        #canvas
                        class="canvas"
                        [session]="session()"
                        [strings]="strings()"
                        [notifier]="notifier()"
                        [(annotation_tool)]="annotation_tool"
                        [(annotations_visible)]="annotations_visible"
                        [annotation_colour]="annotation_colour()"
                    />
                    <div
                        class="float rail"
                        role="toolbar"
                        aria-orientation="vertical"
                        [attr.aria-label]="strings().tools_label"
                    >
                        <button
                            type="button"
                            class="tool"
                            [disabled]="!session().can_undo()"
                            [title]="undoTitle()"
                            [attr.aria-label]="undoTitle()"
                            (click)="session().undo()"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path [attr.d]="icons.undo" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            class="tool"
                            [disabled]="!session().can_redo()"
                            [title]="redoTitle()"
                            [attr.aria-label]="redoTitle()"
                            (click)="session().redo()"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path [attr.d]="icons.redo" />
                            </svg>
                        </button>
                        <span class="divider" aria-hidden="true"></span>
                        @for (tool of annotation_tools; track tool.kind) {
                            <button
                                type="button"
                                class="tool"
                                [class.active]="annotation_tool() === tool.kind"
                                [attr.aria-pressed]="
                                    annotation_tool() === tool.kind
                                "
                                [title]="strings()[tool.label]"
                                [attr.aria-label]="strings()[tool.label]"
                                (click)="annotation_tool.set(tool.kind)"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path [attr.d]="icons[tool.icon]" />
                                </svg>
                            </button>
                        }
                        <div class="colour">
                            <button
                                type="button"
                                class="tool"
                                aria-haspopup="menu"
                                [attr.aria-expanded]="colour_menu()"
                                [title]="colourTitle()"
                                [attr.aria-label]="colourTitle()"
                                (click)="colour_menu.set(!colour_menu())"
                            >
                                <span
                                    class="dot"
                                    [style.background]="selectedColour()"
                                    aria-hidden="true"
                                ></span>
                            </button>
                            @if (colour_menu()) {
                                <div
                                    class="menu"
                                    role="menu"
                                    [attr.aria-label]="
                                        strings().annotation_colour
                                    "
                                >
                                    @for (
                                        colour of annotation_colours;
                                        track colour.name
                                    ) {
                                        <button
                                            type="button"
                                            role="menuitemradio"
                                            [attr.aria-checked]="
                                                annotation_colour() ===
                                                colour.name
                                            "
                                            (click)="pickColour(colour.name)"
                                        >
                                            <span
                                                class="dot small"
                                                [style.background]="
                                                    colour.value
                                                "
                                                aria-hidden="true"
                                            ></span>
                                            <span class="name">{{
                                                strings()[colour.name]
                                            }}</span>
                                            @if (
                                                annotation_colour() ===
                                                colour.name
                                            ) {
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        [attr.d]="icons.check"
                                                    />
                                                </svg>
                                            }
                                        </button>
                                    }
                                </div>
                            }
                        </div>
                        <span class="divider" aria-hidden="true"></span>
                        <button
                            type="button"
                            class="tool"
                            [disabled]="!session().annotations().length"
                            [title]="strings().undo_mark"
                            [attr.aria-label]="strings().undo_mark"
                            (click)="session().undoAnnotation()"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path [attr.d]="icons.backspace" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            class="tool"
                            [disabled]="!session().annotations().length"
                            [title]="strings().clear_marks"
                            [attr.aria-label]="strings().clear_marks"
                            (click)="session().clearAnnotations()"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path [attr.d]="icons.ink_eraser" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            class="tool"
                            [class.pressed]="annotations_visible()"
                            [disabled]="!session().annotations().length"
                            [attr.aria-pressed]="annotations_visible()"
                            [title]="strings().show_marks"
                            [attr.aria-label]="strings().show_marks"
                            (click)="
                                annotations_visible.set(!annotations_visible())
                            "
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    [attr.d]="
                                        annotations_visible()
                                            ? icons.visible
                                            : icons.hidden
                                    "
                                />
                            </svg>
                            <span class="sr">{{ strings().show_marks }}</span>
                        </button>
                    </div>
                    @if (session().preview(); as preview) {
                        <div class="float summary" role="status">
                            <span class="title">{{ preview.title }}</span>
                            <span class="muted note">{{ preview.note }}</span>
                            @for (tally of preview.counts; track tally.category) {
                                <span class="tally" [attr.data-category]="tally.category">
                                    <span class="ring" aria-hidden="true"></span>
                                    {{ tally.label }}
                                </span>
                            }
                        </div>
                    }
                    @if (
                        annotation_tool() !== 'select' ||
                        session().annotations().length
                    ) {
                        <p class="float hint" aria-live="polite">
                            {{ strings().annotation_hint }}
                            @if (session().annotations().length) {
                                <b>{{ marksCount() }}</b>
                            }
                        </p>
                    }
                    <div
                        class="float zoom"
                        role="group"
                        [attr.aria-label]="strings().zoom_label"
                    >
                        <span class="muted count">{{ elementCount() }}</span>
                        <span class="vdivider" aria-hidden="true"></span>
                        <button
                            type="button"
                            class="tool"
                            [title]="strings().zoom_out"
                            [attr.aria-label]="strings().zoom_out"
                            (click)="canvas.zoomOut()"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path [attr.d]="icons.remove" />
                            </svg>
                        </button>
                        <span class="zoom-value" aria-live="polite"
                            >{{ canvas.zoom_percent() }}%</span
                        >
                        <button
                            type="button"
                            class="tool"
                            [title]="strings().zoom_in"
                            [attr.aria-label]="strings().zoom_in"
                            (click)="canvas.zoomIn()"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path [attr.d]="icons.add" />
                            </svg>
                        </button>
                        <span class="vdivider" aria-hidden="true"></span>
                        <button
                            type="button"
                            class="tool"
                            [title]="strings().zoom_fit"
                            [attr.aria-label]="strings().zoom_fit"
                            (click)="canvas.fit()"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path [attr.d]="icons.fit_screen" />
                            </svg>
                        </button>
                    </div>
                    @if (show_save() || show_studio()) {
                        <div class="float actions toolbar">
                            @if (show_save()) {
                                <span
                                    class="status"
                                    role="status"
                                    aria-live="polite"
                                    [class.dirty]="session().dirty()"
                                >
                                    <span class="status-dot"></span>
                                    {{
                                        session().dirty()
                                            ? strings().unsaved
                                            : strings().saved
                                    }}
                                </span>
                            }
                            @if (show_studio()) {
                                <button
                                    type="button"
                                    class="action"
                                    (click)="open_studio.emit()"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path [attr.d]="icons.open" />
                                    </svg>
                                    {{ strings().open_studio }}
                                </button>
                            }
                            @if (show_save()) {
                                <button
                                    type="button"
                                    class="action primary"
                                    [disabled]="!session().dirty()"
                                    (click)="save.emit()"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path [attr.d]="icons.save" />
                                    </svg>
                                    {{ strings().save }}
                                </button>
                            }
                        </div>
                    }
                </div>
                <map-editor-properties
                    [session]="session()"
                    [strings]="strings()"
                    [notifier]="notifier()"
                />
            </div>
            <aside class="panel">
                <ng-content select="[panel]" />
            </aside>
        </div>
    `, styles: ["/* angular:styles/component:css;62a4c6c037bba5f237e840d3074c31b5468671654ac4a40af95a0ffa6266a799;/home/runner/work/user-interfaces/user-interfaces/libs/map-editor/src/lib/canvas/map-editor.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  min-height: 0;\n  overflow: hidden;\n  background: var(--base-100, #fff);\n  color: var(--base-content, #1f2937);\n  font-size: 0.875rem;\n}\n.body {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n}\n.main {\n  position: relative;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n}\n.well {\n  position: relative;\n  flex: 1;\n  min-height: 0;\n}\n.canvas {\n  position: absolute;\n  inset: 0;\n}\n.panel {\n  display: flex;\n  flex-direction: column;\n  width: 24rem;\n  min-height: 0;\n  border-left: 1px solid var(--base-200, #e5e7eb);\n  background: var(--base-100, #fff);\n}\n.panel:empty {\n  display: none;\n}\n.float {\n  position: absolute;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  gap: 0.125rem;\n  padding: 0.25rem;\n  border: 1px solid var(--base-300, #d4d4d8);\n  border-radius: 0.75rem;\n  background: var(--base-100, #fff);\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n}\n.rail {\n  top: 1rem;\n  left: 1rem;\n  flex-direction: column;\n}\n.zoom {\n  right: 1rem;\n  bottom: 1rem;\n}\n.actions {\n  top: 1rem;\n  right: 1rem;\n  gap: 0.5rem;\n  padding: 0.25rem 0.25rem 0.25rem 0.75rem;\n}\n.summary {\n  top: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  gap: 0.875rem;\n  padding: 0.5rem 0.875rem;\n  white-space: nowrap;\n}\n.summary .title {\n  font-weight: 500;\n}\n.tally {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.ring {\n  width: 0.875rem;\n  height: 0.875rem;\n  border-radius: 999px;\n  border: 2px solid var(--info, #2563eb);\n}\n.tally[data-category=added] .ring {\n  border-color: var(--success, #16a34a);\n}\n.tally[data-category=removed] .ring {\n  border-color: var(--error, #dc2626);\n  border-style: dashed;\n}\n.hint {\n  left: 1rem;\n  bottom: 1rem;\n  display: block;\n  max-width: 32rem;\n  margin: 0;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.hint b {\n  margin-left: 0.375rem;\n  font-weight: 500;\n}\n.tool {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  padding: 0;\n  border: none;\n  border-radius: 0.5rem;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  cursor: pointer;\n}\n.tool:hover:not(:disabled),\n.tool.pressed {\n  background: var(--base-200, #f4f4f5);\n}\n.tool:disabled {\n  opacity: 0.35;\n  pointer-events: none;\n}\n.tool.active {\n  background: var(--secondary, #1f2155);\n  color: var(--secondary-content, #fff);\n}\n.tool:focus-visible,\n.action:focus-visible,\n.menu button:focus-visible {\n  outline: 2px solid var(--primary, #2563eb);\n  outline-offset: 2px;\n}\nsvg {\n  width: 1.25rem;\n  height: 1.25rem;\n  flex: none;\n  fill: currentColor;\n}\n.sr {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n  border: 0;\n}\n.divider {\n  width: 1.5rem;\n  height: 1px;\n  margin: 0.25rem 0;\n  background: var(--base-300, #d4d4d8);\n}\n.vdivider {\n  width: 1px;\n  height: 1.5rem;\n  margin: 0 0.125rem;\n  background: var(--base-300, #d4d4d8);\n}\n.colour {\n  position: relative;\n}\n.dot {\n  display: block;\n  width: 1.125rem;\n  height: 1.125rem;\n  border-radius: 999px;\n  border: 2px solid var(--base-100, #fff);\n  box-shadow: 0 0 0 1px var(--base-300, #d4d4d8);\n}\n.dot.small {\n  width: 1rem;\n  height: 1rem;\n}\n.menu {\n  position: absolute;\n  top: 0;\n  left: calc(100% + 0.5rem);\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  min-width: 9rem;\n  padding: 0.25rem;\n  border: 1px solid var(--base-300, #d4d4d8);\n  border-radius: 0.75rem;\n  background: var(--base-100, #fff);\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n}\n.menu button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  height: 2.25rem;\n  padding: 0 0.625rem;\n  border: none;\n  border-radius: 0.5rem;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.menu button:hover {\n  background: var(--base-200, #f4f4f5);\n}\n.menu .name {\n  flex: 1;\n}\n.menu svg {\n  width: 1rem;\n  height: 1rem;\n}\n.count {\n  padding: 0 0.5rem;\n  font-size: 0.75rem;\n  white-space: nowrap;\n}\n.zoom-value {\n  min-width: 2.75rem;\n  text-align: center;\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n}\n.muted {\n  opacity: 0.72;\n}\n.status {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  margin-right: 0.25rem;\n  white-space: nowrap;\n}\n.status-dot {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 999px;\n  background: var(--success, #16a34a);\n}\n.status.dirty .status-dot {\n  background: var(--warn, #f59e0b);\n}\n.action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  min-height: 2.5rem;\n  padding: 0 0.875rem;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  font-weight: 500;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.action:hover:not(:disabled) {\n  background: var(--base-200, #f4f4f5);\n}\n.action.primary {\n  border-color: var(--secondary, #1f2155);\n  background: var(--secondary, #1f2155);\n  color: var(--secondary-content, #fff);\n}\n.action.primary:hover:not(:disabled) {\n  filter: brightness(1.1);\n}\n.action:disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n@media (prefers-reduced-motion: no-preference) {\n  .tool,\n  .action,\n  .menu button {\n    transition:\n      background-color 120ms,\n      box-shadow 120ms,\n      outline-color 120ms;\n  }\n}\n@media (max-width: 767px) {\n  .body {\n    flex-direction: column;\n  }\n  .well {\n    min-height: 420px;\n  }\n  .panel {\n    width: auto;\n    border-left: none;\n    border-top: 1px solid var(--base-200, #e5e7eb);\n  }\n  .summary .note {\n    display: none;\n  }\n}\n/*# sourceMappingURL=map-editor.component.css.map */\n"] }]
  }], null, { session: [{ type: Input, args: [{ isSignal: true, alias: "session", required: true }] }], strings: [{ type: Input, args: [{ isSignal: true, alias: "strings", required: false }] }], notifier: [{ type: Input, args: [{ isSignal: true, alias: "notifier", required: false }] }], show_save: [{ type: Input, args: [{ isSignal: true, alias: "show_save", required: false }] }], show_studio: [{ type: Input, args: [{ isSignal: true, alias: "show_studio", required: false }] }], save: [{ type: Output, args: ["save"] }], open_studio: [{ type: Output, args: ["open_studio"] }], closeColourMenu: [{
    type: HostListener,
    args: ["document:pointerdown", ["$event"]]
  }], closeColourMenuOnEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapEditorComponent, { className: "MapEditorComponent", filePath: "libs/map-editor/src/lib/canvas/map-editor.component.ts", lineNumber: 710 });
})();

// libs/map-editor/src/lib/draft-store.ts
var DRAFT_KEY_PREFIX = "map-editor:draft:";
var DB_NAME = "placeos-map-editor";
var DB_VERSION = 1;
var STORE = "drafts";
function draftKey(zone_id, source_sha256) {
  return `${DRAFT_KEY_PREFIX}${zone_id}:${source_sha256}`;
}
async function sha256Hex(text2) {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle)
    return `fnv-${contentHash(text2)}`;
  const digest = await subtle.digest("SHA-256", new TextEncoder().encode(text2));
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
async function draftKeyFor(zone_id, source_text) {
  return draftKey(zone_id, await sha256Hex(source_text));
}
function makeDraft(zone_id, source_sha256, markup) {
  return {
    key: draftKey(zone_id, source_sha256),
    zone_id,
    source_sha256,
    markup,
    saved_at: Date.now()
  };
}
function request(req) {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
var IndexedDbDraftStore = class {
  constructor() {
    this._db = null;
  }
  static isAvailable() {
    return typeof indexedDB !== "undefined";
  }
  async get(key) {
    const db = await this._open();
    const store = db.transaction(STORE, "readonly").objectStore(STORE);
    const draft = await request(store.get(key));
    return draft || null;
  }
  async put(draft) {
    const db = await this._open();
    const store = db.transaction(STORE, "readwrite").objectStore(STORE);
    await request(store.put(draft));
  }
  async delete(key) {
    const db = await this._open();
    const store = db.transaction(STORE, "readwrite").objectStore(STORE);
    await request(store.delete(key));
  }
  async keys() {
    const db = await this._open();
    const store = db.transaction(STORE, "readonly").objectStore(STORE);
    const keys = await request(store.getAllKeys());
    return keys.map((key) => `${key}`).sort();
  }
  _open() {
    if (!this._db) {
      this._db = new Promise((resolve, reject) => {
        const open = indexedDB.open(DB_NAME, DB_VERSION);
        open.onupgradeneeded = () => {
          if (!open.result.objectStoreNames.contains(STORE)) {
            open.result.createObjectStore(STORE, {
              keyPath: "key"
            });
          }
        };
        open.onsuccess = () => resolve(open.result);
        open.onerror = () => reject(open.error);
      });
    }
    return this._db;
  }
};

// libs/map-editor/src/lib/history.ts
function snapshotBytes(root) {
  return new XMLSerializer().serializeToString(root).length;
}
var MapHistory = class {
  constructor(_doc, options = {}) {
    this._doc = _doc;
    this._undo = [];
    this._redo = [];
    this.depth = Math.max(1, options.depth ?? HISTORY_DEPTH);
    this.byte_budget = Math.max(1, options.byte_budget ?? HISTORY_BYTE_BUDGET);
  }
  get length() {
    return this._undo.length;
  }
  get redo_length() {
    return this._redo.length;
  }
  get bytes() {
    return this._undo.reduce((sum, entry) => sum + entry.bytes, 0);
  }
  get can_undo() {
    return this._undo.length > 0;
  }
  get can_redo() {
    return this._redo.length > 0;
  }
  labels() {
    return this._undo.map((entry) => entry.label);
  }
  /** Labels of the entries redo would restore, most recent first. */
  redoLabels() {
    return [...this._redo].reverse().map((entry) => entry.label);
  }
  /** Snapshot the document before a change. Clears the redo stack. */
  push(label = "") {
    const root = this._doc.root.cloneNode(true);
    this._undo.push({
      root,
      bytes: snapshotBytes(root),
      label,
      at: Date.now()
    });
    this._redo = [];
    this._trim();
  }
  undo() {
    const entry = this._undo.pop();
    if (!entry)
      return false;
    this._redo.push(this._currentEntry(entry.label));
    this._doc.replaceRoot(entry.root);
    return true;
  }
  redo() {
    const entry = this._redo.pop();
    if (!entry)
      return false;
    this._undo.push(this._currentEntry(entry.label));
    this._doc.replaceRoot(entry.root);
    return true;
  }
  /** Forget the most recent snapshot without restoring it. */
  drop() {
    return this._undo.pop() !== void 0;
  }
  clear() {
    this._undo = [];
    this._redo = [];
  }
  _currentEntry(label) {
    const root = this._doc.root;
    return { root, bytes: snapshotBytes(root), label, at: Date.now() };
  }
  _trim() {
    while (this._undo.length > this.depth)
      this._undo.shift();
    while (this._undo.length > 1 && this.bytes > this.byte_budget)
      this._undo.shift();
  }
};

// libs/map-editor/src/lib/render-check.ts
var BrowserRenderCheck = class {
  constructor(_timeout_ms = 1e4) {
    this._timeout_ms = _timeout_ms;
  }
  check(markup) {
    const started = Date.now();
    const url = URL.createObjectURL(new Blob([markup], { type: "image/svg+xml" }));
    return new Promise((resolve) => {
      const image = new Image();
      let settled = false;
      const finish = (result) => {
        if (settled)
          return;
        settled = true;
        clearTimeout(timer);
        URL.revokeObjectURL(url);
        resolve(__spreadProps(__spreadValues({}, result), { duration_ms: Date.now() - started }));
      };
      const timer = setTimeout(() => finish({
        ok: false,
        error: "the map did not finish rendering in time"
      }), this._timeout_ms);
      image.onload = () => {
        if (!image.naturalWidth && !image.width) {
          finish({
            ok: false,
            error: "the map rendered with no size"
          });
          return;
        }
        finish({ ok: true });
      };
      image.onerror = () => finish({
        ok: false,
        error: "the browser could not draw the map"
      });
      image.src = url;
    });
  }
};
var FakeRenderCheck = class {
  constructor(_result = { ok: true }) {
    this._result = _result;
    this.calls = [];
  }
  async check(markup) {
    this.calls.push(markup);
    return __spreadValues({}, this._result);
  }
};

// libs/map-editor/src/lib/session.ts
var LiveGeometryProvider = class {
  constructor(_root) {
    this._root = _root;
  }
  bboxOf(element) {
    return new BrowserGeometryProvider(this._root()).bboxOf(element);
  }
  ctmOf(element) {
    return new BrowserGeometryProvider(this._root()).ctmOf(element);
  }
};
var MapEditorSession = class {
  addAnnotation(mark) {
    if (this._annotations().length >= 20)
      return;
    this._annotations.update((marks) => [
      ...marks,
      structuredClone(__spreadProps(__spreadValues({}, mark), { n: this._next_annotation++ }))
    ]);
  }
  undoAnnotation() {
    this._annotations.update((marks) => marks.slice(0, -1));
  }
  clearAnnotations() {
    this._annotations.set([]);
  }
  constructor(doc, options) {
    this._annotations = signal(
      [],
      ...ngDevMode ? [{ debugName: "_annotations" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.annotations = this._annotations.asReadonly();
    this._next_annotation = 1;
    this._version = signal(
      0,
      ...ngDevMode ? [{ debugName: "_version" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.version = this._version.asReadonly();
    this._selection = signal(
      [],
      ...ngDevMode ? [{ debugName: "_selection" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selection = this._selection.asReadonly();
    this._hover = signal(
      null,
      ...ngDevMode ? [{ debugName: "_hover" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hover = this._hover.asReadonly();
    this._preview = signal(
      null,
      ...ngDevMode ? [{ debugName: "_preview" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.preview = this._preview.asReadonly();
    this._can_undo = signal(
      false,
      ...ngDevMode ? [{ debugName: "_can_undo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_undo = this._can_undo.asReadonly();
    this._can_redo = signal(
      false,
      ...ngDevMode ? [{ debugName: "_can_redo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_redo = this._can_redo.asReadonly();
    this._dirty = signal(
      false,
      ...ngDevMode ? [{ debugName: "_dirty" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dirty = this._dirty.asReadonly();
    this._undo_label = signal(
      "",
      ...ngDevMode ? [{ debugName: "_undo_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.undo_label = this._undo_label.asReadonly();
    this._redo_label = signal(
      "",
      ...ngDevMode ? [{ debugName: "_redo_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.redo_label = this._redo_label.asReadonly();
    this._draft_timer = null;
    this._draft_write = Promise.resolve();
    this._index = null;
    this._index_version = -1;
    this._index_rendered = false;
    this._disposed = false;
    this.doc = doc;
    this.zone_id = options.zone_id;
    this.protected = options.protected || doc.protected;
    doc.protected = this.protected;
    this.geometry = options.geometry || doc.geometry;
    doc.geometry = this.geometry;
    this.render_check = options.render_check || new FakeRenderCheck();
    this.history = new MapHistory(doc, options.history);
    this._baseline_markup = doc.serialise();
    this._baseline_root = doc.root.cloneNode(true);
    this._baseline_signatures = doc.signatures();
    this._draft_store = options.draft_store || null;
    this._draft_delay_ms = options.draft_delay_ms ?? 800;
    this._draft_key = draftKeyFor(options.zone_id, options.source_text);
  }
  /**
   * The element index with bounding boxes, cached per version. An index
   * built before the map is rendered in the page has no boxes, so it is
   * replaced by the first one built after the map is mounted.
   */
  index() {
    const rendered = this.isRendered();
    if (!this._index || this._index_version !== this._version() || rendered && !this._index_rendered) {
      this._index = buildIndex(this.doc, {
        geometry: this.geometry,
        protected: this.protected
      });
      this._index_version = this._version();
      this._index_rendered = rendered;
    }
    return this._index;
  }
  /** Whether the document's root is in the page's render tree, shadow roots included. */
  isRendered() {
    return typeof document !== "undefined" && this.doc.root.getRootNode({ composed: true }) === document;
  }
  select(anchors) {
    const next = [...new Set(anchors)].filter((anchor) => !!this.doc.byAnchor(anchor));
    const current = this._selection();
    if (next.length === current.length && next.every((anchor, i) => anchor === current[i])) {
      return;
    }
    this._selection.set(next);
  }
  toggleSelected(anchor) {
    const current = this._selection();
    this.select(current.includes(anchor) ? current.filter((entry) => entry !== anchor) : [...current, anchor]);
  }
  setHover(anchor) {
    const next = anchor && this.doc.byAnchor(anchor) ? anchor : null;
    if (next !== this._hover())
      this._hover.set(next);
  }
  setPreview(summary) {
    this._preview.set(summary);
  }
  /** One history entry, then the ops, then a version bump. */
  apply(ops, label, options = {}) {
    this.history.push(label);
    const result = applyOps(this.doc, ops, {
      geometry: this.geometry,
      skip: options.skip
    });
    if (!result.applied.length) {
      this.history.drop();
      this._syncHistory();
      return result;
    }
    this._changed();
    return result;
  }
  undo() {
    if (!this.history.undo())
      return false;
    this._changed();
    return true;
  }
  redo() {
    if (!this.history.redo())
      return false;
    this._changed();
    return true;
  }
  /**
   * Replace the whole document with other markup (a draft or an earlier
   * save), as one undoable step. Throws the loader's error when the markup
   * does not parse.
   */
  restore(markup, label = "Restore") {
    const loaded = MapDocument.load(markup, {
      geometry: this.geometry,
      protected: this.protected
    });
    this.history.push(label);
    const root = loaded.root;
    for (const element of [root, ...Array.from(root.querySelectorAll("*"))])
      element.removeAttribute(ANCHOR_ATTR);
    this.doc.replaceRoot(root);
    this.doc.assignAnchors(this.doc.root);
    this._changed();
  }
  /**
   * Put the loaded document back, as one undoable step; the elements keep
   * the anchors they loaded with.
   */
  revert(label = "Discard changes") {
    this.history.push(label);
    this.doc.replaceRoot(this._baseline_root.cloneNode(true));
    this._changed();
  }
  /** Make the current document the baseline, after a save. */
  markSaved() {
    this._baseline_markup = this.doc.serialise();
    this._baseline_root = this.doc.root.cloneNode(true);
    this._baseline_signatures = this.doc.signatures();
    this._dirty.set(false);
  }
  /** Whether the element differs from the loaded document, or is new. */
  isChanged(anchor) {
    const element = this.doc.byAnchor(anchor);
    if (!element)
      return false;
    const original = this.originalOf(anchor);
    return !original || canonicalSignature(original) !== canonicalSignature(element);
  }
  /**
   * The element as it was when the map loaded, by anchor or, after a
   * restore has re-anchored the tree, by id; null for a new element.
   */
  originalOf(anchor) {
    const by_anchor = this._baseline_root.querySelector(`[${ANCHOR_ATTR}="${anchor}"]`);
    if (by_anchor)
      return by_anchor;
    const id = this.doc.byAnchor(anchor)?.getAttribute("id");
    if (!id)
      return null;
    for (const candidate of Array.from(this._baseline_root.querySelectorAll("[id]"))) {
      if (candidate.getAttribute("id") === id)
        return candidate;
    }
    return null;
  }
  draftKey() {
    return this._draft_key;
  }
  /** The draft kept for this map, if the store has one. */
  async loadDraft() {
    if (!this._draft_store)
      return null;
    const draft = await this._draft_store.get(await this._draft_key);
    return draft?.markup || null;
  }
  /** Remove the browser draft, after a save or a discard. */
  async clearDraft() {
    if (this._draft_timer) {
      clearTimeout(this._draft_timer);
      this._draft_timer = null;
    }
    await this._draft_write;
    if (!this._draft_store)
      return;
    await this._draft_store.delete(await this._draft_key);
  }
  /** Resolve once any pending draft write has finished. */
  flushDraft() {
    if (this._draft_timer) {
      clearTimeout(this._draft_timer);
      this._draft_timer = null;
      this._queueDraftWrite();
    }
    return this._draft_write;
  }
  dispose() {
    this._disposed = true;
    if (this._draft_timer) {
      clearTimeout(this._draft_timer);
      this._draft_timer = null;
    }
  }
  _changed() {
    this._version.update((version) => version + 1);
    this._dirty.set(this.doc.serialise() !== this._baseline_markup);
    this._syncHistory();
    this.select(this._selection());
    this.setHover(this._hover());
    this._scheduleDraft();
  }
  _syncHistory() {
    this._can_undo.set(this.history.can_undo);
    this._can_redo.set(this.history.can_redo);
    this._undo_label.set(this.history.labels().at(-1) || "");
    this._redo_label.set(this.history.redoLabels()[0] || "");
  }
  _scheduleDraft() {
    if (!this._draft_store || this._disposed)
      return;
    if (this._draft_timer)
      clearTimeout(this._draft_timer);
    this._draft_timer = setTimeout(() => {
      this._draft_timer = null;
      this._queueDraftWrite();
    }, this._draft_delay_ms);
  }
  _queueDraftWrite() {
    const store = this._draft_store;
    if (!store || this._disposed)
      return;
    const dirty = this._dirty();
    const markup = dirty ? this.doc.serialise() : "";
    this._draft_write = this._draft_write.then(async () => {
      const key = await this._draft_key;
      if (!dirty) {
        await store.delete(key);
        return;
      }
      const sha = key.slice(key.lastIndexOf(":") + 1);
      await store.put(makeDraft(this.zone_id, sha, markup));
    }).catch(() => void 0);
  }
};

// apps/concierge/src/app/map-manager/map-editor-page.component.ts
function MapEditorPageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.building()?.display_name || ctx_r0.building()?.name, " \xB7 ");
  }
}
function MapEditorPageComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5)(1, "icon", 17);
    \u0275\u0275text(2, "link_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r0.failed_sources().join(", "));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.MAPS_BINDINGS_INCOMPLETE"), " ");
  }
}
function MapEditorPageComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6)(1, "icon", 17);
    \u0275\u0275text(2, "sync_problem");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE"), " ");
  }
}
function MapEditorPageComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275element(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-warning", ctx_r0.dirty())("bg-success", !ctx_r0.dirty());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dirty() ? ctx_r0.strings.unsaved : ctx_r0.strings.saved, " ");
  }
}
function MapEditorPageComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "icon", 19);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function MapEditorPageComponent_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "map-editor-ai-panel", 21);
  }
  if (rf & 2) {
    const editor_session_r2 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("session", editor_session_r2)("zone_id", ctx_r0.level_id())("upload", ctx_r0.upload_port)("strings", ctx_r0.ai_strings);
  }
}
function MapEditorPageComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "map-editor", 15);
    \u0275\u0275conditionalCreate(1, MapEditorPageComponent_Conditional_30_Conditional_1_Template, 1, 4, "map-editor-ai-panel", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("session", ctx)("strings", ctx_r0.strings)("notifier", ctx_r0.notifier);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.ai_hidden() ? 1 : -1);
  }
}
function MapEditorPageComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading(), " ");
  }
}
function mapEditorStrings() {
  const strings = __spreadValues({}, DEFAULT_MAP_EDITOR_STRINGS);
  for (const key of Object.keys(strings)) {
    const locale_key = `MAP_EDITOR.${key.toUpperCase()}`;
    const value = i18n(locale_key);
    if (value && value !== locale_key)
      strings[key] = value;
  }
  return strings;
}
function mapEditorAiStrings(lookup = i18n) {
  const strings = {};
  for (const [name, value] of Object.entries(DEFAULT_AI_STRINGS)) {
    const prefix = `MAP_EDITOR.AI.${name.toUpperCase()}`;
    if (typeof value === "string") {
      strings[name] = localised(lookup, prefix, value);
      continue;
    }
    const group2 = {};
    for (const [key, text2] of Object.entries(value)) {
      group2[key] = localised(lookup, `${prefix}.${key.toUpperCase()}`, text2);
    }
    strings[name] = group2;
  }
  return strings;
}
function localised(lookup, key, fallback) {
  const value = lookup(key);
  return value && value !== key ? value : fallback;
}
var MapEditorPageComponent = class _MapEditorPageComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._manager = inject(MapManagementService);
    this._destroy = inject(DestroyRef);
    this.level_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "level_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = signal(
      null,
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.session = signal(
      null,
      ...ngDevMode ? [{ debugName: "session" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.saving = signal(
      "",
      ...ngDevMode ? [{ debugName: "saving" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = signal(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.failed_sources = signal(
      [],
      ...ngDevMode ? [{ debugName: "failed_sources" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.changed_elsewhere = signal(
      false,
      ...ngDevMode ? [{ debugName: "changed_elsewhere" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ai_hidden = signal(
      false,
      ...ngDevMode ? [{ debugName: "ai_hidden" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = computed(
      () => this._manager.building(this.level() || void 0),
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bindings_incomplete = computed(
      () => this.failed_sources().length > 0,
      ...ngDevMode ? [{ debugName: "bindings_incomplete" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dirty = computed(
      () => this.session()?.dirty() ?? false,
      ...ngDevMode ? [{ debugName: "dirty" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.strings = mapEditorStrings();
    this.ai_strings = mapEditorAiStrings();
    this.notifier = {
      confirm: (title, message, confirm_text) => this._confirm(title, message, confirm_text),
      notify: (kind, message, action) => this._notify(kind, message, action)
    };
    this.upload_port = (blob, name) => this._manager.uploadMapSnapshot(blob, name);
    this._ai_panel = viewChild(
      MapEditorAiPanelComponent,
      ...ngDevMode ? [{ debugName: "_ai_panel" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loaded_map_id = "";
    this._destroy.onDestroy(() => this.session()?.dispose());
    effect(() => {
      if (this._ai_panel()?.hidden())
        this.ai_hidden.set(true);
    });
  }
  hasUnsavedChanges() {
    return this.dirty();
  }
  async ngOnInit() {
    this.loading.set(i18n("APP.CONCIERGE.MAPS_LOADING"));
    this.level_id.set(this._route.snapshot.paramMap.get("level_id") || "");
    await this._org.waitUntilInitialised();
    const level = this._manager.level(this.level_id());
    if (!level) {
      this.error.set(i18n("APP.CONCIERGE.MAPS_NO_LEVEL"));
      return;
    }
    this.level.set(level);
    if (!level.map_id) {
      this.error.set(i18n("APP.CONCIERGE.MAPS_NO_MAP"));
      return;
    }
    this._loaded_map_id = level.map_id;
    try {
      await this._load(level);
    } catch (error) {
      this.error.set(`${i18n("APP.CONCIERGE.MAPS_LOAD_ERROR")} ${errorText(error)}`);
    } finally {
      this.loading.set("");
    }
  }
  openStudio() {
    this._manager.openStudio();
  }
  async discard() {
    const session = this.session();
    if (!session || !session.dirty())
      return;
    const ok = await this._confirm(i18n("APP.CONCIERGE.MAPS_DISCARD_TITLE"), i18n("APP.CONCIERGE.MAPS_DISCARD_MSG"), i18n("APP.CONCIERGE.MAPS_DISCARD_CONFIRM"));
    if (!ok)
      return;
    session.revert(this.strings.undo);
    await session.clearDraft();
  }
  async save() {
    const session = this.session();
    const level = this.level();
    if (!session || !level || !session.dirty() || this.saving())
      return;
    this.saving.set(i18n("APP.CONCIERGE.MAPS_SAVING"));
    try {
      const current_map_id = await this._manager.currentMapId(level.id).catch(() => this._loaded_map_id);
      if (current_map_id !== this._loaded_map_id) {
        this.changed_elsewhere.set(true);
        const ok = await this._confirm(i18n("APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE_TITLE"), i18n("APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE_MSG"), i18n("APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE_CONFIRM"));
        if (!ok)
          return;
      }
      const markup = session.doc.serialise();
      const render = await session.render_check.check(markup);
      if (!render.ok) {
        notifyError(`${i18n("APP.CONCIERGE.MAPS_RENDER_ERROR")} ${render.error || ""}`);
        return;
      }
      const saved = await this._manager.saveLevelMap(level, markup, session.undo_label() || i18n("APP.CONCIERGE.MAPS_SUMMARY"));
      this._loaded_map_id = saved.map_id;
      this.level.set(this._manager.level(level.id) || level);
      this.changed_elsewhere.set(false);
      session.markSaved();
      await session.clearDraft();
      notifySuccess(i18n("APP.CONCIERGE.MAPS_SAVED"));
    } catch (error) {
      notifyError(`${i18n("APP.CONCIERGE.MAPS_SAVE_ERROR")} ${errorText(error)}`);
    } finally {
      this.saving.set("");
    }
  }
  async _load(level) {
    const [text2, protected_ids] = await Promise.all([
      this._manager.loadMapText(level),
      collectProtectedIds(this._manager.protectedIdSources(level))
    ]);
    this.failed_sources.set(protected_ids.failed_sources);
    let doc = null;
    const geometry = new LiveGeometryProvider(() => doc.root);
    doc = MapDocument.load(text2, { geometry, protected: protected_ids });
    const session = new MapEditorSession(doc, {
      zone_id: level.id,
      source_text: text2,
      geometry,
      protected: protected_ids,
      render_check: new BrowserRenderCheck(),
      draft_store: IndexedDbDraftStore.isAvailable() ? new IndexedDbDraftStore() : null
    });
    this.session.set(session);
    const draft = await session.loadDraft().catch(() => null);
    if (draft && draft !== session.doc.serialise()) {
      const ok = await this._confirm(i18n("APP.CONCIERGE.MAPS_DRAFT_TITLE"), i18n("APP.CONCIERGE.MAPS_DRAFT_MSG"), i18n("APP.CONCIERGE.MAPS_DRAFT_RESTORE"));
      if (ok) {
        try {
          session.restore(draft, i18n("APP.CONCIERGE.MAPS_DRAFT_LABEL"));
        } catch (error) {
          notifyWarn(`${i18n("APP.CONCIERGE.MAPS_DRAFT_ERROR")} ${errorText(error)}`);
          await session.clearDraft();
        }
      } else {
        await session.clearDraft();
      }
    }
  }
  async _confirm(title, content, confirm_text) {
    const ref = await openConfirmModal({ title, content, confirm_text, icon: { content: "warning" } }, this._dialog);
    ref.close();
    return ref.reason === "done";
  }
  _notify(kind, message, action) {
    const label = action?.label;
    const run = action?.run;
    switch (kind) {
      case "success":
        notifySuccess(message, label, run);
        break;
      case "error":
        notifyError(message, label, run);
        break;
      case "warning":
        notifyWarn(message, label, run);
        break;
      default:
        notifyInfo(message, label, run);
    }
  }
  static {
    this.\u0275fac = function MapEditorPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapEditorPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapEditorPageComponent, selectors: [["", "app-map-editor-page", ""]], viewQuery: function MapEditorPageComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._ai_panel, MapEditorAiPanelComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostBindings: function MapEditorPageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("beforeunload", function MapEditorPageComponent_beforeunload_HostBindingHandler($event) {
          return ctx.hasUnsavedChanges() && $event.preventDefault();
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 32, vars: 23, consts: [[1, "border-base-200", "bg-base-100", "flex", "h-16", "flex-none", "items-center", "gap-3", "border-b", "pr-4", "pl-2"], ["icon", "", "matRipple", "", "routerLink", "/map-management", 3, "matTooltip"], [1, "flex", "min-w-0", "flex-col", "gap-0.5"], [1, "truncate", "text-lg", "leading-6", "font-medium"], [1, "truncate", "text-xs", "leading-4", "opacity-70"], [1, "bg-warning/20", "text-base-content", "ml-2", "inline-flex", "h-6", "items-center", "gap-1", "rounded-full", "px-2", "text-xs", "font-medium", 3, "matTooltip"], [1, "bg-error/15", "text-base-content", "ml-2", "inline-flex", "h-6", "items-center", "gap-1", "rounded-full", "px-2", "text-xs", "font-medium"], [1, "ml-auto", "flex", "items-center", "gap-2"], ["role", "status", "aria-live", "polite", 1, "mr-2", "flex", "items-center", "gap-1.5", "text-sm"], ["btn", "", "matRipple", "", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2", "max-md:sr-only"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click", "disabled"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], [1, "border-error/30", "bg-error/10", "mx-auto", "mt-8", "flex", "max-w-2xl", "flex-col", "items-center", "justify-center", "rounded", "border", "p-8", "text-center"], [1, "min-h-0", "flex-1", 3, "session", "strings", "notifier"], [1, "flex", "flex-1", "items-center", "justify-center", "opacity-60"], [1, "text-base"], ["aria-hidden", "true", 1, "size-2", "rounded-full"], [1, "text-error", "text-4xl"], [1, "mt-2"], ["panel", "", 3, "session", "zone_id", "upload", "strings"]], template: function MapEditorPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "a", 1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "icon");
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 2)(6, "h1", 3);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275conditionalCreate(9, MapEditorPageComponent_Conditional_9_Template, 1, 1);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(12, MapEditorPageComponent_Conditional_12_Template, 5, 4, "span", 5);
        \u0275\u0275conditionalCreate(13, MapEditorPageComponent_Conditional_13_Template, 5, 3, "span", 6);
        \u0275\u0275elementStart(14, "div", 7);
        \u0275\u0275conditionalCreate(15, MapEditorPageComponent_Conditional_15_Template, 3, 5, "p", 8);
        \u0275\u0275elementStart(16, "button", 9);
        \u0275\u0275listener("click", function MapEditorPageComponent_Template_button_click_16_listener() {
          return ctx.openStudio();
        });
        \u0275\u0275elementStart(17, "div", 10)(18, "icon");
        \u0275\u0275text(19, "open_in_new");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 11);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "button", 12);
        \u0275\u0275listener("click", function MapEditorPageComponent_Template_button_click_23_listener() {
          return ctx.discard();
        });
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 13);
        \u0275\u0275listener("click", function MapEditorPageComponent_Template_button_click_26_listener() {
          return ctx.save();
        });
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(29, MapEditorPageComponent_Conditional_29_Template, 5, 1, "div", 14)(30, MapEditorPageComponent_Conditional_30_Template, 2, 4, "map-editor", 15)(31, MapEditorPageComponent_Conditional_31_Template, 2, 1, "div", 16);
      }
      if (rf & 2) {
        let tmp_12_0;
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 13, "APP.CONCIERGE.MAPS_BACK"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.level()?.display_name || ctx.level()?.name || ctx.level_id(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.building() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 15, "APP.CONCIERGE.MAPS_SUBTITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.bindings_incomplete() ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.changed_elsewhere() ? 13 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.session() ? 15 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 17, "APP.CONCIERGE.MAPS_OPEN_STUDIO"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.dirty() || !!ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 19, "APP.CONCIERGE.MAPS_DISCARD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.dirty() || !!ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() || \u0275\u0275pipeBind1(28, 21, "APP.CONCIERGE.MAPS_SAVE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 29 : (tmp_12_0 = ctx.session()) ? 30 : 31, tmp_12_0);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      MapEditorComponent,
      MapEditorAiPanelComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--%NS%base-100);\n}\n/*# sourceMappingURL=map-editor-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapEditorPageComponent, [{
    type: Component,
    args: [{ selector: "[app-map-editor-page]", host: {
      "(window:beforeunload)": "hasUnsavedChanges() && $event.preventDefault()"
    }, template: `
        <header
            class="border-base-200 bg-base-100 flex h-16 flex-none items-center gap-3 border-b pr-4 pl-2"
        >
            <a
                icon
                matRipple
                routerLink="/map-management"
                [matTooltip]="'APP.CONCIERGE.MAPS_BACK' | translate"
            >
                <icon>arrow_back</icon>
            </a>
            <div class="flex min-w-0 flex-col gap-0.5">
                <h1 class="truncate text-lg leading-6 font-medium">
                    {{ level()?.display_name || level()?.name || level_id() }}
                </h1>
                <div class="truncate text-xs leading-4 opacity-70">
                    @if (building()) {
                        {{ building()?.display_name || building()?.name }}
                        &middot;
                    }
                    {{ 'APP.CONCIERGE.MAPS_SUBTITLE' | translate }}
                </div>
            </div>
            @if (bindings_incomplete()) {
                <span
                    class="bg-warning/20 text-base-content ml-2 inline-flex h-6 items-center gap-1 rounded-full px-2 text-xs font-medium"
                    [matTooltip]="failed_sources().join(', ')"
                >
                    <icon class="text-base">link_off</icon>
                    {{ 'APP.CONCIERGE.MAPS_BINDINGS_INCOMPLETE' | translate }}
                </span>
            }
            @if (changed_elsewhere()) {
                <span
                    class="bg-error/15 text-base-content ml-2 inline-flex h-6 items-center gap-1 rounded-full px-2 text-xs font-medium"
                >
                    <icon class="text-base">sync_problem</icon>
                    {{ 'APP.CONCIERGE.MAPS_CHANGED_ELSEWHERE' | translate }}
                </span>
            }
            <div class="ml-auto flex items-center gap-2">
                @if (session()) {
                    <p
                        class="mr-2 flex items-center gap-1.5 text-sm"
                        role="status"
                        aria-live="polite"
                    >
                        <span
                            class="size-2 rounded-full"
                            [class.bg-warning]="dirty()"
                            [class.bg-success]="!dirty()"
                            aria-hidden="true"
                        ></span>
                        {{ dirty() ? strings.unsaved : strings.saved }}
                    </p>
                }
                <button btn matRipple class="clear" (click)="openStudio()">
                    <div class="flex items-center space-x-2">
                        <icon>open_in_new</icon>
                        <div class="pr-2 max-md:sr-only">
                            {{ 'APP.CONCIERGE.MAPS_OPEN_STUDIO' | translate }}
                        </div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    class="inverse"
                    [disabled]="!dirty() || !!saving()"
                    (click)="discard()"
                >
                    {{ 'APP.CONCIERGE.MAPS_DISCARD' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!dirty() || !!saving()"
                    (click)="save()"
                >
                    {{ saving() || ('APP.CONCIERGE.MAPS_SAVE' | translate) }}
                </button>
            </div>
        </header>
        @if (error()) {
            <div
                class="border-error/30 bg-error/10 mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center rounded border p-8 text-center"
            >
                <icon class="text-error text-4xl">error</icon>
                <p class="mt-2">{{ error() }}</p>
            </div>
        } @else if (session(); as editor_session) {
            <map-editor
                class="min-h-0 flex-1"
                [session]="editor_session"
                [strings]="strings"
                [notifier]="notifier"
            >
                @if (!ai_hidden()) {
                    <map-editor-ai-panel
                        panel
                        [session]="editor_session"
                        [zone_id]="level_id()"
                        [upload]="upload_port"
                        [strings]="ai_strings"
                    />
                }
            </map-editor>
        } @else {
            <div class="flex flex-1 items-center justify-center opacity-60">
                {{ loading() }}
            </div>
        }
    `, imports: [
      RouterModule,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe,
      MapEditorComponent,
      MapEditorAiPanelComponent
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/map-manager/map-editor-page.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=map-editor-page.component.css.map */\n"] }]
  }], () => [], { _ai_panel: [{ type: ViewChild, args: [forwardRef(() => MapEditorAiPanelComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapEditorPageComponent, { className: "MapEditorPageComponent", filePath: "apps/concierge/src/app/map-manager/map-editor-page.component.ts", lineNumber: 241 });
})();
function errorText(error) {
  const detail = error;
  return detail?.message || detail?.error || `${error || ""}`;
}
export {
  MapEditorPageComponent,
  mapEditorAiStrings,
  mapEditorStrings
};
//# debugId=49c8b289-98fa-5e6b-8a76-2254fd4cf935
//# sourceMappingURL=map-editor-page.component-5XL3FRD7.js.map
