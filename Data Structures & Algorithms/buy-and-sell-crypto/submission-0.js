class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = 1
        let max = 0

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                const curr = prices[r] - prices[l]
                max = Math.max(curr, max)
            }
            if (prices[l] >= prices[r]) {
                l = r
            }
            r++
        }

        return max
    }
}
