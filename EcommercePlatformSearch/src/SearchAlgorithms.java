public class SearchAlgorithms {

    // Linear Search - searches through unsorted array one by one
    // Time Complexity: Best O(1), Average O(n), Worst O(n)
    public static Product linearSearch(Product[] products, int targetId) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == targetId) {
                return products[i];
            }
        }
        return null;
    }

    // Binary Search - requires sorted array, eliminates half each step
    // Time Complexity: Best O(1), Average O(log n), Worst O(log n)
    public static Product binarySearch(Product[] sortedProducts, int targetId) {
        int left = 0;
        int right = sortedProducts.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (sortedProducts[mid].productId == targetId) {
                return sortedProducts[mid];
            } else if (sortedProducts[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}
