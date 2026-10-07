import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class LoginTest {

    @Test
    public void testValidLogin() {

        Login login = new Login();

        assertTrue(login.validateLogin("admin", "admin123"));
    }
}