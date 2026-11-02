import {
  BrowserPerformanceMeasurement
} from "./chunk-UXGJTOHO.js";
import {
  __export,
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// node_modules/@azure/msal-browser/dist/utils/BrowserUtils.mjs
var BrowserUtils_exports = {};
__export(BrowserUtils_exports, {
  blockAPICallsBeforeInitialize: () => blockAPICallsBeforeInitialize,
  blockAcquireTokenInPopups: () => blockAcquireTokenInPopups,
  blockNonBrowserEnvironment: () => blockNonBrowserEnvironment,
  blockRedirectInIframe: () => blockRedirectInIframe,
  blockReloadInHiddenIframes: () => blockReloadInHiddenIframes,
  buildMergedClaims: () => buildMergedClaims2,
  cancelPendingBridgeResponse: () => cancelPendingBridgeResponse,
  clearAuthResponseFromUrl: () => clearAuthResponseFromUrl,
  clearHash: () => clearHash,
  createGuid: () => createGuid,
  getCurrentUri: () => getCurrentUri,
  getHomepage: () => getHomepage,
  invoke: () => invoke,
  invokeAsync: () => invokeAsync,
  isInIframe: () => isInIframe,
  isInPopup: () => isInPopup,
  parseAuthResponseFromUrl: () => parseAuthResponseFromUrl,
  preconnect: () => preconnect,
  preflightCheck: () => preflightCheck,
  redirectPreflightCheck: () => redirectPreflightCheck,
  replaceHash: () => replaceHash,
  waitForBridgeResponse: () => waitForBridgeResponse
});

// node_modules/@azure/msal-common/dist-browser/constants/AADServerParamKeys.mjs
var AADServerParamKeys_exports = {};
__export(AADServerParamKeys_exports, {
  ACCESS_TOKEN: () => ACCESS_TOKEN,
  ATTRIBUTE_TOKENS: () => ATTRIBUTE_TOKENS,
  BROKER_CLIENT_ID: () => BROKER_CLIENT_ID,
  BROKER_REDIRECT_URI: () => BROKER_REDIRECT_URI,
  CCS_HEADER: () => CCS_HEADER,
  CLAIMS: () => CLAIMS,
  CLIENT_ASSERTION: () => CLIENT_ASSERTION,
  CLIENT_ASSERTION_TYPE: () => CLIENT_ASSERTION_TYPE,
  CLIENT_ID: () => CLIENT_ID,
  CLIENT_INFO: () => CLIENT_INFO,
  CLIENT_REQUEST_ID: () => CLIENT_REQUEST_ID,
  CLIENT_SECRET: () => CLIENT_SECRET,
  CLI_DATA: () => CLI_DATA,
  CODE: () => CODE,
  CODE_CHALLENGE: () => CODE_CHALLENGE,
  CODE_CHALLENGE_METHOD: () => CODE_CHALLENGE_METHOD,
  CODE_VERIFIER: () => CODE_VERIFIER,
  DEVICE_CODE: () => DEVICE_CODE,
  DOMAIN_HINT: () => DOMAIN_HINT,
  DPOP_JKT: () => DPOP_JKT,
  EAR_JWE_CRYPTO: () => EAR_JWE_CRYPTO,
  EAR_JWK: () => EAR_JWK,
  ERROR: () => ERROR,
  ERROR_DESCRIPTION: () => ERROR_DESCRIPTION,
  EXPIRES_IN: () => EXPIRES_IN,
  FMI_PATH: () => FMI_PATH,
  FOCI: () => FOCI,
  GRANT_TYPE: () => GRANT_TYPE,
  ID_TOKEN: () => ID_TOKEN,
  ID_TOKEN_HINT: () => ID_TOKEN_HINT,
  INSTANCE_AWARE: () => INSTANCE_AWARE,
  LOGIN_HINT: () => LOGIN_HINT,
  LOGOUT_HINT: () => LOGOUT_HINT,
  NATIVE_BROKER: () => NATIVE_BROKER,
  NONCE: () => NONCE,
  OBO_ASSERTION: () => OBO_ASSERTION,
  ON_BEHALF_OF: () => ON_BEHALF_OF,
  POST_LOGOUT_URI: () => POST_LOGOUT_URI,
  PROMPT: () => PROMPT,
  REDIRECT_URI: () => REDIRECT_URI,
  REFRESH_TOKEN: () => REFRESH_TOKEN,
  REFRESH_TOKEN_EXPIRES_IN: () => REFRESH_TOKEN_EXPIRES_IN,
  REQUESTED_TOKEN_USE: () => REQUESTED_TOKEN_USE,
  REQ_CNF: () => REQ_CNF,
  RESOURCE: () => RESOURCE,
  RESPONSE_MODE: () => RESPONSE_MODE,
  RESPONSE_TYPE: () => RESPONSE_TYPE,
  RETURN_SPA_CODE: () => RETURN_SPA_CODE,
  SCOPE: () => SCOPE,
  SESSION_STATE: () => SESSION_STATE,
  SID: () => SID,
  STATE: () => STATE,
  TOKEN_TYPE: () => TOKEN_TYPE,
  USERNAME: () => USERNAME,
  USER_FEDERATED_IDENTITY_CREDENTIAL: () => USER_FEDERATED_IDENTITY_CREDENTIAL,
  USER_ID: () => USER_ID,
  X_APP_NAME: () => X_APP_NAME,
  X_APP_VER: () => X_APP_VER,
  X_CLIENT_CPU: () => X_CLIENT_CPU,
  X_CLIENT_CURR_TELEM: () => X_CLIENT_CURR_TELEM,
  X_CLIENT_EXTRA_SKU: () => X_CLIENT_EXTRA_SKU,
  X_CLIENT_LAST_TELEM: () => X_CLIENT_LAST_TELEM,
  X_CLIENT_OS: () => X_CLIENT_OS,
  X_CLIENT_SKU: () => X_CLIENT_SKU,
  X_CLIENT_VER: () => X_CLIENT_VER,
  X_MS_LIB_CAPABILITY: () => X_MS_LIB_CAPABILITY
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
var CLIENT_ID = "client_id";
var REDIRECT_URI = "redirect_uri";
var RESPONSE_TYPE = "response_type";
var RESPONSE_MODE = "response_mode";
var GRANT_TYPE = "grant_type";
var CLAIMS = "claims";
var SCOPE = "scope";
var ERROR = "error";
var ERROR_DESCRIPTION = "error_description";
var ACCESS_TOKEN = "access_token";
var ID_TOKEN = "id_token";
var REFRESH_TOKEN = "refresh_token";
var EXPIRES_IN = "expires_in";
var REFRESH_TOKEN_EXPIRES_IN = "refresh_token_expires_in";
var STATE = "state";
var NONCE = "nonce";
var PROMPT = "prompt";
var SESSION_STATE = "session_state";
var CLIENT_INFO = "client_info";
var CODE = "code";
var CODE_CHALLENGE = "code_challenge";
var CODE_CHALLENGE_METHOD = "code_challenge_method";
var CODE_VERIFIER = "code_verifier";
var CLIENT_REQUEST_ID = "client-request-id";
var X_CLIENT_SKU = "x-client-SKU";
var X_CLIENT_VER = "x-client-VER";
var X_CLIENT_OS = "x-client-OS";
var X_CLIENT_CPU = "x-client-CPU";
var X_CLIENT_CURR_TELEM = "x-client-current-telemetry";
var X_CLIENT_LAST_TELEM = "x-client-last-telemetry";
var X_MS_LIB_CAPABILITY = "x-ms-lib-capability";
var X_APP_NAME = "x-app-name";
var X_APP_VER = "x-app-ver";
var POST_LOGOUT_URI = "post_logout_redirect_uri";
var ID_TOKEN_HINT = "id_token_hint";
var DEVICE_CODE = "device_code";
var CLIENT_SECRET = "client_secret";
var CLIENT_ASSERTION = "client_assertion";
var CLIENT_ASSERTION_TYPE = "client_assertion_type";
var TOKEN_TYPE = "token_type";
var REQ_CNF = "req_cnf";
var DPOP_JKT = "dpop_jkt";
var OBO_ASSERTION = "assertion";
var REQUESTED_TOKEN_USE = "requested_token_use";
var ON_BEHALF_OF = "on_behalf_of";
var FOCI = "foci";
var CCS_HEADER = "X-AnchorMailbox";
var RETURN_SPA_CODE = "return_spa_code";
var NATIVE_BROKER = "nativebroker";
var LOGOUT_HINT = "logout_hint";
var SID = "sid";
var LOGIN_HINT = "login_hint";
var DOMAIN_HINT = "domain_hint";
var X_CLIENT_EXTRA_SKU = "x-client-xtra-sku";
var BROKER_CLIENT_ID = "brk_client_id";
var BROKER_REDIRECT_URI = "brk_redirect_uri";
var INSTANCE_AWARE = "instance_aware";
var EAR_JWK = "ear_jwk";
var EAR_JWE_CRYPTO = "ear_jwe_crypto";
var RESOURCE = "resource";
var CLI_DATA = "clidata";
var USER_FEDERATED_IDENTITY_CREDENTIAL = "user_federated_identity_credential";
var USERNAME = "username";
var USER_ID = "user_id";
var FMI_PATH = "fmi_path";
var ATTRIBUTE_TOKENS = "attribute_tokens";

// node_modules/@azure/msal-common/dist-browser/cache/utils/AccountEntityUtils.mjs
var AccountEntityUtils_exports = {};
__export(AccountEntityUtils_exports, {
  createAccountEntity: () => createAccountEntity,
  createAccountEntityFromAccountInfo: () => createAccountEntityFromAccountInfo,
  generateAccountId: () => generateAccountId,
  generateHomeAccountId: () => generateHomeAccountId,
  getAccountInfo: () => getAccountInfo,
  isAccountEntity: () => isAccountEntity,
  isSingleTenant: () => isSingleTenant
});

// node_modules/@azure/msal-common/dist-browser/utils/Constants.mjs
var Constants_exports = {};
__export(Constants_exports, {
  AADAuthority: () => AADAuthority,
  AAD_INSTANCE_DISCOVERY_ENDPT: () => AAD_INSTANCE_DISCOVERY_ENDPT,
  AAD_TENANT_DOMAIN_SUFFIX: () => AAD_TENANT_DOMAIN_SUFFIX,
  ADFS: () => ADFS,
  APP_METADATA: () => APP_METADATA,
  AUTHORITY_METADATA_CACHE_KEY: () => AUTHORITY_METADATA_CACHE_KEY,
  AUTHORITY_METADATA_REFRESH_TIME_SECONDS: () => AUTHORITY_METADATA_REFRESH_TIME_SECONDS,
  AUTHORIZATION_PENDING: () => AUTHORIZATION_PENDING,
  AZURE_REGION_AUTO_DISCOVER_FLAG: () => AZURE_REGION_AUTO_DISCOVER_FLAG,
  AuthenticationScheme: () => AuthenticationScheme,
  AuthorityMetadataSource: () => AuthorityMetadataSource,
  CACHE_ACCOUNT_TYPE_ADFS: () => CACHE_ACCOUNT_TYPE_ADFS,
  CACHE_ACCOUNT_TYPE_GENERIC: () => CACHE_ACCOUNT_TYPE_GENERIC,
  CACHE_ACCOUNT_TYPE_MSAV1: () => CACHE_ACCOUNT_TYPE_MSAV1,
  CACHE_ACCOUNT_TYPE_MSSTS: () => CACHE_ACCOUNT_TYPE_MSSTS,
  CACHE_KEY_SEPARATOR: () => CACHE_KEY_SEPARATOR,
  CIAM_AUTH_URL: () => CIAM_AUTH_URL,
  CLIENT_INFO: () => CLIENT_INFO2,
  CLIENT_INFO_SEPARATOR: () => CLIENT_INFO_SEPARATOR,
  CLIENT_MISMATCH_ERROR: () => CLIENT_MISMATCH_ERROR,
  CODE_GRANT_TYPE: () => CODE_GRANT_TYPE,
  CONSUMER_UTID: () => CONSUMER_UTID,
  CacheOutcome: () => CacheOutcome,
  CacheType: () => CacheType,
  ClaimsRequestKeys: () => ClaimsRequestKeys,
  CodeChallengeMethodValues: () => CodeChallengeMethodValues,
  CredentialType: () => CredentialType,
  DEFAULT_AUTHORITY: () => DEFAULT_AUTHORITY,
  DEFAULT_AUTHORITY_HOST: () => DEFAULT_AUTHORITY_HOST,
  DEFAULT_COMMON_TENANT: () => DEFAULT_COMMON_TENANT,
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: () => DEFAULT_MAX_THROTTLE_TIME_SECONDS,
  DEFAULT_THROTTLE_TIME_SECONDS: () => DEFAULT_THROTTLE_TIME_SECONDS,
  DEFAULT_TOKEN_RENEWAL_OFFSET_SEC: () => DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
  EMAIL_SCOPE: () => EMAIL_SCOPE,
  EncodingTypes: () => EncodingTypes,
  FORWARD_SLASH: () => FORWARD_SLASH,
  GrantType: () => GrantType,
  HTTP_BAD_REQUEST: () => HTTP_BAD_REQUEST,
  HTTP_CLIENT_ERROR: () => HTTP_CLIENT_ERROR,
  HTTP_CLIENT_ERROR_RANGE_END: () => HTTP_CLIENT_ERROR_RANGE_END,
  HTTP_CLIENT_ERROR_RANGE_START: () => HTTP_CLIENT_ERROR_RANGE_START,
  HTTP_GATEWAY_TIMEOUT: () => HTTP_GATEWAY_TIMEOUT,
  HTTP_GONE: () => HTTP_GONE,
  HTTP_MULTI_SIDED_ERROR: () => HTTP_MULTI_SIDED_ERROR,
  HTTP_NOT_FOUND: () => HTTP_NOT_FOUND,
  HTTP_REDIRECT: () => HTTP_REDIRECT,
  HTTP_REQUEST_TIMEOUT: () => HTTP_REQUEST_TIMEOUT,
  HTTP_SERVER_ERROR: () => HTTP_SERVER_ERROR,
  HTTP_SERVER_ERROR_RANGE_END: () => HTTP_SERVER_ERROR_RANGE_END,
  HTTP_SERVER_ERROR_RANGE_START: () => HTTP_SERVER_ERROR_RANGE_START,
  HTTP_SERVICE_UNAVAILABLE: () => HTTP_SERVICE_UNAVAILABLE,
  HTTP_SUCCESS: () => HTTP_SUCCESS,
  HTTP_SUCCESS_RANGE_END: () => HTTP_SUCCESS_RANGE_END,
  HTTP_SUCCESS_RANGE_START: () => HTTP_SUCCESS_RANGE_START,
  HTTP_TOO_MANY_REQUESTS: () => HTTP_TOO_MANY_REQUESTS,
  HTTP_UNAUTHORIZED: () => HTTP_UNAUTHORIZED,
  HeaderNames: () => HeaderNames,
  HttpMethod: () => HttpMethod,
  IMDS_ENDPOINT: () => IMDS_ENDPOINT,
  IMDS_TIMEOUT: () => IMDS_TIMEOUT,
  IMDS_VERSION: () => IMDS_VERSION,
  INVALID_GRANT_ERROR: () => INVALID_GRANT_ERROR,
  INVALID_INSTANCE: () => INVALID_INSTANCE,
  JsonWebTokenTypes: () => JsonWebTokenTypes,
  KNOWN_PUBLIC_CLOUDS: () => KNOWN_PUBLIC_CLOUDS,
  NOT_APPLICABLE: () => NOT_APPLICABLE,
  NOT_AVAILABLE: () => NOT_AVAILABLE,
  OAuthResponseType: () => OAuthResponseType,
  OFFLINE_ACCESS_SCOPE: () => OFFLINE_ACCESS_SCOPE,
  OIDC_DEFAULT_SCOPES: () => OIDC_DEFAULT_SCOPES,
  OIDC_SCOPES: () => OIDC_SCOPES,
  ONE_DAY_IN_MS: () => ONE_DAY_IN_MS,
  OPENID_SCOPE: () => OPENID_SCOPE,
  PROFILE_SCOPE: () => PROFILE_SCOPE,
  PasswordGrantConstants: () => PasswordGrantConstants,
  PersistentCacheKeys: () => PersistentCacheKeys,
  PromptValue: () => PromptValue,
  REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: () => REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX,
  RESOURCE_DELIM: () => RESOURCE_DELIM,
  RegionDiscoveryOutcomes: () => RegionDiscoveryOutcomes,
  RegionDiscoverySources: () => RegionDiscoverySources,
  ResponseMode: () => ResponseMode,
  S256_CODE_CHALLENGE_METHOD: () => S256_CODE_CHALLENGE_METHOD,
  SERVER_TELEM_CACHE_KEY: () => SERVER_TELEM_CACHE_KEY,
  SERVER_TELEM_CATEGORY_SEPARATOR: () => SERVER_TELEM_CATEGORY_SEPARATOR,
  SERVER_TELEM_MAX_CACHED_ERRORS: () => SERVER_TELEM_MAX_CACHED_ERRORS,
  SERVER_TELEM_MAX_CUR_HEADER_BYTES: () => SERVER_TELEM_MAX_CUR_HEADER_BYTES,
  SERVER_TELEM_MAX_LAST_HEADER_BYTES: () => SERVER_TELEM_MAX_LAST_HEADER_BYTES,
  SERVER_TELEM_OVERFLOW_FALSE: () => SERVER_TELEM_OVERFLOW_FALSE,
  SERVER_TELEM_OVERFLOW_TRUE: () => SERVER_TELEM_OVERFLOW_TRUE,
  SERVER_TELEM_SCHEMA_VERSION: () => SERVER_TELEM_SCHEMA_VERSION,
  SERVER_TELEM_UNKNOWN_ERROR: () => SERVER_TELEM_UNKNOWN_ERROR,
  SERVER_TELEM_VALUE_SEPARATOR: () => SERVER_TELEM_VALUE_SEPARATOR,
  SHR_NONCE_VALIDITY: () => SHR_NONCE_VALIDITY,
  SKU: () => SKU,
  THE_FAMILY_ID: () => THE_FAMILY_ID,
  THROTTLING_PREFIX: () => THROTTLING_PREFIX,
  URL_FORM_CONTENT_TYPE: () => URL_FORM_CONTENT_TYPE,
  X_MS_LIB_CAPABILITY_VALUE: () => X_MS_LIB_CAPABILITY_VALUE
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
var SKU = "msal.js.common";
var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common/";
var DEFAULT_AUTHORITY_HOST = "login.microsoftonline.com";
var DEFAULT_COMMON_TENANT = "common";
var ADFS = "adfs";
var AAD_INSTANCE_DISCOVERY_ENDPT = `${DEFAULT_AUTHORITY}discovery/instance?api-version=1.1&authorization_endpoint=`;
var CIAM_AUTH_URL = ".ciamlogin.com";
var AAD_TENANT_DOMAIN_SUFFIX = ".onmicrosoft.com";
var RESOURCE_DELIM = "|";
var CONSUMER_UTID = "9188040d-6c67-4c5b-b112-36a304b66dad";
var OPENID_SCOPE = "openid";
var PROFILE_SCOPE = "profile";
var OFFLINE_ACCESS_SCOPE = "offline_access";
var EMAIL_SCOPE = "email";
var CODE_GRANT_TYPE = "authorization_code";
var S256_CODE_CHALLENGE_METHOD = "S256";
var URL_FORM_CONTENT_TYPE = "application/x-www-form-urlencoded;charset=utf-8";
var AUTHORIZATION_PENDING = "authorization_pending";
var NOT_APPLICABLE = "N/A";
var NOT_AVAILABLE = "Not Available";
var FORWARD_SLASH = "/";
var IMDS_ENDPOINT = "http://169.254.169.254/metadata/instance/compute";
var IMDS_VERSION = "2021-02-01";
var IMDS_TIMEOUT = 2e3;
var AZURE_REGION_AUTO_DISCOVER_FLAG = "TryAutoDetect";
var REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX = "login.microsoft.com";
var KNOWN_PUBLIC_CLOUDS = [
  "login.microsoftonline.com",
  "login.windows.net",
  "login.microsoft.com",
  "sts.windows.net"
];
var SHR_NONCE_VALIDITY = 240;
var INVALID_INSTANCE = "invalid_instance";
var HTTP_SUCCESS = 200;
var HTTP_SUCCESS_RANGE_START = 200;
var HTTP_SUCCESS_RANGE_END = 299;
var HTTP_REDIRECT = 302;
var HTTP_CLIENT_ERROR = 400;
var HTTP_CLIENT_ERROR_RANGE_START = 400;
var HTTP_BAD_REQUEST = 400;
var HTTP_UNAUTHORIZED = 401;
var HTTP_NOT_FOUND = 404;
var HTTP_REQUEST_TIMEOUT = 408;
var HTTP_GONE = 410;
var HTTP_TOO_MANY_REQUESTS = 429;
var HTTP_CLIENT_ERROR_RANGE_END = 499;
var HTTP_SERVER_ERROR = 500;
var HTTP_SERVER_ERROR_RANGE_START = 500;
var HTTP_SERVICE_UNAVAILABLE = 503;
var HTTP_GATEWAY_TIMEOUT = 504;
var HTTP_SERVER_ERROR_RANGE_END = 599;
var HTTP_MULTI_SIDED_ERROR = 600;
var HttpMethod = {
  GET: "GET",
  POST: "POST"
};
var OIDC_DEFAULT_SCOPES = [
  OPENID_SCOPE,
  PROFILE_SCOPE,
  OFFLINE_ACCESS_SCOPE
];
var OIDC_SCOPES = [...OIDC_DEFAULT_SCOPES, EMAIL_SCOPE];
var HeaderNames = {
  CONTENT_TYPE: "Content-Type",
  CONTENT_LENGTH: "Content-Length",
  DPOP: "DPoP",
  RETRY_AFTER: "Retry-After",
  CCS_HEADER: "X-AnchorMailbox",
  WWWAuthenticate: "WWW-Authenticate",
  AuthenticationInfo: "Authentication-Info",
  X_MS_REQUEST_ID: "x-ms-request-id",
  X_MS_HTTP_VERSION: "x-ms-httpver"
};
var PersistentCacheKeys = {
  ACTIVE_ACCOUNT_FILTERS: "active-account-filters"
  // new cache entry for active_account for a more robust version for browser
};
var AADAuthority = {
  COMMON: "common",
  ORGANIZATIONS: "organizations",
  CONSUMERS: "consumers"
};
var ClaimsRequestKeys = {
  ACCESS_TOKEN: "access_token",
  XMS_CC: "xms_cc",
  ID_TOKEN: "id_token",
  SIGNIN_STATE: "signin_state",
  LOGIN_HINT: "login_hint",
  TENANT_REGION_SUB_SCOPE: "tenant_region_sub_scope"
};
var PromptValue = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
};
var CodeChallengeMethodValues = {
  PLAIN: "plain",
  S256: "S256"
};
var OAuthResponseType = {
  CODE: "code",
  IDTOKEN_TOKEN: "id_token token",
  IDTOKEN_TOKEN_REFRESHTOKEN: "id_token token refresh_token"
};
var ResponseMode = {
  QUERY: "query",
  FRAGMENT: "fragment",
  FORM_POST: "form_post"
};
var GrantType = {
  IMPLICIT_GRANT: "implicit",
  AUTHORIZATION_CODE_GRANT: "authorization_code",
  CLIENT_CREDENTIALS_GRANT: "client_credentials",
  RESOURCE_OWNER_PASSWORD_GRANT: "password",
  REFRESH_TOKEN_GRANT: "refresh_token",
  DEVICE_CODE_GRANT: "device_code",
  JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer",
  USER_FIC: "user_fic"
};
var CACHE_ACCOUNT_TYPE_MSSTS = "MSSTS";
var CACHE_ACCOUNT_TYPE_ADFS = "ADFS";
var CACHE_ACCOUNT_TYPE_MSAV1 = "MSA";
var CACHE_ACCOUNT_TYPE_GENERIC = "Generic";
var CACHE_KEY_SEPARATOR = "-";
var CLIENT_INFO_SEPARATOR = ".";
var CredentialType = {
  ID_TOKEN: "IdToken",
  ACCESS_TOKEN: "AccessToken",
  ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme",
  REFRESH_TOKEN: "RefreshToken"
};
var CacheType = {
  ADFS: 1001,
  MSA: 1002,
  MSSTS: 1003,
  GENERIC: 1004,
  ACCESS_TOKEN: 2001,
  REFRESH_TOKEN: 2002,
  ID_TOKEN: 2003,
  APP_METADATA: 3001,
  UNDEFINED: 9999
};
var APP_METADATA = "appmetadata";
var CLIENT_INFO2 = "client_info";
var THE_FAMILY_ID = "1";
var AUTHORITY_METADATA_CACHE_KEY = "authority-metadata";
var AUTHORITY_METADATA_REFRESH_TIME_SECONDS = 3600 * 24;
var AuthorityMetadataSource = {
  CONFIG: "config",
  CACHE: "cache",
  NETWORK: "network",
  HARDCODED_VALUES: "hardcoded_values"
};
var SERVER_TELEM_SCHEMA_VERSION = 5;
var SERVER_TELEM_MAX_CUR_HEADER_BYTES = 80;
var SERVER_TELEM_MAX_LAST_HEADER_BYTES = 330;
var SERVER_TELEM_MAX_CACHED_ERRORS = 50;
var SERVER_TELEM_CACHE_KEY = "server-telemetry";
var SERVER_TELEM_CATEGORY_SEPARATOR = "|";
var SERVER_TELEM_VALUE_SEPARATOR = ",";
var SERVER_TELEM_OVERFLOW_TRUE = "1";
var SERVER_TELEM_OVERFLOW_FALSE = "0";
var SERVER_TELEM_UNKNOWN_ERROR = "unknown_error";
var AuthenticationScheme = {
  BEARER: "Bearer",
  POP: "pop",
  DPOP: "DPoP",
  SSH: "ssh-cert"
};
var DEFAULT_THROTTLE_TIME_SECONDS = 60;
var DEFAULT_MAX_THROTTLE_TIME_SECONDS = 3600;
var THROTTLING_PREFIX = "throttling";
var X_MS_LIB_CAPABILITY_VALUE = "retry-after, h429";
var INVALID_GRANT_ERROR = "invalid_grant";
var CLIENT_MISMATCH_ERROR = "client_mismatch";
var PasswordGrantConstants = {
  username: "username",
  password: "password"
};
var RegionDiscoverySources = {
  FAILED_AUTO_DETECTION: "1",
  INTERNAL_CACHE: "2",
  ENVIRONMENT_VARIABLE: "3",
  IMDS: "4"
};
var RegionDiscoveryOutcomes = {
  CONFIGURED_MATCHES_DETECTED: "1",
  CONFIGURED_NO_AUTO_DETECTION: "2",
  CONFIGURED_NOT_DETECTED: "3",
  AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4",
  AUTO_DETECTION_REQUESTED_FAILED: "5"
};
var CacheOutcome = {
  // When a token is found in the cache or the cache is not supposed to be hit when making the request
  NOT_APPLICABLE: "0",
  // When the token request goes to the identity provider because force_refresh was set to true. Also occurs if claims were requested
  FORCE_REFRESH_OR_CLAIMS: "1",
  // When the token request goes to the identity provider because no cached access token exists
  NO_CACHED_ACCESS_TOKEN: "2",
  // When the token request goes to the identity provider because cached access token expired
  CACHED_ACCESS_TOKEN_EXPIRED: "3",
  // When the token request goes to the identity provider because refresh_in was used and the existing token needs to be refreshed
  PROACTIVELY_REFRESHED: "4"
};
var JsonWebTokenTypes = {
  Jwt: "JWT",
  Jwk: "JWK",
  Pop: "pop",
  Dpop: "dpop+jwt"
};
var ONE_DAY_IN_MS = 864e5;
var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
var EncodingTypes = {
  BASE64: "base64",
  HEX: "hex",
  UTF8: "utf-8"
};

// node_modules/@azure/msal-common/dist-browser/error/AuthError.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function getDefaultErrorMessage(code) {
  return `See https://aka.ms/msal.js.errors#${code} for details`;
}
var AuthError = class _AuthError extends Error {
  constructor(errorCode, correlationId, errorMessage, suberror) {
    const message = errorMessage || (errorCode ? getDefaultErrorMessage(errorCode) : "");
    const errorString = message ? `${errorCode}: ${message}` : errorCode;
    super(errorString);
    Object.setPrototypeOf(this, _AuthError.prototype);
    this.errorCode = errorCode || "";
    this.errorMessage = message || "";
    this.subError = suberror || "";
    this.correlationId = correlationId;
    this.name = "AuthError";
  }
};
function createAuthError(code, correlationId, additionalMessage) {
  return new AuthError(code, correlationId, additionalMessage || getDefaultErrorMessage(code));
}

// node_modules/@azure/msal-common/dist-browser/error/ClientAuthError.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var ClientAuthError = class _ClientAuthError extends AuthError {
  constructor(errorCode, correlationId, additionalMessage) {
    super(errorCode, correlationId, additionalMessage);
    this.name = "ClientAuthError";
    Object.setPrototypeOf(this, _ClientAuthError.prototype);
  }
};
function createClientAuthError(errorCode, correlationId, additionalMessage) {
  return new ClientAuthError(errorCode, correlationId, additionalMessage);
}

// node_modules/@azure/msal-common/dist-browser/error/ClientAuthErrorCodes.mjs
var ClientAuthErrorCodes_exports = {};
__export(ClientAuthErrorCodes_exports, {
  authorizationCodeMissingFromServerResponse: () => authorizationCodeMissingFromServerResponse,
  bindingKeyNotRemoved: () => bindingKeyNotRemoved,
  cannotAppendScopeSet: () => cannotAppendScopeSet,
  cannotRemoveEmptyScope: () => cannotRemoveEmptyScope,
  clientInfoDecodingError: () => clientInfoDecodingError,
  clientInfoEmptyError: () => clientInfoEmptyError,
  dpopTokenTypeMismatch: () => dpopTokenTypeMismatch,
  emptyInputScopeSet: () => emptyInputScopeSet,
  endSessionEndpointNotSupported: () => endSessionEndpointNotSupported,
  endpointResolutionError: () => endpointResolutionError,
  hashNotDeserialized: () => hashNotDeserialized,
  invalidCacheEnvironment: () => invalidCacheEnvironment,
  invalidCacheRecord: () => invalidCacheRecord,
  invalidState: () => invalidState,
  keyIdMissing: () => keyIdMissing,
  methodNotImplemented: () => methodNotImplemented,
  misplacedResourceParam: () => misplacedResourceParam,
  multipleMatchingAppMetadata: () => multipleMatchingAppMetadata,
  multipleMatchingTokens: () => multipleMatchingTokens,
  nestedAppAuthBridgeDisabled: () => nestedAppAuthBridgeDisabled,
  networkError: () => networkError,
  noAccountFound: () => noAccountFound,
  noAccountInSilentRequest: () => noAccountInSilentRequest,
  noCryptoObject: () => noCryptoObject,
  noNetworkConnectivity: () => noNetworkConnectivity,
  nonceMismatch: () => nonceMismatch,
  nullOrEmptyToken: () => nullOrEmptyToken,
  openIdConfigError: () => openIdConfigError,
  platformBrokerError: () => platformBrokerError,
  requestCannotBeMade: () => requestCannotBeMade,
  resourceParameterRequired: () => resourceParameterRequired,
  stateMismatch: () => stateMismatch,
  stateNotFound: () => stateNotFound,
  tokenClaimsCnfRequiredForSignedJwt: () => tokenClaimsCnfRequiredForSignedJwt,
  tokenParsingError: () => tokenParsingError,
  tokenRefreshRequired: () => tokenRefreshRequired,
  unexpectedCredentialType: () => unexpectedCredentialType,
  userCanceled: () => userCanceled
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
var clientInfoDecodingError = "client_info_decoding_error";
var clientInfoEmptyError = "client_info_empty_error";
var tokenParsingError = "token_parsing_error";
var nullOrEmptyToken = "null_or_empty_token";
var endpointResolutionError = "endpoints_resolution_error";
var networkError = "network_error";
var openIdConfigError = "openid_config_error";
var hashNotDeserialized = "hash_not_deserialized";
var invalidState = "invalid_state";
var stateMismatch = "state_mismatch";
var stateNotFound = "state_not_found";
var nonceMismatch = "nonce_mismatch";
var multipleMatchingTokens = "multiple_matching_tokens";
var multipleMatchingAppMetadata = "multiple_matching_appMetadata";
var requestCannotBeMade = "request_cannot_be_made";
var cannotRemoveEmptyScope = "cannot_remove_empty_scope";
var cannotAppendScopeSet = "cannot_append_scopeset";
var emptyInputScopeSet = "empty_input_scopeset";
var noAccountInSilentRequest = "no_account_in_silent_request";
var invalidCacheRecord = "invalid_cache_record";
var invalidCacheEnvironment = "invalid_cache_environment";
var noAccountFound = "no_account_found";
var noCryptoObject = "no_crypto_object";
var unexpectedCredentialType = "unexpected_credential_type";
var dpopTokenTypeMismatch = "dpop_token_type_mismatch";
var tokenRefreshRequired = "token_refresh_required";
var tokenClaimsCnfRequiredForSignedJwt = "token_claims_cnf_required_for_signedjwt";
var authorizationCodeMissingFromServerResponse = "authorization_code_missing_from_server_response";
var bindingKeyNotRemoved = "binding_key_not_removed";
var endSessionEndpointNotSupported = "end_session_endpoint_not_supported";
var keyIdMissing = "key_id_missing";
var noNetworkConnectivity = "no_network_connectivity";
var userCanceled = "user_canceled";
var methodNotImplemented = "method_not_implemented";
var nestedAppAuthBridgeDisabled = "nested_app_auth_bridge_disabled";
var platformBrokerError = "platform_broker_error";
var resourceParameterRequired = "resource_parameter_required";
var misplacedResourceParam = "misplaced_resource_parameter";

// node_modules/@azure/msal-common/dist-browser/account/ClientInfo.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function buildClientInfo(rawClientInfo, base64Decode2) {
  if (!rawClientInfo) {
    throw createClientAuthError(clientInfoEmptyError, "");
  }
  try {
    const decodedClientInfo = base64Decode2(rawClientInfo);
    return JSON.parse(decodedClientInfo);
  } catch (e) {
    throw createClientAuthError(clientInfoDecodingError, "");
  }
}
function buildClientInfoFromHomeAccountId(homeAccountId) {
  if (!homeAccountId) {
    throw createClientAuthError(clientInfoDecodingError, "");
  }
  const clientInfoParts = homeAccountId.split(CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: clientInfoParts[0],
    utid: clientInfoParts.length < 2 ? "" : clientInfoParts[1]
  };
}

// node_modules/@azure/msal-common/dist-browser/account/AuthToken.mjs
var AuthToken_exports = {};
__export(AuthToken_exports, {
  extractTokenClaims: () => extractTokenClaims,
  getJWSPayload: () => getJWSPayload,
  isKmsi: () => isKmsi
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
function extractTokenClaims(encodedToken, base64Decode2, correlationId) {
  const jswPayload = getJWSPayload(encodedToken, correlationId);
  try {
    const base64Decoded = base64Decode2(jswPayload);
    return JSON.parse(base64Decoded);
  } catch (err) {
    throw createClientAuthError(tokenParsingError, correlationId);
  }
}
function isKmsi(idTokenClaims) {
  if (!idTokenClaims.signin_state) {
    return false;
  }
  const kmsiClaims = ["kmsi", "dvc_dmjd"];
  return idTokenClaims.signin_state.some((value) => kmsiClaims.includes(value.trim().toLowerCase()));
}
function getJWSPayload(authToken, correlationId) {
  if (!authToken) {
    throw createClientAuthError(nullOrEmptyToken, correlationId);
  }
  const tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
  const matches = tokenPartsRegex.exec(authToken);
  if (!matches || matches.length < 4) {
    throw createClientAuthError(tokenParsingError, correlationId);
  }
  return matches[2];
}

// node_modules/@azure/msal-common/dist-browser/account/AccountInfo.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function tenantIdMatchesHomeTenant(tenantId, homeAccountId) {
  return !!tenantId && !!homeAccountId && tenantId === homeAccountId.split(".")[1];
}
function buildTenantProfile(homeAccountId, localAccountId, tenantId, nativeAccountId, idTokenClaims) {
  if (idTokenClaims) {
    const { oid, sub, tid, name: name3, tfp, acr, preferred_username, upn, login_hint } = idTokenClaims;
    const tenantId2 = tid || tfp || acr || "";
    return __spreadValues({
      tenantId: tenantId2,
      localAccountId: oid || sub || "",
      name: name3,
      username: preferred_username || upn || "",
      loginHint: login_hint,
      isHomeTenant: tenantIdMatchesHomeTenant(tenantId2, homeAccountId),
      upn
    }, nativeAccountId && { nativeAccountId });
  } else {
    return __spreadValues({
      tenantId,
      localAccountId,
      username: "",
      isHomeTenant: tenantIdMatchesHomeTenant(tenantId, homeAccountId)
    }, nativeAccountId && { nativeAccountId });
  }
}
function updateAccountTenantProfileData(baseAccountInfo, tenantProfile, idTokenClaims, idTokenSecret) {
  let updatedAccountInfo = baseAccountInfo;
  if (tenantProfile) {
    const _a = tenantProfile, { isHomeTenant } = _a, tenantProfileOverride = __objRest(_a, ["isHomeTenant"]);
    updatedAccountInfo = __spreadValues(__spreadValues({}, baseAccountInfo), tenantProfileOverride);
  }
  if (idTokenClaims) {
    const _b = buildTenantProfile(baseAccountInfo.homeAccountId, baseAccountInfo.localAccountId, baseAccountInfo.tenantId, updatedAccountInfo.nativeAccountId, idTokenClaims), { isHomeTenant } = _b, claimsSourcedTenantProfile = __objRest(_b, ["isHomeTenant"]);
    updatedAccountInfo = __spreadProps(__spreadValues(__spreadValues({}, updatedAccountInfo), claimsSourcedTenantProfile), {
      idTokenClaims,
      idToken: idTokenSecret,
      kmsi: isKmsi(idTokenClaims)
    });
    return updatedAccountInfo;
  }
  return updatedAccountInfo;
}

// node_modules/@azure/msal-common/dist-browser/authority/AuthorityType.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var AuthorityType = {
  Default: 0,
  Adfs: 1,
  Ciam: 3
};

// node_modules/@azure/msal-common/dist-browser/account/TokenClaims.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function getTenantIdFromIdTokenClaims(idTokenClaims) {
  if (idTokenClaims) {
    const tenantId = idTokenClaims.tid || idTokenClaims.tfp || idTokenClaims.acr;
    return tenantId || null;
  }
  return null;
}

// node_modules/@azure/msal-common/dist-browser/authority/ProtocolMode.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var ProtocolMode = {
  /**
   * Auth Code + PKCE with Entra ID (formerly AAD) specific optimizations and features
   */
  AAD: "AAD",
  /**
   * Auth Code + PKCE without Entra ID specific optimizations and features. For use only with non-Microsoft owned authorities.
   * Support is limited for this mode.
   */
  OIDC: "OIDC",
  /**
   * Encrypted Authorize Response (EAR) with Entra ID specific optimizations and features
   */
  EAR: "EAR"
};

// node_modules/@azure/msal-common/dist-browser/cache/utils/AccountEntityUtils.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function generateAccountId(accountEntity) {
  const accountId = [
    accountEntity.homeAccountId,
    accountEntity.environment
  ];
  return accountId.join(CACHE_KEY_SEPARATOR).toLowerCase();
}
function getAccountInfo(accountEntity) {
  const tenantProfiles = accountEntity.tenantProfiles || [];
  if (tenantProfiles.length === 0 && accountEntity.realm && accountEntity.localAccountId) {
    tenantProfiles.push(buildTenantProfile(accountEntity.homeAccountId, accountEntity.localAccountId, accountEntity.realm, accountEntity.nativeAccountId));
  }
  const homeTenantProfile = tenantProfiles.find((tp) => tp.tenantId === accountEntity.realm);
  const nativeAccountId = homeTenantProfile?.nativeAccountId || accountEntity.nativeAccountId;
  return {
    homeAccountId: accountEntity.homeAccountId,
    environment: accountEntity.environment,
    tenantId: accountEntity.realm,
    username: accountEntity.username,
    localAccountId: accountEntity.localAccountId,
    loginHint: accountEntity.loginHint,
    name: accountEntity.name,
    nativeAccountId,
    authorityType: accountEntity.authorityType,
    // Deserialize tenant profiles array into a Map
    tenantProfiles: new Map(tenantProfiles.map((tenantProfile) => {
      return [tenantProfile.tenantId, tenantProfile];
    })),
    dataBoundary: accountEntity.dataBoundary
  };
}
function isSingleTenant(accountEntity) {
  return !accountEntity.tenantProfiles;
}
function createAccountEntity(accountDetails, authority, correlationId, base64Decode2) {
  let authorityType;
  if (authority.authorityType === AuthorityType.Adfs) {
    authorityType = CACHE_ACCOUNT_TYPE_ADFS;
  } else if (authority.protocolMode === ProtocolMode.OIDC) {
    authorityType = CACHE_ACCOUNT_TYPE_GENERIC;
  } else {
    authorityType = CACHE_ACCOUNT_TYPE_MSSTS;
  }
  let clientInfo;
  let dataBoundary;
  if (accountDetails.clientInfo && base64Decode2) {
    clientInfo = buildClientInfo(accountDetails.clientInfo, base64Decode2);
    if (clientInfo.xms_tdbr) {
      dataBoundary = clientInfo.xms_tdbr === "EU" ? "EU" : "None";
    }
  }
  const env = accountDetails.environment || authority && authority.getPreferredCache();
  if (!env) {
    throw createClientAuthError(invalidCacheEnvironment, correlationId);
  }
  const preferredUsername = accountDetails.idTokenClaims?.preferred_username || accountDetails.idTokenClaims?.upn;
  const email = accountDetails.idTokenClaims?.emails ? accountDetails.idTokenClaims.emails[0] : null;
  const username = preferredUsername || email || "";
  const loginHint = accountDetails.idTokenClaims?.login_hint;
  const realm = clientInfo?.utid || getTenantIdFromIdTokenClaims(accountDetails.idTokenClaims) || "";
  const localAccountId = clientInfo?.uid || accountDetails.idTokenClaims?.oid || accountDetails.idTokenClaims?.sub || "";
  let tenantProfiles;
  if (accountDetails.tenantProfiles) {
    tenantProfiles = accountDetails.tenantProfiles;
  } else {
    const tenantProfile = buildTenantProfile(accountDetails.homeAccountId, localAccountId, realm, accountDetails.nativeAccountId, accountDetails.idTokenClaims);
    tenantProfiles = [tenantProfile];
  }
  return {
    homeAccountId: accountDetails.homeAccountId,
    environment: env,
    realm,
    localAccountId,
    username,
    authorityType,
    loginHint,
    clientInfo: accountDetails.clientInfo,
    name: accountDetails.idTokenClaims?.name || "",
    lastModificationTime: void 0,
    lastModificationApp: void 0,
    cloudGraphHostName: accountDetails.cloudGraphHostName,
    msGraphHost: accountDetails.msGraphHost,
    nativeAccountId: accountDetails.nativeAccountId,
    tenantProfiles,
    dataBoundary
  };
}
function createAccountEntityFromAccountInfo(accountInfo, cloudGraphHostName, msGraphHost) {
  const tenantProfiles = Array.from(accountInfo.tenantProfiles?.values() || []);
  if (tenantProfiles.length === 0 && accountInfo.tenantId && accountInfo.localAccountId) {
    tenantProfiles.push(buildTenantProfile(accountInfo.homeAccountId, accountInfo.localAccountId, accountInfo.tenantId, accountInfo.nativeAccountId, accountInfo.idTokenClaims));
  } else if (accountInfo.nativeAccountId) {
    const matchingProfile = tenantProfiles.find((tp) => tp.tenantId === accountInfo.tenantId);
    if (matchingProfile && !matchingProfile.nativeAccountId) {
      matchingProfile.nativeAccountId = accountInfo.nativeAccountId;
    }
  }
  return {
    authorityType: accountInfo.authorityType || CACHE_ACCOUNT_TYPE_GENERIC,
    homeAccountId: accountInfo.homeAccountId,
    localAccountId: accountInfo.localAccountId,
    nativeAccountId: accountInfo.nativeAccountId,
    realm: accountInfo.tenantId,
    environment: accountInfo.environment,
    username: accountInfo.username,
    loginHint: accountInfo.loginHint,
    name: accountInfo.name,
    cloudGraphHostName,
    msGraphHost,
    tenantProfiles,
    dataBoundary: accountInfo.dataBoundary
  };
}
function generateHomeAccountId(serverClientInfo, authType, logger, cryptoObj, correlationId, idTokenClaims) {
  if (authType !== AuthorityType.Adfs) {
    if (serverClientInfo) {
      try {
        const clientInfo = buildClientInfo(serverClientInfo, cryptoObj.base64Decode);
        if (clientInfo.uid && clientInfo.utid) {
          return `${clientInfo.uid}.${clientInfo.utid}`;
        }
      } catch (e) {
      }
    }
    logger.warning("1ub6wv", correlationId);
  }
  return idTokenClaims?.sub || "";
}
function isAccountEntity(entity) {
  if (!entity) {
    return false;
  }
  return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("realm") && entity.hasOwnProperty("localAccountId") && entity.hasOwnProperty("username") && entity.hasOwnProperty("authorityType");
}

// node_modules/@azure/msal-common/dist-browser/error/AuthErrorCodes.mjs
var AuthErrorCodes_exports = {};
__export(AuthErrorCodes_exports, {
  postRequestFailed: () => postRequestFailed,
  unexpectedError: () => unexpectedError
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
var unexpectedError = "unexpected_error";
var postRequestFailed = "post_request_failed";

// node_modules/@azure/msal-common/dist-browser/error/ClientConfigurationError.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var ClientConfigurationError = class _ClientConfigurationError extends AuthError {
  constructor(errorCode, correlationId) {
    super(errorCode, correlationId);
    this.name = "ClientConfigurationError";
    Object.setPrototypeOf(this, _ClientConfigurationError.prototype);
  }
};
function createClientConfigurationError(errorCode, correlationId) {
  return new ClientConfigurationError(errorCode, correlationId);
}

// node_modules/@azure/msal-common/dist-browser/error/ClientConfigurationErrorCodes.mjs
var ClientConfigurationErrorCodes_exports = {};
__export(ClientConfigurationErrorCodes_exports, {
  authorityMismatch: () => authorityMismatch,
  authorityUriInsecure: () => authorityUriInsecure,
  cannotAllowPlatformBroker: () => cannotAllowPlatformBroker,
  cannotSetOIDCOptions: () => cannotSetOIDCOptions,
  claimsRequestParsingError: () => claimsRequestParsingError,
  dpopMissingResourceContext: () => dpopMissingResourceContext,
  emptyInputScopesError: () => emptyInputScopesError,
  invalidAuthenticationHeader: () => invalidAuthenticationHeader,
  invalidAuthorityMetadata: () => invalidAuthorityMetadata,
  invalidClaims: () => invalidClaims,
  invalidCloudDiscoveryMetadata: () => invalidCloudDiscoveryMetadata,
  invalidCodeChallengeMethod: () => invalidCodeChallengeMethod,
  invalidDpopHtm: () => invalidDpopHtm,
  invalidDpopHtu: () => invalidDpopHtu,
  invalidDpopNonce: () => invalidDpopNonce,
  invalidPlatformBrokerConfiguration: () => invalidPlatformBrokerConfiguration,
  invalidRequestMethodForEAR: () => invalidRequestMethodForEAR,
  invalidResponseMode: () => invalidResponseMode,
  issuerValidationFailed: () => issuerValidationFailed,
  logoutRequestEmpty: () => logoutRequestEmpty,
  missingNonceAuthenticationHeader: () => missingNonceAuthenticationHeader,
  missingSshJwk: () => missingSshJwk,
  missingSshKid: () => missingSshKid,
  pkceParamsMissing: () => pkceParamsMissing,
  redirectUriEmpty: () => redirectUriEmpty,
  tokenRequestEmpty: () => tokenRequestEmpty,
  unsupportedAuthenticationScheme: () => unsupportedAuthenticationScheme,
  untrustedAuthority: () => untrustedAuthority,
  urlEmptyError: () => urlEmptyError,
  urlParseError: () => urlParseError
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
var redirectUriEmpty = "redirect_uri_empty";
var claimsRequestParsingError = "claims_request_parsing_error";
var authorityUriInsecure = "authority_uri_insecure";
var urlParseError = "url_parse_error";
var urlEmptyError = "empty_url_error";
var emptyInputScopesError = "empty_input_scopes_error";
var invalidClaims = "invalid_claims";
var tokenRequestEmpty = "token_request_empty";
var logoutRequestEmpty = "logout_request_empty";
var invalidCodeChallengeMethod = "invalid_code_challenge_method";
var pkceParamsMissing = "pkce_params_missing";
var invalidCloudDiscoveryMetadata = "invalid_cloud_discovery_metadata";
var invalidAuthorityMetadata = "invalid_authority_metadata";
var untrustedAuthority = "untrusted_authority";
var missingSshJwk = "missing_ssh_jwk";
var missingSshKid = "missing_ssh_kid";
var unsupportedAuthenticationScheme = "unsupported_authentication_scheme";
var missingNonceAuthenticationHeader = "missing_nonce_authentication_header";
var invalidAuthenticationHeader = "invalid_authentication_header";
var cannotSetOIDCOptions = "cannot_set_OIDCOptions";
var cannotAllowPlatformBroker = "cannot_allow_platform_broker";
var authorityMismatch = "authority_mismatch";
var invalidRequestMethodForEAR = "invalid_request_method_for_EAR";
var invalidPlatformBrokerConfiguration = "invalid_platform_broker_configuration";
var issuerValidationFailed = "issuer_validation_failed";
var invalidResponseMode = "invalid_response_mode";
var invalidDpopHtm = "invalid_dpop_htm";
var invalidDpopHtu = "invalid_dpop_htu";
var invalidDpopNonce = "invalid_dpop_nonce";
var dpopMissingResourceContext = "dpop_missing_resource_context";

// node_modules/@azure/msal-common/dist-browser/request/AuthenticationHeaderParser.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var AuthenticationHeaderParser = class {
  constructor(headers) {
    this.headers = headers;
  }
  /**
   * This method parses the SHR nonce value out of either the Authentication-Info or WWW-Authenticate authentication headers.
   * @returns
   */
  getShrNonce() {
    const authenticationInfo = this.headers[HeaderNames.AuthenticationInfo];
    if (authenticationInfo) {
      const authenticationInfoChallenges = this.parseChallenges(authenticationInfo);
      if (authenticationInfoChallenges.nextnonce) {
        return authenticationInfoChallenges.nextnonce;
      }
      throw createClientConfigurationError(invalidAuthenticationHeader, "");
    }
    const wwwAuthenticate = this.headers[HeaderNames.WWWAuthenticate];
    if (wwwAuthenticate) {
      const wwwAuthenticateChallenges = this.parseChallenges(wwwAuthenticate);
      if (wwwAuthenticateChallenges.nonce) {
        return wwwAuthenticateChallenges.nonce;
      }
      throw createClientConfigurationError(invalidAuthenticationHeader, "");
    }
    throw createClientConfigurationError(missingNonceAuthenticationHeader, "");
  }
  /**
   * Parses an HTTP header's challenge set into a key/value map.
   * @param header
   * @returns
   */
  parseChallenges(header) {
    const schemeSeparator = header.indexOf(" ");
    const challenges = header.substr(schemeSeparator + 1).split(",");
    const challengeMap = {};
    challenges.forEach((challenge) => {
      const [key, value] = challenge.split("=");
      challengeMap[key] = unescape(value.replace(/['"]+/g, ""));
    });
    return challengeMap;
  }
};

// node_modules/@azure/msal-common/dist-browser/authority/OpenIdConfigResponse.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function isOpenIdConfigResponse(response) {
  return response.hasOwnProperty("authorization_endpoint") && response.hasOwnProperty("token_endpoint") && response.hasOwnProperty("issuer") && response.hasOwnProperty("jwks_uri");
}

// node_modules/@azure/msal-common/dist-browser/utils/StringUtils.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var StringUtils = class {
  /**
   * Check if stringified object is empty
   * @param strObj
   */
  static isEmptyObj(strObj) {
    if (strObj) {
      try {
        const obj = JSON.parse(strObj);
        return Object.keys(obj).length === 0;
      } catch (e) {
      }
    }
    return true;
  }
  static startsWith(str, search) {
    return str.indexOf(search) === 0;
  }
  static endsWith(str, search) {
    return str.length >= search.length && str.lastIndexOf(search) === str.length - search.length;
  }
  /**
   * Parses string into an object.
   *
   * @param query
   */
  static queryStringToObject(query) {
    const obj = {};
    const params = query.split("&");
    const decode = (s) => decodeURIComponent(s.replace(/\+/g, " "));
    params.forEach((pair) => {
      if (pair.trim()) {
        const [key, value] = pair.split(/=(.+)/g, 2);
        if (key && value) {
          obj[decode(key)] = decode(value);
        }
      }
    });
    return obj;
  }
  /**
   * Trims entries in an array.
   *
   * @param arr
   */
  static trimArrayEntries(arr) {
    return arr.map((entry) => entry.trim());
  }
  /**
   * Removes empty strings from array
   * @param arr
   */
  static removeEmptyStringsFromArray(arr) {
    return arr.filter((entry) => {
      return !!entry;
    });
  }
  /**
   * Attempts to parse a string into JSON
   * @param str
   */
  static jsonParseHelper(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return null;
    }
  }
};

// node_modules/@azure/msal-common/dist-browser/url/UrlString.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var UrlString = class _UrlString {
  get urlString() {
    return this._urlString;
  }
  constructor(url, correlationId) {
    this._urlString = url;
    this.correlationId = correlationId;
    if (!this._urlString) {
      throw createClientConfigurationError(urlEmptyError, correlationId);
    }
    if (!url.includes("#")) {
      this._urlString = _UrlString.canonicalizeUri(url);
    }
  }
  /**
   * Ensure urls are lower case and end with a / character.
   * @param url
   */
  static canonicalizeUri(url) {
    if (url) {
      let lowerCaseUrl = url.toLowerCase();
      if (StringUtils.endsWith(lowerCaseUrl, "?")) {
        lowerCaseUrl = lowerCaseUrl.slice(0, -1);
      } else if (StringUtils.endsWith(lowerCaseUrl, "?/")) {
        lowerCaseUrl = lowerCaseUrl.slice(0, -2);
      }
      if (!StringUtils.endsWith(lowerCaseUrl, "/")) {
        lowerCaseUrl += "/";
      }
      return lowerCaseUrl;
    }
    return url;
  }
  /**
   * Throws if urlString passed is not a valid authority URI string.
   */
  validateAsUri() {
    let components;
    try {
      components = this.getUrlComponents();
    } catch (e) {
      throw createClientConfigurationError(urlParseError, this.correlationId);
    }
    if (!components.HostNameAndPort || !components.PathSegments) {
      throw createClientConfigurationError(urlParseError, this.correlationId);
    }
    if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
      throw createClientConfigurationError(authorityUriInsecure, this.correlationId);
    }
  }
  /**
   * Given a url and a query string return the url with provided query string appended
   * @param url
   * @param queryString
   */
  static appendQueryString(url, queryString) {
    if (!queryString) {
      return url;
    }
    return url.indexOf("?") < 0 ? `${url}?${queryString}` : `${url}&${queryString}`;
  }
  /**
   * Returns a url with the hash removed
   * @param url
   */
  static removeHashFromUrl(url) {
    return _UrlString.canonicalizeUri(url.split("#")[0]);
  }
  /**
   * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
   * @param href The url
   * @param tenantId The tenant id to replace
   */
  replaceTenantPath(tenantId) {
    const urlObject = this.getUrlComponents();
    const pathArray = urlObject.PathSegments;
    if (tenantId && pathArray.length !== 0 && (pathArray[0] === AADAuthority.COMMON || pathArray[0] === AADAuthority.ORGANIZATIONS)) {
      pathArray[0] = tenantId;
    }
    return _UrlString.constructAuthorityUriFromObject(urlObject, this.correlationId);
  }
  /**
   * Parses out the components from a url string.
   * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
   */
  getUrlComponents() {
    const regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
    const match = this.urlString.match(regEx);
    if (!match) {
      throw createClientConfigurationError(urlParseError, this.correlationId);
    }
    const urlComponents = {
      Protocol: match[1],
      HostNameAndPort: match[4],
      AbsolutePath: match[5],
      QueryString: match[7]
    };
    let pathSegments = urlComponents.AbsolutePath.split("/");
    pathSegments = pathSegments.filter((val) => val && val.length > 0);
    urlComponents.PathSegments = pathSegments;
    if (urlComponents.QueryString && urlComponents.QueryString.endsWith("/")) {
      urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
    }
    return urlComponents;
  }
  static getDomainFromUrl(url, correlationId) {
    const regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
    const match = url.match(regEx);
    if (!match) {
      throw createClientConfigurationError(urlParseError, correlationId);
    }
    return match[2];
  }
  static getAbsoluteUrl(relativeUrl, baseUrl, correlationId) {
    if (relativeUrl[0] === FORWARD_SLASH) {
      const url = new _UrlString(baseUrl, correlationId);
      const baseComponents = url.getUrlComponents();
      return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
    }
    return relativeUrl;
  }
  static constructAuthorityUriFromObject(urlObject, correlationId) {
    return new _UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"), correlationId);
  }
};

// node_modules/@azure/msal-common/dist-browser/authority/AuthorityMetadata.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var endpointHosts = [
  { host: "login.microsoftonline.com" },
  { host: "login.partner.microsoftonline.cn" },
  { host: "login.microsoftonline.us" },
  { host: "login.sovcloud-identity.fr" },
  { host: "login.sovcloud-identity.de" },
  { host: "login.sovcloud-identity.sg" }
];
function buildOpenIdConfig(host, issuerHost) {
  return {
    token_endpoint: `https://${host}/{tenantid}/oauth2/v2.0/token`,
    jwks_uri: `https://${host}/{tenantid}/discovery/v2.0/keys`,
    issuer: `https://${issuerHost}/{tenantid}/v2.0`,
    authorization_endpoint: `https://${host}/{tenantid}/oauth2/v2.0/authorize`,
    end_session_endpoint: `https://${host}/{tenantid}/oauth2/v2.0/logout`
  };
}
var dynamicEndpointMetadata = endpointHosts.reduce((acc, { host, issuerHost }) => {
  acc[host] = buildOpenIdConfig(host, issuerHost || host);
  return acc;
}, {});
var rawMetdataJSON = {
  endpointMetadata: dynamicEndpointMetadata,
  instanceDiscoveryMetadata: {
    metadata: [
      {
        preferred_network: "login.microsoftonline.com",
        preferred_cache: "login.windows.net",
        aliases: [
          "login.microsoftonline.com",
          "login.windows.net",
          "login.microsoft.com",
          "sts.windows.net"
        ]
      },
      {
        preferred_network: "login.partner.microsoftonline.cn",
        preferred_cache: "login.partner.microsoftonline.cn",
        aliases: [
          "login.partner.microsoftonline.cn",
          "login.chinacloudapi.cn"
        ]
      },
      {
        preferred_network: "login.microsoftonline.de",
        preferred_cache: "login.microsoftonline.de",
        aliases: ["login.microsoftonline.de"]
      },
      {
        preferred_network: "login.microsoftonline.us",
        preferred_cache: "login.microsoftonline.us",
        aliases: [
          "login.microsoftonline.us",
          "login.usgovcloudapi.net"
        ]
      },
      {
        preferred_network: "login-us.microsoftonline.com",
        preferred_cache: "login-us.microsoftonline.com",
        aliases: ["login-us.microsoftonline.com"]
      },
      {
        preferred_network: "login.sovcloud-identity.fr",
        preferred_cache: "login.sovcloud-identity.fr",
        aliases: ["login.sovcloud-identity.fr"]
      },
      {
        preferred_network: "login.sovcloud-identity.de",
        preferred_cache: "login.sovcloud-identity.de",
        aliases: ["login.sovcloud-identity.de"]
      },
      {
        preferred_network: "login.sovcloud-identity.sg",
        preferred_cache: "login.sovcloud-identity.sg",
        aliases: ["login.sovcloud-identity.sg"]
      }
    ]
  }
};
var EndpointMetadata = rawMetdataJSON.endpointMetadata;
var InstanceDiscoveryMetadata = rawMetdataJSON.instanceDiscoveryMetadata;
var InstanceDiscoveryMetadataAliases = /* @__PURE__ */ new Set();
InstanceDiscoveryMetadata.metadata.forEach((metadataEntry) => {
  metadataEntry.aliases.forEach((alias) => {
    InstanceDiscoveryMetadataAliases.add(alias);
  });
});
function getAliasesFromStaticSources(staticAuthorityOptions, logger, correlationId) {
  let staticAliases;
  const canonicalAuthority = staticAuthorityOptions.canonicalAuthority;
  if (canonicalAuthority) {
    const authorityHost = new UrlString(canonicalAuthority, correlationId).getUrlComponents().HostNameAndPort;
    staticAliases = getAliasesFromMetadata(logger, correlationId, authorityHost, staticAuthorityOptions.cloudDiscoveryMetadata?.metadata, AuthorityMetadataSource.CONFIG) || getAliasesFromMetadata(logger, correlationId, authorityHost, InstanceDiscoveryMetadata.metadata, AuthorityMetadataSource.HARDCODED_VALUES) || staticAuthorityOptions.knownAuthorities;
  }
  return staticAliases || [];
}
function getAliasesFromMetadata(logger, correlationId, authorityHost, cloudDiscoveryMetadata, source) {
  logger.trace(`1bmquz ${source}`, correlationId);
  if (authorityHost && cloudDiscoveryMetadata) {
    const metadata = getCloudDiscoveryMetadataFromNetworkResponse(cloudDiscoveryMetadata, authorityHost);
    if (metadata) {
      logger.trace(`1fotbt ${source}`, correlationId);
      return metadata.aliases;
    } else {
      logger.trace(`14avvj ${source}`, correlationId);
    }
  }
  return null;
}
function getCloudDiscoveryMetadataFromHardcodedValues(authorityHost) {
  const metadata = getCloudDiscoveryMetadataFromNetworkResponse(InstanceDiscoveryMetadata.metadata, authorityHost);
  return metadata;
}
function getCloudDiscoveryMetadataFromNetworkResponse(response, authorityHost) {
  for (let i = 0; i < response.length; i++) {
    const metadata = response[i];
    if (metadata.aliases.includes(authorityHost)) {
      return metadata;
    }
  }
  return null;
}

// node_modules/@azure/msal-common/dist-browser/authority/AuthorityOptions.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var AzureCloudInstance = {
  // AzureCloudInstance is not specified.
  None: "none",
  // Microsoft Azure public cloud
  AzurePublic: "https://login.microsoftonline.com",
  // Microsoft Chinese national/regional cloud
  AzureChina: "https://login.chinacloudapi.cn",
  // Microsoft German national/regional cloud ("Black Forest")
  AzureGermany: "https://login.microsoftonline.de",
  // US Government cloud
  AzureUsGovernment: "https://login.microsoftonline.us"
};

// node_modules/@azure/msal-common/dist-browser/authority/CloudInstanceDiscoveryResponse.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function isCloudInstanceDiscoveryResponse(response) {
  return response.hasOwnProperty("tenant_discovery_endpoint") && response.hasOwnProperty("metadata");
}

// node_modules/@azure/msal-common/dist-browser/authority/CloudInstanceDiscoveryErrorResponse.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function isCloudInstanceDiscoveryErrorResponse(response) {
  return response.hasOwnProperty("error") && response.hasOwnProperty("error_description");
}

// node_modules/@azure/msal-common/dist-browser/telemetry/performance/PerformanceEvents.mjs
var PerformanceEvents_exports = {};
__export(PerformanceEvents_exports, {
  AuthClientCreateTokenRequestBody: () => AuthClientCreateTokenRequestBody,
  AuthClientExecuteTokenRequest: () => AuthClientExecuteTokenRequest,
  AuthorityGetCloudDiscoveryMetadataFromNetwork: () => AuthorityGetCloudDiscoveryMetadataFromNetwork,
  AuthorityGetEndpointMetadataFromNetwork: () => AuthorityGetEndpointMetadataFromNetwork,
  AuthorityResolveEndpointsAsync: () => AuthorityResolveEndpointsAsync,
  AuthorityUpdateCloudDiscoveryMetadata: () => AuthorityUpdateCloudDiscoveryMetadata,
  AuthorityUpdateEndpointMetadata: () => AuthorityUpdateEndpointMetadata,
  AuthorityUpdateMetadataWithRegionalInformation: () => AuthorityUpdateMetadataWithRegionalInformation,
  AuthorizationCodeClientExecutePostToTokenEndpoint: () => AuthorizationCodeClientExecutePostToTokenEndpoint,
  CacheManagerGetRefreshToken: () => CacheManagerGetRefreshToken,
  GetAuthCodeUrl: () => GetAuthCodeUrl,
  HandleCodeResponseFromServer: () => HandleCodeResponseFromServer,
  HandleServerTokenResponse: () => HandleServerTokenResponse,
  NetworkClientSendPostRequestAsync: () => NetworkClientSendPostRequestAsync,
  PopTokenGenerateCnf: () => PopTokenGenerateCnf,
  RefreshTokenClientAcquireToken: () => RefreshTokenClientAcquireToken,
  RefreshTokenClientAcquireTokenWithCachedRefreshToken: () => RefreshTokenClientAcquireTokenWithCachedRefreshToken,
  RefreshTokenClientCreateTokenRequestBody: () => RefreshTokenClientCreateTokenRequestBody,
  RefreshTokenClientExecutePostToTokenEndpoint: () => RefreshTokenClientExecutePostToTokenEndpoint,
  RefreshTokenClientExecuteTokenRequest: () => RefreshTokenClientExecuteTokenRequest,
  RegionDiscoveryDetectRegion: () => RegionDiscoveryDetectRegion,
  RegionDiscoveryGetCurrentVersion: () => RegionDiscoveryGetCurrentVersion,
  RegionDiscoveryGetRegionFromIMDS: () => RegionDiscoveryGetRegionFromIMDS,
  SetUserData: () => SetUserData,
  SilentFlowClientGenerateResultFromCacheRecord: () => SilentFlowClientGenerateResultFromCacheRecord,
  UpdateTokenEndpointAuthority: () => UpdateTokenEndpointAuthority
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
var NetworkClientSendPostRequestAsync = "networkClientSendPostRequestAsync";
var RefreshTokenClientExecutePostToTokenEndpoint = "refreshTokenClientExecutePostToTokenEndpoint";
var AuthorizationCodeClientExecutePostToTokenEndpoint = "authorizationCodeClientExecutePostToTokenEndpoint";
var RefreshTokenClientExecuteTokenRequest = "refreshTokenClientExecuteTokenRequest";
var RefreshTokenClientAcquireToken = "refreshTokenClientAcquireToken";
var RefreshTokenClientAcquireTokenWithCachedRefreshToken = "refreshTokenClientAcquireTokenWithCachedRefreshToken";
var RefreshTokenClientCreateTokenRequestBody = "refreshTokenClientCreateTokenRequestBody";
var SilentFlowClientGenerateResultFromCacheRecord = "silentFlowClientGenerateResultFromCacheRecord";
var GetAuthCodeUrl = "getAuthCodeUrl";
var HandleCodeResponseFromServer = "handleCodeResponseFromServer";
var AuthClientExecuteTokenRequest = "authClientExecuteTokenRequest";
var AuthClientCreateTokenRequestBody = "authClientCreateTokenRequestBody";
var UpdateTokenEndpointAuthority = "updateTokenEndpointAuthority";
var PopTokenGenerateCnf = "popTokenGenerateCnf";
var HandleServerTokenResponse = "handleServerTokenResponse";
var AuthorityResolveEndpointsAsync = "authorityResolveEndpointsAsync";
var AuthorityGetCloudDiscoveryMetadataFromNetwork = "authorityGetCloudDiscoveryMetadataFromNetwork";
var AuthorityUpdateCloudDiscoveryMetadata = "authorityUpdateCloudDiscoveryMetadata";
var AuthorityGetEndpointMetadataFromNetwork = "authorityGetEndpointMetadataFromNetwork";
var AuthorityUpdateEndpointMetadata = "authorityUpdateEndpointMetadata";
var AuthorityUpdateMetadataWithRegionalInformation = "authorityUpdateMetadataWithRegionalInformation";
var RegionDiscoveryDetectRegion = "regionDiscoveryDetectRegion";
var RegionDiscoveryGetRegionFromIMDS = "regionDiscoveryGetRegionFromIMDS";
var RegionDiscoveryGetCurrentVersion = "regionDiscoveryGetCurrentVersion";
var CacheManagerGetRefreshToken = "cacheManagerGetRefreshToken";
var SetUserData = "setUserData";

// node_modules/@azure/msal-common/dist-browser/utils/FunctionWrappers.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var invoke = (callback, eventName, logger, telemetryClient, correlationId) => {
  return (...args) => {
    logger.trace(`1plfzx ${eventName}`, correlationId);
    const inProgressEvent = telemetryClient.startMeasurement(eventName, correlationId);
    if (correlationId) {
      telemetryClient.incrementFields({ [`ext.${eventName}CallCount`]: 1 }, correlationId);
    }
    try {
      const result = callback(...args);
      inProgressEvent.end({
        success: true
      });
      logger.trace(`1g8n6a ${eventName}`, correlationId);
      return result;
    } catch (e) {
      logger.trace(`0cfd8i ${eventName}`, correlationId);
      try {
        logger.trace(JSON.stringify(e), correlationId);
      } catch (e2) {
        logger.trace("00dty7", correlationId);
      }
      inProgressEvent.end({
        success: false
      }, e);
      throw e;
    }
  };
};
var invokeAsync = (callback, eventName, logger, telemetryClient, correlationId) => {
  return (...args) => {
    logger.trace(`1plfzx ${eventName}`, correlationId);
    const inProgressEvent = telemetryClient.startMeasurement(eventName, correlationId);
    if (correlationId) {
      telemetryClient.incrementFields({ [`ext.${eventName}CallCount`]: 1 }, correlationId);
    }
    return callback(...args).then((response) => {
      logger.trace(`1g8n6a ${eventName}`, correlationId);
      inProgressEvent.end({
        success: true
      });
      return response;
    }).catch((e) => {
      logger.trace(`0cfd8i ${eventName}`, correlationId);
      try {
        logger.trace(JSON.stringify(e), correlationId);
      } catch (e2) {
        logger.trace("00dty7", correlationId);
      }
      inProgressEvent.end({
        success: false
      }, e);
      throw e;
    });
  };
};

// node_modules/@azure/msal-common/dist-browser/authority/RegionDiscovery.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var RegionDiscovery = class _RegionDiscovery {
  constructor(networkInterface, logger, performanceClient, correlationId) {
    this.networkInterface = networkInterface;
    this.logger = logger;
    this.performanceClient = performanceClient;
    this.correlationId = correlationId;
  }
  /**
   * Detect the region from the application's environment.
   *
   * @returns Promise<string | null>
   */
  async detectRegion(environmentRegion, regionDiscoveryMetadata) {
    let autodetectedRegionName = environmentRegion;
    if (!autodetectedRegionName) {
      const options = _RegionDiscovery.IMDS_OPTIONS;
      try {
        const localIMDSVersionResponse = await invokeAsync(this.getRegionFromIMDS.bind(this), RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(IMDS_VERSION, options);
        if (localIMDSVersionResponse.status === HTTP_SUCCESS) {
          autodetectedRegionName = localIMDSVersionResponse.body?.location;
          if (autodetectedRegionName) {
            regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
          }
        }
        if (localIMDSVersionResponse.status === HTTP_BAD_REQUEST) {
          const currentIMDSVersion = await invokeAsync(this.getCurrentVersion.bind(this), RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(options);
          if (!currentIMDSVersion) {
            regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
            return null;
          }
          const currentIMDSVersionResponse = await invokeAsync(this.getRegionFromIMDS.bind(this), RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(currentIMDSVersion, options);
          if (currentIMDSVersionResponse.status === HTTP_SUCCESS) {
            autodetectedRegionName = currentIMDSVersionResponse.body?.location;
            if (autodetectedRegionName) {
              regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
            }
          }
        }
      } catch (e) {
        regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
        return null;
      }
    } else {
      regionDiscoveryMetadata.region_source = RegionDiscoverySources.ENVIRONMENT_VARIABLE;
    }
    if (!autodetectedRegionName) {
      regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
    }
    return autodetectedRegionName || null;
  }
  /**
   * Make the call to the IMDS endpoint
   *
   * @param version
   * @param options
   * @returns Promise<NetworkResponse<ImdsComputeResponse>>
   */
  async getRegionFromIMDS(version3, options) {
    return this.networkInterface.sendGetRequestAsync(`${IMDS_ENDPOINT}?api-version=${version3}`, options, IMDS_TIMEOUT);
  }
  /**
   * Get the most recent version of the IMDS endpoint available
   *
   * @returns Promise<string | null>
   */
  async getCurrentVersion(options) {
    try {
      const response = await this.networkInterface.sendGetRequestAsync(`${IMDS_ENDPOINT}?format=json`, options);
      if (response.status === HTTP_BAD_REQUEST && response.body && response.body["newest-versions"] && response.body["newest-versions"].length > 0) {
        return response.body["newest-versions"][0];
      }
      return null;
    } catch (e) {
      return null;
    }
  }
};
RegionDiscovery.IMDS_OPTIONS = {
  headers: {
    Metadata: "true"
  }
};

// node_modules/@azure/msal-common/dist-browser/cache/utils/CacheHelpers.mjs
var CacheHelpers_exports = {};
__export(CacheHelpers_exports, {
  createAccessTokenEntity: () => createAccessTokenEntity,
  createIdTokenEntity: () => createIdTokenEntity,
  createRefreshTokenEntity: () => createRefreshTokenEntity,
  generateAppMetadataKey: () => generateAppMetadataKey,
  generateAuthorityMetadataExpiresAt: () => generateAuthorityMetadataExpiresAt,
  isAccessTokenEntity: () => isAccessTokenEntity,
  isAppMetadataEntity: () => isAppMetadataEntity,
  isAuthorityMetadataEntity: () => isAuthorityMetadataEntity,
  isAuthorityMetadataExpired: () => isAuthorityMetadataExpired,
  isCredentialEntity: () => isCredentialEntity,
  isIdTokenEntity: () => isIdTokenEntity,
  isRefreshTokenEntity: () => isRefreshTokenEntity,
  isServerTelemetryEntity: () => isServerTelemetryEntity,
  isThrottlingEntity: () => isThrottlingEntity,
  serializeAttributeTokens: () => serializeAttributeTokens,
  updateAuthorityEndpointMetadata: () => updateAuthorityEndpointMetadata,
  updateCloudDiscoveryMetadata: () => updateCloudDiscoveryMetadata
});

// node_modules/@azure/msal-common/dist-browser/utils/TimeUtils.mjs
var TimeUtils_exports = {};
__export(TimeUtils_exports, {
  delay: () => delay,
  isCacheExpired: () => isCacheExpired,
  isTokenExpired: () => isTokenExpired,
  nowSeconds: () => nowSeconds,
  toDateFromSeconds: () => toDateFromSeconds,
  toSecondsFromDate: () => toSecondsFromDate,
  wasClockTurnedBack: () => wasClockTurnedBack
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
function nowSeconds() {
  return Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
}
function toSecondsFromDate(date) {
  return date.getTime() / 1e3;
}
function toDateFromSeconds(seconds) {
  if (seconds) {
    return new Date(Number(seconds) * 1e3);
  }
  return /* @__PURE__ */ new Date();
}
function isTokenExpired(expiresOn, offset) {
  const expirationSec = Number(expiresOn) || 0;
  const offsetCurrentTimeSec = nowSeconds() + offset;
  return offsetCurrentTimeSec > expirationSec;
}
function isCacheExpired(lastUpdatedAt, cacheRetentionDays) {
  const cacheExpirationTimestamp = Number(lastUpdatedAt) + cacheRetentionDays * 24 * 60 * 60 * 1e3;
  return Date.now() > cacheExpirationTimestamp;
}
function wasClockTurnedBack(cachedAt) {
  const cachedAtSec = Number(cachedAt);
  return cachedAtSec > nowSeconds();
}
function delay(t, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), t));
}

// node_modules/@azure/msal-common/dist-browser/cache/utils/CacheHelpers.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function createIdTokenEntity(homeAccountId, environment, idToken, clientId, tenantId) {
  const idTokenEntity = {
    credentialType: CredentialType.ID_TOKEN,
    homeAccountId,
    environment,
    clientId,
    secret: idToken,
    realm: tenantId,
    lastUpdatedAt: Date.now().toString()
    // Set the last updated time to now
  };
  return idTokenEntity;
}
function createAccessTokenEntity(homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn, base64Decode2, correlationId, refreshOn, tokenType, userAssertionHash, keyId, additionalCacheKeyComponents) {
  const atEntity = {
    homeAccountId,
    credentialType: CredentialType.ACCESS_TOKEN,
    secret: accessToken,
    cachedAt: nowSeconds().toString(),
    expiresOn: expiresOn.toString(),
    extendedExpiresOn: extExpiresOn.toString(),
    environment,
    clientId,
    realm: tenantId,
    target: scopes,
    tokenType: tokenType || AuthenticationScheme.BEARER,
    lastUpdatedAt: Date.now().toString()
    // Set the last updated time to now
  };
  if (userAssertionHash) {
    atEntity.userAssertionHash = userAssertionHash;
  }
  if (refreshOn) {
    atEntity.refreshOn = refreshOn.toString();
  }
  const normalizedTokenType = atEntity.tokenType?.toLowerCase();
  if (atEntity.tokenType?.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase()) {
    atEntity.credentialType = CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
    switch (normalizedTokenType) {
      case AuthenticationScheme.POP:
        const tokenClaims = extractTokenClaims(accessToken, base64Decode2, correlationId);
        if (!tokenClaims?.cnf?.kid) {
          throw createClientAuthError(tokenClaimsCnfRequiredForSignedJwt, correlationId);
        }
        atEntity.keyId = tokenClaims.cnf.kid;
        break;
      case "dpop":
        if (!keyId) {
          throw createClientAuthError(keyIdMissing, correlationId);
        }
        atEntity.keyId = keyId;
        break;
      case AuthenticationScheme.SSH:
        atEntity.keyId = keyId;
    }
  }
  if (additionalCacheKeyComponents && Object.keys(additionalCacheKeyComponents).length > 0) {
    atEntity.additionalCacheKeyComponents = additionalCacheKeyComponents;
  }
  return atEntity;
}
function createRefreshTokenEntity(homeAccountId, environment, refreshToken, clientId, familyId, userAssertionHash, expiresOn) {
  const rtEntity = {
    credentialType: CredentialType.REFRESH_TOKEN,
    homeAccountId,
    environment,
    clientId,
    secret: refreshToken,
    lastUpdatedAt: Date.now().toString()
  };
  if (userAssertionHash) {
    rtEntity.userAssertionHash = userAssertionHash;
  }
  if (familyId) {
    rtEntity.familyId = familyId;
  }
  if (expiresOn) {
    rtEntity.expiresOn = expiresOn.toString();
  }
  return rtEntity;
}
function isCredentialEntity(entity) {
  return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("credentialType") && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("secret");
}
function isAccessTokenEntity(entity) {
  if (!entity) {
    return false;
  }
  return isCredentialEntity(entity) && entity.hasOwnProperty("realm") && entity.hasOwnProperty("target") && (entity["credentialType"] === CredentialType.ACCESS_TOKEN || entity["credentialType"] === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME);
}
function isIdTokenEntity(entity) {
  if (!entity) {
    return false;
  }
  return isCredentialEntity(entity) && entity.hasOwnProperty("realm") && entity["credentialType"] === CredentialType.ID_TOKEN;
}
function isRefreshTokenEntity(entity) {
  if (!entity) {
    return false;
  }
  return isCredentialEntity(entity) && entity["credentialType"] === CredentialType.REFRESH_TOKEN;
}
function isServerTelemetryEntity(key, entity) {
  const validateKey = key.indexOf(SERVER_TELEM_CACHE_KEY) === 0;
  let validateEntity = true;
  if (entity) {
    validateEntity = entity.hasOwnProperty("failedRequests") && entity.hasOwnProperty("errors") && entity.hasOwnProperty("cacheHits");
  }
  return validateKey && validateEntity;
}
function isThrottlingEntity(key, entity) {
  let validateKey = false;
  if (key) {
    validateKey = key.indexOf(THROTTLING_PREFIX) === 0;
  }
  let validateEntity = true;
  if (entity) {
    validateEntity = entity.hasOwnProperty("throttleTime");
  }
  return validateKey && validateEntity;
}
function generateAppMetadataKey({ environment, clientId }) {
  const appMetaDataKeyArray = [
    APP_METADATA,
    environment,
    clientId
  ];
  return appMetaDataKeyArray.join(CACHE_KEY_SEPARATOR).toLowerCase();
}
function isAppMetadataEntity(key, entity) {
  if (!entity) {
    return false;
  }
  return key.indexOf(APP_METADATA) === 0 && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("environment");
}
function isAuthorityMetadataEntity(key, entity) {
  if (!entity) {
    return false;
  }
  return key.indexOf(AUTHORITY_METADATA_CACHE_KEY) === 0 && entity.hasOwnProperty("aliases") && entity.hasOwnProperty("preferred_cache") && entity.hasOwnProperty("preferred_network") && entity.hasOwnProperty("canonical_authority") && entity.hasOwnProperty("authorization_endpoint") && entity.hasOwnProperty("token_endpoint") && entity.hasOwnProperty("issuer") && entity.hasOwnProperty("aliasesFromNetwork") && entity.hasOwnProperty("endpointsFromNetwork") && entity.hasOwnProperty("expiresAt") && entity.hasOwnProperty("jwks_uri");
}
function generateAuthorityMetadataExpiresAt() {
  return nowSeconds() + AUTHORITY_METADATA_REFRESH_TIME_SECONDS;
}
function updateAuthorityEndpointMetadata(authorityMetadata, updatedValues, fromNetwork) {
  authorityMetadata.authorization_endpoint = updatedValues.authorization_endpoint;
  authorityMetadata.token_endpoint = updatedValues.token_endpoint;
  authorityMetadata.end_session_endpoint = updatedValues.end_session_endpoint;
  authorityMetadata.issuer = updatedValues.issuer;
  authorityMetadata.endpointsFromNetwork = fromNetwork;
  authorityMetadata.jwks_uri = updatedValues.jwks_uri;
}
function updateCloudDiscoveryMetadata(authorityMetadata, updatedValues, fromNetwork) {
  authorityMetadata.aliases = updatedValues.aliases;
  authorityMetadata.preferred_cache = updatedValues.preferred_cache;
  authorityMetadata.preferred_network = updatedValues.preferred_network;
  authorityMetadata.aliasesFromNetwork = fromNetwork;
}
function isAuthorityMetadataExpired(metadata) {
  return metadata.expiresAt <= nowSeconds();
}
function serializeAttributeTokens(attributeTokens) {
  if (!attributeTokens || attributeTokens.length === 0) {
    return void 0;
  }
  return [...attributeTokens].sort().join(" ");
}

// node_modules/@azure/msal-common/dist-browser/authority/Authority.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var Authority = class _Authority {
  constructor(authority, networkInterface, cacheManager, authorityOptions, logger, correlationId, performanceClient, managedIdentity) {
    this.canonicalAuthority = authority;
    this._canonicalAuthority.validateAsUri();
    this.networkInterface = networkInterface;
    this.cacheManager = cacheManager;
    this.authorityOptions = authorityOptions;
    this.regionDiscoveryMetadata = {
      region_used: void 0,
      region_source: void 0,
      region_outcome: void 0
    };
    this.logger = logger;
    this.performanceClient = performanceClient;
    this.correlationId = correlationId;
    this.managedIdentity = managedIdentity || false;
    this.regionDiscovery = new RegionDiscovery(networkInterface, this.logger, this.performanceClient, this.correlationId);
  }
  /**
   * Get {@link AuthorityType:type}
   * @param authorityUri {@link IUri}
   * @private
   */
  getAuthorityType(authorityUri) {
    if (authorityUri.HostNameAndPort.endsWith(CIAM_AUTH_URL)) {
      return AuthorityType.Ciam;
    }
    const pathSegments = authorityUri.PathSegments;
    if (pathSegments.length) {
      switch (pathSegments[0].toLowerCase()) {
        case ADFS:
          return AuthorityType.Adfs;
      }
    }
    return AuthorityType.Default;
  }
  // See above for AuthorityType
  get authorityType() {
    return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
  }
  /**
   * ProtocolMode enum representing the way endpoints are constructed.
   */
  get protocolMode() {
    return this.authorityOptions.protocolMode;
  }
  /**
   * Returns authorityOptions which can be used to reinstantiate a new authority instance
   */
  get options() {
    return this.authorityOptions;
  }
  /**
   * A URL that is the authority set by the developer
   */
  get canonicalAuthority() {
    return this._canonicalAuthority.urlString;
  }
  /**
   * Sets canonical authority.
   */
  set canonicalAuthority(url) {
    this._canonicalAuthority = new UrlString(url, this.correlationId);
    this._canonicalAuthority.validateAsUri();
    this._canonicalAuthorityUrlComponents = null;
  }
  /**
   * Get authority components.
   */
  get canonicalAuthorityUrlComponents() {
    if (!this._canonicalAuthorityUrlComponents) {
      this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
    }
    return this._canonicalAuthorityUrlComponents;
  }
  /**
   * Get hostname and port i.e. login.microsoftonline.com
   */
  get hostnameAndPort() {
    return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
  }
  /**
   * Get tenant for authority.
   */
  get tenant() {
    return this.canonicalAuthorityUrlComponents.PathSegments[0];
  }
  /**
   * OAuth /authorize endpoint for requests
   */
  get authorizationEndpoint() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.authorization_endpoint);
    } else {
      throw createClientAuthError(endpointResolutionError, this.correlationId);
    }
  }
  /**
   * OAuth /token endpoint for requests
   */
  get tokenEndpoint() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.token_endpoint);
    } else {
      throw createClientAuthError(endpointResolutionError, this.correlationId);
    }
  }
  get deviceCodeEndpoint() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
    } else {
      throw createClientAuthError(endpointResolutionError, this.correlationId);
    }
  }
  /**
   * OAuth logout endpoint for requests
   */
  get endSessionEndpoint() {
    if (this.discoveryComplete()) {
      if (!this.metadata.end_session_endpoint) {
        throw createClientAuthError(endSessionEndpointNotSupported, this.correlationId);
      }
      return this.replacePath(this.metadata.end_session_endpoint);
    } else {
      throw createClientAuthError(endpointResolutionError, this.correlationId);
    }
  }
  /**
   * OAuth issuer for requests
   */
  get selfSignedJwtAudience() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.issuer);
    } else {
      throw createClientAuthError(endpointResolutionError, this.correlationId);
    }
  }
  /**
   * Jwks_uri for token signing keys
   */
  get jwksUri() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.jwks_uri);
    } else {
      throw createClientAuthError(endpointResolutionError, this.correlationId);
    }
  }
  /**
   * Returns a flag indicating that tenant name can be replaced in authority {@link IUri}
   * @param authorityUri {@link IUri}
   * @private
   */
  canReplaceTenant(authorityUri) {
    return authorityUri.PathSegments.length === 1 && !_Authority.reservedTenantDomains.has(authorityUri.PathSegments[0]) && this.getAuthorityType(authorityUri) === AuthorityType.Default && this.protocolMode !== ProtocolMode.OIDC;
  }
  /**
   * Replaces tenant in url path with current tenant. Defaults to common.
   * @param urlString
   */
  replaceTenant(urlString) {
    return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
  }
  /**
   * Replaces path such as tenant or policy with the current tenant or policy.
   * @param urlString
   */
  replacePath(urlString) {
    let endpoint = urlString;
    const cachedAuthorityUrl = new UrlString(this.metadata.canonical_authority, this.correlationId);
    const cachedAuthorityUrlComponents = cachedAuthorityUrl.getUrlComponents();
    const cachedAuthorityParts = cachedAuthorityUrlComponents.PathSegments;
    const currentAuthorityParts = this.canonicalAuthorityUrlComponents.PathSegments;
    currentAuthorityParts.forEach((currentPart, index) => {
      let cachedPart = cachedAuthorityParts[index];
      if (index === 0 && this.canReplaceTenant(cachedAuthorityUrlComponents)) {
        const tenantId = new UrlString(this.metadata.authorization_endpoint, this.correlationId).getUrlComponents().PathSegments[0];
        if (cachedPart !== tenantId) {
          this.logger.verbose(`1q3g2x ${cachedPart} ${tenantId}`, this.correlationId);
          cachedPart = tenantId;
        }
      }
      if (currentPart !== cachedPart) {
        endpoint = endpoint.replace(`/${cachedPart}/`, `/${currentPart}/`);
      }
    });
    return this.replaceTenant(endpoint);
  }
  /**
   * The default open id configuration endpoint for any canonical authority.
   */
  get defaultOpenIdConfigurationEndpoint() {
    const canonicalAuthorityHost = this.hostnameAndPort;
    if (this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === AuthorityType.Adfs || this.protocolMode === ProtocolMode.OIDC && !this.isAliasOfKnownMicrosoftAuthority(canonicalAuthorityHost)) {
      return `${this.canonicalAuthority}.well-known/openid-configuration`;
    }
    return `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
  }
  /**
   * Boolean that returns whether or not tenant discovery has been completed.
   */
  discoveryComplete() {
    return !!this.metadata;
  }
  /**
   * Perform endpoint discovery to discover aliases, preferred_cache, preferred_network
   * and the /authorize, /token and logout endpoints.
   */
  async resolveEndpointsAsync() {
    const metadataEntity = this.getCurrentMetadataEntity();
    const cloudDiscoverySource = await invokeAsync(this.updateCloudDiscoveryMetadata.bind(this), AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(metadataEntity);
    this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, metadataEntity.preferred_network);
    const endpointSource = await invokeAsync(this.updateEndpointMetadata.bind(this), AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(metadataEntity);
    this.updateCachedMetadata(metadataEntity, cloudDiscoverySource, {
      source: endpointSource
    });
    this.performanceClient?.addFields({
      cloudDiscoverySource,
      authorityEndpointSource: endpointSource
    }, this.correlationId);
  }
  /**
   * Returns metadata entity from cache if it exists, otherwise returns a new metadata entity built
   * from the configured canonical authority
   * @returns
   */
  getCurrentMetadataEntity() {
    let metadataEntity = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort, this.correlationId);
    if (!metadataEntity) {
      metadataEntity = {
        aliases: [],
        preferred_cache: this.hostnameAndPort,
        preferred_network: this.hostnameAndPort,
        canonical_authority: this.canonicalAuthority,
        authorization_endpoint: "",
        token_endpoint: "",
        end_session_endpoint: "",
        issuer: "",
        aliasesFromNetwork: false,
        endpointsFromNetwork: false,
        expiresAt: generateAuthorityMetadataExpiresAt(),
        jwks_uri: ""
      };
    }
    return metadataEntity;
  }
  /**
   * Updates cached metadata based on metadata source and sets the instance's metadata
   * property to the same value
   * @param metadataEntity
   * @param cloudDiscoverySource
   * @param endpointMetadataResult
   */
  updateCachedMetadata(metadataEntity, cloudDiscoverySource, endpointMetadataResult) {
    if (cloudDiscoverySource !== AuthorityMetadataSource.CACHE && endpointMetadataResult?.source !== AuthorityMetadataSource.CACHE) {
      metadataEntity.expiresAt = generateAuthorityMetadataExpiresAt();
      metadataEntity.canonical_authority = this.canonicalAuthority;
    }
    const cacheKey = this.cacheManager.generateAuthorityMetadataCacheKey(metadataEntity.preferred_cache, this.correlationId);
    this.cacheManager.setAuthorityMetadata(cacheKey, metadataEntity, this.correlationId);
    this.metadata = metadataEntity;
  }
  /**
   * Update AuthorityMetadataEntity with new endpoints and return where the information came from
   * @param metadataEntity
   */
  async updateEndpointMetadata(metadataEntity) {
    const localMetadata = this.updateEndpointMetadataFromLocalSources(metadataEntity);
    if (localMetadata) {
      if (localMetadata.source === AuthorityMetadataSource.HARDCODED_VALUES) {
        if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
          if (localMetadata.metadata) {
            const hardcodedMetadata = await invokeAsync(this.updateMetadataWithRegionalInformation.bind(this), AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(localMetadata.metadata);
            updateAuthorityEndpointMetadata(metadataEntity, hardcodedMetadata, false);
            metadataEntity.canonical_authority = this.canonicalAuthority;
          }
        }
      }
      return localMetadata.source;
    }
    let metadata = await invokeAsync(this.getEndpointMetadataFromNetwork.bind(this), AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (metadata) {
      this.validateIssuer(metadata.issuer);
      if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
        metadata = await invokeAsync(this.updateMetadataWithRegionalInformation.bind(this), AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(metadata);
      }
      updateAuthorityEndpointMetadata(metadataEntity, metadata, true);
      return AuthorityMetadataSource.NETWORK;
    } else {
      throw createClientAuthError(openIdConfigError, this.defaultOpenIdConfigurationEndpoint, this.correlationId);
    }
  }
  /**
   * Updates endpoint metadata from local sources and returns where the information was retrieved from and the metadata config
   * response if the source is hardcoded metadata
   * @param metadataEntity
   * @returns
   */
  updateEndpointMetadataFromLocalSources(metadataEntity) {
    this.logger.verbose("1fi0kc", this.correlationId);
    const configMetadata = this.getEndpointMetadataFromConfig();
    if (configMetadata) {
      this.logger.verbose("06t0uj", this.correlationId);
      updateAuthorityEndpointMetadata(metadataEntity, configMetadata, false);
      return {
        source: AuthorityMetadataSource.CONFIG
      };
    }
    this.logger.verbose("151k0p", this.correlationId);
    const hardcodedMetadata = this.getEndpointMetadataFromHardcodedValues();
    if (hardcodedMetadata) {
      updateAuthorityEndpointMetadata(metadataEntity, hardcodedMetadata, false);
      return {
        source: AuthorityMetadataSource.HARDCODED_VALUES,
        metadata: hardcodedMetadata
      };
    } else {
      this.logger.verbose("1imop5", this.correlationId);
    }
    const metadataEntityExpired = isAuthorityMetadataExpired(metadataEntity);
    if (this.isAuthoritySameType(metadataEntity) && metadataEntity.endpointsFromNetwork && !metadataEntityExpired) {
      this.logger.verbose("16uq31", "");
      return { source: AuthorityMetadataSource.CACHE };
    } else if (metadataEntityExpired) {
      this.logger.verbose("0uoibc", "");
    }
    return null;
  }
  /**
   * Compares the number of url components after the domain to determine if the cached
   * authority metadata can be used for the requested authority. Protects against same domain different
   * authority such as login.microsoftonline.com/tenant and login.microsoftonline.com/tfp/tenant/policy
   * @param metadataEntity
   */
  isAuthoritySameType(metadataEntity) {
    const cachedAuthorityUrl = new UrlString(metadataEntity.canonical_authority, this.correlationId);
    const cachedParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
    return cachedParts.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
  }
  /**
   * Parse authorityMetadata config option
   */
  getEndpointMetadataFromConfig() {
    if (this.authorityOptions.authorityMetadata) {
      try {
        return JSON.parse(this.authorityOptions.authorityMetadata);
      } catch (e) {
        throw createClientConfigurationError(invalidAuthorityMetadata, this.correlationId);
      }
    }
    return null;
  }
  /**
   * Gets OAuth endpoints from the given OpenID configuration endpoint.
   *
   * @param hasHardcodedMetadata boolean
   */
  async getEndpointMetadataFromNetwork() {
    const options = {};
    const openIdConfigurationEndpoint = this.defaultOpenIdConfigurationEndpoint;
    this.logger.verbose(`1y65x6 ${openIdConfigurationEndpoint}`, this.correlationId);
    try {
      const response = await this.networkInterface.sendGetRequestAsync(openIdConfigurationEndpoint, options);
      const isValidResponse = isOpenIdConfigResponse(response.body);
      if (isValidResponse) {
        return response.body;
      } else {
        this.logger.verbose("1koyv8", this.correlationId);
        return null;
      }
    } catch (e) {
      this.logger.verbose(`0a9wik ${e}`, this.correlationId);
      return null;
    }
  }
  /**
   * Get OAuth endpoints for common authorities.
   */
  getEndpointMetadataFromHardcodedValues() {
    if (this.hostnameAndPort in EndpointMetadata) {
      return EndpointMetadata[this.hostnameAndPort];
    }
    return null;
  }
  /**
   * Update the retrieved metadata with regional information.
   * User selected Azure region will be used if configured.
   */
  async updateMetadataWithRegionalInformation(metadata) {
    const userConfiguredAzureRegion = this.authorityOptions.azureRegionConfiguration?.azureRegion;
    if (userConfiguredAzureRegion) {
      if (userConfiguredAzureRegion !== AZURE_REGION_AUTO_DISCOVER_FLAG) {
        this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.CONFIGURED_NO_AUTO_DETECTION;
        this.regionDiscoveryMetadata.region_used = userConfiguredAzureRegion;
        return _Authority.replaceWithRegionalInformation(metadata, userConfiguredAzureRegion, this.correlationId);
      }
      const autodetectedRegionName = await invokeAsync(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
      if (autodetectedRegionName) {
        this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_SUCCESSFUL;
        this.regionDiscoveryMetadata.region_used = autodetectedRegionName;
        return _Authority.replaceWithRegionalInformation(metadata, autodetectedRegionName, this.correlationId);
      }
      this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_FAILED;
    }
    return metadata;
  }
  /**
   * Updates the AuthorityMetadataEntity with new aliases, preferred_network and preferred_cache
   * and returns where the information was retrieved from
   * @param metadataEntity
   * @returns AuthorityMetadataSource
   */
  async updateCloudDiscoveryMetadata(metadataEntity) {
    const localMetadataSource = this.updateCloudDiscoveryMetadataFromLocalSources(metadataEntity);
    if (localMetadataSource) {
      return localMetadataSource;
    }
    const metadata = await invokeAsync(this.getCloudDiscoveryMetadataFromNetwork.bind(this), AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (metadata) {
      updateCloudDiscoveryMetadata(metadataEntity, metadata, true);
      return AuthorityMetadataSource.NETWORK;
    }
    throw createClientConfigurationError(untrustedAuthority, this.correlationId);
  }
  updateCloudDiscoveryMetadataFromLocalSources(metadataEntity) {
    this.logger.verbose("1tpqlr", this.correlationId);
    this.logger.verbosePii(`1fy7uz ${this.authorityOptions.knownAuthorities || NOT_APPLICABLE}`, this.correlationId);
    this.logger.verbosePii(`08zabj ${this.authorityOptions.authorityMetadata || NOT_APPLICABLE}`, this.correlationId);
    this.logger.verbosePii(`1o1kv3 ${metadataEntity.canonical_authority || NOT_APPLICABLE}`, this.correlationId);
    const metadata = this.getCloudDiscoveryMetadataFromConfig();
    if (metadata) {
      this.logger.verbose("1nakio", this.correlationId);
      updateCloudDiscoveryMetadata(metadataEntity, metadata, false);
      return AuthorityMetadataSource.CONFIG;
    }
    this.logger.verbose("1x74aj", this.correlationId);
    const hardcodedMetadata = getCloudDiscoveryMetadataFromHardcodedValues(this.hostnameAndPort);
    if (hardcodedMetadata) {
      this.logger.verbose("0by47c", this.correlationId);
      updateCloudDiscoveryMetadata(metadataEntity, hardcodedMetadata, false);
      return AuthorityMetadataSource.HARDCODED_VALUES;
    }
    this.logger.verbose("0r2fzy", this.correlationId);
    const metadataEntityExpired = isAuthorityMetadataExpired(metadataEntity);
    if (this.isAuthoritySameType(metadataEntity) && metadataEntity.aliasesFromNetwork && !metadataEntityExpired) {
      this.logger.verbose("1uffgh", "");
      return AuthorityMetadataSource.CACHE;
    } else if (metadataEntityExpired) {
      this.logger.verbose("0uoibc", "");
    }
    return null;
  }
  /**
   * Parse cloudDiscoveryMetadata config or check knownAuthorities
   */
  getCloudDiscoveryMetadataFromConfig() {
    if (this.authorityType === AuthorityType.Ciam) {
      this.logger.verbose("04y84h", this.correlationId);
      return _Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    }
    if (this.authorityOptions.cloudDiscoveryMetadata) {
      this.logger.verbose("0gszr3", this.correlationId);
      try {
        this.logger.verbose("1iifkx", this.correlationId);
        const parsedResponse = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata);
        const metadata = getCloudDiscoveryMetadataFromNetworkResponse(parsedResponse.metadata, this.hostnameAndPort);
        this.logger.verbose("0q67e3", "");
        if (metadata) {
          this.logger.verbose("0hzfao", this.correlationId);
          return metadata;
        } else {
          this.logger.verbose("1ajz3u", this.correlationId);
        }
      } catch (e) {
        this.logger.verbose("1wq5tu", this.correlationId);
        throw createClientConfigurationError(invalidCloudDiscoveryMetadata, this.correlationId);
      }
    }
    if (this.isInKnownAuthorities(this.hostnameAndPort)) {
      this.logger.verbose("0mt9al", this.correlationId);
      return _Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    }
    return null;
  }
  /**
   * Called to get metadata from network if CloudDiscoveryMetadata was not populated by config
   *
   * @param hasHardcodedMetadata boolean
   */
  async getCloudDiscoveryMetadataFromNetwork() {
    const instanceDiscoveryEndpoint = `${AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`;
    const options = {};
    let match = null;
    try {
      const response = await this.networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint, options);
      let typedResponseBody;
      let metadata;
      if (isCloudInstanceDiscoveryResponse(response.body)) {
        typedResponseBody = response.body;
        metadata = typedResponseBody.metadata;
        this.logger.verbosePii(`1vglyt ${typedResponseBody.tenant_discovery_endpoint}`, this.correlationId);
      } else if (isCloudInstanceDiscoveryErrorResponse(response.body)) {
        this.logger.warning(`062uto ${response.status}`, this.correlationId);
        typedResponseBody = response.body;
        if (typedResponseBody.error === INVALID_INSTANCE) {
          this.logger.error("1x90tm", this.correlationId);
          return null;
        }
        this.logger.warning(`0wchdm ${typedResponseBody.error}`, this.correlationId);
        this.logger.warning(`1s5mpv ${typedResponseBody.error_description}`, this.correlationId);
        this.logger.warning("1yhqpw", this.correlationId);
        metadata = [];
      } else {
        this.logger.error("0768g0", this.correlationId);
        return null;
      }
      this.logger.verbose("1lrobr", this.correlationId);
      match = getCloudDiscoveryMetadataFromNetworkResponse(metadata, this.hostnameAndPort);
    } catch (error) {
      if (error instanceof AuthError) {
        this.logger.error(`0vwhc7 ${error.errorCode} ${error.errorMessage}`, this.correlationId);
      } else {
        const typedError = error;
        this.logger.error(`0s2z41 ${typedError.name} ${typedError.message}`, this.correlationId);
      }
      return null;
    }
    if (!match) {
      this.logger.warning("0jp28q", this.correlationId);
      this.logger.verbose("130sd8", this.correlationId);
      match = _Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    }
    return match;
  }
  /**
   * Helper function to determine if a host is included in the knownAuthorities config option.
   */
  isInKnownAuthorities(host) {
    const normalizedHost = host.toLowerCase();
    const matches = this.authorityOptions.knownAuthorities.filter((authority) => {
      return authority && UrlString.getDomainFromUrl(authority, this.correlationId).toLowerCase() === normalizedHost;
    });
    return matches.length > 0;
  }
  /**
   * helper function to populate the authority based on azureCloudOptions
   * @param authorityString
   * @param azureCloudOptions
   */
  static generateAuthority(authorityString, azureCloudOptions) {
    let authorityAzureCloudInstance;
    if (azureCloudOptions && azureCloudOptions.azureCloudInstance !== AzureCloudInstance.None) {
      const tenant = azureCloudOptions.tenant ? azureCloudOptions.tenant : DEFAULT_COMMON_TENANT;
      authorityAzureCloudInstance = `${azureCloudOptions.azureCloudInstance}/${tenant}/`;
    }
    return authorityAzureCloudInstance ? authorityAzureCloudInstance : authorityString;
  }
  /**
   * Creates cloud discovery metadata object from a given host
   * @param host
   */
  static createCloudDiscoveryMetadataFromHost(host) {
    return {
      preferred_network: host,
      preferred_cache: host,
      aliases: [host]
    };
  }
  /**
   * helper function to generate environment from authority object
   */
  getPreferredCache() {
    if (this.managedIdentity) {
      return DEFAULT_AUTHORITY_HOST;
    } else if (this.discoveryComplete()) {
      return this.metadata.preferred_cache;
    } else {
      throw createClientAuthError(endpointResolutionError, this.correlationId);
    }
  }
  /**
   * Returns whether or not the provided host is an alias of this authority instance
   * @param host
   */
  isAlias(host) {
    return this.metadata.aliases.indexOf(host) > -1;
  }
  /**
   * Returns whether or not the provided host is an alias of a known Microsoft authority for purposes of endpoint discovery
   * @param host
   */
  isAliasOfKnownMicrosoftAuthority(host) {
    return InstanceDiscoveryMetadataAliases.has(host);
  }
  /**
   * Validates the `issuer` returned by an OIDC discovery document against
   * this authority, per
   * https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationValidation
   *
   * The issuer is accepted when ANY of the following holds:
   *  1. The issuer scheme + host + port match the authority's (path may
   *     differ). Applies to all authorities.
   *  2. The authority is a Microsoft cloud authority (public, sovereign,
   *     or CIAM), the issuer is HTTPS, and the issuer host is in the known
   *     Microsoft authority host set.
   *  3. Same as (2), but the issuer host is a single-label regional variant
   *     of a known Microsoft host (e.g. `westus.login.microsoftonline.com`).
   *  4. Same as (2), but the issuer host matches the CIAM tenant pattern
   *     `{tenant}.ciamlogin.com` with an optional `/{tenant}[.onmicrosoft.com][/v2.0]`
   *     path.
   *  5. The issuer host is HTTPS and is explicitly listed in the
   *     developer-configured `knownAuthorities`. This covers scenarios where
   *     the OIDC discovery document returns an issuer host that differs from
   *     the authority (e.g., a GUID-based issuer for a name-based CIAM authority).
   *
   * @param issuer The `issuer` value returned in the OIDC discovery document.
   * @throws ClientConfigurationError("issuer_validation_failed") on failure.
   */
  validateIssuer(issuer) {
    if (!issuer) {
      throw createClientConfigurationError(issuerValidationFailed, this.correlationId);
    }
    let issuerUrl;
    try {
      issuerUrl = new URL(issuer);
    } catch {
      throw createClientConfigurationError(issuerValidationFailed, this.correlationId);
    }
    const issuerScheme = issuerUrl.protocol;
    const issuerHost = issuerUrl.host;
    const authorityScheme = (this.canonicalAuthorityUrlComponents.Protocol || "").toLowerCase();
    const authorityHost = (this.canonicalAuthorityUrlComponents.HostNameAndPort || "").toLowerCase();
    const matchesAuthorityOrigin = this.matchesAuthorityOrigin(issuerScheme, issuerHost, authorityScheme, authorityHost);
    const matchesKnownMicrosoftHost = issuerScheme === "https:" && this.isAliasOfKnownMicrosoftAuthority(issuerHost);
    const matchesRegionalMicrosoftHost = issuerScheme === "https:" && this.matchesRegionalMicrosoftHost(issuerHost);
    const matchesCiamTenantPattern = this.matchesCiamTenantPattern(issuerUrl, authorityHost, this.canonicalAuthorityUrlComponents.PathSegments);
    const matchesKnownAuthority = issuerScheme === "https:" && this.isInKnownAuthorities(issuerHost);
    if (matchesAuthorityOrigin || matchesKnownMicrosoftHost || matchesRegionalMicrosoftHost || matchesCiamTenantPattern || matchesKnownAuthority) {
      return;
    }
    throw createClientConfigurationError(issuerValidationFailed, this.correlationId);
  }
  /**
   * Rule 1: The issuer scheme + host (and port) match the authority's. Path
   * may differ. Applies to all authorities.
   */
  matchesAuthorityOrigin(issuerScheme, issuerHost, authorityScheme, authorityHost) {
    return issuerScheme === authorityScheme && issuerHost === authorityHost;
  }
  /**
   * Rule 3: The issuer host is a regional variant
   * (`{region}.{host}`) of a known Microsoft authority host.
   * E.g. `westus2.login.microsoft.com`.
   */
  matchesRegionalMicrosoftHost(issuerHost) {
    const firstDot = issuerHost.indexOf(".");
    if (firstDot > 0 && firstDot < issuerHost.length - 1) {
      const hostWithoutRegion = issuerHost.substring(firstDot + 1);
      return this.isAliasOfKnownMicrosoftAuthority(hostWithoutRegion);
    }
    return false;
  }
  /**
   * Rule 4: The issuer matches one of the well-known CIAM tenant patterns
   * (`https://{tenant}.ciamlogin.com[/{tenant}[.onmicrosoft.com][/v2.0]]`).
   *
   * The bare tenant name is extracted from the authority's first path segment
   * when available (stripping the `.onmicrosoft.com` suffix that
   * `transformCIAMAuthority` adds), or otherwise from the leftmost label of
   * the authority host (to support CIAM custom domain scenarios).
   *
   * Both `/{tenant}` and `/{tenant}.onmicrosoft.com` path forms are accepted
   * because the OIDC issuer may use either form depending on the authority URL
   * that was used to trigger discovery.
   */
  matchesCiamTenantPattern(issuerUrl, authorityHost, authorityPathSegments) {
    const pathSegment = authorityPathSegments[0];
    const tenantName = pathSegment ? pathSegment.endsWith(AAD_TENANT_DOMAIN_SUFFIX) ? pathSegment.slice(0, -AAD_TENANT_DOMAIN_SUFFIX.length) : pathSegment : authorityHost.split(".")[0];
    if (!tenantName) {
      return false;
    }
    const ciamBaseURL = `https://${tenantName}${CIAM_AUTH_URL}`;
    const validCiamPatterns = [
      ciamBaseURL,
      `${ciamBaseURL}/${tenantName}`,
      `${ciamBaseURL}/${tenantName}/v2.0`,
      `${ciamBaseURL}/${tenantName}${AAD_TENANT_DOMAIN_SUFFIX}`,
      `${ciamBaseURL}/${tenantName}${AAD_TENANT_DOMAIN_SUFFIX}/v2.0`
      // https://{tenant}.ciamlogin.com/{tenant}.onmicrosoft.com/v2.0
    ];
    const issuerPath = issuerUrl.pathname.replace(/\/+$/, "");
    const normalizedIssuer = `${issuerUrl.protocol}//${issuerUrl.host}${issuerPath}`;
    return validCiamPatterns.some((pattern) => pattern === normalizedIssuer);
  }
  /**
   * Checks whether the provided host is that of a public cloud authority
   *
   * @param authority string
   * @returns bool
   */
  static isPublicCloudAuthority(host) {
    return KNOWN_PUBLIC_CLOUDS.indexOf(host) >= 0;
  }
  /**
   * Rebuild the authority string with the region
   *
   * @param host string
   * @param region string
   */
  static buildRegionalAuthorityString(host, region, correlationId, queryString) {
    const authorityUrlInstance = new UrlString(host, correlationId);
    authorityUrlInstance.validateAsUri();
    const authorityUrlParts = authorityUrlInstance.getUrlComponents();
    let hostNameAndPort = `${region}.${authorityUrlParts.HostNameAndPort}`;
    if (this.isPublicCloudAuthority(authorityUrlParts.HostNameAndPort)) {
      hostNameAndPort = `${region}.${REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`;
    }
    const url = UrlString.constructAuthorityUriFromObject(__spreadProps(__spreadValues({}, authorityUrlInstance.getUrlComponents()), {
      HostNameAndPort: hostNameAndPort
    }), correlationId).urlString;
    if (queryString)
      return `${url}?${queryString}`;
    return url;
  }
  /**
   * Replace the endpoints in the metadata object with their regional equivalents.
   *
   * @param metadata OpenIdConfigResponse
   * @param azureRegion string
   */
  static replaceWithRegionalInformation(metadata, azureRegion, correlationId) {
    const regionalMetadata = __spreadValues({}, metadata);
    regionalMetadata.authorization_endpoint = _Authority.buildRegionalAuthorityString(regionalMetadata.authorization_endpoint, azureRegion, correlationId);
    regionalMetadata.token_endpoint = _Authority.buildRegionalAuthorityString(regionalMetadata.token_endpoint, azureRegion, correlationId);
    if (regionalMetadata.end_session_endpoint) {
      regionalMetadata.end_session_endpoint = _Authority.buildRegionalAuthorityString(regionalMetadata.end_session_endpoint, azureRegion, correlationId);
    }
    return regionalMetadata;
  }
  /**
   * Transform CIAM_AUTHORIY as per the below rules:
   * If no path segments found and it is a CIAM authority (hostname ends with .ciamlogin.com), then transform it
   *
   * NOTE: The transformation path should go away once STS supports CIAM with the format: `tenantIdorDomain.ciamlogin.com`
   * `ciamlogin.com` can also change in the future and we should accommodate the same
   *
   * @param authority
   */
  static transformCIAMAuthority(authority, correlationId) {
    let ciamAuthority = authority;
    const authorityUrl = new UrlString(authority, correlationId);
    const authorityUrlComponents = authorityUrl.getUrlComponents();
    if (authorityUrlComponents.PathSegments.length === 0 && authorityUrlComponents.HostNameAndPort.endsWith(CIAM_AUTH_URL)) {
      const tenantIdOrDomain = authorityUrlComponents.HostNameAndPort.split(".")[0];
      ciamAuthority = `${ciamAuthority}${tenantIdOrDomain}${AAD_TENANT_DOMAIN_SUFFIX}`;
    }
    return ciamAuthority;
  }
};
Authority.reservedTenantDomains = /* @__PURE__ */ new Set([
  "{tenant}",
  "{tenantid}",
  AADAuthority.COMMON,
  AADAuthority.CONSUMERS,
  AADAuthority.ORGANIZATIONS
]);
function getTenantFromAuthorityString(authority, correlationId) {
  const authorityUrl = new UrlString(authority, correlationId);
  const authorityUrlComponents = authorityUrl.getUrlComponents();
  const tenantId = authorityUrlComponents.PathSegments.slice(-1)[0]?.toLowerCase();
  switch (tenantId) {
    case AADAuthority.COMMON:
    case AADAuthority.ORGANIZATIONS:
    case AADAuthority.CONSUMERS:
      return void 0;
    default:
      return tenantId;
  }
}
function formatAuthorityUri(authorityUri) {
  return authorityUri.endsWith(FORWARD_SLASH) ? authorityUri : `${authorityUri}${FORWARD_SLASH}`;
}
function buildStaticAuthorityOptions(authOptions) {
  const rawCloudDiscoveryMetadata = authOptions.cloudDiscoveryMetadata;
  let cloudDiscoveryMetadata = void 0;
  if (rawCloudDiscoveryMetadata) {
    try {
      cloudDiscoveryMetadata = JSON.parse(rawCloudDiscoveryMetadata);
    } catch (e) {
      throw createClientConfigurationError(invalidCloudDiscoveryMetadata, "");
    }
  }
  return {
    canonicalAuthority: authOptions.authority ? formatAuthorityUri(authOptions.authority) : void 0,
    knownAuthorities: authOptions.knownAuthorities,
    cloudDiscoveryMetadata
  };
}

// node_modules/@azure/msal-common/dist-browser/authority/AuthorityFactory.mjs
var AuthorityFactory_exports = {};
__export(AuthorityFactory_exports, {
  createDiscoveredInstance: () => createDiscoveredInstance
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
async function createDiscoveredInstance(authorityUri, networkClient, cacheManager, authorityOptions, logger, correlationId, performanceClient) {
  const authorityUriFinal = Authority.transformCIAMAuthority(formatAuthorityUri(authorityUri), correlationId);
  const acquireTokenAuthority = new Authority(authorityUriFinal, networkClient, cacheManager, authorityOptions, logger, correlationId, performanceClient);
  try {
    await invokeAsync(acquireTokenAuthority.resolveEndpointsAsync.bind(acquireTokenAuthority), AuthorityResolveEndpointsAsync, logger, performanceClient, correlationId)();
    return acquireTokenAuthority;
  } catch (e) {
    throw createClientAuthError(endpointResolutionError, correlationId);
  }
}

// node_modules/@azure/msal-common/dist-browser/request/RequestParameterBuilder.mjs
var RequestParameterBuilder_exports = {};
__export(RequestParameterBuilder_exports, {
  addApplicationTelemetry: () => addApplicationTelemetry,
  addAttributeTokens: () => addAttributeTokens,
  addAuthorizationCode: () => addAuthorizationCode,
  addBrokerParameters: () => addBrokerParameters,
  addCcsOid: () => addCcsOid,
  addCcsUpn: () => addCcsUpn,
  addClaims: () => addClaims,
  addCliData: () => addCliData,
  addClientAssertion: () => addClientAssertion,
  addClientAssertionType: () => addClientAssertionType,
  addClientId: () => addClientId,
  addClientInfo: () => addClientInfo,
  addClientSecret: () => addClientSecret,
  addCodeChallengeParams: () => addCodeChallengeParams,
  addCodeVerifier: () => addCodeVerifier,
  addCorrelationId: () => addCorrelationId,
  addDeviceCode: () => addDeviceCode,
  addDomainHint: () => addDomainHint,
  addEARParameters: () => addEARParameters,
  addExtraParameters: () => addExtraParameters,
  addGrantType: () => addGrantType,
  addIdTokenHint: () => addIdTokenHint,
  addInstanceAware: () => addInstanceAware,
  addLibraryInfo: () => addLibraryInfo,
  addLoginHint: () => addLoginHint,
  addLogoutHint: () => addLogoutHint,
  addNativeBroker: () => addNativeBroker,
  addNonce: () => addNonce,
  addOboAssertion: () => addOboAssertion,
  addPassword: () => addPassword,
  addPopToken: () => addPopToken,
  addPostLogoutRedirectUri: () => addPostLogoutRedirectUri,
  addPrompt: () => addPrompt,
  addRedirectUri: () => addRedirectUri,
  addRefreshToken: () => addRefreshToken,
  addRequestTokenUse: () => addRequestTokenUse,
  addResource: () => addResource,
  addResponseMode: () => addResponseMode,
  addResponseType: () => addResponseType,
  addScopes: () => addScopes,
  addServerTelemetry: () => addServerTelemetry,
  addSid: () => addSid,
  addSshJwk: () => addSshJwk,
  addState: () => addState,
  addThrottling: () => addThrottling,
  addUsername: () => addUsername,
  buildMergedClaims: () => buildMergedClaims,
  instrumentBrokerParams: () => instrumentBrokerParams
});

// node_modules/@azure/msal-common/dist-browser/request/ScopeSet.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var ScopeSet = class _ScopeSet {
  constructor(inputScopes, correlationId) {
    this.correlationId = correlationId;
    const scopeArr = inputScopes ? StringUtils.trimArrayEntries([...inputScopes]) : [];
    const filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
    if (!filteredInput || !filteredInput.length) {
      throw createClientConfigurationError(emptyInputScopesError, correlationId);
    }
    this.scopes = /* @__PURE__ */ new Set();
    filteredInput.forEach((scope) => this.scopes.add(scope));
  }
  /**
   * Factory method to create ScopeSet from space-delimited string
   * @param inputScopeString
   * @param appClientId
   * @param scopesRequired
   */
  static fromString(inputScopeString, correlationId) {
    const scopeString = inputScopeString || "";
    const inputScopes = scopeString.split(" ");
    return new _ScopeSet(inputScopes, correlationId);
  }
  /**
   * Creates the set of scopes to search for in cache lookups
   * @param inputScopeString
   * @returns
   */
  static createSearchScopes(inputScopeString, correlationId) {
    const scopesToUse = inputScopeString && inputScopeString.length > 0 ? inputScopeString : [...OIDC_DEFAULT_SCOPES];
    const scopeSet = new _ScopeSet(scopesToUse, correlationId);
    if (!scopeSet.containsOnlyOIDCScopes()) {
      scopeSet.removeOIDCScopes();
    } else {
      scopeSet.removeScope(OFFLINE_ACCESS_SCOPE);
    }
    return scopeSet;
  }
  /**
   * Check if a given scope is present in this set of scopes.
   * @param scope
   */
  containsScope(scope) {
    const lowerCaseScopes = this.printScopesLowerCase().split(" ");
    const lowerCaseScopesSet = new _ScopeSet(lowerCaseScopes, this.correlationId);
    return scope ? lowerCaseScopesSet.scopes.has(scope.toLowerCase()) : false;
  }
  /**
   * Check if a set of scopes is present in this set of scopes.
   * @param scopeSet
   */
  containsScopeSet(scopeSet) {
    if (!scopeSet || scopeSet.scopes.size <= 0) {
      return false;
    }
    return this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every((scope) => this.containsScope(scope));
  }
  /**
   * Check if set of scopes contains only the defaults
   */
  containsOnlyOIDCScopes() {
    let defaultScopeCount = 0;
    OIDC_SCOPES.forEach((defaultScope) => {
      if (this.containsScope(defaultScope)) {
        defaultScopeCount += 1;
      }
    });
    return this.scopes.size === defaultScopeCount;
  }
  /**
   * Appends single scope if passed
   * @param newScope
   */
  appendScope(newScope) {
    if (newScope) {
      this.scopes.add(newScope.trim());
    }
  }
  /**
   * Appends multiple scopes if passed
   * @param newScopes
   */
  appendScopes(newScopes) {
    try {
      newScopes.forEach((newScope) => this.appendScope(newScope));
    } catch (e) {
      throw createClientAuthError(cannotAppendScopeSet, this.correlationId);
    }
  }
  /**
   * Removes element from set of scopes.
   * @param scope
   */
  removeScope(scope) {
    if (!scope) {
      throw createClientAuthError(cannotRemoveEmptyScope, this.correlationId);
    }
    this.scopes.delete(scope.trim());
  }
  /**
   * Removes default scopes from set of scopes
   * Primarily used to prevent cache misses if the default scopes are not returned from the server
   */
  removeOIDCScopes() {
    OIDC_SCOPES.forEach((defaultScope) => {
      this.scopes.delete(defaultScope);
    });
  }
  /**
   * Combines an array of scopes with the current set of scopes.
   * @param otherScopes
   */
  unionScopeSets(otherScopes) {
    if (!otherScopes) {
      throw createClientAuthError(emptyInputScopeSet, this.correlationId);
    }
    const unionScopes = /* @__PURE__ */ new Set();
    otherScopes.scopes.forEach((scope) => unionScopes.add(scope.toLowerCase()));
    this.scopes.forEach((scope) => unionScopes.add(scope.toLowerCase()));
    return unionScopes;
  }
  /**
   * Check if scopes intersect between this set and another.
   * @param otherScopes
   */
  intersectingScopeSets(otherScopes) {
    if (!otherScopes) {
      throw createClientAuthError(emptyInputScopeSet, this.correlationId);
    }
    if (!otherScopes.containsOnlyOIDCScopes()) {
      otherScopes.removeOIDCScopes();
    }
    const unionScopes = this.unionScopeSets(otherScopes);
    const sizeOtherScopes = otherScopes.getScopeCount();
    const sizeThisScopes = this.getScopeCount();
    const sizeUnionScopes = unionScopes.size;
    return sizeUnionScopes < sizeThisScopes + sizeOtherScopes;
  }
  /**
   * Returns size of set of scopes.
   */
  getScopeCount() {
    return this.scopes.size;
  }
  /**
   * Returns the scopes as an array of string values
   */
  asArray() {
    const array = [];
    this.scopes.forEach((val) => array.push(val));
    return array;
  }
  /**
   * Prints scopes into a space-delimited string
   */
  printScopes() {
    if (this.scopes) {
      const scopeArr = this.asArray();
      return scopeArr.join(" ");
    }
    return "";
  }
  /**
   * Prints scopes into a space-delimited lower-case string (used for caching)
   */
  printScopesLowerCase() {
    return this.printScopes().toLowerCase();
  }
};

// node_modules/@azure/msal-common/dist-browser/request/RequestParameterBuilder.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function instrumentBrokerParams(parameters, correlationId, performanceClient) {
  if (!correlationId) {
    return;
  }
  const clientId = parameters.get(CLIENT_ID);
  if (clientId && parameters.has(BROKER_CLIENT_ID)) {
    performanceClient?.addFields({
      embeddedClientId: clientId,
      embeddedRedirectUri: parameters.get(REDIRECT_URI)
    }, correlationId);
  }
}
function addResponseType(parameters, responseType) {
  parameters.set(RESPONSE_TYPE, responseType);
}
function addResponseMode(parameters, responseMode) {
  parameters.set(RESPONSE_MODE, responseMode ? responseMode : ResponseMode.QUERY);
}
function addNativeBroker(parameters) {
  parameters.set(NATIVE_BROKER, "1");
}
function addScopes(parameters, scopes, correlationId, addOidcScopes = true, defaultScopes = OIDC_DEFAULT_SCOPES) {
  if (addOidcScopes && !defaultScopes.includes("openid") && !scopes.includes("openid")) {
    defaultScopes.push("openid");
  }
  const requestScopes = addOidcScopes ? [...scopes || [], ...defaultScopes] : scopes || [];
  const scopeSet = new ScopeSet(requestScopes, correlationId);
  parameters.set(SCOPE, scopeSet.printScopes());
}
function addClientId(parameters, clientId) {
  parameters.set(CLIENT_ID, clientId);
}
function addRedirectUri(parameters, redirectUri) {
  parameters.set(REDIRECT_URI, redirectUri);
}
function addPostLogoutRedirectUri(parameters, redirectUri) {
  parameters.set(POST_LOGOUT_URI, redirectUri);
}
function addIdTokenHint(parameters, idTokenHint) {
  parameters.set(ID_TOKEN_HINT, idTokenHint);
}
function addDomainHint(parameters, domainHint) {
  parameters.set(DOMAIN_HINT, domainHint);
}
function addLoginHint(parameters, loginHint) {
  parameters.set(LOGIN_HINT, loginHint);
}
function addCcsUpn(parameters, loginHint) {
  parameters.set(HeaderNames.CCS_HEADER, `UPN:${loginHint}`);
}
function addCcsOid(parameters, clientInfo) {
  parameters.set(HeaderNames.CCS_HEADER, `Oid:${clientInfo.uid}@${clientInfo.utid}`);
}
function addSid(parameters, sid) {
  parameters.set(SID, sid);
}
function addClaims(parameters, correlationId, claims, clientCapabilities, skipBrokerClaims, claimsToMerge) {
  const configClaims = skipBrokerClaims && parameters.has(BROKER_CLIENT_ID) ? void 0 : clientCapabilities;
  const mergedClaims = buildMergedClaims(claims, configClaims, correlationId, claimsToMerge);
  parameters.set(CLAIMS, mergedClaims);
}
function addCorrelationId(parameters, correlationId) {
  parameters.set(CLIENT_REQUEST_ID, correlationId);
}
function addLibraryInfo(parameters, libraryInfo) {
  parameters.set(X_CLIENT_SKU, libraryInfo.sku);
  parameters.set(X_CLIENT_VER, libraryInfo.version);
  if (libraryInfo.os) {
    parameters.set(X_CLIENT_OS, libraryInfo.os);
  }
  if (libraryInfo.cpu) {
    parameters.set(X_CLIENT_CPU, libraryInfo.cpu);
  }
}
function addApplicationTelemetry(parameters, appTelemetry) {
  if (appTelemetry?.appName) {
    parameters.set(X_APP_NAME, appTelemetry.appName);
  }
  if (appTelemetry?.appVersion) {
    parameters.set(X_APP_VER, appTelemetry.appVersion);
  }
}
function addPrompt(parameters, prompt) {
  parameters.set(PROMPT, prompt);
}
function addState(parameters, state) {
  if (state) {
    parameters.set(STATE, state);
  }
}
function addNonce(parameters, nonce) {
  parameters.set(NONCE, nonce);
}
function addCodeChallengeParams(parameters, codeChallenge, codeChallengeMethod) {
  if (codeChallenge && codeChallengeMethod) {
    parameters.set(CODE_CHALLENGE, codeChallenge);
    parameters.set(CODE_CHALLENGE_METHOD, codeChallengeMethod);
  } else {
    throw createClientConfigurationError(pkceParamsMissing, "");
  }
}
function addAuthorizationCode(parameters, code) {
  parameters.set(CODE, code);
}
function addDeviceCode(parameters, code) {
  parameters.set(DEVICE_CODE, code);
}
function addRefreshToken(parameters, refreshToken) {
  parameters.set(REFRESH_TOKEN, refreshToken);
}
function addCodeVerifier(parameters, codeVerifier) {
  parameters.set(CODE_VERIFIER, codeVerifier);
}
function addClientSecret(parameters, clientSecret) {
  parameters.set(CLIENT_SECRET, clientSecret);
}
function addClientAssertion(parameters, clientAssertion) {
  if (clientAssertion) {
    parameters.set(CLIENT_ASSERTION, clientAssertion);
  }
}
function addClientAssertionType(parameters, clientAssertionType) {
  if (clientAssertionType) {
    parameters.set(CLIENT_ASSERTION_TYPE, clientAssertionType);
  }
}
function addOboAssertion(parameters, oboAssertion) {
  parameters.set(OBO_ASSERTION, oboAssertion);
}
function addRequestTokenUse(parameters, tokenUse) {
  parameters.set(REQUESTED_TOKEN_USE, tokenUse);
}
function addGrantType(parameters, grantType) {
  parameters.set(GRANT_TYPE, grantType);
}
function addClientInfo(parameters) {
  parameters.set(CLIENT_INFO2, "1");
}
function addCliData(parameters) {
  parameters.set(CLI_DATA, "1");
}
function addInstanceAware(parameters) {
  if (!parameters.has(INSTANCE_AWARE)) {
    parameters.set(INSTANCE_AWARE, "true");
  }
}
function addExtraParameters(parameters, extraParams) {
  Object.entries(extraParams).forEach(([key, value]) => {
    if (!parameters.has(key) && value) {
      parameters.set(key, value);
    }
  });
}
var DEFAULT_ID_TOKEN_CLAIMS = {
  [ClaimsRequestKeys.SIGNIN_STATE]: { essential: false },
  [ClaimsRequestKeys.LOGIN_HINT]: { essential: false },
  [ClaimsRequestKeys.TENANT_REGION_SUB_SCOPE]: {
    essential: false
  }
};
function parseClaims(claims, correlationId = "") {
  let parsed;
  try {
    parsed = JSON.parse(claims);
  } catch (e) {
    throw createClientConfigurationError(invalidClaims, correlationId);
  }
  if (!isPlainObject(parsed)) {
    throw createClientConfigurationError(invalidClaims, correlationId);
  }
  return parsed;
}
function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function deepMergeClaims(baseClaims, claimsToMerge) {
  const merged = __spreadValues({}, baseClaims);
  for (const [key, mergeInValue] of Object.entries(claimsToMerge)) {
    const baseValue = merged[key];
    if (isPlainObject(baseValue) && isPlainObject(mergeInValue)) {
      merged[key] = deepMergeClaims(baseValue, mergeInValue);
    } else {
      merged[key] = mergeInValue;
    }
  }
  return merged;
}
function buildMergedClaims(claims, clientCapabilities, correlationId = "", claimsToMerge) {
  let mergedClaims = claims ? parseClaims(claims, correlationId) : {};
  if (claimsToMerge?.trim()) {
    mergedClaims = deepMergeClaims(mergedClaims, parseClaims(claimsToMerge, correlationId));
  }
  if (!Object.prototype.hasOwnProperty.call(mergedClaims, ClaimsRequestKeys.ID_TOKEN)) {
    mergedClaims[ClaimsRequestKeys.ID_TOKEN] = {};
  }
  const idTokenClaims = mergedClaims[ClaimsRequestKeys.ID_TOKEN];
  for (const [key, value] of Object.entries(DEFAULT_ID_TOKEN_CLAIMS)) {
    if (!(key in idTokenClaims)) {
      idTokenClaims[key] = value;
    }
  }
  if (clientCapabilities && clientCapabilities.length > 0) {
    if (!Object.prototype.hasOwnProperty.call(mergedClaims, ClaimsRequestKeys.ACCESS_TOKEN)) {
      mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN] = {};
    }
    mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN][ClaimsRequestKeys.XMS_CC] = {
      values: clientCapabilities
    };
  }
  return JSON.stringify(mergedClaims);
}
function addUsername(parameters, username) {
  parameters.set(PasswordGrantConstants.username, username);
}
function addPassword(parameters, password) {
  parameters.set(PasswordGrantConstants.password, password);
}
function addPopToken(parameters, cnfString) {
  if (cnfString) {
    parameters.set(TOKEN_TYPE, AuthenticationScheme.POP);
    parameters.set(REQ_CNF, cnfString);
  }
}
function addSshJwk(parameters, sshJwkString) {
  if (sshJwkString) {
    parameters.set(TOKEN_TYPE, AuthenticationScheme.SSH);
    parameters.set(REQ_CNF, sshJwkString);
  }
}
function addServerTelemetry(parameters, serverTelemetryManager) {
  parameters.set(X_CLIENT_CURR_TELEM, serverTelemetryManager.generateCurrentRequestHeaderValue());
  parameters.set(X_CLIENT_LAST_TELEM, serverTelemetryManager.generateLastRequestHeaderValue());
}
function addThrottling(parameters) {
  parameters.set(X_MS_LIB_CAPABILITY, X_MS_LIB_CAPABILITY_VALUE);
}
function addLogoutHint(parameters, logoutHint) {
  parameters.set(LOGOUT_HINT, logoutHint);
}
function addBrokerParameters(parameters, brokerClientId, brokerRedirectUri) {
  if (!parameters.has(BROKER_CLIENT_ID)) {
    parameters.set(BROKER_CLIENT_ID, brokerClientId);
  }
  if (!parameters.has(BROKER_REDIRECT_URI)) {
    parameters.set(BROKER_REDIRECT_URI, brokerRedirectUri);
  }
}
function addEARParameters(parameters, jwk) {
  parameters.set(EAR_JWK, encodeURIComponent(jwk));
  const jweCryptoB64Encoded = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0";
  parameters.set(EAR_JWE_CRYPTO, jweCryptoB64Encoded);
}
function addResource(parameters, resource) {
  if (resource) {
    parameters.set(RESOURCE, resource);
  }
}
function addAttributeTokens(parameters, attributeTokens) {
  const serialized = serializeAttributeTokens(attributeTokens);
  if (serialized) {
    parameters.set(ATTRIBUTE_TOKENS, serialized);
  } else {
    parameters.delete(ATTRIBUTE_TOKENS);
  }
}

// node_modules/@azure/msal-common/dist-browser/utils/UrlUtils.mjs
var UrlUtils_exports = {};
__export(UrlUtils_exports, {
  getDeserializedResponse: () => getDeserializedResponse,
  mapToQueryString: () => mapToQueryString,
  normalizeUrlForComparison: () => normalizeUrlForComparison,
  stripLeadingHashOrQuery: () => stripLeadingHashOrQuery,
  validateUrl: () => validateUrl
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
function stripLeadingHashOrQuery(responseString) {
  if (responseString.startsWith("#/")) {
    return responseString.substring(2);
  } else if (responseString.startsWith("#") || responseString.startsWith("?")) {
    return responseString.substring(1);
  }
  return responseString;
}
function getDeserializedResponse(responseString) {
  if (!responseString || responseString.indexOf("=") < 0) {
    return null;
  }
  try {
    const normalizedResponse = stripLeadingHashOrQuery(responseString);
    const deserializedHash = Object.fromEntries(new URLSearchParams(normalizedResponse));
    if (deserializedHash.code || deserializedHash.ear_jwe || deserializedHash.error || deserializedHash.error_description || deserializedHash.state) {
      return deserializedHash;
    }
  } catch (e) {
    throw createClientAuthError(hashNotDeserialized, "");
  }
  return null;
}
function mapToQueryString(parameters) {
  const queryParameterArray = new Array();
  parameters.forEach((value, key) => {
    queryParameterArray.push(`${key}=${encodeURIComponent(value)}`);
  });
  return queryParameterArray.join("&");
}
function normalizeUrlForComparison(url, logger, correlationId) {
  if (!url) {
    return url;
  }
  const urlWithoutHash = url.split("#")[0];
  if (!urlWithoutHash) {
    return urlWithoutHash;
  }
  try {
    const urlObj = new URL(urlWithoutHash);
    if (!urlObj.search) {
      urlObj.search = "";
    }
    let pathname;
    try {
      pathname = decodeURIComponent(urlObj.pathname);
    } catch (e) {
      pathname = urlObj.pathname;
    }
    if (!pathname.endsWith("/")) {
      pathname += "/";
    }
    urlObj.pathname = pathname;
    return urlObj.href;
  } catch (e) {
    logger?.error(`15apdm ${e}`, correlationId || "");
    throw createClientConfigurationError(urlParseError, correlationId || "");
  }
}
function validateUrl(url, logger, correlationId) {
  try {
    new URL(url);
  } catch (e) {
    logger?.error(`1lrjz7 ${e}`, correlationId || "");
    throw createClientConfigurationError(urlParseError, correlationId || "");
  }
}

// node_modules/@azure/msal-common/dist-browser/crypto/ICrypto.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var JsonWebTokenAlgorithms = {
  ES256: "ES256",
  RS256: "RS256"
};
var DEFAULT_CRYPTO_IMPLEMENTATION = {
  createNewGuid: () => {
    throw createClientAuthError(methodNotImplemented, "");
  },
  base64Decode: () => {
    throw createClientAuthError(methodNotImplemented, "");
  },
  base64Encode: () => {
    throw createClientAuthError(methodNotImplemented, "");
  },
  base64UrlEncode: () => {
    throw createClientAuthError(methodNotImplemented, "");
  },
  encodeKid: () => {
    throw createClientAuthError(methodNotImplemented, "");
  },
  async removeTokenBindingKey(kid, correlationId) {
    throw createClientAuthError(methodNotImplemented, correlationId);
  },
  async clearKeystore(correlationId) {
    throw createClientAuthError(methodNotImplemented, correlationId);
  },
  async signTokenBindingJwt(header, payload, kid, correlationId) {
    throw createClientAuthError(methodNotImplemented, correlationId);
  },
  async hashString() {
    throw createClientAuthError(methodNotImplemented, "");
  }
};

// node_modules/@azure/msal-common/dist-browser/crypto/ITokenBindingKeyManager.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var DEFAULT_TOKEN_BINDING_KEY_MANAGER = {
  async provisionTokenBindingKey(request) {
    throw createClientAuthError(methodNotImplemented, request.correlationId);
  },
  async removeTokenBindingKey(_kid, correlationId) {
    throw createClientAuthError(methodNotImplemented, correlationId);
  },
  async getTokenBindingPublicKeyJwk(_kid, correlationId) {
    throw createClientAuthError(methodNotImplemented, correlationId);
  }
};

// node_modules/@azure/msal-common/dist-browser/logger/Logger.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["Error"] = 0] = "Error";
  LogLevel2[LogLevel2["Warning"] = 1] = "Warning";
  LogLevel2[LogLevel2["Info"] = 2] = "Info";
  LogLevel2[LogLevel2["Verbose"] = 3] = "Verbose";
  LogLevel2[LogLevel2["Trace"] = 4] = "Trace";
})(LogLevel || (LogLevel = {}));
var CACHE_CAPACITY = 50;
var MAX_LOGS_PER_CORRELATION = 500;
var correlationCache = /* @__PURE__ */ new Map();
function markAsRecentlyUsed(correlationId, data) {
  correlationCache.delete(correlationId);
  correlationCache.set(correlationId, data);
}
function addLogToCache(correlationId, loggedMessage) {
  const currentTime = Date.now();
  let data = correlationCache.get(correlationId);
  if (data) {
    markAsRecentlyUsed(correlationId, data);
  } else {
    data = { logs: [], firstEventTime: currentTime };
    correlationCache.set(correlationId, data);
    if (correlationCache.size > CACHE_CAPACITY) {
      const firstKey = correlationCache.keys().next().value;
      if (firstKey !== void 0) {
        correlationCache.delete(firstKey);
      }
    }
  }
  data.logs.push(__spreadProps(__spreadValues({}, loggedMessage), {
    milliseconds: currentTime - data.firstEventTime
  }));
  if (data.logs.length > MAX_LOGS_PER_CORRELATION) {
    data.logs.shift();
  }
}
function getAndFlushLogsFromCache(correlationId) {
  const res = [];
  for (const id of ["", correlationId]) {
    const data = correlationCache.get(id);
    res.push(...data?.logs ?? []);
    correlationCache.delete(id);
  }
  return res;
}
function getMessageHash(str) {
  if (str.length < 6) {
    return null;
  }
  if (str.length > 6 && str[6] !== " ") {
    return null;
  }
  for (let i = 0; i < 6; i++) {
    const char = str[i];
    const isAlphaNumeric = char >= "a" && char <= "z" || char >= "A" && char <= "Z" || char >= "0" && char <= "9";
    if (!isAlphaNumeric) {
      return null;
    }
  }
  return str.substring(0, 6);
}
var Logger = class _Logger {
  constructor(loggerOptions, packageName, packageVersion) {
    this.level = LogLevel.Info;
    const defaultLoggerCallback = () => {
      return;
    };
    const setLoggerOptions = loggerOptions || _Logger.createDefaultLoggerOptions();
    this.localCallback = setLoggerOptions.loggerCallback || defaultLoggerCallback;
    this.piiLoggingEnabled = setLoggerOptions.piiLoggingEnabled || false;
    this.level = typeof setLoggerOptions.logLevel === "number" ? setLoggerOptions.logLevel : LogLevel.Info;
    this.packageName = packageName || "";
    this.packageVersion = packageVersion || "";
  }
  static createDefaultLoggerOptions() {
    return {
      loggerCallback: () => {
      },
      piiLoggingEnabled: false,
      logLevel: LogLevel.Info
    };
  }
  /**
   * Create new Logger with existing configurations.
   */
  clone(packageName, packageVersion) {
    return new _Logger({
      loggerCallback: this.localCallback,
      piiLoggingEnabled: this.piiLoggingEnabled,
      logLevel: this.level
    }, packageName, packageVersion);
  }
  /**
   * Log message with required options.
   */
  logMessage(logMessage, options) {
    const correlationId = options.correlationId;
    const messageHash = getMessageHash(logMessage);
    if (messageHash) {
      const loggedMessage = {
        hash: messageHash,
        level: options.logLevel,
        containsPii: options.containsPii || false,
        milliseconds: 0
        // Will be calculated in addLogToCache
      };
      addLogToCache(correlationId, loggedMessage);
    }
    if (options.logLevel > this.level || !this.piiLoggingEnabled && options.containsPii) {
      return;
    }
    const timestamp = (/* @__PURE__ */ new Date()).toUTCString();
    const logHeader = `[${timestamp}] : [${correlationId}]`;
    const log = `${logHeader} : ${this.packageName}@${this.packageVersion} : ${LogLevel[options.logLevel]} - ${logMessage}`;
    this.executeCallback(options.logLevel, log, options.containsPii || false);
  }
  /**
   * Execute callback with message.
   */
  executeCallback(level, message, containsPii) {
    if (this.localCallback) {
      this.localCallback(level, message, containsPii);
    }
  }
  /**
   * Logs error messages.
   */
  error(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Error,
      containsPii: false,
      correlationId
    });
  }
  /**
   * Logs error messages with PII.
   */
  errorPii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Error,
      containsPii: true,
      correlationId
    });
  }
  /**
   * Logs warning messages.
   */
  warning(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Warning,
      containsPii: false,
      correlationId
    });
  }
  /**
   * Logs warning messages with PII.
   */
  warningPii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Warning,
      containsPii: true,
      correlationId
    });
  }
  /**
   * Logs info messages.
   */
  info(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Info,
      containsPii: false,
      correlationId
    });
  }
  /**
   * Logs info messages with PII.
   */
  infoPii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Info,
      containsPii: true,
      correlationId
    });
  }
  /**
   * Logs verbose messages.
   */
  verbose(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Verbose,
      containsPii: false,
      correlationId
    });
  }
  /**
   * Logs verbose messages with PII.
   */
  verbosePii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Verbose,
      containsPii: true,
      correlationId
    });
  }
  /**
   * Logs trace messages.
   */
  trace(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Trace,
      containsPii: false,
      correlationId
    });
  }
  /**
   * Logs trace messages with PII.
   */
  tracePii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Trace,
      containsPii: true,
      correlationId
    });
  }
  /**
   * Returns whether PII Logging is enabled or not.
   */
  isPiiLoggingEnabled() {
    return this.piiLoggingEnabled || false;
  }
};

// node_modules/@azure/msal-common/dist-browser/packageMetadata.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var name = "@azure/msal-common";
var version = "16.14.1";

// node_modules/@azure/msal-common/dist-browser/error/CacheErrorCodes.mjs
var CacheErrorCodes_exports = {};
__export(CacheErrorCodes_exports, {
  cacheErrorUnknown: () => cacheErrorUnknown,
  cacheQuotaExceeded: () => cacheQuotaExceeded
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
var cacheQuotaExceeded = "cache_quota_exceeded";
var cacheErrorUnknown = "cache_error_unknown";

// node_modules/@azure/msal-common/dist-browser/error/CacheError.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var CacheError = class _CacheError extends Error {
  constructor(errorCode, errorMessage) {
    const message = errorMessage || getDefaultErrorMessage(errorCode);
    super(message);
    Object.setPrototypeOf(this, _CacheError.prototype);
    this.name = "CacheError";
    this.errorCode = errorCode;
    this.errorMessage = message;
  }
};
function createCacheError(e) {
  if (!(e instanceof Error)) {
    return new CacheError(cacheErrorUnknown);
  }
  if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED" || e.message.includes("exceeded the quota")) {
    return new CacheError(cacheQuotaExceeded);
  } else {
    return new CacheError(e.name, e.message);
  }
}

// node_modules/@azure/msal-common/dist-browser/cache/CacheManager.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var CacheManager = class {
  constructor(clientId, cryptoImpl, logger, performanceClient, staticAuthorityOptions, tokenBindingKeyManager) {
    this.clientId = clientId;
    this.cryptoImpl = cryptoImpl;
    this.tokenBindingKeyManager = tokenBindingKeyManager;
    this.commonLogger = logger.clone(name, version);
    this.staticAuthorityOptions = staticAuthorityOptions;
    this.performanceClient = performanceClient;
  }
  /**
   * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
   * @param accountFilter - (Optional) filter to narrow down the accounts returned
   * @returns Array of AccountInfo objects in cache
   */
  getAllAccounts(accountFilter = {}, correlationId) {
    return this.buildTenantProfiles(this.getAccountsFilteredBy(accountFilter, correlationId), correlationId, accountFilter);
  }
  /**
   * Gets first tenanted AccountInfo object found based on provided filters
   */
  getAccountInfoFilteredBy(accountFilter, correlationId) {
    if (Object.keys(accountFilter).length === 0 || Object.values(accountFilter).every((value) => value === null || value === void 0 || value === "")) {
      this.commonLogger.warning("1skb02", correlationId);
      return null;
    }
    const allAccounts = this.getAllAccounts(accountFilter, correlationId);
    if (allAccounts.length > 1) {
      const sortedAccounts = allAccounts.sort((a, b) => {
        const aHasClaims = a.idTokenClaims ? 1 : 0;
        const bHasClaims = b.idTokenClaims ? 1 : 0;
        return bHasClaims - aHasClaims;
      });
      return sortedAccounts[0];
    } else if (allAccounts.length === 1) {
      return allAccounts[0];
    } else {
      return null;
    }
  }
  /**
   * Returns a single matching
   * @param accountFilter
   * @returns
   */
  getBaseAccountInfo(accountFilter, correlationId) {
    const accountEntities = this.getAccountsFilteredBy(accountFilter, correlationId);
    if (accountEntities.length > 0) {
      return getAccountInfo(accountEntities[0]);
    } else {
      return null;
    }
  }
  /**
   * Matches filtered account entities with cached ID tokens that match the tenant profile-specific account filters
   * and builds the account info objects from the matching ID token's claims
   * @param cachedAccounts
   * @param accountFilter
   * @returns Array of AccountInfo objects that match account and tenant profile filters
   */
  buildTenantProfiles(cachedAccounts, correlationId, accountFilter) {
    return cachedAccounts.flatMap((accountEntity) => {
      return this.getTenantProfilesFromAccountEntity(accountEntity, correlationId, accountFilter?.tenantId, accountFilter);
    });
  }
  getTenantedAccountInfoByFilter(accountInfo, tokenKeys, tenantProfile, correlationId, tenantProfileFilter) {
    let tenantedAccountInfo = null;
    let idTokenClaims;
    if (tenantProfileFilter) {
      if (!this.tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter)) {
        return null;
      }
    }
    const idToken = this.getIdToken(accountInfo, correlationId, tokenKeys, tenantProfile.tenantId);
    if (idToken) {
      idTokenClaims = extractTokenClaims(idToken.secret, this.cryptoImpl.base64Decode, correlationId);
      if (!this.idTokenClaimsMatchTenantProfileFilter(idTokenClaims, tenantProfileFilter)) {
        return null;
      }
    }
    tenantedAccountInfo = updateAccountTenantProfileData(accountInfo, tenantProfile, idTokenClaims, idToken?.secret);
    return tenantedAccountInfo;
  }
  getTenantProfilesFromAccountEntity(accountEntity, correlationId, targetTenantId, tenantProfileFilter) {
    const accountInfo = getAccountInfo(accountEntity);
    let searchTenantProfiles = accountInfo.tenantProfiles || /* @__PURE__ */ new Map();
    const tokenKeys = this.getTokenKeys();
    if (targetTenantId) {
      const tenantProfile = searchTenantProfiles.get(targetTenantId);
      if (tenantProfile) {
        searchTenantProfiles = /* @__PURE__ */ new Map([
          [targetTenantId, tenantProfile]
        ]);
      } else {
        return [];
      }
    }
    const matchingTenantProfiles = [];
    searchTenantProfiles.forEach((tenantProfile) => {
      const tenantedAccountInfo = this.getTenantedAccountInfoByFilter(accountInfo, tokenKeys, tenantProfile, correlationId, tenantProfileFilter);
      if (tenantedAccountInfo) {
        matchingTenantProfiles.push(tenantedAccountInfo);
      }
    });
    return matchingTenantProfiles;
  }
  tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter) {
    if (!!tenantProfileFilter.localAccountId && !this.matchLocalAccountIdFromTenantProfile(tenantProfile, tenantProfileFilter.localAccountId)) {
      return false;
    }
    if (!!tenantProfileFilter.name && !(tenantProfile.name === tenantProfileFilter.name)) {
      return false;
    }
    if (tenantProfileFilter.isHomeTenant !== void 0 && !(tenantProfile.isHomeTenant === tenantProfileFilter.isHomeTenant)) {
      return false;
    }
    if (!!tenantProfileFilter.username && !this.matchUsername(tenantProfile.username, tenantProfileFilter.username) && !this.matchUsername(tenantProfile.upn, tenantProfileFilter.username)) {
      return false;
    }
    if (!!tenantProfileFilter.loginHint && !this.matchLoginHintWithTenantProfile(tenantProfile, tenantProfileFilter.loginHint)) {
      return false;
    }
    if (!!tenantProfileFilter.upn && !(tenantProfile.upn === tenantProfileFilter.upn)) {
      return false;
    }
    if (!!tenantProfileFilter.nativeAccountId && tenantProfile.nativeAccountId !== tenantProfileFilter.nativeAccountId) {
      return false;
    }
    return true;
  }
  idTokenClaimsMatchTenantProfileFilter(idTokenClaims, tenantProfileFilter) {
    if (tenantProfileFilter) {
      if (!!tenantProfileFilter.localAccountId && !this.matchLocalAccountIdFromTokenClaims(idTokenClaims, tenantProfileFilter.localAccountId)) {
        return false;
      }
      if (!!tenantProfileFilter.loginHint && !this.matchLoginHintFromTokenClaims(idTokenClaims, tenantProfileFilter.loginHint)) {
        return false;
      }
      if (!!tenantProfileFilter.username && !this.matchUsername(idTokenClaims.preferred_username, tenantProfileFilter.username) && !this.matchUsername(idTokenClaims.upn, tenantProfileFilter.username)) {
        return false;
      }
      if (!!tenantProfileFilter.name && !this.matchName(idTokenClaims, tenantProfileFilter.name)) {
        return false;
      }
      if (!!tenantProfileFilter.sid && !this.matchSid(idTokenClaims, tenantProfileFilter.sid)) {
        return false;
      }
    }
    return true;
  }
  /**
   * saves a cache record
   * @param cacheRecord {CacheRecord}
   * @param storeInCache {?StoreInCache}
   * @param correlationId {?string} correlation id
   */
  async saveCacheRecord(cacheRecord, correlationId, kmsi, apiId, storeInCache) {
    if (!cacheRecord) {
      throw createClientAuthError(invalidCacheRecord, correlationId);
    }
    try {
      if (!!cacheRecord.account) {
        await this.setAccount(cacheRecord.account, correlationId, kmsi, apiId);
      }
      if (!!cacheRecord.idToken && storeInCache?.idToken !== false) {
        await this.setIdTokenCredential(cacheRecord.idToken, correlationId, kmsi);
      }
      if (!!cacheRecord.accessToken && storeInCache?.accessToken !== false) {
        await this.saveAccessToken(cacheRecord.accessToken, correlationId, kmsi);
      }
      if (!!cacheRecord.refreshToken && storeInCache?.refreshToken !== false) {
        await this.setRefreshTokenCredential(cacheRecord.refreshToken, correlationId, kmsi);
      }
      if (!!cacheRecord.appMetadata) {
        this.setAppMetadata(cacheRecord.appMetadata, correlationId);
      }
    } catch (e) {
      this.commonLogger?.error("0j476p", correlationId);
      if (e instanceof AuthError) {
        throw e;
      } else {
        throw createCacheError(e);
      }
    }
  }
  /**
   * saves access token credential
   * @param credential - the access token entity to save
   * @param correlationId - unique identifier for the request
   * @param kmsi - keep me signed in flag
   */
  async saveAccessToken(credential, correlationId, kmsi) {
    let additionalCacheKeyHash;
    if (credential.additionalCacheKeyComponents && Object.keys(credential.additionalCacheKeyComponents).length > 0) {
      additionalCacheKeyHash = await this.cryptoImpl.hashString(JSON.stringify(credential.additionalCacheKeyComponents));
    }
    const accessTokenFilter = {
      clientId: credential.clientId,
      credentialType: credential.credentialType,
      environment: credential.environment,
      homeAccountId: credential.homeAccountId,
      realm: credential.realm,
      tokenType: credential.tokenType
    };
    const tokenKeys = this.getTokenKeys();
    const currentScopes = ScopeSet.fromString(credential.target, correlationId);
    tokenKeys.accessToken.forEach((key) => {
      if (!this.accessTokenKeyMatchesFilter(key, accessTokenFilter, false)) {
        return;
      }
      const tokenEntity = this.getAccessTokenCredential(key, correlationId);
      if (tokenEntity && this.credentialMatchesFilter(tokenEntity, accessTokenFilter, correlationId)) {
        const tokenScopeSet = ScopeSet.fromString(tokenEntity.target, correlationId);
        if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
          this.removeAccessToken(key, correlationId);
        }
      }
    });
    await this.setAccessTokenCredential(credential, correlationId, kmsi, additionalCacheKeyHash);
  }
  /**
   * Retrieve account entities matching all provided tenant-agnostic filters; if no filter is set, get all account entities in the cache
   * Not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
   * @param accountFilter - An object containing Account properties to filter by
   */
  getAccountsFilteredBy(accountFilter, correlationId) {
    const allAccountKeys = this.getAccountKeys();
    const matchingAccounts = [];
    allAccountKeys.forEach((cacheKey) => {
      const entity = this.getAccount(cacheKey, correlationId);
      if (!entity) {
        return;
      }
      if (!!accountFilter.homeAccountId && !this.matchHomeAccountId(entity, accountFilter.homeAccountId)) {
        return;
      }
      if (!!accountFilter.environment && !this.matchEnvironment(entity, accountFilter.environment, correlationId)) {
        return;
      }
      if (!!accountFilter.realm && !this.matchRealm(entity, accountFilter.realm)) {
        return;
      }
      if (!!accountFilter.authorityType && !this.matchAuthorityType(entity, accountFilter.authorityType)) {
        return;
      }
      const tenantProfileFilter = {
        localAccountId: accountFilter?.localAccountId,
        name: accountFilter?.name,
        username: accountFilter?.username,
        loginHint: accountFilter?.loginHint,
        upn: accountFilter?.upn,
        nativeAccountId: accountFilter?.nativeAccountId
      };
      const matchingTenantProfiles = entity.tenantProfiles?.filter((tenantProfile) => {
        return this.tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter);
      });
      if (matchingTenantProfiles && matchingTenantProfiles.length === 0) {
        return;
      }
      matchingAccounts.push(entity);
    });
    return matchingAccounts;
  }
  /**
   * Returns whether or not the given credential entity matches the filter
   * @param entity
   * @param filter
   * @param correlationId
   * @returns
   */
  credentialMatchesFilter(entity, filter, correlationId) {
    if (!!filter.clientId && !this.matchClientId(entity, filter.clientId)) {
      return false;
    }
    if (!!filter.userAssertionHash && !this.matchUserAssertionHash(entity, filter.userAssertionHash)) {
      return false;
    }
    if (typeof filter.homeAccountId === "string" && !this.matchHomeAccountId(entity, filter.homeAccountId)) {
      return false;
    }
    if (!!filter.environment && !this.matchEnvironment(entity, filter.environment, correlationId)) {
      return false;
    }
    if (!!filter.realm && !this.matchRealm(entity, filter.realm)) {
      return false;
    }
    if (!!filter.credentialType && !this.matchCredentialType(entity, filter.credentialType)) {
      return false;
    }
    if (!!filter.familyId && !this.matchFamilyId(entity, filter.familyId)) {
      return false;
    }
    if (!!filter.target && !this.matchTarget(entity, filter.target, correlationId)) {
      return false;
    }
    if (entity.credentialType === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
      if (!this.matchAccessTokenWithAuthScheme(entity, filter)) {
        return false;
      }
    }
    const entityComponents = entity.additionalCacheKeyComponents;
    const filterComponents = filter.additionalCacheKeyComponents;
    const entityHasComponents = !!entityComponents && Object.keys(entityComponents).length > 0;
    const filterHasComponents = !!filterComponents && Object.keys(filterComponents).length > 0;
    if (entityHasComponents !== filterHasComponents) {
      return false;
    }
    if (entityHasComponents && filterHasComponents) {
      const entityKeys = Object.keys(entityComponents).sort();
      const filterKeys = Object.keys(filterComponents).sort();
      if (entityKeys.length !== filterKeys.length) {
        return false;
      }
      for (let i = 0; i < entityKeys.length; i++) {
        if (entityKeys[i] !== filterKeys[i] || entityComponents[entityKeys[i]] !== filterComponents[filterKeys[i]]) {
          return false;
        }
      }
    }
    return true;
  }
  /**
   * retrieve appMetadata matching all provided filters; if no filter is set, get all appMetadata
   * @param filter
   * @param correlationId
   */
  getAppMetadataFilteredBy(filter, correlationId) {
    const allCacheKeys = this.getKeys();
    const matchingAppMetadata = {};
    allCacheKeys.forEach((cacheKey) => {
      if (!this.isAppMetadata(cacheKey)) {
        return;
      }
      const entity = this.getAppMetadata(cacheKey, correlationId);
      if (!entity) {
        return;
      }
      if (!!filter.environment && !this.matchEnvironment(entity, filter.environment, correlationId)) {
        return;
      }
      if (!!filter.clientId && !this.matchClientId(entity, filter.clientId)) {
        return;
      }
      matchingAppMetadata[cacheKey] = entity;
    });
    return matchingAppMetadata;
  }
  /**
   * retrieve authorityMetadata that contains a matching alias
   * @param host
   * @param correlationId
   */
  getAuthorityMetadataByAlias(host, correlationId) {
    const allCacheKeys = this.getAuthorityMetadataKeys();
    let matchedEntity = null;
    allCacheKeys.forEach((cacheKey) => {
      if (!this.isAuthorityMetadata(cacheKey) || cacheKey.indexOf(this.clientId) === -1) {
        return;
      }
      const entity = this.getAuthorityMetadata(cacheKey, correlationId);
      if (!entity) {
        return;
      }
      if (entity.aliases.indexOf(host) === -1) {
        return;
      }
      matchedEntity = entity;
    });
    return matchedEntity;
  }
  /**
   * Removes all accounts and related tokens from cache.
   */
  removeAllAccounts(correlationId) {
    const accounts = this.getAllAccounts({}, correlationId);
    accounts.forEach((account) => {
      this.removeAccount(account, correlationId);
    });
  }
  /**
   * Removes the account and related tokens for a given account key
   * @param account
   */
  removeAccount(account, correlationId) {
    this.removeAccountContext(account, correlationId);
    const accountKeys = this.getAccountKeys();
    const keyFilter = (key) => {
      return key.includes(account.homeAccountId) && key.includes(account.environment);
    };
    accountKeys.filter(keyFilter).forEach((key) => {
      this.removeItem(key, correlationId);
      this.performanceClient.incrementFields({ accountsRemoved: 1 }, correlationId);
    });
  }
  /**
   * Removes credentials associated with the provided account
   * @param account
   */
  removeAccountContext(account, correlationId) {
    const allTokenKeys = this.getTokenKeys();
    const keyFilter = (key) => {
      return key.includes(account.homeAccountId) && key.includes(account.environment);
    };
    allTokenKeys.idToken.filter(keyFilter).forEach((key) => {
      this.removeIdToken(key, correlationId);
    });
    allTokenKeys.accessToken.filter(keyFilter).forEach((key) => {
      this.removeAccessToken(key, correlationId);
    });
    allTokenKeys.refreshToken.filter(keyFilter).forEach((key) => {
      this.removeRefreshToken(key, correlationId);
    });
  }
  /**
   * returns a boolean if the given credential is removed
   * @param key
   * @param correlationId
   */
  removeAccessToken(key, correlationId) {
    const credential = this.getAccessTokenCredential(key, correlationId);
    if (!credential) {
      return;
    }
    this.removeItem(key, correlationId);
    this.performanceClient.incrementFields({ accessTokensRemoved: 1 }, correlationId);
    if (credential.credentialType.toLowerCase() === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) {
      const tokenType = credential.tokenType?.toLowerCase();
      switch (tokenType) {
        case AuthenticationScheme.POP:
        case AuthenticationScheme.DPOP.toLowerCase(): {
          const accessTokenWithAuthSchemeEntity = credential;
          const kid = accessTokenWithAuthSchemeEntity.keyId;
          if (kid) {
            void this.tokenBindingKeyManager.removeTokenBindingKey(kid, correlationId).catch(() => {
              this.commonLogger.error("0id34f", correlationId);
              this.performanceClient?.incrementFields({ removeTokenBindingKeyFailure: 1 }, correlationId);
            });
          }
          break;
        }
      }
    }
  }
  /**
   * Removes all app metadata objects from cache.
   */
  removeAppMetadata(correlationId) {
    const allCacheKeys = this.getKeys();
    allCacheKeys.forEach((cacheKey) => {
      if (this.isAppMetadata(cacheKey)) {
        this.removeItem(cacheKey, correlationId);
      }
    });
    return true;
  }
  /**
   * Retrieve IdTokenEntity from cache
   * @param account {AccountInfo}
   * @param tokenKeys {?TokenKeys}
   * @param targetRealm {?string}
   * @param performanceClient {?IPerformanceClient}
   * @param correlationId {?string}
   */
  getIdToken(account, correlationId, tokenKeys, targetRealm) {
    this.commonLogger.trace("1drz22", correlationId);
    const idTokenFilter = {
      homeAccountId: account.homeAccountId,
      environment: account.environment,
      credentialType: CredentialType.ID_TOKEN,
      clientId: this.clientId,
      realm: targetRealm
    };
    const idTokenMap = this.getIdTokensByFilter(idTokenFilter, correlationId, tokenKeys);
    const numIdTokens = idTokenMap.size;
    if (numIdTokens < 1) {
      this.commonLogger.info("1atvtd", correlationId);
      return null;
    } else if (numIdTokens > 1) {
      let tokensToBeRemoved = idTokenMap;
      if (!targetRealm) {
        const homeIdTokenMap = /* @__PURE__ */ new Map();
        idTokenMap.forEach((idToken, key) => {
          if (idToken.realm === account.tenantId) {
            homeIdTokenMap.set(key, idToken);
          }
        });
        const numHomeIdTokens = homeIdTokenMap.size;
        if (numHomeIdTokens < 1) {
          this.commonLogger.info("0ooalx", correlationId);
          return idTokenMap.values().next().value ?? null;
        } else if (numHomeIdTokens === 1) {
          this.commonLogger.info("1eq2vc", correlationId);
          return homeIdTokenMap.values().next().value ?? null;
        } else {
          tokensToBeRemoved = homeIdTokenMap;
        }
      }
      this.commonLogger.info("1ws328", correlationId);
      tokensToBeRemoved.forEach((idToken, key) => {
        this.removeIdToken(key, correlationId);
      });
      this.performanceClient.addFields({ multiMatchedID: idTokenMap.size }, correlationId);
      return null;
    }
    this.commonLogger.info("1sm769", correlationId);
    return idTokenMap.values().next().value ?? null;
  }
  /**
   * Gets all idTokens matching the given filter
   * @param filter
   * @returns
   */
  getIdTokensByFilter(filter, correlationId, tokenKeys) {
    const idTokenKeys = tokenKeys && tokenKeys.idToken || this.getTokenKeys().idToken;
    const idTokens = /* @__PURE__ */ new Map();
    idTokenKeys.forEach((key) => {
      if (!this.idTokenKeyMatchesFilter(key, __spreadValues({
        clientId: this.clientId
      }, filter))) {
        return;
      }
      const idToken = this.getIdTokenCredential(key, correlationId);
      if (idToken && this.credentialMatchesFilter(idToken, filter, correlationId)) {
        idTokens.set(key, idToken);
      }
    });
    return idTokens;
  }
  /**
   * Validate the cache key against filter before retrieving and parsing cache value
   * @param key
   * @param filter
   * @returns
   */
  idTokenKeyMatchesFilter(inputKey, filter) {
    const key = inputKey.toLowerCase();
    if (filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
      return false;
    }
    if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
      return false;
    }
    return true;
  }
  /**
   * Removes idToken from the cache
   * @param key
   */
  removeIdToken(key, correlationId) {
    this.removeItem(key, correlationId);
  }
  /**
   * Removes refresh token from the cache
   * @param key
   */
  removeRefreshToken(key, correlationId) {
    this.removeItem(key, correlationId);
  }
  /**
   * Retrieve AccessTokenEntity from cache
   * @param account {AccountInfo}
   * @param request {BaseAuthRequest}
   * @param tokenKeys {?TokenKeys}
   * @param performanceClient {?IPerformanceClient}
   */
  getAccessToken(account, request, tokenKeys, targetRealm) {
    const correlationId = request.correlationId;
    this.commonLogger.trace("1t7hz1", correlationId);
    const scopes = ScopeSet.createSearchScopes(request.scopes, correlationId);
    const authScheme = request.authenticationScheme || AuthenticationScheme.BEARER;
    const credentialType = authScheme && authScheme.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase() ? CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME : CredentialType.ACCESS_TOKEN;
    const attributeTokenPartition = serializeAttributeTokens(request.attributeTokens);
    const additionalCacheKeyComponents = attributeTokenPartition ? {
      attribute_tokens: attributeTokenPartition
    } : void 0;
    const accessTokenFilter = {
      homeAccountId: account.homeAccountId,
      environment: account.environment,
      credentialType,
      clientId: this.clientId,
      realm: targetRealm || account.tenantId,
      target: scopes,
      tokenType: authScheme,
      keyId: authScheme === AuthenticationScheme.SSH ? request.sshKid : void 0,
      additionalCacheKeyComponents
    };
    const accessTokenKeys = tokenKeys && tokenKeys.accessToken || this.getTokenKeys().accessToken;
    const accessTokens = [];
    const matchedKeys = [];
    accessTokenKeys.forEach((key) => {
      if (this.accessTokenKeyMatchesFilter(key, accessTokenFilter, true)) {
        const accessToken = this.getAccessTokenCredential(key, correlationId);
        if (accessToken && this.credentialMatchesFilter(accessToken, accessTokenFilter, correlationId)) {
          accessTokens.push(accessToken);
          matchedKeys.push(key);
        }
      }
    });
    if (accessTokens.length < 1) {
      this.commonLogger.info("1nckna", correlationId);
      return null;
    } else if (accessTokens.length > 1) {
      this.commonLogger.info("1wkfwp", correlationId);
      matchedKeys.forEach((key) => {
        this.removeAccessToken(key, correlationId);
      });
      this.performanceClient.addFields({ multiMatchedAT: accessTokens.length }, correlationId);
      return null;
    }
    this.commonLogger.info("06yt98", correlationId);
    return accessTokens[0];
  }
  /**
   * Validate the cache key against filter before retrieving and parsing cache value
   * @param key
   * @param filter
   * @param keyMustContainAllScopes
   * @returns
   */
  accessTokenKeyMatchesFilter(inputKey, filter, keyMustContainAllScopes) {
    const key = inputKey.toLowerCase();
    if (filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
      return false;
    }
    if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
      return false;
    }
    if (filter.realm && key.indexOf(filter.realm.toLowerCase()) === -1) {
      return false;
    }
    if (filter.target) {
      const scopes = filter.target.asArray();
      for (let i = 0; i < scopes.length; i++) {
        if (keyMustContainAllScopes && !key.includes(scopes[i].toLowerCase())) {
          return false;
        } else if (!keyMustContainAllScopes && key.includes(scopes[i].toLowerCase())) {
          return true;
        }
      }
    }
    return true;
  }
  /**
   * Gets all access tokens matching the filter
   * @param filter
   * @returns
   */
  getAccessTokensByFilter(filter, correlationId) {
    const tokenKeys = this.getTokenKeys();
    const accessTokens = [];
    tokenKeys.accessToken.forEach((key) => {
      if (!this.accessTokenKeyMatchesFilter(key, filter, true)) {
        return;
      }
      const accessToken = this.getAccessTokenCredential(key, correlationId);
      if (accessToken && this.credentialMatchesFilter(accessToken, filter, correlationId)) {
        accessTokens.push(accessToken);
      }
    });
    return accessTokens;
  }
  /**
   * Helper to retrieve the appropriate refresh token from cache
   * @param account {AccountInfo}
   * @param familyRT {boolean}
   * @param tokenKeys {?TokenKeys}
   * @param performanceClient {?IPerformanceClient}
   * @param correlationId {?string}
   */
  getRefreshToken(account, familyRT, correlationId, tokenKeys) {
    this.commonLogger.trace("0x53vi", correlationId);
    const id = familyRT ? THE_FAMILY_ID : void 0;
    const refreshTokenFilter = {
      homeAccountId: account.homeAccountId,
      environment: account.environment,
      credentialType: CredentialType.REFRESH_TOKEN,
      clientId: this.clientId,
      familyId: id
    };
    const refreshTokenKeys = tokenKeys && tokenKeys.refreshToken || this.getTokenKeys().refreshToken;
    const refreshTokens = [];
    refreshTokenKeys.forEach((key) => {
      if (this.refreshTokenKeyMatchesFilter(key, refreshTokenFilter)) {
        const refreshToken = this.getRefreshTokenCredential(key, correlationId);
        if (refreshToken && this.credentialMatchesFilter(refreshToken, refreshTokenFilter, correlationId)) {
          refreshTokens.push(refreshToken);
        }
      }
    });
    const numRefreshTokens = refreshTokens.length;
    if (numRefreshTokens < 1) {
      this.commonLogger.info("0dlw11", correlationId);
      return null;
    }
    if (numRefreshTokens > 1) {
      this.performanceClient.addFields({ multiMatchedRT: numRefreshTokens }, correlationId);
    }
    this.commonLogger.info("0wcnep", correlationId);
    return refreshTokens[0];
  }
  /**
   * Validate the cache key against filter before retrieving and parsing cache value
   * @param key
   * @param filter
   */
  refreshTokenKeyMatchesFilter(inputKey, filter) {
    const key = inputKey.toLowerCase();
    if (filter.familyId && key.indexOf(filter.familyId.toLowerCase()) === -1) {
      return false;
    }
    if (!filter.familyId && filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
      return false;
    }
    if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
      return false;
    }
    return true;
  }
  /**
   * Retrieve AppMetadataEntity from cache
   */
  readAppMetadataFromCache(environment, correlationId) {
    const appMetadataFilter = {
      environment,
      clientId: this.clientId
    };
    const appMetadata = this.getAppMetadataFilteredBy(appMetadataFilter, correlationId);
    const appMetadataEntries = Object.keys(appMetadata).map((key) => appMetadata[key]);
    const numAppMetadata = appMetadataEntries.length;
    if (numAppMetadata < 1) {
      return null;
    } else if (numAppMetadata > 1) {
      throw createClientAuthError(multipleMatchingAppMetadata, correlationId);
    }
    return appMetadataEntries[0];
  }
  /**
   * Return the family_id value associated  with FOCI
   * @param environment
   * @param clientId
   */
  isAppMetadataFOCI(environment, correlationId) {
    const appMetadata = this.readAppMetadataFromCache(environment, correlationId);
    return !!(appMetadata && appMetadata.familyId === THE_FAMILY_ID);
  }
  /**
   * helper to match account ids
   * @param value
   * @param homeAccountId
   */
  matchHomeAccountId(entity, homeAccountId) {
    return !!(typeof entity.homeAccountId === "string" && homeAccountId === entity.homeAccountId);
  }
  /**
   * helper to match account ids
   * @param entity
   * @param localAccountId
   * @returns
   */
  matchLocalAccountIdFromTokenClaims(tokenClaims, localAccountId) {
    const idTokenLocalAccountId = tokenClaims.oid || tokenClaims.sub;
    return localAccountId === idTokenLocalAccountId;
  }
  matchLocalAccountIdFromTenantProfile(tenantProfile, localAccountId) {
    return tenantProfile.localAccountId === localAccountId;
  }
  /**
   * helper to match names
   * @param entity
   * @param name
   * @returns true if the downcased name properties are present and match in the filter and the entity
   */
  matchName(claims, name3) {
    return !!(name3.toLowerCase() === claims.name?.toLowerCase());
  }
  /**
   * helper to match usernames
   * @param entity
   * @param username
   * @returns
   */
  matchUsername(cachedUsername, filterUsername) {
    return !!(cachedUsername && typeof cachedUsername === "string" && filterUsername?.toLowerCase() === cachedUsername.toLowerCase());
  }
  /**
   * helper to match loginhints
   * @param entity
   * @param loginHint
   * @returns
   */
  matchLoginHintWithTenantProfile(tenantProfile, loginHintFilter) {
    return tenantProfile.loginHint === loginHintFilter || tenantProfile.username === loginHintFilter || tenantProfile.upn === loginHintFilter;
  }
  /**
   * helper to match assertion
   * @param value
   * @param oboAssertion
   */
  matchUserAssertionHash(entity, userAssertionHash) {
    return !!(entity.userAssertionHash && userAssertionHash === entity.userAssertionHash);
  }
  /**
   * helper to match environment
   * @param value
   * @param environment
   */
  matchEnvironment(entity, environment, correlationId) {
    if (this.staticAuthorityOptions) {
      const staticAliases = getAliasesFromStaticSources(this.staticAuthorityOptions, this.commonLogger, correlationId);
      if (staticAliases.includes(environment) && staticAliases.includes(entity.environment)) {
        return true;
      }
    }
    const cloudMetadata = this.getAuthorityMetadataByAlias(environment, correlationId);
    if (cloudMetadata && cloudMetadata.aliases.indexOf(entity.environment) > -1) {
      return true;
    }
    return false;
  }
  /**
   * helper to match credential type
   * @param entity
   * @param credentialType
   */
  matchCredentialType(entity, credentialType) {
    return entity.credentialType && credentialType.toLowerCase() === entity.credentialType.toLowerCase();
  }
  /**
   * helper to match client ids
   * @param entity
   * @param clientId
   */
  matchClientId(entity, clientId) {
    return !!(entity.clientId && clientId === entity.clientId);
  }
  /**
   * helper to match family ids
   * @param entity
   * @param familyId
   */
  matchFamilyId(entity, familyId) {
    return !!(entity.familyId && familyId === entity.familyId);
  }
  /**
   * helper to match realm
   * @param entity
   * @param realm
   */
  matchRealm(entity, realm) {
    return !!(entity.realm?.toLowerCase() === realm.toLowerCase());
  }
  /**
   * helper to match loginHint which can be either:
   * 1. login_hint ID token claim
   * 2. username in cached account object
   * 3. upn in ID token claims
   * @param entity
   * @param loginHint
   * @returns
   */
  matchLoginHintFromTokenClaims(tokenClaims, loginHint) {
    if (tokenClaims.login_hint === loginHint) {
      return true;
    }
    if (tokenClaims.preferred_username === loginHint) {
      return true;
    }
    if (tokenClaims.upn === loginHint) {
      return true;
    }
    if (tokenClaims.emails && tokenClaims.emails.includes(loginHint)) {
      return true;
    }
    return false;
  }
  /**
   * Helper to match sid
   * @param entity
   * @param sid
   * @returns true if the sid claim is present and matches the filter
   */
  matchSid(idTokenClaims, sid) {
    return idTokenClaims.sid === sid;
  }
  matchAuthorityType(entity, authorityType) {
    return !!(entity.authorityType && authorityType.toLowerCase() === entity.authorityType.toLowerCase());
  }
  /**
   * Returns true if the target scopes are a subset of the current entity's scopes, false otherwise.
   * @param entity
   * @param target
   */
  matchTarget(entity, target, correlationId) {
    const isNotAccessTokenCredential = entity.credentialType !== CredentialType.ACCESS_TOKEN && entity.credentialType !== CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
    if (isNotAccessTokenCredential || !entity.target) {
      return false;
    }
    const entityScopeSet = ScopeSet.fromString(entity.target, correlationId);
    return entityScopeSet.containsScopeSet(target);
  }
  /**
   * Returns true if the credential's tokenType or Authentication Scheme matches the one in the request, false otherwise
   * @param entity
   * @param tokenType
   */
  matchTokenType(entity, tokenType) {
    return !!(entity.tokenType && entity.tokenType.toLowerCase() === tokenType.toLowerCase());
  }
  matchAccessTokenWithAuthScheme(entity, filter) {
    const normalizedFilterTokenType = filter.tokenType?.toLowerCase();
    if (!!filter.tokenType && !this.matchTokenType(entity, filter.tokenType)) {
      return false;
    }
    switch (normalizedFilterTokenType) {
      case "dpop":
      case AuthenticationScheme.SSH:
        return this.matchKeyBoundAccessToken(entity, filter);
      default:
        return true;
    }
  }
  matchKeyBoundAccessToken(entity, filter) {
    if (!filter.keyId) {
      return true;
    }
    return this.matchKeyId(entity, filter.keyId);
  }
  /**
   * Returns true if the credential's keyId matches the one in the request, false otherwise
   * @param entity
   * @param keyId
   */
  matchKeyId(entity, keyId) {
    return !!(entity.keyId && entity.keyId === keyId);
  }
  /**
   * returns if a given cache entity is of the type appmetadata
   * @param key
   */
  isAppMetadata(key) {
    return key.indexOf(APP_METADATA) !== -1;
  }
  /**
   * returns if a given cache entity is of the type authoritymetadata
   * @param key
   */
  isAuthorityMetadata(key) {
    return key.indexOf(AUTHORITY_METADATA_CACHE_KEY) !== -1;
  }
  /**
   * returns cache key used for cloud instance metadata
   */
  generateAuthorityMetadataCacheKey(authority) {
    return `${AUTHORITY_METADATA_CACHE_KEY}-${this.clientId}-${authority}`;
  }
  /**
   * Helper to convert serialized data to object
   * @param obj
   * @param json
   */
  static toObject(obj, json) {
    for (const propertyName in json) {
      obj[propertyName] = json[propertyName];
    }
    return obj;
  }
};
var DefaultStorageClass = class extends CacheManager {
  async setAccount() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  getAccount() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  async setIdTokenCredential() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  getIdTokenCredential() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  async setAccessTokenCredential() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  getAccessTokenCredential() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  async setRefreshTokenCredential() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  getRefreshTokenCredential() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  setAppMetadata() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  getAppMetadata() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  setServerTelemetry() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  getServerTelemetry() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  setAuthorityMetadata() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  getAuthorityMetadata() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  getAuthorityMetadataKeys() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  setThrottlingCache() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  getThrottlingCache() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  removeItem() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  getKeys() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  getAccountKeys() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  getTokenKeys() {
    throw createClientAuthError(methodNotImplemented, "");
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  generateCredentialKey(_credential, _hash) {
    throw createClientAuthError(methodNotImplemented, "");
  }
  generateAccountKey() {
    throw createClientAuthError(methodNotImplemented, "");
  }
};

// node_modules/@azure/msal-common/dist-browser/telemetry/performance/PerformanceEvent.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var PerformanceEventStatus = {
  NotStarted: 0,
  InProgress: 1,
  Completed: 2
};
var EXT_FIELD_PREFIX = "ext.";
var IntFields = /* @__PURE__ */ new Set([
  "accessTokenSize",
  "durationMs",
  "idTokenSize",
  "matsSilentStatus",
  "matsHttpStatus",
  "refreshTokenSize",
  "startTimeMs",
  "status",
  "multiMatchedAT",
  "multiMatchedID",
  "multiMatchedRT",
  "unencryptedCacheCount",
  "encryptedCacheExpiredCount",
  "oldAccountCount",
  "oldAccessCount",
  "oldIdCount",
  "oldRefreshCount",
  "currAccountCount",
  "currAccessCount",
  "currIdCount",
  "currRefreshCount",
  "ttlExpiredAcntCount",
  "ttlExpiredITCount",
  "ttlExpiredATCount",
  "ttlExpiredRTCount",
  "decryptFailedAcntCount",
  "decryptFailedITCount",
  "decryptFailedATCount",
  "decryptFailedRTCount",
  "invalidAcntCount",
  "invalidITCount",
  "invalidATCount",
  "invalidRTCount",
  "expiredATCount",
  "expiredRTCount",
  "upgradedCacheCount",
  "cacheMatchedAccounts",
  "networkRtt",
  "redirectBridgeTimeoutMs",
  "redirectBridgeMessageVersion",
  "fetchRetryCount"
]);

// node_modules/@azure/msal-common/dist-browser/telemetry/performance/StubPerformanceClient.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var StubPerformanceClient = class {
  generateId() {
    return "callback-id";
  }
  startMeasurement(measureName, correlationId) {
    return {
      end: () => null,
      discard: () => {
      },
      add: () => {
      },
      increment: () => {
      },
      event: {
        eventId: this.generateId(),
        status: PerformanceEventStatus.InProgress,
        authority: "",
        libraryName: "",
        libraryVersion: "",
        clientId: "",
        name: measureName,
        startTimeMs: Date.now(),
        correlationId: correlationId || ""
      }
    };
  }
  endMeasurement() {
    return null;
  }
  discardMeasurements() {
    return;
  }
  removePerformanceCallback() {
    return true;
  }
  addPerformanceCallback() {
    return "";
  }
  emitEvents() {
    return;
  }
  addFields() {
    return;
  }
  addGlobalFields() {
    return;
  }
  incrementFields() {
    return;
  }
  cacheEventByCorrelationId() {
    return;
  }
};

// node_modules/@azure/msal-common/dist-browser/config/ClientConfiguration.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var DEFAULT_SYSTEM_OPTIONS = {
  tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
  preventCorsPreflight: false
};
var DEFAULT_LOGGER_IMPLEMENTATION = {
  loggerCallback: () => {
  },
  piiLoggingEnabled: false,
  logLevel: LogLevel.Info,
  correlationId: ""
};
var DEFAULT_NETWORK_IMPLEMENTATION = {
  async sendGetRequestAsync() {
    throw createClientAuthError(methodNotImplemented, "");
  },
  async sendPostRequestAsync() {
    throw createClientAuthError(methodNotImplemented, "");
  }
};
var DEFAULT_LIBRARY_INFO = {
  sku: SKU,
  version,
  cpu: "",
  os: ""
};
var DEFAULT_CLIENT_CREDENTIALS = {
  clientSecret: "",
  clientAssertion: void 0
};
var DEFAULT_AZURE_CLOUD_OPTIONS = {
  azureCloudInstance: AzureCloudInstance.None,
  tenant: `${DEFAULT_COMMON_TENANT}`
};
var DEFAULT_TELEMETRY_OPTIONS = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function buildClientConfiguration({ authOptions: userAuthOptions, systemOptions: userSystemOptions, loggerOptions: userLoggerOption, storageInterface: storageImplementation, networkInterface: networkImplementation, cryptoInterface: cryptoImplementation, tokenBindingKeyManager, clientCredentials, libraryInfo, telemetry, serverTelemetryManager, persistencePlugin, serializableCache }) {
  const loggerOptions = __spreadValues(__spreadValues({}, DEFAULT_LOGGER_IMPLEMENTATION), userLoggerOption);
  const resolvedTokenBindingKeyManager = tokenBindingKeyManager || DEFAULT_TOKEN_BINDING_KEY_MANAGER;
  return {
    authOptions: buildAuthOptions(userAuthOptions),
    systemOptions: __spreadValues(__spreadValues({}, DEFAULT_SYSTEM_OPTIONS), userSystemOptions),
    loggerOptions,
    storageInterface: storageImplementation || new DefaultStorageClass(userAuthOptions.clientId, DEFAULT_CRYPTO_IMPLEMENTATION, new Logger(loggerOptions, name, version), new StubPerformanceClient(), void 0, resolvedTokenBindingKeyManager),
    networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
    cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
    tokenBindingKeyManager: resolvedTokenBindingKeyManager,
    clientCredentials: clientCredentials || DEFAULT_CLIENT_CREDENTIALS,
    libraryInfo: __spreadValues(__spreadValues({}, DEFAULT_LIBRARY_INFO), libraryInfo),
    telemetry: __spreadValues(__spreadValues({}, DEFAULT_TELEMETRY_OPTIONS), telemetry),
    serverTelemetryManager: serverTelemetryManager || null,
    persistencePlugin: persistencePlugin || null,
    serializableCache: serializableCache || null
  };
}
function buildAuthOptions(authOptions) {
  return __spreadValues({
    clientCapabilities: [],
    azureCloudOptions: DEFAULT_AZURE_CLOUD_OPTIONS,
    instanceAware: false,
    isMcp: false
  }, authOptions);
}
function isOidcProtocolMode(config) {
  return config.authOptions.authority.options.protocolMode === ProtocolMode.OIDC;
}

// node_modules/@azure/msal-common/dist-browser/cache/persistence/TokenCacheContext.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var TokenCacheContext = class {
  constructor(tokenCache, hasChanged) {
    this.cache = tokenCache;
    this.hasChanged = hasChanged;
  }
  /**
   * boolean which indicates the changes in cache
   */
  get cacheHasChanged() {
    return this.hasChanged;
  }
  /**
   * function to retrieve the token cache
   */
  get tokenCache() {
    return this.cache;
  }
};

// node_modules/@azure/msal-common/dist-browser/error/JoseHeaderError.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var JoseHeaderError = class _JoseHeaderError extends AuthError {
  constructor(errorCode, correlationId, errorMessage) {
    super(errorCode, correlationId, errorMessage);
    this.name = "JoseHeaderError";
    Object.setPrototypeOf(this, _JoseHeaderError.prototype);
  }
};
function createJoseHeaderError(code, correlationId) {
  return new JoseHeaderError(code, correlationId);
}

// node_modules/@azure/msal-common/dist-browser/utils/ObjectUtils.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function isPlainObject2(value) {
  if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

// node_modules/@azure/msal-common/dist-browser/error/JoseHeaderErrorCodes.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var missingKidError = "missing_kid_error";
var missingAlgError = "missing_alg_error";
var missingJwkError = "missing_jwk_error";
var invalidJwkError = "invalid_jwk_error";

// node_modules/@azure/msal-common/dist-browser/crypto/JoseHeader.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var JoseHeader = class _JoseHeader {
  constructor(options, correlationId) {
    if (typeof options.alg !== "string" || !options.alg) {
      throw createJoseHeaderError(missingAlgError, correlationId);
    }
    this.typ = options.typ;
    this.alg = options.alg;
    this.kid = options.kid;
    this.jwk = options.jwk;
  }
  /**
   * Builds SignedHttpRequest formatted JOSE Header from the
   * JOSE Header options provided or previously set on the object.
   * Throws if keyId or algorithm aren't provided since they are required for Access Token Binding.
   * @param shrHeaderOptions
   * @param correlationId
   * @returns
   */
  static getShrHeader(shrHeaderOptions, correlationId) {
    if (!shrHeaderOptions.kid) {
      throw createJoseHeaderError(missingKidError, correlationId);
    }
    if (!shrHeaderOptions.alg) {
      throw createJoseHeaderError(missingAlgError, correlationId);
    }
    return new _JoseHeader({
      // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
      typ: shrHeaderOptions.typ || JsonWebTokenTypes.Pop,
      kid: shrHeaderOptions.kid,
      alg: shrHeaderOptions.alg
    }, correlationId);
  }
  /**
   * Builds a DPoP formatted JOSE Header from the JOSE Header options provided.
   * Throws if public JWK or algorithm aren't provided since they are required for DPoP.
   * @param dpopHeaderOptions
   * @param correlationId
   * @returns
   */
  static getDpopHeader(dpopHeaderOptions, correlationId) {
    if (!isPlainObject2(dpopHeaderOptions.jwk)) {
      throw createJoseHeaderError(missingJwkError, correlationId);
    }
    if (!dpopHeaderOptions.alg) {
      throw createJoseHeaderError(missingAlgError, correlationId);
    }
    if (Object.keys(dpopHeaderOptions.jwk).length === 0) {
      throw createJoseHeaderError(invalidJwkError, correlationId);
    }
    return new _JoseHeader({
      typ: JsonWebTokenTypes.Dpop,
      alg: dpopHeaderOptions.alg,
      jwk: dpopHeaderOptions.jwk
    }, correlationId);
  }
};

// node_modules/@azure/msal-common/dist-browser/crypto/PopTokenGenerator.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var KeyLocation = {
  SW: "sw"
};
var SHR_TOKEN_BINDING_KEY_TYPE = "shr";
var SHR_TOKEN_BINDING_KEY_ALGORITHM = JsonWebTokenAlgorithms.RS256;
var PopTokenGenerator = class {
  constructor(cryptoUtils, tokenBindingKeyManager, performanceClient) {
    this.cryptoUtils = cryptoUtils;
    this.tokenBindingKeyManager = tokenBindingKeyManager;
    this.performanceClient = performanceClient;
  }
  /**
   * Generates the req_cnf validated at the RP in the POP protocol for SHR parameters
   * and returns an object containing the keyid, the full req_cnf string and the req_cnf string hash
   * @param request
   * @returns
   */
  async generateCnf(request, logger) {
    const reqCnf = await invokeAsync(this.generateKid.bind(this), PopTokenGenerateCnf, logger, this.performanceClient, request.correlationId)(request);
    const reqCnfString = this.cryptoUtils.base64UrlEncode(JSON.stringify(reqCnf));
    return {
      kid: reqCnf.kid,
      reqCnfString
    };
  }
  /**
   * Generates key_id for a SHR token request
   * @param request
   * @returns
   */
  async generateKid(request) {
    const kidThumbprint = await this.tokenBindingKeyManager.provisionTokenBindingKey({
      correlationId: request.correlationId,
      tokenBindingKeyType: SHR_TOKEN_BINDING_KEY_TYPE,
      tokenBindingKeyAlgorithm: SHR_TOKEN_BINDING_KEY_ALGORITHM
    });
    return {
      kid: kidThumbprint,
      xms_ksl: KeyLocation.SW
    };
  }
  /**
   * Signs the POP access_token with the local generated key-pair
   * @param accessToken
   * @param request
   * @returns
   */
  async signPopToken(accessToken, keyId, request) {
    return this.signPayload(accessToken, keyId, request);
  }
  /**
   * Utility function to generate the signed JWT for an access_token
   * @param payload
   * @param kid
   * @param request
   * @param claims
   * @returns
   */
  async signPayload(payload, keyId, request, claims) {
    const { resourceRequestMethod, resourceRequestUri, shrClaims, shrNonce, shrOptions } = request;
    const resourceUrlString = resourceRequestUri ? new UrlString(resourceRequestUri, request.correlationId) : void 0;
    const resourceUrlComponents = resourceUrlString?.getUrlComponents();
    const publicKeyJwk = await this.tokenBindingKeyManager.getTokenBindingPublicKeyJwk(keyId, request.correlationId);
    const encodedKeyIdThumbprint = this.cryptoUtils.base64UrlEncode(JSON.stringify({ kid: keyId }));
    const shrAlgorithm = shrOptions?.header?.alg || publicKeyJwk.alg || SHR_TOKEN_BINDING_KEY_ALGORITHM;
    const shrHeader = JoseHeader.getShrHeader(__spreadProps(__spreadValues({}, shrOptions?.header), {
      alg: shrAlgorithm,
      kid: encodedKeyIdThumbprint
    }), request.correlationId);
    const shrPayload = __spreadProps(__spreadValues({
      at: payload,
      ts: nowSeconds(),
      m: resourceRequestMethod?.toUpperCase(),
      u: resourceUrlComponents?.HostNameAndPort,
      nonce: shrNonce || this.cryptoUtils.createNewGuid(),
      p: resourceUrlComponents?.AbsolutePath,
      q: resourceUrlComponents?.QueryString ? [[], resourceUrlComponents.QueryString] : void 0,
      client_claims: shrClaims || void 0
    }, claims), {
      cnf: {
        jwk: publicKeyJwk
      }
    });
    return this.cryptoUtils.signTokenBindingJwt(shrHeader, shrPayload, keyId, request.correlationId);
  }
};

// node_modules/@azure/msal-common/dist-browser/crypto/DpopProofGenerator.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var DPOP_HTM_REGEX = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
var DPOP_TOKEN_BINDING_KEY_TYPE = "dpop";
var DPOP_JWT_HEADER_ALGORITHM = JsonWebTokenAlgorithms.ES256;
function buildProofHeader(publicJwk, correlationId) {
  return JoseHeader.getDpopHeader({
    alg: DPOP_JWT_HEADER_ALGORITHM,
    jwk: publicJwk
  }, correlationId);
}
function normalizeHtm(htm, correlationId) {
  if (typeof htm !== "string" || !DPOP_HTM_REGEX.test(htm)) {
    throw createClientConfigurationError(invalidDpopHtm, correlationId);
  }
  return htm.toUpperCase();
}
function normalizeHtu(url, correlationId) {
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch {
    throw createClientConfigurationError(urlParseError, correlationId);
  }
  if (!/^https:\/\//i.test(url) || parsedUrl.protocol !== "https:" || parsedUrl.username || parsedUrl.password) {
    throw createClientConfigurationError(invalidDpopHtu, correlationId);
  }
  parsedUrl.search = "";
  parsedUrl.hash = "";
  return parsedUrl.href;
}
function validateDpopNonce(nonce, correlationId) {
  if (nonce !== void 0 && nonce.trim().length === 0) {
    throw createClientConfigurationError(invalidDpopNonce, correlationId);
  }
}
var DpopProofGenerator = class {
  constructor(cryptoUtils, tokenBindingKeyManager) {
    this.cryptoUtils = cryptoUtils;
    this.tokenBindingKeyManager = tokenBindingKeyManager;
  }
  /**
   * Provisions a fresh DPoP key and returns the RFC 7638 JWK thumbprint used
   * as `dpop_jkt`.
   */
  async generateJkt(correlationId = "") {
    return this.tokenBindingKeyManager.provisionTokenBindingKey({
      tokenBindingKeyType: DPOP_TOKEN_BINDING_KEY_TYPE,
      tokenBindingKeyAlgorithm: DPOP_JWT_HEADER_ALGORITHM,
      correlationId
    });
  }
  /**
   * Builds RFC 9449 claims for a token-endpoint DPoP proof.
   * - htm is always "POST" because token endpoint requests use HTTP POST (RFC 9449 §5).
   * - htu is the normalized token endpoint URI (query and fragment stripped).
   * - jti is a fresh CSPRNG-backed unique identifier for every proof.
   */
  buildTokenProofClaims(params, correlationId = "") {
    validateDpopNonce(params.nonce, correlationId);
    const claims = {
      jti: this.cryptoUtils.createNewGuid(),
      htm: "POST",
      htu: normalizeHtu(params.tokenEndpoint, correlationId),
      iat: nowSeconds()
    };
    if (params.nonce !== void 0) {
      claims.nonce = params.nonce;
    }
    return claims;
  }
  /**
   * Builds and signs a compact DPoP proof JWT for a token-endpoint request.
   */
  async generateTokenProof(params, keyId, correlationId = "") {
    return this.generateProof(this.buildTokenProofClaims(params, correlationId), keyId, correlationId);
  }
  /**
   * Builds RFC 9449 claims for a resource-endpoint DPoP proof.
   * - htm is uppercased per RFC 9449 §4.2.
   * - htu is the normalized resource URI (query and fragment stripped).
   * - ath is the base64url-encoded SHA-256 hash of the ASCII access token.
   * - jti is a fresh CSPRNG-backed unique identifier for every proof.
   */
  buildResourceProofClaims(params, correlationId = "") {
    validateDpopNonce(params.nonce, correlationId);
    const claims = {
      jti: this.cryptoUtils.createNewGuid(),
      htm: normalizeHtm(params.htm, correlationId),
      htu: normalizeHtu(params.htu, correlationId),
      ath: params.ath,
      iat: nowSeconds()
    };
    if (params.nonce !== void 0) {
      claims.nonce = params.nonce;
    }
    return claims;
  }
  /**
   * Builds and signs a compact DPoP proof JWT for a resource request.
   */
  async generateResourceProof(params, keyId, correlationId = "") {
    const { htu, htm, nonce } = params;
    if (!htu || !htm) {
      throw createClientConfigurationError(dpopMissingResourceContext, correlationId);
    }
    const ath = await this.cryptoUtils.hashString(params.accessToken);
    return this.generateProof(this.buildResourceProofClaims({
      htu,
      htm,
      ath,
      nonce
    }, correlationId), keyId, correlationId);
  }
  async generateProof(claims, keyId, correlationId) {
    const publicJwk = await this.tokenBindingKeyManager.getTokenBindingPublicKeyJwk(keyId, correlationId);
    return this.cryptoUtils.signTokenBindingJwt(buildProofHeader(publicJwk, correlationId), claims, keyId, correlationId);
  }
};

// node_modules/@azure/msal-common/dist-browser/error/InteractionRequiredAuthErrorCodes.mjs
var InteractionRequiredAuthErrorCodes_exports = {};
__export(InteractionRequiredAuthErrorCodes_exports, {
  badToken: () => badToken,
  consentRequired: () => consentRequired,
  interactionRequired: () => interactionRequired,
  interruptedUser: () => interruptedUser,
  loginRequired: () => loginRequired,
  nativeAccountUnavailable: () => nativeAccountUnavailable,
  noTokensFound: () => noTokensFound,
  refreshTokenExpired: () => refreshTokenExpired,
  uiNotAllowed: () => uiNotAllowed
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
var noTokensFound = "no_tokens_found";
var nativeAccountUnavailable = "native_account_unavailable";
var refreshTokenExpired = "refresh_token_expired";
var uiNotAllowed = "ui_not_allowed";
var interactionRequired = "interaction_required";
var consentRequired = "consent_required";
var loginRequired = "login_required";
var badToken = "bad_token";
var interruptedUser = "interrupted_user";

// node_modules/@azure/msal-common/dist-browser/error/InteractionRequiredAuthError.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var InteractionRequiredServerErrorMessage = [
  interactionRequired,
  consentRequired,
  loginRequired,
  badToken,
  uiNotAllowed,
  interruptedUser
];
var InteractionRequiredAuthSubErrorMessage = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required",
  "bad_token",
  "ui_not_allowed",
  "interrupted_user"
];
var InteractionRequiredAuthError = class _InteractionRequiredAuthError extends AuthError {
  constructor(errorCode, correlationId, errorMessage, subError, timestamp, traceId, claims, errorNo) {
    super(errorCode, correlationId, errorMessage, subError);
    Object.setPrototypeOf(this, _InteractionRequiredAuthError.prototype);
    this.timestamp = timestamp || "";
    this.traceId = traceId || "";
    this.claims = claims || "";
    this.name = "InteractionRequiredAuthError";
    this.errorNo = errorNo;
  }
};
function isInteractionRequiredError(errorCode, errorString, subError) {
  const isInteractionRequiredErrorCode = !!errorCode && InteractionRequiredServerErrorMessage.indexOf(errorCode) > -1;
  const isInteractionRequiredSubError = !!subError && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
  const isInteractionRequiredErrorDesc = !!errorString && InteractionRequiredServerErrorMessage.some((irErrorCode) => {
    return errorString.indexOf(irErrorCode) > -1;
  });
  return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
}
function createInteractionRequiredAuthError(errorCode, correlationId, errorMessage) {
  return new InteractionRequiredAuthError(errorCode, correlationId, errorMessage);
}

// node_modules/@azure/msal-common/dist-browser/error/ServerError.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var ServerError = class _ServerError extends AuthError {
  constructor(errorCode, correlationId, errorMessage, subError, errorNo, status) {
    super(errorCode, correlationId, errorMessage, subError);
    this.name = "ServerError";
    this.errorNo = errorNo;
    this.status = status;
    Object.setPrototypeOf(this, _ServerError.prototype);
  }
};

// node_modules/@azure/msal-common/dist-browser/utils/ProtocolUtils.mjs
var ProtocolUtils_exports = {};
__export(ProtocolUtils_exports, {
  generateLibraryState: () => generateLibraryState,
  parseRequestState: () => parseRequestState,
  setRequestState: () => setRequestState
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
function setRequestState(cryptoObj, userState, meta, correlationId) {
  const libraryState = generateLibraryState(cryptoObj, correlationId, meta);
  return userState ? `${libraryState}${RESOURCE_DELIM}${userState}` : libraryState;
}
function generateLibraryState(cryptoObj, correlationId, meta) {
  if (!cryptoObj) {
    throw createClientAuthError(noCryptoObject, correlationId);
  }
  const stateObj = {
    id: cryptoObj.createNewGuid()
  };
  if (meta) {
    stateObj.meta = meta;
  }
  const stateString = JSON.stringify(stateObj);
  return cryptoObj.base64Encode(stateString);
}
function parseRequestState(base64Decode2, state, correlationId) {
  if (!base64Decode2) {
    throw createClientAuthError(noCryptoObject, correlationId);
  }
  if (!state) {
    throw createClientAuthError(invalidState, correlationId);
  }
  try {
    const splitState = state.split(RESOURCE_DELIM);
    const libraryState = splitState[0];
    const userState = splitState.length > 1 ? splitState.slice(1).join(RESOURCE_DELIM) : "";
    const libraryStateString = base64Decode2(libraryState);
    const libraryStateObj = JSON.parse(libraryStateString);
    return {
      userRequestState: userState || "",
      libraryState: libraryStateObj
    };
  } catch (e) {
    throw createClientAuthError(invalidState, correlationId);
  }
}

// node_modules/@azure/msal-common/dist-browser/response/ResponseHandler.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var ResponseHandler = class _ResponseHandler {
  constructor(clientId, cacheStorage, cryptoObj, logger, performanceClient, serializableCache, persistencePlugin, tokenBindingKeyManager = DEFAULT_TOKEN_BINDING_KEY_MANAGER) {
    this.clientId = clientId;
    this.cacheStorage = cacheStorage;
    this.cryptoObj = cryptoObj;
    this.tokenBindingKeyManager = tokenBindingKeyManager;
    this.logger = logger;
    this.performanceClient = performanceClient;
    this.serializableCache = serializableCache;
    this.persistencePlugin = persistencePlugin;
  }
  /**
   * Function which validates server authorization token response.
   * @param serverResponse
   * @param correlationId
   * @param refreshAccessToken
   */
  validateTokenResponse(serverResponse, correlationId, refreshAccessToken) {
    if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
      const errString = `Error(s): ${serverResponse.error_codes || NOT_AVAILABLE} - Timestamp: ${serverResponse.timestamp || NOT_AVAILABLE} - Description: ${serverResponse.error_description || NOT_AVAILABLE} - Correlation ID: ${serverResponse.correlation_id || NOT_AVAILABLE} - Trace ID: ${serverResponse.trace_id || NOT_AVAILABLE}`;
      const serverErrorNo = serverResponse.error_codes?.length ? serverResponse.error_codes[0] : void 0;
      const serverError = new ServerError(serverResponse.error || "", serverResponse.correlation_id || "", errString, serverResponse.suberror, serverErrorNo, serverResponse.status);
      if (refreshAccessToken && serverResponse.status && serverResponse.status >= HTTP_SERVER_ERROR_RANGE_START && serverResponse.status <= HTTP_SERVER_ERROR_RANGE_END) {
        this.logger.warning(`16ks7j ${serverError}`, correlationId);
        return;
      } else if (refreshAccessToken && serverResponse.status && serverResponse.status >= HTTP_CLIENT_ERROR_RANGE_START && serverResponse.status <= HTTP_CLIENT_ERROR_RANGE_END) {
        this.logger.warning(`0g61x3 ${serverError}`, correlationId);
        return;
      }
      if (isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
        throw new InteractionRequiredAuthError(serverResponse.error || "", serverResponse.correlation_id || "", serverResponse.error_description, serverResponse.suberror, serverResponse.timestamp || "", serverResponse.trace_id || "", serverResponse.claims || "", serverErrorNo);
      }
      throw serverError;
    }
  }
  /**
   * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
   * @param serverTokenResponse
   * @param authority
   */
  async handleServerTokenResponse(serverTokenResponse, authority, reqTimestamp, request, apiId, authCodePayload, userAssertionHash, handlingRefreshTokenResponse, forceCacheRefreshTokenResponse, serverRequestId, additionalCacheKeyComponents) {
    let idTokenClaims;
    if (serverTokenResponse.id_token) {
      idTokenClaims = extractTokenClaims(serverTokenResponse.id_token || "", this.cryptoObj.base64Decode, request.correlationId);
    }
    if (authCodePayload && Object.prototype.hasOwnProperty.call(authCodePayload, "nonce")) {
      const expectedNonce = authCodePayload.nonce;
      const tokenNonce = idTokenClaims?.nonce;
      if (tokenNonce !== void 0 && expectedNonce === void 0) {
        this.logger.warning("0thba9", request.correlationId);
        throw createClientAuthError(nonceMismatch, request.correlationId);
      }
      if (expectedNonce !== void 0 && (typeof expectedNonce !== "string" || typeof tokenNonce !== "string" || expectedNonce !== tokenNonce)) {
        throw createClientAuthError(nonceMismatch, request.correlationId);
      }
    }
    this.homeAccountIdentifier = generateHomeAccountId(serverTokenResponse.client_info || "", authority.authorityType, this.logger, this.cryptoObj, request.correlationId, idTokenClaims);
    let requestStateObj;
    if (!!authCodePayload && !!authCodePayload.state) {
      requestStateObj = parseRequestState(this.cryptoObj.base64Decode, authCodePayload.state, request.correlationId);
    }
    serverTokenResponse.key_id = serverTokenResponse.key_id || request.dpopJkt || request.sshKid || void 0;
    if (request.authenticationScheme === AuthenticationScheme.DPOP) {
      if (serverTokenResponse.token_type?.toLowerCase() !== AuthenticationScheme.DPOP.toLowerCase()) {
        this.performanceClient?.addFields({
          dpopTokenTypeMismatch: serverTokenResponse.token_type
        }, request.correlationId);
        throw createClientAuthError(dpopTokenTypeMismatch, request.correlationId);
      }
      serverTokenResponse.token_type = AuthenticationScheme.DPOP;
    }
    const attributeTokenPartition = serializeAttributeTokens(request.attributeTokens);
    const cacheKeyComponents = additionalCacheKeyComponents ?? (attributeTokenPartition ? {
      attribute_tokens: attributeTokenPartition
    } : void 0);
    const cacheRecord = this.generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenClaims, userAssertionHash, authCodePayload, cacheKeyComponents);
    let cacheContext;
    try {
      if (this.persistencePlugin && this.serializableCache) {
        this.logger.verbose("0jbz5k", request.correlationId);
        cacheContext = new TokenCacheContext(this.serializableCache, true);
        await this.persistencePlugin.beforeCacheAccess(cacheContext);
      }
      if (handlingRefreshTokenResponse && !forceCacheRefreshTokenResponse && cacheRecord.account) {
        const cachedAccounts = this.cacheStorage.getAllAccounts({
          homeAccountId: cacheRecord.account.homeAccountId,
          environment: cacheRecord.account.environment
        }, request.correlationId);
        if (cachedAccounts.length < 1) {
          this.logger.warning("1gmt66", request.correlationId);
          this.performanceClient?.addFields({
            acntLoggedOut: true
          }, request.correlationId);
          return await _ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, this.performanceClient, {
            idTokenClaims,
            requestState: requestStateObj,
            requestId: serverRequestId,
            tokenBindingKeyManager: this.tokenBindingKeyManager
          });
        }
      }
      await this.cacheStorage.saveCacheRecord(cacheRecord, request.correlationId, isKmsi(idTokenClaims || {}), apiId, request.storeInCache);
    } finally {
      if (this.persistencePlugin && this.serializableCache && cacheContext) {
        this.logger.verbose("1bh17u", request.correlationId);
        await this.persistencePlugin.afterCacheAccess(cacheContext);
      }
    }
    return _ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, this.performanceClient, {
      idTokenClaims,
      requestState: requestStateObj,
      serverTokenResponse,
      requestId: serverRequestId,
      tokenBindingKeyManager: this.tokenBindingKeyManager
    });
  }
  /**
   * Generates CacheRecord
   * @param serverTokenResponse
   * @param idTokenObj
   * @param authority
   */
  generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenClaims, userAssertionHash, authCodePayload, additionalCacheKeyComponents) {
    const env = authority.getPreferredCache();
    if (!env) {
      throw createClientAuthError(invalidCacheEnvironment, request.correlationId);
    }
    const claimsTenantId = getTenantIdFromIdTokenClaims(idTokenClaims);
    let cachedIdToken;
    let cachedAccount;
    if (serverTokenResponse.id_token && !!idTokenClaims) {
      cachedIdToken = createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token, this.clientId, claimsTenantId || "");
      cachedAccount = buildAccountToCache(
        this.cacheStorage,
        authority,
        this.homeAccountIdentifier,
        this.cryptoObj.base64Decode,
        request.correlationId,
        idTokenClaims,
        serverTokenResponse.client_info,
        env,
        claimsTenantId,
        authCodePayload,
        void 0,
        // nativeAccountId
        this.logger,
        this.performanceClient
      );
    }
    let cachedAccessToken = null;
    if (serverTokenResponse.access_token) {
      const responseScopes = serverTokenResponse.scope ? ScopeSet.fromString(serverTokenResponse.scope, request.correlationId) : new ScopeSet(request.scopes || [], request.correlationId);
      const expiresIn = (typeof serverTokenResponse.expires_in === "string" ? parseInt(serverTokenResponse.expires_in, 10) : serverTokenResponse.expires_in) || 0;
      const extExpiresIn = (typeof serverTokenResponse.ext_expires_in === "string" ? parseInt(serverTokenResponse.ext_expires_in, 10) : serverTokenResponse.ext_expires_in) || 0;
      const refreshIn = (typeof serverTokenResponse.refresh_in === "string" ? parseInt(serverTokenResponse.refresh_in, 10) : serverTokenResponse.refresh_in) || void 0;
      const tokenExpirationSeconds = reqTimestamp + expiresIn;
      const extendedTokenExpirationSeconds = tokenExpirationSeconds + extExpiresIn;
      const refreshOnSeconds = refreshIn && refreshIn > 0 ? reqTimestamp + refreshIn : void 0;
      cachedAccessToken = createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token, this.clientId, claimsTenantId || authority.tenant || "", responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds, this.cryptoObj.base64Decode, request.correlationId, refreshOnSeconds, serverTokenResponse.token_type, userAssertionHash, serverTokenResponse.key_id, additionalCacheKeyComponents);
      const resource = request.resource || null;
      if (resource) {
        cachedAccessToken.resource = resource;
      }
    }
    let cachedRefreshToken = null;
    if (serverTokenResponse.refresh_token) {
      let rtExpiresOn;
      if (serverTokenResponse.refresh_token_expires_in) {
        const rtExpiresIn = typeof serverTokenResponse.refresh_token_expires_in === "string" ? parseInt(serverTokenResponse.refresh_token_expires_in, 10) : serverTokenResponse.refresh_token_expires_in;
        rtExpiresOn = reqTimestamp + rtExpiresIn;
        this.performanceClient?.addFields({ ntwkRtExpiresOnSeconds: rtExpiresOn }, request.correlationId);
      }
      cachedRefreshToken = createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token, this.clientId, serverTokenResponse.foci, userAssertionHash, rtExpiresOn);
    }
    let cachedAppMetadata = null;
    if (serverTokenResponse.foci) {
      cachedAppMetadata = {
        clientId: this.clientId,
        environment: env,
        familyId: serverTokenResponse.foci
      };
    }
    return {
      account: cachedAccount,
      idToken: cachedIdToken,
      accessToken: cachedAccessToken,
      refreshToken: cachedRefreshToken,
      appMetadata: cachedAppMetadata
    };
  }
  /**
   * Creates an @AuthenticationResult from @CacheRecord , @IdToken , and a boolean that states whether or not the result is from cache.
   *
   * Optionally takes a state string that is set as-is in the response.
   *
   * @param cacheRecord
   * @param idTokenObj
   * @param fromTokenCache
   * @param stateString
   */
  static async generateAuthenticationResult(cryptoObj, authority, cacheRecord, fromTokenCache, request, performanceClient, options = {}) {
    const { idTokenClaims, requestState, serverTokenResponse, requestId, tokenBindingKeyManager = DEFAULT_TOKEN_BINDING_KEY_MANAGER } = options;
    let accessToken = "";
    let responseScopes = [];
    let expiresOn = null;
    let extExpiresOn;
    let refreshOn;
    let familyId = "";
    let dpopProof;
    if (cacheRecord.accessToken) {
      const accessTokenType = cacheRecord.accessToken.tokenType?.toLowerCase();
      if (cacheRecord.accessToken.tokenType === AuthenticationScheme.POP && !request.popKid) {
        const popTokenGenerator = new PopTokenGenerator(cryptoObj, tokenBindingKeyManager, performanceClient);
        const { secret, keyId } = cacheRecord.accessToken;
        if (!keyId) {
          throw createClientAuthError(keyIdMissing, request.correlationId);
        }
        accessToken = await popTokenGenerator.signPopToken(secret, keyId, request);
      } else {
        accessToken = cacheRecord.accessToken.secret;
      }
      if (accessTokenType === AuthenticationScheme.DPOP.toLowerCase()) {
        if (!cacheRecord.accessToken.keyId) {
          throw createClientAuthError(keyIdMissing, request.correlationId);
        }
        const dpopProofGenerator = new DpopProofGenerator(cryptoObj, tokenBindingKeyManager);
        dpopProof = await dpopProofGenerator.generateResourceProof({
          htu: request.resourceRequestUri,
          htm: request.resourceRequestMethod,
          accessToken: cacheRecord.accessToken.secret
        }, cacheRecord.accessToken.keyId, request.correlationId);
      }
      responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target, request.correlationId).asArray();
      expiresOn = toDateFromSeconds(cacheRecord.accessToken.expiresOn);
      extExpiresOn = toDateFromSeconds(cacheRecord.accessToken.extendedExpiresOn);
      if (cacheRecord.accessToken.refreshOn) {
        refreshOn = toDateFromSeconds(cacheRecord.accessToken.refreshOn);
      }
    }
    if (cacheRecord.appMetadata) {
      familyId = cacheRecord.appMetadata.familyId === THE_FAMILY_ID ? THE_FAMILY_ID : "";
    }
    const uid = idTokenClaims?.oid || idTokenClaims?.sub || "";
    const tid = idTokenClaims?.tid || "";
    const regionSubScope = idTokenClaims?.tenant_region_sub_scope;
    if (typeof regionSubScope === "string") {
      performanceClient?.addFields({ regionSubScope }, request.correlationId);
    }
    if (serverTokenResponse?.spa_accountid && !!cacheRecord.account) {
      cacheRecord.account.nativeAccountId = serverTokenResponse?.spa_accountid;
      const targetTenantId = tid || cacheRecord.account.realm;
      if (cacheRecord.account.tenantProfiles) {
        const matchingProfile = cacheRecord.account.tenantProfiles.find((tp) => tp.tenantId === targetTenantId);
        if (matchingProfile) {
          matchingProfile.nativeAccountId = serverTokenResponse.spa_accountid;
        }
      }
    }
    const accountInfo = cacheRecord.account ? updateAccountTenantProfileData(
      getAccountInfo(cacheRecord.account),
      void 0,
      // tenantProfile optional
      idTokenClaims,
      cacheRecord.idToken?.secret
    ) : null;
    return {
      authority: authority.canonicalAuthority,
      uniqueId: uid,
      tenantId: tid,
      scopes: responseScopes,
      account: accountInfo,
      idToken: cacheRecord?.idToken?.secret || "",
      idTokenClaims: idTokenClaims || {},
      accessToken,
      dpopProof,
      fromCache: fromTokenCache,
      expiresOn,
      extExpiresOn,
      refreshOn,
      correlationId: request.correlationId,
      requestId: requestId || "",
      familyId,
      tokenType: cacheRecord.accessToken?.tokenType?.toLowerCase() === AuthenticationScheme.DPOP.toLowerCase() ? AuthenticationScheme.DPOP : cacheRecord.accessToken?.tokenType || "",
      state: requestState ? requestState.userRequestState : "",
      cloudGraphHostName: cacheRecord.account?.cloudGraphHostName || "",
      msGraphHost: cacheRecord.account?.msGraphHost || "",
      code: serverTokenResponse?.spa_code,
      fromPlatformBroker: false
    };
  }
};
function buildAccountToCache(cacheStorage, authority, homeAccountId, base64Decode2, correlationId, idTokenClaims, clientInfo, environment, claimsTenantId, authCodePayload, nativeAccountId, logger, performanceClient) {
  logger?.verbose("09jz0t", correlationId);
  const accountEnvironment = environment || authority.getPreferredCache();
  const matchedAccounts = cacheStorage.getAccountsFilteredBy({ homeAccountId, environment: accountEnvironment }, correlationId);
  performanceClient?.addFields({ cacheMatchedAccounts: matchedAccounts.length }, correlationId);
  if (matchedAccounts.length > 1) {
    logger?.warning("0x7ad1", correlationId);
  }
  const cachedAccount = matchedAccounts.length === 1 ? matchedAccounts[0] : null;
  const baseAccount = cachedAccount || createAccountEntity({
    homeAccountId,
    idTokenClaims,
    clientInfo,
    environment,
    cloudGraphHostName: authCodePayload?.cloud_graph_host_name,
    msGraphHost: authCodePayload?.msgraph_host,
    nativeAccountId
  }, authority, correlationId, base64Decode2);
  const tenantProfiles = baseAccount.tenantProfiles || [];
  const tenantId = claimsTenantId || baseAccount.realm;
  if (tenantId && !tenantProfiles.find((tenantProfile) => {
    return tenantProfile.tenantId === tenantId;
  })) {
    const newTenantProfile = buildTenantProfile(homeAccountId, baseAccount.localAccountId, tenantId, nativeAccountId, idTokenClaims);
    tenantProfiles.push(newTenantProfile);
  }
  baseAccount.tenantProfiles = tenantProfiles;
  return baseAccount;
}

// node_modules/@azure/msal-common/dist-browser/account/CcsCredential.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var CcsCredentialType = {
  HOME_ACCOUNT_ID: "home_account_id",
  UPN: "UPN"
};

// node_modules/@azure/msal-common/dist-browser/utils/ClientAssertionUtils.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
async function getClientAssertion(clientAssertion, clientId, tokenEndpoint, fmiPath) {
  if (typeof clientAssertion === "string") {
    return clientAssertion;
  } else {
    const config = {
      clientId,
      tokenEndpoint,
      fmiPath
    };
    return clientAssertion(config);
  }
}

// node_modules/@azure/msal-common/dist-browser/network/RequestThumbprint.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function getRequestThumbprint(clientId, request, homeAccountId) {
  return {
    clientId,
    authority: request.authority,
    scopes: request.scopes,
    homeAccountIdentifier: homeAccountId,
    claims: request.claims,
    authenticationScheme: request.authenticationScheme,
    resourceRequestMethod: request.resourceRequestMethod,
    resourceRequestUri: request.resourceRequestUri,
    shrClaims: request.shrClaims,
    sshKid: request.sshKid,
    embeddedClientId: request.embeddedClientId || request.extraParameters?.clientId,
    resource: request.resource,
    attributeTokens: serializeAttributeTokens(request.attributeTokens)
  };
}

// node_modules/@azure/msal-common/dist-browser/network/ThrottlingUtils.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var ThrottlingUtils = class _ThrottlingUtils {
  /**
   * Prepares a RequestThumbprint to be stored as a key.
   * @param thumbprint
   */
  static generateThrottlingStorageKey(thumbprint) {
    return `${THROTTLING_PREFIX}.${JSON.stringify(thumbprint)}`;
  }
  /**
   * Performs necessary throttling checks before a network request.
   * @param cacheManager
   * @param thumbprint
   */
  static preProcess(cacheManager, thumbprint, correlationId) {
    const key = _ThrottlingUtils.generateThrottlingStorageKey(thumbprint);
    const value = cacheManager.getThrottlingCache(key, correlationId);
    if (value) {
      if (value.throttleTime < Date.now()) {
        cacheManager.removeItem(key, correlationId);
        return;
      }
      throw new ServerError(value.errorCodes?.join(" ") || "", correlationId, value.errorMessage, value.subError);
    }
  }
  /**
   * Performs necessary throttling checks after a network request.
   * @param cacheManager
   * @param thumbprint
   * @param response
   */
  static postProcess(cacheManager, thumbprint, response, correlationId) {
    if (_ThrottlingUtils.checkResponseStatus(response) || _ThrottlingUtils.checkResponseForRetryAfter(response)) {
      const thumbprintValue = {
        throttleTime: _ThrottlingUtils.calculateThrottleTime(parseInt(response.headers[HeaderNames.RETRY_AFTER])),
        error: response.body.error,
        errorCodes: response.body.error_codes,
        errorMessage: response.body.error_description,
        subError: response.body.suberror
      };
      cacheManager.setThrottlingCache(_ThrottlingUtils.generateThrottlingStorageKey(thumbprint), thumbprintValue, correlationId);
    }
  }
  /**
   * Checks a NetworkResponse object's status codes against 429 or 5xx
   * @param response
   */
  static checkResponseStatus(response) {
    return response.status === 429 || response.status >= 500 && response.status < 600;
  }
  /**
   * Checks a NetworkResponse object's RetryAfter header
   * @param response
   */
  static checkResponseForRetryAfter(response) {
    if (response.headers) {
      return response.headers.hasOwnProperty(HeaderNames.RETRY_AFTER) && (response.status < 200 || response.status >= 300);
    }
    return false;
  }
  /**
   * Calculates the Unix-time value for a throttle to expire given throttleTime in seconds.
   * @param throttleTime
   */
  static calculateThrottleTime(throttleTime) {
    const time = throttleTime <= 0 ? 0 : throttleTime;
    const currentSeconds = Date.now() / 1e3;
    return Math.floor(Math.min(currentSeconds + (time || DEFAULT_THROTTLE_TIME_SECONDS), currentSeconds + DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
  }
  static removeThrottle(cacheManager, clientId, request, homeAccountIdentifier) {
    const thumbprint = getRequestThumbprint(clientId, request, homeAccountIdentifier);
    const key = this.generateThrottlingStorageKey(thumbprint);
    cacheManager.removeItem(key, request.correlationId);
  }
};

// node_modules/@azure/msal-common/dist-browser/error/NetworkError.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var NetworkError = class _NetworkError extends AuthError {
  constructor(error, httpStatus, responseHeaders) {
    super(error.errorCode, error.correlationId, error.errorMessage, error.subError);
    Object.setPrototypeOf(this, _NetworkError.prototype);
    this.name = "NetworkError";
    this.error = error;
    this.httpStatus = httpStatus;
    this.responseHeaders = responseHeaders;
  }
};
function createNetworkError(error, httpStatus, responseHeaders, additionalError) {
  error.errorMessage = `${error.errorMessage}, additionalErrorInfo: error.name:${additionalError?.name}, error.message:${additionalError?.message}`;
  return new NetworkError(error, httpStatus, responseHeaders);
}

// node_modules/@azure/msal-common/dist-browser/protocol/Token.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function createTokenRequestHeaders(logger, preventCorsPreflight, ccsCred) {
  const headers = {};
  headers[HeaderNames.CONTENT_TYPE] = URL_FORM_CONTENT_TYPE;
  if (!preventCorsPreflight && ccsCred) {
    switch (ccsCred.type) {
      case CcsCredentialType.HOME_ACCOUNT_ID:
        try {
          const clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
          headers[HeaderNames.CCS_HEADER] = `Oid:${clientInfo.uid}@${clientInfo.utid}`;
        } catch (e) {
          logger.verbose(`1qhtee ${e}`, "");
        }
        break;
      case CcsCredentialType.UPN:
        headers[HeaderNames.CCS_HEADER] = `UPN: ${ccsCred.credential}`;
        break;
    }
  }
  return headers;
}
async function addDpopTokenProofHeader(headers, request, tokenEndpoint, cryptoUtils, tokenBindingKeyManager) {
  if (request.authenticationScheme !== AuthenticationScheme.DPOP) {
    return;
  }
  const dpopProofGenerator = new DpopProofGenerator(cryptoUtils, tokenBindingKeyManager);
  const keyId = request.dpopJkt;
  if (!keyId?.trim()) {
    throw createClientAuthError(keyIdMissing, request.correlationId);
  }
  headers[HeaderNames.DPOP] = await dpopProofGenerator.generateTokenProof({
    tokenEndpoint
  }, keyId, request.correlationId);
}
function createTokenQueryParameters(request, clientId, redirectUri, performanceClient) {
  const parameters = /* @__PURE__ */ new Map();
  if (request.embeddedClientId) {
    addBrokerParameters(parameters, clientId, redirectUri);
  }
  if (request.extraQueryParameters) {
    addExtraParameters(parameters, request.extraQueryParameters);
  }
  addCorrelationId(parameters, request.correlationId);
  instrumentBrokerParams(parameters, request.correlationId, performanceClient);
  return mapToQueryString(parameters);
}
async function executePostToTokenEndpoint(tokenEndpoint, queryString, headers, thumbprint, correlationId, cacheManager, networkClient, logger, performanceClient, serverTelemetryManager) {
  const response = await sendPostRequest(thumbprint, tokenEndpoint, { body: queryString, headers }, correlationId, cacheManager, networkClient, logger, performanceClient);
  if (serverTelemetryManager && response.status < 500 && response.status !== 429) {
    serverTelemetryManager.clearTelemetryCache();
  }
  return response;
}
async function sendPostRequest(thumbprint, tokenEndpoint, options, correlationId, cacheManager, networkClient, logger, performanceClient) {
  ThrottlingUtils.preProcess(cacheManager, thumbprint, correlationId);
  let response;
  try {
    response = await invokeAsync(networkClient.sendPostRequestAsync.bind(networkClient), NetworkClientSendPostRequestAsync, logger, performanceClient, correlationId)(tokenEndpoint, __spreadProps(__spreadValues({}, options), { correlationId, performanceClient }));
    const responseHeaders = response.headers || {};
    performanceClient?.addFields({
      refreshTokenSize: response.body.refresh_token?.length || 0,
      httpVerToken: responseHeaders[HeaderNames.X_MS_HTTP_VERSION] || "",
      requestId: responseHeaders[HeaderNames.X_MS_REQUEST_ID] || ""
    }, correlationId);
  } catch (e) {
    if (e instanceof NetworkError) {
      const responseHeaders = e.responseHeaders;
      if (responseHeaders) {
        performanceClient?.addFields({
          httpVerToken: responseHeaders[HeaderNames.X_MS_HTTP_VERSION] || "",
          requestId: responseHeaders[HeaderNames.X_MS_REQUEST_ID] || "",
          contentTypeHeader: responseHeaders[HeaderNames.CONTENT_TYPE] || void 0,
          contentLengthHeader: responseHeaders[HeaderNames.CONTENT_LENGTH] || void 0,
          httpStatus: e.httpStatus
        }, correlationId);
      }
      throw e.error;
    }
    if (e instanceof AuthError) {
      throw e;
    } else {
      throw createClientAuthError(networkError, correlationId);
    }
  }
  ThrottlingUtils.postProcess(cacheManager, thumbprint, response, correlationId);
  return response;
}

// node_modules/@azure/msal-common/dist-browser/client/AuthorizationCodeClient.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var AuthorizationCodeClient = class {
  constructor(configuration, performanceClient) {
    this.includeRedirectUri = true;
    this.config = buildClientConfiguration(configuration);
    this.logger = new Logger(this.config.loggerOptions, name, version);
    this.cryptoUtils = this.config.cryptoInterface;
    this.cacheManager = this.config.storageInterface;
    this.networkClient = this.config.networkInterface;
    this.serverTelemetryManager = this.config.serverTelemetryManager;
    this.authority = this.config.authOptions.authority;
    this.performanceClient = performanceClient;
    this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes;
  }
  /**
   * API to acquire a token in exchange of 'authorization_code` acquired by the user in the first leg of the
   * authorization_code_grant
   * @param request
   */
  async acquireToken(request, apiId, authCodePayload) {
    if (!request.code) {
      throw createClientAuthError(requestCannotBeMade, request.correlationId);
    }
    if (authCodePayload && authCodePayload.cloud_instance_host_name) {
      await invokeAsync(this.updateTokenEndpointAuthority.bind(this), UpdateTokenEndpointAuthority, this.logger, this.performanceClient, request.correlationId)(authCodePayload.cloud_instance_host_name, request.correlationId);
    }
    const reqTimestamp = nowSeconds();
    const response = await invokeAsync(this.executeTokenRequest.bind(this), AuthClientExecuteTokenRequest, this.logger, this.performanceClient, request.correlationId)(this.authority, request, this.serverTelemetryManager);
    const requestId = response.headers?.[HeaderNames.X_MS_REQUEST_ID];
    const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.performanceClient, this.config.serializableCache, this.config.persistencePlugin, this.config.tokenBindingKeyManager);
    responseHandler.validateTokenResponse(response.body, request.correlationId);
    return invokeAsync(responseHandler.handleServerTokenResponse.bind(responseHandler), HandleServerTokenResponse, this.logger, this.performanceClient, request.correlationId)(response.body, this.authority, reqTimestamp, request, apiId, authCodePayload, void 0, void 0, void 0, requestId);
  }
  /**
   * Used to log out the current user, and redirect the user to the postLogoutRedirectUri.
   * Default behaviour is to redirect the user to `window.location.href`.
   * @param authorityUri
   */
  getLogoutUri(logoutRequest) {
    if (!logoutRequest) {
      throw createClientConfigurationError(logoutRequestEmpty, "");
    }
    const queryString = this.createLogoutUrlQueryString(logoutRequest);
    return UrlString.appendQueryString(this.authority.endSessionEndpoint, queryString);
  }
  /**
   * Executes POST request to token endpoint
   * @param authority
   * @param request
   */
  async executeTokenRequest(authority, request, serverTelemetryManager) {
    const queryParametersString = createTokenQueryParameters(request, this.config.authOptions.clientId, this.config.authOptions.redirectUri, this.performanceClient);
    const endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
    const requestBody = await invokeAsync(this.createTokenRequestBody.bind(this), AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, request.correlationId)(request);
    let ccsCredential = void 0;
    if (request.clientInfo) {
      try {
        const clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils.base64Decode);
        ccsCredential = {
          credential: `${clientInfo.uid}${CLIENT_INFO_SEPARATOR}${clientInfo.utid}`,
          type: CcsCredentialType.HOME_ACCOUNT_ID
        };
      } catch (e) {
        this.logger.verbose(`0wznt3 ${e}`, request.correlationId);
      }
    }
    const headers = createTokenRequestHeaders(this.logger, this.config.systemOptions.preventCorsPreflight, ccsCredential || request.ccsCredential);
    await addDpopTokenProofHeader(headers, request, endpoint, this.cryptoUtils, this.config.tokenBindingKeyManager);
    const thumbprint = getRequestThumbprint(this.config.authOptions.clientId, request);
    return invokeAsync(executePostToTokenEndpoint, AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, request.correlationId)(endpoint, requestBody, headers, thumbprint, request.correlationId, this.cacheManager, this.networkClient, this.logger, this.performanceClient, serverTelemetryManager);
  }
  /**
   * Generates a map for all the params to be sent to the service
   * @param request
   */
  async createTokenRequestBody(request) {
    const parameters = /* @__PURE__ */ new Map();
    addClientId(parameters, request.embeddedClientId || request.extraParameters?.[CLIENT_ID] || this.config.authOptions.clientId);
    if (!this.includeRedirectUri) {
      if (!request.redirectUri) {
        throw createClientConfigurationError(redirectUriEmpty, request.correlationId);
      }
    } else {
      addRedirectUri(parameters, request.redirectUri);
    }
    addScopes(parameters, request.scopes, request.correlationId, true, this.oidcDefaultScopes);
    addResource(parameters, request.resource);
    if (request.attributeTokens) {
      addAttributeTokens(parameters, request.attributeTokens);
    }
    this.performanceClient?.addFields({
      hasAttributeTokens: !!request.attributeTokens?.length
    }, request.correlationId);
    addAuthorizationCode(parameters, request.code);
    addLibraryInfo(parameters, this.config.libraryInfo);
    addApplicationTelemetry(parameters, this.config.telemetry.application);
    addThrottling(parameters);
    if (this.serverTelemetryManager && !isOidcProtocolMode(this.config)) {
      addServerTelemetry(parameters, this.serverTelemetryManager);
    }
    if (request.codeVerifier) {
      addCodeVerifier(parameters, request.codeVerifier);
    }
    if (this.config.clientCredentials.clientSecret) {
      addClientSecret(parameters, this.config.clientCredentials.clientSecret);
    }
    if (this.config.clientCredentials.clientAssertion) {
      const clientAssertion = this.config.clientCredentials.clientAssertion;
      addClientAssertion(parameters, await getClientAssertion(clientAssertion.assertion, this.config.authOptions.clientId, request.resourceRequestUri));
      addClientAssertionType(parameters, clientAssertion.assertionType);
    }
    addGrantType(parameters, GrantType.AUTHORIZATION_CODE_GRANT);
    addClientInfo(parameters);
    if (request.authenticationScheme === AuthenticationScheme.POP) {
      const popTokenGenerator = new PopTokenGenerator(this.cryptoUtils, this.config.tokenBindingKeyManager, this.performanceClient);
      let reqCnfData;
      if (!request.popKid) {
        const generatedReqCnfData = await invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PopTokenGenerateCnf, this.logger, this.performanceClient, request.correlationId)(request, this.logger);
        reqCnfData = generatedReqCnfData.reqCnfString;
      } else {
        reqCnfData = this.cryptoUtils.encodeKid(request.popKid);
      }
      addPopToken(parameters, reqCnfData);
    } else if (request.authenticationScheme === AuthenticationScheme.SSH) {
      if (request.sshJwk) {
        addSshJwk(parameters, request.sshJwk);
      } else {
        throw createClientConfigurationError(missingSshJwk, request.correlationId);
      }
    }
    let ccsCred = void 0;
    if (request.clientInfo) {
      try {
        const clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils.base64Decode);
        ccsCred = {
          credential: `${clientInfo.uid}${CLIENT_INFO_SEPARATOR}${clientInfo.utid}`,
          type: CcsCredentialType.HOME_ACCOUNT_ID
        };
      } catch (e) {
        this.logger.verbose(`0wznt3 ${e}`, request.correlationId);
      }
    } else {
      ccsCred = request.ccsCredential;
    }
    if (this.config.systemOptions.preventCorsPreflight && ccsCred) {
      switch (ccsCred.type) {
        case CcsCredentialType.HOME_ACCOUNT_ID:
          try {
            const clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
            addCcsOid(parameters, clientInfo);
          } catch (e) {
            this.logger.verbose(`1qhtee ${e}`, request.correlationId);
          }
          break;
        case CcsCredentialType.UPN:
          addCcsUpn(parameters, ccsCred.credential);
          break;
      }
    }
    if (request.embeddedClientId) {
      addBrokerParameters(parameters, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    }
    if (request.extraParameters) {
      addExtraParameters(parameters, request.extraParameters);
    }
    if (request.enableSpaAuthorizationCode && (!request.extraParameters || !request.extraParameters[RETURN_SPA_CODE])) {
      addExtraParameters(parameters, {
        [RETURN_SPA_CODE]: "1"
      });
    }
    instrumentBrokerParams(parameters, request.correlationId, this.performanceClient);
    addClaims(parameters, request.correlationId, request.claims, this.config.authOptions.clientCapabilities, request.skipBrokerClaims);
    return mapToQueryString(parameters);
  }
  /**
   * This API validates the `EndSessionRequest` and creates a URL
   * @param request
   */
  createLogoutUrlQueryString(request) {
    const parameters = /* @__PURE__ */ new Map();
    if (request.postLogoutRedirectUri) {
      addPostLogoutRedirectUri(parameters, request.postLogoutRedirectUri);
    }
    if (request.correlationId) {
      addCorrelationId(parameters, request.correlationId);
    }
    if (request.idTokenHint) {
      addIdTokenHint(parameters, request.idTokenHint);
    }
    if (request.state) {
      addState(parameters, request.state);
    }
    if (request.logoutHint) {
      addLogoutHint(parameters, request.logoutHint);
    }
    if (request.extraQueryParameters) {
      addExtraParameters(parameters, request.extraQueryParameters);
    }
    if (this.config.authOptions.instanceAware) {
      addInstanceAware(parameters);
    }
    return mapToQueryString(parameters);
  }
  /**
   * Updates the authority to the cloud instance provided in the authorization response
   * @param cloudInstanceHostName - cloud instance host name from authorization code payload
   * @param correlationId - request correlation id
   */
  async updateTokenEndpointAuthority(cloudInstanceHostName, correlationId) {
    const cloudInstanceAuthorityUri = `https://${cloudInstanceHostName}/${this.authority.tenant}/`;
    const cloudInstanceAuthority = await createDiscoveredInstance(cloudInstanceAuthorityUri, this.networkClient, this.cacheManager, this.authority.options, this.logger, correlationId, this.performanceClient);
    this.authority = cloudInstanceAuthority;
  }
};

// node_modules/@azure/msal-common/dist-browser/protocol/Authorize.mjs
var Authorize_exports = {};
__export(Authorize_exports, {
  getAuthorizationCodePayload: () => getAuthorizationCodePayload,
  getAuthorizeUrl: () => getAuthorizeUrl,
  getStandardAuthorizeRequestParameters: () => getStandardAuthorizeRequestParameters,
  validateAuthorizationResponse: () => validateAuthorizationResponse
});
/*! @azure/msal-common v16.14.1 2026-09-15 */
function getStandardAuthorizeRequestParameters(authOptions, request, logger, performanceClient) {
  const correlationId = request.correlationId;
  const parameters = /* @__PURE__ */ new Map();
  addClientId(parameters, request.embeddedClientId || request.extraQueryParameters?.[CLIENT_ID] || authOptions.clientId);
  const requestScopes = [
    ...request.scopes || [],
    ...request.extraScopesToConsent || []
  ];
  addScopes(parameters, requestScopes, request.correlationId, true, authOptions.authority.options.OIDCOptions?.defaultScopes);
  addResource(parameters, request.resource);
  addRedirectUri(parameters, request.redirectUri);
  addCorrelationId(parameters, correlationId);
  addResponseMode(parameters, request.responseMode);
  addClientInfo(parameters);
  addCliData(parameters);
  if (request.prompt) {
    addPrompt(parameters, request.prompt);
    performanceClient?.addFields({ prompt: request.prompt }, correlationId);
  }
  if (request.domainHint) {
    addDomainHint(parameters, request.domainHint);
    performanceClient?.addFields({ domainHintFromRequest: true }, correlationId);
  }
  if (request.prompt !== PromptValue.SELECT_ACCOUNT) {
    if (request.sid && request.prompt === PromptValue.NONE) {
      logger.verbose("1tvqyx", request.correlationId);
      addSid(parameters, request.sid);
      performanceClient?.addFields({ sidFromRequest: true }, correlationId);
    } else if (request.account) {
      const accountSid = extractAccountSid(request.account);
      let accountLoginHintClaim = extractLoginHint(request.account);
      if (accountLoginHintClaim && request.domainHint) {
        logger.warning("0wkg3v", request.correlationId);
        accountLoginHintClaim = null;
      }
      if (accountLoginHintClaim) {
        logger.verbose("1eyfsw", request.correlationId);
        addLoginHint(parameters, accountLoginHintClaim);
        performanceClient?.addFields({ loginHintFromClaim: true }, correlationId);
        try {
          const clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
          addCcsOid(parameters, clientInfo);
        } catch (e) {
          logger.verbose("12ugck", request.correlationId);
        }
      } else if (accountSid && request.prompt === PromptValue.NONE) {
        logger.verbose("1rmd8s", request.correlationId);
        addSid(parameters, accountSid);
        performanceClient?.addFields({ sidFromClaim: true }, correlationId);
        try {
          const clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
          addCcsOid(parameters, clientInfo);
        } catch (e) {
          logger.verbose("12ugck", request.correlationId);
        }
      } else if (request.loginHint) {
        logger.verbose("0y3007", request.correlationId);
        addLoginHint(parameters, request.loginHint);
        addCcsUpn(parameters, request.loginHint);
        performanceClient?.addFields({ loginHintFromRequest: true }, correlationId);
      } else if (request.account.username) {
        logger.verbose("02f507", request.correlationId);
        addLoginHint(parameters, request.account.username);
        performanceClient?.addFields({ loginHintFromUpn: true }, correlationId);
        try {
          const clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
          addCcsOid(parameters, clientInfo);
        } catch (e) {
          logger.verbose("12ugck", request.correlationId);
        }
      }
    } else if (request.loginHint) {
      logger.verbose("0g01ey", request.correlationId);
      addLoginHint(parameters, request.loginHint);
      addCcsUpn(parameters, request.loginHint);
      performanceClient?.addFields({ loginHintFromRequest: true }, correlationId);
    }
  } else {
    logger.verbose("169k9v", request.correlationId);
  }
  if (request.nonce) {
    addNonce(parameters, request.nonce);
  }
  if (request.state) {
    addState(parameters, request.state);
  }
  if (request.embeddedClientId) {
    addBrokerParameters(parameters, authOptions.clientId, authOptions.redirectUri);
  }
  addClaims(parameters, request.correlationId, request.claims, authOptions.clientCapabilities, request.skipBrokerClaims);
  if (authOptions.instanceAware && (!request.extraQueryParameters || !Object.keys(request.extraQueryParameters).includes(INSTANCE_AWARE))) {
    addInstanceAware(parameters);
  }
  return parameters;
}
function getAuthorizeUrl(authority, requestParameters) {
  const queryString = mapToQueryString(requestParameters);
  return UrlString.appendQueryString(authority.authorizationEndpoint, queryString);
}
function getAuthorizationCodePayload(serverParams, cachedState, correlationId) {
  validateAuthorizationResponse(serverParams, cachedState, correlationId);
  if (!serverParams.code) {
    throw createClientAuthError(authorizationCodeMissingFromServerResponse, correlationId);
  }
  return serverParams;
}
function validateAuthorizationResponse(serverResponse, requestState, correlationId) {
  if (!serverResponse.state || !requestState) {
    throw serverResponse.state ? createClientAuthError(stateNotFound, correlationId, "Cached State") : createClientAuthError(stateNotFound, correlationId, "Server State");
  }
  let decodedServerResponseState;
  let decodedRequestState;
  try {
    decodedServerResponseState = decodeURIComponent(serverResponse.state);
  } catch (e) {
    throw createClientAuthError(invalidState, correlationId, serverResponse.state);
  }
  try {
    decodedRequestState = decodeURIComponent(requestState);
  } catch (e) {
    throw createClientAuthError(invalidState, correlationId, serverResponse.state);
  }
  if (decodedServerResponseState !== decodedRequestState) {
    throw createClientAuthError(stateMismatch, correlationId);
  }
  if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
    const serverErrorNo = parseServerErrorNo(serverResponse);
    if (isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
      throw new InteractionRequiredAuthError(serverResponse.error || "", serverResponse.correlation_id || correlationId, serverResponse.error_description, serverResponse.suberror, serverResponse.timestamp || "", serverResponse.trace_id || "", serverResponse.claims || "", serverErrorNo);
    }
    throw new ServerError(serverResponse.error || "", serverResponse.correlation_id || correlationId, serverResponse.error_description, serverResponse.suberror, serverErrorNo);
  }
}
function parseServerErrorNo(serverResponse) {
  const errorCodePrefix = "code=";
  const errorCodePrefixIndex = serverResponse.error_uri?.lastIndexOf(errorCodePrefix);
  return errorCodePrefixIndex && errorCodePrefixIndex >= 0 ? serverResponse.error_uri?.substring(errorCodePrefixIndex + errorCodePrefix.length) : void 0;
}
function extractAccountSid(account) {
  return account.idTokenClaims?.sid || null;
}
function extractLoginHint(account) {
  return account.loginHint || account.idTokenClaims?.login_hint || null;
}

// node_modules/@azure/msal-common/dist-browser/telemetry/performance/PerformanceClient.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function startContext(event, stack) {
  if (!stack) {
    return;
  }
  stack.push({
    name: event.name
  });
}
function endContext(event, stack, error) {
  if (!stack?.length) {
    return;
  }
  const peek = (stack2) => {
    return stack2.length ? stack2[stack2.length - 1] : void 0;
  };
  const abbrEventName = event.name;
  const top = peek(stack);
  if (top?.name !== abbrEventName) {
    return;
  }
  const current = stack?.pop();
  if (!current) {
    return;
  }
  const errorCode = error instanceof AuthError ? error.errorCode : error instanceof Error ? error.name : void 0;
  const subErr = error instanceof AuthError ? error.subError : void 0;
  if (errorCode && current.childErr !== errorCode) {
    current.err = errorCode;
    if (subErr) {
      current.subErr = subErr;
    }
  }
  delete current.name;
  delete current.childErr;
  const context = __spreadProps(__spreadValues({}, current), {
    dur: event.durationMs
  });
  if (!event.success) {
    context.fail = 1;
  }
  const parent = peek(stack);
  if (!parent) {
    return { [abbrEventName]: context };
  }
  if (errorCode) {
    parent.childErr = errorCode;
  }
  let childName;
  if (!parent[abbrEventName]) {
    childName = abbrEventName;
  } else {
    const siblings = Object.keys(parent).filter((key) => key.startsWith(abbrEventName)).length;
    childName = `${abbrEventName}_${siblings + 1}`;
  }
  parent[childName] = context;
  return parent;
}
function addError(error, logger, event, stackMaxSize = 5) {
  if (!(error instanceof Error)) {
    logger.trace("0gcyox", event.correlationId);
    return;
  } else if (error instanceof AuthError) {
    event.errorCode = error.errorCode;
    event.subErrorCode = error.subError;
    if (!event.serverErrorNo && (error instanceof ServerError || error instanceof InteractionRequiredAuthError) && error.errorNo) {
      event.serverErrorNo = error.errorNo;
    }
    return;
  } else if (error instanceof CacheError) {
    event.errorCode = error.errorCode;
    return;
  } else if (event.errorStack?.length) {
    logger.trace("0lmqrh", event.correlationId);
    return;
  } else if (!error.stack?.length) {
    logger.trace("1cnpwa", event.correlationId);
    return;
  }
  if (error.stack) {
    event.errorStack = compactStack(error.stack, stackMaxSize);
  }
  event.errorName = error.name;
}
function compactStack(stack, stackMaxSize) {
  if (stackMaxSize < 0) {
    return [];
  }
  const stackArr = stack.split("\n") || [];
  const res = [];
  const firstLine = stackArr[0];
  if (firstLine.startsWith("TypeError: Cannot read property") || firstLine.startsWith("TypeError: Cannot read properties of") || firstLine.startsWith("TypeError: Cannot set property") || firstLine.startsWith("TypeError: Cannot set properties of") || firstLine.endsWith("is not a function")) {
    res.push(compactStackLine(firstLine));
  } else if (firstLine.startsWith("SyntaxError") || firstLine.startsWith("TypeError")) {
    res.push(compactStackLine(
      // Example: SyntaxError: Unexpected token 'e', "test" is not valid JSON -> SyntaxError: Unexpected token <redacted>, <redacted> is not valid JSON
      firstLine.replace(/['].*[']|["].*["]/g, "<redacted>")
    ));
  }
  for (let ix = 1; ix < stackArr.length; ix++) {
    if (res.length >= stackMaxSize) {
      break;
    }
    const line = stackArr[ix];
    res.push(compactStackLine(line));
  }
  return res;
}
function compactStackLine(line) {
  const filePathIx = line.lastIndexOf(" ") + 1;
  if (filePathIx < 1) {
    return line;
  }
  const filePath = line.substring(filePathIx);
  let fileNameIx = filePath.lastIndexOf("/");
  fileNameIx = fileNameIx < 0 ? filePath.lastIndexOf("\\") : fileNameIx;
  if (fileNameIx >= 0) {
    return (line.substring(0, filePathIx) + "(" + filePath.substring(fileNameIx + 1) + (filePath.charAt(filePath.length - 1) === ")" ? "" : ")")).trimStart();
  }
  return line.trimStart();
}
function getAccountType(account) {
  const idTokenClaims = account?.idTokenClaims;
  if (idTokenClaims?.tfp || idTokenClaims?.acr) {
    return "B2C";
  }
  if (!idTokenClaims?.tid) {
    return void 0;
  } else if (idTokenClaims?.tid === "9188040d-6c67-4c5b-b112-36a304b66dad") {
    return "MSA";
  }
  return "AAD";
}
var PerformanceClient = class {
  /**
   * Creates an instance of PerformanceClient,
   * an abstract class containing core performance telemetry logic.
   *
   * @constructor
   * @param {string} clientId Client ID of the application
   * @param {string} authority Authority used by the application
   * @param {Logger} logger Logger used by the application
   * @param {string} libraryName Name of the library
   * @param {string} libraryVersion Version of the library
   * @param {ApplicationTelemetry} applicationTelemetry application name and version
   * @param {Set<String>} intFields integer fields to be truncated
   */
  constructor(clientId, authority, logger, libraryName, libraryVersion, applicationTelemetry, intFields) {
    this.authority = authority;
    this.libraryName = libraryName;
    this.libraryVersion = libraryVersion;
    this.globalFields = {};
    this.applicationTelemetry = applicationTelemetry;
    this.clientId = clientId;
    this.logger = logger;
    this.callbacks = /* @__PURE__ */ new Map();
    this.eventsByCorrelationId = /* @__PURE__ */ new Map();
    this.eventStack = /* @__PURE__ */ new Map();
    this.intFields = intFields || /* @__PURE__ */ new Set();
    for (const item of IntFields) {
      this.intFields.add(item);
    }
  }
  /**
   * Starts measuring performance for a given operation. Returns a function that should be used to end the measurement.
   *
   * @param {PerformanceEvents} measureName
   * @param {?string} [correlationId]
   * @returns {InProgressPerformanceEvent}
   */
  startMeasurement(measureName, correlationId) {
    const eventCorrelationId = correlationId || this.generateId();
    const inProgressEvent = {
      eventId: this.generateId(),
      status: PerformanceEventStatus.InProgress,
      authority: this.authority,
      libraryName: this.libraryName,
      libraryVersion: this.libraryVersion,
      clientId: this.clientId,
      name: measureName,
      startTimeMs: Date.now(),
      correlationId: eventCorrelationId,
      appName: this.applicationTelemetry?.appName,
      appVersion: this.applicationTelemetry?.appVersion
    };
    this.cacheEventByCorrelationId(inProgressEvent);
    startContext(inProgressEvent, this.eventStack.get(eventCorrelationId));
    return {
      end: (event, error, account) => {
        return this.endMeasurement(__spreadValues(__spreadValues({}, inProgressEvent), event), error, account);
      },
      discard: () => {
        return this.discardMeasurements(inProgressEvent.correlationId);
      },
      add: (fields) => {
        return this.addFields(fields, inProgressEvent.correlationId);
      },
      increment: (fields) => {
        return this.incrementFields(fields, inProgressEvent.correlationId);
      },
      event: inProgressEvent
    };
  }
  /**
   * Stops measuring the performance for an operation. Should only be called directly by PerformanceClient classes,
   * as consumers should instead use the function returned by startMeasurement.
   * Adds a new field named as "[event name]DurationMs" for sub-measurements, completes and emits an event
   * otherwise.
   *
   * @param {PerformanceEvent} event
   * @param {unknown} error
   * @param {AccountInfo?} account
   * @returns {(PerformanceEvent | null)}
   */
  endMeasurement(event, error, account) {
    const rootEvent = this.eventsByCorrelationId.get(event.correlationId);
    if (!rootEvent) {
      this.logger.trace(`0k9ti8 ${event.eventId}`, event.correlationId);
      return null;
    }
    const isRoot = event.eventId === rootEvent.eventId;
    event.durationMs = Math.round(event.durationMs || this.getDurationMs(event.startTimeMs));
    const context = JSON.stringify(endContext(event, this.eventStack.get(rootEvent.correlationId), error));
    if (isRoot) {
      this.discardMeasurements(rootEvent.correlationId);
    } else {
      rootEvent.incompleteSubMeasurements?.delete(event.eventId);
    }
    if (error) {
      addError(error, this.logger, rootEvent);
    }
    if (!isRoot) {
      rootEvent.ext = __spreadValues(__spreadValues({}, rootEvent.ext), event.ext);
      rootEvent.ext[event.name + "DurationMs"] = Math.floor(event.durationMs);
      return __spreadValues({}, rootEvent);
    }
    if (isRoot && !error && (rootEvent.errorCode || rootEvent.subErrorCode)) {
      this.logger.trace(`1fm1tm ${event.name}`, event.correlationId);
      rootEvent.errorCode = void 0;
      rootEvent.subErrorCode = void 0;
    }
    let finalEvent = __spreadValues(__spreadValues({}, rootEvent), event);
    let incompleteSubsCount = 0;
    finalEvent.incompleteSubMeasurements?.forEach((subMeasurement) => {
      this.logger.trace(`0nxk52 ${subMeasurement.name} ${event.name}`, finalEvent.correlationId);
      incompleteSubsCount++;
    });
    finalEvent.incompleteSubMeasurements = void 0;
    const logs = getAndFlushLogsFromCache(event.correlationId);
    const formattedLogs = logs.map((logMessage) => `${logMessage.milliseconds},${logMessage.hash}`).join(";");
    finalEvent = __spreadValues(__spreadProps(__spreadValues({}, finalEvent), {
      status: PerformanceEventStatus.Completed,
      incompleteSubsCount,
      context,
      logs: formattedLogs
    }), this.globalFields);
    if (account) {
      finalEvent.accountType = getAccountType(account);
      finalEvent.dataBoundary = account.dataBoundary;
    }
    this.truncateIntegralFields(finalEvent);
    this.emitEvents([finalEvent], event.correlationId);
    return finalEvent;
  }
  /**
   * Saves extra information to be emitted when the measurements are flushed
   * @param fields
   * @param correlationId
   */
  addFields(fields, correlationId) {
    const event = this.eventsByCorrelationId.get(correlationId);
    if (event) {
      const staticFields = {};
      const dynamicFields = {};
      for (const key in fields) {
        if (key.startsWith(EXT_FIELD_PREFIX)) {
          const dynamicKey = key.slice(EXT_FIELD_PREFIX.length);
          const value = fields[key];
          if (typeof value === "string" || typeof value === "number") {
            dynamicFields[dynamicKey] = value;
          }
        } else {
          staticFields[key] = fields[key];
        }
      }
      const updatedEvent = __spreadValues(__spreadValues({}, event), staticFields);
      if (Object.keys(dynamicFields).length) {
        updatedEvent.ext = __spreadValues(__spreadValues({}, updatedEvent.ext), dynamicFields);
      }
      this.eventsByCorrelationId.set(correlationId, updatedEvent);
    } else {
      this.logger.trace("0thl6s", correlationId);
    }
  }
  /**
   * Saves fields to be emitted on every event measured by this client.
   * Unlike addFields, these are not scoped to a single correlationId and persist for the
   * lifetime of the client (e.g. previousLibraryVersion for upgrade/downgrade telemetry).
   * @param fields
   */
  addGlobalFields(fields) {
    this.globalFields = __spreadValues(__spreadValues({}, this.globalFields), fields);
  }
  /**
   * Increment counters to be emitted when the measurements are flushed
   * @param fields {string[]}
   * @param correlationId {string} correlation identifier
   */
  incrementFields(fields, correlationId) {
    const event = this.eventsByCorrelationId.get(correlationId);
    if (event) {
      for (const counter in fields) {
        if (counter.startsWith(EXT_FIELD_PREFIX)) {
          event.ext = event.ext || {};
          const dynamicKey = counter.slice(EXT_FIELD_PREFIX.length);
          const currentValue = event.ext[dynamicKey];
          if (currentValue === void 0) {
            event.ext[dynamicKey] = 0;
          } else if (isNaN(Number(currentValue))) {
            return;
          }
          event.ext[dynamicKey] = (Number(event.ext[dynamicKey]) || 0) + (fields[counter] ?? 0);
        } else {
          if (!event.hasOwnProperty(counter)) {
            event[counter] = 0;
          } else if (isNaN(Number(event[counter]))) {
            return;
          }
          event[counter] += fields[counter];
        }
      }
    } else {
      this.logger.trace("0thl6s", correlationId);
    }
  }
  /**
   * Upserts event into event cache.
   * First key is the correlation id, second key is the event id.
   * Allows for events to be grouped by correlation id,
   * and to easily allow for properties on them to be updated.
   *
   * @private
   * @param {PerformanceEvent} event
   */
  cacheEventByCorrelationId(event) {
    const rootEvent = this.eventsByCorrelationId.get(event.correlationId);
    if (rootEvent) {
      rootEvent.incompleteSubMeasurements = rootEvent.incompleteSubMeasurements || /* @__PURE__ */ new Map();
      rootEvent.incompleteSubMeasurements.set(event.eventId, {
        name: event.name,
        startTimeMs: event.startTimeMs
      });
    } else {
      this.eventsByCorrelationId.set(event.correlationId, __spreadValues({}, event));
      this.eventStack.set(event.correlationId, []);
    }
  }
  /**
   * Removes measurements and aux data for a given correlation id.
   *
   * @param {string} correlationId
   */
  discardMeasurements(correlationId) {
    this.eventsByCorrelationId.delete(correlationId);
    this.eventStack.delete(correlationId);
  }
  /**
   * Registers a callback function to receive performance events.
   *
   * @param {PerformanceCallbackFunction} callback
   * @returns {string}
   */
  addPerformanceCallback(callback) {
    for (const [id, cb] of this.callbacks) {
      if (cb.toString() === callback.toString()) {
        this.logger.warning(`1eap5p ${id}`, "");
        return id;
      }
    }
    const callbackId = this.generateId();
    this.callbacks.set(callbackId, callback);
    this.logger.verbose(`0c9ujz ${callbackId}`, "");
    return callbackId;
  }
  /**
   * Removes a callback registered with addPerformanceCallback.
   *
   * @param {string} callbackId
   * @returns {boolean}
   */
  removePerformanceCallback(callbackId) {
    const result = this.callbacks.delete(callbackId);
    if (result) {
      this.logger.verbose(`0253if ${callbackId}`, "");
    } else {
      this.logger.verbose(`0iqk07 ${callbackId}`, "");
    }
    return result;
  }
  /**
   * Emits events to all registered callbacks.
   *
   * @param {PerformanceEvent[]} events
   * @param {?string} [correlationId]
   */
  emitEvents(events, correlationId) {
    this.logger.verbose("11jb1y", correlationId);
    this.callbacks.forEach((callback, callbackId) => {
      this.logger.trace(`0p2pjl ${callbackId}`, correlationId);
      callback.apply(null, [events]);
    });
  }
  /**
   * Enforce truncation of integral fields in performance event.
   * @param {PerformanceEvent} event performance event to update.
   */
  truncateIntegralFields(event) {
    this.intFields.forEach((key) => {
      if (key in event && typeof event[key] === "number") {
        event[key] = Math.floor(event[key]);
      }
    });
  }
  /**
   * Returns event duration in milliseconds
   * @param startTimeMs {number}
   * @returns {number}
   */
  getDurationMs(startTimeMs) {
    const durationMs = Date.now() - startTimeMs;
    return durationMs < 0 ? durationMs : 0;
  }
};

// node_modules/@azure/msal-common/dist-browser/client/RefreshTokenClient.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var DEFAULT_REFRESH_TOKEN_EXPIRATION_OFFSET_SECONDS = 300;
var RefreshTokenClient = class {
  constructor(configuration, performanceClient) {
    this.config = buildClientConfiguration(configuration);
    this.logger = new Logger(this.config.loggerOptions, name, version);
    this.cryptoUtils = this.config.cryptoInterface;
    this.cacheManager = this.config.storageInterface;
    this.networkClient = this.config.networkInterface;
    this.serverTelemetryManager = this.config.serverTelemetryManager;
    this.authority = this.config.authOptions.authority;
    this.performanceClient = performanceClient;
  }
  async acquireToken(request, apiId) {
    const reqTimestamp = nowSeconds();
    const response = await invokeAsync(this.executeTokenRequest.bind(this), RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, request.correlationId)(request, this.authority);
    const requestId = response.headers?.[HeaderNames.X_MS_REQUEST_ID];
    const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.performanceClient, this.config.serializableCache, this.config.persistencePlugin, this.config.tokenBindingKeyManager);
    responseHandler.validateTokenResponse(response.body, request.correlationId);
    return invokeAsync(responseHandler.handleServerTokenResponse.bind(responseHandler), HandleServerTokenResponse, this.logger, this.performanceClient, request.correlationId)(response.body, this.authority, reqTimestamp, request, apiId, void 0, void 0, true, request.forceCache, requestId);
  }
  /**
   * Gets cached refresh token and attaches to request, then calls acquireToken API
   * @param request
   */
  async acquireTokenByRefreshToken(request, apiId) {
    if (!request) {
      throw createClientConfigurationError(tokenRequestEmpty, "");
    }
    if (!request.account) {
      throw createClientAuthError(noAccountInSilentRequest, request.correlationId);
    }
    const isFOCI = this.cacheManager.isAppMetadataFOCI(request.account.environment, request.correlationId);
    if (isFOCI) {
      try {
        return await invokeAsync(this.acquireTokenWithCachedRefreshToken.bind(this), RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, true, apiId);
      } catch (e) {
        const noFamilyRTInCache = e instanceof InteractionRequiredAuthError && e.errorCode === noTokensFound;
        const clientMismatchErrorWithFamilyRT = e instanceof ServerError && e.errorCode === INVALID_GRANT_ERROR && e.subError === CLIENT_MISMATCH_ERROR;
        if (noFamilyRTInCache || clientMismatchErrorWithFamilyRT) {
          return invokeAsync(this.acquireTokenWithCachedRefreshToken.bind(this), RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, false, apiId);
        } else {
          throw e;
        }
      }
    }
    return invokeAsync(this.acquireTokenWithCachedRefreshToken.bind(this), RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, false, apiId);
  }
  /**
   * makes a network call to acquire tokens by exchanging RefreshToken available in userCache; throws if refresh token is not cached
   * @param request
   */
  async acquireTokenWithCachedRefreshToken(request, foci, apiId) {
    const refreshToken = invoke(this.cacheManager.getRefreshToken.bind(this.cacheManager), CacheManagerGetRefreshToken, this.logger, this.performanceClient, request.correlationId)(request.account, foci, request.correlationId, void 0);
    if (!refreshToken) {
      throw createInteractionRequiredAuthError(noTokensFound, request.correlationId);
    }
    if (refreshToken.expiresOn) {
      const offset = request.refreshTokenExpirationOffsetSeconds || DEFAULT_REFRESH_TOKEN_EXPIRATION_OFFSET_SECONDS;
      this.performanceClient?.addFields({
        cacheRtExpiresOnSeconds: Number(refreshToken.expiresOn),
        rtOffsetSeconds: offset
      }, request.correlationId);
      if (isTokenExpired(refreshToken.expiresOn, offset)) {
        throw createInteractionRequiredAuthError(refreshTokenExpired, request.correlationId);
      }
    }
    const refreshTokenRequest = __spreadProps(__spreadValues({}, request), {
      refreshToken: refreshToken.secret,
      authenticationScheme: request.authenticationScheme || AuthenticationScheme.BEARER,
      ccsCredential: {
        credential: request.account.homeAccountId,
        type: CcsCredentialType.HOME_ACCOUNT_ID
      }
    });
    if (refreshTokenRequest.authenticationScheme === AuthenticationScheme.DPOP && !refreshTokenRequest.dpopJkt) {
      const dpopProofGenerator = new DpopProofGenerator(this.cryptoUtils, this.config.tokenBindingKeyManager);
      refreshTokenRequest.dpopJkt = await dpopProofGenerator.generateJkt(request.correlationId);
    }
    try {
      return await invokeAsync(this.acquireToken.bind(this), RefreshTokenClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(refreshTokenRequest, apiId);
    } catch (e) {
      if (e instanceof InteractionRequiredAuthError) {
        if (e.subError === badToken) {
          this.logger.verbose("1pg3ap", request.correlationId);
          const badRefreshTokenKey = this.cacheManager.generateCredentialKey(refreshToken);
          this.cacheManager.removeRefreshToken(badRefreshTokenKey, request.correlationId);
        }
      }
      throw e;
    }
  }
  /**
   * Constructs the network message and makes a NW call to the underlying secure token service
   * @param request
   * @param authority
   */
  async executeTokenRequest(request, authority) {
    const queryParametersString = createTokenQueryParameters(request, this.config.authOptions.clientId, this.config.authOptions.redirectUri, this.performanceClient);
    const endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
    const requestBody = await invokeAsync(this.createTokenRequestBody.bind(this), RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, request.correlationId)(request);
    const headers = createTokenRequestHeaders(this.logger, this.config.systemOptions.preventCorsPreflight, request.ccsCredential);
    await addDpopTokenProofHeader(headers, request, endpoint, this.cryptoUtils, this.config.tokenBindingKeyManager);
    const thumbprint = getRequestThumbprint(this.config.authOptions.clientId, request);
    return invokeAsync(executePostToTokenEndpoint, RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, request.correlationId)(endpoint, requestBody, headers, thumbprint, request.correlationId, this.cacheManager, this.networkClient, this.logger, this.performanceClient, this.serverTelemetryManager);
  }
  /**
   * Helper function to create the token request body
   * @param request
   */
  async createTokenRequestBody(request) {
    const parameters = /* @__PURE__ */ new Map();
    addClientId(parameters, request.embeddedClientId || request.extraParameters?.[CLIENT_ID] || this.config.authOptions.clientId);
    if (request.redirectUri) {
      addRedirectUri(parameters, request.redirectUri);
    }
    addScopes(parameters, request.scopes, request.correlationId, true, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes);
    addGrantType(parameters, GrantType.REFRESH_TOKEN_GRANT);
    addClientInfo(parameters);
    addLibraryInfo(parameters, this.config.libraryInfo);
    addApplicationTelemetry(parameters, this.config.telemetry.application);
    addThrottling(parameters);
    if (this.serverTelemetryManager && !isOidcProtocolMode(this.config)) {
      addServerTelemetry(parameters, this.serverTelemetryManager);
    }
    addRefreshToken(parameters, request.refreshToken);
    if (request.attributeTokens) {
      addAttributeTokens(parameters, request.attributeTokens);
    }
    this.performanceClient?.addFields({
      hasAttributeTokens: !!request.attributeTokens?.length
    }, request.correlationId);
    if (this.config.clientCredentials.clientSecret) {
      addClientSecret(parameters, this.config.clientCredentials.clientSecret);
    }
    if (this.config.clientCredentials.clientAssertion) {
      const clientAssertion = this.config.clientCredentials.clientAssertion;
      addClientAssertion(parameters, await getClientAssertion(clientAssertion.assertion, this.config.authOptions.clientId, request.resourceRequestUri));
      addClientAssertionType(parameters, clientAssertion.assertionType);
    }
    if (request.authenticationScheme === AuthenticationScheme.POP) {
      const popTokenGenerator = new PopTokenGenerator(this.cryptoUtils, this.config.tokenBindingKeyManager, this.performanceClient);
      let reqCnfData;
      if (!request.popKid) {
        const generatedReqCnfData = await invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PopTokenGenerateCnf, this.logger, this.performanceClient, request.correlationId)(request, this.logger);
        reqCnfData = generatedReqCnfData.reqCnfString;
      } else {
        reqCnfData = this.cryptoUtils.encodeKid(request.popKid);
      }
      addPopToken(parameters, reqCnfData);
    } else if (request.authenticationScheme === AuthenticationScheme.SSH) {
      if (request.sshJwk) {
        addSshJwk(parameters, request.sshJwk);
      } else {
        throw createClientConfigurationError(missingSshJwk, request.correlationId);
      }
    }
    if (this.config.systemOptions.preventCorsPreflight && request.ccsCredential) {
      switch (request.ccsCredential.type) {
        case CcsCredentialType.HOME_ACCOUNT_ID:
          try {
            const clientInfo = buildClientInfoFromHomeAccountId(request.ccsCredential.credential);
            addCcsOid(parameters, clientInfo);
          } catch (e) {
            this.logger.verbose(`1qhtee ${e}`, request.correlationId);
          }
          break;
        case CcsCredentialType.UPN:
          addCcsUpn(parameters, request.ccsCredential.credential);
          break;
      }
    }
    if (request.embeddedClientId) {
      addBrokerParameters(parameters, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    }
    if (request.extraParameters) {
      addExtraParameters(parameters, __spreadValues({}, request.extraParameters));
    }
    instrumentBrokerParams(parameters, request.correlationId, this.performanceClient);
    addClaims(parameters, request.correlationId, request.claims, this.config.authOptions.clientCapabilities, request.skipBrokerClaims);
    return mapToQueryString(parameters);
  }
};

// node_modules/@azure/msal-common/dist-browser/telemetry/server/ServerTelemetryManager.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var skuGroupSeparator = ",";
var skuValueSeparator = "|";
function makeExtraSkuString(params) {
  const { skus, libraryName, libraryVersion, extensionName, extensionVersion } = params;
  const skuMap = /* @__PURE__ */ new Map([
    [0, [libraryName, libraryVersion]],
    [2, [extensionName, extensionVersion]]
  ]);
  let skuArr = [];
  if (skus?.length) {
    skuArr = skus.split(skuGroupSeparator);
    if (skuArr.length < 4) {
      return skus;
    }
  } else {
    skuArr = Array.from({ length: 4 }, () => skuValueSeparator);
  }
  skuMap.forEach((value, key) => {
    if (value.length === 2 && value[0]?.length && value[1]?.length) {
      setSku({
        skuArr,
        index: key,
        skuName: value[0],
        skuVersion: value[1]
      });
    }
  });
  return skuArr.join(skuGroupSeparator);
}
function setSku(params) {
  const { skuArr, index, skuName, skuVersion } = params;
  if (index >= skuArr.length) {
    return;
  }
  skuArr[index] = [skuName, skuVersion].join(skuValueSeparator);
}
var ServerTelemetryManager = class _ServerTelemetryManager {
  constructor(telemetryRequest, cacheManager) {
    this.cacheOutcome = CacheOutcome.NOT_APPLICABLE;
    this.cacheManager = cacheManager;
    this.apiId = telemetryRequest.apiId;
    this.correlationId = telemetryRequest.correlationId;
    this.wrapperSKU = telemetryRequest.wrapperSKU || "";
    this.wrapperVer = telemetryRequest.wrapperVer || "";
    this.telemetryCacheKey = SERVER_TELEM_CACHE_KEY + CACHE_KEY_SEPARATOR + telemetryRequest.clientId;
  }
  /**
   * API to add MSER Telemetry to request
   */
  generateCurrentRequestHeaderValue() {
    const request = `${this.apiId}${SERVER_TELEM_VALUE_SEPARATOR}${this.cacheOutcome}`;
    const platformFieldsArr = [this.wrapperSKU, this.wrapperVer];
    const nativeBrokerErrorCode = this.getNativeBrokerErrorCode();
    if (nativeBrokerErrorCode?.length) {
      platformFieldsArr.push(`broker_error=${nativeBrokerErrorCode}`);
    }
    const platformFields = platformFieldsArr.join(SERVER_TELEM_VALUE_SEPARATOR);
    const regionDiscoveryFields = this.getRegionDiscoveryFields();
    const requestWithRegionDiscoveryFields = [
      request,
      regionDiscoveryFields
    ].join(SERVER_TELEM_VALUE_SEPARATOR);
    return [
      SERVER_TELEM_SCHEMA_VERSION,
      requestWithRegionDiscoveryFields,
      platformFields
    ].join(SERVER_TELEM_CATEGORY_SEPARATOR);
  }
  /**
   * API to add MSER Telemetry for the last failed request
   */
  generateLastRequestHeaderValue() {
    const lastRequests = this.getLastRequests();
    const maxErrors = _ServerTelemetryManager.maxErrorsToSend(lastRequests);
    const failedRequests = lastRequests.failedRequests.slice(0, 2 * maxErrors).join(SERVER_TELEM_VALUE_SEPARATOR);
    const errors = lastRequests.errors.slice(0, maxErrors).join(SERVER_TELEM_VALUE_SEPARATOR);
    const errorCount = lastRequests.errors.length;
    const overflow = maxErrors < errorCount ? SERVER_TELEM_OVERFLOW_TRUE : SERVER_TELEM_OVERFLOW_FALSE;
    const platformFields = [errorCount, overflow].join(SERVER_TELEM_VALUE_SEPARATOR);
    return [
      SERVER_TELEM_SCHEMA_VERSION,
      lastRequests.cacheHits,
      failedRequests,
      errors,
      platformFields
    ].join(SERVER_TELEM_CATEGORY_SEPARATOR);
  }
  /**
   * API to cache token failures for MSER data capture
   * @param error
   */
  cacheFailedRequest(error) {
    try {
      const lastRequests = this.getLastRequests();
      if (lastRequests.errors.length >= SERVER_TELEM_MAX_CACHED_ERRORS) {
        lastRequests.failedRequests.shift();
        lastRequests.failedRequests.shift();
        lastRequests.errors.shift();
      }
      lastRequests.failedRequests.push(this.apiId, this.correlationId);
      if (error instanceof Error && !!error && error.toString()) {
        if (error instanceof AuthError) {
          if (error.subError) {
            lastRequests.errors.push(error.subError);
          } else if (error.errorCode) {
            lastRequests.errors.push(error.errorCode);
          } else {
            lastRequests.errors.push(error.toString());
          }
        } else {
          lastRequests.errors.push(error.toString());
        }
      } else {
        lastRequests.errors.push(SERVER_TELEM_UNKNOWN_ERROR);
      }
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests, this.correlationId);
    } catch {
    }
    return;
  }
  /**
   * Update server telemetry cache entry by incrementing cache hit counter
   */
  incrementCacheHits() {
    const lastRequests = this.getLastRequests();
    lastRequests.cacheHits += 1;
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests, this.correlationId);
    return lastRequests.cacheHits;
  }
  /**
   * Get the server telemetry entity from cache or initialize a new one
   */
  getLastRequests() {
    const initialValue = {
      failedRequests: [],
      errors: [],
      cacheHits: 0
    };
    const lastRequests = this.cacheManager.getServerTelemetry(this.telemetryCacheKey, this.correlationId);
    return lastRequests || initialValue;
  }
  /**
   * Remove server telemetry cache entry
   */
  clearTelemetryCache() {
    const lastRequests = this.getLastRequests();
    const numErrorsFlushed = _ServerTelemetryManager.maxErrorsToSend(lastRequests);
    const errorCount = lastRequests.errors.length;
    if (numErrorsFlushed === errorCount) {
      this.cacheManager.removeItem(this.telemetryCacheKey, this.correlationId);
    } else {
      const serverTelemEntity = {
        failedRequests: lastRequests.failedRequests.slice(numErrorsFlushed * 2),
        errors: lastRequests.errors.slice(numErrorsFlushed),
        cacheHits: 0
      };
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, serverTelemEntity, this.correlationId);
    }
  }
  /**
   * Returns the maximum number of errors that can be flushed to the server in the next network request
   * @param serverTelemetryEntity
   */
  static maxErrorsToSend(serverTelemetryEntity) {
    let i;
    let maxErrors = 0;
    let dataSize = 0;
    const errorCount = serverTelemetryEntity.errors.length;
    for (i = 0; i < errorCount; i++) {
      const apiId = serverTelemetryEntity.failedRequests[2 * i] || "";
      const correlationId = serverTelemetryEntity.failedRequests[2 * i + 1] || "";
      const errorCode = serverTelemetryEntity.errors[i] || "";
      dataSize += apiId.toString().length + correlationId.toString().length + errorCode.length + 3;
      if (dataSize < SERVER_TELEM_MAX_LAST_HEADER_BYTES) {
        maxErrors += 1;
      } else {
        break;
      }
    }
    return maxErrors;
  }
  /**
   * Get the region discovery fields
   *
   * @returns string
   */
  getRegionDiscoveryFields() {
    const regionDiscoveryFields = [];
    regionDiscoveryFields.push(this.regionUsed || "");
    regionDiscoveryFields.push(this.regionSource || "");
    regionDiscoveryFields.push(this.regionOutcome || "");
    return regionDiscoveryFields.join(",");
  }
  /**
   * Update the region discovery metadata
   *
   * @param regionDiscoveryMetadata
   * @returns void
   */
  updateRegionDiscoveryMetadata(regionDiscoveryMetadata) {
    this.regionUsed = regionDiscoveryMetadata.region_used;
    this.regionSource = regionDiscoveryMetadata.region_source;
    this.regionOutcome = regionDiscoveryMetadata.region_outcome;
  }
  /**
   * Set cache outcome
   */
  setCacheOutcome(cacheOutcome) {
    this.cacheOutcome = cacheOutcome;
  }
  setNativeBrokerErrorCode(errorCode) {
    const lastRequests = this.getLastRequests();
    lastRequests.nativeBrokerErrorCode = errorCode;
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests, this.correlationId);
  }
  getNativeBrokerErrorCode() {
    return this.getLastRequests().nativeBrokerErrorCode;
  }
  clearNativeBrokerErrorCode() {
    const lastRequests = this.getLastRequests();
    delete lastRequests.nativeBrokerErrorCode;
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests, this.correlationId);
  }
  static makeExtraSkuString(params) {
    return makeExtraSkuString(params);
  }
};
var StubServerTelemetryManager = class extends ServerTelemetryManager {
  constructor() {
    super({ clientId: "", apiId: 0, correlationId: "", forceRefresh: false }, {});
  }
  generateCurrentRequestHeaderValue() {
    return "";
  }
  generateLastRequestHeaderValue() {
    return "";
  }
  cacheFailedRequest() {
  }
  incrementCacheHits() {
    return 0;
  }
  clearTelemetryCache() {
  }
  getRegionDiscoveryFields() {
    return "";
  }
  updateRegionDiscoveryMetadata() {
  }
  setCacheOutcome() {
  }
  setNativeBrokerErrorCode() {
  }
  getNativeBrokerErrorCode() {
    return void 0;
  }
  clearNativeBrokerErrorCode() {
  }
};

// node_modules/@azure/msal-common/dist-browser/client/SilentFlowClient.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var SilentFlowClient = class {
  constructor(configuration, performanceClient) {
    this.config = buildClientConfiguration(configuration);
    this.logger = new Logger(this.config.loggerOptions, name, version);
    this.cryptoUtils = this.config.cryptoInterface;
    this.cacheManager = this.config.storageInterface;
    this.networkClient = this.config.networkInterface;
    this.serverTelemetryManager = this.config.serverTelemetryManager;
    this.authority = this.config.authOptions.authority;
    this.performanceClient = performanceClient;
  }
  /**
   * Retrieves token from cache or throws an error if it must be refreshed.
   * @param request
   */
  async acquireCachedToken(request) {
    let lastCacheOutcome = CacheOutcome.NOT_APPLICABLE;
    if (request.forceRefresh || !StringUtils.isEmptyObj(request.claims)) {
      this.setCacheOutcome(CacheOutcome.FORCE_REFRESH_OR_CLAIMS, request.correlationId);
      throw createClientAuthError(tokenRefreshRequired, request.correlationId);
    }
    if (!request.account) {
      throw createClientAuthError(noAccountInSilentRequest, request.correlationId);
    }
    const requestTenantId = request.account.tenantId || getTenantFromAuthorityString(request.authority, request.correlationId);
    const tokenKeys = this.cacheManager.getTokenKeys();
    const cachedAccessToken = this.cacheManager.getAccessToken(request.account, request, tokenKeys, requestTenantId);
    if (!cachedAccessToken) {
      this.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN, request.correlationId);
      throw createClientAuthError(tokenRefreshRequired, request.correlationId);
    } else if (wasClockTurnedBack(cachedAccessToken.cachedAt) || isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
      this.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED, request.correlationId);
      throw createClientAuthError(tokenRefreshRequired, request.correlationId);
    } else if (request.resource) {
      if (cachedAccessToken.resource !== request.resource) {
        this.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN, request.correlationId);
        throw createClientAuthError(tokenRefreshRequired, request.correlationId);
      }
    } else if (cachedAccessToken.refreshOn && isTokenExpired(cachedAccessToken.refreshOn, 0)) {
      lastCacheOutcome = CacheOutcome.PROACTIVELY_REFRESHED;
    }
    const cachedAccessTokenType = cachedAccessToken.tokenType?.toLowerCase();
    if (cachedAccessTokenType === AuthenticationScheme.DPOP.toLowerCase()) {
      if (!cachedAccessToken.keyId) {
        this.logger.info("1enswf", request.correlationId);
        this.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN, request.correlationId);
        throw createClientAuthError(tokenRefreshRequired, request.correlationId);
      }
      try {
        await this.config.tokenBindingKeyManager.getTokenBindingPublicKeyJwk(cachedAccessToken.keyId, request.correlationId);
      } catch {
        this.logger.info("14djth", request.correlationId);
        this.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN, request.correlationId);
        throw createClientAuthError(tokenRefreshRequired, request.correlationId);
      }
    }
    const environment = request.authority || this.authority.getPreferredCache();
    const cacheRecord = {
      account: this.cacheManager.getAccount(this.cacheManager.generateAccountKey(request.account), request.correlationId),
      accessToken: cachedAccessToken,
      idToken: this.cacheManager.getIdToken(request.account, request.correlationId, tokenKeys, requestTenantId),
      refreshToken: null,
      appMetadata: this.cacheManager.readAppMetadataFromCache(environment, request.correlationId)
    };
    this.setCacheOutcome(lastCacheOutcome, request.correlationId);
    if (this.config.serverTelemetryManager) {
      this.config.serverTelemetryManager.incrementCacheHits();
    }
    return [
      await invokeAsync(this.generateResultFromCacheRecord.bind(this), SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, request.correlationId)(cacheRecord, request),
      lastCacheOutcome
    ];
  }
  setCacheOutcome(cacheOutcome, correlationId) {
    this.serverTelemetryManager?.setCacheOutcome(cacheOutcome);
    this.performanceClient?.addFields({
      cacheOutcome
    }, correlationId);
    if (cacheOutcome !== CacheOutcome.NOT_APPLICABLE) {
      this.logger.info(`09ingz ${cacheOutcome}`, correlationId);
    }
  }
  /**
   * Helper function to build response object from the CacheRecord
   * @param cacheRecord
   */
  async generateResultFromCacheRecord(cacheRecord, request) {
    let idTokenClaims;
    if (cacheRecord.idToken) {
      idTokenClaims = extractTokenClaims(cacheRecord.idToken.secret, this.config.cryptoInterface.base64Decode, request.correlationId);
    }
    return ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, cacheRecord, true, request, this.performanceClient, {
      idTokenClaims,
      tokenBindingKeyManager: this.config.tokenBindingKeyManager
    });
  }
};

// node_modules/@azure/msal-common/dist-browser/network/INetworkModule.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
var StubbedNetworkModule = {
  // Module-level singleton: no per-request correlationId available
  sendGetRequestAsync: () => {
    return Promise.reject(createClientAuthError(methodNotImplemented, ""));
  },
  sendPostRequestAsync: () => {
    return Promise.reject(createClientAuthError(methodNotImplemented, ""));
  }
};

// node_modules/@azure/msal-common/dist-browser/request/BaseAuthRequest.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */
function enforceResourceParameter(isMcp, request) {
  if (!isMcp) {
    return;
  }
  if (request.resource && (containsResourceParam(request.extraParameters) || containsResourceParam(request.extraQueryParameters))) {
    throw createClientAuthError(misplacedResourceParam, request.correlationId || "");
  }
  if (!request.resource) {
    throw createClientAuthError(resourceParameterRequired, request.correlationId || "");
  }
}
function containsResourceParam(params) {
  if (!params) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(params, "resource");
}

// node_modules/@azure/msal-common/dist-browser/index-browser.mjs
/*! @azure/msal-common v16.14.1 2026-09-15 */

// node_modules/@azure/msal-browser/dist/telemetry/BrowserPerformanceEvents.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var AcquireTokenFromCache = "acquireTokenFromCache";
var AcquireTokenByRefreshToken = "acquireTokenByRefreshToken";
var AcquireTokenSilentAsync = "acquireTokenSilentAsync";
var CryptoOptsGetPublicKeyThumbprint = "cryptoOptsGetPublicKeyThumbprint";
var CryptoOptsSignJwt = "cryptoOptsSignJwt";
var SilentCacheClientAcquireToken = "silentCacheClientAcquireToken";
var SilentIframeClientAcquireToken = "silentIframeClientAcquireToken";
var AwaitConcurrentIframe = "awaitConcurrentIframe";
var SilentRefreshClientAcquireToken = "silentRefreshClientAcquireToken";
var StandardInteractionClientGetDiscoveredAuthority = "standardInteractionClientGetDiscoveredAuthority";
var NativeInteractionClientAcquireToken = "nativeInteractionClientAcquireToken";
var NativeInteractionClientAcquireTokenRedirect = "nativeInteractionClientAcquireToken";
var RefreshTokenClientAcquireTokenByRefreshToken = "refreshTokenClientAcquireTokenByRefreshToken";
var AcquireTokenBySilentIframe = "acquireTokenBySilentIframe";
var InitializeBaseRequest = "initializeBaseRequest";
var InitializeSilentRequest = "initializeSilentRequest";
var InitializeCache = "initializeCache";
var SilentIframeClientTokenHelper = "silentIframeClientTokenHelper";
var SilentHandlerInitiateAuthRequest = "silentHandlerInitiateAuthRequest";
var SilentHandlerMonitorIframeForHash = "silentHandlerMonitorIframeForHash";
var StandardInteractionClientCreateAuthCodeClient = "standardInteractionClientCreateAuthCodeClient";
var StandardInteractionClientGetClientConfiguration = "standardInteractionClientGetClientConfiguration";
var StandardInteractionClientInitializeAuthorizationRequest = "standardInteractionClientInitializeAuthorizationRequest";
var SilentFlowClientAcquireCachedToken = "silentFlowClientAcquireCachedToken";
var GetStandardParams = "getStandardParams";
var HandleCodeResponse = "handleCodeResponse";
var HandleResponseEar = "handleResponseEar";
var HandleResponsePlatformBroker = "handleResponsePlatformBroker";
var HandleResponseCode = "handleResponseCode";
var AuthClientAcquireToken = "authClientAcquireToken";
var DeserializeResponse = "deserializeResponse";
var AuthorityFactoryCreateDiscoveredInstance = "authorityFactoryCreateDiscoveredInstance";
var AcquireTokenByCodeAsync = "acquireTokenByCodeAsync";
var HandleRedirectPromiseMeasurement = "handleRedirectPromise";
var HandleNativeRedirectPromiseMeasurement = "handleNativeRedirectPromise";
var NativeMessageHandlerHandshake = "nativeMessageHandlerHandshake";
var RemoveHiddenIframe = "removeHiddenIframe";
var ImportExistingCache = "importExistingCache";
var GeneratePkceCodes = "generatePkceCodes";
var GenerateCodeVerifier = "generateCodeVerifier";
var GenerateCodeChallengeFromVerifier = "generateCodeChallengeFromVerifier";
var Sha256Digest = "sha256Digest";
var GetRandomValues = "getRandomValues";
var GenerateHKDF = "generateHKDF";
var GenerateBaseKey = "generateBaseKey";
var Base64Decode = "base64Decode";
var UrlEncodeArr = "urlEncodeArr";
var Encrypt = "encrypt";
var Decrypt = "decrypt";
var GenerateEarKey = "generateEarKey";
var DecryptEarResponse = "decryptEarResponse";
var LoadAccount = "loadAccount";
var LoadIdToken = "loadIdToken";
var LoadAccessToken = "loadAccessToken";
var LoadRefreshToken = "loadRefreshToken";
var WaitForBridgeLateResponse = "waitForBridgeLateResponse";

// node_modules/@azure/msal-browser/dist/error/BrowserAuthError.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function getDefaultErrorMessage2(code) {
  return `See https://aka.ms/msal.js.errors#${code} for details`;
}
var BrowserAuthError = class _BrowserAuthError extends AuthError {
  constructor(errorCode, correlationId, subError) {
    super(errorCode, correlationId, getDefaultErrorMessage2(errorCode), subError);
    Object.setPrototypeOf(this, _BrowserAuthError.prototype);
    this.name = "BrowserAuthError";
  }
};
function createBrowserAuthError(errorCode, correlationId, subError) {
  return new BrowserAuthError(errorCode, correlationId, subError);
}

// node_modules/@azure/msal-browser/dist/error/BrowserAuthErrorCodes.mjs
var BrowserAuthErrorCodes_exports = {};
__export(BrowserAuthErrorCodes_exports, {
  authCodeOrNativeAccountIdRequired: () => authCodeOrNativeAccountIdRequired,
  authCodeRequired: () => authCodeRequired,
  authRequestNotSetError: () => authRequestNotSetError,
  blockIframeReload: () => blockIframeReload,
  blockNestedPopups: () => blockNestedPopups,
  cryptoKeyNotFound: () => cryptoKeyNotFound,
  cryptoNonExistent: () => cryptoNonExistent,
  databaseNotOpen: () => databaseNotOpen,
  databaseUnavailable: () => databaseUnavailable,
  earJweEmpty: () => earJweEmpty,
  earJwkEmpty: () => earJwkEmpty,
  emptyNavigateUri: () => emptyNavigateUri,
  emptyResponse: () => emptyResponse,
  emptyWindowError: () => emptyWindowError,
  failedToBuildHeaders: () => failedToBuildHeaders,
  failedToDecryptEarResponse: () => failedToDecryptEarResponse,
  failedToParseHeaders: () => failedToParseHeaders,
  failedToParseResponse: () => failedToParseResponse,
  getRequestFailed: () => getRequestFailed,
  hashDoesNotContainKnownProperties: () => hashDoesNotContainKnownProperties,
  hashEmptyError: () => hashEmptyError,
  iframeClosedPrematurely: () => iframeClosedPrematurely,
  interactionInProgress: () => interactionInProgress,
  interactionInProgressCancelled: () => interactionInProgressCancelled,
  invalidBase64String: () => invalidBase64String,
  invalidCacheType: () => invalidCacheType,
  invalidPopTokenRequest: () => invalidPopTokenRequest,
  invalidPublicJwk: () => invalidPublicJwk,
  nativeConnectionNotEstablished: () => nativeConnectionNotEstablished,
  nativeExtensionNotInstalled: () => nativeExtensionNotInstalled,
  nativeHandshakeTimeout: () => nativeHandshakeTimeout,
  nativePromptNotSupported: () => nativePromptNotSupported,
  noAccountError: () => noAccountError,
  noNetworkConnectivity: () => noNetworkConnectivity2,
  noStateInHash: () => noStateInHash,
  noTokenRequestCacheError: () => noTokenRequestCacheError,
  nonBrowserEnvironment: () => nonBrowserEnvironment,
  pkceNotCreated: () => pkceNotCreated,
  popupRelayUnsupportedFlow: () => popupRelayUnsupportedFlow,
  popupWindowError: () => popupWindowError,
  postRequestFailed: () => postRequestFailed2,
  redirectBridgeEmptyResponse: () => redirectBridgeEmptyResponse,
  redirectInIframe: () => redirectInIframe,
  silentLogoutUnsupported: () => silentLogoutUnsupported,
  silentPromptValueError: () => silentPromptValueError,
  spaCodeAndNativeAccountIdPresent: () => spaCodeAndNativeAccountIdPresent,
  stateInteractionTypeMismatch: () => stateInteractionTypeMismatch,
  timedOut: () => timedOut,
  tokenBindingKeyAlgorithmMismatch: () => tokenBindingKeyAlgorithmMismatch,
  tokenBindingKeyJwkThumbprintMismatch: () => tokenBindingKeyJwkThumbprintMismatch,
  unableToAcquireTokenFromNativePlatform: () => unableToAcquireTokenFromNativePlatform,
  unableToLoadToken: () => unableToLoadToken,
  unableToParseState: () => unableToParseState,
  unableToParseTokenRequestCacheError: () => unableToParseTokenRequestCacheError,
  uninitializedPublicClientApplication: () => uninitializedPublicClientApplication,
  unsupportedTokenBindingAlgorithm: () => unsupportedTokenBindingAlgorithm,
  userCancelled: () => userCancelled
});
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var pkceNotCreated = "pkce_not_created";
var earJwkEmpty = "ear_jwk_empty";
var earJweEmpty = "ear_jwe_empty";
var cryptoNonExistent = "crypto_nonexistent";
var emptyNavigateUri = "empty_navigate_uri";
var hashEmptyError = "hash_empty_error";
var noStateInHash = "no_state_in_hash";
var hashDoesNotContainKnownProperties = "hash_does_not_contain_known_properties";
var unableToParseState = "unable_to_parse_state";
var stateInteractionTypeMismatch = "state_interaction_type_mismatch";
var interactionInProgress = "interaction_in_progress";
var interactionInProgressCancelled = "interaction_in_progress_cancelled";
var popupWindowError = "popup_window_error";
var emptyWindowError = "empty_window_error";
var userCancelled = "user_cancelled";
var redirectBridgeEmptyResponse = "redirect_bridge_empty_response";
var redirectInIframe = "redirect_in_iframe";
var blockIframeReload = "block_iframe_reload";
var blockNestedPopups = "block_nested_popups";
var popupRelayUnsupportedFlow = "popup_relay_unsupported_flow";
var iframeClosedPrematurely = "iframe_closed_prematurely";
var silentLogoutUnsupported = "silent_logout_unsupported";
var noAccountError = "no_account_error";
var silentPromptValueError = "silent_prompt_value_error";
var noTokenRequestCacheError = "no_token_request_cache_error";
var unableToParseTokenRequestCacheError = "unable_to_parse_token_request_cache_error";
var authRequestNotSetError = "auth_request_not_set_error";
var invalidCacheType = "invalid_cache_type";
var nonBrowserEnvironment = "non_browser_environment";
var databaseNotOpen = "database_not_open";
var noNetworkConnectivity2 = "no_network_connectivity";
var postRequestFailed2 = "post_request_failed";
var getRequestFailed = "get_request_failed";
var failedToParseResponse = "failed_to_parse_response";
var unableToLoadToken = "unable_to_load_token";
var cryptoKeyNotFound = "crypto_key_not_found";
var invalidPublicJwk = "invalid_public_jwk";
var authCodeRequired = "auth_code_required";
var authCodeOrNativeAccountIdRequired = "auth_code_or_nativeAccountId_required";
var spaCodeAndNativeAccountIdPresent = "spa_code_and_nativeAccountId_present";
var databaseUnavailable = "database_unavailable";
var unableToAcquireTokenFromNativePlatform = "unable_to_acquire_token_from_native_platform";
var nativeHandshakeTimeout = "native_handshake_timeout";
var nativeExtensionNotInstalled = "native_extension_not_installed";
var nativeConnectionNotEstablished = "native_connection_not_established";
var uninitializedPublicClientApplication = "uninitialized_public_client_application";
var nativePromptNotSupported = "native_prompt_not_supported";
var invalidBase64String = "invalid_base64_string";
var invalidPopTokenRequest = "invalid_pop_token_request";
var unsupportedTokenBindingAlgorithm = "unsupported_token_binding_algorithm";
var tokenBindingKeyAlgorithmMismatch = "token_binding_key_algorithm_mismatch";
var tokenBindingKeyJwkThumbprintMismatch = "token_binding_key_jwk_thumbprint_mismatch";
var failedToBuildHeaders = "failed_to_build_headers";
var failedToParseHeaders = "failed_to_parse_headers";
var failedToDecryptEarResponse = "failed_to_decrypt_ear_response";
var timedOut = "timed_out";
var emptyResponse = "empty_response";

// node_modules/@azure/msal-browser/dist/encode/Base64Decode.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function base64Decode(input) {
  return new TextDecoder().decode(base64DecToArr(input));
}
function base64DecToArr(base64String) {
  let encodedString = base64String.replace(/-/g, "+").replace(/_/g, "/");
  switch (encodedString.length % 4) {
    case 0:
      break;
    case 2:
      encodedString += "==";
      break;
    case 3:
      encodedString += "=";
      break;
    default:
      throw createBrowserAuthError(invalidBase64String, "");
  }
  const binString = atob(encodedString);
  return Uint8Array.from(binString, (m) => m.codePointAt(0) || 0);
}

// node_modules/@azure/msal-browser/dist/utils/BrowserConstants.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var BrowserConstants = {
  /**
   * Invalid grant error code
   */
  INVALID_GRANT_ERROR: "invalid_grant",
  /**
   * Default popup window width
   */
  POPUP_WIDTH: 483,
  /**
   * Default popup window height
   */
  POPUP_HEIGHT: 600,
  /**
   * Name of the popup window starts with
   */
  POPUP_NAME_PREFIX: "msal",
  /**
   * Msal-browser SKU
   */
  MSAL_SKU: "msal.js.browser"
};
var PlatformAuthConstants = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS",
  MICROSOFT_ENTRA_BROKERID: "MicrosoftEntra",
  DOM_API_NAME: "DOM API",
  PLATFORM_DOM_APIS: "get-token-and-sign-out",
  PLATFORM_DOM_PROVIDER: "PlatformAuthDOMHandler",
  PLATFORM_EXTENSION_PROVIDER: "PlatformAuthExtensionHandler"
};
var NativeExtensionMethod = {
  HandshakeRequest: "Handshake",
  HandshakeResponse: "HandshakeResponse",
  GetToken: "GetToken",
  Response: "Response"
};
var BrowserCacheLocation = {
  LocalStorage: "localStorage",
  SessionStorage: "sessionStorage",
  MemoryStorage: "memoryStorage"
};
var HTTP_REQUEST_TYPE = {
  GET: "GET",
  POST: "POST"
};
var INTERACTION_TYPE = {
  SIGNIN: "signin",
  SIGNOUT: "signout"
};
var TemporaryCacheKeys = {
  ORIGIN_URI: "request.origin",
  URL_HASH: "urlHash",
  REQUEST_PARAMS: "request.params",
  VERIFIER: "code.verifier",
  INTERACTION_STATUS_KEY: "interaction.status",
  NATIVE_REQUEST: "request.native"
};
var InMemoryCacheKeys = {
  WRAPPER_SKU: "wrapper.sku",
  WRAPPER_VER: "wrapper.version"
};
var ApiId = {
  acquireTokenRedirect: 861,
  acquireTokenPopup: 862,
  ssoSilent: 863,
  acquireTokenSilent_authCode: 864,
  handleRedirectPromise: 865,
  acquireTokenByCode: 866,
  acquireTokenSilent_silentFlow: 61,
  logout: 961,
  logoutPopup: 962,
  hydrateCache: 963,
  loadExternalTokens: 964
};
var ApiName = {
  861: "acquireTokenRedirect",
  862: "acquireTokenPopup",
  863: "ssoSilent",
  864: "acquireTokenSilent_authCode",
  865: "handleRedirectPromise",
  866: "acquireTokenByCode",
  61: "acquireTokenSilent_silentFlow",
  961: "logout",
  962: "logoutPopup",
  963: "hydrateCache",
  964: "loadExternalTokens"
};
var apiIdToName = (id) => {
  if (typeof id === "number" && id in ApiName) {
    return ApiName[id];
  }
  return "unknown";
};
var InteractionType;
(function(InteractionType2) {
  InteractionType2["Redirect"] = "redirect";
  InteractionType2["Popup"] = "popup";
  InteractionType2["Silent"] = "silent";
  InteractionType2["None"] = "none";
})(InteractionType || (InteractionType = {}));
var InteractionStatus = {
  /**
   * Initial status before interaction occurs
   */
  Startup: "startup",
  /**
   * Status set when logout call occuring
   */
  Logout: "logout",
  /**
   * Status set for acquireToken calls
   */
  AcquireToken: "acquireToken",
  /**
   * Status set when handleRedirect in progress
   */
  HandleRedirect: "handleRedirect",
  /**
   * Status set when interaction is complete
   */
  None: "none"
};
var DEFAULT_REQUEST = {
  scopes: Constants_exports.OIDC_DEFAULT_SCOPES
};
var KEY_FORMAT_JWK = "jwk";
var WrapperSKU = {
  React: "@azure/msal-react",
  Angular: "@azure/msal-angular"
};
var DB_NAME = "msal.db";
var DB_VERSION = 1;
var DB_TABLE_NAME = `${DB_NAME}.keys`;
var CacheLookupPolicy = {
  /*
   * acquireTokenSilent will attempt to retrieve an access token from the cache. If the access token is expired
   * or cannot be found the refresh token will be used to acquire a new one. Finally, if the refresh token
   * is expired acquireTokenSilent will attempt to acquire new access and refresh tokens.
   */
  Default: 0,
  /*
   * acquireTokenSilent will only look for access tokens in the cache. It will not attempt to renew access or
   * refresh tokens.
   */
  AccessToken: 1,
  /*
   * acquireTokenSilent will attempt to retrieve an access token from the cache. If the access token is expired or
   * cannot be found, the refresh token will be used to acquire a new one. If the refresh token is expired, it
   * will not be renewed and acquireTokenSilent will fail.
   */
  AccessTokenAndRefreshToken: 2,
  /*
   * acquireTokenSilent will not attempt to retrieve access tokens from the cache and will instead attempt to
   * exchange the cached refresh token for a new access token. If the refresh token is expired, it will not be
   * renewed and acquireTokenSilent will fail.
   */
  RefreshToken: 3,
  /*
   * acquireTokenSilent will not look in the cache for the access token. It will go directly to network with the
   * cached refresh token. If the refresh token is expired an attempt will be made to renew it. This is equivalent to
   * setting "forceRefresh: true".
   */
  RefreshTokenAndNetwork: 4,
  /*
   * acquireTokenSilent will attempt to renew both access and refresh tokens. It will not look in the cache. This will
   * always fail if 3rd party cookies are blocked by the browser.
   */
  Skip: 5
};
var iFrameRenewalPolicies = [
  CacheLookupPolicy.Default,
  CacheLookupPolicy.Skip,
  CacheLookupPolicy.RefreshTokenAndNetwork
];

// node_modules/@azure/msal-browser/dist/encode/Base64Encode.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function urlEncode(input) {
  return encodeURIComponent(base64Encode(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"));
}
function urlEncodeArr(inputArr) {
  return base64EncArr(inputArr).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function base64Encode(input) {
  return base64EncArr(new TextEncoder().encode(input));
}
function base64EncArr(aBytes) {
  const binString = Array.from(aBytes, (x) => String.fromCodePoint(x)).join("");
  return btoa(binString);
}

// node_modules/@azure/msal-browser/dist/crypto/BrowserCrypto.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var PKCS1_V15_KEYGEN_ALG = "RSASSA-PKCS1-v1_5";
var AES_GCM = "AES-GCM";
var HKDF = "HKDF";
var S256_HASH_ALG = "SHA-256";
var JSON_WEB_KEY_CURVE_P256 = "P-256";
var JSON_WEB_KEY_TYPE_EC = "EC";
var JSON_WEB_KEY_TYPE_RSA = "RSA";
var MISSING_JWK_KTY_SUBERROR = "missing_jwk_kty";
var UNSUPPORTED_JWK_KTY_SUBERROR = "unsupported_jwk_kty";
var MISSING_JWK_MEMBER_SUBERROR = "missing_jwk_member";
var EMPTY_JWK_MEMBER_SUBERROR = "empty_jwk_member";
var MODULUS_LENGTH = 2048;
var PUBLIC_EXPONENT = new Uint8Array([1, 0, 1]);
var UUID_CHARS = "0123456789abcdef";
var UINT32_ARR = new Uint32Array(1);
var RAW = "raw";
var ENCRYPT = "encrypt";
var DECRYPT = "decrypt";
var DERIVE_KEY = "deriveKey";
var SUBTLE_SUBERROR = "crypto_subtle_undefined";
var RSA_KEYGEN_ALGORITHM_OPTIONS = {
  name: PKCS1_V15_KEYGEN_ALG,
  hash: S256_HASH_ALG,
  modulusLength: MODULUS_LENGTH,
  publicExponent: PUBLIC_EXPONENT
};
var RSA_SIGN_ALGORITHM_OPTIONS = {
  name: PKCS1_V15_KEYGEN_ALG
};
var ECDSA_P256_KEYGEN_ALGORITHM_OPTIONS = {
  name: "ECDSA",
  namedCurve: JSON_WEB_KEY_CURVE_P256
};
var ECDSA_SHA256_SIGN_ALGORITHM_OPTIONS = {
  name: "ECDSA",
  hash: { name: S256_HASH_ALG }
};
function validateCryptoAvailable(skipValidateSubtleCrypto) {
  if (!window) {
    throw createBrowserAuthError(nonBrowserEnvironment, "");
  }
  if (!window.crypto) {
    throw createBrowserAuthError(cryptoNonExistent, "");
  }
  if (!skipValidateSubtleCrypto && !window.crypto.subtle) {
    throw createBrowserAuthError(cryptoNonExistent, "", SUBTLE_SUBERROR);
  }
}
async function sha256Digest(dataString) {
  const encoder = new TextEncoder();
  const data = encoder.encode(dataString);
  return window.crypto.subtle.digest(S256_HASH_ALG, data);
}
function getRandomValues(dataBuffer) {
  return window.crypto.getRandomValues(dataBuffer);
}
function getRandomUint32() {
  window.crypto.getRandomValues(UINT32_ARR);
  return UINT32_ARR[0];
}
function createNewGuid() {
  const currentTimestamp = Date.now();
  const baseRand = getRandomUint32() * 1024 + (getRandomUint32() & 1023);
  const bytes = new Uint8Array(16);
  const randA = Math.trunc(baseRand / 2 ** 30);
  const randBHi = baseRand & 2 ** 30 - 1;
  const randBLo = getRandomUint32();
  bytes[0] = currentTimestamp / 2 ** 40;
  bytes[1] = currentTimestamp / 2 ** 32;
  bytes[2] = currentTimestamp / 2 ** 24;
  bytes[3] = currentTimestamp / 2 ** 16;
  bytes[4] = currentTimestamp / 2 ** 8;
  bytes[5] = currentTimestamp;
  bytes[6] = 112 | randA >>> 8;
  bytes[7] = randA;
  bytes[8] = 128 | randBHi >>> 24;
  bytes[9] = randBHi >>> 16;
  bytes[10] = randBHi >>> 8;
  bytes[11] = randBHi;
  bytes[12] = randBLo >>> 24;
  bytes[13] = randBLo >>> 16;
  bytes[14] = randBLo >>> 8;
  bytes[15] = randBLo;
  let text = "";
  for (let i = 0; i < bytes.length; i++) {
    text += UUID_CHARS.charAt(bytes[i] >>> 4);
    text += UUID_CHARS.charAt(bytes[i] & 15);
    if (i === 3 || i === 5 || i === 7 || i === 9) {
      text += "-";
    }
  }
  return text;
}
async function generateKeyPair(extractable, usages, algorithm) {
  return window.crypto.subtle.generateKey(algorithm, extractable, usages);
}
async function exportJwk(key) {
  return window.crypto.subtle.exportKey(KEY_FORMAT_JWK, key);
}
async function sign(key, data, algorithm) {
  return window.crypto.subtle.sign(algorithm, key, data);
}
async function generateEarKey() {
  const key = await generateBaseKey();
  const keyStr = urlEncodeArr(new Uint8Array(key));
  const jwk = {
    alg: "dir",
    kty: "oct",
    k: keyStr
  };
  return base64Encode(JSON.stringify(jwk));
}
async function importEarKey(earJwk) {
  const b64DecodedJwk = base64Decode(earJwk);
  const jwkJson = JSON.parse(b64DecodedJwk);
  const rawKey = jwkJson.k;
  const keyBuffer = base64DecToArr(rawKey);
  return window.crypto.subtle.importKey(RAW, keyBuffer, AES_GCM, false, [
    DECRYPT
  ]);
}
async function decryptEarResponse(earJwk, earJwe) {
  const earJweParts = earJwe.split(".");
  if (earJweParts.length !== 5) {
    throw createBrowserAuthError(failedToDecryptEarResponse, "", "jwe_length");
  }
  const key = await importEarKey(earJwk).catch(() => {
    throw createBrowserAuthError(failedToDecryptEarResponse, "", "import_key");
  });
  try {
    const header = new TextEncoder().encode(earJweParts[0]);
    const iv = base64DecToArr(earJweParts[2]);
    const ciphertext = base64DecToArr(earJweParts[3]);
    const tag = base64DecToArr(earJweParts[4]);
    const tagLengthBits = tag.byteLength * 8;
    const encryptedData = new Uint8Array(ciphertext.length + tag.length);
    encryptedData.set(ciphertext);
    encryptedData.set(tag, ciphertext.length);
    const decryptedData = await window.crypto.subtle.decrypt({
      name: AES_GCM,
      iv,
      tagLength: tagLengthBits,
      additionalData: header
    }, key, encryptedData);
    return new TextDecoder().decode(decryptedData);
  } catch (e) {
    throw createBrowserAuthError(failedToDecryptEarResponse, "", "decrypt");
  }
}
async function generateBaseKey() {
  const key = await window.crypto.subtle.generateKey({
    name: AES_GCM,
    length: 256
  }, true, [ENCRYPT, DECRYPT]);
  return window.crypto.subtle.exportKey(RAW, key);
}
async function generateHKDF(baseKey) {
  return window.crypto.subtle.importKey(RAW, baseKey, HKDF, false, [
    DERIVE_KEY
  ]);
}
async function deriveKey(baseKey, nonce, context) {
  return window.crypto.subtle.deriveKey({
    name: HKDF,
    salt: nonce,
    hash: S256_HASH_ALG,
    info: new TextEncoder().encode(context)
  }, baseKey, { name: AES_GCM, length: 256 }, false, [ENCRYPT, DECRYPT]);
}
async function encrypt(baseKey, rawData, context) {
  const encodedData = new TextEncoder().encode(rawData);
  const nonce = window.crypto.getRandomValues(new Uint8Array(16));
  const derivedKey = await deriveKey(baseKey, nonce, context);
  const encryptedData = await window.crypto.subtle.encrypt({
    name: AES_GCM,
    iv: new Uint8Array(12)
    // New key is derived for every encrypt so we don't need a new nonce
  }, derivedKey, encodedData);
  return {
    data: urlEncodeArr(new Uint8Array(encryptedData)),
    nonce: urlEncodeArr(nonce)
  };
}
async function decrypt(baseKey, nonce, context, encryptedData) {
  const encodedData = base64DecToArr(encryptedData);
  const derivedKey = await deriveKey(baseKey, base64DecToArr(nonce), context);
  const decryptedData = await window.crypto.subtle.decrypt({
    name: AES_GCM,
    iv: new Uint8Array(12)
    // New key is derived for every encrypt so we don't need a new nonce
  }, derivedKey, encodedData);
  return new TextDecoder().decode(decryptedData);
}
async function hashString(plainText) {
  const hashBuffer = await sha256Digest(plainText);
  const hashBytes = new Uint8Array(hashBuffer);
  return urlEncodeArr(hashBytes);
}
var JWK_THUMBPRINT_REQUIRED_MEMBERS = {
  [JSON_WEB_KEY_TYPE_EC]: ["crv", "kty", "x", "y"],
  [JSON_WEB_KEY_TYPE_RSA]: ["e", "kty", "n"]
};
function getJwkThumbprintMembers(publicJwk, correlationId) {
  const kty = publicJwk.kty;
  if (typeof kty !== "string" || kty.length === 0) {
    throw createBrowserAuthError(invalidPublicJwk, correlationId, MISSING_JWK_KTY_SUBERROR);
  }
  const requiredMembers = JWK_THUMBPRINT_REQUIRED_MEMBERS[kty];
  if (!requiredMembers) {
    throw createBrowserAuthError(invalidPublicJwk, correlationId, UNSUPPORTED_JWK_KTY_SUBERROR);
  }
  return requiredMembers.reduce((thumbprintMembers, memberName) => {
    const memberValue = publicJwk[memberName];
    if (typeof memberValue !== "string") {
      throw createBrowserAuthError(invalidPublicJwk, correlationId, MISSING_JWK_MEMBER_SUBERROR);
    }
    if (memberValue.length === 0) {
      throw createBrowserAuthError(invalidPublicJwk, correlationId, EMPTY_JWK_MEMBER_SUBERROR);
    }
    thumbprintMembers[memberName] = memberValue;
    return thumbprintMembers;
  }, {});
}
async function computeJwkThumbprint(publicJwk, correlationId) {
  const thumbprintMembers = getJwkThumbprintMembers(publicJwk, correlationId);
  const thumbprintJson = JSON.stringify(thumbprintMembers, Object.keys(thumbprintMembers).sort());
  return hashString(thumbprintJson);
}

// node_modules/@azure/msal-browser/dist/error/BrowserConfigurationAuthError.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var BrowserConfigurationAuthError = class _BrowserConfigurationAuthError extends AuthError {
  constructor(errorCode, correlationId, errorMessage) {
    super(errorCode, correlationId, errorMessage);
    this.name = "BrowserConfigurationAuthError";
    Object.setPrototypeOf(this, _BrowserConfigurationAuthError.prototype);
  }
};
function createBrowserConfigurationAuthError(errorCode, correlationId) {
  return new BrowserConfigurationAuthError(errorCode, correlationId, getDefaultErrorMessage2(errorCode));
}

// node_modules/@azure/msal-browser/dist/error/BrowserConfigurationAuthErrorCodes.mjs
var BrowserConfigurationAuthErrorCodes_exports = {};
__export(BrowserConfigurationAuthErrorCodes_exports, {
  inMemRedirectUnavailable: () => inMemRedirectUnavailable,
  storageNotSupported: () => storageNotSupported,
  stubbedPublicClientApplicationCalled: () => stubbedPublicClientApplicationCalled
});
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var storageNotSupported = "storage_not_supported";
var stubbedPublicClientApplicationCalled = "stubbed_public_client_application_called";
var inMemRedirectUnavailable = "in_mem_redirect_unavailable";

// node_modules/@azure/msal-browser/dist/utils/BrowserUtils.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function parseAuthResponseFromUrl() {
  const urlHash = window.location.hash;
  const urlQuery = window.location.search;
  let hasResponseInHash = false;
  let hasResponseInQuery = false;
  let payload = "";
  let params = void 0;
  if (urlHash && urlHash.length > 1) {
    const hashContent = urlHash.charAt(0) === "#" ? urlHash.substring(1) : urlHash;
    const hashParams = new URLSearchParams(hashContent);
    if (hashParams.has("state")) {
      hasResponseInHash = true;
      payload = hashContent;
      params = hashParams;
    }
  }
  if (urlQuery && urlQuery.length > 1) {
    const queryContent = urlQuery.charAt(0) === "?" ? urlQuery.substring(1) : urlQuery;
    const queryParams = new URLSearchParams(queryContent);
    if (queryParams.has("state")) {
      hasResponseInQuery = true;
      payload = queryContent;
      params = queryParams;
    }
  }
  if (hasResponseInHash && hasResponseInQuery) {
    const queryContent = urlQuery.charAt(0) === "?" ? urlQuery.substring(1) : urlQuery;
    const hashContent = urlHash.charAt(0) === "#" ? urlHash.substring(1) : urlHash;
    payload = `${queryContent}${hashContent}`;
    params = new URLSearchParams(payload);
  }
  if (!payload || !params) {
    throw createBrowserAuthError(emptyResponse, "");
  }
  const state = params.get("state");
  if (!state) {
    throw createBrowserAuthError(noStateInHash, "");
  }
  const { libraryState } = ProtocolUtils_exports.parseRequestState(base64Decode, state, "");
  const { id, meta } = libraryState;
  if (!id || !meta) {
    throw createBrowserAuthError(unableToParseState, "", "missing_library_state");
  }
  return {
    params,
    payload,
    urlHash,
    urlQuery,
    hasResponseInHash,
    hasResponseInQuery,
    libraryState: {
      id,
      meta
    }
  };
}
function clearHash(contentWindow) {
  contentWindow.location.hash = "";
  if (typeof contentWindow.history.replaceState === "function") {
    contentWindow.history.replaceState(null, "", `${contentWindow.location.origin}${contentWindow.location.pathname}${contentWindow.location.search}`);
  }
}
function clearAuthResponseFromUrl(contentWindow) {
  if (typeof contentWindow.history?.replaceState === "function") {
    contentWindow.history.replaceState(null, "", `${contentWindow.location.origin}${contentWindow.location.pathname}`);
  }
}
function replaceHash(url) {
  const urlParts = url.split("#");
  urlParts.shift();
  window.location.hash = urlParts.length > 0 ? urlParts.join("#") : "";
}
function isInIframe() {
  return window.parent !== window;
}
function isInPopup() {
  if (isInIframe()) {
    return false;
  }
  try {
    const { libraryState } = parseAuthResponseFromUrl();
    const { meta } = libraryState;
    return meta["interactionType"] === InteractionType.Popup;
  } catch (e) {
    return false;
  }
}
var activeBridgeMonitor = null;
function cancelPendingBridgeResponse(logger, correlationId) {
  if (activeBridgeMonitor) {
    logger.verbose("18y01k", correlationId);
    clearTimeout(activeBridgeMonitor.timeoutId);
    activeBridgeMonitor.channel.close();
    activeBridgeMonitor.reject(createBrowserAuthError(interactionInProgressCancelled, ""));
    activeBridgeMonitor = null;
  }
}
async function waitForBridgeResponse(timeoutMs, logger, request, performanceClient, experimentalConfig) {
  return new Promise((resolve, reject) => {
    logger.verbose("1rf6em", request.correlationId);
    const correlationId = request.correlationId;
    performanceClient.addFields({
      redirectBridgeTimeoutMs: timeoutMs,
      lateResponseExperimentEnabled: experimentalConfig?.iframeTimeoutTelemetry || false
    }, correlationId);
    const { libraryState } = ProtocolUtils_exports.parseRequestState(base64Decode, request.state || "", request.correlationId);
    const channel = new BroadcastChannel(libraryState.id);
    let responseString = void 0;
    let timedOut$1 = false;
    let lateTimeoutId;
    let lateMeasurement;
    const timeoutId = window.setTimeout(() => {
      activeBridgeMonitor = null;
      if (experimentalConfig?.iframeTimeoutTelemetry) {
        lateMeasurement = performanceClient.startMeasurement(WaitForBridgeLateResponse, correlationId);
        timedOut$1 = true;
        lateTimeoutId = window.setTimeout(() => {
          lateMeasurement?.end({ success: false });
          clearTimeout(lateTimeoutId);
          channel.close();
        }, 6e4);
      } else {
        channel.close();
      }
      reject(createBrowserAuthError(timedOut, "", "redirect_bridge_timeout"));
    }, timeoutMs);
    activeBridgeMonitor = {
      timeoutId,
      channel,
      reject
    };
    channel.onmessage = (event) => {
      responseString = event.data.payload;
      const messageVersion = event?.data && typeof event.data.v === "number" ? event.data.v : void 0;
      if (timedOut$1) {
        lateMeasurement?.end({
          success: responseString ? true : false
        });
        clearTimeout(lateTimeoutId);
        channel.close();
        return;
      }
      performanceClient.addFields({
        redirectBridgeMessageVersion: messageVersion
      }, correlationId);
      activeBridgeMonitor = null;
      clearTimeout(timeoutId);
      channel.close();
      if (responseString) {
        resolve(responseString);
      } else {
        reject(createBrowserAuthError(redirectBridgeEmptyResponse, correlationId));
      }
    };
  });
}
function getCurrentUri() {
  return typeof window !== "undefined" && window.location ? window.location.href.split("?")[0].split("#")[0] : "";
}
function getHomepage(correlationId) {
  const currentUrl = new UrlString(window.location.href, correlationId || "");
  const urlComponents = currentUrl.getUrlComponents();
  return `${urlComponents.Protocol}//${urlComponents.HostNameAndPort}/`;
}
function blockReloadInHiddenIframes() {
  const isResponseHash = UrlUtils_exports.getDeserializedResponse(window.location.hash);
  if (isResponseHash && isInIframe()) {
    throw createBrowserAuthError(blockIframeReload, "");
  }
}
function blockRedirectInIframe(allowRedirectInIframe) {
  if (isInIframe() && !allowRedirectInIframe) {
    throw createBrowserAuthError(redirectInIframe, "");
  }
}
function blockAcquireTokenInPopups() {
  if (isInPopup()) {
    throw createBrowserAuthError(blockNestedPopups, "");
  }
}
function blockNonBrowserEnvironment() {
  if (typeof window === "undefined") {
    throw createBrowserAuthError(nonBrowserEnvironment, "");
  }
}
function blockAPICallsBeforeInitialize(initialized) {
  if (!initialized) {
    throw createBrowserAuthError(uninitializedPublicClientApplication, "");
  }
}
function preflightCheck(initialized) {
  blockNonBrowserEnvironment();
  blockReloadInHiddenIframes();
  blockAcquireTokenInPopups();
  blockAPICallsBeforeInitialize(initialized);
}
function redirectPreflightCheck(initialized, config) {
  preflightCheck(initialized);
  blockRedirectInIframe(config.system.allowRedirectInIframe);
  if (config.cache.cacheLocation === BrowserCacheLocation.MemoryStorage) {
    throw createBrowserConfigurationAuthError(inMemRedirectUnavailable, "");
  }
}
function preconnect(authority) {
  const link = document.createElement("link");
  link.rel = "preconnect";
  link.href = new URL(authority).origin;
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
  window.setTimeout(() => {
    try {
      document.head.removeChild(link);
    } catch {
    }
  }, 1e4);
}
function createGuid() {
  return createNewGuid();
}
var buildMergedClaims2 = RequestParameterBuilder_exports.buildMergedClaims;

// node_modules/@azure/msal-browser/dist/cache/DatabaseStorage.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var DatabaseStorage = class {
  constructor() {
    this.dbName = DB_NAME;
    this.version = DB_VERSION;
    this.tableName = DB_TABLE_NAME;
    this.dbOpen = false;
  }
  /**
   * Opens IndexedDB instance.
   */
  async open() {
    return new Promise((resolve, reject) => {
      const openDB = window.indexedDB.open(this.dbName, this.version);
      openDB.addEventListener("upgradeneeded", (e) => {
        const event = e;
        event.target.result.createObjectStore(this.tableName);
      });
      openDB.addEventListener("success", (e) => {
        const event = e;
        this.db = event.target.result;
        this.dbOpen = true;
        resolve();
      });
      openDB.addEventListener("error", () => reject(createBrowserAuthError(databaseUnavailable, "")));
    });
  }
  /**
   * Closes the connection to IndexedDB database when all pending transactions
   * complete.
   */
  closeConnection() {
    const db = this.db;
    if (db && this.dbOpen) {
      db.close();
      this.dbOpen = false;
    }
  }
  /**
   * Opens database if it's not already open
   */
  async validateDbIsOpen() {
    if (!this.dbOpen) {
      return this.open();
    }
  }
  /**
   * Retrieves item from IndexedDB instance.
   * @param key
   */
  async getItem(key) {
    await this.validateDbIsOpen();
    return new Promise((resolve, reject) => {
      if (!this.db) {
        return reject(createBrowserAuthError(databaseNotOpen, ""));
      }
      const transaction = this.db.transaction([this.tableName], "readonly");
      const objectStore = transaction.objectStore(this.tableName);
      const dbGet = objectStore.get(key);
      dbGet.addEventListener("success", (e) => {
        const event = e;
        this.closeConnection();
        resolve(event.target.result);
      });
      dbGet.addEventListener("error", (e) => {
        this.closeConnection();
        reject(e);
      });
    });
  }
  /**
   * Adds item to IndexedDB under given key
   * @param key
   * @param payload
   */
  async setItem(key, payload) {
    await this.validateDbIsOpen();
    return new Promise((resolve, reject) => {
      if (!this.db) {
        return reject(createBrowserAuthError(databaseNotOpen, ""));
      }
      const transaction = this.db.transaction([this.tableName], "readwrite");
      const objectStore = transaction.objectStore(this.tableName);
      const dbPut = objectStore.put(payload, key);
      dbPut.addEventListener("success", () => {
        this.closeConnection();
        resolve();
      });
      dbPut.addEventListener("error", (e) => {
        this.closeConnection();
        reject(e);
      });
    });
  }
  /**
   * Removes item from IndexedDB under given key
   * @param key
   */
  async removeItem(key) {
    await this.validateDbIsOpen();
    return new Promise((resolve, reject) => {
      if (!this.db) {
        return reject(createBrowserAuthError(databaseNotOpen, ""));
      }
      const transaction = this.db.transaction([this.tableName], "readwrite");
      const objectStore = transaction.objectStore(this.tableName);
      const dbDelete = objectStore.delete(key);
      dbDelete.addEventListener("success", () => {
        this.closeConnection();
        resolve();
      });
      dbDelete.addEventListener("error", (e) => {
        this.closeConnection();
        reject(e);
      });
    });
  }
  /**
   * Get all the keys from the storage object as an iterable array of strings.
   */
  async getKeys() {
    await this.validateDbIsOpen();
    return new Promise((resolve, reject) => {
      if (!this.db) {
        return reject(createBrowserAuthError(databaseNotOpen, ""));
      }
      const transaction = this.db.transaction([this.tableName], "readonly");
      const objectStore = transaction.objectStore(this.tableName);
      const dbGetKeys = objectStore.getAllKeys();
      dbGetKeys.addEventListener("success", (e) => {
        const event = e;
        this.closeConnection();
        resolve(event.target.result);
      });
      dbGetKeys.addEventListener("error", (e) => {
        this.closeConnection();
        reject(e);
      });
    });
  }
  /**
   *
   * Checks whether there is an object under the search key in the object store
   */
  async containsKey(key) {
    await this.validateDbIsOpen();
    return new Promise((resolve, reject) => {
      if (!this.db) {
        return reject(createBrowserAuthError(databaseNotOpen, ""));
      }
      const transaction = this.db.transaction([this.tableName], "readonly");
      const objectStore = transaction.objectStore(this.tableName);
      const dbContainsKey = objectStore.count(key);
      dbContainsKey.addEventListener("success", (e) => {
        const event = e;
        this.closeConnection();
        resolve(event.target.result === 1);
      });
      dbContainsKey.addEventListener("error", (e) => {
        this.closeConnection();
        reject(e);
      });
    });
  }
  /**
   * Deletes the MSAL database. The database is deleted rather than cleared to make it possible
   * for client applications to downgrade to a previous MSAL version without worrying about forward compatibility issues
   * with IndexedDB database versions.
   */
  async deleteDatabase() {
    if (this.db && this.dbOpen) {
      this.closeConnection();
    }
    return new Promise((resolve, reject) => {
      const deleteDbRequest = window.indexedDB.deleteDatabase(DB_NAME);
      const id = setTimeout(() => reject(false), 200);
      deleteDbRequest.addEventListener("success", () => {
        clearTimeout(id);
        return resolve(true);
      });
      deleteDbRequest.addEventListener("blocked", () => {
        clearTimeout(id);
        return resolve(true);
      });
      deleteDbRequest.addEventListener("error", () => {
        clearTimeout(id);
        return reject(false);
      });
    });
  }
};

// node_modules/@azure/msal-browser/dist/cache/MemoryStorage.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var MemoryStorage = class {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  async initialize() {
  }
  getItem(key) {
    return this.cache.get(key) || null;
  }
  getUserData(key) {
    return this.getItem(key);
  }
  setItem(key, value) {
    this.cache.set(key, value);
  }
  async setUserData(key, value) {
    this.setItem(key, value);
  }
  removeItem(key) {
    this.cache.delete(key);
  }
  getKeys() {
    const cacheKeys = [];
    this.cache.forEach((value, key) => {
      cacheKeys.push(key);
    });
    return cacheKeys;
  }
  containsKey(key) {
    return this.cache.has(key);
  }
  clear() {
    this.cache.clear();
  }
  decryptData() {
    return Promise.resolve(null);
  }
};

// node_modules/@azure/msal-browser/dist/cache/AsyncMemoryStorage.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var AsyncMemoryStorage = class {
  constructor(logger) {
    this.inMemoryCache = new MemoryStorage();
    this.indexedDBCache = new DatabaseStorage();
    this.logger = logger;
  }
  handleDatabaseAccessError(error, correlationId) {
    if (error instanceof BrowserAuthError && error.errorCode === databaseUnavailable) {
      this.logger.error("1wx7zz", correlationId);
    } else {
      throw error;
    }
  }
  /**
   * Get the item matching the given key. Tries in-memory cache first, then in the asynchronous
   * storage object if item isn't found in-memory.
   * @param key
   * @param correlationId
   */
  async getItem(key, correlationId) {
    const item = this.inMemoryCache.getItem(key);
    if (!item) {
      try {
        this.logger.verbose("0naxpl", correlationId);
        return await this.indexedDBCache.getItem(key);
      } catch (e) {
        this.handleDatabaseAccessError(e, correlationId);
      }
    }
    return item;
  }
  /**
   * Sets the item in the in-memory cache and then tries to set it in the asynchronous
   * storage object with the given key.
   * @param key
   * @param value
   * @param correlationId
   */
  async setItem(key, value, correlationId) {
    this.inMemoryCache.setItem(key, value);
    try {
      await this.indexedDBCache.setItem(key, value);
    } catch (e) {
      this.handleDatabaseAccessError(e, correlationId);
    }
  }
  /**
   * Removes the item matching the key from the in-memory cache, then tries to remove it from the asynchronous storage object.
   * @param key
   * @param correlationId
   */
  async removeItem(key, correlationId) {
    this.inMemoryCache.removeItem(key);
    try {
      await this.indexedDBCache.removeItem(key);
    } catch (e) {
      this.handleDatabaseAccessError(e, correlationId);
    }
  }
  /**
   * Get all keys from both in-memory and persistent storage.
   * @param correlationId
   */
  async getKeys(correlationId) {
    const cacheKeys = this.inMemoryCache.getKeys();
    try {
      const persistentCacheKeys = await this.indexedDBCache.getKeys();
      return Array.from(/* @__PURE__ */ new Set([...cacheKeys, ...persistentCacheKeys]));
    } catch (e) {
      this.handleDatabaseAccessError(e, correlationId);
      return cacheKeys;
    }
  }
  /**
   * Returns true or false if the given key is present in the cache.
   * @param key
   * @param correlationId
   */
  async containsKey(key, correlationId) {
    const containsKey = this.inMemoryCache.containsKey(key);
    if (!containsKey) {
      try {
        this.logger.verbose("03zl2j", correlationId);
        return await this.indexedDBCache.containsKey(key);
      } catch (e) {
        this.handleDatabaseAccessError(e, correlationId);
      }
    }
    return containsKey;
  }
  /**
   * Clears in-memory Map
   * @param correlationId
   */
  clearInMemory(correlationId) {
    this.logger.verbose("03r21p", correlationId);
    this.inMemoryCache.clear();
    this.logger.verbose("0uksk1", correlationId);
  }
  /**
   * Tries to delete the IndexedDB database
   * @param correlationId
   * @returns
   */
  async clearPersistent(correlationId) {
    try {
      this.logger.verbose("0rdqut", correlationId);
      const dbDeleted = await this.indexedDBCache.deleteDatabase();
      if (dbDeleted) {
        this.logger.verbose("149ouc", correlationId);
      }
      return dbDeleted;
    } catch (e) {
      this.handleDatabaseAccessError(e, correlationId);
      return false;
    }
  }
};

// node_modules/@azure/msal-browser/dist/crypto/TokenBindingKeyManager.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var TokenBindingKeyManager = class _TokenBindingKeyManager {
  constructor(logger, performanceClient) {
    this.logger = logger;
    this.cache = _TokenBindingKeyManager.getTokenBindingKeyStorage(this.logger);
    this.performanceClient = performanceClient;
  }
  static getTokenBindingKeyStorage(logger) {
    if (!_TokenBindingKeyManager.tokenBindingKeyStorage) {
      _TokenBindingKeyManager.tokenBindingKeyStorage = new AsyncMemoryStorage(logger);
    }
    return _TokenBindingKeyManager.tokenBindingKeyStorage;
  }
  /**
   * Provisions a browser token-binding key and returns its key identifier.
   * @param request - Key provisioning policy.
   */
  async provisionTokenBindingKey(request) {
    const publicKeyThumbMeasurement = this.performanceClient?.startMeasurement(CryptoOptsGetPublicKeyThumbprint, request.correlationId);
    try {
      const activeKeyPair = await this.createTokenBindingKey(request);
      publicKeyThumbMeasurement?.end(__spreadValues({
        success: true
      }, this.getTokenBindingKeyTelemetry(activeKeyPair)));
      return activeKeyPair.keyId;
    } catch (e) {
      publicKeyThumbMeasurement?.end({
        success: false,
        tokenBindingKeyType: request.tokenBindingKeyType,
        tokenBindingKeyAlgorithm: request.tokenBindingKeyAlgorithm
      });
      throw e;
    }
  }
  /**
   * Removes a browser token-binding key by identifier.
   * @param kid - Token-binding key identifier.
   * @param correlationId - Request correlation identifier.
   */
  async removeTokenBindingKey(kid, correlationId) {
    await this.cache.removeItem(kid, correlationId);
    const keyFound = await this.cache.containsKey(kid, correlationId);
    if (keyFound) {
      throw createClientAuthError(ClientAuthErrorCodes_exports.bindingKeyNotRemoved, correlationId);
    }
  }
  /**
   * Clears browser token-binding keys from memory and persistent storage.
   * @param correlationId - Request correlation identifier.
   */
  async clearKeystore(correlationId) {
    this.cache.clearInMemory(correlationId);
    try {
      await this.cache.clearPersistent(correlationId);
      return true;
    } catch (e) {
      if (e instanceof Error) {
        this.logger.error(`1owpn8 ${e.message}`, correlationId);
      } else {
        this.logger.error("0yrmwo", correlationId);
      }
      return false;
    }
  }
  /**
   * Gets a token-binding public key as a JWK by identifier.
   * @param keyId - Token-binding key identifier.
   * @param correlationId - Request correlation identifier.
   */
  async getTokenBindingPublicKeyJwk(keyId, correlationId) {
    const cachedKeyPair = await this.getTokenBindingKeyPair(keyId, correlationId);
    return exportJwk(cachedKeyPair.publicKey);
  }
  async createTokenBindingKey(request) {
    const keyGenAlgorithm = this.getTokenBindingKeyGenAlgorithmOptions(request.tokenBindingKeyAlgorithm, request.correlationId);
    const generatedKeyPair = await this.generateKeyPairAndThumbprint(_TokenBindingKeyManager.TOKEN_BINDING_KEY_USAGES, keyGenAlgorithm, request.correlationId);
    await this.cache.setItem(generatedKeyPair.keyId, __spreadProps(__spreadValues({}, generatedKeyPair), {
      tokenBindingKeyType: request.tokenBindingKeyType,
      tokenBindingKeyAlgorithm: request.tokenBindingKeyAlgorithm
    }), request.correlationId);
    return __spreadProps(__spreadValues({}, generatedKeyPair), {
      tokenBindingKeyType: request.tokenBindingKeyType,
      tokenBindingKeyAlgorithm: request.tokenBindingKeyAlgorithm
    });
  }
  async generateKeyPairAndThumbprint(usages, keyGenAlgorithm, correlationId) {
    const keyPair = await generateKeyPair(false, usages, keyGenAlgorithm);
    const publicJwk = await exportJwk(keyPair.publicKey);
    const keyId = await computeJwkThumbprint(publicJwk, correlationId);
    return {
      publicKey: keyPair.publicKey,
      privateKey: keyPair.privateKey,
      keyId
    };
  }
  /** @internal */
  async getTokenBindingKeyPair(keyId, correlationId) {
    const cachedKeyPair = await this.cache.getItem(keyId, correlationId);
    if (!cachedKeyPair) {
      throw createBrowserAuthError(cryptoKeyNotFound, correlationId);
    }
    return cachedKeyPair;
  }
  /** @internal */
  getTokenBindingKeyTelemetry(cachedKeyPair, fallbackAlgorithm) {
    return __spreadValues(__spreadValues({}, cachedKeyPair.tokenBindingKeyType && {
      tokenBindingKeyType: cachedKeyPair.tokenBindingKeyType
    }), cachedKeyPair.tokenBindingKeyAlgorithm || fallbackAlgorithm ? {
      tokenBindingKeyAlgorithm: cachedKeyPair.tokenBindingKeyAlgorithm || fallbackAlgorithm
    } : {});
  }
  getTokenBindingKeyGenAlgorithmOptions(tokenBindingKeyAlgorithm, correlationId) {
    if (tokenBindingKeyAlgorithm === JsonWebTokenAlgorithms.RS256) {
      return RSA_KEYGEN_ALGORITHM_OPTIONS;
    }
    if (tokenBindingKeyAlgorithm === JsonWebTokenAlgorithms.ES256) {
      return ECDSA_P256_KEYGEN_ALGORITHM_OPTIONS;
    }
    throw createBrowserAuthError(unsupportedTokenBindingAlgorithm, correlationId);
  }
};
TokenBindingKeyManager.TOKEN_BINDING_KEY_USAGES = [
  "sign",
  "verify"
];

// node_modules/@azure/msal-browser/dist/crypto/CryptoOps.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var CryptoOps = class {
  constructor(logger, performanceClient, skipValidateSubtleCrypto) {
    this.logger = logger;
    validateCryptoAvailable(skipValidateSubtleCrypto ?? false);
    this.performanceClient = performanceClient;
    this.tokenBindingKeyManager = new TokenBindingKeyManager(this.logger, this.performanceClient);
  }
  /**
   * Creates a new random GUID - used to populate state and nonce.
   * @returns string (GUID)
   */
  createNewGuid() {
    return createNewGuid();
  }
  /**
   * Encodes input string to base64.
   * @param input
   */
  base64Encode(input) {
    return base64Encode(input);
  }
  /**
   * Decodes input string from base64.
   * @param input
   */
  base64Decode(input) {
    return base64Decode(input);
  }
  /**
   * Encodes input string to base64 URL safe string.
   * @param input
   */
  base64UrlEncode(input) {
    return urlEncode(input);
  }
  /**
   * Stringifies and base64Url encodes input public key
   * @param inputKid
   * @returns Base64Url encoded public key
   */
  encodeKid(inputKid) {
    return this.base64UrlEncode(JSON.stringify({ kid: inputKid }));
  }
  /**
   * Removes cryptographic keypair from key store matching the keyId passed in
   * @param kid
   * @param correlationId
   */
  async removeTokenBindingKey(kid, correlationId) {
    await this.tokenBindingKeyManager.removeTokenBindingKey(kid, correlationId);
  }
  /**
   * Removes all cryptographic keys from IndexedDB storage
   * @param correlationId
   */
  async clearKeystore(correlationId) {
    return this.tokenBindingKeyManager.clearKeystore(correlationId);
  }
  /** @internal */
  async signTokenBindingJwt(header, payload, kid, correlationId) {
    let telemetry = {};
    const signTokenBindingJwtMeasurement = this.performanceClient?.startMeasurement(CryptoOptsSignJwt, correlationId);
    try {
      const cachedKeyPair = await this.tokenBindingKeyManager.getTokenBindingKeyPair(kid, correlationId);
      await this.validateTokenBindingJwtHeaderKey(header, kid, correlationId);
      telemetry = this.tokenBindingKeyManager.getTokenBindingKeyTelemetry(cachedKeyPair, header.alg);
      const signingAlgorithm = this.getTokenBindingKeySigningAlgorithm(cachedKeyPair, header.alg, correlationId);
      const tokenString = `${urlEncode(JSON.stringify(header))}.${urlEncode(JSON.stringify(payload))}`;
      const encodedSignature = await this.signInput(cachedKeyPair, tokenString, signingAlgorithm);
      signTokenBindingJwtMeasurement?.end(__spreadValues({
        success: true
      }, telemetry));
      return `${tokenString}.${encodedSignature}`;
    } catch (e) {
      signTokenBindingJwtMeasurement?.end(__spreadValues({
        success: false
      }, telemetry));
      throw e;
    }
  }
  /**
   * Returns the SHA-256 hash of an input string
   * @param plainText
   */
  async hashString(plainText) {
    return hashString(plainText);
  }
  async signInput(cachedKeyPair, signingInput, algorithm) {
    const encoder = new TextEncoder();
    const signatureBuffer = await sign(cachedKeyPair.privateKey, encoder.encode(signingInput), algorithm);
    return urlEncodeArr(new Uint8Array(signatureBuffer));
  }
  getTokenBindingKeySigningAlgorithm(cachedKeyPair, requestedAlgorithm, correlationId) {
    const keyAlgorithm = cachedKeyPair.privateKey.algorithm;
    if (requestedAlgorithm === JsonWebTokenAlgorithms.RS256 && keyAlgorithm.name === RSA_SIGN_ALGORITHM_OPTIONS.name) {
      return RSA_SIGN_ALGORITHM_OPTIONS;
    }
    if (requestedAlgorithm === JsonWebTokenAlgorithms.ES256 && keyAlgorithm.name === ECDSA_SHA256_SIGN_ALGORITHM_OPTIONS.name && keyAlgorithm.namedCurve === ECDSA_P256_KEYGEN_ALGORITHM_OPTIONS.namedCurve) {
      return ECDSA_SHA256_SIGN_ALGORITHM_OPTIONS;
    }
    if (requestedAlgorithm === JsonWebTokenAlgorithms.RS256 || requestedAlgorithm === JsonWebTokenAlgorithms.ES256) {
      throw createBrowserAuthError(unsupportedTokenBindingAlgorithm, correlationId, tokenBindingKeyAlgorithmMismatch);
    }
    throw createBrowserAuthError(unsupportedTokenBindingAlgorithm, correlationId);
  }
  async validateTokenBindingJwtHeaderKey(header, kid, correlationId) {
    if (!header.jwk) {
      return;
    }
    const headerKeyId = await computeJwkThumbprint(header.jwk, correlationId);
    if (headerKeyId !== kid) {
      throw createBrowserAuthError(invalidPublicJwk, correlationId, tokenBindingKeyJwkThumbprintMismatch);
    }
  }
};

// node_modules/@azure/msal-browser/dist/telemetry/BrowserRootPerformanceEvents.mjs
var BrowserRootPerformanceEvents_exports = {};
__export(BrowserRootPerformanceEvents_exports, {
  AcquireTokenByCode: () => AcquireTokenByCode,
  AcquireTokenPopup: () => AcquireTokenPopup,
  AcquireTokenPreRedirect: () => AcquireTokenPreRedirect,
  AcquireTokenRedirect: () => AcquireTokenRedirect,
  AcquireTokenSilent: () => AcquireTokenSilent,
  InitializeClientApplication: () => InitializeClientApplication,
  LoadExternalTokens: () => LoadExternalTokens,
  LocalStorageUpdated: () => LocalStorageUpdated,
  SsoCapable: () => SsoCapable,
  SsoSilent: () => SsoSilent,
  WaitForBridgeLateResponse: () => WaitForBridgeLateResponse2
});
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var AcquireTokenSilent = "acquireTokenSilent";
var AcquireTokenByCode = "acquireTokenByCode";
var AcquireTokenPopup = "acquireTokenPopup";
var AcquireTokenPreRedirect = "acquireTokenPreRedirect";
var AcquireTokenRedirect = "acquireTokenRedirect";
var SsoSilent = "ssoSilent";
var InitializeClientApplication = "initializeClientApplication";
var LocalStorageUpdated = "localStorageUpdated";
var LoadExternalTokens = "loadExternalTokens";
var SsoCapable = "ssoCapable";
var WaitForBridgeLateResponse2 = "waitForBridgeLateResponse";

// node_modules/@azure/msal-browser/dist/cache/CacheKeys.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var PREFIX = "msal";
var BROWSER_PREFIX = "browser";
var CACHE_KEY_SEPARATOR2 = "|";
var CREDENTIAL_SCHEMA_VERSION = 3;
var ACCOUNT_SCHEMA_VERSION = 3;
var LOG_LEVEL_CACHE_KEY = `${PREFIX}.${BROWSER_PREFIX}.log.level`;
var LOG_PII_CACHE_KEY = `${PREFIX}.${BROWSER_PREFIX}.log.pii`;
var BROWSER_PERF_ENABLED_KEY = `${PREFIX}.${BROWSER_PREFIX}.performance.enabled`;
var VERSION_CACHE_KEY = `${PREFIX}.version`;
var ACCOUNT_KEYS = "account.keys";
var TOKEN_KEYS = "token.keys";
var SSO_CAPABLE = `${PREFIX}.${BROWSER_PREFIX}.sso.capable`;
function getAccountKeysCacheKey(schema = ACCOUNT_SCHEMA_VERSION) {
  if (schema < 1) {
    return `${PREFIX}.${ACCOUNT_KEYS}`;
  }
  return `${PREFIX}.${schema}.${ACCOUNT_KEYS}`;
}
function getTokenKeysCacheKey(clientId, schema = CREDENTIAL_SCHEMA_VERSION) {
  if (schema < 1) {
    return `${PREFIX}.${TOKEN_KEYS}.${clientId}`;
  }
  return `${PREFIX}.${schema}.${TOKEN_KEYS}.${clientId}`;
}

// node_modules/@azure/msal-browser/dist/cache/CookieStorage.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3;
var SameSiteOptions = {
  Lax: "Lax",
  None: "None"
};
var CookieStorage = class {
  initialize() {
    return Promise.resolve();
  }
  getItem(key) {
    const name3 = encodeURIComponent(key);
    const cookieList = document.cookie.split(";");
    for (let i = 0; i < cookieList.length; i++) {
      const cookie = cookieList[i].trim();
      const eqIndex = cookie.indexOf("=");
      const rawKey = eqIndex === -1 ? cookie : cookie.substring(0, eqIndex);
      if (rawKey === name3) {
        const rawValue = eqIndex === -1 ? "" : cookie.substring(eqIndex + 1);
        try {
          return decodeURIComponent(rawValue);
        } catch {
          return rawValue;
        }
      }
    }
    return "";
  }
  getUserData() {
    throw createClientAuthError(ClientAuthErrorCodes_exports.methodNotImplemented, "");
  }
  setItem(key, value, cookieLifeDays, secure = true, sameSite = SameSiteOptions.Lax) {
    let cookieStr = `${encodeURIComponent(key)}=${encodeURIComponent(value)};path=/;SameSite=${sameSite};`;
    if (cookieLifeDays) {
      const expireTime = getCookieExpirationTime(cookieLifeDays);
      cookieStr += `expires=${expireTime};`;
    }
    if (secure || sameSite === SameSiteOptions.None) {
      cookieStr += "Secure;";
    }
    document.cookie = cookieStr;
  }
  async setUserData(_key, _value, correlationId) {
    return Promise.reject(createClientAuthError(ClientAuthErrorCodes_exports.methodNotImplemented, correlationId));
  }
  removeItem(key) {
    this.setItem(key, "", -1);
  }
  getKeys() {
    const cookieList = document.cookie.split(";");
    const keys = [];
    cookieList.forEach((cookie) => {
      const trimmed = cookie.trim();
      const eqIndex = trimmed.indexOf("=");
      const rawKey = eqIndex === -1 ? trimmed : trimmed.substring(0, eqIndex);
      try {
        keys.push(decodeURIComponent(rawKey));
      } catch {
      }
    });
    return keys;
  }
  containsKey(key) {
    return this.getKeys().includes(key);
  }
  decryptData() {
    return Promise.resolve(null);
  }
};
function getCookieExpirationTime(cookieLifeDays) {
  const today = /* @__PURE__ */ new Date();
  const expr = new Date(today.getTime() + cookieLifeDays * COOKIE_LIFE_MULTIPLIER);
  return expr.toUTCString();
}

// node_modules/@azure/msal-browser/dist/cache/CacheHelpers.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function getAccountKeys(storage, schemaVersion) {
  const accountKeys = storage.getItem(getAccountKeysCacheKey(schemaVersion));
  if (accountKeys) {
    return JSON.parse(accountKeys);
  }
  return [];
}
function getTokenKeys(clientId, storage, schemaVersion) {
  const item = storage.getItem(getTokenKeysCacheKey(clientId, schemaVersion));
  if (item) {
    const tokenKeys = JSON.parse(item);
    if (tokenKeys && tokenKeys.hasOwnProperty("idToken") && tokenKeys.hasOwnProperty("accessToken") && tokenKeys.hasOwnProperty("refreshToken")) {
      return tokenKeys;
    }
  }
  return {
    idToken: [],
    accessToken: [],
    refreshToken: []
  };
}

// node_modules/@azure/msal-browser/dist/cache/EncryptedData.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function isEncrypted(data) {
  return data.hasOwnProperty("id") && data.hasOwnProperty("nonce") && data.hasOwnProperty("data");
}

// node_modules/@azure/msal-browser/dist/cache/LocalStorage.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var ENCRYPTION_KEY = "msal.cache.encryption";
var BROADCAST_CHANNEL_NAME = "msal.broadcast.cache";
var LocalStorage = class {
  constructor(clientId, logger, performanceClient) {
    if (!window.localStorage) {
      throw createBrowserConfigurationAuthError(storageNotSupported, "");
    }
    this.memoryStorage = new MemoryStorage();
    this.initialized = false;
    this.clientId = clientId;
    this.logger = logger;
    this.performanceClient = performanceClient;
    this.broadcast = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
  }
  async initialize(correlationId) {
    const cookies = new CookieStorage();
    const cookieString = cookies.getItem(ENCRYPTION_KEY);
    let parsedCookie = { key: "", id: "" };
    if (cookieString) {
      try {
        parsedCookie = JSON.parse(cookieString);
      } catch (e) {
      }
    }
    if (parsedCookie.key && parsedCookie.id) {
      const baseKey = invoke(base64DecToArr, Base64Decode, this.logger, this.performanceClient, correlationId)(parsedCookie.key);
      this.encryptionCookie = {
        id: parsedCookie.id,
        key: await invokeAsync(generateHKDF, GenerateHKDF, this.logger, this.performanceClient, correlationId)(baseKey)
      };
    } else {
      const id = createNewGuid();
      const baseKey = await invokeAsync(generateBaseKey, GenerateBaseKey, this.logger, this.performanceClient, correlationId)();
      const keyStr = invoke(urlEncodeArr, UrlEncodeArr, this.logger, this.performanceClient, correlationId)(new Uint8Array(baseKey));
      this.encryptionCookie = {
        id,
        key: await invokeAsync(generateHKDF, GenerateHKDF, this.logger, this.performanceClient, correlationId)(baseKey)
      };
      const cookieData = {
        id,
        key: keyStr
      };
      cookies.setItem(
        ENCRYPTION_KEY,
        JSON.stringify(cookieData),
        0,
        // Expiration - 0 means cookie will be cleared at the end of the browser session
        true,
        // Secure flag
        SameSiteOptions.None
        // SameSite must be None to support iframed apps
      );
    }
    await invokeAsync(this.importExistingCache.bind(this), ImportExistingCache, this.logger, this.performanceClient, correlationId)(correlationId);
    this.broadcast.addEventListener("message", (event) => {
      this.updateCache(event, correlationId);
    });
    this.initialized = true;
  }
  getItem(key) {
    return window.localStorage.getItem(key);
  }
  getUserData(key) {
    if (!this.initialized) {
      throw createBrowserAuthError(uninitializedPublicClientApplication, "");
    }
    return this.memoryStorage.getItem(key);
  }
  async decryptData(key, data, correlationId) {
    if (!this.initialized || !this.encryptionCookie) {
      throw createBrowserAuthError(uninitializedPublicClientApplication, "");
    }
    if (data.id !== this.encryptionCookie.id) {
      this.performanceClient.incrementFields({ encryptedCacheExpiredCount: 1 }, correlationId);
      return null;
    }
    const decryptedData = await invokeAsync(decrypt, Decrypt, this.logger, this.performanceClient, correlationId)(this.encryptionCookie.key, data.nonce, this.getContext(key), data.data);
    if (!decryptedData) {
      return null;
    }
    try {
      return __spreadProps(__spreadValues({}, JSON.parse(decryptedData)), {
        lastUpdatedAt: data.lastUpdatedAt
      });
    } catch (e) {
      this.performanceClient.incrementFields({ encryptedCacheCorruptionCount: 1 }, correlationId);
      return null;
    }
  }
  setItem(key, value) {
    window.localStorage.setItem(key, value);
  }
  async setUserData(key, value, correlationId, timestamp, kmsi) {
    if (!this.initialized || !this.encryptionCookie) {
      throw createBrowserAuthError(uninitializedPublicClientApplication, "");
    }
    if (kmsi) {
      this.setItem(key, value);
    } else {
      const { data, nonce } = await invokeAsync(encrypt, Encrypt, this.logger, this.performanceClient, correlationId)(this.encryptionCookie.key, value, this.getContext(key));
      const encryptedData = {
        id: this.encryptionCookie.id,
        nonce,
        data,
        lastUpdatedAt: timestamp
      };
      this.setItem(key, JSON.stringify(encryptedData));
    }
    this.memoryStorage.setItem(key, value);
    this.broadcast.postMessage({
      key,
      value,
      context: this.getContext(key)
    });
  }
  removeItem(key) {
    if (this.memoryStorage.containsKey(key)) {
      this.memoryStorage.removeItem(key);
      this.broadcast.postMessage({
        key,
        value: null,
        context: this.getContext(key)
      });
    }
    window.localStorage.removeItem(key);
  }
  getKeys() {
    return Object.keys(window.localStorage);
  }
  containsKey(key) {
    return window.localStorage.hasOwnProperty(key);
  }
  /**
   * Removes all known MSAL keys from the cache
   */
  clear() {
    this.memoryStorage.clear();
    const accountKeys = getAccountKeys(this);
    accountKeys.forEach((key) => this.removeItem(key));
    const tokenKeys = getTokenKeys(this.clientId, this);
    tokenKeys.idToken.forEach((key) => this.removeItem(key));
    tokenKeys.accessToken.forEach((key) => this.removeItem(key));
    tokenKeys.refreshToken.forEach((key) => this.removeItem(key));
    this.getKeys().forEach((cacheKey) => {
      if (cacheKey.startsWith(PREFIX) || cacheKey.indexOf(this.clientId) !== -1) {
        this.removeItem(cacheKey);
      }
    });
  }
  /**
   * Helper to decrypt all known MSAL keys in localStorage and save them to inMemory storage
   * @returns
   */
  async importExistingCache(correlationId) {
    if (!this.encryptionCookie) {
      return;
    }
    let accountKeys = getAccountKeys(this);
    accountKeys = await this.importArray(accountKeys, correlationId);
    if (accountKeys.length) {
      this.setItem(getAccountKeysCacheKey(), JSON.stringify(accountKeys));
    } else {
      this.removeItem(getAccountKeysCacheKey());
    }
    const tokenKeys = getTokenKeys(this.clientId, this);
    tokenKeys.idToken = await this.importArray(tokenKeys.idToken, correlationId);
    tokenKeys.accessToken = await this.importArray(tokenKeys.accessToken, correlationId);
    tokenKeys.refreshToken = await this.importArray(tokenKeys.refreshToken, correlationId);
    if (tokenKeys.idToken.length || tokenKeys.accessToken.length || tokenKeys.refreshToken.length) {
      this.setItem(getTokenKeysCacheKey(this.clientId), JSON.stringify(tokenKeys));
    } else {
      this.removeItem(getTokenKeysCacheKey(this.clientId));
    }
  }
  /**
   * Helper to decrypt and save cache entries
   * @param key
   * @returns
   */
  async getItemFromEncryptedCache(key, correlationId) {
    if (!this.encryptionCookie) {
      return null;
    }
    const rawCache = this.getItem(key);
    if (!rawCache) {
      return null;
    }
    let encObj;
    try {
      encObj = JSON.parse(rawCache);
    } catch (e) {
      return null;
    }
    if (!isEncrypted(encObj)) {
      this.performanceClient.incrementFields({ unencryptedCacheCount: 1 }, correlationId);
      return rawCache;
    }
    if (encObj.id !== this.encryptionCookie.id) {
      this.performanceClient.incrementFields({ encryptedCacheExpiredCount: 1 }, correlationId);
      return null;
    }
    this.performanceClient.incrementFields({ encryptedCacheCount: 1 }, correlationId);
    return invokeAsync(decrypt, Decrypt, this.logger, this.performanceClient, correlationId)(this.encryptionCookie.key, encObj.nonce, this.getContext(key), encObj.data);
  }
  /**
   * Helper to decrypt and save an array of cache keys
   * @param arr
   * @returns Array of keys successfully imported
   */
  async importArray(arr, correlationId) {
    const importedArr = [];
    const promiseArr = [];
    arr.forEach((key) => {
      const promise = this.getItemFromEncryptedCache(key, correlationId).then((value) => {
        if (value) {
          this.memoryStorage.setItem(key, value);
          importedArr.push(key);
        } else {
          this.removeItem(key);
        }
      });
      promiseArr.push(promise);
    });
    await Promise.all(promiseArr);
    return importedArr;
  }
  /**
   * Gets encryption context for a given cache entry. This is clientId for app specific entries, empty string for shared entries
   * @param key
   * @returns
   */
  getContext(key) {
    let context = "";
    if (key.includes(this.clientId)) {
      context = this.clientId;
    }
    return context;
  }
  updateCache(event, correlationId) {
    this.logger.trace("17cxcm", correlationId);
    const perfMeasurement = this.performanceClient.startMeasurement(LocalStorageUpdated);
    perfMeasurement.add({ isBackground: true });
    const { key, value, context } = event.data;
    if (!key) {
      this.logger.error("0e10qr", correlationId);
      perfMeasurement.end({ success: false, errorCode: "noKey" });
      return;
    }
    if (context && context !== this.clientId) {
      this.logger.trace(`04rtdy ${context}`, correlationId);
      perfMeasurement.discard();
      return;
    }
    if (!value) {
      this.memoryStorage.removeItem(key);
      this.logger.verbose("04ypih", correlationId);
    } else {
      this.memoryStorage.setItem(key, value);
      this.logger.verbose("1vzsgt", correlationId);
    }
    perfMeasurement.end({ success: true });
  }
};

// node_modules/@azure/msal-browser/dist/cache/SessionStorage.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var SessionStorage = class {
  constructor() {
    if (!window.sessionStorage) {
      throw createBrowserConfigurationAuthError(storageNotSupported, "");
    }
  }
  async initialize() {
  }
  getItem(key) {
    return window.sessionStorage.getItem(key);
  }
  getUserData(key) {
    return this.getItem(key);
  }
  setItem(key, value) {
    window.sessionStorage.setItem(key, value);
  }
  async setUserData(key, value) {
    this.setItem(key, value);
  }
  removeItem(key) {
    window.sessionStorage.removeItem(key);
  }
  getKeys() {
    return Object.keys(window.sessionStorage);
  }
  containsKey(key) {
    return window.sessionStorage.hasOwnProperty(key);
  }
  decryptData() {
    return Promise.resolve(null);
  }
};

// node_modules/@azure/msal-browser/dist/event/EventType.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var EventType = {
  INITIALIZE_START: "msal:initializeStart",
  INITIALIZE_END: "msal:initializeEnd",
  ACTIVE_ACCOUNT_CHANGED: "msal:activeAccountChanged",
  LOGIN_SUCCESS: "msal:loginSuccess",
  ACQUIRE_TOKEN_START: "msal:acquireTokenStart",
  BROKERED_REQUEST_START: "msal:brokeredRequestStart",
  ACQUIRE_TOKEN_SUCCESS: "msal:acquireTokenSuccess",
  BROKERED_REQUEST_SUCCESS: "msal:brokeredRequestSuccess",
  ACQUIRE_TOKEN_FAILURE: "msal:acquireTokenFailure",
  BROKERED_REQUEST_FAILURE: "msal:brokeredRequestFailure",
  ACQUIRE_TOKEN_NETWORK_START: "msal:acquireTokenFromNetworkStart",
  HANDLE_REDIRECT_START: "msal:handleRedirectStart",
  HANDLE_REDIRECT_END: "msal:handleRedirectEnd",
  POPUP_OPENED: "msal:popupOpened",
  LOGOUT_START: "msal:logoutStart",
  LOGOUT_SUCCESS: "msal:logoutSuccess",
  LOGOUT_FAILURE: "msal:logoutFailure",
  LOGOUT_END: "msal:logoutEnd",
  RESTORE_FROM_BFCACHE: "msal:restoreFromBFCache",
  BROKER_CONNECTION_ESTABLISHED: "msal:brokerConnectionEstablished"
};

// node_modules/@azure/msal-browser/dist/packageMetadata.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var name2 = "@azure/msal-browser";
var version2 = "5.23.0";

// node_modules/@azure/msal-browser/dist/utils/Helpers.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function removeElementFromArray(array, element) {
  const index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
}

// node_modules/@azure/msal-browser/dist/cache/BrowserCacheManager.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var MigrationRemovalReason = {
  Invalid: "invalid",
  TtlExpired: "ttlExpired",
  DecryptFailed: "decryptFailed",
  Expired: "expired"
};
var BrowserCacheManager = class extends CacheManager {
  constructor(clientId, cacheConfig, cryptoImpl, logger, performanceClient, eventHandler, staticAuthorityOptions, tokenBindingKeyManager = DEFAULT_TOKEN_BINDING_KEY_MANAGER) {
    super(clientId, cryptoImpl, logger, performanceClient, staticAuthorityOptions, tokenBindingKeyManager);
    this.cacheConfig = cacheConfig;
    this.logger = logger;
    this.internalStorage = new MemoryStorage();
    this.browserStorage = getStorageImplementation(clientId, cacheConfig.cacheLocation, logger, performanceClient);
    this.temporaryCacheStorage = getStorageImplementation(clientId, BrowserCacheLocation.SessionStorage, logger, performanceClient);
    this.cookieStorage = new CookieStorage();
    this.eventHandler = eventHandler;
  }
  async initialize(correlationId) {
    this.performanceClient.addFields({
      cacheLocation: this.cacheConfig.cacheLocation,
      cacheRetentionDays: this.cacheConfig.cacheRetentionDays
    }, correlationId);
    await this.browserStorage.initialize(correlationId);
    await this.migrateExistingCache(correlationId);
    this.trackVersionChanges(correlationId);
  }
  /**
   * Migrates any existing cache data from previous versions of MSAL.js into the current cache structure.
   */
  async migrateExistingCache(correlationId) {
    let accountKeys = getAccountKeys(this.browserStorage);
    let tokenKeys = getTokenKeys(this.clientId, this.browserStorage);
    this.performanceClient.addFields({
      preMigrateAcntCount: accountKeys.length,
      preMigrateATCount: tokenKeys.accessToken.length,
      preMigrateITCount: tokenKeys.idToken.length,
      preMigrateRTCount: tokenKeys.refreshToken.length
    }, correlationId);
    for (let i = 0; i < ACCOUNT_SCHEMA_VERSION; i++) {
      const credentialSchema = i;
      await this.removeStaleAccounts(i, credentialSchema, correlationId);
    }
    for (let i = 0; i < CREDENTIAL_SCHEMA_VERSION; i++) {
      const accountSchema = i;
      await this.migrateIdTokens(i, accountSchema, correlationId);
    }
    const kmsiMap = this.getKMSIValues();
    for (let i = 0; i < CREDENTIAL_SCHEMA_VERSION; i++) {
      await this.migrateAccessTokens(i, kmsiMap, correlationId);
      await this.migrateRefreshTokens(i, kmsiMap, correlationId);
    }
    accountKeys = getAccountKeys(this.browserStorage);
    tokenKeys = getTokenKeys(this.clientId, this.browserStorage);
    this.performanceClient.addFields({
      postMigrateAcntCount: accountKeys.length,
      postMigrateATCount: tokenKeys.accessToken.length,
      postMigrateITCount: tokenKeys.idToken.length,
      postMigrateRTCount: tokenKeys.refreshToken.length
    }, correlationId);
  }
  /**
   * Parses entry, adds lastUpdatedAt if it doesn't exist, removes entry if expired or invalid
   * @param key
   * @param correlationId
   * @returns
   */
  async updateOldEntry(key, correlationId) {
    const rawValue = this.browserStorage.getItem(key);
    const parsedValue = this.validateAndParseJson(rawValue || "");
    if (!parsedValue) {
      this.browserStorage.removeItem(key);
      return {
        entry: null,
        removalReason: MigrationRemovalReason.Invalid
      };
    }
    if (!parsedValue.lastUpdatedAt) {
      parsedValue.lastUpdatedAt = Date.now().toString();
      this.setItem(key, JSON.stringify(parsedValue), correlationId);
    } else if (TimeUtils_exports.isCacheExpired(parsedValue.lastUpdatedAt, this.cacheConfig.cacheRetentionDays)) {
      this.browserStorage.removeItem(key);
      return {
        entry: null,
        removalReason: MigrationRemovalReason.TtlExpired
      };
    }
    const wasEncrypted = isEncrypted(parsedValue);
    const decryptedData = wasEncrypted ? await this.browserStorage.decryptData(key, parsedValue, correlationId) : parsedValue;
    if (!decryptedData) {
      this.browserStorage.removeItem(key);
      return {
        entry: null,
        removalReason: wasEncrypted ? MigrationRemovalReason.DecryptFailed : MigrationRemovalReason.Invalid
      };
    }
    if (!CacheHelpers_exports.isCredentialEntity(decryptedData)) {
      this.browserStorage.removeItem(key);
      return {
        entry: null,
        removalReason: MigrationRemovalReason.Invalid
      };
    }
    if ((CacheHelpers_exports.isAccessTokenEntity(decryptedData) || CacheHelpers_exports.isRefreshTokenEntity(decryptedData)) && decryptedData.expiresOn && TimeUtils_exports.isTokenExpired(decryptedData.expiresOn, Constants_exports.DEFAULT_TOKEN_RENEWAL_OFFSET_SEC)) {
      this.browserStorage.removeItem(key);
      return {
        entry: null,
        removalReason: MigrationRemovalReason.Expired
      };
    }
    return { entry: decryptedData };
  }
  /**
   * Remove accounts from the cache for older schema versions if they have not been updated in the last cacheRetentionDays
   * @param accountSchema
   * @param credentialSchema
   * @param correlationId
   * @returns
   */
  async removeStaleAccounts(accountSchema, credentialSchema, correlationId) {
    const accountKeysToCheck = getAccountKeys(this.browserStorage, accountSchema);
    if (accountKeysToCheck.length === 0) {
      return;
    }
    for (const accountKey of [...accountKeysToCheck]) {
      this.performanceClient.incrementFields({ oldAcntCount: 1 }, correlationId);
      const rawValue = this.browserStorage.getItem(accountKey);
      const parsedValue = this.validateAndParseJson(rawValue || "");
      if (!parsedValue) {
        this.browserStorage.removeItem(accountKey);
        this.performanceClient.incrementFields({ invalidAcntCount: 1 }, correlationId);
        removeElementFromArray(accountKeysToCheck, accountKey);
        continue;
      }
      if (!parsedValue.lastUpdatedAt) {
        parsedValue.lastUpdatedAt = Date.now().toString();
        this.setItem(accountKey, JSON.stringify(parsedValue), correlationId);
        continue;
      } else if (TimeUtils_exports.isCacheExpired(parsedValue.lastUpdatedAt, this.cacheConfig.cacheRetentionDays)) {
        await this.removeAccountOldSchema(accountKey, parsedValue, credentialSchema, correlationId);
        this.performanceClient.incrementFields({ ttlExpiredAcntCount: 1 }, correlationId);
        removeElementFromArray(accountKeysToCheck, accountKey);
      } else if (isEncrypted(parsedValue)) {
        const decrypted = await this.browserStorage.decryptData(accountKey, parsedValue, correlationId);
        if (!decrypted) {
          this.browserStorage.removeItem(accountKey);
          this.performanceClient.incrementFields({
            decryptFailedAcntCount: 1
          }, correlationId);
          removeElementFromArray(accountKeysToCheck, accountKey);
        }
      }
    }
    this.setAccountKeys(accountKeysToCheck, correlationId, accountSchema);
  }
  /**
   * Remove the given account and all associated tokens from the cache
   * @param accountKey
   * @param rawObject
   * @param credentialSchema
   * @param correlationId
   */
  async removeAccountOldSchema(accountKey, rawObject, credentialSchema, correlationId) {
    const decryptedData = isEncrypted(rawObject) ? await this.browserStorage.decryptData(accountKey, rawObject, correlationId) : rawObject;
    const homeAccountId = decryptedData?.homeAccountId;
    if (homeAccountId) {
      const tokenKeys = this.getTokenKeys(credentialSchema);
      [...tokenKeys.idToken].filter((key) => key.includes(homeAccountId)).forEach((key) => {
        this.browserStorage.removeItem(key);
        removeElementFromArray(tokenKeys.idToken, key);
      });
      [...tokenKeys.accessToken].filter((key) => key.includes(homeAccountId)).forEach((key) => {
        this.browserStorage.removeItem(key);
        removeElementFromArray(tokenKeys.accessToken, key);
      });
      [...tokenKeys.refreshToken].filter((key) => key.includes(homeAccountId)).forEach((key) => {
        this.browserStorage.removeItem(key);
        removeElementFromArray(tokenKeys.refreshToken, key);
      });
      this.setTokenKeys(tokenKeys, correlationId, credentialSchema);
    }
    this.browserStorage.removeItem(accountKey);
  }
  /**
   * Gets key value pair mapping homeAccountId to KMSI value
   * @returns
   */
  getKMSIValues() {
    const kmsiMap = {};
    const tokenKeys = this.getTokenKeys().idToken;
    for (const key of tokenKeys) {
      const rawValue = this.browserStorage.getUserData(key);
      if (rawValue) {
        const idToken = JSON.parse(rawValue);
        const claims = AuthToken_exports.extractTokenClaims(idToken.secret, base64Decode, "");
        if (claims) {
          kmsiMap[idToken.homeAccountId] = AuthToken_exports.isKmsi(claims);
        }
      }
    }
    return kmsiMap;
  }
  /**
   * Migrates id tokens from the old schema to the new schema, also migrates associated account object if it doesn't already exist in the new schema
   * @param credentialSchema
   * @param accountSchema
   * @param correlationId
   * @returns
   */
  async migrateIdTokens(credentialSchema, accountSchema, correlationId) {
    const credentialKeysToMigrate = getTokenKeys(this.clientId, this.browserStorage, credentialSchema);
    if (credentialKeysToMigrate.idToken.length === 0) {
      return;
    }
    const currentCredentialKeys = getTokenKeys(this.clientId, this.browserStorage, CREDENTIAL_SCHEMA_VERSION);
    const currentAccountKeys = getAccountKeys(this.browserStorage);
    const previousAccountKeys = getAccountKeys(this.browserStorage, accountSchema);
    for (const idTokenKey of [...credentialKeysToMigrate.idToken]) {
      this.performanceClient.incrementFields({ oldITCount: 1 }, correlationId);
      const result = await this.updateOldEntry(idTokenKey, correlationId);
      const oldSchemaData = result.entry;
      if (!oldSchemaData) {
        switch (result.removalReason) {
          case MigrationRemovalReason.TtlExpired:
            this.performanceClient.incrementFields({ ttlExpiredITCount: 1 }, correlationId);
            break;
          case MigrationRemovalReason.DecryptFailed:
            this.performanceClient.incrementFields({ decryptFailedITCount: 1 }, correlationId);
            break;
          case MigrationRemovalReason.Invalid:
            this.performanceClient.incrementFields({ invalidITCount: 1 }, correlationId);
            break;
        }
        removeElementFromArray(credentialKeysToMigrate.idToken, idTokenKey);
        continue;
      }
      const currentAccountKey = currentAccountKeys.find((key) => key.includes(oldSchemaData.homeAccountId));
      const previousAccountKey = previousAccountKeys.find((key) => key.includes(oldSchemaData.homeAccountId));
      let account = null;
      if (currentAccountKey) {
        account = this.getAccount(currentAccountKey, correlationId);
      } else if (previousAccountKey) {
        const rawValue = this.browserStorage.getItem(previousAccountKey);
        const parsedValue = this.validateAndParseJson(rawValue || "");
        account = parsedValue && isEncrypted(parsedValue) ? await this.browserStorage.decryptData(previousAccountKey, parsedValue, correlationId) : parsedValue;
      }
      if (!account) {
        this.performanceClient.incrementFields({ skipITMigrateCount: 1 }, correlationId);
        continue;
      }
      const claims = AuthToken_exports.extractTokenClaims(oldSchemaData.secret, base64Decode, correlationId);
      const newIdTokenKey = this.generateCredentialKey(oldSchemaData);
      const currentIdToken = this.getIdTokenCredential(newIdTokenKey, correlationId);
      const oldTokenHasSignInState = Object.keys(claims).includes("signin_state");
      const currentTokenHasSignInState = currentIdToken && Object.keys(AuthToken_exports.extractTokenClaims(currentIdToken.secret, base64Decode, correlationId) || {}).includes("signin_state");
      if (!currentIdToken || oldSchemaData.lastUpdatedAt > currentIdToken.lastUpdatedAt && (oldTokenHasSignInState || !currentTokenHasSignInState)) {
        const tenantProfiles = account.tenantProfiles || [];
        const tenantId = getTenantIdFromIdTokenClaims(claims) || account.realm;
        if (tenantId && !tenantProfiles.find((tenantProfile) => {
          return tenantProfile.tenantId === tenantId;
        })) {
          const newTenantProfile = buildTenantProfile(account.homeAccountId, account.localAccountId, tenantId, account.nativeAccountId, claims);
          tenantProfiles.push(newTenantProfile);
        }
        account.tenantProfiles = tenantProfiles;
        const newAccountKey = this.generateAccountKey(AccountEntityUtils_exports.getAccountInfo(account));
        const kmsi = AuthToken_exports.isKmsi(claims);
        await this.setUserData(newAccountKey, JSON.stringify(account), correlationId, account.lastUpdatedAt, kmsi);
        if (!currentAccountKeys.includes(newAccountKey)) {
          currentAccountKeys.push(newAccountKey);
        }
        await this.setUserData(newIdTokenKey, JSON.stringify(oldSchemaData), correlationId, oldSchemaData.lastUpdatedAt, kmsi);
        this.performanceClient.incrementFields({ migratedITCount: 1 }, correlationId);
        if (!currentCredentialKeys.idToken.includes(newIdTokenKey)) {
          currentCredentialKeys.idToken.push(newIdTokenKey);
        }
      }
    }
    this.setTokenKeys(credentialKeysToMigrate, correlationId, credentialSchema);
    this.setTokenKeys(currentCredentialKeys, correlationId);
    this.setAccountKeys(currentAccountKeys, correlationId);
  }
  /**
   * Migrates access tokens from old cache schema to current schema
   * @param credentialSchema
   * @param kmsiMap
   * @param correlationId
   * @returns
   */
  async migrateAccessTokens(credentialSchema, kmsiMap, correlationId) {
    const credentialKeysToMigrate = getTokenKeys(this.clientId, this.browserStorage, credentialSchema);
    if (credentialKeysToMigrate.accessToken.length === 0) {
      return;
    }
    const currentCredentialKeys = getTokenKeys(this.clientId, this.browserStorage, CREDENTIAL_SCHEMA_VERSION);
    for (const accessTokenKey of [...credentialKeysToMigrate.accessToken]) {
      this.performanceClient.incrementFields({ oldATCount: 1 }, correlationId);
      const result = await this.updateOldEntry(accessTokenKey, correlationId);
      const oldSchemaData = result.entry;
      if (!oldSchemaData) {
        switch (result.removalReason) {
          case MigrationRemovalReason.TtlExpired:
            this.performanceClient.incrementFields({ ttlExpiredATCount: 1 }, correlationId);
            break;
          case MigrationRemovalReason.DecryptFailed:
            this.performanceClient.incrementFields({ decryptFailedATCount: 1 }, correlationId);
            break;
          case MigrationRemovalReason.Expired:
            this.performanceClient.incrementFields({ expiredATCount: 1 }, correlationId);
            break;
          case MigrationRemovalReason.Invalid:
            this.performanceClient.incrementFields({ invalidATCount: 1 }, correlationId);
            break;
        }
        removeElementFromArray(credentialKeysToMigrate.accessToken, accessTokenKey);
        continue;
      }
      if (!(oldSchemaData.homeAccountId in kmsiMap)) {
        this.performanceClient.incrementFields({ skipATMigrateCount: 1 }, correlationId);
        continue;
      }
      const newKey = this.generateCredentialKey(oldSchemaData);
      const kmsi = kmsiMap[oldSchemaData.homeAccountId];
      if (!currentCredentialKeys.accessToken.includes(newKey)) {
        await this.setUserData(newKey, JSON.stringify(oldSchemaData), correlationId, oldSchemaData.lastUpdatedAt, kmsi);
        this.performanceClient.incrementFields({ migratedATCount: 1 }, correlationId);
        currentCredentialKeys.accessToken.push(newKey);
      } else {
        const currentToken = this.getAccessTokenCredential(newKey, correlationId);
        if (!currentToken || oldSchemaData.lastUpdatedAt > currentToken.lastUpdatedAt) {
          await this.setUserData(newKey, JSON.stringify(oldSchemaData), correlationId, oldSchemaData.lastUpdatedAt, kmsi);
          this.performanceClient.incrementFields({ migratedATCount: 1 }, correlationId);
        }
      }
    }
    this.setTokenKeys(credentialKeysToMigrate, correlationId, credentialSchema);
    this.setTokenKeys(currentCredentialKeys, correlationId);
  }
  /**
   * Migrates refresh tokens from old cache schema to current schema
   * @param credentialSchema
   * @param kmsiMap
   * @param correlationId
   * @returns
   */
  async migrateRefreshTokens(credentialSchema, kmsiMap, correlationId) {
    const credentialKeysToMigrate = getTokenKeys(this.clientId, this.browserStorage, credentialSchema);
    if (credentialKeysToMigrate.refreshToken.length === 0) {
      return;
    }
    const currentCredentialKeys = getTokenKeys(this.clientId, this.browserStorage, CREDENTIAL_SCHEMA_VERSION);
    for (const refreshTokenKey of [
      ...credentialKeysToMigrate.refreshToken
    ]) {
      this.performanceClient.incrementFields({ oldRTCount: 1 }, correlationId);
      const result = await this.updateOldEntry(refreshTokenKey, correlationId);
      const oldSchemaData = result.entry;
      if (!oldSchemaData) {
        switch (result.removalReason) {
          case MigrationRemovalReason.TtlExpired:
            this.performanceClient.incrementFields({ ttlExpiredRTCount: 1 }, correlationId);
            break;
          case MigrationRemovalReason.DecryptFailed:
            this.performanceClient.incrementFields({ decryptFailedRTCount: 1 }, correlationId);
            break;
          case MigrationRemovalReason.Expired:
            this.performanceClient.incrementFields({ expiredRTCount: 1 }, correlationId);
            break;
          case MigrationRemovalReason.Invalid:
            this.performanceClient.incrementFields({ invalidRTCount: 1 }, correlationId);
            break;
        }
        removeElementFromArray(credentialKeysToMigrate.refreshToken, refreshTokenKey);
        continue;
      }
      if (!(oldSchemaData.homeAccountId in kmsiMap)) {
        this.performanceClient.incrementFields({ skipRTMigrateCount: 1 }, correlationId);
        continue;
      }
      const newKey = this.generateCredentialKey(oldSchemaData);
      const kmsi = kmsiMap[oldSchemaData.homeAccountId];
      if (!currentCredentialKeys.refreshToken.includes(newKey)) {
        await this.setUserData(newKey, JSON.stringify(oldSchemaData), correlationId, oldSchemaData.lastUpdatedAt, kmsi);
        this.performanceClient.incrementFields({ migratedRTCount: 1 }, correlationId);
        currentCredentialKeys.refreshToken.push(newKey);
      } else {
        const currentToken = this.getRefreshTokenCredential(newKey, correlationId);
        if (!currentToken || oldSchemaData.lastUpdatedAt > currentToken.lastUpdatedAt) {
          await this.setUserData(newKey, JSON.stringify(oldSchemaData), correlationId, oldSchemaData.lastUpdatedAt, kmsi);
          this.performanceClient.incrementFields({ migratedRTCount: 1 }, correlationId);
        }
      }
    }
    this.setTokenKeys(credentialKeysToMigrate, correlationId, credentialSchema);
    this.setTokenKeys(currentCredentialKeys, correlationId);
  }
  /**
   * Tracks upgrades and downgrades for telemetry and debugging purposes
   */
  trackVersionChanges(correlationId) {
    const previousVersion = this.browserStorage.getItem(VERSION_CACHE_KEY);
    if (previousVersion) {
      this.logger.info(`1wuc87 ${previousVersion}`, correlationId);
      this.performanceClient.addGlobalFields({
        previousLibraryVersion: previousVersion
      });
    }
    if (previousVersion !== version2) {
      this.setItem(VERSION_CACHE_KEY, version2, correlationId);
    }
  }
  /**
   * Parses passed value as JSON object, JSON.parse() will throw an error.
   * @param input
   */
  validateAndParseJson(jsonValue) {
    if (!jsonValue) {
      return null;
    }
    try {
      const parsedJson = JSON.parse(jsonValue);
      return parsedJson && typeof parsedJson === "object" ? parsedJson : null;
    } catch (error) {
      return null;
    }
  }
  /**
   * Helper to setItem in browser storage, with cleanup in case of quota errors
   * @param key
   * @param value
   */
  setItem(key, value, correlationId) {
    const tokenKeysCount = new Array(CREDENTIAL_SCHEMA_VERSION + 1).fill(0);
    const accessTokenKeys = [];
    const maxRetries = 20;
    for (let i = 0; i <= maxRetries; i++) {
      try {
        this.browserStorage.setItem(key, value);
        if (i > 0) {
          for (let schemaVersion = 0; schemaVersion <= CREDENTIAL_SCHEMA_VERSION; schemaVersion++) {
            const startIndex = tokenKeysCount.slice(0, schemaVersion).reduce((sum, count) => sum + count, 0);
            if (startIndex >= i) {
              break;
            }
            const endIndex = i > startIndex + tokenKeysCount[schemaVersion] ? startIndex + tokenKeysCount[schemaVersion] : i;
            if (i > startIndex && tokenKeysCount[schemaVersion] > 0) {
              this.removeAccessTokenKeys(accessTokenKeys.slice(startIndex, endIndex), correlationId, schemaVersion);
            }
          }
        }
        break;
      } catch (e) {
        const cacheError = createCacheError(e);
        if (cacheError.errorCode === CacheErrorCodes_exports.cacheQuotaExceeded && i < maxRetries) {
          if (!accessTokenKeys.length) {
            for (let i2 = 0; i2 <= CREDENTIAL_SCHEMA_VERSION; i2++) {
              if (key === getTokenKeysCacheKey(this.clientId, i2)) {
                const tokenKeys = JSON.parse(value).accessToken;
                accessTokenKeys.push(...tokenKeys);
                tokenKeysCount[i2] = tokenKeys.length;
              } else {
                const tokenKeys = this.getTokenKeys(i2).accessToken;
                accessTokenKeys.push(...tokenKeys);
                tokenKeysCount[i2] = tokenKeys.length;
              }
            }
          }
          if (accessTokenKeys.length <= i) {
            throw cacheError;
          }
          this.removeAccessToken(
            accessTokenKeys[i],
            correlationId,
            false
            // Don't save token keys yet, do it at the end
          );
        } else {
          throw cacheError;
        }
      }
    }
  }
  /**
   * Helper to setUserData in browser storage, with cleanup in case of quota errors
   * @param key
   * @param value
   * @param correlationId
   */
  async setUserData(key, value, correlationId, timestamp, kmsi) {
    const tokenKeysCount = new Array(CREDENTIAL_SCHEMA_VERSION + 1).fill(0);
    const accessTokenKeys = [];
    const maxRetries = 20;
    for (let i = 0; i <= maxRetries; i++) {
      try {
        await invokeAsync(this.browserStorage.setUserData.bind(this.browserStorage), PerformanceEvents_exports.SetUserData, this.logger, this.performanceClient, correlationId)(key, value, correlationId, timestamp, kmsi);
        if (i > 0) {
          for (let schemaVersion = 0; schemaVersion <= CREDENTIAL_SCHEMA_VERSION; schemaVersion++) {
            const startIndex = tokenKeysCount.slice(0, schemaVersion).reduce((sum, count) => sum + count, 0);
            if (startIndex >= i) {
              break;
            }
            const endIndex = i > startIndex + tokenKeysCount[schemaVersion] ? startIndex + tokenKeysCount[schemaVersion] : i;
            if (i > startIndex && tokenKeysCount[schemaVersion] > 0) {
              this.removeAccessTokenKeys(accessTokenKeys.slice(startIndex, endIndex), correlationId, schemaVersion);
            }
          }
        }
        break;
      } catch (e) {
        const cacheError = createCacheError(e);
        if (cacheError.errorCode === CacheErrorCodes_exports.cacheQuotaExceeded && i < maxRetries) {
          if (!accessTokenKeys.length) {
            for (let i2 = 0; i2 <= CREDENTIAL_SCHEMA_VERSION; i2++) {
              const tokenKeys = this.getTokenKeys(i2).accessToken;
              accessTokenKeys.push(...tokenKeys);
              tokenKeysCount[i2] = tokenKeys.length;
            }
          }
          if (accessTokenKeys.length <= i) {
            throw cacheError;
          }
          this.removeAccessToken(
            accessTokenKeys[i],
            correlationId,
            false
            // Don't save token keys yet, do it at the end
          );
        } else {
          throw cacheError;
        }
      }
    }
  }
  /**
   * Reads account from cache, deserializes it into an account entity and returns it.
   * If account is not found from the key, returns null and removes key from map.
   * @param accountKey
   * @returns
   */
  getAccount(accountKey, correlationId) {
    this.logger.trace("1lfvm6", correlationId);
    const serializedAccount = this.browserStorage.getUserData(accountKey);
    if (!serializedAccount) {
      this.removeAccountKeyFromMap(accountKey, correlationId);
      return null;
    }
    const parsedAccount = this.validateAndParseJson(serializedAccount);
    if (!parsedAccount || !AccountEntityUtils_exports.isAccountEntity(parsedAccount)) {
      return null;
    }
    const account = CacheManager.toObject({}, parsedAccount);
    this.performanceClient.addFields({
      accountCachedBy: apiIdToName(account.cachedByApiId)
    }, correlationId);
    return account;
  }
  /**
   * set account entity in the platform cache
   * @param account
   */
  async setAccount(account, correlationId, kmsi, apiId) {
    this.logger.trace("1bz3wr", correlationId);
    const key = this.generateAccountKey(AccountEntityUtils_exports.getAccountInfo(account));
    const timestamp = Date.now().toString();
    account.lastUpdatedAt = timestamp;
    account.cachedByApiId = apiId;
    await this.setUserData(key, JSON.stringify(account), correlationId, timestamp, kmsi);
    this.addAccountKeyToMap(key, correlationId);
    this.performanceClient.addFields({ kmsi }, correlationId);
  }
  setAccountKeys(accountKeys, correlationId, schemaVersion = ACCOUNT_SCHEMA_VERSION) {
    if (accountKeys.length === 0) {
      this.removeItem(getAccountKeysCacheKey(schemaVersion));
    } else {
      this.setItem(getAccountKeysCacheKey(schemaVersion), JSON.stringify(accountKeys), correlationId);
    }
  }
  /**
   * Returns the array of account keys currently cached
   * @returns
   */
  getAccountKeys() {
    return getAccountKeys(this.browserStorage);
  }
  /**
   * Add a new account to the key map
   * @param key
   */
  addAccountKeyToMap(key, correlationId) {
    this.logger.trace("0rb85k", correlationId);
    this.logger.tracePii(`1l9bdo ${key}`, correlationId);
    const accountKeys = this.getAccountKeys();
    if (accountKeys.indexOf(key) === -1) {
      accountKeys.push(key);
      this.setItem(getAccountKeysCacheKey(), JSON.stringify(accountKeys), correlationId);
      this.logger.verbose("0xia39", correlationId);
      return true;
    } else {
      this.logger.verbose("0161kk", correlationId);
      return false;
    }
  }
  /**
   * Remove an account from the key map
   * @param key
   */
  removeAccountKeyFromMap(key, correlationId) {
    this.logger.trace("1jpigu", correlationId);
    this.logger.tracePii(`1xzspl ${key}`, correlationId);
    const accountKeys = this.getAccountKeys();
    const removalIndex = accountKeys.indexOf(key);
    if (removalIndex > -1) {
      accountKeys.splice(removalIndex, 1);
      this.setAccountKeys(accountKeys, correlationId);
    } else {
      this.logger.trace("1dytu2", correlationId);
    }
  }
  /**
   * Extends inherited removeAccount function to include removal of the account key from the map
   * @param key
   */
  removeAccount(account, correlationId) {
    const activeAccount = this.getActiveAccount(correlationId);
    if (activeAccount?.homeAccountId === account.homeAccountId && activeAccount?.environment === account.environment) {
      this.setActiveAccount(null, correlationId);
    }
    super.removeAccount(account, correlationId);
    this.removeAccountKeyFromMap(this.generateAccountKey(account), correlationId);
    this.browserStorage.getKeys().forEach((key) => {
      if (key.includes(account.homeAccountId) && key.includes(account.environment)) {
        this.browserStorage.removeItem(key);
      }
    });
  }
  /**
   * Removes given idToken from the cache and from the key map
   * @param key
   */
  removeIdToken(key, correlationId) {
    super.removeIdToken(key, correlationId);
    const tokenKeys = this.getTokenKeys();
    const idRemoval = tokenKeys.idToken.indexOf(key);
    if (idRemoval > -1) {
      this.logger.info("05udv9", correlationId);
      tokenKeys.idToken.splice(idRemoval, 1);
      this.setTokenKeys(tokenKeys, correlationId);
    }
  }
  /**
   * Removes given accessToken from the cache and from the key map
   * @param key
   */
  removeAccessToken(key, correlationId, updateTokenKeys = true) {
    super.removeAccessToken(key, correlationId);
    updateTokenKeys && this.removeAccessTokenKeys([key], correlationId);
  }
  /**
   * Remove access token key from the key map
   * @param key
   * @param correlationId
   * @param tokenKeys
   */
  removeAccessTokenKeys(keys, correlationId, schemaVersion = CREDENTIAL_SCHEMA_VERSION) {
    this.logger.trace("17o18n", correlationId);
    const tokenKeys = this.getTokenKeys(schemaVersion);
    let keysRemoved = 0;
    keys.forEach((key) => {
      const accessRemoval = tokenKeys.accessToken.indexOf(key);
      if (accessRemoval > -1) {
        tokenKeys.accessToken.splice(accessRemoval, 1);
        keysRemoved++;
      }
    });
    if (keysRemoved > 0) {
      this.logger.info(`15i5d5 ${keysRemoved}`, correlationId);
      this.setTokenKeys(tokenKeys, correlationId, schemaVersion);
      return;
    }
  }
  /**
   * Removes given refreshToken from the cache and from the key map
   * @param key
   */
  removeRefreshToken(key, correlationId) {
    super.removeRefreshToken(key, correlationId);
    const tokenKeys = this.getTokenKeys();
    const refreshRemoval = tokenKeys.refreshToken.indexOf(key);
    if (refreshRemoval > -1) {
      this.logger.info("1f4fq3", correlationId);
      tokenKeys.refreshToken.splice(refreshRemoval, 1);
      this.setTokenKeys(tokenKeys, correlationId);
    }
  }
  /**
   * Gets the keys for the cached tokens associated with this clientId
   * @returns
   */
  getTokenKeys(schemaVersion = CREDENTIAL_SCHEMA_VERSION) {
    return getTokenKeys(this.clientId, this.browserStorage, schemaVersion);
  }
  /**
   * Sets the token keys in the cache
   * @param tokenKeys
   * @param correlationId
   * @returns
   */
  setTokenKeys(tokenKeys, correlationId, schemaVersion = CREDENTIAL_SCHEMA_VERSION) {
    if (tokenKeys.idToken.length === 0 && tokenKeys.accessToken.length === 0 && tokenKeys.refreshToken.length === 0) {
      this.removeItem(getTokenKeysCacheKey(this.clientId, schemaVersion));
      return;
    } else {
      this.setItem(getTokenKeysCacheKey(this.clientId, schemaVersion), JSON.stringify(tokenKeys), correlationId);
    }
  }
  /**
   * generates idToken entity from a string
   * @param idTokenKey
   */
  getIdTokenCredential(idTokenKey, correlationId) {
    const value = this.browserStorage.getUserData(idTokenKey);
    if (!value) {
      this.logger.trace("1jukz6", correlationId);
      this.removeIdToken(idTokenKey, correlationId);
      return null;
    }
    const parsedIdToken = this.validateAndParseJson(value);
    if (!parsedIdToken || !CacheHelpers_exports.isIdTokenEntity(parsedIdToken)) {
      this.logger.trace("1jukz6", correlationId);
      return null;
    }
    this.logger.trace("01ju66", correlationId);
    return parsedIdToken;
  }
  /**
   * set IdToken credential to the platform cache
   * @param idToken
   */
  async setIdTokenCredential(idToken, correlationId, kmsi) {
    this.logger.trace("13hjll", correlationId);
    const idTokenKey = this.generateCredentialKey(idToken);
    const timestamp = Date.now().toString();
    idToken.lastUpdatedAt = timestamp;
    await this.setUserData(idTokenKey, JSON.stringify(idToken), correlationId, timestamp, kmsi);
    const tokenKeys = this.getTokenKeys();
    if (tokenKeys.idToken.indexOf(idTokenKey) === -1) {
      this.logger.info("07jy92", correlationId);
      tokenKeys.idToken.push(idTokenKey);
      this.setTokenKeys(tokenKeys, correlationId);
    }
  }
  /**
   * generates accessToken entity from a string
   * @param key
   */
  getAccessTokenCredential(accessTokenKey, correlationId) {
    const value = this.browserStorage.getUserData(accessTokenKey);
    if (!value) {
      this.logger.trace("0bqvx8", correlationId);
      this.removeAccessTokenKeys([accessTokenKey], correlationId);
      return null;
    }
    const parsedAccessToken = this.validateAndParseJson(value);
    if (!parsedAccessToken || !CacheHelpers_exports.isAccessTokenEntity(parsedAccessToken)) {
      this.logger.trace("0bqvx8", correlationId);
      return null;
    }
    this.logger.trace("1o81rl", correlationId);
    return parsedAccessToken;
  }
  /**
   * Set accessToken credential to the platform cache
   * @param accessToken - the access token entity to cache
   */
  async setAccessTokenCredential(accessToken, correlationId, kmsi, additionalCacheKeyHash) {
    this.logger.trace("1pondb", correlationId);
    const accessTokenKey = this.generateCredentialKey(accessToken, additionalCacheKeyHash);
    const timestamp = Date.now().toString();
    accessToken.lastUpdatedAt = timestamp;
    await this.setUserData(accessTokenKey, JSON.stringify(accessToken), correlationId, timestamp, kmsi);
    const tokenKeys = this.getTokenKeys();
    const index = tokenKeys.accessToken.indexOf(accessTokenKey);
    if (index !== -1) {
      tokenKeys.accessToken.splice(index, 1);
    }
    this.logger.trace(`1onhey ${index === -1 ? "added to" : "updated in"}`, correlationId);
    tokenKeys.accessToken.push(accessTokenKey);
    this.setTokenKeys(tokenKeys, correlationId);
  }
  /**
   * generates refreshToken entity from a string
   * @param refreshTokenKey
   */
  getRefreshTokenCredential(refreshTokenKey, correlationId) {
    const value = this.browserStorage.getUserData(refreshTokenKey);
    if (!value) {
      this.logger.trace("0jlizt", correlationId);
      this.removeRefreshToken(refreshTokenKey, correlationId);
      return null;
    }
    const parsedRefreshToken = this.validateAndParseJson(value);
    if (!parsedRefreshToken || !CacheHelpers_exports.isRefreshTokenEntity(parsedRefreshToken)) {
      this.logger.trace("0jlizt", correlationId);
      return null;
    }
    this.logger.trace("0nokxi", correlationId);
    return parsedRefreshToken;
  }
  /**
   * set refreshToken credential to the platform cache
   * @param refreshToken
   */
  async setRefreshTokenCredential(refreshToken, correlationId, kmsi) {
    this.logger.trace("0tcg8d", correlationId);
    const refreshTokenKey = this.generateCredentialKey(refreshToken);
    const timestamp = Date.now().toString();
    refreshToken.lastUpdatedAt = timestamp;
    await this.setUserData(refreshTokenKey, JSON.stringify(refreshToken), correlationId, timestamp, kmsi);
    const tokenKeys = this.getTokenKeys();
    if (tokenKeys.refreshToken.indexOf(refreshTokenKey) === -1) {
      this.logger.info("0eckjs", correlationId);
      tokenKeys.refreshToken.push(refreshTokenKey);
      this.setTokenKeys(tokenKeys, correlationId);
    }
  }
  /**
   * fetch appMetadata entity from the platform cache
   * @param appMetadataKey
   * @param correlationId
   */
  getAppMetadata(appMetadataKey, correlationId) {
    const value = this.browserStorage.getItem(appMetadataKey);
    if (!value) {
      this.logger.trace("1q101h", correlationId);
      return null;
    }
    const parsedMetadata = this.validateAndParseJson(value);
    if (!parsedMetadata || !CacheHelpers_exports.isAppMetadataEntity(appMetadataKey, parsedMetadata)) {
      this.logger.trace("1q101h", correlationId);
      return null;
    }
    this.logger.trace("19pvg2", correlationId);
    return parsedMetadata;
  }
  /**
   * set appMetadata entity to the platform cache
   * @param appMetadata
   * @param correlationId
   */
  setAppMetadata(appMetadata, correlationId) {
    this.logger.trace("0cyma6", correlationId);
    const appMetadataKey = CacheHelpers_exports.generateAppMetadataKey(appMetadata);
    this.setItem(appMetadataKey, JSON.stringify(appMetadata), correlationId);
  }
  /**
   * fetch server telemetry entity from the platform cache
   * @param serverTelemetryKey
   * @param correlationId
   */
  getServerTelemetry(serverTelemetryKey, correlationId) {
    const value = this.browserStorage.getItem(serverTelemetryKey);
    if (!value) {
      this.logger.trace("0jk19c", correlationId);
      return null;
    }
    const parsedEntity = this.validateAndParseJson(value);
    if (!parsedEntity || !CacheHelpers_exports.isServerTelemetryEntity(serverTelemetryKey, parsedEntity)) {
      this.logger.trace("0jk19c", correlationId);
      return null;
    }
    this.logger.trace("12jguk", correlationId);
    return parsedEntity;
  }
  /**
   * set server telemetry entity to the platform cache
   * @param serverTelemetryKey
   * @param serverTelemetry
   */
  setServerTelemetry(serverTelemetryKey, serverTelemetry, correlationId) {
    this.logger.trace("1poh61", correlationId);
    this.setItem(serverTelemetryKey, JSON.stringify(serverTelemetry), correlationId);
  }
  /**
   *
   */
  getAuthorityMetadata(key, correlationId) {
    const value = this.internalStorage.getItem(key);
    if (!value) {
      this.logger.trace("1r39oe", correlationId);
      return null;
    }
    const parsedMetadata = this.validateAndParseJson(value);
    if (parsedMetadata && CacheHelpers_exports.isAuthorityMetadataEntity(key, parsedMetadata)) {
      this.logger.trace("1ohvk3", correlationId);
      return parsedMetadata;
    }
    return null;
  }
  /**
   *
   */
  getAuthorityMetadataKeys() {
    const allKeys = this.internalStorage.getKeys();
    return allKeys.filter((key) => {
      return this.isAuthorityMetadata(key);
    });
  }
  /**
   * Sets wrapper metadata in memory
   * @param wrapperSKU
   * @param wrapperVersion
   */
  setWrapperMetadata(wrapperSKU, wrapperVersion) {
    this.internalStorage.setItem(InMemoryCacheKeys.WRAPPER_SKU, wrapperSKU);
    this.internalStorage.setItem(InMemoryCacheKeys.WRAPPER_VER, wrapperVersion);
  }
  /**
   * Returns wrapper metadata from in-memory storage
   */
  getWrapperMetadata() {
    const sku = this.internalStorage.getItem(InMemoryCacheKeys.WRAPPER_SKU) || "";
    const version3 = this.internalStorage.getItem(InMemoryCacheKeys.WRAPPER_VER) || "";
    return [sku, version3];
  }
  /**
   *
   * @param key
   * @param entity
   * @param correlationId
   */
  setAuthorityMetadata(key, entity, correlationId) {
    this.logger.trace("07w8n2", correlationId);
    this.internalStorage.setItem(key, JSON.stringify(entity));
  }
  /**
   * Gets the active account
   */
  getActiveAccount(correlationId) {
    const activeAccountKeyFilters = this.generateCacheKey(Constants_exports.PersistentCacheKeys.ACTIVE_ACCOUNT_FILTERS);
    const activeAccountValueFilters = this.browserStorage.getItem(activeAccountKeyFilters);
    if (!activeAccountValueFilters) {
      this.logger.trace("08gw0e", correlationId);
      return null;
    }
    const activeAccountValueObj = this.validateAndParseJson(activeAccountValueFilters);
    if (activeAccountValueObj) {
      this.logger.trace("1t3ch7", correlationId);
      return this.getAccountInfoFilteredBy({
        homeAccountId: activeAccountValueObj.homeAccountId,
        localAccountId: activeAccountValueObj.localAccountId,
        tenantId: activeAccountValueObj.tenantId
      }, correlationId);
    }
    this.logger.trace("0me1up", correlationId);
    return null;
  }
  /**
   * Sets the active account's localAccountId in cache
   * @param account
   */
  setActiveAccount(account, correlationId) {
    const activeAccountKey = this.generateCacheKey(Constants_exports.PersistentCacheKeys.ACTIVE_ACCOUNT_FILTERS);
    if (account) {
      this.logger.verbose("0rsj80", correlationId);
      const activeAccountValue = {
        homeAccountId: account.homeAccountId,
        localAccountId: account.localAccountId,
        tenantId: account.tenantId
      };
      this.setItem(activeAccountKey, JSON.stringify(activeAccountValue), correlationId);
    } else {
      this.logger.verbose("1bp5z5", correlationId);
      this.browserStorage.removeItem(activeAccountKey);
    }
    this.eventHandler.emitEvent(EventType.ACTIVE_ACCOUNT_CHANGED, correlationId);
  }
  /**
   * fetch throttling entity from the platform cache
   * @param throttlingCacheKey
   * @param correlationId
   */
  getThrottlingCache(throttlingCacheKey, correlationId) {
    const value = this.browserStorage.getItem(throttlingCacheKey);
    if (!value) {
      this.logger.trace("1h4wa6", correlationId);
      return null;
    }
    const parsedThrottlingCache = this.validateAndParseJson(value);
    if (!parsedThrottlingCache || !CacheHelpers_exports.isThrottlingEntity(throttlingCacheKey, parsedThrottlingCache)) {
      this.logger.trace("1h4wa6", correlationId);
      return null;
    }
    this.logger.trace("0of6n8", correlationId);
    return parsedThrottlingCache;
  }
  /**
   * set throttling entity to the platform cache
   * @param throttlingCacheKey
   * @param throttlingCache
   */
  setThrottlingCache(throttlingCacheKey, throttlingCache, correlationId) {
    this.logger.trace("0wfgh6", correlationId);
    this.setItem(throttlingCacheKey, JSON.stringify(throttlingCache), correlationId);
  }
  /**
   * Gets cache item with given key.
   * @param cacheKey
   * @param correlationId
   * @param generateKey
   */
  getTemporaryCache(cacheKey, correlationId, generateKey) {
    this.logger.trace("1ordf8", correlationId);
    const key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
    return this.temporaryCacheStorage.getItem(key);
  }
  /**
   * Sets the cache item with the key and value given.
   * @param key
   * @param value
   */
  setTemporaryCache(cacheKey, value, generateKey) {
    const key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
    this.temporaryCacheStorage.setItem(key, value);
  }
  /**
   * Removes the cache item with the given key.
   * @param key
   */
  removeItem(key) {
    this.browserStorage.removeItem(key);
  }
  /**
   * Removes the temporary cache item with the given key.
   * @param key
   */
  removeTemporaryItem(key) {
    this.temporaryCacheStorage.removeItem(key);
  }
  /**
   * Gets all keys in window.
   */
  getKeys() {
    return this.browserStorage.getKeys();
  }
  /**
   * Clears all cache entries created by MSAL.
   */
  clear(correlationId) {
    this.removeAllAccounts(correlationId);
    this.removeAppMetadata(correlationId);
    this.temporaryCacheStorage.getKeys().forEach((cacheKey) => {
      if (cacheKey.indexOf(PREFIX) !== -1 || cacheKey.indexOf(this.clientId) !== -1) {
        this.removeTemporaryItem(cacheKey);
      }
    });
    this.browserStorage.getKeys().forEach((cacheKey) => {
      if (cacheKey.indexOf(PREFIX) !== -1 || cacheKey.indexOf(this.clientId) !== -1) {
        this.browserStorage.removeItem(cacheKey);
      }
    });
    this.internalStorage.clear();
  }
  /**
   * Prepend msal.<client-id> to each key
   * @param key
   * @param addInstanceId
   */
  generateCacheKey(key) {
    if (StringUtils.startsWith(key, PREFIX)) {
      return key;
    }
    return `${PREFIX}.${this.clientId}.${key}`;
  }
  /**
   * Generate Credential Key. All changes to the key REQUIRE a schema version update.
   * Cache Key: msal.<schema_version>|<home_account_id>|<environment>|<credential_type>|<client_id or familyId>|<realm>|<scopes>|<scheme>|<additional_cache_key_components_hash>
   *
   * @param credentialEntity
   * @param hash - optional precomputed hash of additionalCacheKeyComponents
   * @returns
   */
  generateCredentialKey(credential, additionalCacheKeyHash) {
    const familyId = credential.credentialType === Constants_exports.CredentialType.REFRESH_TOKEN && credential.familyId || credential.clientId;
    const scheme = credential.tokenType && credential.tokenType.toLowerCase() !== Constants_exports.AuthenticationScheme.BEARER.toLowerCase() ? credential.tokenType.toLowerCase() : "";
    const credentialKey = [
      `${PREFIX}.${CREDENTIAL_SCHEMA_VERSION}`,
      credential.homeAccountId,
      credential.environment,
      credential.credentialType,
      familyId,
      credential.realm || "",
      credential.target || "",
      scheme
    ];
    if (credential.additionalCacheKeyComponents && Object.keys(credential.additionalCacheKeyComponents).length > 0 && additionalCacheKeyHash) {
      credentialKey.push(additionalCacheKeyHash);
    }
    return credentialKey.join(CACHE_KEY_SEPARATOR2).toLowerCase();
  }
  /**
   * Cache Key: msal.<schema_version>.<home_account_id>.<environment>.<tenant_id>
   * @param account
   * @returns
   */
  generateAccountKey(account) {
    const homeTenantId = account.homeAccountId.split(".")[1];
    const accountKey = [
      `${PREFIX}.${ACCOUNT_SCHEMA_VERSION}`,
      account.homeAccountId,
      account.environment,
      homeTenantId || account.tenantId || ""
    ];
    return accountKey.join(CACHE_KEY_SEPARATOR2).toLowerCase();
  }
  /**
   * Reset all temporary cache items
   * @param correlationId
   */
  resetRequestCache(correlationId) {
    this.logger.trace("0h0ynu", correlationId);
    this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
    this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.VERIFIER));
    this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
    this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.URL_HASH));
    this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.NATIVE_REQUEST));
    this.setInteractionInProgress(false, void 0);
  }
  cacheAuthorizeRequest(authCodeRequest, correlationId, codeVerifier) {
    this.logger.trace("1tzef5", correlationId);
    const encodedValue = base64Encode(JSON.stringify(authCodeRequest));
    this.setTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, encodedValue, true);
    if (codeVerifier) {
      const encodedVerifier = base64Encode(codeVerifier);
      this.setTemporaryCache(TemporaryCacheKeys.VERIFIER, encodedVerifier, true);
    }
  }
  /**
   * Gets the token exchange parameters from the cache. Throws an error if nothing is found.
   * @param correlationId
   */
  getCachedRequest(correlationId) {
    this.logger.trace("0uen20", correlationId);
    const encodedTokenRequest = this.getTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, correlationId, true);
    if (!encodedTokenRequest) {
      throw createBrowserAuthError(noTokenRequestCacheError, "");
    }
    const encodedVerifier = this.getTemporaryCache(TemporaryCacheKeys.VERIFIER, correlationId, true);
    let parsedRequest;
    let verifier = "";
    try {
      parsedRequest = JSON.parse(base64Decode(encodedTokenRequest));
      if (encodedVerifier) {
        verifier = base64Decode(encodedVerifier);
      }
    } catch (e) {
      this.logger.errorPii(`0ewsey ${encodedTokenRequest}`, correlationId);
      this.logger.error(`0tvdic ${e}`, correlationId);
      throw createBrowserAuthError(unableToParseTokenRequestCacheError, "");
    }
    return [parsedRequest, verifier];
  }
  /**
   * Gets cached native request for redirect flows
   * @param correlationId
   */
  getCachedNativeRequest() {
    this.logger.trace("1yxcdm", "");
    const cachedRequest = this.getTemporaryCache(TemporaryCacheKeys.NATIVE_REQUEST, "", true);
    if (!cachedRequest) {
      this.logger.trace("0mnxd4", "");
      return null;
    }
    const parsedRequest = this.validateAndParseJson(cachedRequest);
    if (!parsedRequest) {
      this.logger.error("0rrkip", "");
      return null;
    }
    return parsedRequest;
  }
  isInteractionInProgress(matchClientId) {
    const clientId = this.getInteractionInProgress()?.clientId;
    if (matchClientId) {
      return clientId === this.clientId;
    } else {
      return !!clientId;
    }
  }
  getInteractionInProgress() {
    const key = `${PREFIX}.${TemporaryCacheKeys.INTERACTION_STATUS_KEY}`;
    const value = this.getTemporaryCache(key, "", false);
    try {
      return value ? JSON.parse(value) : null;
    } catch (e) {
      this.logger.error("0jjyys", "");
      this.removeTemporaryItem(key);
      this.resetRequestCache("");
      clearHash(window);
      return null;
    }
  }
  setInteractionInProgress(inProgress, type = INTERACTION_TYPE.SIGNIN, allowOverride = false, correlationId = "") {
    const key = `${PREFIX}.${TemporaryCacheKeys.INTERACTION_STATUS_KEY}`;
    if (inProgress) {
      const existingInteraction = this.getInteractionInProgress();
      if (existingInteraction) {
        if (allowOverride) {
          this.logger.warning(`1pmscr ${existingInteraction.clientId} ${existingInteraction.type}`, correlationId);
          cancelPendingBridgeResponse(this.logger, correlationId);
          this.removeTemporaryItem(key);
        } else {
          throw createBrowserAuthError(interactionInProgress, "");
        }
      }
      this.setTemporaryCache(key, JSON.stringify({ clientId: this.clientId, type }), false);
    } else if (!inProgress && this.getInteractionInProgress()?.clientId === this.clientId) {
      this.removeTemporaryItem(key);
    }
  }
  /**
   * Builds credential entities from AuthenticationResult object and saves the resulting credentials to the cache
   * @param result
   * @param request
   */
  async hydrateCache(result, request) {
    const idTokenEntity = CacheHelpers_exports.createIdTokenEntity(result.account.homeAccountId, result.account.environment, result.idToken, this.clientId, result.tenantId);
    const accessTokenEntity = CacheHelpers_exports.createAccessTokenEntity(
      result.account.homeAccountId,
      result.account.environment,
      result.accessToken,
      this.clientId,
      result.tenantId,
      result.scopes.join(" "),
      // Access token expiresOn stored in seconds, converting from AuthenticationResult expiresOn stored as Date
      result.expiresOn ? TimeUtils_exports.toSecondsFromDate(result.expiresOn) : 0,
      result.extExpiresOn ? TimeUtils_exports.toSecondsFromDate(result.extExpiresOn) : 0,
      base64Decode,
      request.correlationId || "",
      void 0,
      // refreshOn
      result.tokenType,
      void 0,
      // userAssertionHash
      request.sshKid
    );
    if (request.resource) {
      accessTokenEntity.resource = request.resource;
    }
    const cacheRecord = {
      idToken: idTokenEntity,
      accessToken: accessTokenEntity
    };
    return this.saveCacheRecord(cacheRecord, result.correlationId, AuthToken_exports.isKmsi(AuthToken_exports.extractTokenClaims(result.idToken, base64Decode, result.correlationId)), ApiId.hydrateCache);
  }
  /**
   * saves a cache record
   * @param cacheRecord {CacheRecord}
   * @param storeInCache {?StoreInCache}
   * @param correlationId {?string} correlation id
   */
  async saveCacheRecord(cacheRecord, correlationId, kmsi, apiId, storeInCache) {
    try {
      await super.saveCacheRecord(cacheRecord, correlationId, kmsi, apiId, storeInCache);
    } catch (e) {
      if (e instanceof CacheError && this.performanceClient && correlationId) {
        try {
          const tokenKeys = this.getTokenKeys();
          this.performanceClient.addFields({
            cacheRtCount: tokenKeys.refreshToken.length,
            cacheIdCount: tokenKeys.idToken.length,
            cacheAtCount: tokenKeys.accessToken.length
          }, correlationId);
        } catch (e2) {
        }
      }
      throw e;
    }
  }
};
function getStorageImplementation(clientId, cacheLocation, logger, performanceClient) {
  try {
    switch (cacheLocation) {
      case BrowserCacheLocation.LocalStorage:
        return new LocalStorage(clientId, logger, performanceClient);
      case BrowserCacheLocation.SessionStorage:
        return new SessionStorage();
      case BrowserCacheLocation.MemoryStorage:
      default:
        break;
    }
  } catch (e) {
    logger.error(e, "");
  }
  return new MemoryStorage();
}
var DEFAULT_BROWSER_CACHE_MANAGER = (clientId, logger, performanceClient, eventHandler, staticAuthorityOptions, tokenBindingKeyManager = DEFAULT_TOKEN_BINDING_KEY_MANAGER) => {
  const cacheOptions = {
    cacheLocation: BrowserCacheLocation.MemoryStorage,
    cacheRetentionDays: 5
  };
  return new BrowserCacheManager(clientId, cacheOptions, DEFAULT_CRYPTO_IMPLEMENTATION, logger, performanceClient, eventHandler, staticAuthorityOptions, tokenBindingKeyManager);
};

// node_modules/@azure/msal-browser/dist/cache/AccountManager.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function getAllAccounts(logger, browserStorage, isInBrowser, correlationId, accountFilter) {
  logger.verbose("1yd030", correlationId);
  return isInBrowser ? browserStorage.getAllAccounts(accountFilter, correlationId) : [];
}
function getAccount(accountFilter, logger, browserStorage, correlationId) {
  logger.trace("0u7b90", correlationId);
  const account = browserStorage.getAccountInfoFilteredBy(accountFilter, correlationId);
  if (account) {
    logger.verbose("0btgll", correlationId);
    return account;
  } else {
    logger.verbose("0ltaj5", correlationId);
    return null;
  }
}
function setActiveAccount(account, browserStorage, correlationId) {
  browserStorage.setActiveAccount(account, correlationId);
}
function getActiveAccount(browserStorage, correlationId) {
  return browserStorage.getActiveAccount(correlationId);
}

// node_modules/@azure/msal-browser/dist/event/EventHandler.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var BROADCAST_CHANNEL_NAME2 = "msal.broadcast.event";
var EventHandler = class {
  constructor(logger) {
    this.eventCallbacks = /* @__PURE__ */ new Map();
    this.logger = logger || new Logger({}, name2, version2);
    if (typeof BroadcastChannel !== "undefined") {
      this.broadcastChannel = new BroadcastChannel(BROADCAST_CHANNEL_NAME2);
    }
    this.invokeCrossTabCallbacks = this.invokeCrossTabCallbacks.bind(this);
  }
  /**
   * Adds event callbacks to array
   * @param callback - callback to be invoked when an event is raised
   * @param eventTypes - list of events that this callback will be invoked for, if not provided callback will be invoked for all events
   * @param callbackId - Identifier for the callback, used to locate and remove the callback when no longer required
   */
  addEventCallback(callback, eventTypes, callbackId) {
    if (typeof window !== "undefined") {
      const id = callbackId || createGuid();
      if (this.eventCallbacks.has(id)) {
        this.logger.error(`1578i0 ${id}`, "");
        return null;
      }
      this.eventCallbacks.set(id, [callback, eventTypes || []]);
      this.logger.verbose(`1cnec4 ${id}`, "");
      return id;
    }
    return null;
  }
  /**
   * Removes callback with provided id from callback array
   * @param callbackId
   */
  removeEventCallback(callbackId) {
    this.eventCallbacks.delete(callbackId);
    this.logger.verbose(`12zotd ${callbackId}`, "");
  }
  /**
   * Emits events by calling callback with event message
   * @param eventType
   * @param interactionType
   * @param payload
   * @param error
   */
  emitEvent(eventType, correlationId, interactionType, payload, error) {
    const message = {
      eventType,
      interactionType: interactionType || null,
      payload: payload || null,
      error: error || null,
      correlationId,
      timestamp: Date.now()
    };
    switch (eventType) {
      case EventType.LOGIN_SUCCESS:
      case EventType.LOGOUT_SUCCESS:
      case EventType.ACTIVE_ACCOUNT_CHANGED:
        this.broadcastChannel?.postMessage(message);
    }
    this.invokeCallbacks(message);
  }
  /**
   * Invoke registered callbacks
   * @param message
   */
  invokeCallbacks(message) {
    this.eventCallbacks.forEach(([callback, eventTypes], callbackId) => {
      if (eventTypes.length === 0 || eventTypes.includes(message.eventType)) {
        this.logger.verbose(`15jpwk ${callbackId} ${message.eventType}`, "");
        callback.apply(null, [message]);
      }
    });
  }
  /**
   * Wrapper around invokeCallbacks to handle broadcast events received from other tabs/instances
   * @param event
   */
  invokeCrossTabCallbacks(event) {
    const message = event.data;
    this.invokeCallbacks(message);
  }
  /**
   * Listen for events broadcasted from other tabs/instances
   */
  subscribeCrossTab() {
    this.broadcastChannel?.addEventListener("message", this.invokeCrossTabCallbacks);
  }
  /**
   * Unsubscribe from broadcast events
   */
  unsubscribeCrossTab() {
    this.broadcastChannel?.removeEventListener("message", this.invokeCrossTabCallbacks);
  }
};

// node_modules/@azure/msal-browser/dist/interaction_client/BaseInteractionClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var BaseInteractionClient = class {
  constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, correlationId, platformAuthProvider, tokenBindingKeyManager) {
    this.config = config;
    this.browserStorage = storageImpl;
    this.browserCrypto = browserCrypto;
    this.networkClient = this.config.system.networkClient;
    this.eventHandler = eventHandler;
    this.navigationClient = navigationClient;
    this.platformAuthProvider = platformAuthProvider;
    this.correlationId = correlationId;
    this.logger = logger.clone(name2, version2);
    this.performanceClient = performanceClient;
    this.tokenBindingKeyManager = tokenBindingKeyManager || new TokenBindingKeyManager(this.logger, this.performanceClient);
  }
};
function getRedirectUri(requestRedirectUri, clientConfigRedirectUri, logger, correlationId) {
  logger.verbose("0bd1la", correlationId);
  const redirectUri = requestRedirectUri || clientConfigRedirectUri || "";
  return UrlString.getAbsoluteUrl(redirectUri, getCurrentUri(), correlationId);
}
function initializeServerTelemetryManager(apiId, clientId, correlationId, browserStorage, logger, forceRefresh, enabled = true) {
  logger.verbose("1p12tq", correlationId);
  if (!enabled) {
    logger.verbose("0tajnr", correlationId);
    return new StubServerTelemetryManager();
  }
  const telemetryPayload = {
    clientId,
    correlationId,
    apiId,
    forceRefresh: forceRefresh || false,
    wrapperSKU: browserStorage.getWrapperMetadata()[0],
    wrapperVer: browserStorage.getWrapperMetadata()[1]
  };
  return new ServerTelemetryManager(telemetryPayload, browserStorage);
}
async function getDiscoveredAuthority(config, correlationId, performanceClient, browserStorage, logger, requestAuthority, requestAzureCloudOptions, requestExtraQueryParameters, account) {
  const instanceAwareEQ = requestExtraQueryParameters && requestExtraQueryParameters.hasOwnProperty("instance_aware") ? requestExtraQueryParameters["instance_aware"] : void 0;
  const authorityOptions = {
    protocolMode: config.system.protocolMode,
    OIDCOptions: config.auth.OIDCOptions,
    knownAuthorities: config.auth.knownAuthorities,
    cloudDiscoveryMetadata: config.auth.cloudDiscoveryMetadata,
    authorityMetadata: config.auth.authorityMetadata
  };
  const resolvedAuthority = requestAuthority || config.auth.authority;
  const resolvedInstanceAware = instanceAwareEQ?.length ? instanceAwareEQ === "true" : config.auth.instanceAware;
  const userAuthority = account && resolvedInstanceAware ? config.auth.authority.replace(UrlString.getDomainFromUrl(resolvedAuthority, correlationId), account.environment) : resolvedAuthority;
  const builtAuthority = Authority.generateAuthority(userAuthority, requestAzureCloudOptions || config.auth.azureCloudOptions);
  const discoveredAuthority = await invokeAsync(AuthorityFactory_exports.createDiscoveredInstance, AuthorityFactoryCreateDiscoveredInstance, logger, performanceClient, correlationId)(builtAuthority, config.system.networkClient, browserStorage, authorityOptions, logger, correlationId, performanceClient);
  if (account && !discoveredAuthority.isAlias(account.environment)) {
    throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.authorityMismatch, correlationId);
  }
  return discoveredAuthority;
}
async function clearCacheOnLogout(browserStorage, browserCrypto, logger, correlationId, account) {
  if (account) {
    try {
      browserStorage.removeAccount(account, correlationId);
      logger.verbose("0s4z6h", correlationId);
    } catch (error) {
      logger.error("0mgg1d", correlationId);
    }
  } else {
    try {
      logger.verbose("0zj631", correlationId);
      browserStorage.clear(correlationId);
      await browserCrypto.clearKeystore(correlationId);
    } catch (e) {
      logger.error("12ih0c", correlationId);
    }
  }
}

// node_modules/@azure/msal-browser/dist/request/RequestHelpers.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var SUPPORTED_AUTHENTICATION_SCHEMES = /* @__PURE__ */ new Set([
  Constants_exports.AuthenticationScheme.BEARER,
  Constants_exports.AuthenticationScheme.POP,
  Constants_exports.AuthenticationScheme.DPOP,
  Constants_exports.AuthenticationScheme.SSH
]);
function validateSshRequest(request, correlationId) {
  if (!request.sshJwk) {
    throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.missingSshJwk, correlationId);
  }
  if (!request.sshKid) {
    throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.missingSshKid, correlationId);
  }
}
function validateDpopRequest(request, correlationId) {
  if (!request.resourceRequestMethod?.trim() || !request.resourceRequestUri?.trim()) {
    throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.dpopMissingResourceContext, correlationId);
  }
}
async function getTokenBindingRequestParams(request, tokenBindingKeyManager, logger, performanceClient) {
  switch (request.authenticationScheme) {
    case Constants_exports.AuthenticationScheme.DPOP:
      if (request.platformBroker) {
        return {};
      }
      if (request.dpopJkt) {
        return { dpopJkt: request.dpopJkt };
      }
      return {
        dpopJkt: await tokenBindingKeyManager.provisionTokenBindingKey({
          tokenBindingKeyType: Constants_exports.AuthenticationScheme.DPOP.toLowerCase(),
          tokenBindingKeyAlgorithm: JsonWebTokenAlgorithms.ES256,
          correlationId: request.correlationId
        })
      };
    case Constants_exports.AuthenticationScheme.POP:
      if (!request.platformBroker) {
        return {};
      }
      const cryptoOps = new CryptoOps(logger, performanceClient);
      if (request.popKid) {
        return { reqCnf: cryptoOps.encodeKid(request.popKid) };
      }
      const popTokenGenerator = new PopTokenGenerator(cryptoOps, tokenBindingKeyManager, performanceClient);
      const generatedReqCnfData = await invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PerformanceEvents_exports.PopTokenGenerateCnf, logger, performanceClient, request.correlationId)(request, logger);
      return { reqCnf: generatedReqCnfData.reqCnfString };
    default:
      return {};
  }
}
async function initializeBaseRequest(request, config, performanceClient, logger, correlationId) {
  const authority = request.authority || config.auth.authority;
  const scopes = [...request && request.scopes || []];
  const validatedRequest = __spreadProps(__spreadValues({}, request), {
    correlationId: request.correlationId,
    authority,
    scopes
  });
  if (!validatedRequest.authenticationScheme) {
    validatedRequest.authenticationScheme = Constants_exports.AuthenticationScheme.BEARER;
    logger.verbose("1l4fwv", correlationId);
  } else {
    if (!SUPPORTED_AUTHENTICATION_SCHEMES.has(validatedRequest.authenticationScheme)) {
      throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.unsupportedAuthenticationScheme, correlationId);
    }
    switch (validatedRequest.authenticationScheme) {
      case Constants_exports.AuthenticationScheme.SSH:
        validateSshRequest(request, correlationId);
        break;
      case Constants_exports.AuthenticationScheme.DPOP: {
        validateDpopRequest(request, correlationId);
        break;
      }
    }
    logger.verbose(`1ecmns ${validatedRequest.authenticationScheme}`, correlationId);
  }
  return validatedRequest;
}
async function initializeSilentRequest(request, account, config, performanceClient, logger) {
  const baseRequest = await invokeAsync(initializeBaseRequest, InitializeBaseRequest, logger, performanceClient, request.correlationId)(request, config, performanceClient, logger, request.correlationId);
  return __spreadProps(__spreadValues(__spreadValues({}, request), baseRequest), {
    account,
    forceRefresh: request.forceRefresh || false
  });
}
function validateRequestMethod(interactionRequest, protocolMode) {
  let httpMethod;
  const requestMethod = interactionRequest.httpMethod;
  if (protocolMode === ProtocolMode.EAR) {
    if (requestMethod && requestMethod !== Constants_exports.HttpMethod.POST) {
      throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.invalidRequestMethodForEAR, "");
    } else {
      httpMethod = Constants_exports.HttpMethod.POST;
    }
  } else {
    httpMethod = requestMethod || Constants_exports.HttpMethod.GET;
  }
  return httpMethod;
}

// node_modules/@azure/msal-browser/dist/interaction_client/StandardInteractionClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var StandardInteractionClient = class extends BaseInteractionClient {
  /**
   * Initializer for the logout request.
   * @param logoutRequest
   */
  initializeLogoutRequest(logoutRequest) {
    this.logger.verbose("0546u4", this.correlationId);
    const validLogoutRequest = __spreadValues({
      correlationId: this.correlationId
    }, logoutRequest);
    if (logoutRequest) {
      if (!logoutRequest.logoutHint) {
        if (logoutRequest.account) {
          const logoutHint = logoutRequest.account.loginHint || this.getLogoutHintFromIdTokenClaims(logoutRequest.account);
          if (logoutHint) {
            this.logger.verbose("0d7s8p", this.correlationId);
            validLogoutRequest.logoutHint = logoutHint;
          }
        } else {
          this.logger.verbose("0pdtc3", this.correlationId);
        }
      } else {
        this.logger.verbose("12k4l4", this.correlationId);
      }
    } else {
      this.logger.verbose("07ndze", this.correlationId);
    }
    if (!logoutRequest || logoutRequest.postLogoutRedirectUri !== null) {
      if (logoutRequest && logoutRequest.postLogoutRedirectUri) {
        this.logger.verbose("1vamm6", validLogoutRequest.correlationId);
        validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(logoutRequest.postLogoutRedirectUri, getCurrentUri(), validLogoutRequest.correlationId);
      } else if (this.config.auth.postLogoutRedirectUri === null) {
        this.logger.verbose("15m5g7", validLogoutRequest.correlationId);
      } else if (this.config.auth.postLogoutRedirectUri) {
        this.logger.verbose("1f4xlz", validLogoutRequest.correlationId);
        validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, getCurrentUri(), validLogoutRequest.correlationId);
      } else {
        this.logger.verbose("17s5rf", validLogoutRequest.correlationId);
        validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(getCurrentUri(), getCurrentUri(), validLogoutRequest.correlationId);
      }
    } else {
      this.logger.verbose("0ljv63", validLogoutRequest.correlationId);
    }
    return validLogoutRequest;
  }
  /**
   * Parses login_hint ID Token Claim out of AccountInfo object to be used as
   * logout_hint in end session request.
   * @param account
   */
  getLogoutHintFromIdTokenClaims(account) {
    const idTokenClaims = account.idTokenClaims;
    if (idTokenClaims) {
      if (idTokenClaims.login_hint) {
        this.logger.verbose("0u5bmc", this.correlationId);
        return idTokenClaims.login_hint;
      } else {
        this.logger.verbose("0mvp54", this.correlationId);
      }
    } else {
      this.logger.verbose("1e7bdp", this.correlationId);
    }
    return null;
  }
  /**
   * Creates an Authorization Code Client with the given authority, or the default authority.
   * @param params {
   *         serverTelemetryManager: ServerTelemetryManager;
   *         authorityUrl?: string;
   *         requestAzureCloudOptions?: AzureCloudOptions;
   *         requestExtraQueryParameters?: StringDict;
   *         account?: AccountInfo;
   *        }
   */
  async createAuthCodeClient(params) {
    const clientConfig = await invokeAsync(this.getClientConfiguration.bind(this), StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)(params);
    return new AuthorizationCodeClient(clientConfig, this.performanceClient);
  }
  /**
   * Creates a Client Configuration object with the given request authority, or the default authority.
   * @param params {
   *         serverTelemetryManager: ServerTelemetryManager;
   *         requestAuthority?: string;
   *         requestAzureCloudOptions?: AzureCloudOptions;
   *         requestExtraQueryParameters?: boolean;
   *         account?: AccountInfo;
   *        }
   */
  async getClientConfiguration(params) {
    const { serverTelemetryManager, requestAuthority, requestAzureCloudOptions, requestExtraQueryParameters, account } = params;
    const discoveredAuthority = params.authority || await invokeAsync(getDiscoveredAuthority, StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, this.correlationId)(this.config, this.correlationId, this.performanceClient, this.browserStorage, this.logger, requestAuthority, requestAzureCloudOptions, requestExtraQueryParameters, account);
    const logger = this.config.system.loggerOptions;
    return {
      authOptions: {
        clientId: this.config.auth.clientId,
        authority: discoveredAuthority,
        clientCapabilities: this.config.auth.clientCapabilities,
        redirectUri: this.config.auth.redirectUri,
        isMcp: this.config.auth.isMcp
      },
      systemOptions: {
        tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
        preventCorsPreflight: true
      },
      loggerOptions: {
        loggerCallback: logger.loggerCallback,
        piiLoggingEnabled: logger.piiLoggingEnabled,
        logLevel: logger.logLevel,
        correlationId: this.correlationId
      },
      cryptoInterface: this.browserCrypto,
      tokenBindingKeyManager: this.tokenBindingKeyManager,
      networkInterface: this.networkClient,
      storageInterface: this.browserStorage,
      serverTelemetryManager,
      libraryInfo: {
        sku: BrowserConstants.MSAL_SKU,
        version: version2,
        cpu: "",
        os: ""
      },
      telemetry: this.config.telemetry
    };
  }
};
async function initializeAuthorizationRequest(request, interactionType, config, browserCrypto, browserStorage, logger, performanceClient, correlationId) {
  const redirectUri = getRedirectUri(request.redirectUri, config.auth.redirectUri, logger, correlationId);
  if (new URL(redirectUri).origin !== new URL(window.location.href).origin) {
    logger.warning("08qbvw", correlationId);
    performanceClient.addFields({ isRedirectUriCrossOrigin: true }, correlationId);
  }
  const browserState = {
    interactionType
  };
  const state = ProtocolUtils_exports.setRequestState(browserCrypto, request && request.state || "", browserState, correlationId);
  const baseRequest = await invokeAsync(initializeBaseRequest, InitializeBaseRequest, logger, performanceClient, correlationId)(__spreadProps(__spreadValues({}, request), { correlationId }), config, performanceClient, logger, correlationId);
  const interactionRequest = __spreadProps(__spreadValues({}, baseRequest), {
    redirectUri,
    state,
    nonce: request.nonce || createNewGuid(),
    responseMode: config.auth.OIDCOptions.responseMode
  });
  const validatedRequest = __spreadProps(__spreadValues({}, interactionRequest), {
    httpMethod: validateRequestMethod(interactionRequest, config.system.protocolMode)
  });
  if (request.loginHint || request.sid) {
    return validatedRequest;
  }
  const account = request.account || browserStorage.getActiveAccount(correlationId);
  if (account) {
    logger.verbose("1eqlb3", correlationId);
    logger.verbosePii(`0tf99t ${account.homeAccountId}`, correlationId);
    validatedRequest.account = account;
  }
  return validatedRequest;
}

// node_modules/@azure/msal-browser/dist/popup_relay/constants.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var POPUP_RELAY_RESPONSE_TYPE = "msal:popup-relay-response:v1";

// node_modules/@azure/msal-browser/dist/popup_relay/relayClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function buildPopupRelayUrl(popupRelayUri, id, action, correlationId) {
  const req = __spreadValues({ id }, action);
  const target = new URL(popupRelayUri, window.location.origin);
  if (target.origin !== window.location.origin) {
    throw createBrowserAuthError(popupRelayUnsupportedFlow, correlationId, "popup_relay_cross_origin");
  }
  const hashParams = new URLSearchParams();
  hashParams.set("req", JSON.stringify(req));
  target.hash = hashParams.toString();
  return target.toString();
}
async function waitForPopupRelayResponse(timeoutMs, logger, request, popupWindow, performanceClient) {
  return new Promise((resolve, reject) => {
    const correlationId = request.correlationId;
    logger.verbose("1d05g9", correlationId);
    performanceClient.addFields({ redirectBridgeTimeoutMs: timeoutMs }, correlationId);
    const { libraryState } = ProtocolUtils_exports.parseRequestState(base64Decode, request.state || "", correlationId);
    const expectedId = libraryState.id;
    const expectedOrigin = window.location.origin;
    let settled = false;
    const cleanup = () => {
      window.removeEventListener("message", onMessage);
      clearTimeout(timeoutId);
      clearInterval(closedPoll);
    };
    const onMessage = (event) => {
      if (event.origin !== expectedOrigin || event.source !== popupWindow) {
        return;
      }
      const data = event.data;
      if (!data || data.type !== POPUP_RELAY_RESPONSE_TYPE || data.id !== expectedId) {
        return;
      }
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      if (data.error) {
        reject(createBrowserAuthError(data.error, correlationId));
      } else if (data.payload) {
        resolve(data.payload);
      } else {
        reject(createBrowserAuthError(redirectBridgeEmptyResponse, correlationId));
      }
    };
    window.addEventListener("message", onMessage);
    const timeoutId = window.setTimeout(() => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(createBrowserAuthError(timedOut, correlationId, "popup_relay_timeout"));
    }, timeoutMs);
    const closedPoll = window.setInterval(() => {
      if (popupWindow.closed && !settled) {
        settled = true;
        cleanup();
        reject(createBrowserAuthError(userCancelled, correlationId));
      }
    }, 500);
  });
}

// node_modules/@azure/msal-browser/dist/utils/BrowserProtocolUtils.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function extractBrowserRequestState(browserCrypto, state, correlationId) {
  if (!state) {
    return null;
  }
  try {
    const requestStateObj = ProtocolUtils_exports.parseRequestState(browserCrypto.base64Decode, state, correlationId);
    return requestStateObj.libraryState.meta;
  } catch (e) {
    throw createClientAuthError(ClientAuthErrorCodes_exports.invalidState, correlationId);
  }
}

// node_modules/@azure/msal-browser/dist/response/ResponseHandler.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function deserializeResponse(responseString, responseLocation, logger, correlationId) {
  const serverParams = UrlUtils_exports.getDeserializedResponse(responseString);
  if (!serverParams) {
    if (!UrlUtils_exports.stripLeadingHashOrQuery(responseString)) {
      logger.error(`18h0l1 ${responseLocation} ${responseLocation}`, correlationId);
      throw createBrowserAuthError(hashEmptyError, correlationId);
    } else {
      logger.error(`13pl0s ${responseLocation} ${responseLocation}`, correlationId);
      logger.errorPii(`1097vx ${responseLocation} ${responseString}`, correlationId);
      throw createBrowserAuthError(hashDoesNotContainKnownProperties, correlationId);
    }
  }
  return serverParams;
}
function validateInteractionType(response, browserCrypto, interactionType, correlationId) {
  if (!response.state) {
    throw createBrowserAuthError(noStateInHash, correlationId);
  }
  const platformStateObj = extractBrowserRequestState(browserCrypto, response.state, correlationId);
  if (!platformStateObj) {
    throw createBrowserAuthError(unableToParseState, correlationId);
  }
  if (platformStateObj.interactionType !== interactionType) {
    throw createBrowserAuthError(stateInteractionTypeMismatch, correlationId);
  }
}

// node_modules/@azure/msal-browser/dist/interaction_handler/InteractionHandler.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var InteractionHandler = class {
  constructor(authCodeModule, storageImpl, authCodeRequest, logger, performanceClient) {
    this.authModule = authCodeModule;
    this.browserStorage = storageImpl;
    this.authCodeRequest = authCodeRequest;
    this.logger = logger;
    this.performanceClient = performanceClient;
  }
  /**
   * Function to handle response parameters from hash.
   * @param locationHash
   */
  async handleCodeResponse(response, request, apiId) {
    let authCodeResponse;
    try {
      authCodeResponse = Authorize_exports.getAuthorizationCodePayload(response, request.state, request.correlationId);
    } catch (e) {
      if (e instanceof ServerError && e.subError === userCancelled) {
        throw createBrowserAuthError(userCancelled, request.correlationId);
      } else {
        throw e;
      }
    }
    return invokeAsync(this.handleCodeResponseFromServer.bind(this), PerformanceEvents_exports.HandleCodeResponseFromServer, this.logger, this.performanceClient, request.correlationId)(authCodeResponse, request, apiId);
  }
  /**
   * Process auth code response from AAD
   * @param authCodeResponse
   * @param request
   * @param validateNonce
   * @returns
   */
  async handleCodeResponseFromServer(authCodeResponse, request, apiId, validateNonce = true) {
    this.logger.trace("0mf2hb", request.correlationId);
    this.authCodeRequest.code = authCodeResponse.code;
    if (validateNonce) {
      authCodeResponse.nonce = request.nonce || void 0;
    }
    authCodeResponse.state = request.state;
    if (authCodeResponse.client_info) {
      this.authCodeRequest.clientInfo = authCodeResponse.client_info;
    } else {
      const ccsCred = this.createCcsCredentials(request);
      if (ccsCred) {
        this.authCodeRequest.ccsCredential = ccsCred;
      }
    }
    const tokenResponse = await invokeAsync(this.authModule.acquireToken.bind(this.authModule), AuthClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(this.authCodeRequest, apiId, authCodeResponse);
    return tokenResponse;
  }
  /**
   * Build ccs creds if available
   */
  createCcsCredentials(request) {
    if (request.account) {
      return {
        credential: request.account.homeAccountId,
        type: CcsCredentialType.HOME_ACCOUNT_ID
      };
    } else if (request.loginHint) {
      return {
        credential: request.loginHint,
        type: CcsCredentialType.UPN
      };
    }
    return null;
  }
};

// node_modules/@azure/msal-browser/dist/broker/nativeBroker/PlatformAuthRequest.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var PlatformAuthTokenType = {
  DPOP_WITH_PROOF: "dpop+proof"
};
var PROOF_OF_POSSESSION_TOKEN_TYPES = [
  Constants_exports.AuthenticationScheme.POP,
  Constants_exports.AuthenticationScheme.DPOP,
  PlatformAuthTokenType.DPOP_WITH_PROOF
];
function isProofOfPossessionTokenType(tokenType) {
  return tokenType !== void 0 && PROOF_OF_POSSESSION_TOKEN_TYPES.includes(tokenType);
}
function createPlatformAuthExtraParametersNoCache(extraParametersNoCache, isProofOfPossessionRequest, resourceRequestMethod, resourceRequestUri, dpopNonce) {
  if (!isProofOfPossessionRequest) {
    return extraParametersNoCache;
  }
  return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, extraParametersNoCache), resourceRequestMethod && {
    pop_method: resourceRequestMethod
  }), resourceRequestUri && {
    pop_url: resourceRequestUri
  }), dpopNonce && {
    pop_nonce: dpopNonce
  });
}

// node_modules/@azure/msal-browser/dist/error/NativeAuthErrorCodes.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var contentError = "ContentError";
var pageException = "PageException";
var userSwitch = "user_switch";
var unsupportedMethod = "unsupported_method";

// node_modules/@azure/msal-browser/dist/broker/nativeBroker/NativeStatusCodes.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED";
var USER_CANCEL = "USER_CANCEL";
var NO_NETWORK = "NO_NETWORK";
var DISABLED = "DISABLED";
var ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";
var UI_NOT_ALLOWED = "UI_NOT_ALLOWED";

// node_modules/@azure/msal-browser/dist/error/NativeAuthError.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var INVALID_METHOD_ERROR = -2147186943;
var NativeAuthError = class _NativeAuthError extends AuthError {
  constructor(errorCode, correlationId, description, ext) {
    super(errorCode, correlationId, description || getDefaultErrorMessage2(errorCode));
    Object.setPrototypeOf(this, _NativeAuthError.prototype);
    this.name = "NativeAuthError";
    this.ext = ext;
  }
};
function isFatalNativeAuthError(error) {
  if (error.ext && error.ext.status && error.ext.status === DISABLED) {
    return true;
  }
  if (error.ext && error.ext.error && error.ext.error === INVALID_METHOD_ERROR) {
    return true;
  }
  switch (error.errorCode) {
    case contentError:
    case pageException:
      return true;
    default:
      return false;
  }
}
function createNativeAuthError(code, correlationId, description, ext) {
  let error;
  if (ext && ext.status) {
    switch (ext.status) {
      case ACCOUNT_UNAVAILABLE:
        error = createInteractionRequiredAuthError(InteractionRequiredAuthErrorCodes_exports.nativeAccountUnavailable, correlationId, getDefaultErrorMessage2(code));
        break;
      case USER_INTERACTION_REQUIRED:
        error = new InteractionRequiredAuthError(code, correlationId, description);
        break;
      case USER_CANCEL:
        error = createBrowserAuthError(userCancelled, correlationId);
        break;
      case NO_NETWORK:
        error = createBrowserAuthError(noNetworkConnectivity2, correlationId);
        break;
      case UI_NOT_ALLOWED:
        error = createInteractionRequiredAuthError(InteractionRequiredAuthErrorCodes_exports.uiNotAllowed, correlationId);
        break;
      default:
        error = new NativeAuthError(code, correlationId, description, ext);
    }
    return error;
  }
  error = new NativeAuthError(code, correlationId, description, ext);
  return error;
}

// node_modules/@azure/msal-browser/dist/interaction_client/SilentCacheClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var SilentCacheClient = class extends StandardInteractionClient {
  /**
   * Returns unexpired tokens from the cache, if available
   * @param silentRequest
   */
  async acquireToken(silentRequest) {
    const serverTelemetryManager = initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled);
    const clientConfig = await invokeAsync(this.getClientConfiguration.bind(this), StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)({
      serverTelemetryManager,
      requestAuthority: silentRequest.authority,
      requestAzureCloudOptions: silentRequest.azureCloudOptions,
      account: silentRequest.account
    });
    const silentAuthClient = new SilentFlowClient(clientConfig, this.performanceClient);
    this.logger.verbose("0wa871", this.correlationId);
    try {
      const response = await invokeAsync(silentAuthClient.acquireCachedToken.bind(silentAuthClient), SilentFlowClientAcquireCachedToken, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest);
      const authResponse = response[0];
      this.performanceClient.addFields({
        fromCache: true
      }, silentRequest.correlationId);
      return authResponse;
    } catch (error) {
      if (error instanceof BrowserAuthError && error.errorCode === cryptoKeyNotFound) {
        this.logger.verbose("06wena", this.correlationId);
      }
      throw error;
    }
  }
  /**
   * API to silenty clear the browser cache.
   * @param logoutRequest
   */
  logout(logoutRequest) {
    this.logger.verbose("1rkurh", this.correlationId);
    const validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
    return clearCacheOnLogout(this.browserStorage, this.browserCrypto, this.logger, this.correlationId, validLogoutRequest.account);
  }
};

// node_modules/@azure/msal-browser/dist/interaction_client/PlatformAuthInteractionClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var PlatformAuthInteractionClient = class extends BaseInteractionClient {
  constructor(config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, provider, accountId, nativeStorageImpl, correlationId, tokenBindingKeyManager) {
    super(config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, performanceClient, correlationId, provider, tokenBindingKeyManager);
    this.apiId = apiId;
    this.accountId = accountId;
    this.platformAuthProvider = provider;
    this.nativeStorageManager = nativeStorageImpl;
    this.silentCacheClient = new SilentCacheClient(config, this.nativeStorageManager, browserCrypto, logger, eventHandler, navigationClient, performanceClient, correlationId, provider, this.tokenBindingKeyManager);
    const extensionName = this.platformAuthProvider.getExtensionName();
    this.skus = ServerTelemetryManager.makeExtraSkuString({
      libraryName: BrowserConstants.MSAL_SKU,
      libraryVersion: version2,
      extensionName,
      extensionVersion: this.platformAuthProvider.getExtensionVersion()
    });
  }
  /**
   * Adds SKUs to request extra query parameters
   * @param request {PlatformAuthRequest}
   * @private
   */
  addRequestSKUs(request) {
    request.extraParameters = __spreadProps(__spreadValues({}, request.extraParameters), {
      [AADServerParamKeys_exports.X_CLIENT_EXTRA_SKU]: this.skus
    });
  }
  /**
   * Acquire token from native platform via browser extension
   * @param request
   */
  async acquireToken(request, cacheLookupPolicy) {
    this.logger.trace("03qeos", this.correlationId);
    const nativeATMeasurement = this.performanceClient.startMeasurement(NativeInteractionClientAcquireToken, this.correlationId);
    const reqTimestamp = TimeUtils_exports.nowSeconds();
    const serverTelemetryManager = initializeServerTelemetryManager(this.apiId, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled);
    let nativeRequest;
    try {
      nativeRequest = await this.initializePlatformRequest(request);
    } catch (e) {
      nativeATMeasurement.add({
        isNativeBroker: false
      });
      nativeATMeasurement.end({
        success: false
      }, e);
      throw e;
    }
    try {
      const result = await this.acquireTokensFromCache(this.accountId, nativeRequest);
      nativeATMeasurement.add({
        isNativeBroker: false
      });
      nativeATMeasurement.end({
        success: true,
        fromCache: true
      });
      return result;
    } catch (e) {
      if (cacheLookupPolicy === CacheLookupPolicy.AccessToken) {
        this.logger.info("0eitbc", this.correlationId);
        nativeATMeasurement.add({
          isNativeBroker: false
        });
        nativeATMeasurement.end({
          success: false
        });
        throw e;
      }
      this.logger.info("0957j1", this.correlationId);
    }
    try {
      const validatedResponse = await this.platformAuthProvider.sendMessage(nativeRequest);
      const result = await this.handleNativeResponse(validatedResponse, nativeRequest, reqTimestamp, request.storeInCache);
      nativeATMeasurement.end({
        success: true,
        requestId: result.requestId
      });
      serverTelemetryManager.clearNativeBrokerErrorCode();
      return result;
    } catch (e) {
      if (e instanceof NativeAuthError) {
        serverTelemetryManager.setNativeBrokerErrorCode(e.errorCode);
      }
      nativeATMeasurement.end({
        success: false
      }, e);
      this.setBrokerErrorTelemetry(e);
      throw e;
    }
  }
  /**
   * Records platform-broker error telemetry on the root event for the current
   * correlationId. `isNativeBroker` is set optimistically to true because the
   * broker was engaged; when the caller subsequently falls back to a web flow
   * that succeeds, the root success measurement overrides it to false via
   * `result.fromPlatformBroker`. Terminal broker errors (no fallback) retain
   * true. `brokerErrorName`/`brokerErrorCode` are recorded when the error is an `AuthError`.
   * @param error error thrown by the broker interaction
   */
  setBrokerErrorTelemetry(error) {
    if (error instanceof AuthError) {
      this.performanceClient.addFields({
        isNativeBroker: true,
        brokerErrorName: error.name,
        brokerErrorCode: error.errorCode
      }, this.correlationId);
    }
  }
  /**
   * Creates silent flow request
   * @param request
   * @param cachedAccount
   * @returns CommonSilentFlowRequest
   */
  createSilentCacheRequest(request, cachedAccount) {
    const silentRequest = {
      authority: request.authority,
      correlationId: this.correlationId,
      scopes: ScopeSet.fromString(request.scope, this.correlationId).asArray(),
      account: cachedAccount,
      forceRefresh: false,
      resource: request.extraParameters?.resource
    };
    if (request.attributeTokens) {
      silentRequest.attributeTokens = request.attributeTokens.split(" ");
    }
    return silentRequest;
  }
  /**
   * Fetches the tokens from the cache if un-expired
   * @param nativeAccountId
   * @param request
   * @returns authenticationResult
   */
  async acquireTokensFromCache(nativeAccountId, request) {
    if (!nativeAccountId) {
      this.logger.warning("1ndf3e", this.correlationId);
      throw createClientAuthError(ClientAuthErrorCodes_exports.noAccountFound, this.correlationId);
    }
    const account = this.browserStorage.getBaseAccountInfo({
      nativeAccountId
    }, this.correlationId);
    if (!account) {
      throw createClientAuthError(ClientAuthErrorCodes_exports.noAccountFound, this.correlationId);
    }
    try {
      const silentRequest = this.createSilentCacheRequest(request, account);
      const result = await this.silentCacheClient.acquireToken(silentRequest);
      const idToken = this.browserStorage.getIdToken(account, this.correlationId, this.browserStorage.getTokenKeys(), account.tenantId);
      const idTokenClaims = AuthToken_exports.extractTokenClaims(idToken?.secret || "", base64Decode, this.correlationId);
      const fullAccount = updateAccountTenantProfileData(
        account,
        void 0,
        // tenantProfile optional
        idTokenClaims,
        idToken?.secret
      );
      return __spreadProps(__spreadValues({}, result), {
        idToken: idToken?.secret || "",
        idTokenClaims,
        account: fullAccount
      });
    } catch (e) {
      throw e;
    }
  }
  /**
   * Acquires a token from native platform then redirects to the redirectUri instead of returning the response
   * @param {RedirectRequest} request
   * @param {InProgressPerformanceEvent} rootMeasurement
   * @param {HandleRedirectPromiseOptions} options
   */
  async acquireTokenRedirect(request, rootMeasurement, options) {
    this.logger.trace("0luikq", this.correlationId);
    const nativeRequest = await this.initializePlatformRequest(request);
    const navigateToLoginRequestUrl = options?.navigateToLoginRequestUrl ?? true;
    try {
      await this.platformAuthProvider.sendMessage(nativeRequest);
    } catch (e) {
      if (e instanceof NativeAuthError) {
        const serverTelemetryManager = initializeServerTelemetryManager(this.apiId, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled);
        serverTelemetryManager.setNativeBrokerErrorCode(e.errorCode);
        if (isFatalNativeAuthError(e)) {
          this.setBrokerErrorTelemetry(e);
          throw e;
        }
      }
    }
    this.browserStorage.setTemporaryCache(TemporaryCacheKeys.NATIVE_REQUEST, JSON.stringify(__spreadProps(__spreadValues({}, nativeRequest), {
      storeInCache: request.storeInCache
    })), true);
    const navigationOptions = {
      apiId: ApiId.acquireTokenRedirect,
      timeout: this.config.system.redirectNavigationTimeout,
      noHistory: false
    };
    const redirectUri = navigateToLoginRequestUrl ? UrlString.getAbsoluteUrl(request.redirectStartPage || window.location.href, getCurrentUri(), this.correlationId) : getRedirectUri(request.redirectUri, this.config.auth.redirectUri, this.logger, this.correlationId);
    rootMeasurement.end({ success: true });
    await this.navigationClient.navigateExternal(redirectUri, navigationOptions);
  }
  /**
   * If the previous page called native platform for a token using redirect APIs, send the same request again and return the response
   * @param performanceClient {IPerformanceClient?}
   * @param correlationId {string?} correlation identifier
   */
  async handleRedirectPromise() {
    this.logger.trace("1c5lhw", this.correlationId);
    if (!this.browserStorage.isInteractionInProgress(true)) {
      this.logger.info("0le6uv", this.correlationId);
      return null;
    }
    const cachedRequest = this.browserStorage.getCachedNativeRequest();
    if (!cachedRequest) {
      this.logger.verbose("0a6zjb", this.correlationId);
      this.performanceClient?.addFields({ errorCode: "no_cached_request" }, this.correlationId);
      return null;
    }
    const _a = cachedRequest, { prompt, storeInCache } = _a, request = __objRest(_a, ["prompt", "storeInCache"]);
    if (prompt) {
      this.logger.verbose("0ac34v", this.correlationId);
    }
    this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.NATIVE_REQUEST));
    const reqTimestamp = TimeUtils_exports.nowSeconds();
    try {
      this.logger.verbose("003x5a", this.correlationId);
      const response = await this.platformAuthProvider.sendMessage(request);
      const authResult = await this.handleNativeResponse(response, request, reqTimestamp, storeInCache);
      const serverTelemetryManager = initializeServerTelemetryManager(this.apiId, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled);
      serverTelemetryManager.clearNativeBrokerErrorCode();
      return authResult;
    } catch (e) {
      this.setBrokerErrorTelemetry(e);
      throw e;
    }
  }
  /**
   * Logout from native platform via browser extension
   * @param request
   */
  logout() {
    this.logger.trace("0u2sjm", this.correlationId);
    return Promise.reject("Logout not implemented yet");
  }
  /**
   * Transform response from native platform into AuthenticationResult object which will be returned to the end user
   * @param response
   * @param request
   * @param reqTimestamp
   */
  async handleNativeResponse(response, request, reqTimestamp, storeInCache) {
    this.logger.trace("1bojln", this.correlationId);
    const idTokenClaims = AuthToken_exports.extractTokenClaims(response.id_token, base64Decode, this.correlationId);
    const homeAccountIdentifier = this.createHomeAccountIdentifier(response, idTokenClaims);
    const cachedhomeAccountId = this.browserStorage.getAccountInfoFilteredBy({
      nativeAccountId: request.accountId
    }, this.correlationId)?.homeAccountId;
    if (request.extraParameters?.child_client_id && response.account.id !== request.accountId) {
      this.logger.info("1ub1in", this.correlationId);
    } else if (homeAccountIdentifier !== cachedhomeAccountId && response.account.id !== request.accountId) {
      throw createNativeAuthError(userSwitch, this.correlationId);
    }
    const authority = await getDiscoveredAuthority(this.config, this.correlationId, this.performanceClient, this.browserStorage, this.logger, request.authority);
    const baseAccount = buildAccountToCache(
      this.browserStorage,
      authority,
      homeAccountIdentifier,
      base64Decode,
      this.correlationId,
      idTokenClaims,
      response.client_info,
      authority.getPreferredCache(),
      // environment
      idTokenClaims.tid,
      void 0,
      // auth code payload
      response.account.id,
      this.logger,
      this.performanceClient
    );
    response.expires_in = Number(response.expires_in);
    const result = await this.generateAuthenticationResult(response, request, idTokenClaims, baseAccount, authority.canonicalAuthority, reqTimestamp);
    await this.cacheAccount(baseAccount, AuthToken_exports.isKmsi(idTokenClaims));
    await this.cacheNativeTokens(
      response,
      request,
      homeAccountIdentifier,
      idTokenClaims,
      result.tenantId,
      reqTimestamp,
      authority.getPreferredCache(),
      // environment
      storeInCache
    );
    return result;
  }
  /**
   * creates an homeAccountIdentifier for the account
   * @param response
   * @param idTokenObj
   * @returns
   */
  createHomeAccountIdentifier(response, idTokenClaims) {
    const homeAccountIdentifier = AccountEntityUtils_exports.generateHomeAccountId(response.client_info || "", AuthorityType.Default, this.logger, this.browserCrypto, this.correlationId, idTokenClaims);
    return homeAccountIdentifier;
  }
  /**
   * Helper to generate scopes
   * @param response
   * @param request
   * @returns
   */
  generateScopes(requestScopes, responseScopes) {
    return responseScopes ? ScopeSet.fromString(responseScopes, this.correlationId) : ScopeSet.fromString(requestScopes, this.correlationId);
  }
  /**
   * If PoP token is requesred, records the PoP token if returned from the WAM, else generates one in the browser
   * @param request
   * @param response
   */
  async generatePopAccessToken(response, request) {
    if (request.tokenType === Constants_exports.AuthenticationScheme.POP && request.signPopToken) {
      if (response.shr) {
        this.logger.trace("0coqhu", this.correlationId);
        return response.shr;
      }
      const popTokenGenerator = new PopTokenGenerator(this.browserCrypto, this.tokenBindingKeyManager, this.performanceClient);
      const shrParameters = {
        resourceRequestMethod: request.resourceRequestMethod,
        resourceRequestUri: request.resourceRequestUri,
        shrClaims: request.shrClaims,
        shrNonce: request.shrNonce,
        correlationId: this.correlationId
      };
      if (!request.keyId) {
        throw createClientAuthError(ClientAuthErrorCodes_exports.keyIdMissing, this.correlationId);
      }
      return popTokenGenerator.signPopToken(response.access_token, request.keyId, shrParameters);
    } else {
      return response.access_token;
    }
  }
  /**
   * Generates authentication result
   * @param response
   * @param request
   * @param idTokenObj
   * @param accountEntity
   * @param authority
   * @param reqTimestamp
   * @returns
   */
  async generateAuthenticationResult(response, request, idTokenClaims, accountEntity, authority, reqTimestamp) {
    const mats = this.addTelemetryFromNativeResponse(response.properties.MATS);
    const responseScopes = this.generateScopes(request.scope, response.scope);
    const accountProperties = response.account.properties || {};
    const uid = accountProperties["UID"] || idTokenClaims.oid || idTokenClaims.sub || "";
    const tid = accountProperties["TenantId"] || idTokenClaims.tid || "";
    const accountInfo = updateAccountTenantProfileData(
      AccountEntityUtils_exports.getAccountInfo(accountEntity),
      void 0,
      // tenantProfile optional
      idTokenClaims,
      response.id_token
    );
    if (accountInfo.nativeAccountId !== response.account.id) {
      accountInfo.nativeAccountId = response.account.id;
      const targetTenantId = tid || accountInfo.tenantId;
      const tenantProfile = accountInfo.tenantProfiles?.get(targetTenantId);
      if (tenantProfile) {
        tenantProfile.nativeAccountId = response.account.id;
      }
    }
    const responseAccessToken = await this.generatePopAccessToken(response, request);
    const tokenType = request.tokenType === Constants_exports.AuthenticationScheme.POP ? Constants_exports.AuthenticationScheme.POP : Constants_exports.AuthenticationScheme.BEARER;
    const result = __spreadValues({
      authority,
      uniqueId: uid,
      tenantId: tid,
      scopes: responseScopes.asArray(),
      account: accountInfo,
      idToken: response.id_token,
      idTokenClaims,
      accessToken: responseAccessToken,
      fromCache: mats ? this.isResponseFromCache(mats) : false,
      // Request timestamp and NativeResponse expires_in are in seconds, converting to Date for AuthenticationResult
      expiresOn: TimeUtils_exports.toDateFromSeconds(reqTimestamp + response.expires_in),
      tokenType,
      correlationId: this.correlationId,
      state: response.state,
      fromPlatformBroker: true
    }, request.extraParameters?.resource && {
      resource: request.extraParameters.resource
    });
    return result;
  }
  /**
   * cache the account entity in browser storage
   * @param accountEntity
   */
  async cacheAccount(accountEntity, kmsi) {
    await this.browserStorage.setAccount(accountEntity, this.correlationId, kmsi, this.apiId);
    this.browserStorage.removeAccountContext(AccountEntityUtils_exports.getAccountInfo(accountEntity), this.correlationId);
  }
  /**
   * Stores the access_token and id_token in inmemory storage
   * @param response
   * @param request
   * @param homeAccountIdentifier
   * @param idTokenObj
   * @param responseAccessToken
   * @param tenantId
   * @param reqTimestamp
   */
  async cacheNativeTokens(response, request, homeAccountIdentifier, idTokenClaims, tenantId, reqTimestamp, environment, storeInCache) {
    const cachedIdToken = CacheHelpers_exports.createIdTokenEntity(homeAccountIdentifier, environment, response.id_token || "", request.clientId, idTokenClaims.tid || "");
    const expiresIn = request.tokenType === Constants_exports.AuthenticationScheme.POP ? Constants_exports.SHR_NONCE_VALIDITY : (typeof response.expires_in === "string" ? parseInt(response.expires_in, 10) : response.expires_in) || 0;
    const tokenExpirationSeconds = reqTimestamp + expiresIn;
    const responseScopes = this.generateScopes(response.scope, request.scope);
    const additionalCacheKeyComponents = request.attributeTokens ? {
      attribute_tokens: request.attributeTokens
    } : void 0;
    const cachedAccessToken = CacheHelpers_exports.createAccessTokenEntity(homeAccountIdentifier, environment, response.access_token, request.clientId, idTokenClaims.tid || tenantId, responseScopes.printScopes(), tokenExpirationSeconds, 0, base64Decode, request.correlationId, void 0, request.tokenType, void 0, request.keyId, additionalCacheKeyComponents);
    if (request.extraParameters?.resource) {
      cachedAccessToken.resource = request.extraParameters.resource;
    }
    if (!!cachedIdToken && storeInCache?.idToken !== false) {
      await this.browserStorage.setIdTokenCredential(cachedIdToken, this.correlationId, AuthToken_exports.isKmsi(idTokenClaims));
    }
    const nativeCacheRecord = {
      accessToken: cachedAccessToken
    };
    return this.nativeStorageManager.saveCacheRecord(nativeCacheRecord, this.correlationId, AuthToken_exports.isKmsi(idTokenClaims), this.apiId, storeInCache);
  }
  getExpiresInValue(tokenType, expiresIn) {
    return tokenType === Constants_exports.AuthenticationScheme.POP ? Constants_exports.SHR_NONCE_VALIDITY : (typeof expiresIn === "string" ? parseInt(expiresIn, 10) : expiresIn) || 0;
  }
  addTelemetryFromNativeResponse(matsResponse) {
    const mats = this.getMATSFromResponse(matsResponse);
    if (!mats) {
      return null;
    }
    this.performanceClient.addFields({
      extensionId: this.platformAuthProvider.getExtensionId(),
      extensionVersion: this.platformAuthProvider.getExtensionVersion(),
      matsBrokerVersion: mats.broker_version,
      matsAccountJoinOnStart: mats.account_join_on_start,
      matsAccountJoinOnEnd: mats.account_join_on_end,
      matsDeviceJoin: mats.device_join,
      matsPromptBehavior: mats.prompt_behavior,
      matsApiErrorCode: mats.api_error_code,
      matsUiVisible: mats.ui_visible,
      matsSilentCode: mats.silent_code,
      matsSilentBiSubCode: mats.silent_bi_sub_code,
      matsSilentMessage: mats.silent_message,
      matsSilentStatus: mats.silent_status,
      matsHttpStatus: mats.http_status,
      matsHttpEventCount: mats.http_event_count
    }, this.correlationId);
    return mats;
  }
  /**
   * Gets MATS telemetry from native response
   * @param response
   * @returns
   */
  getMATSFromResponse(matsResponse) {
    if (matsResponse) {
      try {
        return JSON.parse(matsResponse);
      } catch (e) {
        this.logger.error("0b3l57", this.correlationId);
      }
    }
    return null;
  }
  /**
   * Returns whether or not response came from native cache
   * @param response
   * @returns
   */
  isResponseFromCache(mats) {
    if (typeof mats.is_cached === "undefined") {
      this.logger.verbose("1okqev", this.correlationId);
      return false;
    }
    return !!mats.is_cached;
  }
  /**
   * Translates developer provided request object into NativeRequest object
   * @param request
   */
  async initializePlatformRequest(request) {
    this.logger.trace("1xdm2a", this.correlationId);
    const canonicalAuthority = await this.getCanonicalAuthority(request);
    const configClaims = request.skipBrokerClaims && !!request.embeddedClientId ? void 0 : this.config.auth.clientCapabilities;
    const { scopes, claims, extraParametersNoCache, dpopNonce } = request;
    const scopeSet = new ScopeSet(scopes || [], this.correlationId);
    scopeSet.appendScopes(Constants_exports.OIDC_DEFAULT_SCOPES);
    const mergedClaims = RequestParameterBuilder_exports.buildMergedClaims(claims, configClaims?.length ? configClaims : void 0);
    const hasAttributeTokens = !!request.attributeTokens?.length;
    this.performanceClient?.addFields({
      hasAttributeTokens
    }, this.correlationId);
    const validatedRequest = {
      claims: mergedClaims,
      accountId: this.accountId,
      clientId: this.config.auth.clientId,
      authority: canonicalAuthority.urlString,
      scope: scopeSet.printScopes(),
      redirectUri: getRedirectUri(request.redirectUri, this.config.auth.redirectUri, this.logger, this.correlationId),
      prompt: this.getPrompt(request.prompt),
      correlationId: this.correlationId,
      isSts: false,
      tokenType: request.authenticationScheme,
      windowTitleSubstring: document.title,
      nonce: request.nonce,
      state: request.state,
      loginHint: request.loginHint,
      extraParameters: __spreadValues(__spreadValues({}, request.extraParameters), request.resource && { resource: request.resource }),
      extendedExpiryToken: false,
      keyId: request.popKid,
      resourceRequestMethod: request.resourceRequestMethod,
      resourceRequestUri: request.resourceRequestUri,
      shrClaims: request.shrClaims,
      shrNonce: request.shrNonce,
      extraParametersNoCache: createPlatformAuthExtraParametersNoCache(extraParametersNoCache, isProofOfPossessionTokenType(request.authenticationScheme), request.resourceRequestMethod, request.resourceRequestUri, dpopNonce)
    };
    if (hasAttributeTokens) {
      validatedRequest.attributeTokens = CacheHelpers_exports.serializeAttributeTokens(request.attributeTokens);
    }
    if (validatedRequest.signPopToken && !!request.popKid) {
      throw createBrowserAuthError(invalidPopTokenRequest, this.correlationId);
    }
    this.handleExtraBrokerParams(validatedRequest, request.embeddedClientId);
    validatedRequest.extraParameters = validatedRequest.extraParameters || {};
    validatedRequest.extraParameters.telemetry = PlatformAuthConstants.MATS_TELEMETRY;
    if (request.authenticationScheme === Constants_exports.AuthenticationScheme.POP) {
      const shrParameters = {
        resourceRequestUri: request.resourceRequestUri,
        resourceRequestMethod: request.resourceRequestMethod,
        shrClaims: request.shrClaims,
        shrNonce: request.shrNonce,
        correlationId: this.correlationId
      };
      const popTokenGenerator = new PopTokenGenerator(this.browserCrypto, this.tokenBindingKeyManager, this.performanceClient);
      let reqCnfData;
      if (!validatedRequest.keyId) {
        const generatedReqCnfData = await invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PerformanceEvents_exports.PopTokenGenerateCnf, this.logger, this.performanceClient, this.correlationId)(shrParameters, this.logger);
        reqCnfData = generatedReqCnfData.reqCnfString;
        validatedRequest.keyId = generatedReqCnfData.kid;
        validatedRequest.signPopToken = true;
      } else {
        reqCnfData = this.browserCrypto.base64UrlEncode(JSON.stringify({ kid: validatedRequest.keyId }));
        validatedRequest.signPopToken = false;
      }
      validatedRequest.reqCnf = reqCnfData;
    }
    this.addRequestSKUs(validatedRequest);
    return validatedRequest;
  }
  async getCanonicalAuthority(request) {
    const requestAuthority = request.authority || this.config.auth.authority;
    const { azureCloudOptions, account } = request;
    if (account) {
      await getDiscoveredAuthority(
        this.config,
        this.correlationId,
        this.performanceClient,
        this.browserStorage,
        this.logger,
        requestAuthority,
        azureCloudOptions,
        void 0,
        // requestExtraQueryParameters
        account
      );
    }
    const canonicalAuthority = new UrlString(requestAuthority, this.correlationId);
    canonicalAuthority.validateAsUri();
    return canonicalAuthority;
  }
  getPrompt(prompt) {
    switch (this.apiId) {
      case ApiId.ssoSilent:
      case ApiId.acquireTokenSilent_silentFlow:
        this.logger.trace("12n1y2", this.correlationId);
        return Constants_exports.PromptValue.NONE;
    }
    if (!prompt) {
      this.logger.trace("0uid1p", this.correlationId);
      return void 0;
    }
    switch (prompt) {
      case Constants_exports.PromptValue.NONE:
      case Constants_exports.PromptValue.CONSENT:
      case Constants_exports.PromptValue.LOGIN:
        this.logger.trace("0i0hco", this.correlationId);
        return prompt;
      default:
        this.logger.trace(`0w3tpw ${prompt}`, this.correlationId);
        throw createBrowserAuthError(nativePromptNotSupported, this.correlationId);
    }
  }
  /**
   * Handles extra broker request parameters
   * @param request {PlatformAuthRequest}
   * @private
   */
  handleExtraBrokerParams(request, embeddedClientId) {
    var _a, _b, _c;
    const hasExtraBrokerParams = request.extraParameters && request.extraParameters.hasOwnProperty(AADServerParamKeys_exports.BROKER_CLIENT_ID) && request.extraParameters.hasOwnProperty(AADServerParamKeys_exports.BROKER_REDIRECT_URI) && request.extraParameters.hasOwnProperty(AADServerParamKeys_exports.CLIENT_ID);
    if (!embeddedClientId && !hasExtraBrokerParams) {
      return;
    }
    let child_client_id = "";
    const child_redirect_uri = request.redirectUri;
    if (embeddedClientId) {
      request.redirectUri = this.config.auth.redirectUri;
      child_client_id = embeddedClientId;
    } else if (request.extraParameters) {
      request.redirectUri = request.extraParameters[AADServerParamKeys_exports.BROKER_REDIRECT_URI];
      child_client_id = request.extraParameters[AADServerParamKeys_exports.CLIENT_ID];
    }
    const _d = request.extraParameters || {}, {
      [_a = AADServerParamKeys_exports.BROKER_CLIENT_ID]: _brkClientId,
      [_b = AADServerParamKeys_exports.BROKER_REDIRECT_URI]: _brkRedirectUri,
      [_c = AADServerParamKeys_exports.CLIENT_ID]: _clientId
    } = _d, remainingExtraParameters = __objRest(_d, [
      __restKey(_a),
      __restKey(_b),
      __restKey(_c)
    ]);
    request.extraParameters = __spreadProps(__spreadValues({}, remainingExtraParameters), {
      child_client_id,
      child_redirect_uri
    });
    this.performanceClient?.addFields({
      embeddedClientId: child_client_id,
      embeddedRedirectUri: child_redirect_uri
    }, this.correlationId);
  }
};

// node_modules/@azure/msal-browser/dist/protocol/Authorize.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var clientDataAccountTypeMapping = /* @__PURE__ */ new Map([
  ["e", "AAD"],
  ["m", "MSA"]
]);
function parseClientData(clientdata) {
  if (!clientdata) {
    return null;
  }
  try {
    const shouldDecode = /%(?:[0-9A-Fa-f]{2})/.test(clientdata);
    const decoded = shouldDecode ? decodeURIComponent(clientdata) : clientdata;
    const parts = decoded.split("|");
    if (parts.length < 5) {
      return null;
    }
    return {
      accountType: clientDataAccountTypeMapping.get(parts[0]?.trim() || "") || "",
      error: parts[1]?.trim() || "",
      subError: parts[2]?.trim() || "",
      cloudInstance: parts[3]?.trim() || "",
      callerDataBoundary: parts[4]?.trim() || ""
    };
  } catch {
    return null;
  }
}
function instrumentClientData(response, correlationId, performanceClient) {
  const parsed = parseClientData(response.clientdata);
  parsed?.accountType && performanceClient.addFields({ accountType: parsed.accountType }, correlationId);
  parsed?.error && performanceClient.addFields({ serverErrorNo: parsed.error }, correlationId);
  parsed?.subError && performanceClient.addFields({ serverSubErrorNo: parsed.subError }, correlationId);
}
async function getStandardParameters(config, authority, request, logger, performanceClient) {
  const parameters = Authorize_exports.getStandardAuthorizeRequestParameters(__spreadProps(__spreadValues({}, config.auth), { authority }), request, logger, performanceClient);
  RequestParameterBuilder_exports.addLibraryInfo(parameters, {
    sku: BrowserConstants.MSAL_SKU,
    version: version2,
    os: "",
    cpu: ""
  });
  if (config.system.protocolMode !== ProtocolMode.OIDC) {
    RequestParameterBuilder_exports.addApplicationTelemetry(parameters, config.telemetry.application);
  }
  if (request.platformBroker) {
    RequestParameterBuilder_exports.addNativeBroker(parameters);
    performanceClient.addFields({
      isPlatformAuthorizeRequest: true
    }, request.correlationId);
    if (request.authenticationScheme === Constants_exports.AuthenticationScheme.POP && request.reqCnf) {
      RequestParameterBuilder_exports.addPopToken(parameters, request.reqCnf);
    }
  }
  if (request.authenticationScheme === Constants_exports.AuthenticationScheme.DPOP && request.dpopJkt) {
    parameters.set(AADServerParamKeys_exports.DPOP_JKT, request.dpopJkt);
  }
  RequestParameterBuilder_exports.instrumentBrokerParams(parameters, request.correlationId, performanceClient);
  return parameters;
}
async function getAuthCodeRequestUrl(config, authority, request, logger, performanceClient) {
  if (!request.codeChallenge) {
    throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.pkceParamsMissing, request.correlationId);
  }
  const parameters = await invokeAsync(getStandardParameters, GetStandardParams, logger, performanceClient, request.correlationId)(config, authority, request, logger, performanceClient);
  RequestParameterBuilder_exports.addResponseType(parameters, Constants_exports.OAuthResponseType.CODE);
  RequestParameterBuilder_exports.addCodeChallengeParams(parameters, request.codeChallenge, Constants_exports.S256_CODE_CHALLENGE_METHOD);
  RequestParameterBuilder_exports.addExtraParameters(parameters, __spreadValues(__spreadValues({}, request.extraQueryParameters), request.extraParameters));
  return Authorize_exports.getAuthorizeUrl(authority, parameters);
}
async function getEARFormData(config, authority, request, logger, performanceClient) {
  if (!request.earJwk) {
    throw createBrowserAuthError(earJwkEmpty, request.correlationId);
  }
  const parameters = await getStandardParameters(config, authority, request, logger, performanceClient);
  RequestParameterBuilder_exports.addResponseType(parameters, Constants_exports.OAuthResponseType.IDTOKEN_TOKEN_REFRESHTOKEN);
  RequestParameterBuilder_exports.addEARParameters(parameters, request.earJwk);
  RequestParameterBuilder_exports.addCodeChallengeParams(parameters, request.codeChallenge, Constants_exports.S256_CODE_CHALLENGE_METHOD);
  RequestParameterBuilder_exports.addExtraParameters(parameters, __spreadValues({}, request.extraParameters));
  const queryParams = /* @__PURE__ */ new Map();
  RequestParameterBuilder_exports.addExtraParameters(queryParams, request.extraQueryParameters || {});
  RequestParameterBuilder_exports.addCorrelationId(queryParams, request.correlationId);
  const action = Authorize_exports.getAuthorizeUrl(authority, queryParams);
  return { action, fields: Object.fromEntries(parameters) };
}
async function getEARForm(frame, config, authority, request, logger, performanceClient) {
  const { action, fields } = await getEARFormData(config, authority, request, logger, performanceClient);
  return createForm(frame, action, fields);
}
async function getCodeFormData(config, authority, request, logger, performanceClient) {
  const parameters = await getStandardParameters(config, authority, request, logger, performanceClient);
  RequestParameterBuilder_exports.addResponseType(parameters, Constants_exports.OAuthResponseType.CODE);
  RequestParameterBuilder_exports.addCodeChallengeParams(parameters, request.codeChallenge, request.codeChallengeMethod || Constants_exports.S256_CODE_CHALLENGE_METHOD);
  RequestParameterBuilder_exports.addExtraParameters(parameters, __spreadValues({}, request.extraParameters));
  const queryParams = /* @__PURE__ */ new Map();
  RequestParameterBuilder_exports.addExtraParameters(queryParams, request.extraQueryParameters || {});
  RequestParameterBuilder_exports.addCorrelationId(queryParams, request.correlationId);
  const action = Authorize_exports.getAuthorizeUrl(authority, queryParams);
  return { action, fields: Object.fromEntries(parameters) };
}
async function getCodeForm(frame, config, authority, request, logger, performanceClient) {
  const { action, fields } = await getCodeFormData(config, authority, request, logger, performanceClient);
  return createForm(frame, action, fields);
}
function createForm(frame, action, fields) {
  const form = frame.createElement("form");
  form.method = "post";
  form.action = action;
  Object.keys(fields).forEach((name3) => {
    const input = frame.createElement("input");
    input.hidden = true;
    input.name = name3;
    input.value = fields[name3];
    form.appendChild(input);
  });
  frame.body.appendChild(form);
  return form;
}
async function handleResponsePlatformBroker(request, accountId, apiId, config, browserStorage, nativeStorage, eventHandler, logger, performanceClient, platformAuthProvider) {
  logger.verbose("11qcow", request.correlationId);
  if (!platformAuthProvider) {
    throw createBrowserAuthError(nativeConnectionNotEstablished, request.correlationId);
  }
  const browserCrypto = new CryptoOps(logger, performanceClient);
  const nativeInteractionClient = new PlatformAuthInteractionClient(config, browserStorage, browserCrypto, logger, eventHandler, config.system.navigationClient, apiId, performanceClient, platformAuthProvider, accountId, nativeStorage, request.correlationId);
  const { userRequestState } = ProtocolUtils_exports.parseRequestState(browserCrypto.base64Decode, request.state, request.correlationId);
  return invokeAsync(nativeInteractionClient.acquireToken.bind(nativeInteractionClient), NativeInteractionClientAcquireToken, logger, performanceClient, request.correlationId)(__spreadProps(__spreadValues({}, request), {
    state: userRequestState,
    prompt: void 0
    // Server should handle the prompt, ideally native broker can do this part silently
  }));
}
async function handleResponseCode(request, response, codeVerifier, apiId, config, authClient, browserStorage, nativeStorage, eventHandler, logger, performanceClient, platformAuthProvider) {
  ThrottlingUtils.removeThrottle(browserStorage, config.auth.clientId, request);
  instrumentClientData(response, request.correlationId, performanceClient);
  if (response.accountId) {
    return invokeAsync(handleResponsePlatformBroker, HandleResponsePlatformBroker, logger, performanceClient, request.correlationId)(request, response.accountId, apiId, config, browserStorage, nativeStorage, eventHandler, logger, performanceClient, platformAuthProvider);
  }
  const authCodeRequest = __spreadProps(__spreadValues({}, request), {
    code: response.code || "",
    codeVerifier
  });
  const interactionHandler = new InteractionHandler(authClient, browserStorage, authCodeRequest, logger, performanceClient);
  const result = await invokeAsync(interactionHandler.handleCodeResponse.bind(interactionHandler), HandleCodeResponse, logger, performanceClient, request.correlationId)(response, request, apiId);
  return result;
}
async function handleResponseEAR(request, response, apiId, config, authority, browserStorage, nativeStorage, eventHandler, logger, performanceClient, platformAuthProvider) {
  ThrottlingUtils.removeThrottle(browserStorage, config.auth.clientId, request);
  instrumentClientData(response, request.correlationId, performanceClient);
  Authorize_exports.validateAuthorizationResponse(response, request.state, request.correlationId);
  if (!response.ear_jwe) {
    throw createBrowserAuthError(earJweEmpty, request.correlationId);
  }
  if (!request.earJwk) {
    throw createBrowserAuthError(earJwkEmpty, request.correlationId);
  }
  const decryptedData = JSON.parse(await invokeAsync(decryptEarResponse, DecryptEarResponse, logger, performanceClient, request.correlationId)(request.earJwk, response.ear_jwe));
  if (decryptedData.accountId) {
    return invokeAsync(handleResponsePlatformBroker, HandleResponsePlatformBroker, logger, performanceClient, request.correlationId)(request, decryptedData.accountId, apiId, config, browserStorage, nativeStorage, eventHandler, logger, performanceClient, platformAuthProvider);
  }
  const responseHandler = new ResponseHandler(config.auth.clientId, browserStorage, new CryptoOps(logger, performanceClient), logger, performanceClient, null, null, new TokenBindingKeyManager(logger, performanceClient));
  responseHandler.validateTokenResponse(decryptedData, request.correlationId);
  const additionalData = {
    code: "",
    state: request.state,
    nonce: request.nonce,
    client_info: decryptedData.client_info,
    cloud_graph_host_name: decryptedData.cloud_graph_host_name,
    cloud_instance_host_name: decryptedData.cloud_instance_host_name,
    cloud_instance_name: decryptedData.cloud_instance_name,
    msgraph_host: decryptedData.msgraph_host
  };
  return await invokeAsync(responseHandler.handleServerTokenResponse.bind(responseHandler), PerformanceEvents_exports.HandleServerTokenResponse, logger, performanceClient, request.correlationId)(decryptedData, authority, TimeUtils_exports.nowSeconds(), request, apiId, additionalData, void 0, void 0, void 0, void 0);
}

// node_modules/@azure/msal-browser/dist/crypto/PkceGenerator.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var RANDOM_BYTE_ARR_LENGTH = 32;
async function generatePkceCodes(performanceClient, logger, correlationId) {
  const codeVerifier = invoke(generateCodeVerifier, GenerateCodeVerifier, logger, performanceClient, correlationId)(performanceClient, logger, correlationId);
  const codeChallenge = await invokeAsync(generateCodeChallengeFromVerifier, GenerateCodeChallengeFromVerifier, logger, performanceClient, correlationId)(codeVerifier, performanceClient, logger, correlationId);
  return {
    verifier: codeVerifier,
    challenge: codeChallenge
  };
}
function generateCodeVerifier(performanceClient, logger, correlationId) {
  try {
    const buffer = new Uint8Array(RANDOM_BYTE_ARR_LENGTH);
    invoke(getRandomValues, GetRandomValues, logger, performanceClient, correlationId)(buffer);
    const pkceCodeVerifierB64 = urlEncodeArr(buffer);
    return pkceCodeVerifierB64;
  } catch (e) {
    throw createBrowserAuthError(pkceNotCreated, correlationId);
  }
}
async function generateCodeChallengeFromVerifier(pkceCodeVerifier, performanceClient, logger, correlationId) {
  try {
    const pkceHashedCodeVerifier = await invokeAsync(sha256Digest, Sha256Digest, logger, performanceClient, correlationId)(pkceCodeVerifier);
    return urlEncodeArr(new Uint8Array(pkceHashedCodeVerifier));
  } catch (e) {
    throw createBrowserAuthError(pkceNotCreated, correlationId);
  }
}

// node_modules/@azure/msal-browser/dist/navigation/NavigationClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var NavigationClient = class _NavigationClient {
  /**
   * Navigates to other pages within the same web application
   * @param url
   * @param options
   */
  navigateInternal(url, options) {
    return _NavigationClient.defaultNavigateWindow(url, options);
  }
  /**
   * Navigates to other pages outside the web application i.e. the Identity Provider
   * @param url
   * @param options
   */
  navigateExternal(url, options) {
    return _NavigationClient.defaultNavigateWindow(url, options);
  }
  /**
   * Default navigation implementation invoked by the internal and external functions
   * @param url
   * @param options
   */
  static defaultNavigateWindow(url, options) {
    if (options.noHistory) {
      window.location.replace(url);
    } else {
      window.location.assign(url);
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(createBrowserAuthError(timedOut, "", "failed_to_redirect"));
      }, options.timeout);
    });
  }
};

// node_modules/@azure/msal-browser/dist/network/FetchClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var MAX_FETCH_POST_RETRIES = 1;
var RETRY_DELAY_MS = 100;
var FetchClient = class {
  /**
   * Fetch Client for REST endpoints - Get request
   * @param url
   * @param headers
   * @param body
   */
  async sendGetRequestAsync(url, options) {
    let response;
    let responseHeaders = {};
    let responseStatus = 0;
    const reqHeaders = getFetchHeaders(options);
    try {
      response = await fetch(url, {
        method: HTTP_REQUEST_TYPE.GET,
        headers: reqHeaders
      });
    } catch (e) {
      throw createNetworkError(createBrowserAuthError(window.navigator.onLine ? getRequestFailed : noNetworkConnectivity2, ""), void 0, void 0, e);
    }
    responseHeaders = getHeaderDict(response.headers);
    try {
      responseStatus = response.status;
      return {
        headers: responseHeaders,
        body: await response.json(),
        status: responseStatus
      };
    } catch (e) {
      throw createNetworkError(createBrowserAuthError(failedToParseResponse, ""), responseStatus, responseHeaders, e);
    }
  }
  /**
   * Fetch Client for REST endpoints - Post request
   * @param url
   * @param headers
   * @param body
   */
  async sendPostRequestAsync(url, options) {
    const reqBody = options && options.body || "";
    const reqHeaders = getFetchHeaders(options);
    const correlationId = options?.correlationId;
    const performanceClient = options?.performanceClient;
    let response;
    let lastError;
    for (let attempt = 1; attempt <= MAX_FETCH_POST_RETRIES + 1; attempt++) {
      try {
        response = await fetch(url, {
          method: HTTP_REQUEST_TYPE.POST,
          headers: reqHeaders,
          body: reqBody
        });
        break;
      } catch (e) {
        lastError = e;
        if (!shouldRetryPostFetchError(lastError, attempt)) {
          throw createNetworkError(createBrowserAuthError(window.navigator.onLine !== false ? postRequestFailed2 : noNetworkConnectivity2, correlationId || ""), void 0, void 0, lastError);
        }
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
        if (correlationId) {
          performanceClient?.incrementFields({ fetchRetryCount: 1 }, correlationId);
        }
      }
    }
    if (!response) {
      throw createNetworkError(createBrowserAuthError(window.navigator.onLine !== false ? postRequestFailed2 : noNetworkConnectivity2, correlationId || ""), void 0, void 0, lastError);
    }
    let responseStatus = 0;
    let responseHeaders = {};
    responseHeaders = getHeaderDict(response.headers);
    try {
      responseStatus = response.status;
      return {
        headers: responseHeaders,
        body: await response.json(),
        status: responseStatus
      };
    } catch (e) {
      throw createNetworkError(createBrowserAuthError(failedToParseResponse, correlationId || ""), responseStatus, responseHeaders, e);
    }
  }
};
function shouldRetryPostFetchError(error, attempt) {
  return attempt <= MAX_FETCH_POST_RETRIES && window.navigator.onLine !== false && error.name !== "AbortError";
}
function getFetchHeaders(options) {
  try {
    const headers = new Headers();
    if (!(options && options.headers)) {
      return headers;
    }
    const optionsHeaders = options.headers;
    Object.entries(optionsHeaders).forEach(([key, value]) => {
      headers.append(key, value);
    });
    return headers;
  } catch (e) {
    throw createNetworkError(createBrowserAuthError(failedToBuildHeaders, ""), void 0, void 0, e);
  }
}
function getHeaderDict(headers) {
  try {
    const headerDict = {};
    headers.forEach((value, key) => {
      headerDict[key] = value;
    });
    return headerDict;
  } catch (e) {
    throw createBrowserAuthError(failedToParseHeaders, "");
  }
}

// node_modules/@azure/msal-browser/dist/config/Configuration.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var DEFAULT_POPUP_TIMEOUT_MS = 6e4;
var DEFAULT_IFRAME_TIMEOUT_MS = 1e4;
var DEFAULT_REDIRECT_TIMEOUT_MS = 3e4;
var DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS = 2e3;
function buildConfiguration({ auth: userInputAuth, cache: userInputCache, system: userInputSystem, experimental: userInputExperimental, telemetry: userInputTelemetry }, isBrowserEnvironment) {
  const DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: `${Constants_exports.DEFAULT_AUTHORITY}`,
    knownAuthorities: [],
    cloudDiscoveryMetadata: "",
    authorityMetadata: "",
    redirectUri: typeof window !== "undefined" && window.location ? window.location.href.split("?")[0].split("#")[0] : "",
    postLogoutRedirectUri: "",
    popupRelayUri: "",
    clientCapabilities: [],
    OIDCOptions: {
      responseMode: Constants_exports.ResponseMode.FRAGMENT,
      defaultScopes: [
        Constants_exports.OPENID_SCOPE,
        Constants_exports.PROFILE_SCOPE,
        Constants_exports.OFFLINE_ACCESS_SCOPE
      ]
    },
    azureCloudOptions: {
      azureCloudInstance: AzureCloudInstance.None,
      tenant: ""
    },
    instanceAware: false,
    isMcp: false,
    verifySSO: false
  };
  const DEFAULT_CACHE_OPTIONS = {
    cacheLocation: BrowserCacheLocation.SessionStorage,
    cacheRetentionDays: 5
  };
  const DEFAULT_LOGGER_OPTIONS = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    loggerCallback: () => {
    },
    logLevel: LogLevel.Info,
    piiLoggingEnabled: false
  };
  const DEFAULT_BROWSER_SYSTEM_OPTIONS = __spreadProps(__spreadValues({}, DEFAULT_SYSTEM_OPTIONS), {
    loggerOptions: DEFAULT_LOGGER_OPTIONS,
    networkClient: isBrowserEnvironment ? new FetchClient() : StubbedNetworkModule,
    navigationClient: new NavigationClient(),
    popupBridgeTimeout: userInputSystem?.popupBridgeTimeout || DEFAULT_POPUP_TIMEOUT_MS,
    iframeBridgeTimeout: userInputSystem?.iframeBridgeTimeout || DEFAULT_IFRAME_TIMEOUT_MS,
    redirectNavigationTimeout: DEFAULT_REDIRECT_TIMEOUT_MS,
    allowRedirectInIframe: false,
    navigatePopups: true,
    allowPlatformBroker: false,
    nativeBrokerHandshakeTimeout: userInputSystem?.nativeBrokerHandshakeTimeout || DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS,
    protocolMode: ProtocolMode.AAD,
    serverTelemetryEnabled: false
  });
  const providedSystemOptions = __spreadProps(__spreadValues(__spreadValues({}, DEFAULT_BROWSER_SYSTEM_OPTIONS), userInputSystem), {
    loggerOptions: userInputSystem?.loggerOptions || DEFAULT_LOGGER_OPTIONS
  });
  const DEFAULT_TELEMETRY_OPTIONS2 = {
    application: {
      appName: "",
      appVersion: ""
    },
    client: new StubPerformanceClient()
  };
  const DEFAULT_EXPERIMENTAL_OPTIONS = {
    iframeTimeoutTelemetry: false,
    allowPlatformBrokerWithDOM: false
  };
  if (userInputSystem?.protocolMode !== ProtocolMode.OIDC && userInputAuth?.OIDCOptions) {
    const logger = new Logger(providedSystemOptions.loggerOptions, name2, version2);
    logger.warning(JSON.stringify(createClientConfigurationError(ClientConfigurationErrorCodes_exports.cannotSetOIDCOptions, "")), "");
  }
  if (userInputSystem?.protocolMode && userInputSystem.protocolMode === ProtocolMode.OIDC && providedSystemOptions?.allowPlatformBroker) {
    throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.cannotAllowPlatformBroker, "");
  }
  const overlayedConfig = {
    auth: __spreadProps(__spreadValues(__spreadValues({}, DEFAULT_AUTH_OPTIONS), userInputAuth), {
      OIDCOptions: __spreadValues(__spreadValues({}, DEFAULT_AUTH_OPTIONS.OIDCOptions), userInputAuth?.OIDCOptions)
    }),
    cache: __spreadValues(__spreadValues({}, DEFAULT_CACHE_OPTIONS), userInputCache),
    system: providedSystemOptions,
    experimental: __spreadValues(__spreadValues({}, DEFAULT_EXPERIMENTAL_OPTIONS), userInputExperimental),
    telemetry: __spreadValues(__spreadValues({}, DEFAULT_TELEMETRY_OPTIONS2), userInputTelemetry)
  };
  return overlayedConfig;
}

// node_modules/@azure/msal-browser/dist/broker/nativeBroker/PlatformAuthExtensionHandler.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var PlatformAuthExtensionHandler = class _PlatformAuthExtensionHandler {
  constructor(logger, handshakeTimeoutMs, performanceClient, extensionId) {
    this.logger = logger;
    this.handshakeTimeoutMs = handshakeTimeoutMs;
    this.extensionId = extensionId;
    this.resolvers = /* @__PURE__ */ new Map();
    this.handshakeResolvers = /* @__PURE__ */ new Map();
    this.messageChannel = new MessageChannel();
    this.windowListener = this.onWindowMessage.bind(this);
    this.performanceClient = performanceClient;
    this.handshakeEvent = this.performanceClient.startMeasurement(NativeMessageHandlerHandshake);
    this.platformAuthType = PlatformAuthConstants.PLATFORM_EXTENSION_PROVIDER;
  }
  /**
   * Sends a given message to the extension and resolves with the extension response
   * @param request
   */
  async sendMessage(request) {
    this.logger.trace(`0on4p2 ${this.platformAuthType}`, request.correlationId);
    const extensionRequest = __spreadValues({}, request);
    delete extensionRequest.resourceRequestMethod;
    delete extensionRequest.resourceRequestUri;
    const messageBody = {
      method: NativeExtensionMethod.GetToken,
      request: extensionRequest
    };
    const req = {
      channel: PlatformAuthConstants.CHANNEL_ID,
      extensionId: this.extensionId,
      responseId: createNewGuid(),
      body: messageBody
    };
    this.logger.trace(`1qadfi ${this.platformAuthType}`, request.correlationId);
    this.logger.tracePii(`1xm533 ${this.platformAuthType} ${JSON.stringify(req)}`, request.correlationId);
    this.messageChannel.port1.postMessage(req);
    const response = await new Promise((resolve, reject) => {
      this.resolvers.set(req.responseId, { resolve, reject });
    });
    const validatedResponse = this.validatePlatformBrokerResponse(response);
    return validatedResponse;
  }
  /**
   * Returns an instance of the MessageHandler that has successfully established a connection with an extension
   * @param {Logger} logger
   * @param {number} handshakeTimeoutMs
   * @param {IPerformanceClient} performanceClient
   * @param {ICrypto} crypto
   */
  static async createProvider(logger, handshakeTimeoutMs, performanceClient, correlationId) {
    logger.trace("15zfnw", correlationId);
    try {
      const preferredProvider = new _PlatformAuthExtensionHandler(logger, handshakeTimeoutMs, performanceClient, PlatformAuthConstants.PREFERRED_EXTENSION_ID);
      await preferredProvider.sendHandshakeRequest(correlationId);
      return preferredProvider;
    } catch (e) {
      const backupProvider = new _PlatformAuthExtensionHandler(logger, handshakeTimeoutMs, performanceClient);
      await backupProvider.sendHandshakeRequest(correlationId);
      return backupProvider;
    }
  }
  /**
   * Send handshake request helper.
   */
  async sendHandshakeRequest(correlationId) {
    this.logger.trace(`1dpg9o ${this.platformAuthType}`, correlationId);
    window.addEventListener("message", this.windowListener, false);
    const req = {
      channel: PlatformAuthConstants.CHANNEL_ID,
      extensionId: this.extensionId,
      responseId: createNewGuid(),
      body: {
        method: NativeExtensionMethod.HandshakeRequest
      }
    };
    this.handshakeEvent.add({
      extensionId: this.extensionId,
      extensionHandshakeTimeoutMs: this.handshakeTimeoutMs
    });
    this.messageChannel.port1.onmessage = (event) => {
      this.onChannelMessage(event);
    };
    window.postMessage(req, window.origin, [this.messageChannel.port2]);
    return new Promise((resolve, reject) => {
      this.handshakeResolvers.set(req.responseId, { resolve, reject });
      this.timeoutId = window.setTimeout(() => {
        window.removeEventListener("message", this.windowListener, false);
        this.messageChannel.port1.close();
        this.messageChannel.port2.close();
        this.handshakeEvent.end({
          extensionHandshakeTimedOut: true,
          success: false
        });
        reject(createBrowserAuthError(nativeHandshakeTimeout, ""));
        this.handshakeResolvers.delete(req.responseId);
      }, this.handshakeTimeoutMs);
    });
  }
  /**
   * Invoked when a message is posted to the window. If a handshake request is received it means the extension is not installed.
   * @param event
   */
  onWindowMessage(event) {
    const correlationId = createGuid();
    this.logger.trace(`0jpn5u ${this.platformAuthType}`, correlationId);
    if (event.source !== window) {
      return;
    }
    const request = event.data;
    if (!request.channel || request.channel !== PlatformAuthConstants.CHANNEL_ID) {
      return;
    }
    if (request.extensionId && request.extensionId !== this.extensionId) {
      return;
    }
    if (request.body.method === NativeExtensionMethod.HandshakeRequest) {
      const handshakeResolver = this.handshakeResolvers.get(request.responseId);
      if (!handshakeResolver) {
        this.logger.trace(`07buhm ${this.platformAuthType} ${request.responseId}`, correlationId);
        return;
      }
      this.logger.verbose(request.extensionId ? `0xrkug ${request.extensionId}` : "No extension installed", correlationId);
      clearTimeout(this.timeoutId);
      this.messageChannel.port1.close();
      this.messageChannel.port2.close();
      window.removeEventListener("message", this.windowListener, false);
      this.handshakeEvent.end({
        success: false,
        extensionInstalled: false
      });
      handshakeResolver.reject(createBrowserAuthError(nativeExtensionNotInstalled, ""));
    }
  }
  /**
   * Invoked when a message is received from the extension on the MessageChannel port
   * @param event
   */
  onChannelMessage(event) {
    const correlationId = createGuid();
    this.logger.trace(`1py8yf ${this.platformAuthType}`, correlationId);
    const request = event.data;
    const resolver = this.resolvers.get(request.responseId);
    const handshakeResolver = this.handshakeResolvers.get(request.responseId);
    try {
      const method = request.body.method;
      if (method === NativeExtensionMethod.Response) {
        if (!resolver) {
          return;
        }
        const response = request.body.response;
        this.logger.trace(`19hpgm ${this.platformAuthType}`, correlationId);
        this.logger.tracePii(`179a24 ${this.platformAuthType} ${JSON.stringify(response)}`, correlationId);
        if (response.status !== "Success") {
          resolver.reject(createNativeAuthError(response.code, correlationId, response.description, response.ext));
        } else if (response.result) {
          if (response.result["code"] && response.result["description"]) {
            resolver.reject(createNativeAuthError(response.result["code"], correlationId, response.result["description"], response.result["ext"]));
          } else {
            resolver.resolve(response.result);
          }
        } else {
          throw createAuthError(AuthErrorCodes_exports.unexpectedError, correlationId, "Event does not contain result.");
        }
        this.resolvers.delete(request.responseId);
      } else if (method === NativeExtensionMethod.HandshakeResponse) {
        if (!handshakeResolver) {
          this.logger.trace(`082qnt ${this.platformAuthType} ${request.responseId}`, correlationId);
          return;
        }
        clearTimeout(this.timeoutId);
        window.removeEventListener("message", this.windowListener, false);
        this.extensionId = request.extensionId;
        this.extensionVersion = request.body.version;
        this.logger.verbose(`0yf5ib ${this.platformAuthType} ${this.extensionId}`, correlationId);
        this.handshakeEvent.end({
          extensionInstalled: true,
          success: true
        });
        handshakeResolver.resolve();
        this.handshakeResolvers.delete(request.responseId);
      }
    } catch (err) {
      this.logger.error("0xf978", correlationId);
      this.logger.errorPii(`04i99o ${err}`, correlationId);
      this.logger.errorPii(`0xdvsy ${event}`, correlationId);
      if (resolver) {
        resolver.reject(err);
      } else if (handshakeResolver) {
        handshakeResolver.reject(err);
      }
    }
  }
  /**
   * Validates native platform response before processing
   * @param response
   */
  validatePlatformBrokerResponse(response) {
    if (response.hasOwnProperty("access_token") && response.hasOwnProperty("id_token") && response.hasOwnProperty("client_info") && response.hasOwnProperty("account") && response.hasOwnProperty("scope") && response.hasOwnProperty("expires_in")) {
      return response;
    } else {
      throw createAuthError(AuthErrorCodes_exports.unexpectedError, "", "Response missing expected properties.");
    }
  }
  /**
   * Returns the Id for the browser extension this handler is communicating with
   * @returns
   */
  getExtensionId() {
    return this.extensionId;
  }
  /**
   * Returns the version for the browser extension this handler is communicating with
   * @returns
   */
  getExtensionVersion() {
    return this.extensionVersion;
  }
  getExtensionName() {
    return this.getExtensionId() === PlatformAuthConstants.PREFERRED_EXTENSION_ID ? "chrome" : this.getExtensionId()?.length ? "unknown" : void 0;
  }
};

// node_modules/@azure/msal-browser/dist/broker/nativeBroker/PlatformAuthDOMHandler.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var PlatformAuthDOMHandler = class _PlatformAuthDOMHandler {
  constructor(logger, performanceClient, correlationId) {
    this.logger = logger;
    this.performanceClient = performanceClient;
    this.correlationId = correlationId;
    this.platformAuthType = PlatformAuthConstants.PLATFORM_DOM_PROVIDER;
  }
  static async createProvider(logger, performanceClient, correlationId) {
    logger.trace("12mj4a", correlationId);
    if (window.navigator?.platformAuthentication) {
      const supportedContracts = (
        // @ts-ignore
        await window.navigator.platformAuthentication.getSupportedContracts(PlatformAuthConstants.MICROSOFT_ENTRA_BROKERID)
      );
      if (supportedContracts?.includes(PlatformAuthConstants.PLATFORM_DOM_APIS)) {
        logger.trace("1h5q1r", correlationId);
        return new _PlatformAuthDOMHandler(logger, performanceClient, correlationId);
      }
    }
    return void 0;
  }
  /**
   * Returns the Id for the broker extension this handler is communicating with
   * @returns
   */
  getExtensionId() {
    return PlatformAuthConstants.MICROSOFT_ENTRA_BROKERID;
  }
  getExtensionVersion() {
    return "";
  }
  getExtensionName() {
    return PlatformAuthConstants.DOM_API_NAME;
  }
  /**
   * Send token request to platform broker via browser DOM API
   * @param request
   * @returns
   */
  async sendMessage(request) {
    this.logger.trace(`02bcil ${this.platformAuthType}`, request.correlationId);
    try {
      const platformDOMRequest = this.initializePlatformDOMRequest(request);
      const response = (
        // @ts-ignore
        await window.navigator.platformAuthentication.executeGetToken(platformDOMRequest)
      );
      return this.validatePlatformBrokerResponse(response, request.correlationId);
    } catch (e) {
      this.logger.error(`11im7g ${this.platformAuthType}`, request.correlationId);
      throw e;
    }
  }
  initializePlatformDOMRequest(request) {
    this.logger.trace(`15d6yv ${this.platformAuthType}`, request.correlationId);
    const _a = request, { accountId, clientId, authority, scope, redirectUri, correlationId, state, preferBinding, enclave, reqCnf, extraParametersNoCache, extraParameters } = _a, remainingProperties = __objRest(_a, ["accountId", "clientId", "authority", "scope", "redirectUri", "correlationId", "state", "preferBinding", "enclave", "reqCnf", "extraParametersNoCache", "extraParameters"]);
    delete remainingProperties.resourceRequestMethod;
    delete remainingProperties.resourceRequestUri;
    const validExtraParameters = this.getDOMExtraParams(remainingProperties, correlationId);
    const platformDOMRequest = {
      accountId,
      brokerId: this.getExtensionId(),
      authority,
      clientId,
      correlationId: correlationId || this.correlationId,
      extraParameters: __spreadValues(__spreadValues({}, extraParameters), validExtraParameters),
      isSecurityTokenService: false,
      redirectUri,
      scope,
      state,
      preferBinding,
      enclave,
      requestConfirmation: reqCnf,
      extraParametersNoCache
    };
    return platformDOMRequest;
  }
  validatePlatformBrokerResponse(response, correlationId) {
    if (response.hasOwnProperty("isSuccess")) {
      if (response.hasOwnProperty("accessToken") && response.hasOwnProperty("idToken") && response.hasOwnProperty("clientInfo") && response.hasOwnProperty("account") && response.hasOwnProperty("scopes") && response.hasOwnProperty("expiresIn")) {
        this.logger.trace(`0h4vei ${this.platformAuthType}`, correlationId);
        return this.convertToPlatformBrokerResponse(response, correlationId);
      } else if (response.hasOwnProperty("error")) {
        const errorResponse = response;
        if (errorResponse.isSuccess === false && errorResponse.error && errorResponse.error.code) {
          this.logger.trace(`0g92vm ${this.platformAuthType}`, correlationId);
          throw createNativeAuthError(errorResponse.error.code, correlationId, errorResponse.error.description, {
            error: parseInt(errorResponse.error.errorCode),
            protocol_error: errorResponse.error.protocolError,
            status: errorResponse.error.status,
            properties: errorResponse.error.properties
          });
        }
      }
    }
    throw createAuthError(AuthErrorCodes_exports.unexpectedError, correlationId, "Response missing expected properties.");
  }
  convertToPlatformBrokerResponse(response, correlationId) {
    this.logger.trace(`14913t ${this.platformAuthType}`, correlationId);
    const responseProperties = response.properties || {};
    const bindingAttested = this.parseDOMBoolean(responseProperties.binding_attested, "binding_attested", correlationId);
    const nativeResponse = {
      access_token: response.accessToken,
      id_token: response.idToken,
      client_info: response.clientInfo,
      account: response.account,
      expires_in: response.expiresIn,
      scope: response.scopes,
      state: response.state || "",
      properties: responseProperties,
      extendedLifetimeToken: response.extendedLifetimeToken ?? false,
      shr: response.proofOfPossessionPayload,
      token_type: responseProperties.token_type,
      DPoP: responseProperties.dpop_proof,
      binding_attested: bindingAttested
    };
    return nativeResponse;
  }
  parseDOMBoolean(value, propertyName, correlationId) {
    if (value === void 0) {
      return void 0;
    }
    if (value === "true" || value === "false") {
      return value === "true";
    }
    throw createAuthError(AuthErrorCodes_exports.unexpectedError, correlationId, `Platform broker returned invalid ${propertyName} value.`);
  }
  getDOMExtraParams(extraParameters, correlationId) {
    try {
      const stringifiedProperties = {};
      for (const [key, value] of Object.entries(extraParameters)) {
        if (!value) {
          continue;
        }
        if (typeof value === "object") {
          stringifiedProperties[key] = JSON.stringify(value);
        } else {
          stringifiedProperties[key] = String(value);
        }
      }
      return stringifiedProperties;
    } catch (e) {
      this.logger.error(`0eu9o3 ${this.platformAuthType}`, correlationId);
      this.logger.errorPii(`17rpl5 ${this.platformAuthType} ${e}`, correlationId);
      return {};
    }
  }
};

// node_modules/@azure/msal-browser/dist/broker/nativeBroker/PlatformAuthProvider.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
async function isPlatformBrokerAvailable(domConfig, loggerOptions, perfClient, correlationId) {
  const logger = new Logger(loggerOptions || {}, name2, version2);
  const performanceClient = perfClient || new StubPerformanceClient();
  if (typeof window === "undefined") {
    logger.trace("082ed3", correlationId || createNewGuid());
    return false;
  }
  return !!await getPlatformAuthProvider(logger, performanceClient, correlationId || createNewGuid(), void 0, domConfig);
}
async function getPlatformAuthProvider(logger, performanceClient, correlationId, nativeBrokerHandshakeTimeout, enablePlatformBrokerDOMSupport) {
  logger.trace("134j0v", correlationId);
  logger.trace(`04c81g ${enablePlatformBrokerDOMSupport}`, correlationId);
  let platformAuthProvider;
  try {
    if (enablePlatformBrokerDOMSupport) {
      platformAuthProvider = await PlatformAuthDOMHandler.createProvider(logger, performanceClient, correlationId);
    }
    if (!platformAuthProvider) {
      logger.trace("0l3na8", correlationId);
      platformAuthProvider = await PlatformAuthExtensionHandler.createProvider(logger, nativeBrokerHandshakeTimeout || DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS, performanceClient, correlationId);
    }
  } catch (e) {
    logger.trace("0icbd7", e);
  }
  return platformAuthProvider;
}
function isPlatformAuthAllowed(config, logger, correlationId, platformAuthProvider, authenticationScheme) {
  logger.trace("0uko3r", correlationId);
  if (!config.system.allowPlatformBroker && config.experimental.allowPlatformBrokerWithDOM) {
    throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.invalidPlatformBrokerConfiguration, "");
  }
  if (!config.system.allowPlatformBroker) {
    logger.trace("04hozs", correlationId);
    return false;
  }
  if (!platformAuthProvider) {
    logger.trace("0kvv1r", correlationId);
    return false;
  }
  if (authenticationScheme) {
    switch (authenticationScheme) {
      case Constants_exports.AuthenticationScheme.BEARER:
      case Constants_exports.AuthenticationScheme.POP:
        logger.trace("18tev1", correlationId);
        return true;
      default:
        logger.trace("1dd2nh", correlationId);
        return false;
    }
  }
  return true;
}

// node_modules/@azure/msal-browser/dist/interaction_client/PopupClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var PopupClient = class extends StandardInteractionClient {
  constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeStorageImpl, correlationId, platformAuthHandler, waitForPopupResponseHook, tokenBindingKeyManager) {
    super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, correlationId, platformAuthHandler, tokenBindingKeyManager);
    this.nativeStorage = nativeStorageImpl;
    this.eventHandler = eventHandler;
    this.waitForPopupResponseHook = waitForPopupResponseHook;
  }
  /**
   * Acquires tokens by opening a popup window to the /authorize endpoint of the authority
   * @param request
   * @param pkceCodes
   */
  acquireToken(request, pkceCodes) {
    let popupParams = void 0;
    try {
      const popupName = this.generatePopupName(request.scopes || Constants_exports.OIDC_DEFAULT_SCOPES, request.authority || this.config.auth.authority);
      popupParams = {
        popupName,
        popupWindowAttributes: request.popupWindowAttributes || {},
        popupWindowParent: request.popupWindowParent ?? window
      };
      this.performanceClient.addFields({ isAsyncPopup: !this.config.system.navigatePopups }, this.correlationId);
      if (!this.config.system.navigatePopups) {
        this.logger.verbose("162h4u", this.correlationId);
        return this.acquireTokenPopupAsync(request, popupParams, pkceCodes);
      } else {
        const validatedRequest = __spreadProps(__spreadValues({}, request), {
          httpMethod: validateRequestMethod(request, this.config.system.protocolMode)
        });
        this.logger.verbose("1f9ok3", this.correlationId);
        popupParams.popup = this.openSizedPopup("about:blank", popupParams);
        return this.acquireTokenPopupAsync(validatedRequest, popupParams, pkceCodes);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
   * @param logoutRequest
   */
  logout(logoutRequest) {
    try {
      this.logger.verbose("068rup", this.correlationId);
      const validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
      const popupParams = {
        popupName: this.generateLogoutPopupName(validLogoutRequest),
        popupWindowAttributes: logoutRequest?.popupWindowAttributes || {},
        popupWindowParent: logoutRequest?.popupWindowParent ?? window
      };
      const authority = logoutRequest && logoutRequest.authority;
      const mainWindowRedirectUri = logoutRequest && logoutRequest.mainWindowRedirectUri;
      if (!this.config.system.navigatePopups) {
        this.logger.verbose("1phd8u", this.correlationId);
        return this.logoutPopupAsync(validLogoutRequest, popupParams, authority, mainWindowRedirectUri);
      } else {
        this.logger.verbose("1a28da", this.correlationId);
        popupParams.popup = this.openSizedPopup("about:blank", popupParams);
        return this.logoutPopupAsync(validLogoutRequest, popupParams, authority, mainWindowRedirectUri);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Helper which obtains an access_token for your API via opening a popup window in the user's browser
   * @param request
   * @param popupParams
   * @param pkceCodes
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  async acquireTokenPopupAsync(request, popupParams, pkceCodes) {
    this.logger.verbose("1g77pg", this.correlationId);
    const validRequest = await invokeAsync(initializeAuthorizationRequest, StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(request, InteractionType.Popup, this.config, this.browserCrypto, this.browserStorage, this.logger, this.performanceClient, this.correlationId);
    if (popupParams.popup) {
      preconnect(validRequest.authority);
    }
    const isPlatformBroker = isPlatformAuthAllowed(this.config, this.logger, this.correlationId, this.platformAuthProvider, request.authenticationScheme);
    validRequest.platformBroker = isPlatformBroker;
    if (this.config.system.protocolMode === ProtocolMode.EAR) {
      return this.executeEarFlow(validRequest, popupParams, pkceCodes);
    } else {
      return this.executeCodeFlow(validRequest, popupParams, pkceCodes);
    }
  }
  /**
   * Executes auth code + PKCE flow
   * @param request
   * @param popupParams
   * @param pkceCodes
   * @returns
   */
  async executeCodeFlow(request, popupParams, pkceCodes) {
    const correlationId = request.correlationId;
    const serverTelemetryManager = initializeServerTelemetryManager(ApiId.acquireTokenPopup, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled);
    const pkce = pkceCodes || await invokeAsync(generatePkceCodes, GeneratePkceCodes, this.logger, this.performanceClient, correlationId)(this.performanceClient, this.logger, correlationId);
    const tokenBindingParams = await getTokenBindingRequestParams(request, this.tokenBindingKeyManager, this.logger, this.performanceClient);
    const popupRequest = __spreadValues(__spreadProps(__spreadValues({}, request), {
      codeChallenge: pkce.challenge
    }), tokenBindingParams);
    try {
      const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, correlationId)({
        serverTelemetryManager,
        requestAuthority: popupRequest.authority,
        requestAzureCloudOptions: popupRequest.azureCloudOptions,
        requestExtraQueryParameters: popupRequest.extraQueryParameters,
        account: popupRequest.account
      });
      if (popupRequest.httpMethod === Constants_exports.HttpMethod.POST) {
        return await this.executeCodeFlowWithPost(popupRequest, popupParams, authClient, pkce.verifier);
      } else {
        const navigateUrl = await invokeAsync(getAuthCodeRequestUrl, PerformanceEvents_exports.GetAuthCodeUrl, this.logger, this.performanceClient, correlationId)(this.config, authClient.authority, popupRequest, this.logger, this.performanceClient);
        const popupRelayUri = this.config.auth.popupRelayUri;
        const popupNavigateUrl = popupRelayUri ? buildPopupRelayUrl(popupRelayUri, this.getRelayStateId(request.state, correlationId), { method: "GET", url: navigateUrl }, correlationId) : navigateUrl;
        const popupWindow = this.initiateAuthRequest(popupNavigateUrl, popupParams);
        this.eventHandler.emitEvent(EventType.POPUP_OPENED, correlationId, InteractionType.Popup, { popupWindow }, null);
        const responseString = await this.waitForPopupResponse(request, popupWindow, popupParams.popupWindowParent);
        const serverParams = invoke(deserializeResponse, DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(responseString, this.config.auth.OIDCOptions.responseMode, this.logger, this.correlationId);
        return await invokeAsync(handleResponseCode, HandleResponseCode, this.logger, this.performanceClient, correlationId)(popupRequest, serverParams, pkce.verifier, ApiId.acquireTokenPopup, this.config, authClient, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
      }
    } catch (e) {
      popupParams.popup?.close();
      if (e instanceof AuthError) {
        e.correlationId = this.correlationId;
        serverTelemetryManager.cacheFailedRequest(e);
      }
      throw e;
    }
  }
  /**
   * Executes EAR flow
   * @param request
   */
  async executeEarFlow(request, popupParams, pkceCodes) {
    const { correlationId, authority, azureCloudOptions, extraQueryParameters, account } = request;
    const discoveredAuthority = await invokeAsync(getDiscoveredAuthority, StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, correlationId)(this.config, this.correlationId, this.performanceClient, this.browserStorage, this.logger, authority, azureCloudOptions, extraQueryParameters, account);
    const earJwk = await invokeAsync(generateEarKey, GenerateEarKey, this.logger, this.performanceClient, correlationId)();
    const pkce = pkceCodes || await invokeAsync(generatePkceCodes, GeneratePkceCodes, this.logger, this.performanceClient, correlationId)(this.performanceClient, this.logger, correlationId);
    const tokenBindingParams = await getTokenBindingRequestParams(request, this.tokenBindingKeyManager, this.logger, this.performanceClient);
    const popupRequest = __spreadValues(__spreadProps(__spreadValues({}, request), {
      earJwk,
      codeChallenge: pkce.challenge
    }), tokenBindingParams);
    const popupWindow = await this.openPostFormPopup(popupRequest, discoveredAuthority, popupParams, correlationId, true);
    const responseString = await invokeAsync(this.waitForPopupResponse.bind(this), SilentHandlerMonitorIframeForHash, this.logger, this.performanceClient, correlationId)(popupRequest, popupWindow, popupParams.popupWindowParent);
    const serverParams = invoke(deserializeResponse, DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(responseString, this.config.auth.OIDCOptions.responseMode, this.logger, this.correlationId);
    if (!serverParams.ear_jwe && serverParams.code) {
      const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, correlationId)({
        serverTelemetryManager: initializeServerTelemetryManager(ApiId.acquireTokenPopup, this.config.auth.clientId, correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled),
        requestAuthority: request.authority,
        requestAzureCloudOptions: request.azureCloudOptions,
        requestExtraQueryParameters: request.extraQueryParameters,
        account: request.account,
        authority: discoveredAuthority
      });
      return invokeAsync(handleResponseCode, HandleResponseCode, this.logger, this.performanceClient, correlationId)(popupRequest, serverParams, pkce.verifier, ApiId.acquireTokenPopup, this.config, authClient, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
    } else {
      return invokeAsync(handleResponseEAR, HandleResponseEar, this.logger, this.performanceClient, correlationId)(popupRequest, serverParams, ApiId.acquireTokenPopup, this.config, discoveredAuthority, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
    }
  }
  async executeCodeFlowWithPost(request, popupParams, authClient, pkceVerifier) {
    const correlationId = request.correlationId;
    const discoveredAuthority = await invokeAsync(getDiscoveredAuthority, StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, correlationId)(this.config, this.correlationId, this.performanceClient, this.browserStorage, this.logger);
    const popupWindow = await this.openPostFormPopup(request, discoveredAuthority, popupParams, correlationId, false);
    const responseString = await invokeAsync(this.waitForPopupResponse.bind(this), SilentHandlerMonitorIframeForHash, this.logger, this.performanceClient, correlationId)(request, popupWindow, popupParams.popupWindowParent);
    const serverParams = invoke(deserializeResponse, DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(responseString, this.config.auth.OIDCOptions.responseMode, this.logger, this.correlationId);
    return invokeAsync(handleResponseCode, HandleResponseCode, this.logger, this.performanceClient, correlationId)(request, serverParams, pkceVerifier, ApiId.acquireTokenPopup, this.config, authClient, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
  }
  /**
   *
   * @param validRequest
   * @param popupName
   * @param requestAuthority
   * @param popup
   * @param mainWindowRedirectUri
   * @param popupWindowAttributes
   */
  async logoutPopupAsync(validRequest, popupParams, requestAuthority, mainWindowRedirectUri) {
    this.logger.verbose("0b7yrk", this.correlationId);
    this.eventHandler.emitEvent(EventType.LOGOUT_START, this.correlationId, InteractionType.Popup, validRequest);
    const serverTelemetryManager = initializeServerTelemetryManager(ApiId.logoutPopup, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled);
    try {
      await clearCacheOnLogout(this.browserStorage, this.browserCrypto, this.logger, this.correlationId, validRequest.account);
      const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({
        serverTelemetryManager,
        requestAuthority,
        account: validRequest.account || void 0
      });
      try {
        authClient.authority.endSessionEndpoint;
      } catch {
        if (validRequest.account?.homeAccountId && validRequest.postLogoutRedirectUri && authClient.authority.protocolMode === ProtocolMode.OIDC) {
          this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, validRequest.correlationId, InteractionType.Popup, validRequest);
          if (mainWindowRedirectUri) {
            const navigationOptions = {
              apiId: ApiId.logoutPopup,
              timeout: this.config.system.redirectNavigationTimeout,
              noHistory: false
            };
            const absoluteUrl = UrlString.getAbsoluteUrl(mainWindowRedirectUri, getCurrentUri(), this.correlationId);
            await this.navigationClient.navigateInternal(absoluteUrl, navigationOptions);
          }
          popupParams.popup?.close();
          return;
        }
      }
      validRequest.state = ProtocolUtils_exports.setRequestState(this.browserCrypto, validRequest.state || "", {
        interactionType: InteractionType.Popup
      }, validRequest.correlationId);
      const logoutUri = authClient.getLogoutUri(validRequest);
      this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, validRequest.correlationId, InteractionType.Popup, validRequest);
      const popupRelayUri = this.config.auth.popupRelayUri;
      const popupNavigateUrl = popupRelayUri ? buildPopupRelayUrl(popupRelayUri, this.getRelayStateId(validRequest.state || "", this.correlationId), { method: "GET", url: logoutUri }, this.correlationId) : logoutUri;
      const popupWindow = this.openPopup(popupNavigateUrl, popupParams);
      this.eventHandler.emitEvent(EventType.POPUP_OPENED, validRequest.correlationId, InteractionType.Popup, { popupWindow }, null);
      await this.waitForPopupResponse(validRequest, popupWindow, popupParams.popupWindowParent).catch(() => {
      });
      if (mainWindowRedirectUri) {
        const navigationOptions = {
          apiId: ApiId.logoutPopup,
          timeout: this.config.system.redirectNavigationTimeout,
          noHistory: false
        };
        const absoluteUrl = UrlString.getAbsoluteUrl(mainWindowRedirectUri, getCurrentUri(), this.correlationId);
        this.logger.verbose("0qcur2", this.correlationId);
        this.logger.verbosePii(`0oj7lk ${absoluteUrl}`, this.correlationId);
        await this.navigationClient.navigateInternal(absoluteUrl, navigationOptions);
      } else {
        this.logger.verbose("03zgcf", this.correlationId);
      }
    } catch (e) {
      popupParams.popup?.close();
      if (e instanceof AuthError) {
        e.correlationId = this.correlationId;
        serverTelemetryManager.cacheFailedRequest(e);
      }
      this.eventHandler.emitEvent(EventType.LOGOUT_FAILURE, this.correlationId, InteractionType.Popup, null, e);
      this.eventHandler.emitEvent(EventType.LOGOUT_END, this.correlationId, InteractionType.Popup);
      throw e;
    }
    this.eventHandler.emitEvent(EventType.LOGOUT_END, this.correlationId, InteractionType.Popup);
  }
  /**
   * Opens a popup window with given request Url.
   * @param requestUrl
   */
  initiateAuthRequest(requestUrl, params) {
    if (requestUrl) {
      this.logger.infoPii(`1kcr9k ${requestUrl}`, this.correlationId);
      return this.openPopup(requestUrl, params);
    } else {
      this.logger.error("1l7hyp", this.correlationId);
      throw createBrowserAuthError(emptyNavigateUri, this.correlationId);
    }
  }
  /**
   * @hidden
   *
   * Configures popup window for login.
   *
   * @param urlNavigate
   * @param title
   * @param popUpWidth
   * @param popUpHeight
   * @param popupWindowAttributes
   * @ignore
   * @hidden
   */
  openPopup(urlNavigate, popupParams) {
    try {
      let popupWindow;
      if (popupParams.popup) {
        popupWindow = popupParams.popup;
        this.logger.verbosePii(`0cgeo7 ${urlNavigate}`, this.correlationId);
        popupWindow.location.assign(urlNavigate);
      } else if (typeof popupParams.popup === "undefined") {
        this.logger.verbosePii(`0c2awd ${urlNavigate}`, this.correlationId);
        popupWindow = this.openSizedPopup(urlNavigate, popupParams);
      }
      if (!popupWindow) {
        throw createBrowserAuthError(emptyWindowError, this.correlationId);
      }
      try {
        popupWindow.document.title = "Microsoft Authentication";
      } catch (e) {
        if (typeof DOMException !== "undefined" && e instanceof DOMException && e.name === "SecurityError") {
        } else {
          this.logger.verbose("1s1yfs", this.correlationId);
        }
      }
      if (popupWindow.focus) {
        popupWindow.focus();
      }
      this.currentWindow = popupWindow;
      return popupWindow;
    } catch (e) {
      this.logger.error(`0dxfb9 ${e.message}`, this.correlationId);
      throw createBrowserAuthError(popupWindowError, this.correlationId);
    }
  }
  /**
   * Helper function to set popup window dimensions and position
   * @param urlNavigate
   * @param popupName
   * @param popupWindowAttributes
   * @returns
   */
  openSizedPopup(urlNavigate, { popupName, popupWindowAttributes, popupWindowParent }) {
    const winLeft = popupWindowParent.screenLeft ? popupWindowParent.screenLeft : popupWindowParent.screenX;
    const winTop = popupWindowParent.screenTop ? popupWindowParent.screenTop : popupWindowParent.screenY;
    const winWidth = popupWindowParent.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const winHeight = popupWindowParent.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let width = popupWindowAttributes.popupSize?.width;
    let height = popupWindowAttributes.popupSize?.height;
    let top = popupWindowAttributes.popupPosition?.top;
    let left = popupWindowAttributes.popupPosition?.left;
    if (!width || width < 0 || width > winWidth) {
      this.logger.verbose("08vfmo", this.correlationId);
      width = BrowserConstants.POPUP_WIDTH;
    }
    if (!height || height < 0 || height > winHeight) {
      this.logger.verbose("09cxa0", this.correlationId);
      height = BrowserConstants.POPUP_HEIGHT;
    }
    if (!top || top < 0 || top > winHeight) {
      this.logger.verbose("1qh4wo", this.correlationId);
      top = Math.max(0, winHeight / 2 - BrowserConstants.POPUP_HEIGHT / 2 + winTop);
    }
    if (!left || left < 0 || left > winWidth) {
      this.logger.verbose("1sz3en", this.correlationId);
      left = Math.max(0, winWidth / 2 - BrowserConstants.POPUP_WIDTH / 2 + winLeft);
    }
    return popupWindowParent.open(urlNavigate, popupName, `width=${width}, height=${height}, top=${top}, left=${left}, scrollbars=yes`);
  }
  /**
   * Generates the name for the popup based on the client id and request
   * @param clientId
   * @param request
   */
  generatePopupName(scopes, authority) {
    return `${BrowserConstants.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${scopes.join("-")}.${authority}.${this.correlationId}`;
  }
  /**
   * Generates the name for the popup based on the client id and request for logouts
   * @param clientId
   * @param request
   */
  generateLogoutPopupName(request) {
    const homeAccountId = request.account && request.account.homeAccountId;
    return `${BrowserConstants.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${homeAccountId}.${this.correlationId}`;
  }
  /**
   * Decodes the per-request library-state id from the encoded request state.
   */
  getRelayStateId(state, correlationId) {
    return ProtocolUtils_exports.parseRequestState(base64Decode, state, correlationId).libraryState.id;
  }
  /**
   * Opens the interactive popup for a POST-form /authorize request. Shared by
   * the auth-code POST and EAR flows, which are identical apart from the form
   * builder (`isEAR` selects the EAR vs auth-code builders). When a
   * popup-relay page is configured the form is carried to the relay page
   * (which opens the IdP child popup); otherwise the form is submitted
   * directly into the popup.
   */
  async openPostFormPopup(request, discoveredAuthority, popupParams, correlationId, isEAR) {
    const popupRelayUri = this.config.auth.popupRelayUri;
    if (popupRelayUri) {
      const getFormData = isEAR ? getEARFormData : getCodeFormData;
      const formData = await getFormData(this.config, discoveredAuthority, request, this.logger, this.performanceClient);
      const relayUrl = buildPopupRelayUrl(popupRelayUri, this.getRelayStateId(request.state, correlationId), {
        method: "POST",
        action: formData.action,
        fields: formData.fields
      }, correlationId);
      return this.initiateAuthRequest(relayUrl, popupParams);
    }
    const popupWindow = popupParams.popup || this.openPopup("about:blank", popupParams);
    const getForm = isEAR ? getEARForm : getCodeForm;
    const form = await getForm(popupWindow.document, this.config, discoveredAuthority, request, this.logger, this.performanceClient);
    form.submit();
    return popupWindow;
  }
  async waitForPopupResponse(request, popupWindow, popupWindowParent) {
    if (this.config.auth.popupRelayUri) {
      return waitForPopupRelayResponse(this.config.system.popupBridgeTimeout, this.logger, request, popupWindow, this.performanceClient);
    }
    if (this.waitForPopupResponseHook) {
      return this.waitForPopupResponseHook(request, popupWindow, popupWindowParent);
    }
    return waitForBridgeResponse(this.config.system.popupBridgeTimeout, this.logger, request, this.performanceClient);
  }
};

// node_modules/@azure/msal-browser/dist/interaction_client/RedirectClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function getNavigationType() {
  if (typeof window === "undefined" || typeof window.performance === "undefined" || typeof window.performance.getEntriesByType !== "function") {
    return void 0;
  }
  const navigationEntries = window.performance.getEntriesByType("navigation");
  const navigation = navigationEntries.length ? navigationEntries[0] : void 0;
  return navigation?.type;
}
var RedirectClient = class extends StandardInteractionClient {
  constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeStorageImpl, correlationId, platformAuthHandler, tokenBindingKeyManager) {
    super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, correlationId, platformAuthHandler, tokenBindingKeyManager);
    this.nativeStorage = nativeStorageImpl;
  }
  /**
   * Redirects the page to the /authorize endpoint of the IDP
   * @param request
   */
  async acquireToken(request) {
    const validRequest = await invokeAsync(initializeAuthorizationRequest, StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(request, InteractionType.Redirect, this.config, this.browserCrypto, this.browserStorage, this.logger, this.performanceClient, this.correlationId);
    validRequest.platformBroker = isPlatformAuthAllowed(this.config, this.logger, this.correlationId, this.platformAuthProvider, request.authenticationScheme);
    let rejectBackButtonCancellation;
    const backButtonCancellation = new Promise((_, reject) => {
      rejectBackButtonCancellation = reject;
    });
    const handleBackButton = (event) => {
      if (event.persisted) {
        this.logger.verbose("0udvtt", this.correlationId);
        this.browserStorage.resetRequestCache(this.correlationId);
        this.eventHandler.emitEvent(EventType.RESTORE_FROM_BFCACHE, this.correlationId, InteractionType.Redirect);
        rejectBackButtonCancellation(createBrowserAuthError(userCancelled, this.correlationId));
      }
    };
    const redirectStartPage = this.getRedirectStartPage(request.redirectStartPage);
    this.logger.verbosePii(`0zao0a ${redirectStartPage}`, this.correlationId);
    this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, redirectStartPage, true);
    window.addEventListener("pageshow", handleBackButton);
    try {
      const redirectOperation = this.config.system.protocolMode === ProtocolMode.EAR ? this.executeEarFlow(validRequest) : this.executeCodeFlow(validRequest);
      await Promise.race([redirectOperation, backButtonCancellation]);
    } catch (e) {
      if (e instanceof AuthError) {
        e.correlationId = this.correlationId;
      }
      window.removeEventListener("pageshow", handleBackButton);
      throw e;
    }
  }
  /**
   * Executes auth code + PKCE flow
   * @param request
   * @returns
   */
  async executeCodeFlow(request) {
    const correlationId = request.correlationId;
    const serverTelemetryManager = initializeServerTelemetryManager(ApiId.acquireTokenRedirect, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled);
    const pkceCodes = await invokeAsync(generatePkceCodes, GeneratePkceCodes, this.logger, this.performanceClient, correlationId)(this.performanceClient, this.logger, correlationId);
    const tokenBindingParams = await getTokenBindingRequestParams(request, this.tokenBindingKeyManager, this.logger, this.performanceClient);
    const redirectRequest = __spreadValues(__spreadProps(__spreadValues({}, request), {
      codeChallenge: pkceCodes.challenge
    }), tokenBindingParams);
    this.browserStorage.cacheAuthorizeRequest(redirectRequest, this.correlationId, pkceCodes.verifier);
    try {
      if (redirectRequest.httpMethod === Constants_exports.HttpMethod.POST) {
        return await this.executeCodeFlowWithPost(redirectRequest);
      } else {
        const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({
          serverTelemetryManager,
          requestAuthority: redirectRequest.authority,
          requestAzureCloudOptions: redirectRequest.azureCloudOptions,
          requestExtraQueryParameters: redirectRequest.extraQueryParameters,
          account: redirectRequest.account
        });
        const navigateUrl = await invokeAsync(getAuthCodeRequestUrl, PerformanceEvents_exports.GetAuthCodeUrl, this.logger, this.performanceClient, request.correlationId)(this.config, authClient.authority, redirectRequest, this.logger, this.performanceClient);
        return await this.initiateAuthRequest(navigateUrl);
      }
    } catch (e) {
      if (e instanceof AuthError) {
        e.correlationId = this.correlationId;
        serverTelemetryManager.cacheFailedRequest(e);
      }
      throw e;
    }
  }
  /**
   * Executes EAR flow
   * @param request
   */
  async executeEarFlow(request) {
    const { correlationId, authority, azureCloudOptions, extraQueryParameters, account } = request;
    const discoveredAuthority = await invokeAsync(getDiscoveredAuthority, StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, correlationId)(this.config, this.correlationId, this.performanceClient, this.browserStorage, this.logger, authority, azureCloudOptions, extraQueryParameters, account);
    const earJwk = await invokeAsync(generateEarKey, GenerateEarKey, this.logger, this.performanceClient, correlationId)();
    const pkceCodes = await invokeAsync(generatePkceCodes, GeneratePkceCodes, this.logger, this.performanceClient, correlationId)(this.performanceClient, this.logger, correlationId);
    const tokenBindingParams = await getTokenBindingRequestParams(request, this.tokenBindingKeyManager, this.logger, this.performanceClient);
    const redirectRequest = __spreadValues(__spreadProps(__spreadValues({}, request), {
      earJwk,
      codeChallenge: pkceCodes.challenge
    }), tokenBindingParams);
    this.browserStorage.cacheAuthorizeRequest(redirectRequest, this.correlationId, pkceCodes.verifier);
    const form = await getEARForm(document, this.config, discoveredAuthority, redirectRequest, this.logger, this.performanceClient);
    form.submit();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(createBrowserAuthError(timedOut, "", "failed_to_redirect"));
      }, this.config.system.redirectNavigationTimeout);
    });
  }
  /**
   * Executes classic Authorization Code flow with a POST request.
   * @param request
   */
  async executeCodeFlowWithPost(request) {
    const correlationId = request.correlationId;
    const discoveredAuthority = await invokeAsync(getDiscoveredAuthority, StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, correlationId)(this.config, this.correlationId, this.performanceClient, this.browserStorage, this.logger);
    this.browserStorage.cacheAuthorizeRequest(request, this.correlationId);
    const form = await getCodeForm(document, this.config, discoveredAuthority, request, this.logger, this.performanceClient);
    form.submit();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(createBrowserAuthError(timedOut, "", "failed_to_redirect"));
      }, this.config.system.redirectNavigationTimeout);
    });
  }
  /**
   * Checks if navigateToLoginRequestUrl is set, and:
   * - if true, performs logic to cache and navigate
   * - if false, handles hash string and parses response
   * @param hash {string} url hash
   * @param parentMeasurement {InProgressPerformanceEvent} parent measurement
   * @param request {CommonAuthorizationUrlRequest} request object
   * @param pkceVerifier {string} PKCE verifier
   * @param options {HandleRedirectPromiseOptions} options for handling redirect promise
   */
  async handleRedirectPromise(request, pkceVerifier, parentMeasurement, options) {
    const originalTitle = document.title;
    document.title = "Microsoft Authentication";
    const serverTelemetryManager = initializeServerTelemetryManager(ApiId.handleRedirectPromise, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled);
    const navigateToLoginRequestUrl = options?.navigateToLoginRequestUrl ?? true;
    try {
      const [serverParams, responseString] = this.getRedirectResponse(options?.hash || "");
      if (!serverParams) {
        this.logger.info("1qmv0q", this.correlationId);
        this.browserStorage.resetRequestCache(this.correlationId);
        if (getNavigationType() !== "back_forward") {
          parentMeasurement.event.errorCode = "no_server_response";
        } else {
          this.logger.verbose("1eqegq", this.correlationId);
        }
        return null;
      }
      const loginRequestUrl = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, this.correlationId, true) || "";
      const loginRequestUrlNormalized = UrlUtils_exports.normalizeUrlForComparison(loginRequestUrl, this.logger, this.correlationId);
      const currentUrlNormalized = UrlUtils_exports.normalizeUrlForComparison(window.location.href, this.logger, this.correlationId);
      if (loginRequestUrlNormalized === currentUrlNormalized && navigateToLoginRequestUrl) {
        this.logger.verbose("11yred", this.correlationId);
        if (loginRequestUrl.indexOf("#") > -1) {
          replaceHash(loginRequestUrl);
        }
        const handleHashResult = await this.handleResponse(serverParams, request, pkceVerifier, serverTelemetryManager);
        return handleHashResult;
      } else if (!navigateToLoginRequestUrl) {
        this.logger.verbose("0v4sdv", this.correlationId);
        return await this.handleResponse(serverParams, request, pkceVerifier, serverTelemetryManager);
      } else if (!isInIframe() || this.config.system.allowRedirectInIframe) {
        this.browserStorage.setTemporaryCache(TemporaryCacheKeys.URL_HASH, responseString, true);
        const navigationOptions = {
          apiId: ApiId.handleRedirectPromise,
          timeout: this.config.system.redirectNavigationTimeout,
          noHistory: true
        };
        let processHashOnRedirect = true;
        if (!loginRequestUrl) {
          const homepage = getHomepage(this.correlationId);
          this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, homepage, true);
          this.logger.warning("1dutq1", this.correlationId);
          processHashOnRedirect = await this.navigationClient.navigateInternal(homepage, navigationOptions);
        } else {
          this.logger.verbose(`08jpy1 ${loginRequestUrl}`, this.correlationId);
          processHashOnRedirect = await this.navigationClient.navigateInternal(loginRequestUrl, navigationOptions);
        }
        if (!processHashOnRedirect) {
          return await this.handleResponse(serverParams, request, pkceVerifier, serverTelemetryManager);
        }
      }
      return null;
    } catch (e) {
      if (e instanceof AuthError) {
        e.correlationId = this.correlationId;
        serverTelemetryManager.cacheFailedRequest(e);
      }
      throw e;
    } finally {
      document.title = originalTitle;
    }
  }
  /**
   * Gets the response hash for a redirect request
   * Returns null if interactionType in the state value is not "redirect" or the hash does not contain known properties
   * @param hash
   */
  getRedirectResponse(userProvidedResponse) {
    this.logger.verbose("1c5i8m", this.correlationId);
    let responseString = userProvidedResponse;
    if (!responseString) {
      if (this.config.auth.OIDCOptions.responseMode === Constants_exports.ResponseMode.QUERY) {
        responseString = window.location.search;
      } else {
        responseString = window.location.hash;
      }
    }
    let response = UrlUtils_exports.getDeserializedResponse(responseString);
    if (response) {
      try {
        validateInteractionType(response, this.browserCrypto, InteractionType.Redirect, this.correlationId);
      } catch (e) {
        if (e instanceof AuthError) {
          this.logger.error(`0bkq6p ${e.errorCode} ${e.errorMessage}`, this.correlationId);
        }
        return [null, ""];
      }
      clearHash(window);
      this.logger.verbose("00uvho", this.correlationId);
      return [response, responseString];
    }
    const cachedHash = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.URL_HASH, this.correlationId, true);
    this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.URL_HASH));
    if (cachedHash) {
      response = UrlUtils_exports.getDeserializedResponse(cachedHash);
      if (response) {
        this.logger.verbose("001671", this.correlationId);
        return [response, cachedHash];
      }
    }
    return [null, ""];
  }
  /**
   * Checks if hash exists and handles in window.
   * @param hash
   * @param state
   */
  async handleResponse(serverParams, request, codeVerifier, serverTelemetryManager) {
    const state = serverParams.state;
    if (!state) {
      throw createBrowserAuthError(noStateInHash, request.correlationId);
    }
    const { authority, azureCloudOptions, extraQueryParameters, account } = request;
    if (serverParams.ear_jwe) {
      const discoveredAuthority = await invokeAsync(getDiscoveredAuthority, StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, request.correlationId)(this.config, this.correlationId, this.performanceClient, this.browserStorage, this.logger, authority, azureCloudOptions, extraQueryParameters, account);
      return invokeAsync(handleResponseEAR, HandleResponseEar, this.logger, this.performanceClient, request.correlationId)(request, serverParams, ApiId.acquireTokenRedirect, this.config, discoveredAuthority, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
    }
    const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({ serverTelemetryManager, requestAuthority: request.authority });
    return invokeAsync(handleResponseCode, HandleResponseCode, this.logger, this.performanceClient, request.correlationId)(request, serverParams, codeVerifier, ApiId.acquireTokenRedirect, this.config, authClient, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
  }
  /**
   * Redirects window to given URL.
   * @param urlNavigate
   * @param onRedirectNavigateRequest - onRedirectNavigate callback provided on the request
   */
  async initiateAuthRequest(requestUrl) {
    this.logger.verbose("0yaw2e", this.correlationId);
    if (requestUrl) {
      this.logger.infoPii(`1luf83 ${requestUrl}`, this.correlationId);
      const navigationOptions = {
        apiId: ApiId.acquireTokenRedirect,
        timeout: this.config.system.redirectNavigationTimeout,
        noHistory: false
      };
      const onRedirectNavigate = this.config.auth.onRedirectNavigate;
      if (typeof onRedirectNavigate === "function") {
        this.logger.verbose("1nehvl", this.correlationId);
        const navigate = onRedirectNavigate(requestUrl);
        if (navigate !== false) {
          this.logger.verbose("1a0jxh", this.correlationId);
          await this.navigationClient.navigateExternal(requestUrl, navigationOptions);
          return;
        } else {
          this.logger.verbose("09k5h5", this.correlationId);
          return;
        }
      } else {
        this.logger.verbose("0klwf7", this.correlationId);
        await this.navigationClient.navigateExternal(requestUrl, navigationOptions);
        return;
      }
    } else {
      this.logger.info("0rlh4e", this.correlationId);
      throw createBrowserAuthError(emptyNavigateUri, this.correlationId);
    }
  }
  /**
   * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
   * Default behaviour is to redirect the user to `window.location.href`.
   * @param logoutRequest
   */
  async logout(logoutRequest) {
    this.logger.verbose("1rkurh", this.correlationId);
    const validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
    const serverTelemetryManager = initializeServerTelemetryManager(ApiId.logout, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled);
    try {
      this.eventHandler.emitEvent(EventType.LOGOUT_START, this.correlationId, InteractionType.Redirect, logoutRequest);
      await clearCacheOnLogout(this.browserStorage, this.browserCrypto, this.logger, this.correlationId, validLogoutRequest.account);
      const navigationOptions = {
        apiId: ApiId.logout,
        timeout: this.config.system.redirectNavigationTimeout,
        noHistory: false
      };
      const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({
        serverTelemetryManager,
        requestAuthority: logoutRequest && logoutRequest.authority,
        requestExtraQueryParameters: logoutRequest?.extraQueryParameters,
        account: logoutRequest && logoutRequest.account || void 0
      });
      if (authClient.authority.protocolMode === ProtocolMode.OIDC) {
        try {
          authClient.authority.endSessionEndpoint;
        } catch {
          if (validLogoutRequest.account?.homeAccountId) {
            this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, this.correlationId, InteractionType.Redirect, validLogoutRequest);
            return;
          }
        }
      }
      validLogoutRequest.state = ProtocolUtils_exports.setRequestState(this.browserCrypto, validLogoutRequest.state || "", {
        interactionType: InteractionType.Redirect
      }, validLogoutRequest.correlationId);
      const logoutUri = authClient.getLogoutUri(validLogoutRequest);
      if (validLogoutRequest.account?.homeAccountId) {
        this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, this.correlationId, InteractionType.Redirect, validLogoutRequest);
      }
      const onRedirectNavigate = this.config.auth.onRedirectNavigate;
      if (typeof onRedirectNavigate === "function") {
        const navigate = onRedirectNavigate(logoutUri);
        if (navigate !== false) {
          this.logger.verbose("06v57e", this.correlationId);
          if (!this.browserStorage.getInteractionInProgress()) {
            this.browserStorage.setInteractionInProgress(true, INTERACTION_TYPE.SIGNOUT);
          }
          await this.navigationClient.navigateExternal(logoutUri, navigationOptions);
          return;
        } else {
          this.browserStorage.setInteractionInProgress(false);
          this.logger.verbose("0xqes1", this.correlationId);
        }
      } else {
        if (!this.browserStorage.getInteractionInProgress()) {
          this.browserStorage.setInteractionInProgress(true, INTERACTION_TYPE.SIGNOUT);
        }
        await this.navigationClient.navigateExternal(logoutUri, navigationOptions);
        return;
      }
    } catch (e) {
      if (e instanceof AuthError) {
        e.correlationId = this.correlationId;
        serverTelemetryManager.cacheFailedRequest(e);
      }
      this.eventHandler.emitEvent(EventType.LOGOUT_FAILURE, this.correlationId, InteractionType.Redirect, null, e);
      this.eventHandler.emitEvent(EventType.LOGOUT_END, this.correlationId, InteractionType.Redirect);
      throw e;
    }
    this.eventHandler.emitEvent(EventType.LOGOUT_END, this.correlationId, InteractionType.Redirect);
  }
  /**
   * Use to get the redirectStartPage either from request or use current window
   * @param requestStartPage
   */
  getRedirectStartPage(requestStartPage) {
    const redirectStartPage = requestStartPage || window.location.href;
    const absoluteRedirectStartPage = UrlString.getAbsoluteUrl(redirectStartPage, getCurrentUri(), this.correlationId);
    UrlUtils_exports.validateUrl(absoluteRedirectStartPage, this.logger, this.correlationId);
    return absoluteRedirectStartPage;
  }
};

// node_modules/@azure/msal-browser/dist/interaction_handler/SilentHandler.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
async function initiateCodeRequest(frame, requestUrl, logger, correlationId) {
  if (!requestUrl) {
    logger.info("1l7hyp", correlationId);
    throw createBrowserAuthError(emptyNavigateUri, correlationId);
  }
  frame.src = requestUrl;
  return frame;
}
async function initiateCodeFlowWithPost(frame, config, authority, request, logger, performanceClient) {
  if (!frame.contentDocument) {
    throw "No document associated with iframe!";
  }
  const form = await getCodeForm(frame.contentDocument, config, authority, request, logger, performanceClient);
  form.submit();
  return frame;
}
async function initiateEarRequest(frame, config, authority, request, logger, performanceClient) {
  if (!frame.contentDocument) {
    throw "No document associated with iframe!";
  }
  const form = await getEARForm(frame.contentDocument, config, authority, request, logger, performanceClient);
  form.submit();
  return frame;
}
function createHiddenIframe() {
  const authFrame = document.createElement("iframe");
  authFrame.className = "msalSilentIframe";
  authFrame.title = "Microsoft Authentication";
  authFrame.style.visibility = "hidden";
  authFrame.style.position = "absolute";
  authFrame.style.width = authFrame.style.height = "0";
  authFrame.style.border = "0";
  authFrame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
  authFrame.setAttribute("allow", "local-network-access *");
  document.body.appendChild(authFrame);
  return authFrame;
}
function removeHiddenIframe(iframe) {
  if (document.body === iframe.parentNode) {
    document.body.removeChild(iframe);
  }
}

// node_modules/@azure/msal-browser/dist/interaction_client/SilentIframeClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var SilentIframeClient = class extends StandardInteractionClient {
  constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, nativeStorageImpl, correlationId, platformAuthProvider, waitForIframeResponseHook, tokenBindingKeyManager) {
    super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, correlationId, platformAuthProvider, tokenBindingKeyManager);
    this.apiId = apiId;
    this.nativeStorage = nativeStorageImpl;
    this.waitForIframeResponseHook = waitForIframeResponseHook;
  }
  /**
   * Acquires a token silently by opening a hidden iframe to the /authorize endpoint with prompt=none or prompt=no_session
   * @param request
   */
  async acquireToken(request) {
    if (!request.loginHint && !request.sid && (!request.account || !request.account.username)) {
      this.logger.warning("1kl318", this.correlationId);
    }
    const inputRequest = __spreadValues({}, request);
    if (inputRequest.prompt) {
      if (inputRequest.prompt !== Constants_exports.PromptValue.NONE && inputRequest.prompt !== Constants_exports.PromptValue.NO_SESSION) {
        this.logger.warning(`0bmctg ${inputRequest.prompt} ${Constants_exports.PromptValue.NONE}`, this.correlationId);
        inputRequest.prompt = Constants_exports.PromptValue.NONE;
      }
    } else {
      inputRequest.prompt = Constants_exports.PromptValue.NONE;
    }
    const silentRequest = await invokeAsync(initializeAuthorizationRequest, StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(inputRequest, InteractionType.Silent, this.config, this.browserCrypto, this.browserStorage, this.logger, this.performanceClient, this.correlationId);
    silentRequest.platformBroker = isPlatformAuthAllowed(this.config, this.logger, this.correlationId, this.platformAuthProvider, silentRequest.authenticationScheme);
    preconnect(silentRequest.authority);
    if (this.config.system.protocolMode === ProtocolMode.EAR) {
      return this.executeEarFlow(silentRequest);
    } else {
      return this.executeCodeFlow(silentRequest);
    }
  }
  /**
   * Executes auth code + PKCE flow
   * @param request
   * @returns
   */
  async executeCodeFlow(request) {
    let authClient;
    const serverTelemetryManager = initializeServerTelemetryManager(this.apiId, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled);
    try {
      authClient = await invokeAsync(this.createAuthCodeClient.bind(this), StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, request.correlationId)({
        serverTelemetryManager,
        requestAuthority: request.authority,
        requestAzureCloudOptions: request.azureCloudOptions,
        requestExtraQueryParameters: request.extraQueryParameters,
        account: request.account
      });
      return await invokeAsync(this.silentTokenHelper.bind(this), SilentIframeClientTokenHelper, this.logger, this.performanceClient, request.correlationId)(authClient, request);
    } catch (e) {
      if (e instanceof AuthError) {
        e.correlationId = this.correlationId;
        serverTelemetryManager.cacheFailedRequest(e);
      }
      if (!authClient || !(e instanceof AuthError) || e.errorCode !== BrowserConstants.INVALID_GRANT_ERROR) {
        throw e;
      }
      this.performanceClient.addFields({
        retryError: e.errorCode
      }, this.correlationId);
      return await invokeAsync(this.silentTokenHelper.bind(this), SilentIframeClientTokenHelper, this.logger, this.performanceClient, this.correlationId)(authClient, request);
    }
  }
  /**
   * Executes EAR flow
   * @param request
   */
  async executeEarFlow(request) {
    const { correlationId, authority, azureCloudOptions, extraQueryParameters, account } = request;
    const discoveredAuthority = await invokeAsync(getDiscoveredAuthority, StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, correlationId)(this.config, this.correlationId, this.performanceClient, this.browserStorage, this.logger, authority, azureCloudOptions, extraQueryParameters, account);
    const earJwk = await invokeAsync(generateEarKey, GenerateEarKey, this.logger, this.performanceClient, correlationId)();
    const pkceCodes = await invokeAsync(generatePkceCodes, GeneratePkceCodes, this.logger, this.performanceClient, correlationId)(this.performanceClient, this.logger, correlationId);
    const silentRequest = __spreadProps(__spreadValues({}, request), {
      earJwk,
      codeChallenge: pkceCodes.challenge
    });
    const iframe = createHiddenIframe();
    const responseType = this.config.auth.OIDCOptions.responseMode;
    let responseString;
    try {
      const responsePromise = invokeAsync(this.waitForIframeResponse.bind(this), SilentHandlerMonitorIframeForHash, this.logger, this.performanceClient, correlationId)(iframe, request);
      responsePromise.catch(() => {
      });
      await invokeAsync(initiateEarRequest, SilentHandlerInitiateAuthRequest, this.logger, this.performanceClient, correlationId)(iframe, this.config, discoveredAuthority, silentRequest, this.logger, this.performanceClient);
      responseString = await responsePromise;
    } finally {
      invoke(removeHiddenIframe, RemoveHiddenIframe, this.logger, this.performanceClient, correlationId)(iframe);
    }
    const serverParams = invoke(deserializeResponse, DeserializeResponse, this.logger, this.performanceClient, correlationId)(responseString, responseType, this.logger, this.correlationId);
    if (!serverParams.ear_jwe && serverParams.code) {
      const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, correlationId)({
        serverTelemetryManager: initializeServerTelemetryManager(this.apiId, this.config.auth.clientId, correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled),
        requestAuthority: request.authority,
        requestAzureCloudOptions: request.azureCloudOptions,
        requestExtraQueryParameters: request.extraQueryParameters,
        account: request.account,
        authority: discoveredAuthority
      });
      return invokeAsync(handleResponseCode, HandleResponseCode, this.logger, this.performanceClient, correlationId)(silentRequest, serverParams, pkceCodes.verifier, this.apiId, this.config, authClient, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
    } else {
      return invokeAsync(handleResponseEAR, HandleResponseEar, this.logger, this.performanceClient, correlationId)(silentRequest, serverParams, this.apiId, this.config, discoveredAuthority, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
    }
  }
  /**
   * Verifies SSO capability by making an iframe request to /authorize without exchanging the code for tokens.
   * This is useful for verifying SSO capability in the background without the overhead of a full token exchange.
   * @param request - The SSO silent request
   * @returns true if SSO verification was successful with a valid authorization code, false otherwise
   */
  async verifySso(request) {
    const inputRequest = __spreadValues({}, request);
    if (!inputRequest.prompt) {
      inputRequest.prompt = Constants_exports.PromptValue.NONE;
    }
    const silentRequest = await invokeAsync(initializeAuthorizationRequest, StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(inputRequest, InteractionType.Silent, this.config, this.browserCrypto, this.browserStorage, this.logger, this.performanceClient, this.correlationId);
    const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({
      serverTelemetryManager: initializeServerTelemetryManager(this.apiId, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled),
      requestAuthority: silentRequest.authority,
      requestAzureCloudOptions: silentRequest.azureCloudOptions,
      requestExtraQueryParameters: silentRequest.extraQueryParameters,
      account: silentRequest.account
    });
    const { serverParams } = await this.silentAuthorizeHelper(authClient, silentRequest);
    const correlationId = silentRequest.correlationId;
    Authorize_exports.validateAuthorizationResponse(serverParams, silentRequest.state, correlationId);
    if (!serverParams.code) {
      this.logger.warning("0y34ti", correlationId);
      return false;
    }
    this.logger.verbose("0kkkcj", correlationId);
    return true;
  }
  /**
   * Currently Unsupported
   */
  logout() {
    return Promise.reject(createBrowserAuthError(silentLogoutUnsupported, ""));
  }
  /**
   * Helper which acquires an authorization code silently using a hidden iframe from given url
   * using the scopes requested as part of the id, and exchanges the code for a set of OAuth tokens.
   * @param navigateUrl
   * @param userRequestScopes
   */
  async silentTokenHelper(authClient, request) {
    const { serverParams, pkceCodes, silentRequest } = await this.silentAuthorizeHelper(authClient, request);
    return invokeAsync(handleResponseCode, HandleResponseCode, this.logger, this.performanceClient, request.correlationId)(silentRequest, serverParams, pkceCodes.verifier, this.apiId, this.config, authClient, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
  }
  /**
   * Shared helper that generates PKCE codes, builds the /authorize URL,
   * loads it in a hidden iframe, waits for the redirect-bridge response,
   * and returns the deserialized server parameters along with the PKCE codes
   * and the request that was sent.
   */
  async silentAuthorizeHelper(authClient, request) {
    const correlationId = request.correlationId;
    const pkceCodes = await invokeAsync(generatePkceCodes, GeneratePkceCodes, this.logger, this.performanceClient, correlationId)(this.performanceClient, this.logger, correlationId);
    const tokenBindingParams = await getTokenBindingRequestParams(request, this.tokenBindingKeyManager, this.logger, this.performanceClient);
    const silentRequest = __spreadValues(__spreadProps(__spreadValues({}, request), {
      codeChallenge: pkceCodes.challenge
    }), tokenBindingParams);
    const iframe = createHiddenIframe();
    const responseType = this.config.auth.OIDCOptions.responseMode;
    let responseString;
    try {
      const responsePromise = invokeAsync(this.waitForIframeResponse.bind(this), SilentHandlerMonitorIframeForHash, this.logger, this.performanceClient, correlationId)(iframe, request);
      responsePromise.catch(() => {
      });
      if (request.httpMethod === Constants_exports.HttpMethod.POST) {
        await invokeAsync(initiateCodeFlowWithPost, SilentHandlerInitiateAuthRequest, this.logger, this.performanceClient, correlationId)(iframe, this.config, authClient.authority, silentRequest, this.logger, this.performanceClient);
      } else {
        const navigateUrl = await invokeAsync(getAuthCodeRequestUrl, PerformanceEvents_exports.GetAuthCodeUrl, this.logger, this.performanceClient, correlationId)(this.config, authClient.authority, silentRequest, this.logger, this.performanceClient);
        await invokeAsync(initiateCodeRequest, SilentHandlerInitiateAuthRequest, this.logger, this.performanceClient, correlationId)(iframe, navigateUrl, this.logger, correlationId);
      }
      responseString = await responsePromise;
    } finally {
      invoke(removeHiddenIframe, RemoveHiddenIframe, this.logger, this.performanceClient, correlationId)(iframe);
    }
    const serverParams = invoke(deserializeResponse, DeserializeResponse, this.logger, this.performanceClient, correlationId)(responseString, responseType, this.logger, this.correlationId);
    return { serverParams, pkceCodes, silentRequest };
  }
  async waitForIframeResponse(iframe, request) {
    if (this.waitForIframeResponseHook) {
      return this.waitForIframeResponseHook(iframe, request);
    }
    return waitForBridgeResponse(this.config.system.iframeBridgeTimeout, this.logger, request, this.performanceClient, this.config.experimental);
  }
};

// node_modules/@azure/msal-browser/dist/interaction_client/SilentRefreshClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var SilentRefreshClient = class extends StandardInteractionClient {
  /**
   * Exchanges the refresh token for new tokens
   * @param request
   */
  async acquireToken(request) {
    const baseRequest = await invokeAsync(initializeBaseRequest, InitializeBaseRequest, this.logger, this.performanceClient, request.correlationId)(request, this.config, this.performanceClient, this.logger, this.correlationId);
    const tokenBindingParams = await getTokenBindingRequestParams(baseRequest, this.tokenBindingKeyManager, this.logger, this.performanceClient);
    const silentRequest = __spreadValues(__spreadValues(__spreadValues({}, request), baseRequest), tokenBindingParams);
    if (request.redirectUri) {
      silentRequest.redirectUri = getRedirectUri(request.redirectUri, this.config.auth.redirectUri, this.logger, this.correlationId);
    }
    const serverTelemetryManager = initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled);
    const refreshTokenClient = await this.createRefreshTokenClient({
      serverTelemetryManager,
      authorityUrl: silentRequest.authority,
      azureCloudOptions: silentRequest.azureCloudOptions,
      account: silentRequest.account
    });
    return invokeAsync(refreshTokenClient.acquireTokenByRefreshToken.bind(refreshTokenClient), RefreshTokenClientAcquireTokenByRefreshToken, this.logger, this.performanceClient, request.correlationId)(silentRequest, ApiId.acquireTokenSilent_silentFlow).catch((e) => {
      e.correlationId = this.correlationId;
      serverTelemetryManager.cacheFailedRequest(e);
      throw e;
    });
  }
  /**
   * Currently Unsupported
   */
  logout() {
    return Promise.reject(createBrowserAuthError(silentLogoutUnsupported, ""));
  }
  /**
   * Creates a Refresh Client with the given authority, or the default authority.
   * @param params {
   *         serverTelemetryManager: ServerTelemetryManager;
   *         authorityUrl?: string;
   *         azureCloudOptions?: AzureCloudOptions;
   *         extraQueryParams?: StringDict;
   *         account?: AccountInfo;
   *        }
   */
  async createRefreshTokenClient(params) {
    const clientConfig = await invokeAsync(this.getClientConfiguration.bind(this), StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)({
      serverTelemetryManager: params.serverTelemetryManager,
      requestAuthority: params.authorityUrl,
      requestAzureCloudOptions: params.azureCloudOptions,
      requestExtraQueryParameters: params.extraQueryParameters,
      account: params.account
    });
    return new RefreshTokenClient(clientConfig, this.performanceClient);
  }
};

// node_modules/@azure/msal-browser/dist/interaction_client/HybridSpaAuthorizationCodeClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var HybridSpaAuthorizationCodeClient = class extends AuthorizationCodeClient {
  constructor(config, performanceClient) {
    super(config, performanceClient);
    this.includeRedirectUri = false;
  }
};

// node_modules/@azure/msal-browser/dist/interaction_client/SilentAuthCodeClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var SilentAuthCodeClient = class extends StandardInteractionClient {
  constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, correlationId, platformAuthProvider, tokenBindingKeyManager) {
    super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, correlationId, platformAuthProvider, tokenBindingKeyManager);
    this.apiId = apiId;
  }
  /**
   * Acquires a token silently by redeeming an authorization code against the /token endpoint
   * @param request
   */
  async acquireToken(request) {
    if (!request.code) {
      throw createBrowserAuthError(authCodeRequired, this.correlationId);
    }
    const silentRequest = await invokeAsync(initializeAuthorizationRequest, StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(
      request,
      InteractionType.Silent,
      this.config,
      this.browserCrypto,
      this.browserStorage,
      this.logger,
      this.performanceClient,
      /*
       * correlationId is optional in request payload, while this.correlationId is always instantiated as request.correlationId || createGuid().
       * Each auth request creates a new instance of *Client so we can safely use this.correlationId.
       */
      this.correlationId
    );
    const serverTelemetryManager = initializeServerTelemetryManager(this.apiId, this.config.auth.clientId, this.correlationId, this.browserStorage, this.logger, void 0, this.config.system.serverTelemetryEnabled);
    try {
      const tokenBindingParams = await getTokenBindingRequestParams(silentRequest, this.tokenBindingKeyManager, this.logger, this.performanceClient);
      const authCodeRequest = __spreadValues(__spreadProps(__spreadValues({}, silentRequest), {
        code: request.code
      }), tokenBindingParams);
      const clientConfig = await invokeAsync(this.getClientConfiguration.bind(this), StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)({
        serverTelemetryManager,
        requestAuthority: silentRequest.authority,
        requestAzureCloudOptions: silentRequest.azureCloudOptions,
        requestExtraQueryParameters: silentRequest.extraQueryParameters,
        account: silentRequest.account
      });
      const authClient = new HybridSpaAuthorizationCodeClient(clientConfig, this.performanceClient);
      this.logger.verbose("1uic5e", this.correlationId);
      const interactionHandler = new InteractionHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.performanceClient);
      return await invokeAsync(interactionHandler.handleCodeResponseFromServer.bind(interactionHandler), PerformanceEvents_exports.HandleCodeResponseFromServer, this.logger, this.performanceClient, this.correlationId)({
        code: request.code,
        msgraph_host: request.msGraphHost,
        cloud_graph_host_name: request.cloudGraphHostName,
        cloud_instance_host_name: request.cloudInstanceHostName
      }, silentRequest, this.apiId, false);
    } catch (e) {
      if (e instanceof AuthError) {
        e.correlationId = this.correlationId;
        serverTelemetryManager.cacheFailedRequest(e);
      }
      throw e;
    }
  }
  /**
   * Currently Unsupported
   */
  logout() {
    return Promise.reject(createBrowserAuthError(silentLogoutUnsupported, ""));
  }
};

// node_modules/@azure/msal-browser/dist/utils/MsalFrameStatsUtils.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function getNetworkInfo() {
  if (typeof window === "undefined" || !window.navigator) {
    return {};
  }
  const connection = "connection" in window.navigator ? window.navigator.connection : void 0;
  return {
    effectiveType: connection?.effectiveType,
    rtt: connection?.rtt
  };
}
function collectInstanceStats(currentClientId, performanceEvent, logger, correlationId) {
  const frameInstances = (
    // @ts-ignore
    window.msal?.clientIds || []
  );
  const msalInstanceCount = frameInstances.length;
  const sameClientIdInstanceCount = frameInstances.filter((i) => i === currentClientId).length;
  if (sameClientIdInstanceCount > 1) {
    logger.warning("1e88vg", correlationId);
  }
  performanceEvent.add({
    msalInstanceCount,
    sameClientIdInstanceCount
  });
}

// node_modules/@azure/msal-browser/dist/controllers/StandardController.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function preflightCheck2(initialized, performanceEvent, config, request) {
  try {
    preflightCheck(initialized);
    enforceResourceParameter(config.auth.isMcp, request);
  } catch (e) {
    performanceEvent.end({ success: false }, e, request.account);
    throw e;
  }
}
var StandardController = class _StandardController {
  /**
   * @constructor
   * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
   *
   * Important attributes in the Configuration object for auth are:
   * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
   * - authority: the authority URL for your application.
   * - redirect_uri: the uri of your application registered in the portal.
   *
   * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
   * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
   * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
   * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
   * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
   * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
   *
   * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
   * Full B2C functionality will be available in this library in future versions.
   *
   * @param configuration Object for the MSAL PublicClientApplication instance
   */
  constructor(operatingContext) {
    this.operatingContext = operatingContext;
    this.isBrowserEnvironment = this.operatingContext.isBrowserEnvironment();
    this.config = operatingContext.getConfig();
    this.initialized = false;
    this.logger = this.operatingContext.getLogger();
    this.networkClient = this.config.system.networkClient;
    this.navigationClient = this.config.system.navigationClient;
    this.redirectResponse = /* @__PURE__ */ new Map();
    this.hybridAuthCodeResponses = /* @__PURE__ */ new Map();
    this.performanceClient = this.config.telemetry.client;
    if (this.isBrowserEnvironment) {
      this.browserCrypto = new CryptoOps(this.logger, this.performanceClient);
      this.tokenBindingKeyManager = new TokenBindingKeyManager(this.logger, this.performanceClient);
    } else {
      this.browserCrypto = DEFAULT_CRYPTO_IMPLEMENTATION;
      this.tokenBindingKeyManager = DEFAULT_TOKEN_BINDING_KEY_MANAGER;
    }
    this.eventHandler = new EventHandler(this.logger);
    this.browserStorage = this.isBrowserEnvironment ? new BrowserCacheManager(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger, this.performanceClient, this.eventHandler, buildStaticAuthorityOptions(this.config.auth), this.tokenBindingKeyManager) : DEFAULT_BROWSER_CACHE_MANAGER(this.config.auth.clientId, this.logger, this.performanceClient, this.eventHandler, void 0, this.tokenBindingKeyManager);
    const nativeCacheOptions = {
      cacheLocation: BrowserCacheLocation.MemoryStorage,
      cacheRetentionDays: 5
    };
    this.nativeInternalStorage = new BrowserCacheManager(this.config.auth.clientId, nativeCacheOptions, this.browserCrypto, this.logger, this.performanceClient, this.eventHandler, void 0, this.tokenBindingKeyManager);
    this.activeSilentTokenRequests = /* @__PURE__ */ new Map();
    this.trackStateChange = this.trackStateChange.bind(this);
    this.trackStateChangeWithMeasurement = this.trackStateChangeWithMeasurement.bind(this);
  }
  static async createController(operatingContext, request) {
    const controller = new _StandardController(operatingContext);
    await controller.initialize(request);
    return controller;
  }
  trackStateChange(correlationId, event) {
    if (!correlationId) {
      return;
    }
    if (event.type === "visibilitychange") {
      this.logger.info("16v6hv", correlationId);
      this.performanceClient.incrementFields({ visibilityChangeCount: 1 }, correlationId);
    } else if (event.type === "online") {
      this.logger.info("0zirfd", correlationId);
      this.performanceClient.incrementFields({ onlineStatusChangeCount: 1 }, correlationId);
    } else if (event.type === "offline") {
      this.logger.info("1xk9ef", correlationId);
      this.performanceClient.incrementFields({ onlineStatusChangeCount: 1 }, correlationId);
    }
  }
  /**
   * Initializer function to perform async startup tasks such as connecting to WAM extension
   * @param request {?InitializeApplicationRequest} correlation id
   */
  async initialize(request) {
    const correlationId = this.getRequestCorrelationId(request);
    this.logger.trace("1f7joy", correlationId);
    if (this.initialized) {
      this.logger.info("061m5x", correlationId);
      return;
    }
    if (!this.isBrowserEnvironment) {
      this.logger.info("19fvpi", correlationId);
      this.initialized = true;
      this.eventHandler.emitEvent(EventType.INITIALIZE_END, correlationId);
      return;
    }
    const allowPlatformBroker = this.config.system.allowPlatformBroker;
    const initMeasurement = this.performanceClient.startMeasurement(InitializeClientApplication, correlationId);
    this.eventHandler.emitEvent(EventType.INITIALIZE_START, correlationId);
    this.logMultipleInstances(initMeasurement, correlationId);
    initMeasurement.add({ isMcp: this.config.auth.isMcp });
    await invokeAsync(this.browserStorage.initialize.bind(this.browserStorage), InitializeCache, this.logger, this.performanceClient, correlationId)(correlationId);
    if (allowPlatformBroker) {
      try {
        this.platformAuthProvider = await getPlatformAuthProvider(this.logger, this.performanceClient, correlationId, this.config.system.nativeBrokerHandshakeTimeout, this.config.experimental.allowPlatformBrokerWithDOM);
      } catch (e) {
        this.logger.verbose(e, correlationId);
      }
    }
    if (this.config.cache.cacheLocation === BrowserCacheLocation.LocalStorage) {
      this.eventHandler.subscribeCrossTab();
    }
    !this.config.system.navigatePopups && await this.preGeneratePkceCodes(correlationId);
    this.initialized = true;
    this.eventHandler.emitEvent(EventType.INITIALIZE_END, correlationId);
    initMeasurement.end({
      allowPlatformBroker,
      success: true
    });
  }
  // #region Redirect Flow
  /**
   * Event handler function which allows users to fire events after the PublicClientApplication object
   * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
   * auth flows.
   * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
   * @param options Object containing optional configuration for redirect promise handling.
   * @returns Token response or null. If the return value is null, then no auth redirect was detected.
   */
  async handleRedirectPromise(options) {
    this.logger.verbose("02l8bm", "");
    blockAPICallsBeforeInitialize(this.initialized);
    if (this.isBrowserEnvironment) {
      const redirectResponseKey = options?.hash || "";
      let response = this.redirectResponse.get(redirectResponseKey);
      if (typeof response === "undefined") {
        response = this.handleRedirectPromiseInternal(options);
        this.redirectResponse.set(redirectResponseKey, response);
        this.logger.verbose("1wn9kp", "");
      } else {
        this.logger.verbose("0w0gm3", "");
      }
      return response;
    }
    this.logger.verbose("12xi63", "");
    return null;
  }
  /**
   * The internal details of handleRedirectPromise. This is separated out to a helper to allow handleRedirectPromise to memoize requests
   * @param hash
   * @returns
   */
  async handleRedirectPromiseInternal(options) {
    if (!this.browserStorage.isInteractionInProgress(true)) {
      this.logger.info("0le6uv", "");
      return null;
    }
    const interactionType = this.browserStorage.getInteractionInProgress()?.type;
    if (interactionType === INTERACTION_TYPE.SIGNOUT) {
      this.logger.verbose("1ywcv2", "");
      this.browserStorage.setInteractionInProgress(false);
      return Promise.resolve(null);
    }
    const loggedInAccounts = this.getAllAccounts();
    const platformBrokerRequest = this.browserStorage.getCachedNativeRequest();
    const useNative = platformBrokerRequest && !options?.hash;
    let rootMeasurement;
    let redirectResponse;
    let cachedRedirectRequest;
    try {
      if (useNative && this.platformAuthProvider) {
        const correlationId = platformBrokerRequest?.correlationId || "";
        this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_START, correlationId, InteractionType.Redirect);
        rootMeasurement = this.performanceClient.startMeasurement(AcquireTokenRedirect, correlationId);
        this.logger.trace("12v7is", correlationId);
        rootMeasurement.add({
          isPlatformBrokerRequest: true
        });
        const nativeClient = new PlatformAuthInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.handleRedirectPromise, this.performanceClient, this.platformAuthProvider, platformBrokerRequest.accountId, this.nativeInternalStorage, platformBrokerRequest.correlationId, this.tokenBindingKeyManager);
        redirectResponse = invokeAsync(nativeClient.handleRedirectPromise.bind(nativeClient), HandleNativeRedirectPromiseMeasurement, this.logger, this.performanceClient, rootMeasurement.event.correlationId)();
      } else {
        const [standardRequest, codeVerifier] = this.browserStorage.getCachedRequest("");
        cachedRedirectRequest = standardRequest;
        const correlationId = standardRequest.correlationId;
        this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_START, correlationId, InteractionType.Redirect);
        rootMeasurement = this.performanceClient.startMeasurement(AcquireTokenRedirect, correlationId);
        this.logger.trace("0znzs5", correlationId);
        const redirectClient = this.createRedirectClient(correlationId);
        redirectResponse = invokeAsync(redirectClient.handleRedirectPromise.bind(redirectClient), HandleRedirectPromiseMeasurement, this.logger, this.performanceClient, rootMeasurement.event.correlationId)(standardRequest, codeVerifier, rootMeasurement, options);
      }
    } catch (e) {
      this.browserStorage.resetRequestCache("");
      throw e;
    }
    return redirectResponse.then((result) => {
      if (result) {
        this.browserStorage.resetRequestCache(result.correlationId);
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, result.correlationId, InteractionType.Redirect, result);
        this.logger.verbose("0ui8f5", result.correlationId);
        const isLoggingIn = loggedInAccounts.length < this.getAllAccounts().length;
        if (isLoggingIn) {
          this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, result.correlationId, InteractionType.Redirect, result.account);
          this.logger.verbose("16im3l", result.correlationId);
        }
        rootMeasurement.end({
          success: true,
          isNativeBroker: result.fromPlatformBroker ?? false
        }, void 0, result.account);
        this.verifySsoCapability(cachedRedirectRequest, InteractionType.Redirect);
      } else {
        if (!!rootMeasurement.event.errorCode) {
          rootMeasurement.end({ success: false });
        } else {
          rootMeasurement.discard();
        }
      }
      this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_END, rootMeasurement.event.correlationId, InteractionType.Redirect);
      return result;
    }).catch((e) => {
      this.browserStorage.resetRequestCache(rootMeasurement.event.correlationId);
      const eventError = e;
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, rootMeasurement.event.correlationId, InteractionType.Redirect, null, eventError);
      this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_END, rootMeasurement.event.correlationId, InteractionType.Redirect);
      rootMeasurement.end({
        success: false
      }, eventError);
      throw e;
    });
  }
  /**
   * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
   * the page, so any code that follows this function will not execute.
   *
   * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
   * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
   *
   * @param request
   */
  async acquireTokenRedirect(request) {
    const correlationId = this.getRequestCorrelationId(request);
    this.logger.verbose("0os66p", correlationId);
    redirectPreflightCheck(this.initialized, this.config);
    this.browserStorage.setInteractionInProgress(true, INTERACTION_TYPE.SIGNIN);
    const atrMeasurement = this.performanceClient.startMeasurement(AcquireTokenPreRedirect, correlationId);
    atrMeasurement.add({
      scenarioId: request.scenarioId
    });
    const configOnRedirectNavigateCb = this.config.auth.onRedirectNavigate;
    this.config.auth.onRedirectNavigate = (url) => {
      const navigate = typeof configOnRedirectNavigateCb === "function" ? configOnRedirectNavigateCb(url) : void 0;
      atrMeasurement.add({
        navigateCallbackResult: navigate !== false
      });
      atrMeasurement.event = atrMeasurement.end({ success: true }, void 0, request.account) || atrMeasurement.event;
      return navigate;
    };
    try {
      enforceResourceParameter(this.config.auth.isMcp, request);
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, correlationId, InteractionType.Redirect, request);
      let result;
      if (this.platformAuthProvider && this.canUsePlatformBroker(request)) {
        const nativeClient = new PlatformAuthInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenRedirect, this.performanceClient, this.platformAuthProvider, this.getNativeAccountId(request), this.nativeInternalStorage, correlationId, this.tokenBindingKeyManager);
        result = invokeAsync(nativeClient.acquireTokenRedirect.bind(nativeClient), NativeInteractionClientAcquireTokenRedirect, this.logger, this.performanceClient, correlationId)(request, atrMeasurement).catch((e) => {
          if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
            this.platformAuthProvider = void 0;
            const redirectClient = this.createRedirectClient(correlationId);
            return redirectClient.acquireToken(request);
          } else if (e instanceof InteractionRequiredAuthError) {
            this.logger.verbose("1ipyz4", correlationId);
            const redirectClient = this.createRedirectClient(correlationId);
            return redirectClient.acquireToken(request);
          }
          throw e;
        });
      } else {
        const redirectClient = this.createRedirectClient(correlationId);
        result = redirectClient.acquireToken(request);
      }
      return await result;
    } catch (e) {
      this.browserStorage.resetRequestCache(correlationId);
      if (atrMeasurement.event.status === 2) {
        this.performanceClient.startMeasurement(AcquireTokenRedirect, correlationId).end({ success: false }, e, request.account);
      } else {
        atrMeasurement.end({ success: false }, e, request.account);
      }
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, correlationId, InteractionType.Redirect, null, e);
      throw e;
    }
  }
  // #endregion
  // #region Popup Flow
  /**
   * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
   *
   * @param request
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  acquireTokenPopup(request) {
    const correlationId = this.getRequestCorrelationId(request);
    const atPopupMeasurement = this.performanceClient.startMeasurement(AcquireTokenPopup, correlationId);
    atPopupMeasurement.add({
      scenarioId: request.scenarioId
    });
    try {
      this.logger.verbose("0ch87b", correlationId);
      preflightCheck2(this.initialized, atPopupMeasurement, this.config, request);
      this.browserStorage.setInteractionInProgress(true, INTERACTION_TYPE.SIGNIN, request.overrideInteractionInProgress, correlationId);
    } catch (e) {
      return Promise.reject(e);
    }
    const loggedInAccounts = this.getAllAccounts();
    this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, correlationId, InteractionType.Popup, request);
    let result;
    const pkce = this.getPreGeneratedPkceCodes(correlationId);
    if (this.canUsePlatformBroker(request)) {
      atPopupMeasurement.add({
        isPlatformBrokerRequest: true
      });
      result = this.acquireTokenNative(__spreadProps(__spreadValues({}, request), {
        correlationId
      }), ApiId.acquireTokenPopup).then((response) => {
        atPopupMeasurement.end({
          success: true,
          isNativeBroker: response.fromPlatformBroker ?? false
        }, void 0, response.account);
        return response;
      }).catch((e) => {
        if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
          this.platformAuthProvider = void 0;
          const popupClient = this.createPopupClient(correlationId);
          return popupClient.acquireToken(request, pkce);
        } else if (e instanceof InteractionRequiredAuthError) {
          this.logger.verbose("0yy5fw", correlationId);
          const popupClient = this.createPopupClient(correlationId);
          return popupClient.acquireToken(request, pkce);
        }
        throw e;
      });
    } else {
      const popupClient = this.createPopupClient(correlationId);
      result = popupClient.acquireToken(request, pkce);
    }
    return result.then((result2) => {
      const isLoggingIn = loggedInAccounts.length < this.getAllAccounts().length;
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, correlationId, InteractionType.Popup, result2);
      if (isLoggingIn) {
        this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, correlationId, InteractionType.Popup, result2.account);
      }
      atPopupMeasurement.end({
        success: true,
        isNativeBroker: result2.fromPlatformBroker ?? false,
        accessTokenSize: result2.accessToken.length,
        idTokenSize: result2.idToken.length
      }, void 0, result2.account);
      this.verifySsoCapability(request, InteractionType.Popup);
      return result2;
    }).catch((e) => {
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, correlationId, InteractionType.Popup, null, e);
      atPopupMeasurement.end({
        success: false
      }, e, request.account);
      return Promise.reject(e);
    }).finally(async () => {
      this.browserStorage.setInteractionInProgress(false);
      if (!this.config.system.navigatePopups) {
        await this.preGeneratePkceCodes(correlationId);
      }
    });
  }
  trackStateChangeWithMeasurement(event) {
    const measurement = this.ssoSilentMeasurement || this.acquireTokenByCodeAsyncMeasurement;
    if (!measurement) {
      return;
    }
    if (event.type === "visibilitychange") {
      this.logger.info(`0yzimq ${measurement.event.name}`, measurement.event.correlationId);
      measurement.increment({
        visibilityChangeCount: 1
      });
    } else if (event.type === "online") {
      this.logger.info(`1caf53 ${measurement.event.name}`, measurement.event.correlationId);
      measurement.increment({
        onlineStatusChangeCount: 1
      });
    } else if (event.type === "offline") {
      this.logger.info(`0fdyk7 ${measurement.event.name}`, measurement.event.correlationId);
      measurement.increment({
        onlineStatusChangeCount: 1
      });
    }
  }
  addStateChangeListeners(listener) {
    document.addEventListener("visibilitychange", listener);
    window.addEventListener("online", listener);
    window.addEventListener("offline", listener);
  }
  removeStateChangeListeners(listener) {
    document.removeEventListener("visibilitychange", listener);
    window.removeEventListener("online", listener);
    window.removeEventListener("offline", listener);
  }
  /**
   * Reads the cached ssoCapable value from localStorage.
   * @returns The cached ssoCapable boolean value, or undefined if not cached or expired.
   */
  getCachedSsoCapable() {
    try {
      const cachedValue = window.localStorage.getItem(SSO_CAPABLE);
      if (cachedValue) {
        const parsed = JSON.parse(cachedValue);
        if (parsed && typeof parsed.ssoCapable === "boolean" && parsed.expiresOn && Date.now() < parsed.expiresOn) {
          return parsed.ssoCapable;
        }
      }
    } catch {
    }
    return void 0;
  }
  /**
   * SSO capability verification in the background.
   * This method makes an iframe request to /authorize to verify SSO capability without calling /token.
   * This method does not block the caller and tracks telemetry for success/failure.
   * This method only executes if verifySSO is set to true in the auth configuration.
   * The result is cached in localStorage with a 24-hour TTL; the SSO verification call
   * is only attempted when the cached value is absent or expired.
   * @param request - The original request used for the authentication flow
   * @param interactionType - The interactionType of the AT operation for logging purposes
   */
  verifySsoCapability(request, interactionType) {
    if (!this.config.auth.verifySSO) {
      return;
    }
    const ssoCacheKey = SSO_CAPABLE;
    const SSO_CAPABLE_TTL_MS = 24 * 60 * 60 * 1e3;
    const cachedSsoCapable = this.getCachedSsoCapable();
    if (cachedSsoCapable !== void 0) {
      this.logger.verbose(`13poou ${interactionType}`, "");
      return;
    }
    const correlationId = createNewGuid();
    const ssoCapableMeasurement = this.performanceClient.startMeasurement(SsoCapable, correlationId);
    ssoCapableMeasurement.add({
      "ext.interactionType": interactionType
    });
    this.logger.verbose(`0pbr0i ${interactionType}`, correlationId);
    setTimeout(() => {
      const ssoVerificationRequest = __spreadProps(__spreadValues({}, request), {
        correlationId
      });
      const silentIframeClient = this.createSilentIframeClient(correlationId);
      silentIframeClient.verifySso(ssoVerificationRequest).then((result) => {
        this.logger.verbose(`1gd1iv ${interactionType} ${result}`, correlationId);
        try {
          const cacheEntry = JSON.stringify({
            ssoCapable: result,
            expiresOn: Date.now() + SSO_CAPABLE_TTL_MS
          });
          window.localStorage.setItem(ssoCacheKey, cacheEntry);
        } catch {
          this.logger.warning(`18lmoj ${interactionType}`, correlationId);
        }
        ssoCapableMeasurement.end({
          fromCache: false,
          success: result
        }, void 0);
      }).catch((error) => {
        this.logger.warning(`05g83w ${interactionType} ${error.message}`, correlationId);
        try {
          window.localStorage.removeItem(ssoCacheKey);
        } catch {
          this.logger.warning(`0nlf9q ${interactionType}`, correlationId);
        }
        ssoCapableMeasurement.end({
          fromCache: false,
          success: false
        }, error);
      });
    }, 0);
  }
  // #endregion
  // #region Silent Flow
  /**
   * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
   * - Any browser using a form of Intelligent Tracking Prevention
   * - If there is not an established session with the service
   *
   * In these cases, the request must be done inside a popup or full frame redirect.
   *
   * For the cases where interaction is required, you cannot send a request with prompt=none.
   *
   * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
   * you session on the server still exists.
   * @param request {@link SsoSilentRequest}
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  async ssoSilent(request) {
    const correlationId = this.getRequestCorrelationId(request);
    const validRequest = __spreadProps(__spreadValues({}, request), {
      correlationId
    });
    this.ssoSilentMeasurement = this.performanceClient.startMeasurement(SsoSilent, correlationId);
    this.ssoSilentMeasurement?.add({
      scenarioId: request.scenarioId,
      ssoCapable: this.getCachedSsoCapable()
    });
    preflightCheck2(this.initialized, this.ssoSilentMeasurement, this.config, validRequest);
    this.ssoSilentMeasurement?.increment({
      visibilityChangeCount: 0,
      onlineStatusChangeCount: 0
    });
    this.addStateChangeListeners(this.trackStateChangeWithMeasurement);
    const loggedInAccounts = this.getAllAccounts();
    this.logger.verbose("0w1b45", correlationId);
    this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, correlationId, InteractionType.Silent, validRequest);
    let result;
    if (this.canUsePlatformBroker(validRequest)) {
      this.ssoSilentMeasurement?.add({
        isPlatformBrokerRequest: true
      });
      result = this.acquireTokenNative(validRequest, ApiId.ssoSilent).catch((e) => {
        if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
          this.platformAuthProvider = void 0;
          const silentIframeClient = this.createSilentIframeClient(validRequest.correlationId);
          return silentIframeClient.acquireToken(validRequest);
        }
        throw e;
      });
    } else {
      const silentIframeClient = this.createSilentIframeClient(validRequest.correlationId);
      result = silentIframeClient.acquireToken(validRequest);
    }
    return result.then((response) => {
      const isLoggingIn = loggedInAccounts.length < this.getAllAccounts().length;
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, correlationId, InteractionType.Silent, response);
      if (isLoggingIn) {
        this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, correlationId, InteractionType.Silent, response.account);
      }
      this.ssoSilentMeasurement?.end({
        success: true,
        isNativeBroker: response.fromPlatformBroker ?? false,
        accessTokenSize: response.accessToken.length,
        idTokenSize: response.idToken.length
      }, void 0, response.account);
      return response;
    }).catch((e) => {
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, correlationId, InteractionType.Silent, null, e);
      this.ssoSilentMeasurement?.end({
        success: false
      }, e, request.account);
      throw e;
    }).finally(() => {
      this.removeStateChangeListeners(this.trackStateChangeWithMeasurement);
    });
  }
  /**
   * This function redeems an authorization code (passed as code) from the eSTS token endpoint.
   * This authorization code should be acquired server-side using a confidential client to acquire a spa_code.
   * This API is not indended for normal authorization code acquisition and redemption.
   *
   * Redemption of this authorization code will not require PKCE, as it was acquired by a confidential client.
   *
   * @param request {@link AuthorizationCodeRequest}
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  async acquireTokenByCode(request) {
    const correlationId = this.getRequestCorrelationId(request);
    this.logger.trace("0ch6ga", correlationId);
    const atbcMeasurement = this.performanceClient.startMeasurement(AcquireTokenByCode, correlationId);
    preflightCheck2(this.initialized, atbcMeasurement, this.config, request);
    this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, correlationId, InteractionType.Silent, request);
    atbcMeasurement.add({ scenarioId: request.scenarioId });
    try {
      if (request.code && request.nativeAccountId) {
        throw createBrowserAuthError(spaCodeAndNativeAccountIdPresent, correlationId);
      } else if (request.code) {
        const hybridAuthCode = request.code;
        let response = this.hybridAuthCodeResponses.get(hybridAuthCode);
        if (!response) {
          this.logger.verbose("06eh73", correlationId);
          response = this.acquireTokenByCodeAsync(__spreadProps(__spreadValues({}, request), {
            correlationId
          })).then((result) => {
            this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, correlationId, InteractionType.Silent, result);
            this.hybridAuthCodeResponses.delete(hybridAuthCode);
            atbcMeasurement.end({
              success: true,
              isNativeBroker: false,
              accessTokenSize: result.accessToken.length,
              idTokenSize: result.idToken.length
            }, void 0, result.account);
            return result;
          }).catch((error) => {
            this.hybridAuthCodeResponses.delete(hybridAuthCode);
            this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, correlationId, InteractionType.Silent, null, error);
            atbcMeasurement.end({
              success: false
            }, error);
            throw error;
          });
          this.hybridAuthCodeResponses.set(hybridAuthCode, response);
        } else {
          this.logger.verbose("0qgp28", correlationId);
          atbcMeasurement.discard();
        }
        return await response;
      } else if (request.nativeAccountId) {
        if (this.canUsePlatformBroker(request, request.nativeAccountId)) {
          atbcMeasurement.add({
            isPlatformBrokerRequest: true
          });
          const result = await this.acquireTokenNative(__spreadProps(__spreadValues({}, request), {
            correlationId
          }), ApiId.acquireTokenByCode, request.nativeAccountId).catch((e) => {
            if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
              this.platformAuthProvider = void 0;
            }
            throw e;
          });
          atbcMeasurement.end({
            success: true,
            isNativeBroker: result.fromPlatformBroker ?? false
          }, void 0, result.account);
          return result;
        } else {
          throw createBrowserAuthError(unableToAcquireTokenFromNativePlatform, correlationId);
        }
      } else {
        throw createBrowserAuthError(authCodeOrNativeAccountIdRequired, correlationId);
      }
    } catch (e) {
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, correlationId, InteractionType.Silent, null, e);
      atbcMeasurement.end({
        success: false
      }, e);
      throw e;
    }
  }
  /**
   * Creates a SilentAuthCodeClient to redeem an authorization code.
   * @param request
   * @returns Result of the operation to redeem the authorization code
   */
  async acquireTokenByCodeAsync(request) {
    const correlationId = this.getRequestCorrelationId(request);
    this.logger.trace("10d9hy", correlationId);
    this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(AcquireTokenByCodeAsync, correlationId);
    this.acquireTokenByCodeAsyncMeasurement?.increment({
      visibilityChangeCount: 0,
      onlineStatusChangeCount: 0
    });
    this.addStateChangeListeners(this.trackStateChangeWithMeasurement);
    const silentAuthCodeClient = this.createSilentAuthCodeClient(correlationId);
    const silentTokenResult = await silentAuthCodeClient.acquireToken(request).then((response) => {
      this.acquireTokenByCodeAsyncMeasurement?.end({
        success: true,
        isNativeBroker: false,
        fromCache: response.fromCache
      });
      return response;
    }).catch((tokenRenewalError) => {
      this.acquireTokenByCodeAsyncMeasurement?.end({
        success: false
      }, tokenRenewalError);
      throw tokenRenewalError;
    }).finally(() => {
      this.removeStateChangeListeners(this.trackStateChangeWithMeasurement);
    });
    return silentTokenResult;
  }
  /**
   * Attempt to acquire an access token from the cache
   * @param silentCacheClient SilentCacheClient
   * @param commonRequest CommonSilentFlowRequest
   * @param silentRequest SilentRequest
   * @returns A promise that, when resolved, returns the access token
   */
  async acquireTokenFromCache(commonRequest, cacheLookupPolicy) {
    switch (cacheLookupPolicy) {
      case CacheLookupPolicy.Default:
      case CacheLookupPolicy.AccessToken:
      case CacheLookupPolicy.AccessTokenAndRefreshToken:
        const silentCacheClient = this.createSilentCacheClient(commonRequest.correlationId);
        return invokeAsync(silentCacheClient.acquireToken.bind(silentCacheClient), SilentCacheClientAcquireToken, this.logger, this.performanceClient, commonRequest.correlationId)(commonRequest);
      default:
        throw createClientAuthError(ClientAuthErrorCodes_exports.tokenRefreshRequired, commonRequest.correlationId);
    }
  }
  /**
   * Attempt to acquire an access token via a refresh token
   * @param commonRequest CommonSilentFlowRequest
   * @param cacheLookupPolicy CacheLookupPolicy
   * @returns A promise that, when resolved, returns the access token
   */
  async acquireTokenByRefreshToken(commonRequest, cacheLookupPolicy) {
    switch (cacheLookupPolicy) {
      case CacheLookupPolicy.Default:
      case CacheLookupPolicy.AccessTokenAndRefreshToken:
      case CacheLookupPolicy.RefreshToken:
      case CacheLookupPolicy.RefreshTokenAndNetwork:
        const silentRefreshClient = this.createSilentRefreshClient(commonRequest.correlationId);
        return invokeAsync(silentRefreshClient.acquireToken.bind(silentRefreshClient), SilentRefreshClientAcquireToken, this.logger, this.performanceClient, commonRequest.correlationId)(commonRequest);
      default:
        throw createClientAuthError(ClientAuthErrorCodes_exports.tokenRefreshRequired, commonRequest.correlationId);
    }
  }
  /**
   * Attempt to acquire an access token via an iframe
   * @param request CommonSilentFlowRequest
   * @returns A promise that, when resolved, returns the access token
   */
  async acquireTokenBySilentIframe(request) {
    const silentIframeClient = this.createSilentIframeClient(request.correlationId);
    return invokeAsync(silentIframeClient.acquireToken.bind(silentIframeClient), SilentIframeClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(request);
  }
  // #endregion
  // #region Logout
  /**
   * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
   * Default behaviour is to redirect the user to `window.location.href`.
   * @param logoutRequest
   */
  async logoutRedirect(logoutRequest) {
    const correlationId = this.getRequestCorrelationId(logoutRequest);
    redirectPreflightCheck(this.initialized, this.config);
    this.browserStorage.setInteractionInProgress(true, INTERACTION_TYPE.SIGNOUT);
    const redirectClient = this.createRedirectClient(correlationId);
    return redirectClient.logout(logoutRequest);
  }
  /**
   * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
   * @param logoutRequest
   */
  logoutPopup(logoutRequest) {
    try {
      const correlationId = this.getRequestCorrelationId(logoutRequest);
      preflightCheck(this.initialized);
      this.browserStorage.setInteractionInProgress(true, INTERACTION_TYPE.SIGNOUT);
      const popupClient = this.createPopupClient(correlationId);
      return popupClient.logout(logoutRequest).finally(() => {
        this.browserStorage.setInteractionInProgress(false);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Creates a cache interaction client to clear broswer cache.
   * @param logoutRequest
   */
  async clearCache(logoutRequest) {
    if (!this.isBrowserEnvironment) {
      return;
    }
    const correlationId = this.getRequestCorrelationId(logoutRequest);
    const cacheClient = this.createSilentCacheClient(correlationId);
    return cacheClient.logout(logoutRequest);
  }
  // #endregion
  // #region Account APIs
  /**
   * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
   * @param accountFilter - (Optional) filter to narrow down the accounts returned
   * @returns Array of AccountInfo objects in cache
   */
  getAllAccounts(accountFilter) {
    return getAllAccounts(this.logger, this.browserStorage, this.isBrowserEnvironment, this.getRequestCorrelationId(), accountFilter);
  }
  /**
   * Returns the first account found in the cache that matches the account filter passed in.
   * @param accountFilter
   * @returns The first account found in the cache matching the provided filter or null if no account could be found.
   */
  getAccount(accountFilter) {
    return getAccount(accountFilter, this.logger, this.browserStorage, this.getRequestCorrelationId());
  }
  /**
   * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
   * @param account
   */
  setActiveAccount(account) {
    setActiveAccount(account, this.browserStorage, this.getRequestCorrelationId());
  }
  /**
   * Gets the currently active account
   */
  getActiveAccount() {
    return getActiveAccount(this.browserStorage, this.getRequestCorrelationId());
  }
  // #endregion
  /**
   * Hydrates the cache with the tokens from an AuthenticationResult
   * @param result
   * @param request
   * @returns
   */
  async hydrateCache(result, request) {
    this.logger.verbose("16jycr", result.correlationId);
    const accountEntity = AccountEntityUtils_exports.createAccountEntityFromAccountInfo(result.account, result.cloudGraphHostName, result.msGraphHost);
    await this.browserStorage.setAccount(accountEntity, result.correlationId, AuthToken_exports.isKmsi(result.idTokenClaims), ApiId.hydrateCache);
    if (result.fromPlatformBroker) {
      this.logger.verbose("1i5atf", result.correlationId);
      const idTokenEntity = CacheHelpers_exports.createIdTokenEntity(result.account.homeAccountId, result.account.environment, result.idToken, this.config.auth.clientId, result.tenantId);
      const attributeTokenPartition = CacheHelpers_exports.serializeAttributeTokens(request.attributeTokens);
      const additionalCacheKeyComponents = attributeTokenPartition ? {
        attribute_tokens: attributeTokenPartition
      } : void 0;
      const accessTokenEntity = CacheHelpers_exports.createAccessTokenEntity(
        result.account.homeAccountId,
        result.account.environment,
        result.accessToken,
        this.config.auth.clientId,
        result.tenantId,
        result.scopes.join(" "),
        result.expiresOn ? TimeUtils_exports.toSecondsFromDate(result.expiresOn) : 0,
        result.extExpiresOn ? TimeUtils_exports.toSecondsFromDate(result.extExpiresOn) : 0,
        base64Decode,
        request.correlationId || "",
        void 0,
        // refreshOn
        result.tokenType,
        void 0,
        // userAssertionHash
        request.sshKid,
        additionalCacheKeyComponents
      );
      if (request.resource) {
        accessTokenEntity.resource = request.resource;
      }
      const components = additionalCacheKeyComponents;
      const additionalCacheKeyHash = components ? await this.browserCrypto.hashString(JSON.stringify(components)) : void 0;
      const kmsi = AuthToken_exports.isKmsi(result.idTokenClaims);
      await this.browserStorage.setIdTokenCredential(idTokenEntity, result.correlationId, kmsi);
      await this.nativeInternalStorage.setAccessTokenCredential(accessTokenEntity, result.correlationId, kmsi, additionalCacheKeyHash);
    } else {
      return this.browserStorage.hydrateCache(result, request);
    }
  }
  // #region Helpers
  /**
   * Acquire a token from native device (e.g. WAM)
   * @param request
   * @param apiId
   * @param accountId
   * @param cacheLookupPolicy
   */
  async acquireTokenNative(request, apiId, accountId, cacheLookupPolicy) {
    const correlationId = this.getRequestCorrelationId(request);
    this.logger.trace("0b9y3p", correlationId);
    if (!this.platformAuthProvider) {
      throw createBrowserAuthError(nativeConnectionNotEstablished, correlationId);
    }
    const nativeClient = new PlatformAuthInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, apiId, this.performanceClient, this.platformAuthProvider, accountId || this.getNativeAccountId(request), this.nativeInternalStorage, correlationId, this.tokenBindingKeyManager);
    return invokeAsync(nativeClient.acquireToken.bind(nativeClient), NativeInteractionClientAcquireToken, this.logger, this.performanceClient, correlationId)(request, cacheLookupPolicy);
  }
  /**
   * Returns boolean indicating if this request can use the platform broker
   * @param request
   */
  canUsePlatformBroker(request, accountId) {
    const correlationId = this.getRequestCorrelationId(request);
    this.logger.trace("1n9lbl", correlationId);
    if (!this.platformAuthProvider) {
      this.logger.trace("0vnu11", correlationId);
      return false;
    }
    if (!isPlatformAuthAllowed(this.config, this.logger, correlationId, this.platformAuthProvider, request.authenticationScheme)) {
      this.logger.trace("0yoy1g", correlationId);
      return false;
    }
    if (request.prompt) {
      switch (request.prompt) {
        case Constants_exports.PromptValue.NONE:
        case Constants_exports.PromptValue.CONSENT:
        case Constants_exports.PromptValue.LOGIN:
          this.logger.trace("0vdv8e", correlationId);
          break;
        default:
          this.logger.trace(`0pdzw6 ${request.prompt}`, correlationId);
          return false;
      }
    }
    if (!accountId && !this.getNativeAccountId(request)) {
      this.logger.trace("16lbtk", correlationId);
      return false;
    }
    return true;
  }
  /**
   * Get the native accountId from the account
   * @param request
   * @returns
   */
  getNativeAccountId(request) {
    const account = request.account || this.getAccount({
      loginHint: request.loginHint,
      sid: request.sid
    }) || (!request.loginHint && !request.sid ? this.getActiveAccount() : null);
    return account && account.nativeAccountId || "";
  }
  /**
   * Returns new instance of the Popup Interaction Client
   * @param correlationId
   */
  createPopupClient(correlationId) {
    return new PopupClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, correlationId, this.platformAuthProvider, this.operatingContext.getResponseHandlers()?.waitForPopupResponse, this.tokenBindingKeyManager);
  }
  /**
   * Returns new instance of the Redirect Interaction Client
   * @param correlationId
   */
  createRedirectClient(correlationId) {
    return new RedirectClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, correlationId, this.platformAuthProvider, this.tokenBindingKeyManager);
  }
  /**
   * Returns new instance of the Silent Iframe Interaction Client
   * @param correlationId
   */
  createSilentIframeClient(correlationId) {
    return new SilentIframeClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.ssoSilent, this.performanceClient, this.nativeInternalStorage, correlationId, this.platformAuthProvider, this.operatingContext.getResponseHandlers()?.waitForIframeResponse, this.tokenBindingKeyManager);
  }
  /**
   * Returns new instance of the Silent Cache Interaction Client
   */
  createSilentCacheClient(correlationId) {
    return new SilentCacheClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, correlationId, this.platformAuthProvider, this.tokenBindingKeyManager);
  }
  /**
   * Returns new instance of the Silent Refresh Interaction Client
   */
  createSilentRefreshClient(correlationId) {
    return new SilentRefreshClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, correlationId, this.platformAuthProvider, this.tokenBindingKeyManager);
  }
  /**
   * Returns new instance of the Silent AuthCode Interaction Client
   */
  createSilentAuthCodeClient(correlationId) {
    return new SilentAuthCodeClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenByCode, this.performanceClient, correlationId, this.platformAuthProvider, this.tokenBindingKeyManager);
  }
  /**
   * Adds event callbacks to array
   * @param callback
   */
  addEventCallback(callback, eventTypes) {
    return this.eventHandler.addEventCallback(callback, eventTypes);
  }
  /**
   * Removes callback with provided id from callback array
   * @param callbackId
   */
  removeEventCallback(callbackId) {
    this.eventHandler.removeEventCallback(callbackId);
  }
  /**
   * Registers a callback to receive performance events.
   *
   * @param {PerformanceCallbackFunction} callback
   * @returns {string}
   */
  addPerformanceCallback(callback) {
    blockNonBrowserEnvironment();
    return this.performanceClient.addPerformanceCallback(callback);
  }
  /**
   * Removes a callback registered with addPerformanceCallback.
   *
   * @param {string} callbackId
   * @returns {boolean}
   */
  removePerformanceCallback(callbackId) {
    return this.performanceClient.removePerformanceCallback(callbackId);
  }
  /**
   * Returns the logger instance
   */
  getLogger() {
    return this.logger;
  }
  /**
   * Replaces the default logger set in configurations with new Logger with new configurations
   * @param logger Logger instance
   */
  setLogger(logger) {
    this.logger = logger;
  }
  /**
   * Called by wrapper libraries (Angular & React) to set SKU and Version passed down to telemetry, logger, etc.
   * @param sku
   * @param version
   */
  initializeWrapperLibrary(sku, version3) {
    this.browserStorage.setWrapperMetadata(sku, version3);
  }
  /**
   * Sets navigation client
   * @param navigationClient
   */
  setNavigationClient(navigationClient) {
    this.navigationClient = navigationClient;
  }
  /**
   * Returns the configuration object
   */
  getConfiguration() {
    return this.config;
  }
  /**
   * Returns the performance client
   */
  getPerformanceClient() {
    return this.performanceClient;
  }
  /**
   * Returns the browser env indicator
   */
  isBrowserEnv() {
    return this.isBrowserEnvironment;
  }
  /**
   * Generates a correlation id for a request if none is provided.
   *
   * @protected
   * @param {?Partial<BaseAuthRequest>} [request]
   * @returns {string}
   */
  getRequestCorrelationId(request) {
    if (request?.correlationId) {
      return request.correlationId;
    }
    if (this.isBrowserEnvironment) {
      return createNewGuid();
    }
    return "";
  }
  // #endregion
  /**
   * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
   * any code that follows this function will not execute.
   *
   * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
   * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
   *
   * @param request
   */
  async loginRedirect(request) {
    const correlationId = this.getRequestCorrelationId(request);
    this.logger.verbose("0lz9hf", correlationId);
    return this.acquireTokenRedirect(__spreadValues({
      correlationId
    }, request || DEFAULT_REQUEST));
  }
  /**
   * Use when initiating the login process via opening a popup window in the user's browser
   *
   * @param request
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  loginPopup(request) {
    const correlationId = this.getRequestCorrelationId(request);
    this.logger.verbose("0qw7v5", correlationId);
    return this.acquireTokenPopup(__spreadValues({
      correlationId
    }, request || DEFAULT_REQUEST));
  }
  /**
   * Silently acquire an access token for a given set of scopes. Returns currently processing promise if parallel requests are made.
   *
   * @param {@link (SilentRequest:type)}
   * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
   */
  async acquireTokenSilent(request) {
    const correlationId = this.getRequestCorrelationId(request);
    const atsMeasurement = this.performanceClient.startMeasurement(AcquireTokenSilent, correlationId);
    atsMeasurement.add({
      cacheLookupPolicy: request.cacheLookupPolicy,
      scenarioId: request.scenarioId,
      ssoCapable: this.getCachedSsoCapable()
    });
    preflightCheck2(this.initialized, atsMeasurement, this.config, request);
    this.logger.verbose("0x1c4s", correlationId);
    const account = request.account || this.getActiveAccount();
    if (!account) {
      throw createBrowserAuthError(noAccountError, correlationId);
    }
    return this.acquireTokenSilentDeduped(request, account, correlationId).then((result) => {
      atsMeasurement.end({
        success: true,
        isNativeBroker: result.fromPlatformBroker ?? false,
        fromCache: result.fromCache,
        accessTokenSize: result.accessToken.length,
        idTokenSize: result.idToken.length
      }, void 0, result.account);
      return __spreadProps(__spreadValues({}, result), {
        state: request.state,
        correlationId
        // Ensures PWB scenarios can correctly match request to response
      });
    }).catch((error) => {
      if (error instanceof AuthError) {
        error.correlationId = correlationId;
      }
      atsMeasurement.end({
        success: false
      }, error, account);
      throw error;
    });
  }
  /**
   * Checks if identical request is already in flight and returns reference to the existing promise or fires off a new one if this is the first
   * @param request
   * @param account
   * @param correlationId
   * @returns
   */
  async acquireTokenSilentDeduped(request, account, correlationId) {
    const thumbprint = getRequestThumbprint(this.config.auth.clientId, __spreadProps(__spreadValues({}, request), {
      authority: request.authority || this.config.auth.authority,
      correlationId
    }), account.homeAccountId);
    const silentRequestKey = JSON.stringify(thumbprint);
    const inProgressRequest = this.activeSilentTokenRequests.get(silentRequestKey);
    if (typeof inProgressRequest === "undefined") {
      this.logger.verbose("0fcjbk", correlationId);
      this.performanceClient.addFields({ deduped: false }, correlationId);
      const activeRequest = invokeAsync(this.acquireTokenSilentAsync.bind(this), AcquireTokenSilentAsync, this.logger, this.performanceClient, correlationId)(__spreadProps(__spreadValues({}, request), {
        correlationId
      }), account);
      this.activeSilentTokenRequests.set(silentRequestKey, activeRequest);
      return activeRequest.finally(() => {
        this.activeSilentTokenRequests.delete(silentRequestKey);
      });
    } else {
      this.logger.verbose("1yq7nb", correlationId);
      this.performanceClient.addFields({ deduped: true }, correlationId);
      return inProgressRequest;
    }
  }
  /**
   * Silently acquire an access token for a given set of scopes. Will use cached token if available, otherwise will attempt to acquire a new token from the network via refresh token.
   * @param {@link (SilentRequest:type)}
   * @param {@link (AccountInfo:type)}
   * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse}
   */
  async acquireTokenSilentAsync(request, account) {
    const trackStateChange = (event) => this.trackStateChange(request.correlationId, event);
    this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, request.correlationId, InteractionType.Silent, request);
    if (request.correlationId) {
      this.performanceClient.incrementFields({ visibilityChangeCount: 0, onlineStatusChangeCount: 0 }, request.correlationId);
    }
    this.addStateChangeListeners(trackStateChange);
    const silentRequest = await invokeAsync(initializeSilentRequest, InitializeSilentRequest, this.logger, this.performanceClient, request.correlationId)(request, account, this.config, this.performanceClient, this.logger);
    const cacheLookupPolicy = request.cacheLookupPolicy || CacheLookupPolicy.Default;
    const result = this.acquireTokenSilentNoIframe(silentRequest, cacheLookupPolicy).catch(async (refreshTokenError) => {
      const shouldTryToResolveSilently = checkIfRefreshTokenErrorCanBeResolvedSilently(refreshTokenError, cacheLookupPolicy);
      if (shouldTryToResolveSilently) {
        const silentRefreshReason = `${refreshTokenError.errorCode}${refreshTokenError.subError ? `|${refreshTokenError.subError}` : ""}`;
        this.performanceClient.addFields({ silentRefreshReason }, request.correlationId);
        if (!this.activeIframeRequest) {
          let _resolve;
          this.activeIframeRequest = [
            new Promise((resolve) => {
              _resolve = resolve;
            }),
            silentRequest.correlationId
          ];
          this.logger.verbose("0rh08z", silentRequest.correlationId);
          return invokeAsync(this.acquireTokenBySilentIframe.bind(this), AcquireTokenBySilentIframe, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest).then((iframeResult) => {
            _resolve(true);
            return iframeResult;
          }).catch((e) => {
            _resolve(false);
            throw e;
          }).finally(() => {
            this.activeIframeRequest = void 0;
          });
        } else if (cacheLookupPolicy !== CacheLookupPolicy.Skip) {
          const [activePromise, activeCorrelationId] = this.activeIframeRequest;
          this.logger.verbose(`1w8fso ${activeCorrelationId}`, silentRequest.correlationId);
          const awaitConcurrentIframeMeasure = this.performanceClient.startMeasurement(AwaitConcurrentIframe, silentRequest.correlationId);
          awaitConcurrentIframeMeasure.add({
            awaitIframeCorrelationId: activeCorrelationId
          });
          const activePromiseResult = await activePromise;
          awaitConcurrentIframeMeasure.end({
            success: activePromiseResult
          });
          if (activePromiseResult) {
            this.logger.verbose(`0ywzzi ${activeCorrelationId}`, silentRequest.correlationId);
            return this.acquireTokenSilentNoIframe(silentRequest, cacheLookupPolicy);
          } else {
            this.logger.info(`17y14q ${activeCorrelationId}`, silentRequest.correlationId);
            throw refreshTokenError;
          }
        } else {
          this.logger.warning("1bd4p8", silentRequest.correlationId);
          return invokeAsync(this.acquireTokenBySilentIframe.bind(this), AcquireTokenBySilentIframe, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest);
        }
      } else {
        throw refreshTokenError;
      }
    });
    return result.then((response) => {
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, request.correlationId, InteractionType.Silent, response);
      if (request.correlationId) {
        this.performanceClient.addFields({
          fromCache: response.fromCache,
          isNativeBroker: response.fromPlatformBroker ?? false
        }, request.correlationId);
      }
      return response;
    }).catch((tokenRenewalError) => {
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, request.correlationId, InteractionType.Silent, null, tokenRenewalError);
      throw tokenRenewalError;
    }).finally(() => {
      this.removeStateChangeListeners(trackStateChange);
    });
  }
  /**
   * AcquireTokenSilent without the iframe fallback. This is used to enable the correct fallbacks in cases where there's a potential for multiple silent requests to be made in parallel and prevent those requests from making concurrent iframe requests.
   * @param silentRequest
   * @param cacheLookupPolicy
   * @returns
   */
  async acquireTokenSilentNoIframe(silentRequest, cacheLookupPolicy) {
    if (isPlatformAuthAllowed(this.config, this.logger, silentRequest.correlationId, this.platformAuthProvider, silentRequest.authenticationScheme) && silentRequest.account.nativeAccountId) {
      this.logger.verbose("0sczo4", silentRequest.correlationId);
      this.performanceClient.addFields({ isPlatformBrokerRequest: true }, silentRequest.correlationId);
      return this.acquireTokenNative(silentRequest, ApiId.acquireTokenSilent_silentFlow, silentRequest.account.nativeAccountId, cacheLookupPolicy).catch(async (e) => {
        if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
          this.logger.verbose("07rkmb", silentRequest.correlationId);
          this.platformAuthProvider = void 0;
          throw createClientAuthError(ClientAuthErrorCodes_exports.tokenRefreshRequired, silentRequest.correlationId);
        }
        throw e;
      });
    } else {
      this.logger.verbose("0ox81t", silentRequest.correlationId);
      if (cacheLookupPolicy === CacheLookupPolicy.AccessToken) {
        this.logger.verbose("0fvwxe", silentRequest.correlationId);
      }
      return invokeAsync(this.acquireTokenFromCache.bind(this), AcquireTokenFromCache, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest, cacheLookupPolicy).catch((cacheError) => {
        if (cacheLookupPolicy === CacheLookupPolicy.AccessToken) {
          throw cacheError;
        }
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_NETWORK_START, silentRequest.correlationId, InteractionType.Silent, silentRequest);
        return invokeAsync(this.acquireTokenByRefreshToken.bind(this), AcquireTokenByRefreshToken, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest, cacheLookupPolicy);
      });
    }
  }
  /**
   * Pre-generates PKCE codes and stores it in local variable
   * @param correlationId
   */
  async preGeneratePkceCodes(correlationId) {
    this.logger.verbose("1x6uj6", correlationId);
    this.pkceCode = await invokeAsync(generatePkceCodes, GeneratePkceCodes, this.logger, this.performanceClient, correlationId)(this.performanceClient, this.logger, correlationId);
    return Promise.resolve();
  }
  /**
   * Provides pre-generated PKCE codes, if any
   * @param correlationId
   */
  getPreGeneratedPkceCodes(correlationId) {
    const res = this.pkceCode ? __spreadValues({}, this.pkceCode) : void 0;
    this.pkceCode = void 0;
    if (res) {
      this.logger.verbose("12js1o", correlationId);
    } else {
      this.logger.verbose("1oe9ci", correlationId);
    }
    this.performanceClient.addFields({ usePreGeneratedPkce: !!res }, correlationId);
    return res;
  }
  logMultipleInstances(performanceEvent, correlationId) {
    const clientId = this.config.auth.clientId;
    if (!window)
      return;
    window.msal = window.msal || {};
    window.msal.clientIds = window.msal.clientIds || [];
    const clientIds = window.msal.clientIds;
    if (clientIds.length > 0) {
      this.logger.verbose("1qtz3l", correlationId);
    }
    window.msal.clientIds.push(clientId);
    collectInstanceStats(clientId, performanceEvent, this.logger, correlationId);
  }
};
function checkIfRefreshTokenErrorCanBeResolvedSilently(refreshTokenError, cacheLookupPolicy) {
  const noInteractionRequired = !(refreshTokenError instanceof InteractionRequiredAuthError && // For refresh token errors, bad_token does not always require interaction (silently resolvable)
  refreshTokenError.subError !== InteractionRequiredAuthErrorCodes_exports.badToken);
  const refreshTokenRefreshRequired = refreshTokenError.errorCode === BrowserConstants.INVALID_GRANT_ERROR || refreshTokenError.errorCode === ClientAuthErrorCodes_exports.tokenRefreshRequired;
  const isSilentlyResolvable = noInteractionRequired && refreshTokenRefreshRequired || refreshTokenError.errorCode === InteractionRequiredAuthErrorCodes_exports.noTokensFound || refreshTokenError.errorCode === InteractionRequiredAuthErrorCodes_exports.refreshTokenExpired;
  const tryIframeRenewal = iFrameRenewalPolicies.includes(cacheLookupPolicy);
  return isSilentlyResolvable && tryIframeRenewal;
}

// node_modules/@azure/msal-browser/dist/operatingcontext/BaseOperatingContext.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var BaseOperatingContext = class _BaseOperatingContext {
  static loggerCallback(level, message) {
    switch (level) {
      case LogLevel.Error:
        console.error(message);
        return;
      case LogLevel.Info:
        console.info(message);
        return;
      case LogLevel.Verbose:
        console.debug(message);
        return;
      case LogLevel.Warning:
        console.warn(message);
        return;
      default:
        console.log(message);
        return;
    }
  }
  constructor(config, responseHandlers) {
    this.browserEnvironment = typeof window !== "undefined";
    this.config = buildConfiguration(config, this.browserEnvironment);
    this.responseHandlers = responseHandlers;
    let sessionStorage;
    try {
      sessionStorage = window[BrowserCacheLocation.SessionStorage];
    } catch (e) {
    }
    const logLevelKey = sessionStorage?.getItem(LOG_LEVEL_CACHE_KEY);
    const piiLoggingKey = sessionStorage?.getItem(LOG_PII_CACHE_KEY)?.toLowerCase();
    const piiLoggingEnabled = piiLoggingKey === "true" ? true : piiLoggingKey === "false" ? false : void 0;
    const loggerOptions = __spreadValues({}, this.config.system.loggerOptions);
    const logLevel = logLevelKey && Object.keys(LogLevel).includes(logLevelKey) ? LogLevel[logLevelKey] : void 0;
    if (logLevel) {
      loggerOptions.loggerCallback = _BaseOperatingContext.loggerCallback;
      loggerOptions.logLevel = logLevel;
    }
    if (piiLoggingEnabled !== void 0) {
      loggerOptions.piiLoggingEnabled = piiLoggingEnabled;
    }
    this.logger = new Logger(loggerOptions, name2, version2);
    this.available = false;
  }
  /**
   * Return the MSAL config
   * @returns BrowserConfiguration
   */
  getConfig() {
    return this.config;
  }
  /**
   * Returns the internal response handlers supplied by PublicClientApplication, if any.
   * @returns AuthResponseHandlers | undefined
   */
  getResponseHandlers() {
    return this.responseHandlers;
  }
  /**
   * Returns the MSAL Logger
   * @returns Logger
   */
  getLogger() {
    return this.logger;
  }
  isAvailable() {
    return this.available;
  }
  isBrowserEnvironment() {
    return this.browserEnvironment;
  }
};

// node_modules/@azure/msal-browser/dist/operatingcontext/StandardOperatingContext.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var StandardOperatingContext = class _StandardOperatingContext extends BaseOperatingContext {
  /**
   * Return the module name.  Intended for use with import() to enable dynamic import
   * of the implementation associated with this operating context
   * @returns
   */
  getModuleName() {
    return _StandardOperatingContext.MODULE_NAME;
  }
  /**
   * Returns the unique identifier for this operating context
   * @returns string
   */
  getId() {
    return _StandardOperatingContext.ID;
  }
  /**
   * Checks whether the operating context is available.
   * Confirms that the code is running a browser rather.  This is required.
   * @returns Promise<boolean> indicating whether this operating context is currently available.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async initialize(correlationId) {
    this.available = typeof window !== "undefined";
    return this.available;
  }
};
StandardOperatingContext.MODULE_NAME = "";
StandardOperatingContext.ID = "StandardOperatingContext";

// node_modules/@azure/msal-browser/dist/naa/BridgeError.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function isBridgeError(error) {
  return error.status !== void 0;
}

// node_modules/@azure/msal-browser/dist/naa/BridgeStatusCode.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var BridgeStatusCode = {
  UserInteractionRequired: "USER_INTERACTION_REQUIRED",
  UserCancel: "USER_CANCEL",
  NoNetwork: "NO_NETWORK",
  TransientError: "TRANSIENT_ERROR",
  PersistentError: "PERSISTENT_ERROR",
  Disabled: "DISABLED",
  AccountUnavailable: "ACCOUNT_UNAVAILABLE",
  NestedAppAuthUnavailable: "NESTED_APP_AUTH_UNAVAILABLE"
  // NAA is unavailable in the current context, can retry with standard browser based auth
};

// node_modules/@azure/msal-browser/dist/webBrokerBridge/WebBrokerBridgeError.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var WebBrokerBridgeErrorCode = {
  /* Interaction / auth outcomes */
  UserInteractionRequired: "user_interaction_required",
  UserCanceled: "user_canceled",
  /* Environment / connectivity */
  NoNetwork: "no_network",
  AccountUnavailable: "account_unavailable",
  BridgeDisabled: "bridge_disabled",
  BridgeUnavailable: "bridge_unavailable",
  /* Server-side outcomes */
  TransientError: "transient_error",
  PersistentError: "persistent_error",
  /* Broker-channel failures */
  BridgeTimeout: "bridge_timeout",
  BridgeHandshakeFailed: "bridge_handshake_failed",
  BridgeConnectionReset: "bridge_connection_reset",
  BridgeResponseInvalid: "bridge_response_invalid",
  PopupWillRedirect: "popup_will_redirect",
  ShrGenerationError: "shr_generation_error",
  /* Fallback */
  Unknown: "unknown"
};

// node_modules/@azure/msal-browser/dist/webBrokerBridge/WebBrokerBridgeErrorMap.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function toAuthError(err) {
  const correlationId = err.correlationId ?? "";
  switch (err.code) {
    case WebBrokerBridgeErrorCode.UserInteractionRequired:
      return new InteractionRequiredAuthError(err.innerErrorCode || "", correlationId, err.description, err.subError);
    case WebBrokerBridgeErrorCode.TransientError:
    case WebBrokerBridgeErrorCode.PersistentError:
      return new ServerError(err.innerErrorCode || "", correlationId, err.description, err.subError);
    case WebBrokerBridgeErrorCode.UserCanceled:
      return new ClientAuthError(ClientAuthErrorCodes_exports.userCanceled, correlationId);
    case WebBrokerBridgeErrorCode.NoNetwork:
      return new ClientAuthError(ClientAuthErrorCodes_exports.noNetworkConnectivity, correlationId);
    case WebBrokerBridgeErrorCode.AccountUnavailable:
      return new ClientAuthError(ClientAuthErrorCodes_exports.noAccountFound, correlationId);
    case WebBrokerBridgeErrorCode.BridgeDisabled:
      return new ClientAuthError(ClientAuthErrorCodes_exports.nestedAppAuthBridgeDisabled, correlationId);
    case WebBrokerBridgeErrorCode.BridgeUnavailable:
      return new ClientAuthError(err.innerErrorCode || ClientAuthErrorCodes_exports.nestedAppAuthBridgeDisabled, correlationId, err.description);
    /*
     * PWB broker-channel failures. The common code doubles as the
     * concrete errorCode on AuthError so the original error identity
     * can be recovered by round-tripping the string.
     */
    case WebBrokerBridgeErrorCode.BridgeTimeout:
    case WebBrokerBridgeErrorCode.BridgeHandshakeFailed:
    case WebBrokerBridgeErrorCode.BridgeConnectionReset:
    case WebBrokerBridgeErrorCode.BridgeResponseInvalid:
    case WebBrokerBridgeErrorCode.PopupWillRedirect:
    case WebBrokerBridgeErrorCode.ShrGenerationError:
      return new AuthError(err.code, correlationId, err.description, err.subError);
    case WebBrokerBridgeErrorCode.Unknown:
    default:
      return new AuthError(err.innerErrorCode || "unknown_error", correlationId, err.description || "An unknown error occurred", err.subError);
  }
}

// node_modules/@azure/msal-browser/dist/naa/mapping/NestedAppAuthAdapter.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var NestedAppAuthAdapter = class {
  constructor(clientId, clientCapabilities, crypto, logger) {
    this.clientId = clientId;
    this.clientCapabilities = clientCapabilities;
    this.crypto = crypto;
    this.logger = logger;
  }
  toNaaTokenRequest(request) {
    let extraParams;
    if (request.extraQueryParameters === void 0) {
      extraParams = /* @__PURE__ */ new Map();
    } else {
      extraParams = new Map(Object.entries(request.extraQueryParameters));
    }
    const correlationId = request.correlationId || this.crypto.createNewGuid();
    const claims = RequestParameterBuilder_exports.buildMergedClaims(request.claims, this.clientCapabilities);
    const scopes = request.scopes || Constants_exports.OIDC_DEFAULT_SCOPES;
    const attributeTokens = CacheHelpers_exports.serializeAttributeTokens(request.attributeTokens);
    const tokenRequest = {
      platformBrokerId: request.account?.homeAccountId,
      clientId: this.clientId,
      authority: request.authority,
      resource: request.resource,
      scope: scopes.join(" "),
      correlationId,
      claims: !StringUtils.isEmptyObj(claims) ? claims : void 0,
      state: request.state,
      authenticationScheme: request.authenticationScheme || Constants_exports.AuthenticationScheme.BEARER,
      extraParameters: extraParams,
      attributeTokens
    };
    return tokenRequest;
  }
  fromNaaTokenResponse(request, response, reqTimestamp) {
    if (!response.token.id_token || !response.token.access_token) {
      throw createClientAuthError(ClientAuthErrorCodes_exports.nullOrEmptyToken, request.correlationId);
    }
    const expiresOn = TimeUtils_exports.toDateFromSeconds(reqTimestamp + (response.token.expires_in || 0));
    const idTokenClaims = AuthToken_exports.extractTokenClaims(response.token.id_token, this.crypto.base64Decode, request.correlationId);
    const account = this.fromNaaAccountInfo(response.account, response.token.id_token, idTokenClaims);
    const scopes = response.token.scope || request.scope;
    const authenticationResult = {
      authority: response.token.authority || account.environment,
      uniqueId: account.localAccountId,
      tenantId: account.tenantId,
      scopes: scopes.split(" "),
      account,
      idToken: response.token.id_token,
      idTokenClaims,
      accessToken: response.token.access_token,
      fromCache: false,
      expiresOn,
      tokenType: request.authenticationScheme || Constants_exports.AuthenticationScheme.BEARER,
      correlationId: request.correlationId,
      extExpiresOn: expiresOn,
      state: request.state
    };
    return authenticationResult;
  }
  /*
   *  export type AccountInfo = {
   *     homeAccountId: string;
   *     environment: string;
   *     tenantId: string;
   *     username: string;
   *     localAccountId: string;
   *     name?: string;
   *     idToken?: string;
   *     idTokenClaims?: TokenClaims & {
   *         [key: string]:
   *             | string
   *             | number
   *             | string[]
   *             | object
   *             | undefined
   *             | unknown;
   *     };
   *     nativeAccountId?: string;
   *     authorityType?: string;
   * };
   */
  fromNaaAccountInfo(fromAccount, idToken, idTokenClaims) {
    const effectiveIdTokenClaims = idTokenClaims || fromAccount.idTokenClaims;
    const localAccountId = fromAccount.localAccountId || effectiveIdTokenClaims?.oid || effectiveIdTokenClaims?.sub || "";
    const tenantId = fromAccount.tenantId || getTenantIdFromIdTokenClaims(effectiveIdTokenClaims) || "";
    const homeAccountId = fromAccount.homeAccountId || `${localAccountId}.${tenantId}`;
    const environment = fromAccount.environment;
    if (!environment) {
      throw createClientAuthError(ClientAuthErrorCodes_exports.invalidCacheEnvironment, "");
    }
    const preferredUsername = effectiveIdTokenClaims?.preferred_username || effectiveIdTokenClaims?.upn;
    const email = effectiveIdTokenClaims?.emails?.[0] || null;
    const username = fromAccount.username || preferredUsername || email || "";
    const name3 = fromAccount.name || effectiveIdTokenClaims?.name || "";
    const loginHint = fromAccount.loginHint || effectiveIdTokenClaims?.login_hint;
    const tenantProfiles = /* @__PURE__ */ new Map();
    const tenantProfile = buildTenantProfile(homeAccountId, localAccountId, tenantId, fromAccount.platformBrokerId, effectiveIdTokenClaims);
    tenantProfiles.set(tenantId, tenantProfile);
    const account = {
      homeAccountId,
      environment,
      tenantId,
      username,
      localAccountId,
      name: name3,
      loginHint,
      idToken,
      idTokenClaims: effectiveIdTokenClaims,
      nativeAccountId: fromAccount.platformBrokerId,
      tenantProfiles
    };
    return account;
  }
  /**
   *
   * @param error BridgeError
   * @returns AuthError, ClientAuthError, ClientConfigurationError, ServerError, InteractionRequiredError
   */
  fromBridgeError(error) {
    if (isBridgeError(error)) {
      return toAuthError(bridgeErrorToWebBrokerBridgeError(error));
    }
    return new AuthError("unknown_error", "", "An unknown error occurred");
  }
  /**
   * Returns an AuthenticationResult from the given cache items
   *
   * @param account
   * @param idToken
   * @param accessToken
   * @param reqTimestamp
   * @returns
   */
  toAuthenticationResultFromCache(account, idToken, accessToken, request, correlationId) {
    if (!idToken || !accessToken) {
      throw createClientAuthError(ClientAuthErrorCodes_exports.nullOrEmptyToken, correlationId);
    }
    const idTokenClaims = AuthToken_exports.extractTokenClaims(idToken.secret, this.crypto.base64Decode, correlationId);
    const scopes = accessToken.target || request.scopes.join(" ");
    const authenticationResult = {
      authority: accessToken.environment || account.environment,
      uniqueId: account.localAccountId,
      tenantId: account.tenantId,
      scopes: scopes.split(" "),
      account,
      idToken: idToken.secret,
      idTokenClaims: idTokenClaims || {},
      accessToken: accessToken.secret,
      fromCache: true,
      expiresOn: TimeUtils_exports.toDateFromSeconds(accessToken.expiresOn),
      extExpiresOn: TimeUtils_exports.toDateFromSeconds(accessToken.extendedExpiresOn),
      tokenType: request.authenticationScheme || Constants_exports.AuthenticationScheme.BEARER,
      correlationId,
      state: request.state
    };
    return authenticationResult;
  }
};
function bridgeErrorToWebBrokerBridgeError(error) {
  switch (error.status) {
    case BridgeStatusCode.UserCancel:
      return { code: WebBrokerBridgeErrorCode.UserCanceled };
    case BridgeStatusCode.NoNetwork:
      return { code: WebBrokerBridgeErrorCode.NoNetwork };
    case BridgeStatusCode.AccountUnavailable:
      return { code: WebBrokerBridgeErrorCode.AccountUnavailable };
    case BridgeStatusCode.Disabled:
      return { code: WebBrokerBridgeErrorCode.BridgeDisabled };
    case BridgeStatusCode.NestedAppAuthUnavailable:
      return {
        code: WebBrokerBridgeErrorCode.BridgeUnavailable,
        innerErrorCode: error.code,
        description: error.description
      };
    case BridgeStatusCode.TransientError:
      return {
        code: WebBrokerBridgeErrorCode.TransientError,
        innerErrorCode: error.code,
        description: error.description
      };
    case BridgeStatusCode.PersistentError:
      return {
        code: WebBrokerBridgeErrorCode.PersistentError,
        innerErrorCode: error.code,
        description: error.description
      };
    case BridgeStatusCode.UserInteractionRequired:
      return {
        code: WebBrokerBridgeErrorCode.UserInteractionRequired,
        innerErrorCode: error.code,
        description: error.description
      };
    default:
      return {
        code: WebBrokerBridgeErrorCode.Unknown,
        innerErrorCode: error.code,
        description: error.description
      };
  }
}

// node_modules/@azure/msal-browser/dist/error/NestedAppAuthError.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var NestedAppAuthError = class _NestedAppAuthError extends AuthError {
  constructor(errorCode, correlationId, errorMessage) {
    super(errorCode, correlationId, errorMessage);
    Object.setPrototypeOf(this, _NestedAppAuthError.prototype);
    this.name = "NestedAppAuthError";
  }
  static createUnsupportedError(correlationId) {
    return new _NestedAppAuthError(unsupportedMethod, correlationId || "");
  }
};

// node_modules/@azure/msal-browser/dist/controllers/NestedAppAuthController.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var NestedAppAuthController = class _NestedAppAuthController {
  constructor(operatingContext) {
    this.operatingContext = operatingContext;
    const proxy = this.operatingContext.getBridgeProxy();
    if (proxy !== void 0) {
      this.bridgeProxy = proxy;
    } else {
      throw new Error("unexpected: bridgeProxy is undefined");
    }
    this.config = operatingContext.getConfig();
    this.logger = this.operatingContext.getLogger();
    this.performanceClient = this.config.telemetry.client;
    this.browserCrypto = operatingContext.isBrowserEnvironment() ? new CryptoOps(this.logger, this.performanceClient, true) : DEFAULT_CRYPTO_IMPLEMENTATION;
    const tokenBindingKeyManager = operatingContext.isBrowserEnvironment() ? new TokenBindingKeyManager(this.logger, this.performanceClient) : DEFAULT_TOKEN_BINDING_KEY_MANAGER;
    this.eventHandler = new EventHandler(this.logger);
    this.browserStorage = this.operatingContext.isBrowserEnvironment() ? new BrowserCacheManager(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger, this.performanceClient, this.eventHandler, buildStaticAuthorityOptions(this.config.auth), tokenBindingKeyManager) : DEFAULT_BROWSER_CACHE_MANAGER(this.config.auth.clientId, this.logger, this.performanceClient, this.eventHandler, void 0, tokenBindingKeyManager);
    this.nestedAppAuthAdapter = new NestedAppAuthAdapter(this.config.auth.clientId, this.config.auth.clientCapabilities, this.browserCrypto, this.logger);
    const accountContext = this.bridgeProxy.getAccountContext();
    this.currentAccountContext = accountContext ? accountContext : null;
  }
  /**
   * Factory function to create a new instance of NestedAppAuthController
   * @param operatingContext
   * @returns Promise<IController>
   */
  static async createController(operatingContext) {
    const controller = new _NestedAppAuthController(operatingContext);
    return Promise.resolve(controller);
  }
  /**
   * Specific implementation of initialize function for NestedAppAuthController
   * @returns
   */
  async initialize(request, isBroker) {
    const initCorrelationId = request?.correlationId || createNewGuid();
    await this.browserStorage.initialize(initCorrelationId);
    return Promise.resolve();
  }
  /**
   * Validate the incoming request and add correlationId if not present
   * @param request
   * @returns
   */
  ensureValidRequest(request) {
    if (request?.correlationId) {
      return request;
    }
    return __spreadProps(__spreadValues({}, request), {
      correlationId: this.browserCrypto.createNewGuid()
    });
  }
  /**
   * Internal implementation of acquireTokenInteractive flow
   * @param request
   * @returns
   */
  async acquireTokenInteractive(request) {
    const validRequest = this.ensureValidRequest(request);
    const correlationId = validRequest.correlationId || createNewGuid();
    this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, correlationId, InteractionType.Popup, validRequest);
    const atPopupMeasurement = this.performanceClient.startMeasurement(AcquireTokenPopup, correlationId);
    atPopupMeasurement.add({ nestedAppAuthRequest: true });
    try {
      enforceResourceParameter(this.config.auth.isMcp, validRequest);
      const naaRequest = this.nestedAppAuthAdapter.toNaaTokenRequest(validRequest);
      const reqTimestamp = TimeUtils_exports.nowSeconds();
      const response = await this.bridgeProxy.getTokenInteractive(naaRequest);
      const result = __spreadValues({}, this.nestedAppAuthAdapter.fromNaaTokenResponse(naaRequest, response, reqTimestamp));
      try {
        await this.hydrateCache(result, request);
      } catch (error) {
        this.logger.warningPii(`1mwr91 ${error}`, correlationId);
      }
      this.currentAccountContext = {
        homeAccountId: result.account.homeAccountId,
        environment: result.account.environment,
        tenantId: result.account.tenantId
      };
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, correlationId, InteractionType.Popup, result);
      atPopupMeasurement.add({
        accessTokenSize: result.accessToken.length,
        idTokenSize: result.idToken.length
      });
      atPopupMeasurement.end({
        success: true,
        requestId: result.requestId
      }, void 0, result.account);
      return result;
    } catch (e) {
      const error = e instanceof AuthError ? e : this.nestedAppAuthAdapter.fromBridgeError(e);
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, correlationId, InteractionType.Popup, null, e);
      atPopupMeasurement.end({
        success: false
      }, e, request.account);
      throw error;
    }
  }
  /**
   * Internal implementation of acquireTokenSilent flow
   * @param request
   * @returns
   */
  async acquireTokenSilentInternal(request) {
    const validRequest = this.ensureValidRequest(request);
    const correlationId = validRequest.correlationId || createNewGuid();
    this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, correlationId, InteractionType.Silent, validRequest);
    const result = await this.acquireTokenFromCache(validRequest);
    if (result) {
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, correlationId, InteractionType.Silent, result);
      return result;
    }
    const ssoSilentMeasurement = this.performanceClient.startMeasurement(SsoSilent, correlationId);
    ssoSilentMeasurement.increment({
      visibilityChangeCount: 0
    });
    ssoSilentMeasurement.add({
      nestedAppAuthRequest: true
    });
    try {
      enforceResourceParameter(this.config.auth.isMcp, validRequest);
      const naaRequest = this.nestedAppAuthAdapter.toNaaTokenRequest(validRequest);
      naaRequest.forceRefresh = validRequest.forceRefresh;
      const reqTimestamp = TimeUtils_exports.nowSeconds();
      const response = await this.bridgeProxy.getTokenSilent(naaRequest);
      const result2 = this.nestedAppAuthAdapter.fromNaaTokenResponse(naaRequest, response, reqTimestamp);
      try {
        await this.hydrateCache(result2, request);
      } catch (error) {
        this.logger.warningPii(`1mwr91 ${error}`, correlationId);
      }
      this.currentAccountContext = {
        homeAccountId: result2.account.homeAccountId,
        environment: result2.account.environment,
        tenantId: result2.account.tenantId
      };
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, correlationId, InteractionType.Silent, result2);
      ssoSilentMeasurement?.add({
        accessTokenSize: result2.accessToken.length,
        idTokenSize: result2.idToken.length
      });
      ssoSilentMeasurement?.end({
        success: true,
        requestId: result2.requestId
      }, void 0, result2.account);
      return result2;
    } catch (e) {
      const error = e instanceof AuthError ? e : this.nestedAppAuthAdapter.fromBridgeError(e);
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, correlationId, InteractionType.Silent, null, e);
      ssoSilentMeasurement?.end({
        success: false
      }, e, request.account);
      throw error;
    }
  }
  /**
   * acquires tokens from cache
   * @param request
   * @returns
   */
  async acquireTokenFromCache(request) {
    const correlationId = request.correlationId || createNewGuid();
    const atsMeasurement = this.performanceClient.startMeasurement(AcquireTokenSilent, correlationId);
    atsMeasurement?.add({
      nestedAppAuthRequest: true
    });
    if (request.claims) {
      this.logger.verbose("11t57w", correlationId);
      return null;
    }
    if (request.forceRefresh) {
      this.logger.verbose("1ovnmo", correlationId);
      return null;
    }
    let result = null;
    if (!request.cacheLookupPolicy) {
      request.cacheLookupPolicy = CacheLookupPolicy.Default;
    }
    switch (request.cacheLookupPolicy) {
      case CacheLookupPolicy.Default:
      case CacheLookupPolicy.AccessToken:
      case CacheLookupPolicy.AccessTokenAndRefreshToken:
        result = await this.acquireTokenFromCacheInternal(request);
        break;
      default:
        return null;
    }
    if (result) {
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, correlationId, InteractionType.Silent, result);
      atsMeasurement.add({
        accessTokenSize: result.accessToken.length,
        idTokenSize: result.idToken.length
      });
      atsMeasurement.end({
        success: true
      }, void 0, result.account);
      return result;
    }
    this.logger.warning("1yb4fi", correlationId);
    this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, correlationId, InteractionType.Silent, null);
    atsMeasurement.end({
      success: false
    }, void 0, request.account);
    return null;
  }
  /**
   *
   * @param request
   * @returns
   */
  async acquireTokenFromCacheInternal(request) {
    const accountContext = this.bridgeProxy.getAccountContext() || this.currentAccountContext;
    const correlationId = request.correlationId || createNewGuid();
    let currentAccount = null;
    if (accountContext) {
      currentAccount = getAccount(accountContext, this.logger, this.browserStorage, correlationId);
    }
    if (!currentAccount) {
      this.logger.verbose("10qnr0", correlationId);
      return Promise.resolve(null);
    }
    this.logger.verbose("1u7hux", correlationId);
    const authRequest = __spreadProps(__spreadValues({}, request), {
      correlationId,
      authority: request.authority || currentAccount.environment,
      scopes: request.scopes?.length ? request.scopes : [...Constants_exports.OIDC_DEFAULT_SCOPES]
    });
    const tokenKeys = this.browserStorage.getTokenKeys();
    const cachedAccessToken = this.browserStorage.getAccessToken(currentAccount, authRequest, tokenKeys, currentAccount.tenantId);
    if (!cachedAccessToken) {
      this.logger.verbose("03vm49", correlationId);
      return Promise.resolve(null);
    } else if (TimeUtils_exports.wasClockTurnedBack(cachedAccessToken.cachedAt) || TimeUtils_exports.isTokenExpired(cachedAccessToken.expiresOn, this.config.system.tokenRenewalOffsetSeconds)) {
      this.logger.verbose("18egye", correlationId);
      return Promise.resolve(null);
    } else if (authRequest.resource) {
      const requestedResource = authRequest.resource;
      const cachedResource = cachedAccessToken.resource;
      if (!cachedResource || cachedResource !== requestedResource) {
        this.logger.verbose("0qraxd", correlationId);
        return Promise.resolve(null);
      }
    }
    const cachedIdToken = this.browserStorage.getIdToken(currentAccount, authRequest.correlationId, tokenKeys, currentAccount.tenantId);
    if (!cachedIdToken) {
      this.logger.verbose("0d68kd", correlationId);
      return Promise.resolve(null);
    }
    return this.nestedAppAuthAdapter.toAuthenticationResultFromCache(currentAccount, cachedIdToken, cachedAccessToken, authRequest, authRequest.correlationId);
  }
  /**
   * acquireTokenPopup flow implementation
   * @param request
   * @returns
   */
  async acquireTokenPopup(request) {
    return this.acquireTokenInteractive(request);
  }
  /**
   * acquireTokenRedirect flow is not supported in nested app auth
   * @param request
   */
  acquireTokenRedirect(request) {
    throw NestedAppAuthError.createUnsupportedError(request?.correlationId);
  }
  /**
   * acquireTokenSilent flow implementation
   * @param silentRequest
   * @returns
   */
  async acquireTokenSilent(silentRequest) {
    return this.acquireTokenSilentInternal(silentRequest);
  }
  /**
   * Hybrid flow is not currently supported in nested app auth
   * @param request
   */
  acquireTokenByCode(request) {
    throw NestedAppAuthError.createUnsupportedError(request?.correlationId);
  }
  /**
   * Adds event callbacks to array
   * @param callback
   * @param eventTypes
   */
  addEventCallback(callback, eventTypes) {
    return this.eventHandler.addEventCallback(callback, eventTypes);
  }
  /**
   * Removes callback with provided id from callback array
   * @param callbackId
   */
  removeEventCallback(callbackId) {
    this.eventHandler.removeEventCallback(callbackId);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addPerformanceCallback(callback) {
    throw NestedAppAuthError.createUnsupportedError();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removePerformanceCallback(callbackId) {
    throw NestedAppAuthError.createUnsupportedError();
  }
  // #region Account APIs
  /**
   * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
   * @param accountFilter - (Optional) filter to narrow down the accounts returned
   * @returns Array of AccountInfo objects in cache
   */
  getAllAccounts(accountFilter) {
    return getAllAccounts(this.logger, this.browserStorage, this.isBrowserEnv(), createNewGuid(), accountFilter);
  }
  /**
   * Returns the first account found in the cache that matches the account filter passed in.
   * @param accountFilter
   * @returns The first account found in the cache matching the provided filter or null if no account could be found.
   */
  getAccount(accountFilter) {
    return getAccount(accountFilter, this.logger, this.browserStorage, createNewGuid());
  }
  /**
   * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
   * @param account
   */
  setActiveAccount(account) {
    return setActiveAccount(account, this.browserStorage, createNewGuid());
  }
  /**
   * Gets the currently active account
   */
  getActiveAccount() {
    return getActiveAccount(this.browserStorage, createNewGuid());
  }
  // #endregion
  handleRedirectPromise(options) {
    return Promise.resolve(null);
  }
  loginPopup(request) {
    return this.acquireTokenInteractive(request || DEFAULT_REQUEST);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loginRedirect(request) {
    throw NestedAppAuthError.createUnsupportedError(request?.correlationId);
  }
  logoutRedirect(logoutRequest) {
    throw NestedAppAuthError.createUnsupportedError(logoutRequest?.correlationId);
  }
  logoutPopup(logoutRequest) {
    throw NestedAppAuthError.createUnsupportedError(logoutRequest?.correlationId);
  }
  ssoSilent(request) {
    return this.acquireTokenSilentInternal(request);
  }
  /**
   * Returns the logger instance
   */
  getLogger() {
    return this.logger;
  }
  /**
   * Replaces the default logger set in configurations with new Logger with new configurations
   * @param logger Logger instance
   */
  setLogger(logger) {
    this.logger = logger;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  initializeWrapperLibrary(sku, version3) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setNavigationClient(navigationClient) {
    this.logger.warning("1k8729", "");
  }
  getConfiguration() {
    return this.config;
  }
  isBrowserEnv() {
    return this.operatingContext.isBrowserEnvironment();
  }
  getBrowserCrypto() {
    return this.browserCrypto;
  }
  getPerformanceClient() {
    throw NestedAppAuthError.createUnsupportedError();
  }
  getRedirectResponse() {
    throw NestedAppAuthError.createUnsupportedError();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async clearCache(logoutRequest) {
    throw NestedAppAuthError.createUnsupportedError(logoutRequest?.correlationId);
  }
  async hydrateCache(result, request) {
    this.logger.verbose("16jycr", result.correlationId);
    const accountEntity = AccountEntityUtils_exports.createAccountEntityFromAccountInfo(result.account, result.cloudGraphHostName, result.msGraphHost);
    await this.browserStorage.setAccount(accountEntity, result.correlationId, AuthToken_exports.isKmsi(result.idTokenClaims), ApiId.hydrateCache);
    return this.browserStorage.hydrateCache(result, request);
  }
};

// node_modules/@azure/msal-browser/dist/webBrokerBridge/PendingRequestRegistry.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var PendingRequestRegistry = class {
  constructor() {
    this.pending = /* @__PURE__ */ new Map();
  }
  /**
   * Register a pending request. Returns a promise that resolves when a
   * response with the matching `requestId` arrives, or rejects if the
   * caller invokes `reject` for that id.
   */
  register(requestId) {
    return new Promise((resolve, reject) => {
      this.pending.set(requestId, { resolve, reject });
    });
  }
  /** Resolve a pending request. No-op if `requestId` isn't registered. */
  resolve(requestId, response) {
    const entry = this.pending.get(requestId);
    if (entry === void 0) {
      return;
    }
    this.pending.delete(requestId);
    entry.resolve(response);
  }
  /** Reject a pending request. No-op if `requestId` isn't registered. */
  reject(requestId, reason) {
    const entry = this.pending.get(requestId);
    if (entry === void 0) {
      return;
    }
    this.pending.delete(requestId);
    entry.reject(reason);
  }
  /** True if `requestId` has an in-flight registration. */
  has(requestId) {
    return this.pending.has(requestId);
  }
  /**
   * Register, then invoke `send` synchronously. If `send` throws, the
   * pending entry is cleared and the promise rejects with the thrown
   * error.
   */
  async sendAndAwait(message, send) {
    const promise = this.register(message.requestId);
    try {
      send(message);
    } catch (err) {
      this.reject(message.requestId, err);
    }
    return promise;
  }
};

// node_modules/@azure/msal-browser/dist/naa/BridgeProxy.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var BridgeProxy = class _BridgeProxy {
  /**
   * initializeNestedAppAuthBridge - Initializes the bridge to the host app
   * @returns a promise that resolves to an InitializeBridgeResponse or rejects with an Error
   * @remarks This method will be called by the create factory method
   * @remarks If the bridge is not available, this method will throw an error
   */
  static async initializeNestedAppAuthBridge() {
    if (window === void 0) {
      throw new Error("window is undefined");
    }
    if (window.nestedAppAuthBridge === void 0) {
      throw new Error("window.nestedAppAuthBridge is undefined");
    }
    try {
      window.nestedAppAuthBridge.addEventListener("message", (response) => {
        const responsePayload = typeof response === "string" ? response : response.data;
        const responseEnvelope = JSON.parse(responsePayload);
        if (responseEnvelope.success) {
          _BridgeProxy.pendingRegistry.resolve(responseEnvelope.requestId, responseEnvelope);
        } else {
          _BridgeProxy.pendingRegistry.reject(responseEnvelope.requestId, responseEnvelope.error);
        }
      });
      const bridgeResponse = await _BridgeProxy.sendRequestViaRegistry(_BridgeProxy.buildRequest("GetInitContext"));
      return _BridgeProxy.validateBridgeResultOrThrow(bridgeResponse.initContext);
    } catch (error) {
      window.console.log(error);
      throw error;
    }
  }
  /**
   * getTokenInteractive - Attempts to get a token interactively from the bridge
   * @param request A token request
   * @returns a promise that resolves to an auth result or rejects with a BridgeError
   */
  getTokenInteractive(request) {
    return this.getToken("GetTokenPopup", request);
  }
  /**
   * getTokenSilent Attempts to get a token silently from the bridge
   * @param request A token request
   * @returns a promise that resolves to an auth result or rejects with a BridgeError
   */
  getTokenSilent(request) {
    return this.getToken("GetToken", request);
  }
  async getToken(requestType, request) {
    const result = await this.sendRequest(requestType, {
      tokenParams: request
    });
    return {
      token: _BridgeProxy.validateBridgeResultOrThrow(result.token),
      account: _BridgeProxy.validateBridgeResultOrThrow(result.account)
    };
  }
  getHostCapabilities() {
    return this.capabilities ?? null;
  }
  getAccountContext() {
    return this.accountContext ? this.accountContext : null;
  }
  static buildRequest(method, requestParams) {
    return __spreadValues({
      messageType: "NestedAppAuthRequest",
      method,
      requestId: createNewGuid(),
      sendTime: Date.now(),
      clientLibrary: BrowserConstants.MSAL_SKU,
      clientLibraryVersion: version2
    }, requestParams);
  }
  /**
   * A method used to send a request to the bridge
   * @param request A token request
   * @returns a promise that resolves to a response of provided type or rejects with a BridgeError
   */
  sendRequest(method, requestParams) {
    return _BridgeProxy.sendRequestViaRegistry(_BridgeProxy.buildRequest(method, requestParams));
  }
  /**
   * Registers `message.requestId` with the shared pending-request
   * registry, then posts the envelope over the host bridge. Resolves
   * with the matching response envelope; rejects with the raw
   * `BridgeError` payload.
   */
  static sendRequestViaRegistry(message) {
    const correlationKey = {
      requestId: message.requestId,
      type: message.method
    };
    return _BridgeProxy.pendingRegistry.sendAndAwait(correlationKey, () => {
      window.nestedAppAuthBridge.postMessage(JSON.stringify(message));
    });
  }
  static validateBridgeResultOrThrow(input) {
    if (input === void 0) {
      const bridgeError = {
        status: BridgeStatusCode.NestedAppAuthUnavailable
      };
      throw bridgeError;
    }
    return input;
  }
  /**
   * Private constructor for BridgeProxy
   * @param sdkName The name of the SDK being used to make requests on behalf of the app
   * @param sdkVersion The version of the SDK being used to make requests on behalf of the app
   * @param capabilities The capabilities of the bridge / SDK / platform broker
   */
  constructor(sdkName, sdkVersion, accountContext, capabilities) {
    this.sdkName = sdkName;
    this.sdkVersion = sdkVersion;
    this.accountContext = accountContext;
    this.capabilities = capabilities;
  }
  /**
   * Factory method for creating an implementation of IBridgeProxy
   * @returns A promise that resolves to a BridgeProxy implementation
   */
  static async create() {
    const response = await _BridgeProxy.initializeNestedAppAuthBridge();
    return new _BridgeProxy(response.sdkName, response.sdkVersion, response.accountContext, response.capabilities);
  }
};
BridgeProxy.pendingRegistry = new PendingRequestRegistry();

// node_modules/@azure/msal-browser/dist/operatingcontext/NestedAppOperatingContext.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var NestedAppOperatingContext = class _NestedAppOperatingContext extends BaseOperatingContext {
  constructor() {
    super(...arguments);
    this.bridgeProxy = void 0;
    this.accountContext = null;
  }
  /**
   * Return the module name.  Intended for use with import() to enable dynamic import
   * of the implementation associated with this operating context
   * @returns
   */
  getModuleName() {
    return _NestedAppOperatingContext.MODULE_NAME;
  }
  /**
   * Returns the unique identifier for this operating context
   * @returns string
   */
  getId() {
    return _NestedAppOperatingContext.ID;
  }
  /**
   * Returns the current BridgeProxy
   * @returns IBridgeProxy | undefined
   */
  getBridgeProxy() {
    return this.bridgeProxy;
  }
  /**
   * Checks whether the operating context is available.
   * Confirms that the code is running a browser rather.  This is required.
   * @param correlationId
   * @returns Promise<boolean> indicating whether this operating context is currently available.
   */
  async initialize(correlationId) {
    const cid = correlationId || "";
    try {
      if (typeof window !== "undefined") {
        if (typeof window.__initializeNestedAppAuth === "function") {
          await window.__initializeNestedAppAuth();
        }
        const bridgeProxy = await BridgeProxy.create();
        this.accountContext = bridgeProxy.getAccountContext();
        this.bridgeProxy = bridgeProxy;
        this.available = bridgeProxy !== void 0;
      }
    } catch (ex) {
      this.logger.infoPii(`1mdxyj ${ex}`, cid);
    }
    this.logger.info(`12jy9a ${this.available}`, cid);
    return this.available;
  }
};
NestedAppOperatingContext.MODULE_NAME = "";
NestedAppOperatingContext.ID = "NestedAppOperatingContext";

// node_modules/@azure/msal-browser/dist/app/PublicClientApplication.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var PublicClientApplication = class {
  /**
   * @constructor
   * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
   *
   * Important attributes in the Configuration object for auth are:
   * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
   * - authority: the authority URL for your application.
   * - redirect_uri: the uri of your application registered in the portal.
   *
   * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
   * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
   * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
   * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
   * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
   * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
   *
   * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
   * Full B2C functionality will be available in this library in future versions.
   *
   * @param configuration Object for the MSAL PublicClientApplication instance
   * @param IController Optional parameter to explictly set the controller. (Will be removed when we remove public constructor)
   */
  constructor(configuration, controller) {
    this.controller = controller || new StandardController(new StandardOperatingContext(configuration, {
      waitForPopupResponse: this.waitForPopupResponse.bind(this),
      waitForIframeResponse: this.waitForIframeResponse.bind(this)
    }));
  }
  /**
   * Waits for the auth response from a popup window opened by MSAL.
   *
   * The default implementation delegates to MSAL's `BroadcastChannel`-based bridge.
   * Subclasses must return the raw response string (hash/query/fragment), or reject
   * with an `AuthError` on failure.
   *
   * @internal
   * @param request The in-flight authorization or end-session request.
   * @param popupWindow The popup window opened by MSAL.
   * @param popupWindowParent The parent window that opened the popup.
   */
  async waitForPopupResponse(request, popupWindow, popupWindowParent) {
    const controller = this.controller;
    return waitForBridgeResponse(controller.getConfiguration().system.popupBridgeTimeout, controller.getLogger(), request, controller.getPerformanceClient());
  }
  /**
   * Waits for the auth response from a hidden iframe used by MSAL silent flows.
   *
   * The default implementation delegates to MSAL's `BroadcastChannel`-based bridge.
   * Subclasses must return the raw response string (hash/query/fragment), or reject
   * with an `AuthError` on failure.
   *
   * @internal
   * @param iframe The hidden iframe MSAL attached to the document.
   * @param request The in-flight authorization request.
   */
  async waitForIframeResponse(iframe, request) {
    const controller = this.controller;
    const config = controller.getConfiguration();
    return waitForBridgeResponse(config.system.iframeBridgeTimeout, controller.getLogger(), request, controller.getPerformanceClient(), config.experimental);
  }
  /**
   * Initializer function to perform async startup tasks such as connecting to WAM extension
   * @param request {?InitializeApplicationRequest}
   */
  async initialize(request) {
    return this.controller.initialize(request);
  }
  /**
   * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
   *
   * @param request
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  async acquireTokenPopup(request) {
    return this.controller.acquireTokenPopup(request);
  }
  /**
   * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
   * the page, so any code that follows this function will not execute.
   *
   * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
   * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
   *
   * @param request
   */
  acquireTokenRedirect(request) {
    return this.controller.acquireTokenRedirect(request);
  }
  /**
   * Silently acquire an access token for a given set of scopes. Returns currently processing promise if parallel requests are made.
   *
   * @param {@link (SilentRequest:type)}
   * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthenticationResult} object
   */
  acquireTokenSilent(silentRequest) {
    return this.controller.acquireTokenSilent(silentRequest);
  }
  /**
   * This function redeems an authorization code (passed as code) from the eSTS token endpoint.
   * This authorization code should be acquired server-side using a confidential client to acquire a spa_code.
   * This API is not indended for normal authorization code acquisition and redemption.
   *
   * Redemption of this authorization code will not require PKCE, as it was acquired by a confidential client.
   *
   * @param request {@link AuthorizationCodeRequest}
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  acquireTokenByCode(request) {
    return this.controller.acquireTokenByCode(request);
  }
  /**
   * Adds event callbacks to array
   * @param callback
   * @param eventTypes
   */
  addEventCallback(callback, eventTypes) {
    return this.controller.addEventCallback(callback, eventTypes);
  }
  /**
   * Removes callback with provided id from callback array
   * @param callbackId
   */
  removeEventCallback(callbackId) {
    return this.controller.removeEventCallback(callbackId);
  }
  /**
   * Registers a callback to receive performance events.
   *
   * @param {PerformanceCallbackFunction} callback
   * @returns {string}
   */
  addPerformanceCallback(callback) {
    return this.controller.addPerformanceCallback(callback);
  }
  /**
   * Removes a callback registered with addPerformanceCallback.
   *
   * @param {string} callbackId
   * @returns {boolean}
   */
  removePerformanceCallback(callbackId) {
    return this.controller.removePerformanceCallback(callbackId);
  }
  /**
   * Returns the first account found in the cache that matches the account filter passed in.
   * @param accountFilter
   * @returns The first account found in the cache matching the provided filter or null if no account could be found.
   */
  getAccount(accountFilter) {
    return this.controller.getAccount(accountFilter);
  }
  /**
   * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
   * @param accountFilter - (Optional) filter to narrow down the accounts returned
   * @returns Array of AccountInfo objects in cache
   */
  getAllAccounts(accountFilter) {
    return this.controller.getAllAccounts(accountFilter);
  }
  /**
   * Event handler function which allows users to fire events after the PublicClientApplication object
   * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
   * auth flows.
   * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
   * @param options Object containing optional configuration for redirect promise handling.
   * @returns Token response or null. If the return value is null, then no auth redirect was detected.
   */
  handleRedirectPromise(options) {
    return this.controller.handleRedirectPromise(options);
  }
  /**
   * Use when initiating the login process via opening a popup window in the user's browser
   *
   * @param request
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  loginPopup(request) {
    return this.controller.loginPopup(request);
  }
  /**
   * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
   * any code that follows this function will not execute.
   *
   * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
   * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
   *
   * @param request
   */
  loginRedirect(request) {
    return this.controller.loginRedirect(request);
  }
  /**
   * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
   * Default behaviour is to redirect the user to `window.location.href`.
   * @param logoutRequest
   */
  logoutRedirect(logoutRequest) {
    return this.controller.logoutRedirect(logoutRequest);
  }
  /**
   * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
   * @param logoutRequest
   */
  logoutPopup(logoutRequest) {
    return this.controller.logoutPopup(logoutRequest);
  }
  /**
   * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
   * - Any browser using a form of Intelligent Tracking Prevention
   * - If there is not an established session with the service
   *
   * In these cases, the request must be done inside a popup or full frame redirect.
   *
   * For the cases where interaction is required, you cannot send a request with prompt=none.
   *
   * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
   * you session on the server still exists.
   * @param request {@link SsoSilentRequest}
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  ssoSilent(request) {
    return this.controller.ssoSilent(request);
  }
  /**
   * Returns the logger instance
   */
  getLogger() {
    return this.controller.getLogger();
  }
  /**
   * Replaces the default logger set in configurations with new Logger with new configurations
   * @param logger Logger instance
   */
  setLogger(logger) {
    this.controller.setLogger(logger);
  }
  /**
   * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
   * @param account
   */
  setActiveAccount(account) {
    this.controller.setActiveAccount(account);
  }
  /**
   * Gets the currently active account
   */
  getActiveAccount() {
    return this.controller.getActiveAccount();
  }
  /**
   * Called by wrapper libraries (Angular & React) to set SKU and Version passed down to telemetry, logger, etc.
   * @param sku
   * @param version
   */
  initializeWrapperLibrary(sku, version3) {
    return this.controller.initializeWrapperLibrary(sku, version3);
  }
  /**
   * Sets navigation client
   * @param navigationClient
   */
  setNavigationClient(navigationClient) {
    this.controller.setNavigationClient(navigationClient);
  }
  /**
   * Returns the configuration object
   * @internal
   */
  getConfiguration() {
    return this.controller.getConfiguration();
  }
  /**
   * Hydrates cache with the tokens and account in the AuthenticationResult object
   * @param result
   * @param request - The request object that was used to obtain the AuthenticationResult
   * @returns
   */
  async hydrateCache(result, request) {
    return this.controller.hydrateCache(result, request);
  }
  /**
   * Clears tokens and account from the browser cache.
   * @param logoutRequest
   */
  clearCache(logoutRequest) {
    return this.controller.clearCache(logoutRequest);
  }
};
async function createNestablePublicClientApplication(configuration, correlationId, pcaFactory) {
  const nestedAppAuth = new NestedAppOperatingContext(configuration);
  await nestedAppAuth.initialize(correlationId);
  if (nestedAppAuth.isAvailable()) {
    const cid = correlationId || createNewGuid();
    const controller = new NestedAppAuthController(nestedAppAuth);
    const nestablePCA = pcaFactory ? pcaFactory(configuration, controller) : new PublicClientApplication(configuration, controller);
    await nestablePCA.initialize({ correlationId: cid });
    return nestablePCA;
  }
  return createStandardPublicClientApplication(configuration);
}
async function createStandardPublicClientApplication(configuration) {
  const pca = new PublicClientApplication(configuration);
  await pca.initialize();
  return pca;
}

// node_modules/@azure/msal-browser/dist/app/IPublicClientApplication.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var stubbedPublicClientApplication = {
  initialize: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  },
  acquireTokenPopup: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  },
  acquireTokenRedirect: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  },
  acquireTokenSilent: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  },
  acquireTokenByCode: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  },
  getAllAccounts: () => {
    return [];
  },
  getAccount: () => {
    return null;
  },
  handleRedirectPromise: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  },
  loginPopup: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  },
  loginRedirect: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  },
  logoutRedirect: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  },
  logoutPopup: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  },
  ssoSilent: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  },
  addEventCallback: () => {
    return null;
  },
  removeEventCallback: () => {
    return;
  },
  addPerformanceCallback: () => {
    return "";
  },
  removePerformanceCallback: () => {
    return false;
  },
  getLogger: () => {
    throw createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, "");
  },
  setLogger: () => {
    return;
  },
  setActiveAccount: () => {
    return;
  },
  getActiveAccount: () => {
    return null;
  },
  initializeWrapperLibrary: () => {
    return;
  },
  setNavigationClient: () => {
    return;
  },
  getConfiguration: () => {
    throw createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, "");
  },
  hydrateCache: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  },
  clearCache: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled, ""));
  }
};

// node_modules/@azure/msal-browser/dist/cache/TokenCache.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
async function loadExternalTokens(config, request, response, options, performanceClient = new StubPerformanceClient()) {
  blockNonBrowserEnvironment();
  const browserConfig = buildConfiguration(config, true);
  const correlationId = request.correlationId || createNewGuid();
  const rootMeasurement = performanceClient.startMeasurement(LoadExternalTokens, correlationId);
  try {
    const idTokenClaims = response.id_token ? AuthToken_exports.extractTokenClaims(response.id_token, base64Decode, correlationId) : void 0;
    const kmsi = AuthToken_exports.isKmsi(idTokenClaims || {});
    const authorityOptions = {
      protocolMode: browserConfig.system.protocolMode,
      knownAuthorities: browserConfig.auth.knownAuthorities,
      cloudDiscoveryMetadata: browserConfig.auth.cloudDiscoveryMetadata,
      authorityMetadata: browserConfig.auth.authorityMetadata
    };
    const logger = new Logger(browserConfig.system.loggerOptions || {}, name2, version2);
    const cryptoOps = new CryptoOps(logger, browserConfig.telemetry.client);
    const storage = new BrowserCacheManager(browserConfig.auth.clientId, browserConfig.cache, cryptoOps, logger, browserConfig.telemetry.client, new EventHandler(logger), buildStaticAuthorityOptions(browserConfig.auth), new TokenBindingKeyManager(logger, browserConfig.telemetry.client));
    await storage.initialize(correlationId);
    const authorityString = request.authority || browserConfig.auth.authority;
    const authority = await AuthorityFactory_exports.createDiscoveredInstance(Authority.generateAuthority(authorityString, request.azureCloudOptions), browserConfig.system.networkClient, storage, authorityOptions, logger, correlationId, performanceClient);
    const cacheRecordAccount = await invokeAsync(loadAccount, LoadAccount, logger, performanceClient, correlationId)(request, options.clientInfo || response.client_info || "", correlationId, storage, logger, cryptoOps, authority, idTokenClaims, performanceClient);
    const idToken = await invokeAsync(loadIdToken, LoadIdToken, logger, performanceClient, correlationId)(response, cacheRecordAccount.homeAccountId, cacheRecordAccount.environment, cacheRecordAccount.realm, kmsi, correlationId, storage, logger, config.auth.clientId);
    const accessToken = await invokeAsync(loadAccessToken, LoadAccessToken, logger, performanceClient, correlationId)(request, response, cacheRecordAccount.homeAccountId, cacheRecordAccount.environment, cacheRecordAccount.realm, kmsi, options, correlationId, storage, logger, config.auth.clientId);
    const refreshToken = await invokeAsync(loadRefreshToken, LoadRefreshToken, logger, performanceClient, correlationId)(response, cacheRecordAccount.homeAccountId, cacheRecordAccount.environment, kmsi, correlationId, storage, logger, config.auth.clientId, performanceClient);
    rootMeasurement.end({ success: true }, void 0, AccountEntityUtils_exports.getAccountInfo(cacheRecordAccount));
    return generateAuthenticationResult(request, {
      account: cacheRecordAccount,
      idToken,
      accessToken,
      refreshToken
    }, authority, idTokenClaims);
  } catch (error) {
    rootMeasurement.end({ success: false }, error);
    throw error;
  }
}
async function loadAccount(request, clientInfo, correlationId, storage, logger, cryptoObj, authority, idTokenClaims, performanceClient) {
  logger.verbose("0ke46k", correlationId);
  if (request.account) {
    const accountEntity = AccountEntityUtils_exports.createAccountEntityFromAccountInfo(request.account);
    await storage.setAccount(accountEntity, correlationId, AuthToken_exports.isKmsi(idTokenClaims || {}), ApiId.loadExternalTokens);
    return accountEntity;
  } else if (!clientInfo && !idTokenClaims) {
    logger.error("0hzcn4", correlationId);
    throw createBrowserAuthError(unableToLoadToken, "");
  }
  const homeAccountId = AccountEntityUtils_exports.generateHomeAccountId(clientInfo, authority.authorityType, logger, cryptoObj, correlationId, idTokenClaims);
  const claimsTenantId = idTokenClaims?.tid;
  const cachedAccount = buildAccountToCache(
    storage,
    authority,
    homeAccountId,
    base64Decode,
    correlationId,
    idTokenClaims,
    clientInfo,
    authority.getPreferredCache(),
    claimsTenantId,
    void 0,
    // authCodePayload
    void 0,
    // nativeAccountId
    logger,
    performanceClient
  );
  await storage.setAccount(cachedAccount, correlationId, AuthToken_exports.isKmsi(idTokenClaims || {}), ApiId.loadExternalTokens);
  return cachedAccount;
}
async function loadIdToken(response, homeAccountId, environment, tenantId, kmsi, correlationId, storage, logger, clientId) {
  if (!response.id_token) {
    logger.verbose("1pm7g1", correlationId);
    return null;
  }
  logger.verbose("168lyi", correlationId);
  const idTokenEntity = CacheHelpers_exports.createIdTokenEntity(homeAccountId, environment, response.id_token, clientId, tenantId);
  await storage.setIdTokenCredential(idTokenEntity, correlationId, kmsi);
  return idTokenEntity;
}
async function loadAccessToken(request, response, homeAccountId, environment, tenantId, kmsi, options, correlationId, storage, logger, clientId) {
  if (!response.access_token) {
    logger.verbose("1ckp9e", correlationId);
    return null;
  } else if (!response.expires_in) {
    logger.error("15mzx8", correlationId);
    return null;
  } else if (!response.scope && (!request.scopes || !request.scopes.length)) {
    logger.error("1h7xse", correlationId);
    return null;
  }
  logger.verbose("01kmxb", correlationId);
  const scopes = response.scope ? ScopeSet.fromString(response.scope, correlationId) : new ScopeSet(request.scopes, correlationId);
  const expiresOn = options.expiresOn || response.expires_in + TimeUtils_exports.nowSeconds();
  const extendedExpiresOn = options.extendedExpiresOn || (response.ext_expires_in || response.expires_in) + TimeUtils_exports.nowSeconds();
  const accessTokenEntity = CacheHelpers_exports.createAccessTokenEntity(homeAccountId, environment, response.access_token, clientId, tenantId, scopes.printScopes(), expiresOn, extendedExpiresOn, base64Decode, correlationId);
  await storage.setAccessTokenCredential(accessTokenEntity, correlationId, kmsi);
  return accessTokenEntity;
}
async function loadRefreshToken(response, homeAccountId, environment, kmsi, correlationId, storage, logger, clientId, performanceClient) {
  if (!response.refresh_token) {
    logger.verbose("1l7um5", correlationId);
    return null;
  }
  const expiresOn = response.refresh_token_expires_in ? response.refresh_token_expires_in + TimeUtils_exports.nowSeconds() : void 0;
  performanceClient.addFields({
    extRtExpiresOnSeconds: expiresOn
  }, correlationId);
  logger.verbose("0qy8ev", correlationId);
  const refreshTokenEntity = CacheHelpers_exports.createRefreshTokenEntity(
    homeAccountId,
    environment,
    response.refresh_token,
    clientId,
    response.foci,
    void 0,
    // userAssertionHash
    expiresOn
  );
  await storage.setRefreshTokenCredential(refreshTokenEntity, correlationId, kmsi);
  return refreshTokenEntity;
}
function generateAuthenticationResult(request, cacheRecord, authority, idTokenClaims) {
  let accessToken = "";
  let responseScopes = [];
  let expiresOn = null;
  let extExpiresOn;
  if (cacheRecord?.accessToken) {
    accessToken = cacheRecord.accessToken.secret;
    responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target, request.correlationId || "").asArray();
    expiresOn = TimeUtils_exports.toDateFromSeconds(cacheRecord.accessToken.expiresOn);
    extExpiresOn = TimeUtils_exports.toDateFromSeconds(cacheRecord.accessToken.extendedExpiresOn);
  }
  const accountEntity = cacheRecord.account;
  return {
    authority: authority.canonicalAuthority,
    uniqueId: cacheRecord.account.localAccountId,
    tenantId: cacheRecord.account.realm,
    scopes: responseScopes,
    account: AccountEntityUtils_exports.getAccountInfo(accountEntity),
    idToken: cacheRecord.idToken?.secret || "",
    idTokenClaims: idTokenClaims || {},
    accessToken,
    fromCache: true,
    expiresOn,
    correlationId: request.correlationId || "",
    requestId: "",
    extExpiresOn,
    familyId: cacheRecord.refreshToken?.familyId || "",
    tokenType: cacheRecord?.accessToken?.tokenType || "",
    state: request.state || "",
    cloudGraphHostName: accountEntity.cloudGraphHostName || "",
    msGraphHost: accountEntity.msGraphHost || "",
    fromPlatformBroker: false
  };
}

// node_modules/@azure/msal-browser/dist/event/EventMessage.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var EventMessageUtils = class {
  /**
   * Gets interaction status from event message
   * @param message
   * @param currentStatus
   */
  static getInteractionStatusFromEvent(message, currentStatus) {
    switch (message.eventType) {
      case EventType.ACQUIRE_TOKEN_START:
        if (message.interactionType === InteractionType.Redirect || message.interactionType === InteractionType.Popup) {
          return InteractionStatus.AcquireToken;
        }
        break;
      case EventType.HANDLE_REDIRECT_START:
        return InteractionStatus.HandleRedirect;
      case EventType.LOGOUT_START:
        return InteractionStatus.Logout;
      case EventType.LOGOUT_END:
        if (currentStatus && currentStatus !== InteractionStatus.Logout) {
          break;
        }
        return InteractionStatus.None;
      case EventType.HANDLE_REDIRECT_END:
        if (currentStatus && currentStatus !== InteractionStatus.HandleRedirect) {
          break;
        }
        return InteractionStatus.None;
      case EventType.ACQUIRE_TOKEN_SUCCESS:
      case EventType.ACQUIRE_TOKEN_FAILURE:
      case EventType.RESTORE_FROM_BFCACHE:
        if (message.interactionType === InteractionType.Redirect || message.interactionType === InteractionType.Popup) {
          if (currentStatus && currentStatus !== InteractionStatus.AcquireToken) {
            break;
          }
          return InteractionStatus.None;
        }
        break;
    }
    return null;
  }
};

// node_modules/@azure/msal-browser/dist/crypto/SignedHttpRequest.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var SignedHttpRequest = class {
  constructor(shrParameters, shrOptions) {
    const loggerOptions = shrOptions && shrOptions.loggerOptions || {};
    this.logger = new Logger(loggerOptions, name2, version2);
    this.cryptoOps = new CryptoOps(this.logger);
    const tokenBindingKeyManager = new TokenBindingKeyManager(this.logger);
    this.popTokenGenerator = new PopTokenGenerator(this.cryptoOps, tokenBindingKeyManager, new StubPerformanceClient());
    this.shrParameters = shrParameters;
  }
  /**
   * Generates and caches a keypair for the given request options.
   * @returns Public key digest, which should be sent to the token issuer.
   */
  async generatePublicKeyThumbprint() {
    const { kid } = await this.popTokenGenerator.generateKid(this.shrParameters);
    return kid;
  }
  /**
   * Generates a signed http request for the given payload with the given key.
   * @param payload Payload to sign (e.g. access token)
   * @param publicKeyThumbprint Public key digest (from generatePublicKeyThumbprint API)
   * @param claims Additional claims to include/override in the signed JWT
   * @returns Pop token signed with the corresponding private key
   */
  async signRequest(payload, publicKeyThumbprint, claims) {
    return this.popTokenGenerator.signPayload(payload, publicKeyThumbprint, this.shrParameters, claims);
  }
  /**
   * Removes cached keys from browser for given public key thumbprint
   * @param publicKeyThumbprint Public key digest (from generatePublicKeyThumbprint API)
   * @param correlationId
   * @returns If keys are properly deleted
   */
  async removeKeys(publicKeyThumbprint, correlationId) {
    return this.cryptoOps.removeTokenBindingKey(publicKeyThumbprint, correlationId);
  }
};

// node_modules/@azure/msal-browser/dist/telemetry/BrowserPerformanceClient.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
function getPerfMeasurementModule() {
  let sessionStorage;
  try {
    sessionStorage = window[BrowserCacheLocation.SessionStorage];
    const perfEnabled = sessionStorage?.getItem(BROWSER_PERF_ENABLED_KEY);
    if (Number(perfEnabled) === 1) {
      return import("./BrowserPerformanceMeasurement-YTZF7E5P.js");
    }
  } catch (e) {
  }
  return void 0;
}
function supportsBrowserPerformanceNow() {
  return typeof window !== "undefined" && typeof window.performance !== "undefined" && typeof window.performance.now === "function";
}
function getPerfDurationMs(startTime) {
  if (!startTime || !supportsBrowserPerformanceNow()) {
    return void 0;
  }
  return Math.round(window.performance.now() - startTime);
}
var BrowserPerformanceClient = class extends PerformanceClient {
  constructor(configuration, intFields) {
    super(configuration.auth.clientId, configuration.auth.authority || `${Constants_exports.DEFAULT_AUTHORITY}`, new Logger(configuration.system?.loggerOptions || {}, name2, version2), name2, version2, configuration.telemetry?.application || {
      appName: "",
      appVersion: ""
    }, intFields);
  }
  generateId() {
    return createNewGuid();
  }
  getPageVisibility() {
    return document.visibilityState?.toString() || null;
  }
  getOnlineStatus() {
    return typeof navigator !== "undefined" ? navigator.onLine : null;
  }
  deleteIncompleteSubMeasurements(inProgressEvent) {
    void getPerfMeasurementModule()?.then((module) => {
      const rootEvent = this.eventsByCorrelationId.get(inProgressEvent.event.correlationId);
      const isRootEvent = rootEvent && rootEvent.eventId === inProgressEvent.event.eventId;
      const incompleteMeasurements = [];
      if (isRootEvent && rootEvent?.incompleteSubMeasurements) {
        rootEvent.incompleteSubMeasurements.forEach((subMeasurement) => {
          incompleteMeasurements.push(__spreadValues({}, subMeasurement));
        });
      }
      module.BrowserPerformanceMeasurement.flushMeasurements(inProgressEvent.event.correlationId, incompleteMeasurements);
    });
  }
  /**
   * Starts measuring performance for a given operation. Returns a function that should be used to end the measurement.
   * Also captures browser page visibilityState.
   *
   * @param {PerformanceEvents} measureName
   * @param {?string} [correlationId]
   * @returns {((event?: Partial<PerformanceEvent>) => PerformanceEvent| null)}
   */
  startMeasurement(measureName, correlationId) {
    const startPageVisibility = this.getPageVisibility();
    const startOnlineStatus = this.getOnlineStatus();
    const inProgressEvent = super.startMeasurement(measureName, correlationId);
    const startTime = supportsBrowserPerformanceNow() ? window.performance.now() : void 0;
    const browserMeasurement = getPerfMeasurementModule()?.then((module) => {
      return new module.BrowserPerformanceMeasurement(measureName, inProgressEvent.event.correlationId);
    });
    void browserMeasurement?.then((measurement) => measurement.startMeasurement());
    return __spreadProps(__spreadValues({}, inProgressEvent), {
      end: (event, error, account) => {
        const networkInfo = getNetworkInfo();
        const res = inProgressEvent.end(__spreadProps(__spreadValues({}, event), {
          startPageVisibility,
          startOnlineStatus,
          endPageVisibility: this.getPageVisibility(),
          durationMs: getPerfDurationMs(startTime),
          networkEffectiveType: networkInfo.effectiveType,
          networkRtt: networkInfo.rtt
        }), error, account);
        void browserMeasurement?.then((measurement) => measurement.endMeasurement());
        this.deleteIncompleteSubMeasurements(inProgressEvent);
        return res;
      },
      discard: () => {
        inProgressEvent.discard();
        void browserMeasurement?.then((measurement) => measurement.flushMeasurement());
        this.deleteIncompleteSubMeasurements(inProgressEvent);
      }
    });
  }
};

// node_modules/@azure/msal-browser/dist/index.mjs
/*! @azure/msal-browser v5.23.0 2026-09-23 */
var AuthenticationScheme2 = Constants_exports.AuthenticationScheme;
var ResponseMode2 = Constants_exports.ResponseMode;
var PromptValue2 = Constants_exports.PromptValue;
var JsonWebTokenTypes2 = Constants_exports.JsonWebTokenTypes;
var OIDC_DEFAULT_SCOPES2 = Constants_exports.OIDC_DEFAULT_SCOPES;
export {
  ApiId,
  AuthError,
  AuthErrorCodes_exports as AuthErrorCodes,
  AuthenticationHeaderParser,
  AuthenticationScheme2 as AuthenticationScheme,
  AzureCloudInstance,
  BrowserAuthError,
  BrowserAuthErrorCodes_exports as BrowserAuthErrorCodes,
  BrowserCacheLocation,
  BrowserConfigurationAuthError,
  BrowserConfigurationAuthErrorCodes_exports as BrowserConfigurationAuthErrorCodes,
  BrowserPerformanceClient,
  BrowserPerformanceMeasurement,
  BrowserRootPerformanceEvents_exports as BrowserRootPerformanceEvents,
  BrowserUtils_exports as BrowserUtils,
  CacheLookupPolicy,
  ClientAuthError,
  ClientAuthErrorCodes_exports as ClientAuthErrorCodes,
  ClientConfigurationError,
  ClientConfigurationErrorCodes_exports as ClientConfigurationErrorCodes,
  DEFAULT_IFRAME_TIMEOUT_MS,
  EventHandler,
  EventMessageUtils,
  EventType,
  InteractionRequiredAuthError,
  InteractionRequiredAuthErrorCodes_exports as InteractionRequiredAuthErrorCodes,
  InteractionStatus,
  InteractionType,
  JsonWebTokenTypes2 as JsonWebTokenTypes,
  LocalStorage,
  LogLevel,
  Logger,
  MemoryStorage,
  NavigationClient,
  OIDC_DEFAULT_SCOPES2 as OIDC_DEFAULT_SCOPES,
  PromptValue2 as PromptValue,
  ProtocolMode,
  PublicClientApplication,
  ResponseMode2 as ResponseMode,
  ServerError,
  SessionStorage,
  SignedHttpRequest,
  StubPerformanceClient,
  WrapperSKU,
  createNestablePublicClientApplication,
  createStandardPublicClientApplication,
  enforceResourceParameter,
  isPlatformBrokerAvailable,
  loadExternalTokens,
  stubbedPublicClientApplication,
  version2 as version
};
//# debugId=4cd90ff8-8871-53df-baa6-50a7da7cf609
//# sourceMappingURL=dist-Q4JK6BGV.js.map
