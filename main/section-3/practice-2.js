'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.map(elem => objectB.value.includes(elem.key) ?
        {'key':elem.key, 'count':elem.count - Math.floor(elem.count / 3)} :elem);
};
