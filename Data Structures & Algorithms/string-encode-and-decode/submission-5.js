class Solution {
    encode(strs) {
        let res = []
        for (const str of strs) {
            res.push(str.length + '#' + str)
        }
        return res.join('')
    }

    decode(str) {
        let result = [], i = 0
        
        while (i < str.length) {
            let j = i
            
            while (j < str.length && str[j] !== '#') {
                j++
            }
            
            const length = Number(str.substring(i, j))
            const word = str.slice(j + 1, j + 1 + length)
            
            result.push(word)
            i = j + 1 + length
        }
        
        return result
    }
}