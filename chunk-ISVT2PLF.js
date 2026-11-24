import {
  NG_VALUE_ACCESSOR
} from "./chunk-WG7PJTZZ.js";
import {
  forwardRef
} from "./chunk-Y6KAMZVN.js";

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
//# sourceMappingURL=chunk-ISVT2PLF.js.map
