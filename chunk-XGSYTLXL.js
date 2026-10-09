// libs/common/src/lib/native-app.ts
var DOMAIN_STORAGE_KEY = "PlaceOS.native.domain";
var EMAIL_STORAGE_KEY = "PlaceOS.native.email";
var API_KEY_STORAGE_KEY = "PlaceOS.native.api_key";
var SYSTEM_ID_STORAGE_KEY = "PlaceOS.native.system_id";
var MANAGED_CONFIG_STORAGE_KEY = "PlaceOS.native.managed_config";
var APP_ID_STORAGE_KEY = "PlaceOS.native.app_id";
var LAST_AUTH_URL_STORAGE_KEY = "PlaceOS.native.last_auth_url";
var CONSUMED_AUTH_URL_STORAGE_KEY = "PlaceOS.native.consumed_auth_url";
var PKCE_STORAGE_KEY = "PlaceOS.native.pkce";
var AUTH_ERROR_STORAGE_KEY = "PlaceOS.native.auth_error";
var LOOKUP_HOST = "au.placeos.run";
var NATIVE_CALL_TIMEOUT_MS = 10 * 1e3;
var NATIVE_APP_IDS = {
  workplace: "com.placeos.workplace",
  staff: "com.placeos.workplace",
  control: "com.placeos.control",
  bookings: "com.placeos.booking.panel",
  "booking panel": "com.placeos.booking.panel"
};
var _native_url_listener = null;
function boundedNativeCall(promise) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Native plugin call timed out.")), NATIVE_CALL_TIMEOUT_MS);
    promise.then((value) => {
      clearTimeout(timer);
      resolve(value);
    }, (error) => {
      clearTimeout(timer);
      reject(error);
    });
  });
}
function capacitor() {
  return window.Capacitor || null;
}
function nativePluginProxy(name) {
  const cap = capacitor();
  if (cap?.Plugins?.[name])
    return cap.Plugins[name];
  try {
    return cap?.registerPlugin?.(name) || null;
  } catch {
    return null;
  }
}
function listenToNativeEvent(plugin_name, event_name, listener) {
  const proxy = nativePluginProxy(plugin_name);
  if (proxy?.addListener) {
    return boundedNativeCall(Promise.resolve(proxy.addListener(event_name, listener)));
  }
  const cap = capacitor();
  if (cap?.addListener) {
    return boundedNativeCall(Promise.resolve(cap.addListener(plugin_name, event_name, listener)));
  }
  return null;
}
function callNativeMethod(plugin_name, method_name, options) {
  const proxy = nativePluginProxy(plugin_name);
  if (typeof proxy?.[method_name] === "function") {
    return boundedNativeCall(Promise.resolve(proxy[method_name](options)));
  }
  const cap = capacitor();
  if (cap?.nativePromise) {
    return boundedNativeCall(cap.nativePromise(plugin_name, method_name, options));
  }
  return null;
}
function isNativeApp() {
  return !!capacitor()?.isNativePlatform?.();
}
async function getNativeAppId(app_name) {
  const normalised_name = `${app_name || ""}`.trim().toLowerCase();
  const app_id = NATIVE_APP_IDS[normalised_name];
  if (app_id) {
    localStorage.setItem(APP_ID_STORAGE_KEY, app_id);
    return app_id;
  }
  const cached_app_id = localStorage.getItem(APP_ID_STORAGE_KEY);
  if (!cached_app_id) {
    throw new Error(`Unsupported native app: ${app_name || "unknown"}.`);
  }
  return cached_app_id;
}
async function getNativeRedirectUri(app_name, domain) {
  const app_id = await getNativeAppId(app_name);
  const host = `${domain || ""}`.trim();
  return host ? `${app_id}://${host}/oauth-resp` : `${app_id}://oauth-resp`;
}
async function isNativeAuthRedirect(url) {
  const app_id = await getNativeAppId();
  const callback_url = new URL(url);
  return callback_url.protocol === `${app_id}:` && (callback_url.pathname === "/oauth-resp" || callback_url.hostname === "oauth-resp" && !callback_url.pathname.replace(/^\/+/, ""));
}
async function bindNativeAuthRedirects(listener) {
  if (!isNativeApp() || _native_url_listener)
    return;
  const handle = listenToNativeEvent("App", "appUrlOpen", async ({ url }) => {
    try {
      if (!url)
        return;
      console.warn(`[AUTH] App opened with URL: ${url}`);
      if (!await isNativeAuthRedirect(url)) {
        console.warn("[AUTH] URL is not an auth redirect.");
        return;
      }
      localStorage.setItem(LAST_AUTH_URL_STORAGE_KEY, url);
      listener(url);
    } catch (error) {
      console.warn("[AUTH] Error handling app URL.", error);
    }
  });
  if (!handle) {
    console.warn("[AUTH] Capacitor App plugin is unavailable.");
    return;
  }
  _native_url_listener = handle;
  await handle.catch((error) => {
    _native_url_listener = null;
    console.warn("[AUTH] Failed to listen for app URLs.", error);
  });
}
function markNativeAuthRedirectConsumed(url) {
  localStorage.setItem(CONSUMED_AUTH_URL_STORAGE_KEY, url);
  localStorage.removeItem(LAST_AUTH_URL_STORAGE_KEY);
}
async function consumeNativeAuthRedirect() {
  if (!isNativeApp())
    return null;
  const launch_url = await callNativeMethod("App", "getLaunchUrl")?.catch(() => null);
  const url = launch_url?.url || localStorage.getItem(LAST_AUTH_URL_STORAGE_KEY) || "";
  if (!url)
    return null;
  const is_redirect = await isNativeAuthRedirect(url).catch((error) => {
    console.warn("[AUTH] Error checking launch URL.", error);
    return false;
  });
  if (!is_redirect)
    return null;
  if (url === localStorage.getItem(CONSUMED_AUTH_URL_STORAGE_KEY)) {
    console.warn("[AUTH] Launch URL already consumed.");
    return null;
  }
  console.warn(`[AUTH] Consuming auth redirect from launch URL: ${url}`);
  return url;
}
function storeNativePkceVerifier(key, verifier) {
  sessionStorage.setItem(key, verifier);
  localStorage.setItem(PKCE_STORAGE_KEY, JSON.stringify({ key, verifier }));
}
function restoreNativePkceVerifier() {
  const raw = localStorage.getItem(PKCE_STORAGE_KEY);
  if (!raw)
    return;
  try {
    const { key, verifier } = JSON.parse(raw);
    if (key && verifier && !sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, verifier);
    }
  } catch {
    localStorage.removeItem(PKCE_STORAGE_KEY);
  }
}
function clearNativePkceVerifier() {
  localStorage.removeItem(PKCE_STORAGE_KEY);
}
function setNativeAuthError(message) {
  localStorage.setItem(AUTH_ERROR_STORAGE_KEY, message);
}
function consumeNativeAuthError() {
  const message = localStorage.getItem(AUTH_ERROR_STORAGE_KEY) || "";
  localStorage.removeItem(AUTH_ERROR_STORAGE_KEY);
  return message;
}
async function hideNativeStatusBar() {
  if (!isNativeApp())
    return;
  await callNativeMethod("StatusBar", "setOverlaysWebView", {
    overlay: true
  })?.catch(() => null);
  await callNativeMethod("StatusBar", "hide", { animation: "NONE" })?.catch(() => null);
}
async function closeNativeBrowser() {
  await callNativeMethod("Browser", "close")?.catch(() => null);
}
async function openNativeBrowser(url) {
  const opened = callNativeMethod("Browser", "open", { url });
  if (!opened) {
    location.assign(url);
    return;
  }
  await opened.catch(() => location.assign(url));
}
function getNativeDomain() {
  return localStorage.getItem(DOMAIN_STORAGE_KEY);
}
function getNativeEmail() {
  return localStorage.getItem(EMAIL_STORAGE_KEY);
}
function setNativeDomain(domain) {
  localStorage.setItem(DOMAIN_STORAGE_KEY, domain.trim());
}
function setNativeEmail(email) {
  localStorage.setItem(EMAIL_STORAGE_KEY, email.trim());
}
function clearNativeDomain() {
  localStorage.removeItem(DOMAIN_STORAGE_KEY);
}
function getNativeApiKey() {
  return localStorage.getItem(API_KEY_STORAGE_KEY);
}
function setNativeApiKey(api_key) {
  const value = `${api_key || ""}`.trim();
  if (!value)
    return clearNativeApiKey();
  localStorage.setItem(API_KEY_STORAGE_KEY, value);
}
function clearNativeApiKey() {
  localStorage.removeItem(API_KEY_STORAGE_KEY);
}
function normaliseNativeDomain(address) {
  let value = `${address || ""}`.trim();
  if (!value)
    return "";
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(value))
    value = `https://${value}`;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:")
      return "";
    if (!url.hostname)
      return "";
    return url.port ? `${url.hostname}:${url.port}` : url.hostname;
  } catch {
    return "";
  }
}
async function readManagedValue(method_name, key) {
  const result = callNativeMethod("ManagedConfigurations", method_name, {
    key
  });
  if (!result)
    return null;
  const { value } = await result.catch(() => ({ value: null }));
  return value ?? null;
}
async function loadNativeManagedConfig() {
  if (!isNativeApp())
    return null;
  const [domain_name, api_key, system_id, restart_time, restart_enabled, skip_setup] = await Promise.all([
    readManagedValue("getString", "domainName"),
    readManagedValue("getString", "apiKey"),
    readManagedValue("getString", "systemId"),
    readManagedValue("getNumber", "restartTime"),
    readManagedValue("getBoolean", "restartEnabled"),
    readManagedValue("getBoolean", "skipInteractiveSetup")
  ]);
  const domain = normaliseNativeDomain(`${domain_name || ""}`);
  if (!domain && !api_key && !system_id)
    return null;
  return {
    domain,
    api_key: `${api_key || ""}`.trim(),
    system_id: `${system_id || ""}`.trim(),
    restart_enabled: restart_enabled !== false,
    restart_time: Math.min(23, Math.max(0, Math.round(restart_time || 0))),
    skip_interactive_setup: skip_setup === true
  };
}
function applyNativeManagedConfig(config) {
  const fingerprint = JSON.stringify([
    config.domain,
    config.api_key,
    config.system_id
  ]);
  if (localStorage.getItem(MANAGED_CONFIG_STORAGE_KEY) === fingerprint) {
    return false;
  }
  if (config.domain) {
    setNativeDomain(config.domain);
    setNativeApiKey(config.api_key);
  }
  if (config.system_id) {
    localStorage.setItem(SYSTEM_ID_STORAGE_KEY, config.system_id);
  } else {
    localStorage.removeItem(SYSTEM_ID_STORAGE_KEY);
  }
  localStorage.setItem(MANAGED_CONFIG_STORAGE_KEY, fingerprint);
  return true;
}
var _managed_config_sync = null;
function syncNativeManagedConfig() {
  if (!_managed_config_sync) {
    _managed_config_sync = loadNativeManagedConfig().then((config) => ({
      config,
      changed: config ? applyNativeManagedConfig(config) : false
    })).catch(() => ({ config: null, changed: false }));
  }
  return _managed_config_sync;
}
var _restart_timer = null;
function scheduleNativeRestart(hour) {
  if (!isNativeApp() || _restart_timer)
    return;
  const next = /* @__PURE__ */ new Date();
  next.setHours(hour, 0, 0, 0);
  if (next.valueOf() <= Date.now())
    next.setDate(next.getDate() + 1);
  _restart_timer = setTimeout(() => location.reload(), next.valueOf() - Date.now());
}
var DEFAULT_INTUNE_SCOPES = ["User.Read"];
async function getIntuneAccount() {
  if (!isNativeApp())
    return null;
  const result = await callNativeMethod("IntuneMAM", "enrolledAccount")?.catch(() => null);
  return result?.accountId ? result : null;
}
async function getIntuneToken(account, scopes = DEFAULT_INTUNE_SCOPES) {
  const result = await callNativeMethod("IntuneMAM", "acquireTokenSilent", {
    scopes,
    accountId: account.accountId
  })?.catch(() => null);
  return `${result?.accessToken || ""}`.trim();
}
async function lookupNativeDomainByEmail(email) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), NATIVE_CALL_TIMEOUT_MS);
  const response = await fetch(`https://${LOOKUP_HOST}/api/engine/v2/domains/lookup/${encodeURIComponent(email)}`, { signal: controller.signal }).finally(() => clearTimeout(timer));
  if (!response.ok) {
    throw new Error("Unable to lookup domain.");
  }
  const text = (await response.text()).trim();
  const domain = text.startsWith('"') ? JSON.parse(text) : text;
  if (!domain) {
    throw new Error("No domain found for this email.");
  }
  return `${domain}`.trim();
}

export {
  isNativeApp,
  getNativeRedirectUri,
  bindNativeAuthRedirects,
  markNativeAuthRedirectConsumed,
  consumeNativeAuthRedirect,
  storeNativePkceVerifier,
  restoreNativePkceVerifier,
  clearNativePkceVerifier,
  setNativeAuthError,
  consumeNativeAuthError,
  hideNativeStatusBar,
  closeNativeBrowser,
  openNativeBrowser,
  getNativeDomain,
  getNativeEmail,
  setNativeDomain,
  setNativeEmail,
  clearNativeDomain,
  getNativeApiKey,
  setNativeApiKey,
  clearNativeApiKey,
  normaliseNativeDomain,
  syncNativeManagedConfig,
  scheduleNativeRestart,
  getIntuneAccount,
  getIntuneToken,
  lookupNativeDomainByEmail
};
//# debugId=cd6bd381-290f-5c15-8c0f-1c55d9358754
//# sourceMappingURL=chunk-XGSYTLXL.js.map
