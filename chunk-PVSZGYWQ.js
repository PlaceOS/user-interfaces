import {
  SignageContextService
} from "./chunk-NVC2MTBW.js";
import {
  computed,
  inject
} from "./chunk-6HUGPUMR.js";

// apps/signage-manager/src/app/shared/nav-items.ts
var NAV_ITEMS = [
  {
    route: "/media",
    icon: "stock_media",
    label: "SIGNAGE_MANAGER.NAV_MEDIA"
  },
  {
    route: "/playlists",
    icon: "playlist_play",
    label: "SIGNAGE_MANAGER.NAV_PLAYLISTS"
  },
  {
    route: "/templates",
    icon: "dashboard_customize",
    label: "SIGNAGE_MANAGER.NAV_TEMPLATES"
  },
  { route: "/zones", icon: "layers", label: "SIGNAGE_MANAGER.NAV_ZONES" },
  {
    route: "/schedules",
    icon: "calendar_view_day",
    label: "SIGNAGE_MANAGER.NAV_SCHEDULES"
  },
  {
    route: "/displays",
    icon: "display_settings",
    label: "SIGNAGE_MANAGER.NAV_DISPLAYS"
  },
  {
    route: "/manage",
    icon: "tune",
    label: "SIGNAGE_MANAGER.NAV_MANAGE"
  },
  { route: "/groups", icon: "groups", label: "COMMON.GROUPS" }
];
function filterManageNavItems(can_manage_groups, templates_enabled = false) {
  return NAV_ITEMS.filter((item) => {
    if (item.route === "/groups")
      return can_manage_groups;
    if (item.route === "/templates")
      return templates_enabled;
    return true;
  });
}
function injectNavItems() {
  const context = inject(SignageContextService);
  return computed(() => filterManageNavItems(context.can_manage_groups(), context.templates_enabled()));
}

export {
  injectNavItems
};
//# debugId=692e5c90-ebb0-5bd5-9846-c02075de79c2
//# sourceMappingURL=chunk-PVSZGYWQ.js.map
