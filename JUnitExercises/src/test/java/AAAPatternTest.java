import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAAPatternTest {

    private MyCalculator calc;

    @Before
    public void setUp() {
        calc = new MyCalculator();
        System.out.println("Setup: MyCalculator instance created.");
    }

    @After
    public void tearDown() {
        calc = null;
        System.out.println("Teardown: MyCalculator instance destroyed.");
    }

    @Test
    public void testAdd() {
        int a = 10;
        int b = 5;

        int result = calc.add(a, b);

        assertEquals(15, result);
    }

    @Test
    public void testSubtract() {
        int a = 10;
        int b = 5;

        int result = calc.subtract(a, b);

        assertEquals(5, result);
    }

    @Test
    public void testDivideByZero() {
        int a = 10;
        int b = 0;

        try {
            calc.divide(a, b);
            fail("Expected ArithmeticException not thrown.");
        } catch (ArithmeticException e) {
            assertEquals("Division by zero", e.getMessage());
        }
    }
}
