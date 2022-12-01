/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let result = Array.from(arr);
    let direction = param == 'desc' ? -1 : 1;

    function locCompare(left, right) {
        return direction * left.localeCompare(right, ['ru', 'en'], {caseFirst: 'upper'});
    }

    return result.sort(locCompare);

}
