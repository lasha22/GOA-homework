
#დავალების პირობა: შექმენით სია სადაც გადასცემთ 10 ინტეგერს, შემდეგ გადაუარეთ ამ სიას და თითოეული მათგანი გაამრავლეთ/გაყეთ/დაუმატეთ/გამოაკელით ერთმანეთს. 

# Creating a list of 10 integers
numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

# Iterating through the list and performing operations
for num in numbers:
    # Multiplication
    result_multiply = num * 2
    print(f"{num} multiplied by 2 is {result_multiply}")

    # Division
    result_divide = num / 2
    print(f"{num} divided by 2 is {result_divide}")

    # Addition
    result_add = num + 5
    print(f"{num} plus 5 is {result_add}")

    # Subtraction
    result_subtract = num - 3
    print(f"{num} minus 3 is {result_subtract}")

    print("------------")
