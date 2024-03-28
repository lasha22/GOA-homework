def num(numbers):
    num_negative = 0
    sum_positive = 0
    for num in numbers:
        if num < 0:
            num_negative += 1
        elif num > 0:
            sum_positive += num
    return num_negative, sum_positive


numbers_list = [1, -2, 3, -4, 5, -6, 7, -8]
num_negative, sum_positive = num(numbers_list)
print("Number of negative numbers:", num_negative)  
print("Sum of positive numbers:", sum_positive)  

