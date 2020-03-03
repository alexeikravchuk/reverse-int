module.exports = function reverse (n) {
    let str = "";
    n = Math.abs(n);
    while(n > 0) {
        str += n % 10;
        n = Math.floor(n / 10);
    }
  return Number(str);
}