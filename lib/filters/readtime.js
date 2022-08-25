// format number of words and reading time
const numFormat = new Intl.NumberFormat('en');
const roundTo = 10;
const readPerMin = 120;

module.exports = count => {
  const words = Math.ceil(count / roundTo) * roundTo;
  const mins = Math.ceil(count / readPerMin);

  return `${ numFormat.format(words) } words, ${ numFormat.format(mins) }-minute read`;
};