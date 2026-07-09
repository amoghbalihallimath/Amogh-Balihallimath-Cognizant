public class SingletonTest {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        logger1.log("First log message.");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second log message.");

        // Verify both references point to the same instance
        if (logger1 == logger2) {
            System.out.println("Only one instance of Logger exists.");
        } else {
            System.out.println("Multiple instances detected.");
        }
    }
}
