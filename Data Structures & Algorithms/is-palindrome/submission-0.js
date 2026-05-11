class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0, right = s.length - 1
        
        function isValid (str) {
            return str >= 'a' && str <= 'z' || str >= 'A' && str <= 'Z' || str >= '0' && str <= '9'
        }
        
        while (left < right) {
            while (left < right && !isValid(s[left])) {
                left++
            }
            while (left < right && !isValid(s[right])) {
                right--
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }
            left++
            right--
        }
        
        return true
    }
}
