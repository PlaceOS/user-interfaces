import {
  SignageService
} from "./chunk-TK62XSGF.js";
import {
  computed,
  inject
} from "./chunk-56VJTSNA.js";

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
  const service = inject(SignageService);
  return computed(() => filterManageNavItems(service.can_manage_all_groups() || !!service.manageable_signage_groups().length, service.templates_enabled()));
}

export {
  filterManageNavItems,
  injectNavItems
};
//# debugId=58d03c9e-9461-5021-988c-2c2cc204b772
//# sourceMappingURL=chunk-RMTQUXRF.js.map
