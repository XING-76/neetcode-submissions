class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freq = {}
        let longest = 0
        let left = 0, maxFreq = 0

        for (let right = 0; right < s.length; right++) {
            freq[s[right]] = (freq[s[right]] || 0) + 1
            maxFreq = Math.max(freq[s[right]], maxFreq)

            while (right - left + 1 - maxFreq > k) {
                freq[s[left]]--
                left++
            }

            longest = Math.max(right - left + 1, longest)
        }

        return longest
    }
}
