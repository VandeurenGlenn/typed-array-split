export default (input, seperator = undefined) => {  
  if (typeof seperator === 'string') 
    seperator = new TextEncoder().encode(seperator)

  const array = input
  let string = []
  let sep = []
  let set = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === seperator[sep.length]) sep.push(array[i])
    else string.push(array[i])
    
    if (sep.length === seperator.length) {
      set.push(new Uint8Array(string))
      string = []
      sep = []
    } else if (array.length - 1 === i) set.push(new Uint8Array(string))
    
  }
  return set
}