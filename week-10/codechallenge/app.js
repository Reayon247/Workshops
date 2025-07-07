// Without the array

function PhoneNumber(a, b, c, d, e, f, g, h, i, j) {
  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}

PhoneNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

console.log(PhoneNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));

// With the array

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(array) {
  return `(${array[0]}${array[1]}${array[2]}) ${array[3]}${array[4]}${array[5]}-${array[6]}${array[7]}${array[8]}${array[9]}`;
}

console.log(createPhoneNumber(array1));
