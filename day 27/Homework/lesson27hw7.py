#შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვების სია. თქვენი დავალებაა, დააბრუნოთ ახალი სია, სადაც არ იქნება ლუწი რიცხვები.
def remove_even_numbers(input_list):
    result = []
    for num in input_list:
        if num % 2 != 0:
            result.append(num)
    return result


input_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(remove_even_numbers(input_list))