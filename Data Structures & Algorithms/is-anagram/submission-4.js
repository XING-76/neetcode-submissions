class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let map = {}
        
        for (const alpha of s) {
            map[alpha] = (map[alpha] || 0) + 1
        }
        
        for (const alpha of t) {
            if (map[alpha]) {
                map[alpha]--
                if (map[alpha] === 0) delete map[alpha]
            } else {
                return false
            }
        }
        
        return true
    }
}
