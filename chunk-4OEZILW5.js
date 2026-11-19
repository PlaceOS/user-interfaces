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
//# debugId=3ab88f0a-d8c0-5279-b2bb-631756f5d364
//# sourceMappingURL=chunk-4OEZILW5.js.map
