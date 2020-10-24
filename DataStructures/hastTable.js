HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw "hash table is full";

  var hashedIndex = this.hash(key);

  while (this.keys[hashedIndex] != null) {
    hashedIndex++;

    hashedIndex = hashedIndex % this.size;
  }
  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};

HashTable.prototype.get = function (key) {
  var hashedIndex = this.hash(key);

  while (this.keys[hashedIndex] != key) {
    hashedIndex++;

    hashedIndex = hashedIndex % this.size;
  }
  return this.values[hashedIndex];
};

HashTable.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw "must be int"; // check if int

  return this.secondHash(key % this.size);
};

HashTable.prototype.secondHash = function (hashedKey) {
  var R = this.size - 2;
  return R - (hashedKey % R);
};
