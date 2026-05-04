class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}

        for (const num of nums) {
            map[num] = (map[num] || 0) + 1
        }
        
        let result = Object.entries(map)
            .sort((a, b) => b[1] - a[1])
            .map(obj => parseInt(obj[0]))

        return result.slice(0, k)
    }
}
