'use strict';

module.exports = function countSameElements(collection) {

    let tmp = collection.reduce((total, current) =>
        ((total[current.split('-')[0]] += current.split('-')[1] !== undefined ?
            parseInt(current.split('-')[1]) : 1)
        || (total[current.split('-')[0]] = current.split('-')[1] !== undefined ?
            parseInt(current.split('-')[1]) : 1), total), {});
    return Object.keys(tmp).map(elem => {
        return {'key': elem, 'count': tmp[elem]}
    });
};
