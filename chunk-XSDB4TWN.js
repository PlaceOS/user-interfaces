import {
  LevelModalComponent
} from "./chunk-Q437IYQI.js";
import {
  queryParkingSpacesForZones
} from "./chunk-4G5AVUWZ.js";
import {
  queryLockerAssetsForZones,
  queryLockerBankAssetsForZones
} from "./chunk-LK4JSOGX.js";
import {
  getMapDetails
} from "./chunk-TR2TKPBH.js";
import {
  MatDialog
} from "./chunk-CAAMUB2D.js";
import {
  requestSpacesForZone
} from "./chunk-XZDJ7TNQ.js";
import {
  OrganisationService,
  SettingsService,
  UploadsService,
  currentUser
} from "./chunk-ZCE55SZV.js";
import {
  Mt,
  _h,
  ac,
  hc,
  mh
} from "./chunk-XE3PPZGJ.js";
import {
  Injectable,
  computed,
  effect,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-EOGESHX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/map-manager/map-list.utilities.ts
var DEFAULT_MAP_STUDIO_URL = "/map-studio/";
function mapRows(levels, buildings, options = {}, names) {
  const search = (options.search || "").trim().toLowerCase();
  const rows = [];
  for (const level of levels) {
    if (!level.map_id)
      continue;
    if (options.building && level.parent_id !== options.building)
      continue;
    const building = buildings.find((item) => item.id === level.parent_id);
    const name = level.display_name || level.name || level.id;
    const building_name = building?.display_name || building?.name || "";
    if (search && !`${name} ${level.id} ${building_name} ${level.map_id}`.toLowerCase().includes(search)) {
      continue;
    }
    rows.push({
      id: level.id,
      level,
      name,
      building: building_name,
      building_id: level.parent_id,
      map_id: level.map_id,
      map_short: shortenMapUrl(level.map_id),
      map_label: mapFileLabel(level.map_id, names?.get(level.map_id))
    });
  }
  return rows.sort((a, b) => a.building.localeCompare(b.building) || a.name.localeCompare(b.name));
}
function isApiUpload(url) {
  return /\/api\/engine\/v2\/uploads\//.test(url || "");
}
function shortenMapUrl(url, max = 40) {
  const trimmed = (url || "").trim();
  if (!trimmed)
    return "";
  const without_query = trimmed.split(/[?#]/)[0];
  const parts = without_query.split("/").filter((part) => !!part);
  const tail = parts.length > 2 ? `\u2026/${parts.slice(-2).join("/")}` : trimmed;
  return tail.length > max ? `\u2026${tail.slice(-max)}` : tail;
}
function mapStudioUrl(base, floorplan_id) {
  let root = (base || DEFAULT_MAP_STUDIO_URL).trim() || DEFAULT_MAP_STUDIO_URL;
  if (!root.endsWith("/"))
    root = `${root}/`;
  return floorplan_id ? `${root}#/editor/${encodeURIComponent(floorplan_id)}` : root;
}
function urlFileName(url) {
  const path = (url || "").trim().split(/[?#]/)[0];
  const last = path.split("/").filter((part) => !!part).pop() || "";
  if (!/\.svg$/i.test(last))
    return null;
  try {
    return decodeURIComponent(last);
  } catch {
    return last;
  }
}
function mapFileLabel(url, known_name) {
  return known_name || urlFileName(url) || shortenMapUrl(url);
}
function mapFileName(level, current_url, known_name) {
  if (known_name)
    return known_name;
  const from_url = current_url ? urlFileName(current_url) : null;
  if (from_url)
    return from_url;
  const name = level.display_name || level.name || level.id || "";
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "level-map";
  return `${slug}.svg`;
}
var MAP_HISTORY_LIMIT = 10;
function appendMapHistory(existing, entry, limit = MAP_HISTORY_LIMIT) {
  const list = Array.isArray(existing) ? existing.filter((item) => !!item && typeof item === "object" && "map_id" in item) : [];
  return [entry, ...list].slice(0, limit);
}

// apps/concierge/src/app/map-manager/protected-ids.ts
function assetMapId(asset) {
  const data = asset.other_data || {};
  return asset.map_id || data.map_id || "";
}
function conciergeProtectedIdSources(level, organisation_id) {
  return {
    desks: async () => {
      const metadata = await ac(level.id, "desks");
      const list = Array.isArray(metadata.details) ? metadata.details : [];
      return list.map((desk) => ({
        id: desk.map_id || desk.id || "",
        kind: "desk",
        label: desk.name || desk.id || ""
      })).filter((entry) => !!entry.id);
    },
    rooms: async () => {
      const spaces = await firstValueFrom(requestSpacesForZone(level.id));
      return spaces.filter((space) => !!space.map_id).map((space) => ({
        id: space.map_id,
        kind: "room",
        label: space.display_name || space.name || ""
      }));
    },
    parking: async () => {
      const spaces = await queryParkingSpacesForZones([level.id]);
      return spaces.map((space) => ({
        id: assetMapId(space),
        kind: "parking",
        label: space.identifier || space.name || ""
      })).filter((entry) => !!entry.id);
    },
    lockers: async () => {
      const [banks, lockers] = await Promise.all([
        queryLockerBankAssetsForZones([level.id]),
        queryLockerAssetsForZones([level.id])
      ]);
      return [...banks, ...lockers].map((asset) => ({
        id: assetMapId(asset),
        kind: "locker",
        label: asset.identifier || asset.name || ""
      })).filter((entry) => !!entry.id);
    },
    points_of_interest: async () => {
      const metadata = await ac(organisation_id, "points-of-interest");
      const mapping = metadata.details || {};
      const list = Array.isArray(mapping[level.id]) ? mapping[level.id] : [];
      return list.filter((point) => typeof point.location === "string").map((point) => ({
        id: point.location,
        kind: "poi",
        label: point.name || point.id || ""
      }));
    }
  };
}

// apps/concierge/src/app/map-manager/map-management.service.ts
var MAP_HISTORY_KEY = "map-history";
var MapManagementService = class _MapManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._uploads = inject(UploadsService);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    this.buildings = this._org.building_list;
    this._map_names = signal(
      /* @__PURE__ */ new Map(),
      ...ngDevMode ? [{ debugName: "_map_names" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._names_requested = /* @__PURE__ */ new Set();
    this.rows = computed(
      () => mapRows(this._org.level_list(), this._org.building_list(), this._options(), this._map_names()),
      ...ngDevMode ? [{ debugName: "rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      for (const row of this.rows()) {
        if (isApiUpload(row.map_id))
          this._resolveMapName(row.level);
      }
    });
  }
  /** The file name the map was last saved under, when known. */
  mapName(map_id) {
    return this._map_names().get(map_id);
  }
  async _resolveMapName(level) {
    const url = level.map_id;
    if (!url || this._names_requested.has(url))
      return;
    this._names_requested.add(url);
    const metadata = await ac(level.id, MAP_HISTORY_KEY).catch(() => null);
    const entries = Array.isArray(metadata?.details) ? metadata.details : [];
    const match = entries.find((entry) => entry.map_id === url && !!entry.file_name);
    if (match?.file_name) {
      const name = match.file_name;
      this._map_names.update((map) => new Map(map).set(url, name));
    }
  }
  setFilters(options) {
    this._options.update((current) => __spreadValues(__spreadValues({}, current), options));
  }
  setSearchString(search) {
    this._options.update((current) => __spreadProps(__spreadValues({}, current), { search }));
  }
  level(id) {
    return this._org.level_list().find((level) => level.id === id);
  }
  building(level) {
    return this._org.building_list().find((building) => building.id === level?.parent_id);
  }
  editLevel(level) {
    const ref = this._dialog.open(LevelModalComponent, { data: level });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  studioUrl(floorplan_id) {
    return mapStudioUrl(this._settings.get("app.map_studio_url"), floorplan_id);
  }
  openStudio(floorplan_id) {
    window.open(this.studioUrl(floorplan_id), "_blank", "noopener");
  }
  /** The level's map as text, the way the viewer fetches it. */
  async loadMapText(level) {
    const details = await getMapDetails(level.map_id);
    return details.raw_data;
  }
  /** Store the picture of the map an AI request carries; answers with the upload id. */
  uploadMapSnapshot(blob, name) {
    const file = new File([blob], name, { type: blob.type || "image/png" });
    return this._uploads.uploadFileToCompletion(file);
  }
  /** The map URL the server holds now, to spot a change made elsewhere. */
  async currentMapId(level_id) {
    const zone = await _h(level_id);
    return zone.map_id || "";
  }
  protectedIdSources(level) {
    return conciergeProtectedIdSources(level, this._org.organisation.id);
  }
  /**
   * Upload the map, point the level at it and record the version. The
   * history write never fails the save.
   */
  async saveLevelMap(level, markup, summary) {
    const file_name = mapFileName(level, level.map_id, this._map_names().get(level.map_id));
    const file = new File([markup], file_name, {
      type: "image/svg+xml"
    });
    const upload_id = await this._uploads.uploadFileToCompletion(file);
    const map_id = `/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
    const level_name = level.name || `LEVEL ${Mt()?.description} ${level.display_name || level.id}`;
    const tags = level.tags?.length ? level.tags : ["level"];
    const response = await mh(level.id, {
      id: level.id,
      display_name: level.display_name,
      parent_id: level.parent_id,
      map_id,
      name: level_name,
      tags
    });
    const zone = __spreadProps(__spreadValues(__spreadValues({}, level), response), {
      map_id,
      tags: response?.tags?.length ? response.tags : tags
    });
    this._org.addZone(zone);
    this._map_names.update((map) => new Map(map).set(map_id, file_name));
    await this._recordHistory(level.id, {
      upload_id,
      map_id,
      at: Date.now(),
      by: currentUser()?.email || "",
      summary,
      file_name
    }).catch((error) => console.warn("Map history was not recorded for", level.id, error));
    return { upload_id, map_id, zone };
  }
  async _recordHistory(level_id, entry) {
    const existing = await ac(level_id, MAP_HISTORY_KEY).catch(() => null);
    await hc(level_id, {
      name: MAP_HISTORY_KEY,
      details: appendMapHistory(existing?.details, entry),
      description: "Map versions saved from Concierge"
    });
  }
  static {
    this.\u0275fac = function MapManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapManagementService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MapManagementService, factory: _MapManagementService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  isApiUpload,
  MapManagementService
};
//# debugId=b0288955-9feb-5032-8b69-a179dbca5032
//# sourceMappingURL=chunk-XSDB4TWN.js.map
