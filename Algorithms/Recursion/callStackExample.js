function printNRecursive(n) {
  console.log(n);
  if (n > 1) {
    printNRecursive(n - 1);
  }
}

printNRecursive(10);
