import {
  NG_VALUE_ACCESSOR
} from "./chunk-W5W5DS3H.js";
import {
  forwardRef
} from "./chunk-J4V3B3VF.js";

// libs/common/src/lib/value-accessor.ts
function provideValueAccessor(component) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(component),
    multi: true
  };
}

export {
  provideValueAccessor
};
//# debugId=1e14838c-5abf-559d-bd4d-73d081fd5fe1
//# sourceMappingURL=chunk-ZPJ7D7ZI.js.map
