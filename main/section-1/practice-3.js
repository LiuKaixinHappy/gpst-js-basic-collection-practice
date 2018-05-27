'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter(elem => objectB.value.includes(elem));
};
