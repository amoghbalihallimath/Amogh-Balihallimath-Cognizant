public class FinancialForecasting {

    // Recursive method to calculate future value
    // Formula: futureValue = presentValue * (1 + growthRate)^n
    // Time Complexity: O(n) - one recursive call per period
    public static double calculateFutureValue(double presentValue, double growthRate, int periods) {
        // Base case: no periods left, return present value
        if (periods == 0) {
            return presentValue;
        }
        // Recursive case: apply growth rate for one period and recurse
        return calculateFutureValue(presentValue * (1 + growthRate), growthRate, periods - 1);
    }

    // Optimized using memoization to avoid recomputation
    // Stores already computed values in a map
    static java.util.HashMap<Integer, Double> memo = new java.util.HashMap<>();

    public static double calculateFutureValueMemo(double presentValue, double growthRate, int periods) {
        if (periods == 0) {
            return presentValue;
        }
        if (memo.containsKey(periods)) {
            return memo.get(periods);
        }
        double result = calculateFutureValueMemo(presentValue * (1 + growthRate), growthRate, periods - 1);
        memo.put(periods, result);
        return result;
    }

    public static void main(String[] args) {

        double presentValue = 1000.0;
        double growthRate = 0.10; // 10% annual growth
        int periods = 5;

        System.out.println("=== Financial Forecasting ===");
        System.out.println("Present Value : Rs." + presentValue);
        System.out.println("Growth Rate   : " + (growthRate * 100) + "%");
        System.out.println("Periods       : " + periods + " years");

        // Recursive result
        double futureValue = calculateFutureValue(presentValue, growthRate, periods);
        System.out.printf("%nFuture Value (Recursive)    : Rs.%.2f%n", futureValue);

        // Memoized result
        double futureValueMemo = calculateFutureValueMemo(presentValue, growthRate, periods);
        System.out.printf("Future Value (Memoized)     : Rs.%.2f%n", futureValueMemo);

        System.out.println("\n=== Time Complexity Analysis ===");
        System.out.println("Recursive  : O(n) - recurs once per period");
        System.out.println("Memoized   : O(n) first call, O(1) for repeated calls with same input");
        System.out.println("Optimization: Memoization avoids recomputing already known values,");
        System.out.println("             making it efficient for repeated forecasts.");
    }
}
