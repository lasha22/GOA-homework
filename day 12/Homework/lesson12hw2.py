#მომხმარებელს შემოატანინეთ უარყოფითი რიცხვი. ამ რიცხვიდან 0-მდე არსებული ყველა უარყოფითი რიცხვი დაამატეთ სიაში და საბოლოოდ დაბეჭდეთ სია.

# Initialize an empty list
negative_numbers = []

# Prompt the user to enter a negative number
number = int(input("Please enter a negative number: "))

# Add all negative numbers from the input number to 0 to the list
for i in range(number, 0):
    negative_numbers.append(i)

# Print the list of negative numbers
print("List of negative numbers:", negative_numbers)
