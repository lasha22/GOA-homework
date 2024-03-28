def list(numbers):
    num1 = numbers[0]
    num2 = numbers[0]

    for number in numbers:
        if number < num1:
            num1 = number
        if number > num2:
            num2 = number

    print("The minimum number is:", num1)
    print("The maximum number is:", num2)

my_list = [66, 0, 232, 128, -1, 77]
list(my_list)
