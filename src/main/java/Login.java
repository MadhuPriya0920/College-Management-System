public class Login {

    public boolean validateLogin(String username, String password) {
        return username.equals("admin") && password.equals("admin123");
    }
}