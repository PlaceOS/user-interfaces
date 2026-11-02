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

// apps/concierge/src/app/ui/app-settings/settings-option.constants.ts
var AVAILABLE_PERIOD_SHORT_OPTIONS = [
  { value: 1, label: "1 Day" },
  { value: 2, label: "2 Days" },
  { value: 3, label: "3 Days" },
  { value: 4, label: "4 Days" },
  { value: 5, label: "5 Days" },
  { value: 6, label: "6 Days" },
  { value: 7, label: "1 Week" },
  { value: 8, label: "8 Days" },
  { value: 9, label: "9 Days" },
  { value: 10, label: "10 Days" },
  { value: 11, label: "11 Days" },
  { value: 12, label: "12 Days" },
  { value: 13, label: "13 Days" },
  { value: 14, label: "2 Weeks" },
  { value: 21, label: "3 Weeks" },
  { value: 30, label: "1 Month" }
];
var AVAILABLE_PERIOD_EXTENDED_OPTIONS = [
  ...AVAILABLE_PERIOD_SHORT_OPTIONS,
  { value: 45, label: "6 Weeks" },
  { value: 60, label: "2 Months" },
  { value: 90, label: "3 Months" },
  { value: 120, label: "4 Months" },
  { value: 150, label: "5 Months" },
  { value: 180, label: "6 Months" }
];
var MAX_DURATION_FULL_OPTIONS = [
  { value: 60, label: "1 Hour" },
  { value: 90, label: "1 Hour 30 Minutes" },
  { value: 120, label: "2 Hours" },
  { value: 180, label: "3 Hours" },
  { value: 240, label: "4 Hours" },
  { value: 300, label: "5 Hours" },
  { value: 360, label: "6 Hours" },
  { value: 420, label: "7 Hours" },
  { value: 480, label: "8 Hours" },
  { value: 540, label: "9 Hours" },
  { value: 600, label: "10 Hours" },
  { value: 660, label: "11 Hours" },
  { value: 720, label: "12 Hours" },
  { value: 780, label: "13 Hours" },
  { value: 840, label: "14 Hours" },
  { value: 900, label: "15 Hours" },
  { value: 960, label: "16 Hours" },
  { value: 1020, label: "17 Hours" },
  { value: 1080, label: "18 Hours" },
  { value: 1140, label: "19 Hours" },
  { value: 1200, label: "20 Hours" }
];
var MAX_DURATION_SHORT_OPTIONS = MAX_DURATION_FULL_OPTIONS.filter((o) => o.value <= 720);
var MAX_DURATION_MINI_OPTIONS = MAX_DURATION_FULL_OPTIONS.filter((o) => o.value <= 480);
var WEEK_START_OPTIONS = [
  { value: 0, label: "Sunday" },
  { value: 1, label: "Monday" },
  { value: 2, label: "Tuesday" },
  { value: 3, label: "Wednesday" },
  { value: 4, label: "Thursday" },
  { value: 5, label: "Friday" },
  { value: 6, label: "Saturday" }
];
var BLOCK_START_OPTIONS = [
  { value: 0, label: "12AM (Midnight)" },
  { value: 1, label: "1AM" },
  { value: 2, label: "2AM" },
  { value: 3, label: "3AM" },
  { value: 4, label: "4AM" },
  { value: 5, label: "5AM" },
  { value: 6, label: "6AM" },
  { value: 7, label: "7AM" },
  { value: 8, label: "8AM" },
  { value: 9, label: "9AM" },
  { value: 10, label: "10AM" },
  { value: 11, label: "11AM" }
];
var BLOCK_END_OPTIONS = [
  { value: 12, label: "12PM (Midday)" },
  { value: 13, label: "1PM" },
  { value: 14, label: "2PM" },
  { value: 15, label: "3PM" },
  { value: 16, label: "4PM" },
  { value: 17, label: "5PM" },
  { value: 18, label: "6PM" },
  { value: 19, label: "7PM" },
  { value: 20, label: "8PM" },
  { value: 21, label: "9PM" },
  { value: 22, label: "10PM" },
  { value: 23, label: "11PM" },
  { value: 24, label: "12AM (Midnight)" }
];
var BOOKABLE_HOUR_START_OPTIONS = [
  { value: 0, label: "12AM (Midnight)" },
  { value: 1, label: "1AM" },
  { value: 2, label: "2AM" },
  { value: 3, label: "3AM" },
  { value: 4, label: "4AM" },
  { value: 5, label: "5AM" },
  { value: 6, label: "6AM" },
  { value: 7, label: "7AM" },
  { value: 8, label: "8AM" },
  { value: 9, label: "9AM" },
  { value: 10, label: "10AM" },
  { value: 11, label: "11AM" },
  { value: 12, label: "12PM (Midday)" },
  { value: 13, label: "1PM" },
  { value: 14, label: "2PM" },
  { value: 15, label: "3PM" },
  { value: 16, label: "4PM" },
  { value: 17, label: "5PM" },
  { value: 18, label: "6PM" },
  { value: 19, label: "7PM" },
  { value: 20, label: "8PM" },
  { value: 21, label: "9PM" },
  { value: 22, label: "10PM" },
  { value: 23, label: "11PM" }
];
var BOOKABLE_HOUR_END_OPTIONS = [
  { value: 1, label: "1AM" },
  { value: 2, label: "2AM" },
  { value: 3, label: "3AM" },
  { value: 4, label: "4AM" },
  { value: 5, label: "5AM" },
  { value: 6, label: "6AM" },
  { value: 7, label: "7AM" },
  { value: 8, label: "8AM" },
  { value: 9, label: "9AM" },
  { value: 10, label: "10AM" },
  { value: 11, label: "11AM" },
  { value: 12, label: "12PM (Midday)" },
  { value: 13, label: "1PM" },
  { value: 14, label: "2PM" },
  { value: 15, label: "3PM" },
  { value: 16, label: "4PM" },
  { value: 17, label: "5PM" },
  { value: 18, label: "6PM" },
  { value: 19, label: "7PM" },
  { value: 20, label: "8PM" },
  { value: 21, label: "9PM" },
  { value: 22, label: "10PM" },
  { value: 23, label: "11PM" },
  { value: 24, label: "12AM (Midnight)" }
];
var BLOCK_HEIGHT_OPTIONS = [
  { value: 1, label: "1rem (16px)" },
  { value: 1.5, label: "1.5rem (24px)" },
  { value: 2, label: "2rem (32px)" },
  { value: 2.5, label: "2.5rem (40px)" },
  { value: 3, label: "3rem (48px)" },
  { value: 3.5, label: "3.5rem (56px)" },
  { value: 4, label: "4rem (64px)" },
  { value: 4.5, label: "4.5rem (72px)" },
  { value: 5, label: "5rem (80px)" },
  { value: 5.5, label: "5.5rem (88px)" },
  { value: 6, label: "6rem (96px)" },
  { value: 6.5, label: "6.5rem (104px)" },
  { value: 7, label: "7rem (112px)" },
  { value: 7.5, label: "7.5rem (120px)" },
  { value: 8, label: "8rem (128px)" }
];
var SETUP_BREAKDOWN_OPTIONS = [
  { value: 5, label: "5 Minutes" },
  { value: 10, label: "10 Minutes" },
  { value: 15, label: "15 Minutes" },
  { value: 30, label: "30 Minutes" },
  { value: 45, label: "45 Minutes" },
  { value: 60, label: "1 Hour" },
  { value: 90, label: "1 Hour 30 Minutes" },
  { value: 120, label: "2 Hours" }
];
var EXPLORE_FEATURE_OPTIONS = [
  { value: "devices", label: "Devices" },
  { value: "desks", label: "Desks" },
  { value: "lockers", label: "Lockers" },
  { value: "parking", label: "Parking" },
  { value: "spaces", label: "Rooms" },
  { value: "spaces-presence", label: "Room Presence" },
  { value: "zones", label: "Zones" }
];
var BANNER_TYPE_OPTIONS = [
  { value: "", label: "None" },
  { value: "info", label: "Info" },
  { value: "warn", label: "Warning" },
  { value: "error", label: "Error" }
];
var DAY_TIMELINE_VIEW_OPTIONS = [
  { value: "default", label: "Timeline" },
  { value: "inverted", label: "Timeline (Rooms Vertical)" }
];

export {
  mergeAppSettings,
  applyAppSettings,
  LOCKER_BOOKING_FALLBACKS,
  applyBookingFallbacks,
  appSettingOverrides,
  AVAILABLE_PERIOD_SHORT_OPTIONS,
  AVAILABLE_PERIOD_EXTENDED_OPTIONS,
  MAX_DURATION_FULL_OPTIONS,
  MAX_DURATION_SHORT_OPTIONS,
  MAX_DURATION_MINI_OPTIONS,
  WEEK_START_OPTIONS,
  BLOCK_START_OPTIONS,
  BLOCK_END_OPTIONS,
  BOOKABLE_HOUR_START_OPTIONS,
  BOOKABLE_HOUR_END_OPTIONS,
  BLOCK_HEIGHT_OPTIONS,
  SETUP_BREAKDOWN_OPTIONS,
  EXPLORE_FEATURE_OPTIONS,
  BANNER_TYPE_OPTIONS,
  DAY_TIMELINE_VIEW_OPTIONS
};
//# debugId=2858ec8d-0e64-5794-8941-cb04ee5cd304
//# sourceMappingURL=chunk-LTM6CUF4.js.map
