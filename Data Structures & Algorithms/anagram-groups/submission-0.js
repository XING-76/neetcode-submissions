class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        let result = []
        
        for (let i = 0; i < strs.length; i++) {
            const key = strs[i].split('').sort().join('')
            
            if (!map.has(key)) {
                map.set(key, [])
            }
            map.get(key).push(i)
        }
        
        for (const arr of [...map.values()]) {
            result.push(arr.map(idx => strs[idx]))
        }
        
        return result
    }
}
