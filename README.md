# typed-array-split
> split(TypedArray, sep)

## install
```sh
npm i @vandeurenglenn/typed-array-split
```

## usage
```js
import typedArraySplit from '@vandeurenglenn/typed-array-split'

const splitsed = typedArraySplit(joined, '/')
console.log(new TextDecoder().decode(splitsed[0])) // hello
console.log(new TextDecoder().decode(splitsed[1])) // world
```
