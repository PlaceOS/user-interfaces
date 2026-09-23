import {
  parse
} from "./chunk-2QAVTKHL.js";
import {
  TranslatePipe
} from "./chunk-7MFZA62W.js";
import {
  SanitizePipe
} from "./chunk-FQ5X5VZT.js";
import {
  AsyncHandler,
  IconComponent,
  OrganisationService,
  SettingsService,
  User,
  currentUser,
  current_user,
  settingSignal
} from "./chunk-BBWQXWRS.js";
import {
  Component,
  Dd,
  DefaultValueAccessor,
  FormsModule,
  Injectable,
  J,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Pipe,
  ViewChild,
  Xe,
  computed,
  differenceInMinutes,
  effect,
  format,
  inject,
  log,
  randomString,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-C5JCVNGY.js";
import "./chunk-653SOEEV.js";

// libs/components/src/lib/date-from.pipe.ts
var DateFromPipe = class _DateFromPipe {
  transform(date) {
    const now = Date.now();
    let diff = differenceInMinutes(now, date);
    const direction = diff < 0;
    diff = Math.abs(diff);
    if (diff < 1) {
      return direction ? "Soon" : "Now";
    } else if (diff === 1) {
      return direction ? "In 1 min" : "1 min";
    } else if (diff < 60) {
      return direction ? `In ${diff} min` : `${diff} min`;
    } else if (diff < 24 * 60) {
      const hours = Math.floor(diff / 60);
      return direction ? `In ${hours} hour${hours === 1 ? "" : "s"}` : format(date, "H:mm");
    } else if (diff < 7 * 24 * 60) {
      const days = Math.floor(diff / (24 * 60));
      return direction ? format(date, "dd MMM yyyy") : format(date, "E H:mm");
    } else if (diff < 365 * 24 * 60) {
      const days = Math.floor(diff / (24 * 60));
      return direction ? format(date, "dd MMM yyyy") : format(date, "LLL d H:mm");
    }
    return "Just now";
  }
  static {
    this.\u0275fac = function DateFromPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateFromPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "dateFrom", type: _DateFromPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateFromPipe, [{
    type: Pipe,
    args: [{
      name: "dateFrom"
    }]
  }], null, null);
})();

// libs/components/src/lib/chat/chat.service.ts
var ChatService = class _ChatService extends AsyncHandler {
  get connected() {
    return !!this._socket;
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._binding = signal(
      "",
      ...ngDevMode ? [{ debugName: "_binding" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._chat_messages = signal(
      [],
      ...ngDevMode ? [{ debugName: "_chat_messages" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._progress_message = signal(
      null,
      ...ngDevMode ? [{ debugName: "_progress_message" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._chat_system = computed(
      () => {
        const bld = this._org.active_building();
        const bind_id = this._binding();
        if (!bld?.id)
          return "";
        const binding = this._org.binding("chat_room");
        const system_id = binding instanceof Object ? binding.id : binding;
        return bind_id || system_id;
      },
      ...ngDevMode ? [{ debugName: "_chat_system" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._chat_id = "";
    this.chat_hint = signal(
      "",
      ...ngDevMode ? [{ debugName: "chat_hint" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.messages = this._chat_messages.asReadonly();
    this.progress = this._progress_message.asReadonly();
    effect(() => {
      const id = this._chat_system();
      if (id)
        this._bindHint(id);
    });
  }
  setBinding(system_id) {
    this._binding.set(system_id);
  }
  startChat() {
    if (this._socket)
      return;
    const id = this._chat_system();
    if (!id)
      return;
    const auth = J() !== "x-api-key" ? `bearer_token=${encodeURIComponent(J())}` : `x-api-key=${Xe()}`;
    const url = `ws${location.origin.replace("http", "")}/api/engine/v2/chatgpt/chat/${encodeURIComponent(id)}?${auth}${this._chat_id ? "&resume=" + encodeURIComponent(this._chat_id) : ""}`;
    log("CHAT", "Starting chat connection.");
    this._socket = new WebSocket(url);
    this._socket.onmessage = (event) => {
      let msg = event.data;
      try {
        msg = JSON.parse(event.data);
      } catch (e) {
      }
      this._onMessage(msg);
    };
    this._socket.onerror = (e) => {
      log("CHAT", "Connection error:", [e], "error");
      this._cleanup();
    };
    this._socket.onclose = () => this._cleanup();
    return () => this.endChat();
  }
  endChat() {
    log("CHAT", "Dropping chat connection.");
    this._socket?.close();
    this._cleanup();
  }
  close() {
    this.endChat();
    this._chat_id = "";
    this._chat_messages.set([]);
  }
  sendMessage(message) {
    if (!message)
      return;
    this._onMessage({ chat_id: "", message, user_id: currentUser().id });
    this._socket?.send(message);
  }
  _timeoutSocket(delay = 55 * 1e3) {
    this.timeout("socket", () => {
      const msg_list = this._chat_messages();
      if (msg_list.length > 0 && msg_list[msg_list.length - 1].user_id !== "assistant") {
        return this._timeoutSocket(delay);
      }
      this.endChat();
    }, delay);
  }
  _cleanup() {
    this._socket = null;
  }
  _onMessage(msg) {
    if (msg.chat_id)
      this._chat_id = msg.chat_id;
    if (msg.type === "progress") {
      this._progress_message.set({
        id: `msg-${randomString(6)}`,
        chat_id: msg.chat_id,
        message: msg.message,
        content: parse(msg.message, { async: false }),
        user_id: msg.user_id || "assistant",
        function: msg.function,
        timestamp: Date.now()
      });
      if (msg.function === "task_complete") {
        this._settings.post("CHAT:task_complete", msg.task_id);
      }
    } else {
      this._chat_messages.set([
        ...this._chat_messages(),
        {
          id: `msg-${randomString(6)}`,
          chat_id: msg.chat_id,
          message: msg.message,
          content: parse(msg.message, { async: false }),
          user_id: msg.user_id || "assistant",
          timestamp: Date.now()
        }
      ]);
      if (msg.type === "response") {
        this._progress_message.set(null);
      }
    }
    this._timeoutSocket();
  }
  _bindHint(id) {
    const mod = Dd(id, "LLM");
    const binding = mod.variable("user_hint");
    this.subscription(`binding:LLM:user_hint`, binding.bind());
    this.subscription(`listen:LLM:user_hint`, binding.listen().subscribe((value) => this.chat_hint.set(value)));
  }
  static {
    this.\u0275fac = function ChatService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatService, factory: _ChatService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/components/src/lib/chat/chat.component.ts
var _c0 = ["input"];
var _c1 = ["container"];
var _c2 = (a0) => ({ name: a0 });
function ChatComponent_Conditional_0_Conditional_4_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.hint(), " ");
  }
}
function ChatComponent_Conditional_0_Conditional_4_For_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.CHAT_ASSISTANT"), " ");
  }
}
function ChatComponent_Conditional_0_Conditional_4_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ChatComponent_Conditional_0_Conditional_4_For_21_Template_div_click_0_listener() {
      const message_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.show_time()[message_r5.id] = !ctx_r1.show_time()[message_r5.id]);
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275conditionalCreate(2, ChatComponent_Conditional_0_Conditional_4_For_21_Conditional_2_Template, 3, 3, "div", 21);
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "dateFrom");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 23);
    \u0275\u0275pipe(7, "sanitize");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("pr-4", message_r5.user_id !== ctx_r1.user().id)("pl-4", message_r5.user_id === ctx_r1.user().id)("items-left", message_r5.user_id !== ctx_r1.user().id)("items-end", message_r5.user_id === ctx_r1.user().id)("waiting-margin", ctx_r1.waiting());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(message_r5.user_id !== ctx_r1.user().id ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 13, message_r5.timestamp + ctx_r1.offset()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(7, 15, message_r5.content), \u0275\u0275sanitizeHtml);
  }
}
function ChatComponent_Conditional_0_Conditional_4_Conditional_22_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 29);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r1.progress().content), \u0275\u0275sanitizeHtml);
  }
}
function ChatComponent_Conditional_0_Conditional_4_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 24);
    \u0275\u0275listener("click", function ChatComponent_Conditional_0_Conditional_4_Conditional_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.show_info.set(!ctx_r1.show_info));
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "icon", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275element(8, "div", 28);
    \u0275\u0275conditionalCreate(9, ChatComponent_Conditional_0_Conditional_4_Conditional_22_Conditional_9_Template, 2, 3, "div", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.icons[ctx_r1.progress().function] || "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.progress().message || ctx_r1.progress().function, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.show_info() ? 9 : -1);
  }
}
function ChatComponent_Conditional_0_Conditional_4_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31)(2, "div", 32)(3, "div", 33);
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("bottom", ctx_r1.height() + 8 + "px");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "APP.WORKPLACE.CHAT_WAITING"));
  }
}
function ChatComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h3", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function ChatComponent_Conditional_0_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleChat());
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 8, 0)(10, "div", 9)(11, "icon", 10);
    \u0275\u0275text(12, "forum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 11);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275element(16, "br");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, ChatComponent_Conditional_0_Conditional_4_Conditional_19_Template, 2, 1, "div", 12);
    \u0275\u0275repeaterCreate(20, ChatComponent_Conditional_0_Conditional_4_For_21_Template, 8, 17, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(22, ChatComponent_Conditional_0_Conditional_4_Conditional_22_Template, 10, 3, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, ChatComponent_Conditional_0_Conditional_4_Conditional_23_Template, 7, 5, "div", 15);
    \u0275\u0275elementStart(24, "div", 16)(25, "textarea", 17, 1);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChatComponent_Conditional_0_Conditional_4_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.message, $event) || (ctx_r1.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ChatComponent_Conditional_0_Conditional_4_Template_textarea_ngModelChange_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resizeInput());
    })("keyup.enter", function ChatComponent_Conditional_0_Conditional_4_Template_textarea_keyup_enter_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(28, "button", 18);
    \u0275\u0275listener("click", function ChatComponent_Conditional_0_Conditional_4_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    });
    \u0275\u0275elementStart(29, "icon");
    \u0275\u0275text(30, "send");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "APP.WORKPLACE.CHAT_TITLE"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 13, "APP.WORKPLACE.CHAT_HELLO", \u0275\u0275pureFunction1(20, _c2, ctx_r1.user().name)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 16, "APP.WORKPLACE.CHAT_WELCOME"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hint() ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.messages());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.progress() ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.waiting() ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r1.height() + "px");
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 18, "APP.WORKPLACE.CHAT_MESSAGE_PLACEHOLDER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.message);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.message());
  }
}
function ChatComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 3);
    \u0275\u0275listener("click", function ChatComponent_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleChat());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "chat");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, ChatComponent_Conditional_0_Conditional_4_Template, 31, 22, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.show() ? 4 : -1);
  }
}
var ChatComponent = class _ChatComponent extends AsyncHandler {
  toggleChat() {
    this.show.update((s) => !s);
    if (!this.show())
      this._chat.close();
  }
  ngOnInit() {
    this.subscription("current_user", current_user.subscribe((user) => this.user.set(user)));
    this.interval("offset", () => this.offset.set(this.offset ? 0 : 1), 20 * 1e3);
  }
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._chat = inject(ChatService);
    this.show = signal(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_info = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_info" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.message = signal(
      "",
      ...ngDevMode ? [{ debugName: "message" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = signal(
      new User(),
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_time = signal(
      {},
      ...ngDevMode ? [{ debugName: "show_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset = signal(
      0,
      ...ngDevMode ? [{ debugName: "offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.height = signal(
      56,
      ...ngDevMode ? [{ debugName: "height" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_show = settingSignal("chat.enabled", false);
    this.icons = {
      list_function_schemas: "help",
      call_function: "settings",
      task_complete: "check_circle"
    };
    this.hint = this._chat.chat_hint;
    this.messages = this._chat.messages;
    this.progress = this._chat.progress;
    this.waiting = computed(
      () => {
        const msgs = this.messages();
        return msgs?.length !== 0 && msgs?.[msgs?.length - 1]?.user_id === this.user().id;
      },
      ...ngDevMode ? [{ debugName: "waiting" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._input_el = viewChild(
      "input",
      ...ngDevMode ? [{ debugName: "_input_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._container_el = viewChild(
      "container",
      ...ngDevMode ? [{ debugName: "_container_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      this._chat.chat_hint();
      this.scrollToBottom(500);
    });
    effect(() => {
      this._chat.messages();
      this.scrollToBottom();
    });
    effect(() => {
      const progress = this._chat.progress();
      if (progress)
        this.scrollToBottom();
      else
        this.show_info.set(false);
    });
  }
  resizeInput() {
    const el = this._input_el().nativeElement;
    this.height.set(Math.max(el.scrollHeight, 56));
  }
  sendMessage() {
    if (!this.message)
      return;
    if (!this._chat.connected) {
      this._chat.startChat();
      return this.timeout("send", () => this.sendMessage(), 100);
    }
    this._chat.sendMessage(this.message());
    this.message.set("");
    this.height.set(56);
    setTimeout(() => this._input_el().nativeElement.focus(), 100);
  }
  scrollToBottom(delay = 300) {
    this.timeout("scroll", () => {
      const _container_el = this._container_el();
      if (_container_el?.nativeElement) {
        _container_el.nativeElement.scrollTop = _container_el.nativeElement.scrollHeight;
      }
    }, delay);
  }
  static {
    this.\u0275fac = function ChatComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatComponent, selectors: [["global-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._input_el, _c0, 5)(ctx._container_el, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["container", ""], ["input", ""], [1, "absolute", "right-0", "bottom-0", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click"], [1, "border-base-300", "bg-base-200", "absolute", "right-2", "bottom-2", "w-160", "max-w-[calc(100vw-1rem)]", "overflow-hidden", "rounded-xl", "border", "shadow-sm"], [1, "border-base-300", "bg-base-100", "flex", "w-full", "items-center", "justify-between", "border-b", "p-2"], [1, "pl-4"], ["icon", "", "matRipple", "", 3, "click"], [1, "h-128", "max-h-[60vh]", "overflow-auto"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-8xl"], [1, "text-center", "text-xl"], [1, "border-base-300", "bg-base-100", "m-2", "rounded-sm", "p-4", "text-sm", "shadow-sm"], [1, "m-2", "flex", "flex-col", 3, "pr-4", "pl-4", "items-left", "items-end", "waiting-margin"], [1, "p-4"], [1, "border-neutral", "bg-base-100", "absolute", "right-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-2xl", "border", "p-1", 3, "bottom"], [1, "border-base-300", "bg-base-100", "outline-info", "flex", "max-h-40", "overflow-y-auto", "border-t", "focus-within:outline-solid"], [1, "w-1/2", "flex-1", "resize-none", "overflow-hidden", "p-4", "focus:outline-hidden", 3, "ngModelChange", "keyup.enter", "placeholder", "ngModel"], ["icon", "", "matRipple", "", 1, "mt-2", 3, "click", "disabled"], [1, "m-2", "flex", "flex-col", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-base-content", "px-2", "py-1", "text-sm", "opacity-60"], [1, "text-base-content", "px-2", "py-1", "text-xs", "opacity-40"], ["message", "", 1, "markdown", "selectable", "border-base-300", "bg-base-100", "rounded-sm", "p-4", "text-sm", "shadow-sm", 3, "innerHTML"], [1, "border-base-300", "bg-info", "text-info-content", "block", "w-full", "rounded-sm", "p-2", 3, "click"], [1, "text-2xl"], [1, "text-sm"], [1, "relative", "w-full", "overflow-hidden", "rounded-sm"], [1, "bg-base-100", "absolute", "inset-0", "opacity-10"], [1, "text-mono", "p-2", "text-left", "text-xs", "wrap-break-word", 3, "innerHTML"], [1, "border-neutral", "bg-base-100", "absolute", "right-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-2xl", "border", "p-1"], [1, "bg-neutral", "h-2", "w-2", "animate-bounce", "rounded-full"], [1, "anim-delay-1", "bg-neutral", "h-2", "w-2", "animate-bounce", "rounded-full"], [1, "anim-delay-2", "bg-neutral", "h-2", "w-2", "animate-bounce", "rounded-full"], [1, "sr-only"]], template: function ChatComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ChatComponent_Conditional_0_Template, 5, 1, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.can_show() ? 0 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      TranslatePipe,
      DateFromPipe,
      SanitizePipe
    ], styles: ["\n.anim-delay-1[_ngcontent-%COMP%] {\n  animation-delay: 0.25s;\n}\n.anim-delay-2[_ngcontent-%COMP%] {\n  animation-delay: 0.5s;\n}\n.waiting-margin[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 2rem;\n}\n/*# sourceMappingURL=chat.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatComponent, [{
    type: Component,
    args: [{ selector: "global-chat", template: `
        @if (can_show()) {
            <div class="absolute right-0 bottom-0 p-2">
                <button icon default matRipple (click)="toggleChat()">
                    <icon>chat</icon>
                </button>
                @if (show()) {
                    <div
                        class="border-base-300 bg-base-200 absolute right-2 bottom-2 w-160 max-w-[calc(100vw-1rem)] overflow-hidden rounded-xl border shadow-sm"
                    >
                        <div
                            class="border-base-300 bg-base-100 flex w-full items-center justify-between border-b p-2"
                        >
                            <h3 class="pl-4">
                                {{ 'APP.WORKPLACE.CHAT_TITLE' | translate }}
                            </h3>
                            <button icon matRipple (click)="toggleChat()">
                                <icon>close</icon>
                            </button>
                        </div>
                        <div
                            class="h-128 max-h-[60vh] overflow-auto"
                            #container
                        >
                            <div
                                class="flex w-full flex-col items-center justify-center space-y-2 p-8"
                            >
                                <icon class="text-8xl">forum</icon>
                                <p class="text-center text-xl">
                                    {{
                                        'APP.WORKPLACE.CHAT_HELLO'
                                            | translate: { name: user().name }
                                    }}
                                    <br />
                                    {{
                                        'APP.WORKPLACE.CHAT_WELCOME' | translate
                                    }}
                                </p>
                            </div>
                            @if (hint()) {
                                <div
                                    class="border-base-300 bg-base-100 m-2 rounded-sm p-4 text-sm shadow-sm"
                                >
                                    {{ hint() }}
                                </div>
                            }
                            @for (message of messages(); track message) {
                                <div
                                    class="m-2 flex flex-col"
                                    [class.pr-4]="message.user_id !== user().id"
                                    [class.pl-4]="message.user_id === user().id"
                                    [class.items-left]="
                                        message.user_id !== user().id
                                    "
                                    [class.items-end]="
                                        message.user_id === user().id
                                    "
                                    (click)="
                                        show_time()[message.id] =
                                            !show_time()[message.id]
                                    "
                                    [class.waiting-margin]="waiting()"
                                >
                                    <div class="flex items-center space-x-2">
                                        @if (message.user_id !== user().id) {
                                            <div
                                                class="text-base-content px-2 py-1 text-sm opacity-60"
                                            >
                                                {{
                                                    'APP.WORKPLACE.CHAT_ASSISTANT'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                        <div
                                            class="text-base-content px-2 py-1 text-xs opacity-40"
                                        >
                                            {{
                                                message.timestamp + offset()
                                                    | dateFrom
                                            }}
                                        </div>
                                    </div>
                                    <div
                                        message
                                        class="markdown selectable border-base-300 bg-base-100 rounded-sm p-4 text-sm shadow-sm"
                                        [innerHTML]="message.content | sanitize"
                                    ></div>
                                </div>
                            }
                            @if (progress()) {
                                <div class="p-4">
                                    <button
                                        class="border-base-300 bg-info text-info-content block w-full rounded-sm p-2"
                                        (click)="show_info.set(!show_info)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl">{{
                                                icons[progress().function] ||
                                                    'info'
                                            }}</icon>
                                            <p class="text-sm">
                                                {{
                                                    progress().message ||
                                                        progress().function
                                                }}
                                            </p>
                                        </div>
                                        <div
                                            class="relative w-full overflow-hidden rounded-sm"
                                        >
                                            <div
                                                class="bg-base-100 absolute inset-0 opacity-10"
                                            ></div>
                                            @if (show_info()) {
                                                <div
                                                    class="text-mono p-2 text-left text-xs wrap-break-word"
                                                    [innerHTML]="
                                                        progress().content
                                                            | sanitize
                                                    "
                                                ></div>
                                            }
                                        </div>
                                    </button>
                                </div>
                            }
                        </div>
                        @if (waiting()) {
                            <div
                                class="border-neutral bg-base-100 absolute right-2 flex items-center justify-center space-x-2 rounded-2xl border p-1"
                                [style.bottom]="height() + 8 + 'px'"
                            >
                                <div
                                    class="bg-neutral h-2 w-2 animate-bounce rounded-full"
                                ></div>
                                <div
                                    class="anim-delay-1 bg-neutral h-2 w-2 animate-bounce rounded-full"
                                ></div>
                                <div
                                    class="anim-delay-2 bg-neutral h-2 w-2 animate-bounce rounded-full"
                                ></div>
                                <span class="sr-only">{{
                                    'APP.WORKPLACE.CHAT_WAITING' | translate
                                }}</span>
                            </div>
                        }
                        <div
                            class="border-base-300 bg-base-100 outline-info flex max-h-40 overflow-y-auto border-t focus-within:outline-solid"
                        >
                            <textarea
                                #input
                                [placeholder]="
                                    'APP.WORKPLACE.CHAT_MESSAGE_PLACEHOLDER'
                                        | translate
                                "
                                class="w-1/2 flex-1 resize-none overflow-hidden p-4 focus:outline-hidden"
                                [style.height]="height() + 'px'"
                                [(ngModel)]="message"
                                (ngModelChange)="resizeInput()"
                                (keyup.enter)="sendMessage()"
                            ></textarea>
                            <button
                                icon
                                matRipple
                                [disabled]="!message()"
                                class="mt-2"
                                (click)="sendMessage()"
                            >
                                <icon>send</icon>
                            </button>
                        </div>
                    </div>
                }
            </div>
        }
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      FormsModule,
      IconComponent,
      DateFromPipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;8d7ebb4af65d658f572d4c64ececfd821bd4e611d847fcf4fb27590ce7974604;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/chat/chat.component.ts */\n.anim-delay-1 {\n  animation-delay: 0.25s;\n}\n.anim-delay-2 {\n  animation-delay: 0.5s;\n}\n.waiting-margin:last-child {\n  padding-bottom: 2rem;\n}\n/*# sourceMappingURL=chat.component.css.map */\n"] }]
  }], () => [], { _input_el: [{ type: ViewChild, args: ["input", { isSignal: true }] }], _container_el: [{ type: ViewChild, args: ["container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatComponent, { className: "ChatComponent", filePath: "libs/components/src/lib/chat/chat.component.ts", lineNumber: 230 });
})();
export {
  ChatComponent
};
//# debugId=9c0287ea-3e79-50b8-b9f7-b6091730904a
//# sourceMappingURL=chat.component-W6FZO3IJ.js.map
