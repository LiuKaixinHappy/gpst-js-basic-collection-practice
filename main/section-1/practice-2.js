'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    collectionB = collectionB.join(',').split(',');
    return collectionA.filter(elem => collectionB.includes(elem));
};
