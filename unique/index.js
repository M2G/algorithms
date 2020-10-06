function unique(array = []) {
  if (array && array.length <= 1) {
    return array
  }

const obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = array[i];
  }
  console.log(Object.keys(obj).map(parseFloat)) // parse string -> int
}

unique([2, 4, 6, 8, 10, 10, 12, 16, 16, 16]);