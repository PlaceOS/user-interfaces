// libs/common/src/lib/device-id.ts
var DEVICE_ID_KEY = "PLACEOS.DEVICE_ID";
var _device_id = "";
function newDeviceId() {
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0"));
  return `DEV-${hex.join("").toUpperCase()}`;
}
function deviceId() {
  if (_device_id)
    return _device_id;
  try {
    _device_id = localStorage.getItem(DEVICE_ID_KEY) || "";
  } catch {
  }
  if (!_device_id) {
    _device_id = newDeviceId();
    try {
      localStorage.setItem(DEVICE_ID_KEY, _device_id);
    } catch {
    }
  }
  return _device_id;
}

export {
  deviceId
};
//# debugId=fffc4ca5-8e5e-5f3e-8999-eeb700105c33
//# sourceMappingURL=chunk-GLALPF4J.js.map
