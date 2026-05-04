class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let s1 = s.split('').sort(), t1 = t.split('').sort()
        
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== t1[i]) return false
        }
        
        return true
    }
}
