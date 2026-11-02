import {
  VERSION,
  currentUser
} from "./chunk-E5WLQ6H2.js";
import {
  _c,
  mc
} from "./chunk-XMOMB3G6.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/ui/app-settings/app-settings.utilities.ts
function isSettingsGroup(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
function normaliseAppSetting(key, value) {
  if ((key === "logo_light" || key === "logo_dark") && isSettingsGroup(value) && typeof value.src === "string") {
    return value.src;
  }
  return value;
}
function settingsEqual(left, right) {
  if (Object.is(left, right))
    return true;
  if (Array.isArray(left) && Array.isArray(right)) {
    return left.length === right.length && left.every((value, index) => settingsEqual(value, right[index]));
  }
  if (!isSettingsGroup(left) || !isSettingsGroup(right))
    return false;
  const left_keys = Object.keys(left);
  const right_keys = Object.keys(right);
  return left_keys.length === right_keys.length && left_keys.every((key) => key in right && settingsEqual(left[key], right[key]));
}
function mergeAppSettings(...layers) {
  const result = {};
  for (const layer of layers) {
    if (!layer)
      continue;
    for (const key in layer) {
      const next_value = normaliseAppSetting(key, layer[key]);
      const current_value = result[key];
      result[key] = isSettingsGroup(current_value) && isSettingsGroup(next_value) ? __spreadValues(__spreadValues({}, current_value), next_value) : next_value;
    }
  }
  return result;
}
function applyAppSettings(model, settings) {
  const supported_settings = {};
  for (const key in settings) {
    if (key in model)
      supported_settings[key] = settings[key];
  }
  return mergeAppSettings(model, supported_settings);
}
var LOCKER_BOOKING_FALLBACKS = [
  "allow_all_day",
  "all_day_default",
  "bookable_hours",
  "available_period",
  "max_duration"
];
function applyBookingFallbacks(model, settings, group, keys) {
  const model_group = model[group];
  const group_settings = settings[group];
  const bookings = settings.bookings;
  if (!isSettingsGroup(model_group) || !isSettingsGroup(bookings)) {
    return model;
  }
  const fallbacks = {};
  for (const key of keys) {
    const is_unset = !isSettingsGroup(group_settings) || group_settings[key] === void 0;
    if (key in model_group && is_unset && bookings[key] != null) {
      fallbacks[key] = bookings[key];
    }
  }
  return applyAppSettings(model, { [group]: fallbacks });
}
function isOverride(value, inherited_value, initial_value, is_stored) {
  if (value === void 0 || settingsEqual(value, inherited_value)) {
    return false;
  }
  return is_stored || !settingsEqual(value, initial_value);
}
function appSettingOverrides(working_settings, inherited_settings, initial_settings, stored_settings) {
  const overrides = {};
  for (const key in working_settings) {
    const working_value = working_settings[key];
    if (working_value === void 0)
      continue;
    const inherited_value = inherited_settings[key];
    const initial_value = initial_settings[key];
    const stored_value = stored_settings[key];
    if (isSettingsGroup(working_value)) {
      const inherited_group = isSettingsGroup(inherited_value) ? inherited_value : {};
      const initial_group = isSettingsGroup(initial_value) ? initial_value : {};
      const stored_group = isSettingsGroup(stored_value) ? stored_value : {};
      const group_overrides = {};
      for (const setting_key in working_value) {
        const setting_value = working_value[setting_key];
        if (isOverride(setting_value, inherited_group[setting_key], initial_group[setting_key], setting_key in stored_group)) {
          group_overrides[setting_key] = setting_value;
        }
      }
      if (Object.keys(group_overrides).length) {
        overrides[key] = group_overrides;
      }
    } else if (isOverride(working_value, inherited_value, initial_value, key in stored_settings)) {
      overrides[key] = working_value;
    }
  }
  return overrides;
}
var APP_METADATA_KEYS = {
  concierge: {
    settings: ["app.concierge_metadata_key", "app.concierge_app"],
    fallback: "concierge_app"
  },
  workplace: {
    settings: ["app.workplace_metadata_key"],
    fallback: "workplace_app"
  },
  "visitor-kiosk": {
    settings: ["app.visitor_kiosk_metadata_key", "app.visitor_kiosk_app"],
    fallback: "visitor-kiosk_app"
  }
};
function appMetadataKey(settings, app) {
  const { settings: keys, fallback } = APP_METADATA_KEYS[app];
  for (const key of keys) {
    const value = settings.get(key);
    if (value)
      return value;
  }
  return fallback;
}
function appSettingsHeading(title, zone) {
  return `${title} <div class="font-mono text-xs px-2 py-1 rounded bg-base-300 ml-2">${zone.display_name || zone.name || "Organisation"}</div>`;
}
async function loadMetadata(id, key) {
  const metadata = await _c(id, key);
  return metadata.details || {};
}
async function loadLayeredAppSettings(zone, org_id, key, defaults) {
  const is_org = zone.id === org_id;
  const org = is_org ? {} : await loadMetadata(org_id, key);
  const parent = !is_org && zone.parent_id && zone.parent_id !== org_id ? await loadMetadata(zone.parent_id, key) : {};
  const stored = await loadMetadata(zone.id, key);
  return { inherited: mergeAppSettings(defaults, org, parent), stored };
}
function editedBy() {
  const user = currentUser();
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    domain: location.hostname,
    role: user.groups.includes("placeos_admin") ? "Admin" : user.groups.includes("placeos_support") ? "Support" : "User"
  };
}
async function saveAppSettings(zone_id, key, app_name, layers, initial, values) {
  const details = appSettingOverrides(mergeAppSettings(layers.stored, values), layers.inherited, initial, layers.stored);
  details.edited_by = editedBy();
  await mc(zone_id, {
    name: key,
    details,
    description: `[${VERSION.hash}|C] ${app_name} Application Settings`
  });
}

export {
  mergeAppSettings,
  applyAppSettings,
  LOCKER_BOOKING_FALLBACKS,
  applyBookingFallbacks,
  appMetadataKey,
  appSettingsHeading,
  loadLayeredAppSettings,
  saveAppSettings
};
//# debugId=225b848f-1eb4-5c00-8b1f-64f1e1aa256d
//# sourceMappingURL=chunk-HPNZBLYS.js.map
