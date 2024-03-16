#მომხმარებელს შემოატანინეთ სახელი, გვარი, ასაკი და საცხოვრებელი ადგილი. თითოეული მათგანი append-ის გამოყენებით დაამატეთ სიაში. slicing-ის გამოყენებით 
  #დაბეჭდეთ 1: სახელი, გვარი, 2: გვარი, ასაკი, 3: სახელი, გვარი, ასაკი 4: გვარი, ასაკი, საცხოვრებელი ადგილი.



# Initialize an empty list
user_info = []

# Prompt the user to enter their first name, last name, age, and place of residence
first_name = input("Please enter your first name: ")
last_name = input("Please enter your last name: ")
age = input("Please enter your age: ")
residence = input("Please enter your place of residence: ")

# Add each piece of information to the list using append
user_info.append(first_name)
user_info.append(last_name)
user_info.append(age)
user_info.append(residence)

# Using slicing, print the requested combinations
print("1:", user_info[0], user_info[1])
print("2:", user_info[1], user_info[2])
print("3:", user_info[0], user_info[1], user_info[2])
print("4:", user_info[1], user_info[2], user_info[3])