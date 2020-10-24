let setA = new Set();

// Ejemplos:
setA.add(1);

console.log(setA.values()); //outputs @Iterator
console.log(setA.has(1)); //outputs true
console.log(setA.size); //outputs 1

let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

// Cómo se implementaría operaciones en conjuntos
// UNION
const union = (setA, setB) => {
  let unionAb = new Set(); //{1}
  for (let x of setA) unionAb.add(x);
  for (let x of setB) unionAb.add(x);

  return unionAb;
};

let unionAB = union(setA, setB);
console.log("union AUB", unionAB);

// INTERSECCIÓN
let intersection = function (setA, setB) {
  let intersectionSet = new Set();
  for (let x of setA) {
    if (setB.has(x)) {
      intersectionSet.add(x);
    }
  }

  return intersectionSet;
};

let intersectionAB = intersection(setA, setB);
console.log("intersección AnB", intersectionAB);

// DIFERENCIA
let difference = function (setA, setB) {
  let differenceSet = new Set();
  for (let x of setA) {
    if (!setB.has(x)) {
      differenceSet.add(x);
    }
  }
  return differenceSet;
};

let differenceAB = difference(setA, setB);
console.log("Diferencia A-B", differenceAB);