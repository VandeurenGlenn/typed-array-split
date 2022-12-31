import split from './split.js'

const splited = split(new Uint8Array([104, 101, 108, 108, 111, 47, 119, 111, 114, 108, 100]), '/')

console.log('can split');
console.log(new TextDecoder().decode(splited[0]) === 'hello') 
console.log(new TextDecoder().decode(splited[1]) === 'world') 