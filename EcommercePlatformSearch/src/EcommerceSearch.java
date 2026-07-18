public class EcommerceSearch {

    public static void main(String[] args) {

        // Unsorted array for linear search
        Product[] products = {
            new Product(104, "Laptop", "Electronics"),
            new Product(101, "Shoes", "Footwear"),
            new Product(107, "Washing Machine", "Appliances"),
            new Product(103, "T-Shirt", "Clothing"),
            new Product(106, "Headphones", "Electronics")
        };

        // Sorted array (by productId) for binary search
        Product[] sortedProducts = {
            new Product(101, "Shoes", "Footwear"),
            new Product(103, "T-Shirt", "Clothing"),
            new Product(104, "Laptop", "Electronics"),
            new Product(106, "Headphones", "Electronics"),
            new Product(107, "Washing Machine", "Appliances")
        };

        int searchId = 106;

        // Linear Search
        System.out.println("=== Linear Search ===");
        Product result1 = SearchAlgorithms.linearSearch(products, searchId);
        if (result1 != null) {
            System.out.println("Product found: " + result1);
        } else {
            System.out.println("Product not found.");
        }

        // Binary Search
        System.out.println("\n=== Binary Search ===");
        Product result2 = SearchAlgorithms.binarySearch(sortedProducts, searchId);
        if (result2 != null) {
            System.out.println("Product found: " + result2);
        } else {
            System.out.println("Product not found.");
        }

        // Analysis
        System.out.println("\n=== Time Complexity Analysis ===");
        System.out.println("Linear Search  - Best: O(1), Average: O(n), Worst: O(n)");
        System.out.println("Binary Search  - Best: O(1), Average: O(log n), Worst: O(log n)");
        System.out.println("\nBinary search is more suitable for an e-commerce platform");
        System.out.println("because the product catalog is large and sorted by ID,");
        System.out.println("making O(log n) significantly faster than O(n) at scale.");
    }
}
