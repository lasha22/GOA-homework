def calculate_list(numbers):
    total = 0
    for number in numbers:
        total += number
    print("The sum of the numbers in the list is:", total)


my_list = [4, 5, 7, 9, 11]
calculate_list(my_list)