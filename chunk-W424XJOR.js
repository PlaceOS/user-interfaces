import {
  afterRenderEffect
} from "./chunk-BKT2MDTY.js";

// apps/signage-manager/src/app/shared/scroll-selection.util.ts
function scrollSelectionIntoView(items, rows, selected) {
  afterRenderEffect({
    earlyRead: () => {
      const selected_id = selected()?.id;
      if (!selected_id)
        return;
      const index = items().findIndex(({ id }) => id === selected_id);
      return rows()[index]?.nativeElement;
    },
    write: (row) => {
      row()?.scrollIntoView?.({
        behavior: "instant",
        block: "nearest",
        inline: "nearest"
      });
    }
  });
}

export {
  scrollSelectionIntoView
};
//# debugId=50b6f1e0-e733-59d0-a0a0-3e7cea0f0356
//# sourceMappingURL=chunk-W424XJOR.js.map
