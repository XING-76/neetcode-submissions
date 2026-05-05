class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        let result = []

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1
        }

        let bucket = Array.from({ length: nums.length + 1 }, () => [])

        for (let num in count) {
            const freq = count[num]
            bucket[freq].push(Number(num))
        }

        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const n of bucket[i]) {
                result.push(n)
                if (result.length === k) return result
            }
        }
    }
}
