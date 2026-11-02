// node_modules/@litertjs/wasm-utils/dist/index.js
async function runScript(scriptUrl) {
  if (typeof importScripts === "function") {
    importScripts(scriptUrl.toString());
  } else {
    const script = document.createElement("script");
    script.src = scriptUrl.toString();
    script.crossOrigin = "anonymous";
    return new Promise((resolve, revoke) => {
      script.addEventListener("load", () => {
        resolve();
      }, false);
      script.addEventListener("error", (e) => {
        revoke(e);
      }, false);
      document.body.appendChild(script);
    });
  }
}
var createWasmLib = async (constructorFcn, wasmLoaderScript, assetLoaderScript, glCanvas, fileLocator) => {
  if (wasmLoaderScript) {
    await runScript(wasmLoaderScript);
  }
  if (!self.ModuleFactory) {
    throw new Error("ModuleFactory not set.");
  }
  if (assetLoaderScript) {
    await runScript(assetLoaderScript);
    if (!self.ModuleFactory) {
      throw new Error("ModuleFactory not set.");
    }
  }
  if (self.Module && fileLocator) {
    const moduleFileLocator = self.Module;
    moduleFileLocator.locateFile = fileLocator.locateFile;
    if (fileLocator.mainScriptUrlOrBlob) {
      moduleFileLocator.mainScriptUrlOrBlob = fileLocator.mainScriptUrlOrBlob;
    }
  }
  const module = await self.ModuleFactory(self.Module || fileLocator);
  self.ModuleFactory = self.Module = void 0;
  return new constructorFcn(module, glCanvas);
};

// node_modules/@litertjs/core/dist/index.js
var ElementType = {
  NONE: 0,
  FLOAT32: 1,
  INT32: 2,
  UINT8: 3,
  INT64: 4,
  STRING: 5,
  BOOL: 6,
  INT16: 7,
  COMPLEX64: 8,
  INT8: 9,
  FLOAT16: 10,
  FLOAT64: 11,
  COMPLEX128: 12,
  UINT64: 13,
  RESOURCE: 14,
  VARIANT: 15,
  UINT32: 16,
  UINT16: 17,
  INT4: 18,
  BFLOAT16: 19
};
var ElementTypeName = {
  [ElementType.NONE]: "NONE",
  [ElementType.FLOAT32]: "FLOAT32",
  [ElementType.INT32]: "INT32",
  [ElementType.UINT8]: "UINT8",
  [ElementType.INT64]: "INT64",
  [ElementType.STRING]: "STRING",
  [ElementType.BOOL]: "BOOL",
  [ElementType.INT16]: "INT16",
  [ElementType.COMPLEX64]: "COMPLEX64",
  [ElementType.INT8]: "INT8",
  [ElementType.FLOAT16]: "FLOAT16",
  [ElementType.FLOAT64]: "FLOAT64",
  [ElementType.COMPLEX128]: "COMPLEX128",
  [ElementType.UINT64]: "UINT64",
  [ElementType.RESOURCE]: "RESOURCE",
  [ElementType.VARIANT]: "VARIANT",
  [ElementType.UINT32]: "UINT32",
  [ElementType.UINT16]: "UINT16",
  [ElementType.INT4]: "INT4",
  [ElementType.BFLOAT16]: "BFLOAT16"
};
var TensorBufferType = {
  HOST_MEMORY: 1,
  WEB_GPU_BUFFER: 20,
  WEB_GPU_BUFFER_FP16: 21,
  WEB_GPU_BUFFER_PACKED: 26
};
var TensorBufferTypeName = {
  [TensorBufferType.HOST_MEMORY]: "HOST_MEMORY",
  [TensorBufferType.WEB_GPU_BUFFER]: "WEB_GPU_BUFFER",
  [TensorBufferType.WEB_GPU_BUFFER_FP16]: "WEB_GPU_BUFFER_FP16",
  [TensorBufferType.WEB_GPU_BUFFER_PACKED]: "WEB_GPU_BUFFER_PACKED"
};
var DATATYPES = Object.freeze([
  {
    dtype: "float32",
    typedArrayConstructor: Float32Array,
    elementType: ElementType.FLOAT32
  },
  {
    dtype: "int32",
    typedArrayConstructor: Int32Array,
    elementType: ElementType.INT32
  },
  {
    dtype: "uint8",
    typedArrayConstructor: Uint8Array,
    elementType: ElementType.UINT8
  }
]);
function getDataType(val) {
  for (const dataTypeMapping of DATATYPES) {
    if (dataTypeMapping.dtype === val || dataTypeMapping.typedArrayConstructor === val || val instanceof dataTypeMapping.typedArrayConstructor || dataTypeMapping.elementType === val) {
      return dataTypeMapping;
    }
  }
  if (typeof val === "string") {
    throw new Error(`DType ${val} is not supported.`);
  } else if (val instanceof Object) {
    throw new Error(`Typed array ${"name" in val ? val.name : val.constructor.name} is not supported.`);
  } else {
    throw new Error(
      `Element type ${ElementTypeName[val] ?? val} is not supported.`
    );
  }
}
var LiteRtNotLoadedError = class extends Error {
  constructor() {
    super(
      "LiteRT is not initialized yet. Please call loadLiteRt() and wait for its promise to resolve to load the LiteRT WASM module."
    );
  }
};
var globalLiteRt = void 0;
var globalLiteRtPromise = void 0;
function getGlobalLiteRt() {
  if (!globalLiteRt) {
    throw new LiteRtNotLoadedError();
  }
  return globalLiteRt;
}
function setGlobalLiteRt(liteRt) {
  globalLiteRt = liteRt;
}
function getGlobalLiteRtPromise() {
  return globalLiteRtPromise;
}
function hasGlobalLiteRtPromise() {
  return Boolean(globalLiteRtPromise);
}
function setGlobalLiteRtPromise(promise) {
  globalLiteRtPromise = promise;
}
var AcceleratorDefaultTensorBufferType = {
  "webgpu": TensorBufferType.WEB_GPU_BUFFER_PACKED,
  "wasm": TensorBufferType.HOST_MEMORY
};
var TensorBufferTypeToAccelerator = {
  [TensorBufferType.HOST_MEMORY]: "wasm",
  [TensorBufferType.WEB_GPU_BUFFER]: "webgpu",
  [TensorBufferType.WEB_GPU_BUFFER_FP16]: "webgpu",
  [TensorBufferType.WEB_GPU_BUFFER_PACKED]: "webgpu"
};
var DESIRED_WEBGPU_FEATURES = [
  "shader-f16",
  "subgroups"
];
var Environment = class _Environment {
  constructor(options) {
    this.options = options;
    this.liteRtEnvironment = getGlobalLiteRt().liteRtWasm.LiteRtEnvironment.create(
      options.webGpuDevice
    );
  }
  liteRtEnvironment;
  static async create(options = {}) {
    let webGpuDevice = null;
    if ("webGpuDevice" in options) {
      if (options.webGpuDevice) {
        webGpuDevice = options.webGpuDevice;
      }
    } else {
      try {
        webGpuDevice = await createDefaultWebGpuDevice();
      } catch (e) {
        console.warn("Failed to create default WebGPU device:", e);
      }
    }
    return new _Environment({
      ...options,
      webGpuDevice
    });
  }
  get webGpuDevice() {
    return this.options.webGpuDevice;
  }
  delete() {
    this.liteRtEnvironment.delete();
  }
};
async function createDefaultWebGpuDevice() {
  const adapterDescriptor = {
    powerPreference: "high-performance"
  };
  const adapter = await navigator.gpu.requestAdapter(adapterDescriptor);
  if (!adapter) {
    throw new Error("No GPU adapter found.");
  }
  const requiredLimits = {
    maxBufferSize: adapter.limits.maxBufferSize,
    maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize,
    maxStorageBuffersPerShaderStage: adapter.limits.maxStorageBuffersPerShaderStage,
    maxTextureDimension2D: adapter.limits.maxTextureDimension2D
  };
  const requiredFeatures = [];
  for (const feature of DESIRED_WEBGPU_FEATURES) {
    if (adapter.features.has(feature)) {
      requiredFeatures.push(feature);
    }
  }
  return await adapter.requestDevice({
    requiredFeatures,
    requiredLimits
  });
}
function emscriptenVectorToArray(vector) {
  const array = new Array(vector.size());
  for (let i = 0; i < vector.size(); ++i) {
    array[i] = vector.get(i);
  }
  vector.delete();
  return array;
}
function fillEmscriptenVector(data, vector) {
  for (const item of data) {
    vector.push_back(item);
  }
}
function parseData(remainingArgs) {
  const data = remainingArgs.shift();
  const liteRtWasm = getGlobalLiteRt().liteRtWasm;
  if (data instanceof liteRtWasm.LiteRtTensorBuffer) {
    return { liteRtTensorBuffer: data };
  } else if (ArrayBuffer.isView(data)) {
    return { typedArray: data };
  } else if (data instanceof GPUBuffer) {
    return { gpuBuffer: data };
  } else {
    throw new Error(
      `Unknown type (${(data == null ? void 0 : data.constructor.name) ?? data}) provided to create a Tensor`
    );
  }
}
function parseShape(remainingArgs) {
  if (Array.isArray(remainingArgs[0]) || remainingArgs[0] instanceof Int32Array) {
    return { shape: remainingArgs.shift() };
  } else {
    return {};
  }
}
function shiftUntilDefined(remainingArgs) {
  while (remainingArgs.length > 0 && remainingArgs[0] === void 0) {
    remainingArgs.shift();
  }
}
function parseDataType(remainingArgs) {
  shiftUntilDefined(remainingArgs);
  if (typeof remainingArgs[0] === "string") {
    const dtype = remainingArgs.shift();
    return { dataType: getDataType(dtype).dtype };
  } else {
    return {};
  }
}
function parseEnvironment(remainingArgs) {
  shiftUntilDefined(remainingArgs);
  if (remainingArgs[0] instanceof Environment) {
    return { environment: remainingArgs.shift() };
  } else {
    return {};
  }
}
function parseOnDelete(remainingArgs) {
  shiftUntilDefined(remainingArgs);
  if (remainingArgs[0] instanceof Function) {
    return { onDelete: remainingArgs.shift() };
  } else {
    return {};
  }
}
function parseArgs(args) {
  return {
    ...parseData(args),
    ...parseShape(args),
    ...parseDataType(args),
    ...parseEnvironment(args),
    ...parseOnDelete(args)
  };
}
var Tensor = class _Tensor {
  liteRtTensorBuffer;
  type;
  environment;
  deletedInternal = false;
  onDelete;
  static copyFunctions = /* @__PURE__ */ new Map();
  constructor(a, b, c, d, e) {
    const {
      typedArray,
      gpuBuffer,
      liteRtTensorBuffer,
      shape,
      dataType,
      environment,
      onDelete
    } = parseArgs([a, b, c, d, e]);
    this.onDelete = onDelete;
    this.environment = environment ?? getGlobalLiteRt().getDefaultEnvironment();
    if (liteRtTensorBuffer) {
      if (shape) {
        throw new Error(
          "A LiteRtTensorBuffer cannot be provided with a shape."
        );
      }
      if (dataType) {
        throw new Error(
          "A LiteRtTensorBuffer cannot be provided with a data type."
        );
      }
      this.liteRtTensorBuffer = liteRtTensorBuffer;
    } else if (gpuBuffer) {
      if (!shape) {
        throw new Error("A GPUBuffer must be provided with a shape.");
      }
      if (!dataType) {
        throw new Error("A GPUBuffer must be provided with a data type.");
      }
      const [liteRtTensorBuffer2, webGpuBufferPtr] = webGpuBufferToLiteRtTensorBuffer(
        gpuBuffer,
        shape,
        dataType,
        this.environment
      );
      this.liteRtTensorBuffer = liteRtTensorBuffer2;
      const onDelete2 = this.onDelete;
      this.onDelete = () => {
        const liteRtWasm = getGlobalLiteRt().liteRtWasm;
        liteRtWasm.wgpuBufferRelease(webGpuBufferPtr);
        onDelete2 == null ? void 0 : onDelete2();
      };
    } else if (typedArray) {
      this.liteRtTensorBuffer = typedArrayToLiteRtTensorBuffer(
        typedArray,
        shape,
        environment
      );
    } else {
      throw new Error("No data provided to create a Tensor.");
    }
    this.type = liteRtTensorBufferToTensorType(this.liteRtTensorBuffer);
  }
  static fromTypedArray(data, shape, environment) {
    return new _Tensor(data, shape, environment);
  }
  ensureNotDeleted() {
    if (this.deleted) {
      throw new Error("Tensor is deleted and cannot be used.");
    }
  }
  async data() {
    this.ensureNotDeleted();
    if (this.liteRtTensorBuffer.bufferType().value === TensorBufferType.HOST_MEMORY) {
      return this.toTypedArray();
    }
    const copy = await this.copyTo("wasm");
    const data = await copy.data();
    copy.delete();
    return data;
  }
  toTypedArray() {
    this.ensureNotDeleted();
    const liteRtWasm = getGlobalLiteRt().liteRtWasm;
    if (this.liteRtTensorBuffer.isWebGpuMemory()) {
      throw new Error(
        "Cannot convert a Tensor with WebGPU memory to a TypedArray."
      );
    }
    if (this.liteRtTensorBuffer.bufferType().value !== liteRtWasm.LiteRtTensorBufferType.HOST_MEMORY.value) {
      throw new Error(
        "Cannot convert a Tensor with non-host memory to a TypedArray."
      );
    }
    if (this.liteRtTensorBuffer.size() !== this.liteRtTensorBuffer.packedSize() || this.liteRtTensorBuffer.offset() !== 0) {
      throw new Error("Tensors with strides or padding are not yet supported.");
    }
    const rankedTensorType = this.liteRtTensorBuffer.tensorType();
    const elementType = rankedTensorType.elementType();
    const byteWidth = liteRtWasm.liteRtGetByteWidth(elementType);
    rankedTensorType.delete();
    const typedArrayConstructor = getDataType(
      elementType.value
    ).typedArrayConstructor;
    if (typedArrayConstructor.BYTES_PER_ELEMENT !== byteWidth) {
      throw new Error(
        `Byte width ${byteWidth} of the tensor's element type ${ElementTypeName[elementType.value]} does not match the expected byte width ${typedArrayConstructor.BYTES_PER_ELEMENT} of the ${typedArrayConstructor.name}.`
      );
    }
    const dataPtr = this.liteRtTensorBuffer.lock(
      getGlobalLiteRt().liteRtWasm.LiteRtTensorBufferLockMode.READ
    );
    try {
      const uint8Array = liteRtWasm.HEAPU8.slice(
        dataPtr,
        dataPtr + this.liteRtTensorBuffer.packedSize()
      );
      const typedArray = new typedArrayConstructor(
        uint8Array.buffer,
        uint8Array.byteOffset,
        uint8Array.byteLength / byteWidth
      );
      return typedArray;
    } finally {
      this.liteRtTensorBuffer.unlock();
    }
  }
  getBufferType() {
    this.ensureNotDeleted();
    return this.liteRtTensorBuffer.bufferType().value;
  }
  /**
   * Returns the underlying GPUBuffer of the Tensor.
   *
   * Note that the lifetime of the returned GPUBuffer is dependant upon how the
   * Tensor was created. If the Tensor was constructed from a GPUBuffer, then
   * the GPUBuffer will NOT be released when the Tensor is deleted. If the
   * Tensor was copied/moved to GPU from host memory, then the GPU buffer will
   * be released when the Tensor is deleted.
   *
   * The GPU buffer may be larger than the actual data in the tensor.
   *
   * @return The GPUBuffer containing the Tensor's data.
   */
  toGpuBuffer() {
    this.ensureNotDeleted();
    const liteRtWasm = getGlobalLiteRt().liteRtWasm;
    if (!this.liteRtTensorBuffer.isWebGpuMemory()) {
      throw new Error(
        "Cannot convert a Tensor with non-WebGPU memory to a GPUBuffer."
      );
    }
    const bufferTypeValue = this.liteRtTensorBuffer.bufferType().value;
    if (bufferTypeValue !== liteRtWasm.LiteRtTensorBufferType.WEB_GPU_BUFFER.value && bufferTypeValue !== liteRtWasm.LiteRtTensorBufferType.WEB_GPU_BUFFER_FP16.value && bufferTypeValue !== liteRtWasm.LiteRtTensorBufferType.WEB_GPU_BUFFER_PACKED.value) {
      throw new Error(
        "Cannot convert a Tensor with host memory to a GPUBuffer."
      );
    }
    if (this.liteRtTensorBuffer.size() !== this.liteRtTensorBuffer.packedSize() || this.liteRtTensorBuffer.offset() !== 0) {
      throw new Error("Tensors with strides or padding are not yet supported.");
    }
    const gpuBufferId = this.liteRtTensorBuffer.getWebGpuBuffer();
    return liteRtWasm.WebGPU.getJsObject(gpuBufferId);
  }
  getCopyFunctionSet(destination) {
    this.ensureNotDeleted();
    const sourceBufferType = this.getBufferType();
    const copyFunctions = _Tensor.copyFunctions.get(sourceBufferType);
    if (!copyFunctions) {
      throw new Error(
        `TensorBufferType ${TensorBufferTypeName[sourceBufferType] ?? sourceBufferType} does not support copying or moving`
      );
    }
    const destinationBufferType = typeof destination === "string" ? AcceleratorDefaultTensorBufferType[destination] : destination;
    if (destinationBufferType == null) {
      throw new Error(
        `Unknown destination '${destination}' for copying or moving.`
      );
    }
    const copyFunctionSet = copyFunctions.get(destinationBufferType);
    if (!copyFunctionSet) {
      const supportedDestinations = [...copyFunctions].map(
        ([key]) => TensorBufferTypeName[key] ?? key
      );
      throw new Error(
        `TensorBufferType ${TensorBufferTypeName[sourceBufferType]} does not support copying or moving to ${TensorBufferTypeName[destinationBufferType]}. It supports the following TensorBufferTypes: [${supportedDestinations.join(
          ", "
        )}].`
      );
    }
    return [copyFunctionSet, destinationBufferType];
  }
  /**
   * Copies the tensor to the given accelerator.
   *
   * @param destination The accelerator or buffer type to copy to.
   * @return A promise that resolves to the copied tensor.
   */
  async copyTo(destination, options) {
    const [copyFunctionSet, destinationBufferType] = this.getCopyFunctionSet(destination);
    if (!copyFunctionSet.copyTo) {
      throw new Error(
        `Copying to ${TensorBufferTypeName[destinationBufferType]} is not supported by this tensor.`
      );
    }
    return copyFunctionSet.copyTo(this, options);
  }
  /**
   * Moves the tensor to the given accelerator.
   *
   * @param destination The accelerator or buffer type to move to.
   * @return A promise that resolves to the moved tensor.
   */
  async moveTo(destination, options) {
    const [copyFunctionSet, destinationBufferType] = this.getCopyFunctionSet(destination);
    if (!copyFunctionSet.moveTo) {
      throw new Error(
        `Moving to ${TensorBufferTypeName[destinationBufferType]} is not supported by this tensor.`
      );
    }
    return copyFunctionSet.moveTo(this, options);
  }
  get bufferType() {
    return this.liteRtTensorBuffer.bufferType().value;
  }
  get accelerator() {
    const accelerator = TensorBufferTypeToAccelerator[this.bufferType];
    if (accelerator === void 0) {
      throw new Error(
        `TensorBufferType ${TensorBufferTypeName[this.bufferType]} has an unknown accelerator type.`
      );
    }
    return accelerator;
  }
  get deleted() {
    return this.deletedInternal;
  }
  delete() {
    var _a;
    if (this.deletedInternal) {
      return;
    }
    this.deletedInternal = true;
    this.liteRtTensorBuffer.delete();
    (_a = this.onDelete) == null ? void 0 : _a.call(this);
  }
};
function liteRtTensorBufferToTensorType(liteRtTensorBuffer) {
  const liteRtRankedTensorType = liteRtTensorBuffer.tensorType();
  const elementType = liteRtRankedTensorType.elementType();
  const liteRtLayout = liteRtRankedTensorType.layout();
  const dimensions = liteRtLayout.dimensions();
  liteRtLayout.delete();
  liteRtRankedTensorType.delete();
  return {
    dtype: getDataType(elementType.value).dtype,
    layout: { dimensions: emscriptenVectorToArray(dimensions) }
  };
}
function webGpuBufferToLiteRtTensorBuffer(gpuBuffer, shape, dtype, environment) {
  const globalLiteRt2 = getGlobalLiteRt();
  const liteRtWasm = globalLiteRt2.liteRtWasm;
  const dimensionsVector = new liteRtWasm.VectorInt32();
  fillEmscriptenVector(shape, dimensionsVector);
  const layout = liteRtWasm.LiteRtLayout.create(dimensionsVector);
  dimensionsVector.delete();
  const rankedTensorType = liteRtWasm.LiteRtRankedTensorType.create(
    { value: getDataType(dtype).elementType },
    layout
  );
  layout.delete();
  const importedGpuBufferPtr = liteRtWasm.WebGPU.importJsBuffer(gpuBuffer);
  const liteRtTensorBuffer = liteRtWasm.LiteRtTensorBuffer.createFromWebGpuBuffer(
    environment.liteRtEnvironment,
    rankedTensorType,
    liteRtWasm.LiteRtTensorBufferType.WEB_GPU_BUFFER_PACKED,
    importedGpuBufferPtr,
    gpuBuffer.size
  );
  rankedTensorType.delete();
  return [liteRtTensorBuffer, importedGpuBufferPtr];
}
function typedArrayToLiteRtTensorBuffer(data, shape, environment) {
  const globalLiteRt2 = getGlobalLiteRt();
  const liteRtWasm = globalLiteRt2.liteRtWasm;
  environment = environment ?? globalLiteRt2.getDefaultEnvironment();
  const elementType = getDataType(data).elementType;
  const dimensionsVector = new liteRtWasm.VectorInt32();
  fillEmscriptenVector(shape ?? [data.length], dimensionsVector);
  const layout = liteRtWasm.LiteRtLayout.create(dimensionsVector);
  dimensionsVector.delete();
  const expectedNumElements = layout.numElements();
  if (data.length !== expectedNumElements) {
    layout.delete();
    throw new Error(
      `Number of elements ${data.length} of the provided TypedArray does not match the expected number of elements ${expectedNumElements}.`
    );
  }
  const rankedTensorType = liteRtWasm.LiteRtRankedTensorType.create(
    { value: elementType },
    layout
  );
  layout.delete();
  const arrayType = data.constructor;
  const bufferSize = arrayType.BYTES_PER_ELEMENT * data.length;
  const expectedBufferSize = rankedTensorType.bytes();
  if (bufferSize !== expectedBufferSize) {
    rankedTensorType.delete();
    throw new Error(
      `Byte length ${bufferSize} of the provided TypedArray does not match the expected buffer size ${expectedBufferSize}.`
    );
  }
  const liteRtTensorBuffer = liteRtWasm.LiteRtTensorBuffer.createManaged(
    environment.liteRtEnvironment,
    liteRtWasm.LiteRtTensorBufferType.HOST_MEMORY,
    rankedTensorType,
    bufferSize
  );
  rankedTensorType.delete();
  const dataPtr = liteRtTensorBuffer.lock(
    liteRtWasm.LiteRtTensorBufferLockMode.WRITE
  );
  try {
    const uint8Data = new Uint8Array(
      data.buffer,
      data.byteOffset,
      data.byteLength
    );
    liteRtWasm.HEAPU8.set(uint8Data, dataPtr);
  } finally {
    liteRtTensorBuffer.unlock();
  }
  return liteRtTensorBuffer;
}
var CompiledModelSignatureRunner = class {
  constructor(signatureIndex, liteRtModel, liteRtCompiledModel, options) {
    this.signatureIndex = signatureIndex;
    this.liteRtModel = liteRtModel;
    this.liteRtCompiledModel = liteRtCompiledModel;
    this.options = options;
    this.liteRtSimpleSignature = liteRtModel.getSignature(signatureIndex);
    const inputNames = emscriptenVectorToArray(this.liteRtSimpleSignature.inputNames());
    const inputDetails = [];
    for (let i = 0; i < inputNames.length; i++) {
      const name = inputNames[i];
      const tensorType = liteRtModel.getInputTensorType(signatureIndex, i);
      const requirements = liteRtCompiledModel.getInputBufferRequirements(signatureIndex, i);
      inputDetails.push(makeTensorDetails(name, i, tensorType, requirements));
    }
    this.inputDetails = Object.freeze(inputDetails);
    const outputNames = emscriptenVectorToArray(this.liteRtSimpleSignature.outputNames());
    const outputDetails = [];
    for (let i = 0; i < outputNames.length; i++) {
      const name = outputNames[i];
      const tensorType = liteRtModel.getOutputTensorType(signatureIndex, i);
      const requirements = liteRtCompiledModel.getOutputBufferRequirements(signatureIndex, i);
      outputDetails.push(makeTensorDetails(name, i, tensorType, requirements));
    }
    this.outputDetails = Object.freeze(outputDetails);
  }
  inputDetails;
  outputDetails;
  liteRtSimpleSignature;
  deletedInternal = false;
  /**
   * The string key corresponding to this signature in the model.
   */
  get key() {
    this.ensureNotDeleted();
    return this.liteRtSimpleSignature.key();
  }
  /**
   * Get details about each input tensor.
   */
  getInputDetails() {
    this.ensureNotDeleted();
    return this.inputDetails;
  }
  /**
   * Get details about each output tensor.
   */
  getOutputDetails() {
    this.ensureNotDeleted();
    return this.outputDetails;
  }
  async run(input) {
    this.ensureNotDeleted();
    const inputArray = this.inputsToArray(input);
    const { inputsOnAccelerator, cleanup } = await this.ensureInputsOnAccelerator(inputArray);
    let outputArray;
    try {
      outputArray = await this.runWithArray(inputsOnAccelerator);
    } finally {
      cleanup();
    }
    if (Array.isArray(input) || input instanceof Tensor) {
      return outputArray;
    } else {
      return this.outputsToRecord(outputArray);
    }
  }
  inputsToArray(input) {
    if (Array.isArray(input)) {
      if (input.length !== this.inputDetails.length) {
        throw new Error(
          `run() called with ${input.length} inputs, but signature expects ${this.inputDetails.length} inputs`
        );
      }
      return input;
    }
    if (input instanceof Tensor) {
      if (this.inputDetails.length !== 1) {
        throw new Error(
          `run() called with a single tensor, but signature expects ${this.inputDetails.length} inputs`
        );
      }
      return [input];
    }
    const inputArray = [];
    for (const inputDetails of this.inputDetails) {
      if (!(inputDetails.name in input)) {
        throw new Error(
          `run() called with input record that is missing input ${inputDetails.name} with index ${inputDetails.index}`
        );
      }
      inputArray.push(input[inputDetails.name]);
    }
    return inputArray;
  }
  outputsToRecord(output) {
    const outputRecord = {};
    for (let i = 0; i < this.outputDetails.length; i++) {
      outputRecord[this.outputDetails[i].name] = output[i];
    }
    return outputRecord;
  }
  /**
   * Ensures that all input tensors are on the correct accelerator. Copies any
   * tensors that are not on the correct accelerator.
   *
   * @param inputs The input tensors to be passed to the signature. They must
   *     be in the same order and quantity as the input details.
   * @return A promise that resolves to a list of input tensors that are on the
   *     correct accelerator, and a cleanup function that deletes any tensors
   *     that were copied.
   */
  async ensureInputsOnAccelerator(inputs) {
    const toDelete = [];
    const inputsOnAccelerator = [];
    const inputDetails = this.getInputDetails();
    if (inputs.length !== inputDetails.length) {
      throw new Error(`ensureInputsOnAccelerator() called with ${inputs.length} inputs, but signature expects ${inputDetails.length} inputs`);
    }
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const bufferType = input.getBufferType();
      const supportedBufferTypes = inputDetails[i].supportedBufferTypes;
      if (supportedBufferTypes.size === 0) {
        throw new Error(`Tensor ${inputDetails[i].name} with index ${inputDetails[i].index} has no supported buffer types.`);
      }
      if (supportedBufferTypes.has(bufferType)) {
        inputsOnAccelerator.push(input);
      } else {
        const newBufferType = supportedBufferTypes.values().next().value;
        const copy = await input.copyTo(newBufferType);
        toDelete.push(copy);
        inputsOnAccelerator.push(copy);
      }
    }
    return {
      inputsOnAccelerator,
      cleanup: () => {
        for (const tensor of toDelete) {
          tensor.delete();
        }
      }
    };
  }
  async runWithArray(input) {
    for (let i = 0; i < input.length; i++) {
      const inputTensor = input[i];
      const expectedRankedTensorType = this.liteRtModel.getInputTensorType(this.signatureIndex, i);
      const inputRequirements = this.liteRtCompiledModel.getInputBufferRequirements(
        this.signatureIndex,
        i
      );
      getGlobalLiteRt().liteRtWasm.checkTensorBufferCompatible(
        inputTensor.liteRtTensorBuffer,
        expectedRankedTensorType,
        inputRequirements
      );
      expectedRankedTensorType.delete();
      inputRequirements.delete();
    }
    const outputTensorBuffers = await this.liteRtCompiledModel.run(
      this.signatureIndex,
      input.map((tensor) => tensor.liteRtTensorBuffer)
    );
    return outputTensorBuffers.map(
      (tensorBuffer) => new Tensor(tensorBuffer, this.options.environment)
    );
  }
  get deleted() {
    return this.deletedInternal;
  }
  ensureNotDeleted() {
    if (this.deleted) {
      throw new Error(
        "CompiledModelSignatureRunner is deleted and cannot be used."
      );
    }
  }
  delete() {
    if (this.deletedInternal) {
      return;
    }
    this.deletedInternal = true;
    this.liteRtSimpleSignature.delete();
  }
};
function makeTensorDetails(name, index, tensorType, requirements) {
  const layout = tensorType.layout();
  const dimensions = emscriptenVectorToArray(layout.dimensions());
  layout.delete();
  const supportedBufferTypes = new Set(emscriptenVectorToArray(requirements.supportedTypes()).map(({ value }) => value));
  const details = {
    name,
    index,
    dtype: getDataType(tensorType.elementType().value).dtype,
    shape: new Int32Array(dimensions),
    supportedBufferTypes
  };
  tensorType.delete();
  requirements.delete();
  return details;
}
var CompiledModel = class {
  constructor(model, liteRtCompiledModel, options, onDelete) {
    this.model = model;
    this.liteRtCompiledModel = liteRtCompiledModel;
    this.options = options;
    this.onDelete = onDelete;
    const numSignatures = model.liteRtModel.getNumSignatures();
    const compiledModelSignatureRunners = {};
    for (let i = 0; i < numSignatures; i++) {
      const compiledModelSignatureRunner = new CompiledModelSignatureRunner(
        i,
        model.liteRtModel,
        liteRtCompiledModel,
        options
      );
      compiledModelSignatureRunners[compiledModelSignatureRunner.key] = compiledModelSignatureRunner;
    }
    this.compiledModelSignatureRunners = Object.freeze(compiledModelSignatureRunners);
    this.defaultSignature = Object.values(this.signatures)[0];
    this.key = this.defaultSignature.key;
  }
  defaultSignature;
  compiledModelSignatureRunners;
  key;
  deletedInternal = false;
  get signatures() {
    this.ensureNotDeleted();
    return this.compiledModelSignatureRunners;
  }
  getInputDetails() {
    this.ensureNotDeleted();
    return this.defaultSignature.getInputDetails();
  }
  getOutputDetails() {
    this.ensureNotDeleted();
    return this.defaultSignature.getOutputDetails();
  }
  async run(inputOrSignatureName, maybeInput) {
    this.ensureNotDeleted();
    const [signature, input] = this.parseRunInputs(inputOrSignatureName, maybeInput);
    return await signature.run(input);
  }
  parseRunInputs(inputOrSignatureName, maybeInput) {
    let signature;
    let input;
    if (typeof inputOrSignatureName === "string") {
      signature = this.signatures[inputOrSignatureName];
      if (!signature) {
        throw new Error(
          `No signature named ${inputOrSignatureName} found in model.`
        );
      }
      if (!maybeInput) {
        throw new Error(
          `No input provided for signature ${inputOrSignatureName}`
        );
      }
      input = maybeInput;
    } else {
      signature = this.defaultSignature;
      input = inputOrSignatureName;
    }
    return [signature, input];
  }
  get deleted() {
    return this.deletedInternal;
  }
  ensureNotDeleted() {
    if (this.deleted) {
      throw new Error("CompiledModel is deleted and cannot be used.");
    }
  }
  get isFullyAccelerated() {
    this.ensureNotDeleted();
    return this.liteRtCompiledModel.isFullyAccelerated();
  }
  delete() {
    if (this.deletedInternal) {
      return;
    }
    this.deletedInternal = true;
    this.liteRtCompiledModel.delete();
    this.model.delete();
    for (const signatureRunner of Object.values(
      this.compiledModelSignatureRunners
    )) {
      signatureRunner.delete();
    }
    this.onDelete();
  }
};
async function urlToUint8Array(url) {
  const response = await fetch(url);
  return new Uint8Array(await response.arrayBuffer());
}
async function readableStreamDefaultReaderToUint8Array(reader) {
  let byteOffset = 0;
  let array = new Uint8Array(
    1024
    /* arbitrary starting size */
  );
  const MAX_ARRAY_SIZE = 2e9;
  while (true) {
    const { done, value } = await reader.read();
    if (value) {
      if (array.byteLength < byteOffset + value.byteLength) {
        if (byteOffset + value.byteLength > MAX_ARRAY_SIZE) {
          throw new Error(`Model is too large (> ${MAX_ARRAY_SIZE} bytes).`);
        }
        const newArray = new Uint8Array(Math.min(
          MAX_ARRAY_SIZE,
          Math.max(array.byteLength, value.byteLength) * 2
        ));
        newArray.set(array);
        array = newArray;
      }
      array.set(value, byteOffset);
      byteOffset += value.byteLength;
    }
    if (done) {
      break;
    }
  }
  return array.slice(0, byteOffset);
}
var Model = class {
  constructor(liteRtModel, onDelete) {
    this.liteRtModel = liteRtModel;
    this.onDelete = onDelete;
  }
  delete() {
    this.liteRtModel.delete();
    this.onDelete();
  }
};
function fillCompileOptions(compileOptions = {}, environment, defaultThreadCount) {
  return {
    environment,
    accelerator: compileOptions.accelerator ?? (environment.webGpuDevice ? "webgpu" : "wasm"),
    cpuOptions: compileOptions.cpuOptions ?? { numThreads: defaultThreadCount },
    gpuOptions: compileOptions.gpuOptions ?? {},
    webNNOptions: compileOptions.webNNOptions ?? {}
  };
}
var WASM_RELAXED_SIMD_CHECK = new Uint8Array([
  0,
  97,
  115,
  109,
  1,
  0,
  0,
  0,
  1,
  5,
  1,
  96,
  0,
  1,
  123,
  3,
  2,
  1,
  0,
  10,
  15,
  1,
  13,
  0,
  65,
  1,
  253,
  15,
  65,
  2,
  253,
  15,
  253,
  128,
  2,
  11
]);
var WASM_THREADS_CHECK = new Uint8Array([
  0,
  97,
  115,
  109,
  1,
  0,
  0,
  0,
  1,
  4,
  1,
  96,
  0,
  0,
  3,
  2,
  1,
  0,
  5,
  4,
  1,
  3,
  1,
  1,
  10,
  11,
  1,
  9,
  0,
  65,
  0,
  254,
  16,
  2,
  0,
  26,
  11
]);
var WASM_FEATURE_VALUES = {
  "relaxedSimd": void 0,
  "threads": void 0,
  "jspi": void 0,
  "webnn": void 0
};
function isJspiSupported() {
  return "Suspending" in WebAssembly;
}
function isWebNnSupported() {
  return typeof navigator !== "undefined" && !!navigator.ml;
}
async function tryWasm(wasm) {
  try {
    await WebAssembly.instantiate(wasm);
    return { supported: true };
  } catch (e) {
    return { supported: false, error: e };
  }
}
var WASM_FEATURE_CHECKS = {
  "relaxedSimd": () => {
    if (WASM_FEATURE_VALUES.relaxedSimd === void 0) {
      WASM_FEATURE_VALUES.relaxedSimd = tryWasm(WASM_RELAXED_SIMD_CHECK);
    }
    return WASM_FEATURE_VALUES.relaxedSimd;
  },
  "threads": () => {
    if (WASM_FEATURE_VALUES.threads === void 0) {
      try {
        if (typeof MessageChannel !== "undefined") {
          new MessageChannel().port1.postMessage(new SharedArrayBuffer(1));
        }
        WASM_FEATURE_VALUES.threads = tryWasm(WASM_THREADS_CHECK);
      } catch (e) {
        WASM_FEATURE_VALUES.threads = Promise.resolve({ supported: false, error: e });
      }
    }
    return WASM_FEATURE_VALUES.threads;
  },
  "jspi": () => {
    if (WASM_FEATURE_VALUES.jspi === void 0) {
      const supported = isJspiSupported();
      WASM_FEATURE_VALUES.jspi = Promise.resolve({
        supported,
        error: supported ? void 0 : new Error("JSPI is not supported")
      });
    }
    return WASM_FEATURE_VALUES.jspi;
  },
  "webnn": () => {
    if (WASM_FEATURE_VALUES.webnn === void 0) {
      const supported = isWebNnSupported();
      WASM_FEATURE_VALUES.webnn = Promise.resolve({
        supported,
        error: supported ? void 0 : new Error("WebNN is not supported")
      });
    }
    return WASM_FEATURE_VALUES.webnn;
  }
};
async function supportsFeature(feature) {
  var _a;
  const check = (_a = WASM_FEATURE_CHECKS[feature]) == null ? void 0 : _a.call(WASM_FEATURE_CHECKS);
  if (!check) {
    throw new Error(`Unknown feature: ${feature}`);
  }
  return (await check).supported;
}
async function throwIfFeatureNotSupported(feature) {
  var _a;
  const check = (_a = WASM_FEATURE_CHECKS[feature]) == null ? void 0 : _a.call(WASM_FEATURE_CHECKS);
  if (!check) {
    throw new Error(`Unknown feature: ${feature}`);
  }
  const result = await check;
  if (!result.supported) {
    throw result.error;
  }
}
function isWebGPUSupported() {
  return !!(typeof globalThis !== "undefined" && globalThis.navigator && globalThis.navigator.gpu);
}
function loadAndCompile(model, compileOptions) {
  return getGlobalLiteRt().loadAndCompile(model, compileOptions);
}
var LiteRt = class {
  liteRtWasm;
  defaultEnvironment;
  objectsToDelete = /* @__PURE__ */ new Set();
  constructor(wasmModule) {
    this.liteRtWasm = wasmModule;
    this.liteRtWasm.setupLogging();
  }
  setDefaultEnvironment(environment) {
    this.defaultEnvironment = environment;
  }
  getDefaultEnvironment() {
    if (!this.defaultEnvironment) {
      throw new Error("Default environment is not set.");
    }
    return this.defaultEnvironment;
  }
  setWebGpuDevice(device) {
    const oldEnvironment = this.getDefaultEnvironment();
    this.setDefaultEnvironment(new Environment({
      ...oldEnvironment.options,
      webGpuDevice: device
    }));
  }
  getWebGpuDevice() {
    return this.getDefaultEnvironment().webGpuDevice;
  }
  /**
   * Registers an object to be deleted when this LiteRt instance is deleted.
   * Internal use only.
   */
  _registerObjectForDeletion(object) {
    this.objectsToDelete.add(object);
  }
  /**
   * Unregisters an object from being deleted when this LiteRt instance is
   * deleted. Internal use only.
   */
  _unregisterObjectForDeletion(object) {
    this.objectsToDelete.delete(object);
  }
  /**
   * Loads and compiles a LiteRt model.
   *
   * @param model The model data. This can be a string (the model url), a URL
   *     object, a Uint8Array (the model bytes), or a
   *     ReadableStreamDefaultReader (for streaming model loading).
   * @param compileOptions The options for compiling the model. This includes
   *     the accelerator to use ('webgpu' or 'wasm') and the WebGPU device
   *     (for direct GPU model inputs / outputs).
   * @returns A promise that resolves to the CompiledModel.
   */
  async loadAndCompile(model, compileOptions = {}) {
    let modelData;
    if (typeof model === "string" || model instanceof URL) {
      modelData = await urlToUint8Array(model);
    } else if (model instanceof Uint8Array) {
      modelData = model;
    } else if (model instanceof ReadableStreamDefaultReader) {
      modelData = await readableStreamDefaultReaderToUint8Array(model);
    } else {
      throw new Error("Unsupported model type.");
    }
    const environment = compileOptions.environment ?? this.getDefaultEnvironment();
    const accelerator = compileOptions.accelerator ?? (environment.webGpuDevice ? "webgpu" : "wasm");
    const isWebGpu = accelerator === "webgpu";
    if (isWebGpu && !environment.webGpuDevice) {
      throw new Error(
        "WebGPU was requested but no WebGPU device is set in the environment."
      );
    }
    const filledCompileOptions = fillCompileOptions(
      compileOptions,
      environment,
      this.liteRtWasm.getThreadCount()
    );
    const ptr = this.liteRtWasm._malloc(modelData.byteLength);
    this.liteRtWasm.HEAPU8.set(modelData, ptr);
    const wasmModel = this.liteRtWasm.loadModel(
      filledCompileOptions.environment.liteRtEnvironment,
      ptr,
      modelData.byteLength
    );
    const wasmCompiledModel = await this.liteRtWasm.compileModel(
      filledCompileOptions.environment.liteRtEnvironment,
      wasmModel,
      filledCompileOptions
    );
    const loadedModel = new Model(wasmModel, () => {
      this.liteRtWasm._free(ptr);
    });
    const compiledModel = new CompiledModel(
      loadedModel,
      wasmCompiledModel,
      filledCompileOptions,
      () => {
        this.objectsToDelete.delete(compiledModel);
      }
    );
    this.objectsToDelete.add(compiledModel);
    const isWebNn = accelerator === "webnn";
    const acceleratorRequested = isWebGpu || isWebNn;
    if (acceleratorRequested && !compiledModel.isFullyAccelerated) {
      if (isJspiSupported()) {
        console.warn(
          `%c[LiteRT]%c Model not fully compiled for ${accelerator}. Partially delegating to WASM execution.`,
          "background: #FFA000; color: black; font-weight: bold; padding: 2px 5px; border-radius: 3px;",
          "font-weight: bold;"
        );
      } else {
        console.warn(
          `%c[LiteRT]%c Model not fully compiled for ${accelerator} on non-JSPI browser. Falling back to WASM execution.`,
          "background: #D32F2F; color: white; font-weight: bold; padding: 2px 5px; border-radius: 3px;",
          "color: #D32F2F; font-weight: bold;"
        );
        compiledModel.delete();
        const fallbackCompileOptions = {
          ...compileOptions,
          accelerator: "wasm"
        };
        return this.loadAndCompile(modelData, fallbackCompileOptions);
      }
    }
    return compiledModel;
  }
  delete() {
    for (const object of this.objectsToDelete) {
      object.delete();
    }
  }
};
function pathToString(path) {
  return path;
}
function appendPathSegment(path, segment) {
  if (!path) return segment;
  if (!segment) return path;
  const pathWithSlash = path.endsWith("/") ? path : path + "/";
  const segmentWithoutSlash = segment.startsWith("/") ? segment.substring(1) : segment;
  return pathWithSlash + segmentWithoutSlash;
}
var WASM_JS_FILE_NAME = "litert_wasm_internal.js";
var WASM_JS_COMPAT_FILE_NAME = "litert_wasm_compat_internal.js";
var WASM_JS_THREADED_FILE_NAME = "litert_wasm_threaded_internal.js";
var WASM_JS_JSPI_FILE_NAME = "litert_wasm_jspi_internal.js";
async function load(path, options) {
  const pathString = pathToString(path);
  const isFullFilePath = pathString.endsWith(".wasm") || pathString.endsWith(".js");
  const relaxedSimd = await supportsFeature("relaxedSimd");
  if (options == null ? void 0 : options.threads) {
    if (options == null ? void 0 : options.jspi) {
      throw new Error(
        "The `threads` and `jspi` options are mutually exclusive."
      );
    }
    if (isFullFilePath) {
      console.warn(
        `The \`threads\` option was specified, but the wasm path ${pathString} is a full file path. Whether threads are available or not will depend on the loaded file. To allow LiteRT.js to load the threaded wasm file, use a directory path instead of a full file path.`
      );
    }
    if (!relaxedSimd) {
      throw new Error(
        "Threads are only supported with relaxed SIMD, and the current browser does not support relaxed SIMD."
      );
    }
    await throwIfFeatureNotSupported("threads");
  }
  if (options == null ? void 0 : options.jspi) {
    if (isFullFilePath) {
      console.warn(
        `The \`jspi\` option was specified, but the wasm path ${pathString} is a full file path. Whether JSPI is available or not will depend on the loaded file. To allow LiteRT.js to load the JSPI wasm file, use a directory path instead of a full file path.`
      );
    }
    await throwIfFeatureNotSupported("jspi");
  }
  let fileName = WASM_JS_COMPAT_FILE_NAME;
  if (relaxedSimd) {
    if (options == null ? void 0 : options.threads) {
      fileName = WASM_JS_THREADED_FILE_NAME;
    } else if (options == null ? void 0 : options.jspi) {
      fileName = WASM_JS_JSPI_FILE_NAME;
    } else {
      fileName = WASM_JS_FILE_NAME;
    }
  }
  let jsFilePath = path;
  if (pathString.endsWith(".wasm")) {
    throw new Error(
      "Please load the `.js` file corresponding to the `.wasm` file, or load the directory containing it."
    );
  } else if (!pathString.endsWith(".js")) {
    jsFilePath = appendPathSegment(path, fileName);
  }
  return createWasmLib(LiteRt, jsFilePath);
}
function loadLiteRt(path, options) {
  if (hasGlobalLiteRtPromise()) {
    throw new Error("LiteRT is already loading / loaded.");
  }
  setGlobalLiteRtPromise(load(path, options).then(async (liteRt) => {
    setGlobalLiteRt(liteRt);
    liteRt.setDefaultEnvironment(
      await Environment.create()
    );
    return liteRt;
  }).catch((error) => {
    setGlobalLiteRtPromise(void 0);
    throw error;
  }));
  return getGlobalLiteRtPromise();
}
var compilationLock = Promise.resolve();
async function copyHostMemoryToHostMemory(cpuTensor, options = {}) {
  const environment = options.environment ?? cpuTensor.environment;
  const liteRtWasm = getGlobalLiteRt().liteRtWasm;
  const srcTensorBuffer = cpuTensor.liteRtTensorBuffer;
  const bufferType = srcTensorBuffer.bufferType();
  if (bufferType.value !== TensorBufferType.HOST_MEMORY) {
    throw new Error(
      "Source tensor is not in host memory. Cannot copy to host memory."
    );
  }
  const srcTensorMemoryPtr = srcTensorBuffer.lock(
    liteRtWasm.LiteRtTensorBufferLockMode.READ
  );
  let destTensorBuffer;
  try {
    destTensorBuffer = liteRtWasm.LiteRtTensorBuffer.createManaged(
      environment.liteRtEnvironment,
      liteRtWasm.LiteRtTensorBufferType.HOST_MEMORY,
      srcTensorBuffer.tensorType(),
      srcTensorBuffer.size()
    );
    const destMemoryPointer = destTensorBuffer.lock(
      liteRtWasm.LiteRtTensorBufferLockMode.WRITE
    );
    try {
      const srcTensorMemoryView = new Uint8Array(
        liteRtWasm.HEAPU8.buffer,
        srcTensorMemoryPtr,
        srcTensorBuffer.size()
      );
      liteRtWasm.HEAPU8.set(srcTensorMemoryView, destMemoryPointer);
    } finally {
      destTensorBuffer.unlock();
    }
  } finally {
    srcTensorBuffer.unlock();
  }
  if (!destTensorBuffer) {
    throw new Error("Failed to create destination tensor buffer.");
  }
  return new Tensor(destTensorBuffer, environment);
}
async function cpuTensorToGpuTensor(cpuTensor, options = {}) {
  const environment = options.environment ?? cpuTensor.environment;
  const device = environment.webGpuDevice;
  if (!device) {
    throw new Error(
      "No WebGPU device is available. Did you forget to pass a destination environment that has a WebGPU device?"
    );
  }
  const liteRtWasm = getGlobalLiteRt().liteRtWasm;
  const byteLength = cpuTensor.liteRtTensorBuffer.size();
  const paddedByteLength = byteLength + 3 & ~3;
  const stagingBuffer = device.createBuffer({
    size: paddedByteLength,
    usage: GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC,
    mappedAtCreation: true
  });
  const mappedBuffer = await stagingBuffer.getMappedRange();
  const mappedArray = new Uint8Array(mappedBuffer);
  const cpuMemoryPtr = cpuTensor.liteRtTensorBuffer.lock(
    liteRtWasm.LiteRtTensorBufferLockMode.READ
  );
  try {
    const cpuMemoryView = new Uint8Array(
      liteRtWasm.HEAPU8.buffer,
      cpuMemoryPtr,
      cpuTensor.liteRtTensorBuffer.size()
    );
    mappedArray.set(cpuMemoryView);
  } finally {
    cpuTensor.liteRtTensorBuffer.unlock();
  }
  stagingBuffer.unmap();
  const buffer = device.createBuffer({
    size: paddedByteLength,
    usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE
  });
  const commandEncoder = device.createCommandEncoder();
  commandEncoder.copyBufferToBuffer(
    stagingBuffer,
    0,
    buffer,
    0,
    paddedByteLength
  );
  device.queue.submit([commandEncoder.finish()]);
  stagingBuffer.destroy();
  return new Tensor(
    buffer,
    cpuTensor.type.layout.dimensions,
    cpuTensor.type.dtype,
    environment,
    () => {
      buffer.destroy();
    }
  );
}
async function gpuTensorToCpuTensor(gpuTensor, options = {}) {
  const environment = options.environment ?? gpuTensor.environment;
  const device = gpuTensor.environment.webGpuDevice;
  if (!device) {
    throw new Error(
      "No WebGPU device is available. Does the source tensor have a WebGPU device?"
    );
  }
  const liteRtWasm = getGlobalLiteRt().liteRtWasm;
  const tensorBuffer = gpuTensor.liteRtTensorBuffer;
  const bufferType = tensorBuffer.bufferType();
  if (bufferType !== liteRtWasm.LiteRtTensorBufferType.WEB_GPU_BUFFER_PACKED) {
    throw new Error(`Cannot convert a tensor with a non-WebGPU buffer type ${bufferType} to a CPU tensor.`);
  }
  const gpuBuffer = liteRtWasm.WebGPU.getJsObject(
    tensorBuffer.getWebGpuBuffer()
  );
  const byteOffset = tensorBuffer.offset();
  const tensorType = tensorBuffer.tensorType();
  const layout = tensorType.layout();
  const numElements = layout.numElements();
  const arrayConstructor = getDataType(tensorType.elementType().value).typedArrayConstructor;
  layout.delete();
  tensorType.delete();
  let mappableBuffer = gpuBuffer;
  let cleanupBuffer = () => {
  };
  if (!(gpuBuffer.usage & GPUBufferUsage.MAP_READ)) {
    mappableBuffer = device.createBuffer({
      size: gpuBuffer.size,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
    });
    cleanupBuffer = () => {
      mappableBuffer.destroy();
    };
    const commandEncoder = device.createCommandEncoder();
    commandEncoder.copyBufferToBuffer(
      gpuBuffer,
      0,
      mappableBuffer,
      0,
      gpuBuffer.size
    );
    device.queue.submit([commandEncoder.finish()]);
  }
  await mappableBuffer.mapAsync(GPUMapMode.READ);
  const mappedBuffer = mappableBuffer.getMappedRange();
  const mappedArray = new arrayConstructor(mappedBuffer, byteOffset, numElements);
  const cpuTensor = new Tensor(mappedArray, gpuTensor.type.layout.dimensions, environment);
  mappableBuffer.unmap();
  cleanupBuffer();
  return cpuTensor;
}
function makeMoveTo(copyTo) {
  return async (tensor, options) => {
    const result = await copyTo(tensor, options);
    tensor.delete();
    return result;
  };
}
function registerCopyFunctions() {
  Tensor.copyFunctions.set(TensorBufferType.HOST_MEMORY, /* @__PURE__ */ new Map([
    [
      TensorBufferType.HOST_MEMORY,
      {
        copyTo: copyHostMemoryToHostMemory,
        // There might be a more efficient way to move
        // from CPU to CPU.
        moveTo: makeMoveTo(copyHostMemoryToHostMemory)
      }
    ],
    [
      TensorBufferType.WEB_GPU_BUFFER_PACKED,
      {
        copyTo: cpuTensorToGpuTensor,
        moveTo: makeMoveTo(cpuTensorToGpuTensor)
      }
    ]
  ]));
  Tensor.copyFunctions.set(TensorBufferType.WEB_GPU_BUFFER_PACKED, /* @__PURE__ */ new Map([
    [
      TensorBufferType.HOST_MEMORY,
      {
        copyTo: gpuTensorToCpuTensor,
        moveTo: makeMoveTo(gpuTensorToCpuTensor)
      }
    ]
  ]));
}
registerCopyFunctions();

// apps/control/src/app/ui/speech/litert.ts
var DEFAULT_FILE_URLS = {
  whistle: "https://huggingface.co/Cactus-Compute/whistle/resolve/ca5287601bef25af26dcf2e1b2bdc0843a7c19e5/whistle.cact",
  ...matchaUrls(
    "https://huggingface.co/litert-community/Matcha-TTS/resolve/6dd0418da3204f5704d7afb66722d795e84fcbe5/"
  )
};
function matchaUrls(base) {
  return {
    matcha_text_encoder: `${base}matcha_textenc_fp16.tflite`,
    matcha_decoder: `${base}matcha_decoder_fp16.tflite`,
    matcha_vocoder: `${base}matcha_vocoder_fp16.tflite`,
    matcha_g2p: `${base}dp_g2p_matcha_fp16.tflite`,
    matcha_embeddings: `${base}emb.bin`,
    matcha_dictionary: `${base}g2p_dict.txt.gz`,
    matcha_config: `${base}config.json`,
    matcha_g2p_config: `${base}g2p_meta.json`
  };
}
var CACHE_NAME = "control-voice-models-v1";
var ModelFiles = class {
  constructor(_mirror_url = "") {
    this._mirror_url = _mirror_url;
  }
  url(file) {
    const url = DEFAULT_FILE_URLS[file];
    if (!this._mirror_url) return url;
    const name = url.slice(url.lastIndexOf("/") + 1);
    return new URL(name, this._mirror_url.replace(/\/?$/, "/")).href;
  }
  async bytes(file) {
    const url = this.url(file);
    const cache = await openCache();
    const hit = await (cache == null ? void 0 : cache.match(url));
    if (hit) return new Uint8Array(await hit.arrayBuffer());
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} when loading ${url}`);
    }
    const bytes = new Uint8Array(await response.arrayBuffer());
    await (cache == null ? void 0 : cache.put(url, new Response(bytes.slice())).catch(() => {
    }));
    return bytes;
  }
  async json(file) {
    return JSON.parse(new TextDecoder().decode(await this.bytes(file)));
  }
  /**
   * Deletes cached files that the app no longer uses, such as files from an
   * older pinned commit or another mirror. Call after the models load.
   */
  async prune() {
    const cache = await openCache();
    if (!cache) return;
    const files = Object.keys(DEFAULT_FILE_URLS);
    const current = new Set(files.map((file) => this.url(file)));
    for (const request of await cache.keys()) {
      if (!current.has(request.url)) await cache.delete(request);
    }
  }
};
async function openCache() {
  if (!("caches" in globalThis)) return void 0;
  return caches.open(CACHE_NAME).catch(() => void 0);
}
var runtime;
function loadRuntime(wasm_url) {
  runtime ??= loadLiteRt(wasm_url);
  return runtime;
}
async function compileModel(bytes, cpu_only = false) {
  if (!cpu_only && isWebGPUSupported()) {
    try {
      return await loadAndCompile(bytes, { accelerator: "webgpu" });
    } catch {
    }
  }
  return loadAndCompile(bytes, { accelerator: "wasm" });
}
async function runModel(model, inputs, signature) {
  const tensors = inputs.map(
    ([data, shape]) => Tensor.fromTypedArray(data, shape)
  );
  try {
    const outputs = signature ? await model.run(signature, tensors) : await model.run(tensors);
    try {
      return await Promise.all(outputs.map((_) => _.data()));
    } finally {
      outputs.forEach((_) => _.delete());
    }
  } finally {
    tensors.forEach((_) => _.delete());
  }
}

// apps/control/src/app/ui/speech/g2p.ts
var TOKEN = /[a-z']+|\d+(?:\.\d+)?|[.,!?;:—…"]/g;
var WORD = /^[a-z']+$/;
var ACRONYM = /\b[A-Z]{2,4}\b/g;
var LETTER_NAMES = {
  A: "eh",
  B: "bee",
  C: "see",
  D: "dee",
  E: "ee",
  F: "ef",
  G: "gee",
  H: "aitch",
  I: "eye",
  J: "jay",
  K: "kay",
  L: "el",
  M: "em",
  N: "en",
  O: "oh",
  P: "pee",
  Q: "cue",
  R: "ar",
  S: "ess",
  T: "tee",
  U: "you",
  V: "vee",
  W: "double you",
  X: "ex",
  Y: "why",
  Z: "zed"
};
var TEXT_REPLACEMENTS = [
  // Thousands separators, so "1,000" is one number and not "1" and "000"
  [/(\d),(?=\d{3}\b)/g, "$1"],
  [/%/g, " percent"],
  [/&/g, " and "],
  [/°/g, " degrees"]
];
var ONES = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];
var TENS = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];
var SCALES = [
  [1e9, "billion"],
  [1e6, "million"],
  [1e3, "thousand"],
  [100, "hundred"]
];
function integerToWords(value) {
  if (value < 20) return ONES[value];
  if (value < 100) {
    const ones = value % 10 ? ` ${ONES[value % 10]}` : "";
    return TENS[Math.floor(value / 10)] + ones;
  }
  for (const [size, name] of SCALES) {
    if (value < size) continue;
    const rest = value % size ? ` ${integerToWords(value % size)}` : "";
    return `${integerToWords(Math.floor(value / size))} ${name}${rest}`;
  }
  return "";
}
function numberToWords(token) {
  const [integer, fraction] = token.split(".");
  const digits = (text) => [...text].map((digit) => ONES[+digit]).join(" ");
  let words = integer.length > 12 ? digits(integer) : integerToWords(+integer);
  if (fraction !== void 0) words += ` point ${digits(fraction)}`;
  return words;
}
var G2P = class {
  constructor(_dictionary, _config, _model) {
    this._dictionary = _dictionary;
    this._config = _config;
    this._model = _model;
    this._cache = /* @__PURE__ */ new Map();
    this._special = new Set(_config.special);
  }
  async wordToIpa(word) {
    const known = this._dictionary.get(word) ?? this._cache.get(word);
    if (known !== void 0) return known;
    const ipa = await this._predict(word);
    this._cache.set(word, ipa);
    return ipa;
  }
  async _predict(word) {
    const { char2idx, idx2ph, char_repeats, start, end, MAXT, n_phonemes } = this._config;
    const ids = [start];
    for (const char of word) {
      const id = char2idx[char];
      if (id !== void 0) {
        for (let i = 0; i < char_repeats; i++) ids.push(id);
      }
    }
    ids.push(end);
    const length = Math.min(ids.length, MAXT);
    const input = new Float32Array(MAXT);
    input.set(ids.slice(0, length));
    const [logits] = await runModel(this._model, [[input, [1, MAXT]]]);
    let previous = -1;
    let ipa = "";
    for (let position = 0; position < length; position++) {
      let best = 0;
      let best_value = -Infinity;
      for (let k = 0; k < n_phonemes; k++) {
        const value = logits[position * n_phonemes + k];
        if (value > best_value) {
          best_value = value;
          best = k;
        }
      }
      if (best === previous) continue;
      previous = best;
      const phoneme = idx2ph[best];
      if (!best || !phoneme || this._special.has(phoneme)) continue;
      ipa += phoneme.replaceAll("-", "");
    }
    return ipa;
  }
};
function spellAcronyms(text) {
  return text.replace(
    ACRONYM,
    (word) => [...word].map((letter) => LETTER_NAMES[letter]).join(" ")
  );
}
function parseDictionary(text) {
  const dictionary = /* @__PURE__ */ new Map();
  for (const line of text.split("\n")) {
    const tab = line.indexOf("	");
    if (tab > 0) dictionary.set(line.slice(0, tab), line.slice(tab + 1));
  }
  return dictionary;
}
async function phonemize(g2p, symbol_ids, text, max_ids = 127) {
  const space_id = symbol_ids.get(" ") ?? 0;
  const toIds = (ipa) => [...ipa].map((_) => symbol_ids.get(_)).filter((_) => _ !== void 0);
  const chunks = [];
  let current = { ids: [], ipa: "" };
  const flush = () => {
    if (current.ids.length) chunks.push(current);
    current = { ids: [], ipa: "" };
  };
  const add = (ipa, is_word) => {
    const ids = toIds(ipa);
    if (!ids.length || !is_word && !current.ids.length) return;
    const space = is_word && current.ids.length ? 1 : 0;
    if (current.ids.length + space + ids.length > max_ids) flush();
    if (is_word && current.ids.length) {
      current.ids.push(space_id);
      current.ipa += " ";
    }
    current.ids.push(...ids);
    current.ipa += ipa;
  };
  const normalized = TEXT_REPLACEMENTS.reduce(
    (result, [pattern, words]) => result.replace(pattern, words),
    spellAcronyms(text).toLowerCase()
  );
  for (const [token] of normalized.matchAll(TOKEN)) {
    if (/^\d/.test(token)) {
      for (const word of numberToWords(token).split(" ")) {
        add(await g2p.wordToIpa(word), true);
      }
    } else if (WORD.test(token)) {
      add(await g2p.wordToIpa(token), true);
    } else {
      const mark = token === "!" ? "." : token;
      add(mark, false);
      if (/[.?…]/.test(mark)) flush();
    }
  }
  flush();
  return chunks;
}

// apps/control/src/app/ui/speech/matcha.ts
var DECODER_STEPS = 2;
var NOISE_SEED = 0;
var MatchaSynthesizer = class _MatchaSynthesizer {
  constructor(_g2p, _models, _embeddings, _config, _symbol_ids) {
    this._g2p = _g2p;
    this._models = _models;
    this._embeddings = _embeddings;
    this._config = _config;
    this._symbol_ids = _symbol_ids;
  }
  get sample_rate() {
    return this._config.sample_rate;
  }
  static async load(files) {
    const [
      text_encoder,
      decoder,
      vocoder,
      g2p_model,
      embeddings,
      dictionary,
      config,
      g2p_config
    ] = await Promise.all([
      files.bytes("matcha_text_encoder"),
      files.bytes("matcha_decoder"),
      files.bytes("matcha_vocoder"),
      files.bytes("matcha_g2p"),
      files.bytes("matcha_embeddings"),
      files.bytes("matcha_dictionary").then(gunzipText),
      files.json("matcha_config"),
      files.json("matcha_g2p_config")
    ]);
    const symbol_ids = /* @__PURE__ */ new Map();
    config.symbols.forEach((symbol, id) => {
      if (symbol.length === 1) symbol_ids.set(symbol, id);
    });
    const models = {
      text_encoder: await compileModel(text_encoder),
      decoder: await compileModel(decoder, true),
      vocoder: await compileModel(vocoder)
    };
    const g2p = new G2P(
      parseDictionary(dictionary),
      g2p_config,
      await compileModel(g2p_model, true)
    );
    return new _MatchaSynthesizer(
      g2p,
      models,
      new Float32Array(embeddings.slice().buffer),
      config,
      symbol_ids
    );
  }
  /** Yields audio for one sentence at a time, so playback can start early */
  async *synthesize(text) {
    const chunks = await phonemize(this._g2p, this._symbol_ids, text);
    for (const chunk of chunks)
      yield await this._synthesizeChunk(chunk.ids);
  }
  async _synthesizeChunk(phoneme_ids) {
    const {
      MAX_TEXT,
      MAX_MEL,
      n_feats: FEATURES,
      n_channels: CHANNELS,
      hop,
      mel_mean,
      mel_std,
      length_scale,
      in_channels
    } = this._config;
    const embedded = new Float32Array(MAX_TEXT * CHANNELS);
    const text_length = Math.min(phoneme_ids.length * 2 + 1, MAX_TEXT);
    const text_mask = new Float32Array(MAX_TEXT).fill(1, 0, text_length);
    for (let t = 0; t < MAX_TEXT; t++) {
      const k = (t - 1) / 2;
      const id = t % 2 === 1 && k < phoneme_ids.length ? phoneme_ids[k] : 0;
      embedded.set(
        this._embeddings.subarray(id * CHANNELS, (id + 1) * CHANNELS),
        t * CHANNELS
      );
    }
    const encoded = await runModel(this._models.text_encoder, [
      [embedded, [1, MAX_TEXT, CHANNELS]],
      [text_mask, [1, 1, MAX_TEXT]]
    ]);
    const [mu, log_durations] = encoded[0].length === FEATURES * MAX_TEXT ? encoded : [encoded[1], encoded[0]];
    const cumulative = new Float64Array(MAX_TEXT);
    let total = 0;
    for (let t = 0; t < MAX_TEXT; t++) {
      total += Math.ceil(Math.exp(log_durations[t]) * text_mask[t]) * length_scale;
      cumulative[t] = total;
    }
    const frames = Math.min(Math.max(Math.trunc(total), 1), MAX_MEL);
    const mu_frames = new Float32Array(FEATURES * MAX_MEL);
    for (let frame = 0, t = 0; frame < frames; frame++) {
      while (t < MAX_TEXT - 1 && cumulative[t] <= frame) t++;
      for (let c = 0; c < FEATURES; c++) {
        mu_frames[c * MAX_MEL + frame] = mu[c * MAX_TEXT + t];
      }
    }
    const frame_mask = new Float32Array(MAX_MEL).fill(1, 0, frames);
    const random = normalRandom(NOISE_SEED);
    const x = new Float32Array(FEATURES * MAX_MEL);
    for (let c = 0; c < FEATURES; c++) {
      for (let frame = 0; frame < frames; frame++) {
        x[c * MAX_MEL + frame] = random();
      }
    }
    for (let step = 0; step < DECODER_STEPS; step++) {
      const [velocity] = await runModel(this._models.decoder, [
        [x, [1, FEATURES, MAX_MEL]],
        [mu_frames, [1, FEATURES, MAX_MEL]],
        [
          timeEmbedding(step / DECODER_STEPS, in_channels),
          [1, in_channels]
        ],
        [frame_mask, [1, 1, MAX_MEL]]
      ]);
      for (let i = 0; i < x.length; i++) {
        x[i] += velocity[i] / DECODER_STEPS;
      }
    }
    const mel = new Float32Array(FEATURES * MAX_MEL);
    for (let c = 0; c < FEATURES; c++) {
      for (let frame = 0; frame < frames; frame++) {
        const i = c * MAX_MEL + frame;
        mel[i] = x[i] * mel_std + mel_mean;
      }
    }
    const [wave] = await runModel(this._models.vocoder, [
      [mel, [1, FEATURES, MAX_MEL]]
    ]);
    const samples = new Float32Array(frames * hop);
    for (let i = 0; i < samples.length; i++) {
      samples[i] = Math.max(-1, Math.min(1, wave[i]));
    }
    return samples;
  }
};
async function gunzipText(bytes) {
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  return new Response(stream).text();
}
function timeEmbedding(time, size) {
  const half = size / 2;
  const embedding = new Float32Array(size);
  const scale = -Math.log(1e4) / (half - 1);
  for (let i = 0; i < half; i++) {
    const value = 1e3 * time * Math.exp(i * scale);
    embedding[i] = Math.sin(value);
    embedding[half + i] = Math.cos(value);
  }
  return embedding;
}
function normalRandom(seed) {
  let state = seed >>> 0;
  const uniform = () => {
    state = state + 1831565813 | 0;
    let t = Math.imul(state ^ state >>> 15, 1 | state);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
  let spare;
  return () => {
    if (spare !== void 0) {
      const value = spare;
      spare = void 0;
      return value;
    }
    const u = uniform() || Number.MIN_VALUE;
    const radius = Math.sqrt(-2 * Math.log(u));
    const angle = 2 * Math.PI * uniform();
    spare = radius * Math.sin(angle);
    return radius * Math.cos(angle);
  };
}

// apps/control/src/app/ui/speech/whistle.ts
var LANGUAGE = "en";
var OUT_CAPACITY = 64 * 1024;
var WhistleTranscriber = class _WhistleTranscriber {
  constructor(_module, _keywords) {
    this._module = _module;
    this._keywords = _keywords;
    this._stream_text = "";
  }
  /** `engine_url` is the URL of `needle.js`. The `.wasm` file must be next to it. */
  static async load(engine_url, model, keywords) {
    const response = await fetch(engine_url);
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status} when loading ${engine_url}`
      );
    }
    const factory = new Function(
      "self",
      `${await response.text()}
return createNeedle;`
    )({ location: { href: engine_url } });
    if (!factory) throw new Error("Needle engine did not load");
    const module = await factory();
    const pointer = module._malloc(model.length);
    module.HEAPU8.set(model, pointer);
    const result = module._needle_load(pointer, BigInt(model.length));
    module._free(pointer);
    const transcriber = new _WhistleTranscriber(module, keywords);
    if (result < 0) throw new Error(transcriber._lastError());
    return transcriber;
  }
  /** Converts a full phrase into text. Ends any stream in progress. */
  transcribe(audio) {
    this._stopStream();
    const json = this._call(
      (pcm, language, keywords, out) => this._module._needle_transcribe(
        pcm,
        audio.length,
        language,
        keywords,
        0,
        out,
        OUT_CAPACITY
      ),
      audio
    );
    return JSON.parse(json).text;
  }
  /**
   * Adds about one second of audio to a live transcription.
   * Use `reset` for the first audio of a phrase, so no words from an earlier phrase stay.
   * Returns the text so far: the confirmed words and the latest guess after them.
   */
  stream(audio, reset) {
    if (reset) this._stopStream();
    const json = this._call(
      (pcm, language, keywords, out) => this._module._needle_stream_transcribe_process(
        pcm,
        audio.length,
        language,
        keywords,
        out,
        OUT_CAPACITY
      ),
      audio
    );
    const { text, pending } = JSON.parse(json);
    this._stream_text = `${this._stream_text} ${text}`.trim();
    return `${this._stream_text} ${pending}`.trim();
  }
  _stopStream() {
    const out = this._module._malloc(OUT_CAPACITY);
    this._module._needle_stream_transcribe_stop(out, OUT_CAPACITY);
    this._module._free(out);
    this._stream_text = "";
  }
  /** Copies the audio and strings into Wasm memory, runs `run` and returns its JSON output */
  _call(run, audio) {
    const module = this._module;
    const pcm = module._malloc(audio.byteLength);
    new Float32Array(module.HEAPU8.buffer, pcm, audio.length).set(audio);
    const language = this._string(LANGUAGE);
    const keywords = this._string(this._keywords);
    const out = module._malloc(OUT_CAPACITY);
    try {
      if (run(pcm, language, keywords, out) < 0) {
        throw new Error(this._lastError());
      }
      return this._read(out);
    } finally {
      [pcm, language, keywords, out].forEach((_) => module._free(_));
    }
  }
  _string(text) {
    const bytes = new TextEncoder().encode(`${text}\0`);
    const pointer = this._module._malloc(bytes.length);
    this._module.HEAPU8.set(bytes, pointer);
    return pointer;
  }
  _read(pointer) {
    const heap = this._module.HEAPU8;
    return new TextDecoder().decode(
      heap.subarray(pointer, heap.indexOf(0, pointer))
    );
  }
  _lastError() {
    return this._read(this._module._needle_last_error());
  }
};

// apps/control/src/app/ui/speech/speech.worker.ts
self.importScripts = (...urls) => {
  for (const url of urls) {
    const request = new XMLHttpRequest();
    request.open("GET", String(url), false);
    request.send();
    if (request.status !== 200) {
      throw new Error(`HTTP ${request.status} when loading ${url}`);
    }
    Object.assign(self, {
      Module: { locateFile: (path) => new URL(path, url).href }
    });
    (0, eval)(request.responseText);
  }
};
var speech_to_text;
var text_to_speech;
var queue = Promise.resolve();
var cancelled = /* @__PURE__ */ new Set();
var cached_audio = /* @__PURE__ */ new Map();
var cached_phrases = /* @__PURE__ */ new Set();
function post(message, transfer = []) {
  self.postMessage(message, transfer);
}
function enqueue(job) {
  queue = queue.then(job).catch(() => {
  });
}
function errorText(error) {
  return error instanceof Error ? error.message : String(error);
}
function watch(model, loading) {
  loading.then(
    () => post({ type: "ready", model }),
    (error) => post({ type: "failed", model, message: errorText(error) })
  );
  return loading;
}
function setup({
  wasm_url,
  needle_url,
  mirror_url,
  cached_phrases: phrases,
  keywords
}) {
  if (speech_to_text) return;
  const files = new ModelFiles(mirror_url);
  speech_to_text = watch(
    "speech_to_text",
    files.bytes("whistle").then(
      (model) => WhistleTranscriber.load(needle_url, model, keywords)
    )
  );
  text_to_speech = watch(
    "text_to_speech",
    speech_to_text.catch(() => {
    }).then(() => loadRuntime(wasm_url)).then(() => MatchaSynthesizer.load(files))
  );
  cached_phrases = new Set(phrases);
  void text_to_speech.catch(() => {
  }).then(() => files.prune()).catch(() => {
  });
  void text_to_speech.then((synthesizer) => {
    for (const phrase of phrases) {
      enqueue(() => render(synthesizer, phrase, () => {
      }));
    }
  });
}
function schedule(id, model, job, on_end = () => {
}) {
  const end = (error) => {
    if (error) post({ type: "error", id, message: errorText(error) });
    cancelled.delete(id);
    on_end();
  };
  if (!model) return end("Speech models are not set up");
  model.then(
    (loaded) => enqueue(async () => {
      try {
        if (!cancelled.has(id)) await job(loaded);
        end();
      } catch (error) {
        end(error);
      }
    }),
    end
  );
}
async function render(synthesizer, text, on_audio, id = -1) {
  const { sample_rate } = synthesizer;
  const cached = cached_audio.get(text);
  if (cached) {
    for (const samples of cached) on_audio(samples.slice(), sample_rate);
    return;
  }
  const audio = [];
  for await (const samples of synthesizer.synthesize(text)) {
    if (cancelled.has(id)) return;
    audio.push(samples);
    on_audio(samples.slice(), sample_rate);
  }
  if (cached_phrases.has(text)) cached_audio.set(text, audio);
}
self.onmessage = ({ data }) => {
  switch (data.type) {
    case "setup":
      return setup(data.setup);
    case "cancel":
      cancelled.add(data.id);
      return;
    case "transcribe":
    case "stream":
      return schedule(data.id, speech_to_text, async (transcriber) => {
        const text = data.type === "stream" ? transcriber.stream(data.audio, data.reset) : transcriber.transcribe(data.audio);
        post({ type: "transcript", id: data.id, text });
      });
    case "synthesize":
      return schedule(
        data.id,
        text_to_speech,
        (synthesizer) => render(
          synthesizer,
          data.text,
          (samples, sample_rate) => post(
            {
              type: "audio",
              id: data.id,
              samples,
              sample_rate
            },
            [samples.buffer]
          ),
          data.id
        ),
        () => post({ type: "done", id: data.id })
      );
  }
};
//# debugId=052c41e9-86cf-51df-8576-f5e3f2627166
//# sourceMappingURL=worker-N5UIU6JO.js.map
