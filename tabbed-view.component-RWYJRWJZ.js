import {
  ChangelogService,
  ControlConnectingComponent,
  ICON_MAP,
  NextMeetingComponent
} from "./chunk-VPK7Q6WC.js";
import {
  VideoCallPageComponent
} from "./chunk-ERMQ6MS4.js";
import {
  BindingDirective,
  ControlStatusBarComponent,
  DialpadComponent,
  JoystickComponent,
  JoystickPan,
  JoystickTilt,
  TopbarHeaderComponent,
  VideoCallStateService
} from "./chunk-CAVSBNKP.js";
import {
  AuthenticatedImageDirective,
  ControlStateService,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  marked,
  parse,
  toSignal
} from "./chunk-EORLT5VQ.js";
import {
  TranslatePipe
} from "./chunk-LVMBC5KR.js";
import "./chunk-RPLLUXAA.js";
import "./chunk-EX7Y2O3I.js";
import {
  ActivatedRoute,
  AsyncHandler,
  Component,
  DatePipe,
  DefaultValueAccessor,
  DestroyRef,
  FormsModule,
  IconComponent,
  Injectable,
  Input,
  J,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  Output,
  Pipe,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  SafePipe,
  SettingsService,
  VERSION,
  Xe,
  computed,
  currentUser,
  effect,
  inject,
  input,
  log,
  map,
  output,
  randomInt,
  randomString,
  setClassMetadata,
  signal,
  zd,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ER7G7Q5F.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/chat/chat.service.ts
var _ChatService = class _ChatService extends AsyncHandler {
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
        if (!(bld == null ? void 0 : bld.id))
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
    var _a;
    log("CHAT", "Dropping chat connection.");
    (_a = this._socket) == null ? void 0 : _a.close();
    this._cleanup();
  }
  close() {
    this.endChat();
    this._chat_id = "";
    this._chat_messages.set([]);
  }
  sendMessage(message) {
    var _a;
    if (!message)
      return;
    this._onMessage({ chat_id: "", message, user_id: currentUser().id });
    (_a = this._socket) == null ? void 0 : _a.send(message);
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
    const mod = zd(id, "LLM");
    const binding = mod.variable("user_hint");
    this.subscription(`binding:LLM:user_hint`, binding.bind());
    this.subscription(`listen:LLM:user_hint`, binding.listen().subscribe((value) => this.chat_hint.set(value)));
  }
};
_ChatService.\u0275fac = function ChatService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChatService)();
};
_ChatService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatService, factory: _ChatService.\u0275fac, providedIn: "root" });
var ChatService = _ChatService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/control/src/app/ui/voice-assistant.service.ts
var WAITING_PHRASES = ["One second...", "One moment...", "Working on it..."];
var DEFAULT_START_PHRASES = [
  `hey place`,
  `hey please`,
  `hey plays`,
  `a place`,
  `who place`,
  `who plays`,
  `who please`,
  `he plays`,
  `hit plays`,
  `can you please`
];
var _last_message;
var _VoiceAssistantService = class _VoiceAssistantService extends AsyncHandler {
  constructor() {
    super();
    this._chat_service = inject(ChatService);
    this._system_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "_system_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active = signal(
      false,
      ...ngDevMode ? [{ debugName: "_active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._current_text = signal(
      "",
      ...ngDevMode ? [{ debugName: "_current_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._enabled = signal(
      false,
      ...ngDevMode ? [{ debugName: "_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._error = signal(
      {},
      ...ngDevMode ? [{ debugName: "_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_text = this._current_text.asReadonly();
    this.enabled = this._enabled.asReadonly();
    this.error = this._error.asReadonly();
    this.active = this._active.asReadonly();
    this.progress = this._chat_service.progress;
    this.waiting = computed(
      () => {
        var _a, _b;
        const list = this._chat_service.messages();
        return list.length !== 0 && ((_a = list[list.length - 1]) == null ? void 0 : _a.user_id) === ((_b = currentUser()) == null ? void 0 : _b.id);
      },
      ...ngDevMode ? [{ debugName: "waiting" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._has_command = false;
    effect(() => {
      const id = this._system_id();
      if (id)
        this._chat_service.setBinding(id);
    });
    const user = currentUser();
    effect(() => {
      const list = this._chat_service.messages();
      const msg_list = list.filter((_) => _.user_id !== (user == null ? void 0 : user.id));
      const last_message = msg_list[msg_list.length - 1];
      if (msg_list.length < 1 || _last_message === last_message.id)
        return;
      _last_message = last_message.id;
      this._speakText(last_message.message);
      this._active.set(false);
    });
    effect(() => {
      const enabled = this._enabled();
      if (enabled)
        this._setupVoiceRecognition();
      else if (this._user_speech) {
        const speech = this._user_speech;
        speech.onend = () => null;
        speech.stop();
        delete this._user_speech;
      }
    });
  }
  setEnabled(is_enabled) {
    this.timeout("set_enabled", () => this._enabled.set(is_enabled));
  }
  setBinding(system_id) {
    this._system_id.set(system_id);
  }
  activate() {
    if (this._error().speech_recognition)
      return;
    this._active.set(true);
    this.timeout("deactivate", () => {
      this._active.set(false);
      this._last_text = "";
    }, 5e3);
  }
  _setupVoiceRecognition() {
    const commands = DEFAULT_START_PHRASES;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition)
      return;
    log("VOICE", "Initialising speech recognition.");
    this._user_speech = new SpeechRecognition();
    this._user_speech.continuous = false;
    this._user_speech.lang = navigator.language || navigator.userLanguage || "en-US";
    this._user_speech.interimResults = true;
    this._user_speech.maxAlternatives = 1;
    this._user_speech.onresult = (event) => {
      var _a;
      const results = event.results;
      const transcript = ((_a = results[0][0].transcript) == null ? void 0 : _a.toLowerCase().trim()) || "";
      this._current_text.set(transcript);
      this.activate();
      if (!results[0].isFinal)
        return;
      const is_command = commands.find((_) => transcript.startsWith(_));
      if (!is_command && !this._has_command)
        return;
      const command = transcript.substring((is_command == null ? void 0 : is_command.length) || 0).trim();
      this._active.set(true);
      if (command.length <= 3) {
        this._has_command = true;
        this._speakText("How may I help you?");
        return;
      }
      this._has_command = false;
      this._onMessage(`Hey PlaceOS, ${command}`);
    };
    this._user_speech.onerror = (event) => {
      if (event.error === "no-speech") {
        this._current_text.set("");
        return;
      }
      log("VOICE", "Speech Recognition Error:", event.error, "warn");
      if (event.error === "aborted")
        return;
      this._error.update((error) => __spreadProps(__spreadValues({}, error), {
        speech_recognition: true
      }));
    };
    this._user_speech.onend = () => {
      var _a;
      if (this._error().speech_recognition)
        return;
      try {
        (_a = this._user_speech) == null ? void 0 : _a.start();
      } catch {
      }
    };
    this._user_speech.start();
    log("VOICE", "Listening for commands.");
  }
  _onMessage(message) {
    this._chat_service.startChat();
    if (!this._chat_service.connected) {
      return this.timeout("on_message", () => this._onMessage(message));
    }
    log("VOICE", `Command: ${message}`);
    this._chat_service.sendMessage(`Hey PlaceOS, ${message}`);
    this._speakText(WAITING_PHRASES[randomInt(WAITING_PHRASES.length)]);
    this.timeout("deactivate", () => this._active.set(false), 60 * 1e3);
  }
  _speakText(text) {
    const has_speech_synth = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
    const text_to_speech = window.speechSynthesis;
    if (!has_speech_synth) {
      log("VOICE", `Speech Synthesis is unavailable.`, void 0, "warn");
      this._error.update((error) => __spreadProps(__spreadValues({}, error), {
        speech_synthesis: true
      }));
      return;
    }
    log("VOICE", `Response: "${text}"`);
    if (this._last_text === text)
      return;
    this._last_text = text;
    text_to_speech.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    const setVoice = new Promise((resolve) => {
      const voices = text_to_speech.getVoices();
      if (voices.length > 0) {
        const preferredVoice = voices.find((voice) => voice.voiceURI === "Karen");
        if (preferredVoice)
          speech.voice = preferredVoice;
        resolve();
      } else {
        text_to_speech.onvoiceschanged = () => {
          const voices2 = text_to_speech.getVoices();
          const preferredVoice = voices2.find((voice) => voice.voiceURI === "Karen");
          if (preferredVoice)
            speech.voice = preferredVoice;
          resolve();
        };
      }
    });
    setVoice.then(() => text_to_speech.speak(speech));
  }
};
_VoiceAssistantService.\u0275fac = function VoiceAssistantService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VoiceAssistantService)();
};
_VoiceAssistantService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VoiceAssistantService, factory: _VoiceAssistantService.\u0275fac, providedIn: "root" });
var VoiceAssistantService = _VoiceAssistantService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VoiceAssistantService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/control/src/app/ui/voice-assistant.component.ts
function VoiceAssistantComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 1);
  }
}
function VoiceAssistantComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  var _a, _b, _c;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "icon", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.icons[(_a = ctx_r1.progress()) == null ? void 0 : _a.function] || "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((_b = ctx_r1.progress()) == null ? void 0 : _b.message) || ((_c = ctx_r1.progress()) == null ? void 0 : _c.function) || "Empty", " ");
  }
}
function VoiceAssistantComponent_Conditional_0_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, VoiceAssistantComponent_Conditional_0_Conditional_1_Template, 1, 0, "span", 1);
    \u0275\u0275elementStart(2, "icon", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3);
    \u0275\u0275listener("click", function VoiceAssistantComponent_Conditional_0_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.activate();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, VoiceAssistantComponent_Conditional_0_Conditional_5_Template, 6, 2, "div", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-base-400", !ctx_r1.active())("bg-success", ctx_r1.active())("bg-error", (_a = ctx_r1.error()) == null ? void 0 : _a.speech_recognition);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.active() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((_b = ctx_r1.error()) == null ? void 0 : _b.speech_recognition) ? "mic_off" : "mic");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.active() && ctx_r1.progress() ? 5 : -1);
  }
}
var _VoiceAssistantComponent = class _VoiceAssistantComponent {
  constructor() {
    this._service = inject(VoiceAssistantService);
    this.system_id = input(
      void 0,
      ...ngDevMode ? [{ debugName: "system_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.enabled = input(
      void 0,
      ...ngDevMode ? [{ debugName: "enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.activate = () => this._service.activate();
    this.active = this._service.active;
    this.progress = this._service.progress;
    this.error = this._service.error;
    this.service_enabled = this._service.enabled;
    this.available = computed(
      () => {
        var _a;
        return !((_a = this.error()) == null ? void 0 : _a.speech_recognition) && this.service_enabled();
      },
      ...ngDevMode ? [{ debugName: "available" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icons = {
      list_function_schemas: "help",
      call_function: "settings",
      task_complete: "check_circle"
    };
    effect(() => {
      const system_id = this.system_id();
      if (system_id)
        this._service.setBinding(system_id);
    });
    effect(() => {
      const enabled = this.enabled();
      if (typeof enabled === "boolean")
        this._service.setEnabled(enabled);
    });
  }
};
_VoiceAssistantComponent.\u0275fac = function VoiceAssistantComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VoiceAssistantComponent)();
};
_VoiceAssistantComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VoiceAssistantComponent, selectors: [["voice-assistant"]], inputs: { system_id: [1, "system_id"], enabled: [1, "enabled"] }, decls: 1, vars: 1, consts: [[1, "m-4", "flex", "h-12", "w-12", "items-center", "justify-center", "overflow-visible", "rounded-full"], [1, "bg-success", "absolute", "inline-flex", "h-10", "w-10", "animate-ping", "rounded-full", "opacity-75"], [1, "text-2xl"], ["matRipple", "", 1, "absolute", "inset-0", "opacity-0", 3, "click"], [1, "bg-info", "text-info-content", "absolute", "top-1/2", "left-2", "max-w-[30vw]", "-translate-x-full", "-translate-y-1/2", "rounded-xl", "p-2", "text-xs", "shadow-sm"], [1, "flex", "items-center", "space-x-2"], [1, "truncate", "pr-4", "text-sm"]], template: function VoiceAssistantComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VoiceAssistantComponent_Conditional_0_Template, 6, 9);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.available() ? 0 : -1);
  }
}, dependencies: [MatRippleModule, MatRipple, IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=voice-assistant.component.css.map */"] });
var VoiceAssistantComponent = _VoiceAssistantComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VoiceAssistantComponent, [{
    type: Component,
    args: [{ selector: "voice-assistant", template: `
        @if (available()) {
            <div
                class="m-4 flex h-12 w-12 items-center justify-center overflow-visible rounded-full"
                [class.bg-base-400]="!active()"
                [class.bg-success]="active()"
                [class.bg-error]="error()?.speech_recognition"
            >
                @if (active()) {
                    <span
                        class="bg-success absolute inline-flex h-10 w-10 animate-ping rounded-full opacity-75"
                    ></span>
                }
                <icon class="text-2xl">{{
                    error()?.speech_recognition ? 'mic_off' : 'mic'
                }}</icon>
                <button
                    matRipple
                    class="absolute inset-0 opacity-0"
                    (click)="activate(); $event.stopPropagation()"
                ></button>
            </div>
            @if (active() && progress()) {
                <div
                    class="bg-info text-info-content absolute top-1/2 left-2 max-w-[30vw] -translate-x-full -translate-y-1/2 rounded-xl p-2 text-xs shadow-sm"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">{{
                            icons[progress()?.function] || 'info'
                        }}</icon>
                        <p class="truncate pr-4 text-sm">
                            {{
                                progress()?.message ||
                                    progress()?.function ||
                                    'Empty'
                            }}
                        </p>
                    </div>
                </div>
            }
        }
    `, imports: [MatRippleModule, IconComponent], styles: ["/* angular:styles/component:css;ee508001b53c12264d0b6f907f32f3b86df7d1dd3b776b0c53e9fa9fe116349c;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/ui/voice-assistant.component.ts */\n:host {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=voice-assistant.component.css.map */\n"] }]
  }], () => [], { system_id: [{ type: Input, args: [{ isSignal: true, alias: "system_id", required: false }] }], enabled: [{ type: Input, args: [{ isSignal: true, alias: "enabled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VoiceAssistantComponent, { className: "VoiceAssistantComponent", filePath: "apps/control/src/app/ui/voice-assistant.component.ts", lineNumber: 62 });
})();

// apps/control/src/app/ui/camera-controls.component.ts
function CameraControlsComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cam_r3 = ctx.$implicit;
    \u0275\u0275property("value", cam_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cam_r3.name, " ");
  }
}
function CameraControlsComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "APP.CONTROL.CAMERA_SELECT_MSG"));
  }
}
function CameraControlsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function CameraControlsComponent_Conditional_0_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCamera($event));
    });
    \u0275\u0275repeaterCreate(4, CameraControlsComponent_Conditional_0_For_5_Template, 2, 2, "mat-option", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "h3", 5);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 6)(11, "joystick", 7);
    \u0275\u0275listener("panChange", function CameraControlsComponent_Conditional_0_Template_joystick_panChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.pan.set($event);
      return \u0275\u0275resetView(ctx_r1.moveCamera());
    })("tiltChange", function CameraControlsComponent_Conditional_0_Template_joystick_tiltChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.tilt.set($event);
      return \u0275\u0275resetView(ctx_r1.moveCamera());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
    \u0275\u0275listener("mousedown", function CameraControlsComponent_Conditional_0_Template_button_mousedown_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startZoom("in", $event));
    })("touchstart", function CameraControlsComponent_Conditional_0_Template_button_touchstart_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startZoom("in", $event));
    })("contextmenu", function CameraControlsComponent_Conditional_0_Template_button_contextmenu_13_listener($event) {
      return $event.preventDefault();
    });
    \u0275\u0275elementStart(14, "icon");
    \u0275\u0275text(15, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 11);
    \u0275\u0275listener("mousedown", function CameraControlsComponent_Conditional_0_Template_button_mousedown_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startZoom("out", $event));
    })("touchstart", function CameraControlsComponent_Conditional_0_Template_button_touchstart_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startZoom("out", $event));
    })("contextmenu", function CameraControlsComponent_Conditional_0_Template_button_contextmenu_19_listener($event) {
      return $event.preventDefault();
    })("mouseup", function CameraControlsComponent_Conditional_0_Template_button_mouseup_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.stopZoom());
    }, \u0275\u0275resolveWindow)("touchend", function CameraControlsComponent_Conditional_0_Template_button_touchend_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.stopZoom());
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(20, "icon");
    \u0275\u0275text(21, "remove");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(22, CameraControlsComponent_Conditional_0_Conditional_22_Template, 4, 3, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.active_camera())("placeholder", \u0275\u0275pipeBind1(3, 7, "APP.CONTROL.CAMERA_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.camera_list());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "APP.CONTROL.CONTROLS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("pan", ctx_r1.pan())("tilt", ctx_r1.tilt());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "APP.CONTROL.ZOOM"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r1.active_camera() ? 22 : -1);
  }
}
var ZoomDirection;
(function(ZoomDirection2) {
  ZoomDirection2["In"] = "in";
  ZoomDirection2["Out"] = "out";
  ZoomDirection2["Stop"] = "stop";
})(ZoomDirection || (ZoomDirection = {}));
var _CameraControlsComponent = class _CameraControlsComponent {
  get id() {
    return this._state.id;
  }
  constructor() {
    this._state = inject(ControlStateService);
    this._destroyRef = inject(DestroyRef);
    this.active_camera = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "active_camera" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.presets = signal(
      [],
      ...ngDevMode ? [{ debugName: "presets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.preset = signal(
      "",
      ...ngDevMode ? [{ debugName: "preset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zoom = signal(
      ZoomDirection.Stop,
      ...ngDevMode ? [{ debugName: "zoom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.pan = signal(
      JoystickPan.Stop,
      ...ngDevMode ? [{ debugName: "pan" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tilt = signal(
      JoystickTilt.Stop,
      ...ngDevMode ? [{ debugName: "tilt" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.camera_list = this._state.camera_list;
    this._selected_camera = this._state.selected_camera;
    effect(() => {
      const list = this.camera_list();
      const cam = this._selected_camera();
      this.active_camera.set(list == null ? void 0 : list.find((_) => _.id === cam));
    });
  }
  ngOnInit() {
  }
  selectCamera(camera) {
    this.active_camera.set(camera);
    const mod = zd(this.id, "System");
    if (!mod)
      return;
    mod.execute("selected_camera", [camera.id]);
  }
  recallPreset(preset) {
    const cam = this.active_camera();
    if (!cam)
      return;
    const mod = zd(this.id, cam.mod);
    if (!mod)
      return;
    mod.execute("recall", [preset]);
  }
  addPreset(preset) {
    const cam = this.active_camera();
    if (!cam)
      return;
    const mod = zd(this.id, "System");
    if (!mod)
      return;
    mod.execute("add_preset", [preset, cam.id]);
  }
  removePreset(preset) {
    const cam = this.active_camera();
    if (!cam)
      return;
    const mod = zd(this.id, "System");
    if (!mod)
      return;
    mod.execute("remove_preset", [preset, cam.id]);
  }
  moveCamera() {
    const cam = this.active_camera();
    if (!cam)
      return;
    clearTimeout(this._move_timeout);
    this._move_timeout = setTimeout(async () => {
      const { index } = cam;
      const mod = zd(this.id, cam.mod);
      if (!mod)
        return;
      await mod.execute("stop", index ? [index] : []);
      if (this.tilt() !== JoystickTilt.Stop)
        await mod.execute("tilt", index ? [this.tilt(), index] : [this.tilt()]);
      if (this.pan() !== JoystickPan.Stop)
        await mod.execute("pan", index ? [this.pan(), index] : [this.pan()]);
    }, 50);
  }
  async startZoom(dir, e) {
    const cam = this.active_camera();
    if (!cam)
      return;
    const mod = zd(this.id, cam.mod);
    if (!mod)
      return;
    this.zoom.set(dir === "in" ? ZoomDirection.In : ZoomDirection.Out);
    const { index } = cam;
    await mod.execute("zoom", index ? [this.zoom(), index] : [this.zoom()]).catch();
  }
  stopZoom() {
    clearTimeout(this._zoom_timeout);
    this._zoom_timeout = setTimeout(() => {
      if (this.zoom() === ZoomDirection.Stop)
        return;
      const cam = this.active_camera();
      if (!cam)
        return;
      const mod = zd(this.id, cam.mod);
      if (!mod)
        return;
      const { index } = cam;
      this.zoom.set(ZoomDirection.Stop);
      mod.execute("zoom", index ? [this.zoom(), index] : [this.zoom()]);
    }, 50);
  }
};
_CameraControlsComponent.\u0275fac = function CameraControlsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CameraControlsComponent)();
};
_CameraControlsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CameraControlsComponent, selectors: [["camera-controls"]], decls: 1, vars: 1, consts: [[1, "flex", "flex-col"], ["appearance", "outline", 1, "m-4", "h-12"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "p-4"], [1, "mb-2", "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], [3, "panChange", "tiltChange", "pan", "tilt"], ["zoom", "", 1, "border-base-200", "flex", "flex-col", "items-center", "rounded-sm", "border"], ["zoom-in", "", "icon", "", "matRipple", "", 1, "rounded-sm", 3, "mousedown", "touchstart", "contextmenu"], [1, "border-base-200", "flex", "h-10", "w-10", "items-center", "justify-center", "border-t", "border-b", "text-xs"], ["zoom-out", "", "icon", "", "matRipple", "", 1, "rounded-sm", 3, "mousedown", "touchstart", "contextmenu", "mouseup", "touchend"], [1, "bg-base-100", "bg-opacity-75", "absolute", "inset-0", "flex", "items-center", "justify-center"]], template: function CameraControlsComponent_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CameraControlsComponent_Conditional_0_Template, 23, 13, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(((_a = ctx.camera_list()) == null ? void 0 : _a.length) ? 0 : -1);
  }
}, dependencies: [
  IconComponent,
  MatRippleModule,
  MatRipple,
  JoystickComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  NgControlStatus,
  NgModel,
  TranslatePipe
], encapsulation: 2 });
var CameraControlsComponent = _CameraControlsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CameraControlsComponent, [{
    type: Component,
    args: [{ selector: "camera-controls", template: `
        @if (camera_list()?.length) {
            <div class="flex flex-col">
                <mat-form-field appearance="outline" class="m-4 h-12">
                    <mat-select
                        [ngModel]="active_camera()"
                        (ngModelChange)="selectCamera($event)"
                        [placeholder]="'APP.CONTROL.CAMERA_SELECT' | translate"
                    >
                        @for (cam of camera_list(); track cam) {
                            <mat-option [value]="cam">
                                {{ cam.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <div class="p-4">
                    <h3 class="mb-2 text-xl font-medium">
                        {{ 'APP.CONTROL.CONTROLS' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2">
                        <joystick
                            [pan]="pan()"
                            [tilt]="tilt()"
                            (panChange)="pan.set($event); moveCamera()"
                            (tiltChange)="tilt.set($event); moveCamera()"
                        ></joystick>
                        <div
                            zoom
                            class="border-base-200 flex flex-col items-center rounded-sm border"
                        >
                            <button
                                zoom-in
                                icon
                                matRipple
                                class="rounded-sm"
                                (mousedown)="startZoom('in', $event)"
                                (touchstart)="startZoom('in', $event)"
                                (contextmenu)="$event.preventDefault()"
                            >
                                <icon>add</icon>
                            </button>
                            <div
                                class="border-base-200 flex h-10 w-10 items-center justify-center border-t border-b text-xs"
                            >
                                {{ 'APP.CONTROL.ZOOM' | translate }}
                            </div>
                            <button
                                zoom-out
                                icon
                                matRipple
                                class="rounded-sm"
                                (mousedown)="startZoom('out', $event)"
                                (touchstart)="startZoom('out', $event)"
                                (contextmenu)="$event.preventDefault()"
                                (window:mouseup)="stopZoom()"
                                (window:touchend)="stopZoom()"
                            >
                                <icon>remove</icon>
                            </button>
                        </div>
                    </div>
                </div>
                @if (!active_camera()) {
                    <div
                        class="bg-base-100 bg-opacity-75 absolute inset-0 flex items-center justify-center"
                    >
                        <p>{{ 'APP.CONTROL.CAMERA_SELECT_MSG' | translate }}</p>
                    </div>
                }
            </div>
        }
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      JoystickComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CameraControlsComponent, { className: "CameraControlsComponent", filePath: "apps/control/src/app/ui/camera-controls.component.ts", lineNumber: 115 });
})();

// apps/control/src/app/ui/markdown.pipe.ts
var _MarkdownPipe = class _MarkdownPipe {
  transform(value) {
    return value ? marked(value, { async: false }) : "";
  }
};
_MarkdownPipe.\u0275fac = function MarkdownPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MarkdownPipe)();
};
_MarkdownPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "markdown", type: _MarkdownPipe, pure: true });
var MarkdownPipe = _MarkdownPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkdownPipe, [{
    type: Pipe,
    args: [{
      name: "markdown"
    }]
  }], null, null);
})();

// apps/control/src/app/video-call/video-call-dial-view.component.ts
function VideoCallDialViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0, 1);
    \u0275\u0275elementStart(1, "dialpad", 3);
    \u0275\u0275listener("pressed", function VideoCallDialViewComponent_Conditional_1_Template_dialpad_pressed_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addDigit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 4)(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "mat-form-field", 7)(8, "input", 8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function VideoCallDialViewComponent_Conditional_1_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dial_number, $event) || (ctx_r1.dial_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "button", 9);
    \u0275\u0275listener("click", function VideoCallDialViewComponent_Conditional_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.joinConference());
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
    \u0275\u0275listener("click", function VideoCallDialViewComponent_Conditional_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCamera());
    });
    \u0275\u0275elementStart(16, "div", 12)(17, "icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pt-8", !ctx_r1.redirect());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 11, "APP.CONTROL.VC_ENTER_CODE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dial_number);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 13, "APP.CONTROL.VC_DIAL"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.dial_number());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, "APP.CONTROL.JOIN"), " ");
    const show_pip_r3 = ctx_r1.show_camera_pip();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inverse", show_pip_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(!show_pip_r3 ? "visibility_off" : "visibility");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(show_pip_r3 ? "Hide Camera PIP" : "Show Camera PIP");
  }
}
function VideoCallDialViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APP.CONTROL.VC_JOINING"));
  }
}
var _VideoCallDialViewComponent = class _VideoCallDialViewComponent {
  constructor() {
    this._control = inject(ControlStateService);
    this._call = inject(VideoCallStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.redirect = input(
      true,
      ...ngDevMode ? [{ debugName: "redirect" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = output();
    this.dial_number = signal(
      "",
      ...ngDevMode ? [{ debugName: "dial_number" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.call = this._call.call;
    this._show_camera_pip = this._call.show_camera_pip;
    this.show_camera_pip = computed(
      () => !!this._show_camera_pip(),
      ...ngDevMode ? [{ debugName: "show_camera_pip" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggleCamera = async () => this._call.showCameraPIP(!this.show_camera_pip());
  }
  get id() {
    return this._control.id;
  }
  addDigit(digit) {
    digit && digit !== "\b" ? this.dial_number.update((v) => v + digit) : this.dial_number.update((v) => v.substr(0, v.length - 1));
  }
  async joinConference() {
    const dial_number = this.dial_number();
    if (!dial_number)
      return;
    const system_id = this._control.id;
    const mod = zd(system_id, "VidConf");
    this.loading.set(true);
    await mod.execute("dial", [dial_number]);
    this.loading.set(false);
    if (this.redirect()) {
      this._router.navigate(["call"], { relativeTo: this._route });
    }
    this.close.emit();
    this.dial_number.set("");
  }
};
_VideoCallDialViewComponent.\u0275fac = function VideoCallDialViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VideoCallDialViewComponent)();
};
_VideoCallDialViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoCallDialViewComponent, selectors: [["video-call-dial-view"]], inputs: { redirect: [1, "redirect"] }, outputs: { close: "close" }, decls: 3, vars: 1, consts: [[1, "flex", "justify-center"], [1, ""], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [3, "pressed"], [1, "flex", "flex-col"], [1, "px-2", "pt-4"], [1, "w-full", "p-2"], ["appearance", "outline", 1, "h-12", "w-full"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click", "disabled"], [1, "w-full", "px-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "flex", "items-center", "space-x-4"], [3, "diameter"]], template: function VideoCallDialViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, VideoCallDialViewComponent_Conditional_1_Template, 21, 17, "ng-container", 1)(2, VideoCallDialViewComponent_Conditional_2_Template, 5, 4, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() ? 1 : 2);
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  IconComponent,
  MatRippleModule,
  MatRipple,
  DialpadComponent,
  TranslatePipe
], encapsulation: 2 });
var VideoCallDialViewComponent = _VideoCallDialViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoCallDialViewComponent, [{
    type: Component,
    args: [{ selector: "video-call-dial-view", template: `
        <div class="flex justify-center">
            @if (!loading()) {
                <ng-container class="">
                    <dialpad (pressed)="addDigit($event)"></dialpad>
                    <div class="flex flex-col" [class.pt-8]="!redirect()">
                        <p class="px-2 pt-4">
                            {{ 'APP.CONTROL.VC_ENTER_CODE' | translate }}
                        </p>
                        <div class="w-full p-2">
                            <mat-form-field
                                appearance="outline"
                                class="h-12 w-full"
                            >
                                <input
                                    matInput
                                    [(ngModel)]="dial_number"
                                    [placeholder]="
                                        'APP.CONTROL.VC_DIAL' | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="w-full p-2">
                            <button
                                btn
                                matRipple
                                class="w-full"
                                [disabled]="!dial_number()"
                                (click)="joinConference()"
                            >
                                {{ 'APP.CONTROL.JOIN' | translate }}
                            </button>
                        </div>
                        <div class="w-full px-2">
                            @let show_pip = show_camera_pip();
                            <button
                                btn
                                matRipple
                                class="w-full"
                                (click)="toggleCamera()"
                                [class.inverse]="show_pip"
                            >
                                <div class="flex items-center space-x-4">
                                    <icon>{{
                                        !show_pip
                                            ? 'visibility_off'
                                            : 'visibility'
                                    }}</icon>
                                    <span>{{
                                        show_pip
                                            ? 'Hide Camera PIP'
                                            : 'Show Camera PIP'
                                    }}</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </ng-container>
            } @else {
                <div
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ 'APP.CONTROL.VC_JOINING' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      DialpadComponent
    ] }]
  }], null, { redirect: [{ type: Input, args: [{ isSignal: true, alias: "redirect", required: false }] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoCallDialViewComponent, { className: "VideoCallDialViewComponent", filePath: "apps/control/src/app/video-call/video-call-dial-view.component.ts", lineNumber: 104 });
})();

// apps/control/src/app/tabbed-view/output-list-item.component.ts
function DeviceOutputListItemComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  var _a, _b, _c;
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-success", (_a = ctx_r1.item()) == null ? void 0 : _a.power)("bg-base-300", !((_b = ctx_r1.item()) == null ? void 0 : _b.power));
    \u0275\u0275attribute("title", \u0275\u0275pipeBind1(1, 5, ((_c = ctx_r1.item()) == null ? void 0 : _c.power) ? "APP.CONTROL.OUTPUT_ON" : "APP.CONTROL.OUTPUT_OFF"));
  }
}
function DeviceOutputListItemComponent_Conditional_0_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275listener("click", function DeviceOutputListItemComponent_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveOutput());
    });
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DeviceOutputListItemComponent_Conditional_0_Conditional_4_Template, 2, 7, "div", 4);
    \u0275\u0275elementStart(5, "icon", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-base-200", !ctx_r1.active())("border-primary", ctx_r1.active());
    const source_r3 = ctx_r1.input();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-300!", !source_r3);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-primary!", ctx_r1.active());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((_a = ctx_r1.item()) == null ? void 0 : _a.name) || "Display", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((_b = ctx_r1.item()) == null ? void 0 : _b.power) != null ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-30", !source_r3)("text-base-content", !source_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (source_r3 == null ? void 0 : source_r3.icon) || ctx_r1.icons[source_r3 == null ? void 0 : source_r3.type] || "add_to_queue", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-30", !source_r3)("text-base-content", !source_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (source_r3 == null ? void 0 : source_r3.name) || \u0275\u0275pipeBind1(9, 20, "APP.CONTROL.INPUT_EMPTY"), " ");
  }
}
var _DeviceOutputListItemComponent = class _DeviceOutputListItemComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ControlStateService);
    this.item = input(
      void 0,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = input(
      void 0,
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icons = ICON_MAP;
    this._available_inputs = this._state.available_inputs;
    this._system = this._state.system;
    this.input = computed(
      () => {
        var _a;
        const id = ((_a = this.item()) == null ? void 0 : _a.source) || "";
        return this._available_inputs().find((_) => _.id === id || _.ref === id);
      },
      ...ngDevMode ? [{ debugName: "input" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setVolume = (v) => this.timeout("volume", () => {
      var _a;
      return this._state.setVolume(v, (_a = this.item()) == null ? void 0 : _a.id);
    });
    this.setMute = (i, s) => {
      var _a;
      this._state.setRoute(s ? "mute" : this.last_input, (_a = this.item()) == null ? void 0 : _a.id);
      this.last_input = i;
    };
    this.setActiveOutput = () => {
      const { selected_input } = this._system() || {};
      const input2 = this.input();
      const item = this.item();
      (input2 == null ? void 0 : input2.id) === selected_input ? this._state.unroute(item.id) : this._state.setOutput(item == null ? void 0 : item.id);
    };
  }
};
_DeviceOutputListItemComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DeviceOutputListItemComponent_BaseFactory;
  return function DeviceOutputListItemComponent_Factory(__ngFactoryType__) {
    return (\u0275DeviceOutputListItemComponent_BaseFactory || (\u0275DeviceOutputListItemComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DeviceOutputListItemComponent)))(__ngFactoryType__ || _DeviceOutputListItemComponent);
  };
})();
_DeviceOutputListItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeviceOutputListItemComponent, selectors: [["device-output-list-item"]], inputs: { item: [1, "item"], active: [1, "active"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "bg-base-100", "relative", "m-2", "h-40", "w-full", "flex-1", "rounded-sm", "border", "p-2", "shadow-sm", 3, "border-base-200", "border-primary"], [1, "bg-base-100", "relative", "m-2", "h-40", "w-full", "flex-1", "rounded-sm", "border", "p-2", "shadow-sm"], ["matRipple", "", 1, "bg-info", "relative", "z-0", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "rounded-sm", 3, "click"], [1, "border-base-300", "bg-base-100", "text-base-content", "absolute", "top-1", "left-1", "rounded-full", "border", "px-2", "py-1", "text-xs"], ["power", "", 1, "border-base-100", "absolute", "top-2", "right-2", "size-3", "rounded-full", "border", 3, "bg-success", "bg-base-300"], [1, "text-5xl"], [1, "text-sm"], ["power", "", 1, "border-base-100", "absolute", "top-2", "right-2", "size-3", "rounded-full", "border"]], template: function DeviceOutputListItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeviceOutputListItemComponent_Conditional_0_Template, 10, 22, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.item() ? 0 : -1);
  }
}, dependencies: [MatRippleModule, MatRipple, IconComponent, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=output-list-item.component.css.map */"] });
var DeviceOutputListItemComponent = _DeviceOutputListItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceOutputListItemComponent, [{
    type: Component,
    args: [{ selector: "device-output-list-item", template: `
        @if (item()) {
            <div
                class="bg-base-100 relative m-2 h-40 w-full flex-1 rounded-sm border p-2 shadow-sm"
                [class.border-base-200]="!active()"
                [class.border-primary]="active()"
            >
                @let source = input();
                <button
                    matRipple
                    class="bg-info relative z-0 flex h-full w-full flex-col items-center justify-center rounded-sm"
                    [class.bg-base-300!]="!source"
                    (click)="setActiveOutput()"
                >
                    <div
                        class="border-base-300 bg-base-100 text-base-content absolute top-1 left-1 rounded-full border px-2 py-1 text-xs"
                        [class.bg-primary!]="active()"
                    >
                        {{ item()?.name || 'Display' }}
                    </div>
                    @if (item()?.power != null) {
                        <div
                            power
                            class="border-base-100 absolute top-2 right-2 size-3 rounded-full border"
                            [class.bg-success]="item()?.power"
                            [class.bg-base-300]="!item()?.power"
                            [attr.title]="
                                (item()?.power
                                    ? 'APP.CONTROL.OUTPUT_ON'
                                    : 'APP.CONTROL.OUTPUT_OFF'
                                ) | translate
                            "
                        ></div>
                    }
                    <icon
                        class="text-5xl"
                        [class.opacity-30]="!source"
                        [class.text-base-content]="!source"
                    >
                        {{
                            source?.icon ||
                                icons[source?.type] ||
                                'add_to_queue'
                        }}
                    </icon>
                    <span
                        class="text-sm"
                        [class.opacity-30]="!source"
                        [class.text-base-content]="!source"
                    >
                        {{
                            source?.name ||
                                ('APP.CONTROL.INPUT_EMPTY' | translate)
                        }}
                    </span>
                </button>
            </div>
        }
    `, imports: [TranslatePipe, MatRippleModule, IconComponent], styles: ["/* angular:styles/component:css;cc697b08d9f2fbde961b53703f5a7647bcb7d79fe59beff1abcb16f98f102d91;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/tabbed-view/output-list-item.component.ts */\n:host {\n  display: flex;\n}\n/*# sourceMappingURL=output-list-item.component.css.map */\n"] }]
  }], null, { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeviceOutputListItemComponent, { className: "DeviceOutputListItemComponent", filePath: "apps/control/src/app/tabbed-view/output-list-item.component.ts", lineNumber: 80 });
})();

// apps/control/src/app/tabbed-view/output-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DeviceOutputListComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "device-output-list-item", 1);
  }
  if (rf & 2) {
    const output_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", output_r1)("active", ctx_r1.active_output() === output_r1.id);
  }
}
function DeviceOutputListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DeviceOutputListComponent_Conditional_1_For_1_Template, 1, 2, "device-output-list-item", 1, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.outputs());
  }
}
var _DeviceOutputListComponent = class _DeviceOutputListComponent {
  constructor() {
    this._state = inject(ControlStateService);
    this.outputs = this._state.output_list;
    this.active_output = this._state.active_output;
    this.preview_outputs = this._state.preview_outputs;
  }
};
_DeviceOutputListComponent.\u0275fac = function DeviceOutputListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeviceOutputListComponent)();
};
_DeviceOutputListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeviceOutputListComponent, selectors: [["device-output-list"]], decls: 2, vars: 1, consts: [[1, "flex", "h-full", "w-full", "items-center", "overflow-x-auto"], [1, "w-64", "max-w-1/2", "sm:min-w-64", 3, "item", "active"]], template: function DeviceOutputListComponent_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, DeviceOutputListComponent_Conditional_1_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(((_a = ctx.outputs()) == null ? void 0 : _a.length) > 1 || ctx.preview_outputs() ? 1 : -1);
  }
}, dependencies: [DeviceOutputListItemComponent], encapsulation: 2 });
var DeviceOutputListComponent = _DeviceOutputListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceOutputListComponent, [{
    type: Component,
    args: [{ selector: "device-output-list", template: `
        <div class="flex h-full w-full items-center overflow-x-auto">
            @if (outputs()?.length > 1 || preview_outputs()) {
                @for (output of outputs(); track output.id) {
                    <device-output-list-item
                        [item]="output"
                        [active]="active_output() === output.id"
                        class="w-64 max-w-1/2 sm:min-w-64"
                    ></device-output-list-item>
                }
            }
        </div>
    `, imports: [DeviceOutputListItemComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeviceOutputListComponent, { className: "DeviceOutputListComponent", filePath: "apps/control/src/app/tabbed-view/output-list.component.ts", lineNumber: 23 });
})();

// apps/control/src/app/tabbed-view/tv-controls.component.ts
function TVControlsComponent_Conditional_3_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r2.icon);
  }
}
function TVControlsComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function TVControlsComponent_Conditional_3_For_2_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setChannel(item_r2.channel));
    });
    \u0275\u0275conditionalCreate(1, TVControlsComponent_Conditional_3_For_2_Conditional_1_Template, 1, 1, "img", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-base-200", ctx_r2.channel_url !== item_r2.channel)("bg-primary", ctx_r2.channel_url === item_r2.channel)("text-white", ctx_r2.channel_url === item_r2.channel);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r2 == null ? void 0 : item_r2.icon) ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.name);
  }
}
function TVControlsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, TVControlsComponent_Conditional_3_For_2_Template, 4, 8, "button", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.channel_list);
  }
}
var _TVControlsComponent = class _TVControlsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ControlStateService);
    this.mod = input(
      "",
      ...ngDevMode ? [{ debugName: "mod" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.channel_list = [];
    this.channel_url = "";
  }
  get system_id() {
    return this._state.id;
  }
  setChannel(url) {
    const mod = zd(this._state.id, this.mod());
    mod.execute("channel", [url]);
  }
};
_TVControlsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TVControlsComponent_BaseFactory;
  return function TVControlsComponent_Factory(__ngFactoryType__) {
    return (\u0275TVControlsComponent_BaseFactory || (\u0275TVControlsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TVControlsComponent)))(__ngFactoryType__ || _TVControlsComponent);
  };
})();
_TVControlsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TVControlsComponent, selectors: [["tv-controls"]], inputs: { mod: [1, "mod"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 8, consts: [["hidden", ""], ["binding", "", "bind", "channel_details", 3, "modelChange", "model", "sys", "mod"], ["binding", "", "bind", "current_channel", 3, "modelChange", "model", "sys", "mod"], [1, "flex", "flex-wrap", "items-center", "justify-center", "p-8"], ["matRipple", "", 1, "border-base-200", "m-2", "flex", "h-28", "w-32", "flex-col", "items-center", "justify-center", "space-y-2", "rounded-sm", "border", 3, "bg-base-200", "bg-primary", "text-white"], ["matRipple", "", 1, "border-base-200", "m-2", "flex", "h-28", "w-32", "flex-col", "items-center", "justify-center", "space-y-2", "rounded-sm", "border", 3, "click"], ["auth", "", 1, "max-h-14", "max-w-14", 3, "source"], [1, ""]], template: function TVControlsComponent_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "i", 1);
    \u0275\u0275twoWayListener("modelChange", function TVControlsComponent_Template_i_modelChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.channel_list, $event) || (ctx.channel_list = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "i", 2);
    \u0275\u0275twoWayListener("modelChange", function TVControlsComponent_Template_i_modelChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.channel_url, $event) || (ctx.channel_url = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, TVControlsComponent_Conditional_3_Template, 3, 0, "div", 3);
  }
  if (rf & 2) {
    \u0275\u0275attribute("mod", ctx.mod());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("model", ctx.channel_list);
    \u0275\u0275property("sys", ctx.system_id)("mod", ctx.mod());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("model", ctx.channel_url);
    \u0275\u0275property("sys", ctx.system_id)("mod", ctx.mod());
    \u0275\u0275advance();
    \u0275\u0275conditional(((_a = ctx.channel_list) == null ? void 0 : _a.length) ? 3 : -1);
  }
}, dependencies: [BindingDirective, MatRippleModule, MatRipple, AuthenticatedImageDirective], encapsulation: 2 });
var TVControlsComponent = _TVControlsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TVControlsComponent, [{
    type: Component,
    args: [{
      selector: "tv-controls",
      template: `
        <div hidden [attr.mod]="mod()">
            <i
                binding
                [(model)]="channel_list"
                [sys]="system_id"
                [mod]="mod()"
                bind="channel_details"
            ></i>
            <i
                binding
                [(model)]="channel_url"
                [sys]="system_id"
                [mod]="mod()"
                bind="current_channel"
            ></i>
        </div>
        @if (channel_list?.length) {
            <div class="flex flex-wrap items-center justify-center p-8">
                @for (item of channel_list; track item) {
                    <button
                        matRipple
                        class="border-base-200 m-2 flex h-28 w-32 flex-col items-center justify-center space-y-2 rounded-sm border"
                        [class.bg-base-200]="channel_url !== item.channel"
                        [class.bg-primary]="channel_url === item.channel"
                        [class.text-white]="channel_url === item.channel"
                        (click)="setChannel(item.channel)"
                    >
                        @if (item?.icon) {
                            <img
                                auth
                                [source]="item.icon"
                                class="max-h-14 max-w-14"
                            />
                        }
                        <div class="">{{ item.name }}</div>
                    </button>
                }
            </div>
        }
    `,
      imports: [BindingDirective, MatRippleModule, AuthenticatedImageDirective]
    }]
  }], null, { mod: [{ type: Input, args: [{ isSignal: true, alias: "mod", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TVControlsComponent, { className: "TVControlsComponent", filePath: "apps/control/src/app/tabbed-view/tv-controls.component.ts", lineNumber: 56 });
})();

// apps/control/src/app/tabbed-view/tab-outlet.component.ts
var _c0 = (a0, a1) => ["/tabbed", a0, a1];
function TabOutletComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275listener("click", function TabOutletComponent_For_5_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAction());
    });
    \u0275\u0275elementStart(1, "icon", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(3, _c0, ctx_r1.id, tab_r3.id || tab_r3.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r3.name);
  }
}
function TabOutletComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 18);
    \u0275\u0275element(2, "img", 19);
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.hearing_tloop ? "assets/loop_t.png" : "assets/loop.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.join_code || "=CODE=", " ");
  }
}
function TabOutletComponent_Conditional_10_For_5_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function TabOutletComponent_Conditional_10_For_5_Template_button_click_0_listener() {
      const input_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setInput(input_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("inverse", ((_a = ctx_r1.system()) == null ? void 0 : _a.selected_input) !== (input_r5.id || input_r5.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", input_r5 == null ? void 0 : input_r5.name, " ");
  }
}
function TabOutletComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONTROL.INPUT_CATEGORY_EMPTY"), " ");
  }
}
function TabOutletComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, TabOutletComponent_Conditional_10_For_5_Template, 2, 3, "button", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(6, TabOutletComponent_Conditional_10_Conditional_6_Template, 3, 3, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONTROL.INPUTS_AVAILABLE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.inputs());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.inputs().length ? 6 : -1);
  }
}
function TabOutletComponent_Case_12_Conditional_0_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("present_output", (_a = ctx_r1.tab()) == null ? void 0 : _a.presentation_source)("redirect", false);
  }
}
function TabOutletComponent_Case_12_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "camera-controls");
  }
}
function TabOutletComponent_Case_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275conditionalCreate(1, TabOutletComponent_Case_12_Conditional_1_Conditional_1_Template, 1, 0, "camera-controls");
    \u0275\u0275element(2, "video-call-dial-view", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.speaker_track() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("redirect", false);
  }
}
function TabOutletComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TabOutletComponent_Case_12_Conditional_0_Template, 1, 2, "div", 25)(1, TabOutletComponent_Case_12_Conditional_1_Template, 3, 2, "div", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.call() ? 0 : 1);
  }
}
function TabOutletComponent_Case_13_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275element(0, "tv-controls", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("mod", (_a = ctx_r1.tab()) == null ? void 0 : _a.mod);
  }
}
function TabOutletComponent_Case_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 28);
    \u0275\u0275pipe(1, "markdown");
    \u0275\u0275pipe(2, "safe");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, ctx_r1.help().content)), \u0275\u0275sanitizeHtml);
  }
}
function TabOutletComponent_Case_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONTROL.CONTROLS_EMPTY"), " ");
  }
}
function TabOutletComponent_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TabOutletComponent_Case_14_Conditional_0_Template, 3, 5, "div", 28);
    \u0275\u0275conditionalCreate(1, TabOutletComponent_Case_14_Conditional_1_Template, 4, 3, "div", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.help() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.help() ? 1 : -1);
  }
}
function TabOutletComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function TabOutletComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewHelp());
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "icon");
    \u0275\u0275text(3, "help");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.CONTROL.ACTION_HELP"), " ");
  }
}
function TabOutletComponent_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function TabOutletComponent_Conditional_18_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.presentToAll());
    });
    \u0275\u0275elementStart(1, "icon", 35);
    \u0275\u0275text(2, "output");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "APP.CONTROL.PRESENT_ALL"), " ");
  }
}
function TabOutletComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, TabOutletComponent_Conditional_18_Conditional_1_Template, 6, 3, "button", 33);
    \u0275\u0275elementStart(2, "button", 34);
    \u0275\u0275listener("click", function TabOutletComponent_Conditional_18_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAll());
    });
    \u0275\u0275elementStart(3, "icon", 35);
    \u0275\u0275text(4, "cancel_presentation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hide_present_all() !== true ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.has_routes());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "APP.CONTROL.CLEAR_ALL"), " ");
  }
}
var _TabOutletComponent = class _TabOutletComponent extends AsyncHandler {
  constructor() {
    super();
    this._service = inject(ControlStateService);
    this._vc_state = inject(VideoCallStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.hearing_tloop = false;
    this.id = this._service.id;
    this.active_tab = signal(
      "",
      ...ngDevMode ? [{ debugName: "active_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_present_all = this._service.hide_present_all;
    this.outputs = this._service.output_list;
    this.has_routes = computed(
      () => this.outputs().some((_) => !!_.source),
      ...ngDevMode ? [{ debugName: "has_routes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.system = this._service.system;
    this.tabs = this._service.tabs;
    this.call = this._vc_state.call;
    this.speaker_track = this._vc_state.speaker_track;
    this.tab = computed(
      () => this.tabs().find((t) => (t.id || t.name) === this.active_tab()),
      ...ngDevMode ? [{ debugName: "tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.inputs = computed(
      () => {
        const id = this.active_tab();
        const tab = this.tabs().find((_) => (_.id || _.name) === id);
        const inputs = this._available_inputs();
        if (!tab)
          return [];
        return inputs.filter((_) => !tab.inputs && (!tab.type || _.type === tab.type) || tab.inputs && tab.inputs.includes(_.id));
      },
      ...ngDevMode ? [{ debugName: "inputs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._user_action = signal(
      false,
      ...ngDevMode ? [{ debugName: "_user_action" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_inputs = this._service.available_inputs;
    this._route_tab = toSignal(this._route.paramMap.pipe(map((params) => params.get("tab") || "")), { initialValue: "" });
    this.help = computed(
      () => {
        const tab = this.tab();
        return (this._help_items() || []).find((h) => h.id === (tab == null ? void 0 : tab.help));
      },
      ...ngDevMode ? [{ debugName: "help" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._help_items = this._service.help_items;
    this.join_code = "";
    this.setInput = (s) => this._service.setOutputSource(s.id);
    this.viewHelp = () => {
      var _a;
      return this._service.viewHelp((_a = this.tab()) == null ? void 0 : _a.help);
    };
    effect(() => {
      const tab = this._route_tab();
      if (tab)
        this.active_tab.set(tab);
    });
    effect(() => {
      var _a;
      const selected_tab = (_a = this.system()) == null ? void 0 : _a.selected_tab;
      this.timeout("update_tab", () => {
        if (selected_tab) {
          this.active_tab.set(selected_tab);
          this._router.navigate(["/tabbed", this.id, selected_tab], {
            queryParamsHandling: "merge"
          });
        }
      }, 500);
    });
    effect(() => {
      var _a;
      const available_inputs = this._available_inputs();
      const tabs = this.tabs();
      const selected_input = (_a = this.system()) == null ? void 0 : _a.selected_input;
      const active_tab = this._route_tab();
      const user_action = this._user_action();
      this.timeout("inputs", () => {
        const tab = tabs.find((_) => (_.id || _.name) === active_tab);
        const input_list = !tab ? [] : available_inputs.filter((_) => !tab.inputs && (!tab.type || _.type === tab.type) || tab.inputs && tab.inputs.includes(_.id));
        const has_selected = input_list.find((i) => (i.id || i.name) === selected_input);
        if (has_selected || !user_action)
          return;
        input_list.length ? this._service.setSelectedInput(input_list[0].id) : log("TABS", "No available inputs to select on the tab.", void 0, "warn");
      }, 300);
    });
  }
  presentToAll() {
    const tab = this.tab();
    if (!tab)
      return;
    this._service.routeToAll();
  }
  clearAll() {
    this._service.unrouteAll();
  }
  onAction() {
    if (this._user_action())
      return;
    this._user_action.set(true);
    setTimeout(() => this._user_action.set(false), 1e3);
  }
};
_TabOutletComponent.\u0275fac = function TabOutletComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabOutletComponent)();
};
_TabOutletComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabOutletComponent, selectors: [["tab-outlet"], ["", "tab-outlet", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 13, consts: [["binding", "", "mod", "HearingAugmentation", "bind", "join_code", 3, "modelChange", "sys", "model"], ["binding", "", "mod", "HearingAugmentation", "bind", "has_t_coil", 3, "modelChange", "sys", "model"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-1"], [1, "relative", "flex", "w-[calc(100%-1rem)]", "items-center", "overflow-hidden", "px-1", "pt-2"], ["matRipple", "", "routerLinkActive", "opacity-100! text-secondary!", "queryParamsHandling", "merge", 1, "bg-base-100", "text-base-content", "mx-1", "flex", "h-24", "w-32", "flex-col", "items-center", "justify-center", "overflow-hidden", "rounded-t", "rounded-b-none", "leading-tight", "opacity-60", "shadow-sm", 3, "routerLink"], [1, "absolute", "top-0", "right-0", "bottom-2", "flex", "space-x-2"], [3, "system_id", "enabled"], [1, "max-h-full", "w-16"], [1, "divide-base-200", "bg-base-100", "text-base-content", "mb-1", "flex", "h-1/2", "w-[calc(100%-1rem)]", "flex-1", "items-center", "divide-x", "overflow-auto", "rounded-sm", "shadow-sm"], [1, "h-full", "w-64", "min-w-64", "space-y-2", "overflow-auto", "px-4", "pt-2", "pb-4", "sm:min-w-0"], [1, "relative", "h-full", "min-h-full", "min-w-full", "overflow-auto", "sm:min-w-0", 2, "flex", "2"], [3, "mod"], ["btn", "", "matRipple", "", 1, "inverse", "black", "absolute", "top-4", "right-4", "w-32"], [1, "flex", "w-full", "items-center"], [1, "min-w-0", "flex-1"], ["output-actions", "", 1, "flex", "flex-col", "space-y-2", "px-4"], ["matRipple", "", "routerLinkActive", "opacity-100! text-secondary!", "queryParamsHandling", "merge", 1, "bg-base-100", "text-base-content", "mx-1", "flex", "h-24", "w-32", "flex-col", "items-center", "justify-center", "overflow-hidden", "rounded-t", "rounded-b-none", "leading-tight", "opacity-60", "shadow-sm", 3, "click", "routerLink"], ["className", "material-symbols-outlined", 1, "text-5xl"], [1, "bg-base-100", "space-y-1", "rounded-sm", "p-2", "shadow-sm"], [1, "w-16", "overflow-hidden", "rounded-sm", "border", "border-[hsl(217,62%,38%)]", 3, "src"], [1, "text-base-content", "text-center", "font-mono", "text-xs"], [1, "p-2", "text-center", "text-lg", "font-medium"], ["btn", "", "matRipple", "", 1, "w-full", 3, "inverse"], [1, "flex", "h-1/2", "w-full", "flex-1", "items-center", "justify-center", "p-8", "opacity-30"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["video-call-page", "", 3, "present_output", "redirect"], [1, "flex", "justify-center", "space-x-8"], [1, "mt-4", "block", 3, "redirect"], ["content", "", 1, "p-8", 3, "innerHTML"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "opacity-60"], ["btn", "", "matRipple", "", 1, "inverse", "black", "absolute", "top-4", "right-4", "w-32", 3, "click"], [1, "mr-2", "flex", "items-center", "justify-center"], [1, "mx-2"], ["btn", "", "matRipple", "", "present-all", "", 1, "space-x-2"], ["btn", "", "matRipple", "", "clear-all", "", 1, "inverse", "space-x-2", 3, "click", "disabled"], [1, "text-2xl"], [1, "pr-4"], ["btn", "", "matRipple", "", "present-all", "", 1, "space-x-2", 3, "click"]], template: function TabOutletComponent_Template(rf, ctx) {
  var _a, _b, _c, _d;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 0);
    \u0275\u0275twoWayListener("modelChange", function TabOutletComponent_Template_i_modelChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.join_code, $event) || (ctx.join_code = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "i", 1);
    \u0275\u0275twoWayListener("modelChange", function TabOutletComponent_Template_i_modelChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.hearing_tloop, $event) || (ctx.hearing_tloop = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275repeaterCreate(4, TabOutletComponent_For_5_Template, 5, 6, "a", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275element(7, "voice-assistant", 6);
    \u0275\u0275conditionalCreate(8, TabOutletComponent_Conditional_8_Template, 5, 2, "div", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8);
    \u0275\u0275conditionalCreate(10, TabOutletComponent_Conditional_10_Template, 7, 4, "div", 9);
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275conditionalCreate(12, TabOutletComponent_Case_12_Template, 2, 1)(13, TabOutletComponent_Case_13_Template, 1, 1, "tv-controls", 11)(14, TabOutletComponent_Case_14_Template, 2, 2);
    \u0275\u0275conditionalCreate(15, TabOutletComponent_Conditional_15_Template, 7, 3, "button", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13);
    \u0275\u0275element(17, "device-output-list", 14);
    \u0275\u0275conditionalCreate(18, TabOutletComponent_Conditional_18_Template, 8, 5, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    \u0275\u0275property("sys", ctx.id);
    \u0275\u0275twoWayProperty("model", ctx.join_code);
    \u0275\u0275advance();
    \u0275\u0275property("sys", ctx.id);
    \u0275\u0275twoWayProperty("model", ctx.hearing_tloop);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("padding-right", (ctx.join_code ? 6 : 0) + "rem");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.tabs());
    \u0275\u0275advance(3);
    \u0275\u0275property("system_id", ctx.id)("enabled", (_a = ctx.system()) == null ? void 0 : _a.voice_control);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.join_code ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.inputs().length > 1 ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_10_0 = (_b = ctx.tab()) == null ? void 0 : _b.controls) === "vidconf-controls" ? 12 : tmp_10_0 === "tv-channels" ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((_c = ctx.tab()) == null ? void 0 : _c.help) && ((_d = ctx.tab()) == null ? void 0 : _d.controls) ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.outputs().length > 1 ? 18 : -1);
  }
}, dependencies: [
  BindingDirective,
  MatRippleModule,
  MatRipple,
  IconComponent,
  DeviceOutputListComponent,
  TVControlsComponent,
  VideoCallDialViewComponent,
  CameraControlsComponent,
  VideoCallPageComponent,
  VoiceAssistantComponent,
  RouterModule,
  RouterLink,
  RouterLinkActive,
  TranslatePipe,
  MarkdownPipe,
  SafePipe
], styles: ["\na[_ngcontent-%COMP%] {\n  color: #000;\n}\n/*# sourceMappingURL=tab-outlet.component.css.map */"] });
var TabOutletComponent = _TabOutletComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabOutletComponent, [{
    type: Component,
    args: [{ selector: "tab-outlet,[tab-outlet]", template: `
        <i
            binding
            [sys]="id"
            mod="HearingAugmentation"
            bind="join_code"
            [(model)]="join_code"
        ></i>
        <i
            binding
            [sys]="id"
            mod="HearingAugmentation"
            bind="has_t_coil"
            [(model)]="hearing_tloop"
        ></i>
        <div class="flex h-full w-full flex-col items-center p-1">
            <div
                class="relative flex w-[calc(100%-1rem)] items-center overflow-hidden px-1 pt-2"
                [style.padding-right]="(join_code ? 6 : 0) + 'rem'"
            >
                @for (tab of tabs(); track tab) {
                    <a
                        matRipple
                        class="bg-base-100 text-base-content mx-1 flex h-24 w-32 flex-col items-center justify-center overflow-hidden rounded-t rounded-b-none leading-tight opacity-60 shadow-sm"
                        [routerLink]="['/tabbed', id, tab.id || tab.name]"
                        routerLinkActive="opacity-100! text-secondary!"
                        queryParamsHandling="merge"
                        (click)="onAction()"
                    >
                        <icon
                            class="text-5xl"
                            className="material-symbols-outlined"
                            >{{ tab.icon }}</icon
                        >
                        <p>{{ tab.name }}</p>
                    </a>
                }
                <div class="absolute top-0 right-0 bottom-2 flex space-x-2">
                    <voice-assistant
                        [system_id]="id"
                        [enabled]="system()?.voice_control"
                    ></voice-assistant>
                    @if (join_code) {
                        <div class="max-h-full w-16">
                            <div
                                class="bg-base-100 space-y-1 rounded-sm p-2 shadow-sm"
                            >
                                <img
                                    class="w-16 overflow-hidden rounded-sm border border-[hsl(217,62%,38%)]"
                                    [src]="
                                        hearing_tloop
                                            ? 'assets/loop_t.png'
                                            : 'assets/loop.png'
                                    "
                                />
                                <p
                                    class="text-base-content text-center font-mono text-xs"
                                >
                                    {{ join_code || '=CODE=' }}
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div
                class="divide-base-200 bg-base-100 text-base-content mb-1 flex h-1/2 w-[calc(100%-1rem)] flex-1 items-center divide-x overflow-auto rounded-sm shadow-sm"
            >
                @if (inputs().length > 1) {
                    <div
                        class="h-full w-64 min-w-64 space-y-2 overflow-auto px-4 pt-2 pb-4 sm:min-w-0"
                    >
                        <h3 class="p-2 text-center text-lg font-medium">
                            {{ 'APP.CONTROL.INPUTS_AVAILABLE' | translate }}
                        </h3>
                        @for (input of inputs(); track input) {
                            <button
                                btn
                                matRipple
                                class="w-full"
                                [class.inverse]="
                                    system()?.selected_input !==
                                    (input.id || input.name)
                                "
                                (click)="setInput(input)"
                            >
                                {{ input?.name }}
                            </button>
                        }
                        @if (!inputs().length) {
                            <div
                                class="flex h-1/2 w-full flex-1 items-center justify-center p-8 opacity-30"
                            >
                                {{
                                    'APP.CONTROL.INPUT_CATEGORY_EMPTY'
                                        | translate
                                }}
                            </div>
                        }
                    </div>
                }
                <div
                    style="flex: 2"
                    class="relative h-full min-h-full min-w-full overflow-auto sm:min-w-0"
                >
                    @switch (tab()?.controls) {
                        @case ('vidconf-controls') {
                            @if (call()) {
                                <div
                                    video-call-page
                                    [present_output]="
                                        tab()?.presentation_source
                                    "
                                    [redirect]="false"
                                ></div>
                            } @else {
                                <div class="flex justify-center space-x-8">
                                    @if (!speaker_track()) {
                                        <camera-controls></camera-controls>
                                    }
                                    <video-call-dial-view
                                        class="mt-4 block"
                                        [redirect]="false"
                                    ></video-call-dial-view>
                                </div>
                            }
                        }
                        @case ('tv-channels') {
                            <tv-controls [mod]="tab()?.mod"></tv-controls>
                        }
                        @default {
                            @if (help()) {
                                <div
                                    class="p-8"
                                    content
                                    [innerHTML]="
                                        help().content | markdown | safe
                                    "
                                ></div>
                            }
                            @if (!help()) {
                                <div
                                    class="flex h-full w-full items-center justify-center opacity-60"
                                >
                                    <p>
                                        {{
                                            'APP.CONTROL.CONTROLS_EMPTY'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            }
                        }
                    }
                    @if (tab()?.help && tab()?.controls) {
                        <button
                            btn
                            matRipple
                            class="inverse black absolute top-4 right-4 w-32"
                            (click)="viewHelp()"
                        >
                            <div class="mr-2 flex items-center justify-center">
                                <icon>help</icon>
                                <div class="mx-2">
                                    {{ 'APP.CONTROL.ACTION_HELP' | translate }}
                                </div>
                            </div>
                        </button>
                    }
                </div>
            </div>
            <div class="flex w-full items-center">
                <device-output-list class="min-w-0 flex-1"></device-output-list>
                @if (outputs().length > 1) {
                    <div output-actions class="flex flex-col space-y-2 px-4">
                        @if (hide_present_all() !== true) {
                            <button
                                btn
                                matRipple
                                present-all
                                class="space-x-2"
                                (click)="presentToAll()"
                            >
                                <icon class="text-2xl">output</icon>
                                <div class="pr-4">
                                    {{ 'APP.CONTROL.PRESENT_ALL' | translate }}
                                </div>
                            </button>
                        }
                        <button
                            btn
                            matRipple
                            clear-all
                            class="inverse space-x-2"
                            [disabled]="!has_routes()"
                            (click)="clearAll()"
                        >
                            <icon class="text-2xl">cancel_presentation</icon>
                            <div class="pr-4">
                                {{ 'APP.CONTROL.CLEAR_ALL' | translate }}
                            </div>
                        </button>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      BindingDirective,
      MatRippleModule,
      IconComponent,
      DeviceOutputListComponent,
      TranslatePipe,
      MarkdownPipe,
      SafePipe,
      TVControlsComponent,
      VideoCallDialViewComponent,
      CameraControlsComponent,
      VideoCallPageComponent,
      VoiceAssistantComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;5a2d56206ea3c48b09789f001d41a622bbc3d2a2c34668ecfe492742875574c1;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/tabbed-view/tab-outlet.component.ts */\na {\n  color: #000;\n}\n/*# sourceMappingURL=tab-outlet.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabOutletComponent, { className: "TabOutletComponent", filePath: "apps/control/src/app/tabbed-view/tab-outlet.component.ts", lineNumber: 255 });
})();

// apps/control/src/app/tabbed-view/tabbed-view.component.ts
function ControlTabbedViewComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "topbar-header")(2, "div", 3)(3, "control-status-bar");
    \u0275\u0275elementEnd();
  }
}
function ControlTabbedViewComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("click", function ControlTabbedViewComponent_Conditional_0_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.powerOn());
    })("touchend", function ControlTabbedViewComponent_Conditional_0_Conditional_1_Template_div_touchend_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.powerOn());
    });
    \u0275\u0275elementStart(1, "h2", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "next-meeting", 7);
    \u0275\u0275elementStart(7, "div", 8)(8, "div", 9);
    \u0275\u0275elementContainerStart(9);
    \u0275\u0275text(10, "Version: ");
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(11, "button", 10);
    \u0275\u0275listener("click", function ControlTabbedViewComponent_Conditional_0_Conditional_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewChangelog());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 11);
    \u0275\u0275element(18, "voice-assistant", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "APP.CONTROL.TOUCH_TO_START"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((_a = ctx_r1.system()) == null ? void 0 : _a.name);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r1.changelog_available());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.version.hash, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(15, 10, ctx_r1.version.time, "longDate"), " (", \u0275\u0275pipeBind2(16, 13, ctx_r1.version.time, "shortTime"), ") ");
    \u0275\u0275advance(4);
    \u0275\u0275property("system_id", ctx_r1.id())("enabled", (_b = ctx_r1.system()) == null ? void 0 : _b.voice_control);
  }
}
function ControlTabbedViewComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 13);
    \u0275\u0275element(2, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 15);
    \u0275\u0275text(4, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("source", ((_a = ctx_r1.logo()) == null ? void 0 : _a.src) || ctx_r1.logo());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "APP.CONTROL.ROOMS_JOINED"), " ");
  }
}
function ControlTabbedViewComponent_Conditional_0_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlTabbedViewComponent_Conditional_0_Conditional_0_Template, 4, 0, "div", 0)(1, ControlTabbedViewComponent_Conditional_0_Conditional_1_Template, 19, 16, "div", 1);
    \u0275\u0275conditionalCreate(2, ControlTabbedViewComponent_Conditional_0_Conditional_2_Template, 8, 4, "div", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((_a = ctx_r1.system()) == null ? void 0 : _a.active) ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.join_status()[0] && ctx_r1.join_status()[1] ? 2 : -1);
  }
}
function ControlTabbedViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "control-connecting");
  }
}
var _ControlTabbedViewComponent = class _ControlTabbedViewComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._state = inject(ControlStateService);
    this._changelog = inject(ChangelogService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._param_map = toSignal(this._route.paramMap, {
      initialValue: this._route.snapshot.paramMap
    });
    this._query_param_map = toSignal(this._route.queryParamMap, {
      initialValue: this._route.snapshot.queryParamMap
    });
    this.system = this._state.system;
    this.join_status = this._state.join_status;
    this.powerOn = () => this._state.powerOn();
    this.id = this._state.system_id;
    this.version = VERSION;
    this.changelog_available = this._changelog.available;
    this.viewChangelog = () => this._changelog.view();
    this.logo = computed(
      () => {
        this._org.active_building();
        return (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {};
      },
      ...ngDevMode ? [{ debugName: "logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const params = this._param_map();
      if (params.has("system"))
        this._state.setID(params.get("system"));
    });
    effect(() => {
      const params = this._query_param_map();
      if (params.get("join") === "true")
        this._state.selectMeeting();
    });
  }
};
_ControlTabbedViewComponent.\u0275fac = function ControlTabbedViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlTabbedViewComponent)();
};
_ControlTabbedViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlTabbedViewComponent, selectors: [["app-control-tabbed-view"]], decls: 2, vars: 1, consts: [[1, "divide", "divide-base-200", "bg-base-100", "relative", "flex", "h-full", "w-full", "flex-col"], ["name", "splash", 1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "text-white"], ["lockout", "", 1, "bg-base-100", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["tab-outlet", "", 1, "bg-base-200", "h-1/2", "flex-1"], ["name", "splash", 1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "text-white", 3, "click", "touchend"], [1, "mb-4", "text-4xl", "font-light"], [1, "text-lg"], [1, "mt-8"], [1, "absolute", "bottom-0", "left-0", "p-2"], [1, "w-full", "text-xs", "opacity-60"], [1, "m-0", "border-none", "bg-none", "p-0", "text-xs", "underline", 3, "click", "disabled"], [1, "absolute", "right-4", "bottom-4"], [3, "system_id", "enabled"], [1, "absolute", "top-4", "left-4", "z-0"], ["auth", "", "alt", "Logo", 1, "h-10", 3, "source"], [1, "text-base-content", "relative", "z-10", "text-8xl"], [1, "text-base-content", "relative", "z-10", "text-2xl"]], template: function ControlTabbedViewComponent_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlTabbedViewComponent_Conditional_0_Template, 3, 2)(1, ControlTabbedViewComponent_Conditional_1_Template, 1, 0, "control-connecting");
  }
  if (rf & 2) {
    \u0275\u0275conditional(((_a = ctx.system()) == null ? void 0 : _a.connected) ? 0 : 1);
  }
}, dependencies: [
  TopbarHeaderComponent,
  TabOutletComponent,
  ControlStatusBarComponent,
  ControlConnectingComponent,
  NextMeetingComponent,
  IconComponent,
  AuthenticatedImageDirective,
  VoiceAssistantComponent,
  TranslatePipe,
  DatePipe
], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[name=splash][_ngcontent-%COMP%] {\n  animation: crossfade 10s linear;\n  animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=tabbed-view.component.css.map */"] });
var ControlTabbedViewComponent = _ControlTabbedViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlTabbedViewComponent, [{
    type: Component,
    args: [{ selector: "app-control-tabbed-view", template: `
        @if (system()?.connected) {
            @if (system()?.active) {
                <div
                    class="divide divide-base-200 bg-base-100 relative flex h-full w-full flex-col"
                >
                    <topbar-header></topbar-header>
                    <div class="bg-base-200 h-1/2 flex-1" tab-outlet></div>
                    <control-status-bar></control-status-bar>
                </div>
            } @else {
                <div
                    name="splash"
                    class="absolute inset-0 flex flex-col items-center justify-center text-white"
                    (click)="powerOn()"
                    (touchend)="powerOn()"
                >
                    <h2 class="mb-4 text-4xl font-light">
                        {{ 'APP.CONTROL.TOUCH_TO_START' | translate }}
                    </h2>
                    <p class="text-lg">{{ system()?.name }}</p>
                    <next-meeting class="mt-8" />
                    <div class="absolute bottom-0 left-0 p-2">
                        <div class="w-full text-xs opacity-60">
                            <ng-container>Version: </ng-container>
                            <button
                                class="m-0 border-none bg-none p-0 text-xs underline"
                                [disabled]="!changelog_available()"
                                (click)="viewChangelog()"
                            >
                                {{ version.hash }}
                            </button>
                        </div>
                        <div class="w-full text-xs opacity-60">
                            {{ version.time | date: 'longDate' }}
                            ({{ version.time | date: 'shortTime' }})
                        </div>
                    </div>
                    <div class="absolute right-4 bottom-4">
                        <voice-assistant
                            [system_id]="id()"
                            [enabled]="system()?.voice_control"
                        ></voice-assistant>
                    </div>
                </div>
            }
            @if (!join_status()[0] && join_status()[1]) {
                <div
                    lockout
                    class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <div class="absolute top-4 left-4 z-0">
                        <img
                            auth
                            class="h-10"
                            alt="Logo"
                            [source]="logo()?.src || logo()"
                        />
                    </div>
                    <icon class="text-base-content relative z-10 text-8xl"
                        >lock</icon
                    >
                    <p class="text-base-content relative z-10 text-2xl">
                        {{ 'APP.CONTROL.ROOMS_JOINED' | translate }}
                    </p>
                </div>
            }
        } @else {
            <control-connecting />
        }
    `, imports: [
      TopbarHeaderComponent,
      TabOutletComponent,
      ControlStatusBarComponent,
      ControlConnectingComponent,
      NextMeetingComponent,
      TranslatePipe,
      IconComponent,
      AuthenticatedImageDirective,
      VoiceAssistantComponent,
      DatePipe
    ], styles: ["/* angular:styles/component:css;5c9c66d69eb2d754cb71ce22bb6ef0ab9a2fd4d711316fd0e8b0d54cb6c6db5b;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/tabbed-view/tabbed-view.component.ts */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n:host > div {\n  color: #fff;\n}\n[name=splash] {\n  animation: crossfade 10s linear;\n  animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=tabbed-view.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlTabbedViewComponent, { className: "ControlTabbedViewComponent", filePath: "apps/control/src/app/tabbed-view/tabbed-view.component.ts", lineNumber: 128 });
})();
export {
  ControlTabbedViewComponent
};
//# debugId=8cac4519-c592-5a1c-8a93-79d2282b36f9
//# sourceMappingURL=tabbed-view.component-RWYJRWJZ.js.map
