// Time O(n)
// Space O(n)

function getNthFiboBetter(n, lastlast, last) {
  if (n == 0) {
    return lastlast;
  }
  if (n == 1) {
    return last;
  }
  return getNthFiboBetter(n - 1, last, lastlast + last);
}
