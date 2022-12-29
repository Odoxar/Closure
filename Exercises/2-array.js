'use strict';

const array = () => {
  const a = [];
  const f = (x) => a[x];
  f.push = (i) => a.push(i);
  f.pop = () => a.pop();
  return f;
};

module.exports = { array };
