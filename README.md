# typed-array-join
> TypedArray.set() the join() way

## install
```sh
npm i @vandeurenglenn/typed-array-join
```

## usage
```js
import typedArrayJoin from '@vandeurenglenn/typed-array-join'

const joined = typedArrayjoin([
  new TextEncoder('hello'),
  new TextEncoder('world')
], '/')
console.log(new TextDecoder().decode(joined)) // hello/world
```
