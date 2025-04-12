// Using math.min and math.min

function minMaxi(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return [min, max];
}

const age = [4, 65, 76, 23, 56];
console.log(minMaxi(age));
