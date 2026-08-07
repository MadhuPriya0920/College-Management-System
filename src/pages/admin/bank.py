import random
import sys
from datetime import datetime
class C:
    RESET = "\033[0m"
    BOLD = "\033[1m"
    DIM = "\033[2m"
    CYAN = "\033[96m"
    GREEN = "\033[92m"
    YELLOW = "\033[93m"
    RED = "\033[91m"
    MAGENTA = "\033[95m"
    BLUE = "\033[94m"

def c(text, color):
    return f"{color}{text}{C.RESET}"

def print_success(msg):
    print(c(msg, C.GREEN))

def print_error(msg):
    print(c(msg, C.RED))

def print_warning(msg):
    print(c(msg, C.YELLOW))

def print_info(msg):
    print(c(msg, C.CYAN))

def section_header(title, width=42, color=C.MAGENTA):
    print()
    print(c("*" + "-" * width + "*", color))
    print(c(("* " + title + " *").center(width + 2), C.BOLD + color))
    print(c("*" + "-" * width + "*", color))

def divider(width=42, color=C.DIM):
    print(c("_" * width, color))

def show_banner():
    print(c("*" + "-" * 38 + "*", C.CYAN))
    print(c("|" + " " * 38 + "|", C.CYAN))
    print(c("|" + "*  S U J A I   B A N K  *".center(38) + "|", C.BOLD + C.CYAN))
    print(c("|" + " " * 38 + "|", C.CYAN))
    print(c("*" + "-" * 38 + "*", C.CYAN))
    print(c("~ your money, minus the boredom ~".center(40), C.YELLOW))
    print()
users = []

def seed_admin():
    """Create a default admin account (only if not already created)."""
    if not any(u['role'] == 'admin' for u in users):
        users.append({
            'account_number': None,
            'name': 'System Admin',
            'username': 'admin',
            'password': 'admin123',
            'balance': None,
            'role': 'admin',
            'status': 'active',
            'notifications': [],
            'history': []
        })

def generate_account_number():
    """Generate a unique 6-digit account number."""
    while True:
        acc_no = random.randint(100000, 999999)
        if not any(u['account_number'] == acc_no for u in users):
            return acc_no

def find_user(username, role=None):
    for u in users:
        if u['username'] == username and (role is None or u['role'] == role):
            return u
    return None

def find_client_by_key(key):
    """Find a client by username OR account number."""
    for u in users:
        if u['role'] == 'client' and (u['username'] == key or str(u['account_number']) == key):
            return u
    return None

def username_exists(username):
    return any(u['username'] == username for u in users)

def get_valid_float(prompt):
    """Keep asking until the user enters a valid positive number."""
    while True:
        value = input(c(prompt, C.BLUE)).strip()
        try:
            amount = float(value)
            if amount <= 0:
                print_warning("⚠️  Please enter a positive number.")
                continue
            return amount
        except ValueError:
            print_warning("⚠️  Invalid input. Please enter numbers only.")

def log_transaction(user, description):
    timestamp = datetime.now().strftime("%d-%b-%Y %I:%M %p")
    user['history'].append(f"[{timestamp}] {description}")

def format_currency(amount):
    return f"₹{amount:,.2f}"

def ask_retry_or_exit(remaining):
    """
    Ask the user whether they want to retry logging in or bail out
    to the main menu. Returns True to retry, False to exit.
    """
    print_warning(f"❌ Invalid username or password. {remaining} attempt(s) left.")
    while True:
        choice = input(c("Retry login? (r = retry / e = exit to main menu): ", C.YELLOW)).strip().lower()
        if choice in ('r', 'retry', 'y', 'yes'):
            return True
        elif choice in ('e', 'exit', 'n', 'no'):
            return False
        else:
            print_warning("⚠️  Please type 'r' to retry or 'e' to exit.")

ADMIN_CODE = "sujai"

def signup_menu():
    section_header("* SIGNUP AS *", width=30, color=C.YELLOW)
    print("1. Client Signup")
    print("2. Admin Signup")
    print("3. Back")
    divider(width=30)
    choice = input(c("Select an option: ", C.YELLOW)).strip()

    if choice == '1':
        client_signup()
    elif choice == '2':
        admin_signup()
    elif choice == '3':
        return
    else:
        print_warning("⚠️  Invalid choice. Please select a valid option (1-3).")

def admin_signup():
    section_header("* ADMIN SIGNUP *", color=C.RED)
    max_attempts = 3
    attempts_used = 0
    verified = False

    while attempts_used < max_attempts:
        code = input(c("Enter Admin Code: ", C.BLUE)).strip()
        if code == ADMIN_CODE:
            verified = True
            break

        attempts_used += 1
        remaining = max_attempts - attempts_used
        if remaining <= 0:
            print_error("🚫 Incorrect admin code. Maximum attempts reached.")
            break
        print_warning(f"⚠️  Incorrect admin code. {remaining} attempt(s) left.")

    if not verified:
        print_info("Returning to main menu...\n")
        return

    print_success("✅ Admin code verified.")
    name = input(c("Full Name: ", C.BLUE)).strip()

    while True:
        username = input(c("Create Admin Username: ", C.BLUE)).strip()
        if username == "":
            print_warning("⚠️  Username cannot be empty.")
        elif username_exists(username):
            print_warning("⚠️  Username already taken. Try another.")
        else:
            break

    while True:
        password = input(c("Create Admin Password (min 4 characters): ", C.BLUE)).strip()
        if len(password) < 4:
            print_warning("⚠️  Password too short.")
        else:
            break

    new_admin = {
        'account_number': None,
        'name': name,
        'username': username,
        'password': password,
        'balance': None,
        'role': 'admin',
        'status': 'active',
        'notifications': [],
        'history': []
    }
    users.append(new_admin)

    divider()
    print_success("✅ Admin account created successfully!")
    print_info("You can now log in as admin with your username and password.")
    divider()

def client_signup():
    section_header("* CLIENT SIGNUP *", color=C.GREEN)
    name = input(c("Full Name: ", C.BLUE)).strip()

    while True:
        username = input(c("Create Username: ", C.BLUE)).strip()
        if username == "":
            print_warning("⚠️  Username cannot be empty.")
        elif username_exists(username):
            print_warning("⚠️  Username already taken. Try another.")
        else:
            break

    while True:
        password = input(c("Create Password (min 4 characters): ", C.BLUE)).strip()
        if len(password) < 4:
            print_warning("⚠️  Password too short.")
        else:
            break

    initial_deposit = get_valid_float("Initial Deposit (min ₹500): ₹")
    while initial_deposit < 500:
        print_warning("⚠️  Initial deposit must be at least ₹500.")
        initial_deposit = get_valid_float("Initial Deposit (min ₹500): ₹")

    account_number = generate_account_number()
    new_user = {
        'account_number': account_number,
        'name': name,
        'username': username,
        'password': password,
        'balance': initial_deposit,
        'role': 'client',
        'status': 'active',
        'notifications': [],
        'history': []
    }
    users.append(new_user)
    log_transaction(new_user, f"Account opened with initial deposit {format_currency(initial_deposit)}")

    divider()
    print_success(f"✅ Account created successfully! Your account number is {c(account_number, C.BOLD)}")
    print_info("You can now log in with your username and password.")
    divider()

def client_login():
    section_header("* CLIENT LOGIN *", color=C.CYAN)
    max_attempts = 3
    attempts_used = 0

    while attempts_used < max_attempts:
        username = input(c("Username: ", C.BLUE)).strip()
        password = input(c("Password: ", C.BLUE)).strip()
        user = find_user(username, role='client')

        if user and user['password'] == password:
            if user['status'] == 'frozen':
                print_error("\n🔒 Your account is frozen. Please contact the bank admin.")
                return
            print_success(f"\n✅ Welcome back, {user['name']}!")
            if user['notifications']:
                print_info("\n📢 You have new notifications from the bank:")
                for note in user['notifications']:
                    print(f"   - {note}")
                user['notifications'] = []
            client_dashboard(user)
            return

        attempts_used += 1
        remaining = max_attempts - attempts_used

        if remaining <= 0:
            print_error("🚫 Maximum login attempts reached.")
            break

        if not ask_retry_or_exit(remaining):
            print_info("Returning to main menu...\n")
            return

    print_error("Too many failed attempts. Returning to main menu.\n")

# ----------------------------------------------------------------------
# CLIENT: Dashboard and actions
# ----------------------------------------------------------------------
def client_dashboard(user):
    while True:
        section_header(f"* CLIENT MENU - {user['name']} *", color=C.MAGENTA)
        print(c("1.", C.BOLD), "Deposit")
        print(c("2.", C.BOLD), "Withdraw")
        print(c("3.", C.BOLD), "Quick Cash")
        print(c("4.", C.BOLD), "Balance Check")
        print(c("5.", C.BOLD), "Transfer Money")
        print(c("6.", C.BOLD), "Change Password")
        print(c("7.", C.BOLD), "View Account Details")
        print(c("8.", C.BOLD), "Transaction History")
        print(c("9.", C.BOLD), "Logout")
        divider()
        choice = input(c("Choose an option: ", C.YELLOW)).strip()

        if choice == '1':
            deposit(user)
        elif choice == '2':
            withdraw(user)
        elif choice == '3':
            quick_cash(user)
        elif choice == '4':
            balance_check(user)
        elif choice == '5':
            transfer_money(user)
        elif choice == '6':
            change_password(user)
        elif choice == '7':
            view_account_details(user)
        elif choice == '8':
            transaction_history(user)
        elif choice == '9':
            print_info("Logged out successfully.\n")
            break
        else:
            print_warning("⚠️  Invalid choice. Please select a valid option (1-9).")

def deposit(user):
    amount = get_valid_float("Enter amount to deposit: ₹")
    if amount < 0:
        print_error("❌ Cannot deposit a negative amount.")
        return
    user['balance'] += amount
    log_transaction(user, f"Deposit {format_currency(amount)}")
    print_success(f"✅ {format_currency(amount)} deposited successfully. New balance: {format_currency(user['balance'])}")

def withdraw(user):
    amount = get_valid_float("Enter amount to withdraw: ₹")
    if amount < 0:
        print_error("❌ Cannot withdraw a negative amount.")
        return
    if amount > user['balance']:
        print_error("❌ Insufficient balance. Please enter a smaller amount.")
        return
    user['balance'] -= amount
    log_transaction(user, f"Withdraw {format_currency(amount)}")
    print_success(f"✅ {format_currency(amount)} withdrawn successfully. New balance: {format_currency(user['balance'])}")

def quick_cash(user):
    options = [500, 1000, 2000, 5000]
    section_header("* QUICK CASH *", width=30, color=C.YELLOW)
    for i, amt in enumerate(options, 1):
        print(f"{i}. {amt}")
    print(f"{len(options) + 1}. Cancel")

    while True:
        choice = input(c("Select an option: ", C.YELLOW)).strip()
        if not choice.isdigit() or not (1 <= int(choice) <= len(options) + 1):
            print_warning("⚠️  Invalid choice. Try again.")
            continue

        choice = int(choice)
        if choice == len(options) + 1:
            return

        amount = options[choice - 1]
        if amount > user['balance']:
            print_error("❌ Insufficient balance for this quick cash option.")
            return

        user['balance'] -= amount
        log_transaction(user, f"Quick Cash {format_currency(amount)}")
        print_success(f"✅ {format_currency(amount)} dispensed successfully. New balance: {format_currency(user['balance'])}")
        return

def balance_check(user):
    divider()
    print(c(f"💰 Current Balance : {format_currency(user['balance'])}", C.GREEN + C.BOLD))
    divider()

def transfer_money(user):
    section_header("* TRANSFER MONEY *", width=30, color=C.BLUE)
    key = input(c("Enter receiver's username or account number: ", C.BLUE)).strip()
    receiver = find_client_by_key(key)

    if receiver is None:
        print_error("❌ Receiver not found.")
        return
    if receiver['username'] == user['username']:
        print_error("❌ You cannot transfer money to your own account.")
        return
    if receiver['status'] == 'frozen':
        print_error("❌ Receiver's account is frozen. Transfer cancelled.")
        return

    amount = get_valid_float("Enter amount to transfer: ₹")
    if amount > user['balance']:
        print_error("❌ Insufficient balance for this transfer.")
        return

    user['balance'] -= amount
    receiver['balance'] += amount
    log_transaction(user, f"Transfer {format_currency(amount)} to {receiver['name']}")
    log_transaction(receiver, f"Received {format_currency(amount)} from {user['name']}")
    print_success(f"✅ {format_currency(amount)} transferred to {receiver['name']} successfully. "
                  f"New balance: {format_currency(user['balance'])}")

def change_password(user):
    old = input(c("Enter current password: ", C.BLUE)).strip()
    if old != user['password']:
        print_error("❌ Incorrect current password.")
        return
    new = input(c("Enter new password (min 4 characters): ", C.BLUE)).strip()
    if len(new) < 4:
        print_warning("⚠️  Password too short. Not changed.")
        return
    user['password'] = new
    print_success("✅ Password changed successfully.")

def view_account_details(user):
    section_header("* ACCOUNT DETAILS *", width=30, color=C.CYAN)
    print(f"Account Number : {user['account_number']}")
    print(f"Name           : {user['name']}")
    print(f"Username       : {user['username']}")
    print(f"Status         : {user['status']}")
    print(f"Balance        : {format_currency(user['balance'])}")
    divider(width=30)

def transaction_history(user):
    section_header("* TRANSACTION HISTORY *", width=34, color=C.MAGENTA)
    if not user['history']:
        print_info("No transactions yet.")
        return
    for entry in user['history']:
        print(entry)
    divider(width=34)
def admin_login():
    section_header("* ADMIN LOGIN *", color=C.RED)
    max_attempts = 3
    attempts_used = 0

    while attempts_used < max_attempts:
        username = input(c("Admin Username: ", C.BLUE)).strip()
        password = input(c("Admin Password: ", C.BLUE)).strip()
        admin = find_user(username, role='admin')

        if admin and admin['password'] == password:
            print_success(f"\n✅ Welcome, {admin['name']}!")
            admin_dashboard()
            return

        attempts_used += 1
        remaining = max_attempts - attempts_used

        if remaining <= 0:
            print_error("🚫 Maximum login attempts reached.")
            break

        if not ask_retry_or_exit(remaining):
            print_info("Returning to main menu...\n")
            return

    print_error("Too many failed attempts. Returning to main menu.\n")

def admin_dashboard():
    while True:
        section_header("* ADMIN MENU *", color=C.RED)
        print(c("1.", C.BOLD), "View All Accounts")
        print(c("2.", C.BOLD), "Search User")
        print(c("3.", C.BOLD), "Check User Balance")
        print(c("4.", C.BOLD), "Deposit into User Account")
        print(c("5.", C.BOLD), "Withdraw from User Account")
        print(c("6.", C.BOLD), "Delete User")
        print(c("7.", C.BOLD), "Freeze / Unfreeze Account")
        print(c("8.", C.BOLD), "Notify User")
        print(c("9.", C.BOLD), "Logout")
        divider()
        choice = input(c("Choose an option: ", C.YELLOW)).strip()

        if choice == '1':
            view_all_accounts()
        elif choice == '2':
            search_user()
        elif choice == '3':
            check_user_balance()
        elif choice == '4':
            admin_deposit()
        elif choice == '5':
            admin_withdraw()
        elif choice == '6':
            delete_user()
        elif choice == '7':
            freeze_account()
        elif choice == '8':
            notify_user()
        elif choice == '9':
            print_info("Admin logged out.\n")
            break
        else:
            print_warning("⚠️  Invalid choice. Please select a valid option (1-9).")

def get_all_clients():
    return [u for u in users if u['role'] == 'client']

def view_all_accounts():
    clients = get_all_clients()
    section_header("* ALL ACCOUNTS *", width=50, color=C.BLUE)
    if not clients:
        print_info("No clients registered yet.")
        return
    print(c(f"{'Acc No':<10}{'Username':<15}{'Name':<20}{'Balance':<15}{'Status'}", C.BOLD))
    divider(width=70)
    for cl in clients:
        status_color = C.GREEN if cl['status'] == 'active' else C.RED
        print(f"{cl['account_number']:<10}{cl['username']:<15}{cl['name']:<20}"
              f"{format_currency(cl['balance']):<15}{c(cl['status'], status_color)}")

def prompt_for_client():
    key = input(c("Enter username or account number: ", C.BLUE)).strip()
    client = find_client_by_key(key)
    if client is None:
        print_error("❌ User not found.")
        return None
    return client

def search_user():
    section_header("* SEARCH USER *", width=30, color=C.CYAN)
    client = prompt_for_client()
    if client:
        print(f"Account No : {client['account_number']}")
        print(f"Username   : {client['username']}")
        print(f"Name       : {client['name']}")
        print(f"Balance    : {format_currency(client['balance'])}")
        print(f"Status     : {client['status']}")

def check_user_balance():
    section_header("* CHECK USER BALANCE *", width=34, color=C.GREEN)
    client = prompt_for_client()
    if client:
        print(f"Username : {client['username']}")
        print(f"Balance  : {format_currency(client['balance'])}")

def admin_deposit():
    section_header("* DEPOSIT TO USER *", width=30, color=C.GREEN)
    client = prompt_for_client()
    if client:
        amount = get_valid_float("Enter amount to deposit: ₹")
        client['balance'] += amount
        log_transaction(client, f"Admin deposited {format_currency(amount)}")
        print_success(f"✅ {format_currency(amount)} deposited. New balance: {format_currency(client['balance'])}")

def admin_withdraw():
    section_header("* WITHDRAW FROM USER *", width=32, color=C.RED)
    client = prompt_for_client()
    if client:
        amount = get_valid_float("Enter amount to withdraw: ₹")
        if amount > client['balance']:
            print_error("❌ Insufficient balance in user's account.")
            return
        client['balance'] -= amount
        log_transaction(client, f"Admin withdrew {format_currency(amount)}")
        print_success(f"✅ {format_currency(amount)} withdrawn. New balance: {format_currency(client['balance'])}")

def delete_user():
    section_header("* DELETE USER *", width=30, color=C.RED)
    client = prompt_for_client()
    if client:
        confirm = input(c(f"Are you sure you want to delete '{client['username']}'? (yes/no): ", C.YELLOW)).strip().lower()
        if confirm == 'yes':
            users.remove(client)
            print_success("✅ User account deleted successfully.")
        else:
            print_info("Deletion cancelled.")

def freeze_account():
    section_header("* FREEZE / UNFREEZE *", width=32, color=C.CYAN)
    client = prompt_for_client()
    if client:
        if client['status'] == 'active':
            client['status'] = 'frozen'
            print_warning(f"🔒 Account '{client['username']}' has been frozen. They will not be able to log in.")
        else:
            client['status'] = 'active'
            print_success(f"🔓 Account '{client['username']}' has been unfrozen.")

def notify_user():
    section_header("* NOTIFY USER *", width=30, color=C.MAGENTA)
    client = prompt_for_client()
    if client:
        message = input(c("Enter notification message: ", C.BLUE)).strip()
        client['notifications'].append(message)
        print_success("✅ Notification sent. The user will see it at their next login.")

# ----------------------------------------------------------------------
# MAIN MENU
# ----------------------------------------------------------------------
def main_menu():
    seed_admin()
    show_banner()
    while True:
        section_header("* WELCOME TO SUJAI BANK *", color=C.CYAN)
        print(c("1.", C.BOLD), "Login")
        print(c("2.", C.BOLD), "Signup")
        print(c("3.", C.BOLD), "Exit")
        divider()
        choice = input(c("Select an option: ", C.YELLOW)).strip()

        if choice == '1':
            login_menu()
        elif choice == '2':
            signup_menu()
        elif choice == '3':
            print_info("Thank you for using Sujai Bank. Goodbye! 👋")
            sys.exit()
        else:
            print_warning("⚠️  Invalid choice. Please select 1, 2, or 3.")

def login_menu():
    section_header("* LOGIN AS *", width=30, color=C.YELLOW)
    print("1. Client Login")
    print("2. Admin Login")
    print("3. Back")
    divider(width=30)
    choice = input(c("Select an option: ", C.YELLOW)).strip()

    if choice == '1':
        client_login()
    elif choice == '2':
        admin_login()
    elif choice == '3':
        return
    else:
        print_warning("⚠️  Invalid choice. Please select a valid option (1-3).")

if __name__ == "__main__":
    main_menu()