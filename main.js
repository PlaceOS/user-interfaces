import {
  BookingFormService,
  CustomTooltipComponent,
  DurationFieldComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatTooltip,
  MatTooltipModule,
  UserSearchFieldComponent,
  generateMockSpace,
  setHours,
  setMinutes
} from "./chunk-IQ2B4YSX.js";
import {
  CheckinStateService,
  parseTokenFromUrl
} from "./chunk-24EPPM3R.js";
import {
  $r,
  ANIMATION_MODULE_TYPE,
  AUTO_STYLE,
  ActivatedRoute,
  AnimationGroupPlayer,
  AnimationMetadataType,
  AsyncHandler,
  AuthenticatedImageDirective,
  BidiModule,
  BrowserModule,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DEFAULT_SETTINGS,
  DOCUMENT,
  DatePipe,
  DefaultValueAccessor,
  DomRendererFactory2,
  EMPTY_USER,
  ElementRef,
  ErrorHandler,
  EventEmitter,
  Fl,
  FormField,
  FormsModule,
  Fr,
  GroupPermission,
  HotkeysService,
  IconComponent,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  LOCALE_ID,
  LocaleService,
  Lr,
  MatCheckbox,
  MatCheckboxModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgModule,
  NgSelectOption,
  NgZone,
  NoopAnimationPlayer,
  NumberValueAccessor,
  OrganisationService,
  Output,
  Pipe,
  PlaceOS_Service,
  Renderer2,
  RendererFactory2,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  Rt,
  RuntimeError,
  SanitizePipe,
  SelectControlValueAccessor,
  SettingsService,
  TraceService,
  TranslatePipe,
  User,
  VERSION,
  ViewChild,
  ViewEncapsulation,
  VirtualKeyboardComponent,
  Wl,
  X,
  Ye,
  Zr,
  _getAnimationsState,
  addDays,
  addMilliseconds,
  addMinutes,
  addMonths,
  autoConfirmNativeDomain,
  bootstrapApplication,
  capitalizeFirstLetter,
  computed,
  createErrorHandler,
  currentUser,
  current_user,
  differenceInMinutes,
  effect,
  enableProdMode,
  firstTruthyValueFrom,
  format,
  getInvalidSignalFields,
  getLoadingMessage,
  getNativeApiKey,
  getNativeDomain,
  getNativeEmail,
  getUnixTime,
  hasPermission,
  i18n,
  inject,
  input,
  isBefore,
  isEmptyUser,
  isPublicMode,
  log,
  lookupNativeDomainByEmail,
  nativeDomainError,
  needsNativeDomain,
  normaliseNativeDomain,
  notifyError,
  numberAttribute,
  oi,
  output,
  padString,
  performanceMarkFeature,
  predictableRandomInt,
  provideAppInitializer,
  provideRouter,
  provideServiceWorker,
  provideZonelessChangeDetection,
  randomInt,
  randomString,
  registerLocaleData,
  sequence,
  serviceWorkerUpdate,
  setClassMetadata,
  setMocks,
  setNativeApiKey,
  setNativeDomain,
  setNativeEmail,
  setPublicMode,
  settingSignal,
  signal,
  startOfDay,
  startOfMinute,
  style,
  timePeriodsIntersect,
  unique,
  untracked,
  user_groups_loaded,
  viewChild,
  withHashLocation,
  withNavigationErrorHandler,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵPRE_STYLE,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
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
} from "./chunk-7DXTUSV5.js";
import {
  __export,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/addSeconds.js
function addSeconds(date, amount, options2) {
  return addMilliseconds(date, amount * 1e3, options2);
}

// node_modules/date-fns/subDays.js
function subDays(date, amount, options2) {
  return addDays(date, -amount, options2);
}

// node_modules/date-fns/subMonths.js
function subMonths(date, amount, options2) {
  return addMonths(date, -amount, options2);
}

// node_modules/date-fns/subMinutes.js
function subMinutes(date, amount, options2) {
  return addMinutes(date, -amount, options2);
}

// node_modules/date-fns/subSeconds.js
function subSeconds(date, amount, options2) {
  return addSeconds(date, -amount, options2);
}

// libs/common/src/lib/lazy-route-reload.ts
var LAZY_ROUTE_RELOAD_KEY = "placeos.lazy_route_reload";
var RELOAD_THROTTLE = 30 * 1e3;
var LAZY_ROUTE_ERROR_PATTERNS = [
  /ChunkLoadError/i,
  /Loading chunk [\w-]+ failed/i,
  /Failed to fetch dynamically imported module/i,
  /Importing a module script failed/i,
  /error loading dynamically imported module/i
];
function isLazyRouteLoadError(error) {
  const message = getLazyRouteErrorMessage(error);
  return LAZY_ROUTE_ERROR_PATTERNS.some((pattern) => pattern.test(message));
}
function reloadOnChunkLoadError(error, context = {}) {
  if (!isLazyRouteLoadError(error))
    throw error;
  const online = context.online ?? (typeof navigator !== "undefined" ? navigator.onLine : true);
  if (!online)
    throw error;
  const storage = context.storage ?? sessionStorage;
  const location_ref = context.location ?? location;
  const now = context.now ?? Date.now();
  const signature = `${location_ref.pathname}${location_ref.search}${location_ref.hash}:${getLazyRouteErrorMessage(error)}`;
  const reload_state = parseReloadState(storage.getItem(LAZY_ROUTE_RELOAD_KEY));
  if (reload_state?.signature === signature && now - reload_state.timestamp < RELOAD_THROTTLE) {
    throw error;
  }
  storage.setItem(LAZY_ROUTE_RELOAD_KEY, JSON.stringify({ signature, timestamp: now }));
  log("ROUTER", "Lazy route load failed. Reloading application...", error, "warn", true);
  location_ref.reload();
}
function getLazyRouteErrorMessage(error) {
  if (typeof error === "string")
    return error;
  if (error instanceof Error) {
    return `${error.name}: ${error.message}`;
  }
  if (error && typeof error === "object") {
    const name = "name" in error ? `${error.name || ""}` : "";
    const message = "message" in error ? `${error.message || ""}` : "";
    return `${name}: ${message}`.trim();
  }
  return `${error || ""}`;
}
function parseReloadState(state) {
  if (!state)
    return null;
  try {
    const parsed_state = JSON.parse(state);
    if (typeof parsed_state?.signature === "string" && typeof parsed_state?.timestamp === "number") {
      return parsed_state;
    }
  } catch {
  }
  return null;
}

// libs/common/src/lib/locale-data.ts
var SUPPORTED_LOCALES = {
  ar: () => import("./ar-4OEKFYQ3.js"),
  es: () => import("./es-E672VPW4.js"),
  fr: () => import("./fr-62Q4VGQY.js"),
  it: () => import("./it-OJSM6IJC.js"),
  ja: () => import("./ja-5HQXGIBO.js"),
  zh: () => import("./zh-A5WQQ6XL.js")
};
async function registerActiveLocale(locale) {
  const short = (locale || "en").split("-")[0];
  const loader = SUPPORTED_LOCALES[short];
  if (!loader)
    return;
  const { default: data } = await loader();
  registerLocaleData(data);
}

// node_modules/marked/lib/marked.esm.js
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape$1(html2, encode) {
  if (encode) {
    if (escapeTest.test(html2)) {
      return html2.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html2)) {
      return html2.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html2) {
  return html2.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  let source = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return href;
}
var noopTest = { exec: () => null };
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false;
    let curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c2, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c2 && !invert) {
      suffLen++;
    } else if (currChar !== c2 && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer2) {
  const href = link2.href;
  const title = link2.title ? escape$1(link2.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    lexer2.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape$1(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var _Tokenizer = class {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n")
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text = "";
      const tokens = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i;
        for (i = 0; i < lines.length; i++) {
          if (/^ {0,3}>/.test(lines[i])) {
            currentLines.push(lines[i]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i]);
          } else {
            break;
          }
        }
        lines = lines.slice(i);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1").replace(/^ {0,3}>[ \t]?/gm, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw;
        text = text ? `${text}
${currentText}` : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens[tokens.length - 1];
        if (lastToken?.type === "code") {
          break;
        } else if (lastToken?.type === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
          break;
        } else if (lastToken?.type === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
          lines = newText.substring(tokens[tokens.length - 1].raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
        let nextLine = src.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLine.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      list2.items[list2.items.length - 1].raw = list2.items[list2.items.length - 1].raw.trimEnd();
      list2.items[list2.items.length - 1].text = list2.items[list2.items.length - 1].text.trimEnd();
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!/[:|]/.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
    const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (/^ *-+: *$/.test(align)) {
        item.align.push("right");
      } else if (/^ *:-+: *$/.test(align)) {
        item.align.push("center");
      } else if (/^ *:-+ *$/.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i = 0; i < headers.length; i++) {
      item.header.push({
        text: headers[i],
        tokens: this.lexer.inline(headers[i]),
        header: true,
        align: item.align[i]
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell),
          header: false,
          align: item.align[i]
        };
      }));
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape$1(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape$1(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape$1(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
        } while (prevCapZero !== cap[0]);
        text = escape$1(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = cap[0];
      } else {
        text = escape$1(cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
};
var newline = /^(?: *(?:\n|$))+/;
var blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = __spreadProps(__spreadValues({}, blockNormal), {
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
});
var blockPedantic = __spreadProps(__spreadValues({}, blockNormal), {
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
});
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = "\\p{P}\\p{S}";
var punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
var blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = __spreadProps(__spreadValues({}, inlineNormal), {
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
});
var inlineGfm = __spreadProps(__spreadValues({}, inlineNormal), {
  escape: edit(escape).replace("])", "~|])").getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
var inlineBreaks = __spreadProps(__spreadValues({}, inlineGfm), {
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
var _Lexer = class __Lexer {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = [], lastParagraphClipped = false) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token;
    let lastToken;
    let cutSrc;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken?.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var _Renderer = class {
  options;
  parser;
  // set by the parser
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text, lang, escaped }) {
    const langString = (lang || "").match(/^\S*/)?.[0];
    const code = text.replace(/\n$/, "") + "\n";
    if (!langString) {
      return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape$1(langString) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
  }
  blockquote({ tokens }) {
    const body = this.parser.parse(tokens);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({ text }) {
    return text;
  }
  heading({ tokens, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start = token.start;
    let body = "";
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }
    const type2 = ordered ? "ol" : "ul";
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type2 + startAttr + ">\n" + body + "</" + type2 + ">\n";
  }
  listitem(item) {
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
            item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " "
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j = 0; j < token.header.length; j++) {
      cell += this.tablecell(token.header[j]);
    }
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j = 0; j < token.rows.length; j++) {
      const row = token.rows[j];
      cell = "";
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }
      body += this.tablerow({ text: cell });
    }
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({ text }) {
    return `<tr>
${text}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type2 = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type2} align="${token.align}">` : `<${type2}>`;
    return tag2 + content + `</${type2}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({ text }) {
    return `<code>${text}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image({ href, title, text }) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : token.text;
  }
};
var _TextRenderer = class {
  // no need for block level renderers
  strong({ text }) {
    return text;
  }
  em({ text }) {
    return text;
  }
  codespan({ text }) {
    return text;
  }
  del({ text }) {
    return text;
  }
  html({ text }) {
    return text;
  }
  text({ text }) {
    return text;
  }
  link({ text }) {
    return "" + text;
  }
  image({ text }) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var _Parser = class __Parser {
  options;
  renderer;
  textRenderer;
  constructor(options2) {
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token;
          let body = this.renderer.text(textToken);
          while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
            textToken = tokens[++i];
            body += "\n" + this.renderer.text(textToken);
          }
          if (top) {
            out += this.renderer.paragraph({
              type: "paragraph",
              raw: body,
              text: body,
              tokens: [{ type: "text", raw: body, text: body }]
            });
          } else {
            out += body;
          }
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer.text(token);
          break;
        }
        case "html": {
          out += renderer.html(token);
          break;
        }
        case "link": {
          out += renderer.link(token);
          break;
        }
        case "image": {
          out += renderer.image(token);
          break;
        }
        case "strong": {
          out += renderer.strong(token);
          break;
        }
        case "em": {
          out += renderer.em(token);
          break;
        }
        case "codespan": {
          out += renderer.codespan(token);
          break;
        }
        case "br": {
          out += renderer.br(token);
          break;
        }
        case "del": {
          out += renderer.del(token);
          break;
        }
        case "text": {
          out += renderer.text(token);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var _Hooks = class {
  options;
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
};
var Marked = class {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.#parseMarkdown(_Lexer.lex, _Parser.parse);
  parseInline = this.#parseMarkdown(_Lexer.lexInline, _Parser.parseInline);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...args) {
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              const tokens2 = genericToken[childTokens].flat(Infinity);
              values = values.concat(this.walkTokens(tokens2, callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = __spreadValues({}, pack);
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (["options", "parser"].includes(prop)) {
            continue;
          }
          const rendererProp = prop;
          let rendererFunc = pack.renderer[rendererProp];
          if (!pack.useNewRenderer) {
            rendererFunc = this.#convertRendererFunction(rendererFunc, rendererProp, renderer);
          }
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (prop === "options") {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = __spreadValues(__spreadValues({}, this.defaults), opts);
    });
    return this;
  }
  // TODO: Remove this in next major release
  #convertRendererFunction(func, prop, renderer) {
    switch (prop) {
      case "heading":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, renderer.parser.parseInline(token.tokens), token.depth, unescape(renderer.parser.parseInline(token.tokens, renderer.parser.textRenderer)));
        };
      case "code":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text, token.lang, !!token.escaped);
        };
      case "table":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          let header = "";
          let cell = "";
          for (let j = 0; j < token.header.length; j++) {
            cell += this.tablecell({
              text: token.header[j].text,
              tokens: token.header[j].tokens,
              header: true,
              align: token.align[j]
            });
          }
          header += this.tablerow({ text: cell });
          let body = "";
          for (let j = 0; j < token.rows.length; j++) {
            const row = token.rows[j];
            cell = "";
            for (let k = 0; k < row.length; k++) {
              cell += this.tablecell({
                text: row[k].text,
                tokens: row[k].tokens,
                header: false,
                align: token.align[k]
              });
            }
            body += this.tablerow({ text: cell });
          }
          return func.call(this, header, body);
        };
      case "blockquote":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          const body = this.parser.parse(token.tokens);
          return func.call(this, body);
        };
      case "list":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          const ordered = token.ordered;
          const start = token.start;
          const loose = token.loose;
          let body = "";
          for (let j = 0; j < token.items.length; j++) {
            const item = token.items[j];
            const checked = item.checked;
            const task = item.task;
            let itemBody = "";
            if (item.task) {
              const checkbox = this.checkbox({ checked: !!checked });
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox + " "
                  });
                }
              } else {
                itemBody += checkbox + " ";
              }
            }
            itemBody += this.parser.parse(item.tokens, loose);
            body += this.listitem({
              type: "list_item",
              raw: itemBody,
              text: itemBody,
              task,
              checked: !!checked,
              loose,
              tokens: item.tokens
            });
          }
          return func.call(this, body, ordered, start);
        };
      case "html":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text, token.block);
        };
      case "paragraph":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, this.parser.parseInline(token.tokens));
        };
      case "escape":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text);
        };
      case "link":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.href, token.title, this.parser.parseInline(token.tokens));
        };
      case "image":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.href, token.title, token.text);
        };
      case "strong":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, this.parser.parseInline(token.tokens));
        };
      case "em":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, this.parser.parseInline(token.tokens));
        };
      case "codespan":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text);
        };
      case "del":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, this.parser.parseInline(token.tokens));
        };
      case "text":
        return function(token) {
          if (!token.type || token.type !== prop) {
            return func.apply(this, arguments);
          }
          return func.call(this, token.text);
        };
    }
    return func;
  }
  setOptions(opt) {
    this.defaults = __spreadValues(__spreadValues({}, this.defaults), opt);
    return this;
  }
  lexer(src, options2) {
    return _Lexer.lex(src, options2 ?? this.defaults);
  }
  parser(tokens, options2) {
    return _Parser.parse(tokens, options2 ?? this.defaults);
  }
  #parseMarkdown(lexer2, parser2) {
    return (src, options2) => {
      const origOpt = __spreadValues({}, options2);
      const opt = __spreadValues(__spreadValues({}, this.defaults), origOpt);
      if (this.defaults.async === true && origOpt.async === false) {
        if (!opt.silent) {
          console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.");
        }
        opt.async = true;
      }
      const throwError = this.#onError(!!opt.silent, !!opt.async);
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
      }
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        let tokens = lexer2(src, opt);
        if (opt.hooks) {
          tokens = opt.hooks.processAllTokens(tokens);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html2 = parser2(tokens, opt);
        if (opt.hooks) {
          html2 = opt.hooks.postprocess(html2);
        }
        return html2;
      } catch (e) {
        return throwError(e);
      }
    };
  }
  #onError(silent, async) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      throw e;
    };
  }
};
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function(options2) {
  markedInstance.setOptions(options2);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parse = marked;
var parser = _Parser.parse;
var lexer = _Lexer.lex;

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
    const auth = X() !== "x-api-key" ? `bearer_token=${encodeURIComponent(X())}` : `x-api-key=${Ye()}`;
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
    const mod = Wl(id, "LLM");
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

// libs/components/src/lib/global-banner.component.ts
function GlobalBannerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1)(1, "div", 2);
  }
  if (rf & 2) {
    const bar_color_r1 = ctx;
    \u0275\u0275styleProp("background-color", bar_color_r1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", bar_color_r1);
  }
}
function GlobalBannerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function GlobalBannerComponent_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-info", ctx_r2.banner().type === "info" || !ctx_r2.banner().type)("text-info-content", ctx_r2.banner().type === "info" || !ctx_r2.banner().type)("bg-warning", ctx_r2.banner().type === "warn")("text-warning-content", ctx_r2.banner().type === "warn")("bg-error", ctx_r2.banner().type === "error")("text-error-content", ctx_r2.banner().type === "error");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.banner()?.content || ctx_r2.banner()?.message, " ");
  }
}
var GlobalBannerComponent = class _GlobalBannerComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._change = signal(
      0,
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_setup = signal(
      false,
      ...ngDevMode ? [{ debugName: "is_setup" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.banner = settingSignal("banner");
    this.environment_bar = settingSignal("environment_bar");
    this._environment_bar_padding = effect(
      () => {
        document.body.classList.toggle("has-environment-bar", !!this.environment_bar());
      },
      ...ngDevMode ? [{ debugName: "_environment_bar_padding" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_been_closed = computed(
      () => {
        if (!this.is_setup())
          return true;
        this._change();
        return !this.banner()?.content && !this.banner()?.message || localStorage.getItem("PLACE.last_banner") === this.banner().id;
      },
      ...ngDevMode ? [{ debugName: "has_been_closed" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    setTimeout(() => this.is_setup.set(true), 500);
  }
  async close() {
    localStorage.setItem("PLACE.last_banner", this.banner()?.id || "");
    this._change.set(Date.now());
  }
  static {
    this.\u0275fac = function GlobalBannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalBannerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalBannerComponent, selectors: [["global-banner"]], decls: 2, vars: 2, consts: [[1, "flex", "w-full", "items-center", "space-x-4", "p-4", "print:hidden", 3, "bg-info", "text-info-content", "bg-warning", "text-warning-content", "bg-error", "text-error-content"], ["aria-hidden", "true", 1, "environment-bar", "top-0", "print:hidden"], ["aria-hidden", "true", 1, "environment-bar", "bottom-0", "print:hidden"], [1, "flex", "w-full", "items-center", "space-x-4", "p-4", "print:hidden"], [1, "flex-1"], ["icon", "", "matRipple", "", 3, "click"]], template: function GlobalBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, GlobalBannerComponent_Conditional_0_Template, 2, 4);
        \u0275\u0275conditionalCreate(1, GlobalBannerComponent_Conditional_1_Template, 6, 13, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.environment_bar()) ? 0 : -1, tmp_0_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.has_been_closed() && ctx.banner() ? 1 : -1);
      }
    }, dependencies: [IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.environment-bar[_ngcontent-%COMP%] {\n  height: 0.5rem;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  width: 100%;\n  z-index: 10000;\n}\n/*# sourceMappingURL=global-banner.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalBannerComponent, [{
    type: Component,
    args: [{ selector: "global-banner", template: `
        @if (environment_bar(); as bar_color) {
            <div
                aria-hidden="true"
                class="environment-bar top-0 print:hidden"
                [style.background-color]="bar_color"
            ></div>
            <div
                aria-hidden="true"
                class="environment-bar bottom-0 print:hidden"
                [style.background-color]="bar_color"
            ></div>
        }
        @if (!has_been_closed() && banner()) {
            <div
                class="flex w-full items-center space-x-4 p-4 print:hidden"
                [class.bg-info]="banner().type === 'info' || !banner().type"
                [class.text-info-content]="
                    banner().type === 'info' || !banner().type
                "
                [class.bg-warning]="banner().type === 'warn'"
                [class.text-warning-content]="banner().type === 'warn'"
                [class.bg-error]="banner().type === 'error'"
                [class.text-error-content]="banner().type === 'error'"
            >
                <div class="flex-1">
                    {{ banner()?.content || banner()?.message }}
                </div>
                <button icon matRipple (click)="close()">
                    <icon>close</icon>
                </button>
            </div>
        }
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;48adc7ab23f963363b839300791bbdc46c1dcce0d1cc0ea0f3bb781a20fc7fbc;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/global-banner.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n.environment-bar {\n  height: 0.5rem;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  width: 100%;\n  z-index: 10000;\n}\n/*# sourceMappingURL=global-banner.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalBannerComponent, { className: "GlobalBannerComponent", filePath: "libs/components/src/lib/global-banner.component.ts", lineNumber: 74 });
})();

// node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: () => {
    const _document = inject(DOCUMENT);
    const _location = _document ? _document.location : null;
    return {
      getPathname: () => _location ? _location.pathname + _location.search : ""
    };
  }
});
var MatProgressBar = class _MatProgressBar {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  constructor() {
    const animationsState = _getAnimationsState();
    const defaults = inject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._isNoopAnimation = animationsState === "di-disabled";
    if (animationsState === "reduced-motion") {
      this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  _isNoopAnimation;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _value = 0;
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _bufferValue = 0;
  animationEnd = new EventEmitter();
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  _mode = "determinate";
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._cleanupTransitionEnd?.();
  }
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  _transitionendHandler = (event) => {
    if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
      return;
    }
    if (this.mode === "determinate" || this.mode === "buffer") {
      this._ngZone.run(() => this.animationEnd.next({
        value: this.value
      }));
    }
  };
  static \u0275fac = function MatProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressBar,
    selectors: [["mat-progress-bar"]],
    hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
    hostVars: 10,
    hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
      }
    },
    inputs: {
      color: "color",
      value: [2, "value", "value", numberAttribute],
      bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
      mode: "mode"
    },
    outputs: {
      animationEnd: "animationEnd"
    },
    exportAs: ["matProgressBar"],
    decls: 7,
    vars: 5,
    consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
    template: function MatProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275conditionalCreate(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 3);
        \u0275\u0275domElement(4, "span", 4);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "div", 5);
        \u0275\u0275domElement(6, "span", 4);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode === "buffer" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
      }
    },
    styles: [".mat-mdc-progress-bar {\n  --mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--mat-progress-bar-track-height, 4px);\n  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [".mat-mdc-progress-bar {\n  --mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--mat-progress-bar-track-height, 4px);\n  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static \u0275fac = function MatProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressBarModule,
    imports: [MatProgressBar],
    exports: [MatProgressBar, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, BidiModule]
    }]
  }], null, null);
})();

// libs/components/src/lib/native-domain-overlay.component.ts
function NativeDomainOverlayComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter the address of your PlaceOS server to connect this app. ");
  }
}
function NativeDomainOverlayComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter your work email to find your PlaceOS server and connect this app. ");
  }
}
function NativeDomainOverlayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function NativeDomainOverlayComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Settings provided by your administrator will be applied automatically in ", ctx_r0.auto_accept_in(), "s. ");
  }
}
function NativeDomainOverlayComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 12);
    \u0275\u0275text(2, "Server Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "icon", 14);
    \u0275\u0275text(5, "dns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function NativeDomainOverlayComponent_Conditional_11_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.server_address, $event) || (ctx_r0.server_address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "label", 16);
    \u0275\u0275text(9, "API Key (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 13)(11, "icon", 14);
    \u0275\u0275text(12, "key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function NativeDomainOverlayComponent_Conditional_11_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.api_key, $event) || (ctx_r0.api_key = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 18);
    \u0275\u0275text(15, " When set, the app authenticates with this key instead of asking you to sign in. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.server_address);
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.api_key);
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275control();
  }
}
function NativeDomainOverlayComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 19);
    \u0275\u0275text(2, "Work Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "icon", 14);
    \u0275\u0275text(5, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function NativeDomainOverlayComponent_Conditional_12_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.email, $event) || (ctx_r0.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.email);
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275control();
  }
}
function NativeDomainOverlayComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Find my server using my work email ");
  }
}
function NativeDomainOverlayComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter a server address manually ");
  }
}
var AUTO_ACCEPT_SECONDS = 15;
var NativeDomainOverlayComponent = class _NativeDomainOverlayComponent {
  constructor() {
    this.serverError = input(
      "",
      ...ngDevMode ? [{ debugName: "serverError" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.autoAccept = input(
      false,
      ...ngDevMode ? [{ debugName: "autoAccept" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.domainSet = output();
    this.email = signal(
      getNativeEmail() ?? "",
      ...ngDevMode ? [{ debugName: "email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.server_address = signal(
      getNativeDomain() ?? "",
      ...ngDevMode ? [{ debugName: "server_address" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.api_key = signal(
      getNativeApiKey() ?? "",
      ...ngDevMode ? [{ debugName: "api_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.manual_entry = signal(
      !!getNativeDomain(),
      ...ngDevMode ? [{ debugName: "manual_entry" }] : (
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
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.auto_accept_in = signal(
      0,
      ...ngDevMode ? [{ debugName: "auto_accept_in" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._auto_accept_timer = null;
    effect(() => {
      const msg = this.serverError();
      if (msg) {
        this.error.set(msg);
        untracked(() => this.stopAutoAccept());
      }
    });
    effect(() => {
      if (this.autoAccept() && untracked(this.server_address)) {
        untracked(() => this.startAutoAccept());
      }
    });
  }
  ngOnDestroy() {
    this.stopAutoAccept();
  }
  /** Restart the inactivity countdown — any user activity delays it. */
  resetAutoAccept() {
    if (!this._auto_accept_timer)
      return;
    this.auto_accept_in.set(AUTO_ACCEPT_SECONDS);
  }
  startAutoAccept() {
    this.auto_accept_in.set(AUTO_ACCEPT_SECONDS);
    if (this._auto_accept_timer)
      return;
    this._auto_accept_timer = setInterval(() => {
      const remaining = this.auto_accept_in() - 1;
      this.auto_accept_in.set(remaining);
      if (remaining > 0)
        return;
      this.stopAutoAccept();
      this.submit();
    }, 1e3);
  }
  stopAutoAccept() {
    if (this._auto_accept_timer)
      clearInterval(this._auto_accept_timer);
    this._auto_accept_timer = null;
    this.auto_accept_in.set(0);
  }
  toggleManualEntry() {
    if (this.loading())
      return;
    this.manual_entry.update((manual) => !manual);
    this.error.set("");
  }
  async submit() {
    if (this.loading())
      return;
    this.stopAutoAccept();
    if (this.manual_entry())
      return this.submitManual();
    const raw = this.email().trim();
    if (!raw) {
      this.error.set("A work email is required.");
      return;
    }
    this.loading.set(true);
    this.error.set("");
    try {
      const domain = await lookupNativeDomainByEmail(raw);
      setNativeEmail(raw);
      setNativeDomain(domain);
      setNativeApiKey("");
      this.domainSet.emit(domain);
    } catch {
      this.error.set("Unable to find a server for this email address.");
    } finally {
      this.loading.set(false);
    }
  }
  submitManual() {
    const domain = normaliseNativeDomain(this.server_address());
    if (!domain) {
      this.error.set("A valid server address is required.");
      return;
    }
    this.error.set("");
    setNativeDomain(domain);
    setNativeApiKey(this.api_key());
    this.domainSet.emit(domain);
  }
  static {
    this.\u0275fac = function NativeDomainOverlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NativeDomainOverlayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NativeDomainOverlayComponent, selectors: [["native-domain-overlay"]], hostBindings: function NativeDomainOverlayComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("pointerdown", function NativeDomainOverlayComponent_pointerdown_HostBindingHandler() {
          return ctx.resetAutoAccept();
        }, \u0275\u0275resolveWindow)("keydown", function NativeDomainOverlayComponent_keydown_HostBindingHandler() {
          return ctx.resetAutoAccept();
        }, \u0275\u0275resolveWindow);
      }
    }, inputs: { serverError: [1, "serverError"], autoAccept: [1, "autoAccept"] }, outputs: { domainSet: "domainSet" }, decls: 19, vars: 8, consts: [[1, "bg-base-200", "pointer-events-auto", "fixed", "inset-0", "z-9999", "flex", "items-center", "justify-center", "p-4"], [1, "border-base-300", "bg-base-100", "flex", "w-full", "max-w-md", "flex-col", "rounded-sm", "border", "shadow-sm", 3, "ngSubmit"], [1, "bg-base-200", "m-2", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "flex-col", "space-y-4", "p-4"], [1, "text-sm", "opacity-60"], [1, "bg-error/10", "text-error", "rounded-sm", "px-3", "py-2", "text-xs"], [1, "bg-info/10", "text-info", "rounded-sm", "px-3", "py-2", "text-xs"], [1, "flex", "w-full", "flex-col"], ["type", "button", 1, "self-start", "text-sm", "underline", "opacity-60", 3, "click", "disabled"], [1, "bg-base-200", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "type", "submit", 1, "flex-1", 3, "disabled"], ["for", "server-address"], ["appearance", "outline", 1, "w-full"], ["matPrefix", ""], ["matInput", "", "name", "server-address", "placeholder", "placeos.company.com", "type", "text", "autocapitalize", "off", "autocomplete", "url", "spellcheck", "false", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["for", "api-key"], ["matInput", "", "name", "api-key", "placeholder", "Leave empty to sign in", "type", "password", "autocapitalize", "off", "autocomplete", "off", "spellcheck", "false", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-xs", "opacity-60"], ["for", "email"], ["matInput", "", "name", "email", "placeholder", "name@company.com", "type", "email", "autocapitalize", "off", "autocomplete", "email", "spellcheck", "false", "required", "", 3, "ngModelChange", "ngModel", "disabled"]], template: function NativeDomainOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
        \u0275\u0275listener("ngSubmit", function NativeDomainOverlayComponent_Template_form_ngSubmit_1_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(2, "header", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Connect to Server");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "main", 4)(6, "p", 5);
        \u0275\u0275conditionalCreate(7, NativeDomainOverlayComponent_Conditional_7_Template, 1, 0)(8, NativeDomainOverlayComponent_Conditional_8_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, NativeDomainOverlayComponent_Conditional_9_Template, 2, 1, "p", 6);
        \u0275\u0275conditionalCreate(10, NativeDomainOverlayComponent_Conditional_10_Template, 2, 1, "p", 7);
        \u0275\u0275conditionalCreate(11, NativeDomainOverlayComponent_Conditional_11_Template, 16, 4)(12, NativeDomainOverlayComponent_Conditional_12_Template, 7, 2, "div", 8);
        \u0275\u0275elementStart(13, "button", 9);
        \u0275\u0275listener("click", function NativeDomainOverlayComponent_Template_button_click_13_listener() {
          return ctx.toggleManualEntry();
        });
        \u0275\u0275conditionalCreate(14, NativeDomainOverlayComponent_Conditional_14_Template, 1, 0)(15, NativeDomainOverlayComponent_Conditional_15_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "footer", 10)(17, "button", 11);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.manual_entry() ? 7 : 8);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.auto_accept_in() > 0 ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.manual_entry() ? 11 : 12);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.manual_entry() ? 14 : 15);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Looking up..." : "Connect", " ");
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      NgModel,
      NgForm,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDomainOverlayComponent, [{
    type: Component,
    args: [{
      selector: "native-domain-overlay",
      template: `
        <div
            class="bg-base-200 pointer-events-auto fixed inset-0 z-9999 flex items-center justify-center p-4"
        >
            <form
                class="border-base-300 bg-base-100 flex w-full max-w-md flex-col rounded-sm border shadow-sm"
                (ngSubmit)="submit()"
            >
                <header class="bg-base-200 m-2 rounded-sm border-none p-2">
                    <h2 class="px-2 text-xl font-medium">Connect to Server</h2>
                </header>
                <main class="flex flex-col space-y-4 p-4">
                    <p class="text-sm opacity-60">
                        @if (manual_entry()) {
                            Enter the address of your PlaceOS server to connect
                            this app.
                        } @else {
                            Enter your work email to find your PlaceOS server
                            and connect this app.
                        }
                    </p>
                    @if (error()) {
                        <p
                            class="bg-error/10 text-error rounded-sm px-3 py-2 text-xs"
                        >
                            {{ error() }}
                        </p>
                    }
                    @if (auto_accept_in() > 0) {
                        <p
                            class="bg-info/10 text-info rounded-sm px-3 py-2 text-xs"
                        >
                            Settings provided by your administrator will be
                            applied automatically in {{ auto_accept_in() }}s.
                        </p>
                    }
                    @if (manual_entry()) {
                        <div class="flex w-full flex-col">
                            <label for="server-address">Server Address</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <icon matPrefix>dns</icon>
                                <input
                                    matInput
                                    name="server-address"
                                    [(ngModel)]="server_address"
                                    placeholder="placeos.company.com"
                                    type="text"
                                    autocapitalize="off"
                                    autocomplete="url"
                                    spellcheck="false"
                                    required
                                    [disabled]="loading()"
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex w-full flex-col">
                            <label for="api-key">API Key (optional)</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <icon matPrefix>key</icon>
                                <input
                                    matInput
                                    name="api-key"
                                    [(ngModel)]="api_key"
                                    placeholder="Leave empty to sign in"
                                    type="password"
                                    autocapitalize="off"
                                    autocomplete="off"
                                    spellcheck="false"
                                    [disabled]="loading()"
                                />
                            </mat-form-field>
                            <p class="text-xs opacity-60">
                                When set, the app authenticates with this key
                                instead of asking you to sign in.
                            </p>
                        </div>
                    } @else {
                        <div class="flex w-full flex-col">
                            <label for="email">Work Email</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <icon matPrefix>mail</icon>
                                <input
                                    matInput
                                    name="email"
                                    [(ngModel)]="email"
                                    placeholder="name@company.com"
                                    type="email"
                                    autocapitalize="off"
                                    autocomplete="email"
                                    spellcheck="false"
                                    required
                                    [disabled]="loading()"
                                />
                            </mat-form-field>
                        </div>
                    }
                    <button
                        type="button"
                        class="self-start text-sm underline opacity-60"
                        [disabled]="loading()"
                        (click)="toggleManualEntry()"
                    >
                        @if (manual_entry()) {
                            Find my server using my work email
                        } @else {
                            Enter a server address manually
                        }
                    </button>
                </main>
                <footer
                    class="bg-base-200 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
                >
                    <button
                        btn
                        matRipple
                        type="submit"
                        class="flex-1"
                        [disabled]="loading()"
                    >
                        {{ loading() ? 'Looking up...' : 'Connect' }}
                    </button>
                </footer>
            </form>
        </div>
    `,
      imports: [
        FormsModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule
      ],
      host: {
        "(window:pointerdown)": "resetAutoAccept()",
        "(window:keydown)": "resetAutoAccept()"
      }
    }]
  }], () => [], { serverError: [{ type: Input, args: [{ isSignal: true, alias: "serverError", required: false }] }], autoAccept: [{ type: Input, args: [{ isSignal: true, alias: "autoAccept", required: false }] }], domainSet: [{ type: Output, args: ["domainSet"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NativeDomainOverlayComponent, { className: "NativeDomainOverlayComponent", filePath: "libs/components/src/lib/native-domain-overlay.component.ts", lineNumber: 169 });
})();

// libs/components/src/lib/service-worker-update-card.component.ts
function ServiceWorkerUpdateCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 4);
    \u0275\u0275listener("click", function ServiceWorkerUpdateCardComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reloadApp());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "refresh");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const update_state_r3 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", update_state_r3.message || "Update available", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", update_state_r3.details || "Refresh the page to get the new version of the application", " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", update_state_r3.action || "Reload App");
  }
}
var ServiceWorkerUpdateCardComponent = class _ServiceWorkerUpdateCardComponent {
  constructor() {
    this.update = serviceWorkerUpdate();
  }
  reloadApp() {
    location.reload();
  }
  static {
    this.\u0275fac = function ServiceWorkerUpdateCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServiceWorkerUpdateCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceWorkerUpdateCardComponent, selectors: [["placeos-service-worker-update-card"]], decls: 1, vars: 1, consts: [["role", "status", "aria-live", "assertive", 1, "border-base-300", "bg-base-100", "text-base-content", "pointer-events-auto", "fixed", "right-4", "bottom-4", "z-9999", "flex", "w-[20rem]", "max-w-[calc(100vw-2rem)]", "items-center", "gap-3", "rounded-lg", "border", "p-4", "shadow-xl"], [1, "min-w-0", "flex-1"], [1, "m-0", "text-sm", "leading-tight", "font-medium"], [1, "m-0", "mt-1", "text-xs", "opacity-70"], ["icon", "", "default", "", 3, "click", "matTooltip"]], template: function ServiceWorkerUpdateCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ServiceWorkerUpdateCardComponent_Conditional_0_Template, 9, 3, "aside", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.update()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [IconComponent, MatTooltipModule, MatTooltip], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerUpdateCardComponent, [{
    type: Component,
    args: [{
      selector: "placeos-service-worker-update-card",
      template: `
        @if (update(); as update_state) {
            <aside
                role="status"
                aria-live="assertive"
                class="border-base-300 bg-base-100 text-base-content pointer-events-auto fixed right-4 bottom-4 z-9999 flex w-[20rem] max-w-[calc(100vw-2rem)] items-center gap-3 rounded-lg border p-4 shadow-xl"
            >
                <div class="min-w-0 flex-1">
                    <h2 class="m-0 text-sm leading-tight font-medium">
                        {{ update_state.message || 'Update available' }}
                    </h2>
                    <p class="m-0 mt-1 text-xs opacity-70">
                        {{
                            update_state.details ||
                                'Refresh the page to get the new version of the application'
                        }}
                    </p>
                </div>
                <button
                    icon
                    default
                    [matTooltip]="update_state.action || 'Reload App'"
                    (click)="reloadApp()"
                >
                    <icon>refresh</icon>
                </button>
            </aside>
        }
    `,
      imports: [IconComponent, MatTooltipModule]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceWorkerUpdateCardComponent, { className: "ServiceWorkerUpdateCardComponent", filePath: "libs/components/src/lib/service-worker-update-card.component.ts", lineNumber: 40 });
})();

// libs/components/src/lib/global-loading.component.ts
function GlobalLoadingComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "native-domain-overlay", 3);
    \u0275\u0275listener("domainSet", function GlobalLoadingComponent_Conditional_0_Template_native_domain_overlay_domainSet_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDomainSet());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("serverError", ctx_r1.domain_error())("autoAccept", ctx_r1.auto_confirm());
  }
}
function GlobalLoadingComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SERVER_DOWN"), " ");
  }
}
function GlobalLoadingComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275element(5, "mat-progress-bar", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.message());
  }
}
var GlobalLoadingComponent = class _GlobalLoadingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._placeos = inject(PlaceOS_Service);
    this._settings = inject(SettingsService);
    this.loading = signal(
      true,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.online = signal(
      true,
      ...ngDevMode ? [{ debugName: "online" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.message = getLoadingMessage();
    this.show_domain_overlay = needsNativeDomain();
    this.domain_error = nativeDomainError();
    this.auto_confirm = autoConfirmNativeDomain();
  }
  onDomainSet() {
    this._placeos.onNativeDomainSet();
  }
  async ngOnInit() {
    this.loading.set(true);
    await this._org.waitUntilInitialised();
    await firstTruthyValueFrom(this._settings.initialised);
    this.online.set(Fr());
    this.interval("has_token", () => {
      this.online.set(Fr());
      if (!Rt() || !X())
        return;
      this.loading.set(false);
      this.online.set(Fr());
      this.clearInterval("has_token");
    }, 1e3);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275GlobalLoadingComponent_BaseFactory;
      return function GlobalLoadingComponent_Factory(__ngFactoryType__) {
        return (\u0275GlobalLoadingComponent_BaseFactory || (\u0275GlobalLoadingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GlobalLoadingComponent)))(__ngFactoryType__ || _GlobalLoadingComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalLoadingComponent, selectors: [["global-loading"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 3, consts: [[3, "serverError", "autoAccept"], [1, "bg-error", "fixed", "top-2", "left-1/2", "z-9999", "-translate-x-1/2", "rounded-3xl", "px-4", "py-2", "text-xs", "text-white", "shadow-sm"], ["loader", "", 1, "bg-base-300", "pointer-events-auto", "fixed", "inset-0", "z-9998", "flex", "flex-col", "items-center", "justify-end", "space-y-2", "p-4"], [3, "domainSet", "serverError", "autoAccept"], [1, "border-base-300", "bg-base-100", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "rounded-lg", "border", "p-2", "text-center", "text-xs", "shadow-sm"], [1, "text-center", "font-mono"], [1, "border-base-300", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "overflow-hidden", "rounded-full", "border", "shadow-sm"], ["mode", "indeterminate", 1, "scale-150", "rounded-sm"]], template: function GlobalLoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, GlobalLoadingComponent_Conditional_0_Template, 1, 2, "native-domain-overlay", 0);
        \u0275\u0275conditionalCreate(1, GlobalLoadingComponent_Conditional_1_Template, 3, 3, "div", 1);
        \u0275\u0275conditionalCreate(2, GlobalLoadingComponent_Conditional_2_Template, 6, 1, "div", 2);
        \u0275\u0275element(3, "placeos-service-worker-update-card");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show_domain_overlay() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.online() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 2 : -1);
      }
    }, dependencies: [
      MatProgressBarModule,
      MatProgressBar,
      NativeDomainOverlayComponent,
      ServiceWorkerUpdateCardComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  pointer-events: none;\n}\n[loader][_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #f9a825 0%,\n      #fdd835 100%);\n}\n/*# sourceMappingURL=global-loading.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalLoadingComponent, [{
    type: Component,
    args: [{ selector: "global-loading", template: `
        @if (show_domain_overlay()) {
            <native-domain-overlay
                [serverError]="domain_error()"
                [autoAccept]="auto_confirm()"
                (domainSet)="onDomainSet()"
            ></native-domain-overlay>
        }
        @if (!online()) {
            <div
                class="bg-error fixed top-2 left-1/2 z-9999 -translate-x-1/2 rounded-3xl px-4 py-2 text-xs text-white shadow-sm"
            >
                {{ 'COMMON.SERVER_DOWN' | translate }}
            </div>
        }
        @if (loading()) {
            <div
                loader
                class="bg-base-300 pointer-events-auto fixed inset-0 z-9998 flex flex-col items-center justify-end space-y-2 p-4"
            >
                <div
                    class="border-base-300 bg-base-100 w-[24rem] max-w-[calc(100vw-2rem)] rounded-lg border p-2 text-center text-xs shadow-sm"
                >
                    <p class="text-center font-mono">{{ message() }}</p>
                </div>
                <div
                    class="border-base-300 w-[24rem] max-w-[calc(100vw-2rem)] overflow-hidden rounded-full border shadow-sm"
                >
                    <mat-progress-bar
                        mode="indeterminate"
                        class="scale-150 rounded-sm"
                    ></mat-progress-bar>
                </div>
            </div>
        }
        <placeos-service-worker-update-card />
    `, imports: [
      MatProgressBarModule,
      NativeDomainOverlayComponent,
      ServiceWorkerUpdateCardComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;f96722131b020a13ff012b787cd51bd578e7478e8507e3110ee0014c8bb70e6e;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/global-loading.component.ts */\n:host {\n  pointer-events: none;\n}\n[loader] {\n  background-image:\n    linear-gradient(\n      to right,\n      #f9a825 0%,\n      #fdd835 100%);\n}\n/*# sourceMappingURL=global-loading.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalLoadingComponent, { className: "GlobalLoadingComponent", filePath: "libs/components/src/lib/global-loading.component.ts", lineNumber: 81 });
})();

// libs/components/src/lib/settings-debug-panel.component.ts
var _c02 = (a0) => ({ zones: a0 });
var _forTrack0 = ($index, $item) => $item.type + $item.id;
function SettingsDebugPanelComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearAll());
    });
    \u0275\u0275text(1, " Clear all overrides ");
    \u0275\u0275elementEnd();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r5.overridden, " overridden ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_0_Template_button_click_0_listener() {
      const group_r5 = \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleGroup(group_r5.name));
    });
    \u0275\u0275elementStart(1, "icon", 19);
    \u0275\u0275text(2, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_0_Conditional_7_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-90", ctx_r2.filter() || ctx_r2.expanded()[group_r5.name]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" (", group_r5.count, ") ");
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r5.overridden ? 7 : -1);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext();
    \u0275\u0275property("title", row_r6.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.description, " ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("value", option_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r8, " ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_9_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.edit_value, $event) || (ctx_r2.edit_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.escape", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_9_Template_select_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.editing_key.set(""));
    });
    \u0275\u0275repeaterCreate(1, SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_9_For_2_Template, 2, 2, "option", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "button", 32);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.saveEdit());
    });
    \u0275\u0275elementStart(4, "icon", 33);
    \u0275\u0275text(5, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.edit_value);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r6.options);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.edit_value, $event) || (ctx_r2.edit_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_10_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.saveEdit());
    })("keydown.escape", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_10_Template_input_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.editing_key.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(1, "button", 32);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.saveEdit());
    });
    \u0275\u0275elementStart(2, "icon", 33);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.edit_value);
    \u0275\u0275control();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_11_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.edit_value, $event) || (ctx_r2.edit_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_11_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.saveEdit());
    })("keydown.escape", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_11_Template_input_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.editing_key.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(1, "button", 32);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.saveEdit());
    });
    \u0275\u0275elementStart(2, "icon", 33);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.edit_value);
    \u0275\u0275control();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "button", 39);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_12_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const row_r6 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleValue(row_r6));
    });
    \u0275\u0275element(2, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", row_r6.value)("bg-base-300", !row_r6.value);
    \u0275\u0275property("title", row_r6.display);
    \u0275\u0275advance();
    \u0275\u0275classProp("translate-x-4", row_r6.value);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_12_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r6 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startEdit(row_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(row_r6.display ? "opacity-80" : "italic opacity-40");
    \u0275\u0275property("title", row_r6.display || "unset");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.display || "unset", " ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_12_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const row_r6 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clearOverride(row_r6.key));
    });
    \u0275\u0275elementStart(1, "icon", 33);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd()();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_12_Conditional_0_Template, 3, 7, "div", 36)(1, SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_12_Conditional_1_Template, 2, 4, "div", 37);
    \u0275\u0275conditionalCreate(2, SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_12_Conditional_2_Template, 3, 0, "button", 38);
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext();
    \u0275\u0275conditional(row_r6.control === "toggle" ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r6.overridden ? 2 : -1);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 27)(6, "icon", 28);
    \u0275\u0275text(7, "info");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Conditional_8_Template, 2, 2, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_9_Template, 6, 1)(10, SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_10_Template, 4, 1)(11, SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_11_Template, 4, 1)(12, SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Case_12_Template, 3, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_24_0;
    const row_r6 = ctx;
    const entry_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    const zone_tooltip_r15 = \u0275\u0275reference(2);
    \u0275\u0275classProp("pl-8", entry_r14.grouped)("pl-2", !entry_r14.grouped)("bg-warning-light", row_r6.overridden);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", row_r6.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("content", zone_tooltip_r15)("data", \u0275\u0275pureFunction1(14, _c02, row_r6.zones))("hover", true)("backdrop", false)("xOffset", 20);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(row_r6.description ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_24_0 = ctx_r2.editing_key() === row_r6.key ? row_r6.control : "") === "select" ? 9 : tmp_24_0 === "number" ? 10 : tmp_24_0 === "text" ? 11 : 12);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_0_Template, 8, 5, "button", 16);
    \u0275\u0275conditionalCreate(1, SettingsDebugPanelComponent_Conditional_0_For_17_Conditional_1_Template, 13, 16, "div", 17);
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    const entry_r14 = ctx.$implicit;
    \u0275\u0275conditional((tmp_12_0 = entry_r14.header) ? 0 : -1, tmp_12_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_13_0 = entry_r14.row) ? 1 : -1, tmp_13_0);
  }
}
function SettingsDebugPanelComponent_Conditional_0_ForEmpty_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " No matching settings ");
    \u0275\u0275elementEnd();
  }
}
function SettingsDebugPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275text(4, "Settings Viewer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275conditionalCreate(6, SettingsDebugPanelComponent_Conditional_0_Conditional_6_Template, 2, 0, "button", 6);
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show.set(false));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filter, $event) || (ctx_r2.filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(13, "icon", 11);
    \u0275\u0275text(14, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275repeaterCreate(16, SettingsDebugPanelComponent_Conditional_0_For_17_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIndex, false, SettingsDebugPanelComponent_Conditional_0_ForEmpty_18_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 14);
    \u0275\u0275text(20, " Click a value to override it. Text values are parsed as JSON, falling back to plain strings. Overrides are stored locally in this browser. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.has_overrides() ? 6 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filter);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.entries());
  }
}
function SettingsDebugPanelComponent_ng_template_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 48)(2, "div", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const zone_r16 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", zone_r16.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", zone_r16.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", zone_r16.type, " ");
  }
}
function SettingsDebugPanelComponent_ng_template_1_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1, " No zone metadata value ");
    \u0275\u0275elementEnd();
  }
}
function SettingsDebugPanelComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275text(2, " Setting sources ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45);
    \u0275\u0275repeaterCreate(4, SettingsDebugPanelComponent_ng_template_1_For_5_Template, 8, 3, "div", 46, _forTrack0, false, SettingsDebugPanelComponent_ng_template_1_ForEmpty_6_Template, 2, 0, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const zones_r17 = ctx.zones;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(zones_r17);
  }
}
function flattenKeys(map, prefix, keys) {
  for (const key in map) {
    const full_key = prefix ? `${prefix}.${key}` : key;
    const value = map[key];
    if (value && typeof value === "object" && !Array.isArray(value)) {
      flattenKeys(value, full_key, keys);
    } else
      keys.add(full_key);
  }
}
function hasSetting(map, key) {
  let value = map;
  for (const part of key.slice(4).split("."))
    value = value?.[part];
  return value != null;
}
function resolveRef(root, node) {
  const ref = node?.["$ref"];
  if (!ref?.startsWith("#/"))
    return node;
  let target = root;
  for (const part of ref.slice(2).split("/"))
    target = target?.[part];
  return target || node;
}
function schemaNode(root, key) {
  if (!root || !key.startsWith("app."))
    return null;
  let node = root;
  for (const part of key.slice(4).split(".")) {
    node = resolveRef(root, node)?.properties?.[part];
    if (!node)
      return null;
  }
  return resolveRef(root, node);
}
function flattenSchemaKeys(root, node, prefix, keys, depth = 0) {
  if (depth > 8)
    return;
  node = resolveRef(root, node);
  if (!node?.properties) {
    if (prefix)
      keys.add(prefix);
    return;
  }
  for (const key in node.properties) {
    flattenSchemaKeys(root, node.properties[key], prefix ? `${prefix}.${key}` : key, keys, depth + 1);
  }
}
var SettingsDebugPanelComponent = class _SettingsDebugPanelComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._hotkey = inject(HotkeysService);
    this._org = inject(OrganisationService);
    this.schema = input(
      null,
      ...ngDevMode ? [{ debugName: "schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show = signal(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.editing_key = signal(
      "",
      ...ngDevMode ? [{ debugName: "editing_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.expanded = signal(
      {},
      ...ngDevMode ? [{ debugName: "expanded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edit_value = "";
    this.has_overrides = computed(
      () => Object.keys(this._settings.debug_overrides()).length > 0,
      ...ngDevMode ? [{ debugName: "has_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rows = computed(
      () => {
        const schema = this.schema();
        const debug_overrides = this._settings.debug_overrides();
        const keys = /* @__PURE__ */ new Set();
        flattenKeys({ app: DEFAULT_SETTINGS.app }, "", keys);
        for (const layer of this._settings.overrides()) {
          flattenKeys({ app: layer }, "", keys);
        }
        if (schema)
          flattenSchemaKeys(schema, schema, "app", keys);
        for (const key in debug_overrides)
          keys.add(key);
        const search = this.filter().toLowerCase();
        return [...keys].filter((key) => key.slice(4).toLowerCase().includes(search)).sort().map((key) => {
          const node = schemaNode(schema, key);
          const value = this._settings.get(key);
          let control = "text";
          if (node?.enum?.length)
            control = "select";
          else if (node?.type === "boolean" || typeof value === "boolean") {
            control = "toggle";
          } else if (node?.type === "number" || node?.type === "integer" || typeof value === "number") {
            control = "number";
          }
          return {
            key,
            label: key.slice(4),
            value,
            display: JSON.stringify(value) ?? "",
            overridden: key in debug_overrides,
            description: node?.description || "",
            zones: this._zoneTooltip(key),
            control,
            options: node?.enum
          };
        });
      },
      ...ngDevMode ? [{ debugName: "rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.entries = computed(
      () => {
        const show_all = !!this.filter();
        const expanded = this.expanded();
        const entries = [];
        let header = null;
        for (const row of this.rows()) {
          const index = row.label.indexOf(".");
          if (index < 0) {
            header = null;
            entries.push({ row });
            continue;
          }
          const group = row.label.slice(0, index);
          if (!header || header.name !== group) {
            header = { name: group, count: 0, overridden: 0 };
            entries.push({ header });
          }
          header.count += 1;
          if (row.overridden)
            header.overridden += 1;
          if (show_all || expanded[group]) {
            entries.push({
              row: __spreadProps(__spreadValues({}, row), { label: row.label.slice(index + 1) }),
              grouped: true
            });
          }
        }
        return entries;
      },
      ...ngDevMode ? [{ debugName: "entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  _zoneTooltip(key) {
    const zones = [];
    const add_zone = (type2, id, name, settings) => {
      if (!id || !settings.some((_) => hasSetting(_, key)))
        return;
      zones.push({ type: type2, id, name: name || id });
    };
    for (const [id, settings] of Object.entries(this._org.building_settings)) {
      const building = this._org.buildings.find((_) => _.id === id);
      add_zone("Building", id, building?.display_name || building?.name || "", [settings]);
    }
    for (const [id, settings] of Object.entries(this._org.region_settings)) {
      const region = this._org.regions.find((_) => _.id === id);
      add_zone("Region", id, region?.display_name || region?.name || "", [settings]);
    }
    const organisation = this._org.organisation;
    add_zone("ORG", organisation.id, organisation.name, this._org.settings);
    return zones;
  }
  toggleGroup(name) {
    this.expanded.update((state) => __spreadProps(__spreadValues({}, state), { [name]: !state[name] }));
  }
  ngOnInit() {
    this.subscription("toggle", this._hotkey.listen(["Control", "Alt", "Shift", "KeyS"], () => this.show.set(!this.show())));
  }
  startEdit(row) {
    this.editing_key.set(row.key);
    this.edit_value = row.control === "text" ? row.display : `${row.value ?? ""}`;
  }
  toggleValue(row) {
    this._settings.setDebugOverride(row.key, !row.value);
  }
  saveEdit() {
    const key = this.editing_key();
    const row = this.rows().find((_) => _.key === key);
    if (!row)
      return;
    let value = this.edit_value;
    if (row.control === "number") {
      value = parseFloat(this.edit_value);
      if (isNaN(value))
        return;
    } else if (row.control === "text") {
      try {
        value = JSON.parse(this.edit_value);
      } catch {
      }
    }
    this._settings.setDebugOverride(key, value);
    this.editing_key.set("");
  }
  clearOverride(key) {
    this._settings.setDebugOverride(key, void 0);
  }
  clearAll() {
    this._settings.clearDebugOverrides();
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SettingsDebugPanelComponent_BaseFactory;
      return function SettingsDebugPanelComponent_Factory(__ngFactoryType__) {
        return (\u0275SettingsDebugPanelComponent_BaseFactory || (\u0275SettingsDebugPanelComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SettingsDebugPanelComponent)))(__ngFactoryType__ || _SettingsDebugPanelComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsDebugPanelComponent, selectors: [["settings-debug-panel"]], inputs: { schema: [1, "schema"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 1, consts: [["zone_tooltip", ""], [1, "fixed", "bottom-2", "left-2", "z-998", "w-160", "max-w-[90vw]"], [1, "flex", "flex-col", "gap-2"], [1, "-mb-2", "border-base-300", "bg-base-100", "text-base-content", "flex", "w-[calc(100%-0.5rem)]", "mx-1", "items-center", "overflow-hidden", "rounded-b-lg", "rounded-t-xl", "border", "p-1", "shadow-sm"], [1, "flex-1", "px-3", "font-medium"], [1, "flex", "items-center"], ["matRipple", "", 1, "text-error", "px-2", "py-1", "text-xs", "underline"], ["icon", "", "default", "", "matRipple", "", 1, "text-sm", 3, "click"], [1, "border-base-300", "bg-base-200", "text-base-content", "flex", "h-120", "flex-col", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "pt-2"], [1, "relative", "m-1", "flex"], ["name", "setting-filter", "placeholder", "Filter settings...", 1, "border-base-300", "bg-base-100", "w-full", "rounded-lg", "border", "px-8", "py-2", "pr-2", "font-mono", "text-sm", "shadow", 3, "ngModelChange", "ngModel"], [1, "absolute", "top-1/2", "left-1", "-translate-y-1/2", "text-xl"], [1, "flex-1", "overflow-auto"], [1, "p-4", "text-center", "opacity-30"], [1, "border-base-300", "bg-base-100", "border-t", "p-2", "text-xs", "opacity-60"], ["matRipple", "", 1, "text-error", "px-2", "py-1", "text-xs", "underline", 3, "click"], [1, "border-base-300", "bg-base-100/50", "hover:bg-base-100", "flex", "min-h-8", "w-full", "items-center", "gap-1", "border-b", "px-2", "py-1", "text-left", "text-xs"], [1, "border-base-300", "flex", "min-h-8", "items-center", "border-b", "py-1", "pr-2", "text-xs", 3, "pl-8", "pl-2", "bg-warning-light"], [1, "border-base-300", "bg-base-100/50", "hover:bg-base-100", "flex", "min-h-8", "w-full", "items-center", "gap-1", "border-b", "px-2", "py-1", "text-left", "text-xs", 3, "click"], [1, "text-sm", "transition-transform"], [1, "font-mono"], [1, "opacity-40"], [1, "bg-warning-light", "rounded-sm", "px-1", "text-[0.65rem]", "text-black"], [1, "border-base-300", "flex", "min-h-8", "items-center", "border-b", "py-1", "pr-2", "text-xs"], [1, "w-3/5", "min-w-0", "pr-2"], [1, "flex", "min-w-0", "items-center", "gap-1", "font-mono"], [1, "truncate"], ["customTooltip", "", "xPosition", "start", "yPosition", "center", 1, "shrink-0", 3, "content", "data", "hover", "backdrop", "xOffset"], [1, "text-sm", "opacity-60"], [1, "truncate", "text-[0.65rem]", "opacity-60", 3, "title"], ["name", "setting-value", 1, "bg-base-100", "flex-1", "rounded-sm", "border", "px-1", "py-0.5", "font-mono", 3, "ngModelChange", "keydown.escape", "ngModel"], [3, "value"], ["icon", "", "matRipple", "", "title", "Save override", 3, "click"], [1, "text-sm"], ["name", "setting-value", "type", "number", 1, "bg-base-100", "flex-1", "rounded-sm", "border", "px-1", "py-0.5", "font-mono", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], ["name", "setting-value", 1, "bg-base-100", "flex-1", "rounded-sm", "border", "px-1", "py-0.5", "font-mono", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], [1, "flex", "flex-1"], [1, "flex-1", "cursor-pointer", "truncate", "font-mono", 3, "class", "title"], ["icon", "", "matRipple", "", "title", "Clear override"], [1, "relative", "h-4", "w-8", "rounded-full", "transition-colors", 3, "click", "title"], [1, "absolute", "top-0.5", "left-0.5", "h-3", "w-3", "rounded-full", "bg-white", "shadow-sm", "transition-transform"], [1, "flex-1", "cursor-pointer", "truncate", "font-mono", 3, "click", "title"], ["icon", "", "matRipple", "", "title", "Clear override", 3, "click"], [1, "border-base-300", "bg-base-100", "text-base-content", "min-w-64", "rounded-lg", "border", "p-2", "shadow-lg"], [1, "border-base-300", "border-b", "px-1", "pb-2", "text-base", "font-medium"], [1, "flex", "flex-col", "gap-1", "pt-2"], [1, "bg-base-200", "flex", "items-start", "gap-2", "rounded-sm", "p-2"], [1, "px-1", "py-2", "text-xs", "opacity-60"], [1, "min-w-0", "flex-1", "w-1/2"], [1, "truncate", "text-base", "font-medium"], [1, "truncate", "font-mono", "text-[0.625rem]", "opacity-60"], [1, "bg-base-300", "rounded-sm", "px-1.5", "py-0.5", "text-[0.625rem]", "font-medium"]], template: function SettingsDebugPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SettingsDebugPanelComponent_Conditional_0_Template, 21, 3, "div", 1);
        \u0275\u0275template(1, SettingsDebugPanelComponent_ng_template_1_Template, 7, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show() ? 0 : -1);
      }
    }, dependencies: [
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      CustomTooltipComponent,
      IconComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsDebugPanelComponent, [{
    type: Component,
    args: [{
      selector: "settings-debug-panel",
      template: `
        @if (show()) {
            <div class=" fixed bottom-2 left-2 z-998 w-160 max-w-[90vw]">
            <div class="flex flex-col gap-2">
                <div
                    class="-mb-2 border-base-300 bg-base-100 text-base-content flex w-[calc(100%-0.5rem)] mx-1 items-center overflow-hidden rounded-b-lg rounded-t-xl border p-1 shadow-sm"
                >
                    <div class="flex-1 px-3 font-medium">Settings Viewer</div>
                    <div class="flex items-center">
                        @if (has_overrides()) {
                            <button
                                matRipple
                                class="text-error px-2 py-1 text-xs underline"
                                (click)="clearAll()"
                            >
                                Clear all overrides
                            </button>
                        }
                        <button
                            icon
                            default
                            matRipple
                            class="text-sm"
                            (click)="show.set(false)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="border-base-300 bg-base-200 text-base-content flex h-120 flex-col overflow-hidden rounded-xl border shadow-sm pt-2"
            >
                <div class="relative m-1 flex">
                    <input
                        name="setting-filter"
                        [(ngModel)]="filter"
                        placeholder="Filter settings..."
                        class="border-base-300 bg-base-100 w-full rounded-lg border px-8 py-2 pr-2 font-mono text-sm shadow"
                    />
                    <icon
                        class="absolute top-1/2 left-1 -translate-y-1/2 text-xl"
                        >search</icon
                    >
                </div>
                <div class="flex-1 overflow-auto">
                    @for (entry of entries(); track $index) {
                        @if (entry.header; as group) {
                            <button
                                class="border-base-300 bg-base-100/50 hover:bg-base-100 flex min-h-8 w-full items-center gap-1 border-b px-2 py-1 text-left text-xs"
                                (click)="toggleGroup(group.name)"
                            >
                                <icon
                                    class="text-sm transition-transform"
                                    [class.rotate-90]="
                                        filter() || expanded()[group.name]
                                    "
                                >
                                    chevron_right
                                </icon>
                                <span class="font-mono">{{ group.name }}</span>
                                <span class="opacity-40">
                                    ({{ group.count }})
                                </span>
                                @if (group.overridden) {
                                    <span
                                        class="bg-warning-light rounded-sm px-1 text-[0.65rem] text-black"
                                    >
                                        {{ group.overridden }} overridden
                                    </span>
                                }
                            </button>
                        }
                        @if (entry.row; as row) {
                            <div
                                class="border-base-300 flex min-h-8 items-center border-b py-1 pr-2 text-xs"
                                [class.pl-8]="entry.grouped"
                                [class.pl-2]="!entry.grouped"
                                [class.bg-warning-light]="row.overridden"
                            >
                                <div class="w-3/5 min-w-0 pr-2">
                                    <div
                                        class="flex min-w-0 items-center gap-1 font-mono"
                                    >
                                        <span class="truncate">
                                            {{ row.label }}
                                        </span>
                                        <span
                                            customTooltip
                                            class="shrink-0"
                                            [content]="zone_tooltip"
                                            [data]="{ zones: row.zones }"
                                            [hover]="true"
                                            [backdrop]="false"
                                            xPosition="start"
                                            yPosition="center"
                                            [xOffset]="20"
                                        >
                                            <icon class="text-sm opacity-60"
                                                >info</icon
                                            >
                                        </span>
                                    </div>
                                    @if (row.description) {
                                        <div
                                            class="truncate text-[0.65rem] opacity-60"
                                            [title]="row.description"
                                        >
                                            {{ row.description }}
                                        </div>
                                    }
                                </div>
                                @switch (
                                    editing_key() === row.key ? row.control : ''
                                ) {
                                    @case ('select') {
                                        <select
                                            name="setting-value"
                                            class="bg-base-100 flex-1 rounded-sm border px-1 py-0.5 font-mono"
                                            [(ngModel)]="edit_value"
                                            (keydown.escape)="
                                                editing_key.set('')
                                            "
                                        >
                                            @for (
                                                option of row.options;
                                                track option
                                            ) {
                                                <option [value]="option">
                                                    {{ option }}
                                                </option>
                                            }
                                        </select>
                                        <button
                                            icon
                                            matRipple
                                            title="Save override"
                                            (click)="saveEdit()"
                                        >
                                            <icon class="text-sm">check</icon>
                                        </button>
                                    }
                                    @case ('number') {
                                        <input
                                            name="setting-value"
                                            type="number"
                                            class="bg-base-100 flex-1 rounded-sm border px-1 py-0.5 font-mono"
                                            [(ngModel)]="edit_value"
                                            (keydown.enter)="saveEdit()"
                                            (keydown.escape)="
                                                editing_key.set('')
                                            "
                                        />
                                        <button
                                            icon
                                            matRipple
                                            title="Save override"
                                            (click)="saveEdit()"
                                        >
                                            <icon class="text-sm">check</icon>
                                        </button>
                                    }
                                    @case ('text') {
                                        <input
                                            name="setting-value"
                                            class="bg-base-100 flex-1 rounded-sm border px-1 py-0.5 font-mono"
                                            [(ngModel)]="edit_value"
                                            (keydown.enter)="saveEdit()"
                                            (keydown.escape)="
                                                editing_key.set('')
                                            "
                                        />
                                        <button
                                            icon
                                            matRipple
                                            title="Save override"
                                            (click)="saveEdit()"
                                        >
                                            <icon class="text-sm">check</icon>
                                        </button>
                                    }
                                    @default {
                                        @if (row.control === 'toggle') {
                                            <div class="flex flex-1">
                                                <button
                                                    class="relative h-4 w-8 rounded-full transition-colors"
                                                    [class.bg-info]="row.value"
                                                    [class.bg-base-300]="
                                                        !row.value
                                                    "
                                                    [title]="row.display"
                                                    (click)="toggleValue(row)"
                                                >
                                                    <div
                                                        class="absolute top-0.5 left-0.5 h-3 w-3 rounded-full bg-white shadow-sm transition-transform"
                                                        [class.translate-x-4]="
                                                            row.value
                                                        "
                                                    ></div>
                                                </button>
                                            </div>
                                        } @else {
                                            <div
                                                class="flex-1 cursor-pointer truncate font-mono"
                                                [class]="
                                                    row.display
                                                        ? 'opacity-80'
                                                        : 'italic opacity-40'
                                                "
                                                [title]="row.display || 'unset'"
                                                (click)="startEdit(row)"
                                            >
                                                {{ row.display || 'unset' }}
                                            </div>
                                        }
                                        @if (row.overridden) {
                                            <button
                                                icon
                                                matRipple
                                                title="Clear override"
                                                (click)="clearOverride(row.key)"
                                            >
                                                <icon class="text-sm"
                                                    >undo</icon
                                                >
                                            </button>
                                        }
                                    }
                                }
                            </div>
                        }
                    } @empty {
                        <div class="p-4 text-center opacity-30">
                            No matching settings
                        </div>
                    }
                </div>
                <div
                    class="border-base-300 bg-base-100 border-t p-2 text-xs opacity-60"
                >
                    Click a value to override it. Text values are parsed as
                    JSON, falling back to plain strings. Overrides are stored
                    locally in this browser.
                </div>
            </div>
            </div>
        }
        <ng-template #zone_tooltip let-zones="zones">
            <div
                class="border-base-300 bg-base-100 text-base-content min-w-64 rounded-lg border p-2 shadow-lg"
            >
                <div class="border-base-300 border-b px-1 pb-2 text-base font-medium">
                    Setting sources
                </div>
                <div class="flex flex-col gap-1 pt-2">
                    @for (zone of zones; track zone.type + zone.id) {
                        <div class="bg-base-200 flex items-start gap-2 rounded-sm p-2">
                            <div class="min-w-0 flex-1 w-1/2">
                                <div class="truncate text-base font-medium">
                                    {{ zone.name }}
                                </div>
                                <div class="truncate font-mono text-[0.625rem] opacity-60">
                                    {{ zone.id }}
                                </div>
                            </div>
                            <span
                                class="bg-base-300 rounded-sm px-1.5 py-0.5 text-[0.625rem] font-medium"
                            >
                                {{ zone.type }}
                            </span>
                        </div>
                    } @empty {
                        <div class="px-1 py-2 text-xs opacity-60">
                            No zone metadata value
                        </div>
                    }
                </div>
            </div>
        </ng-template>
    `,
      imports: [
        FormsModule,
        MatRippleModule,
        CustomTooltipComponent,
        IconComponent
      ]
    }]
  }], null, { schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsDebugPanelComponent, { className: "SettingsDebugPanelComponent", filePath: "libs/components/src/lib/settings-debug-panel.component.ts", lineNumber: 394 });
})();

// libs/components/src/lib/unauthorised.component.ts
var _c03 = () => ["/"];
var UnauthorisedComponent = class _UnauthorisedComponent {
  static {
    this.\u0275fac = function UnauthorisedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnauthorisedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorisedComponent, selectors: [["app-unauthorised"]], decls: 15, vars: 11, consts: [["unauthorised", "", 1, "absolute", "inset-0"], [1, "border-base-300", "bg-base-100", "text-base-content", "mx-auto", "my-4", "flex", "w-104", "max-w-[calc(100%-1rem)]", "flex-col", "gap-2", "rounded-xl", "border", "p-4", "text-center", "shadow-lg"], [1, "text-4xl"], [1, "py-4"], ["btn", "", 3, "routerLink"]], template: function UnauthorisedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "403");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h3");
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 4);
        \u0275\u0275text(14, "Try Again");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "COMMON.FORBIDDEN"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "COMMON.INVALID_PAGE_PERMISSIONS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "COMMON.CONTACT_ADMIN"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c03));
      }
    }, dependencies: [RouterLink, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[unauthorised][_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #c62828 0%,\n      #ef5350 100%);\n}\n/*# sourceMappingURL=unauthorised.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorisedComponent, [{
    type: Component,
    args: [{ selector: "app-unauthorised", template: `
        <div unauthorised class="absolute inset-0">
            <div
                class="border-base-300 bg-base-100 text-base-content mx-auto my-4 flex w-104 max-w-[calc(100%-1rem)] flex-col gap-2 rounded-xl border p-4 text-center shadow-lg"
            >
                <h1 class="text-4xl">403</h1>
                <h3>{{ 'COMMON.FORBIDDEN' | translate }}</h3>
                <p class="py-4">
                    {{ 'COMMON.INVALID_PAGE_PERMISSIONS' | translate }}
                </p>
                <p>
                    {{ 'COMMON.CONTACT_ADMIN' | translate }}
                </p>
                <a btn [routerLink]="['/']">Try Again</a>
            </div>
        </div>
    `, imports: [TranslatePipe, RouterLink], styles: ["/* angular:styles/component:css;9e56e45d1ecd17d612bec636f553ceddd9b98cd2552edbd57d59534065beeefe;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/unauthorised.component.ts */\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[unauthorised] {\n  background-image:\n    linear-gradient(\n      to right,\n      #c62828 0%,\n      #ef5350 100%);\n}\n/*# sourceMappingURL=unauthorised.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorisedComponent, { className: "UnauthorisedComponent", filePath: "libs/components/src/lib/unauthorised.component.ts", lineNumber: 43 });
})();

// libs/components/src/lib/authorised-user.guard.ts
var PLACEOS_APP_ACCESS = class {
};
var AuthorisedUserGuard = class _AuthorisedUserGuard {
  constructor() {
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._access = inject(PLACEOS_APP_ACCESS, { optional: true });
  }
  async canActivate(next, state) {
    return this.checkUser();
  }
  async canLoad(route, segments) {
    return this.checkUser();
  }
  async canActivateChild(next, state) {
    return this.checkUser();
  }
  async checkUser() {
    const groups = this._access?.group ? [this._access.group] : this._settings.get("app.allow_access_groups") || [];
    const use_group_subsystem_access = await this.useGroupSubsystemAccess();
    let can_activate = false;
    if (use_group_subsystem_access) {
      await oi(Lr(), Boolean);
      const user = await firstTruthyValueFrom(current_user);
      can_activate = await this.checkSubsystemAccess(user);
    } else if (!groups.length) {
      can_activate = true;
    } else {
      await oi(Lr(), Boolean);
      await this._org.waitUntilInitialised();
      const user = await firstTruthyValueFrom(current_user);
      can_activate = !!(user && groups.find((_) => user.groups.includes(_)));
    }
    if (!can_activate) {
      this._router.navigate(["/unauthorised"]);
    }
    return !!can_activate;
  }
  async useGroupSubsystemAccess() {
    const value = Rt()?.config?.["use_group_subsystem_access"];
    return value === true || value === "true";
  }
  async checkSubsystemAccess(user) {
    if (!user)
      return false;
    const app_name = `${this._settings.app_name || ""}`.trim().toLowerCase();
    if (!app_name)
      return false;
    await this.waitForUserGroups();
    return hasPermission(app_name, GroupPermission.Read);
  }
  async waitForUserGroups() {
    for (let i = 0; i < 50; i++) {
      if (user_groups_loaded())
        return;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  static {
    this.\u0275fac = function AuthorisedUserGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthorisedUserGuard)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthorisedUserGuard, factory: _AuthorisedUserGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthorisedUserGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/mocks/src/lib/api/common.mock.ts
var DOMAIN = "place.tech";

// libs/mocks/src/lib/api/users.data.ts
var REALISTIC_STAFF_PROFILES = [
  {
    first_name: "Sarah",
    last_name: "Chen",
    department: "Engineering",
    title: "Senior Software Engineer",
    location: "Sydney"
  },
  {
    first_name: "Michael",
    last_name: "Rodriguez",
    department: "Product",
    title: "Product Manager",
    location: "Melbourne"
  },
  {
    first_name: "Emily",
    last_name: "Johnson",
    department: "Design",
    title: "UX Designer",
    location: "Brisbane"
  },
  {
    first_name: "David",
    last_name: "Park",
    department: "Engineering",
    title: "Technical Lead",
    location: "Sydney"
  },
  {
    first_name: "Jessica",
    last_name: "Thompson",
    department: "Marketing",
    title: "Marketing Manager",
    location: "Perth"
  },
  {
    first_name: "Alex",
    last_name: "Kumar",
    department: "Sales",
    title: "Account Executive",
    location: "Adelaide"
  },
  {
    first_name: "Rachel",
    last_name: "Williams",
    department: "Human Resources",
    title: "HR Business Partner",
    location: "Sydney"
  },
  {
    first_name: "James",
    last_name: "O'Connor",
    department: "Finance",
    title: "Financial Analyst",
    location: "Melbourne"
  },
  {
    first_name: "Lisa",
    last_name: "Zhang",
    department: "Operations",
    title: "Operations Manager",
    location: "Sydney"
  },
  {
    first_name: "Tom",
    last_name: "Mitchell",
    department: "Engineering",
    title: "DevOps Engineer",
    location: "Brisbane"
  },
  {
    first_name: "Amanda",
    last_name: "Foster",
    department: "Customer Success",
    title: "Customer Success Manager",
    location: "Melbourne"
  },
  {
    first_name: "Chris",
    last_name: "Anderson",
    department: "IT",
    title: "IT Administrator",
    location: "Perth"
  },
  {
    first_name: "Priya",
    last_name: "Sharma",
    department: "Research & Development",
    title: "Research Scientist",
    location: "Sydney"
  },
  {
    first_name: "Mark",
    last_name: "Davis",
    department: "Sales",
    title: "Sales Manager",
    location: "Adelaide"
  },
  {
    first_name: "Sophie",
    last_name: "Taylor",
    department: "Design",
    title: "Senior UX Designer",
    location: "Melbourne"
  },
  {
    first_name: "Daniel",
    last_name: "Lee",
    department: "Engineering",
    title: "Software Engineer",
    location: "Brisbane"
  },
  {
    first_name: "Olivia",
    last_name: "Brown",
    department: "Marketing",
    title: "Content Creator",
    location: "Sydney"
  },
  {
    first_name: "Ryan",
    last_name: "Wilson",
    department: "Product",
    title: "Business Analyst",
    location: "Perth"
  },
  {
    first_name: "Grace",
    last_name: "Martinez",
    department: "Legal",
    title: "Legal Counsel",
    location: "Melbourne"
  },
  {
    first_name: "Ben",
    last_name: "Clarke",
    department: "Engineering",
    title: "Quality Assurance Engineer",
    location: "Sydney"
  },
  // Additional staff profiles to reach 80 total
  {
    first_name: "Natasha",
    last_name: "Petrov",
    department: "Engineering",
    title: "Senior Developer",
    location: "Melbourne"
  },
  {
    first_name: "Carlos",
    last_name: "Silva",
    department: "Sales",
    title: "Sales Manager",
    location: "Sydney"
  },
  {
    first_name: "Maya",
    last_name: "Patel",
    department: "Design",
    title: "UI/UX Designer",
    location: "Brisbane"
  },
  {
    first_name: "Jacob",
    last_name: "Nielsen",
    department: "Marketing",
    title: "Digital Marketing Manager",
    location: "Perth"
  },
  {
    first_name: "Isabella",
    last_name: "Romano",
    department: "Human Resources",
    title: "HR Manager",
    location: "Adelaide"
  },
  {
    first_name: "Hassan",
    last_name: "Ahmed",
    department: "Finance",
    title: "Senior Financial Analyst",
    location: "Sydney"
  },
  {
    first_name: "Elena",
    last_name: "Popov",
    department: "Operations",
    title: "Operations Coordinator",
    location: "Melbourne"
  },
  {
    first_name: "Nathan",
    last_name: "Campbell",
    department: "Engineering",
    title: "Software Engineer",
    location: "Brisbane"
  },
  {
    first_name: "Zoe",
    last_name: "Walker",
    department: "Product",
    title: "Product Owner",
    location: "Perth"
  },
  {
    first_name: "Adrian",
    last_name: "Kowalski",
    department: "IT",
    title: "Systems Administrator",
    location: "Adelaide"
  },
  {
    first_name: "Samantha",
    last_name: "Brooks",
    department: "Customer Success",
    title: "Customer Success Specialist",
    location: "Sydney"
  },
  {
    first_name: "Lucas",
    last_name: "Garcia",
    department: "Research & Development",
    title: "Data Scientist",
    location: "Melbourne"
  },
  {
    first_name: "Aisha",
    last_name: "Johnson",
    department: "Legal",
    title: "Compliance Officer",
    location: "Brisbane"
  },
  {
    first_name: "Marcus",
    last_name: "Stone",
    department: "Engineering",
    title: "Technical Lead",
    location: "Perth"
  },
  {
    first_name: "Lily",
    last_name: "Watson",
    department: "Design",
    title: "Graphic Designer",
    location: "Adelaide"
  },
  {
    first_name: "Oscar",
    last_name: "Murphy",
    department: "Sales",
    title: "Business Development Manager",
    location: "Sydney"
  },
  {
    first_name: "Chloe",
    last_name: "Edwards",
    department: "Marketing",
    title: "Marketing Specialist",
    location: "Melbourne"
  },
  {
    first_name: "Ethan",
    last_name: "Roberts",
    department: "Finance",
    title: "Budget Analyst",
    location: "Brisbane"
  },
  {
    first_name: "Mia",
    last_name: "Turner",
    department: "Human Resources",
    title: "Talent Acquisition Specialist",
    location: "Perth"
  },
  {
    first_name: "Logan",
    last_name: "Phillips",
    department: "Operations",
    title: "Process Improvement Specialist",
    location: "Adelaide"
  },
  {
    first_name: "Aria",
    last_name: "Cooper",
    department: "Engineering",
    title: "Frontend Developer",
    location: "Sydney"
  },
  {
    first_name: "Felix",
    last_name: "Morgan",
    department: "Product",
    title: "Product Marketing Manager",
    location: "Melbourne"
  },
  {
    first_name: "Ruby",
    last_name: "Bailey",
    department: "Customer Success",
    title: "Account Manager",
    location: "Brisbane"
  },
  {
    first_name: "Caleb",
    last_name: "Reed",
    department: "IT",
    title: "Network Engineer",
    location: "Perth"
  },
  {
    first_name: "Luna",
    last_name: "Howard",
    department: "Design",
    title: "Product Designer",
    location: "Adelaide"
  },
  {
    first_name: "Mason",
    last_name: "Cox",
    department: "Research & Development",
    title: "Machine Learning Engineer",
    location: "Sydney"
  },
  {
    first_name: "Hazel",
    last_name: "Ward",
    department: "Legal",
    title: "Contract Manager",
    location: "Melbourne"
  },
  {
    first_name: "Theo",
    last_name: "Torres",
    department: "Sales",
    title: "Account Executive",
    location: "Brisbane"
  },
  {
    first_name: "Violet",
    last_name: "Peterson",
    department: "Marketing",
    title: "Brand Manager",
    location: "Perth"
  },
  {
    first_name: "Julian",
    last_name: "Gray",
    department: "Finance",
    title: "Tax Specialist",
    location: "Adelaide"
  },
  {
    first_name: "Nova",
    last_name: "James",
    department: "Human Resources",
    title: "Learning & Development Coordinator",
    location: "Sydney"
  },
  {
    first_name: "Blake",
    last_name: "Watson",
    department: "Operations",
    title: "Supply Chain Analyst",
    location: "Melbourne"
  },
  {
    first_name: "Ivy",
    last_name: "Brooks",
    department: "Engineering",
    title: "Backend Developer",
    location: "Brisbane"
  },
  {
    first_name: "Axel",
    last_name: "Fisher",
    department: "Product",
    title: "Technical Writer",
    location: "Perth"
  },
  {
    first_name: "Sage",
    last_name: "Bennett",
    department: "Customer Success",
    title: "Implementation Specialist",
    location: "Adelaide"
  },
  {
    first_name: "Kai",
    last_name: "Powell",
    department: "IT",
    title: "Security Analyst",
    location: "Sydney"
  },
  {
    first_name: "Raven",
    last_name: "Long",
    department: "Design",
    title: "Creative Director",
    location: "Melbourne"
  },
  {
    first_name: "Phoenix",
    last_name: "Hughes",
    department: "Research & Development",
    title: "Research Engineer",
    location: "Brisbane"
  },
  {
    first_name: "River",
    last_name: "Price",
    department: "Legal",
    title: "Intellectual Property Lawyer",
    location: "Perth"
  },
  {
    first_name: "Atlas",
    last_name: "Sanders",
    department: "Sales",
    title: "Regional Sales Director",
    location: "Adelaide"
  },
  {
    first_name: "Willow",
    last_name: "Ross",
    department: "Marketing",
    title: "Social Media Manager",
    location: "Sydney"
  },
  {
    first_name: "Orion",
    last_name: "Morris",
    department: "Finance",
    title: "Investment Analyst",
    location: "Melbourne"
  },
  {
    first_name: "Ember",
    last_name: "Rogers",
    department: "Human Resources",
    title: "Organizational Development Specialist",
    location: "Brisbane"
  },
  {
    first_name: "Juno",
    last_name: "Reed",
    department: "Operations",
    title: "Quality Assurance Manager",
    location: "Perth"
  },
  {
    first_name: "Zara",
    last_name: "Cook",
    department: "Engineering",
    title: "Mobile Developer",
    location: "Adelaide"
  },
  {
    first_name: "Leo",
    last_name: "Morgan",
    department: "Product",
    title: "UX Researcher",
    location: "Sydney"
  },
  {
    first_name: "Iris",
    last_name: "Bailey",
    department: "Customer Success",
    title: "Training Specialist",
    location: "Melbourne"
  },
  {
    first_name: "Finn",
    last_name: "Rivera",
    department: "IT",
    title: "Database Administrator",
    location: "Brisbane"
  },
  {
    first_name: "Aurora",
    last_name: "Cooper",
    department: "Design",
    title: "Motion Graphics Designer",
    location: "Perth"
  },
  {
    first_name: "Xavier",
    last_name: "Richardson",
    department: "Research & Development",
    title: "AI Research Scientist",
    location: "Adelaide"
  },
  {
    first_name: "Skye",
    last_name: "Cox",
    department: "Legal",
    title: "Privacy Officer",
    location: "Sydney"
  },
  {
    first_name: "Knox",
    last_name: "Howard",
    department: "Sales",
    title: "Enterprise Sales Manager",
    location: "Melbourne"
  },
  {
    first_name: "Luna",
    last_name: "Ward",
    department: "Marketing",
    title: "Event Marketing Manager",
    location: "Brisbane"
  },
  {
    first_name: "Sage",
    last_name: "Torres",
    department: "Finance",
    title: "Risk Analyst",
    location: "Perth"
  },
  {
    first_name: "Phoenix",
    last_name: "Peterson",
    department: "Human Resources",
    title: "Employee Relations Specialist",
    location: "Adelaide"
  },
  {
    first_name: "River",
    last_name: "Gray",
    department: "Operations",
    title: "Facilities Manager",
    location: "Sydney"
  },
  {
    first_name: "Atlas",
    last_name: "James",
    department: "Engineering",
    title: "Cloud Architect",
    location: "Melbourne"
  },
  {
    first_name: "Willow",
    last_name: "Watson",
    department: "Product",
    title: "Product Strategy Manager",
    location: "Brisbane"
  },
  {
    first_name: "Orion",
    last_name: "Brooks",
    department: "Customer Success",
    title: "Customer Operations Manager",
    location: "Perth"
  },
  {
    first_name: "Ember",
    last_name: "Fisher",
    department: "IT",
    title: "DevOps Manager",
    location: "Adelaide"
  },
  {
    first_name: "Juno",
    last_name: "Bennett",
    department: "Design",
    title: "Brand Designer",
    location: "Sydney"
  },
  {
    first_name: "Nova",
    last_name: "Powell",
    department: "Research & Development",
    title: "Technology Innovation Manager",
    location: "Melbourne"
  },
  {
    first_name: "Blake",
    last_name: "Long",
    department: "Legal",
    title: "Regulatory Affairs Manager",
    location: "Brisbane"
  },
  {
    first_name: "Ivy",
    last_name: "Hughes",
    department: "Sales",
    title: "Channel Partner Manager",
    location: "Perth"
  },
  {
    first_name: "Axel",
    last_name: "Price",
    department: "Marketing",
    title: "Growth Marketing Manager",
    location: "Adelaide"
  }
];
var VISITOR_PROFILES = [
  {
    first_name: "Jennifer",
    last_name: "Adams",
    company: "TechCorp Australia",
    purpose: "Business Partnership Meeting"
  },
  {
    first_name: "Robert",
    last_name: "Hayes",
    company: "Global Innovations Pty Ltd",
    purpose: "Product Demo"
  },
  {
    first_name: "Maria",
    last_name: "Gonzalez",
    company: "Digital Solutions Group",
    purpose: "Contract Negotiation"
  },
  {
    first_name: "Kevin",
    last_name: "Turner",
    company: "Innovation Labs",
    purpose: "Technical Consultation"
  },
  {
    first_name: "Catherine",
    last_name: "Moore",
    company: "Future Systems",
    purpose: "Strategic Planning"
  },
  {
    first_name: "Steven",
    last_name: "White",
    company: "Advanced Technologies",
    purpose: "Vendor Assessment"
  },
  {
    first_name: "Nicole",
    last_name: "Campbell",
    company: "Smart Solutions Ltd",
    purpose: "Project Review"
  },
  {
    first_name: "Brian",
    last_name: "Scott",
    company: "NextGen Industries",
    purpose: "Investment Discussion"
  },
  {
    first_name: "Michelle",
    last_name: "Green",
    company: "Dynamic Enterprises",
    purpose: "Collaboration Meeting"
  },
  {
    first_name: "Jason",
    last_name: "Hill",
    company: "Creative Solutions Inc",
    purpose: "Design Review"
  },
  {
    first_name: "Laura",
    last_name: "King",
    company: "Enterprise Partners",
    purpose: "Partnership Proposal"
  },
  {
    first_name: "Andrew",
    last_name: "Wright",
    company: "Strategic Consulting",
    purpose: "Business Consultation"
  },
  {
    first_name: "Rebecca",
    last_name: "Lopez",
    company: "Business Development Co",
    purpose: "Market Analysis"
  },
  {
    first_name: "Paul",
    last_name: "Young",
    company: "Market Leaders Group",
    purpose: "Industry Insights"
  },
  // Additional visitor profiles to create 20 total guests
  {
    first_name: "Douglas",
    last_name: "Chen",
    company: "Quantum Dynamics",
    purpose: "R&D Collaboration"
  },
  {
    first_name: "Victoria",
    last_name: "Singh",
    company: "Digital Innovation Hub",
    purpose: "Technology Transfer"
  },
  {
    first_name: "Timothy",
    last_name: "O'Brien",
    company: "CloudTech Solutions",
    purpose: "Infrastructure Review"
  },
  {
    first_name: "Angela",
    last_name: "Martinez",
    company: "Data Analytics Corp",
    purpose: "Analytics Partnership"
  },
  {
    first_name: "Gordon",
    last_name: "Thompson",
    company: "Venture Capital Partners",
    purpose: "Investment Evaluation"
  },
  {
    first_name: "Patricia",
    last_name: "Wilson",
    company: "Sustainability Solutions",
    purpose: "ESG Consultation"
  }
];
var ACTIVE_USER = {
  id: "current",
  name: "Sarah Chen",
  email: "sarah.chen@place.tech",
  first_name: "Sarah",
  last_name: "Chen",
  department: "Engineering",
  title: "Senior Software Engineer",
  location: "Sydney",
  groups: ["staff", "engineering", "senior"],
  sys_admin: true,
  phone: "+61 2 9876 5432",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b9ce2c62?w=150&h=150&fit=crop&crop=face"
};
var MOCK_STAFF = REALISTIC_STAFF_PROFILES.map((profile, i) => {
  const emailName = `${profile.first_name.toLowerCase()}.${profile.last_name.toLowerCase().replace(/'/g, "")}`;
  const isManager = profile.title.toLowerCase().includes("manager") || profile.title.toLowerCase().includes("lead") || profile.title.toLowerCase().includes("senior");
  return {
    id: `staff-${i + 1}`,
    name: `${profile.first_name} ${profile.last_name}`,
    email: `${emailName}@${DOMAIN}`,
    first_name: profile.first_name,
    last_name: profile.last_name,
    department: profile.department,
    title: profile.title,
    location: profile.location,
    groups: [
      "staff",
      profile.department.toLowerCase().replace(/\s+/g, "-"),
      ...isManager ? ["manager"] : []
    ],
    phone: `+61 ${predictableRandomInt(8) + 2} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)}`,
    avatar: `https://images.unsplash.com/photo-${15e11 + i * 1e6}?w=150&h=150&fit=crop&crop=face`,
    extension_data: {
      employee_id: `EMP${String(i + 1).padStart(4, "0")}`,
      start_date: new Date(2020 + predictableRandomInt(4), predictableRandomInt(12), predictableRandomInt(28) + 1).toISOString(),
      manager_id: isManager ? null : `staff-${predictableRandomInt(5) + 1}`
    }
  };
}).concat([ACTIVE_USER]);
var MOCK_GUESTS = VISITOR_PROFILES.map((profile, i) => {
  const emailName = `${profile.first_name.toLowerCase()}.${profile.last_name.toLowerCase()}`;
  const companyDomain = profile.company.toLowerCase().replace(/\s+/g, "").replace(/pty.*ltd|ltd|inc|corp|group|co/gi, "").slice(0, 12) + ".com";
  return {
    id: `guest-${i + 1}`,
    name: `${profile.first_name} ${profile.last_name}`,
    email: `${emailName}@${companyDomain}`,
    first_name: profile.first_name,
    last_name: profile.last_name,
    company: profile.company,
    purpose: profile.purpose,
    visit_expected: predictableRandomInt(99999) % 3 !== 0,
    // 66% expected
    phone: `+61 ${predictableRandomInt(8) + 2} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)}`,
    extension_data: __spreadValues(__spreadValues({
      visitor_type: predictableRandomInt(99999) % 4 === 0 ? "VIP" : "Standard",
      host_id: `staff-${predictableRandomInt(REALISTIC_STAFF_PROFILES.length) + 1}`,
      requirements: predictableRandomInt(99999) % 5 === 0 ? "Wheelchair accessible" : null,
      parking_required: predictableRandomInt(99999) % 3 === 0
    }, predictableRandomInt(99999) % 4 === 0 ? {
      vaccination_proof: {
        url: "https://fonts.gstatic.com/s/i/materialicons/verified/v11/24px.svg",
        verified: true
      }
    } : {}), predictableRandomInt(99999) % 3 === 0 ? {
      id_data: {
        url: "https://fonts.gstatic.com/s/i/materialicons/fingerprint/v12/24px.svg",
        type: "Driver License",
        verified: true
      }
    } : {})
  };
});

// libs/mocks/src/lib/api/assets.data.ts
var MOCK_CATEGORIES = [
  {
    id: "1",
    name: "Technology",
    description: "Electronic devices and computing equipment"
  },
  {
    id: "2",
    name: "Furniture",
    description: "Office furniture and workspace equipment"
  },
  {
    id: "3",
    name: "Audio Visual",
    description: "Presentation and meeting room equipment"
  },
  {
    id: "4",
    name: "Office Supplies",
    description: "Stationery and consumable items"
  },
  {
    id: "5",
    name: "Kitchen & Catering",
    description: "Kitchen appliances and catering equipment"
  },
  {
    id: "6",
    name: "Wellness & Safety",
    description: "Health, safety, and wellness equipment"
  },
  {
    id: "7",
    name: "Mobility",
    description: "Transportation and mobility aids"
  },
  {
    id: "8",
    name: "Cleaning & Maintenance",
    description: "Cleaning supplies and maintenance tools"
  },
  {
    id: "_parking_category_",
    name: "_PARKING_",
    description: "Parking spaces",
    hidden: true
  },
  {
    id: "_catering_category_",
    name: "_CATERING_",
    description: "Catering menu items",
    hidden: true
  }
];
var MOCK_PRODUCTS = [
  {
    id: "_catering_standalone_type_",
    name: "CATERING:_STANDALONE_",
    category_id: "_catering_category_",
    brand: "PlaceOS"
  },
  {
    id: "_catering_acme_type_",
    name: "CATERING:Acme Catering",
    category_id: "_catering_category_",
    brand: "PlaceOS"
  },
  // Technology
  {
    id: "1",
    name: 'iPad Pro 12.9"',
    category_id: "1",
    brand: "Apple",
    barcode: "APL-IPD-PRO-12",
    model: "MHNK3X/A",
    description: "Latest generation iPad Pro with M2 chip, perfect for presentations and digital collaboration",
    specifications: {
      screen_size: "12.9 inch",
      storage: "256GB",
      connectivity: "Wi-Fi + Cellular",
      color: "Space Gray"
    }
  },
  {
    id: "2",
    name: "iPhone 14 Pro",
    category_id: "1",
    brand: "Apple",
    barcode: "APL-IPH-14P",
    model: "MQ0G3X/A",
    description: "Professional smartphone for business communications and mobile productivity",
    specifications: {
      storage: "128GB",
      color: "Deep Purple",
      connectivity: "5G"
    }
  },
  {
    id: "3",
    name: 'MacBook Pro 16"',
    category_id: "1",
    brand: "Apple",
    barcode: "APL-MBP-16",
    model: "MK1E3X/A",
    description: "High-performance laptop for development and creative work",
    specifications: {
      processor: "M2 Pro",
      memory: "16GB",
      storage: "512GB SSD",
      color: "Space Gray"
    }
  },
  {
    id: "4",
    name: "Surface Pro 9",
    category_id: "1",
    brand: "Microsoft",
    barcode: "MSF-SP9-256",
    model: "QEZ-00001",
    description: "2-in-1 tablet and laptop for versatile productivity",
    specifications: {
      processor: "Intel Core i5",
      memory: "8GB",
      storage: "256GB SSD"
    }
  },
  {
    id: "5",
    name: "Wireless Presenter Remote",
    category_id: "1",
    brand: "Logitech",
    barcode: "LOG-R400",
    model: "R400",
    description: "Professional wireless presenter with laser pointer and intuitive controls"
  },
  // Furniture
  {
    id: "6",
    name: "Aeron Chair",
    category_id: "2",
    brand: "Herman Miller",
    barcode: "HM-AER-B",
    model: "AE113AWBPJG1C7",
    description: "Ergonomic office chair with advanced lumbar support and breathable mesh",
    specifications: {
      size: "Size B (Medium)",
      color: "Graphite",
      material: "Pellicle mesh",
      adjustments: "Full feature"
    }
  },
  {
    id: "7",
    name: "Standing Desk Converter",
    category_id: "2",
    brand: "Varidesk",
    barcode: "VAR-SD36",
    model: "Pro Plus 36",
    description: "Height-adjustable desk converter for ergonomic workspace flexibility",
    specifications: {
      width: "36 inches",
      weight_capacity: "35 lbs",
      height_range: '11.5" - 15.5"'
    }
  },
  {
    id: "8",
    name: "Modular Sofa System",
    category_id: "2",
    brand: "Steelcase",
    barcode: "STC-MSS-3",
    model: "Gesture Lounge",
    description: "Flexible seating solution for collaborative spaces and break areas"
  },
  {
    id: "9",
    name: "Conference Table",
    category_id: "2",
    brand: "Knoll",
    barcode: "KNL-CT-12",
    model: "Florence 12-Person",
    description: "Premium conference table with integrated cable management",
    specifications: {
      seats: "12 people",
      material: "Oak veneer",
      shape: "Rectangular"
    }
  },
  // Audio Visual
  {
    id: "10",
    name: "4K Laser Projector",
    category_id: "3",
    brand: "Epson",
    barcode: "EPS-LS500",
    model: "EpiqVision Ultra LS500",
    description: "Ultra-short throw 4K laser projector for meeting rooms and presentations",
    specifications: {
      resolution: "4K UHD",
      brightness: "4000 lumens",
      technology: "Laser",
      connectivity: "HDMI, USB-C, Wireless"
    }
  },
  {
    id: "11",
    name: "Wireless Microphone System",
    category_id: "3",
    brand: "Shure",
    barcode: "SHR-SM58",
    model: "SM58-LC",
    description: "Professional wireless microphone for presentations and events"
  },
  {
    id: "12",
    name: '86" Interactive Display',
    category_id: "3",
    brand: "Microsoft",
    barcode: "MSF-SH2-86",
    model: 'Surface Hub 2S 85"',
    description: "Large format interactive display for collaborative meetings and workshops",
    specifications: {
      size: "85 inches",
      resolution: "4K",
      touch_points: "20 simultaneous",
      connectivity: "Multiple inputs"
    }
  },
  {
    id: "13",
    name: "Soundbar System",
    category_id: "3",
    brand: "Bose",
    barcode: "BSE-SB700",
    model: "Smart Soundbar 700",
    description: "Premium soundbar for meeting room audio enhancement"
  },
  // Office Supplies
  {
    id: "14",
    name: "Whiteboard Markers Set",
    category_id: "4",
    brand: "Artline",
    barcode: "ART-WB-12",
    description: "Set of 12 assorted color whiteboard markers with fine tips"
  },
  {
    id: "15",
    name: "Premium Notebooks",
    category_id: "4",
    brand: "Moleskine",
    barcode: "MOL-NB-A4",
    model: "Classic Hard Cover",
    description: "Professional notebooks for meeting notes and planning"
  },
  {
    id: "16",
    name: "Wireless Charging Pad",
    category_id: "4",
    brand: "Belkin",
    barcode: "BLK-WCP15",
    description: "Fast wireless charging pad for meeting room desk integration"
  },
  // Kitchen & Catering
  {
    id: "17",
    name: "Coffee Machine",
    category_id: "5",
    brand: "Nespresso",
    barcode: "NSP-VM200",
    model: "Vertuo Plus",
    description: "Professional coffee machine for office kitchen and meeting refreshments",
    specifications: {
      type: "Capsule system",
      cup_sizes: "4 sizes",
      water_tank: "1.1L"
    }
  },
  {
    id: "18",
    name: "Mini Refrigerator",
    category_id: "5",
    brand: "Haier",
    barcode: "HAI-MR126",
    model: "HR-126WL",
    description: "Compact refrigerator for meeting room refreshments and catering storage"
  },
  {
    id: "19",
    name: "Water Cooler",
    category_id: "5",
    brand: "Zip",
    barcode: "ZIP-HC160",
    description: "Filtered water cooler with hot and cold dispensing options"
  },
  // Wellness & Safety
  {
    id: "20",
    name: "First Aid Kit",
    category_id: "6",
    brand: "St John Ambulance",
    barcode: "SJA-FAK50",
    description: "Comprehensive workplace first aid kit for 50 people"
  },
  {
    id: "21",
    name: "Air Purifier",
    category_id: "6",
    brand: "Dyson",
    barcode: "DYS-AP01",
    model: "Pure Cool TP01",
    description: "HEPA air purifier and fan for meeting room air quality"
  },
  {
    id: "22",
    name: "Ergonomic Footrest",
    category_id: "6",
    brand: "Humanscale",
    barcode: "HUM-FR300",
    description: "Adjustable footrest for ergonomic workstation setup"
  },
  // Mobility
  {
    id: "23",
    name: "Equipment Trolley",
    category_id: "7",
    brand: "Rubbermaid",
    barcode: "RBM-ET3",
    description: "Mobile trolley for transporting AV equipment and supplies"
  },
  {
    id: "24",
    name: "Laptop Cart",
    category_id: "7",
    brand: "Bretford",
    barcode: "BRT-LC20",
    description: "Mobile charging cart for laptops and tablets"
  },
  // Cleaning & Maintenance
  {
    id: "25",
    name: "Cleaning Supply Kit",
    category_id: "8",
    brand: "Diversey",
    barcode: "DIV-CSK01",
    description: "Complete cleaning supply kit for office maintenance"
  },
  {
    id: "26",
    name: "HEPA Vacuum Cleaner",
    category_id: "8",
    brand: "Shark",
    barcode: "SHK-NV752",
    description: "Professional grade vacuum cleaner with HEPA filtration"
  },
  {
    id: "_parking_type_",
    name: "_PARKING_SPACES_",
    category_id: "_parking_category_",
    brand: "PlaceOS"
  }
];
var ASSET_CONDITIONS = ["Excellent", "Good", "Fair", "Poor"];
var ASSET_STATUS = ["Available", "In Use", "Maintenance", "Retired"];
var MAINTENANCE_TYPES = ["Routine", "Repair", "Calibration", "Inspection"];
var generateAssetHistory = (assetId) => {
  const historyCount = predictableRandomInt(5, 1);
  return Array(historyCount).fill(null).map((_, i) => ({
    id: `history-${assetId}-${i}`,
    asset_id: assetId,
    action: ["Assigned", "Returned", "Maintained", "Relocated"][predictableRandomInt(4)],
    user_id: `staff-${predictableRandomInt(20) + 1}`,
    location: `Floor ${predictableRandomInt(3) + 1}`,
    timestamp: getUnixTime(subDays(Date.now(), predictableRandomInt(365))),
    notes: "Asset management action recorded"
  }));
};
var generateMaintenanceSchedule = (assetId) => {
  if (predictableRandomInt(3) === 0)
    return null;
  return {
    id: `maintenance-${assetId}`,
    asset_id: assetId,
    type: MAINTENANCE_TYPES[predictableRandomInt(MAINTENANCE_TYPES.length)],
    frequency_days: [30, 60, 90, 180, 365][predictableRandomInt(5)],
    last_service: getUnixTime(subDays(Date.now(), predictableRandomInt(90))),
    next_service: getUnixTime(new Date(Date.now() + (predictableRandomInt(90) + 30) * 24 * 60 * 60 * 1e3)),
    service_provider: "Internal IT" + (predictableRandomInt(3) === 0 ? "" : " / External Contractor"),
    estimated_cost: predictableRandomInt(500, 50)
  };
};
var MOCK_ASSETS = Array(150).fill(null).map((_, i) => {
  const product = MOCK_PRODUCTS[i % MOCK_PRODUCTS.length];
  const purchaseDate = subMonths(Date.now(), predictableRandomInt(36, 1));
  const condition = ASSET_CONDITIONS[predictableRandomInt(ASSET_CONDITIONS.length)];
  const status = ASSET_STATUS[predictableRandomInt(ASSET_STATUS.length)];
  const assetId = `asset-${String(i + 1).padStart(4, "0")}`;
  return {
    id: assetId,
    name: `${product.name} - ${assetId}`,
    asset_type_id: product.id,
    description: product.description || `${product.brand} ${product.name} for office use`,
    model_number: product.model || `${product.brand}-${predictableRandomInt(9999)}`,
    serial_number: `${product.brand?.substring(0, 3).toUpperCase()}${predictableRandomInt(999999999)}`,
    identifier: `${product.barcode}-${String(i + 1).padStart(3, "0")}`,
    barcode: product.barcode,
    brand: product.brand,
    condition,
    status,
    purchase_order_id: `PO-${Math.floor(i / 5) + 1}`,
    // Group assets by purchase orders
    purchase_date: getUnixTime(purchaseDate),
    warranty_expiry: getUnixTime(new Date(purchaseDate.getTime() + predictableRandomInt(36, 12) * 30 * 24 * 60 * 60 * 1e3)),
    purchase_price: predictableRandomInt(5e3, 100),
    current_value: Math.max(predictableRandomInt(3e3, 50), 50),
    // Depreciated value
    location: {
      building: `Building ${predictableRandomInt(2) + 1}`,
      floor: predictableRandomInt(5) + 1,
      room: `Room ${String(predictableRandomInt(50) + 1).padStart(2, "0")}`,
      zone: `zone-${predictableRandomInt(3) + 1}`
    },
    assigned_to: status === "In Use" ? `staff-${predictableRandomInt(20) + 1}` : null,
    category_id: product.category_id,
    specifications: product.specifications || {},
    other_data: {
      history: generateAssetHistory(assetId),
      maintenance_schedule: generateMaintenanceSchedule(assetId),
      insurance_value: predictableRandomInt(6e3, 200),
      depreciation_rate: predictableRandomInt(20, 5),
      // 5-25% per year
      energy_rating: product.category_id === "1" || product.category_id === "5" ? ["A+++", "A++", "A+", "A", "B"][predictableRandomInt(5)] : null,
      dimensions: {
        width: predictableRandomInt(100, 10),
        height: predictableRandomInt(100, 5),
        depth: predictableRandomInt(80, 10),
        weight: predictableRandomInt(50, 1)
      },
      tags: [
        product.brand?.toLowerCase(),
        MOCK_CATEGORIES.find((c2) => c2.id === product.category_id)?.name.toLowerCase(),
        condition.toLowerCase(),
        ...status === "In Use" ? ["assigned"] : [],
        ...product.category_id === "1" ? ["tech"] : []
      ].filter(Boolean)
    }
  };
});
MOCK_ASSETS.push({
  id: "catering-coffee",
  name: "Coffee Service",
  identifier: "Coffee Service",
  asset_type_id: "_catering_standalone_type_",
  zone_id: "bld-01",
  images: [],
  other_data: {
    category: "Beverages",
    description: "Freshly brewed coffee for meetings",
    unit_price: 350,
    quantity: 0,
    options: [],
    tags: ["Drink", "Beverage"],
    accept_points: false,
    discount_cap: 0,
    hide_for_zones: []
  }
}, {
  id: "catering-sandwiches",
  name: "Sandwich Platter",
  identifier: "Sandwich Platter",
  asset_type_id: "_catering_acme_type_",
  zone_id: "bld-01",
  images: [],
  other_data: {
    category: "Food",
    description: "Assorted sandwich platter",
    unit_price: 1200,
    quantity: 0,
    options: [],
    tags: ["Lunch"],
    accept_points: false,
    discount_cap: 0,
    hide_for_zones: []
  }
});
var MOCK_PURCHASE_ORDERS = Array(30).fill(null).map((_, i) => {
  const orderDate = subMonths(Date.now(), predictableRandomInt(36, 1));
  const deliveryDate = new Date(orderDate.getTime() + predictableRandomInt(30) * 24 * 60 * 60 * 1e3);
  return {
    id: `PO-${i + 1}`,
    purchase_order_number: `PO-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(i + 1).padStart(4, "0")}`,
    invoice_number: `INV-${String(predictableRandomInt(99999) + 1e4)}`,
    vendor: [
      "Office Supplies Co",
      "Tech Solutions Ltd",
      "Furniture Plus",
      "AV Equipment Pro"
    ][predictableRandomInt(4)],
    department: ["IT", "Facilities", "HR", "Finance"][predictableRandomInt(4)],
    purchase_date: getUnixTime(orderDate),
    delivery_date: getUnixTime(deliveryDate),
    expected_service_start_date: getUnixTime(deliveryDate),
    expected_service_end_date: getUnixTime(new Date(deliveryDate.getTime() + 3 * 365 * 24 * 60 * 60 * 1e3)),
    // 3 years
    total_amount: predictableRandomInt(5e4, 1e3),
    currency: "AUD",
    status: ["Pending", "Approved", "Delivered", "Complete"][predictableRandomInt(4)],
    approver_id: `staff-${predictableRandomInt(5) + 1}`,
    notes: i % 3 === 0 ? "Bulk order for office renovation" : i % 3 === 1 ? "Emergency replacement" : "Routine procurement",
    payment_terms: [
      "Net 30",
      "Net 60",
      "Payment on Delivery",
      "Net 15"
    ][predictableRandomInt(4)]
  };
});
var MOCK_PARKING_ASSETS_CACHE = {};
function generateMockParkingAssets(zone_id) {
  if (!MOCK_PARKING_ASSETS_CACHE[zone_id]) {
    const parts = zone_id.split("-");
    const id = parts[parts.length - 1];
    MOCK_PARKING_ASSETS_CACHE[zone_id] = new Array(18 * 6).fill(0).map((_, idx) => {
      const position = padString(idx % 18 + Math.floor(idx / 18) * 100, 3);
      const assignee = predictableRandomInt(9999) % 4 === 0 ? MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)] : {};
      return {
        id: `park-${id}-${position}`,
        map_id: `park-${position}`,
        name: `${position}`,
        bookable: predictableRandomInt(9999) % 4 !== 0,
        assigned_to: assignee.email || "",
        assigned_name: assignee.name || "",
        asset_type_id: "_parking_type_",
        zone_id,
        notes: "",
        place_groups: [],
        features: [],
        images: []
      };
    });
  }
  return MOCK_PARKING_ASSETS_CACHE[zone_id];
}
function getAllMockParkingAssets() {
  return Object.values(MOCK_PARKING_ASSETS_CACHE).flat();
}

// libs/mocks/src/lib/api/assets.mock.ts
var BASE_PATH = "/api/engine/v2";
var update = (dataset) => (id, data) => {
  const index = dataset.findIndex((e) => e.id === id);
  if (index < 0)
    throw {
      status: 404,
      message: `Unable to find booking with ID ${id}`
    };
  const new_event = __spreadValues({}, data);
  dataset.splice(index, 1, new_event);
  return new_event;
};
function registerMockAssets() {
  Zr({
    path: `${BASE_PATH}/asset_categories`,
    metadata: {},
    method: "GET",
    callback: (req) => {
      let results = MOCK_CATEGORIES;
      if (req.query_params?.hidden !== void 0) {
        const hidden = String(req.query_params.hidden) === "true";
        results = results.filter((c2) => !!c2.hidden === hidden);
      }
      return results;
    }
  });
  Zr({
    path: `${BASE_PATH}/asset_categories/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_CATEGORIES.find((e) => e.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  Zr({
    path: `${BASE_PATH}/asset_categories`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-category-${predictableRandomInt(999)}`
      });
      MOCK_CATEGORIES.push(new_event);
      return new_event;
    }
  });
  Zr({
    path: `${BASE_PATH}/asset_categories/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_CATEGORIES)(req.route_params.id, __spreadValues({}, req.body))
  });
  Zr({
    path: `${BASE_PATH}/asset_categories/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_CATEGORIES.findIndex((e) => e.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_CATEGORIES.splice(index, 1);
      return;
    }
  });
  Zr({
    path: `${BASE_PATH}/asset_types`,
    metadata: {},
    method: "GET",
    callback: (req) => {
      let results = MOCK_PRODUCTS;
      if (req.query_params?.category_id) {
        results = results.filter((p) => p.category_id === req.query_params.category_id);
      }
      return results;
    }
  });
  Zr({
    path: `${BASE_PATH}/asset_types/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_PRODUCTS.find((e) => e.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  Zr({
    path: `${BASE_PATH}/asset_types`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-product-${predictableRandomInt(999)}`
      });
      MOCK_PRODUCTS.push(new_event);
      return new_event;
    }
  });
  Zr({
    path: `${BASE_PATH}/asset_types/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_PRODUCTS)(req.route_params.id, __spreadValues({}, req.body))
  });
  Zr({
    path: `${BASE_PATH}/asset_types/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_PRODUCTS.findIndex((e) => e.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_PRODUCTS.splice(index, 1);
      return;
    }
  });
  Zr({
    path: `${BASE_PATH}/asset_purchase_orders`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const events = MOCK_PURCHASE_ORDERS;
      return events;
    }
  });
  Zr({
    path: `${BASE_PATH}/asset_purchase_orders/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_PURCHASE_ORDERS.find((e) => e.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  Zr({
    path: `${BASE_PATH}/asset_purchase_orders`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-purchase-order-${predictableRandomInt(999)}`
      });
      MOCK_PURCHASE_ORDERS.push(new_event);
      return new_event;
    }
  });
  Zr({
    path: `${BASE_PATH}/asset_purchase_orders/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_PURCHASE_ORDERS)(req.route_params.id, __spreadValues({}, req.body))
  });
  Zr({
    path: `${BASE_PATH}/asset_purchase_orders/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_PURCHASE_ORDERS.findIndex((e) => e.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find purchase order with ID ${req.route_params.id}`
        };
      MOCK_PURCHASE_ORDERS.splice(index, 1);
      return;
    }
  });
  Zr({
    path: `${BASE_PATH}/assets`,
    metadata: {},
    method: "GET",
    callback: (req) => {
      const type_id = req.query_params?.type_id;
      const zone_id = req.query_params?.zone_id;
      if (type_id === "_parking_type_" && zone_id) {
        return generateMockParkingAssets(zone_id);
      }
      let results = [...MOCK_ASSETS, ...getAllMockParkingAssets()];
      if (type_id) {
        results = results.filter((a) => a.asset_type_id === type_id);
      }
      if (zone_id) {
        results = results.filter((a) => a.zone_id === zone_id || (a.zones || []).includes(zone_id));
      }
      return results;
    }
  });
  Zr({
    path: `${BASE_PATH}/assets/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_ASSETS.find((e) => e.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  Zr({
    path: `${BASE_PATH}/assets`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-asset-${predictableRandomInt(999)}`
      });
      MOCK_ASSETS.push(new_event);
      return new_event;
    }
  });
  Zr({
    path: `${BASE_PATH}/assets/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_ASSETS)(req.route_params.id, __spreadValues({}, req.body))
  });
  Zr({
    path: `${BASE_PATH}/assets/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_ASSETS.findIndex((e) => e.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_ASSETS.splice(index, 1);
      return;
    }
  });
}

// libs/mocks/src/lib/api/catering.data.ts
var DIETARY_RESTRICTIONS = [
  { id: "vegetarian", name: "Vegetarian", icon: "\u{1F331}" },
  { id: "vegan", name: "Vegan", icon: "\u{1F33F}" },
  { id: "gluten-free", name: "Gluten Free", icon: "\u{1F33E}" },
  { id: "dairy-free", name: "Dairy Free", icon: "\u{1F95B}" },
  { id: "nut-free", name: "Nut Free", icon: "\u{1F95C}" },
  { id: "halal", name: "Halal", icon: "\u262A\uFE0F" },
  { id: "kosher", name: "Kosher", icon: "\u2721\uFE0F" },
  { id: "low-carb", name: "Low Carb", icon: "\u{1F957}" },
  { id: "keto", name: "Ketogenic", icon: "\u{1F951}" },
  { id: "paleo", name: "Paleo", icon: "\u{1F969}" }
];
var MOCK_MENU = [
  // Beverages
  {
    id: "bev-001",
    name: "Barista Coffee Selection",
    unit_price: 450,
    category: "beverages",
    description: "Freshly brewed barista-quality coffee with premium beans",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300",
    options: [
      { id: "opt-001", name: "Espresso", group: "type" },
      { id: "opt-002", name: "Cappuccino", group: "type" },
      { id: "opt-003", name: "Flat White", group: "type" },
      { id: "opt-004", name: "Latte", group: "type" },
      { id: "opt-005", name: "Long Black", group: "type" },
      { id: "opt-006", name: "Mocha", group: "type" },
      { id: "opt-007", name: "Regular", group: "size" },
      { id: "opt-008", name: "Large", group: "size", unit_price: 50 },
      { id: "opt-009", name: "Oat Milk", group: "milk", unit_price: 60 },
      {
        id: "opt-010",
        name: "Almond Milk",
        group: "milk",
        unit_price: 60
      },
      { id: "opt-011", name: "Soy Milk", group: "milk", unit_price: 50 },
      {
        id: "opt-012",
        name: "Extra Shot",
        group: "extras",
        unit_price: 70
      },
      { id: "opt-013", name: "Decaf", group: "extras" }
    ]
  },
  {
    id: "bev-002",
    name: "Premium Tea Selection",
    unit_price: 350,
    category: "beverages",
    description: "Selection of premium loose leaf teas",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300",
    options: [
      { id: "opt-014", name: "Earl Grey", group: "type" },
      { id: "opt-015", name: "English Breakfast", group: "type" },
      { id: "opt-016", name: "Green Tea", group: "type" },
      { id: "opt-017", name: "Chamomile", group: "type" },
      { id: "opt-018", name: "Peppermint", group: "type" },
      { id: "opt-019", name: "Jasmine", group: "type" },
      {
        id: "opt-020",
        name: "Honey",
        group: "additions",
        unit_price: 30
      },
      {
        id: "opt-021",
        name: "Lemon",
        group: "additions",
        unit_price: 20
      }
    ]
  },
  {
    id: "bev-003",
    name: "Fresh Juice Bar",
    unit_price: 550,
    category: "beverages",
    description: "Cold-pressed fresh juices and smoothies",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300",
    options: [
      { id: "opt-022", name: "Orange", group: "juice" },
      { id: "opt-023", name: "Apple", group: "juice" },
      { id: "opt-024", name: "Green Machine", group: "juice" },
      { id: "opt-025", name: "Berry Blast", group: "smoothie" },
      { id: "opt-026", name: "Tropical Paradise", group: "smoothie" },
      {
        id: "opt-027",
        name: "Protein Boost",
        group: "smoothie",
        unit_price: 100
      }
    ]
  },
  {
    id: "bev-004",
    name: "Sparkling Water Station",
    unit_price: 250,
    category: "beverages",
    description: "Premium sparkling and still water with fruit infusions",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=300",
    options: [
      { id: "opt-028", name: "Still Water", group: "type" },
      { id: "opt-029", name: "Sparkling Water", group: "type" },
      { id: "opt-030", name: "Cucumber Mint", group: "infusion" },
      { id: "opt-031", name: "Lemon Lime", group: "infusion" },
      { id: "opt-032", name: "Berry Mix", group: "infusion" }
    ]
  },
  // Breakfast
  {
    id: "brf-001",
    name: "Artisan Pastry Selection",
    unit_price: 650,
    category: "breakfast",
    description: "Fresh baked croissants, danish, and muffins",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300",
    options: [
      { id: "opt-033", name: "Butter Croissant", group: "pastry" },
      {
        id: "opt-034",
        name: "Almond Croissant",
        group: "pastry",
        unit_price: 100
      },
      { id: "opt-035", name: "Pain au Chocolat", group: "pastry" },
      { id: "opt-036", name: "Blueberry Muffin", group: "muffin" },
      { id: "opt-037", name: "Banana Walnut Muffin", group: "muffin" },
      { id: "opt-038", name: "Double Choc Chip Muffin", group: "muffin" }
    ]
  },
  {
    id: "brf-002",
    name: "Breakfast Bowl Bar",
    unit_price: 1250,
    category: "breakfast",
    description: "Build-your-own breakfast bowls with fresh toppings",
    dietary: ["vegetarian", "gluten-free"],
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=300",
    options: [
      { id: "opt-039", name: "Greek Yogurt", group: "base" },
      { id: "opt-040", name: "Overnight Oats", group: "base" },
      {
        id: "opt-041",
        name: "Acai Bowl",
        group: "base",
        unit_price: 200
      },
      { id: "opt-042", name: "Fresh Berries", group: "toppings" },
      { id: "opt-043", name: "Granola", group: "toppings" },
      { id: "opt-044", name: "Honey", group: "toppings" },
      { id: "opt-045", name: "Chia Seeds", group: "toppings" },
      { id: "opt-046", name: "Coconut Flakes", group: "toppings" }
    ]
  },
  {
    id: "brf-003",
    name: "Executive Breakfast Platter",
    unit_price: 1850,
    category: "breakfast",
    description: "Premium breakfast selection with eggs, bacon, and sides",
    dietary: [],
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300",
    options: [
      { id: "opt-047", name: "Scrambled Eggs", group: "eggs" },
      { id: "opt-048", name: "Poached Eggs", group: "eggs" },
      {
        id: "opt-049",
        name: "Eggs Benedict",
        group: "eggs",
        unit_price: 300
      },
      { id: "opt-050", name: "Crispy Bacon", group: "protein" },
      { id: "opt-051", name: "Sausages", group: "protein" },
      {
        id: "opt-052",
        name: "Smoked Salmon",
        group: "protein",
        unit_price: 400
      },
      { id: "opt-053", name: "Hash Browns", group: "sides" },
      { id: "opt-054", name: "Grilled Tomato", group: "sides" }
    ]
  },
  // Salads
  {
    id: "sal-001",
    name: "Mediterranean Power Bowl",
    unit_price: 1450,
    category: "salads",
    description: "Fresh Mediterranean ingredients with quinoa and feta",
    dietary: ["vegetarian", "gluten-free"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
    options: [
      {
        id: "opt-055",
        name: "Grilled Chicken",
        group: "protein",
        unit_price: 300
      },
      {
        id: "opt-056",
        name: "Falafel",
        group: "protein",
        unit_price: 200
      },
      {
        id: "opt-057",
        name: "Extra Feta",
        group: "extras",
        unit_price: 150
      },
      {
        id: "opt-058",
        name: "Avocado",
        group: "extras",
        unit_price: 200
      }
    ]
  },
  {
    id: "sal-002",
    name: "Asian Fusion Salad",
    unit_price: 1350,
    category: "salads",
    description: "Crisp vegetables with sesame dressing and edamame",
    dietary: ["vegetarian", "vegan", "dairy-free"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
    options: [
      {
        id: "opt-059",
        name: "Teriyaki Chicken",
        group: "protein",
        unit_price: 300
      },
      { id: "opt-060", name: "Tofu", group: "protein", unit_price: 150 },
      { id: "opt-061", name: "Crispy Noodles", group: "toppings" },
      { id: "opt-062", name: "Sesame Seeds", group: "toppings" }
    ]
  },
  // Sandwiches & Wraps
  {
    id: "snd-001",
    name: "Gourmet Sandwich Selection",
    unit_price: 1250,
    category: "sandwiches",
    description: "Premium sandwiches on artisan breads",
    dietary: [],
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300",
    options: [
      { id: "opt-063", name: "Turkey & Avocado", group: "filling" },
      { id: "opt-064", name: "Ham & Swiss", group: "filling" },
      {
        id: "opt-065",
        name: "Roast Beef & Horseradish",
        group: "filling"
      },
      { id: "opt-066", name: "Caprese", group: "filling" },
      { id: "opt-067", name: "Sourdough", group: "bread" },
      { id: "opt-068", name: "Multigrain", group: "bread" },
      { id: "opt-069", name: "Ciabatta", group: "bread" }
    ]
  },
  {
    id: "snd-002",
    name: "Fresh Wrap Station",
    unit_price: 1150,
    category: "sandwiches",
    description: "Build-your-own wraps with fresh ingredients",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1565299585323-38174d4d6174?w=300",
    options: [
      { id: "opt-070", name: "Grilled Chicken", group: "protein" },
      { id: "opt-071", name: "Tuna Salad", group: "protein" },
      { id: "opt-072", name: "Hummus & Veggie", group: "protein" },
      { id: "opt-073", name: "Spinach Tortilla", group: "wrap" },
      { id: "opt-074", name: "Whole Wheat", group: "wrap" },
      { id: "opt-075", name: "Sun-dried Tomato", group: "wrap" }
    ]
  },
  // Hot Meals
  {
    id: "hot-001",
    name: "Pasta Bar",
    unit_price: 1650,
    category: "hot-meals",
    description: "Fresh pasta with choice of sauces and toppings",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300",
    options: [
      { id: "opt-076", name: "Penne", group: "pasta" },
      { id: "opt-077", name: "Fettuccine", group: "pasta" },
      { id: "opt-078", name: "Spaghetti", group: "pasta" },
      { id: "opt-079", name: "Marinara", group: "sauce" },
      { id: "opt-080", name: "Alfredo", group: "sauce" },
      { id: "opt-081", name: "Pesto", group: "sauce" },
      {
        id: "opt-082",
        name: "Grilled Chicken",
        group: "protein",
        unit_price: 300
      },
      {
        id: "opt-083",
        name: "Italian Sausage",
        group: "protein",
        unit_price: 350
      }
    ]
  },
  {
    id: "hot-002",
    name: "Asian Noodle Station",
    unit_price: 1550,
    category: "hot-meals",
    description: "Wok-fried noodles with fresh vegetables",
    dietary: ["dairy-free"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300",
    options: [
      { id: "opt-084", name: "Pad Thai", group: "dish" },
      { id: "opt-085", name: "Singapore Noodles", group: "dish" },
      { id: "opt-086", name: "Beef Black Bean", group: "dish" },
      { id: "opt-087", name: "Vegetable Stir Fry", group: "dish" },
      {
        id: "opt-088",
        name: "Extra Prawns",
        group: "protein",
        unit_price: 400
      },
      { id: "opt-089", name: "Tofu", group: "protein", unit_price: 150 }
    ]
  },
  // Appetizers
  {
    id: "app-001",
    name: "Charcuterie & Cheese Board",
    unit_price: 2200,
    category: "appetizers",
    description: "Curated selection of meats, cheeses, and accompaniments",
    dietary: [],
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300",
    options: [
      { id: "opt-090", name: "Small (6-8 people)", group: "size" },
      {
        id: "opt-091",
        name: "Medium (10-12 people)",
        group: "size",
        unit_price: 800
      },
      {
        id: "opt-092",
        name: "Large (15-20 people)",
        group: "size",
        unit_price: 1600
      },
      {
        id: "opt-093",
        name: "Premium Selection",
        group: "upgrade",
        unit_price: 500
      }
    ]
  },
  {
    id: "app-002",
    name: "Fresh Spring Rolls",
    unit_price: 950,
    category: "appetizers",
    description: "Vietnamese-style fresh rolls with dipping sauce",
    dietary: ["dairy-free", "nut-free"],
    image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=300",
    options: [
      { id: "opt-094", name: "Prawn & Avocado", group: "filling" },
      { id: "opt-095", name: "Chicken & Herbs", group: "filling" },
      { id: "opt-096", name: "Tofu & Vegetables", group: "filling" },
      { id: "opt-097", name: "Peanut Sauce", group: "sauce" },
      { id: "opt-098", name: "Sweet Chili", group: "sauce" }
    ]
  },
  // Desserts
  {
    id: "des-001",
    name: "Artisan Dessert Platter",
    unit_price: 1450,
    category: "desserts",
    description: "Selection of petit fours, macarons, and mini tarts",
    dietary: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300",
    options: [
      { id: "opt-099", name: "Mixed Selection", group: "type" },
      { id: "opt-100", name: "Chocolate Focus", group: "type" },
      { id: "opt-101", name: "Fruit Focus", group: "type" },
      {
        id: "opt-102",
        name: "Gluten-Free Options",
        group: "dietary",
        unit_price: 200
      }
    ]
  },
  {
    id: "des-002",
    name: "Fresh Fruit Display",
    unit_price: 850,
    category: "desserts",
    description: "Seasonal fresh fruit beautifully presented",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300",
    options: [
      { id: "opt-103", name: "Regular Display", group: "size" },
      {
        id: "opt-104",
        name: "Premium Exotic Fruits",
        group: "upgrade",
        unit_price: 300
      },
      {
        id: "opt-105",
        name: "Chocolate Dip",
        group: "extras",
        unit_price: 200
      }
    ]
  },
  // Platters
  {
    id: "plt-001",
    name: "Executive Lunch Platter",
    unit_price: 2850,
    category: "platters",
    description: "Complete lunch solution for meetings and events",
    dietary: [],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300",
    options: [
      { id: "opt-106", name: "Serves 8-10", group: "size" },
      {
        id: "opt-107",
        name: "Serves 12-15",
        group: "size",
        unit_price: 1e3
      },
      {
        id: "opt-108",
        name: "Serves 18-20",
        group: "size",
        unit_price: 2e3
      },
      { id: "opt-109", name: "Vegetarian Option", group: "dietary" },
      {
        id: "opt-110",
        name: "Gluten-Free Option",
        group: "dietary",
        unit_price: 200
      }
    ]
  },
  // Snacks
  {
    id: "snk-001",
    name: "Healthy Snack Mix",
    unit_price: 650,
    category: "snacks",
    description: "Mix of nuts, dried fruits, and seeds",
    dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300",
    options: [
      { id: "opt-111", name: "Regular Mix", group: "type" },
      { id: "opt-112", name: "Tropical Mix", group: "type" },
      {
        id: "opt-113",
        name: "Protein Mix",
        group: "type",
        unit_price: 100
      }
    ]
  }
];
var CATERING_PACKAGES = [
  {
    id: "pkg-001",
    name: "Morning Meeting Package",
    description: "Perfect for early morning meetings and briefings",
    price: 2200,
    serves: "8-12 people",
    duration: "2-3 hours",
    items: ["bev-001", "bev-002", "brf-001", "snk-001"],
    dietary_options: ["vegetarian", "gluten-free"]
  },
  {
    id: "pkg-002",
    name: "Executive Lunch Package",
    description: "Premium lunch solution for important meetings",
    price: 4500,
    serves: "8-12 people",
    duration: "2-4 hours",
    items: ["bev-001", "sal-001", "snd-001", "app-001", "des-001"],
    dietary_options: ["vegetarian", "gluten-free"]
  },
  {
    id: "pkg-003",
    name: "All-Day Conference Package",
    description: "Complete catering for full-day events",
    price: 7500,
    serves: "15-20 people",
    duration: "8 hours",
    items: [
      "bev-001",
      "bev-002",
      "brf-002",
      "sal-002",
      "hot-001",
      "app-002",
      "des-002"
    ],
    dietary_options: ["vegetarian", "vegan", "gluten-free", "dairy-free"]
  },
  {
    id: "pkg-004",
    name: "Networking Reception Package",
    description: "Elegant finger foods and drinks for networking events",
    price: 3800,
    serves: "20-30 people",
    duration: "3-4 hours",
    items: ["bev-003", "app-001", "app-002", "des-001"],
    dietary_options: ["vegetarian", "dairy-free"]
  },
  {
    id: "pkg-005",
    name: "Training Workshop Package",
    description: "Energizing meals for learning sessions",
    price: 3200,
    serves: "12-16 people",
    duration: "6 hours",
    items: ["bev-001", "brf-002", "snd-002", "snk-001"],
    dietary_options: ["vegetarian", "vegan", "gluten-free"]
  }
];
var SERVICE_TYPES = [
  {
    id: "buffet",
    name: "Buffet Service",
    description: "Self-service buffet setup",
    setup_time: 30,
    breakdown_time: 30,
    staff_required: 1,
    price_modifier: 1
  },
  {
    id: "plated",
    name: "Plated Service",
    description: "Individual plated meals served to guests",
    setup_time: 45,
    breakdown_time: 45,
    staff_required: 2,
    price_modifier: 1.3
  },
  {
    id: "station",
    name: "Food Stations",
    description: "Multiple themed food stations",
    setup_time: 60,
    breakdown_time: 45,
    staff_required: 2,
    price_modifier: 1.2
  },
  {
    id: "cocktail",
    name: "Cocktail Style",
    description: "Pass-around finger foods and canap\xE9s",
    setup_time: 30,
    breakdown_time: 30,
    staff_required: 3,
    price_modifier: 1.4
  }
];
var SUPPLIERS = [
  {
    id: "sup-001",
    name: "Gourmet Events Catering",
    rating: 4.8,
    specialty: "Corporate Events",
    location: "Sydney",
    min_order: 1e3,
    delivery_fee: 150,
    setup_fee: 200
  },
  {
    id: "sup-002",
    name: "Fresh & Local Kitchen",
    rating: 4.6,
    specialty: "Healthy Options",
    location: "Melbourne",
    min_order: 800,
    delivery_fee: 120,
    setup_fee: 150
  },
  {
    id: "sup-003",
    name: "Premium Dining Solutions",
    rating: 4.9,
    specialty: "Executive Catering",
    location: "Brisbane",
    min_order: 1500,
    delivery_fee: 200,
    setup_fee: 300
  }
];
function generateCateringOrder(event) {
  const duration = Math.abs(differenceInMinutes(event.event_end * 1e3, event.event_start * 1e3));
  const attendeeCount = event.attendees?.length || predictableRandomInt(15, 5);
  let selectedItems = [];
  let orderType = "individual";
  let totalPrice = 0;
  if (attendeeCount >= 8 && duration >= 120) {
    const suitablePackages = CATERING_PACKAGES.filter((pkg) => {
      const serves = parseInt(pkg.serves.split("-")[0]);
      const maxServes = parseInt(pkg.serves.split("-")[1]) || serves + 5;
      return attendeeCount >= serves && attendeeCount <= maxServes + 5;
    });
    if (suitablePackages.length > 0) {
      const selectedPackage = suitablePackages[predictableRandomInt(suitablePackages.length)];
      orderType = "package";
      totalPrice = selectedPackage.price;
      selectedItems = selectedPackage.items.map((itemId) => {
        const item = MOCK_MENU.find((m) => m.id === itemId);
        return __spreadProps(__spreadValues({}, item), {
          quantity: Math.ceil(attendeeCount / 8),
          package_item: true,
          options: []
        });
      }).filter(Boolean);
    }
  }
  if (selectedItems.length === 0) {
    const itemCount = Math.min(predictableRandomInt(5, 2), Math.ceil(duration / 60));
    const selectedItemIds = /* @__PURE__ */ new Set();
    while (selectedItems.length < itemCount && selectedItemIds.size < MOCK_MENU.length) {
      const item = MOCK_MENU[predictableRandomInt(MOCK_MENU.length)];
      if (!selectedItemIds.has(item.id)) {
        selectedItemIds.add(item.id);
        const quantity = Math.max(1, Math.ceil(attendeeCount / 8));
        const itemPrice = item.unit_price * quantity;
        totalPrice += itemPrice;
        selectedItems.push(__spreadProps(__spreadValues({}, item), {
          quantity,
          package_item: false,
          options: item.options?.slice(0, predictableRandomInt(3)) || []
        }));
      }
    }
  }
  const serviceType = SERVICE_TYPES[predictableRandomInt(SERVICE_TYPES.length)];
  const serviceModifier = serviceType.price_modifier;
  totalPrice *= serviceModifier;
  const supplier = SUPPLIERS[predictableRandomInt(SUPPLIERS.length)];
  const deliveryFee = supplier.delivery_fee;
  const setupFee = supplier.setup_fee;
  totalPrice += deliveryFee + setupFee;
  const deliveryOffset = predictableRandomInt(30, 30);
  const deliverAt = new Date(event.event_start * 1e3 - deliveryOffset * 60 * 1e3);
  const dietaryNeeds = DIETARY_RESTRICTIONS.filter(() => predictableRandomInt(8) === 0);
  return __spreadValues({
    id: `order-${String(predictableRandomInt(999999, 1e5))}`,
    event_id: event.id,
    invoice_number: `INV-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(predictableRandomInt(99999, 1e4))}`,
    charge_code: `CC-${String(predictableRandomInt(9999, 1e3))}`,
    order_type: orderType,
    status: ["pending", "confirmed", "preparing", "delivered"][predictableRandomInt(4)],
    // Timing
    order_date: new Date(Date.now() - predictableRandomInt(7) * 24 * 60 * 60 * 1e3).toISOString(),
    deliver_at: deliverAt.toISOString(),
    setup_time: serviceType.setup_time,
    breakdown_time: serviceType.breakdown_time,
    // Service details
    service_type: serviceType,
    supplier,
    guest_count: attendeeCount,
    // Items and pricing
    items: selectedItems,
    subtotal: Math.floor(totalPrice - deliveryFee - setupFee),
    delivery_fee: deliveryFee,
    setup_fee: setupFee,
    tax: Math.floor(totalPrice * 0.1),
    // 10% tax
    total: Math.floor(totalPrice * 1.1),
    // Special requirements
    dietary_requirements: dietaryNeeds.map((d) => d.name),
    special_instructions: predictableRandomInt(3) === 0 ? [
      "Please use company branded napkins",
      "Set up 15 minutes before event start",
      "Vegetarian options on separate table",
      "Please include serving utensils",
      "No pork products",
      "Nut-free preparation required"
    ][predictableRandomInt(6)] : "",
    // Contact and delivery
    delivery_contact: event.attendees?.[0]?.name || "Event Organizer",
    delivery_phone: event.attendees?.[0]?.phone || "+61 2 9876 5432",
    delivery_location: `Meeting Room - ${event.location || "TBC"}`,
    access_instructions: "Reception will direct to meeting room",
    // Billing
    department: event.extension_data?.department || "General",
    cost_center: event.extension_data?.cost_center || "events",
    project_code: event.extension_data?.project_code || null,
    // Metadata
    notes: [
      "Standard corporate catering order",
      "Client meeting refreshments",
      "Team celebration catering",
      "Training session meals",
      "Board meeting premium service"
    ][predictableRandomInt(5)],
    created_by: event.attendees?.[0]?.email || "system@place.tech",
    last_modified: (/* @__PURE__ */ new Date()).toISOString()
  }, predictableRandomInt(4) === 0 && {
    rating: predictableRandomInt(5, 3) + 1,
    // 4-5 stars
    feedback: [
      "Excellent food quality and presentation",
      "Delivered on time, great service",
      "Fresh ingredients, everyone loved it",
      "Professional setup and cleanup",
      "Good variety, accommodated dietary needs"
    ][predictableRandomInt(5)],
    would_recommend: true
  });
}

// libs/mocks/src/lib/api/zone.data.ts
var MOCK_ORGS = [
  {
    id: "zone-org",
    created_at: getUnixTime(subMonths(Date.now(), 24)),
    updated_at: getUnixTime(subMonths(Date.now(), 1)),
    name: "PlaceOS Global",
    display_name: "PlaceOS Global",
    description: "Global headquarters and innovation centers for PlaceOS technology solutions",
    tags: ["org", "headquarters", "technology"],
    count: 2,
    // Number of regions
    capacity: 4500,
    // Total capacity across all buildings
    parent_id: "",
    triggers: [],
    settings: {
      timezone: "Australia/Sydney",
      booking_rules: {
        advance_booking_days: 90,
        max_booking_duration: 8 * 60,
        // 8 hours
        auto_release_minutes: 15
      },
      work_hours: {
        start: "07:00",
        end: "19:00",
        days: [1, 2, 3, 4, 5]
        // Monday to Friday
      },
      features: [
        "wifi",
        "parking",
        "accessibility",
        "catering",
        "security"
      ]
    },
    contact: {
      email: "facilities@place.tech",
      phone: "+61 2 8765 4321",
      address: "Sydney Technology Park, NSW, Australia"
    },
    metadata: {
      founded: 2018,
      employee_count: 1200,
      sustainability_rating: "A+",
      certifications: [
        "Green Building Council",
        "ISO 14001",
        "LEED Platinum"
      ]
    }
  }
];
var MOCK_REGIONS = [
  {
    id: "region-sydney",
    created_at: getUnixTime(subMonths(Date.now(), 18)),
    updated_at: getUnixTime(subMonths(Date.now(), 2)),
    name: "Sydney Region",
    display_name: "Sydney Metropolitan Region",
    description: "Primary business region covering Sydney and surrounding areas",
    tags: ["region", "sydney", "metropolitan"],
    count: 3,
    // Number of buildings
    capacity: 2700,
    parent_id: "zone-org",
    triggers: [],
    settings: {
      timezone: "Australia/Sydney",
      region_code: "SYD",
      business_hours: {
        start: "07:00",
        end: "19:00",
        timezone: "Australia/Sydney"
      }
    },
    contact: {
      email: "sydney@place.tech",
      phone: "+61 2 8765 4322",
      address: "Sydney, NSW, Australia"
    },
    boundaries: {
      north: -33.5,
      south: -34.2,
      east: 151.5,
      west: 150.5
    }
  },
  {
    id: "region-melbourne",
    created_at: getUnixTime(subMonths(Date.now(), 15)),
    updated_at: getUnixTime(subMonths(Date.now(), 1)),
    name: "Melbourne Region",
    display_name: "Melbourne Metropolitan Region",
    description: "Secondary business region covering Melbourne and Victoria",
    tags: ["region", "melbourne", "metropolitan"],
    count: 2,
    // Number of buildings
    capacity: 1800,
    parent_id: "zone-org",
    triggers: [],
    settings: {
      timezone: "Australia/Melbourne",
      region_code: "MEL",
      business_hours: {
        start: "07:30",
        end: "19:30",
        timezone: "Australia/Melbourne"
      }
    },
    contact: {
      email: "melbourne@place.tech",
      phone: "+61 3 8765 4323",
      address: "Melbourne, VIC, Australia"
    },
    boundaries: {
      north: -37.5,
      south: -38.2,
      east: 145.5,
      west: 144.5
    }
  }
];
var MOCK_BUILDINGS = [
  {
    id: "bld-01",
    name: "Innovation Hub",
    display_name: "Innovation Hub",
    description: "Modern workspace focused on collaboration and innovation with state-of-the-art facilities",
    tags: ["building", "innovation", "modern", "headquarters"],
    count: 4,
    // Number of levels (including parking)
    capacity: 1200,
    parent_id: "region-sydney",
    triggers: [],
    levels: ["lvl-G", "lvl-1", "lvl-2", "lvl-P1"],
    address: {
      street: "123 Technology Drive",
      suburb: "Sydney Olympic Park",
      state: "NSW",
      postcode: "2127",
      country: "Australia",
      coordinates: {
        lat: -33.8473,
        lng: 151.0647
      }
    },
    features: {
      parking_spaces: 300,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: true,
      rooftop_garden: true,
      ev_charging: 20,
      security_level: "high"
    },
    building_details: {
      year_built: 2020,
      architect: "Foster + Partners",
      total_floors: 12,
      basement_levels: 2,
      floor_area_sqm: 8500,
      energy_rating: "6 Star Green Star",
      construction_type: "Steel frame with glass facade",
      elevator_count: 4,
      stair_count: 3
    }
  },
  {
    id: "bld-02",
    name: "Executive Center",
    display_name: "Executive Center",
    description: "Premium business center with executive suites, boardrooms, and high-end meeting facilities",
    tags: ["building", "executive", "premium", "business"],
    count: 5,
    capacity: 800,
    parent_id: "region-sydney",
    triggers: [],
    levels: ["lvl-G", "lvl-2", "lvl-3", "lvl-4", "lvl-P1"],
    address: {
      street: "456 Collins Street",
      suburb: "Sydney CBD",
      state: "NSW",
      postcode: "2000",
      country: "Australia",
      coordinates: {
        lat: -33.8688,
        lng: 151.2093
      }
    },
    features: {
      parking_spaces: 200,
      accessibility: true,
      bike_storage: false,
      shower_facilities: true,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 15,
      security_level: "premium"
    },
    building_details: {
      year_built: 2018,
      architect: "Woods Bagot",
      total_floors: 25,
      basement_levels: 3,
      floor_area_sqm: 6200,
      energy_rating: "5 Star NABERS",
      construction_type: "Reinforced concrete with marble facade",
      elevator_count: 6,
      stair_count: 2
    }
  },
  {
    id: "bld-03",
    name: "Creative Campus",
    display_name: "Creative Campus",
    description: "Flexible workspace designed for creative teams with open collaboration areas and maker spaces",
    tags: ["building", "creative", "flexible", "collaboration"],
    count: 3,
    capacity: 500,
    parent_id: "region-sydney",
    triggers: [],
    levels: ["lvl-G", "lvl-M", "lvl-1"],
    address: {
      street: "789 Creative Boulevard",
      suburb: "Pyrmont",
      state: "NSW",
      postcode: "2009",
      country: "Australia",
      coordinates: {
        lat: -33.8688,
        lng: 151.1957
      }
    },
    features: {
      parking_spaces: 150,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: true,
      rooftop_garden: true,
      ev_charging: 25,
      security_level: "standard"
    },
    building_details: {
      year_built: 2021,
      architect: "BVN Architecture",
      total_floors: 8,
      basement_levels: 1,
      floor_area_sqm: 4800,
      energy_rating: "6 Star Green Star",
      construction_type: "Timber and steel hybrid with living walls",
      elevator_count: 2,
      stair_count: 3
    }
  },
  {
    id: "bld-04",
    name: "Melbourne Tower",
    display_name: "Melbourne Tower",
    description: "High-rise office building in Melbourne CBD with premium corporate facilities",
    tags: ["building", "corporate", "high-rise", "premium"],
    count: 6,
    capacity: 1e3,
    parent_id: "region-melbourne",
    triggers: [],
    levels: ["lvl-G", "lvl-1", "lvl-2", "lvl-3", "lvl-4", "lvl-P1"],
    address: {
      street: "100 Collins Street",
      suburb: "Melbourne",
      state: "VIC",
      postcode: "3000",
      country: "Australia",
      coordinates: {
        lat: -37.8136,
        lng: 144.9631
      }
    },
    features: {
      parking_spaces: 250,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: true,
      rooftop_garden: false,
      ev_charging: 30,
      security_level: "high"
    },
    building_details: {
      year_built: 2019,
      architect: "Hassell",
      total_floors: 35,
      basement_levels: 4,
      floor_area_sqm: 12e3,
      energy_rating: "5 Star Green Star",
      construction_type: "Steel and glass with sustainable features",
      elevator_count: 8,
      stair_count: 4
    }
  },
  {
    id: "bld-05",
    name: "Melbourne Innovation Lab",
    display_name: "Melbourne Innovation Lab",
    description: "State-of-the-art research and development facility with collaborative workspaces",
    tags: ["building", "innovation", "research", "lab"],
    count: 3,
    capacity: 800,
    parent_id: "region-melbourne",
    triggers: [],
    levels: ["lvl-G", "lvl-1", "lvl-2"],
    address: {
      street: "250 Exhibition Street",
      suburb: "Melbourne",
      state: "VIC",
      postcode: "3000",
      country: "Australia",
      coordinates: {
        lat: -37.8103,
        lng: 144.9717
      }
    },
    features: {
      parking_spaces: 180,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: true,
      ev_charging: 20,
      security_level: "high"
    },
    building_details: {
      year_built: 2022,
      architect: "ARM Architecture",
      total_floors: 8,
      basement_levels: 1,
      floor_area_sqm: 7500,
      energy_rating: "6 Star Green Star",
      construction_type: "Cross-laminated timber and steel",
      elevator_count: 3,
      stair_count: 2
    }
  }
];
var MOCK_ZONES = [];
var createMockLevel = (id, idx, building, levelCode = "1") => {
  const levelNumber = levelCode === "G" ? 0 : levelCode === "M" ? 0.5 : levelCode.startsWith("P") ? -parseInt(levelCode.substring(1)) : parseInt(levelCode) || 1;
  const isGroundFloor = levelCode === "G";
  const isMezzanine = levelCode === "M";
  const isParkingLevel = levelCode.startsWith("P");
  let levelType = "office";
  if (isParkingLevel)
    levelType = "parking";
  else if (isGroundFloor)
    levelType = "lobby";
  else if (isMezzanine)
    levelType = "mixed-use";
  const capacityByType = {
    parking: 0,
    lobby: 50,
    "mixed-use": Math.floor(building.capacity * 0.2),
    office: Math.floor(building.capacity * 0.4)
  };
  const levelName = isParkingLevel ? `Parking Level ${levelCode.substring(1)}` : isGroundFloor ? "Ground Floor" : isMezzanine ? "Mezzanine" : `Level ${levelCode}`;
  const displayName = levelName;
  const features = [];
  if (isGroundFloor)
    features.push("reception", "lobby", "cafe", "security");
  if (isMezzanine)
    features.push("meeting-rooms", "break-areas", "informal-seating");
  if (levelType === "office")
    features.push("workstations", "meeting-rooms", "collaboration-spaces");
  if (isParkingLevel)
    features.push("parking", "ev-charging", "bike-storage");
  return {
    id: `${building.id}_${id}`,
    name: levelName,
    display_name: displayName,
    parent_id: building.id,
    description: `${levelName} of ${building.name} featuring ${features.join(", ")}`,
    tags: ["level", levelType, building.tags[1]].filter(Boolean),
    map_id: `assets/maps/level_${levelCode}.svg`,
    code: `${building.name.substring(0, 3).toUpperCase()}-${levelCode}`,
    type: levelType,
    count: predictableRandomInt(15, 5),
    // Number of spaces/rooms
    capacity: capacityByType[levelType] || Math.floor(building.capacity * 0.3),
    location: `${building.address.coordinates.lat},${building.address.coordinates.lng}`,
    level_number: levelNumber,
    floor_area_sqm: Math.floor(building.building_details.floor_area_sqm / building.count),
    ceiling_height: levelType === "lobby" ? 4.5 : isParkingLevel ? 2.4 : 2.8,
    features,
    accessibility: {
      wheelchair_accessible: true,
      elevator_access: !isParkingLevel || building.building_details.elevator_count > 0,
      accessible_bathrooms: levelType !== "parking",
      hearing_loop: isGroundFloor || levelType === "office"
    },
    utilities: {
      power_outlets: levelType === "office" ? "extensive" : "standard",
      data_points: levelType === "office" ? "fiber_optic" : "standard",
      hvac_zones: Math.ceil((capacityByType[levelType] || 50) / 50),
      fire_safety: "compliant",
      security_systems: building.features.security_level
    },
    spaces: {
      meeting_rooms: levelType === "office" ? predictableRandomInt(8, 3) : isMezzanine ? predictableRandomInt(4, 2) : 0,
      workstations: levelType === "office" ? Math.floor((capacityByType[levelType] || 0) * 0.8) : 0,
      break_areas: levelType !== "parking" ? predictableRandomInt(3, 1) : 0,
      storage_rooms: predictableRandomInt(4, 1),
      bathrooms: isParkingLevel ? 1 : predictableRandomInt(4, 2),
      parking_spaces: isParkingLevel ? Math.floor(building.features.parking_spaces / 2) : 0
    },
    created_at: getUnixTime(subMonths(Date.now(), predictableRandomInt(36, 6))),
    updated_at: getUnixTime(subMonths(Date.now(), predictableRandomInt(3, 0))),
    settings: {
      booking_enabled: levelType !== "parking",
      public_access: isGroundFloor,
      after_hours_access: levelType === "office" ? "keycard" : "restricted",
      temperature_range: {
        min: 20,
        max: 26
      },
      lighting: {
        type: levelType === "office" ? "LED with daylight sensors" : "LED standard",
        zones: Math.ceil((capacityByType[levelType] || 30) / 30)
      }
    },
    maintenance: {
      last_inspection: getUnixTime(subMonths(Date.now(), predictableRandomInt(6, 1))),
      next_inspection: getUnixTime(new Date(Date.now() + predictableRandomInt(90, 30) * 24 * 60 * 60 * 1e3)),
      cleaning_schedule: isParkingLevel ? "weekly" : "daily",
      maintenance_contact: "Facilities Management"
    }
  };
};
var MOCK_LEVELS = MOCK_BUILDINGS.map((bld) => bld.levels.map((level, idx) => createMockLevel(level, idx, bld, level.split("-")[1]))).reduce((prev, current) => prev.concat(current), []);

// libs/mocks/src/lib/api/spaces.data.ts
var ROOM_FEATURES = {
  "Meeting Room": [
    "Whiteboard",
    "Display Screen",
    "Video Conference",
    "Phone"
  ],
  "Conference Room": [
    "Projector",
    "Video Conference",
    "Whiteboard",
    "Audio System",
    "Phone"
  ],
  Boardroom: [
    "Large Display",
    "Video Conference",
    "Audio System",
    "Whiteboard",
    "Climate Control",
    "Executive Seating"
  ],
  "Training Room": [
    "Projector",
    "Whiteboard",
    "Flipchart",
    "Audio System",
    "Breakout Tables"
  ],
  "Phone Booth": ["Phone", "Acoustic Privacy", "Power Outlet"],
  "Collaboration Space": [
    "Whiteboard",
    "Moveable Furniture",
    "Power Outlets",
    "Informal Seating"
  ],
  "Event Space": [
    "Audio System",
    "Projector",
    "Stage/Platform",
    "Catering Setup",
    "Flexible Seating"
  ],
  "Break Room": [
    "Kitchen Facilities",
    "Refrigerator",
    "Microwave",
    "Coffee Machine",
    "Seating"
  ],
  "Focus Room": [
    "Acoustic Privacy",
    "Desk",
    "Power Outlets",
    "Natural Light"
  ],
  "Presentation Room": [
    "Large Display",
    "Audio System",
    "Tiered Seating",
    "Lighting Control"
  ]
};
var CAPACITY_RANGES = {
  "Meeting Room": { min: 4, max: 12 },
  "Conference Room": { min: 8, max: 20 },
  Boardroom: { min: 10, max: 25 },
  "Training Room": { min: 15, max: 50 },
  "Phone Booth": { min: 1, max: 2 },
  "Collaboration Space": { min: 6, max: 15 },
  "Event Space": { min: 50, max: 200 },
  "Break Room": { min: 10, max: 30 },
  "Focus Room": { min: 1, max: 3 },
  "Presentation Room": { min: 20, max: 100 }
};
var BUILDING_THEMES = {
  "bld-01": {
    name: "Innovation Hub",
    floors: ["Ground", "Level 1", "Level 2"],
    style: "Modern",
    year: 2020
  },
  "bld-02": {
    name: "Executive Center",
    floors: ["Ground", "Level 2", "Level 3", "Level 4"],
    style: "Premium",
    year: 2018
  },
  "bld-03": {
    name: "Creative Campus",
    floors: ["Ground", "Mezzanine", "Level 1"],
    style: "Collaborative",
    year: 2021
  },
  "bld-04": {
    name: "Melbourne Tower",
    floors: ["Ground", "Level 1", "Level 2", "Level 3", "Level 4"],
    style: "Corporate",
    year: 2019
  },
  "bld-05": {
    name: "Melbourne Innovation Lab",
    floors: ["Ground", "Level 1", "Level 2"],
    style: "Research",
    year: 2022
  }
};
var REALISTIC_ROOM_NAMES = [
  // Meeting Rooms
  {
    name: "Sydney Harbour",
    type: "Meeting Room",
    theme: "Australian Cities"
  },
  { name: "Melbourne Cup", type: "Meeting Room", theme: "Australian Cities" },
  {
    name: "Brisbane River",
    type: "Meeting Room",
    theme: "Australian Cities"
  },
  { name: "Perth Skyline", type: "Meeting Room", theme: "Australian Cities" },
  {
    name: "Adelaide Hills",
    type: "Meeting Room",
    theme: "Australian Cities"
  },
  { name: "Darwin Sunset", type: "Meeting Room", theme: "Australian Cities" },
  // Conference Rooms
  { name: "Innovation Lab", type: "Conference Room", theme: "Business" },
  { name: "Strategy Center", type: "Conference Room", theme: "Business" },
  { name: "Think Tank", type: "Conference Room", theme: "Business" },
  { name: "Solution Studio", type: "Conference Room", theme: "Business" },
  { name: "Discovery Room", type: "Conference Room", theme: "Business" },
  { name: "Vision Quest", type: "Conference Room", theme: "Business" },
  // Boardrooms
  { name: "Executive Boardroom", type: "Boardroom", theme: "Executive" },
  { name: "Chairman's Suite", type: "Boardroom", theme: "Executive" },
  { name: "Directors Lounge", type: "Boardroom", theme: "Executive" },
  { name: "Leadership Circle", type: "Boardroom", theme: "Executive" },
  // Training Rooms
  { name: "Learning Hub Alpha", type: "Training Room", theme: "Education" },
  {
    name: "Development Center Beta",
    type: "Training Room",
    theme: "Education"
  },
  { name: "Skills Workshop", type: "Training Room", theme: "Education" },
  { name: "Knowledge Exchange", type: "Training Room", theme: "Education" },
  { name: "Growth Academy", type: "Training Room", theme: "Education" },
  // Phone Booths
  { name: "Call Pod 1", type: "Phone Booth", theme: "Functional" },
  { name: "Call Pod 2", type: "Phone Booth", theme: "Functional" },
  { name: "Call Pod 3", type: "Phone Booth", theme: "Functional" },
  { name: "Call Pod 4", type: "Phone Booth", theme: "Functional" },
  { name: "Privacy Booth A", type: "Phone Booth", theme: "Functional" },
  { name: "Privacy Booth B", type: "Phone Booth", theme: "Functional" },
  // Collaboration Spaces
  { name: "Creative Corner", type: "Collaboration Space", theme: "Creative" },
  { name: "Brainstorm Bay", type: "Collaboration Space", theme: "Creative" },
  { name: "Idea Incubator", type: "Collaboration Space", theme: "Creative" },
  {
    name: "Innovation Intersection",
    type: "Collaboration Space",
    theme: "Creative"
  },
  { name: "Design Den", type: "Collaboration Space", theme: "Creative" },
  // Event Spaces
  { name: "Grand Auditorium", type: "Event Space", theme: "Events" },
  { name: "Conference Hall", type: "Event Space", theme: "Events" },
  { name: "Presentation Theater", type: "Event Space", theme: "Events" },
  { name: "Multi-Purpose Arena", type: "Event Space", theme: "Events" },
  // Break Rooms
  { name: "Coffee Central", type: "Break Room", theme: "Social" },
  { name: "Relaxation Station", type: "Break Room", theme: "Social" },
  { name: "Social Hub", type: "Break Room", theme: "Social" },
  { name: "Refresh & Recharge", type: "Break Room", theme: "Social" },
  { name: "Community Kitchen", type: "Break Room", theme: "Social" },
  // Focus Rooms
  { name: "Deep Work Den", type: "Focus Room", theme: "Productivity" },
  { name: "Concentration Cave", type: "Focus Room", theme: "Productivity" },
  { name: "Quiet Quarters", type: "Focus Room", theme: "Productivity" },
  { name: "Focus Flow", type: "Focus Room", theme: "Productivity" },
  { name: "Zen Zone", type: "Focus Room", theme: "Productivity" },
  // Presentation Rooms
  { name: "Demo Theater", type: "Presentation Room", theme: "Presentation" },
  {
    name: "Showcase Auditorium",
    type: "Presentation Room",
    theme: "Presentation"
  },
  {
    name: "Client Presentation Suite",
    type: "Presentation Room",
    theme: "Presentation"
  }
];
var generateRoomCode = (building, floor, index) => {
  const bldCode = building.split("-")[1];
  const floorCode = floor.includes("Ground") ? "G" : floor.includes("Mezzanine") ? "M" : floor.match(/\d+/) ? floor.match(/\d+/)[0] : "1";
  return `${bldCode}.${floorCode}.${String(index + 1).padStart(2, "0")}`;
};
var getRandomFeatures = (roomType) => {
  const availableFeatures = ROOM_FEATURES[roomType] || [];
  const numFeatures = predictableRandomInt(availableFeatures.length - 1, 2);
  const selectedFeatures = [];
  for (let i = 0; i < numFeatures; i++) {
    const feature = availableFeatures[predictableRandomInt(availableFeatures.length)];
    if (!selectedFeatures.includes(feature)) {
      selectedFeatures.push(feature);
    }
  }
  return selectedFeatures;
};
var getCapacityForRoomType = (roomType) => {
  const range = CAPACITY_RANGES[roomType] || { min: 4, max: 12 };
  return predictableRandomInt(range.max - range.min, range.min);
};
var getZoneHierarchy = (buildingId, levelId) => {
  const building = MOCK_BUILDINGS.find((b) => b.id === buildingId);
  if (!building)
    return ["zone-org", "region-sydney", buildingId, levelId];
  const region = MOCK_REGIONS.find((r) => r.id === building.parent_id);
  const orgId = region ? region.parent_id : "zone-org";
  return [orgId, building.parent_id, buildingId, levelId];
};
var generateSpaceData = () => {
  const spaces = [];
  let spaceIndex = 0;
  Object.entries(BUILDING_THEMES).forEach(([buildingId, buildingInfo]) => {
    buildingInfo.floors.forEach((floor, floorIndex) => {
      const floorId = `${buildingId}_lvl-${floorIndex}`;
      const spacesPerFloor = predictableRandomInt(16, 5);
      for (let i = 0; i < spacesPerFloor; i++) {
        const roomData = REALISTIC_ROOM_NAMES[spaceIndex % REALISTIC_ROOM_NAMES.length];
        const roomCode = generateRoomCode(buildingId, floor, i);
        const capacity = getCapacityForRoomType(roomData.type);
        const features = getRandomFeatures(roomData.type);
        const isBookable = ![
          "Break Room",
          "Collaboration Space",
          "Focus Room"
        ].includes(roomData.type) || predictableRandomInt(3) === 0;
        const imageCategories = {
          "Meeting Room": "meeting-room",
          "Conference Room": "conference-room",
          Boardroom: "boardroom",
          "Training Room": "training-room",
          "Phone Booth": "phone-booth",
          "Collaboration Space": "collaboration-space",
          "Event Space": "event-space",
          "Break Room": "break-room",
          "Focus Room": "focus-room",
          "Presentation Room": "presentation-room"
        };
        const space = {
          id: `space-${spaceIndex + 1}`,
          name: `${roomCode} ${roomData.name}`,
          display_name: roomData.name,
          map_id: `area-${roomCode.toLowerCase()}-status`,
          zones: getZoneHierarchy(buildingId, floorId),
          type: roomData.type,
          capacity,
          features,
          images: [
            `https://images.unsplash.com/photo-${15e8 + spaceIndex * 1e5}?w=800&h=600&fit=crop`,
            ...capacity > 10 ? [
              `https://images.unsplash.com/photo-${15e8 + spaceIndex * 1e5 + 5e4}?w=800&h=600&fit=crop`
            ] : []
          ],
          bookable: isBookable,
          level: {
            id: floorId,
            parent_id: buildingId,
            name: floor,
            display_name: floor,
            capacity,
            number: floorIndex.toString(),
            map_id: `${buildingId}_${floorIndex}`,
            tags: [
              buildingInfo.style.toLowerCase(),
              roomData.theme.toLowerCase()
            ],
            settings: {
              booking_enabled: isBookable,
              auto_release: roomData.type === "Meeting Room" || roomData.type === "Conference Room",
              max_booking_duration: roomData.type === "Phone Booth" ? 60 : roomData.type === "Focus Room" ? 240 : roomData.type === "Event Space" ? 480 : 240
            },
            images: [
              `https://images.unsplash.com/photo-${14e8 + floorIndex * 2e5}?w=1200&h=800&fit=crop`
            ],
            locations: {
              id: floorId,
              name: floor,
              building: buildingInfo.name
            }
          },
          // Additional metadata
          building: buildingInfo.name,
          building_id: buildingId,
          floor,
          floor_number: floorIndex,
          room_code: roomCode,
          theme: roomData.theme,
          style: buildingInfo.style,
          year_built: buildingInfo.year,
          last_renovation: buildingInfo.year + predictableRandomInt(4, 1),
          accessibility: {
            wheelchair_accessible: predictableRandomInt(4) !== 0,
            // 75% accessible
            hearing_loop: [
              "Boardroom",
              "Event Space",
              "Presentation Room"
            ].includes(roomData.type),
            braille_signage: predictableRandomInt(2) === 0
          },
          equipment: features.map((feature) => ({
            name: feature,
            status: [
              "Working",
              "Working",
              "Working",
              "Maintenance"
            ][predictableRandomInt(4)],
            last_serviced: new Date(Date.now() - predictableRandomInt(90) * 24 * 60 * 60 * 1e3).toISOString()
          })),
          amenities: {
            natural_light: !roomData.name.toLowerCase().includes("pod") && predictableRandomInt(3) !== 0,
            air_conditioning: true,
            power_outlets: capacity * (roomData.type === "Training Room" ? 2 : 1),
            wifi: true,
            catering_available: [
              "Conference Room",
              "Boardroom",
              "Training Room",
              "Event Space"
            ].includes(roomData.type),
            parking_nearby: buildingId === "bld-01" || predictableRandomInt(2) === 0
          },
          booking_rules: {
            advance_booking_days: roomData.type === "Event Space" ? 90 : roomData.type === "Boardroom" ? 60 : 30,
            min_booking_duration: roomData.type === "Phone Booth" ? 15 : 30,
            max_booking_duration: roomData.type === "Phone Booth" ? 60 : roomData.type === "Focus Room" ? 240 : 480,
            buffer_time: roomData.type === "Event Space" ? 30 : 15,
            approval_required: roomData.type === "Boardroom" || roomData.type === "Event Space"
          },
          cost_center: buildingInfo.name.toLowerCase().replace(/\s+/g, "-"),
          hourly_rate: roomData.type === "Event Space" ? predictableRandomInt(200, 100) : roomData.type === "Boardroom" ? predictableRandomInt(100, 50) : roomData.type === "Phone Booth" ? 0 : predictableRandomInt(50, 10)
        };
        spaces.push(space);
        spaceIndex++;
      }
    });
  });
  return spaces;
};
var rawSpaces = generateSpaceData();
var MOCK_SPACES = rawSpaces.map((space) => generateMockSpace(__spreadProps(__spreadValues({}, space), {
  features: space.features || [],
  images: space.images || [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
  ]
})));

// libs/mocks/src/lib/api/bookings.data.ts
var TRACKING = ["in_storage", "in_transit", "at_location"];
var generateBookingForDay = (day, type2, index, user) => {
  const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length)];
  const lvls = MOCK_LEVELS.filter((_) => _.parent_id === bld?.id);
  const lvl = lvls[predictableRandomInt(lvls.length)];
  const lvl_spaces = MOCK_SPACES.filter((_) => _.zones.includes(lvl?.id)) || [];
  const approved = predictableRandomInt(999999) % 4;
  const approver = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
  const guest = MOCK_GUESTS[predictableRandomInt(MOCK_GUESTS.length)];
  const asset_count = predictableRandomInt(3, 1);
  const position = padString(predictableRandomInt(999) + 1, 3);
  const base_time = setHours(addDays(startOfDay(Date.now()), day - 15), predictableRandomInt(10, 7));
  const booking_start = getUnixTime(base_time);
  const time_length = predictableRandomInt(240, 60);
  const booking_end = getUnixTime(addMinutes(base_time, time_length));
  const qr_base = Date.now() * predictableRandomInt(999999, 1) / 1e5;
  return {
    id: index,
    qr_code: Math.floor(qr_base).toString(),
    booking_start,
    booking_end,
    timezone: "Australia/Sydney",
    title: capitalizeFirstLetter(`${type2.replace("-", " ")} booking ${index}`),
    event_start: booking_start,
    event_end: booking_end,
    asset_ids: type2 === "asset-request" ? [...Array(asset_count)].map((_, i) => MOCK_ASSETS[predictableRandomInt(MOCK_ASSETS.length, i + 1)].id) : [
      type2 === "visitor" ? guest.email : `${type2}-${bld?.id}-${lvl?.id}-${position}`
    ],
    asset_id: type2 === "visitor" ? guest.email : `${type2}-${bld?.id}-${lvl?.id}-${position}`,
    asset_name: type2 === "visitor" ? guest.name : `${bld?.name}-${position}`,
    description: type2 === "visitor" ? guest.name : `${capitalizeFirstLetter(type2.replace("-", " "))} in ${bld?.name}`,
    booking_type: type2,
    type: type2,
    user_id: user.id,
    user_name: user.name,
    user_email: user.email,
    booked_by_id: user.id,
    booked_by_name: user.name,
    booked_by_email: user.email,
    attendees: [],
    checked_in: approved && predictableRandomInt(4) <= 2,
    rejected: predictableRandomInt(12) === 0,
    approved: approved !== 0,
    access: approved !== 0,
    permission: type2 === "group-event" ? "OPEN" : "PRIVATE",
    approver_id: approved ? approver.id : "",
    approver_name: approved ? approver.name : "",
    approver_email: approved ? approver.email : "",
    process_state: type2 === "asset-request" ? TRACKING[predictableRandomInt(TRACKING.length, index)] : "",
    last_changed: booking_start,
    created: booking_start - 3600,
    created_by_id: user.id,
    created_by_name: user.name,
    created_by_email: user.email,
    zones: [
      bld?.id,
      type2 === "parking" ? MOCK_LEVELS.find((l) => l.parent_id === bld?.id && l.type === "parking")?.id : lvl?.id
    ].filter(Boolean),
    extension_data: {
      map_id: `table-${bld?.id}.${position}`,
      note: capitalizeFirstLetter(`${type2.replace("-", " ")} booking ${index}`),
      plate_number: randomString(8, "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
      tracking: approved ? "at_location" : "in_storage",
      space_id: lvl_spaces.length ? lvl_spaces[predictableRandomInt(lvl_spaces.length)].id : `space-${index}`,
      building_id: bld?.id,
      building_name: bld?.name
    }
  };
};
var MOCK_BOOKINGS = (() => {
  const bookings = [];
  let bookingIndex = 0;
  for (let day = 0; day < 30; day++) {
    const dayBookings = [];
    const staffWithoutActive = MOCK_STAFF.filter((u) => u.id !== ACTIVE_USER.id);
    const targetUserCount = Math.min(20, staffWithoutActive.length);
    const shuffled = [...staffWithoutActive];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = predictableRandomInt(i + 1);
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    const selectedUsers = shuffled.slice(0, targetUserCount);
    {
      const activeFromStaff = MOCK_STAFF.find((u) => u.id === ACTIVE_USER.id);
      selectedUsers.push(activeFromStaff || __spreadProps(__spreadValues({}, ACTIVE_USER), {
        extension_data: {
          employee_id: "EMP0000",
          start_date: (/* @__PURE__ */ new Date()).toISOString(),
          manager_id: null
        }
      }));
    }
    selectedUsers.forEach((user) => {
      const userDayBookings = [];
      if (!user)
        return;
      const deskBookingCount = predictableRandomInt(4, 1);
      for (let i = 0; i < deskBookingCount; i++) {
        const booking = generateBookingForDay(day, "desk", bookingIndex++, user);
        const durationHours = predictableRandomInt(9, 2);
        const latestStartHour = 18 - durationHours;
        const minStartHour = Math.min(7 + i * 3, latestStartHour);
        const startHour = predictableRandomInt(latestStartHour + 1, minStartHour);
        const baseTime = setHours(addDays(startOfDay(Date.now()), day - 15), startHour);
        booking.booking_start = getUnixTime(baseTime);
        booking.booking_end = getUnixTime(addMinutes(baseTime, durationHours * 60));
        booking.event_start = booking.booking_start;
        booking.event_end = booking.booking_end;
        userDayBookings.push(booking);
      }
      {
        const booking = generateBookingForDay(day, "parking", bookingIndex++, user);
        const durationHours = predictableRandomInt(9, 6);
        const latestStartHour = 18 - durationHours;
        const startHour = predictableRandomInt(latestStartHour + 1, 7);
        const baseTime = setHours(addDays(startOfDay(Date.now()), day - 15), startHour);
        booking.booking_start = getUnixTime(baseTime);
        booking.booking_end = getUnixTime(addMinutes(baseTime, durationHours * 60));
        booking.event_start = booking.booking_start;
        booking.event_end = booking.booking_end;
        userDayBookings.push(booking);
      }
      {
        const booking = generateBookingForDay(day, "visitor", bookingIndex++, user);
        const durationHours = predictableRandomInt(4, 1);
        const latestStartHour = 18 - durationHours;
        const startHour = predictableRandomInt(latestStartHour + 1, 7);
        const baseTime = setHours(addDays(startOfDay(Date.now()), day - 15), startHour);
        booking.booking_start = getUnixTime(baseTime);
        booking.booking_end = getUnixTime(addMinutes(baseTime, durationHours * 60));
        booking.event_start = booking.booking_start;
        booking.event_end = booking.booking_end;
        userDayBookings.push(booking);
      }
      dayBookings.push(...userDayBookings);
    });
    bookings.push(...dayBookings);
  }
  return bookings.sort((a, b) => a.booking_start - b.booking_start);
})();
var generateCateringOrderBooking = (day, index, user) => {
  const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length)];
  const lvls = MOCK_LEVELS.filter((_) => _.parent_id === bld?.id);
  const lvl = lvls[predictableRandomInt(lvls.length)];
  const space = MOCK_SPACES[predictableRandomInt(MOCK_SPACES.length)];
  const base_time = setHours(addDays(startOfDay(Date.now()), day - 15), predictableRandomInt(10, 8));
  const booking_start = getUnixTime(base_time);
  const time_length = predictableRandomInt(120, 60);
  const booking_end = getUnixTime(addMinutes(base_time, time_length));
  const cateringOrder = generateCateringOrder({
    id: `catering-event-${index}`,
    event_start: booking_start,
    event_end: booking_end,
    attendees: [user],
    location: space?.name || "Meeting Room"
  });
  const caterer = [
    "Gourmet Events Catering",
    "Fresh & Local Kitchen",
    "Premium Dining"
  ][predictableRandomInt(3)];
  const items_with_caterer = cateringOrder.items.map((item) => __spreadProps(__spreadValues({}, item), {
    caterer
  }));
  return {
    id: 1e4 + index,
    booking_start,
    booking_end,
    timezone: "Australia/Sydney",
    title: `Catering Order ${index}`,
    event_start: booking_start,
    event_end: booking_end,
    asset_id: cateringOrder.id,
    asset_name: `Catering Order - ${space?.name || "Meeting Room"}`,
    description: `Catering order for ${space?.name || "Meeting Room"}`,
    booking_type: "catering-order",
    type: "catering-order",
    user_id: user.id,
    user_name: user.name,
    user_email: user.email,
    booked_by_id: user.id,
    booked_by_name: user.name,
    booked_by_email: user.email,
    attendees: [],
    checked_in: false,
    rejected: false,
    approved: true,
    zones: [bld?.id, lvl?.id].filter(Boolean),
    extension_data: {
      details: {
        id: cateringOrder.id,
        deliver_at: cateringOrder.deliver_at,
        items: items_with_caterer,
        charge_code: cateringOrder.charge_code,
        invoice_number: cateringOrder.invoice_number,
        notes: cateringOrder.notes,
        status: cateringOrder.status,
        caterer
      }
    },
    linked_event: {
      id: `linked-event-${index}`,
      title: `Meeting with Catering`,
      event_start: booking_start,
      event_end: booking_end,
      host: user.email,
      system_id: space?.id,
      location: space?.name || "Meeting Room",
      organiser: {
        name: user.name,
        email: user.email
      }
    }
  };
};
var MOCK_CATERING_BOOKINGS = (() => {
  const bookings = [];
  let bookingIndex = 0;
  for (let day = 0; day < 30; day++) {
    const ordersPerDay = predictableRandomInt(5, 3);
    for (let i = 0; i < ordersPerDay; i++) {
      const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      if (!user)
        continue;
      const booking = generateCateringOrderBooking(day, bookingIndex++, user);
      bookings.push(booking);
    }
  }
  return bookings.sort((a, b) => a.booking_start - b.booking_start);
})();

// libs/mocks/src/lib/api/bookings.mock.ts
var ALL_BOOKINGS = [...MOCK_BOOKINGS, ...MOCK_CATERING_BOOKINGS];
function registerMockBookings() {
  Zr({
    path: "/api/staff/v1/bookings",
    metadata: {},
    method: "GET",
    callback: (_) => {
      let events = ALL_BOOKINGS;
      if (!_.query_params.zone_ids && !_.query_params.zones) {
        _.query_params.user_id = ACTIVE_USER.id;
      }
      if (_.query_params.user_id) {
        events = events.filter((booking) => booking.user_id === _.query_params.user_id);
      }
      if (_.query_params.email) {
        events = events.filter((booking) => booking.user_email === _.query_params.email);
      }
      if (_.query_params.zones || _.query_params.zone_ids) {
        const zones = (_.query_params.zones || _.query_params.zone_ids || "").split(",").filter((id) => !!id);
        if (zones.length > 0) {
          events = events.filter((booking) => zones.some((zone) => booking.zones.includes(zone)));
        }
      }
      if (_.query_params.period_start && _.query_params.period_end) {
        events = events.filter((event) => timePeriodsIntersect(+_.query_params.period_start, +_.query_params.period_end, event.booking_start, event.booking_end));
      }
      if (_.query_params.type) {
        events = events.filter((event) => event.type === _.query_params.type || event.booking_type === _.query_params.type);
      }
      const limit = +_.query_params.limit || 50;
      const offset = +_.query_params.offset || 0;
      events = events.slice(offset, offset + limit);
      return events;
    }
  });
  Zr({
    path: "/api/debug/bookings/distribution",
    metadata: {},
    method: "GET",
    callback: (_) => {
      const distribution = {};
      MOCK_BOOKINGS.forEach((booking) => {
        if (!distribution[booking.user_id]) {
          distribution[booking.user_id] = {
            user_name: booking.user_name,
            user_email: booking.user_email,
            total: 0,
            desk: 0,
            parking: 0,
            visitor: 0,
            other: 0
          };
        }
        distribution[booking.user_id].total++;
        if (booking.type === "desk")
          distribution[booking.user_id].desk++;
        else if (booking.type === "parking")
          distribution[booking.user_id].parking++;
        else if (booking.type === "visitor")
          distribution[booking.user_id].visitor++;
        else
          distribution[booking.user_id].other++;
      });
      return {
        total_bookings: MOCK_BOOKINGS.length,
        total_users: Object.keys(distribution).length,
        distribution
      };
    }
  });
  Zr({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${_.route_params.id}`);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  Zr({
    path: "/api/staff/v1/bookings/:id/guests/:email",
    metadata: {},
    method: "POST",
    callback: (_) => {
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${_.route_params.id}`);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      }
      const user = {
        id: _.body.id,
        name: _.body.name,
        email: _.body.email
      };
      event.attendees.push(user);
      return user;
    }
  });
  Zr({
    path: "/api/staff/v1/bookings/:id/guests/:email",
    metadata: {},
    method: "DELETE",
    callback: (_) => {
      const { id, email } = _.route_params;
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${id}`);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${id}`
        };
      }
      const guest = event.attendees.find((_2) => _2.email === decodeURIComponent(email));
      if (!guest) {
        throw {
          status: 404,
          message: `Unable to find guest with email ${decodeURIComponent(email)}`
        };
      }
      return guest;
    }
  });
  Zr({
    path: "/api/staff/v1/bookings/:id/guests/:email/checkin",
    metadata: {},
    method: "POST",
    callback: (_) => {
      const { id, email } = _.route_params;
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${id}`);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${id}`
        };
      }
      event.attendees = event.attendees.filter((_2) => _2.email !== decodeURIComponent(email));
      return {};
    }
  });
  Zr({
    path: "/api/staff/v1/bookings",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-booking-${predictableRandomInt(999)}`
      });
      MOCK_BOOKINGS.push(new_event);
      return new_event;
    }
  });
  const updateBooking = (id, data) => {
    const index = ALL_BOOKINGS.findIndex((e) => `${e.id}` === `${id}`);
    if (index < 0)
      throw {
        status: 404,
        message: `Unable to find booking with ID ${id}`
      };
    const new_event = __spreadValues({}, data);
    ALL_BOOKINGS.splice(index, 1, new_event);
    return new_event;
  };
  Zr({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "PATCH",
    callback: (req) => updateBooking(req.route_params.id, req.body)
  });
  Zr({
    path: "/api/staff/v1/bookings/:id/approve",
    metadata: {},
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      booking.approved = true;
      booking.rejected = false;
      return booking;
    }
  });
  Zr({
    path: "/api/staff/v1/bookings/:id/reject",
    metadata: {},
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      booking.approved = false;
      booking.rejected = true;
      return booking;
    }
  });
  Zr({
    path: "/api/staff/v1/bookings/:id/checkin",
    metadata: {},
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      booking.checked_in = true;
      return booking;
    }
  });
  Zr({
    path: "/api/staff/v1/bookings/:id/update_induction",
    metadata: {},
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      const induction = req.query_params.induction || "tentative";
      booking.induction = induction;
      return booking;
    }
  });
  Zr({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "PUT",
    callback: (req) => updateBooking(req.route_params.id, req.body)
  });
  Zr({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = ALL_BOOKINGS.findIndex((e) => `${e.id}` === `${req.route_params.id}`);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      ALL_BOOKINGS.splice(index, 1);
      return;
    }
  });
}

// libs/mocks/src/lib/api/events.data.ts
var EVENT_TIME = setHours(startOfDay(Date.now()), 7);
var event_status = ["tentative", "confirmed", "cancelled"];
var randomStatus = () => {
  const rnd = predictableRandomInt(10);
  return rnd < 2 ? event_status[2] : rnd < 5 ? event_status[0] : event_status[1];
};
var MEETING_TYPES = {
  "Team Standup": {
    category: "Operational",
    body: "Daily team synchronization meeting to discuss progress, blockers, and priorities.",
    typical_attendees: 5,
    departments: ["Engineering", "Product", "Design"]
  },
  "Project Kickoff": {
    category: "Project",
    body: "Initial meeting to define project scope, objectives, timeline, and team responsibilities.",
    typical_attendees: 8,
    departments: ["Engineering", "Product", "Design", "Marketing"]
  },
  "Client Presentation": {
    category: "Client",
    body: "Formal presentation of project deliverables, progress updates, or proposal pitch to client stakeholders.",
    typical_attendees: 6,
    departments: ["Sales", "Marketing", "Engineering"]
  },
  "Strategic Planning": {
    category: "Strategic",
    body: "High-level discussion on company direction, quarterly goals, and resource allocation strategies.",
    typical_attendees: 4,
    departments: ["Leadership", "Product", "Finance"]
  },
  "Code Review Session": {
    category: "Technical",
    body: "Collaborative review of code changes, architecture decisions, and technical implementation details.",
    typical_attendees: 4,
    departments: ["Engineering"]
  },
  "Training Workshop": {
    category: "Training",
    body: "Educational session covering new technologies, processes, or professional development topics.",
    typical_attendees: 12,
    departments: ["All Departments"]
  },
  "Budget Review": {
    category: "Financial",
    body: "Quarterly financial review covering expenses, revenue projections, and budget adjustments.",
    typical_attendees: 6,
    departments: ["Finance", "Leadership", "Operations"]
  },
  "1:1 Meeting": {
    category: "Personal",
    body: "Individual meeting between manager and team member for performance discussion and feedback.",
    typical_attendees: 2,
    departments: ["All Departments"]
  },
  "Product Demo": {
    category: "Product",
    body: "Demonstration of new features, product updates, or prototype showcasing to stakeholders.",
    typical_attendees: 8,
    departments: ["Product", "Engineering", "Design", "Marketing"]
  },
  "Team Building": {
    category: "Social",
    body: "Interactive activities designed to improve team cohesion, communication, and workplace culture.",
    typical_attendees: 15,
    departments: ["All Departments"]
  },
  "Interview Panel": {
    category: "HR",
    body: "Candidate interview session with multiple team members to evaluate fit and technical skills.",
    typical_attendees: 4,
    departments: ["HR", "Engineering", "Product"]
  },
  "Vendor Meeting": {
    category: "Business",
    body: "Discussion with external vendors regarding partnerships, services, or procurement decisions.",
    typical_attendees: 5,
    departments: ["Operations", "Finance", "Leadership"]
  },
  "Risk Assessment": {
    category: "Strategic",
    body: "Analysis and discussion of potential project risks, mitigation strategies, and contingency planning.",
    typical_attendees: 6,
    departments: ["Leadership", "Operations", "Finance"]
  },
  "Innovation Brainstorm": {
    category: "Creative",
    body: "Creative ideation session for new product features, process improvements, or market opportunities.",
    typical_attendees: 8,
    departments: ["Product", "Design", "Engineering", "Marketing"]
  },
  "Compliance Review": {
    category: "Legal",
    body: "Review of regulatory requirements, policy updates, and compliance procedures.",
    typical_attendees: 5,
    departments: ["Legal", "Operations", "Leadership"]
  },
  "All Hands Meeting": {
    category: "Company",
    body: "Company-wide meeting for announcements, updates, and team recognition.",
    typical_attendees: 50,
    departments: ["All Departments"]
  },
  "Sprint Planning": {
    category: "Agile",
    body: "Planning session for upcoming sprint work, story estimation, and capacity planning.",
    typical_attendees: 6,
    departments: ["Engineering", "Product", "Design"]
  },
  Retrospective: {
    category: "Agile",
    body: "Team reflection on completed sprint, identifying improvements and celebrating successes.",
    typical_attendees: 6,
    departments: ["Engineering", "Product", "Design"]
  },
  "User Research": {
    category: "Research",
    body: "Discussion of user feedback, research findings, and implications for product development.",
    typical_attendees: 5,
    departments: ["Product", "Design", "Engineering"]
  },
  "Security Briefing": {
    category: "Security",
    body: "Review of security protocols, threat assessments, and incident response procedures.",
    typical_attendees: 8,
    departments: ["Engineering", "Operations", "Leadership"]
  }
};
var getRandomMeetingContent = () => {
  const titles = Object.keys(MEETING_TYPES);
  const title = titles[predictableRandomInt(titles.length)];
  return __spreadValues({
    title
  }, MEETING_TYPES[title]);
};
var generateMeetingUrl = () => {
  const providers = [
    { name: "Zoom", urlPattern: "https://zoom.us/j/" },
    {
      name: "Microsoft Teams",
      urlPattern: "https://teams.microsoft.com/l/meetup-join/"
    },
    { name: "Google Meet", urlPattern: "https://meet.google.com/" },
    { name: "WebEx", urlPattern: "https://placeos.webex.com/meet/" }
  ];
  const provider = providers[predictableRandomInt(providers.length)];
  const meetingId = Math.random().toString(36).substring(2, 15);
  return {
    provider: provider.name,
    url: provider.urlPattern + meetingId,
    id: meetingId
  };
};
var MOCK_EVENTS = (() => {
  const events = [];
  const totalDays = 30;
  const dayOffset = -15;
  MOCK_SPACES.forEach((space, spaceIndex) => {
    for (let day = 0; day < totalDays; day++) {
      const dayStart = setHours(addDays(startOfDay(Date.now()), day + dayOffset), 7);
      const hourOffset = 7 + (spaceIndex + day) % 11;
      const minuteOffset = (spaceIndex * 17 + day * 13) % 60;
      const eventTime = getUnixTime(setHours(setMinutes(dayStart, minuteOffset), hourOffset));
      const availableStaff = MOCK_STAFF.filter((s) => s.email !== ACTIVE_USER.email);
      const host = availableStaff[spaceIndex % availableStaff.length];
      const colleagues = MOCK_STAFF.filter((s) => s.department === host.department && s.email !== host.email && s.email !== ACTIVE_USER.email).slice(0, predictableRandomInt(3) + 1);
      const meetingContent = getRandomMeetingContent();
      const meetingInfo = generateMeetingUrl();
      const attendees = [host, ...colleagues].map((attendee, idx) => __spreadProps(__spreadValues({}, attendee), {
        organizer: idx === 0,
        checked_in: predictableRandomInt(99999) % 3 === 0,
        response_status: idx === 0 ? "accepted" : predictableRandomInt(99999) % 2 === 0 ? "accepted" : "tentative"
      }));
      const event_start = eventTime;
      const event_end = getUnixTime(addMinutes(new Date(event_start * 1e3), 60));
      events.push({
        id: `space-daily-${space.id}-${day}`,
        status: randomStatus(),
        host: host.email,
        calendar: `calendar-${host.department?.toLowerCase() || "general"}`,
        creator: host.email,
        attendees,
        title: meetingContent.title,
        body: meetingContent.body,
        private: predictableRandomInt(4) === 0,
        event_start,
        event_end,
        timezone: "Australia/Sydney",
        all_day: false,
        location: space?.name || "TBD",
        recurring: predictableRandomInt(10) === 0,
        recurrence: {},
        attachments: {},
        system: space,
        meeting_url: meetingInfo.url,
        meeting_id: meetingInfo.id,
        meeting_provider: meetingInfo.provider,
        extension_data: {
          category: meetingContent.category,
          catering: [],
          setup: 0,
          breakdown: 0,
          cost_center: host.department?.toLowerCase().replace(/\s+/g, "-") || "general",
          priority: "normal",
          estimated_attendees: attendees.length,
          actual_attendees: attendees.length
        }
      });
    }
  });
  const activeUserDailyCount = /* @__PURE__ */ new Map();
  MOCK_STAFF.forEach((user, userIndex) => {
    if (user.email === ACTIVE_USER.email) {
      return;
    }
    for (let day = 0; day < totalDays; day++) {
      const eventsPerDay = predictableRandomInt(3) + 1;
      for (let eventNum = 0; eventNum < eventsPerDay; eventNum++) {
        const dayStart = setHours(addDays(startOfDay(Date.now()), day + dayOffset), 8);
        const hourOffset = 8 + eventNum * 3 + userIndex % 3;
        const eventTime = getUnixTime(setHours(dayStart, Math.min(hourOffset, 17)));
        const space = MOCK_SPACES[(userIndex + day + eventNum) % MOCK_SPACES.length];
        let colleagues = MOCK_STAFF.filter((s) => s.department === user.department && s.email !== user.email && s.email !== ACTIVE_USER.email).slice(0, predictableRandomInt(4) + 1);
        const currentDayCount = activeUserDailyCount.get(day) || 0;
        const shouldIncludeActiveUser = user.department === ACTIVE_USER.department && currentDayCount === 0 && predictableRandomInt(5) === 0;
        if (shouldIncludeActiveUser) {
          colleagues = [...colleagues, ACTIVE_USER];
          activeUserDailyCount.set(day, currentDayCount + 1);
        }
        const meetingContent = getRandomMeetingContent();
        const meetingInfo = generateMeetingUrl();
        const attendees = [user, ...colleagues].map((attendee, idx) => __spreadProps(__spreadValues({}, attendee), {
          organizer: idx === 0,
          checked_in: predictableRandomInt(99999) % 3 === 0,
          response_status: idx === 0 ? "accepted" : predictableRandomInt(99999) % 2 === 0 ? "accepted" : "tentative"
        }));
        const event_start = eventTime;
        const event_end = getUnixTime(addMinutes(new Date(event_start * 1e3), 60));
        events.push({
          id: `user-daily-${userIndex}-${day}-${eventNum}`,
          status: randomStatus(),
          host: user.email,
          calendar: `calendar-${user.department?.toLowerCase() || "general"}`,
          creator: user.email,
          attendees,
          title: meetingContent.title,
          body: meetingContent.body,
          private: predictableRandomInt(4) === 0,
          event_start,
          event_end,
          timezone: "Australia/Sydney",
          all_day: false,
          location: space?.name || "TBD",
          recurring: predictableRandomInt(10) === 0,
          recurrence: {},
          attachments: {},
          system: space,
          meeting_url: meetingInfo.url,
          meeting_id: meetingInfo.id,
          meeting_provider: meetingInfo.provider,
          extension_data: {
            category: meetingContent.category,
            catering: [],
            setup: 0,
            breakdown: 0,
            cost_center: user.department?.toLowerCase().replace(/\s+/g, "-") || "general",
            priority: "normal",
            estimated_attendees: attendees.length,
            actual_attendees: attendees.length
          }
        });
      }
    }
  });
  for (let day = 0; day < totalDays; day++) {
    const eventsPerDay = predictableRandomInt(3) + 1;
    for (let eventNum = 0; eventNum < eventsPerDay; eventNum++) {
      const dayStart = setHours(addDays(startOfDay(Date.now()), day + dayOffset), 9);
      const hourOffset = 9 + eventNum * 3;
      const eventTime = getUnixTime(setHours(dayStart, Math.min(hourOffset, 16)));
      const space = MOCK_SPACES[(day + eventNum) % MOCK_SPACES.length];
      const meetingContent = getRandomMeetingContent();
      const meetingInfo = generateMeetingUrl();
      const colleagues = MOCK_STAFF.filter((s) => s.email !== ACTIVE_USER.email).slice(0, predictableRandomInt(4) + 2);
      const attendees = [ACTIVE_USER, ...colleagues].map((attendee, idx) => __spreadProps(__spreadValues({}, attendee), {
        organizer: idx === 0,
        checked_in: predictableRandomInt(99999) % 3 === 0,
        response_status: idx === 0 ? "accepted" : predictableRandomInt(99999) % 2 === 0 ? "accepted" : "tentative"
      }));
      const event_start = eventTime;
      const event_end = getUnixTime(addMinutes(new Date(event_start * 1e3), 60));
      events.push({
        id: `active-user-daily-${day}-${eventNum}`,
        status: "confirmed",
        host: ACTIVE_USER.email,
        calendar: `calendar-${ACTIVE_USER.department?.toLowerCase() || "engineering"}`,
        creator: ACTIVE_USER.email,
        attendees,
        title: meetingContent.title,
        body: meetingContent.body,
        private: eventNum === 0,
        // Make first event of day private sometimes
        event_start,
        event_end,
        timezone: "Australia/Sydney",
        all_day: false,
        location: space?.name || "TBD",
        recurring: predictableRandomInt(10) === 0,
        recurrence: {},
        attachments: {},
        system: space,
        meeting_url: meetingInfo.url,
        meeting_id: meetingInfo.id,
        meeting_provider: meetingInfo.provider,
        extension_data: {
          category: meetingContent.category,
          catering: [],
          setup: 0,
          breakdown: 0,
          cost_center: ACTIVE_USER.department?.toLowerCase().replace(/\s+/g, "-") || "engineering",
          priority: eventNum === 0 ? "high" : "normal",
          // First event of day is high priority
          estimated_attendees: attendees.length,
          actual_attendees: attendees.length
        }
      });
    }
  }
  const uniqueEvents = events.filter((event, index, array) => index === array.findIndex((e) => e.id === event.id));
  return uniqueEvents.sort((a, b) => a.event_start - b.event_start);
})();
var event_spaces = MOCK_SPACES.map((space) => space.id);

// libs/mocks/src/lib/api/calendars.mock.ts
function registerMockCalendars() {
  Zr({
    path: "/api/staff/v1/calendars",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      const user2 = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      const user3 = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      return [
        {
          id: ACTIVE_USER.email,
          summary: ACTIVE_USER.name,
          primary: true,
          can_edit: true,
          hidden: false
        },
        {
          id: user.email,
          summary: user.name,
          primary: false,
          can_edit: true,
          hidden: false
        },
        {
          id: user2.email,
          summary: user2.name,
          primary: false,
          can_edit: false,
          hidden: false
        },
        {
          id: user3.email,
          summary: user3.name,
          primary: false,
          can_edit: false,
          hidden: true
        }
      ];
    }
  });
  const handleSpaceAvailability = (request) => {
    const start = +request.query_params.period_start;
    const end = +request.query_params.period_end;
    const zones = (request.query_params.zone_ids || "").split(",").filter((i) => !!i);
    const systems = (request.query_params.system_ids || "").split(",").filter((i) => !!i);
    const spaces = MOCK_SPACES.filter((space) => zones.length ? zones.reduce((has, zone) => has && space.zones.includes(zone), true) : systems.length ? systems.includes(space.id) : true).filter((space) => {
      const bookings = MOCK_EVENTS.filter((event) => event.attendees.find((user) => user.id === space.id));
      for (const event of bookings) {
        if (timePeriodsIntersect(start, end, event.event_start, event.event_end))
          return false;
      }
      return true;
    });
    return spaces;
  };
  Zr({
    path: "/api/staff/v1/calendars/availability",
    metadata: {},
    method: "GET",
    callback: (request) => handleSpaceAvailability(request).map((_) => ({
      resource: _
    }))
  });
  Zr({
    path: "/api/staff/v1/calendars/free_busy",
    metadata: {},
    method: "GET",
    callback: (request) => handleSpaceAvailability(request).map((_) => ({
      resource: _
    }))
  });
}

// libs/mocks/src/lib/api/events.mock.ts
function registerMockEvents() {
  Zr({
    path: "/api/staff/v1/events",
    metadata: {},
    method: "GET",
    callback: (_) => {
      let events = MOCK_EVENTS;
      if (!_.query_params.zone_ids) {
        events = events.filter((event) => !!event.attendees.find((user) => user.email === ACTIVE_USER.email));
      } else if (_.query_params.zone_ids) {
        events = events.filter((event) => !!event.system.zones.find((zone) => _.query_params.zone_ids.includes(zone)));
      }
      if (_.query_params.period_start) {
        events = events.filter((e) => timePeriodsIntersect(+_.query_params.period_start, +_.query_params.period_end, e.event_start, e.event_end));
      }
      return events;
    }
  });
  Zr({
    path: "/api/staff/v1/events",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-cal-event-${predictableRandomInt(999)}`
      });
      new_event.attendees = [
        MOCK_STAFF.find((_) => _.email === new_event.host),
        ...new_event.attendees || []
      ];
      new_event.attendees.forEach((user) => {
        if (user.zones)
          user.resource = true;
      });
      if (new_event.system) {
        new_event.attendees = [
          ...new_event.attendees || [],
          __spreadProps(__spreadValues({}, new_event.system), { resource: true })
        ];
      }
      MOCK_EVENTS.push(new_event);
      const system = $r(new_event.system?.id);
      system?.Bookings[0]?.$poll_bookings();
      return new_event;
    }
  });
  Zr({
    path: "/api/staff/v1/events/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const item = MOCK_EVENTS.find((event) => event.id === request.route_params.id);
      if (item) {
        return item;
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  Zr({
    path: "/api/staff/v1/events/:id",
    metadata: {},
    method: "DELETE",
    callback: (request) => {
      const index = MOCK_EVENTS.findIndex((event) => event.id === request.route_params.id);
      if (index > 0) {
        if (MOCK_EVENTS[index].host === ACTIVE_USER.email) {
          MOCK_EVENTS.splice(index, 1);
        } else {
          const user = MOCK_EVENTS[index].attendees.find((_) => _.email === ACTIVE_USER.email);
          user.response_status = "declined";
        }
        return;
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  Zr({
    path: "/api/staff/v1/events/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      const index = MOCK_EVENTS.findIndex((event) => event.id === request.route_params.id);
      if (index >= 0) {
        return MOCK_EVENTS.splice(index, 1, request.body);
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  Zr({
    path: "/api/staff/v1/events/:id/guests/:email/checkin",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const event = MOCK_EVENTS.find((event2) => event2.id === request.route_params.id);
      if (event) {
        const checked_in = event.extension_data.checked_in || [];
        event.extension_data.checked_in = checked_in.concat([
          request.route_params.email
        ]);
        return event;
      }
      throw { status: 404, message: "Guest not found" };
    }
  });
}

// libs/mocks/src/lib/api/signage.mock.ts
var CONTENT_CATEGORIES = [
  { id: "announcements", name: "Announcements", color: "#FF5722" },
  { id: "events", name: "Events & Meetings", color: "#2196F3" },
  { id: "wayfinding", name: "Wayfinding", color: "#4CAF50" },
  { id: "emergency", name: "Emergency", color: "#F44336" },
  { id: "corporate", name: "Corporate Updates", color: "#673AB7" },
  { id: "wellness", name: "Wellness & Safety", color: "#FF9800" },
  { id: "social", name: "Social & Community", color: "#E91E63" },
  { id: "weather", name: "Weather & External", color: "#607D8B" }
];
var MEDIA_TYPES = [
  "image",
  "video",
  "html",
  "text",
  "slideshow",
  "live_feed",
  "weather",
  "calendar"
];
var DISPLAY_ORIENTATIONS = ["landscape", "portrait", "square"];
var DISPLAY_RESOLUTIONS = [
  "1920x1080",
  "1080x1920",
  "3840x2160",
  "2160x3840",
  "1366x768",
  "768x1366"
];
var CONTENT_TEMPLATES = [
  {
    category: "announcements",
    title: "Weekly Office Updates",
    description: "Important announcements and office news",
    content: {
      headline: "This Week in the Office",
      items: [
        "New parking guidelines effective Monday",
        "Kitchen renovation completed on Level 2",
        "Fire drill scheduled for Thursday 2PM",
        "Coffee machine maintenance this Friday"
      ]
    },
    duration: 15e3
    // 15 seconds
  },
  {
    category: "events",
    title: "Today's Meetings",
    description: "Real-time meeting room schedule display",
    content: {
      template: "meeting_schedule",
      refresh_interval: 3e5,
      // 5 minutes
      show_next_hours: 8
    },
    duration: 3e4
    // 30 seconds
  },
  {
    category: "wayfinding",
    title: "Building Directory",
    description: "Interactive building navigation",
    content: {
      floors: [
        {
          level: "Ground",
          departments: ["Reception", "Cafe", "Security"]
        },
        {
          level: "Level 1",
          departments: ["Engineering", "Product", "Design"]
        },
        { level: "Level 2", departments: ["Sales", "Marketing", "HR"] },
        {
          level: "Level 3",
          departments: ["Finance", "Legal", "Executive"]
        }
      ],
      emergency_exits: [
        "North Stairwell",
        "South Stairwell",
        "Main Elevator"
      ]
    },
    duration: 0
    // Interactive - no auto advance
  },
  {
    category: "emergency",
    title: "Emergency Procedures",
    description: "Safety information and emergency contacts",
    content: {
      type: "emergency_info",
      contacts: [
        { role: "Emergency", number: "000" },
        { role: "Building Security", number: "1234" },
        { role: "First Aid", number: "5678" }
      ],
      assembly_point: "Car Park Level 1",
      procedures: [
        "Stay calm and follow instructions",
        "Use stairs, not elevators",
        "Proceed to assembly point",
        "Wait for all-clear signal"
      ]
    },
    duration: 45e3
    // 45 seconds
  },
  {
    category: "corporate",
    title: "Company Performance Dashboard",
    description: "Key metrics and achievements",
    content: {
      metrics: [
        { label: "Projects Delivered", value: "127", trend: "+12%" },
        { label: "Client Satisfaction", value: "94%", trend: "+3%" },
        { label: "Team Members", value: "850", trend: "+15%" },
        { label: "Offices Worldwide", value: "12", trend: "stable" }
      ],
      achievement: "Certified Great Place to Work 2024"
    },
    duration: 2e4
    // 20 seconds
  },
  {
    category: "wellness",
    title: "Wellness Tips",
    description: "Daily wellness and safety reminders",
    content: {
      tips: [
        "Remember to take regular breaks from your screen",
        "Stay hydrated - aim for 8 glasses of water daily",
        "Use proper ergonomics at your workstation",
        "Take the stairs for extra exercise",
        "Practice good hand hygiene"
      ],
      wellness_metric: "Steps Goal: 10,000 daily"
    },
    duration: 12e3
    // 12 seconds
  },
  {
    category: "social",
    title: "Team Celebrations",
    description: "Celebrating our people and achievements",
    content: {
      celebrations: [
        "Happy Birthday Sarah Chen! \u{1F389}",
        "Congratulations to the Sales team on Q4 results! \u{1F3C6}",
        "Welcome new team members joining this month! \u{1F44B}",
        "Tech Talk Friday: AI in the Workplace - 3PM Conference Room A"
      ],
      upcoming_events: [
        "Monthly Town Hall - Next Tuesday 10AM",
        "Volunteer Day - Community Garden - Saturday",
        "Holiday Party Planning - Committee Meeting Thursday"
      ]
    },
    duration: 18e3
    // 18 seconds
  },
  {
    category: "weather",
    title: "Weather & Transport",
    description: "Current weather and transport updates",
    content: {
      weather: {
        current: "22\xB0C Partly Cloudy",
        forecast: "High 25\xB0C, Low 18\xB0C",
        uv_index: "6 - High",
        rain_chance: "20%"
      },
      transport: [
        "Train services operating normally",
        "Light delays on Bus Route 123",
        "Bike sharing stations: 85% available"
      ]
    },
    duration: 25e3
    // 25 seconds
  }
];
function generateMockDisplays() {
  const displays = [];
  let displayId = 1;
  MOCK_BUILDINGS.forEach((building) => {
    const levels = MOCK_LEVELS.filter((level) => level.parent_id === building.id);
    levels.forEach((level) => {
      const displayCount = predictableRandomInt(4, 2);
      for (let i = 0; i < displayCount; i++) {
        const orientation = DISPLAY_ORIENTATIONS[predictableRandomInt(DISPLAY_ORIENTATIONS.length)];
        const resolution = DISPLAY_RESOLUTIONS.filter((res) => orientation === "portrait" && res.includes("x1920") || orientation === "landscape" && res.includes("1920x") || orientation === "square")[0] || "1920x1080";
        const display = {
          id: `display-${String(displayId).padStart(3, "0")}`,
          name: `${level.name} Display ${String.fromCharCode(65 + i)}`,
          description: `Digital signage display located in ${level.name} of ${building.name}`,
          // Location
          building_id: building.id,
          level_id: level.id,
          zone_id: building.parent_id,
          location: {
            building: building.name,
            level: level.name,
            area: [
              "Main Corridor",
              "Reception Area",
              "Break Room",
              "Elevator Lobby",
              "Meeting Room Entrance"
            ][predictableRandomInt(5)],
            coordinates: {
              x: predictableRandomInt(100, 10),
              y: predictableRandomInt(100, 10)
            }
          },
          // Hardware specifications
          hardware: {
            model: [
              "Samsung QM55R",
              "LG 55SM5KE",
              "NEC MultiSync V554",
              "Sharp PN-M501"
            ][predictableRandomInt(4)],
            size_inches: [43, 50, 55, 65, 75][predictableRandomInt(5)],
            resolution,
            orientation,
            brightness: predictableRandomInt(500, 300),
            // nits
            contrast_ratio: "5000:1",
            viewing_angle: "178\xB0",
            operating_hours: predictableRandomInt(5e4, 3e4)
          },
          // Network and connectivity
          network: {
            ip_address: `192.168.${predictableRandomInt(255, 1)}.${predictableRandomInt(255, 1)}`,
            mac_address: `00:1B:44:${Math.random().toString(16).substr(2, 2).toUpperCase()}:${Math.random().toString(16).substr(2, 2).toUpperCase()}:${Math.random().toString(16).substr(2, 2).toUpperCase()}`,
            connection_type: "Ethernet",
            bandwidth: "100 Mbps",
            wifi_enabled: predictableRandomInt(2) === 1
          },
          // Status and health
          status: ["online", "offline", "maintenance", "error"][predictableRandomInt(10) === 0 ? predictableRandomInt(4) : 0],
          // 90% online
          health: {
            cpu_usage: predictableRandomInt(30, 5),
            memory_usage: predictableRandomInt(60, 20),
            storage_used: predictableRandomInt(80, 30),
            temperature: predictableRandomInt(45, 25),
            uptime_hours: predictableRandomInt(720, 1),
            // Up to 30 days
            last_reboot: getUnixTime(subDays(Date.now(), predictableRandomInt(30, 1)))
          },
          // Display settings
          settings: {
            brightness: predictableRandomInt(100, 60),
            volume: orientation === "portrait" ? 0 : predictableRandomInt(50, 10),
            power_schedule: {
              on_time: "06:00",
              off_time: "22:00",
              weekend_mode: "reduced_hours"
              // 08:00-18:00
            },
            sleep_mode: predictableRandomInt(2) === 1,
            auto_rotation: false,
            screensaver: {
              enabled: true,
              timeout_minutes: 30,
              type: "clock_and_weather"
            }
          },
          // Content preferences
          content_settings: {
            allowed_categories: CONTENT_CATEGORIES.slice(0, predictableRandomInt(CONTENT_CATEGORIES.length, 3)).map((c2) => c2.id),
            prohibited_content: ["external_feeds", "social_media"],
            emergency_override: true,
            local_content_cache: true,
            max_file_size_mb: 50,
            supported_formats: ["jpg", "png", "mp4", "html", "pdf"]
          },
          // Maintenance and monitoring
          maintenance: {
            last_service: getUnixTime(subDays(Date.now(), predictableRandomInt(90, 7))),
            next_service: getUnixTime(addDays(Date.now(), predictableRandomInt(180, 30))),
            service_provider: "TechCorp Solutions",
            warranty_expiry: getUnixTime(addDays(Date.now(), predictableRandomInt(365, 180))),
            cleaning_schedule: "weekly",
            firmware_version: `v${predictableRandomInt(5, 1)}.${predictableRandomInt(9, 0)}.${predictableRandomInt(99, 10)}`,
            last_update: getUnixTime(subDays(Date.now(), predictableRandomInt(60, 7)))
          },
          // Analytics and usage
          analytics: {
            daily_views: predictableRandomInt(500, 50),
            interaction_count: orientation !== "portrait" ? predictableRandomInt(50, 5) : 0,
            content_engagement: `${predictableRandomInt(85, 45)}%`,
            error_count_24h: predictableRandomInt(3, 0),
            avg_content_display_time: predictableRandomInt(20, 8)
          },
          // Timestamps
          created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(365, 30))),
          updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(7, 0))),
          last_seen: getUnixTime(subDays(Date.now(), predictableRandomInt(1, 0)))
        };
        displays.push(display);
        displayId++;
      }
    });
  });
  return displays;
}
function generateMockMedia() {
  const media = [];
  let mediaId = 1;
  CONTENT_TEMPLATES.forEach((template, templateIndex) => {
    const variations = predictableRandomInt(3, 2);
    for (let v = 0; v < variations; v++) {
      const mediaItem = {
        id: `media-${String(mediaId).padStart(3, "0")}`,
        name: `${template.title} ${v > 0 ? `v${v + 1}` : ""}`,
        description: template.description,
        category: template.category,
        type: MEDIA_TYPES[predictableRandomInt(MEDIA_TYPES.length)],
        // File details
        file: {
          filename: `${template.title.toLowerCase().replace(/\s+/g, "_")}_${mediaId}.${template.category === "weather" ? "html" : "jpg"}`,
          size_bytes: predictableRandomInt(5e6, 1e5),
          // 100KB - 5MB
          mime_type: template.category === "weather" ? "text/html" : "image/jpeg",
          url: `https://signage-assets.place.tech/media/${mediaId}`,
          thumbnail_url: `https://signage-assets.place.tech/thumbs/${mediaId}_thumb.jpg`,
          duration_seconds: template.duration / 1e3 || null
        },
        // Content metadata
        content: template.content,
        tags: [template.category, "corporate", "approved"],
        // Display properties
        display_properties: {
          duration_ms: template.duration,
          transition: ["fade", "slide_left", "slide_right", "zoom"][predictableRandomInt(4)],
          background_color: "#ffffff",
          text_color: "#333333",
          font_family: "Inter, sans-serif",
          font_size: "responsive",
          aspect_ratio: "16:9"
        },
        // Scheduling and targeting
        scheduling: {
          start_date: getUnixTime(subDays(Date.now(), predictableRandomInt(30, 0))),
          end_date: getUnixTime(addDays(Date.now(), predictableRandomInt(90, 30))),
          time_slots: [
            { start: "06:00", end: "10:00", days: [1, 2, 3, 4, 5] },
            { start: "12:00", end: "14:00", days: [1, 2, 3, 4, 5] },
            { start: "16:00", end: "19:00", days: [1, 2, 3, 4, 5] }
          ],
          priority: template.category === "emergency" ? 10 : predictableRandomInt(5, 1),
          frequency: predictableRandomInt(3, 1)
          // times per hour
        },
        // Approval and compliance
        approval: {
          status: ["approved", "pending", "rejected"][template.category === "emergency" ? 0 : predictableRandomInt(3)],
          approved_by: "facilities.manager@place.tech",
          approved_date: getUnixTime(subDays(Date.now(), predictableRandomInt(14, 1))),
          compliance_checked: true,
          brand_guidelines: template.category !== "emergency"
        },
        // Analytics
        performance: {
          impressions: predictableRandomInt(5e3, 500),
          unique_views: predictableRandomInt(2e3, 200),
          engagement_rate: `${predictableRandomInt(75, 25)}%`,
          average_view_time: predictableRandomInt(template.duration / 1e3, 3),
          skip_rate: `${predictableRandomInt(15, 2)}%`
        },
        // Metadata
        created_by: "marketing.team@place.tech",
        created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(60, 7))),
        updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(7, 0))),
        version: `v1.${v}`,
        status: "active"
      };
      media.push(mediaItem);
      mediaId++;
    }
  });
  return media;
}
function generateMockPlaylists(displays, media) {
  const playlists = [];
  let playlistId = 1;
  MOCK_BUILDINGS.forEach((building) => {
    const buildingDisplays = displays.filter((d) => d.building_id === building.id);
    const generalPlaylist = {
      id: `playlist-${String(playlistId).padStart(3, "0")}`,
      name: `${building.name} General Content`,
      description: `Default content rotation for all displays in ${building.name}`,
      // Content items (randomly select 5-8 media items)
      items: media.filter((m) => ["announcements", "corporate", "wellness"].includes(m.category)).sort(() => 0.5 - Math.random()).slice(0, predictableRandomInt(8, 5)).map((mediaItem, index) => ({
        id: `item-${playlistId}-${index + 1}`,
        media_id: mediaItem.id,
        order: index + 1,
        duration_override: null,
        start_date: mediaItem.scheduling.start_date,
        end_date: mediaItem.scheduling.end_date,
        conditions: {
          weather: null,
          occupancy: null,
          time_based: true
        }
      })),
      // Playlist settings
      settings: {
        loop: true,
        shuffle: false,
        auto_advance: true,
        emergency_interruption: true,
        volume_control: true,
        transition_effect: "fade",
        default_duration: 15e3
      },
      // Targeting
      target: {
        displays: buildingDisplays.map((d) => d.id),
        zones: [building.id],
        categories: ["lobby", "corridor", "general"]
      },
      // Scheduling
      schedule: {
        active_hours: {
          start: "06:00",
          end: "22:00",
          timezone: "Australia/Sydney"
        },
        days: [1, 2, 3, 4, 5],
        // Weekdays
        override_holidays: false
      },
      // Metadata
      created_by: "facilities.manager@place.tech",
      created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(30, 7))),
      updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(7, 0))),
      status: "active",
      priority: 5
    };
    playlists.push(generalPlaylist);
    playlistId++;
    if (predictableRandomInt(2) === 0) {
      const meetingPlaylist = {
        id: `playlist-${String(playlistId).padStart(3, "0")}`,
        name: `${building.name} Meeting Rooms`,
        description: `Content specifically for meeting room displays in ${building.name}`,
        items: media.filter((m) => ["events", "wayfinding", "announcements"].includes(m.category)).sort(() => 0.5 - Math.random()).slice(0, 4).map((mediaItem, index) => ({
          id: `item-${playlistId}-${index + 1}`,
          media_id: mediaItem.id,
          order: index + 1,
          duration_override: null,
          start_date: mediaItem.scheduling.start_date,
          end_date: mediaItem.scheduling.end_date
        })),
        target: {
          displays: buildingDisplays.filter((d) => d.location.area.includes("Meeting")).map((d) => d.id),
          zones: [building.id],
          categories: ["meeting_room"]
        },
        settings: {
          loop: true,
          auto_advance: true,
          emergency_interruption: true,
          show_room_schedule: true,
          integration: "calendar_api"
        },
        created_by: "it.admin@place.tech",
        created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(21, 3))),
        updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(5, 0))),
        status: "active",
        priority: 7
      };
      playlists.push(meetingPlaylist);
      playlistId++;
    }
  });
  const emergencyPlaylist = {
    id: `playlist-emergency`,
    name: "Emergency Broadcast",
    description: "High-priority emergency communications for all displays",
    items: media.filter((m) => m.category === "emergency").map((mediaItem, index) => ({
      id: `emergency-item-${index + 1}`,
      media_id: mediaItem.id,
      order: index + 1,
      duration_override: null
    })),
    target: {
      displays: displays.map((d) => d.id),
      // All displays
      zones: ["zone-EmWFTjuYExK"],
      categories: ["emergency"]
    },
    settings: {
      loop: true,
      interrupt_all: true,
      max_volume: true,
      ignore_schedule: true,
      manual_dismiss_only: true
    },
    created_by: "security.manager@place.tech",
    created_at: getUnixTime(subDays(Date.now(), 100)),
    updated_at: getUnixTime(subDays(Date.now(), 50)),
    status: "standby",
    // Activated only during emergencies
    priority: 10
  };
  playlists.push(emergencyPlaylist);
  return playlists;
}
function generateMockTriggers() {
  return [
    {
      id: "trigger-001",
      name: "Emergency Alert System",
      description: "Automatically broadcast emergency content",
      type: "emergency",
      conditions: {
        api_endpoint: "/api/emergency/status",
        trigger_value: "active",
        check_interval: 30
        // seconds
      },
      actions: {
        activate_playlist: "playlist-emergency",
        interrupt_all: true,
        volume_override: 100,
        priority: 10
      },
      active: true,
      last_triggered: null
    },
    {
      id: "trigger-002",
      name: "Meeting Room Booking Update",
      description: "Update meeting room displays when bookings change",
      type: "calendar_sync",
      conditions: {
        calendar_change: true,
        check_interval: 300,
        // 5 minutes
        rooms_only: true
      },
      actions: {
        refresh_content: true,
        update_schedule_display: true
      },
      active: true,
      last_triggered: getUnixTime(subDays(Date.now(), 0.5))
    },
    {
      id: "trigger-003",
      name: "Weather Content Update",
      description: "Update weather displays every 30 minutes",
      type: "scheduled",
      conditions: {
        schedule: "*/30 * * * *",
        // Every 30 minutes
        weather_api: "https://api.weather.com/current"
      },
      actions: {
        update_weather_content: true,
        refresh_transport_info: true
      },
      active: true,
      last_triggered: getUnixTime(subDays(Date.now(), 0.02))
      // ~30 min ago
    },
    {
      id: "trigger-004",
      name: "After Hours Display Schedule",
      description: "Switch to minimal content outside business hours",
      type: "time_based",
      conditions: {
        time_range: { start: "22:00", end: "06:00" },
        weekends: true,
        holidays: true
      },
      actions: {
        activate_screensaver: true,
        reduce_brightness: 30,
        minimal_content: true
      },
      active: true,
      last_triggered: getUnixTime(subDays(Date.now(), 1))
    }
  ];
}
var MOCK_DISPLAYS = generateMockDisplays();
var MOCK_MEDIA = generateMockMedia();
var MOCK_PLAYLISTS = generateMockPlaylists(MOCK_DISPLAYS, MOCK_MEDIA);
var MOCK_PLUGINS = [
  {
    id: "weather",
    name: "Weather",
    description: "Current weather signage widget",
    uri: "/plugins/weather/index.html",
    enabled: true,
    defaults: { units: "metric" },
    params: {
      location: {
        type: "string",
        title: "Location",
        default: "Sydney"
      }
    }
  },
  {
    id: "clock",
    name: "Clock",
    description: "Clock signage widget",
    uri: "/plugins/clock/index.html",
    enabled: true,
    defaults: { format: "24h" },
    params: {}
  }
];
var MOCK_TRIGGERS = generateMockTriggers();
var SIGNAGE_GROUPS = [
  {
    group: {
      id: "signage-group-facilities",
      name: "Facilities Signage",
      description: "Facility-managed signage content",
      subsystems: ["signage"]
    },
    permissions: 255
  },
  {
    group: {
      id: "signage-group-marketing",
      name: "Marketing Signage",
      description: "Marketing managed signage content",
      subsystems: ["signage"]
    },
    permissions: 129
  }
];
var SIGNAGE_GROUP_USERS = [
  {
    group_id: "signage-group-facilities",
    user_id: MOCK_STAFF[0].email,
    permissions: 255,
    user: MOCK_STAFF[0]
  },
  {
    group_id: "signage-group-facilities",
    user_id: MOCK_STAFF[1].email,
    permissions: 65,
    user: MOCK_STAFF[1]
  }
];
var SIGNAGE_GROUP_ZONES = [
  {
    group_id: "signage-group-facilities",
    zone_id: MOCK_BUILDINGS[0].id,
    permissions: 255,
    deny: false,
    zone: MOCK_BUILDINGS[0]
  }
];
function listSignageMockGroups(query_params = {}) {
  const groups = SIGNAGE_GROUPS.map((item) => item.group).filter((group) => {
    if (query_params.subsystem && !group.subsystems?.includes(query_params.subsystem)) {
      return false;
    }
    if (query_params.parent_id && group.parent_id !== query_params.parent_id) {
      return false;
    }
    if (query_params.q) {
      const search = query_params.q.toLowerCase();
      return group.name.toLowerCase().includes(search) || group.description.toLowerCase().includes(search);
    }
    return true;
  });
  const limit = Number(query_params.limit || groups.length) || groups.length;
  const offset = Number(query_params.offset || 0) || 0;
  return groups.slice(offset, offset + limit);
}
function filterByGroup(items, group_id = "") {
  if (!group_id || group_id === SIGNAGE_GROUPS[0].group.id)
    return items;
  return items.filter((_, index) => index % 2 === 0);
}
function toEngineMedia(item) {
  const is_video = item.type === "video";
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    media_type: is_video ? "video" : "image",
    media_uri: item.file?.url,
    media_id: "",
    thumbnail_id: item.file?.thumbnail_url ? item.id + "-thumb" : "",
    orientation: "landscape",
    play_time: item.display_properties?.duration_ms || 15e3,
    video_length: is_video ? item.display_properties?.duration_ms : 0,
    created_at: item.created_at,
    updated_at: item.updated_at,
    valid_from: item.scheduling?.start_date,
    valid_until: item.scheduling?.end_date,
    tags: item.tags || []
  };
}
function toEnginePlaylist(item) {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    enabled: item.status !== "disabled",
    random: !!item.settings?.shuffle,
    default_duration: item.settings?.default_duration || 15e3,
    default_animation: 1,
    orientation: "landscape",
    play_count: 0,
    created_at: item.created_at,
    updated_at: item.updated_at
  };
}
function playlistMediaResponse(playlist_id, approved = false) {
  const playlist = MOCK_PLAYLISTS.find((item) => item.id === playlist_id);
  return {
    id: `${playlist_id}-media`,
    playlist_id,
    items: (playlist?.items || []).map((item) => item.media_id),
    schedules: (playlist?.items || []).map((item) => ({
      id: item.id,
      item_id: item.media_id,
      schedules: []
    })),
    approved,
    approval_requested: false,
    updated_at: playlist?.updated_at || getUnixTime(Date.now())
  };
}
function signageDisplay(display_id) {
  if (display_id === "display-1") {
    throw { status: 404, message: "Display not found" };
  }
  const display = MOCK_DISPLAYS.find((item) => item.id === display_id) || MOCK_DISPLAYS[0];
  const playlists = MOCK_PLAYLISTS.filter((playlist) => playlist.target?.displays?.includes(display.id) || playlist.target?.zones?.includes(display.zone_id)).slice(0, 3);
  const mapped_playlists = playlists.length ? playlists : MOCK_PLAYLISTS.slice(0, 2);
  const media_ids = [
    ...new Set(mapped_playlists.flatMap((playlist) => playlist.items.map((item) => item.media_id)))
  ];
  return {
    id: display_id,
    zones: [display.zone_id, display.building_id].filter(Boolean),
    playlist_mappings: {
      [display_id]: mapped_playlists.map((playlist) => playlist.id),
      [display.zone_id]: []
    },
    playlist_config: Object.fromEntries(mapped_playlists.map((playlist) => [
      playlist.id,
      [
        toEnginePlaylist(playlist),
        playlist.items.map((item) => item.media_id)
      ]
    ])),
    playlist_media: media_ids.map((id) => MOCK_MEDIA.find((item) => item.id === id)).filter((item) => !!item).map(toEngineMedia),
    plugins: MOCK_PLUGINS
  };
}
function registerMockSignage() {
  MOCK_DISPLAYS.forEach((display, index) => {
    if (index < 10) {
      MOCK_ZONES.push({
        id: display.id,
        tags: ["signage", "display"],
        display_name: display.name.split(" ").slice(-2).join(" "),
        // Extract "Display A" from "Level 1 Display A"
        name: display.name,
        parent_id: display.building_id,
        description: display.description,
        hardware: display.hardware,
        status: display.status,
        location: display.location
      });
    }
  });
  Zr({
    path: "/api/engine/v2/groups/current",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params?.subsystem === "signage") {
        return SIGNAGE_GROUPS;
      }
      return [];
    }
  });
  Zr({
    path: "/api/engine/v2/groups",
    metadata: {},
    method: "GET",
    callback: (request) => listSignageMockGroups(request.query_params)
  });
  Zr({
    path: "/api/engine/v2/groups",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const group = __spreadProps(__spreadValues({}, request.body), {
        id: `signage-group-${Date.now()}`,
        subsystems: request.body?.subsystems || ["signage"],
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      SIGNAGE_GROUPS.push({ group, permissions: 255 });
      return group;
    }
  });
  Zr({
    path: "/api/engine/v2/groups/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      const item = SIGNAGE_GROUPS.find(({ group }) => group.id === request.route_params.id);
      if (!item)
        throw { status: 404, message: "Group not found" };
      item.group = __spreadProps(__spreadValues(__spreadValues({}, item.group), request.body), {
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      return item.group;
    }
  });
  Zr({
    path: "/api/engine/v2/groups/:id",
    metadata: {},
    method: "DELETE",
    callback: (request) => {
      const index = SIGNAGE_GROUPS.findIndex(({ group }) => group.id === request.route_params.id);
      if (index >= 0)
        SIGNAGE_GROUPS.splice(index, 1);
      return {};
    }
  });
  Zr({
    path: "/api/engine/v2/group_users",
    metadata: {},
    method: "GET",
    callback: (request) => SIGNAGE_GROUP_USERS.filter((item) => item.group_id === request.query_params?.group_id)
  });
  Zr({
    path: "/api/engine/v2/group_users",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const user = MOCK_STAFF.find((item2) => item2.email === request.body.user_id || item2.id === request.body.user_id);
      const item = __spreadProps(__spreadValues({}, request.body), {
        user_id: request.body.user_id,
        permissions: request.body.permissions || 0,
        user,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      SIGNAGE_GROUP_USERS.push(item);
      return item;
    }
  });
  Zr({
    path: "/api/engine/v2/group_users/:user_id/:group_id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      const user_id = decodeURIComponent(request.route_params.user_id);
      const group_id = decodeURIComponent(request.route_params.group_id);
      const item = SIGNAGE_GROUP_USERS.find((row) => row.user_id === user_id && row.group_id === group_id);
      if (!item)
        throw { status: 404, message: "Group user not found" };
      Object.assign(item, request.body, {
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      return item;
    }
  });
  Zr({
    path: "/api/engine/v2/group_users/:user_id/:group_id",
    metadata: {},
    method: "DELETE",
    callback: (request) => {
      const user_id = decodeURIComponent(request.route_params.user_id);
      const group_id = decodeURIComponent(request.route_params.group_id);
      const index = SIGNAGE_GROUP_USERS.findIndex((row) => row.user_id === user_id && row.group_id === group_id);
      if (index >= 0)
        SIGNAGE_GROUP_USERS.splice(index, 1);
      return {};
    }
  });
  Zr({
    path: "/api/engine/v2/group_zones",
    metadata: {},
    method: "GET",
    callback: (request) => SIGNAGE_GROUP_ZONES.filter((item) => item.group_id === request.query_params?.group_id)
  });
  Zr({
    path: "/api/engine/v2/group_zones",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const zone = MOCK_ZONES.find((item2) => item2.id === request.body.zone_id);
      const item = __spreadProps(__spreadValues({}, request.body), {
        permissions: request.body.permissions || 0,
        deny: !!request.body.deny,
        zone,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      SIGNAGE_GROUP_ZONES.push(item);
      return item;
    }
  });
  Zr({
    path: "/api/engine/v2/group_zones/:group_id/:zone_id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      const group_id = decodeURIComponent(request.route_params.group_id);
      const zone_id = decodeURIComponent(request.route_params.zone_id);
      const item = SIGNAGE_GROUP_ZONES.find((row) => row.group_id === group_id && row.zone_id === zone_id);
      if (!item)
        throw { status: 404, message: "Group zone not found" };
      Object.assign(item, request.body, {
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      return item;
    }
  });
  Zr({
    path: "/api/engine/v2/group_zones/:group_id/:zone_id",
    metadata: {},
    method: "DELETE",
    callback: (request) => {
      const group_id = decodeURIComponent(request.route_params.group_id);
      const zone_id = decodeURIComponent(request.route_params.zone_id);
      const index = SIGNAGE_GROUP_ZONES.findIndex((row) => row.group_id === group_id && row.zone_id === zone_id);
      if (index >= 0)
        SIGNAGE_GROUP_ZONES.splice(index, 1);
      return {};
    }
  });
  Zr({
    path: "/api/engine/v2/signage/media",
    metadata: {},
    method: "GET",
    callback: (request) => filterByGroup(MOCK_MEDIA, request.query_params?.group_id).map(toEngineMedia)
  });
  Zr({
    path: "/api/engine/v2/signage/media/tags",
    metadata: {},
    method: "GET",
    callback: (request) => [
      ...new Set(filterByGroup(MOCK_MEDIA, request.query_params?.group_id).flatMap((item) => item.tags || []).filter((tag2) => !!tag2))
    ]
  });
  Zr({
    path: "/api/engine/v2/signage/media",
    metadata: {},
    method: "POST",
    callback: (request) => __spreadProps(__spreadValues({}, request.body), {
      id: `media-${Date.now()}`,
      created_at: getUnixTime(Date.now()),
      updated_at: getUnixTime(Date.now())
    })
  });
  Zr({
    path: "/api/engine/v2/signage/media/:id",
    metadata: {},
    method: "GET",
    callback: (request) => toEngineMedia(MOCK_MEDIA.find((item) => item.id === request.route_params.id))
  });
  Zr({
    path: "/api/engine/v2/signage/media/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => __spreadProps(__spreadValues(__spreadValues({}, toEngineMedia(MOCK_MEDIA.find((item) => item.id === request.route_params.id))), request.body), {
      updated_at: getUnixTime(Date.now())
    })
  });
  Zr({
    path: "/api/engine/v2/signage/media/:id",
    metadata: {},
    method: "DELETE",
    callback: () => ({})
  });
  Zr({
    path: "/api/engine/v2/signage/media/:id/thumbnail",
    metadata: {},
    method: "GET",
    callback: () => ({})
  });
  Zr({
    path: "/api/engine/v2/signage/media/share",
    metadata: {},
    method: "POST",
    callback: () => ({})
  });
  Zr({
    path: "/api/engine/v2/signage/plugins",
    metadata: {},
    method: "GET",
    callback: () => MOCK_PLUGINS
  });
  Zr({
    path: "/api/engine/v2/signage/plugins/:id",
    metadata: {},
    method: "GET",
    callback: (request) => MOCK_PLUGINS.find((plugin) => plugin.id === request.route_params.id) || {}
  });
  Zr({
    path: "/api/engine/v2/signage/playlists",
    metadata: {},
    method: "GET",
    callback: (request) => filterByGroup(MOCK_PLAYLISTS, request.query_params?.group_id).map(toEnginePlaylist)
  });
  Zr({
    path: "/api/engine/v2/signage/playlists/approvers",
    metadata: {},
    method: "GET",
    callback: (request) => SIGNAGE_GROUP_USERS.filter((item) => item.group_id === request.query_params?.group_id).map((item) => ({
      id: item.user?.email || item.user_id,
      name: item.user?.name || item.user_id
    }))
  });
  Zr({
    path: "/api/engine/v2/signage/playlists",
    metadata: {},
    method: "POST",
    callback: (request) => __spreadProps(__spreadValues({}, request.body), {
      id: `playlist-${Date.now()}`,
      created_at: getUnixTime(Date.now()),
      updated_at: getUnixTime(Date.now())
    })
  });
  Zr({
    path: "/api/engine/v2/signage/playlists/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => __spreadProps(__spreadValues(__spreadValues({}, toEnginePlaylist(MOCK_PLAYLISTS.find((item) => item.id === request.route_params.id))), request.body), {
      updated_at: getUnixTime(Date.now())
    })
  });
  Zr({
    path: "/api/engine/v2/signage/playlists/:id",
    metadata: {},
    method: "DELETE",
    callback: () => ({})
  });
  Zr({
    path: "/api/engine/v2/signage/playlists/:id/media",
    metadata: {},
    method: "GET",
    callback: (request) => playlistMediaResponse(request.route_params.id, false)
  });
  Zr({
    path: "/api/engine/v2/signage/playlists/:id/media",
    metadata: {},
    method: "POST",
    callback: (request) => __spreadProps(__spreadValues({}, playlistMediaResponse(request.route_params.id, false)), {
      items: request.body || [],
      updated_at: getUnixTime(Date.now())
    })
  });
  Zr({
    path: "/api/engine/v2/signage/playlists/:id/media/schedule",
    metadata: {},
    method: "POST",
    callback: (request) => __spreadProps(__spreadValues({}, playlistMediaResponse(request.route_params.id, false)), {
      schedules: [
        {
          id: `schedule-${Date.now()}`,
          item_id: request.body?.item_id,
          schedules: request.body?.schedules || []
        }
      ]
    })
  });
  Zr({
    path: "/api/engine/v2/signage/playlists/:id/media/schedule/:item_id",
    metadata: {},
    method: "PATCH",
    callback: (request) => ({
      id: request.route_params.item_id,
      item_id: request.body?.item_id || request.route_params.item_id,
      schedules: request.body?.schedules || []
    })
  });
  Zr({
    path: "/api/engine/v2/signage/playlists/:id/media/revisions",
    metadata: {},
    method: "GET",
    callback: (request) => [
      playlistMediaResponse(request.route_params.id, false),
      playlistMediaResponse(request.route_params.id, true)
    ]
  });
  Zr({
    path: "/api/engine/v2/signage/playlists/:id/media/approve",
    metadata: {},
    method: "POST",
    callback: (request) => playlistMediaResponse(request.route_params.id, true)
  });
  Zr({
    path: "/api/engine/v2/signage/playlists/:id/media/request_approval",
    metadata: {},
    method: "POST",
    callback: () => ({})
  });
  Zr({
    path: "/api/engine/v2/signage/playlists/share",
    metadata: {},
    method: "POST",
    callback: () => ({})
  });
  Zr({
    path: "/api/engine/v2/signage/:id",
    metadata: {},
    method: "GET",
    callback: (request) => signageDisplay(request.route_params.id)
  });
  Zr({
    path: "/api/engine/v2/signage/:id/metrics",
    metadata: {},
    method: "POST",
    callback: () => ({})
  });
  Zr({
    path: "/api/staff/v1/signage-displays",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let displays = MOCK_DISPLAYS;
      if (request.query_params?.building_id) {
        displays = displays.filter((d) => d.building_id === request.query_params.building_id);
      }
      if (request.query_params?.status) {
        displays = displays.filter((d) => d.status === request.query_params.status);
      }
      if (request.query_params?.zone_id) {
        displays = displays.filter((d) => d.zone_id === request.query_params.zone_id);
      }
      return {
        data: displays,
        meta: {
          total: displays.length,
          online: displays.filter((d) => d.status === "online").length,
          offline: displays.filter((d) => d.status === "offline").length,
          error: displays.filter((d) => d.status === "error").length
        }
      };
    }
  });
  Zr({
    path: "/api/staff/v1/signage/displays/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const display = MOCK_DISPLAYS.find((d) => d.id === request.route_params.id);
      if (!display)
        throw { status: 404, message: "Display not found" };
      return display;
    }
  });
  Zr({
    path: "/api/staff/v1/signage/media",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let media = MOCK_MEDIA;
      if (request.query_params?.category) {
        media = media.filter((m) => m.category === request.query_params.category);
      }
      if (request.query_params?.status) {
        media = media.filter((m) => m.status === request.query_params.status);
      }
      if (request.query_params?.type) {
        media = media.filter((m) => m.type === request.query_params.type);
      }
      const page = parseInt(request.query_params?.page) || 1;
      const limit = parseInt(request.query_params?.limit) || 20;
      const offset = (page - 1) * limit;
      return {
        data: media.slice(offset, offset + limit),
        meta: {
          page,
          limit,
          total: media.length,
          pages: Math.ceil(media.length / limit),
          categories: CONTENT_CATEGORIES
        }
      };
    }
  });
  Zr({
    path: "/api/staff/v1/signage/playlists",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let playlists = MOCK_PLAYLISTS;
      if (request.query_params?.building_id) {
        playlists = playlists.filter((p) => p.target.zones.includes(request.query_params.building_id));
      }
      if (request.query_params?.status) {
        playlists = playlists.filter((p) => p.status === request.query_params.status);
      }
      return {
        data: playlists,
        meta: {
          total: playlists.length,
          active: playlists.filter((p) => p.status === "active").length,
          standby: playlists.filter((p) => p.status === "standby").length
        }
      };
    }
  });
  Zr({
    path: "/api/staff/v1/signage/playlists/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const playlist = MOCK_PLAYLISTS.find((p) => p.id === request.route_params.id);
      if (!playlist)
        throw { status: 404, message: "Playlist not found" };
      const playlistWithMedia = __spreadProps(__spreadValues({}, playlist), {
        items: playlist.items.map((item) => __spreadProps(__spreadValues({}, item), {
          media: MOCK_MEDIA.find((m) => m.id === item.media_id)
        }))
      });
      return playlistWithMedia;
    }
  });
  Zr({
    path: "/api/staff/v1/signage/triggers",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let triggers = MOCK_TRIGGERS;
      if (request.query_params?.type) {
        triggers = triggers.filter((t) => t.type === request.query_params.type);
      }
      if (request.query_params?.active !== void 0) {
        const isActive = request.query_params.active === "true";
        triggers = triggers.filter((t) => t.active === isActive);
      }
      return {
        data: triggers,
        meta: {
          total: triggers.length,
          active: triggers.filter((t) => t.active).length,
          inactive: triggers.filter((t) => !t.active).length
        }
      };
    }
  });
  Zr({
    path: "/api/staff/v1/signage/displays/:id/content",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const display = MOCK_DISPLAYS.find((d) => d.id === request.route_params.id);
      if (!display)
        throw { status: 404, message: "Display not found" };
      const activePlaylist = MOCK_PLAYLISTS.find((p) => p.status === "active" && p.target.displays.includes(display.id));
      if (!activePlaylist) {
        return { message: "No active content for this display" };
      }
      const currentItem = activePlaylist.items[predictableRandomInt(activePlaylist.items.length)];
      const media = MOCK_MEDIA.find((m) => m.id === currentItem.media_id);
      return {
        display_id: display.id,
        current_content: {
          playlist: activePlaylist,
          item: currentItem,
          media,
          started_at: (/* @__PURE__ */ new Date()).toISOString(),
          remaining_time: media?.file.duration_seconds || 15
        },
        next_content: activePlaylist.items[(activePlaylist.items.indexOf(currentItem) + 1) % activePlaylist.items.length]
      };
    }
  });
  Zr({
    path: "/api/staff/v1/signage-analytics",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const timeframe = request.query_params?.timeframe || "7d";
      const building_id = request.query_params?.building_id;
      let displays = MOCK_DISPLAYS;
      if (building_id) {
        displays = displays.filter((d) => d.building_id === building_id);
      }
      return {
        timeframe,
        summary: {
          total_displays: displays.length,
          online_displays: displays.filter((d) => d.status === "online").length,
          total_impressions: displays.reduce((sum, d) => sum + d.analytics.daily_views, 0) * (timeframe === "7d" ? 7 : timeframe === "30d" ? 30 : 1),
          average_uptime: "99.2%",
          content_items_served: MOCK_MEDIA.length * displays.length * 24
        },
        performance: displays.map((display) => ({
          display_id: display.id,
          display_name: display.name,
          uptime: `${100 - predictableRandomInt(5)}%`,
          impressions: display.analytics.daily_views * (timeframe === "7d" ? 7 : timeframe === "30d" ? 30 : 1),
          engagement: display.analytics.content_engagement,
          errors: display.analytics.error_count_24h
        })),
        content_performance: MOCK_MEDIA.slice(0, 10).map((media) => ({
          media_id: media.id,
          media_name: media.name,
          impressions: media.performance.impressions,
          engagement_rate: media.performance.engagement_rate,
          average_view_time: media.performance.average_view_time
        })),
        health_alerts: displays.filter((d) => d.status !== "online").map((display) => ({
          display_id: display.id,
          display_name: display.name,
          alert_type: display.status,
          message: display.status === "offline" ? "Display is not responding" : display.status === "error" ? "Hardware error detected" : "Maintenance mode active",
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }))
      };
    }
  });
  Zr({
    path: "/api/staff/v1/signage-displays/:id/control",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const display = MOCK_DISPLAYS.find((d) => d.id === request.route_params.id);
      if (!display)
        throw { status: 404, message: "Display not found" };
      const action = request.body?.action;
      const validActions = [
        "power_on",
        "power_off",
        "restart",
        "refresh_content",
        "update_brightness",
        "update_volume"
      ];
      if (!validActions.includes(action)) {
        throw { status: 400, message: "Invalid action" };
      }
      return {
        display_id: display.id,
        action,
        status: "success",
        message: `Action ${action} executed successfully`,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
    }
  });
}

// libs/mocks/src/lib/api/surveys.mock.ts
var MOCK_SURVEYS = [
  {
    id: 1,
    title: "Employee Satisfaction Survey",
    description: "Annual survey to assess employee satisfaction and workplace culture",
    trigger: "quarterly",
    building_id: "bld-01",
    zone_id: "bld-01_lvl-G",
    pages: [
      {
        title: "Job Satisfaction",
        description: "Questions about your current role and responsibilities",
        question_order: [1, 2, 3]
      },
      {
        title: "Work Environment",
        description: "Questions about your workplace and facilities",
        question_order: [4, 5, 6]
      }
    ]
  },
  {
    id: 2,
    title: "Facility Feedback Survey",
    description: "Help us improve our office facilities and amenities",
    trigger: "monthly",
    building_id: "bld-02",
    zone_id: "bld-02_lvl-2",
    pages: [
      {
        title: "Office Facilities",
        description: "Rate your experience with our office facilities",
        question_order: [7, 8, 9]
      }
    ]
  },
  {
    id: 3,
    title: "Meeting Room Experience",
    description: "Quick feedback about your meeting room experience",
    trigger: "after_booking",
    building_id: "bld-03",
    zone_id: "bld-03_lvl-1",
    pages: [
      {
        title: "Room Quality",
        description: "How was your meeting room experience?",
        question_order: [10, 11]
      }
    ]
  },
  {
    id: 4,
    title: "Melbourne Office Feedback",
    description: "Help us improve the Melbourne office experience",
    trigger: "monthly",
    building_id: "bld-04",
    zone_id: "bld-04_lvl-1",
    pages: [
      {
        title: "Office Environment",
        description: "Rate your Melbourne office experience",
        question_order: [12, 13, 14]
      }
    ]
  },
  {
    id: 5,
    title: "Innovation Lab Usage Survey",
    description: "Feedback on research and development facilities",
    trigger: "quarterly",
    building_id: "bld-05",
    zone_id: "bld-05_lvl-2",
    pages: [
      {
        title: "Lab Facilities",
        description: "How are you finding the innovation lab?",
        question_order: [15, 16]
      }
    ]
  },
  {
    id: 6,
    title: "Parking Experience Survey",
    description: "Help us improve parking facilities",
    trigger: "weekly",
    building_id: "bld-01",
    zone_id: "bld-01_lvl-P1",
    pages: [
      {
        title: "Parking Quality",
        description: "Rate your parking experience",
        question_order: [17, 18]
      }
    ]
  },
  {
    id: 7,
    title: "Comprehensive Feedback Survey",
    description: "A survey with all question types for testing",
    trigger: "monthly",
    building_id: "bld-01",
    zone_id: "bld-01_lvl-1",
    pages: [
      {
        title: "Page 1 - Ratings and Text",
        description: "Rate your experience and provide text feedback",
        question_order: [19, 20, 21]
      },
      {
        title: "Page 2 - Selections",
        description: "Select from various options",
        question_order: [22, 23, 24]
      }
    ]
  }
];
var MOCK_QUESTIONS = [
  {
    id: 1,
    title: "How satisfied are you with your current role?",
    description: "Rate your overall job satisfaction",
    type: "rating",
    options: {
      min: 1,
      max: 5,
      labels: [
        "Very Dissatisfied",
        "Dissatisfied",
        "Neutral",
        "Satisfied",
        "Very Satisfied"
      ]
    },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["job-satisfaction", "role"],
    deleted: false
  },
  {
    id: 2,
    title: "Do you feel valued by your supervisor?",
    description: "How valued do you feel by your direct supervisor?",
    type: "multiple_choice",
    options: {},
    required: true,
    max_rating: 0,
    choices: ["Always", "Often", "Sometimes", "Rarely", "Never"],
    tags: ["supervisor", "recognition"],
    deleted: false
  },
  {
    id: 3,
    title: "What could we improve about your work experience?",
    description: "Please share any suggestions for improvement",
    type: "text",
    options: { multiline: true, max_length: 500 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["feedback", "improvement"],
    deleted: false
  },
  {
    id: 4,
    title: "Rate the cleanliness of the office",
    description: "How would you rate the overall cleanliness?",
    type: "rating",
    options: { min: 1, max: 10 },
    required: true,
    max_rating: 10,
    choices: [],
    tags: ["cleanliness", "office"],
    deleted: false
  },
  {
    id: 5,
    title: "Is the temperature comfortable in your work area?",
    description: "Rate the temperature comfort level",
    type: "multiple_choice",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      "Too Cold",
      "Slightly Cold",
      "Just Right",
      "Slightly Warm",
      "Too Warm"
    ],
    tags: ["temperature", "comfort"],
    deleted: false
  },
  {
    id: 6,
    title: "How would you rate the noise level?",
    description: "Is the office noise level appropriate for work?",
    type: "rating",
    options: {
      min: 1,
      max: 5,
      labels: [
        "Too Quiet",
        "Slightly Quiet",
        "Perfect",
        "Slightly Noisy",
        "Too Noisy"
      ]
    },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["noise", "environment"],
    deleted: false
  },
  {
    id: 7,
    title: "Rate the kitchen facilities",
    description: "How satisfied are you with the kitchen and dining areas?",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["kitchen", "facilities"],
    deleted: false
  },
  {
    id: 8,
    title: "Which amenities do you use most?",
    description: "Select all that apply",
    type: "checkbox",
    options: {},
    required: false,
    max_rating: 0,
    choices: [
      { text: "Coffee machine" },
      { text: "Microwave" },
      { text: "Refrigerator" },
      { text: "Water cooler" },
      { text: "Vending machines" },
      { text: "Recreation area" }
    ],
    tags: ["amenities", "usage"],
    deleted: false
  },
  {
    id: 9,
    title: "Additional facility suggestions",
    description: "What other facilities would you like to see?",
    type: "text",
    options: { multiline: true, max_length: 300 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["suggestions", "facilities"],
    deleted: false
  },
  {
    id: 10,
    title: "Rate the meeting room quality",
    description: "Overall quality of the meeting room you used",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["meeting-room", "quality"],
    deleted: false
  },
  {
    id: 11,
    title: "Were all technical equipment working properly?",
    description: "Screen, projector, video conferencing, etc.",
    type: "multiple_choice",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      "Yes, everything worked perfectly",
      "Most things worked",
      "Some issues but manageable",
      "Major technical problems"
    ],
    tags: ["technical", "equipment"],
    deleted: false
  },
  {
    id: 12,
    title: "How would you rate the Melbourne office atmosphere?",
    description: "Overall atmosphere and culture in Melbourne",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["atmosphere", "culture", "melbourne"],
    deleted: false
  },
  {
    id: 13,
    title: "What do you like most about the Melbourne office?",
    description: "Share what you enjoy about working here",
    type: "text",
    options: { multiline: true, max_length: 400 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["feedback", "positive", "melbourne"],
    deleted: false
  },
  {
    id: 14,
    title: "How often do you use the gym facilities?",
    description: "Frequency of gym usage",
    type: "multiple_choice",
    options: {},
    required: false,
    max_rating: 0,
    choices: ["Daily", "Few times a week", "Weekly", "Monthly", "Never"],
    tags: ["gym", "facilities", "usage"],
    deleted: false
  },
  {
    id: 15,
    title: "Rate the innovation lab equipment",
    description: "Quality and availability of lab equipment",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["equipment", "innovation", "lab"],
    deleted: false
  },
  {
    id: 16,
    title: "What additional equipment would be helpful?",
    description: "Suggestions for new lab equipment or tools",
    type: "text",
    options: { multiline: true, max_length: 300 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["equipment", "suggestions", "innovation"],
    deleted: false
  },
  {
    id: 17,
    title: "How easy is it to find parking?",
    description: "Rate the ease of finding a parking spot",
    type: "rating",
    options: {
      min: 1,
      max: 5,
      labels: [
        "Very Difficult",
        "Difficult",
        "Neutral",
        "Easy",
        "Very Easy"
      ]
    },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["parking", "availability"],
    deleted: false
  },
  {
    id: 18,
    title: "Do you use EV charging stations?",
    description: "Electric vehicle charging usage",
    type: "multiple_choice",
    options: {},
    required: false,
    max_rating: 0,
    choices: [
      "Yes, regularly",
      "Yes, occasionally",
      "No, but would like to",
      "No, not needed"
    ],
    tags: ["ev-charging", "parking", "sustainability"],
    deleted: false
  },
  // Comprehensive survey questions (19-24)
  {
    id: 19,
    title: "Overall satisfaction rating",
    description: "Rate your overall satisfaction from 1 to 5",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["satisfaction", "comprehensive"],
    deleted: false
  },
  {
    id: 20,
    title: "Your name",
    description: "Please enter your name",
    type: "text",
    options: { max_length: 100 },
    required: true,
    max_rating: 0,
    choices: [],
    tags: ["name", "comprehensive"],
    deleted: false
  },
  {
    id: 21,
    title: "Additional comments",
    description: "Please share any additional feedback",
    type: "comment",
    options: { multiline: true, max_length: 500 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["comments", "comprehensive"],
    deleted: false
  },
  {
    id: 22,
    title: "Preferred contact method",
    description: "How would you like us to contact you?",
    type: "dropdown",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      { text: "Email" },
      { text: "Phone" },
      { text: "In Person" },
      { text: "No Contact" }
    ],
    tags: ["contact", "comprehensive"],
    deleted: false
  },
  {
    id: 23,
    title: "Preferred time of day",
    description: "When is the best time to reach you?",
    type: "radiogroup",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      { text: "Morning (9am - 12pm)" },
      { text: "Afternoon (12pm - 5pm)" },
      { text: "Evening (5pm - 8pm)" }
    ],
    tags: ["time", "comprehensive"],
    deleted: false
  },
  {
    id: 24,
    title: "Topics of interest",
    description: "Select all topics that interest you",
    type: "checkbox",
    options: {},
    required: false,
    max_rating: 0,
    choices: [
      { text: "Workplace improvements" },
      { text: "New facilities" },
      { text: "Team events" },
      { text: "Training opportunities" }
    ],
    tags: ["interests", "comprehensive"],
    deleted: false
  }
];
var MOCK_ANSWERS = [
  {
    id: 1,
    question_id: 1,
    survey_id: 1,
    type: "rating",
    answer_json: { rating: 4, comment: "Generally satisfied with my role" }
  },
  {
    id: 2,
    question_id: 2,
    survey_id: 1,
    type: "multiple_choice",
    answer_json: { choice: "Often", index: 1 }
  },
  {
    id: 3,
    question_id: 3,
    survey_id: 1,
    type: "text",
    answer_json: { text: "More flexible working hours would be great." }
  },
  {
    id: 4,
    question_id: 4,
    survey_id: 2,
    type: "rating",
    answer_json: { rating: 8 }
  },
  {
    id: 5,
    question_id: 5,
    survey_id: 2,
    type: "multiple_choice",
    answer_json: { choice: "Just Right", index: 2 }
  },
  {
    id: 6,
    question_id: 10,
    survey_id: 3,
    type: "rating",
    answer_json: {
      rating: 5,
      comment: "Excellent meeting room experience"
    }
  },
  {
    id: 7,
    question_id: 11,
    survey_id: 3,
    type: "multiple_choice",
    answer_json: { choice: "Yes, everything worked perfectly", index: 0 }
  },
  {
    id: 8,
    question_id: 12,
    survey_id: 4,
    type: "rating",
    answer_json: { rating: 4, comment: "Great atmosphere in Melbourne" }
  },
  {
    id: 9,
    question_id: 13,
    survey_id: 4,
    type: "text",
    answer_json: {
      text: "Love the city views and the collaborative spaces"
    }
  },
  {
    id: 10,
    question_id: 15,
    survey_id: 5,
    type: "rating",
    answer_json: { rating: 5, comment: "Excellent lab equipment" }
  },
  {
    id: 11,
    question_id: 17,
    survey_id: 6,
    type: "rating",
    answer_json: { rating: 3 }
  },
  {
    id: 12,
    question_id: 18,
    survey_id: 6,
    type: "multiple_choice",
    answer_json: { choice: "Yes, occasionally", index: 1 }
  }
];
function registerMockSurveys() {
  Zr({
    path: "/api/staff/v1/surveys",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const { query_params } = request;
      let filteredSurveys = [...MOCK_SURVEYS];
      if (query_params?.building_id) {
        filteredSurveys = filteredSurveys.filter((survey) => survey.building_id === query_params.building_id);
      }
      if (query_params?.zone_id) {
        filteredSurveys = filteredSurveys.filter((survey) => survey.zone_id === query_params.zone_id);
      }
      if (query_params?.trigger) {
        filteredSurveys = filteredSurveys.filter((survey) => survey.trigger === query_params.trigger);
      }
      return filteredSurveys;
    }
  });
  Zr({
    path: "/api/staff/v1/surveys/questions",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const { query_params } = request;
      let filteredQuestions = MOCK_QUESTIONS.filter((q) => !q.deleted);
      if (query_params?.survey_id) {
        const surveyId = parseInt(query_params.survey_id);
        const survey = MOCK_SURVEYS.find((s) => s.id === surveyId);
        if (survey) {
          const questionIds = survey.pages.flatMap((page) => page.question_order);
          filteredQuestions = filteredQuestions.filter((q) => questionIds.includes(q.id));
        }
      }
      if (query_params?.type) {
        filteredQuestions = filteredQuestions.filter((q) => q.type === query_params.type);
      }
      if (query_params?.tags) {
        const searchTags = Array.isArray(query_params.tags) ? query_params.tags : [query_params.tags];
        filteredQuestions = filteredQuestions.filter((q) => searchTags.some((tag2) => q.tags.includes(tag2)));
      }
      return filteredQuestions;
    }
  });
  Zr({
    path: "/api/staff/v1/surveys/questions/:id",
    metadata: {},
    method: "GET",
    delay: 50,
    delay_variance: 10,
    callback: (request) => {
      const questionId = parseInt(request.route_params?.id);
      const question = MOCK_QUESTIONS.find((q) => q.id === questionId && !q.deleted);
      if (!question) {
        throw new Error("Question not found");
      }
      return question;
    }
  });
  Zr({
    path: "/api/staff/v1/surveys/answers",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const { query_params } = request;
      let filteredAnswers = [...MOCK_ANSWERS];
      if (query_params?.survey_id) {
        const surveyId = parseInt(query_params.survey_id);
        filteredAnswers = filteredAnswers.filter((answer) => answer.survey_id === surveyId);
      }
      if (query_params?.question_id) {
        const questionId = parseInt(query_params.question_id);
        filteredAnswers = filteredAnswers.filter((answer) => answer.question_id === questionId);
      }
      if (query_params?.type) {
        filteredAnswers = filteredAnswers.filter((answer) => answer.type === query_params.type);
      }
      return filteredAnswers;
    }
  });
  Zr({
    path: "/api/staff/v1/surveys/answers/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const answerId = parseInt(request.route_params?.id);
      const answer = MOCK_ANSWERS.find((a) => a.id === answerId);
      if (!answer) {
        throw new Error("Answer not found");
      }
      return answer;
    }
  });
  Zr({
    path: "/api/staff/v1/surveys/:id",
    metadata: {},
    method: "GET",
    delay: 50,
    delay_variance: 10,
    callback: (request) => {
      const surveyId = parseInt(request.route_params?.id);
      const survey = MOCK_SURVEYS.find((s) => s.id === surveyId);
      if (!survey) {
        throw new Error("Survey not found");
      }
      return survey;
    }
  });
  Zr({
    path: "/api/staff/v1/surveys/answers",
    metadata: {},
    method: "POST",
    delay: 50,
    delay_variance: 10,
    callback: (request) => {
      const body = request.body;
      const answers = Array.isArray(body) ? body : [body];
      const created_answers = [];
      for (const answer of answers) {
        const new_id = Math.max(...MOCK_ANSWERS.map((a) => a.id), 0) + 1;
        const new_answer = {
          id: new_id,
          survey_id: answer.survey_id,
          question_id: answer.question_id,
          type: answer.type,
          answer_json: answer.answer_json
        };
        MOCK_ANSWERS.push(new_answer);
        created_answers.push(new_answer);
      }
      return created_answers.length === 1 ? created_answers[0] : created_answers;
    }
  });
}

// libs/mocks/src/lib/realtime/camera.ts
var CameraTilt;
(function(CameraTilt2) {
  CameraTilt2[CameraTilt2["Down"] = 0] = "Down";
  CameraTilt2[CameraTilt2["Up"] = 1] = "Up";
  CameraTilt2[CameraTilt2["Stop"] = 2] = "Stop";
})(CameraTilt || (CameraTilt = {}));
var CameraPan;
(function(CameraPan2) {
  CameraPan2[CameraPan2["Left"] = 0] = "Left";
  CameraPan2[CameraPan2["Right"] = 1] = "Right";
  CameraPan2[CameraPan2["Stop"] = 2] = "Stop";
})(CameraPan || (CameraPan = {}));
var CameraModule = class {
  constructor(_) {
    this.pan = 0;
    this.tilt = 0;
    this.zoom = 50;
    this.pan_speed = 5;
    this.tilt_speed = 5;
    this.zoom_speed = 5;
    this.moving = false;
    this.presets = [
      "Preset One",
      "Preset 2",
      "Preset Three",
      "Wide Shot",
      "Close Up"
    ];
  }
  $pan(dir) {
    if (dir === CameraPan.Left) {
      this.pan = Math.max(-100, this.pan - this.pan_speed);
    } else if (dir === CameraPan.Right) {
      this.pan = Math.min(100, this.pan + this.pan_speed);
    }
    this.moving = dir !== CameraPan.Stop;
  }
  $tilt(dir) {
    if (dir === CameraTilt.Up) {
      this.tilt = Math.min(100, this.tilt + this.tilt_speed);
    } else if (dir === CameraTilt.Down) {
      this.tilt = Math.max(-100, this.tilt - this.tilt_speed);
    }
    this.moving = dir !== CameraTilt.Stop;
  }
  $zoom(direction) {
    if (direction === "in") {
      this.zoom = Math.min(100, this.zoom + this.zoom_speed);
    } else if (direction === "out") {
      this.zoom = Math.max(0, this.zoom - this.zoom_speed);
    }
  }
  $recall(name) {
    if (this.presets.includes(name)) {
      this.pan = 0;
      this.tilt = 0;
      this.zoom = 50;
    }
  }
  $save_preset(name) {
    if (!this.presets.includes(name)) {
      this.presets = [...this.presets, name];
    }
  }
};
var createCameraModule = (space, overrides = {}) => new CameraModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/capture.ts
var interval;
var CaptureModule = class {
  constructor(_) {
    this.status = "stopped";
    this.live = false;
    this.remaining = randomInt(24 * 60 * 60);
  }
  $start() {
    this.status = "playing";
    interval = setInterval(() => {
      if (this.remaining < 1)
        clearInterval(interval);
      this.remaining = this.remaining - 1;
      this.current = this.current + 1;
    }, 3e3);
  }
  $pause() {
    this.status = "paused";
    clearInterval(interval);
  }
  $resume() {
    this.$start();
  }
  $stop() {
    this.status = "stopped";
    this.current = 0;
    clearInterval(interval);
  }
};
var createCaptureModule = (space, overrides = {}) => new CaptureModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/contact-tracing.ts
var CONTACT_EVENTS = {};
var filterFn = (start, end) => (itm) => {
  return timePeriodsIntersect(start, end, itm.contact_time, itm.contact_time);
};
var ContactTracingModule = class {
  constructor(_) {
  }
  $close_contacts(email, user, start, end) {
    if (!CONTACT_EVENTS[email])
      CONTACT_EVENTS[email] = [];
    if (CONTACT_EVENTS[email].length)
      return CONTACT_EVENTS[email].filter(filterFn(start, end));
    const events = [];
    const beginning = addDays(start * 1e3, -10);
    const ending = addDays(end * 1e3, 10);
    let date = new Date(beginning);
    while (isBefore(date, ending)) {
      new Array(randomInt(4)).fill(0).map((_) => ({
        mac_address: randomString(10),
        contact_time: getUnixTime(setHours(date, randomInt(11) + 7)),
        duration: randomInt(60) * 60,
        username: MOCK_STAFF[randomInt(MOCK_STAFF.length)].email
      })).forEach((e) => events.push(e));
      date = addDays(date, 1);
    }
    CONTACT_EVENTS[email] = events;
    return CONTACT_EVENTS[email].filter(filterFn(start, end));
  }
};
var createContactTracingModule = (space, overrides = {}) => new ContactTracingModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/control.ts
var RoomModule = class {
  constructor(_data) {
    this.lighting_scenes = [
      "Off",
      "Presentation",
      "Meeting",
      "Full"
    ];
    this.lighting_scene = "Off";
    this.lighting_levels = {
      zone1: 50,
      zone2: 75,
      zone3: 100
    };
    this.available_cameras = [
      "Camera_1",
      "Camera_2",
      "Camera_3",
      "Camera_4"
    ];
    this.selected_camera = "Camera_1";
    this.microphones = [
      "Microphone_1",
      "Microphone_2",
      "Microphone_3"
    ];
    this.join_modes = {
      independent: "Independent",
      combined: "Combined Mode",
      overflow: "Overflow Mode"
    };
    this.joined = { room_ids: [] };
    this.join_lockout_secondary = false;
    this.room_accessories = [
      {
        id: "blind1",
        name: "Window Blinds",
        icon: "blinds",
        states: ["Open", "Closed", "Half"],
        state: "Open"
      },
      {
        id: "screen1",
        name: "Projector Screen",
        icon: "screen_share",
        states: ["Up", "Down"],
        state: "Up"
      }
    ];
    this.voice_control = true;
    this.dial_bindings = {
      module: "QSC",
      index: 1
    };
    this.offhook = false;
    this.ringing = false;
    this.has_master_audio = true;
    this.mute = false;
    this.meeting_url = "https://meet.example.com/room-123";
    this.hide_join_button = false;
    this.hide_present_all = false;
    this.preview_outputs = ["Display1", "Display2"];
    this.help = {
      help: {
        title: "Help",
        content: `
# Using the asset browser

## Activating the menu
The 5 finger touch can be actvated by placing 4 fingers and your thumb on the screen, or quickly double-tapping the screen. Activation through double tap will leave the menu on-screen. To close tap the \u2018X\u2019.

## Selecting a menu item
Leaving at least one finger on the screen, drag your finger to the icon to select.

## Home Menu
The home menu allows you to access files and navigate to content and presentations via the Launcher.

## Connect and stream your laptop or access the CMS to add files
Plug your laptop into the HDMI to stream it to the screen, or access the CMS to add your own content and create custom presentations.

<video></video>

1. Test1
2. Test2
3. Test3
            `
      },
      "laptop-help": {
        icon: "web_asset",
        title: "Asset Browser",
        content: `# Test 2`
      }
    };
    this.tabs = [
      {
        icon: "laptop",
        name: "Laptop",
        type: "Laptop"
      },
      {
        icon: "call",
        name: "VC",
        inputs: ["VidConf_1"],
        help: "vidconf-help",
        controls: "vidconf-controls"
      }
    ];
    this.volume = 0;
    this.name = _data.name || "Test Module";
    this.connected = _data.connected ?? true;
    this.active = _data.active || false;
    this.input_list = _data.input_list;
    this.output_list = _data.output_list;
    this.env_sources = _data.env_sources || [];
    this.inputs = Object.keys(this.input_list || {}) || [];
    this.outputs = Object.keys(this.output_list || {}) || [];
    this.available_outputs = this.outputs;
    const types = unique(this.env_sources.map((_) => _.type)) || [];
    types.forEach((t) => this[`${t}`] = this.env_sources.filter((_) => _.type === t).map((_) => _.id));
    this.env_sources.forEach((source) => this[`${source.type}/${source.id}`] = source);
    this.inputs.forEach((key) => this[`input/${key}`] = this.input_list[key]);
    this.outputs.forEach((key) => this[`output/${key}`] = this.output_list[key]);
  }
  $power(state = true) {
    this.active = state;
  }
  /** Shares a signal source with the room and any connected remote participants. */
  $share() {
  }
  /**
   * Connect a signal source to a signal output, or set of outputs. Any intermediate
   * device interactions are handled internally. For example, on a system using a small
   * presentation switcher and a display, routing a laptop input will select the
   * appropriate input on the switcher, and select the appropriate input on the display.
   *
   * This includes all routable signal types - in addition to the above example, this may
   * be interacting with an audio DSP to add a microphone feed to an output zone, or
   * connecting a USB HID input device with a specific output.
   **/
  $route(input2, output2) {
    if (this.inputs.includes(input2) && this.outputs.includes(output2)) {
      this.$updateState(input2, {
        routes: unique([
          ...this.input_list[input2].routes || [],
          output2
        ])
      });
      this.$updateState(output2, {
        source: input2,
        following: input2
      });
    }
  }
  /**
   * Remove a signal source from a signal output.
   * Predominantly intended for outputs that support more than one simultaneous input source
   * (mixed audio zone, or display capable of compositing multiple video sources).
   **/
  $unroute() {
  }
  /**
   * Establish a call (either phone or video) with a remote participant.
   * This may be a peer-to-peer connection or a wider group via an external bridging service.
   **/
  $connect() {
  }
  /** End a call with a remote participant. */
  $disconnect() {
  }
  /**
   * Bind the current system to another PlaceOS controlled space, relinquishing local control.
   * This may be used for an education pod that pairs with a wider classroom or a room being
   * used as an overflow from a primary event space.
   **/
  $link() {
  }
  /**
   * Join the current system with another PlaceOS controlled space, sharing control and signal IO.
   * Examples of usage would be a set of rooms with moveable walls. N-way merges supported.
   **/
  $merge() {
  }
  /** Separate from a linked or merged system. */
  $split() {
  }
  /**
   * Display an alert visible to participants in the space. This may occur as a screen overlay,
   * on a control interface, a bot post in a chat space associated with the current meeting or
   * other modalities depending on hardware capability.
   **/
  $notify() {
  }
  /**
   * Place the room into a predefined operation mode. This may include executing an arbitrary
   * set of device interactions, changing metadata associated with the system itself (changing
   * available input or output nodes), or other configurable actions designed to transition
   * the space to a specific state.
   **/
  $preset() {
  }
  /**
   * Set the volume for a signal node in the space. This can include outputs as well as inputs
   * where supported (e.g. microphone). If unspecified, default is to interact with a ‘primary’
   * output node.
   **/
  $volume(value, source = "all") {
    if (source === "all") {
      this.volume = value;
    }
  }
  /** Interact with audio muting on supporting signal nodes within the space. */
  $mute(state = true, source = "all") {
    this.$updateState(source, { mute: state });
  }
  /**
   * Activates or deactivates a signal mute for the associated IO. If this is not possible,
   * (e.g. unsupported by the device) an error is returned.
   **/
  $unmute(source = "all") {
    this.$mute(false, source);
  }
  /**
   * Wrapper for an arbitrary set of control points defined in system configuration.
   * Each of these may map to control options available on a sibling module and take one of two forms:
   *  - Continuous value within a range (temperature set point 16.0...28.0 degrees, lighting level 0...100)
   *  - Set of possible states (lighting high/med/low, blind up/down, electrochromic glass clear/opaque)
   *
   * System state provides the ability to introspect configured points for both control limits and current value.
   **/
  $environment(id, state) {
    const source = this.env_sources.find((_) => _.id === id);
    if (source) {
      this[`${source.type}/${source.id}`] = __spreadProps(__spreadValues({}, source), { state });
    }
  }
  /** Locks an IO node. Prevents any route changes that include this until unlocked. */
  $lock(source) {
    this.$updateState(source, { locked: true });
  }
  /** Unlocks an IO node. */
  $unlock(source) {
    this.$updateState(source, { locked: false });
  }
  /** Set the lighting scene */
  $set_lighting_scene(scene) {
    if (this.lighting_scenes.includes(scene)) {
      this.lighting_scene = scene;
      const light_source = this.env_sources.find((_) => _.type === "lights");
      if (light_source) {
        this[`${light_source.type}/${light_source.id}`] = __spreadProps(__spreadValues({}, light_source), {
          state: scene
        });
      }
    }
  }
  /** Set lighting level for a zone */
  $set_lighting_level(zone, level) {
    if (this.lighting_levels[zone] !== void 0) {
      this.lighting_levels = __spreadProps(__spreadValues({}, this.lighting_levels), { [zone]: level });
    }
  }
  /** Select a camera */
  $select_camera(camera_id) {
    if (this.available_cameras.includes(camera_id)) {
      this.selected_camera = camera_id;
    }
  }
  /** Join rooms with a specific mode */
  $join_rooms(mode, room_ids = []) {
    if (this.join_modes[mode]) {
      this.joined = { room_ids, mode };
    }
  }
  /** Separate joined rooms */
  $separate_rooms() {
    this.joined = { room_ids: [] };
  }
  /** Control a room accessory */
  $set_accessory_state(accessory_id, state) {
    const accessory = this.room_accessories.find((_) => _.id === accessory_id);
    if (accessory && accessory.states.includes(state)) {
      accessory.state = state;
      this.room_accessories = [...this.room_accessories];
    }
  }
  /** Dial a phone number */
  $dial_phone(number) {
    this.offhook = true;
    return new Promise((r) => setTimeout(() => r(), 1e3));
  }
  /** Hangup phone call */
  $hangup_phone() {
    this.offhook = false;
    this.ringing = false;
  }
  $updateState(source, data) {
    if (this[`input/${source}`]) {
      this[`input/${source}`] = __spreadValues(__spreadValues({}, this[`input/${source}`]), data);
      this.input_list[source] = __spreadValues(__spreadValues({}, this[`input/${source}`]), data);
    } else if (this[`output/${source}`]) {
      this[`output/${source}`] = __spreadValues(__spreadValues({}, this[`output/${source}`]), data);
      this.output_list[source] = __spreadValues(__spreadValues({}, this[`output/${source}`]), data);
    }
  }
};
var input_list = {
  Mic1: {
    name: "Lectern Mic",
    type: "Microphone",
    mod: "Microphone_1"
  },
  Mic2: {
    name: "Lapel Mic",
    type: "Microphone",
    mod: "Microphone_2"
  },
  Mic3: {
    name: "Handheld Mic",
    type: "Microphone",
    mod: "Microphone_3"
  },
  PC1: {
    name: "PC-1",
    type: "PC"
  },
  PC2: {
    name: "PC-2",
    type: "PC"
  },
  PC3: {
    name: "PC-3",
    type: "PC"
  },
  PC4: {
    name: "PC-4",
    type: "PC"
  },
  HDMI: {
    name: "Laptop HDMI",
    type: "Laptop"
  },
  VGA: {
    name: "Laptop VGA",
    type: "Laptop"
  },
  Camera1: {
    name: "Camera Rear",
    type: "Camera",
    mod: "Camera_1"
  },
  Camera2: {
    name: "Camera Front",
    type: "Camera",
    mod: "Camera_2"
  },
  Camera3: {
    name: "Camera Rear 2",
    type: "Camera",
    mod: "Camera_3"
  },
  Camera4: {
    name: "Camera Front 2",
    type: "Camera",
    mod: "Camera_4"
  },
  TV1: {
    name: "IPTV 1",
    type: "TV",
    mod: "IPTV_1"
  },
  VC1: {
    name: "Video Conference 1",
    type: "VC",
    mod: "VidConf_1"
  }
};
var output_list = {
  Display1: {
    name: "Screen 1",
    type: "Display",
    source: "PC1",
    mod: "Display_1"
  },
  Display2: {
    name: "Screen 2",
    type: "Display",
    mod: "Display_2"
  },
  Display5: {
    name: "TV 1",
    type: "Display",
    mod: "Display_5",
    source: "TV1"
  }
};
var env_sources = [
  {
    id: "light1",
    name: "Lighting",
    type: "lights",
    states: ["Off", "Presentation", "Meeting", "Full"],
    state: "Off"
  },
  {
    id: "blind1",
    name: "Blinds",
    type: "blinds",
    states: ["Off", "Presentation", "Meeting"],
    state: "Off"
  },
  {
    id: "screen1",
    name: "Screen",
    type: "screen",
    states: ["Up", "Down"],
    state: "Down"
  }
];
var createSystemModule = (space, overrides = {}) => new RoomModule(__spreadValues(__spreadProps(__spreadValues({}, space), {
  input_list,
  output_list,
  env_sources
}), overrides));

// node_modules/ts-md5/dist/index.es.js
var c = new Int32Array(4);
var h = class _h {
  static hashStr(i, a = false) {
    return this.onePassHasher.start().appendStr(i).end(a);
  }
  static hashAsciiStr(i, a = false) {
    return this.onePassHasher.start().appendAsciiStr(i).end(a);
  }
  // Private Static Variables
  static stateIdentity = new Int32Array([
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ]);
  static buffer32Identity = new Int32Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  static hexChars = "0123456789abcdef";
  static hexOut = [];
  // Permanent instance is to use for one-call hashing
  static onePassHasher = new _h();
  static _hex(i) {
    const a = _h.hexChars, t = _h.hexOut;
    let e, s, r, n;
    for (n = 0; n < 4; n += 1)
      for (s = n * 8, e = i[n], r = 0; r < 8; r += 2)
        t[s + 1 + r] = a.charAt(e & 15), e >>>= 4, t[s + 0 + r] = a.charAt(e & 15), e >>>= 4;
    return t.join("");
  }
  static _md5cycle(i, a) {
    let t = i[0], e = i[1], s = i[2], r = i[3];
    t += (e & s | ~e & r) + a[0] - 680876936 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[1] - 389564586 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[3] - 1044525330 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[4] - 176418897 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[5] + 1200080426 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[7] - 45705983 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[8] + 1770035416 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[9] - 1958414417 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[10] - 42063 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[11] - 1990404162 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[12] + 1804603682 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[13] - 40341101 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[15] + 1236535329 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & r | s & ~r) + a[1] - 165796510 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[6] - 1069501632 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[0] - 373897302 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[5] - 701558691 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[10] + 38016083 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[4] - 405537848 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[9] + 568446438 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[14] - 1019803690 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[8] + 1163531501 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[13] - 1444681467 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[2] - 51403784 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[12] - 1926607734 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e ^ s ^ r) + a[5] - 378558 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[8] - 2022574463 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[14] - 35309556 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[1] - 1530992060 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[4] + 1272893353 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[10] - 1094730640 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[13] + 681279174 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[0] - 358537222 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[6] + 76029189 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[9] - 640364487 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[12] - 421815835 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[2] - 995338651 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (s ^ (e | ~r)) + a[0] - 198630844 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[7] + 1126891415 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[5] - 57434055 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[12] + 1700485571 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[3] - 1894986606 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[1] - 2054922799 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[8] + 1873313359 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[15] - 30611744 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[13] + 1309151649 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[4] - 145523070 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[11] - 1120210379 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[9] - 343485551 | 0, e = (e << 21 | e >>> 11) + s | 0, i[0] = t + i[0] | 0, i[1] = e + i[1] | 0, i[2] = s + i[2] | 0, i[3] = r + i[3] | 0;
  }
  _dataLength = 0;
  _bufferLength = 0;
  _state = new Int32Array(4);
  _buffer = new ArrayBuffer(68);
  _buffer8;
  _buffer32;
  constructor() {
    this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
  }
  /**
   * Initialise buffer to be hashed
   */
  start() {
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(_h.stateIdentity), this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(i) {
    const a = this._buffer8, t = this._buffer32;
    let e = this._bufferLength, s, r;
    for (r = 0; r < i.length; r += 1) {
      if (s = i.charCodeAt(r), s < 128)
        a[e++] = s;
      else if (s < 2048)
        a[e++] = (s >>> 6) + 192, a[e++] = s & 63 | 128;
      else if (s < 55296 || s > 56319)
        a[e++] = (s >>> 12) + 224, a[e++] = s >>> 6 & 63 | 128, a[e++] = s & 63 | 128;
      else {
        if (s = (s - 55296) * 1024 + (i.charCodeAt(++r) - 56320) + 65536, s > 1114111)
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        a[e++] = (s >>> 18) + 240, a[e++] = s >>> 12 & 63 | 128, a[e++] = s >>> 6 & 63 | 128, a[e++] = s & 63 | 128;
      }
      e >= 64 && (this._dataLength += 64, _h._md5cycle(this._state, t), e -= 64, t[0] = t[16]);
    }
    return this._bufferLength = e, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(i) {
    const a = this._buffer8, t = this._buffer32;
    let e = this._bufferLength, s, r = 0;
    for (; ; ) {
      for (s = Math.min(i.length - r, 64 - e); s--; )
        a[e++] = i.charCodeAt(r++);
      if (e < 64)
        break;
      this._dataLength += 64, _h._md5cycle(this._state, t), e = 0;
    }
    return this._bufferLength = e, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(i) {
    const a = this._buffer8, t = this._buffer32;
    let e = this._bufferLength, s, r = 0;
    for (; ; ) {
      for (s = Math.min(i.length - r, 64 - e); s--; )
        a[e++] = i[r++];
      if (e < 64)
        break;
      this._dataLength += 64, _h._md5cycle(this._state, t), e = 0;
    }
    return this._bufferLength = e, this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const i = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [i[0], i[1], i[2], i[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(i) {
    const a = i.buffer, t = i.state, e = this._state;
    let s;
    for (this._dataLength = i.length, this._bufferLength = i.buflen, e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], s = 0; s < a.length; s += 1)
      this._buffer8[s] = a.charCodeAt(s);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(i = false) {
    const a = this._bufferLength, t = this._buffer8, e = this._buffer32, s = (a >> 2) + 1;
    this._dataLength += a;
    const r = this._dataLength * 8;
    if (t[a] = 128, t[a + 1] = t[a + 2] = t[a + 3] = 0, e.set(_h.buffer32Identity.subarray(s), s), a > 55 && (_h._md5cycle(this._state, e), e.set(_h.buffer32Identity)), r <= 4294967295)
      e[14] = r;
    else {
      const n = r.toString(16).match(/(.*?)(.{0,8})$/);
      if (n === null) return i ? c : "";
      const o = parseInt(n[2], 16), _ = parseInt(n[1], 16) || 0;
      e[14] = o, e[15] = _;
    }
    return _h._md5cycle(this._state, e), i ? this._state : _h._hex(this._state);
  }
};
if (h.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");

// libs/mocks/src/lib/realtime/desks.ts
var MockAreaManagementModule = class {
  constructor() {
    this.overview = {};
    this.emergency_contacts = {
      "First Aid": MOCK_STAFF.filter((_) => predictableRandomInt(9999) % 5 === 0),
      "Fire Warden": MOCK_STAFF.filter((_) => predictableRandomInt(9999) % 5 === 0)
    };
  }
  $locate_user(email, username) {
    return {};
  }
  $update() {
    updateLocations(this, MOCK_LEVELS);
  }
};
var MAC_LOOKUP = {};
var MockLocationServicesModule = class {
  $check_ownership_of(mac_address) {
    if (!MAC_LOOKUP[mac_address]) {
      const staff = randomInt(999999) % 3 === 0 ? MOCK_STAFF[randomInt(MOCK_STAFF.length)] : { name: "" };
      MAC_LOOKUP[mac_address] = { assigned_to: staff.name };
    }
    return MAC_LOOKUP[mac_address];
  }
  $locate_user(email, username) {
    return [
      {
        type: "wireless",
        position: { x: 0.5, y: 0.5 },
        level: MOCK_LEVELS[randomInt(MOCK_LEVELS.length)].id,
        priority: 0
      }
    ];
  }
};
function padZero(no, len = 3) {
  let str = `${no}`;
  while (str.length < len) {
    str = "0" + str;
  }
  return str;
}
function createAreaManagementModule(space, overrides = {}) {
  const mod = new MockAreaManagementModule();
  for (const lvl of MOCK_LEVELS) {
    mod.overview[lvl.id] = {
      desk_count: 100,
      desk_usage: 0,
      device_capacity: 100,
      device_count: 0,
      estimated_people: 0,
      percentage_use: 0,
      recommendation: 1e4
    };
    mod[`${lvl.id}:desk_ids`] = new Array(mod.overview[lvl.id].desk_count).fill(0).map((_, idx) => `table-${lvl.number}.${padZero(idx)}`);
    mod[`${lvl.id}`] = { value: [] };
    mod[`${lvl.id}:areas`] = {
      value: [
        {
          area_id: "zone-10.B",
          count: randomInt(100),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-10.A",
          count: randomInt(100),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-10.C",
          count: randomInt(50),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-02.D",
          count: randomInt(100),
          name: "Quite Work"
        },
        {
          area_id: "zone-02.B",
          count: randomInt(100),
          name: "Meeting Area A"
        },
        {
          area_id: "zone-02.A",
          count: randomInt(100),
          name: "Meeting Area B"
        },
        {
          area_id: "zone-02.C",
          count: randomInt(50),
          name: "Casual Work"
        }
      ]
    };
  }
  return mod;
}
function updateLocations(mod, levels) {
  for (const lvl of levels) {
    mod[lvl.id] = {
      value: new Array(predictableRandomInt(20)).fill(0).map(() => generateLocation(lvl, mod[`${lvl.id}:desk_ids`]))
    };
    for (const area of mod[`${lvl.id}:areas`].value) {
      area.count = randomInt(100);
    }
    mod[`${lvl.id}:areas`] = __spreadValues({}, mod[`${lvl.id}:areas`]);
  }
}
function generateLocation(lvl, desks, users = MOCK_STAFF) {
  const fixed = predictableRandomInt(9999) % 3 === 0;
  const usr = (users || [])[predictableRandomInt((users || [])?.length)]?.email;
  return fixed ? {
    location: "desk",
    at_location: predictableRandomInt(9999) % 2 !== 0,
    map_id: desks[predictableRandomInt(desks.length)],
    mac: h?.hashStr(usr || ""),
    level: lvl.id,
    building: lvl.parent_id
  } : {
    location: "wireless",
    coordinates_from: "bottom-left",
    x: predictableRandomInt(1e3) / 10,
    y: predictableRandomInt(1e3) / 10,
    lon: 55.27476066828535,
    lat: 25.20106100633537,
    s2_cell_id: "3e5f4281459c",
    mac: h?.hashStr(usr || ""),
    variance: 9.62534032222287,
    last_seen: Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3),
    map_width: 100,
    map_height: 100
  };
}

// libs/mocks/src/lib/realtime/display.ts
var DisplayModule = class {
  $mute(state = true) {
    this.mute = state;
  }
  $volume(value) {
    this.volume = value;
  }
  constructor(_) {
    this.volume = randomInt(100);
  }
};
var createDisplayModule = (space, overrides = {}) => new DisplayModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/events.ts
var MockBookingModule = class {
  constructor(space, _data) {
    this.time_zone = "Australia/Sydney";
    this.disable_book_now = false;
    this.disable_end_meeting = false;
    this.enable_end_meeting_button = true;
    this.disable_book_now_host = false;
    this.bookings = [];
    this.pending_period = 600;
    this.pending_before = 300;
    this.control_ui = "";
    this.catering_ui = "";
    this.last_booking_started = 0;
    this.current_booking = null;
    this.next_booking = null;
    this.room_image = "assets/boardroom.jpg";
    this.status = "free";
    this.room_name = "";
    this.room_capacity = 10;
    this.custom_qr_url = "";
    this.custom_qr_color = "";
    this.show_qr_code = true;
    this.hide_qr_text = false;
    this.hide_meeting_details = false;
    this.hide_meeting_title = false;
    this.offline_image = "";
    this.offline_color = "#FFFFFF";
    this.presence = false;
    this.min_duration = 15;
    this.max_duration = 480;
    this.default_title = "Ad-Hoc Panel Booking";
    this.pending = true;
    this._space = null;
    this._space = space;
    this.room_name = space?.display_name || space?.name || "";
    this.room_capacity = space?.capacity || 10;
    if (_data) {
      Object.assign(this, _data);
    }
  }
  /** Start the meeting at the given time */
  $start_meeting(t) {
    this.last_booking_started = t;
    this.status = "busy";
  }
  /** End the meeting at the given time */
  $end_meeting(t, notify, reason) {
    this.current_booking = null;
    this.status = this.next_booking ? "pending" : "free";
  }
  /** Book meeting for the current time */
  $book_now(len, t, o) {
    const now = Math.floor(Date.now() / 1e3);
    const new_booking = {
      id: `mock-booking-${now}`,
      event_start: now,
      event_end: now + len,
      title: t || this.default_title,
      host: o || "mock@place.tech",
      attendees: []
    };
    this.bookings = [new_booking, ...this.bookings];
    this.current_booking = new_booking;
    this.status = "busy";
    return new_booking;
  }
  /** Check in to current booking */
  $checkin(time) {
    if (this.current_booking) {
      this.status = "busy";
    }
  }
  /** Call waiter service */
  $waiter_call(time) {
    return { success: true, time };
  }
  $poll_bookings() {
    updateBookings(this._space, this);
  }
};
var createBookingsModule = (space, overrides = {}) => new MockBookingModule(space, overrides);
function updateBookings(space, mod) {
  const bookings = MOCK_EVENTS.filter((event) => event.attendees?.find((u) => u.email === space.email || u.id === space.id || event.system?.id === space.id)) || [];
  bookings.sort((a, b) => a.event_start - b.event_start);
  mod.bookings = bookings;
  mod.current_booking = bookings.find((_) => timePeriodsIntersect(Date.now(), Date.now(), _.event_start * 1e3, _.event_end * 1e3));
  mod.next_booking = bookings.find((_) => _.event_start * 1e3 > Date.now());
  const date = /* @__PURE__ */ new Date();
  const { current_booking, next_booking } = mod;
  const start = new Date((current_booking || next_booking)?.event_start);
  const pending = timePeriodsIntersect(date.valueOf(), date.valueOf(), subSeconds(start, mod.pending_before).valueOf(), addSeconds(start, mod.pending_period).valueOf());
  mod.status = space?.bookable ? current_booking ? "busy" : pending ? "pending" : "free" : "not-bookable";
}

// libs/mocks/src/lib/realtime/locker-locations.ts
var LockerLocationsModule = class {
  constructor(data) {
  }
  $lockers_allocated_to_me(...args) {
    return [
      {
        location: "locker",
        bank_id: "977cb758-4e42-4292-848a-4821f2fb4d74",
        locker_id: "adda7802-dfd7-467c-b369-d73394ad7084",
        locker_name: "0.105",
        allocated: true,
        group_id: "6c246e35-4a73-475a-8725-0676d78167f4"
      }
    ];
  }
};
var createLockerLocationsModule = (details, overrides = {}) => new LockerLocationsModule(__spreadValues(__spreadValues({}, details), overrides));

// libs/mocks/src/lib/realtime/meeting.ts
var MeetingPushModule = class {
  constructor(data) {
    this.supported_meeting_url = "https://meet.";
  }
  $econtrol(...args) {
  }
};
var createMeetingPushModule = (details, overrides = {}) => new MeetingPushModule(__spreadValues(__spreadValues({}, details), overrides));

// libs/mocks/src/lib/realtime/microphone.ts
var MicrophoneModule = class {
  $mute(state = true) {
    this.mute = state;
  }
  $volume(value) {
    this.volume = value;
  }
  constructor(_) {
    this.volume = randomInt(100);
  }
};
var createMicrophoneModule = (space, overrides = {}) => new MicrophoneModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/payments.ts
var PaymentsModule = class {
  $list_payment_methods(type2) {
  }
  $add_payment_method(type2, details) {
  }
  $get_product_prices(id, period) {
    return [12e3, 60];
  }
  $create_payment_intent(amount, source) {
    return randomString(12);
  }
  $confirm_payment_intent(id) {
  }
  $cancel_payment_intent(id) {
  }
  $create_customer(...args) {
    return `stripe-${randomInt(9999999, 1e6)}`;
  }
  constructor(_) {
  }
};
var createPaymentsModule = (space, overrides = {}) => new PaymentsModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/video-conference.ts
var VideoConferenceModule = class {
  $show_camera_pip(visible) {
    this.selfview = visible;
  }
  $mic_mute(state) {
    this.mic_mute = state;
  }
  $presentation_mode(state) {
    this.presentation_mode = state;
    this.presentation = state === "Local" ? "Sending" : false;
  }
  $hangup() {
    this.calls = {};
    this.call_status = "Idle";
    this.presentation_mode = "None";
    this.presentation = false;
  }
  $call_place_on_hold() {
    for (const key in this.calls) {
      if (this.calls[key].Status) {
        this.calls[key].Status = "OnHold";
        this.calls[key].PlacedOnHold = true;
        this.calls = __spreadValues({}, this.calls);
        this.call_status = "OnHold";
        return;
      }
    }
  }
  $call_resume() {
    for (const key in this.calls) {
      if (this.calls[key].Status) {
        this.calls[key].Status = "Connected";
        this.calls[key].PlacedOnHold = false;
        this.calls = __spreadValues({}, this.calls);
        this.call_status = "Connected";
        return;
      }
    }
  }
  $video_layout(layout) {
    this.video_layout = layout;
  }
  $dtmf_send(digit) {
    this.dtmf_history.push(digit);
  }
  $dial(dial_number) {
    this.call_status = "Dialling";
    return new Promise((resolve) => {
      setTimeout(() => {
        this.call_status = "Connected";
        const call_id = `call-${Date.now()}`;
        this.calls = {
          [call_id]: {
            AnswerState: "Answered",
            CallType: "Video",
            CallbackNumber: dial_number,
            DeviceType: "Endpoint",
            Direction: "Outgoing",
            DisplayName: 0,
            Duration: 0,
            "Encryption/Type": "AES-256",
            FacilityServiceId: 0,
            HoldReason: "",
            PlacedOnHold: false,
            Protocol: "SIP",
            ReceiveCallRate: 4096,
            RemoteNumber: dial_number,
            Status: "Connected",
            TransmitCallRate: 4096,
            Ice: ""
          }
        };
        resolve();
      }, 1e3);
    });
  }
  constructor(_) {
    this.mic_mute = false;
    this.selfview = false;
    this.video_layout = "Auto";
    this.presentation_mode = "None";
    this.presentation = false;
    this.calls = {};
    this.call_status = "Idle";
    this.dtmf_history = [];
  }
};
var createVideoConferenceModule = (space = {}, overrides = {}) => new VideoConferenceModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/systems-bindings.mock.ts
function createSystem(space) {
  Fl(space.id, {
    System: [createSystemModule(space)],
    Bookings: [createBookingsModule(space)],
    ContactTracing: [createContactTracingModule(space)],
    AreaManagement: [createAreaManagementModule(space)],
    LocationServices: [new MockLocationServicesModule()],
    Camera: new Array(10).fill(0).map((_) => createCameraModule(space)),
    Display: new Array(10).fill(0).map((_) => createDisplayModule(space)),
    Microphone: new Array(10).fill(0).map((_) => createMicrophoneModule(space)),
    Capture: [createCaptureModule(space)],
    MeetingPush: [createMeetingPushModule()],
    VidConf: [createVideoConferenceModule()],
    Payment: [createPaymentsModule(space)],
    LockerLocations: [createLockerLocationsModule()]
  });
  const system = $r(space.id);
  system.Bookings[0].$poll_bookings();
  setInterval(() => system.Bookings[0].$poll_bookings(), 30 * 1e3);
  system.AreaManagement[0].$update();
  setInterval(() => system.AreaManagement[0].$update(), 30 * 1e3);
}

// libs/mocks/src/lib/api/systems.mock.ts
function registerMockSystems() {
  MOCK_SPACES.forEach((space, index) => createSystem(space));
  Zr({
    path: "/api/engine/v2/systems",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const systems = request.query_params?.zone_id ? MOCK_SPACES.filter((_) => _.zones.includes(request.query_params.zone_id)) : MOCK_SPACES;
      if (request.query_params?.signage) {
        return systems.map((space) => __spreadProps(__spreadValues({}, space), {
          signage: true,
          display_name: space.display_name || space.name,
          playlists: space.playlists || [],
          zones: space.zones || []
        }));
      }
      return systems;
    }
  });
  Zr({
    path: "/api/engine/v2/systems/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const space = MOCK_SPACES.find((_) => _.id === request.route_params.id);
      if (!space)
        throw { status: 404 };
      return space;
    }
  });
}

// libs/mocks/src/lib/api/users.mock.ts
function registerMockUsers() {
  Zr({
    path: "/api/engine/v2/users",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const search = (request.query_params.q || "").toLowerCase();
      const limit = Number(request.query_params.limit || 100);
      return MOCK_STAFF.filter(({ name, email }) => {
        return !search || name.toLowerCase().includes(search) || email.toLowerCase().includes(search);
      }).slice(0, limit);
    }
  });
  Zr({
    path: "/api/engine/v2/users/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.route_params.id === "current") {
        if (localStorage.getItem("mock-signage-user") === "group") {
          return __spreadProps(__spreadValues({}, ACTIVE_USER), {
            groups: ["staff", "engineering", "senior"],
            sys_admin: false
          });
        }
        return ACTIVE_USER;
      }
      const person = MOCK_STAFF.find((user) => user.email === request.route_params.id);
      if (person) {
        return person;
      }
      throw { status: 404, message: "User not found" };
    }
  });
  Zr({
    path: "/api/staff/v1/people",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.q) {
        const search = request.query_params.q.toLowerCase();
        return MOCK_STAFF.filter(({ name, email }) => {
          return name.toLowerCase().includes(search) || email.toLowerCase().includes(search);
        });
      }
      return MOCK_STAFF;
    }
  });
  Zr({
    path: "/api/staff/v1/people/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const id = decodeURIComponent(request.route_params.id);
      const person = MOCK_STAFF.find((user) => user.email === id);
      if (person) {
        return __spreadProps(__spreadValues({}, person), {
          location: generateLocation2()
        });
      }
      throw { status: 404, message: "User not found" };
    }
  });
  Zr({
    path: "/api/staff/v1/guests",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.q) {
        const search = request.query_params.q.toLowerCase();
        return MOCK_GUESTS.filter((user) => user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search));
      }
      return MOCK_STAFF;
    }
  });
  Zr({
    path: "/api/staff/v1/guests/:email",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const email = decodeURIComponent(request.route_params.email);
      const person = MOCK_GUESTS.find((user) => user.email === email);
      if (person)
        return person;
      throw { status: 404, message: "Guest not found" };
    }
  });
  Zr({
    path: "/api/staff/v1/guests/:email/meetings",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.route_params.email) {
        const email = request.route_params.email.toLowerCase();
        const events = MOCK_EVENTS.filter((event) => event.attendees.find((user) => user.email.toLowerCase() === email));
        return events;
      }
      throw {
        status: 404,
        message: `Unable to find meetings with guest with email ${request.route_params.email}`
      };
    }
  });
  const LOCATION_TYPES = [
    "meeting",
    "desk_id",
    "laptop",
    "mobile",
    "geo",
    "none"
  ];
  function generateLocation2() {
    const type2 = LOCATION_TYPES[predictableRandomInt(LOCATION_TYPES.length)];
    const level = MOCK_LEVELS[predictableRandomInt(MOCK_LEVELS.length)];
    const level_spaces = MOCK_SPACES.filter((s) => s.zones.includes(level.id));
    const space = level_spaces[predictableRandomInt(level_spaces.length)] || {};
    const location2 = {};
    switch (type2) {
      case "meeting":
        location2.meeting = {
          building: level.parent_id,
          level: level.id,
          system: space.id,
          map_id: space.map_id,
          event_id: ""
        };
        break;
      case "desk_id":
        location2.meeting = {
          building: level.parent_id,
          level: level.id,
          map_id: space.map_id,
          checked_in: getUnixTime(Date.now())
        };
        break;
      case "laptop":
      case "mobile":
        location2[type2] = {
          building: level.parent_id,
          level: level.id,
          x: +predictableRandomInt(1e4),
          y: +predictableRandomInt(5e3),
          last_seen: getUnixTime(subMinutes(Date.now(), predictableRandomInt(60)))
        };
        break;
      case "geo":
        location2.geo = {
          lat: predictableRandomInt(180) - 90,
          lon: predictableRandomInt(360) - 180,
          last_seen: getUnixTime(subMinutes(Date.now(), predictableRandomInt(60)))
        };
        break;
    }
    return location2;
  }
}

// libs/mocks/src/lib/api/zones.mock.ts
var MOCK_METADATA = {
  current: {
    contacts: {
      name: "contacts",
      description: "",
      details: [
        {
          id: "user-1",
          name: "Jonathan McFarlane (PlaceOS)",
          email: "jon@place.tech",
          first_name: "Jonathan",
          last_name: "McFarlane"
        },
        {
          id: "user-1",
          name: "Alex Sorafumo (PlaceOS)",
          email: "alex@place.tech",
          first_name: "Alex",
          last_name: "Sorafumo"
        }
      ]
    }
  }
};
var LOCKERS = {};
function registerMockZones() {
  const all_zones = () => [
    ...MOCK_ORGS,
    ...MOCK_REGIONS,
    ...MOCK_BUILDINGS,
    ...MOCK_LEVELS,
    ...MOCK_ZONES
  ];
  Zr({
    path: "/api/engine/v2/zones",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let zones = all_zones();
      const tag_list = `${request.query_params?.tags || ""}`.split(" ").filter(Boolean);
      if (tag_list.length) {
        zones = zones.filter((zone) => tag_list.some((tag2) => zone.tags.includes(tag2)));
      }
      if (request.query_params?.parent_id) {
        zones = zones.filter((zone) => zone.parent_id === request.query_params.parent_id);
      }
      return zones;
    }
  });
  Zr({
    path: "/api/engine/v2/zones/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const zone = all_zones().find((_) => _.id === request.route_params.id);
      if (!zone) {
        throw {
          status: 404,
          message: `Unable to find zone with id "${request.route_params.id}"`
        };
      }
      return zone;
    }
  });
  Zr({
    path: "/api/engine/v2/settings",
    metadata: {},
    method: "GET",
    callback: (request) => []
  });
  Zr({
    path: "/api/engine/v2/settings/:id",
    metadata: {},
    method: "GET",
    callback: (request) => ({})
  });
  Zr({
    path: "/api/engine/v2/metadata/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.name === "bindings") {
        return {
          bindings: {
            details: {
              area_management: "space-0",
              location_services: "space-0",
              contact_tracing: "space-0",
              lockers: "space-0"
              // payments: 'space-0',
            }
          }
        };
      }
      if (request.query_params.name === "catering") {
        return {
          catering: {
            details: MOCK_MENU
          }
        };
      }
      if (request.query_params.name === "catering-settings") {
        return {
          "catering-settings": {
            details: {
              require_notes: false,
              charge_codes: [
                "CC-1001",
                "CC-1002",
                "CC-1003",
                "CC-2001",
                "CC-2002"
              ],
              disabled_rooms: []
            }
          }
        };
      }
      if (request.query_params.name === "catering_config") {
        return {
          catering_config: {
            details: []
          }
        };
      }
      if (request.query_params.name === "lockers") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return generateLockers(id);
      }
      if (request.query_params.name === "desks") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return generateMockDeskMetadata(id);
      }
      if (request.query_params.name === "charge_codes") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return {
          charge_codes: {
            details: new Array(30).fill(0).map((_, idx) => `C-${idx}`)
          }
        };
      }
      if (request.query_params.name === "map_regions") {
        return {
          map_regions: {
            details: {
              areas: [
                {
                  id: "zone-10.A",
                  properties: {
                    capacity: 100,
                    label_location: { x: 0.36, y: 0.33 }
                    // draw_polygon: true
                  },
                  geometry: {
                    coordinates: [
                      [0, 0],
                      [0, 0.5],
                      [0.5, 0.5],
                      [0.5, 0]
                    ]
                  }
                },
                {
                  id: "zone-10.B",
                  properties: {
                    capacity: 100,
                    label_location: { x: 0.76, y: 0.33 }
                  }
                },
                {
                  id: "zone-10.C",
                  properties: {
                    capacity: 100,
                    label_location: { x: 0.63, y: 0.77 }
                  }
                }
              ]
            }
          }
        };
      }
      if (MOCK_METADATA[request.route_params.id] && MOCK_METADATA[request.route_params.id][request.query_params.name]) {
        return MOCK_METADATA[request.route_params.id];
      } else if (MOCK_METADATA[request.route_params.id] && !request.query_params.name) {
        return MOCK_METADATA[request.route_params.id] || {};
      }
      return {};
    }
  });
  Zr({
    path: "/api/engine/v2/metadata/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      if (!MOCK_METADATA[request.route_params.id])
        MOCK_METADATA[request.route_params.id] = {};
      MOCK_METADATA[request.route_params.id][request.body.name] = request.body;
      return request.body;
    }
  });
  Zr({
    path: "/api/engine/v2/metadata/:id",
    metadata: {},
    method: "PUT",
    callback: (request) => {
      if (!MOCK_METADATA[request.route_params.id])
        MOCK_METADATA[request.route_params.id] = {};
      MOCK_METADATA[request.route_params.id][request.body.name] = request.body;
      return request.body;
    }
  });
  const DESK_FEATURES = ["sit_to_stand", "single_monitor", "dual_monitor"];
  function generateMockDeskMetadata(id) {
    return {
      desks: {
        details: new Array(30).fill(0).map((_, idx) => ({
          id: `table-${padString(id, 2)}.${padString(idx + 1, 3)}`,
          name: `Desk ${id}.${padString(idx + 1, 3)}`,
          bookable: predictableRandomInt(9999) % 4 !== 0,
          groups: predictableRandomInt(9999) % 4 === 0 ? ["test-1"] : [],
          features: DESK_FEATURES.filter((_2) => predictableRandomInt(99999) % 3 === 0)
        }))
      }
    };
  }
  function generateLockers(id) {
    if (!LOCKERS[id]) {
      LOCKERS[id] = {
        lockers: {
          details: new Array(6).fill(0).map((_, idx) => {
            const position = padString(idx + 1, 2);
            const assignee = predictableRandomInt(9999) % 4 === 0 ? MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)] : {};
            return {
              id: `locker-bank-${id}.${position}`,
              map_id: `bank-${id}.${position}`,
              level_id: `lvl-02`,
              name: `Bank ${position}`,
              height: 3,
              lockers: new Array(18).fill(0).map((_2, idx2) => ({
                id: `locker-${position}.${padString(idx2 + 1, 3)}`,
                name: `Locker ${idx2 + 1}`,
                accessible: predictableRandomInt(9999) % 2 !== 0,
                bookable: predictableRandomInt(9999) % 4 !== 0,
                position: [idx2 % 6, Math.floor(idx2 / 6)],
                size: [1, 1]
              }))
            };
          })
        }
      };
    }
    return LOCKERS[id];
  }
  Zr({
    path: "/api/engine/v2/metadata/:id/children",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const zone = MOCK_BUILDINGS.find((_) => _.id === request.route_params.id);
      if (!zone)
        throw {
          status: 404,
          message: `Unable to find zone with id "${request.route_params.id}"`
        };
      return MOCK_LEVELS.filter((_) => _.parent_id === zone.id).map((lvl) => {
        const parts = lvl.id.split("-");
        const id = parts[parts.length - 1];
        return {
          zone: lvl,
          metadata: request.query_params.name === "lockers" ? generateLockers(id) : generateMockDeskMetadata(id)
        };
      });
    }
  });
}

// libs/mocks/src/index.ts
function mocksInit() {
  registerMockAssets();
  registerMockBookings();
  registerMockCalendars();
  registerMockEvents();
  registerMockSignage();
  registerMockSurveys();
  registerMockSystems();
  registerMockUsers();
  registerMockZones();
}

// apps/visitor-kiosk/src/environments/settings.schema.json
var settings_schema_exports = {};
__export(settings_schema_exports, {
  $defs: () => $defs,
  default: () => settings_schema_default,
  description: () => description,
  properties: () => properties,
  type: () => type
});
var type = "object";
var description = "Customisable settings for the visitor-kiosk app";
var properties = {
  name: {
    type: "string",
    description: "Name of the application"
  },
  title: {
    type: "string",
    description: "Title to display in the browser tab"
  },
  description: {
    type: "string",
    description: "Description of the application"
  },
  short_name: {
    type: "string",
    description: "Short name for the application"
  },
  default_route: {
    type: "string",
    description: "Route to redirect to after the application has initialised. Defaults to `welcome`"
  },
  logo_light: {
    type: "string",
    description: "URL of the logo to display when the application is using a light theme"
  },
  logo_dark: {
    type: "string",
    description: "URL of the logo to display when the application is using a dark theme"
  },
  welcome_background: {
    type: "string",
    description: "URL of the background image displayed on the welcome, check-in and registration pages"
  },
  welcome_message: {
    type: "string",
    description: "HTML message displayed on the welcome page. Falls back to a translated default message when unset"
  },
  hide_building_image: {
    type: "boolean",
    description: "Whether to hide the building image panel on the welcome, check-in and registration pages"
  },
  hide_explore: {
    type: "boolean",
    description: "Whether to hide the explore (building map) button on the welcome page"
  },
  allow_self_registration: {
    type: "boolean",
    description: "Whether walk-up visitors can register themselves. Shows the register button on the welcome page"
  },
  allow_registration_time_options: {
    type: "boolean",
    description: "Whether the self-registration form shows time options (all-day checkbox and visit duration field)"
  },
  allow_pass_number: {
    type: "boolean",
    description: "Whether to show a visitor pass number field on the registration and check-in details forms"
  },
  allow_user_photo: {
    type: "boolean",
    description: "Whether visitors are asked to take a photo of themselves during check-in"
  },
  allow_printing_label: {
    type: "boolean",
    description: "Whether a visitor badge label can be printed after check-in. Defaults to `true`"
  },
  allow_beverages: {
    type: "boolean",
    description: "Whether visitors can select beverage (catering) preferences after checking in. Only applies to visitors with a linked event or when `standalone_visitor_location` is set"
  },
  visitor_label_size: {
    type: "object",
    description: "Dimensions of the printed visitor badge label",
    properties: {
      width: {
        type: "number",
        description: "Width of the printed label in millimetres. Defaults to `25`"
      },
      height: {
        type: "number",
        description: "Height of the printed label in millimetres. Defaults to `15`"
      },
      scale: {
        type: "number",
        description: "Render scale for the printed label. Defaults to `4`"
      }
    }
  },
  checked_in_template: {
    type: "string",
    description: "HTML template displayed after a successful check-in. Supports the placeholders {{ title }}, {{ room_name }}, {{ host_name }}, {{ host_email }}, {{ visitor_name }}, {{ visitor_email }}, {{ can_use_lift }}, {{ date }} and {{ time }}"
  },
  standalone_visitor_location: {
    type: "string",
    description: "Location associated with standalone visitors (visitors without a linked calendar event). When set, standalone visitors are also offered beverage preferences after check-in"
  },
  induction_enabled: {
    type: "boolean",
    description: "Whether to show an induction acceptance step in the check-in and registration flows. Requires `induction_details` to also be set"
  },
  induction_details: {
    type: "string",
    description: "Induction text displayed to visitors for acceptance. The induction step is hidden when this is unset"
  },
  induction_after_details: {
    type: "boolean",
    description: "Whether the induction step is shown after the visitor details form instead of before it"
  },
  visitors: {
    type: "object",
    description: "Visitor booking settings. These override the matching `bookings` settings",
    properties: {
      allow_all_day: {
        type: "boolean",
        description: "Whether the all-day option is available on the self-registration form. Overrides `bookings.allow_all_day`"
      },
      max_duration: {
        type: "number",
        description: "Maximum visit duration in minutes selectable on the self-registration form. Overrides `bookings.max_duration`. Defaults to `180`"
      }
    }
  },
  bookings: {
    type: "object",
    description: "General booking settings used as a fallback for the matching `visitors` settings",
    properties: {
      allow_all_day: {
        type: "boolean",
        description: "Whether the all-day option is available on the self-registration form"
      },
      max_duration: {
        type: "number",
        description: "Maximum visit duration in minutes selectable on the self-registration form. Defaults to `180`"
      }
    }
  },
  home: {
    type: "object",
    description: "Data associated with rendering the home page in the app"
  },
  explore: {
    type: "object",
    description: "Data associated with map rendering on the explore page",
    properties: {
      colors: {
        type: "object",
        description: "Mapping of keys to their color values. Keys are usually in the format `<type>-<status>`",
        additionalProperties: { type: "string" }
      },
      can_select_building: {
        type: "boolean",
        description: "Whether user is allowed to select different buildings to view"
      },
      show_legend_group_names: {
        type: "boolean",
        description: "Whether to show group names in the map legend"
      },
      legend: {
        type: "object",
        description: "Mapping of group names to the legend items to display for that group",
        additionalProperties: {
          type: "array",
          items: { $ref: "#/$defs/identity" }
        }
      }
    }
  },
  locales: {
    type: "array",
    description: "List of locales available in the language selector on the welcome page. The selector is hidden when fewer than two locales are set",
    items: { $ref: "#/$defs/locale" }
  }
};
var $defs = {
  identity: {
    type: "object",
    required: ["id", "name"],
    properties: {
      id: {
        type: "string",
        description: "Unique identifier for this object"
      },
      name: {
        type: "string",
        description: "Display string for the object"
      }
    }
  },
  locale: {
    type: "object",
    required: ["id", "name"],
    properties: {
      id: {
        type: "string",
        description: "Locale code, e.g. `en-AU` or `fr`"
      },
      name: {
        type: "string",
        description: "Translation key for the locale's display name, e.g. `LANGUAGE.ENGLISH`"
      },
      local: {
        type: "string",
        description: "Name of the locale in its own language, e.g. `Fran\xE7ais`"
      },
      flag: {
        type: "string",
        description: "Flag emoji displayed next to the locale name"
      }
    }
  }
};
var settings_schema_default = {
  type,
  description,
  properties,
  $defs
};

// apps/visitor-kiosk/src/app/app.component.ts
function AppComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "global-chat");
  }
}
var AppComponent = class _AppComponent {
  constructor() {
    this.settings_schema = settings_schema_exports;
    this._placeos = inject(PlaceOS_Service);
    this._has_chat = settingSignal("chat.enabled", false);
    this.has_chat = computed(
      () => !!this._has_chat(),
      ...ngDevMode ? [{ debugName: "has_chat" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    VirtualKeyboardComponent.enabled = localStorage.getItem("OSK.enabled") === "true";
    const on_public = window.location.href.includes("public=true");
    if (on_public) {
      const url_token = parseTokenFromUrl(window.location.href);
      if (url_token)
        this._placeos.setInitialToken(url_token);
    }
    setMocks(mocksInit);
    this._placeos.init();
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [["content", "", 1, "relative", "h-1/2", "w-full", "flex-1", "overflow-hidden"], [3, "schema"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "global-banner");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, AppComponent_Conditional_3_Template, 1, 0, "global-chat");
        \u0275\u0275element(4, "global-loading")(5, "settings-debug-panel", 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.has_chat() ? 3 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("schema", ctx.settings_schema);
      }
    }, dependencies: [
      RouterOutlet,
      GlobalBannerComponent,
      ChatComponent,
      GlobalLoadingComponent,
      SettingsDebugPanelComponent
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n[content][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      RouterOutlet,
      GlobalBannerComponent,
      ChatComponent,
      GlobalLoadingComponent,
      SettingsDebugPanelComponent
    ], template: `
        <global-banner />
        <div content class="relative h-1/2 w-full flex-1 overflow-hidden">
            <router-outlet></router-outlet>
        </div>
        @if (has_chat()) {
            <global-chat />
        }
        <global-loading />
        <settings-debug-panel [schema]="settings_schema" />
    `, styles: ["/* angular:styles/component:css;f4de4f03d30202ada3cbfd7e96f04e54ce4cff6bc9221f827ecc7e2a22bd067a;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/app.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n[content] > * {\n  overflow: hidden;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "apps/visitor-kiosk/src/app/app.component.ts", lineNumber: 52 });
})();

// node_modules/@angular/animations/fesm2022/_util-chunk.mjs
/**
 * @license Angular v22.0.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number") return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
var PARSE_TIME_EXPRESSION_REGEX = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
function parseTimeExpression(exp, errors, allowNegativeValues) {
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(PARSE_TIME_EXPRESSION_REGEX);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options2, errors) {
  const params = options2.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input2) {
  return input2.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input2) {
  return input2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}

// node_modules/@angular/animations/fesm2022/browser.mjs
/**
 * @license Angular v22.0.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var NoopAnimationDriver = class _NoopAnimationDriver {
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def2) => {
      this._resetContextStyleTimingState(context);
      if (def2.type == AnimationMetadataType.State) {
        const stateDef = def2;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def2.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def2, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options2 = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options2.limit || 0,
      optional: !!options2.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options2) {
  if (options2) {
    options2 = __spreadValues({}, options2);
    if (options2["params"]) {
      options2["params"] = normalizeParams(options2["params"]);
    }
  } else {
    options2 = {};
  }
  return options2;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options2, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options2, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options2, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options2;
    const delay = options2.delay ? resolveTimingValue(options2.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options2);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options2);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options2) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options2.duration != null ? resolveTimingValue(options2.duration) : null;
    const delay = options2.delay != null ? resolveTimingValue(options2.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options2 = ast.options;
    if (options2 && (options2.params || options2.delay)) {
      ctx = context.createSubContext(options2);
      ctx.transformIntoNewTimeline();
      if (options2.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options2.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options2 = ast.options || {};
    const delay = options2.delay ? resolveTimingValue(options2.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options2.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options2, skipIfExists) {
    if (!options2) return;
    const newOptions = options2;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options2 = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options2["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options2;
  }
  createSubContext(options2 = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options2);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input2, easing, errors, options2) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options2 && options2.params || {};
    const styles = flattenStyles(input2, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties2 = [];
    for (let prop in this._currentKeyframe) {
      properties2.push(prop);
    }
    return properties2;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input2, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input2.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set(["easing"]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options2 = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options2, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options2 = args[0] || {};
      this.create(id, element, options2);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input2, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input2 && input2.hasOwnProperty("value");
    const value = isObj ? input2["value"] : input2;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input2, {
        value: value2
      } = _a, options2 = __objRest(_a, [
        "value"
      ]);
      this.options = options2;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options2) {
    const newParams = options2.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  onRemovalComplete = (element, context) => {
  };
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  domPlayer = null;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options2, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options2;
    this._specialStyles = _specialStyles;
    this._duration = options2["duration"];
    this._delay = options2["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    if (!this._buildPlayer()) {
      return;
    }
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return this.domPlayer;
    this._initialized = true;
    const keyframes = this.keyframes;
    const animation = this._triggerWebAnimation(this.element, keyframes, this.options);
    if (!animation) {
      this._onFinish();
      return null;
    }
    this.domPlayer = animation;
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    animation.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      animation.removeEventListener("finish", onFinish);
    });
    return animation;
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer?.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  _triggerWebAnimation(element, keyframes, options2) {
    const keyframesObject = this._convertKeyframesToObject(keyframes);
    try {
      return element.animate(keyframesObject, options2);
    } catch {
      return null;
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    const player = this._buildPlayer();
    if (!player) {
      return;
    }
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    player.play();
  }
  pause() {
    this.init();
    this.domPlayer?.pause();
  }
  finish() {
    this.init();
    if (!this.domPlayer) return;
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    this.domPlayer?.cancel();
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (!this.domPlayer) {
      this.init();
    }
    if (this.domPlayer) {
      this.domPlayer.currentTime = p * this.time;
    }
  }
  getPosition() {
    if (!this.domPlayer) {
      return this._initialized ? 1 : 0;
    }
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    if (requireSynchronousElementRemoval) {
      this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
      return;
    }
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options2) {
    return this.delegate.listen(target, eventName, callback, options2);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options2) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options2);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type2) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type2);
    if (!hostElement || !type2?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type2.id;
    const namespaceId = type2.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type2.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
/**
 * @license Angular v22.0.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory() {
  return new AnimationRendererFactory(inject(DomRendererFactory2), inject(AnimationEngine), inject(NgZone));
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// apps/visitor-kiosk/src/environments/environment.ts
var environment = {
  production: false
};

// apps/visitor-kiosk/src/app/bootstrap.component.ts
function BootstrapComponent_Conditional_11_Conditional_1_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18)(1, "div", 19)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "span", 21);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 21);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r3.display_name || option_r3.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r3.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "mat-select", 14, 0);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_1_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.active_region, $event) || (ctx_r1.active_region = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_1_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275elementStart(7, "mat-select-trigger")(8, "div", 15)(9, "div", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(13, BootstrapComponent_Conditional_11_Conditional_1_For_14_Template, 10, 3, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "APP.VISITOR_KIOSK.SELECT_REGION_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active_region);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "APP.VISITOR_KIOSK.SELECT_REGION_MSG"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_region()?.display_name || ctx_r1.active_region()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_region()?.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.regions());
  }
}
function BootstrapComponent_Conditional_11_Conditional_2_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18)(1, "div", 19)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "span", 21);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 21);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275property("value", option_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r5.display_name || option_r5.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r5.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "mat-select", 14, 0);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_2_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.active_building, $event) || (ctx_r1.active_building = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_2_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275elementStart(7, "mat-select-trigger")(8, "div", 15)(9, "div", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(13, BootstrapComponent_Conditional_11_Conditional_2_For_14_Template, 10, 3, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "APP.VISITOR_KIOSK.SELECT_BUILDING_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active_building);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "APP.VISITOR_KIOSK.SELECT_BUILDING"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_building()?.display_name || ctx_r1.active_building()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_building()?.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function BootstrapComponent_Conditional_11_Conditional_3_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18)(1, "div", 19)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "span", 21);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 21);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    \u0275\u0275property("value", option_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r7.display_name || option_r7.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r7.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 13)(5, "mat-select", 23, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_3_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.active_level, $event) || (ctx_r1.active_level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "mat-select-trigger")(9, "div", 15)(10, "div", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(14, BootstrapComponent_Conditional_11_Conditional_3_For_15_Template, 10, 3, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.VISITOR_KIOSK.SELECT_LEVEL_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active_level);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 7, "APP.VISITOR_KIOSK.SELECT_LEVEL"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_level()?.display_name || ctx_r1.active_level()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_level()?.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function BootstrapComponent_Conditional_11_Conditional_4_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18)(1, "div", 19)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "span", 21);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 21);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    \u0275\u0275property("value", option_r9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r9.display_name || option_r9.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r9.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 13)(5, "mat-select", 24, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_4_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.active_rotation, $event) || (ctx_r1.active_rotation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, BootstrapComponent_Conditional_11_Conditional_4_For_9_Template, 10, 3, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "APP.VISITOR_KIOSK.SELECT_ORIENTATION_MSG"), " Please select an orientation from the dropdown below ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active_rotation);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 5, "APP.VISITOR_KIOSK.SELECT_ORIENTATION"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.rotations());
  }
}
function BootstrapComponent_Conditional_11_Conditional_5_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18)(1, "div", 19)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "span", 21);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 21);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    \u0275\u0275property("value", option_r11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r11.display_name || option_r11.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r11.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 13)(5, "mat-select", 24, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_5_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.active_location, $event) || (ctx_r1.active_location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, BootstrapComponent_Conditional_11_Conditional_5_For_9_Template, 10, 3, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "APP.VISITOR_KIOSK.SELECT_LOCATION_MSG"), " Please select an fixed location from the dropdown below ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active_location);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 5, "APP.VISITOR_KIOSK.SELECT_LOCATION"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.locations());
  }
}
function BootstrapComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, BootstrapComponent_Conditional_11_Conditional_1_Template, 15, 9);
    \u0275\u0275conditionalCreate(2, BootstrapComponent_Conditional_11_Conditional_2_Template, 15, 9);
    \u0275\u0275conditionalCreate(3, BootstrapComponent_Conditional_11_Conditional_3_Template, 16, 9);
    \u0275\u0275conditionalCreate(4, BootstrapComponent_Conditional_11_Conditional_4_Template, 10, 7);
    \u0275\u0275conditionalCreate(5, BootstrapComponent_Conditional_11_Conditional_5_Template, 10, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.regions().length > 1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.buildings().length ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.levels().length && ctx_r1.active_building() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rotations().length ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.locations().length ? 5 : -1);
  }
}
function BootstrapComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading());
  }
}
function BootstrapComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 26);
    \u0275\u0275listener("click", function BootstrapComponent_Conditional_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bootstrapKiosk());
    });
    \u0275\u0275text(2, " Finish Setup ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.active_building() && !ctx_r1.active_level());
  }
}
function BootstrapComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 27)(2, "h2", 28);
    \u0275\u0275text(3, " Public mode is enabled ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 29);
    \u0275\u0275text(5, " Setup is disabled while this kiosk is in public mode. ");
    \u0275\u0275elementEnd()()();
  }
}
var BootstrapComponent = class _BootstrapComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._startup_action = "";
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_region = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_region" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_building = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_level = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_rotation = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_rotation" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_location = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rotations = signal(
      [],
      ...ngDevMode ? [{ debugName: "rotations" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._last_query_params = "";
    this.regions = this._org.region_list;
    this.buildings = this._org.active_buildings;
    this.levels = this._org.active_levels;
    this.is_public_mode = isPublicMode;
    this.locations = computed(
      () => {
        const active_level = this.active_level();
        if (!active_level) {
          return [];
        }
        return active_level.locations || [];
      },
      ...ngDevMode ? [{ debugName: "locations" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get version() {
    return VERSION;
  }
  setRegion(region) {
    this._org.region = region;
    this.active_region.set(region);
    this.active_building.set(null);
    this.active_level.set(null);
    this.active_location.set(null);
    this.updateRotations();
  }
  setBuilding(building) {
    this._org.building = building;
    this.active_building.set(building);
    this.active_level.set(null);
    this.active_location.set(null);
    this.updateRotations();
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.active_region.set(this._org.region);
    this.handleQueryParams();
    this.checkBootstrap();
  }
  ngDoCheck() {
    this.handleQueryParams();
  }
  updateRotations() {
    this.rotations.set([]);
    const active_building = this.active_building();
    if (!active_building) {
      this.active_rotation.set(null);
      return;
    }
    const orientations = active_building.orientations;
    const rotations = [];
    for (const key in orientations) {
      if (orientations[key]) {
        rotations.push({
          id: key,
          name: `${key.split("_").join(" ")} (${orientations[key] * 90}\xB0)`,
          value: orientations[key]
        });
      }
    }
    this.rotations.set(rotations);
    this.active_rotation.set(rotations[0] || null);
  }
  /**
   * Store bootstrapped values and navigate to the main page
   */
  bootstrapKiosk() {
    this.loading.set("Bootstrapping application...");
    const active_level = this.active_level();
    const active_building = this.active_building();
    const active_rotation = this.active_rotation();
    const active_location = this.active_location();
    if (active_level) {
      if (localStorage) {
        localStorage.setItem("KIOSK.building", active_building?.id || active_level.parent_id);
        localStorage.setItem("KIOSK.level", active_level.id);
        if (active_rotation) {
          localStorage.setItem("KIOSK.orientation", `${active_rotation.id}`);
        }
        if (active_location) {
          localStorage.setItem("KIOSK.location", `${active_location.id}`);
        }
      }
      this.navigateToStartupRoute();
    }
    this.loading.set("");
  }
  /**
   * Check for any existing bootstrapped values
   */
  checkBootstrap() {
    this.loading.set("Checking for existing parameters...");
    if (this._startup_action === "preferences") {
      this.navigateToStartupRoute();
      this.loading.set("");
      return;
    }
    if (localStorage) {
      const building_id = localStorage.getItem("KIOSK.building");
      const level_id = localStorage.getItem("KIOSK.level");
      if (building_id && level_id) {
        this._router.navigate(this.getStartupRoute());
      }
    }
    VirtualKeyboardComponent.enabled = localStorage.getItem("OSK.enabled") === "true";
    this.loading.set("");
  }
  getStartupRoute() {
    if (this._startup_action === "preferences") {
      return ["/checkin", "preferences"];
    }
    const path = this._settings.get("app.default_route") || "welcome";
    const route = path.split("/");
    route[0] = `/${route[0]}`;
    return route;
  }
  navigateToStartupRoute() {
    const route = this.getStartupRoute();
    if (route[0] === "/checkin" && route[1] === "preferences") {
      this._router.navigate(route, {
        queryParams: this.getMergedQueryParamsFromUrl()
      });
      return;
    }
    this._router.navigate(route);
  }
  getActionParamFromUrl() {
    return this.getMergedQueryParamsFromUrl().action?.trim().toLowerCase() || "";
  }
  handleQueryParams() {
    const query_params = this.getMergedQueryParamsFromUrl();
    const query_key = JSON.stringify(query_params);
    if (query_key === this._last_query_params)
      return;
    this._last_query_params = query_key;
    if (query_params.action) {
      this._startup_action = query_params.action.trim().toLowerCase();
    } else {
      this._startup_action = this.getActionParamFromUrl();
    }
    if (query_params.osk !== void 0) {
      const osk_enabled = query_params.osk === "true";
      localStorage.setItem("OSK.enabled", `${osk_enabled}`);
    }
    if (query_params.clear === "true") {
      localStorage.removeItem("KIOSK.building");
      localStorage.removeItem("KIOSK.level");
      localStorage.removeItem("KIOSK.orientation");
    }
    if (query_params.level) {
      const level = this._org.levelWithID([query_params.level]);
      if (level) {
        this.active_level.set(level);
        this.bootstrapKiosk();
      }
    }
  }
  getMergedQueryParamsFromUrl() {
    const query_params = {};
    try {
      const parsed_url = new URL(window.location.href, window.location.origin);
      parsed_url.searchParams.forEach((value, key) => {
        query_params[key] = value;
      });
      const hash_route = parsed_url.hash?.replace(/^#/, "") || "";
      const hash_query = hash_route.includes("?") ? hash_route.split("?")[1] : "";
      new URLSearchParams(hash_query).forEach((value, key) => {
        query_params[key] = value;
      });
    } catch {
    }
    this._route.snapshot.queryParamMap.keys.forEach((key) => {
      const value = this._route.snapshot.queryParamMap.get(key);
      if (value !== null) {
        query_params[key] = value;
      }
    });
    return query_params;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BootstrapComponent_BaseFactory;
      return function BootstrapComponent_Factory(__ngFactoryType__) {
        return (\u0275BootstrapComponent_BaseFactory || (\u0275BootstrapComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BootstrapComponent)))(__ngFactoryType__ || _BootstrapComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BootstrapComponent, selectors: [["", "bootstrap", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 23, vars: 21, consts: [["select", ""], [1, "bg-base-200", "absolute", "inset-0", "z-0"], ["form", "", 1, "border-base-300", "bg-base-100", "relative", "z-10", "mx-auto", "my-8", "w-md", "max-w-[calc(100%-2rem)]", "overflow-hidden", "rounded-lg", "border", "shadow-sm"], [1, "bg-secondary", "text-secondary-content", "flex", "w-full", "items-center", "justify-between", "px-4", "py-3", "text-xl", "font-medium"], [1, "relative", "overflow-hidden", "rounded-sm", "px-2", "py-1"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-10"], [1, "relative", "z-10", "font-mono", "text-sm", "uppercase"], [1, "flex", "flex-col", "space-y-2", "px-4"], [1, "m-auto", "flex", "flex-col", "items-center", "p-8"], [1, "border-base-300", "mt-4!", "flex", "w-full", "items-center", "justify-end", "border-t", "px-4", "py-2"], [1, "absolute", "right-0", "bottom-0", "z-10", "p-2", "text-right"], [1, "text-xs", "opacity-40"], [1, "bg-base-300/90", "text-base-content", "absolute", "inset-0", "z-20", "flex", "items-center", "justify-center", "p-8", "text-center"], ["appearance", "outline", 1, "no-subscript"], ["building", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1", "truncate"], [1, "bg-base-200", "mr-4!", "rounded-sm", "px-1.5", "font-mono", "text-[0.625rem]"], [3, "value"], [1, "leading-tight"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "hidden"], [1, "font-mono", "text-[0.625rem]", "opacity-60"], ["level", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], [1, "max-w-xl", "space-y-2"], [1, "text-3xl", "font-semibold"], [1, "text-lg", "opacity-80"]], template: function BootstrapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "header", 3)(3, "div");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "div", 5);
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(11, BootstrapComponent_Conditional_11_Template, 6, 5, "div", 7)(12, BootstrapComponent_Conditional_12_Template, 4, 2, "div", 8);
        \u0275\u0275conditionalCreate(13, BootstrapComponent_Conditional_13_Template, 3, 1, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "div", 11);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 11);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "date");
        \u0275\u0275pipe(21, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(22, BootstrapComponent_Conditional_22_Template, 6, 0, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "APP.VISITOR_KIOSK.APP"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "COMMON.BOOTSTRAP_SETUP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 11 : 12);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(17, 13, "COMMON.CONTROLS_VERSION"), ": ", ctx.version.hash, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(20, 15, ctx.version.time, "longDate"), " (", \u0275\u0275pipeBind2(21, 18, ctx.version.time, "shortTime"), ") ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.is_public_mode() ? 22 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      DatePipe,
      TranslatePipe
    ], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nlabel[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=bootstrap.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BootstrapComponent, [{
    type: Component,
    args: [{ selector: "[bootstrap]", template: `
        <div class="bg-base-200 absolute inset-0 z-0">
            <div
                form
                class="border-base-300 bg-base-100 relative z-10 mx-auto my-8 w-md max-w-[calc(100%-2rem)] overflow-hidden rounded-lg border shadow-sm"
            >
                <header
                    class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
                >
                    <div>{{ 'APP.VISITOR_KIOSK.APP' | translate }}</div>
                    <div class="relative overflow-hidden rounded-sm px-2 py-1">
                        <div
                            class="bg-base-100 absolute inset-0 z-0 opacity-10"
                        ></div>
                        <div class="relative z-10 font-mono text-sm uppercase">
                            {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                        </div>
                    </div>
                </header>
                @if (!loading()) {
                    <div class="flex flex-col space-y-2 px-4">
                        @if (regions().length > 1) {
                            <label>
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_REGION_MSG'
                                        | translate
                                }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    #select
                                    building
                                    [(ngModel)]="active_region"
                                    (ngModelChange)="setRegion($event)"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_REGION_MSG'
                                            | translate
                                    "
                                >
                                    <mat-select-trigger>
                                        <div
                                            class="flex items-center space-x-4"
                                        >
                                            <div class="flex-1 truncate">
                                                {{
                                                    active_region()
                                                        ?.display_name ||
                                                        active_region()?.name
                                                }}
                                            </div>
                                            <div
                                                class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                            >
                                                {{ active_region()?.id }}
                                            </div>
                                        </div>
                                    </mat-select-trigger>
                                    @for (option of regions(); track option) {
                                        <mat-option [value]="option">
                                            <div class="leading-tight">
                                                <div>
                                                    {{
                                                        option.display_name ||
                                                            option.name
                                                    }}
                                                </div>
                                                <div
                                                    class="font-mono text-[0.625rem] opacity-30"
                                                >
                                                    <span class="hidden"
                                                        >&nbsp;[</span
                                                    >{{ option.id
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (buildings().length) {
                            <label>
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_BUILDING_MSG'
                                        | translate
                                }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    #select
                                    building
                                    [(ngModel)]="active_building"
                                    (ngModelChange)="setBuilding($event)"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_BUILDING'
                                            | translate
                                    "
                                >
                                    <mat-select-trigger>
                                        <div
                                            class="flex items-center space-x-4"
                                        >
                                            <div class="flex-1 truncate">
                                                {{
                                                    active_building()
                                                        ?.display_name ||
                                                        active_building()?.name
                                                }}
                                            </div>
                                            <div
                                                class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                            >
                                                {{ active_building()?.id }}
                                            </div>
                                        </div>
                                    </mat-select-trigger>
                                    @for (option of buildings(); track option) {
                                        <mat-option [value]="option">
                                            <div class="leading-tight">
                                                <div>
                                                    {{
                                                        option.display_name ||
                                                            option.name
                                                    }}
                                                </div>
                                                <div
                                                    class="font-mono text-[0.625rem] opacity-60"
                                                >
                                                    <span class="hidden"
                                                        >&nbsp;[</span
                                                    >{{ option.id
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (levels().length && active_building()) {
                            <div></div>
                            <label>
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_LEVEL_MSG'
                                        | translate
                                }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    #select
                                    level
                                    [(ngModel)]="active_level"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_LEVEL'
                                            | translate
                                    "
                                >
                                    <mat-select-trigger>
                                        <div
                                            class="flex items-center space-x-4"
                                        >
                                            <div class="flex-1 truncate">
                                                {{
                                                    active_level()
                                                        ?.display_name ||
                                                        active_level()?.name
                                                }}
                                            </div>
                                            <div
                                                class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                            >
                                                {{ active_level()?.id }}
                                            </div>
                                        </div>
                                    </mat-select-trigger>
                                    @for (option of levels(); track option) {
                                        <mat-option [value]="option">
                                            <div class="leading-tight">
                                                <div>
                                                    {{
                                                        option.display_name ||
                                                            option.name
                                                    }}
                                                </div>
                                                <div
                                                    class="font-mono text-[0.625rem] opacity-30"
                                                >
                                                    <span class="hidden"
                                                        >&nbsp;[</span
                                                    >{{ option.id
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (rotations().length) {
                            <div></div>
                            <label>
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_ORIENTATION_MSG'
                                        | translate
                                }}
                                Please select an orientation from the dropdown
                                below
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    #select
                                    [(ngModel)]="active_rotation"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_ORIENTATION'
                                            | translate
                                    "
                                >
                                    @for (option of rotations(); track option) {
                                        <mat-option [value]="option">
                                            <div class="leading-tight">
                                                <div>
                                                    {{
                                                        option.display_name ||
                                                            option.name
                                                    }}
                                                </div>
                                                <div
                                                    class="font-mono text-[0.625rem] opacity-30"
                                                >
                                                    <span class="hidden"
                                                        >&nbsp;[</span
                                                    >{{ option.id
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (locations().length) {
                            <div></div>
                            <label>
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_LOCATION_MSG'
                                        | translate
                                }}
                                Please select an fixed location from the
                                dropdown below
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    #select
                                    [(ngModel)]="active_location"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_LOCATION'
                                            | translate
                                    "
                                >
                                    @for (option of locations(); track option) {
                                        <mat-option [value]="option">
                                            <div class="leading-tight">
                                                <div>
                                                    {{
                                                        option.display_name ||
                                                            option.name
                                                    }}
                                                </div>
                                                <div
                                                    class="font-mono text-[0.625rem] opacity-30"
                                                >
                                                    <span class="hidden"
                                                        >&nbsp;[</span
                                                    >{{ option.id
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                    </div>
                } @else {
                    <div class="m-auto flex flex-col items-center p-8">
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p>{{ loading() }}</p>
                    </div>
                }
                @if (!loading()) {
                    <div
                        class="border-base-300 mt-4! flex w-full items-center justify-end border-t px-4 py-2"
                    >
                        <button
                            btn
                            matRipple
                            class="w-32"
                            [disabled]="!active_building() && !active_level()"
                            (click)="bootstrapKiosk()"
                        >
                            Finish Setup
                        </button>
                    </div>
                }
            </div>
            <div class="absolute right-0 bottom-0 z-10 p-2 text-right">
                <div class="text-xs opacity-40">
                    {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    {{ version.hash }}
                </div>
                <div class="text-xs opacity-40">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
            @if (is_public_mode()) {
                <div
                    class="bg-base-300/90 text-base-content absolute inset-0 z-20 flex items-center justify-center p-8 text-center"
                >
                    <div class="max-w-xl space-y-2">
                        <h2 class="text-3xl font-semibold">
                            Public mode is enabled
                        </h2>
                        <p class="text-lg opacity-80">
                            Setup is disabled while this kiosk is in public
                            mode.
                        </p>
                    </div>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;b5cb44247b14df9ceaa1cde6e18e7655f7940be592d59e7ac7be62a75ddd59dd;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/bootstrap.component.ts */\nmat-form-field {\n  width: 100%;\n}\nlabel {\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=bootstrap.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BootstrapComponent, { className: "BootstrapComponent", filePath: "apps/visitor-kiosk/src/app/bootstrap.component.ts", lineNumber: 411 });
})();

// apps/visitor-kiosk/src/app/visitor-registration.component.ts
var _c04 = () => ["/welcome"];
function VisitorRegistrationComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
}
function VisitorRegistrationComponent_Conditional_3_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 21);
    \u0275\u0275element(4, "input", 12);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "BOOKINGS.VISITOR_PASS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.pass_number)("placeholder", \u0275\u0275pipeBind1(5, 5, "BOOKINGS.VISITOR_PASS_PLACEHOLDER"));
    \u0275\u0275control();
  }
}
function VisitorRegistrationComponent_Conditional_3_Conditional_47_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-checkbox", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.ALL_DAY"), " ");
  }
}
function VisitorRegistrationComponent_Conditional_3_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, VisitorRegistrationComponent_Conditional_3_Conditional_47_Conditional_0_Template, 4, 4, "div", 25);
    \u0275\u0275elementStart(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-duration-field", 27);
    \u0275\u0275listener("ngModelChange", function VisitorRegistrationComponent_Conditional_3_Conditional_47_Template_a_duration_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDuration($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.allow_all_day() ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.DURATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form_value().duration)("time", ctx_r1.form_value().date)("max", ctx_r1.max_duration())("disabled", ctx_r1.form_value().all_day);
    \u0275\u0275control();
  }
}
function VisitorRegistrationComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 6)(2, "h3", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 8)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 9)(9, "label", 10);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 11);
    \u0275\u0275element(13, "input", 12);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-error");
    \u0275\u0275text(16, "A valid email is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label", 13);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 14);
    \u0275\u0275element(21, "input", 12);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(23, "mat-error");
    \u0275\u0275text(24, "A valid email is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "label", 15);
    \u0275\u0275text(26, "Host");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a-user-search-field", 16);
    \u0275\u0275listener("ngModelChange", function VisitorRegistrationComponent_Conditional_3_Template_a_user_search_field_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setHost($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(28, "label", 17);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-form-field", 11);
    \u0275\u0275element(32, "input", 18);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "label", 19);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 11);
    \u0275\u0275element(38, "input", 12);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label", 20);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-form-field", 21);
    \u0275\u0275element(44, "input", 12);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(46, VisitorRegistrationComponent_Conditional_3_Conditional_46_Template, 6, 7);
    \u0275\u0275conditionalCreate(47, VisitorRegistrationComponent_Conditional_3_Conditional_47_Template, 5, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 22)(49, "button", 23);
    \u0275\u0275listener("click", function VisitorRegistrationComponent_Conditional_3_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.register());
    });
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 23, "APP.VISITOR_KIOSK.REGISTRATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(47, _c04));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 25, "APP.VISITOR_KIOSK.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.asset_name)("placeholder", \u0275\u0275pipeBind1(14, 27, "APP.VISITOR_KIOSK.NAME"));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 29, "APP.VISITOR_KIOSK.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.asset_id)("placeholder", \u0275\u0275pipeBind1(22, 31, "APP.VISITOR_KIOSK.EMAIL"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("mb-4", !ctx_r1.host());
    \u0275\u0275property("ngModel", ctx_r1.host());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 33, "APP.VISITOR_KIOSK.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.phone)("placeholder", \u0275\u0275pipeBind1(33, 35, "APP.VISITOR_KIOSK.PHONE"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 37, "APP.VISITOR_KIOSK.ORGANISATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.company)("placeholder", \u0275\u0275pipeBind1(39, 39, "APP.VISITOR_KIOSK.ORGANISATION"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 41, "BOOKINGS.VISITOR_REASON"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.title)("placeholder", \u0275\u0275pipeBind1(45, 43, "BOOKINGS.VISITOR_REASON_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.allow_pass_number() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_registration_time_options() ? 47 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 45, "APP.VISITOR_KIOSK.REGISTER"), " ");
  }
}
function VisitorRegistrationComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 29);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.VISITOR_KIOSK.REGISTERING"));
  }
}
var VisitorRegistrationComponent = class _VisitorRegistrationComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._booking_form = inject(BookingFormService);
    this._checkin = inject(CheckinStateService);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._visitor_allow_all_day = settingSignal("visitors.allow_all_day");
    this._booking_allow_all_day = settingSignal("bookings.allow_all_day");
    this._visitor_max_duration = settingSignal("visitors.max_duration");
    this._booking_max_duration = settingSignal("bookings.max_duration");
    this._induction_enabled = settingSignal("induction_enabled", false);
    this._induction_details = settingSignal("induction_details");
    this.form = this._booking_form.form;
    this.form_value = this._booking_form.model;
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.now = signal(
      startOfMinute(Date.now()).valueOf(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.background = settingSignal("welcome_background");
    this.allow_registration_time_options = settingSignal("allow_registration_time_options");
    this.allow_pass_number = settingSignal("allow_pass_number", false);
    this.hide_building_image = settingSignal("hide_building_image", false);
    this.induction_after_details = settingSignal("induction_after_details", false);
    this.allow_self_registration = settingSignal("allow_self_registration", false);
    this.is_induction_enabled = computed(
      () => !!(this._induction_enabled() && this._induction_details()),
      ...ngDevMode ? [{ debugName: "is_induction_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_all_day = computed(
      () => this._visitor_allow_all_day() ?? this._booking_allow_all_day(),
      ...ngDevMode ? [{ debugName: "allow_all_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_duration = computed(
      () => this._visitor_max_duration() || this._booking_max_duration() || 180,
      ...ngDevMode ? [{ debugName: "max_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.host = computed(
      () => {
        const user = this.form_value().user;
        return isEmptyUser(user) ? null : user;
      },
      ...ngDevMode ? [{ debugName: "host" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  setHost(user) {
    this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
      user: user || EMPTY_USER
    }));
  }
  setDuration(duration) {
    this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), { duration }));
  }
  ngOnInit() {
    this.interval("time", () => this.now.set(startOfMinute(Date.now()).valueOf()), 30 * 1e3);
    this._booking_form.clearOldState();
    this._booking_form.newForm("visitor");
    this._booking_form.setOptions({ type: "visitor" });
    this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
      booking_type: "visitor",
      title: "Visit",
      // Always ask for the host; null is sanitized back to currentUser().
      user: EMPTY_USER
    }));
    setTimeout(() => {
      if (this.allow_self_registration())
        return;
      this._router.navigate(["/welcome"]);
    }, 1e3);
  }
  async register() {
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form, this._booking_form.model).join(", ")
      }));
    }
    if (!this.host()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: i18n("APP.VISITOR_KIOSK.HOST")
      }));
    }
    this.loading.set(true);
    try {
      const value = this._booking_form.model();
      this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
        booking_type: "visitor",
        self_registered: true,
        name: value.asset_name,
        description: value.description || value.title || "",
        attendees: [
          new User({
            name: value.asset_name,
            email: value.asset_id,
            organisation: value.company,
            phone: value.phone
          })
        ],
        zones: unique([
          this._org.organisation.id,
          this._org.region?.id,
          this._org.building?.id
        ])
      }));
      const result = await this._booking_form.postForm(true);
      this._checkin.setBooking(result, "registered");
      if (result.induction !== "accepted" && this.is_induction_enabled() && !this.induction_after_details()) {
        this._router.navigate(["/checkin", "induction"]);
      } else {
        this._router.navigate(["/checkin", "details"]);
      }
    } catch (e) {
      notifyError(i18n("APP.VISITOR_KIOSK.REGISTRATION_ERROR", {
        error: e?.statusText || e
      }));
    } finally {
      this.loading.set(false);
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275VisitorRegistrationComponent_BaseFactory;
      return function VisitorRegistrationComponent_Factory(__ngFactoryType__) {
        return (\u0275VisitorRegistrationComponent_BaseFactory || (\u0275VisitorRegistrationComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VisitorRegistrationComponent)))(__ngFactoryType__ || _VisitorRegistrationComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorRegistrationComponent, selectors: [["visitor-registration"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 11, consts: [[1, "absolute", "inset-0", "flex", "items-center", "p-8"], ["auth", "", 1, "absolute", "top-1/2", "left-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", 3, "source"], ["src", "assets/img/building.png", 1, "absolute", "right-0", "bottom-0", "w-[60%]"], [1, "bg-base-100", "absolute", "top-1/2", "left-4", "max-h-[80vh]", "w-lg", "max-w-[calc(100%-2rem)]", "-translate-y-1/2", "overflow-auto", "rounded-sm", "shadow-sm"], [1, "bg-base-100", "absolute", "top-1/2", "left-4", "flex", "w-[24rem]", "-translate-y-1/2", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-sm", "p-16", "shadow-sm"], [1, "absolute", "top-4", "right-4", "text-2xl", "text-white"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-lg", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "p-4"], ["for", "name"], ["appearance", "outline", 1, "w-full"], ["keyboard", "", "matInput", "", 3, "formField", "placeholder"], ["for", "email"], ["appearance", "outline", 1, "mb-0", "w-full"], ["for", "user"], [3, "ngModelChange", "ngModel"], ["form", "phone"], ["keyboard", "", "matInput", "", "type", "tel", 3, "formField", "placeholder"], ["form", "org"], ["form", "reason"], ["appearance", "outline", 1, "no-subscript", "mb-4", "w-full"], [1, "bg-base-200", "sticky", "bottom-0", "z-10", "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-end", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], ["form", "pass"], [1, "relative", "mt-4", "flex", "justify-end"], ["form", "duration"], [1, "text-base", 3, "ngModelChange", "ngModel", "time", "max", "disabled"], [1, "absolute", "-top-2", "right-0", 3, "formField"], ["diameter", "32"]], template: function VisitorRegistrationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275conditionalCreate(2, VisitorRegistrationComponent_Conditional_2_Template, 1, 0, "img", 2);
        \u0275\u0275conditionalCreate(3, VisitorRegistrationComponent_Conditional_3_Template, 52, 48, "div", 3)(4, VisitorRegistrationComponent_Conditional_4_Template, 5, 3, "div", 4);
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "date");
        \u0275\u0275pipe(8, "date");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("source", ctx.background());
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_building_image() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 3 : 4);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(7, 5, ctx.now(), "mediumDate"), " ", \u0275\u0275pipeBind2(8, 8, ctx.now(), "shortTime"), " ");
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatCheckboxModule,
      MatCheckbox,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormField,
      UserSearchFieldComponent,
      DurationFieldComponent,
      RouterModule,
      RouterLink,
      AuthenticatedImageDirective,
      VirtualKeyboardComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorRegistrationComponent, [{
    type: Component,
    args: [{ selector: "visitor-registration", template: `
        <div class="absolute inset-0 flex items-center p-8">
            <img
                auth
                [source]="background()"
                class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
            />
            @if (!hide_building_image()) {
                <img
                    src="assets/img/building.png"
                    class="absolute right-0 bottom-0 w-[60%]"
                />
            }
            @if (!loading()) {
                <div
                    class="bg-base-100 absolute top-1/2 left-4 max-h-[80vh] w-lg max-w-[calc(100%-2rem)] -translate-y-1/2 overflow-auto rounded-sm shadow-sm"
                >
                    <div
                        class="bg-base-200 sticky top-0 z-10 m-2 flex w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
                    >
                        <h3 class="px-2 text-lg font-medium">
                            {{ 'APP.VISITOR_KIOSK.REGISTRATION' | translate }}
                        </h3>
                        <a icon matRipple [routerLink]="['/welcome']">
                            <icon>close</icon>
                        </a>
                    </div>
                    <div class="p-4">
                        <label for="name">
                            {{ 'APP.VISITOR_KIOSK.NAME' | translate }}</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                keyboard
                                matInput
                                [formField]="form.asset_name"
                                [placeholder]="
                                    'APP.VISITOR_KIOSK.NAME' | translate
                                "
                            />
                            <mat-error>A valid email is required</mat-error>
                        </mat-form-field>
                        <label for="email">
                            {{ 'APP.VISITOR_KIOSK.EMAIL' | translate }}</label
                        >
                        <mat-form-field
                            appearance="outline"
                            class="mb-0 w-full"
                        >
                            <input
                                keyboard
                                matInput
                                [formField]="form.asset_id"
                                [placeholder]="
                                    'APP.VISITOR_KIOSK.EMAIL' | translate
                                "
                            />
                            <mat-error>A valid email is required</mat-error>
                        </mat-form-field>
                        <label for="user">Host</label>
                        <a-user-search-field
                            [ngModel]="host()"
                            (ngModelChange)="setHost($event)"
                            [class.mb-4]="!host()"
                        ></a-user-search-field>
                        <label form="phone">
                            {{ 'APP.VISITOR_KIOSK.PHONE' | translate }}</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                keyboard
                                matInput
                                type="tel"
                                [formField]="form.phone"
                                [placeholder]="
                                    'APP.VISITOR_KIOSK.PHONE' | translate
                                "
                            />
                        </mat-form-field>
                        <label form="org">
                            {{
                                'APP.VISITOR_KIOSK.ORGANISATION' | translate
                            }}</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                keyboard
                                matInput
                                [formField]="form.company"
                                [placeholder]="
                                    'APP.VISITOR_KIOSK.ORGANISATION' | translate
                                "
                            />
                        </mat-form-field>
                        <label form="reason">
                            {{ 'BOOKINGS.VISITOR_REASON' | translate }}
                        </label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript mb-4 w-full"
                        >
                            <input
                                keyboard
                                matInput
                                [formField]="form.title"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_REASON_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                        @if (allow_pass_number()) {
                            <label form="pass">
                                {{ 'BOOKINGS.VISITOR_PASS' | translate }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript mb-4 w-full"
                            >
                                <input
                                    keyboard
                                    matInput
                                    [formField]="form.pass_number"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        }
                        @if (allow_registration_time_options()) {
                            @if (allow_all_day()) {
                                <div class="relative mt-4 flex justify-end">
                                    <mat-checkbox
                                        class="absolute -top-2 right-0"
                                        [formField]="form.all_day"
                                    >
                                        {{ 'COMMON.ALL_DAY' | translate }}
                                    </mat-checkbox>
                                </div>
                            }
                            <label form="duration">
                                {{ 'FORM.DURATION' | translate }}
                            </label>
                            <a-duration-field
                                class="text-base"
                                [ngModel]="form_value().duration"
                                (ngModelChange)="setDuration($event)"
                                [time]="form_value().date"
                                [max]="max_duration()"
                                [disabled]="form_value().all_day"
                            ></a-duration-field>
                        }
                    </div>
                    <div
                        class="bg-base-200 sticky bottom-0 z-10 m-2 flex w-[calc(100%-1rem)] items-center justify-end rounded-sm border-none p-2"
                    >
                        <button btn matRipple class="w-40" (click)="register()">
                            {{ 'APP.VISITOR_KIOSK.REGISTER' | translate }}
                        </button>
                    </div>
                </div>
            } @else {
                <div
                    class="bg-base-100 absolute top-1/2 left-4 flex w-[24rem] -translate-y-1/2 flex-col items-center justify-center space-y-4 rounded-sm p-16 shadow-sm"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.VISITOR_KIOSK.REGISTERING' | translate }}</p>
                </div>
            }
            <div class="absolute top-4 right-4 text-2xl text-white">
                {{ now() | date: 'mediumDate' }}
                {{ now() | date: 'shortTime' }}
            </div>
        </div>
    `, imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatCheckboxModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      UserSearchFieldComponent,
      DurationFieldComponent,
      RouterModule,
      AuthenticatedImageDirective,
      VirtualKeyboardComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorRegistrationComponent, { className: "VisitorRegistrationComponent", filePath: "apps/visitor-kiosk/src/app/visitor-registration.component.ts", lineNumber: 242 });
})();

// apps/visitor-kiosk/src/app/welcome.component.ts
var _c05 = () => ["/checkin"];
var _c12 = () => ["/register"];
var _c22 = (a0) => ["/explore", a0];
function WelcomeComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 9);
    \u0275\u0275text(6, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c12));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.VISITOR_KIOSK.REGISTER"), " ");
  }
}
function WelcomeComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 9);
    \u0275\u0275text(6, "place");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c22, ctx_r0.level()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.VISITOR_KIOSK.EXPLORE"), " ");
  }
}
function WelcomeComponent_Conditional_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "Language");
    \u0275\u0275elementEnd();
  }
}
function WelcomeComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 11)(1, "div", 15)(2, "icon", 16);
    \u0275\u0275text(3, "language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, WelcomeComponent_Conditional_20_Conditional_8_Template, 2, 0, "div", 18);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const menu_r2 = \u0275\u0275reference(22);
    \u0275\u0275property("matMenuTriggerFor", menu_r2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "COMMON.LANGUAGE"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(9, 7, "COMMON.LANGUAGE") !== "Language" ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 9, ctx_r0.active_locale()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, ctx_r0.active_locale()), " ");
  }
}
function WelcomeComponent_For_24_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lang_r4.local, " ");
  }
}
function WelcomeComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function WelcomeComponent_For_24_Template_button_click_0_listener() {
      const lang_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setLocale(lang_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 22);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, WelcomeComponent_For_24_Conditional_7_Template, 2, 1, "div", 18);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("mt-2", \u0275\u0275pipeBind1(3, 4, lang_r4.name) !== lang_r4.local);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, lang_r4.name));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(8, 8, lang_r4.name) !== lang_r4.local ? 7 : -1);
  }
}
function WelcomeComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
}
function WelcomeComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 23)(2, "h2", 24);
    \u0275\u0275text(3, " Public mode is enabled ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 25);
    \u0275\u0275text(5, " Welcome actions are disabled while this kiosk is in public mode. ");
    \u0275\u0275elementEnd()()();
  }
}
var WelcomeComponent = class _WelcomeComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.route = inject(ActivatedRoute);
    this._settings = inject(SettingsService);
    this._locale = inject(LocaleService);
    this._cdr = inject(ChangeDetectorRef);
    this.now = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = signal(
      "",
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._level_sync = effect(
      () => this.level.set(this._settings.listen("KIOSK.level")()),
      ...ngDevMode ? [{ debugName: "_level_sync" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_explore = settingSignal("hide_explore");
    this.background = settingSignal("welcome_background");
    this.can_register = settingSignal("allow_self_registration");
    this.hide_building_image = settingSignal("hide_building_image");
    this.welcome_message = settingSignal("welcome_message");
    this.locales = settingSignal("locales", []);
    this.is_public_mode = isPublicMode;
    this.locale = signal(
      this._locale.locale,
      ...ngDevMode ? [{ debugName: "locale" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_locale = computed(
      () => {
        const locale_list = this.locales();
        const locale = this.locale();
        for (const item of locale_list) {
          if (item.id === locale)
            return item.name;
        }
        return "LANGUAGE.ENGLISH";
      },
      ...ngDevMode ? [{ debugName: "active_locale" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setLocale = (code) => {
      this.locale.set(code);
      this._locale.setLocale(code);
      localStorage.setItem("PLACEOS.locale", code);
      setTimeout(() => location.reload(), 300);
    };
  }
  ngOnInit() {
    this.interval("time", () => this.now.set(Date.now()), 30 * 1e3);
    this.level.set(localStorage?.getItem("KIOSK.level"));
    const params = this.route.snapshot.paramMap;
    if (params.has("level")) {
      this.level.set(params.get("level"));
    }
    const query_params = this.route.snapshot.queryParamMap;
    if (query_params.has("osk")) {
      const osk_enabled = query_params.get("osk") === "true";
      localStorage.setItem("OSK.enabled", `${osk_enabled}`);
      VirtualKeyboardComponent.enabled = osk_enabled;
    }
    this.timeout("check", () => this._cdr.detectChanges(), 1e3);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275WelcomeComponent_BaseFactory;
      return function WelcomeComponent_Factory(__ngFactoryType__) {
        return (\u0275WelcomeComponent_BaseFactory || (\u0275WelcomeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_WelcomeComponent)))(__ngFactoryType__ || _WelcomeComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WelcomeComponent, selectors: [["app-welcome"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 27, vars: 25, consts: [["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "items-center", "overflow-hidden", "p-8"], ["auth", "", 1, "absolute", "top-1/2", "left-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", 3, "source"], [1, "z-10", "flex", "w-[60%]", "flex-col", "justify-center", "space-y-8"], [1, "mb-4", "space-y-4", "text-6xl", "text-white", 3, "innerHTML"], [1, "flex", "items-center", "space-x-4", "font-medium"], ["btn", "", "matRipple", "", 1, "bg-base-100", "border-base-100", "text-base-content", "w-40", "border", 3, "routerLink"], [1, "flex", "items-center", "space-x-2"], [1, "ml-2"], [1, "text-2xl"], [1, "absolute", "top-4", "right-4", "text-2xl", "text-white"], [1, "absolute", "top-4", "left-4", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["src", "assets/img/building.png", 1, "absolute", "right-0", "bottom-0", "w-[60%]"], [1, "bg-base-300/90", "text-base-content", "absolute", "inset-0", "z-20", "flex", "items-center", "justify-center", "p-8", "text-center"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "text-white"], [1, "ml-2", "text-left", "leading-tight", "text-white"], [1, "text-xs", "opacity-30"], [1, "bg-base-200", "ml-4", "max-w-24", "truncate", "rounded-sm", "px-2", "py-1", "text-sm", 3, "matTooltip"], ["mat-menu-item", "", 3, "click"], [1, "flex", "h-14", "min-w-[24rem]", "items-center", "justify-between", "space-x-8"], [1, "leading-tight"], [1, "max-w-xl", "space-y-2"], [1, "text-3xl", "font-semibold"], [1, "text-lg", "opacity-80"]], template: function WelcomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "img", 2);
        \u0275\u0275elementStart(2, "div", 3);
        \u0275\u0275element(3, "h3", 4);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "sanitize");
        \u0275\u0275elementStart(6, "div", 5)(7, "a", 6)(8, "div", 7)(9, "div", 8);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "icon", 9);
        \u0275\u0275text(13, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(14, WelcomeComponent_Conditional_14_Template, 7, 5, "a", 6);
        \u0275\u0275conditionalCreate(15, WelcomeComponent_Conditional_15_Template, 7, 6, "a", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "date");
        \u0275\u0275pipe(19, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(20, WelcomeComponent_Conditional_20_Template, 14, 13, "button", 11);
        \u0275\u0275elementStart(21, "mat-menu", null, 0);
        \u0275\u0275repeaterCreate(23, WelcomeComponent_For_24_Template, 9, 10, "button", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(25, WelcomeComponent_Conditional_25_Template, 1, 0, "img", 13);
        \u0275\u0275conditionalCreate(26, WelcomeComponent_Conditional_26_Template, 6, 0, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("source", ctx.background());
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(5, 13, ctx.welcome_message() || \u0275\u0275pipeBind1(4, 11, "APP.VISITOR_KIOSK.WELCOME_MESSAGE"), "html"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(24, _c05));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 16, "APP.VISITOR_KIOSK.CHECK_IN"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.can_register() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.level() && !ctx.hide_explore() ? 15 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(18, 18, ctx.now(), "mediumDate"), " ", \u0275\u0275pipeBind2(19, 21, ctx.now(), "shortTime"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.locales().length > 1 ? 20 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.locales());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_building_image() ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_public_mode() ? 26 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatTooltipModule,
      MatTooltip,
      RouterModule,
      RouterLink,
      AuthenticatedImageDirective,
      DatePipe,
      TranslatePipe,
      SanitizePipe
    ], styles: ["\na[_ngcontent-%COMP%] {\n  height: 3.5rem;\n}\n/*# sourceMappingURL=welcome.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WelcomeComponent, [{
    type: Component,
    args: [{ selector: "app-welcome", template: `
        <div class="absolute inset-0 flex items-center overflow-hidden p-8">
            <img
                auth
                [source]="background()"
                class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
            />
            <div class="z-10 flex w-[60%] flex-col justify-center space-y-8">
                <h3
                    class="mb-4 space-y-4 text-6xl text-white"
                    [innerHTML]="
                        welcome_message() ||
                            ('APP.VISITOR_KIOSK.WELCOME_MESSAGE' | translate)
                            | sanitize: 'html'
                    "
                ></h3>
                <div class="flex items-center space-x-4 font-medium">
                    <a
                        btn
                        matRipple
                        [routerLink]="['/checkin']"
                        class="bg-base-100 border-base-100 text-base-content w-40 border"
                    >
                        <div class="flex items-center space-x-2">
                            <div class="ml-2">
                                {{ 'APP.VISITOR_KIOSK.CHECK_IN' | translate }}
                            </div>
                            <icon class="text-2xl">chevron_right</icon>
                        </div>
                    </a>
                    @if (can_register()) {
                        <a
                            btn
                            matRipple
                            [routerLink]="['/register']"
                            class="bg-base-100 border-base-100 text-base-content w-40 border"
                        >
                            <div class="flex items-center space-x-2">
                                <div class="ml-2">
                                    {{
                                        'APP.VISITOR_KIOSK.REGISTER' | translate
                                    }}
                                </div>
                                <icon class="text-2xl">chevron_right</icon>
                            </div>
                        </a>
                    }
                    @if (level() && !hide_explore()) {
                        <a
                            btn
                            matRipple
                            [routerLink]="['/explore', level()]"
                            class="bg-base-100 border-base-100 text-base-content w-40 border"
                        >
                            <div class="flex items-center space-x-2">
                                <div class="ml-2">
                                    {{
                                        'APP.VISITOR_KIOSK.EXPLORE' | translate
                                    }}
                                </div>
                                <icon class="text-2xl">place</icon>
                            </div>
                        </a>
                    }
                </div>
            </div>
            <div class="absolute top-4 right-4 text-2xl text-white">
                {{ now() | date: 'mediumDate' }} {{ now() | date: 'shortTime' }}
            </div>
            @if (locales().length > 1) {
                <button
                    class="absolute top-4 left-4"
                    [matMenuTriggerFor]="menu"
                >
                    <div class="flex items-center justify-between">
                        <icon class="text-2xl text-white">language</icon>
                        <div class="ml-2 text-left leading-tight text-white">
                            <div>{{ 'COMMON.LANGUAGE' | translate }}</div>
                            @if (
                                ('COMMON.LANGUAGE' | translate) !== 'Language'
                            ) {
                                <div class="text-xs opacity-30">Language</div>
                            }
                        </div>
                        <div
                            class="bg-base-200 ml-4 max-w-24 truncate rounded-sm px-2 py-1 text-sm"
                            [matTooltip]="active_locale() | translate"
                        >
                            {{ active_locale() | translate }}
                        </div>
                    </div>
                </button>
            }
            <mat-menu #menu="matMenu">
                @for (lang of locales(); track lang) {
                    <button mat-menu-item (click)="setLocale(lang.id)">
                        <div
                            class="flex h-14 min-w-[24rem] items-center justify-between space-x-8"
                        >
                            <div
                                class="leading-tight"
                                [class.mt-2]="
                                    (lang.name | translate) !== lang.local
                                "
                            >
                                <div>{{ lang.name | translate }}</div>
                                @if ((lang.name | translate) !== lang.local) {
                                    <div class="text-xs opacity-30">
                                        {{ lang.local }}
                                    </div>
                                }
                            </div>
                            <!-- <div class="text-3xl">{{ lang.flag }}</div> -->
                        </div>
                    </button>
                }
            </mat-menu>
            @if (!hide_building_image()) {
                <img
                    src="assets/img/building.png"
                    class="absolute right-0 bottom-0 w-[60%]"
                />
            }
            @if (is_public_mode()) {
                <div
                    class="bg-base-300/90 text-base-content absolute inset-0 z-20 flex items-center justify-center p-8 text-center"
                >
                    <div class="max-w-xl space-y-2">
                        <h2 class="text-3xl font-semibold">
                            Public mode is enabled
                        </h2>
                        <p class="text-lg opacity-80">
                            Welcome actions are disabled while this kiosk is in
                            public mode.
                        </p>
                    </div>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatMenuModule,
      MatTooltipModule,
      RouterModule,
      AuthenticatedImageDirective,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;cc9227079df7ac5301f9446791a6a855742622827223e39404093077fda285ac;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/welcome.component.ts */\na {\n  height: 3.5rem;\n}\n/*# sourceMappingURL=welcome.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WelcomeComponent, { className: "WelcomeComponent", filePath: "apps/visitor-kiosk/src/app/welcome.component.ts", lineNumber: 191 });
})();

// apps/visitor-kiosk/src/app/app.routes.ts
var routes = [
  { path: "unauthorised", component: UnauthorisedComponent },
  {
    path: "bootstrap",
    component: BootstrapComponent,
    canActivate: [AuthorisedUserGuard]
  },
  {
    path: "welcome",
    component: WelcomeComponent,
    canActivate: [AuthorisedUserGuard]
  },
  {
    path: "register",
    component: VisitorRegistrationComponent,
    canActivate: [AuthorisedUserGuard]
  },
  {
    path: "explore",
    canActivate: [AuthorisedUserGuard],
    loadChildren: () => import("./explore.routes-PCVTZSQN.js").then((m) => m.ROUTES)
  },
  {
    path: "checkin",
    canActivate: [AuthorisedUserGuard],
    loadChildren: () => import("./checkin.routes-L6R4KELE.js").then((m) => m.ROUTES)
  },
  { path: "**", redirectTo: "bootstrap" }
];

// apps/visitor-kiosk/src/app/app.config.ts
var appConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideAppInitializer(() => registerActiveLocale(inject(LocaleService).locale)),
    provideAnimations(),
    provideRouter(routes, withHashLocation(), withNavigationErrorHandler((error) => reloadOnChunkLoadError(error.error))),
    provideServiceWorker("ngsw-worker.js", {
      enabled: environment.production
    }),
    {
      provide: ErrorHandler,
      useValue: createErrorHandler({
        showDialog: false
      })
    },
    {
      provide: TraceService,
      deps: [Router]
    },
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService) => localeService.locale
    }
  ]
};

// apps/visitor-kiosk/src/main.ts
setPublicMode(new URLSearchParams(location.search).has("public"));
if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
