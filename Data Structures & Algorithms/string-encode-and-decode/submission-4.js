class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s = ''
        for (const str of strs) {
            s += str.length + '#' + str
        }
        return s
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [], i = 0
        while (i < str.length) {
            let j = i
            while (str[j] !== '#') {
                j++
            }
            let length = parseInt(str.substring(i, j))
            result.push(str.slice(j + 1, j + 1 + length))
            i = j + 1 + length
        }
        return result
    }
}
