function unique() {

const unique = [2, 4, 6, 8, 10, 10, 12, 16, 16, 16];
const obj = {};
  for (let i = 0; i < unique.length; i++) {
    obj[unique[i]] = unique[i];
  }
  console.log(Object.keys(obj))
}

unique();