/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let clone = {};
    Object.assign(clone, obj);
    for (let field of fields) {
        delete clone[field];
    }
    return clone;
};
