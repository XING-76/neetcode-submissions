class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        
        for (const s of strs) {
            const key = s.split('').sort().join('')
            
            if (!map.has(key)) {
                map.set(key, [])
            }
            map.get(key).push(s)
        }
        
        return [...map.values()]
    }
}
