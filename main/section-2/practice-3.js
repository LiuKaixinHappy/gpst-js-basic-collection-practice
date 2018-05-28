'use strict';

module.exports = function countSameElements(collection) {

    collection = collection.map(elem => {
        if (elem.length > 1) {
            let num = '';
            for (let i = 0; i < elem.length; i++) {
                if (!isNaN(elem[i])) {
                    num = `${num}${elem[i]}`;
                }
            }
            return `${elem[0]}-${num}`;
        }
        return `${elem}-1`;
    });

    let tmp = collection.reduce((total, current) =>
        ((total[current.split('-')[0]] += parseInt(current.split('-')[1]))
        || (total[current.split('-')[0]] = parseInt(current.split('-')[1])), total), {});
    return Object.keys(tmp).map(elem => {
        return {'name': elem, 'summary': tmp[elem]}
    });
};
