'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    const tmp = collectionA.reduce((total, current) =>
        ((total[current.split('-')[0]] += current.split('-')[1] !== undefined ?
            parseInt(current.split('-')[1]) : 1)
        || (total[current.split('-')[0]] = current.split('-')[1] !== undefined ?
            parseInt(current.split('-')[1]) : 1), total), {});
    const collectionC = Object.keys(tmp).map(elem => {
        return {'key': elem, 'count': tmp[elem]}
    });
    return collectionC.map(elem => objectB.value.includes(elem.key) ?
        {'key':elem.key, 'count':elem.count - Math.floor(elem.count / 3)} :elem);
};
