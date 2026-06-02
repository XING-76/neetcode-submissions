class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (!s || !t) return ''

        let tMap = {}, windowMap = {}
        
        for (const alpha of t) {
            tMap[alpha] = (tMap[alpha] || 0) + 1
        }
        
        let left = 0
        let have = 0, need = Object.keys(tMap).length
        let minLength = Infinity, minWindow = [-1, -1]
        
        for (let right = 0; right < s.length; right++) {
            let c = s[right]
            windowMap[c] = (windowMap[c] || 0) + 1
            
            if (tMap[c] && tMap[c] === windowMap[c]) {
                have++
            }
            
            while (have === need) {
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1
                    minWindow = [left, right]
                }
                windowMap[s[left]]--
                if (tMap[s[left]] && tMap[s[left]] > windowMap[s[left]]) {
                    have--
                }
                left++
            }
        }
        
        return minLength === Infinity ? '' : s.slice(minWindow[0], minWindow[1] + 1)
    }
}
