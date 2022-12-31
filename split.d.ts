declare type TypedArray = Uint8Array | Uint16Array | Uint32Array | BigInt64Array | BigUint64Array | ArrayBuffer | SharedArrayBuffer

declare module typedArraySplit {
  /**
   * 
   * @param input TypedArray[]
   * @param length Number
   */
  export default function (input: TypedArray[], seperator: String | TypedArray, length: Number):TypedArray 
}

declare module '@vandeurenglenn/typed-array-join' {
  export default typedArraySplit
}