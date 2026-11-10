// apps/signage-manager/src/app/shared/bulk-media-upload.util.ts
function bulkItemName(item) {
  return item.name || item.file?.name || "";
}
async function loadBulkItemFile(item) {
  if (item.file)
    return item.file;
  if (item.loadFile)
    return item.loadFile();
  throw new Error("No file to upload");
}

export {
  bulkItemName,
  loadBulkItemFile
};
//# debugId=6077134b-4aac-5b76-b444-92d3deaca55f
//# sourceMappingURL=chunk-5QF3ODFV.js.map
