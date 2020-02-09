const add = (x, y) => {
  return x + y;
};

const sub = (x, y) => {
  return x - y;
};

const multi = (x, y) => {
  return x * y;
};

const div = (x, y) => {
  return x / y;
};

const fact = (x, y) => {
  if (x <= 1) {
    return 1;
  }
  return x * fact(x - 1);
};

module.exports = { add, sub, multi, fact, div };
