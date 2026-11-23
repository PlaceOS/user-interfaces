import {
  orThrow,
  signage_ai_exports,
  uploads_exports
} from "./chunk-ZHBO75B7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QQY67O5D.js";

// apps/signage-manager/src/app/image-gen/image-gen.fn.ts
var JOB_STATES = [
  "queued",
  "running",
  "done",
  "failed",
  "cancelled"
];
function jobImage(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }
  const text = (key) => {
    const field = value[key];
    return typeof field === "string" ? field : void 0;
  };
  const count = (key) => {
    const field = value[key];
    return typeof field === "number" ? field : void 0;
  };
  return {
    state: text("state"),
    index: count("index"),
    upload_id: text("upload_id"),
    url: text("url"),
    width: count("width"),
    height: count("height"),
    mime: text("mime"),
    bytes: count("bytes"),
    item_id: text("item_id")
  };
}
function imageGenJob(job) {
  return __spreadProps(__spreadValues({}, job), {
    state: JOB_STATES.find((state) => state === job.state) || "failed",
    kind: job.kind === "edit" ? "edit" : "generate",
    images: job.images.map(jobImage)
  });
}
async function removeSignageUpload(id) {
  await uploads_exports.destroy({ id }).then(orThrow);
}
function signageImageGenCapabilities() {
  return signage_ai_exports.capabilities().then(orThrow);
}
function generateSignageImage(request) {
  return signage_ai_exports.generate({ body: request }).then(orThrow).then(imageGenJob);
}
function editSignageImage(request) {
  return signage_ai_exports.edit({ body: request }).then(orThrow).then(imageGenJob);
}
function showSignageImageGenJob(id, query = {}) {
  return signage_ai_exports.showJob(__spreadValues({ id }, query)).then(orThrow).then(imageGenJob);
}
function querySignageImageGenJobs(query = {}) {
  return signage_ai_exports.indexJobs(query).then(orThrow).then((jobs) => jobs.map(imageGenJob));
}
function cancelSignageImageGenJob(id) {
  return signage_ai_exports.cancel({ id }).then(orThrow).then(imageGenJob);
}
function claimSignageImageGenImage(id, body) {
  return signage_ai_exports.claim({ id, body }).then(orThrow).then(imageGenJob);
}

export {
  removeSignageUpload,
  signageImageGenCapabilities,
  generateSignageImage,
  editSignageImage,
  showSignageImageGenJob,
  querySignageImageGenJobs,
  cancelSignageImageGenJob,
  claimSignageImageGenImage
};
//# debugId=621ab904-de49-520b-890b-55f83b0dc4a3
//# sourceMappingURL=chunk-WTHVJV4L.js.map
