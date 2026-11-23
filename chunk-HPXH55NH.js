import {
  ControlSystem,
  Playlist,
  PlaylistItem,
  PlaylistItemSchedule,
  SignageTemplate,
  SignageTemplateSystemTemplate,
  Zone,
  assert,
  parseResponse
} from "./chunk-ZHBO75B7.js";

// apps/signage-manager/src/app/signage-models.ts
function model(schema, defaults, data) {
  const value = {};
  for (const [key, field] of Object.entries(defaults))
    value[key] = field;
  for (const [key, field] of Object.entries(data)) {
    if (field !== null && field !== void 0)
      value[key] = field;
  }
  const result = parseResponse(schema, value, { missing_fields: "zero" });
  assert(result.ok, "the signage data matches the schema");
  return result.value;
}
function unixNow() {
  return Math.floor(Date.now() / 1e3);
}
function signageMedia(data = {}) {
  return model(PlaylistItem, {
    id: "",
    created_at: unixNow(),
    updated_at: unixNow(),
    name: "",
    description: "",
    authority_id: "",
    start_time: 0,
    play_time: 0,
    video_length: 0,
    orientation: "unspecified",
    media_uri: "",
    media_id: "",
    thumbnail_id: "",
    plugin_id: "",
    plugin_params: {},
    play_count: 0,
    tags: [],
    shared_with: [],
    playlists: []
  }, data);
}
function signagePlaylist(data = {}) {
  return model(Playlist, {
    id: "",
    created_at: 0,
    updated_at: 0,
    name: "",
    description: "",
    authority_id: "",
    play_count: 0,
    play_through_count: 0,
    random: false,
    enabled: true,
    distribution: false,
    default_duration: 15 * 1e3,
    schedules: [],
    shared_with: []
  }, data);
}
function playlistItemSchedule(data = {}) {
  return model(PlaylistItemSchedule, {
    id: "",
    playlist_id: "",
    item_id: "",
    schedules: [],
    created_at: 0,
    updated_at: 0,
    media: signageMedia()
  }, data);
}
function signageTemplate(data = {}) {
  return model(SignageTemplate, {
    created_at: "",
    updated_at: "",
    id: "",
    name: "",
    description: "",
    tags: [],
    authority_id: "",
    background_item_id: "",
    layouts: [],
    full_screen_takeover: false,
    merge: false,
    approval_requested: false,
    requested_by_id: "",
    approved: false,
    approved_by_id: "",
    approved_by_name: "",
    approved_by_email: "",
    live_template_id: "",
    shared_with: []
  }, data);
}
function signageTemplateMapping(data = {}) {
  return model(SignageTemplateSystemTemplate, {
    created_at: "",
    updated_at: "",
    id: "",
    control_system_id: "",
    zone_id: "",
    template_id: ""
  }, data);
}
function signageZone(data = {}) {
  return model(Zone, {
    id: "",
    name: "",
    display_name: "",
    description: "",
    tags: [],
    parent_id: "",
    playlists: [],
    images: [],
    triggers: []
  }, data);
}
function signageSystem(data = {}) {
  return model(ControlSystem, {
    id: "",
    name: "",
    display_name: "",
    description: "",
    email: "",
    zones: [],
    modules: [],
    playlists: [],
    features: [],
    images: []
  }, data);
}

export {
  signageMedia,
  signagePlaylist,
  playlistItemSchedule,
  signageTemplate,
  signageTemplateMapping,
  signageZone,
  signageSystem
};
//# debugId=35cee234-751d-54ae-a832-17bc505c5572
//# sourceMappingURL=chunk-HPXH55NH.js.map
