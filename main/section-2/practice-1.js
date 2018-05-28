'use strict';

module.exports = function countSameElements(collection) {
    let tmp = collection.reduce((total, current) =>
        (total[current]++ || (total[current] = 1), total), {});

    return Object.keys(tmp).map(elem => {
        return {'key': elem, 'count': tmp[elem]}
    });
};
