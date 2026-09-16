// apps/signage-manager/src/app/branding/brand-fonts.ts
var BRAND_FONTS = [
  { family: "", label: "SIGNAGE_MANAGER.BRAND_FONT_SYSTEM" },
  { family: "Inter", label: "Inter" },
  { family: "Roboto", label: "Roboto" },
  { family: "Open Sans", label: "Open Sans" },
  { family: "Lato", label: "Lato" },
  { family: "Montserrat", label: "Montserrat" },
  { family: "Poppins", label: "Poppins" },
  { family: "Work Sans", label: "Work Sans" },
  { family: "DM Sans", label: "DM Sans" },
  { family: "Source Sans 3", label: "Source Sans 3" },
  { family: "Space Grotesk", label: "Space Grotesk" },
  { family: "Bricolage Grotesque", label: "Bricolage Grotesque" },
  { family: "Playfair Display", label: "Playfair Display" }
];
var LOADED = /* @__PURE__ */ new Map();
function ensureBrandFont(family) {
  if (!family)
    return Promise.resolve();
  let loading = LOADED.get(family);
  if (!loading) {
    loading = load(family);
    LOADED.set(family, loading);
  }
  return loading;
}
async function load(family) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@400;700&display=swap`;
  const parsed = new Promise((resolve) => {
    link.onload = () => resolve();
    link.onerror = () => resolve();
  });
  document.head.appendChild(link);
  await parsed;
  const faces = document.fonts;
  if (!faces)
    return;
  try {
    await Promise.all([
      faces.load(`400 16px "${family}"`),
      faces.load(`700 16px "${family}"`)
    ]);
  } catch {
  }
}

export {
  BRAND_FONTS,
  ensureBrandFont
};
//# debugId=34a2a53e-655c-541a-ae61-82283b85982f
//# sourceMappingURL=chunk-7NXM32JV.js.map
