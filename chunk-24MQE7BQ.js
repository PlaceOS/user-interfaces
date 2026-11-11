import {
  V,
  d,
  u,
  v
} from "./chunk-5AOQ34DQ.js";

// apps/signage-manager/src/app/image-gen/image-gen.fn.ts
var IMAGE_GEN_PATH = () => `${u()}/signage/ai`;
function toQuery(params) {
  const pairs = Object.entries(params).filter(([, value]) => value !== void 0 && value !== null).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  return pairs.length ? `?${pairs.join("&")}` : "";
}
function removeSignageUpload(id) {
  return V(`${u()}/uploads/${encodeURIComponent(id)}`, {
    response_type: "void"
  });
}
function signageImageGenCapabilities() {
  return d(`${IMAGE_GEN_PATH()}/capabilities`);
}
function generateSignageImage(request) {
  return v(`${IMAGE_GEN_PATH()}/generate`, request);
}
function editSignageImage(request) {
  return v(`${IMAGE_GEN_PATH()}/edit`, request);
}
function showSignageImageGenJob(id, query = {}) {
  return d(`${IMAGE_GEN_PATH()}/jobs/${encodeURIComponent(id)}${toQuery(query)}`);
}
function querySignageImageGenJobs(query = {}) {
  return d(`${IMAGE_GEN_PATH()}/jobs${toQuery(query)}`);
}
function cancelSignageImageGenJob(id) {
  return v(`${IMAGE_GEN_PATH()}/jobs/${encodeURIComponent(id)}/cancel`, {});
}
function claimSignageImageGenImage(id, body) {
  return v(`${IMAGE_GEN_PATH()}/jobs/${encodeURIComponent(id)}/claim`, body);
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
//# debugId=2136a067-5ac9-5aeb-8e56-1e60780f8904
//# sourceMappingURL=chunk-24MQE7BQ.js.map
