/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
function matchAll(regExp, str) {
    let matches;
    const arr = [];

    while ((matches = regExp.exec(str)) !== null) {
        arr.push(matches);
    }

    return arr;
}

const r = matchAll(/\w+|\[(\w*)]/g, 'foo.x.y.z')

console.log(r)
