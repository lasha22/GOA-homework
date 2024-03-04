name = input("Enter your name: ")
password = input("Enter your password: ")
repeat_password = input("Repeat your password: ")

if password != repeat_password:
    print("The password you entered does not match. Please try again.")
else:
    print("You have successfully registered.")
