function Mission1(arr) {
  let evenArr = [];
  arr.forEach((n) => {
    if (n % 2 === 0) {
      evenArr.push(n);
    }
  });
  return evenArr;
}

// function Mission3(arr) {
//     let a = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < i.length; j++) {
//             a[j]
//         }

//     }
//     return a
// }
// console.log(Mission3([[1,2,3],[4,5,6],[7,8, 9]]));

function Mission3(arr) {
  return arr.flat();
}

function Mission5(keys, values) {
  let result = {};

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }

  return result;
}

function Mission6(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return Mission6(n - 1) + Mission6(n - 2);
}

module.exports = {
  Mission1,
  Mission3,
  Mission5,
  Mission6,
};
