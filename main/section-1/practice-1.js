'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {

  return collectionA.filter(elem => collectionB.includes(elem));
};
