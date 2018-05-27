'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.map(elem => elem.key).filter(elem => objectB.value.includes(elem));
};
