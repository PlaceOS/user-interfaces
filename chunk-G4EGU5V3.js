import {
  encodeQR
} from "./chunk-SCRIU3HN.js";

// libs/common/src/lib/qr-code.ts
function generateQRCode(code, colorLight = "#fff0", colorDark = "#000") {
  let svg = encodeQR(code, "svg", { ecc: "low", border: 1 });
  if (colorLight && colorLight !== "#fff0" && colorLight !== "#0000") {
    svg = svg.replace(">", `><rect width="100%" height="100%" style="fill:${colorLight};"/>`);
  }
  svg = svg.replace("<path", `<path style="fill:${colorDark};"`);
  const encoded_svg = encodeURIComponent(svg);
  return `data:image/svg+xml,${encoded_svg}`;
}

export {
  generateQRCode
};
//# debugId=c347f205-1b2a-5447-9e7c-f484d741417c
//# sourceMappingURL=chunk-G4EGU5V3.js.map
